import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import projects from "../constant/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
};

const MyProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
    className="py-20 px-4 bg-gray-100 rounded-b-[80px] mx-auto"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: false, amount: 0.4 }}
        >
          {/* Header */}
          <motion.h2
            variants={cardVariants}
            className="text-1xl sm:text-xl font-bold text-gray-800 text-center mb-16"
          >
            From concept to creation, turning ideas into powerful web apps we can be proud of.
          </motion.h2>

            {/* Centered divider with 'Projects' label */}
            <motion.div
            variants={cardVariants}
            className="flex items-center justify-center mb-12"
            >
            <div className="flex items-center w-full">
              <div className="flex-1 h-[2px] bg-gray-500/70" />
              <span className="mx-4 px-4 py-1 text-xs font-semibold text-gray-800 bg-white rounded-full shadow-sm border border-gray-200">
                Projects
              </span>
              <div className="flex-1 h-[2px] bg-gray-500/70" />
            </div>
          </motion.div>


          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
                }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="%239ca3af"%3EProject Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Project Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                      {project.title}
                    </h3>

                    {/* Technology Icons */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-md bg-gray-50 p-1.5 flex items-center justify-center shadow-sm"
                        >
                          <img
                            src={tech}
                            alt="tech"
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                        aria-label="GitHub repository"
                      >
                        <Github className="w-5 h-5 text-gray-800" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;