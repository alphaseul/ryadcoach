import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Seances from "./components/Seances.component";
import img from "./profil.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import SingleVid from "./page/Singlevid";

const SideBar = (props) => {
  const [StyleNav, setStyleNav] = useState({});
  const [StyleVid, setStyleVid] = useState({});
  const [StyleToggle, setStyleToggle] = useState({});
  const [NavActiveStyle, setNavActiveStyle] = useState({});
  var navActive = 2;

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
  function avtiveNav() {
    setNavActiveStyle({
      backgroundColor: "black",
    });
  }

  useEffect(() => {
    openNav();
    avtiveNav();
  }, []);

  return (
    <div>
      {props.currentUser && (
        <Router>
          <div
            className="toggle-button d-flex align-items-center"
            style={StyleToggle}
          >
            <span onClick={openNav}>
              <GiHamburgerMenu size="45px" />
            </span>
            <a
              href="/connexion"
              onClick={props.logout}
              style={{ color: "red" }}
            >
              Déconnexion
            </a>
          </div>
          <nav
            className="headerSide d-flex row justify-content-center "
            style={StyleNav}
          >
            <div className="d-flex flex-column" style={{ width: "100%" }}>
              <div className="profile">
                <div className="d-flex flex-column ">
                  <div>
                    <span onClick={closeNav} className="float-right mr-2 mt-2">
                      <FaArrowAltCircleLeft color="white" size="30px" />
                    </span>
                  </div>
                  <div>
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
                  </div>

                  <div>
                    <h1 className="text-light">
                      <a href="/">
                        <b>{props.currentUser.username}</b>
                      </a>
                    </h1>
                  </div>
                </div>
              </div>

              <nav className="nav-menu-side">
                <ul>
                  <li>
                    <Link
                      to="/mon_profil"
                      onClick={avtiveNav}
                      style={
                        navActive === 1
                          ? NavActiveStyle
                          : { backgroundColor: "" }
                      }
                    >
                      Mon Profil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/entrainements"
                      onClick={avtiveNav}
                      style={
                        navActive === 2
                          ? NavActiveStyle
                          : { backgroundColor: "" }
                      }
                    >
                      Entrainements
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Mes Documents</Link>
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
                <span onClick={closeNav}>
                  <Dashboard />
                </span>
              </div>
            </Route>
            <Route path="/entrainements">
              <div style={StyleVid}>
                <span onClick={closeNav}>
                  <Seances />
                </span>
              </div>
            </Route>
            <Route path="/:id">
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
