/* Styles. */
import styles from "../styles/IconLink.module.scss";

interface IconLinkProps {
  Icon: any /* TODO: Fix type */;
  href: string;
}

const IconLink = ({ Icon, href }: IconLinkProps) => {
  return (
    <a href={href} className={styles.link} target="_blank" rel="noreferrer">
      <Icon className={styles.icon} />
    </a>
  );
};

export default IconLink;
