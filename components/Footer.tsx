import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Linkedin, Github, Instagram, Facebook, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { SectionId } from '../types';
import { buildServicesData, ServiceData } from './Services';
import { useLocalizedData } from '../hooks/useLocalizedData';
import { CONTACT_CONFIG } from '../constants/config';
import { SOCIAL_LINKS } from '../data/socialLinks';

interface FooterProps {
  onShowLegal?: (page: 'mentions' | 'privacy') => void;
  onNavigateService?: (service: ServiceData) => void;
}

/** Map des noms d'icônes vers les composants Lucide correspondants */
const ICON_MAP = {
  Linkedin: <Linkedin size={18} />,
  Github: <Github size={18} />,
  Instagram: <Instagram size={18} />,
  Facebook: <Facebook size={18} />,
  ExternalLink: <ExternalLink size={18} />,
} as const;

export const Footer: React.FC<FooterProps> = ({ onShowLegal, onNavigateService }) => {
  const { t } = useTranslation();
  const { services: rawServices } = useLocalizedData();
  const servicesData = buildServicesData(rawServices as { id: string; [key: string]: unknown }[]);
  return (
    <footer className="bg-charcoal text-white border-t border-white/5">

      {/* Footer principal — 2 colonnes sur mobile, 3 sur desktop */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">

        {/* Colonne 1 — Logo & tagline */}
        <div className="col-span-2 lg:col-span-1">
          <div className="inline-block bg-white/10 rounded-xl p-2 mb-4">
            <img
              src="/logos/Design sans titre (84).png"
              alt="Maison Siranno - L'art du web"
              className="h-12 object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mt-2" style={{ whiteSpace: 'pre-line' }}>
            {t('footer.tagline')}
          </p>

          {/* Réseaux sociaux */}
          <div className="flex gap-3 mt-6">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="p-2 btn-metallic-dark rounded-full"
                aria-label={s.label}
              >
                {ICON_MAP[s.iconName]}
              </a>
            ))}
          </div>
        </div>

        {/* Colonne 2 — Expertises (cliquables) */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-5">{t('footer.col_expertise')}</h4>
          <ul className="space-y-3">
            {servicesData.map((service) => (
              <li key={service.id}>
                <button
                  onClick={() => onNavigateService?.(service)}
                  className="text-gray-400 hover-metallic-gold transition-all text-sm text-left"
                >
                  {service.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 — Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-5">{t('footer.col_contact')}</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>
                {CONTACT_CONFIG.address.street}<br />
                {CONTACT_CONFIG.address.city}, {CONTACT_CONFIG.address.postal}<br />
                {CONTACT_CONFIG.address.region}
              </span>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="flex items-center gap-3 text-gray-400 hover-metallic-gold transition-all text-sm"
              >
                <Mail size={16} className="text-gold shrink-0" />
                {CONTACT_CONFIG.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT_CONFIG.phoneHref}
                className="flex items-center gap-3 text-gray-400 hover-metallic-gold transition-all text-sm font-medium"
              >
                <Phone size={16} className="text-gold shrink-0" />
                {CONTACT_CONFIG.phone}
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Barre de bas de page */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between text-xs text-gray-500 text-center sm:text-left">
          <p>{t('footer.copyright').replace('{year}', String(new Date().getFullYear()))}</p>

          <div className="flex gap-4 flex-wrap justify-center sm:justify-end">
            <button
              onClick={() => onShowLegal?.('mentions')}
              className="hover:text-gold transition-colors"
            >
              {t('footer.legal')}
            </button>
            <button
              onClick={() => onShowLegal?.('privacy')}
              className="hover:text-gold transition-colors"
            >
              {t('footer.privacy')}
            </button>
            <a
              href="https://yoanndelaloy.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-1"
            >
              Portfolio <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
