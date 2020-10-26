import React from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { updateSearch } from "../store/ducks/searchDuck";
import { updateSort } from "../store/ducks/sortDuck";

export const OptionsBar = () => {
  const dispatch = useDispatch();

  const delayedQuery = _.debounce(
    (searchTerm: string) => dispatch(updateSearch(searchTerm)),
    500
  );

  function handleOptionSelect(optionValue: string) {
    dispatch(updateSort(optionValue, true));
  }

  return (
    <section className="jumbotron text-center bg-white">
      <div className="container">
        <h1 className="jumbotron-heading">Countries</h1>
        <p className="lead text-muted">Finn ditt favoritt land :D</p>
        <p>
          <select
            className="navbar-toggler"
            id="exampleSelect1"
            onChange={(e) => handleOptionSelect(e.target.value)}
          >
            <option> Sorter etter: </option>
            <option value="nameasc"> A to Z </option>
            <option value="nameDESC">Z to A</option>
            <option value="populationasc">High to low population</option>
            <option value="populationDESC">Low to high population</option>
            <option value="capitalasc">Capitals A to Z</option>
            <option value="capitalDESC">Capitals Z to A</option>
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
