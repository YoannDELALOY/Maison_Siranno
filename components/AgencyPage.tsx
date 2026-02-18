import React from 'react';
import { MapPin, CheckCircle2, Users, Lightbulb, Star, Quote, ArrowRight } from 'lucide-react';
import { PerformanceChart } from './PerformanceChart';
import { ProjectData } from './Projects';
import { SectionId } from '../types';

interface AgencyPageProps {
  onOpenProject?: (project: ProjectData) => void;
}

const testimonials = [
  {
    name: "Julien Delaloy",
    role: "Fondateur",
    company: "JD Rénovation",
    content: "Yoann a su créer notre présence numérique de A à Z. Site vitrine, identité visuelle, référencement local... en quelques semaines, notre entreprise de rénovation est devenue visible sur toute la région. Les demandes de devis ont explosé dès le premier mois.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Sylvie Bidoux",
    role: "Gérante",
    company: "SI Griveaux",
    content: "Grâce à Yoann, nos assemblées générales sont désormais automatiquement retranscrites et résumées. Ce qui prenait plusieurs heures de travail manuel se fait en quelques minutes. Un gain de temps considérable et une fiabilité redoutable.",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  }
];

export const AgencyPage: React.FC<AgencyPageProps> = () => {
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
            Maison Siranno : l'alliance de l'artisanat numérique et de l'innovation technologique
            au service des acteurs locaux.
          </p>
        </div>

        {/* Section ADN */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Left: Philosophy */}
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-2 text-metallic-gold-inline font-medium uppercase tracking-widest text-sm">
              <Users size={16} />
              <span>L'ADN de l'Agence</span>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight text-metallic-navy">
              L'Architecte de votre{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-metallic-gold">Réussite Digitale</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-gold/20 -z-0 rounded"></span>
              </span>.
            </h2>

            <div className="text-steel text-lg leading-relaxed">
              <p className="mb-3">
                Fondée à Châteauneuf-sur-Loire,{' '}
                <strong className="text-charcoal font-semibold">Maison Siranno</strong> n'est pas une simple
                agence de développement. Nous sommes le partenaire stratégique des PME et artisans qui
                refusent le statu quo.
              </p>
              <p>
                Notre vision : apporter l'excellence technique des grands groupes aux acteurs de
                l'économie locale. Nous construisons des écosystèmes digitaux conçus pour durer,
                performer et vous libérer du temps.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="font-serif font-semibold text-charcoal text-lg">Pourquoi nous choisir ?</h4>
              {[
                "Une architecture technique 'Gold Standard'",
                "Une relation de proximité réelle (Loiret & alentours)",
                "L'innovation IA au service de votre rentabilité"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-start">
                  <CheckCircle2 className="text-safe-green shrink-0" size={20} />
                  <span className="text-charcoal font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-start gap-6 border-t border-gray-100 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-charcoal overflow-hidden border-2 border-gold shadow-lg shrink-0">
                  <img src="https://picsum.photos/200/200?grayscale" alt="Yoann Delaloy" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="font-serif text-xl font-bold text-charcoal">Yoann Delaloy</div>
                  <div className="text-sm text-metallic-gold-inline font-medium uppercase tracking-wide">Fondateur & Lead Architect</div>
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>
              <div className="text-left">
                <div className="flex items-start gap-2 text-charcoal font-semibold font-serif text-sm">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <span>1 rue Auguste Grivot<br />Châteauneuf-sur-Loire, 45110</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Performance Chart */}
          <div className="relative" style={{ isolation: 'isolate' }}>
            <div
              className="glass-panel p-8 rounded-3xl shadow-2xl border-t border-white/80 backdrop-blur-xl bg-white/60"
              style={{ position: 'relative', zIndex: 10 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal">Impact Client Moyen</h3>
                  <p className="text-sm text-steel">Évolution du CA après transformation</p>
                </div>
                <div className="p-2 bg-gold/10 rounded-lg text-gold">
                  <Lightbulb size={20} />
                </div>
              </div>

              <div style={{ position: 'relative', zIndex: 1, overflow: 'visible' }}>
                <PerformanceChart />
              </div>

              <div className="mt-6 flex justify-between items-center text-sm border-t border-gray-100 pt-4">
                <div className="text-steel">Retour sur investissement</div>
                <div className="font-bold text-safe-green flex items-center gap-1">
                  +45% <span className="text-xs font-normal text-steel">(Dès 6 mois)</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-blob pointer-events-none" style={{ zIndex: 0 }}></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl animate-blob pointer-events-none" style={{ zIndex: 0, animationDelay: '2s' }}></div>

            <div
              className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 glass-card p-4 rounded-xl shadow-xl border-l-4 border-gold animate-slide-up"
              style={{ animationDelay: '0.5s', zIndex: 50 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold font-serif text-metallic-gold">100%</div>
                <div className="text-xs text-steel uppercase tracking-wider">Sur Mesure</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Témoignages */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-2 block">Témoignages</span>
            <h2 className="font-serif text-4xl font-bold text-metallic-navy mb-4">
              Ils nous font{' '}
              <span className="text-metallic-gold underline decoration-gold/30 underline-offset-4">confiance</span>
            </h2>
            <p className="text-steel">Des partenaires locaux qui ont franchi le cap du digital.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="glass-card p-8 rounded-2xl flex flex-col relative group"
              >
                <div className="absolute top-6 right-8 text-gold/10 group-hover:text-gold/25 transition-colors">
                  <Quote size={40} fill="currentColor" />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} className="text-gold fill-gold" />
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
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-charcoal text-white rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Prêt à bâtir ensemble ?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Contactez-nous pour une consultation gratuite. On analysera votre situation et vous proposerons un plan d'action concret.
          </p>
          <a
            href={`#${SectionId.CONTACT}`}
            className="inline-flex items-center gap-2 px-8 py-4 btn-metallic-gold rounded-full font-semibold shadow-xl"
          >
            Prendre contact <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </div>
  );
};
