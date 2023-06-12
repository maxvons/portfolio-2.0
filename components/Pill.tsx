import Link from "next/link";
import styles from "../styles/Pill.module.scss";
import InternalLinkIcon from "./svgs/InternalLinkIcon";

interface PillProps {
  text: string;
  href: string;
}

const Pill = ({ text, href }: PillProps) => {
  return (
    <Link href={href}>
      <a className={styles.pill}>
        <span className={styles.flair}>New</span>
        <span className={styles.dot}>·</span>
        <span className={styles.text}>{text}</span>
        <InternalLinkIcon className={styles.icon} />
      </a>
    </Link>
  );
};

export default Pill;
