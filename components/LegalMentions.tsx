import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

interface LegalMentionsProps {
  onBack: () => void;
}

export const LegalMentions: React.FC<LegalMentionsProps> = ({ onBack }) => {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const locale = lang === 'en' ? 'en-GB' : lang === 'es' ? 'es-ES' : 'fr-FR';

  return (
    <div className="min-h-screen bg-paper py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gold hover:underline mb-10 font-medium"
        >
          <ArrowLeft size={18} />
          {t('legal_mentions.back')}
        </button>

        <h1 className="font-serif text-4xl font-bold text-metallic-navy mb-2">{t('legal_mentions.title')}</h1>
        <p className="text-steel text-sm mb-10">{t('legal_mentions.last_updated')} {new Date().toLocaleDateString(locale)}</p>

        <div className="prose prose-lg text-charcoal/80 space-y-8">

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('legal_mentions.sections.1_title')}</h2>
            <p>{t('legal_mentions.sections.1_intro')}</p>
            <ul className="space-y-1 mt-3 list-none">
              <li><strong>{t('legal_mentions.sections.1_company')}</strong> Yoann DELALOY — Maison Siranno</li>
              <li><strong>{t('legal_mentions.sections.1_status')}</strong> {t('legal_mentions.sections.1_status_val')}</li>
              <li><strong>{t('legal_mentions.sections.1_activity')}</strong> {t('legal_mentions.sections.1_activity_val')}</li>
              <li><strong>{t('legal_mentions.sections.1_siret')}</strong> {t('legal_mentions.sections.1_siret_val')}</li>
              <li><strong>{t('legal_mentions.sections.1_ape')}</strong> {t('legal_mentions.sections.1_ape_val')}</li>
              <li><strong>{t('legal_mentions.sections.1_address')}</strong> {t('legal_mentions.sections.1_address_val')}</li>
              <li><strong>{t('legal_mentions.sections.1_phone')}</strong>{' '}
                <a href="tel:+33647344364" className="text-gold hover:underline">06 47 34 43 64</a>
              </li>
              <li><strong>{t('legal_mentions.sections.1_email')}</strong>{' '}
                <a href="mailto:contact@yoanndelaloy.com" className="text-gold hover:underline">contact@yoanndelaloy.com</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('legal_mentions.sections.2_title')}</h2>
            <p>{t('legal_mentions.sections.2_body')}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('legal_mentions.sections.3_title')}</h2>
            <p>{t('legal_mentions.sections.3_intro')}</p>
            <ul className="space-y-1 mt-3 list-none">
              <li><strong>{t('legal_mentions.sections.3_company')}</strong> {t('legal_mentions.sections.3_company_val')}</li>
              <li><strong>{t('legal_mentions.sections.3_address')}</strong> {t('legal_mentions.sections.3_address_val')}</li>
              <li><strong>{t('legal_mentions.sections.3_website')}</strong>{' '}
                <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.hostinger.fr</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('legal_mentions.sections.4_title')}</h2>
            <p>{t('legal_mentions.sections.4_body')}</p>
            <p className="mt-3">{t('legal_mentions.sections.4_images')}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('legal_mentions.sections.5_title')}</h2>
            <p>{t('legal_mentions.sections.5_body')}</p>
            <p className="mt-3">
              {t('legal_mentions.sections.5_rights')}{' '}
              <a href="mailto:contact@yoanndelaloy.com" className="text-gold hover:underline">contact@yoanndelaloy.com</a>
            </p>
            <p className="mt-3">
              {t('legal_mentions.sections.5_privacy_link')} <span className="text-gold font-medium">{t('legal_mentions.sections.5_privacy_label')}</span> {t('legal_mentions.sections.5_privacy_suffix')}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('legal_mentions.sections.6_title')}</h2>
            <p>{t('legal_mentions.sections.6_body')}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('legal_mentions.sections.7_title')}</h2>
            <p>{t('legal_mentions.sections.7_body')}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('legal_mentions.sections.8_title')}</h2>
            <p>{t('legal_mentions.sections.8_body')}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('legal_mentions.sections.9_title')}</h2>
            <p>{t('legal_mentions.sections.9_body')}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('legal_mentions.sections.10_title')}</h2>
            <p>
              {t('legal_mentions.sections.10_body')}<br />
              {t('legal_mentions.sections.10_email_label')} <a href="mailto:contact@yoanndelaloy.com" className="text-gold hover:underline">contact@yoanndelaloy.com</a><br />
              {t('legal_mentions.sections.10_phone_label')} <a href="tel:+33647344364" className="text-gold hover:underline">06 47 34 43 64</a>
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <button
            onClick={onBack}
            className="btn-metallic-dark text-white font-semibold px-8 py-3 rounded-full inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            {t('legal_mentions.back')}
          </button>
        </div>

      </div>
    </div>
  );
};
