import { User } from "next-auth";
import { apiUrl, appFetch } from ".";
import { LoginForm } from "@/components/pages/login/LoginForm";

const login = (credentials: LoginForm) => {
  return appFetch(`/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};

const getCSRFCookie = () => {
  return fetch(`${apiUrl}/sanctum/csrf-cookie`, {
    method: "GET",
  });
};

const logout = () => {
  return appFetch(`/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const user = () => {
  return appFetch(`/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const authAPI = {
  login,
  getCSRFCookie,
  logout,
  user,
};

export default authAPI;
