import { Dispatch } from "redux";
import { updateSkipAmount } from "./paginationDuck";

// ACTIONS
export const UPDATE_SORT = "UPDATE_SORT";

export interface updateSortI {
  type: typeof UPDATE_SORT;
  sort: string;
}

export type SortActionType = updateSortI;

// State
export interface SortState {
  sort: string;
}

const defaultSortState: SortState = {
  sort: "",
};

// REDUCER
export const sortReducer = (
  state = defaultSortState,
  action: SortActionType
): SortState => {
  switch (action.type) {
    case UPDATE_SORT:
      return {
        sort: action.sort,
      };
    default:
      return state;
  }
};

// ACTION CREATOR
export const updateSort = (sort: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ 
      type: UPDATE_SORT,
      sort: sort});
    dispatch(updateSkipAmount("", 0));
  };
};
