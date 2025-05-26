import { motion } from 'framer-motion';
import { Code, Book, Scale, Gavel, FileText } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Scale className="text-[#f47521] w-8 h-8 mb-4" />,
      title: 'Constitutional Law',
      description: 'Specializing in constitutional interpretation, fundamental rights, and public interest litigation.'
    },
    {
      icon: <Gavel className="text-[#f47521] w-8 h-8 mb-4" />,
      title: 'Criminal Law',
      description: 'Experience in criminal procedure, evidence law, and defense strategies in criminal cases.'
    },
    {
      icon: <Book className="text-[#f47521] w-8 h-8 mb-4" />,
      title: 'Legal Research',
      description: 'Thorough research skills with attention to detail and comprehensive analysis of case law.'
    },
    {
      icon: <FileText className="text-[#f47521] w-8 h-8 mb-4" />,
      title: 'Legal Writing',
      description: 'Crafting persuasive legal documents, memos, briefs, and academic papers on various legal topics.'
    },
    {
      icon: <Code className="text-[#f47521] w-8 h-8 mb-4" />,
      title: 'Mooting',
      description: 'Award-winning experience in national moot court competitions with strong oral advocacy skills.'
    },
    {
      icon: <Scale className="text-[#f47521] w-8 h-8 mb-4" />,
      title: 'Family Law',
      description: 'Knowledge of matrimonial laws, custody matters, and family dispute resolution mechanisms.'
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#0a2a35] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 sm:mb-16">
          <div className="flex items-center mb-4">
            <span className="h-1 w-6 bg-[#f47521] mr-2"></span>
            <span className="h-1 w-6 bg-white mr-2"></span>
            <span className="h-1 w-6 bg-[#20b286] mr-2"></span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3 sm:mb-4 text-center"
          >
            My Skills
          </motion.h2>
          <div className="w-16 sm:w-20 h-1 bg-[#f47521] rounded-full"></div>
          <p className="text-center text-gray-300 mt-6 max-w-2xl">
            Specialized legal skills developed through academic study, internships, and practical experience
            in various areas of law and legal practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors duration-300"
            >
              {skill.icon}
              <h3 className="text-lg font-medium text-white mb-2">{skill.title}</h3>
              <p className="text-gray-300 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 