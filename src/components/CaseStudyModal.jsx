import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, Cpu, Database, Settings, ArrowRight, Activity, Terminal } from 'lucide-react';
import Button from './Button';

export default function CaseStudyModal({ isOpen, onClose, project }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl flex flex-col max-h-[90vh] z-10 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/40">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Terminal className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-outfit text-lg font-bold text-zinc-100">{project.title}</h3>
                  <p className="text-xs text-zinc-400 font-mono">Case Study & Project Architecture</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scroll Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 scroll-smooth">
              {/* Overview Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-lg p-4">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Role</p>
                  <p className="text-sm font-semibold text-zinc-200 mt-1">{project.caseStudy.overview.role}</p>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-lg p-4">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Project Type</p>
                  <p className="text-sm font-semibold text-zinc-200 mt-1">{project.caseStudy.overview.type}</p>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-lg p-4">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Duration</p>
                  <p className="text-sm font-semibold text-zinc-200 mt-1">{project.caseStudy.overview.duration}</p>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-lg p-4">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Key Metric</p>
                  <p className="text-sm font-semibold text-indigo-400 mt-1">{project.caseStudy.overview.metric}</p>
                </div>
              </div>

              {/* The Problem */}
              <div className="space-y-3">
                <h4 className="font-outfit text-md font-bold text-zinc-100 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-indigo-500 rounded-full"></span>
                  The Problem
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-900/10 border-l-2 border-indigo-500/50 pl-4 py-1">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* Dataset & Process */}
              <div className="space-y-3">
                <h4 className="font-outfit text-md font-bold text-zinc-100 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-indigo-500 rounded-full"></span>
                  Dataset & Data Handling
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.caseStudy.dataset}
                </p>
              </div>

              {/* ML / Processing Pipeline */}
              <div className="space-y-3">
                <h4 className="font-outfit text-md font-bold text-zinc-100 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-indigo-500 rounded-full"></span>
                  Development & ML Pipeline
                </h4>
                <div className="space-y-3">
                  {project.caseStudy.pipeline.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start bg-zinc-900/20 border border-zinc-800/40 rounded-lg p-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-mono font-bold text-indigo-400 border border-zinc-700">
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-zinc-200">{step.title}</h5>
                        <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Diagram */}
              <div className="space-y-4">
                <h4 className="font-outfit text-md font-bold text-zinc-100 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-indigo-500 rounded-full"></span>
                  System Architecture Flow
                </h4>
                
                {/* SVG Render for INSIDRA */}
                {project.id === 'insidra' && (
                  <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 flex flex-col items-center justify-center">
                    <svg className="w-full max-w-2xl h-auto" viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
                      {/* Definitions for Glow/Gradients */}
                      <defs>
                        <linearGradient id="indigoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#818cf8" />
                        </linearGradient>
                        <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0891b2" />
                          <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                        <linearGradient id="zincGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#27272a" />
                          <stop offset="100%" stopColor="#3f3f46" />
                        </linearGradient>
                      </defs>

                      {/* Step 1: Data Source */}
                      <rect x="10" y="70" width="100" height="70" rx="6" fill="url(#zincGrad)" stroke="#52525b" strokeWidth="1"/>
                      <text x="60" y="102" fill="#f4f4f5" fontSize="10" textAnchor="middle" fontWeight="bold">Activity Logs</text>
                      <text x="60" y="118" fill="#a1a1aa" fontSize="8" textAnchor="middle" fontFamily="monospace">System Ingestion</text>

                      {/* Arrow 1 */}
                      <path d="M 110 105 L 140 105" stroke="#52525b" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none"/>
                      <polygon points="140,105 133,101 133,109" fill="#52525b" />

                      {/* Step 2: Feature Engineering */}
                      <rect x="150" y="70" width="110" height="70" rx="6" fill="url(#zincGrad)" stroke="#52525b" strokeWidth="1"/>
                      <text x="205" y="98" fill="#f4f4f5" fontSize="10" textAnchor="middle" fontWeight="bold">Feature Extractor</text>
                      <text x="205" y="112" fill="#a1a1aa" fontSize="8" textAnchor="middle">Frequency &amp; Sequence</text>
                      <text x="205" y="124" fill="#a1a1aa" fontSize="8" textAnchor="middle" fontFamily="monospace">Vectors (Flask)</text>

                      {/* Arrow 2 */}
                      <path d="M 260 105 L 290 105" stroke="#818cf8" strokeWidth="1.5" fill="none"/>
                      <polygon points="290,105 283,101 283,109" fill="#818cf8" />

                      {/* Step 3: ML Inference */}
                      <rect x="300" y="60" width="120" height="90" rx="6" fill="url(#indigoGrad)" stroke="#6366f1" strokeWidth="1"/>
                      <text x="360" y="90" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">ML Core</text>
                      <text x="360" y="108" fill="#e0e7ff" fontSize="9" textAnchor="middle">Autoencoders</text>
                      <text x="360" y="122" fill="#e0e7ff" fontSize="8" textAnchor="middle" fontFamily="monospace">TensorFlow</text>
                      <text x="360" y="134" fill="#a5b4fc" fontSize="7" textAnchor="middle">Behavioral Drift Analysis</text>

                      {/* Arrow 3 */}
                      <path d="M 420 105 L 450 105" stroke="#818cf8" strokeWidth="1.5" fill="none"/>
                      <polygon points="450,105 443,101 443,109" fill="#818cf8" />

                      {/* Step 4: SHAP explainer */}
                      <rect x="460" y="70" width="110" height="70" rx="6" fill="url(#zincGrad)" stroke="#52525b" strokeWidth="1"/>
                      <text x="515" y="98" fill="#f4f4f5" fontSize="10" textAnchor="middle" fontWeight="bold">Explainable AI</text>
                      <text x="515" y="112" fill="#a1a1aa" fontSize="8" textAnchor="middle">SHAP Values</text>
                      <text x="515" y="124" fill="#6366f1" fontSize="8" textAnchor="middle" fontWeight="bold">Alert Attribution</text>

                      {/* Arrow 4 */}
                      <path d="M 570 105 L 600 105" stroke="#22d3ee" strokeWidth="1.5" fill="none"/>
                      <polygon points="600,105 593,101 593,109" fill="#22d3ee" />

                      {/* Step 5: Dashboard */}
                      <rect x="610" y="70" width="80" height="70" rx="6" fill="url(#cyanGrad)" stroke="#0891b2" strokeWidth="1"/>
                      <text x="650" y="98" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">Admin UI</text>
                      <text x="650" y="112" fill="#ecfeff" fontSize="8" textAnchor="middle">Real-time alerts</text>
                      <text x="650" y="124" fill="#ecfeff" fontSize="8" textAnchor="middle" fontFamily="monospace">React.js</text>
                    </svg>
                    <span className="text-[10px] font-mono text-zinc-500 mt-4 uppercase">
                      Ingestion ➔ Features (Flask) ➔ Detection Engine (TensorFlow Autoencoders) ➔ Explainability (SHAP) ➔ Interface (React)
                    </span>
                  </div>
                )}

                {/* SVG Render for Voca AI */}
                {project.id === 'voca-ai' && (
                  <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 flex flex-col items-center justify-center">
                    <svg className="w-full max-w-2xl h-auto" viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="cyanGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0891b2" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                        <linearGradient id="indigoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                        <linearGradient id="zincGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#27272a" />
                          <stop offset="100%" stopColor="#3f3f46" />
                        </linearGradient>
                      </defs>

                      {/* Step 1: User Voice */}
                      <rect x="10" y="70" width="100" height="70" rx="6" fill="url(#zincGrad2)" stroke="#52525b" strokeWidth="1"/>
                      <text x="60" y="102" fill="#f4f4f5" fontSize="10" textAnchor="middle" fontWeight="bold">Mic Input</text>
                      <text x="60" y="118" fill="#a1a1aa" fontSize="8" textAnchor="middle" fontFamily="monospace">Continuous Audio</text>

                      {/* Arrow 1 */}
                      <path d="M 110 105 L 140 105" stroke="#52525b" strokeWidth="1.5" fill="none"/>
                      <polygon points="140,105 133,101 133,109" fill="#52525b" />

                      {/* Step 2: Speech API */}
                      <rect x="150" y="60" width="120" height="90" rx="6" fill="url(#cyanGrad2)" stroke="#0891b2" strokeWidth="1"/>
                      <text x="210" y="90" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">Web Speech API</text>
                      <text x="210" y="108" fill="#ecfeff" fontSize="8" textAnchor="middle">Continuous Recognition</text>
                      <text x="210" y="122" fill="#ecfeff" fontSize="8" textAnchor="middle">Dynamic Transcription</text>
                      <text x="210" y="134" fill="#cffafe" fontSize="7" textAnchor="middle" fontFamily="monospace">Multilingual Listeners</text>

                      {/* Arrow 2 */}
                      <path d="M 270 105 L 300 105" stroke="#06b6d4" strokeWidth="1.5" fill="none"/>
                      <polygon points="300,105 293,101 293,109" fill="#06b6d4" />

                      {/* Step 3: Command Router */}
                      <rect x="310" y="70" width="120" height="70" rx="6" fill="url(#zincGrad2)" stroke="#52525b" strokeWidth="1"/>
                      <text x="370" y="98" fill="#f4f4f5" fontSize="10" textAnchor="middle" fontWeight="bold">Command Router</text>
                      <text x="370" y="112" fill="#a1a1aa" fontSize="8" textAnchor="middle">Regex &amp; NLP Matching</text>
                      <text x="370" y="124" fill="#a1a1aa" fontSize="8" textAnchor="middle" fontFamily="monospace">React State Engine</text>

                      {/* Arrow 3 */}
                      <path d="M 430 105 L 460 105" stroke="#818cf8" strokeWidth="1.5" fill="none"/>
                      <polygon points="460,105 453,101 453,109" fill="#818cf8" />

                      {/* Step 4: Execution Node */}
                      <rect x="470" y="60" width="110" height="90" rx="6" fill="url(#indigoGrad2)" stroke="#4f46e5" strokeWidth="1"/>
                      <text x="525" y="90" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">Execution Node</text>
                      <text x="525" y="108" fill="#e0e7ff" fontSize="8" textAnchor="middle">Custom Hotwords</text>
                      <text x="525" y="122" fill="#e0e7ff" fontSize="8" textAnchor="middle">Dynamic Commands</text>
                      <text x="525" y="134" fill="#a5b4fc" fontSize="8" textAnchor="middle" fontFamily="monospace">Node.js Backplane</text>

                      {/* Arrow 4 */}
                      <path d="M 580 105 L 610 105" stroke="#52525b" strokeWidth="1.5" fill="none"/>
                      <polygon points="610,105 603,101 603,109" fill="#52525b" />

                      {/* Step 5: Application Actions */}
                      <rect x="620" y="70" width="70" height="70" rx="6" fill="url(#zincGrad2)" stroke="#52525b" strokeWidth="1"/>
                      <text x="655" y="98" fill="#f4f4f5" fontSize="10" textAnchor="middle" fontWeight="bold">System UI</text>
                      <text x="655" y="112" fill="#a1a1aa" fontSize="8" textAnchor="middle">Hands-free</text>
                      <text x="655" y="124" fill="#a1a1aa" fontSize="8" textAnchor="middle">Execution</text>
                    </svg>
                    <span className="text-[10px] font-mono text-zinc-500 mt-4 uppercase">
                      Mic Input ➔ Web Speech Engine (Continuous) ➔ Command Mapping Router ➔ Execution Controller (Node.js) ➔ Real-Time Response
                    </span>
                  </div>
                )}
              </div>

              {/* Technical Challenges & Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-500/5 border border-red-500/10 rounded-lg p-5 space-y-2">
                  <h5 className="text-sm font-semibold text-red-400 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" />
                    Engineering Challenge
                  </h5>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.caseStudy.challenge.problem}
                  </p>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-5 space-y-2">
                  <h5 className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Practical Solution
                  </h5>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.caseStudy.challenge.solution}
                  </p>
                </div>
              </div>

              {/* Future Scalability */}
              <div className="bg-zinc-900/20 border border-zinc-800 rounded-lg p-5 space-y-3">
                <h4 className="font-outfit text-sm font-bold text-zinc-200 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  Future Production Enhancements
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-zinc-400">
                  {project.caseStudy.future.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/40 flex items-center justify-end gap-3">
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
              {project.githubUrl && (
                <Button variant="primary" href={project.githubUrl}>
                  View Repository
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
