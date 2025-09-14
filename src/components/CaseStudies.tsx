import Lottie from "lottie-react";
import CaseStudiesLottie from "../assets/lottie/case-studies.json";

const CaseStudies = () => {
  // Static construction-related case studies
  const caseStudies = [
    {
      id: 1,
      icon: "🏗️",
      title: "High-Rise Building Project",
      description:
        "Successfully completed a 20-story commercial tower within schedule and budget, ensuring top-notch safety and quality standards.",
    },
    {
      id: 2,
      icon: "🚧",
      title: "Bridge Construction",
      description:
        "Designed and built a modern concrete bridge improving transportation access and reducing travel time by 30%.",
    },
    {
      id: 3,
      icon: "🏠",
      title: "Residential Housing",
      description:
        "Delivered a 200-unit housing project with eco-friendly designs, energy-efficient systems, and modern amenities.",
    },
    {
      id: 4,
      icon: "🌉",
      title: "Infrastructure Development",
      description:
        "Worked on urban infrastructure including roads, drainage, and community facilities that uplifted the local economy.",
    },
  ];

  return (
    <section className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 z-0 w-full h-full lg:w-3/4" />
      </div>
      <div className="relative">
        <h2 className="pb-6 text-4xl font-semibold text-gray-900 sm:text-5xl">
          Case <span className="text-[#3689ce]">Studies</span>
        </h2>
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          {/* Left side: Case studies list */}
          <div className="grid gap-12 row-gap-5 md:grid-cols-2">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="relative">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-[#3689ce] text-white text-lg">
                    {study.icon}
                  </div>
                  <h6 className="mb-2 font-semibold leading-5">
                    {study.title}
                  </h6>
                  <p className="text-sm text-gray-900">{study.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: Lottie animation */}
          <div className="flex items-center justify-center lg:justify-start">
            <Lottie
              animationData={CaseStudiesLottie}
              loop
              className="md:w-[500px] md:h-[500px] opacity-80 scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
