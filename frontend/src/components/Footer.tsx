import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSkipAmount } from "../store/ducks/paginationDuck";
import { RootStore } from "../store/rootStore";

export const Footer = () => {
  const dispatch = useDispatch();
  const countryState = useSelector((state: RootStore) => state.countryReducer);
  return (
    <footer className="text-muted py-5">
      <div className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li
              onClick={() =>
                dispatch(
                  updateSkipAmount("prev", countryState.countries.length)
                )
              }
              className="page-item"
            >
              <button className="page-link"> Previous </button>
            </li>
            <li
              onClick={() =>
                dispatch(
                  updateSkipAmount("next", countryState.countries.length)
                )
              }
              className="page-item"
            >
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
        {countryState.countries.length < 9 ? (
          <div>
            <p>You are on the last page</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </footer>
  );
};
