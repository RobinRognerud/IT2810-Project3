import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store/rootStore";
import { hideDetailedView } from "../store/ducks/countryDetailDuck";
import { updateLike } from "../store/ducks/likeDuck";

const CountryCardDetail: React.FC = () => {
  const dispatch = useDispatch();
  const countryState = useSelector((state: RootStore) => state.countryReducer);

  console.log("country state", countryState);

  function formatPopulatnNr(population: number) {
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

  function mapLang(info: any) {
    const items = info.languages.map((lang: any, index: number) => (
      <div>
        {info.languages.length > 1 ? (
          <div>
            <ul className="list-group list-group-flush text-center my-2 font-italic">
              Nr. {index + 1}:
            </ul>
            <li className="list-group-item">
              <strong>Name: </strong>
              {lang.name}{" "}
            </li>
            <li className="list-group-item">
              <strong>Native name: </strong>
              {lang.nativeName}{" "}
            </li>
          </div>
        ) : (
          <div>
            <li className="list-group-item">Name: {lang.name} </li>
            <li className="list-group-item">Native name: {lang.nativeName} </li>
          </div>
        )}
      </div>
    ));
    return items;
  }

  function mapCurrency(info: any) {
    const itemsCurrency = info.currencies.map(
      (currency: any, index: number) => (
        <div>
          {info.currencies.length > 1 ? (
            <div>
              <ul className="list-group list-group-flush text-center my-2 font-italic">
                Nr. {index + 1}:
              </ul>
              <li className="list-group-item">
                {" "}
                <strong>Name:</strong> {currency.name}
              </li>
              <li className="list-group-item">
                <strong>Symbol:</strong> {currency.symbol}
              </li>
              <li className="list-group-item">
                {" "}
                <strong>Code:</strong> {currency.code}
              </li>
            </div>
          ) : (
            <div>
              <li className="list-group-item">
                {" "}
                <strong>Name:</strong> {currency.name}
              </li>
              <li className="list-group-item">
                {" "}
                <strong>Symbol:</strong> {currency.symbol}
              </li>
              <li className="list-group-item">
                <strong>Code:</strong> {currency.code}
              </li>
            </div>
          )}
        </div>
      )
    );
    return itemsCurrency;
  }

  return (
    <div>
      {countryState.loading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : countryState.countries.length !== 0 ? (
        countryState.countries.map((info) => (
          <div className="col-lg-12 mt-4  justify-content-center">
            <div className="card-header">
              <div className="row">
                <div className="col-lg-6 mt-4 col-md-6 col-sm-7 col-xs-4">
                  <h1 className="card-title mb-2" style={{ fontSize: "3vw" }}>
                    {info.name}
                    <img
                      className="bd-placeholder-img ml-3"
                      width="50vw"
                      height="40vw"
                      src={info.flag}
                      alt="Country's flag"
                    />
                  </h1>
                </div>

                <div className=" col-md-6 col-sm-5 col-xs-2 text-right">
                  <div className="btn-sm">
                    <button
                      type="button"
                      className="close mt-2 mr-4"
                      aria-label="Close"
                      onClick={() => dispatch(hideDetailedView())}
                    >
                      <span style={{ fontSize: "4vw" }} aria-hidden="true">
                        &times;
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative text-center">
              <div className="col p-4 d-flex flex-column position-static">
                <h5>Information</h5>
                <li className="list-group-item">
                  <strong>Capital: </strong> {info.capital}
                </li>
                <li className="list-group-item">
                  <strong>Region: </strong> {info.region}
                </li>
                <li className="list-group-item">
                  <strong>Population: </strong>{" "}
                  {formatPopulatnNr(info.population)}
                </li>
                <li className="list-group-item">
                  <strong>Area: </strong> {info.area.toLocaleString("en-US")} km
                  <sup>2</sup>
                </li>
              </div>
              <div className="col p-4 d-flex flex-column position-static">
                <h5>Currencies</h5>

                {mapCurrency(info)}
              </div>

              <div className="col p-4 d-flex flex-column position-static">
                <h5> Languages</h5>

                {mapLang(info)}
              </div>
            </div>

            <div className="card-footer text-muted">
              <div className="text-center">
                <div className="col">
                  <div className="row justify-content-center mb-2">
                    <strong className="ml-2">Likes: </strong>
                    {info.likes > 0 ? info.likes : 0}
                  </div>
                  <div className="row justify-content-center">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => dispatch(updateLike(info.name))}
                    >
                      Like
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>{countryState.error}</p>
      )}
    </div>
  );
};

export default CountryCardDetail;
