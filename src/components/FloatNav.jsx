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

  // TIMER FOR SHOWING FLOATING NAVIGATION
  useEffect(() => {
    let timeoutid;

    const handleScroll = () => {
      clearTimeout(timeoutid);
      setShowFloatNav(false);

      timeoutid = setTimeout(() => {
        setShowFloatNav(true);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutid);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // SETTING THE ACTIVE NAV LINK BASED ON SCROLLED POSITION
  useEffect(() => {
    const navlinks = document.querySelectorAll(".float-nav a");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
      const currentPosition = window.scrollY;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          currentPosition >= sectionTop - sectionHeight / 2 &&
          currentPosition < sectionTop + sectionHeight / 2
        ) {
          navlinks.forEach((link) => {
            link.classList.remove("active");
          });
          navlinks[index].classList.add("active");
        }
      });
    });
  }, []);

  return (
    <nav className={`float-nav ${showFloatNav ? "show" : ""}`}>
      <div className="icons">
        <a
          href="#"
          className="active"
          onClick={() => {
            setActive("#");
          }}
        >
          <FaHome />
        </a>
        <a
          href="#about"
          onClick={() => {
            setActive("#about");
          }}
        >
          <GoPersonFill />
        </a>
        <a
          href="#projects"
          onClick={() => {
            setActive("#projects");
          }}
        >
          <MdWork />
        </a>
        <a
          href="#skill"
          onClick={() => {
            setActive("#skill");
          }}
        >
          <FaTools />
        </a>
        <a
          href="#contact"
          onClick={() => {
            setActive("#contact");
          }}
        >
          <BsChatDotsFill />
        </a>
      </div>
    </nav>
  );
};

export default FloatNav;
