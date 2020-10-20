import { Country } from "./Country";
// Actions
export const FETCH_COUNTRY_REQUEST = "FETCH_COUNTRY_REQUEST";
export const FETCH_COUNTRY_SUCCESS = "FETCH_COUNTRY_SUCCESS";
export const FETCH_COUNTRY_FAILURE = "FETCH_COUNTRY_FAILURE";

export interface fetchCountryRequest {
  type: typeof FETCH_COUNTRY_REQUEST;
}
export interface fetchCountrySucess {
  type: typeof FETCH_COUNTRY_SUCCESS;
  countries: Country[];
}
export interface fetchCountryFailure {
  type: typeof FETCH_COUNTRY_FAILURE;
}

export type CountryActionTypes =
  | fetchCountryRequest
  | fetchCountrySucess
  | fetchCountryFailure;
