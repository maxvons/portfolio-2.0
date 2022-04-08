import { Project } from "../types/types";

import PortfolioMockup from "/public/images/portfolio-new-mockup.png";
import WilfoMockup from "/public/images/wilfo-mockup.png";
import RevmatologenMockup from "/public/images/revmatologen-mockup.png";

const projectData = {
  [Project.PORTFOLIONEW]: {
    title: "Portfolio 2.0",
    description:
      "The second and updated version of my personal portfolio.\nA big leap forwards in terms of design, performance, and general usability.\nAbout, projects, contact and more.",
    tags: ["Next.js", "React", "TypeScript", "SCSS"],
    gitHref: "https://github.com/maxvons/portfolio-2.0",
    href: "https://maxvons.dev",
    image: PortfolioMockup,
    imageAlt: "A screenshot of Maximilian von Stephanides' new portfolio",
    imageWidth: 1749,
    imageHeight: 1106,
  },
  [Project.WILFO]: {
    title: "What I've learned from others",
    description:
      "A concept and blog by Maximilian von Stephanides.\nA place where I post more or less technical articles, reviews, career tips, and more.\nAlso contains a growing collection of useful resources I've found over the years.",
    tags: ["Gatsby", "React", "TypeScript", "GraphQL", "SCSS"],
    gitHref: "https://github.com/maxvons/blog",
    href: "https://github.com/maxvons/blog",
    image: WilfoMockup,
    imageAlt:
      "A screenshot of Maximilian von Stephanides' blog, What I've Learned from Others",
    imageWidth: 1695,
    imageHeight: 1245,
  },
  [Project.REVMATOLOGEN]: {
    title: "Dr. Signe von Stephanides",
    description:
      "A homepage and digital presence for Dr. Signe von Stephanides.\nA project I worked on through my company, Decidable, where I was responsible for the design, and most of the development and maintenance of the website.\nThis was Decidable's first client project.",
    tags: ["Next.js", "React", "TypeScript", "SCSS"],
    gitHref: "",
    href: "https://revmatologen.no",
    image: RevmatologenMockup,
    imageAlt: "Multiple screenshots of Dr. Signe von Stephanides' homepage",
    imageWidth: 1774,
    imageHeight: 1292,
  },
  [Project.HAUGESUND]: {
    title: "Haugesund Øyelegesenter",
    description:
      "A custom-built digital presence for the eye clinic, Haugesund Øyelegesenter.",
    tags: ["HTML", "CSS", "JS", "localStorage"],
    gitHref: "https://github.com/maxvons/haugesund_oyelegesenter",
    href: "https://haugesundos.netlify.app/",
    image: "",
    imageAlt: "",
    imageWidth: 0,
    imageHeight: 0,
  },
  [Project.CLEANLIST]: {
    title: "Clean List",
    description: "A simple and clean to-do list for all your important tasks.",
    tags: ["HTML", "CSS", "JS", "localStorage"],
    gitHref: "https://github.com/maxvons/CleanList",
    href: "https://www.cleanlist.dev/",
    image: "",
    imageAlt: "",
    imageWidth: 0,
    imageHeight: 0,
  },
  [Project.PORTFOLIO]: {
    title: "Portfolio",
    description:
      "The first digital product I created and published on the web. Made me hungry for more.",
    tags: ["HTML", "CSS", "JS", "localStorage"],
    gitHref: "https://github.com/maxvons/portfolio",
    href: "https://www.maxvons.no/",
    image: "",
    imageAlt: "",
    imageWidth: 0,
    imageHeight: 0,
  },
};

export { projectData };
