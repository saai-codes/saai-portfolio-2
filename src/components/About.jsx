import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="section-title"
        >
          <motion.p variants={itemVariants} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
            About Me
          </motion.p>
          <motion.h2 variants={itemVariants} className="mb-4">
            Designing thoughtful products with a developer’s precision
          </motion.h2>
          <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            I blend creative design with engineering discipline to deliver experiences that look premium and perform beautifully.
          </motion.p>
        </motion.div>

        <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div variants={itemVariants} className="card-glass rounded-[2rem] p-8 md:p-10">
            <h3 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">I create digital experiences that feel effortless</h3>
            <p className="mb-4 text-base leading-8 text-slate-600 dark:text-slate-400">
              I’m Saai Marale, a developer who enjoys building modern, responsive web applications with clean architecture and striking visual detail. My work is shaped by curiosity, consistency, and a strong focus on user experience.
            </p>
            <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
              From startup landing pages to full-stack products, I care about performance, accessibility, and the small interactions that make a product memorable.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card-glass rounded-[2rem] p-8 md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { value: '2+', label: 'Years building' },
                { value: '20+', label: 'Projects shipped' },
                { value: '100%', label: 'Attention to detail' },
                { value: '24/7', label: 'Curiosity' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center">
                  <div className="text-2xl font-semibold text-sky-500">{stat.value}</div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
