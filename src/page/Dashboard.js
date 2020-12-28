import React from "react";
import "./css/dashboard.css";

const Dashboard = ({ logout, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
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
                <a href="/">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>

              <li>
                <a href="#Profil">
                  <i className="bx bx-server"></i> Profil
                </a>
              </li>
              <li>
                <a href="/connexion" onClick={logout}>
                  <i className="bx bx-envelope"></i> Déconnexion
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <section id="profil" className="container">
        Nom : {user.username} <br />
        Email : {user.email}
      </section>

      <div className="footer-side" id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Qrcode-protect</span>
            </strong>
          </div>
          <div className="credits">
            Designed by <a href="https://qrcode-protect.com/">Qrcode-protect</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
