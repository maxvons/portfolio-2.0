import { Project, Social } from "../types/types";

/* Get data for project cards. */
function getProjectData(project: Project): {
  title: string;
  description: string;
  tags: string[];
  gitHref: string;
  href: string;
} {
  switch (project) {
    case Project.WILFO:
      return {
        title: "What I've learned from others",
        description:
          "A concept and blog by Maximilian von Stephanides. Articles, reviews, resources, and more.",
        tags: ["Gatsby", "GraphQL", "React", "TypeScript", "SCSS"],
        gitHref: "https://github.com/maxvons/blog",
        href: "https://github.com/maxvons/blog",
      };
    case Project.PORTFOLIONEW:
      return {
        title: "Portfolio 2.0",
        description:
          "The second and updated version of my personal portfolio. About, projects, contact and more.",
        tags: ["Next.js", "TypeScript", "SCSS"],
        gitHref: "https://github.com/maxvons/portfolio-2.0",
        href: "https://maxvons.dev",
      };
    case Project.REVMATOLOGEN:
      return {
        title: "Dr. Signe von Stephanides",
        description:
          "A homepage and digital presence for Dr. Signe von Stephanides.",
        tags: ["Next.js", "TypeScript", "SCSS"],
        gitHref: "",
        href: "https://revmatologen.no",
      };
    case Project.HAUGESUND:
      return {
        title: "Haugesund Øyelegesenter",
        description:
          "A custom-built digital presence for the eye clinic, Haugesund Øyelegesenter.",
        tags: ["HTML", "CSS", "JS", "localStorage"],
        gitHref: "https://github.com/maxvons/haugesund_oyelegesenter",
        href: "https://haugesundos.netlify.app/",
      };
    case Project.CLEANLIST:
      return {
        title: "Clean List",
        description:
          "A simple and clean to-do list for all your important tasks.",
        tags: ["HTML", "CSS", "JS", "localStorage"],
        gitHref: "https://github.com/maxvons/CleanList",
        href: "https://www.cleanlist.dev/",
      };
    case Project.PORTFOLIO:
      return {
        title: "Portfolio",
        description:
          "The first digital product I created and published on the web. Made me hungry for more.",
        tags: ["HTML, CSS, JS, localStorage"],
        gitHref: "https://github.com/maxvons/portfolio",
        href: "https://www.maxvons.no/",
      };
    default:
      return {
        title: "",
        description: "",
        tags: [],
        gitHref: "",
        href: "",
      };
  }
}

/* Get data for social cards. */
function getSocialData(social: Social): {
  title: string;
  href: string;
} {
  switch (social) {
    case Social.GITHUB:
      return {
        href: "https://github.com/maxvons",
        title: "maxvons",
      };
    case Social.LINKEDIN:
      return {
        href: "https://www.linkedin.com/in/maximilian-von-stephanides/",
        title: "Maximilian von Stephanides",
      };
    case Social.INSTAGRAM:
      return {
        href: "https://www.instagram.com/maximilian.codes/",
        title: "maximilian.codes",
      };
    case Social.TWITTER:
      return {
        href: "https://twitter.com/Maximilianvons",
        title: "Maximilianvons",
      };
    default:
      return {
        href: "",
        title: "",
      };
  }
}

export { getProjectData, getSocialData };
