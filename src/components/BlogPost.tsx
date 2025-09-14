import { blogPosts } from "../data";

const BlogPost = () => {
  return (
    <section className="px-6 mx-auto py-28 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <header className="mb-16 text-center">
        <h1
          className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="600"
        >
          Explore Our Latest Insights & Innovations
        </h1>
      </header>

      <div className="grid gap-12 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {blogPosts?.map((post, index) => (
          <article
            key={index}
            className="flex flex-col overflow-hidden transition-all duration-500 transform bg-white shadow-xl rounded-xl hover:shadow-2xl hover:scale-105"
            data-aos="zoom-in-up"
          >
            <div className="relative w-full">
              <img
                src={post.image}
                className="object-cover w-full transition-transform duration-500 transform h-72 hover:scale-105"
                alt={post.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
            </div>
            <div className="flex-grow p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-600 uppercase">
                  <a
                    href="/"
                    className="text-blue-600 transition-all duration-300 hover:text-blue-800"
                    aria-label="Category"
                    title={post.category}
                  >
                    {post.category}
                  </a>
                </p>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>

              <a
                href={post.link}
                className="block mb-3 text-3xl font-semibold text-gray-900 transition-all duration-300 hover:text-blue-600"
                aria-label="Post Title"
                title={post.title}
              >
                {post.title}
              </a>

              <p className="mb-4 text-lg text-gray-700 line-clamp-3">
                {post.description}
              </p>

              <a
                href={post.link}
                target="_blank"
                className="inline-flex items-center mt-4 font-semibold text-blue-500 transition-all duration-500 hover:text-blue-700"
                aria-label="Read More"
              >
                Read More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5-5 5M6 12h12"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPost;
