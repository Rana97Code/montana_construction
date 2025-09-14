import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CASE_STUDIES } from "../graphql/queries/caseStudies.queries";
import { CaseStudy } from "../interface/landing.interface";

const tags = [
  "ALL",
  "ANDROID",
  "BLOCKCHAIN",
  "BUSINESS INTELLIGENCE",
  "DIGITAL PLATFORM",
  "ECOMMERCE",
  "ERP",
  "FINTECH",
  "HEALTHCARE",
  "RESTAURANT",
  "IOS",
  "PHARMACEUTICAL",
  "PHP",
  "REAL ESTATE",
  "SQA",
];

const CaseStudiesFilter = () => {
  const [activeTag, setActiveTag] = useState("ALL");
  const { data, loading, error } = useQuery(GET_ALL_CASE_STUDIES);

  const caseStudies = data?.getAllCaseStudies || [];

  // Apply filtering based on the active tag and category
  const filteredCaseStudies =
    activeTag === "ALL"
      ? caseStudies
      : caseStudies.filter((study: CaseStudy) =>
          study.category.toLowerCase().includes(activeTag.toLowerCase())
        );

  // Render image based on the study's icon URL
  const renderImage = (imageUrl: string) => {
    return imageUrl ? (
      <div className="w-16 h-16 overflow-hidden bg-gray-200 rounded-full">
        <img
          src={imageUrl}
          alt="Case Study Icon"
          className="object-cover w-full h-full rounded-full" // Ensure the image fits within the circular container
        />
      </div>
    ) : (
      <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
        <span className="text-gray-400">No Image</span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold text-red-500">Error loading data!</p>
      </div>
    );
  }

  return (
    <div className="relative z-10 px-6 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-32">
      <h1 className="mb-6 text-4xl font-semibold text-center text-gray-900 sm:text-5xl">
        Case Studies
      </h1>
      <p
        className="mb-8 text-center text-gray-500"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="700"
      >
        Boost your online presence with innovative ideas that elevate your brand
        across every digital platform!
      </p>

      {/* Tags Section */}
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600"
        className="flex flex-wrap justify-center gap-4 mb-10"
      >
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition duration-300 transform ease-in-out ${
              activeTag === tag
                ? "bg-gradient-to-r from-brand to-brandSecondary text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTag(tag)} // Set active tag
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCaseStudies.length > 0 ? (
          filteredCaseStudies.map((study: CaseStudy) => (
            <div
              key={study.id}
              className="p-6 transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 p-4 bg-gray-200 rounded-full">
                  {renderImage(study.icon)} {/* Rendering the image here */}
                </div>
              </div>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                {study.title}
              </h2>
              <p className="mb-2 text-sm text-gray-500">{study.category}</p>
              <p className="text-sm text-gray-600">{study.description}</p>
            </div>
          ))
        ) : (
          // Fallback Card for No Data
          <div className="text-center col-span-full">
            <p className="text-lg font-semibold text-gray-500">
              No case studies available for the selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudiesFilter;
