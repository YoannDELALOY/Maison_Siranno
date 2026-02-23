import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, Quote, Phone, Mail, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Star, X, ClipboardList } from 'lucide-react';
import { ServiceData } from './Services';
import { allTestimonials } from '../data/testimonials';
import { projectsData } from '../data/projects';

interface ServiceDetailPageProps {
  service: ServiceData;
  onBack: () => void;
  onGoToContact: () => void;
}

/* ─── Styles de texture ─── */
const darkTextureStyle: React.CSSProperties = {
  backgroundColor: '#0F172A',
  backgroundImage: [
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='lg1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23lg1)' opacity='0.55'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='lg2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23lg2)' opacity='0.28'/%3E%3C/svg%3E")`,
  ].join(', '),
  backgroundSize: '600px 600px, 200px 200px',
  backgroundBlendMode: 'overlay, screen',
};

const lightTextureStyle: React.CSSProperties = {
  backgroundColor: '#FAF6EE',
  backgroundImage: [
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 700 700' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pg3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.32' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pg3)' opacity='0.38'/%3E%3C/svg%3E")`,
    `radial-gradient(ellipse at 12% 18%, rgba(185,145,65,0.1) 0%, transparent 48%)`,
    `radial-gradient(ellipse at 80% 72%, rgba(160,120,45,0.08) 0%, transparent 42%)`,
    `radial-gradient(ellipse at 50% 90%, rgba(175,140,55,0.07) 0%, transparent 38%)`,
  ].join(', '),
  backgroundSize: '700px 700px, 100% 100%, 100% 100%, 100% 100%',
  backgroundBlendMode: 'multiply, normal, normal, normal',
};

/* ─── Wobble pré-calculé ─── */
const CARD_WOBBLES = [
  { x: 2, y: -3 }, { x: -2, y: 4 }, { x: 3, y: 2 },
  { x: -3, y: -2 }, { x: 2, y: 3 }, { x: -1, y: -4 }, { x: 3, y: -1 },
];

/* ─── Texture livre bleu (identique section contact) ─── */
const bookBlueStyle: React.CSSProperties = {
  backgroundColor: '#0F172A',
  backgroundImage: [
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='bm1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23bm1)' opacity='0.55'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='bm2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23bm2)' opacity='0.28'/%3E%3C/svg%3E")`,
  ].join(', '),
  backgroundSize: '600px 600px, 200px 200px',
  backgroundBlendMode: 'overlay, screen',
};

/* ─── Modal détail étape ─── */
interface StepModalProps {
  step: { title: string; description: string; detailedDescription?: string[]; clientRequirements?: string[]; agencyWork?: string[] };
  index: number;
  onClose: () => void;
}

const StepModal: React.FC<StepModalProps> = ({ step, index, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6"
      style={{ background: 'rgba(4,17,31,0.80)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
        style={{
          ...bookBlueStyle,
          boxShadow: '0 32px 80px rgba(4,17,31,0.8), inset 0 1px 0 rgba(212,175,55,0.25), inset -1px 0 0 rgba(255,255,255,0.04)',
          border: '1px solid rgba(212,175,55,0.18)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Ligne de reliure dorée haute */}
        <div className="absolute top-0 left-0 w-full h-px pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, transparent 5%, rgba(212,175,55,0.55) 30%, rgba(212,175,55,0.55) 70%, transparent 95%)' }}
        />
        {/* Bord gauche — courbure page */}
        <div className="absolute top-0 left-0 bottom-0 w-14 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 40%, transparent 100%)' }}
        />
        {/* Halo bleu coin haut-droit */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(100,160,255,0.08) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
        />

        {/* Bouton fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 hover:border-gold/60 hover:text-gold hover:bg-gold/10 z-20"
          style={{ borderColor: 'rgba(212,175,55,0.3)', color: 'rgba(255,255,255,0.45)' }}
          aria-label="Fermer"
        >
          <X size={14} />
        </button>

        <div className="relative z-10 p-8 md:p-10">
          {/* Numéro + titre */}
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-bold font-serif shrink-0"
              style={{ borderColor: 'rgba(212,175,55,0.65)', background: 'rgba(212,175,55,0.1)', color: '#D4AF37' }}
            >
              {index + 1}
            </span>
            <div>
              <p className="text-[11px] text-gold/60 uppercase tracking-widest font-medium mb-0.5">Étape {index + 1}</p>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white leading-tight">{step.title}</h3>
            </div>
          </div>

          {/* Description courte */}
          <p className="text-gray-400 text-sm leading-relaxed mb-6 pl-16">{step.description}</p>

          {/* Texte descriptif détaillé — 2 paragraphes */}
          {step.detailedDescription && step.detailedDescription.length > 0 && (
            <div className="mb-8 border-b pb-8" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              {step.detailedDescription.map((para, i) => (
                <p key={i} className={`text-gray-300 leading-relaxed text-[15px]${i < step.detailedDescription!.length - 1 ? ' mb-4' : ''}`}>
                  {para.split(/\*\*(.*?)\*\*/g).map((part, j) =>
                    j % 2 === 1
                      ? <strong key={j} className="text-metallic-gold font-bold" style={{ textShadow: 'none' }}>{part}</strong>
                      : part
                  )}
                </p>
              ))}
            </div>
          )}

          {/* Séparateur si pas encore de detailedDescription */}
          {(!step.detailedDescription || step.detailedDescription.length === 0) && (
            <div className="border-b mb-8" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
          )}

          {/* Deux colonnes : ce que nous ferons / ce qu'on vous demande */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Colonne gauche — Ce que nous ferons */}
            {step.agencyWork && step.agencyWork.length > 0 && (
              <div className="rounded-xl p-5" style={{ background: 'rgba(100,160,255,0.06)', border: '1px solid rgba(100,160,255,0.12)' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(100,160,255,0.15)', border: '1px solid rgba(100,160,255,0.25)' }}>
                    <CheckCircle2 size={13} className="text-blue-300" />
                  </div>
                  <p className="font-semibold text-blue-200 text-xs tracking-widest uppercase">Ce que nous ferons</p>
                </div>
                <ul className="space-y-3">
                  {step.agencyWork.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-2 w-1 h-1 rounded-full bg-blue-400/60 shrink-0"></span>
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Colonne droite — Ce que nous vous demanderons */}
            {step.clientRequirements && step.clientRequirements.length > 0 && (
              <div className="rounded-xl p-5" style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.14)' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.25)' }}>
                    <ClipboardList size={13} className="text-gold" />
                  </div>
                  <p className="font-semibold text-gold text-xs tracking-widest uppercase">Votre rôle</p>
                </div>
                <ul className="space-y-3">
                  {step.clientRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-2 w-1 h-1 rounded-full bg-gold/60 shrink-0"></span>
                      <span className="text-gray-300 text-sm leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Carte étape ─── */
interface ProcessStepCardProps {
  step: { title: string; description: string; detailedDescription?: string[]; clientRequirements?: string[]; agencyWork?: string[] };
  index: number;
  activated: boolean;
  cardRef: (el: HTMLDivElement | null) => void;
  zIndex: number;
  onClick: () => void;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step, index, activated, cardRef, zIndex, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const elRef = useRef<HTMLDivElement>(null);
  const wobble = CARD_WOBBLES[index % CARD_WOBBLES.length];

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!elRef.current) return;
    const rect = elRef.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width;
    const cy = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (cy - 0.5) * -12, y: (cx - 0.5) * 16 });
    setMousePos({ x: cx * 100, y: cy * 100 });
  }, []);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
    setMousePos({ x: 50, y: 50 });
  }, []);

  let transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  if (hovered) {
    transform = `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(16px) scale(1.02)`;
  } else if (activated) {
    transform = `perspective(800px) rotateX(${wobble.x}deg) rotateY(${wobble.y}deg) scale(1.005)`;
  }

  return (
    <div
      ref={(el) => { (elRef as React.MutableRefObject<HTMLDivElement | null>).current = el; cardRef(el); }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor-hover
      className="rounded-2xl overflow-hidden relative shadow-lg cursor-pointer group"
      style={{
        ...lightTextureStyle,
        transform,
        transition: hovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
        willChange: 'transform',
        zIndex,
        position: 'relative',
      }}
    >
      {hovered && (
        <div className="absolute inset-0 pointer-events-none z-20 rounded-2xl"
          style={{ background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.18) 0%, transparent 55%)`, mixBlendMode: 'overlay' }}
        />
      )}
      {(activated || hovered) && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none z-20"
          style={{ boxShadow: 'inset 0 0 0 1.5px rgba(212,175,55,0.35)', transition: 'box-shadow 0.4s ease' }}
        />
      )}
      <div className="absolute top-0 left-0 bottom-0 w-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.03) 50%, transparent 100%)' }}
      />
      <div className="absolute bottom-0 right-0 w-24 h-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.18) 0%, transparent 55%)', borderRadius: '0 0 1rem 0' }}
      />
      <div className="relative z-10 p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold shrink-0 transition-colors duration-500"
            style={{
              borderColor: activated ? 'rgba(212,175,55,0.7)' : 'rgba(182,141,64,0.5)',
              background: activated ? 'rgba(212,175,55,0.18)' : 'rgba(182,141,64,0.1)',
              color: '#8B6914',
            }}
          >
            {index + 1}
          </span>
          <h4 className="font-serif text-base font-bold text-[#1E3A5F] leading-tight">{step.title}</h4>
        </div>
        <p className="text-charcoal/70 text-sm leading-relaxed pl-11">{step.description}</p>
        {/* Indicateur cliquable */}
        <div className="flex items-center gap-1.5 mt-4 pl-11 transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0.45 }}
        >
          <span className="text-[11px] font-medium" style={{ color: '#B68D40' }}>Voir les détails</span>
          <ChevronRight size={11} style={{ color: '#B68D40' }} />
        </div>
      </div>
    </div>
  );
};

/* ─── Section étapes ─── */
const ProcessStepsSection: React.FC<{ steps: { title: string; description: string; detailedDescription?: string[]; clientRequirements?: string[]; agencyWork?: string[] }[] }> = ({ steps }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const [activatedCards, setActivatedCards] = useState<boolean[]>(Array(steps.length).fill(false));
  const [openStep, setOpenStep] = useState<number | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        steps.forEach((_, i) => {
          setTimeout(() => setActivatedCards(prev => { const next = [...prev]; next[i] = true; return next; }), i * 180);
        });
      } else if (!entry.isIntersecting) {
        hasAnimated.current = false;
        setActivatedCards(Array(steps.length).fill(false));
      }
    }, { threshold: 0.15 });
    io.observe(wrapperRef.current);
    return () => io.disconnect();
  }, [steps]);

  return (
    <div ref={wrapperRef}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <ProcessStepCard
            key={i}
            step={step}
            index={i}
            activated={activatedCards[i]}
            cardRef={() => {}}
            zIndex={15}
            onClick={() => setOpenStep(i)}
          />
        ))}
      </div>
      {openStep !== null && (
        <StepModal step={steps[openStep]} index={openStep} onClose={() => setOpenStep(null)} />
      )}
    </div>
  );
};

/* ─── FAQ accordion ─── */
const FaqItem: React.FC<{ q: string; a: string; defaultOpen?: boolean }> = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b last:border-b-0" style={{ borderColor: 'rgba(212,175,55,0.15)' }}>
      <button className="w-full flex items-center justify-between gap-4 py-5 text-left group" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="font-serif font-semibold text-[#1E3A5F] group-hover:text-[#D4AF37] transition-colors leading-snug pr-2">{q}</span>
        <span className="shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors"
          style={{ borderColor: open ? 'rgba(212,175,55,0.6)' : 'rgba(30,58,95,0.2)', background: open ? 'rgba(212,175,55,0.1)' : 'transparent' }}
        >
          {open ? <ChevronUp size={14} className="text-gold" /> : <ChevronDown size={14} className="text-[#1E3A5F]/60" />}
        </span>
      </button>
      {open && <p className="pb-5 text-steel leading-relaxed text-sm md:text-base pr-10">{a}</p>}
    </div>
  );
};

/* ─── Slider témoignages liés à l'expertise ─── */
interface TestimonialSliderProps {
  serviceId: string;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ serviceId }) => {
  // Récupérer les IDs de projets liés à cette expertise
  const linkedProjectIds = projectsData
    .filter(p => p.expertise === serviceId || (p.expertises ?? []).includes(serviceId as any))
    .map(p => p.id);

  // Filtrer les témoignages dont le projectId correspond
  const testimonials = allTestimonials.filter(t => linkedProjectIds.includes(t.projectId));

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStart = useRef(0);

  const go = useCallback((dir: 1 | -1) => {
    if (animating || testimonials.length <= 1) return;
    setAnimating(true);
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length);
    setTimeout(() => setAnimating(false), 320);
  }, [animating, testimonials.length]);

  if (testimonials.length === 0) return null;

  const t = testimonials[current];

  return (
    <div
      onTouchStart={e => { touchStart.current = e.changedTouches[0].clientX; }}
      onTouchEnd={e => {
        const delta = touchStart.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 50) go(delta > 0 ? 1 : -1);
      }}
    >
      {/* Carte témoignage compacte */}
      <div
        className="relative rounded-2xl overflow-hidden px-7 md:px-10 py-8 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, #0A1929 0%, #1E3A5F 60%, #0F172A 100%)',
          boxShadow: '0 6px 32px rgba(4,17,31,0.35)',
          opacity: animating ? 0 : 1,
        }}
      >
        {/* Ligne dorée haute */}
        <div className="absolute top-0 left-0 w-full h-px pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent 5%, rgba(212,175,55,0.35) 35%, rgba(212,175,55,0.35) 65%, transparent 95%)' }}
        />

        {/* Étoiles PNG */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <img key={i} src="../Media/etoiletrnsparante.png" alt="★" className="w-4 h-4 object-contain" />
          ))}
        </div>

        <Quote size={28} className="text-gold/20 mb-3" />

        <blockquote className="font-serif text-base md:text-lg text-white/90 leading-relaxed mb-6">
          "{t.content}"
        </blockquote>

        <div className="flex items-center gap-3">
          <img
            src={t.image}
            alt={t.name}
            className="w-10 h-10 rounded-full object-cover border-2 shrink-0"
            style={{ borderColor: 'rgba(212,175,55,0.4)' }}
          />
          <div>
            <p className="font-semibold text-white text-sm">{t.name}</p>
            <p className="text-gray-400 text-xs">{t.role} · {t.company}</p>
          </div>
        </div>
      </div>

      {/* Navigation — uniquement si plusieurs témoignages */}
      {testimonials.length > 1 && (
        <div className="flex items-center justify-between mt-5">
          {/* Dots gold métallique */}
          <div className="flex gap-1.5 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { if (!animating) { setAnimating(true); setCurrent(i); setTimeout(() => setAnimating(false), 320); } }}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '28px' : '7px',
                  background: i === current
                    ? 'linear-gradient(90deg, #C8A84B 0%, #F5D78E 40%, #D4AF37 65%, #B8860B 100%)'
                    : 'rgba(212,175,55,0.28)',
                  boxShadow: i === current ? '0 0 6px rgba(212,175,55,0.5)' : 'none',
                }}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>

          {/* Flèches gold métallique */}
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 hover:brightness-110 shadow-md"
              style={{
                background: 'linear-gradient(135deg, #C8A84B 0%, #F5D78E 35%, #D4AF37 55%, #B8860B 80%, #C8A84B 100%)',
                color: '#3D2800',
                boxShadow: '0 2px 8px rgba(184,134,11,0.45), inset 0 1px 0 rgba(255,255,255,0.3)',
              }}
              aria-label="Précédent"
            >
              <ChevronLeft size={17} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 hover:brightness-110 shadow-md"
              style={{
                background: 'linear-gradient(135deg, #C8A84B 0%, #F5D78E 35%, #D4AF37 55%, #B8860B 80%, #C8A84B 100%)',
                color: '#3D2800',
                boxShadow: '0 2px 8px rgba(184,134,11,0.45), inset 0 1px 0 rgba(255,255,255,0.3)',
              }}
              aria-label="Suivant"
            >
              <ChevronRight size={17} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── Page principale ─── */
export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onBack, onGoToContact }) => {
  return (
    <div className="min-h-screen pt-24 pb-24">

      {/* Bouton retour */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-steel hover:text-gold transition-colors text-sm font-medium group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour aux expertises
        </button>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden py-16 mb-16"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold/8 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }}></div>
          {service.detailIcon && (
            <img
              src={service.detailIcon}
              alt=""
              aria-hidden="true"
              className="hidden md:block absolute left-[10%] top-1/2 -translate-y-1/2 w-44 h-44 lg:w-64 lg:h-64 object-contain opacity-20"
            />
          )}
          {service.detailIcon && (
            <img
              src={service.detailIcon}
              alt=""
              aria-hidden="true"
              className="hidden md:block absolute right-[10%] top-1/2 -translate-y-1/2 w-44 h-44 lg:w-64 lg:h-64 object-contain opacity-20"
            />
          )}
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-6 block">Expertise détaillée</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-metallic-silver leading-tight max-w-lg md:max-w-xl mx-auto mb-8">
            {service.title}
          </h1>
          {service.technologies.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {service.technologies.map(tech => (
                <span key={tech} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/8 border border-white/15 text-gray-300 hover:border-gold/40 hover:text-gold transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Stats clés */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16">
          {service.stats.map((stat, i) => (
            <div key={i} className="text-center py-6 px-4 rounded-2xl border" style={{ borderColor: 'rgba(212,175,55,0.2)', background: 'rgba(212,175,55,0.04)' }}>
              <div className="text-metallic-gold font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-2">{stat.value}</div>
              <p className="text-steel text-xs md:text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Texte d'accroche */}
        <div className="mb-12 max-w-3xl">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">Ce que nous réalisons</span>
          <h2 className="font-serif text-3xl font-bold text-metallic-navy mb-4">Une solution pensée pour vous</h2>
          <p className="text-steel text-lg leading-relaxed">{service.description}</p>
        </div>

        {/* Bénéfices + Cas d'usage */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">

          {/* Bénéfices */}
          <div className="rounded-2xl overflow-hidden relative"
            style={{
              background: 'linear-gradient(145deg, #04111F 0%, #0A1929 15%, #1E3A5F 35%, #2D5282 50%, #1E3A5F 65%, #0A1929 85%, #04111F 100%)',
              boxShadow: '0 8px 32px rgba(4,17,31,0.6), inset 0 1px 0 rgba(100,160,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.5), inset 1px 0 0 rgba(100,160,255,0.12), inset -1px 0 0 rgba(0,0,0,0.3)',
              border: '1px solid rgba(45, 82, 130, 0.6)',
            }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(120deg, rgba(100,160,255,0.12) 0%, rgba(255,255,255,0.06) 30%, transparent 55%, rgba(0,0,0,0.15) 100%)' }}
            />
            <div className="absolute top-0 left-0 w-full h-px pointer-events-none"
              style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5) 40%, rgba(212,175,55,0.5) 60%, transparent)' }}
            />
            <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(100,160,255,0.12) 0%, transparent 70%)' }}
            />
            <div className="relative z-10 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg border" style={{ background: 'rgba(212,175,55,0.12)', borderColor: 'rgba(212,175,55,0.3)' }}>
                  <CheckCircle2 size={18} className="text-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white" style={{ textShadow: '0 1px 8px rgba(100,160,255,0.3)' }}>Bénéfices concrets</h3>
              </div>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                    <span className="text-gray-300 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cas d'usage */}
          <div className="rounded-2xl overflow-hidden relative shadow-xl" style={lightTextureStyle}>
            <div className="absolute top-0 left-0 bottom-0 w-14 pointer-events-none z-10"
              style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)' }}
            />
            <div className="absolute top-0 right-0 bottom-0 w-10 pointer-events-none z-10"
              style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.1) 0%, transparent 100%)' }}
            />
            <div className="absolute bottom-0 right-0 w-36 h-28 pointer-events-none z-10"
              style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.06) 35%, transparent 60%)', borderRadius: '0 0 1rem 0' }}
            />
            <div className="relative z-10 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-[#1E3A5F]/10 rounded-lg border border-[#1E3A5F]/15">
                  <Lightbulb size={18} className="text-[#1E3A5F]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1E3A5F]">Cas d'usage typiques</h3>
              </div>
              <ul className="space-y-3">
                {service.useCases.map((uc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full border border-[#B68D40]/50 bg-[#B68D40]/8 flex items-center justify-center text-[11px] font-bold text-[#8B6914] mt-0.5">{i + 1}</span>
                    <span className="text-charcoal/80 leading-relaxed">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* CTA intermédiaire */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-20 px-8 py-6 rounded-2xl border"
          style={{ borderColor: 'rgba(212,175,55,0.2)', background: 'rgba(212,175,55,0.04)' }}
        >
          <div>
            <p className="font-serif font-bold text-[#1E3A5F] text-lg mb-1">Un projet en tête ?</p>
            <p className="text-steel text-sm">Première consultation gratuite — réponse sous 24h.</p>
          </div>
          <button onClick={onGoToContact} className="shrink-0 inline-flex items-center gap-2 px-6 py-3 btn-metallic-gold rounded-full font-semibold shadow-lg text-sm">
            Discutons-en <ArrowRight size={16} />
          </button>
        </div>

        {/* Notre approche */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">Méthode</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy">
              Notre approche en {service.processSteps.length} étapes
            </h2>
          </div>
          <ProcessStepsSection steps={service.processSteps} />
        </div>

        {/* Section "Ils l'ont vécu" + slider témoignages */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Colonne gauche — texte éditorial */}
            <div>
              <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
                Ils nous ont fait confiance
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy mb-6">
                Des résultats qui parlent d'eux-mêmes
              </h2>
              <p className="text-steel text-lg leading-relaxed mb-6">
                Derrière chaque mission, il y a une histoire. Celle d'un dirigeant ou d'un entrepreneur qui a osé franchir le pas — et qui en récolte aujourd'hui les fruits.
              </p>
              <p className="text-steel leading-relaxed mb-8">
                Nous ne promettons pas des résultats génériques. Chaque client repart avec une solution taillée sur mesure, une équipe formée et des indicateurs mesurables. Pas de discours, des faits.
              </p>
              {/* Engagements */}
              <ul className="space-y-3">
                {[
                  'Suivi post-livraison inclus dans chaque mission',
                  'Résultats mesurables définis avant le démarrage',
                  'Un interlocuteur unique, du brief au lancement',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                    <span className="text-steel text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne droite — slider */}
            <div>
              <TestimonialSlider serviceId={service.id} />
            </div>

          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">Questions fréquentes</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy">Tout ce que vous voulez savoir</h2>
          </div>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden px-6 md:px-10 py-2 relative" style={lightTextureStyle}>
            <div className="absolute top-0 left-0 bottom-0 w-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.08) 0%, transparent 100%)' }}
            />
            {service.faq.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>

        {/* CTA final double action */}
        <div className="cta-leather bg-charcoal text-white rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-80 h-80 bg-gold/6 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 px-8 md:px-16 py-14 md:py-16">
            <div className="text-center mb-10">
              <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">Passez à l'étape suivante</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Parlons de votre projet</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Première consultation gratuite. En 30 minutes, nous analysons votre situation et définissons ensemble la meilleure approche pour atteindre vos objectifs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button onClick={onGoToContact} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 btn-metallic-gold rounded-full font-semibold shadow-xl text-base">
                <Mail size={18} />
                Envoyer un message
              </button>
              <a href="tel:+33XXXXXXXXX" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-white/25 text-white/75 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300">
                <Phone size={18} />
                Appeler directement
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              {['Réponse sous 24h', 'Sans engagement', 'Consultation offerte', 'Devis sous 48h'].map(g => (
                <span key={g} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60 shrink-0"></span>
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
