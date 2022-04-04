/* Next.js. */
import Link from "next/link";

/* Components. */
import ExternalLinkIcon from "./svgs/ExternalLinkIcon";

/* Styles. */
import styles from "../styles/Button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
}

const Button = ({ text, onClick, href }: ButtonProps) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={styles.button}>
          {text}
          <ExternalLinkIcon className={styles.icon} />
        </a>
      </Link>
    );
  }

  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
