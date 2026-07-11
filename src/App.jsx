import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';

const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Journey = lazy(() => import('./components/Journey'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <ScrollProgress />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_30%),linear-gradient(135deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0.01))] bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
        <Hero />
        <About />
        <Suspense fallback={<div className="py-20" />}> 
          <Projects />
          <Skills />
          <Journey />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
