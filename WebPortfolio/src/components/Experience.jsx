import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion } from 'framer-motion';

//it allow this to create an animated timeline (EXPERIENCE)
import 'react-vertical-timeline-component/style.min.css'

import {styles } from '../styles';
import {experiences } from '../constants'
import { SectionWrapper } from '../hoc/SectionWrapper';
import { textVariant } from '../utils/motion'; 

import { useTheme } from '../contexts/ThemeContext';



const ExperienceCard = ( {experiences, theme} ) => (
  

  <VerticalTimelineElement 
    contentStyle={{background: "#1d1836", color: "#fff"}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experiences.date}
    iconStyle={ {background: experiences.bg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experiences.icon} alt={experiences.title} 
          className='w-[60%] h-[60%] object-contain' />
      </div>
    }>
      {/**/}
      <div>
        <h3 className={theme === 'light' ? 'text-gray-200 text-[24px] font-bold' : 'text-white text-[24px] font-bold'}>{experiences.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={ {margin:0}}> {experiences.company_name}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2 '>
        {experiences.points.map((points, index) => (
          <li key={`experiences-points-${index}`}
              className={theme === 'light' ? 'text-gray-300 text-[14px] pl-1 tracking-wider' : 'text-white-100 text-[14px] pl-1 tracking-wider'}>
                {points}
          </li>
        ))}
      </ul>
  </VerticalTimelineElement>
)


const Experience = () => {
  
  const [state] = useTheme();

  return (
    <>
      <motion.div 
        variants={textVariant()}> {/*variants: make P tags animate*/}
        <p className={`${styles.sectionSubText} ${state.theme === 'light' ? `text-gray-800` : `text-[#dfd9ff]`}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} ${state.theme === 'light' ? 'text-black-200' : 'text-white'}`}>Work Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
          lineColor={state.theme === 'light' ? '#e5e7eb' : '#fff'}
        >
          <style>
            {`
              .vertical-timeline-element-icon {
                border: ${state.theme === 'light' ? '4px solid #374151' : ''} !important;
              }
            `}
          </style>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experiences={exp} theme={state.theme} />
          ))}  
        </VerticalTimeline>
      </div>
    </>
  )
}

//WRAP EXP into SectionWrapper to use HOC
export default SectionWrapper(Experience, "work")