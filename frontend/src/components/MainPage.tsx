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
  const handleSubmit = () => dispatch(GetCountry());

  console.log("country state", countryState);

  useEffect(() => {
    dispatch(GetCountry());
  }, []);

  return (
    <div>
      <input type="text" />
      <button onClick={handleSubmit}>Search</button>
      {countryState.countries && (
        <div>
          {countryState.countries.map((info) => (
            <div>
              <CountryCard
                name={info.name}
                capital={info.capital}
                flagURL={info.flag}
                /* currencies={info.currencies} */
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
