export const UPDATE_SORT = "UPDATE_SORT";



// ACTION
export interface fetchSortedCountries {
    type: typeof UPDATE_SORT;
    sort: string;
    asc: boolean;
}

export type SortActionType = fetchSortedCountries;
 
// State
export interface SortState {
    sort: string;
    asc: boolean;
}

const defaultSortState: SortState = {
    sort: "",
    asc: true
};

// REDUCER
export const sortReducer = (
state = defaultSortState,
action: SortActionType
): SortState => {
    switch (action.type) {
      case UPDATE_SORT:
        return {
          sort: 'name',
          asc: true
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
        asc: asc
    }
}

