import Link from 'next/link';
import { privacyPolicyContent } from '@/lib/privacy-policy-content';

export default function PrivacyPolicyPage() {
  const { title, lastUpdated, sections } = privacyPolicyContent;

  return (
    <div className="min-h-screen font-body" style={{ background: 'linear-gradient(180deg, #FFF8F0 0%, #FFF0E0 100%)' }}>
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ background: 'rgba(255,248,240,0.92)', borderColor: 'rgba(255,107,53,0.15)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF6B35, #FFD23F)' }}>
              <img src="/image/app_logo.png" alt="Kiddovate Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-heading font-bold text-lg" style={{ color: '#2D1B69' }}>Kiddovate</span>
          </Link>
          <Link href="/" className="text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: '#FF6B35' }}>
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <article className="bg-white rounded-3xl shadow-lg p-6 sm:p-10">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl mb-3" style={{ color: '#2D1B69' }}>
            {title}
          </h1>
          <p className="text-sm mb-8 pb-6 border-b" style={{ color: '#6B5B95', borderColor: '#FFD6C0' }}>
            Last updated: {lastUpdated}
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-heading font-bold text-xl mb-3" style={{ color: '#2D1B69' }}>
                  {section.heading}
                </h2>
                <div
                  className="text-base leading-relaxed whitespace-pre-line"
                  style={{ color: '#636E72' }}
                >
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>

      <footer className="py-8 text-center" style={{ color: 'rgba(45,27,105,0.5)' }}>
        <p className="text-sm">© 2026 Kiddovate. All rights reserved.</p>
      </footer>
    </div>
  );
}
