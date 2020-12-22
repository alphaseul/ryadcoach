import React from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <header id="header" className="container">
      <Navbar expand="lg">
        <h1 className="logo me-auto">
          <a href="index.html">
            Ryad Coach Sportif<span>.</span>
          </a>
        </h1>

        <Navbar.Collapse id="basic-navbar-nav">
          <a href="/#" className="logo me-auto mobile-nav">
            <img src=" " alt="" />
          </a>
          <nav className="nav-menu">
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
            </ul>
          </nav>
        </Navbar.Collapse>
        <nav className="nav-menu ">
          <ul>
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    </header>
  );
}

export default NavBar;
