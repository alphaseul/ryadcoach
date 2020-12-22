import React from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <header id="header" className="">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">
            Ryad Coach Sportif<span>.</span>
          </a>
        </h1>

        <a href="index.html" className="logo me-auto">
          <img src="assets/img/logo.png" alt="" />
        </a>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li>
              <a href="#header">Acceuil</a>
            </li>
            <li>
              <a href="#about">A propos</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#pricing">Abonnements</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="drop-down">
              <a href="/#">
                <CgProfile size="30px" />
              </a>
              <ul>
                <li>
                  <a href="/#">Inscription</a>
                </li>
                <li>
                  <a href="/#">Connexion</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
