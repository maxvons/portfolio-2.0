// Next.js.
import Image from "next/image";

// Components.
import Layout from "./Layout";
import LinkWithIcon from "./LinkWithIcon";

// Assets.
import MaxThumbsUpImg from "/public/images/max-thumbs-up.jpg";

// Styles.
import styles from "../styles/ContactSection.module.scss";

const ContactSection = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.header}>Get in touch with me.</h2>
        <div className={styles.textContainer}>
          <p className={`${styles.text} ${styles.marginBottomMedium}`}>
            Feel free to shoot me an email if you want to discuss something
            related to business, technology or otherwise.
          </p>
          <LinkWithIcon
            text="maximilianvons@gmail.com"
            href="mailto:maximilianvons@gmail.com"
            external
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={MaxThumbsUpImg}
            alt="Maximilian smiling with thumbs up"
            objectPosition="50% 0%"
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ContactSection;
