import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { updateSearch } from "../store/ducks/searchDuck";
import { updateSort } from "../store/ducks/sortDuck";
import { updateFilter } from "../store/ducks/filterDuck";
import { RootStore } from "../store/rootStore";

export const OptionsBar = () => {
  const dispatch = useDispatch();

  //This is used to prevent the searchTerm to get updated at every character written,
  //first when theres half a second break the searchTerm gets updated
  const delayedQuery = _.debounce(
    (searchTerm: string) => dispatch(updateSearch(searchTerm)),
    500
  );

  const searchTerm = useSelector((state: RootStore) => state.searchReducer);
  const filterValue = useSelector((state: RootStore) => state.filterReducer);
  const sortValue = useSelector((state: RootStore) => state.sortReducer);

  function setSortValue(sortValue: string) {
    if (sortValue) {
      return sortValue;
    } else {
      return "";
    }
  }

  function setFilterValue(filterValue: string) {
    if (filterValue) {
      return filterValue;
    } else {
      return "";
    }
  }

  function placeholderSearch(searchTerm: string) {
    if (searchTerm) {
      return searchTerm;
    } else {
      return "Søk etter land";
    }
  }

  return (
    <section className="jumbotron text-center bg-white">
      <div className="container">
        <h1 className="jumbotron-heading">Countries</h1>
        <p className="lead text-muted">Finn ditt favoritt land :D</p>
        <select
          className="navbar-toggler"
          id="exampleSelect1"
          value={setSortValue(sortValue.sort)}
          onChange={(e) => dispatch(updateSort(e.target.value))}
        >
          <option value=""> Sort by: </option>
          <option value="nameasc"> A to Z </option>
          <option value="nameDESC">Z to A</option>
          <option value="populationasc">Population ↑ </option>
          <option value="populationDESC">Population ↓</option>
          <option value="capitalasc">Capitals A to Z</option>
          <option value="capitalDESC">Capitals Z to A</option>
        </select>
        <select
          className="navbar-toggler"
          id="exampleSelect1"
          value={setFilterValue(filterValue.filter)}
          onChange={(e) => dispatch(updateFilter(e.target.value))}
        >
          <option value=""> Filter region: </option>
          <option value="Africa">Africa </option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <input
          className="navbar-toggler"
          type="text"
          placeholder={placeholderSearch(searchTerm.searchTerm)}
          id="example-search-input"
          onChange={(e) => {
            delayedQuery(e.target.value);
          }}
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
      </div>
    </section>
  );
};
