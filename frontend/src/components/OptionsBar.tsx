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
      return "Search for a country 🔍";
    }
  }

  return (
    <div className="jumbotron p-4 p-md-5 text-secondary rounded bg-ligth text-center">
      <h1 className="display-4 font-italic">All the countries in the world</h1>
      <p className="lead my-3">
        Det finnes imidlertid mye å diskutere når man begynner å kikke nærmere
        på områder rundt omkring i verden. Det er ganske bred enighet om at alle
        de 193 medlemslandene i FN skal regnes som land. Noen FN-land blir
        imidlertid ikke anerkjent av enkelte andre FN-land.
      </p>

      <div className="row">
        <div className="d-flex col-lg-4 col-xs-8 mt-1 text-center">
          <select
            className="form-control form-control-lg"
            id="sortBar"
            value={setSortValue(sortValue.sort)}
            onChange={(e) => dispatch(updateSort(e.target.value))}
          >
            <option value="nameasc"> A to Z </option>
            <option value="nameDESC">Z to A</option>
            <option value="populationasc">Population ↑</option>
            <option value="populationDESC">Population ↓</option>
            <option value="capitalasc">Capitals A to Z</option>
            <option value="capitalDESC">Capitals Z to A</option>
          </select>
        </div>
        <div className="d-flex .flex-lg-nowrap .flex-xs-wrap col-lg-4 col-xs-8 mt-1 text-center">
          <select
            className="form-control form-control-lg"
            id="filterBar"
            value={setFilterValue(filterValue.filter)}
            onChange={(e) => dispatch(updateFilter(e.target.value))}
          >
            <option value=""> All regions </option>
            <option value="Africa">Africa </option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="d-flex .flex-lg-nowrap .flex-xs-wrap col-lg-4 col-xs-8 mt-1 text-center">
          <input
            className="form-control form-control-lg"
            type="text-center"
            id="example-search-input"
            aria-label="Search"
            placeholder={placeholderSearch(searchTerm.searchTerm)}
            onChange={(e) => delayedQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
