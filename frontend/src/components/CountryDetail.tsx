import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store/rootStore";
import { hideDetailedView } from "../store/ducks/detailedCountry";
import { updateLike } from "../store/ducks/likeDuck";
import { updateSkipAmount } from "../store/ducks/paginationDuck";

const CountryDetail: React.FC = () => {
  const dispatch = useDispatch();
  const countryState = useSelector((state: RootStore) => state.countryReducer);

  const countryName = countryState.countries.map((info) => info.name);
  console.log("country state", countryState);

  function back() {
    dispatch(hideDetailedView());
    dispatch(updateSkipAmount("back", 1));
  }

  function mapLanguage(info: any) {
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
                  {mapLanguage(info)}

                  <li>
                    <strong>Population: </strong> {info.population}
                  </li>
                  <li>
                    <strong>Area: </strong> {info.area}
                  </li>
                  <li>
                    <strong>Likes: </strong> {info.likes > 0 ? info.likes : 0}
                  </li>
                </p>
              </div>
            </div>
          ))
        )
      ) : (
        <p>{countryState.error}</p>
      )}
      <button onClick={() => back()}>Back</button>
      <button onClick={() => dispatch(updateLike(countryName[0]))}>Like</button>
    </div>
  );
};

export default CountryDetail;
