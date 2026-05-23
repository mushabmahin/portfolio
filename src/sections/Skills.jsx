import React from 'react';
import { Code2, Cpu, Wrench, Database, Globe } from 'lucide-react';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      icon: Code2,
      glow: "cyan",
      skills: ["Python", "JavaScript", "R"]
    },
    {
      title: "Frameworks & Backends",
      icon: Globe,
      glow: "indigo",
      skills: ["React.js", "Node.js", "Flask", "Nuxt.js"]
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      glow: "indigo",
      skills: ["TensorFlow", "OpenCV", "Machine Learning", "NLP", "Computer Vision"]
    },
    {
      title: "Databases & APIs",
      icon: Database,
      glow: "emerald",
      skills: ["PostgreSQL", "REST APIs"]
    },
    {
      title: "Tools & Workflows",
      icon: Wrench,
      glow: "none",
      skills: ["Git", "Tailwind CSS"]
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-zinc-900/60 max-w-6xl mx-auto px-4 md:px-6 relative">
      <SectionHeader
        badge="03 // Capability Inventory"
        title="Technical Competencies"
        subtitle="A categorized inventory of languages, frameworks, and machine learning concepts I apply in building practical, production-style systems."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <Card 
              key={idx} 
              glowColor={cat.glow} 
              className="flex flex-col h-full bg-gradient-to-br from-zinc-900/30 to-zinc-900/10"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className={`p-2 rounded-lg ${
                  cat.glow === 'indigo' ? 'bg-indigo-500/10 text-indigo-400' :
                  cat.glow === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                  cat.glow === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                  'bg-zinc-800 text-zinc-400'
                }`}>
                  <Icon className="w-4 h-4" />
                </span>
                <h4 className="font-outfit text-sm font-bold text-zinc-100">{cat.title}</h4>
              </div>

              {/* Skills Inventory Chips */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-900/80 text-zinc-300 font-medium hover:text-zinc-50 hover:bg-zinc-900 transition-colors cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
