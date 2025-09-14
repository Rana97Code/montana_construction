import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa"; 

const MeetExperts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const openModal = () => setIsModalOpen(true);


  // Force autoplay when modal opens
  useEffect(() => {
    if (isModalOpen && videoRef.current) {
      videoRef.current.muted = true; 
      videoRef.current.play().catch((err) => {
        console.log("Autoplay failed:", err);
      });
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Section Background */}
      <div className="relative w-full bg-gradient-to-r from-blue-600 to-blue-900">
        <div className="relative z-10 px-6 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-48">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h2
                className="mb-6 text-4xl font-semibold text-white sm:text-5xl"
                data-aos="fade-right"
                data-aos-duration="600"
              >
                Meet Our{" "}
                <span className="text-transparent bg-gradient-to-r from-green-200 via-blue-400 to-cyan-200 bg-clip-text">
                  Energy Experts
                </span>
              </h2>

              <p
                className="mb-6 text-lg text-gray-200 md:text-xl"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                Our engineering team is leading the way in Saudi Arabia’s{" "}
                <strong>NEOM Hydro Energy Project</strong>. Combining
                state-of-the-art hydro technology with sustainable design, we’re
                building a future powered by clean and renewable energy for the
                Kingdom and beyond.
              </p>

              <div
                className="flex justify-center lg:justify-start"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Link
                  to={"/contact"}
                  className="px-8 py-3 bg-[#253b72] text-white rounded-full shadow-lg hover:bg-[#1f3263] transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Image + Play Overlay */}
            <div className="relative">
              <img
                className="object-cover w-full shadow-lg h-72 rounded-xl sm:h-96"
                src="/public/construction/windmil1.jpg"
                alt="NEOM Hydro Project Experts"
              />
              <div
                onClick={openModal}
                className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-300 bg-gray-900 bg-opacity-50 cursor-pointer rounded-xl group hover:bg-opacity-25"
              >
                <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 transform bg-white rounded-full shadow-2xl group-hover:scale-110 animate-pulse">
                  <FaPlay className="w-8 text-gray-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <div className="relative w-full bg-gradient-to-r from-blue-500 to-blue-900">
      <div className="relative z-10 px-6 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-48">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h2
              className="mb-6 text-4xl font-semibold text-white sm:text-5xl"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              NEOM Hydro Energy{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-200 via-indigo-500 to-[#a09191] bg-clip-text">
                Project
              </span>
            </h2>

            <p
              className="mb-6 text-lg text-gray-200 md:text-xl"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              A groundbreaking initiative in renewable energy, driving sustainable 
              growth and innovation for the future of construction and energy solutions.
            </p>
          </div>

          <div className="relative">
            <video
              src="/public/windmil.mp4"   
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full shadow-lg h-72 rounded-xl sm:h-96"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MeetExperts;
