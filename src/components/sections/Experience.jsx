import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Legal Intern",
      organization: "District Legal Services Authority",
      location: "Cuttack, Odisha",
      description: "Assisted in legal aid initiatives, participated in client consultations, and gained exposure to various legal proceedings at the district level. Worked on case preparation and documentation.",
      duration: "2023",
      icon: <Briefcase className="text-[#f47521] w-8 h-8 mb-4" />
    },
    {
      title: "Legal Intern",
      organization: "Additional Government Advocate",
      location: "Orissa High Court",
      description: "Worked under the guidance of the Additional Government Advocate, assisting in government litigation matters. Conducted legal research, prepared case briefs, and observed court proceedings.",
      duration: "2022",
      icon: <Briefcase className="text-[#f47521] w-8 h-8 mb-4" />
    },
    {
      title: "Legal Intern",
      organization: "Senior Criminal Advocate",
      location: "Orissa High Court",
      description: "Gained practical experience in criminal law practice under the mentorship of a Senior Criminal Advocate. Assisted in case preparation, legal research on criminal matters, and court documentation.",
      duration: "2022",
      icon: <Briefcase className="text-[#f47521] w-8 h-8 mb-4" />
    },
    {
      title: "Legal Research Assistant",
      organization: "Constitutional Law Research Project",
      location: "Madhusudan Law University",
      description: "Conducted research on constitutional law topics, contributing to academic papers and presentations on contemporary constitutional issues in India.",
      duration: "2021",
      icon: <Briefcase className="text-[#f47521] w-8 h-8 mb-4" />
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
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  {experience.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-medium text-white mb-1">{experience.title}</h3>
                  <h4 className="text-[#f47521] font-medium mb-2">{experience.organization}</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-3">
                    <div className="flex items-center text-gray-300 text-sm">
                      <MapPin size={16} className="mr-1 text-gray-400" />
                      {experience.location}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar size={16} className="mr-1 text-gray-400" />
                      {experience.duration}
                    </div>
                  </div>
                  
                  <p className="text-gray-300">{experience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 