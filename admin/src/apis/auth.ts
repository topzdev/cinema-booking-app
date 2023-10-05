import { User } from "next-auth";
import { apiUrl, appFetch } from ".";

const login = (options: RequestInit | undefined) => {
  return appFetch(`/auth/login`, options);
};

const getCSRFCookie = () => {
  return fetch(`${apiUrl}/sanctum/csrf-cookie`, {
    method: "GET",
  });
};

const authAPI = {
  login,
  getCSRFCookie,
};

export default authAPI;
