import React from "react";
import icon from "./../assets/images/react-icon.svg";

import "./../assets/styles/Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>
        Excited to elevate your digital footprint to stellar height? Let's talk!
      </h2>

      <div className="buttons">
        <a href="/" className="primary">
          Contact me
        </a>
        <a href="/" className="btn">
          Download resume
        </a>
      </div>

      <div className="react-cont">
        <img src={icon} alt="react icon" />
      </div>
    </section>
  );
};

export default Contact;
