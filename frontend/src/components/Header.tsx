import React from "react";
import { useDispatch } from "react-redux";
import { updateSearch } from "../store/ducks/searchDuck";
import { hideDetailedView } from "../store/ducks/countryDetailDuck";
import { updateFilter } from "../store/ducks/filterDuck";
import { updateSort } from "../store/ducks/sortDuck";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  //If "Countries" button is clicked we need to set all values to default
  //to show all countries without parameters such as (sort, search, filter)
  function refresh() {
    dispatch(updateSearch(""));
    dispatch(hideDetailedView());
    dispatch(updateFilter(""));
    dispatch(updateSort(""));
  }

  return (
    <header className="blog-header py-3 border-bottom mb-4">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col text-p1">
          <button
            className=" btn btn-link btn-lg text-dark"
            onClick={() => refresh()}
          >
            <strong>
              <span role="img" aria-label="Globe" aria-labelledby="col text-p1">
                🌎
              </span>
              Countries
            </strong>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
