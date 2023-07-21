import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

import "./../assets/styles/Hero.scss";

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
    },
  },
};

const titles = ["Nmugha Chimezie", "React Developer", "Frontend Developer"];

const Hero = () => {
  // Background parallax
  useEffect(() => {
    const parallax = document.querySelector(".bg");

    const scrollOffset = () => {
      let offset = window.scrollY;
      parallax.style.backgroundPositionY = -offset * 0.5 + "px";
    };

    window.addEventListener("scroll", scrollOffset);

    return () => {
      window.removeEventListener("scroll", scrollOffset);
    };
  }, []);

  return (
    <motion.section
      id="hero"
      className="hero"
      transition={{ staggerChildren: 0.8 }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={upVariant}>
        <Navbar />
      </motion.div>

      <div className="hero-items">
        <div className="hero-text" variants={upVariant}>
          <motion.h2 variants={upVariant}>Hi, I'm</motion.h2>

          <a href="#about" className="name-span">
            <Typing />
          </a>
        </div>
      </div>
      <div className="bg"></div>
    </motion.section>
  );
};

export default Hero;
