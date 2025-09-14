import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Project Manager",
    bio: "Over 10 years of experience in managing construction projects across the globe.",
    imageUrl: "/public/construction/team1.jpg",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
    github: "https://github.com/",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Lead Architect",
    bio: "Passionate about designing sustainable and modern infrastructure.",
    imageUrl: "/public/construction/full-team.jpg",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
    github: "https://github.com/",
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Civil Engineer",
    bio: "Expert in structural engineering with a focus on safety and durability.",
    imageUrl: "/public/construction/site-team.jpg",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
    github: "https://github.com/",
  },
];

const OurTeam = () => {
  return (
    <section className="px-4 py-20 mx-auto max-w-7xl md:px-8 lg:py-28">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <p className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wide text-white uppercase rounded-full bg-[#458FCD]">
          Core Team
        </p>
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
          Meet Our Talented Professionals
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Empowering innovation through collaboration — our team is the heart of
          our Construction.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div key={member.id} data-aos="zoom-in">
            <div className="relative overflow-hidden transition-transform duration-300 transform shadow-md rounded-2xl hover:-translate-y-2 hover:shadow-xl">
              <img
                className="object-cover w-full h-72 rounded-t-2xl"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="absolute inset-0 flex flex-col justify-center px-6 py-6 text-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-80 hover:opacity-100">
                <h3 className="mb-1 text-xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="mb-3 text-sm font-medium tracking-wide text-gray-300 uppercase">
                  {member.role}
                </p>
                <p className="mb-4 text-sm text-gray-400">{member.bio}</p>
                <div className="flex items-center justify-center space-x-4">
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#1DA1F2]"
                    >
                      <FaTwitter />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#0077B5]"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#4267B2]"
                    >
                      <FaFacebook />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
