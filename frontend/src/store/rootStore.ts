import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { createLogger } from "redux-logger";

import { countryReducer } from "./country/CountryReducer";
import { AppActions } from "./models/actions";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();

export const rootReducer = combineReducers({ countryReducer });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, {}, {}>(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
  )
);

/* store.dispatch(GetCountry()); */

export type RootStore = ReturnType<typeof rootReducer>;
