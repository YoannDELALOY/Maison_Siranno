import React from 'react';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  return (
    <section
      id={SectionId.HOME}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Blobs Animation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-96 h-96 bg-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-0 right-[-10%] w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Text Content */}
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-gold/20 animate-fade-in">
            <Sparkles size={14} className="text-gold" />
            <span className="text-xs font-semibold tracking-wider uppercase text-charcoal/80">
              Agence Web à Châteauneuf-sur-Loire
            </span>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-slide-up">
            <span className="text-metallic-navy">L'Artisanat</span>
            <br />
            <span className="text-metallic-gold">
              Numérique
            </span>
          </h1>

          <p className="text-lg md:text-xl text-steel font-light leading-relaxed max-w-lg mx-auto md:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Nous ne nous contentons pas de coder. Nous bâtissons des{' '}
            <strong className="text-charcoal font-medium">architectures digitales souveraines</strong>{' '}
            pour les artisans, PME et commerces locaux.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href={`#${SectionId.CONTACT}`}
              className="group relative px-8 py-4 btn-metallic-dark text-white rounded-full overflow-hidden shadow-xl"
            >
              <span className="relative flex items-center gap-2 font-semibold">
                Parler de votre projet <ArrowRight size={18} />
              </span>
            </a>

            <a
              href="tel:+33647344364"
              className="flex items-center gap-2 px-6 py-4 text-charcoal font-medium hover:text-gold transition-colors border border-charcoal/20 rounded-full hover:border-gold/50"
            >
              <Phone size={16} className="text-gold" />
              06 47 34 43 64
            </a>
          </div>
        </div>

        {/* Right: Abstract Visual */}
        <div className="relative h-[480px] w-full hidden md:block animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-80 h-96">

              {/* Carte principale */}
              <div
                className="absolute top-0 right-0 w-64 h-80 rounded-2xl z-20 transform rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl p-6 flex flex-col justify-between border-l-4 border-gold"
                style={{
                  background: 'rgba(255,250,240,0.92)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.75)',
                  borderLeft: '4px solid #C5A059',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.12)'
                }}
              >
                {/* Label Maison Siranno en haut */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-50 to-white flex items-center justify-center shadow-inner border border-gold/30">
                      <img
                        src="/logos/Design sans titre (81).png"
                        alt="MS"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <span className="font-serif text-xs text-metallic-gold-inline tracking-widest uppercase">Maison<br />Siranno</span>
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-safe-green text-xs rounded-full font-medium">En ligne</div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                  <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                </div>
                <div className="font-serif font-bold text-charcoal">
                  <span className="text-3xl text-metallic-gold">+145%</span>
                  <br />
                  <span className="text-sm font-sans text-steel font-normal">Croissance Digitale</span>
                </div>
              </div>

              {/* Carte secondaire */}
              <div className="absolute bottom-4 left-[-20px] w-56 h-64 rounded-2xl z-10 transform -rotate-6 shadow-xl bg-charcoal text-white p-6 border border-white/10">
                <div className="h-full flex flex-col justify-between opacity-90">
                  <Sparkles className="text-gold" />
                  <p className="font-serif italic text-lg leading-snug">
                    "L'IA comme levier de précision absolue."
                  </p>
                  <div className="text-xs text-steel uppercase tracking-widest">Maison Siranno</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
