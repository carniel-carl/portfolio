import React, { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

const Project = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__heading">
        Check out some of my exciting projects
      </h2>
      <div className="carousel">
        <Swiper
          slidesPerView={"auto"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          pagination={{ el: ".slider-pagination", clickable: true }}
          navigation={{
            nextEl: ".slider-controls__next",
            prevEl: ".slider-controls__prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
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
      </div>
    </section>
  );
};

export default Project;
