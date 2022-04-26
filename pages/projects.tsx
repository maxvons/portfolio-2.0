// Next.js.
import { NextPage } from "next";

// React.
import { useState } from "react";

// Components.
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

// Styles.
import styles from "../styles/ProjectsPage.module.scss";

const ProjectsPage: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} onClick={() => setOpen(!open)} />
      <Layout>
        <div className={styles.titleContainer}>
          <p className={styles.tag}>Tagline comes here.</p>
          <h1 className={styles.title}>Title comes here.</h1>
          <h2 className={styles.subHeader}>Subheader comes here.</h2>
        </div>
        {/* Highlighted projects come here. */}
        {/* Rest of the projects come here. */}
      </Layout>
    </>
  );
};

export default ProjectsPage;
