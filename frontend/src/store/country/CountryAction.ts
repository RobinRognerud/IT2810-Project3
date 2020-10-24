import { ActionCreator, Dispatch } from "redux";

import axios from "axios";
import {
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_FAILURE,
  CountryActionTypes,
} from "./models/actions";

import { CountryState } from "./CountryReducer";
import { ThunkAction } from "redux-thunk";

/* export const GetCountry: ActionCreator<ThunkAction<
  Promise<any>,
  CountryState,
  null,
  CountryActionTypes
>> = (search = "") => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: FETCH_COUNTRY_REQUEST,
        loading: true,
      });

      const searchTerm = search ? `?name=${search}` : "";
      console.log(search);
      console.log(typeof search);
      console.log(searchTerm);
      const res = await axios.get(
        `http://localhost:4000/countries/${searchTerm}`
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
}; */

export function GetCountry(search = "", countryName = "") {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: FETCH_COUNTRY_REQUEST,
        loading: true,
      });

      const searchOrDetail = (search: string, countryName: string) => {
        if (countryName != "") {
          return `?name=${countryName}`;
        } else {
          return search ? `?name=${search}` : "";
        }
      };
      const filter = searchOrDetail(search, countryName);
      const res = await axios.get(`http://localhost:4000/countries/${filter}`);

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
