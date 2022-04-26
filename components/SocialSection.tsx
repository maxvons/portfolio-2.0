// Components.
import Layout from "./Layout";
import SocialCard from "./SocialCard";

// Assets.
import { Social } from "../types/types";

// Styles.
import styles from "../styles/SocialSection.module.scss";

const SocialSection = () => {
  return (
    <Layout secondary>
      <div className={styles.container}>
        <h2 className={styles.header}>
          You can find me on the following channels.
        </h2>
        <div className={styles.socialsContainer}>
          <SocialCard social={Social.GITHUB} />
          <SocialCard social={Social.LINKEDIN} />
          <SocialCard social={Social.INSTAGRAM} />
          <SocialCard social={Social.TWITTER} />
        </div>
      </div>
    </Layout>
  );
};

export default SocialSection;
