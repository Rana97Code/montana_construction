import React, { useState } from "react";
import { sections } from "../data";
import { MdChevronRight } from "react-icons/md";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="bg-gray-50">
      <div className="relative z-10 px-6 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-48">
        <div className="mt-12 mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-gray-600">Last updated: June 19, 2025</p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Navigation Sidebar */}
          <nav className="p-6 bg-white rounded-lg shadow-md md:w-1/4">
            <h3 className="mb-6 text-lg font-semibold text-gray-800 uppercase">
              Our Terms Categories
            </h3>

            <ul className="space-y-4">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 ${
                        activeSection === index
                          ? "bg-[#458FCD] text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-lg">{section.title}</span>
                      {activeSection === index && (
                        <MdChevronRight size={16} className="ml-auto" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-6">
              {React.createElement(sections[activeSection].icon, {
                size: 24,
                className: "text-[#458FCD]",
              })}
              <h2 className="text-2xl font-semibold text-gray-900">
                {sections[activeSection].title}
              </h2>
            </div>
            <div className="leading-relaxed prose text-gray-700 max-w-none">
              <p>
                {sections[activeSection].content.replace(
                  /Mohanta Construction/g,
                  "Mohanta Construction IT"
                )}
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
