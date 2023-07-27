import React, { useEffect, useState, useContext } from "react";
import iro from "@jaames/iro";

import "./../assets/styles/Navbar.scss";

import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";

import { themeContext } from "../App";

const Navbar = () => {
  const { themeToggler, lightTheme } = useContext(themeContext);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const picker = document.getElementById("picker");
    const colorPicker = new iro.ColorPicker(picker, {
      width: 200,
      color: "#eb5e27",
      wheelLightness: false,
    });

    colorPicker.on("color:change", (color) => {
      const value = color.hexString;
      document.documentElement.style.setProperty("--accent", value);
    });
  }, []);

  useEffect(() => {
    showDropdown
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, []);

  return (
    <header>
      <div className="logo">
        <a href="#">
          <p className="logo__title">
            Car<span>Niel</span>
          </p>
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

      <div className="toggle">
        <IoColorPaletteSharp
          className="theme-icon"
          onClick={() => setShowDropdown((prev) => !prev)}
        />

        <div className={`color-picker ${showDropdown ? "show-dropdown" : ""}`}>
          <div id="picker" className="picker"></div>
          <span onClick={themeToggler}>
            {lightTheme ? <FaMoon /> : <BsFillSunFill />}
          </span>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navbar);
