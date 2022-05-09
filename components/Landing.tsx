/* Components. */
import CustomImage from "./CustomImage";
import Button from "./Button";
import ToolBar from "./ToolBar";
import Layout from "./Layout";

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
        <p className={styles.tag}>My name is</p>
        <h1 className={styles.title}>Maximilian</h1>
        <h2 className={styles.subTitle}>
          I create <span className={styles.flair}>exceptional</span> digital
          experiences.
        </h2>
        <Button
          text="Grab my resume"
          href="/resume"
          className={styles.button}
        />
        <CustomImage
          src={Portrait}
          alt="Portrait of Maximilian"
          width={2052}
          height={3078}
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
