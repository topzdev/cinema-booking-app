import { Session } from "next-auth/core/types";
import { getSession } from "next-auth/react";

class AppBaseApi {
  public routeName: string = "";
  private appFetch: any;

  constructor(routeName: string, client: any) {
    this.routeName = routeName;
    this.appFetch = client;
  }

  public async get(url: RequestInfo | URL, init?: RequestInit | undefined) {
    return this.appFetch(url, init, "GET");
  }

  public async post(url: RequestInfo | URL, init?: RequestInit | undefined) {
    return this.appFetch(url, init, "POST");
  }

  public async put(url: RequestInfo | URL, init?: RequestInit | undefined) {
    return this.appFetch(url + "?_method=PUT", init, "POST");
  }

  public async delete(url: RequestInfo | URL, init?: RequestInit | undefined) {
    return this.appFetch(url, init, "DELETE");
  }
}

export default AppBaseApi;
