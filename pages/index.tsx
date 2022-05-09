// Next.js.
import { NextPage } from "next";

// React.
import { useState } from "react";

// Components.
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import SocialSection from "../components/SocialSection";
import ContactSection from "../components/ContactSection";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar open={open} onClick={() => setOpen(!open)} />
      <Landing />
      <AboutSection />
      <ProjectsSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
