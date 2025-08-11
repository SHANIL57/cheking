import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      year: '2019',
      title: 'Started Web Development',
      description: 'Began my journey with HTML, CSS, and JavaScript',
    },
    {
      year: '2020',
      title: 'First Full-Stack Project',
      description: 'Built my first MERN stack application',
    },
    {
      year: '2021',
      title: 'Freelance Career',
      description: 'Started working with clients worldwide',
    },
    {
      year: '2023',
      title: 'UI/UX Specialization',
      description: 'Expanded skills in design and user experience',
    },
    {
      year: '2024',
      title: 'Current Focus',
      description: 'Building innovative web applications and mentoring developers',
    },
  ];

  const traits = [
    { icon: Code, title: 'Problem Solver', description: 'I love tackling complex challenges' },
    { icon: Palette, title: 'Creative Thinker', description: 'Design with purpose and passion' },
    { icon: Zap, title: 'Fast Learner', description: 'Always adapting to new technologies' },
    { icon: Heart, title: 'Team Player', description: 'Collaboration drives innovation' },
  ];

  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who believes in creating digital experiences that not only look beautiful 
            but also solve real-world problems. With a keen eye for design and a strong technical foundation, 
            I bridge the gap between aesthetics and functionality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">My Journey</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative flex items-start mb-8"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-6 bg-white dark:bg-slate-700 p-4 rounded-lg shadow-md">
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                      {item.year}
                    </div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personality Traits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">What Drives Me</h3>
            <div className="grid gap-6">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                      <trait.icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {trait.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {trait.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;