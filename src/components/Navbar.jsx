import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
          aria-label="Saai Marale home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/25 to-orange-500/15 shadow-lg shadow-sky-500/10 transition-transform duration-300 hover:rotate-6 hover:scale-105">
            <div className="relative h-6 w-6 rounded-lg border border-slate-900/70 dark:border-white/80">
              <div className="absolute inset-0 rounded-lg border border-sky-500/50" />
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-sky-500 to-orange-500" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.35em] text-slate-700 dark:text-slate-200">SAAI</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Developer</p>
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden items-center space-x-8 md:flex"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="font-medium text-slate-600 transition-colors duration-300 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-4"
        >
          <button
            onClick={toggleTheme}
            className="rounded-xl border border-slate-200/70 bg-white/80 p-2 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-slate-200/70 bg-white/80 p-2 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
          variants={menuVariants}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          className="md:hidden overflow-hidden"
        >
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="px-2 pt-2 pb-3 space-y-1 glass rounded-lg mt-2"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-3 py-2 text-slate-700 transition-all duration-300 hover:bg-sky-500/10 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-sky-500/10 dark:hover:text-sky-400"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </motion.div>
    </nav>
  );
};

export default Navbar;
