import { LoginForm } from "@/components/pages/login/LoginForm";
import AppBaseApi from "./AppBaseApi";
import { apiUrl } from ".";

class AuthenticationService extends AppBaseApi {
  public async login(credentials: LoginForm) {
    return this.post(`/${this.routeName}/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
  }

  public async getCSRFCookie() {
    return fetch(`${apiUrl}/sanctum/csrf-cookie`);
  }

  public async logout() {
    return this.post(`/${this.routeName}/logout`);
  }

  public async user() {
    return this.get(`/${this.routeName}/auth/user`);
  }
}

export default AuthenticationService;
