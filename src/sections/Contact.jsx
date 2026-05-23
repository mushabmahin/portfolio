import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, ExternalLink, Phone } from 'lucide-react';

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

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
import Card from '../components/Card';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const emailAddress = "mushabmahin777@gmail.com";
  const phoneNumber = "9995681865";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('sending');
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-900/60 max-w-6xl mx-auto px-4 md:px-6 relative">
      <SectionHeader
        badge="05 // Communication Hub"
        title="Get In Touch"
        subtitle="Open to software engineering, machine learning, and artificial intelligence internships or full-time roles."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Direct info & Quick Copy (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          <div className="space-y-6">
            <h4 className="font-outfit text-sm font-bold text-zinc-100 uppercase tracking-wider font-mono">
              Direct Communication
            </h4>

            {/* Email Copy Card */}
            <Card hoverable={false} className="border-indigo-500/10 bg-zinc-900/10">
              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Mail className="w-4 h-4" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Recruiter Hotline</p>
                  <p className="text-xs sm:text-sm font-bold text-zinc-200 truncate mt-0.5">{emailAddress}</p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-all flex items-center justify-center flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </Card>

            {/* Phone Copy Card */}
            <Card hoverable={false} className="border-cyan-500/10 bg-zinc-900/10">
              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Phone className="w-4 h-4" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Voice Vector</p>
                  <p className="text-xs sm:text-sm font-bold text-zinc-200 truncate mt-0.5">+91 {phoneNumber}</p>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-all flex items-center justify-center flex-shrink-0"
                  title="Copy phone number to clipboard"
                  type="button"
                >
                  {phoneCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </Card>

            {/* Location Card */}
            <Card hoverable={false} className="border-zinc-800 bg-zinc-900/10">
              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-zinc-800 rounded-lg text-zinc-400">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Geographic Base</p>
                  <p className="text-xs sm:text-sm font-bold text-zinc-200 mt-0.5">Ernakulam, Kerala, India</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Social Profiles Grid */}
          <div className="space-y-4 pt-6 border-t border-zinc-900/60">
            <h5 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">External Vectors</h5>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/mushabmahin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Github className="w-4.5 h-4.5" />
                <span>GITHUB</span>
                <ExternalLink className="w-3 h-3 text-zinc-600" />
              </a>
              <span className="text-zinc-800">•</span>
              <a
                href="https://linkedin.com/in/mushabmahin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Linkedin className="w-4.5 h-4.5" />
                <span>LINKEDIN</span>
                <ExternalLink className="w-3 h-3 text-zinc-600" />
              </a>
              <span className="text-zinc-800">•</span>
              <a
                href="https://www.instagram.com/_mushb_mahin?utm_source=qr&igsh=MXY1ZmVuNjdjMngybg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Instagram className="w-4.5 h-4.5" />
                <span>INSTAGRAM</span>
                <ExternalLink className="w-3 h-3 text-zinc-600" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <Card hoverable={false} className="lg:col-span-7 flex flex-col justify-between border-zinc-800 bg-zinc-900/20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h4 className="font-outfit text-sm font-bold text-zinc-100 uppercase tracking-wider font-mono mb-2">
              Send a Secure Message
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formState.name}
                  onChange={handleInputChange}
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full bg-zinc-950 border border-zinc-800/80 rounded-lg px-3.5 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/20 disabled:opacity-50 transition-all"
                />
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. sarah.jenkins@company.com"
                  value={formState.email}
                  onChange={handleInputChange}
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full bg-zinc-950 border border-zinc-800/80 rounded-lg px-3.5 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/20 disabled:opacity-50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                placeholder="Briefly state project requirements or internship details..."
                value={formState.message}
                onChange={handleInputChange}
                disabled={status === 'sending' || status === 'success'}
                className="w-full bg-zinc-950 border border-zinc-800/80 rounded-lg px-3.5 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/20 disabled:opacity-50 transition-all resize-none"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                disabled={status === 'sending' || status === 'success' || !formState.name || !formState.email || !formState.message}
                className="w-full sm:w-auto font-semibold flex items-center justify-center gap-2 !py-2.5"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>SENDING VECTOR...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>MESSAGE TRANSMITTED SUCCESSFULY</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>DISPATCH MESSAGE</span>
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>

      </div>
    </section>
  );
}
