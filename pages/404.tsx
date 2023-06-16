import { NextPage } from "next";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Layout from "../components/Layout";
import styles from "../styles/Custom404.module.scss";
import LinkWithIcon from "../components/LinkWithIcon";
import CustomHead from "../components/CustomHead";

const Custom404: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar open={open} onClick={() => setOpen(!open)} />
      <Layout noPadding>
        <div className={styles.wrapper}>
          <Title title="Woopsie" tag="Nothing to see here" />
          <LinkWithIcon text="Go back home" href="/" />
        </div>
      </Layout>
    </>
  );
};

export default Custom404;
