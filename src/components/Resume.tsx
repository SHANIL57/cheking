import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Eye, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentor junior developers and architect system designs.',
      achievements: ['Increased app performance by 40%', 'Led team of 5 developers', 'Implemented CI/CD pipelines']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and collaborated with design teams to create exceptional user experiences.',
      achievements: ['Built 20+ client websites', 'Improved load times by 60%', 'Established design system']
    },
    {
      title: 'Junior Developer',
      company: 'StartupHub',
      period: '2019 - 2020',
      description: 'Started career building web applications and learning modern development practices in a fast-paced startup environment.',
      achievements: ['Learned React & Node.js', 'Contributed to 3 major releases', 'Automated testing processes']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      description: 'Graduated magna cum laude with focus on software engineering and web technologies.'
    },
    {
      degree: 'Full-Stack Web Development',
      school: 'Coding Bootcamp Pro',
      period: '2019',
      description: 'Intensive 6-month program covering modern web development stack and best practices.'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'React Advanced Certification',
    'UI/UX Design Specialist'
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resume & Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A detailed look at my professional journey, education, and achievements
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Eye size={20} />
                View Online Resume
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Download size={20} />
                Download PDF
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Professional Experience
              </h3>
            </div>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                        {job.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {job.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {job.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-12"
          >
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mr-4">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Education
                </h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
                  >
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.school}
                    </p>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full mb-3 inline-block">
                      {edu.period}
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mr-4">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Certifications
                </h3>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
              >
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {cert}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;