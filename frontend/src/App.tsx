import React, { useEffect } from "react";
import Main from "./components/Main";

import CountryDetail from "./components/CountryDetail";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store/rootStore";
import { GetCountry } from "./store/ducks/countryDuck";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootStore) => state.countryReducer);
  const search = useSelector((state: RootStore) => state.searchReducer);
  const skip = useSelector((state: RootStore) => state.paginationReducer);
  const detailedView = useSelector(
    (state: RootStore) => state.detailedViewReducer
  );

  useEffect(() => {
    dispatch(
      GetCountry(search.searchTerm, detailedView.countryName, skip.skipAmount)
    );
  }, [skip, search, detailedView]);

  return (
    <div className="App">
      <Header />
      {detailedView.show ? <CountryDetail /> : <Main />}
    </div>
  );
}

export default App;
