import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiAward, FiCode, FiCompass, FiTrendingUp } from 'react-icons/fi';

const milestones = [
  {
    title: 'SSC Completion',
    period: '2018',
    description: 'Built a strong academic foundation and developed curiosity for problem solving and logic.',
    icon: FiAward,
  },
  {
    title: 'Diploma in Engineering',
    period: '2018 - 2021',
    description: 'Expanded technical skills and discovered a real passion for software, systems, and modern interfaces.',
    icon: FiCode,
  },
  {
    title: 'Learning Programming',
    period: '2021 - 2022',
    description: 'Started exploring C, C++, Java, Python, and web fundamentals to transform curiosity into capability.',
    icon: FiCompass,
  },
  {
    title: 'First Portfolio',
    period: '2022',
    description: 'Created my first personal portfolio and learned how design, performance, and storytelling shape user experience.',
    icon: FiTrendingUp,
  },
  {
    title: 'MERN Journey',
    period: '2023 - Present',
    description: 'Built full-stack applications with React, Node.js, Express, MongoDB, and Firebase while refining my craft.',
    icon: FiCode,
  },
  {
    title: 'Future Goals',
    period: 'Next Chapter',
    description: 'Aiming to grow into a high-impact full stack engineer, build scalable products, and mentor others.',
    icon: FiTrendingUp,
  }
];

const Journey = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="journey" className="relative py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
          className="section-title"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="text-sm uppercase tracking-[0.3em] text-sky-400 font-semibold mb-4"
          >
            Journey
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="mb-4"
          >
            My path from learning to building
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg max-w-2xl mx-auto text-slate-600 dark:text-slate-400"
          >
            Every milestone shaped my craft, from education to modern full-stack development.
          </motion.p>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/80 via-orange-500/70 to-transparent" />

          <div className="space-y-8">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -24 : 24 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <div className="md:w-1/2 md:px-8">
                    <div className={`card-glass rounded-3xl p-6 md:p-8 ${isEven ? 'md:mr-4' : 'md:ml-4'}`}>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-orange-500/20 text-sky-500 dark:text-sky-400">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500 dark:text-sky-400">
                            {item.period}
                          </p>
                          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-2 top-6 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-sky-500 to-orange-500 shadow-lg shadow-sky-500/20 dark:border-slate-950" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
