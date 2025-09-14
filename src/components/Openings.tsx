import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_ALL_JOB_OPENINGS } from "../graphql/queries/career.queries";
import { JobListing } from "../interface/landing.interface";

const JobOpenings = () => {
  const { data, loading, error } = useQuery(GET_ALL_JOB_OPENINGS);

  const jobs = data?.getJobListings || [];

  return (
    <div className="bg-[url('https://aamarpay.com/images/epsilon/shape-1.png')] bg-center bg-cover bg-fixed py-10">
      <div className="container px-6 py-12 mx-auto">
        <div className="mb-20 text-center">
          <h1
            className="mb-8 text-5xl font-semibold tracking-wide text-gray-900"
            data-aos-duration="600"
            data-aos="fade-up"
            data-aos-easing="linear"
          >
            Job Openings
          </h1>
          <p
            className="max-w-2xl mx-auto mt-4 text-lg text-gray-600"
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-easing="linear"
          >
            Explore opportunities tailored to your expertise and career
            ambitions. Join a workplace that fosters growth, innovation, and
            success.
            <span
              className="block font-semibold text-[#306591] mt-1"
              data-aos-duration="1000"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              Your journey starts here!
            </span>
          </p>
        </div>

        {loading && <p className="text-center">Loading jobs...</p>}
        {error && (
          <p className="text-center text-red-500">Failed to load jobs.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] mx-auto">
          {jobs.map((job: JobListing) => (
            <div
              key={job.id}
              data-aos="flip-left"
              data-aos-duration="1000"
              className="overflow-hidden transition-shadow bg-white shadow-xl rounded-xl hover:shadow-2xl"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {job.title}
                  </h2>
                  <span className="px-3 py-1 text-xs font-semibold bg-[#FF6B6B] text-white rounded-full">
                    {job.status}
                  </span>
                </div>

                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    <strong>Location:</strong> {job.location}
                  </li>
                  <li>
                    <strong>Apply Before:</strong>{" "}
                    {new Date(job.applyBefore).toLocaleDateString()}
                  </li>
                </ul>

                <div className="border-t border-gray-200 pt-4 space-y-3 max-h-[200px] overflow-auto scrollbar-thin scrollbar-thumb-gray-300">
                  <DetailSection
                    title="Responsibilities"
                    items={job.jobResponsibilities}
                  />
                  <DetailSection
                    title="Educational Requirements"
                    items={job.educationalRequirements}
                  />
                  <DetailSection
                    title="Experience Requirements"
                    items={job.experienceRequirements}
                  />
                  <DetailSection
                    title="Additional Requirements"
                    items={job.additionalRequirements}
                  />
                  <DetailSection
                    title="Preferences"
                    items={job.jobPreferences}
                  />
                  <DetailSection title="Benefits" items={job.benefits} />
                </div>
              </div>

              <div className="p-4 text-center bg-gray-100 border-t border-gray-200">
                <Link
                  to="/career/apply-job"
                  className="inline-block bg-[#111E40] hover:bg-[#365197] text-white px-6 py-3 rounded text-sm font-medium transition duration-300"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable Section Renderer
const DetailSection = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <h4 className="mb-1 font-semibold text-gray-800 text-md">{title}:</h4>
      <ul className="pl-5 space-y-1 text-sm text-gray-600 list-disc">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobOpenings;
