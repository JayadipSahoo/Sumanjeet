import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, FileText } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Legal Intern",
      organization: "District Legal Services Authority",
      location: "Cuttack, Odisha",
      description: "Completed internship at District Legal Services Authority (at various Courts and Departments), Cuttack. Assisted in legal aid initiatives, participated in client consultations, and gained exposure to various legal proceedings at the district level.",
      duration: "2024",
      icon: <Briefcase className="text-[#f47521] w-8 h-8" />
    },
    {
      title: "Legal Intern",
      organization: "Additional Government Advocate",
      location: "Orissa High Court, Cuttack",
      description: "Completed internship under Additional Government Advocate, Orissa High Court, Cuttack. Worked on government litigation matters, conducted legal research, prepared case briefs, and observed court proceedings.",
      duration: "2023",
      icon: <Briefcase className="text-[#f47521] w-8 h-8" />
    },
    {
      title: "Legal Intern",
      organization: "Senior Criminal Advocate",
      location: "Orissa High Court, Cuttack",
      description: "Completed internship under Senior Criminal Advocate, Orissa High Court, Cuttack. Gained practical experience in criminal law practice, assisted in case preparation, and conducted legal research on criminal matters.",
      duration: "2022",
      icon: <Briefcase className="text-[#f47521] w-8 h-8" />
    }
  ];

  const articles = [
    {
      title: "Indian Criminal laws: Still in dearth",
      description: "Analyzed the gaps and shortcomings in the current Indian criminal law framework and proposed necessary reforms.",
      icon: <FileText className="text-[#f47521] w-8 h-8 mb-4" />
    },
    {
      title: "Crime vs Criminal",
      description: "Explored the philosophical and legal distinctions between the act of crime and the person committing it, examining implications for the justice system.",
      icon: <FileText className="text-[#f47521] w-8 h-8 mb-4" />
    },
    {
      title: "Martial Law vs National Emergency",
      description: "Comparative analysis of martial law and national emergency provisions, their constitutional basis, and impacts on civil liberties.",
      icon: <FileText className="text-[#f47521] w-8 h-8 mb-4" />
    },
    {
      title: "Split Verdict: \"Judgement behind Justice\"",
      description: "Examined the implications and reasoning behind split verdicts in landmark cases and their impact on legal precedent.",
      icon: <FileText className="text-[#f47521] w-8 h-8 mb-4" />
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#0a2a35] text-white">
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
            My Experience
          </motion.h2>
          <div className="w-16 sm:w-20 h-1 bg-[#f47521] rounded-full"></div>
          <p className="text-center text-gray-300 mt-6 max-w-2xl">
            Professional internships and experiences that have shaped my legal career and expertise.
          </p>
        </div>
        
        {/* Internships Timeline */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-white mb-8 flex items-center">
            <Briefcase className="mr-2 text-[#f47521]" size={22} />
            Internship Experience
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#f47521]/30 transform md:-translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 w-6 h-6 bg-[#f47521] rounded-full border-4 border-[#0a2a35] z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-auto ${index % 2 === 0 ? 'md:pr-20 md:w-[calc(50%-30px)]' : 'md:pl-20 md:w-[calc(50%-30px)]'}`}>
                    <div className={`bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg hover:bg-white/15 transition-colors duration-300 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          {experience.icon}
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-col">
                            <h3 className="text-xl font-medium text-white mb-1">{experience.title}</h3>
                            <h4 className="text-[#f47521] font-medium mb-2">{experience.organization}</h4>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 mb-3">
                            <div className="flex items-center text-gray-300 text-sm">
                              <MapPin size={16} className="mr-1 text-gray-400" />
                              <span>{experience.location}</span>
                            </div>
                            <div className="flex items-center text-gray-300 text-sm">
                              <Calendar size={16} className="mr-1 text-gray-400" />
                              <span>{experience.duration}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-300 text-sm">{experience.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty Space for Alternating Layout */}
                  <div className="hidden md:block md:w-[calc(50%-30px)]"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Published Articles */}
        <div>
          <h3 className="text-xl font-medium text-white mb-6 flex items-center">
            <FileText className="mr-2 text-[#f47521]" size={22} />
            Published Articles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg hover:bg-white/15 transition-colors duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {article.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">{article.title}</h4>
                    <p className="text-gray-300 text-sm">{article.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 