import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Catalogo from "./components/Catalogo";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={SearchBar} />
      <Switch>
        <Route exact path="/" component={Catalogo} />
      </Switch>
    </Router>
  );
};

export default Routes;
