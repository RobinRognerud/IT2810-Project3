import { Dispatch } from "redux";
import { updateSkipAmount } from "./paginationDuck";

// ACTION
export const UPDATE_FILTER = "UPDATE_FILTER";

export interface updateFilterI {
  type: typeof UPDATE_FILTER;
  filter: string;
}

export type FilterActionType = updateFilterI;

// State
export interface FilterState {
  filter: string;
}

const defaultFilterState: FilterState = {
  filter: "",
};

// REDUCER
export const filterReducer = (
  state = defaultFilterState,
  action: FilterActionType
): FilterState => {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        filter: action.filter,
      };
    default:
      return state;
  }
};

// ACTION CREATOR
export const updateFilter = (filter: string) => {
  return (dispatch: Dispatch) => {
    dispatch({    
      type: UPDATE_FILTER,
      filter: filter,});
    dispatch(updateSkipAmount("", 0));
  };
  
};
