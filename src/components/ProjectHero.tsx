import { Link } from "react-router-dom";

const ProjectHero = () => {
  const title = "Building the Future in Saudi & Dubai";
  const description =
    "From the futuristic NEOM city and windmill energy projects in Saudi Arabia to iconic skyscrapers and luxury developments in Dubai, we bring visionary construction projects to life. Our expertise spans infrastructure, renewable energy, and landmark urban developments.";
  const buttonText = "Explore Our Projects";

  return (
    <section className="relative py-24 overflow-hidden sm:py-32 md:py-40 lg:py-48">
      {/* Background shape/pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 224L48 208C96 192 192 160 288 170.7C384 181.3 480 234.7 576 250.7C672 266.7 768 245.3 864 224C960 202.7 1056 181.3 1152 170.7C1248 160 1344 160 1392 160L1440 160L1440 0L1392 0C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0L0 0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-center max-w-screen-xl px-4 mx-auto 2xl:max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 text-center md:gap-16 md:flex-row md:text-left">
          {/* Left Column - Text */}
          <div className="space-y-6 text-gray-800 md:w-1/2">
            <h1 className="text-4xl font-semibold leading-tight text-transparent sm:text-5xl sm:leading-snug bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text">
              {title}
            </h1>

            <p className="text-lg leading-relaxed sm:text-xl opacity-90">
              {description}
            </p>
            <Link
              to={`/contact`}
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-xl font-bold text-blue-800 transition duration-300 transform bg-white rounded-full shadow-xl sm:px-10 sm:py-4 hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75"
            >
              {buttonText}
            </Link>
          </div>

          {/* Right Column - Image (Windmill for NEOM renewable project) */}
          <div className="flex justify-center md:w-1/2 md:justify-end">
            <img
              src="/construction/wind1.jpeg" 
              alt="NEOM Windmill Project"
              className="object-cover w-full h-auto max-w-md transition duration-500 transform shadow-2xl md:max-w-lg lg:max-w-xl rounded-xl hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
