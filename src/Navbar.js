import React from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { Navbar, Dropdown } from "react-bootstrap";

function NavBar() {
  return (
    <div id="header" className="container">
      <Navbar expand="lg">
        <h1 className="logo me-auto">
          <a href="index.html">
            Ryad Coach Sportif<span>.</span>
          </a>
        </h1>

        <Navbar.Collapse id="basic-navbar-nav">
          <a href="/#" className="logo me-auto">
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
          <Dropdown>
            <Dropdown.Toggle variant=" " id="dropdown-basic">
              <CgProfile size="30px" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Inscription</Dropdown.Item>
              <Dropdown.Item href="#/action-2">connexion</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    </div>
  );
}

export default NavBar;
