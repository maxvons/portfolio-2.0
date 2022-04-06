import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import LightIcon from "../components/svgs/LightIcon";

import { NextPage } from "next";
import { useState } from "react";

import { ImageSize } from "../types/types";
import { Project } from "../types/types";

import styles from "../styles/Test.module.scss";
import DarkIcon from "../components/svgs/DarkIcon";
import IconLink from "../components/IconLink";
import GitHubIcon from "../components/svgs/GitHubIcon";
import Toolbar from "../components/ToolBar";
import CustomImage from "../components/CustomImage";
import Portrait from "/public/images/portrait.jpg";
import Landing from "../components/Landing";
import AboutSection from "../components/AboutSection";
import ProjectCard from "../components/ProjectCard";

const Test: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar open={open} onClick={() => setOpen(!open)} />
      <Landing />
      <AboutSection />
      <Layout>
        <ProjectCard project={Project.REVMATOLOGEN} />
      </Layout>
    </>
  );
};

export default Test;
