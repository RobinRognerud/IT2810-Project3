import React from "react";
import { useDispatch } from "react-redux";
import { updateSearch } from "../store/ducks/searchDuck";
import { hideDetailedView } from "../store/ducks/detailedCountry";
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
    <header>
      <div className="navbar navbar-dark bg-dark box-shadow mb-4">
        <div className="container d-flex justify-content-between">
          <div className="lead text-muted">
            <button onClick={() => refresh()}>
              <strong>Countries</strong>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
