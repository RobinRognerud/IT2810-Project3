import React, { useEffect } from "react";
import Main from "./components/Main";

import CountryDetail from "./components/CountryDetail";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store/rootStore";
import { GetCountry } from "./store/country/CountryAction";

interface IAppProps {}

function App() {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootStore) => state.countryReducer);
  const search = useSelector((state: RootStore) => state.searchReducer);

  useEffect(() => {
    dispatch(GetCountry(search.searchTerm));
  }, [search]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/CountryDetail" component={CountryDetail} exact />
        <Main />
      </Switch>
    </div>
  );
}

export default App;
