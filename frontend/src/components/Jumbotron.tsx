import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { updateSearch } from "../store/search/SearchActions";

export const Jumbotron = () => {
  const dispatch = useDispatch();
  /* const [countryName, setCountryName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCountryName(event.target.value);

  useEffect(() => {
    dispatch(GetCountry(countryName));
  }, [countryName]); */

  const delayedQuery = _.debounce(
    (searchTerm: string) => dispatch(updateSearch(searchTerm)),
    500
  );

  return (
    <section className="jumbotron text-center mb-0 bg-white">
      <div className="container">
        <h1 className="jumbotron-heading">Countries</h1>
        <p className="lead text-muted">Finn ditt favoritt land :D</p>
        <p>
          <select className="navbar-toggler" id="exampleSelect1">
            <option> Sorter etter: </option>
            <option> Myntenhet </option>
            <option>Størrelse</option>
            <option>4</option>
            <option>5</option>
          </select>
          <input
            className="navbar-toggler"
            type="text"
            placeholder="Søk etter land"
            id="example-search-input"
            onChange={(e) => delayedQuery(e.target.value)}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </p>
      </div>
    </section>
  );
};
