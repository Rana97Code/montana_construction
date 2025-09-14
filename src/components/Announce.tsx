import { motion, useTransform, useViewportScroll } from "framer-motion";
import {
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Announce = () => {
  const { scrollYProgress } = useViewportScroll();

  const translateY = useTransform(scrollYProgress, [0, 0.9], [0, 20]);
  const translateX = useTransform(scrollYProgress, [0, 0.9], [-300, 100]);

  const translateY2 = useTransform(scrollYProgress, [0, 0.9], [0, 25]);
  const translateX2 = useTransform(scrollYProgress, [0, 0.9], [-250, 150]);

  const translateY3 = useTransform(scrollYProgress, [0, 0.9], [0, 30]);
  const translateX3 = useTransform(scrollYProgress, [0, 0.9], [250, -300]);

  const translateY4 = useTransform(scrollYProgress, [0, 0.9], [0, 15]);
  const translateX4 = useTransform(scrollYProgress, [0, 0.9], [300, -400]);

  return (
    <section className="relative py-0 md:py-6">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="relative">
            <div className="py-36">
              <img
                src="https://static.wixstatic.com/media/4df237_7640bc98b015499a9f4cb23b743c7199~mv2.png/v1/fill/w_247,h_249,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/4df237_7640bc98b015499a9f4cb23b743c7199~mv2.png"
                alt="mobile"
                className="mx-auto w-full"
              />
            </div>
            <motion.div
              style={{
                y: translateY,
                x: translateX,
              }}
              className="absolute top-[20%] left-[10%]"
            >
              <FaTwitter className="text-blue-500 w-12 h-12" />
            </motion.div>
            <motion.div
              style={{
                y: translateY2,
                x: translateX2,
              }}
              className="absolute bottom-[25%] left-[15%]"
            >
              <FaFacebookF className="text-blue-700 w-12 h-12" />
            </motion.div>
            <motion.div
              style={{
                y: translateY3,
                x: translateX3,
              }}
              className="absolute top-[20%] right-[10%]"
            >
              <FaInstagram className="text-pink-500 w-12 h-12" />
            </motion.div>
            <motion.div
              style={{
                y: translateY4,
                x: translateX4,
              }}
              className="absolute bottom-[25%] right-[15%]"
            >
              <FaWhatsapp className="text-green-500 w-12 h-12" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announce;
