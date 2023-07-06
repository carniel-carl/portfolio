import React from "react";
import icon from "./../assets/images/react-icon.svg";
import { motion } from "framer-motion";

import "./../assets/styles/Contact.scss";

import { BiSend } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";

// MOTION VARAIANT
const titleVariant = {
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
const hireVariant = {
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
const emailVariant = {
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

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact"
      transition={{ staggerChildren: 0.2 }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.35 }}
    >
      <motion.h2
        variants={titleVariant}
        exit={{ y: -50 }}
        transition={{ duration: 0.5 }}
      >
        Excited to elevate your digital footprint to stellar height? Let's talk!
      </motion.h2>

      <div className="connect">
        <motion.div
          variants={hireVariant}
          className="hire-container"
          exit={{ x: "-100vw" }}
          transition={{ duration: 2 }}
        >
          <h4>Hire me</h4>
          <a href="/" className="btn">
            <span>Download resume</span>
            <HiDownload />
          </a>
        </motion.div>

        <motion.div
          variants={emailVariant}
          className="email-container"
          exit={{ x: "100vw" }}
          transition={{ duration: 2 }}
        >
          <h4>Write a project to me</h4>
          <form action="" className="project-form">
            <div className="input-area">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="input"
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-area">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                className="input"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-area textarea">
              <textarea
                type="textarea"
                name="project"
                id="project"
                placeholder="project"
                className="input"
              />
              <label htmlFor="project">Project</label>
            </div>

            <button className="submit">
              <span>Send</span>
              <BiSend />
            </button>
          </form>
        </motion.div>
      </div>

      <div className="react-cont">
        <img src={icon} alt="react icon" />
      </div>
    </motion.section>
  );
};

export default Contact;
