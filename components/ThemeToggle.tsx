/* Components. */
import LightIcon from "./svgs/LightIcon";
import DarkIcon from "./svgs/DarkIcon";

/* Styles. */
import styles from "../styles/ThemeToggle.module.scss";

interface ThemeToggleProps {
  dark?: boolean;
}

const ThemeToggle = ({ dark }: ThemeToggleProps) => {
  return (
    <div className={styles.toggleContainer}>
      <button
        className={`${styles.toggleButton} ${styles.left} ${
          dark && styles.active
        }`}
      >
        Light
        <LightIcon className={`${styles.icon} ${styles.lightIcon}`} />
      </button>
      <button
        className={`${styles.toggleButton} ${styles.right} ${
          !dark && styles.active
        }`}
      >
        Dark
        <DarkIcon className={styles.icon} />
      </button>
    </div>
  );
};

export default ThemeToggle;
