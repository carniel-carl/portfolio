import React from "react";
import Navbar from "./Navbar";

import "./../assets/styles/Hero.scss";

import spark from "./../assets/images/spark-icon.svg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <Navbar />

      <h1>
        Hi, My Name is{" "}
        <a href="#about" className="name-span">
          <em>Nmugha Chimezie,</em>
          <div className="spark-image">
            <img src={spark} alt="spark doodle" />
          </div>
        </a>
        I'm a Frontend{" "}
        <span className="react-span">
          <span className="code">&lt;</span>
          <em>React developer.</em> <span className="code">&#47;&gt;</span>
        </span>
      </h1>
    </section>
  );
};

export default Hero;
