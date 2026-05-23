import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Brand & Copyright */}
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-zinc-600" />
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            &copy; {currentYear} Mushab Mahin M A. All technical rights reserved.
          </p>
        </div>

        {/* Right Side: Back to Top */}
        <a
          href="#"
          className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 hover:text-zinc-300 uppercase tracking-wider transition-colors"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </a>

      </div>
    </footer>
  );
}
