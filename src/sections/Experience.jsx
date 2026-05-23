import React from 'react';
import { Calendar, Briefcase, GraduationCap, Award, MapPin } from 'lucide-react';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Yallo",
      duration: "01/2023 – 07/2023",
      location: "Remote",
      bullets: [
        "Built responsive UI components using Nuxt.js and Tailwind CSS matching modern visual standards.",
        "Collaborated with UI/UX designers to implement pixel-perfect user-friendly interfaces.",
        "Optimized web application performance, reducing bundle sizes and improving browser paint cycles.",
        "Addressed cross-browser compatibility issues to deliver consistent performance across all platforms."
      ]
    }
  ];

  const education = [
    {
      degree: "BTech in Artificial Intelligence and Data Science",
      institution: "Muthoot Institute of Technology and Science, Kochi",
      duration: "Expected 08/2027",
      metricLabel: "Academic CGPA",
      metricValue: "8.86 / 10",
      details: "Hands-on coursework in machine learning, database systems, computer vision, and structured data structures."
    },
    {
      degree: "Senior Secondary Education (High School)",
      institution: "State Board",
      duration: "Completed 01/2023",
      metricLabel: "Board Score",
      metricValue: "98.4%",
      details: "Ranked among top percentage in high school mathematics, science, and computer studies."
    },
    {
      degree: "Secondary Education",
      institution: "State Board",
      duration: "Completed 01/2021",
      metricLabel: "Board Score",
      metricValue: "100%",
      details: "Perfect score in secondary science, mathematics, and analytical subjects."
    }
  ];

  const certifications = [
    {
      title: "Introduction to Machine Learning",
      issuer: "NPTEL",
      id: "nptel-ml"
    },
    {
      title: "MATLAB Onramp",
      issuer: "MathWorks",
      id: "matlab"
    },
    {
      title: "Statistics Onramp",
      issuer: "MathWorks",
      id: "statistics"
    }
  ];

  return (
    <section id="experience" className="py-20 border-t border-zinc-900/60 max-w-6xl mx-auto px-4 md:px-6 relative">
      <SectionHeader
        badge="04 // Timeline & Credentials"
        title="Experience &amp; Education"
        subtitle="Chronological track record of practical development roles, university research training, and technical credentials."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Work Experience & Certs (7/12 cols) */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Work Experience */}
          <div className="space-y-6">
            <h4 className="font-outfit text-sm font-bold text-zinc-100 flex items-center gap-2 tracking-wide font-mono uppercase">
              <Briefcase className="w-4 h-4 text-indigo-400" />
              Professional Experience
            </h4>
            
            <div className="relative border-l border-zinc-800 pl-6 ml-2 space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-indigo-500 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse-slow"></span>
                  </span>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="font-outfit text-md font-bold text-zinc-100">{exp.role}</h5>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                        {exp.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 pt-2">
                      {exp.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="text-xs text-zinc-400 leading-relaxed flex items-start gap-2">
                          <span className="text-indigo-400/80 mt-1 flex-shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4 pt-4">
            <h4 className="font-outfit text-sm font-bold text-zinc-100 flex items-center gap-2 tracking-wide font-mono uppercase">
              <Award className="w-4 h-4 text-indigo-400" />
              Verified Credentials
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {certifications.map((cert) => (
                <div 
                  key={cert.id} 
                  className="p-4 bg-zinc-900/30 border border-zinc-800/80 rounded-lg hover:border-zinc-700/60 hover:bg-zinc-900/60 transition-all duration-300"
                >
                  <p className="text-xs font-bold text-zinc-200">{cert.title}</p>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase mt-1 tracking-wider">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Education (5/12 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h4 className="font-outfit text-sm font-bold text-zinc-100 flex items-center gap-2 tracking-wide font-mono uppercase">
            <GraduationCap className="w-4.5 h-4.5 text-indigo-400" />
            Education
          </h4>
          
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <Card 
                key={idx} 
                hoverable={true} 
                glowColor={idx === 0 ? 'cyan' : 'none'}
                className="bg-gradient-to-br from-zinc-900/40 via-zinc-900/20 to-zinc-950"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-zinc-100">{edu.degree}</h5>
                      <p className="text-[10px] text-zinc-500 font-mono mt-1">{edu.institution}</p>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-900 px-2 py-0.5 rounded flex-shrink-0">
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    {edu.details}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-zinc-800/40 text-xs">
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider">{edu.metricLabel}</span>
                    <span className="font-outfit font-extrabold text-indigo-400">{edu.metricValue}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
