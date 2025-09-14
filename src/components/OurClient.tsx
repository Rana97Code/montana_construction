const OurClients = () => {
  // Static client values for construction
  const clientValues = [
    {
      title: "Quality & Precision",
      description:
        "We ensure world-class standards with every project, from residential complexes to commercial towers. Precision and attention to detail are at the core of our work.",
    },
    {
      title: "On-Time Delivery",
      description:
        "Our team is dedicated to completing projects within deadlines, ensuring smooth handovers without compromising on quality or safety.",
    },
    {
      title: "Sustainable Practices",
      description:
        "We integrate eco-friendly materials and modern technologies to build structures that last while caring for the environment.",
    },
    {
      title: "Safety First",
      description:
        "Client and worker safety is our top priority. We strictly follow international safety standards at all construction sites.",
    },
    {
      title: "Innovation & Modern Design",
      description:
        "From iconic skyscrapers to modern villas, we bring creativity and innovation into every project with state-of-the-art designs.",
    },
    {
      title: "Trusted Partnerships",
      description:
        "Our long-term relationships with clients across Saudi Arabia and Dubai reflect our reliability, transparency, and commitment.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#e0f2fe] via-[#c7d2fe] to-[#e0e7ff]
    bg-[url('/construction/team-work.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-screen-xl px-4 py-16 mx-auto md:py-20 lg:px-24">
        {/* Heading */}
        <div
          className="max-w-2xl mx-auto mb-12 text-center"
          data-aos="fade-down"
          data-aos-easing="linear"
        >
          <h2 className="text-4xl text-white font-semibold text-gray-900 sm:text-5xl">
            Why do our{" "}
            <span className="text-[#3689ce]">clients trust us?</span>
          </h2>
          <p
            className="mt-6 text-lg text-white"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            Our reputation is built on excellence, trust, and innovation. Here
            are the key reasons clients choose Mohanta Construction for their
            projects in Saudi Arabia and Dubai.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {clientValues.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out group p-8 flex items-start gap-6 hover:bg-gradient-to-r hover:from-[#3689ce] hover:to-[#84c6fb] hover:text-white transform hover:scale-105"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div>
                <h4 className="mb-4 text-2xl font-semibold text-gray-900 group-hover:text-white">
                  {item.title}
                </h4>
                <p className="text-base leading-relaxed text-gray-600 group-hover:text-gray-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
