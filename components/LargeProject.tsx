// Next.js.
import Image from "next/image";

// Components.
import LinkWithIcon from "./LinkWithIcon";

// Types.
import { Project } from "../types/types";

// Assets.
import { projectData } from "../assets/projectData";

// Styles.
import styles from "../styles/LargeProject.module.scss";

interface LargeProjectProps {
  project: Project;
}

const LargeProject = ({ project }: LargeProjectProps) => {
  const {
    titleLong: projectTitle,
    descriptionLong: projectDescription,
    date: projectDate,
    tags: projectTags,
    designTools: projectDesignTools,
    gitHref: projectGitHref,
    href: projectHref,
    images: projectImages,
    imageAlts: projectImageAlts,
    imageDimensions: projectImageDimensions,
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
    <div className={`${styles.wrapper} ${projectClass}`}>
      <div className={styles.container}>
        <div className={styles.projectInfoContainer}>
          <p className={styles.date}>{projectDate}</p>
          <LinkWithIcon text={projectTitle} href={projectHref} large external />
          <div className={styles.metaContainer}>
            <div className={styles.metaContainerItem}>
              <p className={styles.uppercase}>Technologies</p>
              <ul className={styles.list}>
                {projectTags.map((tag) => (
                  <li key={tag} className={styles.listItem}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.metaContainerItem}>
              <p className={styles.uppercase}>Design tool</p>
              <ul className={styles.list}>
                {projectDesignTools.map((tool) => (
                  <li key={tool} className={styles.listItem}>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.metaContainerItem}>
              <p className={styles.uppercase}>Project links</p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <LinkWithIcon
                    text="Live site"
                    href={projectHref}
                    external
                    listItem
                  />
                </li>
                {/* TODO: Improve the null check here. */}
                {projectGitHref.length > 0 && (
                  <li className={styles.listItem}>
                    <LinkWithIcon
                      text="GitHub"
                      href={projectGitHref}
                      external
                      listItem
                    />
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            {projectDescription.split("\n").map((paragraph) => (
              <p key={paragraph} className={styles.projectDescription}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.imageGrid}>
          {projectImages.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <Image
                src={image}
                alt={projectImageAlts[index]}
                width={projectImageDimensions[index].width}
                height={projectImageDimensions[index].height}
                placeholder="blur"
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LargeProject;
