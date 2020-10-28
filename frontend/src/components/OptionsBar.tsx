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
    <div className="jumbotron p-4 p-md-5 text-secondary rounded bg-ligth text-center">
      <h1 className="display-4 font-italic">All the countries in the world</h1>
      <p className="lead my-3">
        Det finnes imidlertid mye å diskutere når man begynner å kikke nærmere
        på områder rundt omkring i verden. Det er ganske bred enighet om at alle
        de 193 medlemslandene i FN skal regnes som land. Noen FN-land blir
        imidlertid ikke anerkjent av enkelte andre FN-land.
      </p>

      <div className="row">
        <div className=" col text-center">
          <select
            className="form-control form-control-lg"
            id="exampleSelect1"
            onChange={(e) => handleOptionSelect(e.target.value)}
          >
            <option value="nameasc"> A to Z </option>
            <option value="nameDESC">Z to A</option>
            <option value="populationasc">High to low population</option>
            <option value="populationDESC">Low to high population</option>
            <option value="capitalasc">Capitals A to Z</option>
            <option value="capitalDESC">Capitals Z to A</option>
          </select>
        </div>

        <div className="col text-center">
          <input
            className="form-control form-control-lg text-center"
            type="text-center"
            placeholder="Søk etter land 🔍"
            id="example-search-input"
            aria-label="Search"
            onChange={(e) => delayedQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

/* <header class="blog-header py-3">
  <div class="row flex-nowrap justify-content-between align-items-center">
    <div class="col-4 pt-1">
      <a class="text-muted" href="#">
        Subscribe
      </a>
    </div>
    <div class="col-4 text-center">
      <a class="blog-header-logo text-dark" href="#">
        Large
      </a>
    </div>
    <div class="col-4 d-flex justify-content-end align-items-center">
      <a class="text-muted" href="#" aria-label="Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="mx-3"
          role="img"
          viewBox="0 0 24 24"
          focusable="false"
        >
          <title>Search</title>
          <circle cx="10.5" cy="10.5" r="7.5"></circle>
          <path d="M21 21l-5.2-5.2"></path>
        </svg>
      </a>
      <a class="btn btn-sm btn-outline-secondary" href="#">
        Sign up
      </a>
    </div>
  </div>
</header>;
 */
