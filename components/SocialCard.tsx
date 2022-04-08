// Components.
import GitHubIcon from "./svgs/GitHubIcon";
import LinkedInIcon from "./svgs/LinkedInIcon";
import InstagramIcon from "./svgs/InstagramIcon";
import TwitterIcon from "./svgs/TwitterIcon";

// Assets.
import { socialData } from "../assets/socialData";

// Types.
import { Social } from "../types/types";

// Styles.
import styles from "../styles/SocialCard.module.scss";

interface SocialCardProps {
  social: Social;
}

const SocialCard = ({ social }: SocialCardProps) => {
  const { href: socialHref, title: socialTitle } = socialData[social];

  const icon = (() => {
    switch (social) {
      case Social.GITHUB:
        return <GitHubIcon className={styles.icon} />;
      case Social.LINKEDIN:
        return <LinkedInIcon className={styles.icon} />;
      case Social.INSTAGRAM:
        return <InstagramIcon className={styles.icon} />;
      case Social.TWITTER:
        return <TwitterIcon className={styles.icon} />;
    }
  })();

  return (
    <a
      href={socialHref}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      {icon}
      <span className={styles.title}>{socialTitle}</span>
    </a>
  );
};

export default SocialCard;
