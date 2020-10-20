import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";

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
