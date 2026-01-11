'use client';

const screenshots = [
  { title: '🎮 Games Section', gradient: 'from-orange-400 to-pink-500' },
  { title: '📚 Learning Hub', gradient: 'from-blue-400 to-purple-500' },
  { title: '🎨 Drawing Canvas', gradient: 'from-green-400 to-teal-500' },
  { title: '🧩 Memory Games', gradient: 'from-purple-400 to-pink-500' },
  { title: '🔢 Math Activities', gradient: 'from-yellow-400 to-orange-500' },
  { title: '🔤 Letter Learning', gradient: 'from-indigo-400 to-blue-500' },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-20 md:py-32 bg-gradient-to-br from-orange-50 to-yellow-100 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-primary-blue font-andika mb-16">
          App Preview
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="min-w-[280px] h-[550px] rounded-3xl shadow-2xl snap-center flex items-center justify-center text-white text-xl font-bold bg-gradient-to-br transition-transform hover:scale-105 duration-300"
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
            >
              <div className={`bg-gradient-to-br ${screenshot.gradient} w-full h-full rounded-3xl flex items-center justify-center p-8 text-center`}>
                {screenshot.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
