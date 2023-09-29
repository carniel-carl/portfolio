import React, { useState, useRef, useEffect } from "react";

import { useForm, ValidationError } from "@formspree/react";

import icon from "./../assets/images/react-icon.svg";
import "./../assets/styles/Contact.scss";

import { HiDownload } from "react-icons/hi";
import CheckMark from "./UI/CheckMark";

const id = import.meta.env.VITE_FORM_ID;

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const msgRef = useRef("");

  const [state, handleSubmit] = useForm(id);

  useEffect(() => {
    const timer = setTimeout(() => {
      nameRef.current.value = "";
      emailRef.current.value = "";
      msgRef.current.value = "";
    }, 2000);

    return () => clearInterval(timer);
  }, [state.succeeded, state.submitting]);

  return (
    <section id="contact" className="contact home">
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
            <form onSubmit={handleSubmit} method="post">
              <div className="input-area">
                <input
                  type="text"
                  name="name"
                  required
                  className="input"
                  ref={nameRef}
                />
                <span className="label">Name</span>
              </div>

              <div className="input-area">
                <input
                  type="email"
                  name="email"
                  required
                  className="input"
                  id="email"
                  ref={emailRef}
                />
                <span className="label">Email</span>
              </div>

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className="input-area textarea">
                <textarea
                  type="textarea"
                  name="message"
                  id="message"
                  required
                  className="input"
                  ref={msgRef}
                />
                <span className="label">Project</span>
              </div>

              <button className="submit">
                <span>Send</span>
                <CheckMark />
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
