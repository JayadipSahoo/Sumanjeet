import { Award, BookOpen, Calendar, MapPin, FileText, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/Profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-10 sm:mb-12">
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
            About Me
          </motion.h2>
          <div className="w-16 sm:w-20 h-1 bg-[#f47521] rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center order-2 md:order-1"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 border-2 border-[#f47521]/20 rounded-xl -z-10 transform rotate-3"></div>
              <img 
                src={profileImage} 
                alt="Sumanjeet Behera" 
                className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0a2a35] mb-3 sm:mb-4">
              <span className="text-[#f47521]">SUMANJEET BEHERA</span>
            </h3>
            <p className="text-gray-600 mb-5 sm:mb-6 text-sm sm:text-base">
              A law student, focusing on Legal aspects as well as the Facta Probanda, which will 
              ultimately lead to Nation Building. Passionate about constitutional issues and committed 
              to making a difference in the Indian legal system.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
              <div className="flex items-start">
                <Award className="text-[#f47521] mr-2 sm:mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-medium text-[#0a2a35] text-sm sm:text-base">Education</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">BALLB (Hons.) cont.</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Madhusudan Law University</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="text-[#f47521] mr-2 sm:mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-medium text-[#0a2a35] text-sm sm:text-base">Experience</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Completed internship at District Legal Services Authority (at various Courts and Departments), Cuttack</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Completed internship under Additional Government Advocate, Orissa High Court, Cuttack</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Completed internship under Senior Criminal Advocate, Orissa High Court, Cuttack</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BookOpen className="text-[#f47521] mr-2 sm:mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-medium text-[#0a2a35] text-sm sm:text-base">Interests</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Writing, Mooting, Reading, Analysing</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Languages className="text-[#f47521] mr-2 sm:mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-medium text-[#0a2a35] text-sm sm:text-base">Languages</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">English, Hindi, Odia</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
              <span className="bg-[#f47521]/10 text-[#f47521] text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">Constitutional Law</span>
              <span className="bg-[#f47521]/10 text-[#f47521] text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">Criminal Law</span>
              <span className="bg-[#f47521]/10 text-[#f47521] text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">Family Law</span>
              <span className="bg-[#f47521]/10 text-[#f47521] text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">Mooting</span>
              <span className="bg-[#f47521]/10 text-[#f47521] text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">Legal Research</span>
            </div>
            
            <div className="flex items-start">
              <FileText className="text-[#f47521] mr-2 sm:mr-3 mt-1 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-medium text-[#0a2a35] text-sm sm:text-base">Publications</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Indian Criminal laws: Still in dearth</p>
                <p className="text-gray-600 text-xs sm:text-sm">Crime vs Criminal</p>
                <p className="text-gray-600 text-xs sm:text-sm">Martial law vs National Emergency</p>
                <p className="text-gray-600 text-xs sm:text-sm">Split Verdict: "Judgement behind Justice"</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 