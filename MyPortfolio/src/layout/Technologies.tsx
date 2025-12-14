import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TechItem {
  name: string;
  color: string;
  bgColor: string;
}

const technologies: TechItem[] = [
  // Row 1
  { name: "Java", color: "text-orange-600", bgColor: "bg-orange-50" },
  { name: "HTML5", color: "text-orange-500", bgColor: "bg-orange-50" },
  { name: "CSS3", color: "text-blue-600", bgColor: "bg-blue-50" },
  { name: "JavaScript", color: "text-yellow-500", bgColor: "bg-yellow-50" },
  { name: "React", color: "text-cyan-500", bgColor: "bg-cyan-50" },
  { name: "Axios", color: "text-purple-600", bgColor: "bg-purple-50" },
  { name: "TypeScript", color: "text-blue-600", bgColor: "bg-blue-50" },
  { name: "Vite", color: "text-purple-600", bgColor: "bg-purple-50" },
  { name: "Next.js", color: "text-gray-900", bgColor: "bg-gray-100" },
  { name: "GraphQL", color: "text-pink-600", bgColor: "bg-pink-50" },
  // Row 2
  { name: "Go", color: "text-cyan-600", bgColor: "bg-cyan-50" },
  { name: "Node.js", color: "text-green-600", bgColor: "bg-green-50" },
  { name: "Express.js", color: "text-gray-700", bgColor: "bg-gray-100" },
  { name: "Postman", color: "text-orange-500", bgColor: "bg-orange-50" },
  { name: "MySQL", color: "text-blue-600", bgColor: "bg-blue-50" },
  { name: "Firebase", color: "text-orange-500", bgColor: "bg-orange-50" },
  { name: "MongoDB", color: "text-green-600", bgColor: "bg-green-50" },
  { name: "Redux", color: "text-purple-600", bgColor: "bg-purple-50" },
  { name: "Vercel", color: "text-gray-900", bgColor: "bg-gray-100" },
  { name: "Jira", color: "text-blue-600", bgColor: "bg-blue-50" },
  // Row 3
  { name: "Prisma", color: "text-gray-900", bgColor: "bg-gray-100" },
  { name: "PostgreSQL", color: "text-blue-700", bgColor: "bg-blue-50" },
];

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
    <section className="py-20 px-4 bg-gray-50">
      <div className=" mx-auto max-w-12xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="p-8 sm:p-12"
        >

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
                }}
                className="flex flex-col items-center justify-center"
              >
                <div
                  className={`w-full aspect-square ${tech.bgColor} rounded-lg flex items-center justify-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group`}
                >
                  <span
                    className={`${tech.color} font-bold text-xs sm:text-sm md:text-base text-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    {tech.name}
                  </span>
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