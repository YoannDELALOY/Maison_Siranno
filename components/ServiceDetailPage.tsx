import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb } from 'lucide-react';
import { ServiceData } from './Services';

interface ServiceDetailPageProps {
  service: ServiceData;
  onBack: () => void;
  onGoToContact: () => void;
}

/* ─── Styles de texture (identiques au formulaire de contact) ─── */
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

/* ─── Wobble pré-calculé par position de carte ─── */
const CARD_WOBBLES = [
  { x: 2, y: -3 }, { x: -2, y: 4 }, { x: 3, y: 2 },
  { x: -3, y: -2 }, { x: 2, y: 3 }, { x: -1, y: -4 }, { x: 3, y: -1 },
];

/* ─── Carte étape avec tilt 3D ─── */
interface ProcessStepCardProps {
  step: { title: string; description: string };
  index: number;
  activated: boolean;
  cardRef: (el: HTMLDivElement | null) => void;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step, index, activated, cardRef }) => {
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
      className="rounded-2xl overflow-hidden relative shadow-lg cursor-default z-10"
      style={{
        ...lightTextureStyle,
        transform,
        transition: hovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
        willChange: 'transform',
      }}
    >
      {/* Reflet lumineux qui suit la souris */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none z-20 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.18) 0%, transparent 55%)`,
            mixBlendMode: 'overlay',
          }}
        />
      )}
      {/* Bordure gold si activée */}
      {(activated || hovered) && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none z-20"
          style={{ boxShadow: 'inset 0 0 0 1.5px rgba(212,175,55,0.35)', transition: 'box-shadow 0.4s ease' }}
        />
      )}
      {/* Ombre reliure gauche */}
      <div className="absolute top-0 left-0 bottom-0 w-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.03) 50%, transparent 100%)' }}
      ></div>
      {/* Coin bas-droit */}
      <div className="absolute bottom-0 right-0 w-24 h-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.18) 0%, transparent 55%)', borderRadius: '0 0 1rem 0' }}
      ></div>

      <div className="relative z-10 p-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold shrink-0 transition-colors duration-500"
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
      </div>
    </div>
  );
};

/* ─── Calcul du path serpentin avec coins arrondis ─── */
function buildSnakePath(
  centers: { x: number; y: number }[],
  startX: number,     // départ hors-écran (seulement pour la 1ère rangée)
  gridLeftX: number,  // bord gauche de la grille (virages gauche)
  gridRightX: number, // bord droit de la grille (virages droit)
  R: number           // rayon des coins arrondis
): string {
  if (centers.length === 0) return '';

  // Grouper par rangées (tolérance 80px en Y)
  const rows: { x: number; y: number }[][] = [];
  let cur: { x: number; y: number }[] = [centers[0]];
  for (let i = 1; i < centers.length; i++) {
    if (Math.abs(centers[i].y - cur[0].y) < 80) cur.push(centers[i]);
    else { rows.push(cur); cur = [centers[i]]; }
  }
  rows.push(cur);

  let d = '';

  for (let ri = 0; ri < rows.length; ri++) {
    const row = rows[ri];
    const rowY = row.reduce((s, p) => s + p.y, 0) / row.length;
    const goRight = ri % 2 === 0;
    const hasNext = ri < rows.length - 1;
    const nextRowY = hasNext
      ? rows[ri + 1].reduce((s, p) => s + p.y, 0) / rows[ri + 1].length
      : rowY;

    if (ri === 0) {
      d = `M ${startX} ${rowY}`;
      for (const pt of row) d += ` L ${pt.x} ${rowY}`;
      if (hasNext) {
        // Coin arrondi → bas à droite
        d += ` L ${gridRightX - R} ${rowY}`;
        d += ` Q ${gridRightX} ${rowY} ${gridRightX} ${rowY + R}`;
        d += ` L ${gridRightX} ${nextRowY - R}`;
        d += ` Q ${gridRightX} ${nextRowY} ${gridRightX - R} ${nextRowY}`;
      }
    } else {
      // On entre depuis la courbe précédente — traverser les cartes
      const ordered = goRight ? row : [...row].reverse();
      for (const pt of ordered) d += ` L ${pt.x} ${rowY}`;

      if (hasNext) {
        if (goRight) {
          // Coin arrondi → bas à droite
          d += ` L ${gridRightX - R} ${rowY}`;
          d += ` Q ${gridRightX} ${rowY} ${gridRightX} ${rowY + R}`;
          d += ` L ${gridRightX} ${nextRowY - R}`;
          d += ` Q ${gridRightX} ${nextRowY} ${gridRightX - R} ${nextRowY}`;
        } else {
          // Coin arrondi → bas à gauche (bord grille, pas hors-écran)
          d += ` L ${gridLeftX + R} ${rowY}`;
          d += ` Q ${gridLeftX} ${rowY} ${gridLeftX} ${rowY + R}`;
          d += ` L ${gridLeftX} ${nextRowY - R}`;
          d += ` Q ${gridLeftX} ${nextRowY} ${gridLeftX + R} ${nextRowY}`;
        }
      }
    }
  }
  return d;
}

/* ─── Section "Notre approche" avec serpent ─── */
interface ProcessStepsSectionProps {
  steps: { title: string; description: string }[];
}

const ProcessStepsSection: React.FC<ProcessStepsSectionProps> = ({ steps }) => {
  const DURATION = 6400;
  const CORNER_R = 28; // rayon des virages arrondis

  const wrapperRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const pathHlRef = useRef<SVGPathElement>(null); // ligne de reflet central
  const pathBgRef = useRef<SVGPathElement>(null);
  const pathGhostRef = useRef<SVGPathElement>(null);
  const rafRef = useRef<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activatedCards, setActivatedCards] = useState<boolean[]>(Array(steps.length).fill(false));
  const [showArrow, setShowArrow] = useState(false);
  const hasAnimated = useRef(false);

  /* Calcul + application du path */
  const applyPath = useCallback(() => {
    if (!gridRef.current || !svgRef.current) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    const gridRect = gridRef.current.getBoundingClientRect();

    const centers = cardRefs.current.map((el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: r.left - svgRect.left + r.width / 2, y: r.top - svgRect.top + r.height / 2 };
    }).filter(Boolean) as { x: number; y: number }[];

    if (centers.length === 0) return;

    // Grouper par rangées pour trouver la direction finale
    const rows: { x: number; y: number }[][] = [];
    let cur: { x: number; y: number }[] = [centers[0]];
    for (let i = 1; i < centers.length; i++) {
      if (Math.abs(centers[i].y - cur[0].y) < 80) cur.push(centers[i]);
      else { rows.push(cur); cur = [centers[i]]; }
    }
    rows.push(cur);

    // Terminer au bord de la dernière carte
    const lastRowGoesRight = (rows.length - 1) % 2 === 0;
    const lastEl = cardRefs.current[centers.length - 1];
    if (lastEl) {
      const r = lastEl.getBoundingClientRect();
      const edgeX = lastRowGoesRight ? r.right - svgRect.left : r.left - svgRect.left;
      centers[centers.length - 1] = { ...centers[centers.length - 1], x: edgeX };
    }

    const startX   = -(svgRect.left + 120); // hors-écran, seulement pour le départ
    const gridLeftX  = gridRect.left  - svgRect.left - 4;
    const gridRightX = gridRect.right - svgRect.left + 4;
    const d = buildSnakePath(centers, startX, gridLeftX, gridRightX, CORNER_R);

    [pathGhostRef, pathRef, pathBgRef, pathHlRef].forEach((ref) => {
      if (ref.current) ref.current.setAttribute('d', d);
    });
  }, []);

  /* ResizeObserver */
  useEffect(() => {
    const ro = new ResizeObserver(applyPath);
    if (gridRef.current) ro.observe(gridRef.current);
    return () => ro.disconnect();
  }, [applyPath]);

  /* Animation */
  const startAnimation = useCallback(() => {
    applyPath();
    requestAnimationFrame(() => {
      const pathEl = pathRef.current;
      if (!pathEl) return;
      const totalLength = pathEl.getTotalLength();
      if (totalLength === 0) return;

      const applyDash = (el: SVGPathElement | null) => {
        if (!el) return;
        el.style.strokeDasharray = `${totalLength}`;
        el.style.strokeDashoffset = `${totalLength}`;
      };
      applyDash(pathEl);
      applyDash(pathBgRef.current);
      applyDash(pathHlRef.current);

      // Pré-calculer les longueurs d'activation (point le plus proche sur le path)
      const svgRect = svgRef.current?.getBoundingClientRect();
      const activationLengths: number[] = Array(steps.length).fill(totalLength);
      if (svgRect) {
        const cardCenters = cardRefs.current.map((el) => {
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return { x: r.left - svgRect.left + r.width / 2, y: r.top - svgRect.top + r.height / 2 };
        });
        for (let s = 0; s <= 1000; s++) {
          const len = (s / 1000) * totalLength;
          const pt = pathEl.getPointAtLength(len);
          cardCenters.forEach((cc, i) => {
            if (!cc) return;
            if (Math.hypot(pt.x - cc.x, pt.y - cc.y) < 80 && len < activationLengths[i]) {
              activationLengths[i] = len;
            }
          });
        }
      }

      setShowArrow(true);

      let startTs: number | null = null;
      function animate(ts: number) {
        if (!startTs) startTs = ts;
        const progress = Math.min((ts - startTs) / DURATION, 1);
        const drawn = totalLength * progress;
        const offset = String(totalLength - drawn);

        pathEl!.style.strokeDashoffset = offset;
        if (pathBgRef.current)  pathBgRef.current.style.strokeDashoffset  = offset;
        if (pathHlRef.current)  pathHlRef.current.style.strokeDashoffset  = offset;

        activationLengths.forEach((al, i) => {
          if (drawn >= al) {
            setActivatedCards((prev) => {
              if (prev[i]) return prev;
              const next = [...prev]; next[i] = true; return next;
            });
          }
        });

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setActivatedCards(Array(steps.length).fill(true));
          setShowArrow(false);
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    });
  }, [applyPath, steps.length]);

  /* IntersectionObserver */
  useEffect(() => {
    if (!wrapperRef.current) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        setTimeout(startAnimation, 150);
      } else if (!entry.isIntersecting) {
        hasAnimated.current = false;
        cancelAnimationFrame(rafRef.current);
        setActivatedCards(Array(steps.length).fill(false));
        setShowArrow(false);
        [pathRef, pathBgRef, pathHlRef].forEach((ref) => {
          if (ref.current) ref.current.style.strokeDashoffset = '99999';
        });
      }
    }, { threshold: 0.15 });
    io.observe(wrapperRef.current);
    return () => io.disconnect();
  }, [startAnimation, steps.length]);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return (
    <div ref={wrapperRef} className="relative">
      <svg
        ref={svgRef}
        className="absolute inset-0 pointer-events-none overflow-visible"
        style={{ zIndex: 20, width: '100%', height: '100%' }}
        aria-hidden="true"
      >
        <defs>
          {/*
            Gradient vertical (haut→bas) = même couleur sur toute la longueur,
            mais effet métal brossé : bord sombre / centre brillant / bord sombre.
            gradientUnits="userSpaceOnUse" avec une plage de 10px (= épaisseur barre).
            On centre sur y=0, so y1=-5 y2=5 → le SVG utilisera les coords réelles.
            En pratique on utilise objectBoundingBox avec x constant.
          */}
          <linearGradient id="goldMetal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#5C3C00"/>
            <stop offset="18%"  stopColor="#B68D40"/>
            <stop offset="38%"  stopColor="#E8C46A"/>
            <stop offset="50%"  stopColor="#FFF5C0"/>
            <stop offset="62%"  stopColor="#E8C46A"/>
            <stop offset="82%"  stopColor="#B68D40"/>
            <stop offset="100%" stopColor="#5C3C00"/>
          </linearGradient>

          {/* Flèche — double couche métal + reflet, même style que la barre */}
          <marker id="arrowGold" markerWidth="32" markerHeight="20"
            refX="30" refY="10" orient="auto" markerUnits="userSpaceOnUse">
            {/* Corps métal */}
            <path d="M0,0 L0,20 L32,10 z" fill="url(#arrowMetal)"/>
            {/* Reflet central brillant */}
            <path d="M3,6 L3,14 L20,10 z" fill="rgba(255,248,200,0.65)"/>
          </marker>
          <linearGradient id="arrowMetal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#5C3C00"/>
            <stop offset="35%"  stopColor="#D4AF37"/>
            <stop offset="50%"  stopColor="#FFF5C0"/>
            <stop offset="65%"  stopColor="#D4AF37"/>
            <stop offset="100%" stopColor="#5C3C00"/>
          </linearGradient>
          <marker id="arrowGoldGhost" markerWidth="32" markerHeight="20"
            refX="30" refY="10" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L0,20 L32,10 z" fill="rgba(182,141,64,0.22)"/>
          </marker>

          {/* Halo doux autour de la barre */}
          <filter id="snakeGlow" x="-10%" y="-300%" width="120%" height="700%">
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Trace fantôme (guide, toujours visible) */}
        <path ref={pathGhostRef} d="" fill="none"
          stroke="rgba(182,141,64,0.15)" strokeWidth="8"
          strokeLinecap="round" strokeLinejoin="round"
          markerEnd="url(#arrowGoldGhost)"
        />
        {/* Halo lumineux (animé) */}
        <path ref={pathBgRef} d="" fill="none"
          stroke="rgba(212,175,55,0.28)" strokeWidth="20"
          strokeLinecap="round" strokeLinejoin="round"
          filter="url(#snakeGlow)"
          style={{ strokeDasharray: 99999, strokeDashoffset: 99999 }}
        />
        {/* Barre principale — gradient vertical = métal uniforme sur toute la longueur */}
        <path ref={pathRef} d="" fill="none"
          stroke="url(#goldMetal)" strokeWidth="8"
          strokeLinecap="round" strokeLinejoin="round"
          markerEnd={showArrow ? 'url(#arrowGold)' : undefined}
          style={{ strokeDasharray: 99999, strokeDashoffset: 99999 }}
        />
        {/* Reflet central brillant (filet blanc-or au centre de la barre) */}
        <path ref={pathHlRef} d="" fill="none"
          stroke="rgba(255,248,190,0.55)" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ strokeDasharray: 99999, strokeDashoffset: 99999 }}
        />
      </svg>

      {/* Grille de cartes */}
      <div ref={gridRef} className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        style={{ position: 'relative', zIndex: 10 }}>
        {steps.map((step, i) => (
          <ProcessStepCard key={i} step={step} index={i}
            activated={activatedCards[i]}
            cardRef={(el) => { cardRefs.current[i] = el; }}
          />
        ))}
      </div>
    </div>
  );
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onBack, onGoToContact }) => {
  return (
    <div className="min-h-screen pt-24 pb-24">

      {/* Bouton retour */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-steel hover:text-gold transition-colors text-sm font-medium group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour aux expertises
        </button>
      </div>

      {/* Hero section — titre + tags technologies */}
      <div className="relative overflow-hidden py-16 mb-16"
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold/8 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-6 text-gold">
            <span className="scale-150">{service.icon}</span>
          </div>
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
            Expertise détaillée
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            {service.title}
          </h1>

          {/* Tags technologies */}
          {service.technologies && service.technologies.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/8 border border-white/15 text-gray-300 hover:border-gold/40 hover:text-gold transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Texte d'accroche — rattaché visuellement au contenu, pas au titre */}
        <div className="mb-12 max-w-3xl">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">
            Ce que nous réalisons
          </span>
          <h2 className="font-serif text-3xl font-bold text-metallic-navy mb-4">
            Une solution pensée pour vous
          </h2>
          <p className="text-steel text-lg leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Bénéfices + Cas d'usage */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">

          {/* Carte bénéfices — effet métallique bleu marine */}
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              background: 'linear-gradient(145deg, #04111F 0%, #0A1929 15%, #1E3A5F 35%, #2D5282 50%, #1E3A5F 65%, #0A1929 85%, #04111F 100%)',
              boxShadow: '0 8px 32px rgba(4,17,31,0.6), inset 0 1px 0 rgba(100,160,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.5), inset 1px 0 0 rgba(100,160,255,0.12), inset -1px 0 0 rgba(0,0,0,0.3)',
              border: '1px solid rgba(45, 82, 130, 0.6)',
            }}
          >
            {/* Reflet lumineux diagonal — effet métal brossé */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(120deg, rgba(100,160,255,0.12) 0%, rgba(255,255,255,0.06) 30%, transparent 55%, rgba(0,0,0,0.15) 100%)' }}
            ></div>
            {/* Ligne dorée en haut */}
            <div className="absolute top-0 left-0 w-full h-px pointer-events-none"
              style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5) 40%, rgba(212,175,55,0.5) 60%, transparent)' }}
            ></div>
            {/* Lueur subtile haut-gauche */}
            <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(100,160,255,0.12) 0%, transparent 70%)' }}
            ></div>

            <div className="relative z-10 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg border" style={{ background: 'rgba(212,175,55,0.12)', borderColor: 'rgba(212,175,55,0.3)' }}>
                  <CheckCircle2 size={18} className="text-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white" style={{ textShadow: '0 1px 8px rgba(100,160,255,0.3)' }}>
                  Bénéfices concrets
                </h3>
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

          {/* Carte cas d'usage — texture claire comme le côté droit du formulaire */}
          <div className="rounded-2xl overflow-hidden relative shadow-xl" style={lightTextureStyle}>
            {/* Ombre reliure gauche */}
            <div className="absolute top-0 left-0 bottom-0 w-14 pointer-events-none z-10"
              style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)' }}
            ></div>
            {/* Bord droit légère courbure */}
            <div className="absolute top-0 right-0 bottom-0 w-10 pointer-events-none z-10"
              style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.1) 0%, transparent 100%)' }}
            ></div>
            {/* Coin bas-droit levée de page */}
            <div className="absolute bottom-0 right-0 w-36 h-28 pointer-events-none z-10"
              style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.06) 35%, transparent 60%)', borderRadius: '0 0 1rem 0' }}
            ></div>

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
                    <span className="shrink-0 w-6 h-6 rounded-full border border-[#B68D40]/50 bg-[#B68D40]/8 flex items-center justify-center text-[11px] font-bold text-[#8B6914] mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-charcoal/80 leading-relaxed">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Notre approche — étapes spécifiques à l'expertise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">
              Méthode
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy">
              Notre approche en {service.processSteps.length} étapes
            </h2>
          </div>

          <ProcessStepsSection steps={service.processSteps} />
        </div>

        {/* CTA */}
        <div className="cta-leather bg-charcoal text-white rounded-3xl p-12 text-center relative">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Discutons de votre projet
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Première consultation gratuite. En 30 minutes, nous analysons votre situation et définissons ensemble la meilleure approche.
            </p>
            <button
              onClick={onGoToContact}
              className="inline-flex items-center gap-2 px-8 py-4 btn-metallic-gold rounded-full font-semibold shadow-xl"
            >
              Lancer votre projet <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
