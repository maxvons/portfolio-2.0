// Components.
import Layout from "./Layout";
import HighlightedProject from "./HighlightedProject";
import ProjectCard from "./ProjectCard";
import LinkWithIcon from "./LinkWithIcon";

// Types.
import { Project } from "../types/types";

// Styles.
import styles from "../styles/ProjectsSection.module.scss";

const ProjectsSection = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.header}>
          The digital experiences I&apos;ve created so far.
        </h2>
        <div className={styles.highlightedProjects}>
          <HighlightedProject project={Project.PORTFOLIONEW} />
          <HighlightedProject project={Project.WILFO} placeRight />
          <HighlightedProject project={Project.REVMATOLOGEN} />
        </div>
        <h3 className={styles.projectHeader}>
          Other projects I&apos;ve dabbled with.
        </h3>
        <div className={`${styles.projectGrid} ${styles.projects}`}>
          <ProjectCard project={Project.HAUGESUND} />
          <ProjectCard project={Project.CLEANLIST} />
          <ProjectCard project={Project.PORTFOLIO} />
        </div>
        <LinkWithIcon text="Check out all my projects" href="/projects" />
      </div>
    </Layout>
  );
};

export default ProjectsSection;
