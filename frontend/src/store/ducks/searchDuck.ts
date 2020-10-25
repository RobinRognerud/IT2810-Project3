import { updateSkipAmount } from "./paginationDuck";

// Actions
export const UPDATE_SEARCH = "UPDATE_SEARCH";

export interface searchByTerm {
  type: typeof UPDATE_SEARCH;
  searchTerm: string;
}

export type SearchActionTypes = searchByTerm;

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
  /* const dispatch = useDispatch(); */
  return (dispatch: React.Dispatch<any>) => {
    dispatch({
      type: UPDATE_SEARCH,
      searchTerm: searchTerm,
    });
    dispatch(updateSkipAmount("", 0));
  };
};
