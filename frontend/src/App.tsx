import React, { useEffect } from "react";
import Main from "./components/Main";

import CountryDetail from "./components/CountryDetail";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store/rootStore";
import { GetCountry } from "./store/ducks/countryDuck";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const search = useSelector((state: RootStore) => state.searchReducer);
  const skip = useSelector((state: RootStore) => state.paginationReducer);
  const like = useSelector((state: RootStore) => state.updateLikeReducer);
  const detailedView = useSelector(
    (state: RootStore) => state.detailedViewReducer
  );

  function detialOrMain() {
    if (detailedView.show) {
      return 0;
    } else {
      return skip.skipAmount;
    }
  }

  useEffect(() => {
    dispatch(
      GetCountry(search.searchTerm, detailedView.countryName, detialOrMain())
    );
  }, [skip, search, detailedView, like]);

  return (
    <div className="App">
      <Header />
      {detailedView.show ? <CountryDetail /> : <Main />}
    </div>
  );
}

export default App;
