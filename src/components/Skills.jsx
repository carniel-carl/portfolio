import React from "react";
import arrow from "./../assets/images/arrow-icon.svg";
import heart from "./../assets/images/heart-icon.svg";

import "./../assets/styles/Skills.scss";

const Skills = () => {
  return (
    <section id="skill" className="skill-container">
      <h2>Tech stack</h2>
      <div className="skills">
        <div className="skill">
          <h3 className="skill-title">Javascript</h3>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>
        <div className="skill">
          <h3 className="skill-title">React</h3>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>
        <div className="skill">
          <h3 className="skill-title">HTML/CSS</h3>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>
        <div className="skill">
          <h3 className="skill-title">Version Control</h3>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>
        <div className="skill">
          <h3 className="skill-title">GitHub</h3>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>
        <div className="skill">
          <h3 className="skill-title">Responsive Design</h3>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>
      </div>
      <img src={heart} alt="heart image" className="heart" aria-hidden="true" />
    </section>
  );
};

export default Skills;
