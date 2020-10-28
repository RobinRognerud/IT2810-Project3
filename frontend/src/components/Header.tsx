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
    <header className="blog-header py-3 border-bottom mb-4">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col text-p1">
          <button
            className=" btn btn-link btn-lg text-dark"
            onClick={() => refresh()}
          >
            <strong> 🌎 Countries</strong>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

{
}
