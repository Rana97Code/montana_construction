const ManagingDirector = () => {
  const notableWorks = [
    "Contributer to the development of Neom Mega City Projects",
    "Pioneered Sustainable Hydro Power Initiatives",
    "Developed Eco-Friendly Urban Towers in Dubai",
    "Oversaw Landmark Commercial & Residential Construction Projects",
  ];

  const projectSupervise = [
    "Supervised end-to-end construction of Neom Mega City Phase I",
    "Led on-site teams for Hydro Power plant installations",
    "Monitored quality assurance for eco-friendly urban towers",
    "Directed supervision of landmark commercial complexes",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
            Managing Director:{" "}
            <span className="text-brand">Saurabh Mohanta</span>
          </h2>
          <p className="text-lg text-gray-700">
            Leading Mohanta Construction with vision, expertise, and a
            commitment to sustainable and world-class infrastructure.
          </p>
        </div>

        {/* Images */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <img
            src="construction/saurabh.jpg"
            alt="Saurabh Mohanta"
            className="rounded-xl shadow-lg w-full md:w-1/2 object-cover"
            data-aos="fade-right"
          />
        </div>

        {/* Notable Works */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Notable Works
          </h3>
          <ul className="space-y-4">
            {notableWorks.map((work, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-gray-700 text-lg"
              >
                <span className="text-brand mt-1">•</span>
                {work}
              </li>
            ))}
          </ul>
        </div>

        {/* Project Supervise + Static Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Project Supervise
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
              {projectSupervise.map((p, index) => (
                <li key={index}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Static Image */}
          <div>
            <img
              src="construction/saurabh2.jpg"
              alt="Project Supervision"
              className="rounded-xl shadow-lg w-full object-cover"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagingDirector;
