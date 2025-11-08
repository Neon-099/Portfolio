import {BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-[500px]'>
      {technologies.map((tech) => (
        <div className='w-20 h-20 sm:w-28 sm:h-28' key={tech.name} >
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

// Custom wrapper without top padding to remove space between About and Tech
const TechWrapper = (Component) => {
  return function HOC() {
    return (
      <section className="sm:px-16 px-6 sm:pb-16 pb-10 max-w-7xl mx-auto relative z-0">
        <Component />
      </section>
    )
  }
}

export default TechWrapper(Tech)