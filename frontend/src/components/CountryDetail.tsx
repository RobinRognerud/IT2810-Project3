import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store/rootStore";
import { hideDetailedView } from "../store/ducks/detailedCountry";

const CountryDetail: React.FC = () => {
  const dispatch = useDispatch();
  const countryState = useSelector((state: RootStore) => state.countryReducer);

  console.log("country state", countryState);

  function mapLang(info: any) {
    const items = info.languages.map((lang: any) => (
      <div>
        <li>
          <strong>Languages: </strong> {lang.name}{" "}
        </li>
        <li>
          <strong>Languages: </strong> {lang.nativeName}
        </li>
      </div>
    ));
    return items;
  }

  return (
    <div>
      {countryState.loading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : countryState.countries.length !== 0 ? (
        countryState.countries.map((info) =>
          info.currencies.map((currency) => (
            <div className="card mb-3 box-shadow">
              <img
                className="card-img-top"
                src={info.flag}
                alt="Country's flag"
              />
              <div className="card-body">
                <p className="card-text">
                  <li>
                    {" "}
                    <strong>Name: </strong> {info.name}
                  </li>
                  <li>
                    <strong>Capital: </strong> {info.capital}
                  </li>
                  <li>
                    <strong>Currencies: </strong> {currency.name}
                  </li>
                  <li>
                    <strong>Currencies: </strong> {currency.code}
                  </li>
                  <li>
                    <strong>Currencies: </strong> {currency.symbol}
                  </li>
                  <li>
                    <strong>Region: </strong> {info.region}
                  </li>
                  {mapLang(info)}

                  <li>
                    <strong>Population: </strong> {info.population}
                  </li>
                  <li>
                    <strong>Area: </strong> {info.area}
                  </li>
                </p>
              </div>
            </div>
          ))
        )
      ) : (
        <p>{countryState.error}</p>
      )}
      <button onClick={() => dispatch(hideDetailedView())}>Back</button>
    </div>
  );
};

export default CountryDetail;
