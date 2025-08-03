import { BrowserRouter} from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero,
  Navbar, Tech, Works, StarsCanvas } from './components';
import { useTheme } from './contexts/ThemeContext';
function App() {

  const [state] = useTheme();
  const isDark = state.theme === 'dark';

  return (
    <BrowserRouter>
      <div className={`relative z-0 min-h-screen ${isDark ? `bg-primary` : `bg-white`} `}>
        <div className={`${isDark ? `bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen ` : `bg-white`}`}>
          <Navbar />
          <Hero />
        </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            {/*DISPLAY STARS HERE*/}
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
