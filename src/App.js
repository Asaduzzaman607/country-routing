import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from './Components/CountryDetails/CountryDetails';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
   
      <Router>
        <NavBar></NavBar>
      <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/countryDetails/:countryCode">
            <CountryDetails></CountryDetails>
           
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="*">
            <p>No matched</p>
          </Route>
        </Switch>
    
    </Router>

  );
}

export default App;
