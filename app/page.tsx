'use client';

import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default function Home() {
  useEffect(() => {
    const firebaseConfig = {
     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const mobileToggle = document.getElementById('mobileToggle');
    const mobileClose = document.getElementById('mobileClose');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');

    const openMenu = () => mobileMenu?.classList.add('open');
    const closeMenu = () => mobileMenu?.classList.remove('open');

    mobileToggle?.addEventListener('click', openMenu);
    mobileClose?.addEventListener('click', closeMenu);
    mobileOverlay?.addEventListener('click', closeMenu);
    document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMenu));

    const newsletterForm = document.getElementById('newsletterForm') as HTMLFormElement;
    const parentNameInput = document.getElementById('parent-name') as HTMLInputElement;
    const kidNameInput = document.getElementById('kid-name') as HTMLInputElement;
    const emailInput = document.getElementById('email-input') as HTMLInputElement;
    const formMsg = document.getElementById('formMsg');
    const formError = document.getElementById('formError');

    newsletterForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const parentName = parentNameInput?.value.trim();
      const kidName = kidNameInput?.value.trim();
      const email = emailInput?.value.trim();
      
      if (!parentName || !kidName || !email) {
        if (formError) {
          formError.textContent = "❌ Please fill in all fields!";
          formError.classList.remove('hidden');
          setTimeout(() => formError.classList.add('hidden'), 4000);
        }
        return;
      }
      
      try {
        const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
        await addDoc(collection(db, "website"), {
          parentName: parentName,
          kidName: kidName,
          email: email,
          subscribedAt: serverTimestamp()
        });
        
        if (formMsg) {
          formMsg.textContent = "✅ Welcome to the Kiddovate family!";
          formMsg.classList.remove('hidden');
          setTimeout(() => formMsg.classList.add('hidden'), 5000);
        }
        (newsletterForm as HTMLFormElement).reset();
      } catch (error) {
        console.error("Error adding document: ", error);
        if (formError) {
          formError.textContent = "❌ Error saving. Please try again!";
          formError.classList.remove('hidden');
          setTimeout(() => formError.classList.add('hidden'), 5000);
        }
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    (window as any).openLegalModal = async (documentId: string) => {
      const modal = document.getElementById('legalModal');
      const modalTitle = document.getElementById('modalTitle');
      const modalBody = document.getElementById('modalBody');
      const modalLastUpdated = document.getElementById('modalLastUpdated');
      
      if (modal && modalTitle && modalBody) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        try {
          const docRef = doc(db, "app_legal", documentId);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            modalTitle.innerHTML = data.title || documentId.replace('_', ' ').toUpperCase();
            modalBody.innerHTML = data.body || "Content not available.";
            if (modalLastUpdated) {
              modalLastUpdated.innerHTML = data.last_updated ? `Last updated: ${data.last_updated}` : '';
            }
          } else {
            modalTitle.innerHTML = "Not Found";
            modalBody.innerHTML = "Content not found.";
            if (modalLastUpdated) {
              modalLastUpdated.innerHTML = "";
            }
          }
        } catch (error) {
          console.error("Error fetching legal content:", error);
          modalTitle.innerHTML = "Error";
          modalBody.innerHTML = "Error loading content. Please try again later.";
          if (modalLastUpdated) {
            modalLastUpdated.innerHTML = "";
          }
        }
      }
    };

    (window as any).closeLegalModal = () => {
      const modal = document.getElementById('legalModal');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    };

    window.onclick = (event) => {
      const modal = document.getElementById('legalModal');
      if (event.target === modal) {
        (window as any).closeLegalModal();
      }
    };
  }, []);



  return (
    <div className="h-full font-body overflow-auto">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="cloud absolute top-12" style={{left: '-200px'}}>
          <svg width="160" height="80" viewBox="0 0 160 80" fill="white" opacity="0.5">
            <ellipse cx="80" cy="50" rx="70" ry="28" />
            <ellipse cx="50" cy="38" rx="40" ry="25" />
            <ellipse cx="110" cy="40" rx="35" ry="22" />
          </svg>
        </div>
        <div className="cloud-2 absolute top-32" style={{left: '-300px'}}>
          <svg width="120" height="60" viewBox="0 0 120 60" fill="white" opacity="0.35">
            <ellipse cx="60" cy="38" rx="55" ry="22" />
            <ellipse cx="35" cy="28" rx="30" ry="18" />
            <ellipse cx="85" cy="30" rx="28" ry="17" />
          </svg>
        </div>
      </div>

      <nav id="navbar" className="sticky top-0 z-50 backdrop-blur-md border-b" style={{background: 'rgba(255,248,240,0.92)', borderColor: 'rgba(255,107,53,0.15)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden" style={{background: 'linear-gradient(135deg, #FF6B35, #FFD23F)'}}>
                <img src="/image/app_logo.png" alt="Kiddovate Logo" className="w-full h-full object-cover" />
              </div>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#shows" className="nav-link font-semibold text-sm tracking-wide" style={{color: '#2D1B69'}}>SHOWS</a>
              <a href="#characters" className="nav-link font-semibold text-sm tracking-wide" style={{color: '#2D1B69'}}>CHARACTERS</a>
              <a href="#learn" className="nav-link font-semibold text-sm tracking-wide" style={{color: '#2D1B69'}}>LEARN</a>
              <a href="#app" className="nav-link font-semibold text-sm tracking-wide" style={{color: '#2D1B69'}}>APP</a>
              <a href="#parents" className="nav-link font-semibold text-sm tracking-wide" style={{color: '#2D1B69'}}>PARENTS</a>
              <a href="https://www.youtube.com/@kiddovate07" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full font-bold text-white text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all" style={{background: 'linear-gradient(135deg, #FF6B35, #FF8F65)'}}>Watch Now ▶</a>
            </div>
            <button id="mobileToggle" className="md:hidden p-2 rounded-xl" style={{color: '#FF6B35'}} aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div id="mobileMenu" className="mobile-menu fixed top-0 right-0 z-[60] h-full w-72 shadow-2xl p-6" style={{background: 'linear-gradient(135deg, #FFD23F, #FF6B35)'}}>
        <div className="flex justify-end mb-8">
          <button id="mobileClose" className="p-2 rounded-xl" style={{color: '#FF6B35'}} aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#shows" className="mobile-link font-heading font-bold text-xl py-2" style={{color: '#2D1B69'}}>🎬 Shows</a>
          <a href="#characters" className="mobile-link font-heading font-bold text-xl py-2" style={{color: '#2D1B69'}}>🌟 Characters</a>
          <a href="#learn" className="mobile-link font-heading font-bold text-xl py-2" style={{color: '#2D1B69'}}>📚 Learn</a>
          <a href="#app" className="mobile-link font-heading font-bold text-xl py-2" style={{color: '#2D1B69'}}>📱 App</a>
          <a href="#parents" className="mobile-link font-heading font-bold text-xl py-2" style={{color: '#2D1B69'}}>👨‍👩‍👧 Parents</a>
          <a href="https://www.youtube.com/@kiddovate07" target="_blank" rel="noopener noreferrer" className="mt-4 px-6 py-3 rounded-full font-bold text-white text-center shadow-lg" style={{background: 'linear-gradient(135deg, #FF6B35, #FF8F65)'}}>Watch Free ▶</a>
        </div>
      </div>
      <div id="mobileOverlay" className="fixed inset-0 z-[55] bg-black bg-opacity-30 hidden"></div>

      <header className="relative overflow-hidden" style={{background: 'linear-gradient(180deg, #FFF8F0 0%, #FFF0E0 100%)'}}>
        <div className="hero-clouds absolute inset-0 pointer-events-none z-0">
          <img src="/image/cloud1.png" className="cloud absolute top-8 left-5 w-28 opacity-60" alt="cloud" style={{animationDelay: '0s'}} />
          <img src="/image/cloud2.png" className="cloud-2 absolute top-20 right-10 w-36 opacity-50" alt="cloud" style={{animationDelay: '5s'}} />
        </div>

        <div className="hero-trees absolute bottom-0 left-0 right-0 flex justify-between items-end px-5 pointer-events-none z-5">
          <img src="/image/tree.png" className="tree-sway tree-img" alt="green tree" style={{maxHeight: '170px', marginBottom: '-20px'}} />
          <img src="/image/tree.png" className="tree-sway tree-sway-delayed tree-img" alt="green tree" style={{maxHeight: '165px', marginBottom: '-18px'}} />
          <img src="/image/tree.png" className="tree-sway tree-sway-delayed tree-img" alt="green tree" style={{maxHeight: '165px', marginBottom: '-18px'}} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-heading font-extrabold leading-tight mb-4 bounce-in" style={{color: '#2D1B69', fontSize: 'clamp(2.2rem, 5vw, 4rem)'}}>
                Where Learning Meets<br /><span style={{color: '#FF6B35'}}>Endless Fun!</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 slide-up stagger-2" style={{color: '#6B5B95'}}>
                Join millions of happy kids exploring songs, stories, and adventures with Kiddovate's lovable characters!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start slide-up stagger-3">
                <a href="https://www.youtube.com/@kiddovate07" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-bold text-white text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all pulse-glow" style={{background: 'linear-gradient(135deg, #FF6B35, #FF8F65)'}}>▶ Watch Now</a>
                <a href="#app" className="px-8 py-4 rounded-full font-bold text-lg border-2 hover:scale-105 transition-all" style={{color: '#FF6B35', borderColor: '#FF6B35', background: 'rgba(255,107,53,0.06)'}}>Get the App</a>
              </div>
              <div className="flex gap-6 sm:gap-10 mt-10 justify-center lg:justify-start slide-up stagger-4">
                <div className="text-center">
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl" style={{color: '#FF6B35'}}>50K+</div>
                  <div className="text-sm font-semibold" style={{color: '#6B5B95'}}>Happy Kids</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl" style={{color: '#35CE8D'}}>200+</div>
                  <div className="text-sm font-semibold" style={{color: '#6B5B95'}}>Episodes</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl" style={{color: '#6C5CE7'}}>4.9⭐</div>
                  <div className="text-sm font-semibold" style={{color: '#6B5B95'}}>App Rating</div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative flex justify-center">
              <div className="blob w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center float-anim shadow-2xl" style={{background: 'linear-gradient(135deg, #FFD23F, #FF6B35)'}}>
                <img src="/image/elephant.png" alt="Happy Teddy" className="w-full h-auto mx-auto drop-shadow-2xl transform scale-125 sm:scale-150 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
        <svg className="w-full" viewBox="0 0 1440 100" preserveAspectRatio="none" style={{marginBottom: '-2px'}}>
          <path d="M0,60 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" fill="#ffffff" />
        </svg>
      </header>

      <section id="shows" className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl" style={{color: '#2D1B69'}}>Our Favorite Shows</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div onClick={() => window.open('https://www.youtube.com/@kiddovate07', '_blank')} className="show-card scroll-reveal rounded-3xl overflow-hidden shadow-lg cursor-pointer group" style={{background: '#FFF5EE'}}>
              <div className="relative h-48 sm:h-52 flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, #FF6B35, #FFD23F)'}}>
                <img src="/image/sing-icon.png" alt="background" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white text-xs font-bold shadow z-10" style={{color: '#FF6B35'}}>NEW</div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-xl mb-1" style={{color: '#2D1B69'}}>Sing &amp; Dance</h3>
                <p className="text-sm mb-3" style={{color: '#6B5B95'}}>Catchy songs and dances that make learning ABCs, numbers, and colors super fun!</p>
              </div>
            </div>

            <div onClick={() => window.open('https://www.youtube.com/@kiddovate07', '_blank')} className="show-card scroll-reveal rounded-3xl overflow-hidden shadow-lg cursor-pointer group" style={{background: '#F0F5FF'}}>
              <div className="relative h-48 sm:h-52 flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, #6C5CE7, #A29BFE)'}}>
                <img src="/image/birthday.png" alt="background" className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-xl mb-1" style={{color: '#2D1B69'}}>BirthDay Songs</h3>
                <p className="text-sm mb-3" style={{color: '#6B5B95'}}>Join the party and celebrate a special day filled with cake, candles, and fun!</p>
              </div>
            </div>

            <div onClick={() => window.open('https://www.youtube.com/@kiddovateamharic', '_blank')} className="show-card scroll-reveal rounded-3xl overflow-hidden shadow-lg cursor-pointer group" style={{background: '#F0FFF5'}}>
              <div className="relative h-48 sm:h-52 flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, #35CE8D, #4ECDC4)'}}>
                <img src="/image/animal_friends.png" alt="background" className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-xl mb-1" style={{color: '#2D1B69'}}>Animal Friends</h3>
                <p className="text-sm mb-3" style={{color: '#6B5B95'}}>Meet adorable animals from around the world and discover amazing nature facts!</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="https://www.youtube.com/@kiddovate07" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all" style={{background: 'linear-gradient(135deg, #6C5CE7, #A29BFE)'}}>
              See All Shows →
            </a>
          </div>
        </div>
      </section>

      <section id="characters" className="py-16 sm:py-20 relative overflow-hidden" style={{background: 'linear-gradient(180deg, #FFF0E0, #FFF8F0)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl" style={{color: '#2D1B69'}}>Our Lovable Characters</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
            {[
              { name: 'Kiddo', img: '/image/elephant.png', gradient: 'linear-gradient(135deg, #FFD23F, #FF6B35)' },
              { name: 'Kune', img: '/image/ጩሎ.png', gradient: 'linear-gradient(135deg, #A29BFE, #6C5CE7)' },
              { name: 'Bobi', img: '/image/Bobi.png', gradient: 'linear-gradient(135deg, #4ECDC4, #35CE8D)' },
              { name: 'Jojo', img: '/image/Jojo.png', gradient: 'linear-gradient(135deg, #FF6B85, #FF3366)' },
              { name: 'Lulu', img: '/image/Lulu.png', gradient: 'linear-gradient(135deg, #FFD23F, #FFA726)' },
              { name: 'Fikir', img: '/image/ፍቅር.png', gradient: 'linear-gradient(135deg, #FF9A9E, #FECFEF)' },
              { name: 'Lula', img: '/image/ሉላ.png', gradient: 'linear-gradient(135deg, #84FAB0, #8FD3F4)' },
            ].map((char, idx) => (
              <div key={idx} className="scroll-reveal text-center group cursor-pointer">
                <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full flex items-center justify-center shadow-xl mb-3 group-hover:scale-110 transition-transform overflow-hidden" style={{background: char.gradient}}>
                  <img src={char.img} alt={char.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-heading font-bold text-lg" style={{color: '#2D1B69'}}>{char.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="learn" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl" style={{color: '#2D1B69'}}>Fun Ways to Learn</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { emoji: '🔤', title: 'ABCs & Words', desc: 'Letters, phonics & vocabulary', bg: 'linear-gradient(180deg, #FFF5EE, #FFE8D6)' },
              { emoji: '🔢', title: 'Numbers', desc: 'Counting, shapes & math', bg: 'linear-gradient(180deg, #F0F5FF, #DBEAFE)' },
              { emoji: '🎨', title: 'Colors & Art', desc: 'Creative expression', bg: 'linear-gradient(180deg, #F0FFF5, #D1FAE5)' },
              { emoji: '🤝', title: 'Life Skills', desc: 'Manners, sharing & kindness', bg: 'linear-gradient(180deg, #FFF0F5, #FCE7F3)' },
            ].map((item, idx) => (
              <div key={idx} className="scroll-reveal p-5 sm:p-6 rounded-3xl text-center hover:scale-105 transition-transform cursor-pointer shadow-md" style={{background: item.bg}}>
                <div className="text-4xl sm:text-5xl mb-3">{item.emoji}</div>
                <h3 className="font-heading font-bold text-lg" style={{color: '#2D1B69'}}>{item.title}</h3>
                <p className="text-xs mt-1" style={{color: '#6B5B95'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="app" className="py-16 sm:py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #2D1B69, #4A3494)'}}>
        <div className="bubble w-32 h-32 top-10 left-10 absolute" style={{background: '#FF6B35'}}></div>
        <div className="bubble w-20 h-20 bottom-20 right-20 absolute" style={{background: '#FFD23F', animationDelay: '2s'}}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 flex justify-center app-mockup scroll-reveal">
              <div className="app-mockup-inner w-56 sm:w-64 rounded-[2.5rem] p-3 shadow-2xl" style={{background: 'linear-gradient(135deg, #FF6B35, #FFD23F)'}}>
                <div className="rounded-[2rem] overflow-hidden bg-white" style={{aspectRatio: '9/16'}}>
                  <div className="p-4 h-full flex flex-col">
                    <div className="text-center mb-3">
                      <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-2 overflow-hidden" style={{background: 'linear-gradient(135deg, #FF6B35, #FFD23F)'}}>
                        <img src="/image/app_logo.png" alt="Kiddovate Logo" className="w-full h-full object-cover" />
                      </div>
                      <div className="font-heading font-bold text-sm" style={{color: '#2D1B69'}}>Kiddovate</div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="rounded-xl p-3 flex items-center gap-2" style={{background: '#FFF5EE'}}>
                        <span className="text-xl">🎨</span>
                        <div>
                          <div className="text-xs font-bold" style={{color: '#2D1B69'}}>Drawing Canvas</div>
                        </div>
                      </div>
                      <div className="rounded-xl p-3 flex items-center gap-2" style={{background: '#F0F5FF'}}>
                        <span className="text-xl">🎮</span>
                        <div>
                          <div className="text-xs font-bold" style={{color: '#2D1B69'}}>Fun Games</div>
                          <div className="text-[10px]" style={{color: '#6B5B95'}}>10+ games</div>
                        </div>
                      </div>
                      <div className="rounded-xl p-3 flex items-center gap-2" style={{background: '#F0FFF5'}}>
                        <span className="text-xl">📚</span>
                        <div>
                          <div className="text-xs font-bold" style={{color: '#2D1B69'}}>Learning Time</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 rounded-xl py-2 text-center text-xs font-bold text-white" style={{background: '#FF6B35'}}>▶ Play Now</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left scroll-reveal">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">Download Our App</h2>
              <p className="text-lg mb-8" style={{color: 'rgba(255,255,255,0.8)'}}>Fun learning games, sing-along songs, bedtime stories, and educational activities — all in one safe, ad-free app designed just for kids!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
  <a href="https://www.kiddovate.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white hover:scale-105 transition-transform shadow-lg">
    <svg width="28" height="28" viewBox="0 0 24 24">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="#333" />
    </svg>
    <div className="text-left">
      <div className="text-[10px] font-semibold" style={{color: '#666'}}>Download on the</div>
      <div className="text-base font-bold" style={{color: '#2D1B69'}}>App Store</div>
    </div>
  </a>
  <a href="https://www.kiddovate.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white hover:scale-105 transition-transform shadow-lg">
    <svg width="28" height="28" viewBox="0 0 24 24">
      <path d="M3.61 1.81L13.42 12 3.61 22.19c-.36-.39-.61-.93-.61-1.56V3.37c0-.63.25-1.17.61-1.56zM14.55 13.12l2.66 2.66-8.42 4.78 5.76-7.44zM17.92 10.93l2.29 1.3c.56.32.56 1.23 0 1.54l-2.29 1.3-2.87-2.07 2.87-2.07zM8.79 3.44l8.42 4.78-2.66 2.66-5.76-7.44z" fill="#333" />
    </svg>
    <div className="text-left">
      <div className="text-[10px] font-semibold" style={{color: '#666'}}>Get it on</div>
      <div className="text-base font-bold" style={{color: '#2D1B69'}}>Google Play</div>
    </div>
  </a>
</div>
              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#35CE8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span className="text-sm font-semibold text-white">Kid-Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD23F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  <span className="text-sm font-semibold text-white">No Ads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="parents" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl" style={{color: '#2D1B69'}}>Why Parents Love Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="scroll-reveal p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow" style={{background: '#FFF8F0'}}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow" style={{background: 'linear-gradient(135deg, #35CE8D, #4ECDC4)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2" style={{color: '#2D1B69'}}>100% Safe</h3>
              <p className="text-sm" style={{color: '#6B5B95'}}>COPPA compliant with no ads, in-app purchases, or external links. Your child's safety is our #1 priority.</p>
            </div>
            <div className="scroll-reveal p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow" style={{background: '#FFF8F0'}}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow" style={{background: 'linear-gradient(135deg, #6C5CE7, #A29BFE)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2" style={{color: '#2D1B69'}}>Expert-Designed</h3>
              <p className="text-sm" style={{color: '#6B5B95'}}>Created with child development specialists to support learning milestones for ages 1-7.</p>
            </div>
            <div className="scroll-reveal p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow" style={{background: '#FFF8F0'}}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow" style={{background: 'linear-gradient(135deg, #FF6B35, #FFD23F)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2" style={{color: '#2D1B69'}}>No Ads</h3>
              <p className="text-sm" style={{color: '#6B5B95'}}>100% ad-free experience. Your child enjoys uninterrupted learning without any distractions or inappropriate content.</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="scroll-reveal p-5 rounded-2xl" style={{background: '#F8F5FF'}}>
              <div className="flex items-center gap-1 mb-2" style={{color: '#FFD23F'}}>⭐⭐⭐⭐⭐</div>
              <p className="text-sm italic mb-3" style={{color: '#6B5B95'}}>"My daughter learned her ABCs in just 2 weeks with Kiddovate! She asks for it every day."</p>
              <div className="font-bold text-sm" style={{color: '#2D1B69'}}>— Sarah M., Mom of 3</div>
            </div>
            <div className="scroll-reveal p-5 rounded-2xl" style={{background: '#FFF5EE'}}>
              <div className="flex items-center gap-1 mb-2" style={{color: '#FFD23F'}}>⭐⭐⭐⭐⭐</div>
              <p className="text-sm italic mb-3" style={{color: '#6B5B95'}}>"No ads, no distractions - just pure learning fun! My kids actually ask to learn now!"</p>
              <div className="font-bold text-sm" style={{color: '#2D1B69'}}>— James P., Dad of 2</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 relative overflow-hidden" style={{background: 'linear-gradient(180deg, #FFF0E0, #FFF8F0)'}}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-reveal">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4" style={{color: '#2D1B69'}}>Join the Kiddovate Family!</h2>
          <p className="text-lg mb-8" style={{color: '#6B5B95'}}>Get free coloring pages, new episode alerts, and parenting tips delivered to your inbox!</p>
          <form id="newsletterForm" className="flex flex-col gap-4 max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="text" id="parent-name" placeholder="Parent Name" required className="flex-1 px-6 py-4 rounded-full text-base border-2 focus:outline-none focus:border-[#FF6B35] font-semibold" style={{borderColor: '#FFD6C0', color: '#2D1B69'}} />
              <input type="text" id="kid-name" placeholder="Kid's Name" required className="flex-1 px-6 py-4 rounded-full text-base border-2 focus:outline-none focus:border-[#FF6B35] font-semibold" style={{borderColor: '#FFD6C0', color: '#2D1B69'}} />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" id="email-input" placeholder="Email address" required className="flex-1 px-6 py-4 rounded-full text-base border-2 focus:outline-none focus:border-[#FF6B35] font-semibold" style={{borderColor: '#FFD6C0', color: '#2D1B69'}} />
              <button type="submit" className="px-8 py-4 rounded-full font-bold text-white text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap" style={{background: 'linear-gradient(135deg, #FF6B35, #FF8F65)'}}>Join Family</button>
            </div>
          </form>
          <div id="formMsg" className="mt-4 font-bold text-sm hidden" style={{color: '#35CE8D'}}></div>
          <div id="formError" className="mt-4 font-bold text-sm hidden" style={{color: '#FF6B35'}}></div>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{background: '#2D1B69'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, #FF6B35, #FFD23F)'}}>
                  <img src="/image/app_logo.png" alt="Kiddovate Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-heading font-bold text-xl text-white">Kiddovate</span>
              </div>
              <p className="text-sm" style={{color: 'rgba(255,255,255,0.6)'}}>Making learning magical for kids around the world.</p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white mb-3">EXPLORE</h4>
              <div className="flex flex-col gap-2">
                <a href="#shows" className="text-sm hover:text-white transition-colors" style={{color: 'rgba(255,255,255,0.6)'}}>Shows</a>
                <a href="#characters" className="text-sm hover:text-white transition-colors" style={{color: 'rgba(255,255,255,0.6)'}}>Characters</a>
                <a href="#learn" className="text-sm hover:text-white transition-colors" style={{color: 'rgba(255,255,255,0.6)'}}>Learning</a>
                <a href="#app" className="text-sm hover:text-white transition-colors" style={{color: 'rgba(255,255,255,0.6)'}}>App</a>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white mb-3">COMPANY</h4>
              <div className="flex flex-col gap-2">
                <a href="javascript:void(0)" onClick={() => (window as any).openLegalModal('about_us')} className="text-sm hover:text-white transition-colors" style={{color: 'rgba(255,255,255,0.6)'}}>About Us</a>
                <a href="javascript:void(0)" onClick={() => (window as any).openLegalModal('privacy_policy')} className="text-sm hover:text-white transition-colors" style={{color: 'rgba(255,255,255,0.6)'}}>Privacy Policy</a>
                <a href="javascript:void(0)" onClick={() => (window as any).openLegalModal('terms_of_service')} className="text-sm hover:text-white transition-colors" style={{color: 'rgba(255,255,255,0.6)'}}>Terms of Service</a>
              </div>
            </div>
        <div>
  <h4 className="font-heading font-bold text-sm text-white mb-3">FOLLOW US</h4>
  <div className="flex gap-3">
    <a href="https://www.youtube.com/@kiddovate07" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform" style={{background: 'rgba(255,255,255,0.1)'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    </a>
    <a href="https://www.youtube.com/@kiddovateamharic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform" style={{background: 'rgba(255,255,255,0.1)'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    </a>
    <a href="https://www.instagram.com/kiddovate07/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform" style={{background: 'rgba(255,255,255,0.1)'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </a>
    <a href="https://www.tiktok.com/@kiddovate" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform" style={{background: 'rgba(255,255,255,0.1)'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
      </svg>
    </a>
    <a href="https://www.tiktok.com/@kiddovate.amharic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform" style={{background: 'rgba(255,255,255,0.1)'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
      </svg>
    </a>
  </div>
</div>
          </div>
          <div className="border-t pt-6 text-center" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
            <p className="text-sm" style={{color: 'rgba(255,255,255,0.5)'}}>© 2026 Kiddovate. All rights reserved. Made with ❤️ for kids everywhere.</p>
          </div>
        </div>
      </footer>

      <div id="legalModal" className="fixed inset-0 z-[100] hidden overflow-y-auto" style={{background: 'rgba(0,0,0,0.7)'}}>
        <div className="relative max-w-2xl mx-auto mt-20 mb-20 p-6 bg-white rounded-2xl shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 id="modalTitle" className="font-heading font-bold text-2xl" style={{color: '#2D1B69'}}>Loading...</h2>
            <button onClick={() => (window as any).closeLegalModal()} className="text-gray-500 hover:text-gray-700 text-3xl">&times;</button>
          </div>
          <div id="modalBody" className="text-sm text-gray-600 max-h-96 overflow-y-auto whitespace-pre-line">Loading...</div>
          <div className="mt-4 pt-3 border-t border-gray-200">
            <p id="modalLastUpdated" className="text-xs text-gray-400"></p>
          </div>
        </div>
      </div>
    </div>
  );
}