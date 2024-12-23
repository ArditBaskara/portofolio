import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='className="px-0 2xl:px-60 py-0 2xl:py-0 max-w-full mx-auto relative z-0'
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
