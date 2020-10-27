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
  likes: number;
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

//State
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

/**
 *
 * @param searchTerm is a string that specify what the returned countrys name should contain
 * @param countryName is the name of the specific country that should be shown in detaildCountryCard
 * @param skipAmount is the number of results that should be skipped
 * @param sortParam specifies how the countries should be sorted
 * @param filter specifies by which region the countries should be filtered
 */
//Action creator
export function GetCountry(
  searchTerm = "",
  countryName = "",
  skipAmount = 0,
  sortParam = "",
  filter = ""
) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: FETCH_COUNTRY_REQUEST,
        loading: true,
      });

      //If countryName has a value it means that the detialedCountryCard will be shown and
      //we return the name of the specific country
      //if not we return the search parameter if it is set, else empty string
      const searchOrDetail = (search: string, countryName: string) => {
        if (countryName !== "") {
          return `&name=${countryName}`;
        } else {
          return search ? `&name=${search}` : "";
        }
      };

      const sort = sortParam ? `&sort=${sortParam}` : "";
      const filterByRegion = filter ? `&filter=${filter}` : " ";
      const skip = skipAmount ? `${skipAmount}` : 0;
      const filterByName = searchOrDetail(searchTerm, countryName);
      const res = await axios.get(
        `http://localhost:4000/countries/?skip=${
          skip + filterByName + sort + filterByRegion
        }`
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
