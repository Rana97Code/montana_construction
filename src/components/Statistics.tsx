import React from "react";
import { useQuery } from "@apollo/client";
import CountUp from "react-countup";
import { GET_ALL_CLIENT_STATS } from "../graphql/queries/about.queries";
import {
  FaUsers,
  FaProjectDiagram,
  FaClock,
  FaRegAddressCard,
} from "react-icons/fa"; // Importing icons

const Statistic = () => {
  const { loading, error, data } = useQuery(GET_ALL_CLIENT_STATS); // fetching data using the query

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Assuming data is in the structure you shared
  const stats = [
    {
      id: "completedProjects",
      title: "Completed Projects",
      count: data?.getClientStats?.completedProjects || 0,
      bgColor: "bg-blue-500",
      textColor: "text-white",
      icon: <FaProjectDiagram />, // Use FaProjectDiagram icon here
    },
    {
      id: "employees",
      title: "Employees",
      count: data?.getClientStats?.employees || 0,
      bgColor: "bg-green-500",
      textColor: "text-white",
      icon: <FaUsers />, // Use FaUsers icon here
    },
    {
      id: "yearsOnMarket",
      title: "Years on Market",
      count: data?.getClientStats?.yearsOnMarket || 0,
      bgColor: "bg-yellow-500",
      textColor: "text-white",
      icon: <FaClock />, // Use FaClock icon here
    },
    {
      id: "clients",
      title: "Clients",
      count: data?.getClientStats?.clients || 0,
      bgColor: "bg-red-500",
      textColor: "text-white",
      icon: <FaRegAddressCard />, // Use FaRegAddressCard icon here
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#f0f4ff] via-[#E8F5FB] to-[#E8F5FB] py-16 md:py-24">
      <div className="max-w-screen-xl px-6 mx-auto lg:px-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
            Trusted by Clients Worldwide
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base text-gray-600 sm:text-lg">
            Our results speak for themselves, showcasing our commitment to
            delivering exceptional solutions and measurable success.
          </p>
        </div>

        {/* Stat Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center p-6 transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-xl"
              data-aos="flip-right"
              data-aos-duration="1200"
              data-aos-easing="ease-out"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 ${stat.bgColor} ${stat.textColor} shadow-xl transform transition-all duration-300 hover:scale-110`}
              >
                {React.cloneElement(stat.icon, { className: "w-7 h-7" })}
              </div>

              {/* Count */}
              <h3 className="text-4xl font-extrabold text-[#2648b6]">
                <CountUp
                  end={stat.count}
                  duration={4}
                  separator=","
                  prefix={stat.count > 0 && stat.count > 0 ? "+" : ""}
                />
              </h3>

              {/* Title */}
              <p className="mt-3 text-lg font-medium text-gray-700">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistic;
