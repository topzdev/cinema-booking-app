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
  })
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
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
