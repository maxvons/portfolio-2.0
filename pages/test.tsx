import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import LightIcon from "../components/svgs/LightIcon";

import { NextPage } from "next";
import { useState } from "react";

import styles from "../styles/Test.module.scss";
import DarkIcon from "../components/svgs/DarkIcon";
import IconLink from "../components/IconLink";
import GitHubIcon from "../components/svgs/GitHubIcon";

const Test: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar open={open} onClick={() => setOpen(!open)} />
      <div className={`${styles.container} ${open ? styles.removeScroll : ""}`}>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <Button text="Button text" href="/resume" />
        <IconButton Icon={LightIcon} onClick={() => console.log("clicked")} />
        <IconButton
          Icon={DarkIcon}
          onClick={() => console.log("clicked")}
          active
        />
        <IconLink href="https://www.google.com" Icon={GitHubIcon} />
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
      </div>
    </>
  );
};

export default Test;
