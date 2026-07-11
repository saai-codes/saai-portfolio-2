import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiCode, FiDatabase, FiGlobe, FiLayers, FiTerminal, FiTool } from 'react-icons/fi';

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: FiGlobe,
      color: 'from-sky-500 to-cyan-500',
      technologies: ['React', 'Tailwind', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Backend',
      icon: FiCode,
      color: 'from-violet-500 to-indigo-500',
      technologies: ['Node.js', 'Express', 'REST APIs', 'Auth'],
    },
    {
      title: 'Database',
      icon: FiDatabase,
      color: 'from-emerald-500 to-green-500',
      technologies: ['MongoDB', 'Firebase', 'CRUD', 'Data Modeling'],
    },
    {
      title: 'Languages',
      icon: FiTerminal,
      color: 'from-orange-500 to-amber-500',
      technologies: ['C', 'C++', 'Python', 'Java'],
    },
    {
      title: 'Tools',
      icon: FiTool,
      color: 'from-pink-500 to-rose-500',
      technologies: ['Git', 'GitHub', 'VS Code', 'Postman'],
    },
    {
      title: 'Design',
      icon: FiLayers,
      color: 'from-cyan-500 to-sky-500',
      technologies: ['UI/UX', 'Responsive', 'Framer Motion', 'Figma'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="relative px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="section-title"
        >
          <motion.p variants={categoryVariants} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
            Skills & Expertise
          </motion.p>
          <motion.h2 variants={categoryVariants} className="mb-4">
            A focused toolset for modern product development
          </motion.h2>
          <motion.p variants={categoryVariants} className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            I work across the full stack with a balance of product thinking, clean engineering, and polished design.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.08 * categoryIndex }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="card-glass group rounded-[1.6rem] p-7"
              >
                <div className={`mb-5 inline-flex rounded-2xl bg-gradient-to-r ${category.color} p-3 text-white`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-5 text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1.5 text-sm font-medium text-slate-700 transition-all duration-300 group-hover:border-sky-500/40 group-hover:bg-sky-500/20 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
