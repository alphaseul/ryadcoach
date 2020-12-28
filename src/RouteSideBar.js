import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";

const MyRouteSide = () => {
  return (
    <Router>
      <Switch>
        <Route path="/profil" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default MyRouteSide;
