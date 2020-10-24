import _ from "lodash";
import React from "react";
import { useDispatch } from "react-redux";
import { showDetailedView } from "../store/ducks/detailedCountry";

interface ICountry {
  name: string;
  currencyName: string;
  flagURL: string;
  capital: String;
}

const CountryCard: React.FC<ICountry> = ({
  name,
  currencyName,
  capital,
  flagURL,
}) => {
  const dispatch = useDispatch();

  const delayedQuery = _.debounce(
    (countryName: string) => dispatch(showDetailedView(countryName)),
    500
  );

  return (
    <div>
      <div className="card mb-3 box-shadow">
        <img className="card-img-top" src={flagURL} alt="Country's flag" />
        <div className="card-body">
          <p className="card-text">
            <li>
              {" "}
              <strong>Name: </strong> {name}
            </li>

            <li>
              <strong>Capital: </strong> {capital}
            </li>
            <li>
              <strong>Currencies: </strong> {currencyName}
            </li>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => delayedQuery(name)}
              >
                View
              </button>

              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Like
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
