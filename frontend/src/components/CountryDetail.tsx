import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isTemplateSpan } from "typescript";
import { GetCountry } from "../store/country/CountryAction";
import { RootStore } from "../store/rootStore";
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

  /* useEffect(() => {
    dispatch(GetCountry());
  }, []); */

  function mapLang(info: any) {
    const items = info.languages.map((lang: any) => 
        <div><li><strong>Languages: </strong>  {lang.name} </li>
        <li><strong>Languages: </strong>  {lang.nativeName}</li></div>
    )
    return items;
  }

    return (
   <div>
       <Header
       />
      {countryState.countries.map((info) => 
      info.currencies.map(currency => 
       
   <div className="card mb-3 box-shadow">
    <img
     className="card-img-top" src={info.flag} alt="Country's flag"
    />
    <div className="card-body">
     <p className="card-text">

  <li> <strong>Name: </strong> {info.name}</li>
  <li><strong>Capital: </strong>  {info.capital}</li>
  <li><strong>Currencies: </strong>  {currency.name}</li>
  <li><strong>Currencies: </strong>  {currency.code}</li>
  <li><strong>Currencies: </strong>  {currency.symbol}</li>
  <li><strong>Region: </strong>  {info.region}</li>
  {mapLang(info)}
  {/* <li><strong>Languages: </strong>  {lang.name } </li>
  <li><strong>Languages: </strong>  {lang.nativeName}</li> */}
  <li><strong>Population: </strong>  {info.population}</li>
  <li><strong>Area: </strong>  {info.area}</li>

     </p>
     
    </div>
   </div>
      ))}
  </div>
 );
    

};

export default CountryDetail;
