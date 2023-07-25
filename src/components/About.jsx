import React, { useMemo } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./../assets/styles/About.scss";

import profile from "./../assets/images/profile-pic.jpg";

const About = () => {
  useMemo(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <section id="about" className="about">
      <div className="image-container" data-aos="fade-right">
        <div className="image">
          <img src={profile} alt="profile pic" />
        </div>
      </div>

      <div className="text-container">
        <h2 data-aos="fade-up">About</h2>
        <p data-aos="fade-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          suscipit, rem numquam exercitationem dolorum obcaecati cum ipsum,
          tempora, consectetur nulla fuga ea quia fugit expedita culpa libero.
          Dolore, cupiditate nemo. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Autem tenetur dolore soluta alias, quae qui eaque
          maxime totam dicta itaque excepturi optio sunt esse iusto, labore
          tempore quam rem doloremque.
        </p>

        <a href="#projects">View Projects</a>
      </div>
    </section>
  );
};

export default About;
