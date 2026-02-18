import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData, ServiceData } from './Services';
import { SectionId } from '../types';

interface ExpertisePageProps {
  onOpenService?: (service: ServiceData) => void;
}

export const ExpertisePage: React.FC<ExpertisePageProps> = ({ onOpenService }) => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
            Savoir-faire & Technologies
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-metallic-navy">
            Notre{' '}
            <span className="text-metallic-gold">Expertise</span>
          </h1>
          <p className="text-steel text-xl max-w-2xl mx-auto leading-relaxed">
            Six domaines d'excellence au service des PME, artisans et commerçants du Val de Loire.
            Chaque prestation est conçue sur mesure, sans compromis.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white/50 backdrop-blur-md border border-white/70 p-8 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer"
              onClick={() => onOpenService?.(service)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onOpenService?.(service)}
            >
              {/* Barre dorée au survol */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>

              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-paper to-white shadow-inner flex items-center justify-center mb-6 text-charcoal group-hover:text-gold group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3 group-hover:text-metallic-gold transition-colors">
                {service.title}
              </h3>

              <p className="text-steel font-light leading-relaxed text-sm mb-5">
                {service.fullDescription}
              </p>

              {/* Bénéfices */}
              <ul className="space-y-2 mb-6">
                {service.benefits.slice(0, 3).map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
                    <CheckCircle2 size={14} className="text-safe-green shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-metallic-gold-inline">Découvrir en détail</span>
                <ArrowRight size={14} className="text-gold" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center bg-charcoal text-white rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Parlons de vos besoins concrets. La première consultation est gratuite.
          </p>
          <a
            href={`#${SectionId.CONTACT}`}
            className="inline-flex items-center gap-2 px-8 py-4 btn-metallic-gold rounded-full font-semibold shadow-xl"
          >
            Démarrer un projet <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};
