import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className="col-md-4 mt-4">
      <img
        className="card-img"
        src={flagURL}
        width="350"
        height="250"
        alt="Country's flag"
      />
      <div className="row no-gutters border rounded overflow-hidden flex-md-row md-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h5 className="card-title text-center">{name}</h5>

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
              <Link to={"/CountryDetail"}>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                >
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
