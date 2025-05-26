import { useState, useEffect } from 'react';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

// Page Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <BottomNav />
      <Footer />
    </div>
  );
}

export default App;
