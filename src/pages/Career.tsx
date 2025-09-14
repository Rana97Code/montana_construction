import { useEffect } from "react";
import CareerBanner from "../components/CareerBanner";
// import Statistic from "../components/Statistics";
// import JobOpenings from "../components/Openings";
// import Benefits from "../components/Benefits";
import AOS from "aos";
import DynamicPageTitle from "../utils/DynamicPageTitle";

const Career = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <DynamicPageTitle
        pageTitle="Career"
        pageContent="Mohanta Construction"
        pageURL="https://www.Mohanta Construction.com/career"
      />
      <CareerBanner />
      {/* <Statistic /> */}
      {/* <JobOpenings />
      <Benefits /> */}
    </>
  );
};

export default Career;
