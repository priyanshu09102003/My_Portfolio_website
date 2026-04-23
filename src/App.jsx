import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
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

  useEffect(() => {
    window.chatbaseConfig = { chatbotId: "mNsGDixrCgQOBVjuF6Xpq" }

    const preconnect = document.createElement('link')
    preconnect.rel = 'preconnect'
    preconnect.href = 'https://www.chatbase.co'
    document.head.appendChild(preconnect)

    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.id = 'mNsGDixrCgQOBVjuF6Xpq'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
      if (document.head.contains(preconnect)) document.head.removeChild(preconnect)
    }
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
        <Contact />
      </main>
      <Footer />
      <div id="chatbase-widget" />
    </div>
  )
}

export default App