import React from "react";

import "./../assets/styles/Footer.scss";

import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { socialLinks as links } from "../data/link-data";

const Footer = () => {
  let today = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="icons">
        <ul>
          <li>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href={links.github} target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href={links.twitter} target="_blank" rel="noreferrer">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href={links.instagram} target="_blank" rel="noreferrer">
              <BsInstagram />
            </a>
          </li>
        </ul>
      </div>
      <p>all right reserved, Nmugha Chimezie &copy;{today}</p>
    </footer>
  );
};

export default Footer;
