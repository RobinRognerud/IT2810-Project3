import { Dispatch } from "redux";
import { updateSkipAmount } from "./paginationDuck";

// Actions
export const UPDATE_SEARCH = "UPDATE_SEARCH";

export interface updateSearchI {
  type: typeof UPDATE_SEARCH;
  searchTerm: string;
}

export type SearchActionTypes = updateSearchI;

//State
export interface SearchState {
  searchTerm: string;
}

const defaultState: SearchState = {
  searchTerm: "",
};

//Reducer
export const searchReducer = (
  state = defaultState,
  action: SearchActionTypes
): SearchState => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
};

// Actions creator
export const updateSearch = (searchTerm: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: UPDATE_SEARCH,
      searchTerm: searchTerm,
    });
    dispatch(updateSkipAmount("", 0));
  };
};
