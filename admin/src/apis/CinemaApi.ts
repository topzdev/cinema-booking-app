import { CinemaForm } from "@/app/(auth)/cinema/types";
import { PaginationParams } from ".";
import AppBaseApi from "./AppBaseApi";
import Cinema from "@/models/Cinema";
import objectToQueryString from "@/utils/objectToQueryString";

class CinemaApi extends AppBaseApi {
  public async getCinemas(pagination: PaginationParams) {
    return this.get(`/cinema?${objectToQueryString(pagination)}`);
  }

  public async getOneCinema(id: string) {
    return this.get(`/cinema/${id}`);
  }

  public async addCinema(body: CinemaForm): Promise<Cinema> {
    console.log(body);
    return this.post(`/cinema`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  public async updateCinema(id: string, body: CinemaForm) {
    return this.put(`/cinema/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  public async deleteCinema(id: string) {
    return this.delete(`/cinema/${id}`, {
      method: "DELETE",
    });
  }
}

export default CinemaApi;
