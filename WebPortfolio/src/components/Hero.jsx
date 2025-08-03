import {motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  const [state] = useTheme();
  
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/*FOR THE VIOLET LINES*/}
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 ${state.theme === 'light' ? 'text-black' : 'text-white'}`}>Hi, I'm <span className='text-[#915eff]'>Emman</span></h1>
          <p className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 ${state.theme === 'light' ? 'text-gray-700' : 'text-[#dfd9ff]'}`}>
            A full stack developer, developing interfaces and web applications. 
              < br className='sm:block hidden'/>
          </p>
        </div>
      </div>
        
        <ComputersCanvas />

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              {/*MEANS: we are using framer motion*/}
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
                >
              </motion.div>
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero