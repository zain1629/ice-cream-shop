import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/pages/home';
import Survey from '../src/pages/survey';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
          <Router>
            <Route exact path={"/"} >      <Home /> </Route>
            <Route exact path={"/home"}>   <Home /> </Route>
            <Route exact path={"/survey"}> <Survey /> </Route>
          </Router>
    </div>
  );
}

export default App;
