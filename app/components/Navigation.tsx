'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-orange shadow-lg' : 'bg-gradient-to-r from-primary-orange to-yellow-400'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold text-white drop-shadow-lg font-andika">
            🎮 Kiddovate
          </div>
          <ul className="hidden md:flex gap-8">
            {['Home', 'Features', 'Screenshots', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white font-semibold hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button className="md:hidden text-white text-2xl">☰</button>
        </div>
      </nav>
    </header>
  );
}
