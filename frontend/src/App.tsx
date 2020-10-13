import React, { useEffect, useState } from "react";
import "./App.css";
import PlayerCard from "./components/player";
import styled from "styled-components";

interface IAppProps {}

function App() {
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

  return (
    <div className="App">
      <h1>Countries</h1>

      {countries.slice(0, 10).map((country) => (
        <div className="CountryDiv">
          <PlayerCard
            name={country.name}
            capital={country.capital}
            flagURL={country.flag}
            currencies={country.currencies[0].name}
          />
        </div>
      ))}
    </div>
  );
}

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-style: solid;
  height: 300px;
  width: 400px;
  margin-right: 0;
`;

export default App;
