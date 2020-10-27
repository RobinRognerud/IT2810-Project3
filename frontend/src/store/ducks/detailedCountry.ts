// Actions

export const SHOW_DETAILED_VIEW = "SHOW_DETAILED_VIEW";
export const HIDE_DETAILED_VIEW = "HIDE_DETAILED_VIEW";

export interface showDetailedView {
  type: typeof SHOW_DETAILED_VIEW;
  countryName: string;
  show: boolean;
}
export interface hideDetailedView {
  type: typeof HIDE_DETAILED_VIEW;
  countryName: string;
  show: boolean;
}

export type DetailedActionTypes = showDetailedView | hideDetailedView;

//State
export interface DetailedState {
  countryName: string;
  show: boolean;
}

const defaultState: DetailedState = {
  countryName: "",
  show: false,
};

//REDUCER
export const detailedViewReducer = (
  state = defaultState,
  action: DetailedActionTypes
): DetailedState => {
  switch (action.type) {
    case SHOW_DETAILED_VIEW:
      return {
        countryName: action.countryName,
        show: true,
      };
    case HIDE_DETAILED_VIEW:
      return {
        countryName: "",
        show: false,
      };
    default:
      return state;
  }
};

//ACTIONS CREATOR
export const showDetailedView = (countryName: string) => {
  return {
    type: SHOW_DETAILED_VIEW,
    countryName: countryName,
    show: true,
  };
};

export const hideDetailedView = () => {
  return {
    type: HIDE_DETAILED_VIEW,
    countryName: "",
    show: false,
  };
};
