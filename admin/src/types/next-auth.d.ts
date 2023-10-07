export type AuthUser = {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  initials: string;
  phone: string | null;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

declare module "next-auth" {
  interface User extends AuthUser {
    access_token: string;
  }
  interface Session {
    accessToken: string;
    user: User;
  }
  interface JWT {
    access_token: string;
  }
}
