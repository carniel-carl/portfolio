import React from "react";
import "./../assets/styles/About.scss";

import profile from "./../assets/images/profile-pic.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="text-container">
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          suscipit, rem numquam exercitationem dolorum obcaecati cum ipsum,
          tempora, consectetur nulla fuga ea quia fugit expedita culpa libero.
          Dolore, cupiditate nemo. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Autem tenetur dolore soluta alias, quae qui eaque
          maxime totam dicta itaque excepturi optio sunt esse iusto, labore
          tempore quam rem doloremque. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
        </p>

        <a href="#projects">View Projects</a>
      </div>

      <div className="image-container">
        <img src={profile} alt="profile pic" />
      </div>
    </section>
  );
};

export default About;
