import { Link } from "react-router-dom";
import Background from "/public/mohanta_logo.png";

const WhoWidget = () => {
  return (
    <div className="relative py-16 lg:py-24">
      <img
        src={Background}
        alt="Background"
        className="absolute inset-0 object-contain w-full h-full opacity-20"
      />
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="mb-6 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl sm:leading-snug"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            What is <span className="text-brand">Mohanta Construction</span>?
          </h2>
          <p
            className="mb-8 text-lg text-gray-800 sm:text-xl md:text-2xl"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            Mohanta Construction is a leading construction and green energy firm, delivering landmark projects across Saudi Arabia and Dubai. 
            From the <strong>Neom Mega City</strong> development to hydro power and sustainable energy facilities, we create innovative, eco-friendly, and world-class infrastructure. 
            Our mission is to transform cities and communities while ensuring safety, efficiency, and sustainability in every project.
          </p>

          {/* CTA Button */}
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-10 text-lg font-semibold text-white bg-[#23B7F6] rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-[#50a1e4] hover:scale-105"
            >
              Learn About Our Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWidget;
