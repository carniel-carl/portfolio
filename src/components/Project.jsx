import React, { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
} from "swiper/modules";

// Import Swiper styles
import "swiper/scss";
import "swiper/css/effect-coverflow";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/css/scrollbar";

import "../assets/styles/Project.scss";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

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

const upVariant = {
  offscreen: {
    opacity: 0,
    y: -50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
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
      type: "tween",
      duration: 1,
    },
  },
};

const Project = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      transition={{ staggerChildren: 0.8 }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.35 }}
    >
      <motion.h2
        className="projects__heading"
        variants={upVariant}
        exit={{ y: -50 }}
        transition={{ duration: 0.5 }}
      >
        Check out some of my exciting projects
      </motion.h2>
      <motion.div
        className="carousel"
        variants={slideVariant}
        exit={{ x: "100vw" }}
        transition={{ duration: 0.8 }}
      >
        <Swiper
          slidesPerView={2}
          spaceBetween={35}
          breakpoints={{
            600: {
              slidesPerView: "auto",
            },
            0: {
              slidesPerView: 1,
            },
          }}
          grabCursor={true}
          centeredSlides={false}
          loop={false}
          direction="horizontal"
          pagination={{
            el: ".slider-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".slider-controls__next",
            prevEl: ".slider-controls__prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Scrollbar]}
          className="projects_content"
        >
          {datas.map((data) => {
            return (
              <SwiperSlide className="project" key={data.id}>
                <div className="project__image"></div>
                <div className="project__title">
                  <h3>{data.name}</h3>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="slider-controls">
            <div className="slider-controls__prev">
              <FaChevronLeft />
            </div>
            <div className="slider-controls__next">
              <FaChevronRight />
            </div>

            <div className="slider-pagination"></div>
          </div>
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Project;
