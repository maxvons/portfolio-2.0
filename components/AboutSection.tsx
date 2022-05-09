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
            For as long as I can remember, I&apos;ve been fascinated with
            products, digital or otherwise, that not only function well but also
            look <span className={styles.italic}>aesthetically pleasing</span>.
            I&apos;ve long believed in the importance of good design in digital
            products and services, and the effect it can have on the user
            experience.
          </p>
          <p className={`${styles.text} ${styles.marginBottomMedium}`}>
            The longer I&apos;ve been actively using and developing digital
            experiences, the more I&apos;ve come to realize that{" "}
            <span className={styles.italic}>simplicity</span> is the key to
            achieving a good design. This is especially true in the current
            landscape of the web, where something is competing for your
            attention seemingly all the time.
          </p>
          <p className={`${styles.text} ${styles.marginBottomMedium}`}>
            Due to these reasons, I strongly emphasize simplicity and aesthetics
            when developing digital experiences. Together with the actual
            content and functionality, I believe these factors form the core of
            a good digital experience.
          </p>
          <p className={`${styles.text} ${styles.marginBottomMediumPlus}`}>
            My design interest together with my computer science education and
            developer experience allow me to create beautiful, accessible,
            simple, and intuitive digital products that stand out.
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
          noShadow
          className={styles.image}
        />
      </div>
    </Layout>
  );
};

export default AboutSection;
