import React, { useState } from 'react';
import { ExternalLink, Code, Layers, FileText, ArrowUpRight } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import Card from '../components/Card';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import CaseStudyModal from '../components/CaseStudyModal';

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
        "Implemented real-time anomaly detection with dynamic risk scoring and explainable alerts.",
        "Developed a machine learning system to detect insider threats using behavioral drift analysis."
      ],
      tech: ["Python", "Flask", "TensorFlow", "PostgreSQL", "React.js"],
      githubUrl: "https://github.com/mushabmahin",
      hasCaseStudy: true,
      caseStudy: {
        overview: {
          role: "Lead ML & Backend Developer",
          type: "Security Systems",
          duration: "3 Months",
          metric: "96.4% Threat Recall"
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
        "Built a voice-enabled system for speech-to-text and customizable voice commands.",
        "Enabled hands-free interaction with multi-language support."
      ],
      tech: ["JavaScript", "React.js", "Node.js", "Web Speech API"],
      githubUrl: "https://github.com/mushabmahin",
      hasCaseStudy: true,
      caseStudy: {
        overview: {
          role: "Full Stack Engineer",
          type: "Voice Recognition Engine",
          duration: "2 Months",
          metric: "140ms Local Latency"
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
        "Designed a smart helmet that detects accidents and sends GPS-based alerts.",
        "Integrated an overdrive switch to prevent false alerts within 10 seconds."
      ],
      tech: ["Arduino", "MPU6050 (IMU)", "GPS Neo-7M", "GSM SIM800L"],
      githubUrl: "https://github.com/mushabmahin",
      hasCaseStudy: false
    },
    {
      id: "third-eye",
      title: "THIRD EYE – Smart Energy Management",
      subtitle: "CV CCTV adaptive spatial power optimizer",
      description: "Computer vision-based smart energy management system using CCTV-based human detection.",
      bullets: [
        "Developed a CCTV-based system to detect human presence and automate energy usage.",
        "Designed for real-time monitoring and energy optimization."
      ],
      tech: ["Python", "OpenCV", "Computer Vision", "Real-Time Tracking"],
      githubUrl: "https://github.com/mushabmahin",
      hasCaseStudy: false
    }
  ];

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
            className="flex flex-col h-full relative overflow-hidden"
          >
            {/* Project Header */}
            <div className="flex-1 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-indigo-400/90 tracking-wider uppercase font-semibold">
                    {project.tech[0]} // FEATURED
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
                <h3 className="font-outfit text-md font-bold text-zinc-100 group-hover:text-white">
                  {project.title}
                </h3>
                <p className="text-[11px] font-mono text-zinc-500 italic">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-400 leading-relaxed">
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

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t) => (
                  <span 
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
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
