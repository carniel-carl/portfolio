import React, { useEffect, useState, useContext, useRef } from "react";
import iro from "@jaames/iro";

import "./../assets/styles/Navbar.scss";

import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

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
  }, []);

  //  FOR SHOWING THE COLOR WHEEL AND SETTING VALUE
  useEffect(() => {
    const picker = document.getElementById("picker");
    const colorPicker = new iro.ColorPicker(picker, {
      width: 250,
      color: accent,
      wheelLightness: false,
      sliderSize: 20,
      handleRadius: 12,

      layout: [
        {
          component: iro.ui.Box,
          options: {},
        },
        {
          component: iro.ui.Slider,
          options: {
            sliderType: "hue",
          },
        },
      ],
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
      localStorage.setItem("accent", value);
    });
  }, []);

  //  TO PREVENT SCROLLING WHEN DROPDOWN IS VISIBLE
  useEffect(() => {
    showDropdown
      ? document.body.classList.add("hidden")
      : document.body.classList.remove("hidden");
  }, [showDropdown]);

  return (
    <>
      <header>
        <div className="logo">
          <a href="/">
            <p className="logo__title">
              Car<span>Niel</span>
            </p>
          </a>
        </div>
        {/* <div className="nav-dropdown">
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
      </div> */}

        <span onClick={themeToggler} className="mode-icon">
          {lightTheme ? <FaMoon /> : <BsFillSunFill />}
        </span>
        <div className="toggle" ref={dropdownRef}>
          <div
            className="theme-icon"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            {showDropdown ? <AiOutlineClose /> : <IoColorPaletteSharp />}
          </div>

          <div
            className={`color-picker ${showDropdown ? "show-dropdown" : ""}`}
          >
            <div id="picker" className="picker"></div>
          </div>
        </div>
      </header>

      {/* <div className="backdrop" /> */}
    </>
  );
};

export default React.memo(Navbar);
