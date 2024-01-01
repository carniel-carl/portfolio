import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

import "./../assets/styles/Hero.scss";
import profile from "./../assets/images/profile-pic.jpg";

import Typing from "./Typing";

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
      delay: 1,
    },
  },
};

const downVariant = {
  offscreen: {
    opacity: 0,
    y: 60,
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

const slideVariant = {
  offscreen: {
    opacity: 0,
    x: 100,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      duration: 1.5,
    },
  },
};

const titles = ["Nmugha Chimezie.", "Carniel."];

const bubble = Array.from({ length: 6 });

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="hero home"
      transition={{ staggerChildren: 0.9 }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={upVariant}>
        <Navbar />
      </motion.div>

      <div className="hero-items">
        <div className="hero-text">
          <motion.h2 variants={upVariant}>Hi, I'm</motion.h2>

          <motion.a href="#about" className="name-span" variants={slideVariant}>
            <Typing titles={titles} />
          </motion.a>

          <motion.h2 variants={downVariant}>
            I'm a Frontend{" "}
            <span className="react">
              <span aria-label="react">&lt; </span>
              <em> Developer </em>
              <span aria-label="react">/&gt;</span>
            </span>
          </motion.h2>
        </div>
      </div>
      <div>
        <img
          className="bg"
          src={profile}
          alt="background"
          loading="lazy"
          role="presentation"
        />
      </div>

      <ul>
        {bubble.map((_, i) => (
          <li className="bubble" key={i}></li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Hero;
