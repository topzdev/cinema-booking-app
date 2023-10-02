export type PaginationParams = {
  page: number;
  per_page: number;
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

let apiUrl = "http://127.0.0.1:8000/api";

export const appFetch = (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => fetch(apiUrl + input, init).then((data) => data.json());

export const objectToQueryString = (obj: any) => {
  const queryString = Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
  return queryString;
};