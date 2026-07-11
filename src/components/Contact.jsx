import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiArrowRight, FiGithub, FiInstagram, FiLinkedin, FiLoader, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xreyykba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: FiMail,
      url: 'mailto:shivsaai2010@gmail.com',
      label: 'Email',
    },
    {
      icon: FiGithub,
      url: 'https://github.com/saai-codes',
      label: 'GitHub',
    },
    {
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/',
      label: 'LinkedIn',
    },
    {
      icon: FiInstagram,
      url: 'https://www.instagram.com/',
      label: 'Instagram',
    },
  ];

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
    <section id="contact" className="relative px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="section-title"
        >
          <motion.p variants={itemVariants} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
            Contact
          </motion.p>
          <motion.h2 variants={itemVariants} className="mb-4">
            Let’s build something meaningful together
          </motion.h2>
          <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Reach out for collaborations, freelance work, or a thoughtful conversation about your next project.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="rounded-[2rem] border border-white/40 bg-white/70 p-6 shadow-2xl shadow-sky-500/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/70 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.5rem] border border-slate-200/70 bg-gradient-to-br from-sky-500/10 via-white/70 to-orange-500/10 p-6 dark:border-slate-800 dark:from-sky-500/10 dark:via-slate-900/80 dark:to-orange-500/10">
              <div className="mb-6 flex flex-wrap gap-3">
                {[
                  'Freelance availability',
                  'Full-time opportunities',
                  'Product collaborations',
                ].map((pill) => (
                  <span key={pill} className="rounded-full border border-sky-500/20 bg-white/70 px-3 py-1 text-sm text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                    {pill}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  { icon: FiMail, label: 'Email', value: 'shivsaai2010@gmail.com', href: 'mailto:shivsaai2010@gmail.com' },
                  { icon: FiPhone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                  { icon: FiMapPin, label: 'Location', value: 'Maharashtra, India', href: '#' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} className="flex items-center gap-4 rounded-2xl border border-white/40 bg-white/70 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:border-slate-800/70 dark:bg-slate-900/70 dark:hover:bg-slate-900">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-orange-500 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                        <p className="font-medium text-slate-800 dark:text-slate-100">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8">
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                  Download Resume
                  <FiArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex gap-3">
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
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-700 transition-all duration-300 hover:border-sky-400 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-slate-200/70 bg-white/70 p-6 shadow-inner shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-none">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-slate-700 dark:bg-slate-800"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-slate-700 dark:bg-slate-800"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-slate-700 dark:bg-slate-800"
                    placeholder="Tell me about your idea..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-orange-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <><FiLoader className="h-4 w-4 animate-spin" /> Sending...</> : <>Send Message <FiArrowRight className="h-4 w-4" /></>}
                </motion.button>
              </div>

              {submitted && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
                  Thanks for reaching out. I’ll reply shortly.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
