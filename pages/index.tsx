// Next.js.
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useRouter } from "next/router";

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
import CustomHead from "../components/CustomHead";

const Home: NextPage = ({
  baseUrl,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <CustomHead
        title="Maximilian"
        description="Maximilian's personal portfolio"
        url={`${baseUrl}${router.asPath}`}
        image="/images/landing.jpg"
      />
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

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return {
    props: {
      baseUrl,
    },
  };
};

export default Home;
