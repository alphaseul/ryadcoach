import React, { useState } from "react";
import "./sidebar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Seances from "./components/Seances.component";
import img from "./profil.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const SideBar = (props) => {
  const [StyleNav, setStyleNav] = useState({});
  function openNav() {
    setStyleNav({
      marginLeft: "0px",
    });
  }
  function closeNav() {
    setStyleNav({
      marginLeft: "-1000px",
    });
  }

  return (
    <div>
      {props.currentUser && (
        <Router>
          <div className="toggle-button d-flex">
            <span onClick={openNav}>
              <GiHamburgerMenu size="45px" />
            </span>
          </div>
          <nav className="headerSide" style={StyleNav}>
            <div className="d-flex flex-column">
              <div className="profile">
                <div className="d-flex row">
                  <img
                    src={
                      props.currentUser.photo_profil
                        ? "http://82.165.184.180:1337" +
                          props.currentUser.photo_profil.url
                        : img
                    }
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <span onClick={closeNav} className="toggle-close">
                    <AiOutlineClose size="30px" />
                  </span>
                </div>

                <h1 className="text-light">
                  <a href="/">
                    <b>{props.currentUser.username}</b>
                  </a>
                </h1>
              </div>

              <nav className="nav-menu-side">
                <ul>
                  <li>
                    <Link to="/mon_profil" onClick={closeNav}>
                      Mon Profil
                    </Link>
                  </li>
                  <li>
                    <Link to="/Entrainements" onClick={closeNav}>
                      <i className="bx"></i> <span>Entrainements</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="bx "></i> <span>Mes Documents</span>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/connexion"
                      onClick={props.logout}
                      style={{ color: "red", marginTop: "100%" }}
                    >
                      <i className="bx "></i> Déconnexion
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-side">
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
          </nav>
          <Switch>
            <Route path="/mon_profil">
              <Dashboard />
            </Route>
            <Route path="/">
              <Seances />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default SideBar;
