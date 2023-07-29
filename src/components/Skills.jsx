import React, { useMemo } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import arrow from "./../assets/images/arrow-icon.svg";

import "./../assets/styles/Skills.scss";

const Skills = () => {
  useMemo(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <section id="skill" className="skill-container home">
      <h2 data-aos="fade-up">Skills</h2>
      <div className="skills">
        <div className="skill" data-aos="fade-up">
          <p className="skill-title">ReactJs</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>
        <div className="skill" data-aos="fade-up">
          <p className="skill-title">Javascript</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>
        <div className="skill" data-aos="fade-up">
          <p className="skill-title">HTML</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>
        <div className="skill" data-aos="fade-up">
          <p className="skill-title">CSS/SCCS (BEM)</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>
        <div className="skill" data-aos="fade-up">
          <p className="skill-title">Tailwind</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>
        <div className="skill" data-aos="fade-up">
          <p className="skill-title">Python</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>
        <div className="skill" data-aos="fade-up">
          <p className="skill-title">Version Control</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>

        <div className="skill" data-aos="fade-up">
          <p className="skill-title">Responsive Design</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
