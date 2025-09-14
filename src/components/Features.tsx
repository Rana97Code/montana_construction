import { FaHardHat, FaProjectDiagram, FaLeaf, FaHandsHelping } from 'react-icons/fa';


// Feature data for construction and green energy
const featuresData = [
  {
    icon: <FaHardHat className="text-3xl text-[#3689ce]" />,
    title: 'Innovative Construction',
    description:
      'Implementing state-of-the-art construction techniques to deliver sustainable and high-quality infrastructure projects.',
  },
  {
    icon: <FaProjectDiagram className="text-3xl text-[#3689ce]" />,
    title: 'Mega Project Expertise',
    description:
      'Experience in executing large-scale projects including urban developments, Neom, and hydro power facilities with precision and efficiency.',
  },
  {
    icon: <FaLeaf className="text-3xl text-[#3689ce]" />,
    title: 'Green & Sustainable',
    description:
      'Focusing on eco-friendly construction and renewable energy solutions to minimize environmental impact and promote sustainability.',
  },
  {
    icon: <FaHandsHelping className="text-3xl text-[#3689ce]" />,
    title: 'Dedicated Support',
    description:
      'Providing exceptional project management and support throughout every phase of construction, ensuring client satisfaction and timely delivery.',
  },
];

const Features = () => {
  return (
    <div className="bg-white py-16 lg:py-24 font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              How can{' '}
              <span className="text-[#3689ce]">Mohanta Construction</span>{' '}
              transform your <span className="text-[#3689ce]">projects</span>?
            </h2>
            <p className="text-lg text-gray-700 max-w-xl lg:max-w-none mx-auto mb-3 leading-relaxed">
              Discover how Mohanta Construction delivers landmark projects in Saudi Arabia and Dubai,
              including Neom Mega City, hydro power, and sustainable infrastructure, with innovation,
              efficiency, and world-class standards.
            </p>
            <div className="flex items-center justify-center lg:justify-start">
              <img src="/construction/planning.jpg" alt="" />
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 grid gap-8 sm:grid-cols-2">
            {featuresData.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#f8faff] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#e0f2fe] text-[#3689ce] text-3xl">
                  {feature.icon}
                </div>
                <h3 className="mb-3 font-extrabold leading-tight text-xl text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
