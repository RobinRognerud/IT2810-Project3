import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { RootStore } from "../store/rootStore";
import CountryCard from "./CountryCard";

const CountryCardContainer: React.FC = () => {
  const dispatch = useDispatch();
  const countryState = useSelector((state: RootStore) => state.countryReducer);

  console.log("country state", countryState);

  function generateCountriesBySearch() {
    const items = countryState.countries
      .slice(0, 9)
      .map((info) => (
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
        <h1>Loading</h1>
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
