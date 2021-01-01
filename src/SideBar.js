import React, { useState } from "react";
import "./sidebar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Seances from "./components/Seances.component";
import img from "./profil.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import SingleVid from "./page/Singlevid";

const SideBar = (props) => {
  const [StyleNav, setStyleNav] = useState({});
  const [StyleVid, setStyleVid] = useState({});
  const [StyleToggle, setStyleToggle] = useState({});

  function openNav() {
    setStyleNav({
      marginLeft: "0px",
    });
    setStyleVid({
      marginLeft: "320px",
      transition: "all ease-in-out 0.5s",
    });
    setStyleToggle({
      display: "none",
    });
  }
  function closeNav() {
    setStyleNav({
      marginLeft: "-1000px",
    });
    setStyleVid({
      marginLeft: "0%",
      transition: "all ease-in-out 0.5s",
    });
    setStyleToggle({
      display: "0",
    });
  }

  return (
    <div>
      {props.currentUser && (
        <Router>
          <div className="toggle-button d-flex" style={StyleToggle}>
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
                    className="img-fluid rounded-circle image_profile"
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
                      style={{ color: "red" }}
                    >
                      <i className="bx "></i> Déconnexion
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-side">
              <div className="">
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
              <div style={StyleVid}>
                <Dashboard />
              </div>
            </Route>
            <Route path="/video">
              <div style={StyleVid}>
                <SingleVid />
              </div>
            </Route>
            <Route path="/">
              <div style={StyleVid}>
                <Seances />
              </div>
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default SideBar;
