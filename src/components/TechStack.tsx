import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_STACK } from "../graphql/queries/project.queries";

// Import all icon sets
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";

// Merge all icons into one object
const iconLibraries = {
  ...FaIcons,
  ...SiIcons,
  ...MdIcons,
};

// Optional: Define brand colors for known icons
const iconColors: Record<string, string> = {
  FaReact: "#61DBFB",
  FaNodeJs: "#339933",
  FaPhp: "#8892BF",
  FaAws: "#FF9900",
  FaDocker: "#0db7ed",
  FaMobileAlt: "#00c4cc",
  FaAndroid: "#3DDC84",
  FaApple: "#333333",
  MdWeb: "#5c6bc0",
  MdSignalWifiStatusbar1Bar: "#607D8B",

  SiNextdotjs: "#000000",
  SiNestjs: "#E0234E",
  SiLaravel: "#FF2D20",
  SiMongodb: "#47A248",
  SiPostgresql: "#336791",
  SiMysql: "#00758F",
  SiTailwindcss: "#06B6D4",
  SiGraphql: "#E10098",
  SiKubernetes: "#326CE5",
  SiTypescript: "#3178C6",
  SiRedux: "#764ABC",
  SiBootstrap: "#7952B3",
  SiAntdesign: "#0170FE",
  SiMui: "#007FFF",
  SiReactquery: "#FF4154",
  SiSwagger: "#85EA2D",
  SiRedis: "#DC382D",
  SiSocketdotio: "#010101",
  SiServerless: "#FD5750",
  SiFlutter: "#02569B",
};

interface TechItem {
  id: string;
  name: string;
  icon: string;
}

const TechCard: React.FC<TechItem> = ({ name, icon }) => {
  const IconComponent = iconLibraries[icon as keyof typeof iconLibraries];
  const color = iconColors[icon] || "#444";

  return (
    <div className="flex flex-col items-center justify-center p-6 transition-all bg-white shadow rounded-xl hover:shadow-xl hover:scale-105 group">
      <div
        className="mb-3 text-4xl transition-transform group-hover:scale-110"
        style={{ color }}
      >
        {IconComponent ? <IconComponent /> : <span>?</span>}
      </div>
      <span className="text-sm font-medium text-center text-gray-800 group-hover:text-blue-700">
        {name}
      </span>
    </div>
  );
};

const TechnologyStack = () => {
  const { data, loading, error } = useQuery(GET_ALL_STACK);

  if (loading) return <div className="py-10 text-center">Loading...</div>;
  if (error)
    return (
      <div className="py-10 text-center text-red-500">
        Error loading tech stack.
      </div>
    );

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="max-w-screen-xl px-4 mx-auto text-center">
        <h2 className="mb-16 text-4xl font-semibold text-gray-900 sm:text-5xl">
          Our <span className="text-blue-700">Technology Stack</span>
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {data.getAllTechItems.map((tech: TechItem) => (
            <TechCard key={tech.id} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
