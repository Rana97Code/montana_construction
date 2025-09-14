import { useState } from "react";
import { constructionData } from "../data";



const Industries = () => {
  const [activeTab, setActiveTab] = useState<string>(constructionData[0].id);
  const handleTabChange = (id: string) => setActiveTab(id);

  const activeIndustry = constructionData.find(
    (industry) => industry.id === activeTab
  );

  return (
<section className="w-full bg-gradient-to-r from-[#F1F8FE] via-[#D7E8FC] to-[#F1F8FE] py-20 px-4 lg:px-24">
  {/* Heading */}
  <div
    className="max-w-3xl mx-auto text-center mb-14"
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1200"
  >
    <h2 className="mb-4 text-4xl font-semibold text-gray-900 md:text-5xl">
      Construction Sectors We Serve
    </h2>
    <p className="text-lg leading-relaxed text-gray-700">
      Mohanta Construction delivers world-class solutions across diverse
      sectors, from modern housing to commercial towers and infrastructure
      development in Saudi Arabia and Dubai.
    </p>
  </div>

  {/* Tabs */}
  <div
    className="flex flex-wrap justify-center gap-4 mb-12"
    data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="800"
  >
    {constructionData.map((sector) => (
      <button
        key={sector.id}
        onClick={() => handleTabChange(sector.id)}
        className={`px-6 py-2 rounded-full text-base font-medium border transition-all duration-300 ${
          activeTab === sector.id
            ? "bg-[#3689ce] text-white border-[#3689ce] shadow-lg"
            : "bg-white text-gray-700 border-gray-300 hover:bg-[#3689ce]/10 hover:text-[#3689ce]"
        }`}
      >
        {sector.title}
      </button>
    ))}
  </div>

  {/* Active Content */}
  {activeIndustry && (
    <div className="max-w-6xl p-6 mx-auto mt-10 transition-all duration-500 bg-white shadow-xl rounded-2xl md:p-10">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <img
            src={activeIndustry.video}          
            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          <h3 className="mb-4 text-3xl font-semibold text-gray-900">
            {activeIndustry.title}
          </h3>
          <p className="text-lg leading-relaxed text-gray-800">
            {activeIndustry.content}
          </p>
        </div>
      </div>
    </div>
  )}
</section>


  );
};

export default Industries;
