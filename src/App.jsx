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