import React from "react";
import { useDispatch } from "react-redux";
import { updateSearch } from "../store/ducks/searchDuck";
import { hideDetailedView } from "../store/ducks/detailedCountry";
import { updateSkipAmount } from "../store/ducks/paginationDuck";

interface Iheader {}

const Header: React.FC<Iheader> = () => {
  const dispatch = useDispatch();

  function refresh() {
    dispatch(updateSearch(""));
    dispatch(hideDetailedView());
    dispatch(updateSkipAmount("", 0));
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
