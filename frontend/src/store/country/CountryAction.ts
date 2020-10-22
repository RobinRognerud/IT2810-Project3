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

export const GetCountry: ActionCreator<ThunkAction<
  Promise<any>,
  CountryState,
  null,
  CountryActionTypes
>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: FETCH_COUNTRY_REQUEST,
      });

      const res = await axios.get(`http://localhost:4000/countries/`, {
        params: {
          _limit: 10,
        },
      });

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
};
