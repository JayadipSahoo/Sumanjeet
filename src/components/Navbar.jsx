import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-[#0a2a35]/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-bold">
              <span className="text-[#f47521]">Knowledge</span>
              <span className="text-white"> Is</span>
              <span className="text-[#20b286]"> Power</span>
            </h1>
            <div className="flex items-center space-x-1">
              <span className="h-0.5 w-7 bg-[#f47521]"></span>
              <span className="h-0.5 w-7 bg-white shadow-sm"></span>
              <span className="h-0.5 w-7 bg-[#20b286]"></span>
              
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-medium text-gray-300 hover:text-[#f47521] transition-colors duration-300 cursor-pointer"
              activeClass="text-[#f47521]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-[#f47521] hover:bg-[#e06010] text-white font-medium px-4 lg:px-5 py-1.5 lg:py-2 rounded-md transition-colors duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none p-1"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0a2a35]/95 backdrop-blur-sm shadow-lg border-t border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col py-3 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-medium text-gray-300 hover:text-[#f47521] transition-colors duration-300 py-2 cursor-pointer"
                  activeClass="text-[#f47521]"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#f47521] hover:bg-[#e06010] text-white font-medium px-5 py-2 rounded-md transition-colors duration-300 text-center cursor-pointer mt-2"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;