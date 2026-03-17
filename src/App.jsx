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
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem('loaderShown') ? false : true
  });
  const [showContent, setShowContent] = useState(() => {
    return sessionStorage.getItem('loaderShown') ? true : false
  });

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

  useEffect(() => {
    if (!showContent) return

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
  }, [showContent])

  const handleLoaderComplete = () => {
    sessionStorage.setItem('loaderShown', 'true')
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