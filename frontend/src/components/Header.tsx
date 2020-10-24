import React from "react";
import { useDispatch } from "react-redux";
import { updateSearch } from "../store/ducks/searchDuck";
import { hideDetailedView } from "../store/ducks/detailedCountry";

interface Iheader {}

const Header: React.FC<Iheader> = () => {
  const dispatch = useDispatch();

  function refresh() {
    dispatch(updateSearch(""));
    dispatch(hideDetailedView());
  }

  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">En forklaring</p>
            </div>
            <div className="form-group row">
              <label
                htmlFor="example-search-input"
                className="col-2 col-form-label"
              >
                Search
              </label>
              <div className="col-10"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <div className="navbar navbar-dark bg-dark box-shadow">
            <button onClick={() => refresh()}>
              <strong>Countries</strong>
            </button>
          </div>

          <label htmlFor="exampleSelect1"></label>
        </div>
      </div>
    </header>
  );
};

export default Header;
