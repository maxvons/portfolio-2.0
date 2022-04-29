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
import styles from "../styles/ProjectsPage.module.scss";

const ProjectsPage: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} onClick={() => setOpen(!open)} />
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <p className={styles.tag}>Tagline comes here.</p>
          <h1 className={styles.title}>Title comes here.</h1>
          <h2 className={styles.subHeader}>Subheader comes here.</h2>
        </div>
        <LargeProject project={Project.PORTFOLIONEW} />
        <LargeProject project={Project.WILFO} />
        <LargeProject project={Project.REVMATOLOGEN} />
      </div>
      {/* Rest of the projects come here. */}
    </>
  );
};

export default ProjectsPage;
