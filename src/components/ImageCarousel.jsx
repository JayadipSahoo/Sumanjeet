import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import all images
import Image1 from '../assets/carousel/Image1.jpg';
import Image2 from '../assets/carousel/Image2.jpg';
import Image3 from '../assets/carousel/Image3.jpg';
import Image4 from '../assets/carousel/Image4.jpg';
import Image5 from '../assets/carousel/Image5.jpg';
import Image6 from '../assets/carousel/Image6.jpg';
import Image7 from '../assets/carousel/Image7.jpg';
import Image8 from '../assets/carousel/Image8.jpg';
import Image9 from '../assets/carousel/Image9.jpg';

const ImageCarousel = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];
  const [scrollPosition, setScrollPosition] = useState(0);

  // Create duplicated images for infinite scroll effect
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrollPosition((prevPosition) => {
        // When we've scrolled through the original set, reset to beginning
        if (prevPosition >= 100) {
          return 0;
        }
        return prevPosition + 0.2; // Adjust speed by changing this value (lower = slower)
      });
    }, 20); // Lower interval for smoother animation

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="py-10 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <span className="h-1 w-6 bg-[#f47521] mr-2"></span>
            <span className="h-1 w-6 bg-gray-300 mr-2"></span>
            <span className="h-1 w-6 bg-[#20b286] mr-2"></span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0a2a35] mb-3 sm:mb-4 text-center"
          >
            Gallery
          </motion.h2>
          <div className="w-16 sm:w-20 h-1 bg-[#f47521] rounded-full"></div>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        {/* Left gradient fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-gray-50 to-transparent"></div>
        
        <motion.div 
          className="flex gap-4 py-6 px-4"
          style={{
            x: `-${scrollPosition}%`,
            transition: 'transform linear',
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 sm:w-60 md:w-72 h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden shadow-md relative group"
            >
              <img 
                src={image} 
                alt={`Gallery image ${index % images.length + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </motion.div>
        
        {/* Right gradient fade effect */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-gray-50 to-transparent"></div>
      </div>
    </div>
  );
};

export default ImageCarousel; 