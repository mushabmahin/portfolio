import React from 'react';
import { Cpu, Server, Video, BarChart2, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';

export default function Focus() {
  const focusAreas = [
    {
      title: "AI Systems",
      desc: "Deploying ML pipelines, optimizing model inference, and designing high-performance REST APIs.",
      icon: Cpu,
      glow: "indigo"
    },
    {
      title: "Full Stack Apps",
      desc: "Building modular frontends and robust backends with normalized, clean database structures.",
      icon: Server,
      glow: "cyan"
    },
    {
      title: "Computer Vision",
      desc: "Real-time video stream processing, edge intelligence, human detection, and space management.",
      icon: Video,
      glow: "emerald"
    },
    {
      title: "Real-Time ML",
      desc: "Behavioral drift modeling, dynamic anomaly logs, and dynamic risk scoring on time-series inputs.",
      icon: BarChart2,
      glow: "none"
    }
  ];

  const primaryStack = [
    { name: "Python", category: "Core / AI" },
    { name: "JavaScript", category: "Full Stack" },
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Flask", category: "APIs / ML" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Git", category: "Control" }
  ];

  const currentLearning = [
    { title: "Data Structures & Algorithms", detail: "Improving complexity analysis and dynamic programming concepts" },
    { title: "System Design Fundamentals", detail: "Focusing on load balancing, caching, and horizontal scaling patterns" },
    { title: "Deep Learning Optimization", detail: "Quantization, pruning, and low-latency edge deployment methods" },
    { title: "Backend Scalability & Docker", detail: "Containerizing services and managing API gateways" }
  ];

  return (
    <section id="focus" className="py-20 border-t border-zinc-900/60 max-w-6xl mx-auto px-4 md:px-6 relative">
      <SectionHeader
        badge="01 // Specialty Filtering"
        title="What I Focus On"
        subtitle="Pragmatic, growth-minded engineering priorities designed to build production-style systems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Focus Specialties */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <Card key={idx} glowColor={area.glow} className="relative overflow-hidden group">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`p-2 rounded-lg ${
                    area.glow === 'indigo' ? 'bg-indigo-500/10 text-indigo-400' :
                    area.glow === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                    area.glow === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                    'bg-zinc-800 text-zinc-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <h4 className="font-outfit text-sm font-bold text-zinc-100">{area.title}</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {area.desc}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Right Column: Stack & Growth */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Tech Stack I Use Most */}
          <Card hoverable={false} className="border-indigo-500/10 bg-gradient-to-br from-zinc-950 via-zinc-900/40 to-zinc-950">
            <h4 className="font-outfit text-xs font-bold tracking-wider text-indigo-400 uppercase mb-4 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              Tech Stack I Use Most
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {primaryStack.map((tech) => (
                <div key={tech.name} className="flex flex-col justify-center px-3.5 py-2.5 bg-zinc-900/50 border border-zinc-800/80 rounded-lg">
                  <span className="text-xs font-bold text-zinc-200">{tech.name}</span>
                  <span className="text-[9px] font-mono text-zinc-500 tracking-wider uppercase mt-0.5">{tech.category}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Currently Learning */}
          <Card hoverable={false} className="border-cyan-500/10">
            <h4 className="font-outfit text-xs font-bold tracking-wider text-cyan-400 uppercase mb-4 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              Currently Learning
            </h4>
            <div className="space-y-4">
              {currentLearning.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-zinc-200">{item.title}</h5>
                    <p className="text-[10px] text-zinc-400 mt-0.5 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

        </div>

      </div>
    </section>
  );
}
