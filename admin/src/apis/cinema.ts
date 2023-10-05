import { Cinema, CinemaForm } from "@/app/(auth)/cinema/types";
import { PaginationParams, appFetch, objectToQueryString } from "./index";

const getCinemas = (pagination: PaginationParams) => {
  return appFetch(`/cinema?${objectToQueryString(pagination)}`);
};

const getOneCinema = (id: string) => {
  return appFetch(`/cinema/${id}`);
};

const addCinema = (body: CinemaForm): Promise<Cinema> => {
  return appFetch(`/cinema`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const updateCinema = (id: string, body: CinemaForm) => {
  return appFetch(`/cinema/${id}?_method=PUT`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const deleteCinema = (id: string) => {
  return appFetch(`/cinema/${id}`, {
    method: "DELETE",
  });
};

export const cinemaAPI = {
  getCinemas,
  getOneCinema,
  addCinema,
  updateCinema,
  deleteCinema,
};
