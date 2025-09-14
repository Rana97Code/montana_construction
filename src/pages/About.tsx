import { useEffect } from "react";
import AboutUsContent from "../components/AboutUsContent";
import FAQ from "../components/FAQ";
import MeetExperts from "../components/MeetExperts";
import OurTeam from "../components/OurTeam";
import "aos/dist/aos.css";
import AOS from "aos";
import DynamicPageTitle from "../utils/DynamicPageTitle";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <DynamicPageTitle
        pageTitle="About Us"
        pageContent="Mohanta Construction"
        pageURL="https://www.Mohanta Construction.com/about"
      />
      <MeetExperts />
      <AboutUsContent />
      <OurTeam />
      <FAQ />
    </>
  );
};

export default About;
