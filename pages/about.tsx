// Next.js.
import { NextPage } from "next";
import Image from "next/image";

// React.
import { useState } from "react";

// Components.
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import ContactSection from "../components/ContactSection";

// Assets.
import Portrait from "/public/images/portrait.jpg";
import MaxWithStormtrooperImg from "/public/images/max-with-stormtrooper.jpg";

// Styles.
import styles from "../styles/About.module.scss";

const About: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} onClick={() => setOpen(!open)} />
      <Layout noPadding>
        <div className={styles.wrapper}>
          <div className={styles.titleContainer}>
            <p className={styles.tag}>Developer, designer, and dreamer</p>
            <h1 className={styles.title}>Who am I?</h1>
            <h2 className={styles.subHeader}>
              How a young boy fascinated with Star Wars and other nerdy stuff
              ended up as a startup founder.
            </h2>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={MaxWithStormtrooperImg}
              alt="Max with a stormtrooper in London"
              width={1747}
              height={1317}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.timelineContainer}>
            <Timeline
              timelinePoints={[
                {
                  date: "Oct. 1996",
                  location: "Bergen, Norway",
                  title: "Born in Bergen, Norway at the 18th of October",
                  image: {
                    src: Portrait,
                    alt: "alt text",
                    width: 2000,
                    height: 2000,
                  },
                },
                {
                  date: "2010",
                  location: "Bergen, Norway",
                  title:
                    "Discovered web programming in Adobe Dreamweaver at the age of 14",
                  description:
                    "My first time messing around with something programming related. I wanted to created a landing page for my father's medical practice.\nLike a true developer however, I did not finish this project 😎",
                  image: {
                    src: Portrait,
                    alt: "alt text",
                    width: 2000,
                    height: 2000,
                  },
                },
                {
                  date: "Jun. 2015",
                  location: "Bergen, Norway",
                  title: "Graduated from Danielsen High School in Bergen",
                  image: {
                    src: Portrait,
                    alt: "alt text",
                    width: 2000,
                    height: 2000,
                  },
                },
                {
                  date: "Aug. 2015",
                  location: "Oslo, Norway",
                  title: "Started my medical studies in Oslo",
                  description:
                    "I studied medicine for a year in Oslo. I had most of my courses at the University of Oslo. I also had some extra courses at Bjørknes Høyskole.\nThis was my first time living alone and without family or close friends nearby, so the adjustment period was a bit rough, but I managed.",
                  image: {
                    src: Portrait,
                    alt: "alt text",
                    width: 2000,
                    height: 2000,
                  },
                },
                {
                  date: "Sep. 2016",
                  location: "Martin, Slovakia",
                  title:
                    "Transferred to Comenius University, Jessenius Faculty of Medicine",
                  description:
                    "After a year of studying in Oslo, I transferred to the Jessenius Faculty of Medicine in Martin, Slovakia. Living and studying in a foreign country taught me a lot and what made it clearer what I wanted for myself going forward.\nI decided after some time in Martin not to pursue medicine as a career due to having a greater interest in technology related fields.",
                  image: {
                    src: Portrait,
                    alt: "alt text",
                    width: 2000,
                    height: 2000,
                  },
                },
                {
                  date: "Aug. 2017–Aug. 2018",
                  location: "Bergen, Norway",
                  title:
                    "Spent a year back in my hometown working in the service industry and thinking about my future",
                  description:
                    "After quitting my medicine studies, I needed to figure out what to do next. I decided to work for a year while doing this. I got a job as a service worker for a local deli chain.\nAfter about a year of working for them, it was abundantly clear that to me that I wanted to do something else. I therefore decided to go back to the University of Oslo.",
                  image: {
                    src: Portrait,
                    alt: "alt text",
                    width: 2000,
                    height: 2000,
                  },
                },
                {
                  date: "Aug. 2018",
                  location: "Oslo, Norway",
                  title:
                    "Started studying computer science at the University of Oslo",
                  description:
                    "Being fascinated with technology and computers for as long as I know, I decided to start studying computer science. I really enjoyed my time in Oslo while studying medicine there, so the choice for university was obvious.\nI quickly discovered that programming was something I really enjoyed, and have not looked back since.",
                  image: {
                    src: Portrait,
                    alt: "alt text",
                    width: 2000,
                    height: 2000,
                  },
                },
                {
                  date: "June–July 2021",
                  location: "Oslo, Norway",
                  title: "Completed a summer internship at Clave Consulting",
                  description:
                    "In 2021 I worked as a summer intern at Clave, a technology consulting company. Here I was placed in a team with 4 other students, were we worked together to develop a PoC for an intelligent route planner application directed at EV owners in Norway.\nTogether with the others, I was in charge of conception, planning, and developing the application. My main focus area for that project was frontend development, specifically in React, which I learned faily quickly. I also contributed to the backend planning and development, and some design work.",
                  image: {
                    src: Portrait,
                    alt: "alt text",
                    width: 2000,
                    height: 2000,
                  },
                },
                {
                  date: "Jul. 2021",
                  location: "Oslo, Norway",
                  title:
                    "Cofounded Decidable, a software agency specializing in developing in-house projects",
                  description:
                    "I was always entrigued by the idea of launching a startup and being your own boss. In the last year of my computer science bachelor's degree, four student buddies of mine and I decided to do exactly this.\nThe name is inspired by the concept in computability theory of a problem being decidable or not.",
                  image: {
                    src: Portrait,
                    alt: "alt text",
                    width: 2000,
                    height: 2000,
                  },
                },
                {
                  date: "Aug. 2021→",
                  location: "Oslo, Norway",
                  title:
                    "Started my master studies in computer science at the University of Oslo",
                  description:
                    "Having finished my bachelor's degree, I decided to pursue a master's as well. Other than Decidable work, this is what I'm currently up to these days, with a projected graduation date of June 2023.\nMy thesis is in the fields of computer networks and machine learning, with the thesis topic being to predict packet loss in TCP using machine learning methods.",
                  image: {
                    src: Portrait,
                    alt: "alt text",
                    width: 2000,
                    height: 2000,
                  },
                },
              ]}
            />
          </div>
          <ContactSection />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default About;
