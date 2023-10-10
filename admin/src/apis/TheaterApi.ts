import { TheaterForm } from "@/app/(auth)/theater/types";
import { PaginationParams, appFetch } from "./index";
import Theater from "@/models/Theater";
import AppBaseApi from "./AppBaseApi";
import objectToQueryString from "@/utils/objectToQueryString";

class TheaterApi extends AppBaseApi {
  public getTheaters(pagination: PaginationParams) {
    return appFetch(`/${this.routeName}?${objectToQueryString(pagination)}`);
  }

  public getOneTheater(id: string) {
    return appFetch(`/${this.routeName}/${id}`);
  }

  public addTheater(body: TheaterForm): Promise<Theater> {
    return appFetch(`/${this.routeName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  public updateTheater(id: string, body: TheaterForm) {
    return appFetch(`/${this.routeName}/${id}?_method=PUT`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  public deleteTheater(id: string) {
    return appFetch(`/${this.routeName}/${id}`, {
      method: "DELETE",
    });
  }
}

export default TheaterApi;
