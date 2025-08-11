import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'Tailwind CSS', level: 95, color: 'from-teal-500 to-green-500' },
        { name: 'Framer Motion', level: 85, color: 'from-purple-500 to-pink-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, color: 'from-green-500 to-emerald-500' },
        { name: 'Python/Django', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'PostgreSQL', level: 88, color: 'from-indigo-500 to-purple-500' },
        { name: 'GraphQL', level: 80, color: 'from-pink-500 to-rose-500' },
      ],
    },
    {
      title: 'Design & Tools',
      skills: [
        { name: 'Figma/Adobe XD', level: 92, color: 'from-red-500 to-pink-500' },
        { name: 'Git/GitHub', level: 95, color: 'from-gray-600 to-gray-800' },
        { name: 'Docker', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'AWS/Vercel', level: 80, color: 'from-orange-500 to-red-500' },
      ],
    },
  ];

  const tools = [
    { name: 'React', logo: '⚛️' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'TypeScript', logo: '🔷' },
    { name: 'Python', logo: '🐍' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Figma', logo: '🎨' },
    { name: 'Git', logo: '📦' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Skills Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white dark:bg-slate-800 px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{tool.logo}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {tool.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;