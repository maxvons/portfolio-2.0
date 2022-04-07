/* Components. */
import Layout from "./Layout";
import ProjectCard from "./ProjectCard";

/* Types. */
import { Project } from "../types/types";

/* Styles. */
import styles from "../styles/ProjectsSection.module.scss";
import LinkWithIcon from "./LinkWithIcon";

const ProjectsSection = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.header}>
          The digital experiences I&apos;ve created so far
        </h2>
        <div className={styles.projectGrid}>
          <ProjectCard project={Project.PORTFOLIONEW} highlight />
          <ProjectCard project={Project.WILFO} highlight />
          <ProjectCard project={Project.REVMATOLOGEN} highlight />
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
