import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Seances from "./components/Seances.component";

const user = JSON.parse(localStorage.getItem("user"));

const MyRouteSide = (logout) => {
  return (
    <Router>
      <div className="headerSide bg-dark" id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src={"http://82.165.184.180:1337" + user.photo_profil.url}
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="/">{user.username}</a>
            </h1>
          </div>

          <nav className="nav-menu-side">
            <ul>
              <li>
                <Link to="/dashboard">
                  <i className="bx"></i> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/Entrainements">
                  <i className="bx"></i> <span>Entrainements</span>
                </Link>
              </li>
              <li>
                <a href="/">
                  <i className="bx "></i> <span>Mes Documents</span>
                </a>
              </li>
              <li>
                <a href="/connexion" onClick={logout} style={{ color: "red" }}>
                  <i className="bx "></i> Déconnexion
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-side" id="footer">
          <div className="container">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Qrcode-protect</span>
              </strong>
            </div>
            <div className="credits">
              Designed by{" "}
              <a href="https://qrcode-protect.com/">Qrcode-protect</a>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/entrainements">
          <Seances />
        </Route>
      </Switch>
    </Router>
  );
};

export default MyRouteSide;
