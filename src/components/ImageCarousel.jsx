import { useEffect, useState, useRef, memo } from 'react';
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

// Memoized carousel item to prevent unnecessary re-renders
const CarouselItem = memo(({ image, index, imagesLength }) => (
  <div
    className="flex-shrink-0 w-56 sm:w-72 md:w-80 h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden shadow-md relative group"
    style={{ willChange: 'transform' }} // Optimize for animations
  >
    <img 
      src={image} 
      alt={`Gallery image ${index % imagesLength + 1}`} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy" // Lazy load images for better performance
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
));

const ImageCarousel = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];
  const [scrollPosition, setScrollPosition] = useState(0);
  const animationRef = useRef(null);
  
  // Use a limited number of duplicated images to reduce DOM size
  const duplicatedImages = [...images, ...images.slice(0, 3)];

  useEffect(() => {
    let lastTimestamp = 0;
    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      // Only update position every 16ms (approx 60fps) to optimize performance
      if (elapsed > 16) {
        lastTimestamp = timestamp;
        setScrollPosition(prevPosition => {
          if (prevPosition >= 100) {
            return 0;
          }
          return prevPosition + 0.12; // Slightly faster scroll speed
        });
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
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
      
      <div className="relative overflow-hidden py-4" style={{ willChange: 'contents' }}>
        {/* Left gradient fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-gray-50 to-transparent"></div>
        
        <motion.div 
          className="flex gap-6 py-6 px-4"
          style={{
            x: `-${scrollPosition}%`,
            transition: 'none', // Remove transition for better performance
            willChange: 'transform', // Hint to browser to optimize
          }}
        >
          {duplicatedImages.map((image, index) => (
            <CarouselItem 
              key={index}
              image={image}
              index={index}
              imagesLength={images.length}
            />
          ))}
        </motion.div>
        
        {/* Right gradient fade effect */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-gray-50 to-transparent"></div>
      </div>
    </div>
  );
};

export default ImageCarousel; 