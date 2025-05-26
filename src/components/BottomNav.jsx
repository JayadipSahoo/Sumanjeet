import { Home, User, Award, Briefcase, Star, MessageSquare } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: 'Home', to: 'hero' },
    { icon: User, label: 'About', to: 'about' },
    { icon: Star, label: 'Skills', to: 'skills' },
    { icon: Award, label: 'Achievements', to: 'achievements' },
    { icon: Briefcase, label: 'Experience', to: 'experience' },
    { icon: MessageSquare, label: 'Contact', to: 'contact' },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-0 w-full flex justify-center z-50 px-4">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/80 backdrop-blur-lg rounded-full shadow-lg p-2 border border-slate-200/50"
      >
        <div className="flex items-center justify-between space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="relative"
              activeClass="active-nav-item"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(14, 165, 233, 0.1)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="relative flex flex-col items-center justify-center p-2 rounded-full text-secondary hover:text-accent transition-colors"
              >
                <item.icon size={18} />
                <span className="text-[10px] mt-0.5">{item.label}</span>
              </motion.button>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BottomNav; 
 
 
 