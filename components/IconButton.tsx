/* Styles. */
import styles from "../styles/IconButton.module.scss";

interface IconButtonProps {
  Icon: any /* TODO: Fix type */;
  onClick: () => void;
  active?: boolean;
}

const IconButton = ({ Icon, onClick, active }: IconButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <Icon className={`${styles.icon} ${active && styles.active}`} />
    </button>
  );
};

export default IconButton;
