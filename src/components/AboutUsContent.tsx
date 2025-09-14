import { FiTruck, FiTool, FiLayers, FiHome } from "react-icons/fi";

const content = [
  {
    title: "Modern Infrastructure",
    description:
      "We specialize in designing and building state-of-the-art infrastructure projects that meet global standards and ensure long-term sustainability.",
    icon: <FiHome className="w-6 h-6 text-yellow-600" />,
  },
  {
    title: "Heavy Equipment",
    description:
      "Our fleet of modern construction vehicles and heavy machinery ensures efficient project delivery with precision and safety.",
    icon: <FiTruck className="w-6 h-6 text-yellow-600" />,
  },
  {
    title: "Expert Craftsmanship",
    description:
      "From foundations to finishing, our skilled workforce delivers durable and innovative construction solutions.",
    icon: <FiTool className="w-6 h-6 text-yellow-600" />,
  },
  {
    title: "Project Management",
    description:
      "We provide end-to-end project management, ensuring on-time delivery while maintaining the highest quality standards.",
    icon: <FiLayers className="w-6 h-6 text-yellow-600" />,
  },
];

const AboutUsContent = () => {
  return (
    <div className="bg-[url('https://img.freepik.com/free-photo/aerial-view-construction-site-with-machinery_23-2150878374.jpg')] bg-cover bg-no-repeat bg-center bg-fixed">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl bg-white/80 md:px-24 lg:px-8 lg:py-20 rounded-xl">
        <h2
          className="mb-8 text-4xl font-semibold text-gray-900 sm:text-5xl"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="600"
        >
          Building the Future with{" "}
          <span className="text-yellow-600">Excellence</span>
        </h2>
        <p
          className="mb-12 text-lg text-gray-800 md:text-xl"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          At our Construction Firm, we take pride in shaping skylines and
          delivering world-class infrastructure. From innovative architectural
          designs to heavy-duty construction, we bring your vision to life with
          quality, safety, and sustainability at the core.
        </p>
        <div className="grid gap-8 row-gap-5 lg:grid-cols-2">
          {content.map((item, index) => (
            <div
              key={index}
              className="relative p-px overflow-hidden transition duration-300 transform border rounded-lg shadow-lg hover:scale-105 group hover:shadow-xl"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-yellow-500 group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-yellow-500 group-hover:scale-y-100" />
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-yellow-500 group-hover:scale-x-100" />
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-yellow-500 group-hover:scale-y-100" />
              <div className="relative p-5 bg-white rounded-sm">
                <div className="flex flex-col mb-4 lg:items-center lg:flex-row">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 mr-2 rounded-full bg-yellow-100 lg:mb-0">
                    {item.icon}
                  </div>
                  <h6 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h6>
                </div>
                <p className="mt-4 mb-2 text-lg text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
