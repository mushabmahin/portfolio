import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, MapPin } from 'lucide-react';
import Button from '../components/Button';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 350, damping: 25 }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      
      {/* Background Subtle Tech Ambient Glows (No animation to maximize performance) */}
      <div className="glow-spot bg-indigo-500/10 w-[300px] h-[300px] top-[15%] left-[20%]" />
      <div className="glow-spot bg-cyan-500/10 w-[350px] h-[350px] bottom-[20%] right-[15%]" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Status availability Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/60 border border-zinc-800 rounded-full text-xs text-zinc-400 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Fall 2026 / Spring 2027 Internships</span>
          </motion.div>

          {/* Name & Title */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-50">
              Mushab Mahin M A
            </h1>
            <p className="font-mono text-xs sm:text-sm text-indigo-400 uppercase tracking-[0.18em]">
              AI &amp; Data Science Student | ML Engineer | Full Stack Developer
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            variants={itemVariants} 
            className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Engineering real-world AI systems with machine learning, computer vision, and scalable full-stack applications.
          </motion.p>

          {/* Location info */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center justify-center gap-1 text-xs text-zinc-500 font-mono"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Ernakulam, Kerala, India</span>
          </motion.div>

          {/* Call to actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="primary"
              href="#projects"
              icon={ArrowRight}
              className="px-6 py-3 font-semibold tracking-wide"
            >
              View Case Studies
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/mushabmahin/portfolio/raw/main/resume.pdf"
              icon={FileText}
              className="px-5 py-3 text-zinc-300 hover:text-white"
            >
              Get Resume (PDF)
            </Button>
          </motion.div>

          {/* Quick social proof icons */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center justify-center gap-6 pt-8 border-t border-zinc-900/60 max-w-[200px] mx-auto"
          >
            <a
              href="https://github.com/mushabmahin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/mushabmahin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
