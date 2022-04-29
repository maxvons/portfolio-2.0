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
  footer?: boolean;
  external?: boolean;
  button?: boolean;
  listItem?: boolean;
}

const LinkWithIcon = ({
  text,
  href,
  large,
  footer,
  external,
  button,
  listItem,
}: LinkWithIcon) => {
  const linkStyles = (() => {
    if (large) {
      return `${styles.link} ${styles.large}`;
    } else if (footer) {
      return `${styles.link} ${styles.footer}`;
    } else if (listItem) {
      return `${styles.link} ${styles.listItem}`;
    } else {
      return styles.link;
    }
  })();

  if (external) {
    return (
      <a className={linkStyles} href={href} target="_blank" rel="noreferrer">
        <span className={styles.marginRight}>{text}</span>
        <ExternalLinkIcon
          className={`${styles.icon} ${button && styles.button}`}
        />
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={linkStyles}>
        <span className={styles.marginRight}>{text}</span>
        <InternalLinkIcon
          className={`${styles.icon} ${button && styles.button}`}
        />
      </a>
    </Link>
  );
};

export default LinkWithIcon;
