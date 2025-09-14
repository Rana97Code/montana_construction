import { FaAngleRight } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import ExploreWeb from "./ExploreWeb";
import { Link } from "react-router-dom";

const Services = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    return IconComponent ? <IconComponent className="text-2xl" /> : null;
  };

  return (
    <>
      <section className="py-24 bg-[#E4E6E7] h-auto">
        <div className="mb-[350px]">
          <ExploreWeb />
        </div>

        <div className="max-w-screen-xl px-6 mx-auto text-center lg:px-8">
          {/* Heading */}
          <div className="mb-16" data-aos="fade-down" data-aos-duration="800">
            <h2 className="mb-6 text-4xl font-semibold text-gray-900 sm:text-5xl">
              Pioneering Sustainable Energy: Building NEOM’s Hydro & Wind Power
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 sm:text-xl">
              As a leading construction company in Saudi Arabia and Dubai, Mohanta
              Construction delivers world-class projects with quality, safety, and
              innovation. From residential towers to commercial complexes and
              industrial infrastructures, we shape skylines and create lasting
              value for communities.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-10 text-left md:grid-cols-2 lg:grid-cols-3">
            {/* Residential Projects */}
            <div
              className="p-8 bg-gradient-to-br from-[#f8fbff] to-[#eef5fc] border border-[#d8e8f8] rounded-2xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1"
              data-aos="fade-up"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#dceeff] text-[#3689ce] mb-6 shadow-md">
                {renderIcon("FaBuilding")}
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                Residential Projects
              </h3>
              <p className="mb-6 text-base leading-relaxed text-gray-700">
                We specialize in residential construction, delivering high-quality
                homes that meet the needs of modern families. Our expertise spans
                single-family homes to apartment complexes, ensuring every project
                is built to last.
              </p>
              <Link
                to={"#"}
                target="_blank"
                className="inline-flex items-center text-[#3689ce] hover:text-[#1e65aa] font-medium text-base transition-colors duration-300"
              >
                Learn More <FaAngleRight className="ml-2" />
              </Link>
            </div>

            {/* World’s Biggest Hydro Power Project */}
            <div
              className="p-8 bg-gradient-to-br from-[#f8fbff] to-[#eef5fc] border border-[#d8e8f8] rounded-2xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#dceeff] text-[#3689ce] mb-6 shadow-md">
                {renderIcon("FaWater")}
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                World’s Biggest Hydro Power Project
              </h3>
              <p className="mb-6 text-base leading-relaxed text-gray-700">
                We are proud to contribute to the development of the world’s
                largest hydro power project — a milestone in clean energy and
                sustainable infrastructure, harnessing the power of water to fuel
                the future.
              </p>
              <Link
                to={"#"}
                target="_blank"
                className="inline-flex items-center text-[#3689ce] hover:text-[#1e65aa] font-medium text-base transition-colors duration-300"
              >
                Learn More <FaAngleRight className="ml-2" />
              </Link>
            </div>

            {/* Multipurpose Building Project */}
            <div
              className="p-8 bg-gradient-to-br from-[#f8fbff] to-[#eef5fc] border border-[#d8e8f8] rounded-2xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#dceeff] text-[#3689ce] mb-6 shadow-md">
                {renderIcon("FaCity")}
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                Multipurpose Building Project
              </h3>
              <p className="mb-6 text-base leading-relaxed text-gray-700">
                From commercial hubs to cultural landmarks, our multipurpose
                building projects redefine urban landscapes. Designed for
                versatility and sustainability, these projects serve diverse
                community and business needs.
              </p>
              <Link
                to={"#"}
                target="_blank"
                className="inline-flex items-center text-[#3689ce] hover:text-[#1e65aa] font-medium text-base transition-colors duration-300"
              >
                Learn More <FaAngleRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
