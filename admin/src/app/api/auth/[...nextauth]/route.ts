import { LoginForm } from "@/components/pages/login/LoginForm";
import { AuthOptions } from "next-auth/core/types";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import apiServices from "@/apis";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},

      async authorize(credentials: any) {
        await apiServices.auth.getCSRFCookie();

        const data = {
          email: credentials?.email,
          password: credentials?.password,
        };

        const response = await apiServices.auth.login(data);
        console.log(response);

        if (response.errors) {
          throw response.message;
        }

        return response;
      },
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }) {
      console.log(token);
      if (user) {
        token.user = user.user;
        token.access_token = user.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.access_token = token.access_token;
      session.user = token.user;
      return session;
    },
  },

  events: {
    signOut: () => {
      return apiServices.auth.logout();
    },
  },

  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
