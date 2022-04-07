interface Link {
  name: string;
  href: string;
}

interface LinkCollection {
  links: Array<Link>;
}

const internalLinks: LinkCollection = {
  links: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Uses",
      href: "/uses",
    },
  ],
};

const externalLinks: LinkCollection = {
  links: [
    {
      name: "GitHub",
      href: "https://github.com/maxvons",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/maximilian-von-stephanides/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/maximilian.codes/",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/Maximilianvons",
    },
  ],
};

export { internalLinks, externalLinks };
