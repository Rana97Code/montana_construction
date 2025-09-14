import { motion, useTransform, useViewportScroll } from "framer-motion";

const ExploreWeb = () => {
  const { scrollYProgress } = useViewportScroll();

  const imageVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 0 },
  };

  const translateY = useTransform(scrollYProgress, [0, 0.9], [10, -400]);
  const translateX = useTransform(scrollYProgress, [0, 0.9], [-800, 2000]);

  return (
    <section
      id="explore"
      className="relative flex justify-center items-center py-4 sm:py-6 lg:py-12"
    >
      {/* Mobile view (centered) */}
      <div className="lg:hidden flex justify-center items-center">
        <video
          src="/windmil.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-[200px] h-[260px] sm:w-[260px] sm:h-[340px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Desktop view (animated) */}
      <div className="hidden lg:block font-semibold text-center">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          style={{
            y: translateY,
            x: translateX,
            position: "absolute",
            top: "50%",
            left: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <video
            src="/windmil.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[350px] h-[450px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreWeb;
