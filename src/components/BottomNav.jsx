import { useState, useEffect } from 'react';
import { Home, User, BookOpen, Award, Briefcase, MessageSquare } from 'lucide-react';

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Calculate which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'home', icon: <Home size={18} />, label: 'Home' },
    { id: 'about', icon: <User size={18} />, label: 'About' },
    { id: 'skills', icon: <BookOpen size={18} />, label: 'Skills' },
    { id: 'achievements', icon: <Award size={18} />, label: 'Achievements' },
    { id: 'experience', icon: <Briefcase size={18} />, label: 'Experience' },
    { id: 'contact', icon: <MessageSquare size={18} />, label: 'Contact' }
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-md bg-white/90 backdrop-blur-md rounded-full shadow-lg px-2 py-2 z-50 md:hidden">
      <div className="grid grid-cols-6 gap-1">
        {navItems.map((item) => (
          <a 
            key={item.id}
            href={`#${item.id}`} 
            className={`flex flex-col items-center justify-center py-1 px-1`}
          >
            <div className={`${activeSection === item.id ? 'text-[#f47521]' : 'text-[#0a2a35]'}`}>
              {item.icon}
            </div>
            <span className={`text-[10px] mt-1 ${activeSection === item.id ? 'text-[#f47521] font-medium' : 'text-[#0a2a35]'}`}>
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BottomNav; 
 
 
 