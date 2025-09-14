import { advantages } from "../data";

const KeyAdvantages = () => {
  return (
    <div className="bg-gradient-to-r from-[#f1f5ff] via-[#e9f0ff] to-[#fdfdff]">
      <div className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2
            className="max-w-lg mb-6 font-sans text-4xl font-semibold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            Discover the Future of <span className="text-brand">Construction & Green Energy</span>
          </h2>
          <p
            className="text-base text-gray-700 md:text-lg"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            Mohanta Construction delivers innovative, sustainable, and world-class construction projects. 
            From landmark urban developments and eco-friendly towers to hydro power and green energy solutions, we ensure quality, safety, and efficiency in every project.
          </p>
        </div>
        <div
          className="grid gap-8 row-gap-8 lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          {advantages?.map((advantage) => (
            <div key={advantage.title} className="sm:text-center">
              <div className="flex items-center justify-center mb-4">
                {advantage.icon}
              </div>
              <h6 className="mb-4 font-semibold text-xl">{advantage.title}</h6>
              <p className="text-center mb-3 text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyAdvantages;
