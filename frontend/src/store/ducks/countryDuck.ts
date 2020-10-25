import { Dispatch } from "redux";
import axios from "axios";

//Country type
interface Currencies {
  name: string;
  code: string;
  symbol: string;
}

interface Languages {
  name: string;
  nativeName: string;
}

export interface Country {
  name: string;
  capital: string;
  region: string;
  flag: string;
  readonly currencies: Currencies[];
  languages: Languages[];
  population: number;
  area: number;
}

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
  error: string;
}

export type CountryActionTypes =
  | fetchCountryRequest
  | fetchCountrySucess
  | fetchCountryFailure;

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

//Reducer
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
        error: "Country loading error, check if backend is connected properly",
      };
    default:
      return state;
  }
};

//Action creator
export function GetCountry(search = "", countryName = "", skipAmount = 0) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: FETCH_COUNTRY_REQUEST,
        loading: true,
      });

      const searchOrDetail = (search: string, countryName: string) => {
        if (countryName !== "") {
          return `&name=${countryName}`;
        } else {
          return search ? `&name=${search}` : "";
        }
      };
      const skip = skipAmount ? `${skipAmount}` : 0;
      const filter = searchOrDetail(search, countryName);
      const res = await axios.get(
        `http://localhost:4000/countries/?skip=${skip + filter}`
      );

      dispatch({
        type: FETCH_COUNTRY_SUCCESS,
        countries: res.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: FETCH_COUNTRY_FAILURE,
      });
    }
  };
}
