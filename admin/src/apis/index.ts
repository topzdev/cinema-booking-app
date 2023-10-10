import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import TheaterApi from "./TheaterApi";
import CinemaApi from "./CinemaApi";

export type PaginationParams = {
  page: number;
  per_page: number;
  q: string;
};

export type PaginationData<T> = {
  data: T[];
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
};

export const apiUrl = "http://127.0.0.1:8000";

let session: any,
  token: any = null;

export const appFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
  method?: string
) => {
  if (!session) {
    console.log("Fetching again...");
    session = await getSession();
  }
  token = session?.user ? session.access_token : null;

  return fetch(apiUrl + "/api" + input, {
    ...init,
    method,
    credentials: "include",
    headers: {
      ...init?.headers,
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
};

const apiServices = {
  theater: new TheaterApi("theater", appFetch),
  cinema: new CinemaApi("cinema", appFetch),
};

export default apiServices;
