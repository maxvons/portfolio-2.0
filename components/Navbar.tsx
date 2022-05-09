/* Next.js */
import Link from "next/link";

/* Components. */
import LinkWithIcon from "./LinkWithIcon";
import ThemeToggle from "./ThemeToggle";

import NavButton from "./svgs/NavButton";
import NavButtonClose from "./svgs/NavButtonClose";

/* Styles. */
import styles from "../styles/Navbar.module.scss";

interface NavbarProps {
  open?: boolean;
  onClick: () => void;
}

const Navbar = ({ open, onClick }: NavbarProps) => {
  if (!open) {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navList}>
          <Link href="/">
            <a className={styles.homeLink}>m</a>
          </Link>
          <button onClick={onClick} className={styles.navButton}>
            <NavButton />
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={`${styles.navbar} ${styles.open} ${styles.flexColumn}`}>
        <div className={styles.navList}>
          <Link href="/">
            <a className={styles.homeLink}>m</a>
          </Link>
          <button onClick={onClick} className={styles.navButton}>
            <NavButtonClose />
          </button>
        </div>
        <div className={styles.navContent}>
          <div className={styles.column}>
            <div className={styles.linkSection}>
              <LinkWithIcon text="About me" href="/about" large />
              <LinkWithIcon text="My projects" href="/projects" large />
              <LinkWithIcon text="What I use" href="/uses" large />
            </div>
            <div className={styles.linkSection}>
              <LinkWithIcon
                text="GitHub"
                href="https://github.com/maxvons"
                large
                external
              />
              <LinkWithIcon
                text="Instagram"
                href="https://www.instagram.com/maximilian.codes/"
                large
                external
              />
              <LinkWithIcon
                text="LinkedIn"
                href="https://www.linkedin.com/in/maximilian-von-stephanides/"
                large
                external
              />
              <LinkWithIcon
                text="Twitter"
                href="https://twitter.com/Maximilianvons"
                large
                external
              />
            </div>
          </div>
          <div className={styles.column}>
            <div>
              <h1 className={styles.heading}>Theme</h1>
              <ThemeToggle />
            </div>
            <div>
              <h1 className={styles.heading}>Contact and resume</h1>
              <div className={styles.smallLinksContainer}>
                <LinkWithIcon
                  text="Grab my resume"
                  href="/files/cv-maximilian-von-stephanides.pdf"
                  external
                />
                <LinkWithIcon
                  text="maximilianvons@gmail.com"
                  href="mailto:maximilianvons@gmail.com"
                  external
                />
              </div>
            </div>
            <div>
              <h1 className={styles.heading}>Resources</h1>
              <div className={styles.smallLinksContainer}>
                <LinkWithIcon
                  text="Source code on GitHub"
                  href="https://github.com/maxvons/portfolio-2.0"
                  external
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
