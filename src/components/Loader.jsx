import React from "react";
import "./../assets/styles/Loader.scss";

const Loader = ({ open }) => {
  return (
    <div className={`load ${open ? "open" : ""}`}>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
