import React, { useEffect, useState, useContext } from "react";

import "./../assets/styles/Navbar.scss";
import logo from "./../assets/images/logo.svg";

import { themeContext } from "../App";

const Navbar = () => {
  const { themeToggler } = useContext(themeContext);

  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" aria-hidden="true" />
        </a>
      </div>
      <div className="nav-dropdown">
        <nav>
          <ul>
            <li>
              <a href="#about">about me</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="toggle">
        <div className="flipswitch">
          <input
            type="checkbox"
            name="flipswitch"
            className="flipswitch-cb"
            id="fs"
            onChange={themeToggler}
          />
          <label className="flipswitch-label" htmlFor="fs">
            <div className="flipswitch-inner"></div>
            <div className="flipswitch-switch"></div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
