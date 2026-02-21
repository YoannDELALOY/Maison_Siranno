import React from 'react';
import { ArrowLeft, CheckCircle2, ExternalLink, BookOpen, Github, Globe, ArrowUpRight, Quote, User, Calendar, Zap, Shield, Target, Lock, Lightbulb, TrendingUp, Clock, Users } from 'lucide-react';
import { ProjectData } from './Projects';
import { allTestimonials } from '../data/testimonials';
import starImg from '../Media/etoiletrnsparante.png';

interface BlogArticlePageProps {
  project: ProjectData | null;
  onBack: () => void;
  onGoToContact: () => void;
}

const perlinNoise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`;

/* ── Icônes cyclées pour les cartes défi ── */
const CHALLENGE_ICONS = [Zap, Shield, Target, Lock, Lightbulb, TrendingUp, Clock, Users];

/* ── Carte défi — liseré gold bidirectionnel + effet 3D tilt ── */
const ChallengeCard: React.FC<{ challenge: string; index: number }> = ({ challenge, index }) => {
  const [hovered, setHovered] = React.useState(false);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const cardRef = React.useRef<HTMLDivElement>(null);

  const Icon = CHALLENGE_ICONS[index % CHALLENGE_ICONS.length];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // Max ±12° de rotation
    const rotateY = ((e.clientX - cx) / (rect.width / 2)) * 12;
    const rotateX = -((e.clientY - cy) / (rect.height / 2)) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => { setHovered(false); setTilt({ x: 0, y: 0 }); };

  // Entrée : haut(0) → droite(300) → bas(600) → gauche(900)
  // Sortie inverse : gauche(0) → bas(300) → droite(600) → haut(900)
  const bH = (enterDelay: number, leaveDelay: number) => ({
    background: 'linear-gradient(90deg, rgba(180,130,20,0.7), #F4E095, rgba(180,130,20,0.7))',
    boxShadow: '0 0 6px rgba(212,175,55,0.45)',
    transitionDelay: hovered ? `${enterDelay}ms` : `${leaveDelay}ms`,
  });
  const bV = (enterDelay: number, leaveDelay: number) => ({
    background: 'linear-gradient(180deg, rgba(180,130,20,0.7), #F4E095, rgba(180,130,20,0.7))',
    boxShadow: '0 0 6px rgba(212,175,55,0.45)',
    transitionDelay: hovered ? `${enterDelay}ms` : `${leaveDelay}ms`,
  });

  return (
    <div
      style={{ perspective: '800px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={cardRef}
        className="relative rounded-xl border border-white/6 overflow-hidden cursor-default"
        style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          transform: hovered
            ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(16px) scale(1.02)`
            : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
          transition: 'transform 0.15s ease-out',
          boxShadow: hovered
            ? '0 20px 40px rgba(0,0,0,0.5), 0 8px 20px rgba(212,175,55,0.12)'
            : '0 2px 8px rgba(0,0,0,0.2)',
          willChange: 'transform',
        }}
      >
        {/* Reflet lumineux qui suit la position de la souris */}
        {hovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-xl"
            style={{
              background: `radial-gradient(circle at ${50 + tilt.y * 2}% ${50 - tilt.x * 3}%, rgba(212,175,55,0.08) 0%, transparent 60%)`,
            }}
          />
        )}

        {/* Liseré gold bidirectionnel */}
        <div className="absolute top-0 left-0 w-full h-[2px] transition-transform duration-300 ease-out origin-left"    style={{ ...bH(0,   900), transform: hovered ? 'scaleX(1)' : 'scaleX(0)' }} />
        <div className="absolute top-0 right-0 w-[2px] h-full transition-transform duration-300 ease-out origin-top"    style={{ ...bV(300, 600), transform: hovered ? 'scaleY(1)' : 'scaleY(0)' }} />
        <div className="absolute bottom-0 right-0 w-full h-[2px] transition-transform duration-300 ease-out origin-right"  style={{ ...bH(600, 300), transform: hovered ? 'scaleX(1)' : 'scaleX(0)' }} />
        <div className="absolute bottom-0 left-0 w-[2px] h-full transition-transform duration-300 ease-out origin-bottom" style={{ ...bV(900, 0),   transform: hovered ? 'scaleY(1)' : 'scaleY(0)' }} />

        {/* Contenu */}
        <div className="p-5">
          {/* Icône + numéro */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.06))',
                border: '1px solid rgba(212,175,55,0.2)',
                boxShadow: hovered ? '0 0 12px rgba(212,175,55,0.2)' : 'none',
                transition: 'box-shadow 0.3s',
              }}
            >
              <Icon size={16} style={{ color: 'rgba(212,175,55,0.85)' }} />
            </div>
            <span
              className="font-serif font-bold leading-none select-none"
              style={{ fontSize: '2rem', color: 'rgba(212,175,55,0.12)' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Texte */}
          <p className="text-gray-300 leading-relaxed text-sm">{challenge}</p>
        </div>
      </div>
    </div>
  );
};

/* ── Hook IntersectionObserver réutilisable ── */
const useFadeIn = (threshold = 0.15) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

/* ── Extraction du premier nombre dans une chaîne ── */
const extractNumber = (str: string): number | null => {
  const match = str.match(/[\d]+[.,]?\d*/);
  if (!match) return null;
  const val = parseFloat(match[0].replace(',', '.'));
  return isNaN(val) ? null : val;
};

/* ── AnimatedCounter ── */
const AnimatedCounter: React.FC<{ target: number; duration?: number }> = ({ target, duration = 1200 }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [started, setStarted] = React.useState(false);
  const [display, setDisplay] = React.useState('0');

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const isFloat = !Number.isInteger(target);
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setDisplay(isFloat ? current.toFixed(1) : Math.round(current).toString());
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return <span ref={ref}>{display}</span>;
};

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({ project, onBack, onGoToContact }) => {
  if (!project) return null;

  const linkedTestimonial = allTestimonials.find(t => t.projectId === project.id);

  /* ── Parallax Hero ── */
  const heroImgRef = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    const handleScroll = () => {
      if (!heroImgRef.current) return;
      const offset = Math.min(window.scrollY * 0.12, 60);
      heroImgRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Résultats avec chiffres pour les cartes stats ── */
  const statsResults = project.results.filter(r => /\d/.test(r));
  // Garantir au moins 3 cartes : compléter avec les premiers résultats sans chiffre si besoin
  const nonStatsResults = project.results.filter(r => !/\d/.test(r));
  const statCards = statsResults.length >= 3
    ? statsResults
    : [...statsResults, ...nonStatsResults].slice(0, Math.max(3, statsResults.length));

  /* ── FadeIn refs ── */
  const introFade = useFadeIn(0.15);
  const approcheFade = useFadeIn(0.05);
  const defisFade = useFadeIn(0.1);
  const testimonialFade = useFadeIn(0.2);
  const resultsFade = useFadeIn(0.1);

  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════
          1. HERO — hauteur réduite, titre argent métallique
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden flex flex-col"
        style={{ minHeight: '70vh', maxHeight: '80vh' }}
      >
        {/* Image parallax */}
        <img
          ref={heroImgRef}
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: 'transform' }}
        />

        {/* Overlay gradient — plus dense pour lisibilité du titre */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(5,10,20,0.75) 0%, rgba(5,10,20,0.60) 40%, rgba(5,10,20,0.80) 100%)',
          }}
        />

        {/* Bouton retour glassmorphism */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm transition-all border border-white/20 hover:bg-white/20"
            style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(10px)' }}
          >
            <ArrowLeft size={16} />
            Retour aux réalisations
          </button>
        </div>

        {/* Contenu centré dans le hero */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center py-12">

          {/* Badge catégorie expertise — gold métallique */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 border"
            style={{
              background: 'linear-gradient(135deg, rgba(180,130,20,0.25) 0%, rgba(212,175,55,0.35) 50%, rgba(180,130,20,0.25) 100%)',
              borderColor: 'rgba(212,175,55,0.5)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{
                background: 'linear-gradient(90deg, #C9A227, #F5D678, #D4AF37, #B8860B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Titre — texture argent métallique */}
          <h1
            className="text-metallic-silver font-serif font-bold leading-tight max-w-4xl mb-6"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              animation: 'heroFadeIn 1s ease forwards',
            }}
          >
            {project.title}
          </h1>

          {/* Tags technologie — style métallique gold animé */}
          <div className="flex flex-wrap justify-center gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className="tag-metallic-gold text-xs font-semibold rounded-full px-3 py-1.5 border cursor-default"
                style={{
                  background: 'linear-gradient(135deg, rgba(180,130,20,0.15) 0%, rgba(212,175,55,0.22) 50%, rgba(180,130,20,0.15) 100%)',
                  borderColor: 'rgba(212,175,55,0.35)',
                  color: '#E8C96A',
                  animation: `tagAppear 0.5s ease forwards`,
                  animationDelay: `${0.8 + i * 0.08}s`,
                  opacity: 0,
                  backdropFilter: 'blur(4px)',
                  textShadow: '0 0 8px rgba(212,175,55,0.4)',
                  boxShadow: '0 0 6px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.08)',
                  transition: 'box-shadow 0.3s, transform 0.3s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(212,175,55,0.35), inset 0 1px 0 rgba(255,255,255,0.15)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px) scale(1.04)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 6px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* Animations CSS */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tagAppear {
          from { opacity: 0; transform: translateY(10px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>


      {/* ═══════════════════════════════════════════════════════
          2. INTRO — fond sombre, contexte client
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative py-20 border-t border-gold/10"
        style={{ backgroundColor: '#0F172A' }}
      >
        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: perlinNoise, backgroundSize: '400px 400px', opacity: 0.18 }}
        />

        <div
          ref={introFade.ref}
          className={`relative z-10 max-w-4xl mx-auto px-6 transition-all duration-700 ${
            introFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Métadonnées client — visuellement intégrées */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <User size={14} className="text-gold/60" />
              <span className="text-white/60 text-xs uppercase tracking-widest">Réalisé par</span>
              <span className="text-white/90 text-sm font-semibold ml-1">{project.client}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <Calendar size={14} className="text-gold/60" />
              <span className="text-white/60 text-xs uppercase tracking-widest">Année</span>
              <span className="text-white/90 text-sm font-semibold ml-1">{project.year}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20" style={{ background: 'rgba(212,175,55,0.06)' }}>
              <span className="text-metallic-gold-inline text-xs uppercase tracking-widest font-bold">{project.category}</span>
            </div>
          </div>

          {/* Filet gold centré */}
          <div className="w-16 h-px bg-gold mx-auto mb-10" />

          {/* Bouton + lien GitHub — après les métadonnées */}
          <div className="flex justify-center items-center gap-4 mb-10">
            {project.url && (() => {
              const domain = new URL(project.url).hostname;
              return (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-metallic-dark inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white"
                >
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=16`}
                    alt=""
                    className="w-4 h-4 rounded-sm"
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                  Voir le site
                  <ArrowUpRight size={13} />
                </a>
              );
            })()}
            <div className="w-px h-4 flex-shrink-0" style={{ background: 'rgba(212,175,55,0.3)' }} />
            <a
              href={project.githubUrl ?? 'https://github.com/YoannDELALOY'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm transition-colors"
              style={{ color: 'rgba(212,175,55,0.75)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F4E095')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(212,175,55,0.75)')}
            >
              <Github size={14} />
              GitHub du projet
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Citation / description principale */}
          <blockquote className="relative">
            {/* Guillemet décoratif */}
            <span
              className="absolute -top-4 -left-2 font-serif leading-none select-none pointer-events-none"
              style={{ fontSize: '5rem', color: 'rgba(212,175,55,0.12)', lineHeight: 1 }}
            >
              "
            </span>
            <p className="font-serif text-xl md:text-2xl text-white/90 leading-relaxed text-center px-8 relative z-10">
              {project.fullDescription}
            </p>
          </blockquote>

          {/* Filet bas */}
          <div className="w-16 h-px bg-gold/40 mx-auto mt-10" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. NOTRE APPROCHE — slide-in alternée gauche/droite
      ═══════════════════════════════════════════════════════ */}
      {project.process && project.process.length > 0 && (
        <section
          className="py-24 border-t border-gold/10 overflow-hidden"
          style={{ backgroundColor: '#FAFAF8' }}
        >
          {/* En-tête */}
          <div className="text-center mb-16 px-6">
            <p className="text-xs uppercase tracking-widest text-gold/60 mb-3">Notre approche</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy">
              Comment nous l'avons réalisé
            </h2>
          </div>

          <div ref={approcheFade.ref} className="max-w-5xl mx-auto px-6">
            <ol className="space-y-10">
              {project.process.map((step, i) => {
                const fromLeft = i % 2 === 0;
                return (
                  <li
                    key={i}
                    className="flex items-start gap-8 transition-all duration-700"
                    style={{
                      transitionDelay: `${i * 180}ms`,
                      opacity: approcheFade.visible ? 1 : 0,
                      transform: approcheFade.visible
                        ? 'translateX(0)'
                        : `translateX(${fromLeft ? '-120px' : '120px'})`,
                    }}
                  >
                    {/* Numéro watermark */}
                    <span
                      className="font-serif font-bold leading-none flex-shrink-0 select-none"
                      style={{
                        fontSize: '5rem',
                        color: 'rgba(212,175,55,0.18)',
                        lineHeight: 1,
                        minWidth: '4rem',
                      }}
                    >
                      {i + 1}
                    </span>
                    {/* Texte */}
                    <p className="text-charcoal/75 text-lg leading-relaxed pt-3">{step}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          4. LES DÉFIS — titre argent, hover zoom + liseré gold
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 border-t border-gold/10"
        style={{ backgroundColor: '#0F172A' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: perlinNoise, backgroundSize: '400px 400px', opacity: 0.18 }}
        />

        <div ref={defisFade.ref} className="relative z-10 max-w-5xl mx-auto px-6">
          {/* En-tête */}
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-gold/60 mb-3">Les défis</p>
            <h2 className="text-metallic-silver font-serif text-3xl md:text-4xl font-bold">
              Obstacles surmontés
            </h2>
          </div>

          {/* Grille */}
          <div className={`grid md:grid-cols-2 gap-4 transition-all duration-700 ${
            defisFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {project.challenges.map((challenge, i) => (
              <ChallengeCard key={i} challenge={challenge} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. TÉMOIGNAGE — compact, large, étoiles image
      ═══════════════════════════════════════════════════════ */}
      {linkedTestimonial && (
        <section
          className="relative py-10 border-t border-gold/15 border-b border-gold/15"
          style={{
            background: 'linear-gradient(to right, rgba(212,175,55,0.04), rgba(212,175,55,0.09), rgba(212,175,55,0.04))',
          }}
        >
          {/* Icône Quote arrière-plan */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Quote size={100} style={{ color: 'rgba(212,175,55,0.06)' }} />
          </div>

          <div
            ref={testimonialFade.ref}
            className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
              testimonialFade.visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Citation */}
            <p className="font-serif text-xl md:text-2xl italic text-charcoal/85 leading-relaxed mb-8">
              "{linkedTestimonial.content}"
            </p>

            {/* Identité */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={linkedTestimonial.image}
                alt={linkedTestimonial.name}
                className="w-11 h-11 rounded-full object-cover border border-gold/30"
              />
              <div className="text-left">
                <p className="font-bold text-charcoal text-sm">{linkedTestimonial.name}</p>
                <p className="text-metallic-gold-inline text-xs">
                  {linkedTestimonial.role} · {linkedTestimonial.company}
                </p>
                {/* Étoiles image */}
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <img key={idx} src={starImg} alt="★" className="w-3 h-3 object-contain" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          6. LES RÉSULTATS — min 3 cartes + liste 2 colonnes
      ═══════════════════════════════════════════════════════ */}
      <section
        className="py-24 border-t border-gold/10"
        style={{ backgroundColor: '#FAFAF8' }}
      >
        <div ref={resultsFade.ref} className="max-w-5xl mx-auto px-6">
          {/* En-tête */}
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-gold/60 mb-3">Les résultats</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy">
              Ce que nous avons accompli
            </h2>
          </div>

          {/* Grille stats — min 3 cartes */}
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 transition-all duration-700 ${
            resultsFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {statCards.slice(0, Math.max(3, statCards.length)).map((result, i) => {
              const num = extractNumber(result);
              // Détection du préfixe (+/-) et du suffixe (%/h/min/×/k€/j)
              const prefix = /^[+\-−]/.test(result.trim()) ? result.trim()[0] : '';
              const hasPct  = result.includes('%');
              const hasH    = /\dh\b|\d\s*h\b/.test(result);
              const hasMin  = /min/.test(result);
              const hasX    = /×|\bx\b/.test(result);
              const hasK    = /k€/.test(result);
              const suffix  = hasPct ? '%' : hasH ? 'h' : hasMin ? 'min' : hasX ? '×' : hasK ? 'k€' : '';
              // Signe d'affichage : + ou - selon le contexte
              const sign = prefix === '+' ? '+' : prefix === '-' || prefix === '−' ? '-' : '';
              return (
                <div
                  key={i}
                  className="rounded-xl p-6 text-center border border-gold/15 flex flex-col items-center justify-center"
                  style={{ background: 'rgba(212,175,55,0.04)' }}
                >
                  {num !== null ? (
                    <p className="text-4xl font-bold text-metallic-navy mb-2 leading-none">
                      <span style={{ fontSize: '1.6rem' }}>{sign}</span>
                      {resultsFade.visible ? <AnimatedCounter target={num} /> : '0'}
                      <span style={{ fontSize: '1.6rem' }}>{suffix}</span>
                    </p>
                  ) : (
                    <p className="text-3xl font-bold text-metallic-navy mb-2 leading-none">—</p>
                  )}
                  <p className="text-charcoal/60 text-sm leading-snug">{result}</p>
                </div>
              );
            })}
          </div>

          {/* Liste complète — 2 colonnes */}
          <ul className={`grid md:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
            resultsFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {project.results.map((result, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: '#22c55e' }}
                />
                <span className="text-charcoal/80">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. CTA — fond or métallique
      ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-gold/10">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div
            className="rounded-3xl p-10 relative overflow-hidden text-center"
            style={{
              background: 'linear-gradient(135deg, #C9A227 0%, #F5D678 35%, #D4AF37 55%, #B8860B 80%, #D4AF37 100%)',
              boxShadow: '0 8px 32px rgba(212,175,55,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
            }}
          >
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{ backgroundImage: perlinNoise, backgroundSize: '400px 400px', mixBlendMode: 'overlay' }}
            />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <div className="relative z-10">
              <BookOpen size={32} className="text-charcoal mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-bold mb-2 text-charcoal">Un projet similaire ?</h2>
              <p className="text-charcoal/70 mb-6">Discutons de vos besoins. La première consultation est gratuite.</p>

              {/* Lien GitHub — au-dessus des boutons */}
              <div className="mb-6">
                <a
                  href={project.githubUrl ?? 'https://github.com/YoannDELALOY'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/55 hover:text-charcoal transition-colors underline underline-offset-2"
                >
                  <Github size={14} />
                  GitHub du projet
                  <ExternalLink size={11} />
                </a>
              </div>

              {/* Boutons d'action — btn-metallic-dark (bleu → gold hover) */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {project.url && (() => {
                  const domain = new URL(project.url).hostname;
                  return (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-metallic-dark inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white"
                    >
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=16`}
                        alt=""
                        className="w-4 h-4 rounded-sm"
                        onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                      />
                      Voir le site
                      <ExternalLink size={14} />
                    </a>
                  );
                })()}
                <button
                  onClick={onGoToContact}
                  className="btn-metallic-dark inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-white"
                >
                  Nous contacter
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
