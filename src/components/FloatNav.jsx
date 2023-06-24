import React, { useState, useEffect } from "react";
import "./../assets/styles/FloatNav.scss";

import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { GoPersonFill } from "react-icons/go";
import { MdWork } from "react-icons/md";

const FloatNav = () => {
  const [showFloatNav, setShowFloatNav] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const [active, setActive] = useState("#");

  // TIMER FOR SHOWING FLOATING NAVIGATION
  useEffect(() => {
    let timeoutid;

    const handleScroll = () => {
      clearTimeout(timeoutid);
      setIsScrolling(true);

      timeoutid = setTimeout(() => {
        setIsScrolling(false);
        setShowFloatNav(true);
      }, 1200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutid);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // SHOWING THE FLOATING NAVIGATION
  useEffect(() => {
    const handleScrollResume = () => {
      setShowFloatNav(false);
    };

    window.addEventListener("scroll", handleScrollResume);

    return () => {
      window.removeEventListener("scroll", handleScrollResume);
    };
  }, []);

  // SETTING THE ACTIVE NAV LINK BASE ON SCROLL
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

          // sections.forEach((sec) => {
          //   sec.classList.remove("animate");
          // });
          // section.classList.add("animate");
        }
      });
    });
  }, []);

  return (
    <nav className={`float-nav ${showFloatNav ? "show" : ""}`}>
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
