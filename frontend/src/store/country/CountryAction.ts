import { Action, ActionCreator, Dispatch } from "redux";

import axios from "axios";
import {
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_FAILURE,
} from "./models/actions";



export function GetCountry(sort = '', asc = '') {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: FETCH_COUNTRY_REQUEST,
      });

      const sortString = sort ? `?sort=${sort}` : '';
      const orderString = asc ? `${asc}` : '';

      const res = await axios.get(`http://localhost:4000/countries/${sortString+orderString}`);

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