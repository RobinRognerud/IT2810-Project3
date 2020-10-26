import Axios from "axios";
//Action

import { Dispatch } from "redux";

export const UPDATE_LIKE = "UPDATE_LIKE";

export interface updateLike {
  type: typeof UPDATE_LIKE;
  updated: boolean;
}

export type LikeActionTypes = updateLike;

//STATE

export interface LikeState {
  updated: boolean;
}

const defaultState: LikeState = {
  updated: false,
};

//Reducer
export const updateLikeReducer = (
  state = defaultState,
  action: LikeActionTypes
): LikeState => {
  switch (action.type) {
    case UPDATE_LIKE:
      return {
        updated: action.updated,
      };
    default:
      return state;
  }
};

//Action creator
//Send a put request to backend, which will increment "like" with 1
export function updateLike(countryName = "") {
  return async (dispatch: Dispatch) => {
    try {
      await Axios.put(`http://localhost:4000/countries/${countryName}`)
        .then(() => dispatch({ type: UPDATE_LIKE, updated: true }))
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };
}
