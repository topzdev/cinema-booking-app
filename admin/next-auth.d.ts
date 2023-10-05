import { JWT, Session, User } from "next-auth";

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  phone: string | null;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

declare module "next-auth" {
  interface Session {
    accessToken: string;
    user: {
      id: string;
      accessToken: string;
    } & Session["user"];
  }
  type User = User;
  interface JWT {
    access_token: string;
  }
}
