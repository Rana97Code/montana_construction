import Features from "../components/Features";
import KeyAdvantages from "../components/KeyAdvantages";
import ServiceBanner from "../components/ServiceBanner";
import WhoWidget from "../components/WhoWidget";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "motion/react";
import DynamicPageTitle from "../utils/DynamicPageTitle";

const Services = () => {
  const { scrollY } = useScroll();
  const stickySolutionY = useTransform(scrollY, [0, 1], ["auto", "0px"]);

  return (
    <>
      <DynamicPageTitle
        pageTitle="Services"
        pageContent="Mohanta Construction"
        pageURL="https://www.Mohanta Construction.com/services"
      />
      <WhoWidget />
      <ServiceBanner />

      <motion.div
        style={{
          position: "sticky",
          zIndex: "-1",
          top: stickySolutionY,
        }}
      >
        <KeyAdvantages />
      </motion.div>

      <Features />
    </>
  );
};

export default Services;
