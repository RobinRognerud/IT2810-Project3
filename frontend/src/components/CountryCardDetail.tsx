import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store/rootStore";
import { hideDetailedView } from "../store/ducks/detailedCountry";
import { updateLike } from "../store/ducks/likeDuck";
import { updateSkipAmount } from "../store/ducks/paginationDuck";

const CountryCardDetail: React.FC = () => {
  const dispatch = useDispatch();
  const countryState = useSelector((state: RootStore) => state.countryReducer);

  console.log("country state", countryState);

  function back() {
    dispatch(hideDetailedView());
    dispatch(updateSkipAmount("back", 1));
  }

  const countryName = countryState.countries.map((info) => info.name);

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
          <div className="card mb-4">
            <div className="card-header">
              <div className="row">
                <div className="col-auto">
                  <h1 className="card-title mb-2">
                    {info.name}
                    <img
                      className="bd-placeholder-img ml-3"
                      width="50"
                      height="40"
                      src={info.flag}
                      alt="Country's flag"
                    />
                  </h1>
                </div>

                <div className="col text-right">
                  <strong className="ml-2">Likes: </strong>
                  {info.likes > 0 ? info.likes : 0}
                  <div className="btn">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => dispatch(updateLike(countryName[0]))}
                    >
                      Like
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
                  <strong>Population: </strong> {info.population}
                </li>
                <li className="list-group-item">
                  <strong>Area: </strong> {info.area}
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
                {" "}
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => back()}
                >
                  Back
                </button>{" "}
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
