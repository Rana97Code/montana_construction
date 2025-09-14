import { useState } from "react";

interface ItemProps {
  title: string;
  children: React.ReactNode;
}

const Item = ({ title, children }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        type="button"
        aria-label={isOpen ? "Collapse item" : "Expand item"}
        title={title}
        className="flex items-center justify-between w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <svg
          viewBox="0 0 24 24"
          className={`w-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="pb-5 pr-1 text-gray-600"
          data-aos="fade-in"
          data-aos-duration="400"
        >
          {children}
        </div>
      )}
    </div>
  );
};

// ✅ Static FAQ data about NEOM Project
const faqData = [
  {
    question: "What is the NEOM project?",
    answer:
      "NEOM is the world’s largest sustainable smart city development in Saudi Arabia. It aims to revolutionize urban living with renewable energy, futuristic infrastructure, and cutting-edge technology.",
  },
  {
    question: "What makes NEOM unique?",
    answer:
      "NEOM combines renewable energy, hydro power, and green hydrogen technology to create a city fully powered by clean energy. It is designed to have zero cars, zero emissions, and cutting-edge AI-driven infrastructure.",
  },
  {
    question: "Where is NEOM located?",
    answer:
      "The NEOM project is located in northwestern Saudi Arabia, along the Red Sea, covering over 26,500 square kilometers of desert, mountains, and coastline.",
  },
  {
    question: "How does NEOM use hydro energy?",
    answer:
      "NEOM is integrating hydro energy as part of its renewable power mix. Combined with solar and wind, hydro energy will ensure a stable, sustainable power supply for industries and residents.",
  },
  {
    question: "When will NEOM be completed?",
    answer:
      "The NEOM project is being developed in phases. The first major phase, including The Line, Oxagon, and Trojena, is expected to be operational by 2030.",
  },
];

const FAQ = () => {
  return (
    <section className="w-full px-4 py-20 bg-gray-50 lg:px-0">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2
            className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Frequently Asked{" "}
            <span className="text-[#3689ce]">Questions</span>
          </h2>
          <p
            className="mt-4 text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Learn more about the world’s largest NEOM hydro energy project and
            how it is transforming the future of construction, sustainability,
            and smart living.
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <Item key={index} title={faq.question}>
              {faq.answer}
            </Item>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
