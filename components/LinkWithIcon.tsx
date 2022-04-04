/* Next.js. */
import Link from "next/link";

/* Components. */
import InternalLinkIcon from "./svgs/InternalLinkIcon";
import ExternalLinkIcon from "./svgs/ExternalLinkIcon";

/* Styles. */
import styles from "../styles/LinkWithIcon.module.scss";

interface LinkWithIcon {
  text: string;
  href: string;
  large?: boolean;
  external?: boolean;
}

const LinkWithIcon = ({ text, href, large, external }: LinkWithIcon) => {
  if (external) {
    return (
      <a
        className={`${styles.link} ${large && styles.large}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <span className={styles.marginRight}>{text}</span>
        <ExternalLinkIcon className={styles.icon} />
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={`${styles.link} ${large && styles.large}`}>
        <span className={styles.marginRight}>{text}</span>
        <InternalLinkIcon className={styles.icon} />
      </a>
    </Link>
  );
};

export default LinkWithIcon;
