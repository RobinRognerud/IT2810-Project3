import React, { useEffect, useState } from "react";
import "./App.css";
import Country from "./components/Country";

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
          <Country
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

export default App;
