type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  timeline: string;
  status: "Completed" | "Ongoing";
  link?: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "NEOM Windmill Energy Project",
    description:
      "A groundbreaking renewable energy initiative in Saudi Arabia as part of the NEOM smart city vision, powering sustainable communities.",
    image: "/public/construction/wind1.jpeg",
    tags: ["Wind Energy", "Sustainability", "Saudi Arabia"],
    timeline: "2023 - Present",
    status: "Ongoing",
  },
  {
    id: "2",
    title: "Dubai Offshore Wind Farm",
    description:
      "Harnessing wind power off the Dubai coast to provide clean electricity for thousands of households.",
    image: "/public/construction/dubai.jpg",
    tags: ["Renewable Energy", "Infrastructure", "Dubai"],
    timeline: "2022 - 2025",
    status: "Ongoing",
  },
  {
    id: "3",
    title: "Saudi Desert Wind Turbines",
    description:
      "Large-scale wind farm in Saudi’s desert region contributing to the nation’s renewable energy roadmap.",
    image: "/public/construction/wind3.jpeg",
    tags: ["Green Energy", "Mega Project", "Saudi Arabia"],
    timeline: "2021 - 2024",
    status: "Ongoing",
  },
  {
    id: "4",
    title: "Dubai Smart City Energy Hub",
    description:
      "Part of Dubai’s smart city infrastructure, combining wind energy with solar projects for maximum efficiency.",
    image: "/public/construction/dubai-e.jpg",
    tags: ["Smart City", "Innovation", "Dubai"],
    timeline: "Completed in 2022",
    status: "Completed",
    link: "https://example.com/dubai-smart-city",
  },
];

const ShowcaseProjects = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-screen-xl px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-semibold text-center text-gray-900 sm:text-5xl">
          Discover Our{" "}
          <span className="text-blue-700">Construction Projects</span>
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden sm:h-64 md:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.description}</p>

                <div className="flex flex-wrap gap-2 text-xs">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-blue-800 bg-blue-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    <strong>Status:</strong>{" "}
                    <span
                      className={
                        project.status === "Completed"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }
                    >
                      {project.status}
                    </span>
                  </span>
                  <span>
                    <strong>Timeline:</strong> {project.timeline}
                  </span>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 mt-4 text-sm font-medium text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseProjects;
