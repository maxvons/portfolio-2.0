// Components.
import IconButton from "./IconButton";
import IconLink from "./IconLink";

import DarkIcon from "./svgs/DarkIcon";
import GitHubIcon from "./svgs/GitHubIcon";
import InstagramIcon from "./svgs/InstagramIcon";
import LightIcon from "./svgs/LightIcon";
import LinkedInIcon from "./svgs/LinkedInIcon";
import TwitterIcon from "./svgs/TwitterIcon";

// Styles.
import styles from "../styles/ToolBar.module.scss";

interface ToolBarProps {
  dark?: boolean;
}

const ToolBar = ({ dark }: ToolBarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <IconLink href="https://github.com/maxvons" Icon={GitHubIcon} />
        <IconLink
          href="https://www.linkedin.com/in/maximilian-von-stephanides/"
          Icon={LinkedInIcon}
        />
        <IconLink
          href="https://www.instagram.com/maximilian.codes/"
          Icon={InstagramIcon}
        />
        <IconLink
          href="https://twitter.com/Maximilianvons"
          Icon={TwitterIcon}
        />
      </div>
      <div className={styles.section}>
        <IconButton
          Icon={LightIcon}
          onClick={() => console.log("clicked")}
          active={dark}
        />
        <IconButton
          Icon={DarkIcon}
          onClick={() => console.log("clicked")}
          active={!dark}
        />
      </div>
    </div>
  );
};

export default ToolBar;
