import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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

/* const CountryDetail: React.FC<ICountryDetail> = () => {

const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    getCountries();
  }, []);

  //Fetch the countries from API
  const getCountries = async () => {
    const response = await fetch("http://localhost:3000/countries");
    const data = await response.json();
    setCountries(data);
    console.log(data);
  };
 */

const CountryDetail: React.FC<ICountryDetail> = ({
  name,
  currencies,
  capital,
  flagURL,
  region,
  languages,
  population,
  area
}) => {
  return (
      
   <div>
       <Header
       
       />
      
   <div className="card mb-3 box-shadow">
    <img
     className="card-img-top" src={flagURL} alt="Country's flag"
    />
    <div className="card-body">
     <p className="card-text">
  <li> <strong>Name: </strong> {name}</li>
  <li><strong>Capital: </strong>  {capital}</li>
  <li><strong>Currencies: </strong>  {currencies}</li>
  <li><strong>Region: </strong>  {region}</li>
  <li><strong>Languages: </strong>  {languages}</li>
  <li><strong>Population: </strong>  {population}</li>
  <li><strong>Area: </strong>  {area}</li>

     </p>
     
    </div>
   </div>
  </div>
 );
    

};

export default CountryDetail;
