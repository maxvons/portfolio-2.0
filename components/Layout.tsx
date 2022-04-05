/* Styles. */
import styles from "../styles/Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;
