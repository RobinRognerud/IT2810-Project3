import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isTemplateSpan } from "typescript";
import { GetCountry } from "../store/country/CountryAction";
import { RootStore } from "../store/rootStore";
import { Footer } from "./Footer";
import Header from "./Header";

interface ICountryDetail {
  name: string;
  currencies: Array<String>;
  flagURL: string;
  capital: String;
  region: String;
  languages: String;
  population: Number;
  area: Number;
}

const CountryDetail: React.FC = () => {
  const dispatch = useDispatch();
  const countryState = useSelector((state: RootStore) => state.countryReducer);

  console.log("country state", countryState);

  function mapLang(info: any) {
    const items = info.languages.map((lang: any, index: number) => (
      <div>
        {info.languages.length > 1 ? (
          <div>
            {" "}
            <li>Nr. {index + 1}:</li>
            <ul>Name: {lang.name} </ul>
            <ul>Native name: {lang.nativeName} </ul>
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
              <ul>Nr. {index + 1}:</ul>
              <ul> Name: {currency.name}</ul>
              <ul>Symbol: {currency.symbol}</ul>
              <ul>Code: {currency.code}</ul>
            </div>
          ) : (
            <div>
              <ul> Name: {currency.name}</ul>
              <ul>Symbol: {currency.symbol}</ul>
              <ul>Code: {currency.code}</ul>
            </div>
          )}
        </div>
      )
    );
    return itemsCurrency;
  }

  return (
    <div className="conteiner">
      <Header />
      <div>
        <div className="col">
          {countryState.countries.map((info) => (
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <p className="card-text">
                  <h5 className="card-title">{info.name}</h5>

                  <div className="row">
                    <div className="col-sm-4">
                      <li>
                        <strong>Capital: </strong> {info.capital}
                      </li>
                      <li>
                        <strong>Currencies: </strong>{" "}
                      </li>
                      {mapCurrency(info)}
                    </div>
                    <div className="col-sm-4">
                      <li>
                        {" "}
                        <strong> Languages: </strong>{" "}
                      </li>
                      {mapLang(info)}
                    </div>
                    <div className="col-sm-4">
                      <li>
                        <strong>Region: </strong> {info.region}
                      </li>
                      <li>
                        <strong>Population: </strong> {info.population}
                      </li>
                      <li>
                        <strong>Area: </strong> {info.area}
                      </li>
                    </div>
                  </div>
                </p>
                <button type="button" className="btn">
                  Like
                </button>
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
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CountryDetail;
