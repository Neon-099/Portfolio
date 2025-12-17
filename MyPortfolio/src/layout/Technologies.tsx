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
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section 
      id="technologies"
      className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 
                 rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[70px] lg:rounded-t-[80px]"
    >
      <div className="mx-auto max-w-7xl w-full">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="p-3 sm:p-6 md:p-8 lg:p-12"
        >
          <div className="grid grid-cols-4 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10 
                          gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
                }}
                className="flex flex-col items-center justify-center w-full"
              >
                <div className="w-full aspect-square rounded-md sm:rounded-lg md:rounded-xl 
                                 flex items-center justify-center 
                                 p-1.5 sm:p-2 md:p-3 lg:p-4 
                                 bg-white shadow-sm sm:shadow-md hover:shadow-lg 
                                 transition-all duration-300 cursor-pointer group 
                                 overflow-hidden border border-gray-100">
                  <img 
                    src={tech.image.replace('./public', '')} 
                    alt={`Technology ${index + 1}`}
                    className="w-full h-full object-contain 
                               max-w-[40px] xs:max-w-[50px] sm:max-w-[60px] 
                               md:max-w-[70px] lg:max-w-[80px] xl:max-w-none
                               h-auto"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
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