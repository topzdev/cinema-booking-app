import authAPI from "@/apis/auth";
import { LoginForm } from "@/components/pages/login/LoginForm";
import { AuthOptions } from "next-auth/core/types";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},

      async authorize(credentials: any, req) {
        await authAPI.getCSRFCookie();

        const data = {
          email: credentials?.email,
          password: credentials?.password,
        };

        try {
          const response = await authAPI.login(data);

          console.log(response);

          if (response.errors) {
            throw response;
          }

          return response;
        } catch (error: any) {
          throw error;
        }
      },
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (user) {
        token.user = user;
        token.accessToken = user.access_token;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token.access_token;
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
