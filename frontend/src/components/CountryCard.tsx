import React from "react";

interface ICountry {
  name: string;
  /*   currencies: Array<String>; */
  flagURL: string;
  capital: String;
}

const CountryCard: React.FC<ICountry> = ({
  name,
  /*   currencies, */
  capital,
  flagURL,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{capital}</p>
      {/*       <p>{currencies}</p> */}
      <img src={flagURL} alt="Country's flag" />
    </div>
  );
};

export default CountryCard;
