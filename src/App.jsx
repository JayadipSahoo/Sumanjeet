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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0a2a35] flex items-center justify-center z-50">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">
            <span className="text-[#f47521]">SUMANJEET</span> <span className="text-white">BEHERA</span>
          </h1>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-[#f47521] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-[#20b286] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
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
