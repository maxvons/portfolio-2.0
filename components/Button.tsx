/* Components. */
import LinkWithIcon from "./LinkWithIcon";

/* Styles. */
import styles from "../styles/Button.module.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <LinkWithIcon text="Grab my resume" href="/resume" external button />
    </button>
  );
};

export default Button;
