export const UPDATE_SORT = "UPDATE_SORT";



// ACTION
export interface fetchSortedCountries {
    type: typeof UPDATE_SORT;
    sort: string;

}

export type SortActionType = fetchSortedCountries;
 
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
}

// ACTION CREATOR
export const updateSort = (sort: string, asc: boolean) => {
   
    return {
        type: UPDATE_SORT,
        sort: sort,

    }
}

