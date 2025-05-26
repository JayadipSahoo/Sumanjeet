import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#0a2a35] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#f47521]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#20b286]/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 pt-16">
        <div className="flex flex-col items-start max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center mb-4">
              <span className="h-1 w-6 bg-[#f47521] mr-2"></span>
              <span className="h-1 w-6 bg-white mr-2"></span>
              <span className="h-1 w-6 bg-[#20b286] mr-2"></span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              <span className="text-[#f47521]">Knowledge</span> Is <span className="text-[#20b286]">Power</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              <span className="text-[#f47521]">SUMANJEET</span> BEHERA
            </h2>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-6">
              Law Student || Madhusudan Law College
            </h3>
            
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-8">
              A law student, focusing on Legal aspects as well as the Facta Probanda, which will 
              ultimately lead to Nation Building.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-[#f47521] text-white rounded-md hover:bg-[#e06416] transition-colors duration-300"
              >
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a 
                href="#about" 
                className="inline-flex items-center px-6 py-3 bg-transparent border border-white/20 text-white rounded-md hover:bg-white/10 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col items-center space-y-4">
          <a href="#home" className="w-3 h-3 rounded-full bg-[#f47521]"></a>
          <a href="#about" className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></a>
          <a href="#skills" className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></a>
          <a href="#achievements" className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></a>
          <a href="#experience" className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></a>
          <a href="#contact" className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 