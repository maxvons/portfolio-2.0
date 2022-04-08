/* Components. */
import IconLink from "./IconLink";

import ProjectIcon from "./svgs/ProjectIcon";
import GitHubIcon from "./svgs/GitHubIcon";
import HrefIcon from "./svgs/HrefIcon";

/* Assets. */
import { projectData } from "../assets/projectData";

/* Types. */
import { Project } from "../types/types";

/* Styles. */
import styles from "../styles/ProjectCard.module.scss";

interface ProjectCardProps {
  project: Project;
  highlight?: boolean;
}

const ProjectCard = ({ project, highlight }: ProjectCardProps) => {
  const {
    title: projectTitle,
    description: projectDescription,
    tags: projectTags,
    gitHref: projectGitHref,
    href: projectHref,
  } = projectData[project];

  const projectClass = (() => {
    switch (project) {
      case Project.WILFO:
        return styles.wilfoBlog;
      case Project.PORTFOLIONEW:
        return styles.portfolio2;
      case Project.REVMATOLOGEN:
        return styles.revmatologen;
      case Project.HAUGESUND:
        return styles.haugesund;
      case Project.CLEANLIST:
        return styles.cleanList;
      case Project.PORTFOLIO:
        return styles.portfolio;
    }
  })();

  return (
    <div
      className={`${styles.card} ${projectClass} ${
        highlight && styles.highlight
      }`}
    >
      <div className={styles.cardIcons}>
        <ProjectIcon className={styles.projectIcon} />
        <div className={styles.linkIcons}>
          <IconLink Icon={GitHubIcon} href={projectGitHref} />
          <IconLink Icon={HrefIcon} href={projectHref} />
        </div>
      </div>
      <h3 className={styles.cardTitle}>
        <a href={projectHref} target="_blank" rel="noreferrer">
          {projectTitle}
        </a>
      </h3>
      <p className={styles.cardDescription}>{projectDescription}</p>
      <div className={styles.cardTags}>
        {projectTags.map((tag) => (
          <span key={tag} className={styles.cardTag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
