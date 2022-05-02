// Next.js.
import { NextPage } from "next";

// React.
import { useState } from "react";

// Components.
import Navbar from "../components/Navbar";
import LargeProject from "../components/LargeProject";

// Types.
import { Project } from "../types/types";

// Styles.
import styles from "../styles/Projects.module.scss";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const Projects: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} onClick={() => setOpen(!open)} />
      <Layout noPadding>
        <div className={styles.wrapper}>
          <div className={styles.titleContainer}>
            <p className={styles.tag}>
              Personal websites, to-do lists, blogs, web apps
            </p>
            <h1 className={styles.title}>My projects</h1>
            <h2 className={styles.subHeader}>
              The projects I&apos;m the most proud of.
            </h2>
          </div>
        </div>
      </Layout>
      <LargeProject project={Project.PORTFOLIONEW} />
      <LargeProject project={Project.WILFO} />
      <LargeProject project={Project.REVMATOLOGEN} />
      <Layout>
        <div className={styles.projectContainer}>
          <h3 className={styles.projectHeader}>My other projects</h3>
          <div className={styles.projectGrid}>
            <ProjectCard project={Project.HAUGESUND} />
            <ProjectCard project={Project.CLEANLIST} />
            <ProjectCard project={Project.PORTFOLIO} />
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Projects;
