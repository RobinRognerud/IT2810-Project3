import _ from "lodash";
import React from "react";
import { useDispatch } from "react-redux";
import { showDetailedView } from "../store/ducks/detailedCountry";

interface ICountry {
  name: string;
  flagURL: string;
  capital: String;
  region: String;
}

const CountryCard: React.FC<ICountry> = ({
  name,
  capital,
  flagURL,
  region,
}) => {
  const dispatch = useDispatch();

  const delayedQuery = _.debounce(
    (countryName: string) => dispatch(showDetailedView(countryName)),
    500
  );

  return (
    <div className="col-md-4 mt-4">
      <img
        className="card-img"
        src={flagURL}
        width="250"
        height="250"
        alt="Country's flag"
      />
      <div className="row no-gutters border rounded overflow-hidden flex-md-row md-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h5 className=" card-title text-center">{name}</h5>

          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item">
              <strong>Capital: </strong> {capital}
            </li>
            <li className="list-group-item">
              <strong>Region: </strong> {region}
            </li>
          </ul>

          <div className="card-body">
            <div className="text-right">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={() => delayedQuery(name)}
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
