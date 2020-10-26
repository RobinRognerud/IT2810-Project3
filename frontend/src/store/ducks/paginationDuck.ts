// Actions
export const UPDATE_SKIPAMOUNT = "UPDATE_SKIPAMOUNT";

export interface pagination {
  type: typeof UPDATE_SKIPAMOUNT;
  skipAmount: number;
}

export type PaginationActionTypes = pagination;

export interface paginationState {
  skipAmount: number;
}

const defaultState: paginationState = {
  skipAmount: 0,
};

//Reducer
export const paginationReducer = (
  state = defaultState,
  action: PaginationActionTypes
): paginationState => {
  switch (action.type) {
    case UPDATE_SKIPAMOUNT:
      return {
        skipAmount: action.skipAmount,
      };
    default:
      return state;
  }
};

let skipAmount = 0;
// Actions creator
export const updateSkipAmount = (
  skipDirection: string,
  countryStateLength: number
) => {
  /* let skipAmount = defaultState.skipAmount; */
  function checkSkipAmount(skipDirection: string) {
    console.log(skipAmount);
    console.log(countryStateLength);
    console.log(skipDirection);
    if (skipDirection === "prev" && skipAmount === 0) {
      return (skipAmount = 0);
    } else if (skipDirection === "prev") {
      return (skipAmount = skipAmount - 9);
    } else if (skipDirection === "next" && countryStateLength < 9) {
      return skipAmount;
    } else if (skipDirection === "next") {
      return (skipAmount = skipAmount + 9);
    } else if (skipDirection === "back") {
      console.log("Back skip", skipAmount);
      return skipAmount;
    } else {
      return (skipAmount = 0);
    }
  }

  checkSkipAmount(skipDirection);

  return {
    type: UPDATE_SKIPAMOUNT,
    skipAmount: skipAmount,
  };
};
