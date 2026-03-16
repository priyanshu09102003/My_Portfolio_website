import React, { useEffect, useState } from 'react'
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
import Preloader from './components/animations/Preloader'

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // ✅ Load Chatbase script IMMEDIATELY on mount
  // while preloader is still showing — so it's ready by the time user sees the site
  useEffect(() => {
    window.chatbaseConfig = { chatbotId: "mNsGDixrCgQOBVjuF6Xpq" }

    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.id = 'mNsGDixrCgQOBVjuF6Xpq'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, []) // ✅ Empty array — runs on mount, not waiting for showContent

  const handleLoaderComplete = () => {
    setLoading(false);
    setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setShowContent(true));
      });
    }, 800);
  };

  return (
    <div className='min-h-screen bg-black'>
      {loading && <Preloader onComplete={handleLoaderComplete} />}

      <div style={{ opacity: showContent ? 1 : 0, transition: 'opacity 0.8s ease' }}>
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
    </div>
  );
};

export default App