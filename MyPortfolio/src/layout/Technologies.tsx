import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { technologies } from "../constant/technologies";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
};

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 rounded-t-[80px] ">
      <div className=" mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="p-5 sm:p-12"
        >

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 sm:gap-10">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
                }}
                className="flex flex-col items-center justify-center"
              >
                <div
                  className={`w-full aspect-square rounded-lg flex items-center justify-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group`}
                >
                <img src={tech.image} alt={tech.image} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;