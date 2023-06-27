import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

import "./../assets/styles/Hero.scss";

import spark from "./../assets/images/spark-icon.svg";
import profile from "./../assets/images/profile-pic.jpg";

const upVariant = {
  offscreen: {
    opacity: 0,
    y: -60,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      duration: 1.5,
    },
  },
};

const downVariant = {
  offscreen: {
    opacity: 0,
    y: "80vh",
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

const slideVariant = {
  offscreen: {
    opacity: 0,
    x: "100vw",
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="hero"
      transition={{ staggerChildren: 0.8 }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.div variants={upVariant}>
        <Navbar />
      </motion.div>

      <div className="hero-items">
        <motion.div className="hero-text" variants={upVariant}>
          <motion.h2 variants={upVariant}>Hi, My Name is</motion.h2>
          <motion.a href="#about" className="name-span" variants={slideVariant}>
            <em>Nmugha Chimezie,</em>
            <div className="spark-image">
              <motion.img
                src={spark}
                alt="spark doodle"
                variants={slideVariant}
              />
            </div>
          </motion.a>
          <motion.h2 variants={downVariant}>
            I'm a Frontend{" "}
            <span className="react-span">
              <span className="code">&lt;</span>
              <em>React developer.</em> <span className="code">&#47;&gt;</span>
            </span>
          </motion.h2>
        </motion.div>
        <div className="hero-image">
          <img src={profile} alt="profile picture" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
