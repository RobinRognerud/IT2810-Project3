import React from "react";

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
      .map((info) =>
        info.currencies.map((currency) => (
          <CountryCard
            name={info.name}
            capital={info.capital}
            flagURL={info.flag}
            currencyName={currency.name}
          />
        ))
      );
    return items;
  }

  return (
    <div>
      <div>
        {countryState.loading ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : countryState.countries.length !== 0 ? (
          generateCountriesBySearch()
        ) : (
          <p>{countryState.error}</p>
        )}
      </div>
    </div>
  );
};

export default CountryCardContainer;
