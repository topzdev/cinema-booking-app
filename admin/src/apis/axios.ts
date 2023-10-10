import axios from "axios";
import { getSession } from "next-auth/react";
import { cookies } from "next/headers";

const baseURL = process.env.NEXT_PUBLIC_API_URL,
  isServer = typeof window === "undefined";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  // const session = await getSession();
  // // const session = await getServerSession(authOptions);

  // const accessToken = session?.accessToken;
  // const csrf = session?.csrf;

  // config.headers["Authorization"] = `Bearer ${accessToken}`;
  // config.headers["X-CSRF-TOKEN"] = csrf;
  // config.data["_token"] = csrf;
  // // cookies().set()

  return config;
});

export default api;
