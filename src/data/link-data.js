import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { GoPersonFill } from "react-icons/go";
import { MdWork } from "react-icons/md";

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/carniel1/",
  github: "https://github.com/carniel-carl",
  twitter: "https://twitter.com/dripcarniel",
};

export const navLinksData = {
  id: ".home",
  links: [
    {
      title: "home",
      to: "#",
      icon: FaHome,
    },
    {
      title: "About",
      to: "#about",
      icon: GoPersonFill,
    },
    {
      title: "projects",
      to: "#projects",
      icon: MdWork,
    },
    {
      title: "skills",
      to: "#skill",
      icon: FaTools,
    },
    {
      title: "contact",
      to: "#contact",
      icon: BsChatDotsFill,
    },
  ],
};
