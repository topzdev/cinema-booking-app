import { PaginationParams, appFetch, objectToQueryString } from "./index";

export const getCinemas = (pagination: PaginationParams) => {
  return appFetch(`/cinema?${objectToQueryString(pagination)}`);
};
