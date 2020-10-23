import { Dispatch } from "redux";

import { UPDATE_SEARCH } from "./models/actions";

export const updateSearch = (searchTerm: string) => {
  return {
    type: UPDATE_SEARCH,
    searchTerm: searchTerm,
  };
};
