import React, { useEffect , useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

import { MessageCircle } from 'lucide-react'
import Lenis from 'lenis'
import Preloader from './components/animations/Preloader'

const App = () => {
  const [chatOpen, setChatOpen] = useState(false);
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

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className='fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl shadow-blue-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:cursor-pointer'
          aria-label='Talk to Assistant'
        >
          <MessageCircle className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
};

export default App
