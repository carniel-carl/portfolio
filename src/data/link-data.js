import { FaHome, FaTools, FaReact, FaPython } from "react-icons/fa";
import { BsChatDotsFill, BsGit, BsGithub } from "react-icons/bs";
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoDjango,
  BiLogoNodejs,
  BiLogoFirebase,
  BiLogoPostgresql,
  BiLogoMongodb,
} from "react-icons/bi";
import { GoPersonFill } from "react-icons/go";
import { MdWork } from "react-icons/md";
import { PiFileSql } from "react-icons/pi";
import {
  SiRedux,
  SiTypescript,
  SiJest,
  SiSass,
  SiTailwindcss,
  SiWebpack,
  SiSqlite,
  SiReactrouter,
  SiNextdotjs,
} from "react-icons/si";

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

export const skillsData = [
  {
    title: "React",
    icon: FaReact,
  },
  {
    title: "React Router",
    icon: SiReactrouter,
  },
  {
    title: "NextJs",
    icon: SiNextdotjs,
  },
  {
    title: "JavaScript",
    icon: BiLogoJavascript,
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
  },
  {
    title: "Jest",
    icon: SiJest,
  },
  {
    title: "Redux",
    icon: SiRedux,
  },
  {
    title: "HTML",
    icon: BiLogoHtml5,
  },
  {
    title: "CSS",
    icon: BiLogoCss3,
  },
  {
    title: "SASS",
    icon: SiSass,
  },
  {
    title: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    title: "Python",
    icon: FaPython,
  },
  {
    title: "Django",
    icon: BiLogoDjango,
  },
  {
    title: "Node",
    icon: BiLogoNodejs,
  },
  {
    title: "Firebase",
    icon: BiLogoFirebase,
  },
  {
    title: "Webpack",
    icon: SiWebpack,
  },
  {
    title: "SQL",
    icon: PiFileSql,
  },
  {
    title: "SQLite",
    icon: SiSqlite,
  },
  {
    title: "PostgresSQL",
    icon: BiLogoPostgresql,
  },
  {
    title: "MongoDB",
    icon: BiLogoMongodb,
  },
  {
    title: "Git",
    icon: BsGit,
  },
  {
    title: "GitHub",
    icon: BsGithub,
  },
];
