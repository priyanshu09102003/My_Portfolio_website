import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Certificates from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import Lenis from 'lenis'

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])


  return (
    <div className='min-h-screen bg-black'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Services />
        <Certificates/>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App