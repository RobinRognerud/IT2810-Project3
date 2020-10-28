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
            <ul className="list-group list-group-flush text-center">
              {" "}
              Nr. {index + 1}:
            </ul>
            <li className="list-group-item">Name: {lang.name} </li>
            <li className="list-group-item">Native name: {lang.nativeName} </li>
          </div>
        ) : (
          <div>
            <ul>Name: {lang.name} </ul>
            <ul>Native name: {lang.nativeName} </ul>
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
              <li className="list-group-item">Nr. {index + 1}:</li>
              <li className="list-group-item"> Name: {currency.name}</li>
              <ul className="list-group-item">Symbol: {currency.symbol}</ul>
              <ul className="list-group-item">Code: {currency.code}</ul>
            </div>
          ) : (
            <div>
              <li className="list-group-item"> Name: {currency.name}</li>
              <li className="list-group-item">Symbol: {currency.symbol}</li>
              <li className="list-group-item">Code: {currency.code}</li>
            </div>
          )}
        </div>
      )
    );
    return itemsCurrency;
  }

  return (
    <div>
      <div className="col">
        {countryState.loading ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : countryState.countries.length !== 0 ? (
          countryState.countries.map((info) => (
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-sm-4">
                    <h1 className="card-title mb-2">{info.name}</h1>
                  </div>

                  <div className="col-sm-4 text-center mt-3">
                    <strong className="ml-2">Likes: </strong>
                    {info.likes > 0 ? info.likes : 0}
                  </div>
                  <div className="col-sm-4 text-center mt-3">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => dispatch(updateLike(countryName[0]))}
                    >
                      Like
                    </button>
                  </div>
                </div>
              </div>
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative text-center">
                <div className="col p-4 d-flex flex-column position-static">
                  <p className="card-text">
                    <div className="row">
                      <div className="col-sm-4">
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
                      <div className="col-sm-4">
                        <strong>Currencies: </strong>

                        {mapCurrency(info)}
                      </div>

                      <div className="col-sm-4">
                        <strong> Languages: </strong>

                        {mapLang(info)}
                      </div>
                    </div>
                  </p>
                </div>

                <div className="col-auto d-none d-lg-block mt-4 mr-4">
                  <img
                    className="bd-placeholder-img"
                    width="300"
                    height="200"
                    src={info.flag}
                    alt="Country's flag"
                  />
                </div>
              </div>
              <button onClick={() => back()}>Back</button>
            </div>
          ))
        ) : (
          <p>{countryState.error}</p>
        )}
      </div>
    </div>
  );
};

export default CountryCardDetail;
