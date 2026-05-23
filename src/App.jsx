import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Focus from './sections/Focus';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-zinc-300 relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="relative overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* 01 // Specialty Filtering */}
        <Focus />

        {/* 02 // Technical Evidence */}
        <Projects />

        {/* 03 // Capability Inventory */}
        <Skills />

        {/* 04 // Timeline & Credentials */}
        <Experience />

        {/* 05 // Communication Hub */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

export default App;
