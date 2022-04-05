/* Styles. */
import styles from "../styles/Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  secondary?: boolean;
}

const Layout = ({ children, className, secondary }: LayoutProps) => {
  return (
    <div
      className={`${styles.wrapper} ${
        secondary ? styles.secondary : styles.primary
      } ${className}`}
    >
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;
