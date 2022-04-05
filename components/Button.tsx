/* Components. */
import ExternalLinkIcon from "./svgs/ExternalLinkIcon";

/* Styles. */
import styles from "../styles/Button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const Button = ({ text, onClick, href, className }: ButtonProps) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        className={`${styles.button} ${className}`}
        rel="noreferrer"
      >
        {text}
        <ExternalLinkIcon className={styles.icon} />
      </a>
    );
  }

  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
