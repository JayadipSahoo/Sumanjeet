import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a2a35] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-serif font-bold">
                <span className="text-[#f47521]">SUMANJEET</span>
                <span className="text-white"> BEHERA</span>
              </h3>
              <div className="flex items-center space-x-1 mt-1">
                <span className="h-0.5 w-4 bg-[#f47521]"></span>
                <span className="h-0.5 w-4 bg-white/70"></span>
                <span className="h-0.5 w-4 bg-[#20b286]"></span>
                <span className="text-xs font-sans text-gray-300 ml-1.5">Legal Advocate</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              A law student, focusing on Legal aspects as well as the Facta Probanda, 
              which will ultimately lead to Nation Building.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-[#f47521] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f47521] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f47521] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f47521] transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Education & Experience */}
          <div>
            <h3 className="text-lg font-medium mb-4">Education & Experience</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="text-[#f47521] mr-2">•</span>
                <span>BALLB (Hons.) cont., Madhusudan Law University</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f47521] mr-2">•</span>
                <span>Internship at District Legal Services Authority, Cuttack</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f47521] mr-2">•</span>
                <span>Internship under Additional Government Advocate at Orissa High Court</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f47521] mr-2">•</span>
                <span>Internship under Senior Criminal Advocate at Orissa High Court</span>
              </li>
            </ul>
          </div>
          
          {/* Achievements & Publications */}
          <div>
            <h3 className="text-lg font-medium mb-4">Achievements & Publications</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <Award size={16} className="mr-2 mt-0.5 text-[#f47521] flex-shrink-0" />
                <span>Winner at Surana and Surana National Criminal law Moot Court Competition</span>
              </li>
              <li className="flex items-start">
                <Award size={16} className="mr-2 mt-0.5 text-[#f47521] flex-shrink-0" />
                <span>Winner at Surana and Surana National Family law Moot Court Competition</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f47521] mr-2">•</span>
                <span>Presented Papers on Constitutional Issues at BGU, Bhubaneswar and XIM University, Bhubaneswar</span>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-[#f47521] flex-shrink-0" />
                <span>Bhubaneswar, Odisha, India</span>
              </div>
              <div className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5 text-[#f47521] flex-shrink-0" />
                <span>+91 9692407235</span>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5 text-[#f47521] flex-shrink-0" />
                <span>sumanjeetbehera@gmail.com</span>
              </div>
              <div className="mt-4">
                <h4 className="font-medium text-white text-sm mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">English</span>
                  <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">Hindi</span>
                  <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">Odia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-400 mb-2 sm:mb-0">
              &copy; {new Date().getFullYear()} Sumanjeet Behera. All rights reserved.
            </p>
            <div className="text-xs text-gray-400">
              <a href="#" className="hover:text-[#f47521] transition-colors mr-4">Privacy Policy</a>
              <a href="#" className="hover:text-[#f47521] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
 
 
 