import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSkipAmount } from "../store/ducks/paginationDuck";
import { RootStore } from "../store/rootStore";

export const Footer = () => {
  const dispatch = useDispatch();
  const skip = useSelector((state: RootStore) => state.paginationReducer);
  const countryState = useSelector((state: RootStore) => state.countryReducer);
  return (
    <footer className="text-muted py-5">
      <div className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {skip.skipAmount === 0 ? (
              <li className="page-item">
                <button
                  type="button"
                  className="btn btn-secondary btn-lg"
                  disabled
                >
                  Previous
                </button>
              </li>
            ) : (
              <li
                onClick={() =>
                  dispatch(
                    updateSkipAmount("prev", countryState.countries.length)
                  )
                }
                className="page-item"
              >
                <button className="btn btn-secondary btn-lg"> Previous </button>
              </li>
            )}
            {countryState.countries.length < 9 ? (
              <div>
                <li className="page-item">
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg ml-3"
                    disabled
                  >
                    Next
                  </button>
                </li>
              </div>
            ) : (
              <li
                onClick={() =>
                  dispatch(
                    updateSkipAmount("next", countryState.countries.length)
                  )
                }
                className="page-item"
              >
                <button className="btn btn-secondary btn-lg ml-3">Next</button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
