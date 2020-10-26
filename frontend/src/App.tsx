import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import MainPage from "./components/MainPage";
import { GetCountry } from "./store/country/CountryAction";
import { RootStore } from "./store/rootStore";

interface IAppProps {}


function App() {


  return (
    <div className="App">
      <h1>Countries</h1>
      <MainPage />
    </div>
  );
}

export default App;
