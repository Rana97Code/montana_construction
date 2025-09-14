import GetInTouch from "../components/GetInTouch";
import Location from "../components/Location";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import DynamicPageTitle from "../utils/DynamicPageTitle";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <DynamicPageTitle
        pageTitle="Contact Us"
        pageContent="Mohanta Construction"
        pageURL="https://www.Mohanta Construction.com/contact"
      />

      <GetInTouch />
      <Location />
    </>
  );
};

export default Contact;
