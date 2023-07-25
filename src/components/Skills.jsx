import React from "react";
import { motion } from "framer-motion";

import arrow from "./../assets/images/arrow-icon.svg";
import heart from "./../assets/images/heart-icon.svg";

import "./../assets/styles/Skills.scss";

const skillVariant = {
  offscreen: {
    opacity: 0,
    y: -50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skill"
      className="skill-container"
      transition={{ staggerChildren: 0.5 }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.35 }}
    >
      <h2>Tech stack</h2>
      <div className="skills">
        <motion.div
          className="skill"
          variants={skillVariant}
          exit={{ y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="skill-title">ReactJs</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariant}
          exit={{ y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="skill-title">Javascript</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariant}
          exit={{ y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="skill-title">HTML</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariant}
          exit={{ y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="skill-title">CSS/SCCS (BEM)</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariant}
          exit={{ y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="skill-title">Tailwind</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariant}
          exit={{ y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="skill-title">Python</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariant}
          exit={{ y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="skill-title">Version Control</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </motion.div>

        <motion.div
          className="skill"
          variants={skillVariant}
          exit={{ y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="skill-title">Responsive Design</p>
          <div className="skill-dash"></div>
          <div className="skill-arrow">
            <img src={arrow} alt="arrow icon" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
      <img src={heart} alt="heart image" className="heart" aria-hidden="true" />
    </motion.section>
  );
};

export default Skills;
