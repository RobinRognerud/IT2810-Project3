import { CountryActionTypes } from "../ducks/countryDuck";
import { SearchActionTypes } from "../ducks/searchDuck";
import { PaginationActionTypes } from "../ducks/paginationDuck";
import { DetailedActionTypes } from "../ducks/detailedCountry";
import { SortActionType } from "../ducks/sortDuck";
import { FilterActionType } from "../ducks/filterDuck";

export type AppActions =
  | CountryActionTypes
  | SearchActionTypes
  | PaginationActionTypes
  | DetailedActionTypes
  | SortActionType
  | FilterActionType;
