import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
          {t('privacy_policy.back')}
        </button>

        <h1 className="font-serif text-4xl font-bold text-metallic-navy mb-2">{t('privacy_policy.title')}</h1>
        <p className="text-steel text-sm mb-10">{t('privacy_policy.last_updated')} {new Date().toLocaleDateString(locale)}</p>

        <div className="prose prose-lg text-charcoal/80 space-y-8">

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('privacy_policy.sections.1_title')}</h2>
            <p>
              {t('privacy_policy.sections.1_body')}<br />
              <strong>{t('privacy_policy.sections.1_company')}</strong><br />
              {t('privacy_policy.sections.1_address')}<br />
              <a href="mailto:contact@yoanndelaloy.com" className="text-gold hover:underline">contact@yoanndelaloy.com</a><br />
              <a href="tel:+33647344364" className="text-gold hover:underline">06 47 34 43 64</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('privacy_policy.sections.2_title')}</h2>
            <p>{t('privacy_policy.sections.2_intro')}</p>
            <ul className="mt-3 space-y-2">
              <li><strong>{t('privacy_policy.sections.2_field_name')}</strong> — {t('privacy_policy.sections.2_field_name_desc')}</li>
              <li><strong>{t('privacy_policy.sections.2_field_email')}</strong> — {t('privacy_policy.sections.2_field_email_desc')}</li>
              <li><strong>{t('privacy_policy.sections.2_field_phone')}</strong> {t('privacy_policy.sections.2_field_phone_optional')} — {t('privacy_policy.sections.2_field_phone_desc')}</li>
              <li><strong>{t('privacy_policy.sections.2_field_message')}</strong> — {t('privacy_policy.sections.2_field_message_desc')}</li>
            </ul>
            <p className="mt-3">{t('privacy_policy.sections.2_no_sensitive')}</p>
            <p className="mt-3">
              <strong>{lang === 'fr' ? 'Données de navigation :' : lang === 'en' ? 'Navigation data:' : 'Datos de navegación:'}</strong> {t('privacy_policy.sections.2_analytics')}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('privacy_policy.sections.3_title')}</h2>
            <p>{t('privacy_policy.sections.3_intro')}</p>
            <ul className="mt-3 space-y-2">
              <li>{t('privacy_policy.sections.3_item1')}</li>
              <li>{t('privacy_policy.sections.3_item2')}</li>
              <li>{t('privacy_policy.sections.3_item3')}</li>
              <li>{t('privacy_policy.sections.3_item4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('privacy_policy.sections.4_title')}</h2>
            <p>
              {t('privacy_policy.sections.4_body')}<br />
              — <strong>{t('privacy_policy.sections.4_consent')}</strong> {t('privacy_policy.sections.4_consent_ref')}<br />
              — <strong>{t('privacy_policy.sections.4_interest')}</strong> {t('privacy_policy.sections.4_interest_ref')}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('privacy_policy.sections.5_title')}</h2>
            <p>{t('privacy_policy.sections.5_intro')}</p>
            <ul className="mt-3 space-y-2">
              <li><strong>Formspree (formspree.io)</strong> — {t('privacy_policy.sections.5_formspree')}</li>
              <li><strong>Hostinger International Ltd.</strong> — {t('privacy_policy.sections.5_hostinger')}</li>
              <li><strong>Google Analytics (Google Ireland Ltd.)</strong> — {t('privacy_policy.sections.5_ga')}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('privacy_policy.sections.6_title')}</h2>
            <p>
              {lang === 'fr'
                ? <><span>Vos données de contact sont conservées pendant </span><strong>{t('privacy_policy.sections.6_years')}</strong><span> à compter du dernier contact, puis supprimées ou anonymisées. Les données de navigation anonymisées (Google Analytics) sont conservées conformément aux paramètres par défaut de cet outil (14 mois).</span></>
                : lang === 'en'
                ? <><span>Your contact data is retained for </span><strong>{t('privacy_policy.sections.6_years')}</strong><span> from the last contact, then deleted or anonymised. Anonymised browsing data (Google Analytics) is retained in accordance with the tool's default settings (14 months).</span></>
                : <><span>Sus datos de contacto se conservan durante </span><strong>{t('privacy_policy.sections.6_years')}</strong><span> desde el último contacto, luego se eliminan o anonimizan. Los datos de navegación anonimizados (Google Analytics) se conservan de acuerdo con la configuración predeterminada de esa herramienta (14 meses).</span></>
              }
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('privacy_policy.sections.7_title')}</h2>
            <p>{t('privacy_policy.sections.7_intro')}</p>
            <ul className="mt-3 space-y-2">
              <li><strong>{t('privacy_policy.sections.7_access')}</strong> {t('privacy_policy.sections.7_access_ref')} — {t('privacy_policy.sections.7_access_desc')}</li>
              <li><strong>{t('privacy_policy.sections.7_rectification')}</strong> {t('privacy_policy.sections.7_rectification_ref')} — {t('privacy_policy.sections.7_rectification_desc')}</li>
              <li><strong>{t('privacy_policy.sections.7_erasure')}</strong> {t('privacy_policy.sections.7_erasure_ref')} — {t('privacy_policy.sections.7_erasure_desc')}</li>
              <li><strong>{t('privacy_policy.sections.7_portability')}</strong> {t('privacy_policy.sections.7_portability_ref')} — {t('privacy_policy.sections.7_portability_desc')}</li>
              <li><strong>{t('privacy_policy.sections.7_opposition')}</strong> {t('privacy_policy.sections.7_opposition_ref')} — {t('privacy_policy.sections.7_opposition_desc')}</li>
              <li><strong>{t('privacy_policy.sections.7_limitation')}</strong> {t('privacy_policy.sections.7_limitation_ref')} — {t('privacy_policy.sections.7_limitation_desc')}</li>
              <li><strong>{t('privacy_policy.sections.7_withdrawal')}</strong> — {t('privacy_policy.sections.7_withdrawal_desc')}</li>
            </ul>
            <p className="mt-4">
              {t('privacy_policy.sections.7_contact')}{' '}
              <a href="mailto:contact@yoanndelaloy.com" className="text-gold hover:underline">contact@yoanndelaloy.com</a>
            </p>
            <p className="mt-2">
              {t('privacy_policy.sections.7_complaint')}{' '}
              <strong>{t('privacy_policy.sections.7_cnil')}</strong>{' '}:{' '}
              <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.cnil.fr/fr/plaintes</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('privacy_policy.sections.8_title')}</h2>

            <h3 className="font-semibold text-charcoal text-lg mb-2">{t('privacy_policy.sections.8_necessary_title')}</h3>
            <p>{t('privacy_policy.sections.8_necessary_body')}</p>

            <h3 className="font-semibold text-charcoal text-lg mb-2 mt-6">{t('privacy_policy.sections.8_analytics_title')}</h3>
            <p>{t('privacy_policy.sections.8_analytics_body')}</p>
            <p className="mt-3">
              <strong>{t('privacy_policy.sections.8_optout')}</strong>{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">tools.google.com/dlpage/gaoptout</a>
            </p>
            <p className="mt-3">{t('privacy_policy.sections.8_withdraw')}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('privacy_policy.sections.9_title')}</h2>
            <p>{t('privacy_policy.sections.9_body')}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('privacy_policy.sections.10_title')}</h2>
            <p>{t('privacy_policy.sections.10_body')}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">{t('privacy_policy.sections.11_title')}</h2>
            <p>{t('privacy_policy.sections.11_body')}</p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <button
            onClick={onBack}
            className="btn-metallic-dark text-white font-semibold px-8 py-3 rounded-full inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            {t('privacy_policy.back')}
          </button>
        </div>

      </div>
    </div>
  );
};
