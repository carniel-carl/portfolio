import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./../../assets/styles/UI/SkillCard.scss";

const SkillCard = ({ title, icon }) => {
  return (
    <article className="skill-card" data-aos="fade-up">
      <div className="skill-card__icon">{icon}</div>
      <p className="skill-card__title">{title}</p>
    </article>
  );
};

export default SkillCard;
