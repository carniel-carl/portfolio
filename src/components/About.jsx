import React, { useMemo } from "react";

import "./../assets/styles/About.scss";

import profile from "./../assets/images/profile-pic.jpg";

const About = () => {
  return (
    <section id="about" className="about home">
      <div className="image-container" data-aos="fade-right">
        <div className="image">
          <img src={profile} alt="profile pic" />
        </div>
      </div>

      <div className="text-container">
        <h2 data-aos="fade-up">About</h2>
        <p data-aos="fade-left">
          I'm a passionate individual who discovered my love for coding when I
          needed a website for my Art business. Since then, I've immersed myself
          in the world of technology, continually expanding my coding skills and
          exploring the endless possibilities it offers. I find joy in bringing
          creativity and functionality together through code, making my journey
          in the tech world both fulfilling and exciting.
        </p>

        <div className="btns">
          <a
            href="CHIMEZIE RESUME.pdf"
            className="cv-link"
            download="CHIMEZIE RESUME"
            target="_blank"
          >
            Download CV
          </a>
          <a href="#projects">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default About;
