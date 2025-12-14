import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Preloader from './components/Preloader.tsx';

const App: React.FC = () => {
  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FF3B3B] selection:text-white">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Experience />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;