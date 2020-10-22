import React from "react";
import { Link } from "react-router-dom";

interface ICountry {
  name: string;
  currencies: Array<String>;
  flagURL: string;
  capital: String;
}

const Country: React.FC<ICountry> = ({
  name,
  currencies,
  capital,
  flagURL,
}) => {
  return (
   <div>
   <div className="card mb-3 box-shadow">
    <img
     className="card-img-top" src={flagURL} alt="Country's flag"
    />
    <div className="card-body">
     <p className="card-text">
     <li> <strong>Name: </strong> {name}</li>

  <li><strong>Capital: </strong>  {capital}</li>
  <li><strong>Currencies: </strong>  {currencies}</li>
     </p>
     <div className="d-flex justify-content-between align-items-center">
      <div className="btn-group">
        <Link to={'/CountryDetail'}><button
        type="button"
        className="btn btn-sm btn-outline-secondary"
       >
        View
       </button></Link>
       
       <button
        type="button"
        className="btn btn-sm btn-outline-secondary"
       >
        Like
       </button>
      </div>
    
     </div>
    </div>
   </div>
  </div>
 );
    

};

export default Country;
