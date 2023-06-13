// Next.js.
import { NextPage } from "next";
import Image from "next/image";

// React.
import { useState } from "react";

// Components.
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

// Assets.
import SetupImg from "/public/images/setup.jpg";

// Styles.
import styles from "../styles/Uses.module.scss";
import List from "../components/List";
import Footer from "../components/Footer";
import Title from "../components/Title";

const Uses: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} onClick={() => setOpen(!open)} />
      <Layout noPadding>
        <div className={styles.wrapper}>
          <Title
            title="What I use"
            tag="My setup, tools, software, and others"
          />
          <div className={styles.imageContainer}>
            <Image
              src={SetupImg}
              alt="Maximilian's home office setup"
              placeholder="blur"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.listContainer}>
            <List
              header="My home setup"
              items={[
                'M1 Max MacBook Pro 16" with 32GB RAM and 2TB SSD',
                'M1 iPad Pro 11" 128GB',
                "Samsung C34J791 ultrawide monitor",
                "Logitech MX Mechanical Mini keyboard",
                "Logitech MX Master 3 mouse",
                "AirPods Max",
                "TwelveSouth Curve laptop stand",
                "IKEA BEKANT 160x80cm standing desk",
                "IKEA JÄRVFJÄLLET office chair",
              ]}
            />
            <List
              header="My remote setup"
              items={[
                'M1 Max MacBook Pro 16" with 32GB RAM and 2TB SSD',
                'M1 iPad Pro 11" 128GB',
                "AirPods Max",
              ]}
            />
            <List
              header="Editor"
              items={[
                "Editor: Visual Studio Code",
                "Theme: GitHub Dark Default theme",
                "Font: Recursive Mono (Duotone) font",
              ]}
            />
            <List
              header="Terminal"
              items={[
                "Hyper with Tokyo Night theme",
                "Z shell (zsh)",
                "Spaceship prompt",
                "zsh syntax highlighting",
                "z autocomplete plugin",
                "Recursive Mono (Duotone) font",
              ]}
            />
            <List
              header="Software"
              items={[
                "LastPass - for all my passwords",
                "Spotify - for music",
                "Apple Music - for music in Dolby Atmos",
                "PastePal - for clipboard history",
                "Magnet - for window management",
                "Alfred - for Spotlight replacement",
                "Kap - for screen recordings and gifs",
                "Contrast - for color picker and contrast check",
                "Notion - for notes",
                "Obsidian - for notes in Markdown",
                "Numi - for scratchpad, calculations, and conversions",
              ]}
            />
            <List
              header="Other devices"
              items={[
                "iPhone 14 Pro Max",
                "iPhone 11 Pro",
                "AirPods 3",
                "Apple Watch Series 6 44mm",
                "PS5",
              ]}
            />
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Uses;
