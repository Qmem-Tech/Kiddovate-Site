'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <Hero />
      <Features />
      <Screenshots />
      <Contact />
      <Footer />
      
      {/* Floating Shapes Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] text-7xl opacity-5 animate-float">
          🎨
        </div>
        <div className="absolute top-[60%] left-[80%] text-6xl opacity-5 animate-float-delayed">
          🎮
        </div>
        <div className="absolute top-[80%] left-[20%] text-8xl opacity-5 animate-float-slow">
          📚
        </div>
      </div>
    </main>
  );
}
