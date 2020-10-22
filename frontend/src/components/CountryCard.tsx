import React from "react";

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
    <div>
      <h1>{name}</h1>
      <p>{capital}</p>
      <p>{currencyName}</p>
      <img src={flagURL} alt="Country's flag" />
    </div>
  );
};

export default CountryCard;
