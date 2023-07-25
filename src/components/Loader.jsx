import React, { useEffect, useMemo, useRef } from "react";
import "./../assets/styles/Loader.scss";

const Loader = () => {
  const ref = useRef(null);

  // TIMER FOR CLEARING OUT THE LOADING SCREEN
  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current.className = "loader open";
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="loader" ref={ref}>
      <h1>Hello</h1>
    </div>
  );
};

export default Loader;
