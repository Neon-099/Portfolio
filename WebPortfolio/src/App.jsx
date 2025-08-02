import { BrowserRouter} from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero,
  Navbar, Tech, Works, StarsCanvas } from './components';
function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen'>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen">
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
