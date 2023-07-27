import React, { useEffect, useState, useContext, useRef } from "react";
import iro from "@jaames/iro";

import "./../assets/styles/Navbar.scss";

import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";

import { themeContext } from "../App";

const Navbar = () => {
  const { themeToggler, lightTheme, accent } = useContext(themeContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  //  FOR CLOSING THE DROPDOWN WHEN THE BODY IS CLICKED

  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  //  FOR SHOWING THE COLOR WHEEL AND SETTING VALUE
  useEffect(() => {
    const picker = document.getElementById("picker");
    const colorPicker = new iro.ColorPicker(picker, {
      width: 200,
      color: "#eb5e27",
      wheelLightness: false,
      sliderSize: 10,
      handleRadius: 10,
    });

    colorPicker.on("color:change", (color) => {
      if (color.saturation < 20) {
        color.saturation = 20;
      }

      if (color.value < 30) {
        color.value = 30;
      }

      const value = color.hexString;
      document.documentElement.style.setProperty("--accent", value);
      const accentValue = value.substring(1);
      localStorage.setItem("accent", value);
    });
  }, []);

  //  TO PREVENT SCROLLING WHEN DROPDOWN IS VISIBLE
  useEffect(() => {
    showDropdown
      ? document.body.classList.add("hidden")
      : document.body.classList.remove("hidden");
  });

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

      <div className="toggle" ref={dropdownRef}>
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
