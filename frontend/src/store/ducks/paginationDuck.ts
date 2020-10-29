// Actions
export const UPDATE_SKIPAMOUNT = "UPDATE_SKIPAMOUNT";

export interface updateSkipAmountI {
  type: typeof UPDATE_SKIPAMOUNT;
  skipAmount: number;
}

export type PaginationActionTypes = updateSkipAmountI;

//State
export interface skipAmountState {
  skipAmount: number;
}

const defaultState: skipAmountState = {
  skipAmount: 0,
};

//Reducer
export const paginationReducer = (
  state = defaultState,
  action: PaginationActionTypes
): skipAmountState => {
  switch (action.type) {
    case UPDATE_SKIPAMOUNT:
      return {
        skipAmount: action.skipAmount,
      };
    default:
      return state;
  }
};

//Contains the skipAmount so we can make changes to it before returned
let skipAmount = 0;
// Actions creator
export const updateSkipAmount = (
  skipDirection: string,
  countryStateLength: number
) => {
  function checkSkipAmount(skipDirection: string) {
    if (skipDirection === "prev" && skipAmount === 0) {
      return (skipAmount = 0);
    } else if (skipDirection === "prev") {
      return (skipAmount = skipAmount - 9);
    } else if (skipDirection === "next" && countryStateLength < 9) {
      return skipAmount;
    } else if (skipDirection === "next") {
      return (skipAmount = skipAmount + 9);
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
