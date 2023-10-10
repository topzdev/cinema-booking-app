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
  access_token: string;
};

declare module "next-auth" {
  interface User {
    user: AuthUser;
    access_token: string;
  }
}

declare module "next-auth/core/types" {
  interface Session {
    user: AuthUser;
    access_token: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    user: AuthUser;
    access_token: string;
  }
}
