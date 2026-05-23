import React, { useState } from 'react';
import { ExternalLink, Code, Layers, FileText, ArrowUpRight, Cpu, Server, Terminal, Shield } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import CaseStudyModal from '../components/CaseStudyModal';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsData = [
    {
      id: "insidra",
      title: "INSIDRA – AI Insider Threat Detection",
      subtitle: "Machine learning behavioral drift analysis system",
      description: "Machine learning system for insider threat detection using behavioral drift analysis, real-time anomaly detection, explainable AI alerts, and dynamic risk scoring.",
      bullets: [
        "Analyzes raw command strings and system log events to map user behavioral baselines.",
        "Computes explainable anomaly risk scoring for real-time user-specific alerts."
      ],
      tech: ["Python", "Flask", "TensorFlow", "PostgreSQL", "React.js"],
      infra: ["Railway", "Vercel", "Supabase", "GitHub Actions"],
      githubUrl: "https://github.com/mushabmahin",
      hasCaseStudy: true,
      caseStudy: {
        overview: {
          role: "Lead ML & Backend Developer",
          type: "Security Systems",
          duration: "3 Months",
          metric: "High Anomaly Recall"
        },
        problem: "Insider threats are harder to discover than exterior hacks because normal system users are performing the acts, but their behavior displays subtle anomalies (drift) from typical patterns. Traditional rule-based security systems fail to detect these slowly evolving drifts.",
        dataset: "Trained on user command execution history and file access logs, structured as daily sequence vectors, normalized for user-specific baselines to prevent alert fatigue.",
        pipeline: [
          { title: "Log Preprocessing", description: "Standardizing raw operating logs into activity frequency vectors mapped by user and timestamp." },
          { title: "Autoencoder Training", description: "Using TensorFlow to train deep Autoencoders representing 'normal behavior' profiles for individual users." },
          { title: "Real-time Inference", description: "Deploying the models via Flask, computing reconstruction loss as the anomaly risk score." },
          { title: "Explainable Attribution", description: "Integrating SHAP explainer to calculate exact contributions of each feature to the alert score, preventing blind alerts." }
        ],
        challenge: {
          problem: "High rate of false positives due to normal variance in human schedules (alert fatigue for admins).",
          solution: "Implemented user-specific behavioral baselines and a 3-day temporal decay weight, smoothing sudden one-off variances."
        },
        future: [
          "Scale the ingestion pipeline using Apache Kafka for high-throughput stream processing.",
          "Implement Federated Learning to train user profiles privately on edge devices."
        ]
      }
    },
    {
      id: "voca-ai",
      title: "Voca AI – Voice Recognition Command System",
      subtitle: "Hands-free continuous voice execution engine",
      description: "Speech recognition and customizable voice-command platform with multilingual support and hands-free interaction.",
      bullets: [
        "Performs client-side local voice recognition mapping to structural command JSON.",
        "Executes server actions locally with low-latency and resource consumption."
      ],
      tech: ["JavaScript", "React.js", "Node.js", "Web Speech API"],
      infra: ["Vercel", "Local Node", "Web Speech Core"],
      githubUrl: "https://github.com/mushabmahin",
      hasCaseStudy: true,
      caseStudy: {
        overview: {
          role: "Full Stack Engineer",
          type: "Voice Recognition Engine",
          duration: "2 Months",
          metric: "Low Local Latency"
        },
        problem: "Traditional voice control applications require heavy cloud connections, resulting in significant latency, data privacy concerns, and difficult command customization.",
        dataset: "Continuous audio streams captured via browser mic, processed client-side through the Web Speech API's Web Speech Recognition engine.",
        pipeline: [
          { title: "Mic stream capture", description: "Managing continuous audio hooks and buffering with noise filtration handlers." },
          { title: "Speech Recognition", description: "Mapping audio to local text streams using the Web Speech API with multilingual localizations." },
          { title: "Command Parsing", description: "Processing text outputs with structured RegExp and word maps in a React state manager." },
          { title: "Action Dispatching", description: "Dispatching API calls and command actions locally to Node.js backend nodes to trigger system processes." }
        ],
        challenge: {
          problem: "Handling network hiccups and browser context changes without dropping the continuous speech listening socket.",
          solution: "Created an automatic socket supervisor that reconnects and synchronizes listeners when page focus is restored."
        },
        future: [
          "Transition from Web Speech API to local ONNX-runtime Whisper models for complete offline privacy.",
          "Create an easy browser extension to map custom keyboard macros directly to speech."
        ]
      }
    },
    {
      id: "smart-helmet",
      title: "Smart Helmet Accident Detection System",
      subtitle: "Embedded hardware safety alerting node",
      description: "Smart helmet system with accident detection and GPS-based emergency alerting.",
      bullets: [
        "Processes real-time G-force thresholds via MPU6050 accelerometer sensor.",
        "Triggers immediate cellular emergency notification with accurate GPS maps."
      ],
      tech: ["Arduino C++", "MPU6050 (IMU)", "GPS Neo-7M", "GSM SIM800L"],
      infra: ["Embedded Circuit", "Cellular Network", "GPS Satellites"],
      githubUrl: "https://github.com/mushabmahin",
      hasCaseStudy: false
    },
    {
      id: "third-eye",
      title: "THIRD EYE – Smart Energy Management",
      subtitle: "CV CCTV adaptive spatial power optimizer",
      description: "Computer vision-based smart energy management system using CCTV-based human detection.",
      bullets: [
        "Analyzes real-time spatial video frames to verify presence in active grids.",
        "Automates relay switches to dynamically optimize spatial power consumption."
      ],
      tech: ["Python", "OpenCV", "Computer Vision", "Real-Time Tracking"],
      infra: ["Local Edge Engine", "CCTV Stream Ingest", "Hardware Relays"],
      githubUrl: "https://github.com/mushabmahin",
      hasCaseStudy: false
    }
  ];

  // Renders premium inline SVG mockups representing real technical proof
  const renderVisualPreview = (id) => {
    switch (id) {
      case 'insidra':
        return (
          <div className="w-full h-32 bg-zinc-950 border border-zinc-800/80 rounded-lg overflow-hidden flex flex-col justify-between p-3 relative font-mono text-[9px]">
            {/* Header */}
            <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-900 pb-1.5">
              <span className="flex items-center gap-1.5 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> 
                INSIDRA // ANOMALY DETECTOR
              </span>
              <span className="text-zinc-650 text-[8px]">INGRESS: ACTIVE</span>
            </div>
            {/* Center SVG Chart */}
            <div className="flex-1 flex items-center justify-center py-1">
              <svg className="w-full h-12" viewBox="0 0 300 50">
                <line x1="0" y1="10" x2="300" y2="10" stroke="#18181b" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="0" y1="25" x2="300" y2="25" stroke="#18181b" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="0" y1="40" x2="300" y2="40" stroke="#18181b" strokeWidth="1" strokeDasharray="3,3" />
                
                {/* Graph Path */}
                <path d="M 0 45 L 30 43 L 60 44 L 90 42 L 120 40 L 150 15 L 180 8 L 210 38 L 240 43 L 270 42 L 300 45" fill="none" stroke="#6366f1" strokeWidth="1.5" />
                <path d="M 0 45 L 30 43 L 60 44 L 90 42 L 120 40 L 150 15 L 180 8 L 210 38 L 240 43 L 270 42 L 300 45 L 300 50 L 0 50 Z" fill="url(#indigoSpikeGrad)" opacity="0.08" />
                
                {/* Alert Indicator */}
                <circle cx="180" cy="8" r="3" fill="#ef4444" />
                <line x1="180" y1="8" x2="180" y2="45" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
              </svg>
              <defs>
                <linearGradient id="indigoSpikeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </div>
            {/* Footer Info */}
            <div className="flex items-center justify-between text-zinc-500 border-t border-zinc-900 pt-1.5 text-[8px] tracking-wide">
              <span className="text-red-400 font-bold">● ANOMALY ALERT DISPATCHED</span>
              <span className="font-semibold text-zinc-400">RISK SCORE: 94.6%</span>
            </div>
          </div>
        );
      case 'voca-ai':
        return (
          <div className="w-full h-32 bg-zinc-950 border border-zinc-800/80 rounded-lg overflow-hidden flex flex-col p-3 font-mono text-[8px] leading-relaxed relative">
            {/* Header */}
            <div className="flex items-center gap-1.5 pb-2 border-b border-zinc-900 mb-2">
              <span className="w-2.5 h-2.5 rounded bg-zinc-900 flex items-center justify-center text-[7px] text-zinc-500 font-bold border border-zinc-800">C:\</span>
              <span className="text-zinc-400 font-bold">VOCA // LOG TERMINAL</span>
            </div>
            {/* Log Lines */}
            <div className="flex-1 space-y-1 text-zinc-500">
              <p><span className="text-zinc-700">[sys-init]</span> WebSpeechRecognition listener enabled (en-US, ml-IN)</p>
              <p><span className="text-zinc-700">[mic-stream]</span> status: listening (continuous buffer active)</p>
              <p className="text-cyan-400"><span className="text-zinc-700">[parser]</span> transcription: "execute deploy --production"</p>
              <p className="text-zinc-300"><span className="text-emerald-500 font-bold">[execute]</span> disspatched API webhook ➔ Render cluster (low latency)</p>
            </div>
            <span className="absolute bottom-1 right-2 text-[7px] text-zinc-700">SHELL SIMULATION</span>
          </div>
        );
      case 'smart-helmet':
        return (
          <div className="w-full h-32 bg-zinc-950 border border-zinc-800/80 rounded-lg overflow-hidden flex items-center justify-center p-3 relative font-mono text-[8px]">
            <svg className="w-full h-full max-w-[280px]" viewBox="0 0 280 100">
              {/* Controller Block */}
              <rect x="110" y="30" width="60" height="40" rx="3" fill="#121214" stroke="#27272a" strokeWidth="1" />
              <text x="140" y="53" fill="#f4f4f5" fontSize="8" textAnchor="middle" fontWeight="bold">ATMEL CHIP</text>
              
              {/* Input Sensor 1: MPU6050 */}
              <rect x="10" y="10" width="60" height="25" rx="3" fill="#121214" stroke="#27272a" strokeWidth="1" />
              <text x="40" y="25" fill="#a1a1aa" fontSize="7" textAnchor="middle">MPU6050 (IMU)</text>
              <path d="M 70 22 L 110 40" stroke="#6366f1" strokeWidth="1" strokeDasharray="2,2" />
              
              {/* Input Sensor 2: GPS */}
              <rect x="10" y="65" width="60" height="25" rx="3" fill="#121214" stroke="#27272a" strokeWidth="1" />
              <text x="40" y="80" fill="#a1a1aa" fontSize="7" textAnchor="middle">GPS NEO-7M</text>
              <path d="M 70 77 L 110 60" stroke="#6366f1" strokeWidth="1" strokeDasharray="2,2" />

              {/* Output Node: GSM SIM800L */}
              <rect x="210" y="37.5" width="60" height="25" rx="3" fill="#121214" stroke="#27272a" strokeWidth="1" />
              <text x="240" y="52" fill="#ef4444" fontSize="7" textAnchor="middle" fontWeight="bold">SIM800L (GSM)</text>
              <path d="M 170 50 L 210 50" stroke="#10b981" strokeWidth="1" />
            </svg>
            <span className="absolute bottom-1 right-2 text-[7px] text-zinc-700">IoT HARDWARE BUS SCHEMATIC</span>
          </div>
        );
      case 'third-eye':
        return (
          <div className="w-full h-32 bg-zinc-950 border border-zinc-800/80 rounded-lg overflow-hidden flex flex-col p-2 font-mono text-[8px] relative">
            {/* CCTV grid layout */}
            <div className="flex-1 grid grid-cols-2 gap-1.5">
              {/* Frame 1 */}
              <div className="bg-zinc-900/40 border border-zinc-800/80 rounded p-1 flex flex-col justify-between relative overflow-hidden">
                <span className="text-zinc-600 text-[6px]">CCTV_01 // SEC_GRID_A</span>
                <div className="flex-1 flex items-center justify-center">
                  <div className="border border-emerald-500/50 bg-emerald-500/5 text-emerald-400 text-[6px] px-1 py-0.5 rounded flex flex-col items-center">
                    <span>HUMAN DETECTED</span>
                    <span>BOUNDING: YES</span>
                  </div>
                </div>
                <span className="text-[6px] text-emerald-400 font-bold self-end">OCCUPANCY: 1</span>
              </div>
              {/* Frame 2 */}
              <div className="bg-zinc-900/10 border border-zinc-800/40 rounded p-1 flex flex-col justify-between">
                <span className="text-zinc-700 text-[6px]">CCTV_02 // SEC_GRID_B</span>
                <div className="flex-1 flex items-center justify-center text-zinc-700 text-[6px]">
                  EMPTY GRID
                </div>
                <span className="text-[6px] text-zinc-600 self-end">STATE: COLD SLEEP</span>
              </div>
            </div>
            <span className="absolute bottom-1 right-2 text-[7px] text-zinc-700">CCTV FEED ANALYTICS</span>
          </div>
        );
      default:
        return null;
    }
  };

  const handleOpenCaseStudy = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 border-t border-zinc-900/60 max-w-6xl mx-auto px-4 md:px-6 relative">
      <SectionHeader
        badge="02 // Technical Evidence"
        title="Featured Systems"
        subtitle="Real-world engineering projects deployed and built to solve actual constraints, detailing technical trade-offs, pipeline diagrams, and metrics."
      />

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <Card 
            key={project.id}
            glowColor={project.hasCaseStudy ? 'indigo' : 'none'}
            className="flex flex-col h-full relative overflow-hidden glass-panel-hover"
          >
            {/* Project Header */}
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-indigo-400/90 tracking-wider uppercase font-semibold">
                    {project.tech[0]} // FEATURED SYSTEM
                  </span>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded text-zinc-500 hover:text-zinc-200 transition-colors"
                        title="GitHub Repo"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-outfit text-md sm:text-lg font-bold text-zinc-100 group-hover:text-white">
                  {project.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 italic">
                  {project.subtitle}
                </p>
              </div>

              {/* Technical Visual Proof Mockups (Responsive Vector Previews) */}
              <div className="pt-1">
                {renderVisualPreview(project.id)}
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                {project.description}
              </p>

              {/* Outcomes Checklist */}
              <ul className="space-y-2 border-l border-zinc-800 pl-4 py-1">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Infrastructure Tags */}
              <div className="space-y-1.5 pt-2">
                <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">DEPLOYMENT INFRASTRUCTURE</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.infra.map((inf) => (
                    <span 
                      key={inf}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-cyan-400/90 font-medium"
                    >
                      {inf}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="space-y-1.5 pt-1">
                <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">STACK KEYWORDS</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-850 text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between gap-3">
              {project.hasCaseStudy ? (
                <Button
                  variant="primary"
                  className="w-full !py-2 !text-xs font-semibold"
                  onClick={() => handleOpenCaseStudy(project)}
                  icon={ArrowUpRight}
                >
                  View Case Study
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  className="w-full !py-2 !text-xs font-mono font-medium"
                  href={project.githubUrl}
                  icon={Github}
                >
                  VIEW CODEBASE
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* High-fidelity Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}
