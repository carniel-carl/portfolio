import React, { useEffect, useState, useContext } from "react";

import "./../assets/styles/Navbar.scss";
import logo from "./../assets/images/logo.svg";

import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

import { themeContext } from "../App";

const Navbar = () => {
  const { themeToggler, lightTheme } = useContext(themeContext);

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
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
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

      <div className="toggle" onClick={themeToggler}>
        <span className="theme-icon">
          {lightTheme ? <FaMoon /> : <BsFillSunFill />}
        </span>
      </div>
    </header>
  );
};

export default Navbar;
