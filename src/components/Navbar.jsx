import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Terminal } from 'lucide-react';
import Button from './Button';

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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Focus', href: '#focus' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-zinc-950/80 border-b border-zinc-800/80 backdrop-blur-md py-3 shadow-md shadow-black/10' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Brand/Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="p-1 bg-indigo-500/10 rounded text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
            <Terminal className="w-4 h-4" />
          </span>
          <span className="font-outfit text-sm font-bold tracking-wider text-zinc-100 group-hover:text-white transition-colors">
            MUSHAB.MAHIN
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-zinc-400 hover:text-zinc-100 uppercase tracking-widest transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/mushabmahin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/mushabmahin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <Button
            variant="secondary"
            className="!py-1.5 !px-3.5 !text-xs font-mono"
            href="/resume.pdf" // Placeholder pointing to printable version or resume resource
            icon={FileText}
          >
            RESUME
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[56px] border-b border-zinc-800 bg-zinc-950 p-4 space-y-4 shadow-xl z-30">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono text-zinc-400 hover:text-zinc-200 uppercase tracking-widest py-2 transition-colors border-b border-zinc-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/mushabmahin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linkedin.com/in/mushabmahin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
            <Button
              variant="secondary"
              className="!py-1.5 !px-3 !text-xs font-mono"
              href="/resume.pdf"
              icon={FileText}
            >
              RESUME
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
