/* Styles. */
import styles from "../styles/Button.module.scss";
import LinkWithIcon from "./LinkWithIcon";

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
