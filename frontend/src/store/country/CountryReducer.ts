import {
  CountryActionTypes,
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_FAILURE,
} from "./models/actions";

import { Country } from "./models/Country";

export interface CountryState {
  loading: boolean;
  readonly countries: Country[];
  error: string;
}

const defaultState: CountryState = {
  loading: false,
  countries: [],
  error: "",
};

export const countryReducer = (
  state = defaultState,
  action: CountryActionTypes
): CountryState => {
  switch (action.type) {
    case FETCH_COUNTRY_REQUEST:
      return {
        loading: true,
        countries: [],
        error: "",
      };
    case FETCH_COUNTRY_SUCCESS:
      return {
        loading: false,
        countries: action.countries,
        error: "",
      };
    case FETCH_COUNTRY_FAILURE:
      return {
        loading: false,
        countries: [],
        error: "Something went wrong",
      };
    default:
      return state;
  }
};
