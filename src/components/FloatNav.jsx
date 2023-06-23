import React, { useState, useEffect } from "react";
import "./../assets/styles/FloatNav.scss";

import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { GoPersonFill } from "react-icons/go";
import { MdWork } from "react-icons/md";

const FloatNav = () => {
  const [showFloatNav, setShowFloatNav] = useState(false);
  const [active, setActive] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 120;

      if (scrollPosition > triggerPoint) {
        setShowFloatNav(true);
      } else {
        setShowFloatNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`float-nav ${showFloatNav ? "show" : null}`}>
      <div className="icons">
        <a
          href="#"
          onClick={() => {
            setActive("#");
          }}
          className={active === "#" ? "active" : ""}
        >
          <FaHome />
        </a>
        <a
          href="#about"
          onClick={() => {
            setActive("#about");
          }}
          className={active === "#about" ? "active" : ""}
        >
          <GoPersonFill />
        </a>
        <a
          href="#project"
          onClick={() => {
            setActive("#project");
          }}
          className={active === "#project" ? "active" : ""}
        >
          <MdWork />
        </a>
        <a
          href="#skill"
          onClick={() => {
            setActive("#skill");
          }}
          className={active === "#skill" ? "active" : ""}
        >
          <FaTools />
        </a>
        <a
          href="#contact"
          onClick={() => {
            setActive("#contact");
          }}
          className={active === "#contact" ? "active" : ""}
        >
          <BsChatDotsFill />
        </a>
      </div>
    </nav>
  );
};

export default FloatNav;
