import React, { useState, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { SectionId } from '../types';
import { homeTestimonials, Testimonial } from '../data/testimonials';

const testimonials = homeTestimonials;

interface TestimonialsProps {
  onOpenProject?: (projectId: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenProject }) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) next();
      else prev();
    }
  };

  return (
    <section id={SectionId.TESTIMONIALS} className="py-24 bg-paper relative overflow-hidden">
      {/* Decorative Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.35
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-2 block">Témoignages</span>
          <h2 className="font-serif text-4xl font-bold text-metallic-navy mb-4">
            Ils nous font{' '}
            <span className="text-metallic-gold underline decoration-gold/30 underline-offset-4">confiance</span>
          </h2>
          <p className="text-steel">Des partenaires locaux qui ont franchi le cap du digital.</p>
        </div>

        {/* Desktop : grille 2 colonnes */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              t={t}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>

        {/* Mobile : swipe unique */}
        <div className="md:hidden">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-400 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full shrink-0 px-1">
                  <TestimonialCard t={t} onOpenProject={onOpenProject} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls mobile */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="hidden sm:flex p-3 rounded-full btn-metallic-dark text-white shadow-lg"
              aria-label="Précédent"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-gold' : 'w-2 bg-gray-300'}`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="hidden sm:flex p-3 rounded-full btn-metallic-dark text-white shadow-lg"
              aria-label="Suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicateur swipe */}
          <p className="text-center text-xs text-steel mt-3 italic">
            Glissez pour naviguer
          </p>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ t: Testimonial; onOpenProject?: (id: string) => void }> = ({ t, onOpenProject }) => (
  <div
    className="glass-card p-8 rounded-2xl flex flex-col relative group hover:border-gold/30 transition-colors cursor-pointer"
    onClick={() => onOpenProject?.(t.projectId)}
    title={`Voir le projet ${t.company}`}
  >
    <div className="absolute top-6 right-8 text-gold/10 group-hover:text-gold/25 transition-colors">
      <Quote size={40} fill="currentColor" />
    </div>

    {/* Indicateur cliquable */}
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ExternalLink size={14} className="text-gold" />
    </div>

    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, idx) => (
        <span key={idx} className="star-metallic-gold inline-flex">
          <Star size={16} fill="#D4AF37" color="#D4AF37" />
        </span>
      ))}
    </div>

    <p className="text-charcoal/80 italic mb-8 flex-grow leading-relaxed relative z-10 text-base">
      "{t.content}"
    </p>

    <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="font-serif font-bold text-charcoal">{t.name}</div>
        <div className="text-xs text-metallic-gold-inline uppercase tracking-wide font-medium">{t.role}, {t.company}</div>
      </div>
    </div>
  </div>
);
