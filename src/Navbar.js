import React from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <header id="header" className="fixed-top">
      <Navbar expand="lg" className="container">
        <h1 className="logo me-auto">
          <a href="index.html">
            Ryad Coach Sportif<span>.</span>
          </a>
        </h1>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <a href="/#" className="logo me-auto">
              <img src="assets/img/logo.png" alt="" />
            </a>
            <nav className="nav-menu d-lg-block ">
              <ul>
                <li>
                  <a href="/home">Acceuil</a>
                </li>
                <li>
                  <a href="/#about">A propos</a>
                </li>
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li>
                  <a href="/#pricing">Abonnements</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>

                <li>
                  <a href="/#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </Nav>
        </Navbar.Collapse>
        <nav className="nav-menu d-lg-block ">
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
