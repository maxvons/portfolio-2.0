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
        {text}
        <InternalLinkIcon className={styles.icon} />
      </a>
    </Link>
  );
};

export default Pill;
