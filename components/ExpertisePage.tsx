import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowRight, CheckCircle2, Phone, Mail } from 'lucide-react';
import { buildServicesData, ServiceData } from './Services';
import { useLocalizedData } from '../hooks/useLocalizedData';
import { CONTACT_CONFIG } from '../constants/config';

interface ExpertisePageProps {
  onOpenService?: (service: ServiceData) => void;
  onNavigateService?: (service: ServiceData) => void;
  onGoToContact?: () => void;
}

export const ExpertisePage: React.FC<ExpertisePageProps> = ({ onOpenService, onNavigateService, onGoToContact }) => {
  const { t } = useTranslation();
  const { services: rawServices } = useLocalizedData();
  const servicesData = buildServicesData(rawServices as { id: string; [key: string]: unknown }[]);
  useSeo(
    'Nos Expertises — Développement Web, IA, Automatisation | Maison Siranno',
    'Maison Siranno accompagne les PME avec 6 expertises complémentaires : développement web & SaaS, automatisation n8n, agents IA RAG, marketing IA, conseil & formation, pilotage continu.',
    'https://maisonsiranno.fr/expertise'
  );
  const handleServiceClick = (service: ServiceData) => {
    if (onNavigateService) {
      onNavigateService(service);
    } else if (onOpenService) {
      onOpenService(service);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24">

      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
            {t('expertise_page.eyebrow')}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-metallic-navy">
            {t('expertise_page.title').split(' ')[0]}{' '}
            <span className="text-metallic-gold">{t('expertise_page.title').split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-steel text-xl max-w-2xl mx-auto leading-relaxed">
            {t('expertise_page.subtitle')}
          </p>
        </div>
      </div>

      {/* Sections verticales alternées */}
      <div className="space-y-0">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              className="py-20 group relative overflow-hidden"
              style={
                isEven
                  ? {
                      backgroundColor: 'rgba(30, 58, 95, 0.04)',
                    }
                  : {
                      backgroundColor: '#0F172A',
                      boxShadow: 'inset 0 1px 0 rgba(212,175,55,0.12), inset 0 -1px 0 rgba(212,175,55,0.08)',
                    }
              }
            >
              {/* Barre gold — sweep de gauche à droite au hover */}
              <div
                className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#B68D40]/80 via-[#F4E095] to-[#B68D40]/80 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{ boxShadow: '0 0 12px rgba(212,175,55,0.6), 0 2px 8px rgba(212,175,55,0.3)' }}
              ></div>

              {/* Image pleine hauteur de section — côté alterné */}
              {service.detailIcon && (
                <div
                  className={`absolute top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center pointer-events-none ${isEven ? 'right-0' : 'left-0'}`}
                >
                  <img
                    src={service.detailIcon}
                    alt={service.title}
                    className="w-3/4 h-3/4 object-contain drop-shadow-2xl opacity-20"
                  />
                </div>
              )}

              <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                  {/* Colonne vide côté image (desktop) — mobile : image compacte */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} lg:invisible flex items-center justify-center`}>
                    {service.detailIcon && (
                      <img
                        src={service.detailIcon}
                        alt={service.title}
                        className="w-full h-auto object-contain drop-shadow-2xl lg:hidden"
                      />
                    )}
                  </div>

                  {/* Contenu texte */}
                  <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm">
                      {t('expertise_page.service_label').replace('{n}', String(index + 1))}
                    </span>

                    <h2 className={`font-serif text-4xl font-bold leading-tight ${isEven ? 'text-metallic-navy' : 'text-white'}`}>
                      {service.title}
                    </h2>

                    <p className={`text-lg leading-relaxed ${isEven ? 'text-steel' : 'text-gray-300'}`}>
                      {service.fullDescription || service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-safe-green shrink-0 mt-0.5" />
                          <span className={isEven ? 'text-charcoal/80' : 'text-gray-300'}>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleServiceClick(service)}
                      className="inline-flex items-center gap-2 px-6 py-3 btn-metallic-dark text-white rounded-full font-medium shadow-lg hover:-translate-y-0.5 transition-transform"
                    >
                      {t('expertise_page.discover_cta')} <ArrowRight size={16} />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="cta-leather text-center bg-charcoal text-white rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
            <div className="absolute top-0 left-1/3 w-80 h-80 bg-gold/6 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 px-8 md:px-16 py-14">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">{t('expertise_page.cta.eyebrow')}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              {t('expertise_page.cta.title')}
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {t('expertise_page.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-7">
              <button onClick={onGoToContact} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 btn-metallic-gold rounded-full font-semibold shadow-xl text-base">
                <Mail size={18} />
                {t('expertise_page.cta.btn_message')}
              </button>
              <a href={CONTACT_CONFIG.phoneHref} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-white/25 text-white/75 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300">
                <Phone size={18} />
                {t('expertise_page.cta.btn_call')}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              {t('expertise_page.cta.guarantees', { returnObjects: true }).map((g: string) => (
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
