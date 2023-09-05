import React, { useCallback, useEffect, useRef } from "react";
import "./../assets/styles/ScrollToTop.scss";

import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const pageHeight = document.body.scrollHeight;

    window.addEventListener("scroll", () => {
      const position = window.scrollY;
      if (position > pageHeight - pageHeight / 4.5) {
        document.documentElement.style.setProperty("--display", "block");
      } else {
        document.documentElement.style.setProperty("--display", "none");
      }
    });
  });

  const scrollUp = useCallback(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div ref={scrollRef} className="scroll-top">
      <div className="arrow" onClick={scrollUp}>
        <FaArrowUp />
      </div>
    </div>
  );
};

export default ScrollToTop;
