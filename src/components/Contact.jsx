import React, { useState, useRef, useEffect } from "react";

import { useForm, ValidationError } from "@formspree/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import icon from "./../assets/images/react-icon.svg";
import "./../assets/styles/Contact.scss";

import { HiDownload } from "react-icons/hi";
import LoadingSpinner from "./UI/LoadingSpinner";

const id = import.meta.env.VITE_FORM_ID;
import { BsGithub } from "react-icons/bs";

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

  const notify = () => toast.success("Message sent successfully");

  useEffect(() => {
    if (state.succeeded) {
      notify();
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="contact home">
      <h2 data-aos="fade-up">contact</h2>
      <ToastContainer />

      <div className="connect">
        <div className="hire-container" data-aos="fade-right">
          <p>Hire me</p>
          <div className="hire-btns">
            <a
              href="CHIMEZIE RESUME"
              className="btn"
              download="CHIMEZIE RESUME.pdf"
              target="_blank"
            >
              <span>Download resume</span>
              <HiDownload />
            </a>

            <a
              href="https://github.com/carniel-carl"
              className="btnSec"
              target="_blank"
            >
              <span>Github</span>
              <BsGithub />
            </a>
          </div>
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

              <button className="submit" disabled={state.submitting}>
                {state.submitting ? <LoadingSpinner /> : <span>Send</span>}
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
