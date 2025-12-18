import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './layout/Hero.tsx'
import Header from './components/NavBar.tsx'
import Technologies from './layout/Technologies.tsx'
import MyProjects from './layout/MyProjects.tsx'
import ContactCTA from './layout/ContactCTA.tsx'

createRoot(document.getElementById('root')!).render(
  <main className='pt-20'>
    <div> 
      <Header />
      <Hero />
      <Technologies />
      <MyProjects />
      <ContactCTA />
    </div>
  </main>,  
)
