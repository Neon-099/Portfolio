import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './layout/Hero.tsx'
import Header from './components/NavBar.tsx'
import Technologies from './layout/Technologies.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div> 
      <Header />
      <Hero />
      <Technologies />
    </div>
  </StrictMode>,
)
