import React, { useMemo } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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

const Project = () => {
  useMemo(() => {
    Aos.init({ duration: 800 });
  }, []);
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
          {datas.map((data) => {
            return (
              <SwiperSlide className="project" key={data.id}>
                <div className="project__image"></div>
                <div className="project__title">
                  <p>{data.name}</p>
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
