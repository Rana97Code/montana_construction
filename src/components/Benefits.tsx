import { useQuery } from "@apollo/client";
import * as FaIcons from "react-icons/fa"; // import all FontAwesome icons
import { GET_BENEFITS } from "../graphql/queries/career.queries";
import { Benefit } from "../interface/landing.interface";

const Benefits = () => {
  const { data, loading, error } = useQuery(GET_BENEFITS);

  if (loading) return <p className="text-center">Loading benefits...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load benefits.</p>;

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-12 text-center">
        <h2
          className="mb-10 text-5xl font-semibold text-gray-900"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          Benefits & Perks
        </h2>
        <p
          className="text-lg text-gray-700"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="linear"
        >
          At Mohanta Construction, we believe in investing in our people. Our
          benefits and perks are designed to empower your growth, support your
          well-being, and advance your career. Join us and be part of a team
          that values innovation, collaboration, and success.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data?.getBenefits?.map((benefit: Benefit) => {
          const IconComponent = FaIcons[benefit.icon as keyof typeof FaIcons];

          return (
            <div
              key={benefit.id}
              className="p-8 transition-all duration-300 ease-in-out bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105"
              data-aos="flip-up"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-[#f5f7fb]">
                  {IconComponent ? (
                    <IconComponent className="w-8 h-8 text-indigo-500 sm:w-12 sm:h-12" />
                  ) : (
                    <span className="text-sm text-gray-400">No Icon</span>
                  )}
                </div>
                <h6 className="mb-2 text-xl font-semibold text-gray-800">
                  {benefit.title}
                </h6>
                <p className="text-base text-gray-600">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
