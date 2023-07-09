import React, { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "../assets/styles/Project.scss";

import { motion } from "framer-motion";

const datas = [
  {
    id: 1,
    name: "Book App",
  },
  {
    id: 2,
    name: "Book App 2",
  },
  {
    id: 3,
    name: "Book App 3",
  },
  {
    id: 4,
    name: "Book App 4",
  },
  {
    id: 5,
    name: "Book App 5",
  },
  {
    id: 6,
    name: "Book App 6",
  },
  {
    id: 7,
    name: "Book App 7",
  },
];

const projectVariant = {
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

const carouselVariant = {
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

const Project = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    let scrol = carouselRef.current.scrollWidth;
    let win = carouselRef.current.offsetWidth;
    setWidth(scrol - win + 32);
  }, []);

  return (
    <motion.section
      transition={{ staggerChildren: 0.5 }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.35 }}
      id="projects"
      className="projects"
    >
      <motion.h2
        variants={projectVariant}
        exit={{ y: -50 }}
        transition={{ duration: 0.5 }}
        className="projects__heading"
      >
        Check out some of my exciting projects
      </motion.h2>
      <motion.div
        ref={carouselRef}
        whileTap={{ cursor: "grabbing" }}
        variants={carouselVariant}
        exit={{ x: "-100vw" }}
        transition={{ duration: 2 }}
        className="carousel"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="projects_content"
        >
          {datas.map((data) => {
            return (
              <motion.div className="project" key={data.id}>
                <div className="project__image"></div>
                <div className="project__title">
                  <h3>{data.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="controls"></div>
      </motion.div>
    </motion.section>
  );
};

export default Project;
