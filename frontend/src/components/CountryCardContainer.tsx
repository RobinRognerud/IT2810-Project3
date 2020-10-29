import React from "react";

import { useSelector } from "react-redux";

import { RootStore } from "../store/rootStore";
import CountryCard from "./CountryCard";

const CountryCardContainer: React.FC = () => {
  const countryState = useSelector((state: RootStore) => state.countryReducer);

  //Map all country values into CountryCard as props
  function generateCountriesBySearch() {
    const items = countryState.countries.map((info) => (
      <CountryCard
        name={info.name}
        capital={info.capital}
        flagURL={info.flag}
        region={info.region}
      />
    ));
    return items;
  }

  return (
    <div>
      {countryState.loading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : countryState.countries.length !== 0 ? (
        <div className="card bg-ligth md-5">
          <div className="conteiner">
            <div className="row md-2 mt-4">{generateCountriesBySearch()}</div>
          </div>
        </div>
      ) : (
        <p>{countryState.error}</p>
      )}
    </div>
  );
};

export default CountryCardContainer;
