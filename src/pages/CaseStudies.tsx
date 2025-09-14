import CaseStudiesFilter from "../components/CaseStudiesFilter";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import DynamicPageTitle from "../utils/DynamicPageTitle";

const CaseStudies = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <DynamicPageTitle
        pageTitle="Case Studies"
        pageContent="Nextrabyte"
        pageURL="https://www.Mohanta Construction.com/case-studies"
      />

      <CaseStudiesFilter />
    </>
  );
};

export default CaseStudies;
