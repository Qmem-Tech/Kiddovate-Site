'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-blue to-dark-blue text-white py-12 relative z-10">
      <div className="container mx-auto px-4 text-center">
        <div className="text-4xl font-bold font-andika mb-4">🎮 Kiddovate</div>
        <p className="text-lg mb-6 opacity-90">Making learning fun for children everywhere!</p>

        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://www.youtube.com/@kiddovate07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:scale-125 transition-transform duration-300"
            title="YouTube"
          >
            ▶️
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:scale-125 transition-transform duration-300"
            title="Play Store"
          >
            📱
          </a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:scale-125 transition-transform duration-300"
            title="App Store"
          >
            🍎
          </a>
        </div>

        <div className="border-t border-white/20 pt-6 space-y-2">
          <p className="opacity-80">&copy; 2026 Kiddovate. All rights reserved.</p>
          <p className="text-sm opacity-60">Empowering young minds through play and education</p>
        </div>
      </div>
    </footer>
  );
}
