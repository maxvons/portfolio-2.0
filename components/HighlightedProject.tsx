// Next.js.
import Image from "next/image";

// Components.
import IconLink from "./IconLink";
import GitHubIcon from "./svgs/GitHubIcon";
import HrefIcon from "./svgs/HrefIcon";

// Types.
import { Project } from "../types/types";

// Assets.
import { projectData } from "../assets/projectData";

// Styles.
import styles from "../styles/HighlightedProject.module.scss";

interface HighlightedProjectProps {
  project: Project;
  placeRight?: boolean;
}

const HighlightedProject = ({
  project,
  placeRight,
}: HighlightedProjectProps) => {
  const {
    title: projectTitle,
    description: projectDescription,
    tags: projectTags,
    gitHref: projectGitHref,
    href: projectHref,
    image: projectImage,
    imageAlt: projectImageAlt,
    imageWidth: projectImageWidth,
    imageHeight: projectImageHeight,
  } = projectData[project];

  const projectClass = (() => {
    switch (project) {
      case Project.WILFO:
        return styles.wilfoBlog;
      case Project.PORTFOLIONEW:
        return styles.portfolio2;
      case Project.REVMATOLOGEN:
        return styles.revmatologen;
    }
  })();

  return (
    <div
      className={`${styles.container} ${projectClass} ${
        placeRight && styles.placeRight
      }`}
    >
      <div className={styles.projectInfoContainer}>
        <p className={styles.tag}>Highlighted project</p>
        <div className={styles.headerContainer}>
          <h3 className={styles.projectHeader}>
            <a href={projectHref} target="_blank" rel="noreferrer">
              {projectTitle}
            </a>
          </h3>
          <div className={styles.linkIcons}>
            <IconLink Icon={GitHubIcon} href={projectGitHref} />
            <IconLink Icon={HrefIcon} href={projectHref} />
          </div>
        </div>
        <div className={styles.descriptionBox}>
          {projectDescription.split("\n").map((paragraph) => (
            <p key={paragraph} className={styles.projectDescription}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className={styles.cardTags}>
          {projectTags.map((tag) => (
            <span key={tag} className={styles.cardTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a
        className={styles.projectImage}
        href={projectHref}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={projectImage}
          alt={projectImageAlt}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </a>
    </div>
  );
};

export default HighlightedProject;
