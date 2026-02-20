import React, { useEffect, useRef, useState } from 'react';
import { MapPin, CheckCircle2, Users, Heart, Gem, Target, TrendingUp, ArrowRight, BarChart2 } from 'lucide-react';

interface AgencyPageProps {
  onGoToContact?: () => void;
}

const AnimatedStat: React.FC<{ value: string; label: string; delay?: number }> = ({ value, label, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center p-6 glass-card rounded-2xl transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl font-serif font-bold text-metallic-gold mb-2">{value}</div>
      <div className="text-sm text-steel uppercase tracking-wider">{label}</div>
    </div>
  );
};

const values = [
  {
    icon: <BarChart2 size={24} />,
    title: 'Data-driven',
    description: 'Chaque décision s\'appuie sur des données concrètes. Héritage de la finance de marché : rien n\'est laissé au hasard.',
  },
  {
    icon: <Target size={24} />,
    title: 'Sur-mesure',
    description: 'Chaque solution est conçue pour vous spécifiquement. Pas de template, pas de copier-coller.',
  },
  {
    icon: <Heart size={24} />,
    title: 'Humain',
    description: 'Un interlocuteur unique, disponible et réactif. La technologie au service de la relation humaine.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'ROI-Obsédé',
    description: 'Le retour sur investissement est la métrique centrale de chaque projet. Pas de beau pour le beau.',
  },
];

const timeline = [
  {
    period: '2010–2015',
    sector: 'Finance de Marché & Trading',
    description: 'Trader en finance de marché — une école de rigueur, de gestion du risque et de lecture des données. Cette expérience forge une approche radicalement data-driven et ROI-obsessée, unique dans le monde de l\'agence digitale.',
    color: 'border-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    period: '2015–2022',
    sector: 'BTP, Logistique & Terrain',
    description: 'Immersion dans le bâtiment et la supply chain. Compréhension profonde des enjeux terrain, délais de chantier, gestion d\'équipes. Cette réalité de l\'économie locale façonne encore aujourd\'hui chaque solution livrée.',
    color: 'border-amber-600',
    bgColor: 'bg-amber-600/10',
  },
  {
    period: '2022–2024',
    sector: 'Transition Digitale & IA',
    description: 'Formation intensive au développement web, à l\'IA et à l\'automatisation. Découverte du potentiel de la tech pour transformer les acteurs traditionnels. Premiers projets clients, premières réussites mesurables.',
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    period: '2024–Aujourd\'hui',
    sector: 'Maison Siranno',
    description: 'Création de l\'agence avec une conviction : les PME et entrepreneurs qui font tourner l\'économie méritent les mêmes outils que les grandes entreprises — avec l\'agilité et la proximité en plus.',
    color: 'border-gold',
    bgColor: 'bg-gold/10',
  },
];

export const AgencyPage: React.FC<AgencyPageProps> = ({ onGoToContact }) => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-20">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
            Notre histoire & Notre vision
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-metallic-navy">
            L'<span className="text-metallic-gold">Agence</span>
          </h1>
          <p className="text-steel text-xl max-w-2xl mx-auto leading-relaxed">
            Finance de marché. BTP. Digital. IA. Un parcours atypique au service d'une approche unique — data-driven, ROI-obsessée, et profondément humaine.
          </p>
        </div>

        {/* Stats animées */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-24">
          <AnimatedStat value="+27%" label="Visibilité moyenne" delay={0} />
          <AnimatedStat value="98%" label="Satisfaction client" delay={150} />
          <AnimatedStat value="100%" label="Sur-mesure" delay={300} />
        </div>

        {/* Mon Parcours — Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">
              Parcours
            </span>
            <h2 className="font-serif text-4xl font-bold text-metallic-navy">
              Finance → BTP → Digital → IA
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent"></div>

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gold border-2 border-white shadow-lg -translate-x-1/2 md:-translate-x-1/2 z-10"></div>

                  <div className={`ml-12 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className={`glass-card p-6 rounded-2xl border-l-4 ${item.color}`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${item.bgColor} text-charcoal`}>
                        {item.period}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-charcoal mb-3">{item.sector}</h3>
                      <p className="text-steel leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mes Valeurs */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">
              Philosophie
            </span>
            <h2 className="font-serif text-4xl font-bold text-metallic-navy">
              Mes Valeurs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl text-center group hover:border-gold/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 flex items-center justify-center mx-auto mb-4 text-gold group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="font-serif text-lg font-bold text-charcoal mb-3">{value.title}</h4>
                <p className="text-steel text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* L'Expertise Métier */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">
              Différence
            </span>
            <h2 className="font-serif text-4xl font-bold text-metallic-navy mb-6">
              L'Expertise Métier, un Avantage Concret
            </h2>
            <p className="text-steel text-lg leading-relaxed mb-6">
              Ancien trader en finance de marché, puis professionnel du BTP et de la logistique, avant de créer Maison Siranno — ce parcours atypique n'est pas un hasard. Il forge une approche unique : data-driven, ROI-obsessée, et profondément ancrée dans les réalités terrain.
            </p>
            <p className="text-steel leading-relaxed mb-8">
              Je sais ce que c'est de prendre des décisions sous pression, de lire des chiffres qui comptent vraiment, de gérer des délais et des équipes. Quand vous me parlez de vos enjeux, je comprends avant même que vous ayez fini votre phrase. C'est cette intelligence de situation qui fait la différence.
            </p>
            <div className="space-y-3">
              {[
                "Approche data-driven héritée de la finance de marché",
                "Compréhension immédiate des enjeux métier terrain",
                "Solutions pensées pour le ROI, pas pour l'esthétique seule",
                "Un interlocuteur unique, disponible et ROI-obsédé"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-safe-green shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/Media/istockphoto-184956937-612x612.jpg"
                alt="Expertise et digital"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-serif italic text-lg leading-snug">
                  "La rigueur de la finance, la réalité du terrain, la précision du digital."
                </p>
                <p className="text-gold text-sm mt-2 font-medium">— Yoann DELALOY</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fondateur */}
        <div className="glass-panel rounded-3xl p-10 mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-28 h-28 rounded-full bg-charcoal overflow-hidden border-4 border-gold shadow-2xl shrink-0">
              <img src="https://picsum.photos/200/200?grayscale" alt="Yoann DELALOY" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <div className="font-serif text-2xl font-bold text-charcoal mb-1">Yoann DELALOY</div>
              <div className="text-metallic-gold-inline font-medium uppercase tracking-wide text-sm mb-4">Fondateur & Lead Architect</div>
              <p className="text-steel leading-relaxed max-w-2xl">
                Ancien trader, professionnel du BTP et de la logistique, reconverti dans le développement web et l'IA.
                Un parcours atypique qui forge une approche unique : data-driven, ROI-obsessée, et profondément humaine.
                Chaque artisan, commerçant et PME mérite des outils à la hauteur de leur ambition.
              </p>
              <div className="flex items-start gap-2 text-charcoal font-semibold font-serif text-sm mt-4 justify-center md:justify-start">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>1 rue Auguste Grivot — Châteauneuf-sur-Loire, 45110</span>
              </div>
            </div>
          </div>
        </div>

        {/* La Vision */}
        <div className="text-center mb-20">
          <div className="max-w-3xl mx-auto">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
              Vision
            </span>
            <h2 className="font-serif text-4xl font-bold text-metallic-navy mb-6">
              Pourquoi Maison Siranno ?
            </h2>
            <p className="text-steel text-xl leading-relaxed mb-6">
              Parce que les dirigeants qui font tourner l'économie locale méritent des outils conçus avec la même rigueur que ceux des grandes institutions financières. Sans le prix de Wall Street, avec tout le soin artisanal.
            </p>
            <p className="text-steel text-lg leading-relaxed">
              Maison Siranno, c'est l'alliance de la rigueur financière, de l'intelligence terrain et de l'excellence technique. Chaque projet est une investissement — nous nous assurons qu'il en soit un rentable.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-leather bg-charcoal text-white rounded-3xl p-12 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-metallic-gold-inline font-medium uppercase tracking-widest text-sm mb-4">
              <Users size={16} />
              <span>Collaboration</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Prêt à bâtir ensemble ?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Contactez-nous pour une consultation gratuite. On analysera votre situation et vous proposerons un plan d'action concret avec un ROI projeté.
            </p>
            <button
              onClick={onGoToContact}
              className="inline-flex items-center gap-2 px-8 py-4 btn-metallic-gold rounded-full font-semibold shadow-xl"
            >
              Prendre contact <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
