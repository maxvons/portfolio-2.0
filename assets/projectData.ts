import { Project } from "../types/types";

const projectData = {
  [Project.WILFO]: {
    title: "What I've learned from others",
    description:
      "A concept and blog by Maximilian von Stephanides. Articles, reviews, resources, and more.",
    tags: ["Gatsby", "GraphQL", "React", "TypeScript", "SCSS"],
    gitHref: "https://github.com/maxvons/blog",
    href: "https://github.com/maxvons/blog",
  },
  [Project.PORTFOLIONEW]: {
    title: "Portfolio 2.0",
    description:
      "The second and updated version of my personal portfolio. About, projects, contact and more.",
    tags: ["Next.js", "TypeScript", "SCSS"],
    gitHref: "https://github.com/maxvons/portfolio-2.0",
    href: "https://maxvons.dev",
  },
  [Project.REVMATOLOGEN]: {
    title: "Dr. Signe von Stephanides",
    description:
      "A homepage and digital presence for Dr. Signe von Stephanides.",
    tags: ["Next.js", "TypeScript", "SCSS"],
    gitHref: "",
    href: "https://revmatologen.no",
  },
  [Project.HAUGESUND]: {
    title: "Haugesund Øyelegesenter",
    description:
      "A custom-built digital presence for the eye clinic, Haugesund Øyelegesenter.",
    tags: ["HTML", "CSS", "JS", "localStorage"],
    gitHref: "https://github.com/maxvons/haugesund_oyelegesenter",
    href: "https://haugesundos.netlify.app/",
  },
  [Project.CLEANLIST]: {
    title: "Clean List",
    description: "A simple and clean to-do list for all your important tasks.",
    tags: ["HTML", "CSS", "JS", "localStorage"],
    gitHref: "https://github.com/maxvons/CleanList",
    href: "https://www.cleanlist.dev/",
  },
  [Project.PORTFOLIO]: {
    title: "Portfolio",
    description:
      "The first digital product I created and published on the web. Made me hungry for more.",
    tags: ["HTML", "CSS", "JS", "localStorage"],
    gitHref: "https://github.com/maxvons/portfolio",
    href: "https://www.maxvons.no/",
  },
};

export { projectData };
