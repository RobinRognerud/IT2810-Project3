import React from "react";

import { useSelector } from "react-redux";

import { RootStore } from "../store/rootStore";
import CountryCard from "./CountryCard";

const CountryCardContainer: React.FC = () => {
  const countryState = useSelector((state: RootStore) => state.countryReducer);

  //Map all country values into CountryCard as props
  function generateCountries() {
    const items = countryState.countries.map((info) => (
      <CountryCard
        name={info.name}
        capital={info.capital}
        flagURL={info.flag}
        region={info.region}
        population={info.population}
      />
    ));
    return items;
  }

  return (
    <div className="main">
      {countryState.loading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : countryState.countries.length !== 0 ? (
        <div className="card bg-ligth ">
          <div className="row">{generateCountries()}</div>
        </div>
      ) : countryState.error ? (
        <p>{countryState.error}</p>
      ) : (
        <p>Sorry! No countries match your criteria, try something else</p>
      )}
    </div>
  );
};

export default CountryCardContainer;
