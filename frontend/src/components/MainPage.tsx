import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { RootStore } from "../store/rootStore";
import { GetCountry } from "../store/country/CountryAction";
import CountryCard from "./CountryCard";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const [countryName, setCountryName] = useState("");
  const countryState = useSelector((state: RootStore) => state.countryReducer);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCountryName(event.target.value);
  const handleSubmit = () => dispatch(GetCountry('population', 'DESC'));

  console.log("country state", countryState);

 /*useEffect(() => {
    dispatch(GetCountry());
  }, [countryName]);*/

  function generateCountriesBySearch() {
    const items = countryState.countries
      .filter((country) => {
        if (countryName == null) return country;
        else if (
          country.name.toLowerCase().includes(countryName.toLowerCase()) ||
          country.capital.toLowerCase().includes(countryName.toLowerCase())
        ) {
          return country;
        }
      })
      .slice(0, 8)
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
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      <div>
        {countryState.countries.length !== 0 ? (
          generateCountriesBySearch()
        ) : (
          <p>{countryState.error}</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
