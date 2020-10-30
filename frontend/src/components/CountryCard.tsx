import _ from "lodash";
import React from "react";
import { useDispatch } from "react-redux";
import { showDetailedView } from "../store/ducks/countryDetailDuck";

interface ICountry {
  name: string;
  flagURL: string;
  capital: string;
  region: string;
  population: number;
}

const CountryCard: React.FC<ICountry> = ({
  name,
  capital,
  flagURL,
  region,
  population,
}) => {
  const dispatch = useDispatch();

  //Format the population number
  function formatPopulationNr(population: number) {
    // Nine Zeroes for Billions
    return Math.abs(Number(population)) >= 1.0e9
      ? (Math.abs(Number(population)) / 1.0e9).toFixed(2) + " B"
      : // Six Zeroes for Millions
      Math.abs(Number(population)) >= 1.0e6
      ? (Math.abs(Number(population)) / 1.0e6).toFixed(2) + " M"
      : // Three Zeroes for Thousands
      Math.abs(Number(population)) >= 1.0e3
      ? (Math.abs(Number(population)) / 1.0e3).toFixed(2) + " K"
      : Math.abs(Number(population));
  }

  return (
    <div className="col-lg-4 mt-4 col-md-6">
      <div className="border border-muted">
        <img
          onClick={() => dispatch(showDetailedView(name))}
          className="card-img "
          src={flagURL}
          width="250"
          height="250"
          alt="Country's flag"
        />
      </div>
      <div className="row no-gutters border flex-md-row md-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h5 className=" card-title text-center">{name}</h5>

          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item">
              <strong>Capital: </strong> {capital}
            </li>
            <li className="list-group-item">
              <strong>Continents: </strong> {region}
            </li>
            <li className="list-group-item">
              {" "}
              <strong> Population: </strong>
              {formatPopulationNr(population)}
            </li>
          </ul>

          <div className="card-body">
            <div className="text-center">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={() => dispatch(showDetailedView(name))}
              >
                More details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
