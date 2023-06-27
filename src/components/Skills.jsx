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
      viewport={{ once: false, amount: 0.35 }}
    >
      <h2>Tech stack</h2>
      <div className="skills">
        <motion.div
          className="skill"
          variants={skillVariant}
          exit={{ y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="skill-title">React</h3>
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
          <h3 className="skill-title">Javascript</h3>
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
          <h3 className="skill-title">HTML/CSS</h3>
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
          <h3 className="skill-title">Python</h3>
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
          <h3 className="skill-title">Version Control</h3>
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
          <h3 className="skill-title">GitHub</h3>
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
          <h3 className="skill-title">Responsive Design</h3>
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
