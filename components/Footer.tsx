/* Components. */
import LinkWithIcon from "./LinkWithIcon";
import Layout from "./Layout";

/* Assets. */
import { internalLinks, externalLinks } from "../assets/linkData";

/* Styles. */
import styles from "../styles/Footer.module.scss";
import NowPlaying from "./NowPlaying";

const Footer = () => {
  return (
    <Layout>
      <span className={styles.divider} />
      <div className={styles.container}>
        <ul className={`${styles.links} ${styles.internalLinks}`}>
          {internalLinks.links.map((link) => (
            <li key={link.name}>
              <LinkWithIcon text={link.name} href={link.href} footer />
            </li>
          ))}
        </ul>
        <ul className={`${styles.links} ${styles.externalLinks}`}>
          {externalLinks.links.map((link) => (
            <li key={link.name}>
              <LinkWithIcon text={link.name} href={link.href} footer external />
            </li>
          ))}
        </ul>
        <ul className={`${styles.links} ${styles.attributions}`}>
          <li>
            <LinkWithIcon
              text="Built with Next.js"
              href="https://nextjs.org/"
              footer
              external
            />
          </li>
          <li>
            <LinkWithIcon
              text="Photography by Julie Liland"
              href="https://www.instagram.com/julieliland/"
              footer
              external
            />
          </li>
        </ul>
        <p className={styles.signature}>
          Crafted with coffee and love by{" "}
          <span className={styles.flair}>Maximilian von Stephanides</span>
        </p>
      </div>
      <NowPlaying />
    </Layout>
  );
};

export default Footer;
