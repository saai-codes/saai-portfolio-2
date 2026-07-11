import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FiMail, url: 'mailto:shivsaai2010@gmail.com', label: 'Email' },
    { icon: FiGithub, url: 'https://github.com/saai-codes', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://www.linkedin.com/', label: 'LinkedIn' },
    { icon: FiInstagram, url: 'https://www.instagram.com/', label: 'Instagram' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="border-t border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/20 to-orange-500/20">
                <div className="h-6 w-6 rounded-lg border border-slate-900/70 dark:border-white/80" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 dark:text-slate-200">Saai</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Developer Portfolio</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">
              Building thoughtful products with premium visuals, clean engineering, and a focus on performance.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Navigation</h3>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Journey', href: '#journey' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a key={link.name} href={link.href} className="block transition-colors duration-300 hover:text-sky-500">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-700 transition-all duration-300 hover:border-sky-400 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <motion.p variants={itemVariants} className="text-sm text-slate-600 dark:text-slate-400">
            © {currentYear} Saai Marale. All rights reserved.
          </motion.p>
          <motion.p variants={itemVariants} className="text-sm text-slate-600 dark:text-slate-400">
            Made with ❤️ by Saai
          </motion.p>
          <motion.button
            variants={itemVariants}
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-700 transition-all duration-300 hover:border-sky-400 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
