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
import MaxWithStormtrooperImg from "/public/images/max-with-stormtrooper.jpg";
import MaxSmallImg from "/public/images/max-small.jpg";
import ProgrammingImg from "/public/images/programming.jpg";
import GraduationImg from "/public/images/graduation.jpg";
import MedicineImg from "/public/images/medicine.jpg";
import MartinImg from "/public/images/martin.jpg";
import DeliImg from "/public/images/deli.jpg";
import IfiImg from "/public/images/ifi.jpg";
import ClaveImg from "/public/images/clave.jpg";
import DecidableImg from "/public/images/decidable.jpg";
import DecidableOldImg from "/public/images/decidable-old.jpg";
import IterateImg from "/public/images/iterate.jpg";
import IfiMasterImg from "/public/images/ifi-master.jpg";

// Styles.
import styles from "../styles/About.module.scss";
import Title from "../components/Title";

const About: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} onClick={() => setOpen(!open)} />
      <Layout noPadding>
        <div className={styles.wrapper}>
          <Title title="Who am I?" tag="Developer, designer, and dreamer" />
          <div className={styles.imageContainer}>
            <Image
              src={MaxWithStormtrooperImg}
              alt="Max with a stormtrooper in London, England"
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
                    src: MaxSmallImg,
                    alt: "Max's mom holding him as a baby",
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
                    src: ProgrammingImg,
                    alt: "A stock photo of a young man looking at a laptop while being focused",
                  },
                },
                {
                  date: "June 2015",
                  location: "Bergen, Norway",
                  title: "Graduated from Danielsen High School in Bergen",
                  image: {
                    src: GraduationImg,
                    alt: "A stock photo of people throwing their graduation hats in the air",
                  },
                },
                {
                  date: "Aug. 2015",
                  location: "Oslo, Norway",
                  title: "Started my medical studies in Oslo",
                  description:
                    "I studied medicine for a year in Oslo. I had most of my courses at the University of Oslo. I also had some extra courses at Bjørknes Høyskole.\nThis was my first time living alone and without family or close friends nearby, so the adjustment period was a bit rough but I managed.",
                  image: {
                    src: MedicineImg,
                    alt: "Max and his classmates from when they visited the Slovakian embassy in Oslo",
                  },
                },
                {
                  date: "Sept. 2016",
                  location: "Martin, Slovakia",
                  title:
                    "Transferred to Comenius University, Jessenius Faculty of Medicine",
                  description:
                    "After a year of studying in Oslo, I transferred to the Jessenius Faculty of Medicine in Martin, Slovakia. Living and studying in a foreign country taught me a lot and what made it clearer what I wanted for myself going forward.\nI decided after some time in Martin not to pursue medicine as a career due to having a greater interest in technology related fields.",
                  image: {
                    src: MartinImg,
                    alt: "The view from Max's apartment in Martin, Slovakia",
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
                    src: DeliImg,
                    alt: "The counter at the deli chain where Max worked",
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
                    src: IfiImg,
                    alt: "The Department of Informatics at the University of Oslo",
                  },
                },
                {
                  date: "June–July 2021",
                  location: "Oslo, Norway",
                  title: "Completed a summer internship at Clave Consulting",
                  description:
                    "In 2021 I worked as a summer intern at Clave, a technology consulting company. Here I was placed in a team with four other students, were we worked together to develop a PoC for an intelligent route planner application directed at EV owners in Norway.\nTogether with the others, I was in charge of conception, planning, and developing the application. My main focus area for that project was frontend development, specifically in React, which I learned faily quickly. I also contributed to the backend planning and development, and some design work.",
                  image: {
                    src: ClaveImg,
                    alt: "Clave's old office in Oslo, Norway",
                  },
                },
                {
                  date: "July 2021",
                  location: "Oslo, Norway",
                  title:
                    "Cofounded Decidable, a software agency specializing in developing in-house projects",
                  description:
                    "I was always entrigued by the idea of launching a startup and being your own boss. In the last year of my computer science bachelor's degree, four student buddies of mine and I decided to do exactly this.\nThe name is inspired by the concept in computability theory of a problem being decidable or not.",
                  image: {
                    src: DecidableImg,
                    alt: "The cofounders of Decidable after having officially founded the company",
                  },
                },
                {
                  date: "June–July 2022",
                  location: "Oslo, Norway",
                  title: "Completed a summer internship at Iterate",
                  description:
                    "In 2022 I spent my summer working as a summer intern for Iterate, a venture builder and digital consultancy company. Similarly to my summer internship at Clave, I was placed in a team with two other students, where we worked together to develop a PoC for an idea that Iterate was interested in.\nThe product was baptized 'Iterate Demo' and was supposed to be a way for designers, developers, and entrepreneurs to validate their ideas earlier in the development process by gathering quantitative data from Figma prototypes.\nTogether with the two other summer interns, I was responsible for the conception, planning, design, and development of the application where my main focus area was backend development in Go. I also contributed to the frontend development in React and some design input.",
                  image: {
                    src: IterateImg,
                    alt: "Max's desk setup at Iterate's office in Oslo, Norway",
                  },
                },
                {
                  date: "Feb. 2023",
                  location: "Oslo, Norway",
                  title: "Sold my shares in Decidable",
                  description:
                    "After having worked on various in-house projects and client projects for Decidable since cofounding it in July 2021, I decided to sell my shares in the company.\nI had a great time building the business with the rest of the cofounders, but something just didn't feel right. I therefore decided (😉) that it would be most fair for the others and myself that I sell my shares and move on to other, new things",
                  image: {
                    src: DecidableOldImg,
                    alt: "The cofounders of Decidable after having officially founded the company with Max in the middle but in black and white",
                  },
                },
                {
                  date: "Aug. 2021→",
                  location: "Oslo, Norway",
                  title:
                    "Started my master studies in computer science at the University of Oslo",
                  description:
                    "Having finished my bachelor's degree, I decided to pursue a master's as well. This is what I'm currently up to these days, with a projected graduation date of November 2023.\nMy thesis is in the fields of computer networks and machine learning, with the thesis topic being to predict packet loss in TCP using machine learning methods.",
                  image: {
                    src: IfiMasterImg,
                    alt: "The Department of Informatics at the University of Oslo",
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
