import { useEffect } from "react";
import CaseStudies from "../components/CaseStudies";
import HeroSection from "../components/HeroSection";
import Industries from "../components/Industries";
import LatestBlogs from "../components/LatestBlogs";
import OurClients from "../components/OurClient";
import Services from "../components/Services";
// import Statistic from "../components/Statistics";
import DynamicPageTitle from "../utils/DynamicPageTitle";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <DynamicPageTitle
        pageTitle="Home"
        pageContent="Mohanta Construction"
        pageURL="https://Mohanta Construction.com/"
      />
      <HeroSection />
      {/* <Statistic /> */}
      <Services />
      <Industries />
      <OurClients />
      <CaseStudies />
      <LatestBlogs />
    </>
  );
};

export default Home;
