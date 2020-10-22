import React from "react";
import Main from './components/Main';

import CountryDetail from './components/CountryDetail';
import { Route, Switch } from "react-router-dom";



 interface IAppProps {}

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route path= "/" component={Main} exact/>
        <Route path = "/CountryDetail" component={CountryDetail} exact/> 
      <Main/>
      </Switch>
    </div>
  );
}

export default App;
