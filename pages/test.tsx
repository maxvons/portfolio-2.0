import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import LightIcon from "../components/svgs/LightIcon";

import { NextPage } from "next";
import { useState } from "react";

import { ImageSize } from "../types/types";

import styles from "../styles/Test.module.scss";
import DarkIcon from "../components/svgs/DarkIcon";
import IconLink from "../components/IconLink";
import GitHubIcon from "../components/svgs/GitHubIcon";
import Toolbar from "../components/ToolBar";
import CustomImage from "../components/CustomImage";
import Portrait from "/public/images/portrait.jpg";

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
        <Toolbar dark />
        <CustomImage
          src={Portrait}
          alt="Portrait of Maximilian"
          width={2052}
          height={3078}
          objectPosition="50% 20%"
          size={ImageSize.AVATAR}
          round
        />
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
