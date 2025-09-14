import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const LatestBlogs: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  // ✅ Static construction-related blog data
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Innovations in Modern Construction",
      category: "Innovation",
      publicationDate: "2025-08-15",
      readMoreLink: "#",
      author: "John Miller",
      authorAvatar: "https://placehold.co/100x100/3689ce/FFFFFF?text=JM",
    },
    {
      id: 2,
      title: "How Green Building is Changing the Industry",
      category: "Sustainability",
      publicationDate: "2025-07-10",
      readMoreLink: "#",
      author: "Sophia Ahmed",
      authorAvatar: "https://placehold.co/100x100/3689ce/FFFFFF?text=SA",
    },
    {
      id: 3,
      title: "The Future of Smart Cities and Construction",
      category: "Smart Tech",
      publicationDate: "2025-06-22",
      readMoreLink: "#",
      author: "Michael Lee",
      authorAvatar: "https://placehold.co/100x100/3689ce/FFFFFF?text=ML",
    },
    {
      id: 4,
      title: "Safety Standards Every Construction Site Needs",
      category: "Safety",
      publicationDate: "2025-05-30",
      readMoreLink: "#",
      author: "Emily Davis",
      authorAvatar: "https://placehold.co/100x100/3689ce/FFFFFF?text=ED",
    },
  ];

  const shouldRenderSlider = blogPosts.length > 2;

  return (
    <section className="bg-gray-100">
      <div className="py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="mb-12 text-center">
          <h2 className="pb-6 text-4xl font-semibold text-gray-900 sm:text-5xl">
            Our Latest <span className="text-[#3689ce]">Blogs</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">
            Stay updated with the latest insights, innovations, and trends in
            the construction industry.
          </p>
        </div>

        {shouldRenderSlider ? (
          <Slider ref={sliderRef} {...settings}>
            {blogPosts.map((blog) => (
              <div key={blog.id} className="px-3">
                <div className="flex flex-col p-6 border border-gray-100 rounded-2xl shadow-md bg-white min-h-[480px] overflow-hidden h-full my-4">
                  {/* Date & Category */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                    <div className="text-sm font-medium text-gray-500">
                      <p className="text-lg font-semibold leading-none text-gray-700">
                        {new Date(blog.publicationDate).toLocaleDateString(
                          "en-US",
                          { month: "short" }
                        )}
                      </p>
                      <p className="text-base leading-none text-gray-500">
                        {new Date(blog.publicationDate).getDate()}
                      </p>
                    </div>
                    <div className="text-sm text-[#3689ce] font-bold uppercase py-1 px-3 rounded-full bg-[#3689ce] bg-opacity-10">
                      {blog.category}
                    </div>
                  </div>

                  {/* Title & Link */}
                  <div className="flex-grow mb-4">
                    <h3 className="text-2xl font-extrabold text-gray-800 leading-tight mb-2 hover:text-[#3689ce] transition">
                      {blog.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-700">
                      Read more at:{" "}
                      <a
                        href={blog.readMoreLink}
                        className="text-[#3689ce] underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit blog
                      </a>
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center pt-4 mt-auto border-t border-gray-100">
                    <img
                      src={blog.authorAvatar}
                      alt="author"
                      className="w-14 h-14 rounded-full border-2 border-[#3689ce] shadow-md object-cover"
                    />
                    <div className="ml-4">
                      <p className="text-lg font-bold text-gray-800">
                        {blog.author}
                      </p>
                      <p className="text-sm text-gray-500">Author</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((blog) => (
              <div key={blog.id} className="px-3">
                <div className="flex flex-col p-6 border border-gray-100 rounded-2xl shadow-md bg-white min-h-[480px] overflow-hidden h-full my-4">
                  {/* Date & Category */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                    <div className="text-sm font-medium text-gray-500">
                      <p className="text-lg font-semibold leading-none text-gray-700">
                        {new Date(blog.publicationDate).toLocaleDateString(
                          "en-US",
                          { month: "short" }
                        )}
                      </p>
                      <p className="text-base leading-none text-gray-500">
                        {new Date(blog.publicationDate).getDate()}
                      </p>
                    </div>
                    <div className="text-sm text-[#3689ce] font-bold uppercase py-1 px-3 rounded-full bg-[#3689ce] bg-opacity-10">
                      {blog.category}
                    </div>
                  </div>

                  {/* Title & Link */}
                  <div className="flex-grow mb-4">
                    <h3 className="text-2xl font-extrabold text-gray-800 leading-tight mb-2 hover:text-[#3689ce] transition">
                      {blog.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-700">
                      Read more at:{" "}
                      <a
                        href={blog.readMoreLink}
                        className="text-[#3689ce] underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit blog
                      </a>
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center pt-4 mt-auto border-t border-gray-100">
                    <img
                      src={blog.authorAvatar}
                      alt="author"
                      className="w-14 h-14 rounded-full border-2 border-[#3689ce] shadow-md object-cover"
                    />
                    <div className="ml-4">
                      <p className="text-lg font-bold text-gray-800">
                        {blog.author}
                      </p>
                      <p className="text-sm text-gray-500">Author</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-12 h-12 p-3 transition-all duration-300 bg-white rounded-full shadow-md hover:shadow-xl"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 p-3 transition-all duration-300 bg-white rounded-full shadow-md hover:shadow-xl"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
