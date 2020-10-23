import { SearchTerm } from "./SearchTerm";

// Actions

export const UPDATE_SEARCH = "UPDATE_SEARCH";

export interface searchByTerm {
  type: typeof UPDATE_SEARCH;
  searchTerm: string;
}

export type SearchActionTypes = searchByTerm;
