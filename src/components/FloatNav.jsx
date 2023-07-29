import React, { useState, useEffect, useMemo, useCallback } from "react";

import "./../assets/styles/FloatNav.scss";

import { navLinksData } from "../data/link-data";

const FloatNav = () => {
  const [showFloatNav, setShowFloatNav] = useState(false);

  useEffect(() => {
    const navlink = document.querySelector(".float-nav li");
    navlink.classList.add("active");
  }, []);

  // TIMER FOR SHOWING FLOATING NAVIGATION
  useEffect(() => {
    let timeoutid;

    const handleScroll = () => {
      clearTimeout(timeoutid);
      setShowFloatNav(false);

      timeoutid = setTimeout(() => {
        setShowFloatNav(true);
      }, 800);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutid);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // SETTING THE ACTIVE NAV LINK BASED ON SCROLLED POSITION
  useEffect(() => {
    const home = navLinksData.id;
    const navlinks = document.querySelectorAll(".float-nav li");
    const sections = document.querySelectorAll(home);

    const inview = () => {
      const currentPosition = window.scrollY;

      sections?.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          currentPosition >= sectionTop - sectionHeight / 2 &&
          currentPosition < sectionTop + sectionHeight / 2
        ) {
          navlinks.forEach((link) => {
            link.classList.remove("active");
          });
          navlinks[index]?.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", inview);

    return () => {
      window.removeEventListener("scroll", inview);
    };
  }, []);

  const scrollToSection = useCallback((elementRef) => {
    if (elementRef === "#") {
      window.scrollTo({
        top: 0,
      });

      return;
    }
    const section = document.querySelector(elementRef);
    window.scrollTo({
      top: section?.offsetTop,
    });
  }, []);

  return (
    <nav className={`float-nav ${showFloatNav ? "show" : ""}`}>
      <div className="navigation">
        <ul className="icons">
          {navLinksData.links.map((data, id) => (
            <li key={id}>
              <div
                className="navigate"
                onClick={() => scrollToSection(data.to)}
              >
                <span className="icon">
                  <data.icon />
                </span>

                <span className="tooltip">{data.title}</span>
              </div>
            </li>
          ))}

          <div className="indicator"></div>
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(FloatNav);
