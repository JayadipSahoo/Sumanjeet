import { Home, User, BookOpen, Award, Briefcase, MessageSquare } from 'lucide-react';

const BottomNav = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-md bg-white/90 backdrop-blur-md rounded-full shadow-lg px-2 py-2 z-50 md:hidden">
      <div className="flex justify-around items-center">
        <a href="#home" className="flex flex-col items-center p-2">
          <Home size={18} className="text-[#0a2a35]" />
          <span className="text-[10px] text-[#0a2a35] mt-1">Home</span>
        </a>
        <a href="#about" className="flex flex-col items-center p-2">
          <User size={18} className="text-[#0a2a35]" />
          <span className="text-[10px] text-[#0a2a35] mt-1">About</span>
        </a>
        <a href="#skills" className="flex flex-col items-center p-2">
          <BookOpen size={18} className="text-[#0a2a35]" />
          <span className="text-[10px] text-[#0a2a35] mt-1">Skills</span>
        </a>
        <a href="#achievements" className="flex flex-col items-center p-2">
          <Award size={18} className="text-[#0a2a35]" />
          <span className="text-[10px] text-[#0a2a35] mt-1">Achievements</span>
        </a>
        <a href="#experience" className="flex flex-col items-center p-2">
          <Briefcase size={18} className="text-[#0a2a35]" />
          <span className="text-[10px] text-[#0a2a35] mt-1">Experience</span>
        </a>
        <a href="#contact" className="flex flex-col items-center p-2">
          <MessageSquare size={18} className="text-[#0a2a35]" />
          <span className="text-[10px] text-[#0a2a35] mt-1">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default BottomNav; 
 
 
 