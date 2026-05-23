import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, Cpu, Database, Layers, Activity, Terminal, CheckCircle2, Wrench, Globe } from 'lucide-react';
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

  // Real Technical Case Studies mapping to guarantee credibility and no buzzwords
  const caseStudiesData = {
    insidra: {
      problem: "Insider threats are highly challenging to flag because authorized actors execute normal system processes. However, compromise or rogue actions display subtle behavioral anomalies (drift) over time. Naive machine learning pipelines cause extreme alert fatigue for security teams due to typical user schedule variations, while legacy rule-based logs fail entirely to capture these slow-evolving sequence deviations.",
      approach: {
        architecture: "Multi-tier secure microservices pipeline. Activity logs are ingested via secure API endpoints (Flask), processed into structured sequence vectors, run through a warm TensorFlow autoencoder instance in a background multiprocessing queue, explainably attributed via SHAP values, and logged in PostgreSQL for dashboard metrics.",
        flow: [
          { title: "Standardized Log Ingestion", detail: "Activity command strings, directory accesses, and temporal indicators are mapped into frequency-based vector arrays." },
          { title: "Deep Autoencoder Reconstruction", detail: "Neural autoencoders are trained user-specifically to compress and reconstruct normal historical profiles. A high reconstruction error (loss) indicates behavioral drift." },
          { title: "SHAP Explainability Layer", detail: "If reconstruction error crosses the dynamic user threshold, the SHAP engine maps exactly which activity features caused the alert to prevent blind indicators." }
        ]
      },
      challenges: [
        {
          title: "API Thread Blocking during TensorFlow Inference",
          detail: "Running raw neural inference synchronously inside Flask blocked the main event loop, causing latency spikes. Resolved by separating inference into a background Celery/multiprocessing queue, optimizing HTTP response times and freeing main worker threads."
        },
        {
          title: "Alert Fatigue from User Schedule Variances",
          detail: "Normal schedule drift (e.g. late-night urgent patches) caused high false alarms. Solved by implementing dynamic user-specific baseline thresholds and a 3-day exponential decay smoothing weight."
        }
      ],
      infrastructure: {
        frontend: "Vercel Static CDN (React.js UI)",
        backend: "Railway Microservices (Flask API Core)",
        database: "Supabase Managed PostgreSQL (User logs & alerts)",
        cicd: "GitHub Actions (Container building, automated PyTest suite)"
      },
      future: [
        "Incorporate Apache Kafka stream nodes to ingest active terminal logs under high-throughput environments.",
        "Implement Federated Learning paradigms to allow private, user-device-level autoencoder profiling."
      ]
    },
    voca_ai: {
      problem: "Voice-control systems generally rely on constant cloud connections, introducing 1000ms+ execution latency, severe data privacy vulnerabilities, and complex configurations when attempting to trigger local custom workflows.",
      approach: {
        architecture: "Hybrid localized processing frame. Audio streams are captured and continuously processed inside the local browser client sandbox using the Web Speech recognition API. Command text is parsed by a clean regex-driven tokenizing engine and routed directly to a local Node.js daemon over local REST paths.",
        flow: [
          { title: "continuous Audio Capture", detail: "Accesses local browser mic buffers to capture high-fidelity continuous audio frames." },
          { title: "Local Speech Recognition", detail: "Web Speech engines translate audio to transcript nodes fully client-side, preserving absolute network privacy." },
          { title: "Regex Command Router", detail: "Transcripts are parsed and tokenized to detect intent, dispatching REST calls to system backends." }
        ]
      },
      challenges: [
        {
          title: "Browser Socket Background Throttling",
          detail: "Mobile browsers and background tabs routinely throttled continuous mic sockets, dropping recognition. Resolved by building a Page Visibility heart-beat supervisor that automatically restarts listening contexts in 30ms."
        },
        {
          title: "Word-Ending Pause Latency",
          detail: "Speech engines wait for explicit silent gaps before compiling transcripts. Optimized by intercepting the interimResults stream in real-time, matching intent prior to sentence completion and ensuring low-latency local execution."
        }
      ],
      infrastructure: {
        frontend: "Vercel CDNs (React.js Core)",
        backend: "Local Node.js Daemon (Execution Backplane)",
        database: "Browser IndexedDB (Local command maps)",
        cicd: "GitHub Actions (Automatic build hooks and linters)"
      },
      future: [
        "Transition recognition backend to local ONNX Runtime Whisper models for complete offline privacy.",
        "Create a system-level desktop daemon wrapper enabling macro mappings to local app windows."
      ]
    }
  };

  const activeStudy = project.id === 'insidra' ? caseStudiesData.insidra : caseStudiesData.voca_ai;

  return (
    <AnimatePresence>
      {isOpen && activeStudy && (
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
                  <h3 className="font-outfit text-md font-bold text-zinc-100">{project.title}</h3>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mt-0.5">TECHNICAL STUDY &amp; SYSTEM FLOW</p>
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
              
              {/* Technical Metrics Header */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-lg p-4">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Role</p>
                  <p className="text-xs font-semibold text-zinc-200 mt-1">{project.caseStudy.overview.role}</p>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-lg p-4">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Deployment State</p>
                  <p className="text-xs font-semibold text-emerald-400 mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Live Production
                  </p>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-lg p-4">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Validation Metric</p>
                  <p className="text-xs font-semibold text-zinc-200 mt-1">{project.caseStudy.overview.metric}</p>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-lg p-4">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Duration</p>
                  <p className="text-xs font-semibold text-zinc-200 mt-1">{project.caseStudy.overview.duration}</p>
                </div>
              </div>

              {/* The Problem */}
              <div className="space-y-2">
                <h4 className="font-outfit text-sm font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-wider font-mono">
                  <ShieldAlert className="w-4 h-4 text-indigo-400" />
                  1. Problem Statement
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed pl-4 border-l-2 border-indigo-500/50 py-0.5">
                  {activeStudy.problem}
                </p>
              </div>

              {/* Engineering Approach */}
              <div className="space-y-4">
                <h4 className="font-outfit text-sm font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-wider font-mono">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  2. Engineering Approach &amp; Data Pipeline
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed pl-4 border-l-2 border-indigo-500/50 py-0.5">
                  {activeStudy.approach.architecture}
                </p>
                <div className="space-y-2.5 pt-2">
                  {activeStudy.approach.flow.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start bg-zinc-900/10 border border-zinc-800/60 rounded-lg p-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-950 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 border border-zinc-800">
                        0{idx + 1}
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-zinc-200">{step.title}</h5>
                        <p className="text-[10px] text-zinc-400 mt-0.5 leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Flow Diagram */}
              <div className="space-y-3">
                <h4 className="font-outfit text-sm font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-wider font-mono">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  3. System Architecture Visualization
                </h4>
                
                {/* SVG Render for INSIDRA */}
                {project.id === 'insidra' && (
                  <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-5 flex flex-col items-center justify-center">
                    <svg className="w-full max-w-2xl h-auto" viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="indigoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#818cf8" />
                        </linearGradient>
                        <linearGradient id="zincGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#18181b" />
                          <stop offset="100%" stopColor="#27272a" />
                        </linearGradient>
                      </defs>

                      {/* Step 1: Raw Activity */}
                      <rect x="10" y="55" width="100" height="60" rx="5" fill="url(#zincGrad)" stroke="#27272a" strokeWidth="1"/>
                      <text x="60" y="85" fill="#f4f4f5" fontSize="9" textAnchor="middle" fontWeight="bold">Activity Log Ingest</text>
                      <text x="60" y="98" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="monospace">CLI/SYS LOGS</text>

                      {/* Line 1 */}
                      <path d="M 110 85 L 140 85" stroke="#27272a" strokeWidth="1.5" />
                      <polygon points="140,85 133,81 133,89" fill="#27272a" />

                      {/* Step 2: Vectorizer */}
                      <rect x="150" y="55" width="110" height="60" rx="5" fill="url(#zincGrad)" stroke="#27272a" strokeWidth="1"/>
                      <text x="205" y="85" fill="#f4f4f5" fontSize="9" textAnchor="middle" fontWeight="bold">Feature Vectorizer</text>
                      <text x="205" y="98" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="monospace">FREQUENCY TENSORS</text>

                      {/* Line 2 */}
                      <path d="M 260 85 L 290 85" stroke="#818cf8" strokeWidth="1.5" />
                      <polygon points="290,85 283,81 283,89" fill="#818cf8" />

                      {/* Step 3: TF Autoencoder */}
                      <rect x="300" y="45" width="120" height="80" rx="5" fill="url(#indigoGrad)" stroke="#6366f1" strokeWidth="1"/>
                      <text x="360" y="78" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">Autoencoder Core</text>
                      <text x="360" y="92" fill="#e0e7ff" fontSize="8" textAnchor="middle">TensorFlow Predict</text>
                      <text x="360" y="104" fill="#a5b4fc" fontSize="7" textAnchor="middle" fontFamily="monospace">RECONSTRUCTION LOSS</text>

                      {/* Line 3 */}
                      <path d="M 420 85 L 450 85" stroke="#818cf8" strokeWidth="1.5" />
                      <polygon points="450,85 443,81 443,89" fill="#818cf8" />

                      {/* Step 4: SHAP explainer */}
                      <rect x="460" y="55" width="110" height="60" rx="5" fill="url(#zincGrad)" stroke="#27272a" strokeWidth="1"/>
                      <text x="515" y="85" fill="#f4f4f5" fontSize="9" textAnchor="middle" fontWeight="bold">SHAP Attribution</text>
                      <text x="515" y="98" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="monospace">ATTRIBUTION SCORES</text>

                      {/* Line 4 */}
                      <path d="M 570 85 L 600 85" stroke="#27272a" strokeWidth="1.5" />
                      <polygon points="600,85 593,81 593,89" fill="#27272a" />

                      {/* Step 5: Dashboard */}
                      <rect x="610" y="55" width="80" height="60" rx="5" fill="url(#zincGrad)" stroke="#27272a" strokeWidth="1"/>
                      <text x="650" y="85" fill="#f4f4f5" fontSize="9" textAnchor="middle" fontWeight="bold">React Web UI</text>
                      <text x="650" y="98" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="monospace">ALERT LOGS</text>
                    </svg>
                  </div>
                )}

                {/* SVG Render for Voca AI */}
                {project.id === 'voca-ai' && (
                  <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-5 flex flex-col items-center justify-center">
                    <svg className="w-full max-w-2xl h-auto" viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0891b2" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                        <linearGradient id="zincGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#18181b" />
                          <stop offset="100%" stopColor="#27272a" />
                        </linearGradient>
                      </defs>

                      {/* Step 1: User Voice */}
                      <rect x="10" y="55" width="100" height="60" rx="5" fill="url(#zincGrad)" stroke="#27272a" strokeWidth="1"/>
                      <text x="60" y="85" fill="#f4f4f5" fontSize="9" textAnchor="middle" fontWeight="bold">Mic Capturer</text>
                      <text x="60" y="98" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="monospace">LOCAL INPUT</text>

                      {/* Arrow 1 */}
                      <path d="M 110 85 L 140 85" stroke="#27272a" strokeWidth="1.5" />
                      <polygon points="140,85 133,81 133,89" fill="#27272a" />

                      {/* Step 2: Speech API */}
                      <rect x="150" y="45" width="120" height="80" rx="5" fill="url(#cyanGrad)" stroke="#0891b2" strokeWidth="1"/>
                      <text x="210" y="78" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">Web Speech Core</text>
                      <text x="210" y="92" fill="#ecfeff" fontSize="8" textAnchor="middle">Continuous Recognizer</text>
                      <text x="210" y="104" fill="#ecfeff" fontSize="7" textAnchor="middle" fontFamily="monospace">PAUSE TRANSCRIPTION</text>

                      {/* Arrow 2 */}
                      <path d="M 270 85 L 300 85" stroke="#06b6d4" strokeWidth="1.5" />
                      <polygon points="300,85 293,81 293,89" fill="#06b6d4" />

                      {/* Step 3: Command Router */}
                      <rect x="310" y="55" width="120" height="60" rx="5" fill="url(#zincGrad)" stroke="#27272a" strokeWidth="1"/>
                      <text x="370" y="85" fill="#f4f4f5" fontSize="9" textAnchor="middle" fontWeight="bold">Command Router</text>
                      <text x="370" y="98" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="monospace">KEYWORD MATCHING</text>

                      {/* Arrow 3 */}
                      <path d="M 430 85 L 460 85" stroke="#27272a" strokeWidth="1.5" />
                      <polygon points="460,85 453,81 453,89" fill="#27272a" />

                      {/* Step 4: Execution Node */}
                      <rect x="470" y="55" width="110" height="60" rx="5" fill="url(#zincGrad)" stroke="#27272a" strokeWidth="1"/>
                      <text x="525" y="85" fill="#f4f4f5" fontSize="9" textAnchor="middle" fontWeight="bold">Execution Node</text>
                      <text x="525" y="98" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="monospace">LOCAL DAEMON</text>

                      {/* Arrow 4 */}
                      <path d="M 580 85 L 610 85" stroke="#27272a" strokeWidth="1.5" />
                      <polygon points="610,85 603,81 603,89" fill="#27272a" />

                      {/* Step 5: Action */}
                      <rect x="620" y="55" width="70" height="60" rx="5" fill="url(#zincGrad)" stroke="#27272a" strokeWidth="1"/>
                      <text x="655" y="85" fill="#f4f4f5" fontSize="9" textAnchor="middle" fontWeight="bold">Task Action</text>
                      <text x="655" y="98" fill="#71717a" fontSize="7" textAnchor="middle" fontFamily="monospace">REST RESULT</text>
                    </svg>
                  </div>
                )}
              </div>

              {/* Technical Challenges */}
              <div className="space-y-4">
                <h4 className="font-outfit text-sm font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-wider font-mono">
                  <Activity className="w-4 h-4 text-indigo-400" />
                  4. Real-World Technical Challenges Resolved
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeStudy.challenges.map((chal, idx) => (
                    <div key={idx} className="bg-zinc-900/10 border border-zinc-800/80 rounded-lg p-5 space-y-2">
                      <h5 className="text-xs font-bold text-zinc-200 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        {chal.title}
                      </h5>
                      <p className="text-[10px] text-zinc-400 leading-relaxed">{chal.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Infrastructure Deployment Stack */}
              <div className="space-y-3">
                <h4 className="font-outfit text-sm font-bold text-zinc-100 flex items-center gap-2 uppercase tracking-wider font-mono">
                  <Wrench className="w-4 h-4 text-indigo-400" />
                  5. Infrastructure &amp; Deployment Stack
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 bg-zinc-900/10 border border-zinc-800/80 rounded-lg">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">FRONTEND</span>
                    <span className="text-xs font-bold text-zinc-200 mt-1 block">{activeStudy.infrastructure.frontend}</span>
                  </div>
                  <div className="p-3.5 bg-zinc-900/10 border border-zinc-800/80 rounded-lg">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">BACKEND HOST</span>
                    <span className="text-xs font-bold text-zinc-200 mt-1 block">{activeStudy.infrastructure.backend}</span>
                  </div>
                  <div className="p-3.5 bg-zinc-900/10 border border-zinc-800/80 rounded-lg">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">DATABASE</span>
                    <span className="text-xs font-bold text-zinc-200 mt-1 block">{activeStudy.infrastructure.database}</span>
                  </div>
                  <div className="p-3.5 bg-zinc-900/10 border border-zinc-800/80 rounded-lg">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">CI/CD &amp; QUALITY</span>
                    <span className="text-xs font-bold text-zinc-200 mt-1 block">{activeStudy.infrastructure.cicd}</span>
                  </div>
                </div>
              </div>

              {/* Future Scales */}
              <div className="bg-zinc-900/20 border border-zinc-800 rounded-lg p-5 space-y-3">
                <h4 className="font-outfit text-sm font-bold text-zinc-200 flex items-center gap-2 uppercase tracking-wider font-mono">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  6. Production Scalability Roadmap
                </h4>
                <ul className="space-y-2.5 text-xs text-zinc-400 pl-2">
                  {activeStudy.future.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400/80 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/40 flex items-center justify-end gap-3">
              <Button variant="secondary" onClick={onClose}>
                Close Report
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
