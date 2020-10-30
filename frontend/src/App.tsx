import React, { useEffect } from "react";
import Main from "./components/Main";

import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store/rootStore";
import { getCountry } from "./store/ducks/countryDuck";
import Header from "./components/Header";
import CountryCardDetailed from "./components/CountryCardDetail";

function App() {
  const dispatch = useDispatch();
  const search = useSelector((state: RootStore) => state.searchReducer);
  const skip = useSelector((state: RootStore) => state.paginationReducer);
  const like = useSelector((state: RootStore) => state.likeReducer);
  const sort = useSelector((state: RootStore) => state.sortReducer);
  const filter = useSelector((state: RootStore) => state.filterReducer);
  const detailedView = useSelector(
    (state: RootStore) => state.detailedViewReducer
  );

  //If detaildView.shown is true, CountryCardDetailed should be shown,
  //then only one country is returned and the skipAmount has to be 0
  function detialOrMain() {
    if (detailedView.show) {
      return 0;
    } else {
      return skip.skipAmount;
    }
  }

  useEffect(() => {
    dispatch(
      getCountry(
        search.searchTerm,
        detailedView.countryName,
        detialOrMain(),
        sort.sort,
        filter.filter
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, search, detailedView, like, sort, filter]);

  return (
    <div className="App container">
      <Header />
      {detailedView.show ? <CountryCardDetailed /> : <Main />}
    </div>
  );
}

export default App;
