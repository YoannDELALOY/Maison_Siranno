import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { SectionId } from '../types';
import { CONTACT_CONFIG } from '../constants/config';
import { SOCIAL_LINKS } from '../data/socialLinks';
import { useTranslation } from '../hooks/useTranslation';

const { email: CONTACT_EMAIL, phone: PHONE_NUMBER, phoneHref: PHONE_HREF } = CONTACT_CONFIG;

/** Map des noms d'icônes vers les composants Lucide correspondants */
const ICON_MAP = {
  Linkedin: <Linkedin size={18} />,
  Github: <Github size={18} />,
  Instagram: <Instagram size={18} />,
  Facebook: <Facebook size={18} />,
  ExternalLink: <ExternalLink size={18} />,
} as const;

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          message: formData.message,
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <section
      id={SectionId.CONTACT}
      className="py-24 relative bg-paper"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl"
        >

          {/* Côté gauche — page coordonnées (texture renforcée) */}
          <div
            className="p-10 md:p-16 text-white space-y-8 relative overflow-hidden"
            style={{
              backgroundColor: '#0F172A',
              backgroundImage: [
                `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='lg1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23lg1)' opacity='0.55'/%3E%3C/svg%3E")`,
                `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='lg2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23lg2)' opacity='0.28'/%3E%3C/svg%3E")`,
              ].join(', '),
              backgroundSize: '600px 600px, 200px 200px',
              backgroundBlendMode: 'overlay, screen',
              boxShadow: 'inset -24px 0 48px rgba(0,0,0,0.65)',
            }}
          >
            {/* Ligne de reliure dorée sur le bord droit */}
            <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent pointer-events-none z-20"></div>
            {/* Bord gauche — courbure page posée */}
            <div className="absolute top-0 left-0 bottom-0 w-16 pointer-events-none z-10"
              style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 40%, transparent 100%)' }}
            ></div>
            {/* Coin bas-gauche — ombre courbure de page */}
            <div className="absolute bottom-0 left-0 w-48 h-32 pointer-events-none z-10"
              style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(0,0,0,0.55) 0%, transparent 65%)' }}
            ></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="font-serif text-4xl font-bold mb-6 text-white">
                {t('contact.title')} <span className="text-metallic-gold">{t('contact.title_accent')}</span>.
              </h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                {t('contact.subtitle')}
              </p>

              <div className="space-y-6">
                {/* Adresse */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-lg border border-gold/25 shrink-0 shadow-[0_0_12px_rgba(197,160,89,0.15)]">
                    <MapPin size={22} className="icon-metallic-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{t('contact.address_label')}</h4>
                    <p className="text-gray-400">
                      {CONTACT_CONFIG.address.street}<br />
                      {CONTACT_CONFIG.address.city}, {CONTACT_CONFIG.address.postal}<br />
                      {CONTACT_CONFIG.address.region}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-lg border border-gold/25 shrink-0 shadow-[0_0_12px_rgba(197,160,89,0.15)]">
                    <Mail size={22} className="icon-metallic-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{t('contact.email_label')}</h4>
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=Demande%20de%20consultation%20%E2%80%94%20Maison%20Siranno`}
                      className="text-gray-400 hover:text-gold transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Téléphone — cliquable */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-lg border border-gold/25 shrink-0 shadow-[0_0_12px_rgba(197,160,89,0.15)]">
                    <Phone size={22} className="icon-metallic-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{t('contact.phone_label')}</h4>
                    <a
                      href={PHONE_HREF}
                      className="text-gray-400 hover:text-gold transition-colors text-lg font-medium"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">{t('contact.social_label')}</p>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="flex items-center gap-2 px-3 py-2 btn-metallic-dark rounded-lg text-xs font-medium"
                    >
                      {ICON_MAP[s.iconName]}
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Côté droit — vieille page de livre (crème irrégulier) */}
          <div
            className="p-10 md:p-16 flex flex-col justify-center relative"
            style={{
              backgroundColor: '#FAF6EE',
              backgroundImage: [
                `url("data:image/svg+xml,%3Csvg viewBox='0 0 700 700' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pg3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.32' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pg3)' opacity='0.38'/%3E%3C/svg%3E")`,
                `radial-gradient(ellipse at 12% 18%, rgba(185,145,65,0.1) 0%, transparent 48%)`,
                `radial-gradient(ellipse at 80% 72%, rgba(160,120,45,0.08) 0%, transparent 42%)`,
                `radial-gradient(ellipse at 50% 90%, rgba(175,140,55,0.07) 0%, transparent 38%)`,
                `radial-gradient(ellipse at 70% 8%, rgba(200,170,80,0.07) 0%, transparent 35%)`,
                `radial-gradient(ellipse at 28% 55%, rgba(155,120,42,0.06) 0%, transparent 30%)`,
              ].join(', '),
              backgroundSize: '700px 700px, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%',
              backgroundBlendMode: 'multiply, normal, normal, normal, normal, normal',
              boxShadow: 'inset 24px 0 50px rgba(0,0,0,0.16)',
            }}
          >
            {/* Ombre reliure côté gauche — courbure prononcée */}
            <div className="absolute top-0 left-0 bottom-0 w-16 pointer-events-none z-0"
              style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 50%, transparent 100%)' }}
            ></div>
            {/* Bord droit — légère courbure de page */}
            <div className="absolute top-0 right-0 bottom-0 w-12 pointer-events-none z-10"
              style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.12) 0%, transparent 100%)' }}
            ></div>
            {/* Coin bas-droit — levée de page prête à tourner */}
            <div className="absolute bottom-0 right-0 w-44 h-36 pointer-events-none z-10"
              style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 35%, transparent 60%)', borderRadius: '0 0 1.5rem 0' }}
            ></div>
            <h3 className="font-serif text-2xl font-bold text-metallic-navy mb-8">{t('contact.form_title')}</h3>

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-safe-green/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-safe-green" />
                </div>
                <h4 className="font-serif text-xl font-bold text-charcoal mb-2">{t('contact.success_title')}</h4>
                <p className="text-steel">{t('contact.success_body')}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-gold hover:underline"
                >
                  {t('contact.success_again')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      {t('contact.field_name')} <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                      placeholder={t('contact.field_name_placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      {t('contact.field_email')} <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                      placeholder={t('contact.field_email_placeholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                    {t('contact.field_phone')}{' '}
                    <span className="text-steel text-xs font-normal">{t('contact.field_phone_optional')}</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    placeholder={t('contact.field_phone_placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    {t('contact.field_message')} <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
                    placeholder={t('contact.field_message_placeholder')}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-risk-red text-sm">
                    {t('contact.error_body')}{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-metallic-dark text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      {t('contact.submitting')}
                    </>
                  ) : (
                    <>
                      {t('contact.submit')} <Send size={18} />
                    </>
                  )}
                </button>

                <p className="text-xs text-steel text-center">
                  {t('contact.call_instead')}{' '}
                  <a href={PHONE_HREF} className="phone-link-hover-gold font-semibold">
                    {PHONE_NUMBER}
                  </a>
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
