'use client';

import { useEffect, useRef } from 'react';

const features = [
  {
    icon: '🎮',
    title: 'Interactive Games',
    description: 'Memory games, puzzles, math challenges, science exploration, and word games that make learning exciting!',
    color: 'border-primary-orange',
  },
  {
    icon: '📚',
    title: 'Educational Content',
    description: 'Comprehensive learning modules covering letters, numbers, colors, shapes, animals, and Ethiopian cultural heritage.',
    color: 'border-green-500',
  },
  {
    icon: '🎨',
    title: 'Creative Activities',
    description: 'Drawing canvas, coloring activities, and artistic expression tools to nurture creativity.',
    color: 'border-purple-500',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    description: "Monitor your child's learning journey with detailed progress reports and achievements.",
    color: 'border-pink-500',
  },
  {
    icon: '🔊',
    title: 'Audio Learning',
    description: 'Interactive audio guides, pronunciation help, and engaging sound effects enhance the learning experience.',
    color: 'border-yellow-500',
  },
  {
    icon: '🌍',
    title: 'Cultural Learning',
    description: 'Explore Ethiopian culture, traditional games like Kebero, and learn about endemic animals and heritage.',
    color: 'border-blue-500',
  },
];

export default function Features() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 md:py-32 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-primary-blue font-andika mb-16">
          Amazing Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-4 ${feature.color} opacity-0 translate-y-8`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-7xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-primary-blue font-andika mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
