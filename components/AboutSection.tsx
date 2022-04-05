/* Components. */
import CustomImage from "./CustomImage";
import LinkWithIcon from "./LinkWithIcon";
import Layout from "./Layout";

/* Assets. */
import MaxWithSetupImg from "/public/images/max-with-setup.jpg";

/* Types. */
import { ImageSize } from "../types/types";

/* Styles. */
import styles from "../styles/AboutSection.module.scss";

const AboutSection = () => {
  return (
    <Layout secondary>
      <div className={styles.container}>
        <h2 className={styles.header}>
          I&apos;m a developer obsessed with aesthetics and simplicity.
        </h2>
        <div className={styles.textContainer}>
          <p className={`${styles.text} ${styles.marginBottomMedium}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ut
            pharetra feugiat porttitor senectus. Maecenas viverra neque, sed
            arcu fermentum volutpat felis, praesent sagittis.
          </p>
          <p className={`${styles.text} ${styles.marginBottomMediumPlus}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ut
            pharetra feugiat porttitor senectus.
          </p>
          <LinkWithIcon text="Read my entire story" href="/about" />
        </div>
        <CustomImage
          src={MaxWithSetupImg}
          alt="Max with setup"
          width={2048}
          height={1536}
          objectPosition="20% 50%"
          size={ImageSize.LARGE}
          className={styles.image}
        />
      </div>
    </Layout>
  );
};

export default AboutSection;
