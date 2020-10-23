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
    const items = info.languages.map((lang: any,index: number) => 
        <div> 
          {info.languages.length > 1 ? <div> <li>Nr. {index+1}:</li>
          <ul>Name: {lang.name} </ul>
       <ul>Native name: {lang.nativeName} </ul></div> : <div>
          <ul>Name: {lang.name} </ul>
       <ul>Native name: {lang.nativeName} </ul></div>}
          
          </div>
    )
    return items;

  }

  function mapCurrency(info: any) {
    const itemsCurrency = info.currencies.map((currency: any, index: number) =>
    <div> 
      {info.currencies.length > 1 ? <div><ul>Nr. {index+1}:</ul>
      <ul> Name: {currency.name}</ul>
  <ul>Symbol: {currency.symbol}</ul>
  <ul>Code: {currency.code}</ul></div> : <div>
      <ul> Name: {currency.name}</ul>
  <ul>Symbol: {currency.symbol}</ul>
  <ul>Code: {currency.code}</ul></div>}
      
    </div>
    )
    return itemsCurrency;
  }

  
    return (
   <div>
       <Header
       />
      {countryState.countries.map((info) =>  

  <div className="col-sm-7">
   <div className="card text-white bg-dark mb-3">
    <img className="" src={info.flag} alt="Country's flag"
    />
    <div className="card-body">
     <p className="card-text">
      <h5 className="card-title">{info.name}</h5>

  <div className= "row">
    <div className = "col-sm-4">
    <li><strong>Capital: </strong>  {info.capital}</li>
  <li><strong>Currencies: </strong> </li>
  {mapCurrency(info)}
    </div>
    <div className = "col-sm-4">
      <li> <strong> Languages:  </strong> </li>
    {mapLang(info)}
      </div>
      <div className="col-sm-4">
      <li><strong>Region: </strong>  {info.region}</li>
  <li><strong>Population: </strong>  {info.population}</li>
  <li><strong>Area: </strong>  {info.area}</li>
      </div>
  
  </div> 

     </p>
     <button
        type="button"
        className="btn btn-outline-light"
       >
        Like
       </button>
     
    </div>
   </div>
   </div>
      )}
      <Footer/>
  </div>
 );
    

};

export default CountryDetail;
