import React from "react";
import "./../assets/styles/Footer.scss";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  let today = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="icons">
        <ul>
          <li>
            <a href="/">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="/">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="/">
              <BsTwitter />
            </a>
          </li>
        </ul>
      </div>
      <p>all right reserved, Nmugha Chimezie &copy;{today}</p>
    </footer>
  );
};

export default Footer;
