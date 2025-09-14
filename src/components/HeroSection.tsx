import React from "react";
import {
  FaBuilding,
  FaHome,
  FaTools,
  FaHardHat,
  FaIndustry,
  FaHammer,
} from "react-icons/fa";
import mohanta_logo from "/public/mohanta_logo.png";
import Graph from "../assets/bg/graph.png";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 mx-auto overflow-hidden md:px-24 lg:px-8 md:py-0 2xl:py-20">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
        <div className="flex flex-col items-center justify-center py-16 mx-auto text-center lg:flex-row lg:justify-between lg:text-left">
          {/* Left Section: Text */}
          <div
            className="lg:w-1/2"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Building Excellence with{" "}
              <span className="text-brandSecondary">Mohanta Construction</span>
            </h1>
            <h2 className="mb-6 text-xl font-semibold sm:text-3xl">
              <span className="text-[#3689ce]">We specialize in </span>
              <ReactTyped
                strings={[
                  "Residential Projects",
                  "Commercial Buildings",
                  "Industrial Infrastructure",
                  "Interior & Exterior Design",
                  "Renovation & Maintenance",
                ]}
                typeSpeed={60}
                backSpeed={30}
                loop
                className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3689ce] to-[#7948DB]"
              />
            </h2>

            <p
              className="mb-6 text-lg text-gray-700"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="700"
            >

            As a trusted construction company based in Saudi Arabia and Dubai, we deliver world-class projects with a focus on quality, innovation, and sustainability. Notably, we are proud contributors to Neom City's hydro power project, the world's largest, which exemplifies our commitment to renewable energy and sustainable urban development. Mohanta Construction builds every project with precision, passion, and forward-thinking solutions.
            </p>

            <div className="justify-center mb-8 space-x-4 lg:flex lg:justify-start">
              <Link to="/services">
                <button className="px-6 py-2 text-white transition duration-300 rounded-lg bg-brandBg hover:bg-brandSecondary">
                  Explore Our Services
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-6 py-2 mt-4 text-white transition duration-300 rounded-lg bg-brandSecondary hover:bg-brandBg lg:mt-0">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section: Logo + Icons */}
          <div className="relative flex-col items-center hidden lg:flex lg:w-1/2 lg:items-end">
            <div className="relative mb-8">
              {/* Company Logo */}
              <img
                src={mohanta_logo}
                alt="Construction Illustration"
                className="object-contain rounded-full h-[600px] w-[400px] 2xl:w-[600px]"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />

              {/* Icons positioned around the image */}
              <div className="absolute flex items-center justify-center space-x-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {/* Residential (House) */}
                <div
                  className="bg-[#3b5998] p-5 rounded-full absolute 2xl:top-[-200px] top-[-100px] 2xl:left-[-400px] left-[-300px]"
                  data-aos="fade-up"
                >
                  <FaHome className="text-6xl text-white 2xl:text-8xl animate-smooth-bounce" />
                </div>

                {/* Industrial */}
                <div
                  className="bg-[#E1306C] p-5 rounded-full absolute 2xl:bottom-[-260px] bottom-[-220px] left-[-70px]"
                  data-aos="fade-up"
                  data-aos-delay="0.3s"
                >
                  <FaIndustry className="text-4xl text-white 2xl:text-6xl animate-smooth-bounce" />
                </div>

                {/* Commercial Buildings */}
                <div
                  className="bg-[#0077B5] p-5 rounded-full absolute top-[-80px] 2xl:right-[-320px] right-[-220px]"
                  data-aos="fade-up"
                  data-aos-delay="0.8s"
                >
                  <FaBuilding className="text-4xl text-white animate-smooth-bounce" />
                </div>

                {/* Safety / Workers */}
                <div
                  className="bg-[#1DA1F2] p-6 rounded-full absolute 2xl:top-[-380px] top-[-260px] right-[-30px]"
                  data-aos="fade-up"
                  data-aos-delay="0.2s"
                >
                  <FaHardHat className="text-4xl text-white animate-smooth-bounce" />
                </div>

                {/* Tools (Renovation) */}
                <div
                  className="bg-[#F5A623] p-5 rounded-full absolute 2xl:bottom-[-250px] bottom-[-220px] 2xl:right-[-280px] right-[-220px]"
                  data-aos="fade-up"
                  data-aos-delay="1s"
                >
                  <FaTools className="text-4xl text-white animate-smooth-bounce" />
                </div>

                {/* Hammer (Construction Work) */}
                <div
                  className="bg-[#4C9F70] p-6 rounded-full absolute bottom-[-200px] 2xl:left-[-380px] left-[-320px]"
                  data-aos="fade-up"
                  data-aos-delay="0.5s"
                >
                  <FaHammer className="text-6xl text-white animate-smooth-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Graphics */}
        <img
          src={Graph}
          alt=""
          className="h-[800px] w-[800px] absolute left-[-450px] -z-10 top-[0px]"
          data-aos="fade-up"
          data-aos-duration="1200"
          style={{ opacity: 0.1 }}
        />

        <img
          src={Graph}
          alt=""
          className="h-[800px] w-[800px] absolute right-[-550px] bottom-[-180px] -z-10 rotate-45"
          data-aos="fade-up"
          data-aos-duration="1500"
          style={{ opacity: 0.1 }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
