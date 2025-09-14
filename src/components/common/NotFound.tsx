import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-7xl font-extrabold text-red-400 font-sans"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          404
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-red-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <motion.p
          className="mt-2 text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          It seems you've reached a page that doesn't exist. Please go back or
          explore other sections of our website.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="/"
            className="inline-block mt-8 bg-[#458FCD] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#55a3e4] focus:outline-none focus:ring-2 focus:ring-blue-300 transform transition duration-300 ease-in-out hover:scale-105"
          >
            Go to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
