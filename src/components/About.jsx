import React from "react";
import "./../assets/styles/About.scss";

import { motion } from "framer-motion";

import profile from "./../assets/images/profile-pic.jpg";

const textVariant = {
  offscreen: {
    opacity: 0,
    x: "100vw",
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
const imageVariant = {
  offscreen: {
    opacity: 0,
    x: "-100vw",
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

const About = () => {
  return (
    <motion.section
      id="about"
      className="about"
      transition={{ staggerChildren: 0.4 }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.35 }}
    >
      <motion.div
        className="image-container"
        variants={imageVariant}
        exit={{ x: "-100vw" }}
        transition={{ duration: 2 }}
      >
        <div className="image">
          <img src={profile} alt="profile pic" />
        </div>
      </motion.div>

      <motion.div
        className="text-container"
        variants={textVariant}
        exit={{ x: "100vw" }}
        transition={{ duration: 2 }}
      >
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          suscipit, rem numquam exercitationem dolorum obcaecati cum ipsum,
          tempora, consectetur nulla fuga ea quia fugit expedita culpa libero.
          Dolore, cupiditate nemo. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Autem tenetur dolore soluta alias, quae qui eaque
          maxime totam dicta itaque excepturi optio sunt esse iusto, labore
          tempore quam rem doloremque.
        </p>

        <a href="#projects">View Projects</a>
      </motion.div>
    </motion.section>
  );
};

export default About;
