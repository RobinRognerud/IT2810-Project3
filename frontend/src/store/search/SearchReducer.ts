import { SearchActionTypes, UPDATE_SEARCH } from "./models/actions";

import { SearchTerm } from "./models/SearchTerm";

export interface SearchState {
  searchTerm: string;
}

const defaultState: SearchState = {
  searchTerm: "",
};

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
