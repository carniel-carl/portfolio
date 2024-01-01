import React, { useMemo } from "react";

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

import projectData from "../data/project-data";

const Project = () => {
  return (
    <section id="projects" className="projects home">
      <h2 className="projects__heading" data-aos="fade-up">
        Projects
      </h2>
      <div className="carousel" data-aos="zoom-in">
        <Swiper
          slidesPerView="auto"
          spaceBetween={32}
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
          {projectData?.map((data, index) => {
            return (
              <SwiperSlide className="project" key={index}>
                <div className="project__image">
                  <img src={data?.img} alt={data.name} />
                </div>
                <div className="project__title">
                  <p>{data.name}</p>
                </div>
                <div className="preview_btns">
                  <a
                    href={data?.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Preview
                  </a>
                  <a
                    href={data?.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
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
