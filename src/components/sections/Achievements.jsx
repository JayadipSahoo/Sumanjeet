import { motion } from 'framer-motion';
import { Award, FileText, Users, BookOpen } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="text-[#f47521] w-8 h-8 mb-4" />,
      title: "Moot Court Champion",
      description: "Winner at Surana and Surana National Criminal Law Moot Court Competition, demonstrating exceptional legal research and advocacy skills."
    },
    {
      icon: <Award className="text-[#f47521] w-8 h-8 mb-4" />,
      title: "Family Law Competition",
      description: "Winner at Surana and Surana National Family Law Moot Court Competition, showcasing expertise in matrimonial and family legal matters."
    },
    {
      icon: <FileText className="text-[#f47521] w-8 h-8 mb-4" />,
      title: "Constitutional Law Papers",
      description: "Presented papers on Constitutional Issues at BGU, Bhubaneswar and XIM University, Bhubaneswar, contributing to legal scholarship."
    },
    {
      icon: <BookOpen className="text-[#f47521] w-8 h-8 mb-4" />,
      title: "Legal Publications",
      description: "Published articles on critical legal topics including 'Indian Criminal laws: Still in dearth', 'Crime vs Criminal', and 'Split Verdict: Judgement behind Justice'."
    },
    {
      icon: <Users className="text-[#f47521] w-8 h-8 mb-4" />,
      title: "Legal Services Internship",
      description: "Completed internship at District Legal Services Authority, Cuttack, gaining practical experience in legal aid and access to justice."
    },
    {
      icon: <Users className="text-[#f47521] w-8 h-8 mb-4" />,
      title: "High Court Experience",
      description: "Completed internships under Additional Government Advocate and Senior Criminal Advocate at Orissa High Court, developing expertise in litigation."
    }
  ];

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 sm:mb-16">
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
            My Achievements
          </motion.h2>
          <div className="w-16 sm:w-20 h-1 bg-[#f47521] rounded-full"></div>
          <p className="text-center text-gray-600 mt-6 max-w-2xl">
            Academic and professional accomplishments showcasing excellence in legal research, advocacy, and scholarship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {achievement.icon}
              <h3 className="text-lg font-medium text-[#0a2a35] mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 
 
 
 