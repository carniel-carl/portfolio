import React, { useMemo } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import icon from "./../assets/images/react-icon.svg";
import "./../assets/styles/Contact.scss";

import { BiSend } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";

const Contact = () => {
  useMemo(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <section id="contact" className="contact">
      <h2 data-aos="fade-up">contact</h2>

      <div className="connect">
        <div className="hire-container" data-aos="fade-right">
          <p>Hire me</p>
          <a href="/" className="btn">
            <span>Download resume</span>
            <HiDownload />
          </a>
        </div>

        <div className="email-container" data-aos="fade-left">
          <p>Connect with me</p>
          <div className="project-form">
            <form action="">
              <div className="input-area">
                <input type="text" name="name" required className="input" />
                <span className="label">Name</span>
              </div>
              <div className="input-area">
                <input type="text" name="email" required className="input" />
                <span className="label">Email</span>
              </div>
              <div className="input-area textarea">
                <textarea
                  type="textarea"
                  name="project"
                  required
                  className="input"
                />
                <span className="label">Project</span>
              </div>

              <button className="submit">
                <span>Send</span>
                <BiSend />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="react-cont">
        <img src={icon} alt="react icon" />
      </div>
    </section>
  );
};

export default Contact;
