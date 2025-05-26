import { motion } from 'framer-motion';
import { Award, FileText, Users, BookOpen, Gavel, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="text-[#f47521] w-8 h-8 mb-4" />,
      title: "Awarded by Minister of State",
      description: "Awarded by Minister of State with Independent Charge for Odia Language, Literature and Culture of Odisha Shri Suryabanshi Suraj and Honble Member of Odisha Legislative Assembly Souvik Biswal as Best Student, Madhusudan Law University, 2025."
    },
    {
      icon: <Gavel className="text-[#f47521] w-8 h-8 mb-4" />,
      title: "Moot Court Competitions",
      description: <ul className="list-disc pl-4 space-y-1">
        <li>Winner at First MLU Intra Moot Court Competition</li>
        <li>Winner at Surana and Surana National Criminal Law Moot Court Competition</li>
        <li>Winner at Surana and Surana National Family Law Moot Court Competition</li>
        <li>Participated in Viswanath Pasayat National Moot Court Competition at Birla Global University, Bhubaneswar</li>
      </ul>
    },
    {
      icon: <Users className="text-[#f47521] w-8 h-8 mb-4" />,
      title: "Mediation Competition",
      description: "Participated in First State Mediation Competition at Birla Global University, Bhubaneswar."
    },
    {
      icon: <FileText className="text-[#f47521] w-8 h-8 mb-4" />,
      title: "Constitutional Law Papers",
      description: <ul className="list-disc pl-4 space-y-1">
        <li>Presented paper on Constitutional Issues at BGU, Bhubaneswar</li>
        <li>Presented paper on Constitutional Issues at XIM University, Bhubaneswar</li>
      </ul>
    },
    {
      icon: <BookOpen className="text-[#f47521] w-8 h-8 mb-4" />,
      title: "Legal Publications",
      description: <ul className="list-disc pl-4 space-y-1">
        <li>
          <a 
            href="https://medium.com/@sumanjeetbehera/indian-criminal-laws-still-in-dearth-b751b2c907f5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0a2a35] hover:text-[#f47521] transition-colors flex items-center"
          >
            Indian Criminal laws: Still in dearth
            <ExternalLink className="ml-1 w-3 h-3" />
          </a>
        </li>
        <li>
          <a 
            href="https://medium.com/@sumanjeetbehera/crime-vs-criminal-0475bc7b597b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0a2a35] hover:text-[#f47521] transition-colors flex items-center"
          >
            Crime vs Criminal
            <ExternalLink className="ml-1 w-3 h-3" />
          </a>
        </li>
        <li>
          <a 
            href="https://medium.com/@sumanjeetbehera/split-verdict-judgement-behind-justice-b1ff5b05f1fc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0a2a35] hover:text-[#f47521] transition-colors flex items-center"
          >
            Split Verdict: Judgement behind Justice
            <ExternalLink className="ml-1 w-3 h-3" />
          </a>
        </li>
        <li>
          <a 
            href="https://medium.com/@sumanjeetbehera/martial-law-vs-national-emergency-d8398337128e" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0a2a35] hover:text-[#f47521] transition-colors flex items-center"
          >
            Martial Law vs National Emergency
            <ExternalLink className="ml-1 w-3 h-3" />
          </a>
        </li>
      </ul>
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
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
 
 
 