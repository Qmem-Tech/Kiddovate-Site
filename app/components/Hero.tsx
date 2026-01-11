'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-primary-blue to-light-blue flex items-center pt-20 relative overflow-hidden"
    >
      {/* Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-white space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold font-andika leading-tight">
              Learn Through Play!
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed animate-fade-in-up-delay-1">
              Discover the joy of learning with Kiddovate - an educational gaming app designed to make learning fun and engaging for children. Explore games, interactive lessons, and creative activities!
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-blue font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span className="text-2xl">📱</span>
                Download on Play Store
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-blue font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span className="text-2xl">🍎</span>
                Download on App Store
              </a>
            </div>

            {/* YouTube Button */}
            <a
              href="https://www.youtube.com/@kiddovate07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-red-700 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up-delay-3"
            >
              <span className="text-2xl">▶️</span>
              Watch on YouTube
            </a>
          </div>

          {/* Phone Mockup */}
          <div className="relative animate-float">
            <div className="w-full max-w-md mx-auto bg-gradient-to-br from-primary-orange to-purple-500 rounded-[3rem] p-6 shadow-2xl">
              <div className="bg-black/80 w-20 h-6 rounded-full absolute top-8 left-1/2 transform -translate-x-1/2"></div>
              <div className="bg-white/10 rounded-[2.5rem] h-[600px] flex flex-col items-center justify-center text-white text-center space-y-6 p-8">
                <div className="space-y-4 text-2xl font-andika">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">🎮</span>
                    <span>Games</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">📚</span>
                    <span>Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">🎨</span>
                    <span>Coloring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
