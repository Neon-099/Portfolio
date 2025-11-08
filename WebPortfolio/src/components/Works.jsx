import {Tilt} from 'react-tilt';
import {motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { useTheme } from '../contexts/ThemeContext';
const ProjectCard = ( {index, name, description, tags, image, source_code_link, theme} ) => {
  
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-3 sm:p-5 rounded-xl sm:rounded-2xl w-[calc(50%-14px)] sm:w-[350px]">
        <div className='relative w-full h-[120px] sm:h-[230px]'>
          <img src={image} alt={name}
            className='w-full h-full object-cover rounded-xl sm:rounded-2xl' />

          <div className='absolute inset-0 flex justify-end m-2 sm:m-3 card-img_hover'>
            <div className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer"
             onClick={() => window.open(source_code_link, "_blank" )}>
              <img className='w-1/2 h-1/2 object-contain' 
                src={github} alt="github" 
                />
             </div>
          </div>
        </div>

        <div className="mt-3 sm:mt-5">
          <h3 className={`text-white font-bold text-[16px] sm:text-[24px] pb-2 sm:pb-3 ${theme === 'light' ? 'text-gray-300' : 'text-white'}`}>{name}</h3>
          <p className={`mt-1 sm:mt-2 text-[11px] sm:text-[14px] ${theme === 'light' ? 'text-gray-200' : 'text-secondary'}`}>{description}</p>
        </div>

        <div className='mt-2 sm:mt-4 flex flex-wrap gap-1 sm:gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[10px] sm:text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  const [state] = useTheme();
  
  return (
    <>
      <motion.div 
        variants={textVariant()}> {/*variants: make P tags animate*/}
        <p className={`${styles.sectionSubText} ${state.theme === 'light' ? `text-gray-800` : `text-[#dfd9ff]`}`}>My works</p>
        <h2 className={`${styles.sectionHeadText} ${state.theme === 'light' ? 'text-black-100' : 'text-white'}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
      </div>

      <div className="mt-10 flex flex-wrap gap-3 sm:gap-7">
        {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} theme={state.theme}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work");