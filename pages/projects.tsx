// Next.js.
import { NextPage } from "next";

// React.
import { useState } from "react";

// Components.
import Navbar from "../components/Navbar";
import LargeProject from "../components/LargeProject";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

// Types.
import { Project } from "../types/types";

// Styles.
import styles from "../styles/Projects.module.scss";
import Title from "../components/Title";

const Projects: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} onClick={() => setOpen(!open)} />
      <div className={styles.wrapper}>
        <Title
          title="My projects"
          tag="Personal websites, to-do lists, blogs, web apps"
        />
      </div>
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
