"use client";
import { AuthUser } from "@/types/next-auth";
import { useSession } from "next-auth/react";

const useAppAuth = () => {
  const { data, ...session } = useSession();

  const user = data?.user as AuthUser;

  return {
    user,
    ...session,
  };
};

export default useAppAuth;
