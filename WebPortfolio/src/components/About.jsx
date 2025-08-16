import {motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

import {styles} from '../styles';
import { SectionWrapper } from '../hoc';

const About = () => {
  const [state] = useTheme();
  
  return (
    <section className='relative w-full mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/*FOR THE VIOLET LINES*/}
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-20 violet-gradient' />
        </div>

        <div>
          <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 ${state.theme === 'light' ? 'text-black' : 'text-white'}`}>Hi, I'm <span className='text-[#915eff]'>Emman</span></h1>
          <p className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 ${state.theme === 'light' ? 'text-gray-700' : 'text-[#dfd9ff]'}`}>
            Crafting a compelling web application requires a frontend design that is both scalable 
            to accommodate growing content and secure to protect user interactions and data displayed. 
              < br className='sm:block hidden'/>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(About, 'about');