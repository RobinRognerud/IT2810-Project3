import React from "react";
import { Link } from "react-router-dom";

interface ICountry {
  name: string;
  currencyName: string;
  flagURL: string;
  capital: String;
}

const CountryCard: React.FC<ICountry> = ({
  name,
  currencyName,
  capital,
  flagURL,
}) => {
  return (

   
  <div className="col-sm-4">
   <div className="card text-white bg-dark mb-3">
     <div> <img
     className="card-img-top" src={flagURL} alt="Country's flag"
    /></div>
    
    <div className="card-body">
     <p className="card-text">
  <h5 className="card-title">{name}</h5>
    

  <li><strong>Capital: </strong>  {capital}</li>
  <li><strong>Currencies: </strong>  {currencyName}</li>
     </p>
     <div className="d-flex justify-content-between align-items-center">
      <div className="btn-group-ligth">
        <Link to={'/CountryDetail'}><button
        type="button"
        className="btn btn-outline-light"
       >
        View
       </button></Link>

      
       
      </div>
      </div>
     </div>
     </div>
    </div>
   

 );
    

};

export default CountryCard;
