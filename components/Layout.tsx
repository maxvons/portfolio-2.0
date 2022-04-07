/* Styles. */
import styles from "../styles/Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  secondary?: boolean;
  noPadding?: boolean;
}

const Layout = ({ children, secondary, noPadding }: LayoutProps) => {
  const wrapperStyles = (() => {
    return `${styles.wrapper} ${secondary && styles.secondary} ${
      noPadding && styles.noPadding
    }`;
  })();

  return (
    <div className={wrapperStyles}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;
