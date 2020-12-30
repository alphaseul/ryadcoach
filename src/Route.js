import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login.component";
import Register from "./components/Register.component";
import Home from "./page/Home";

const MyRoute = (props) => {
  return (
    <div>
      {!props.currentUser && (
        <Router>
          <Switch>
            <Route path="/connexion" component={Login} />
            <Route path="/inscription" component={Register} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default MyRoute;
