/* Components. */
import CustomImage from "./CustomImage";
import Button from "./Button";
import ToolBar from "./ToolBar";
import Layout from "./Layout";
import Pill from "./Pill";

/* Assets. */
import Portrait from "/public/images/portrait.jpg";

/* Types. */
import { ImageSize } from "../types/types";

/* Styles. */
import styles from "../styles/Landing.module.scss";

const Landing = () => {
  return (
    <Layout noPadding>
      <div className={`${styles.container} ${styles.marginTop}`}>
        <Pill text="Check out my Spotify top 10" href="/top-ten-spotify" />
        <h1 className={styles.title}>Maximilian</h1>
        <h2 className={styles.subTitle}>
          I create <span className={styles.flair}>exceptional</span> digital
          experiences.
        </h2>
        <Button
          text="Grab my resume"
          href="/files/cv-maximilian-von-stephanides.pdf"
          className={styles.button}
        />
        <CustomImage
          src={Portrait}
          alt="Portrait of Maximilian"
          objectPosition="50% 20%"
          size={ImageSize.AVATAR}
          round
          noShadow
          className={styles.image}
        />
        <div className={styles.toolbar}>
          <ToolBar />
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
