import { FiMapPin, FiHome, FiUsers } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";

const features = [
  {
    title: "Mega City Development",
    description:
      "Delivering world-class projects like Saudi Arabia’s NEOM city and Dubai’s skyline-defining towers.",
    icon: <BsBuilding size={40} />,
  },
  {
    title: "Renewable Energy Projects",
    description:
      "Building windmill and solar energy infrastructure to power sustainable communities in Saudi Arabia.",
    icon: <FiMapPin size={40} />,
  },
  {
    title: "Luxury Real Estate",
    description:
      "From Dubai’s luxury villas to commercial hubs, we create spaces that inspire and elevate lifestyles.",
    icon: <FiHome size={40} />,
  },
  {
    title: "Strong Community Impact",
    description:
      "Our projects enhance communities with modern design, sustainability, and long-term growth in mind.",
    icon: <FiUsers size={40} />,
  },
];

const KeyFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-100 via-blue-100 to-white">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-20 text-4xl font-semibold leading-tight text-center text-gray-900 sm:text-5xl lg:text-5xl">
          Unlocking Potential with Our{" "}
          <span className="text-blue-700">Construction Expertise</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features?.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-8 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group border border-gray-200"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-6 text-blue-600 transition-colors duration-300 bg-blue-100 rounded-full group-hover:bg-blue-200 group-hover:text-blue-800">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-center text-gray-800 transition-colors duration-300 group-hover:text-blue-700">
                {feature.title}
              </h3>
              <p className="text-base text-center text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
