import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import bannerImage from "/public/banner-1.png";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="relative w-full py-40 bg-fixed bg-center bg-no-repeat bg-cover md:py-56"
    >
      {/* New Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e1e40]/90 to-[#1f375b]/80"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-screen-xl px-6 mx-auto lg:px-12">
        <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left Side Content */}
          <div
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="1000"
          >
            <span className="inline-block px-5 py-2 mb-5 text-sm font-medium tracking-wider text-white uppercase bg-[#2648b6] rounded-full shadow-md">
              Digital Excellence
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Your <br />
              <span className="text-[#68c4ff]">Digital Transformation</span>
            </h1>

            <h2 className="mb-6 text-2xl font-semibold text-white sm:text-3xl">
              We specialize in{" "}
              <ReactTyped
                strings={[
                  "Custom Software",
                  "Mobile Apps",
                  "Digital Marketing",
                  "UI/UX Design",
                  "IT Consulting",
                ]}
                typeSpeed={60}
                backSpeed={30}
                loop
                style={{ color: "#bde3ff" }}
              />
            </h2>

            <p className="max-w-xl mb-8 text-lg leading-relaxed text-white/90">
              At Mohanta Construction, we help you build powerful, scalable digital
              products that accelerate your business growth and drive measurable
              results.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-[#3689ce] hover:bg-[#5189b8] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Let's Work Together
            </Link>
          </div>

          {/* Right Side Image */}
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="flex justify-center lg:justify-end"
          >
            <img
              src="https://media.istockphoto.com/id/489181824/photo/web-design-development-concept.jpg?s=612x612&w=0&k=20&c=ahr8zV38ZXAKDipI4eQeEy7Tq8Qhk-p51j15zedXhiw="
              alt="Team Collaboration"
              className="w-full max-w-md transition-transform duration-300 shadow-xl rounded-xl hover:scale-105 animate-bounce-custom-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
