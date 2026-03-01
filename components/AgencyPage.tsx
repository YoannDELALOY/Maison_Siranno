import React, { useEffect, useRef, useState } from 'react';
import { useSeo } from '../hooks/useSeo';
import { useTranslation } from '../hooks/useTranslation';
import { MapPin, CheckCircle2, Users, Heart, Gem, Target, TrendingUp, ArrowRight, BarChart2, Mail, Phone } from 'lucide-react';
import { CONTACT_CONFIG } from '../constants/config';

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

const valueIcons = [
  <BarChart2 size={24} />,
  <Target size={24} />,
  <Heart size={24} />,
  <TrendingUp size={24} />,
];

const valueKeys = ['data_driven', 'custom', 'human', 'roi'] as const;

const partnerEmojis = ['🎨', '📸', '🎬', '🔍', '🖨️', '✍️', '📊', '⚖️'];

const timelineStyles = [
  { color: 'border-emerald-500', bgColor: 'bg-emerald-500/10' },
  { color: 'border-amber-600',   bgColor: 'bg-amber-600/10'   },
  { color: 'border-blue-500',    bgColor: 'bg-blue-500/10'    },
  { color: 'border-gold',        bgColor: 'bg-gold/10'        },
];

export const AgencyPage: React.FC<AgencyPageProps> = ({ onGoToContact }) => {
  const { t } = useTranslation();
  useSeo(
    'L\'Agence — Maison Siranno | Yoann DELALOY, expert IA & Web à Châteauneuf-sur-Loire',
    'Découvrez Maison Siranno, agence IA & Web fondée par Yoann DELALOY à Châteauneuf-sur-Loire (45). Notre mission : des résultats mesurables pour les PME grâce à l\'IA et l\'automatisation.',
    'https://maisonsiranno.fr/agence'
  );

  const partners: { label: string; description: string }[] = t('agency_page.partners', { returnObjects: true });
  const checkpoints: string[] = t('agency_page.expertise_checkpoints', { returnObjects: true });
  const guarantees: string[] = t('agency_page.cta.guarantees', { returnObjects: true });
  const timelineTexts: { period: string; sector: string; description: string }[] = t('agency_page.timeline', { returnObjects: true });
  const timeline = timelineTexts.map((item, i) => ({ ...item, ...timelineStyles[i] }));

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-20">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
            {t('agency_page.eyebrow')}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-metallic-navy">
            {t('agency_page.title')}
          </h1>
          <p className="text-steel text-xl max-w-2xl mx-auto leading-relaxed">
            {t('agency_page.subtitle')}
          </p>
        </div>

        {/* Stats animées */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-24">
          <AnimatedStat value="+27%" label={t('agency_page.stats.visibility')} delay={0} />
          <AnimatedStat value="98%" label={t('agency_page.stats.satisfaction')} delay={150} />
          <AnimatedStat value="100%" label={t('agency_page.stats.custom')} delay={300} />
        </div>

        {/* Mon Parcours — Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">
              {t('agency_page.timeline_eyebrow')}
            </span>
            <h2 className="font-serif text-4xl font-bold text-metallic-navy">
              {t('agency_page.timeline_title')}
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
              {t('agency_page.values_eyebrow')}
            </span>
            <h2 className="font-serif text-4xl font-bold text-metallic-navy">
              {t('agency_page.values_title')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueKeys.map((key, i) => (
              <div key={key} className="glass-card p-6 rounded-2xl text-center group hover:border-gold/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 flex items-center justify-center mx-auto mb-4 text-gold group-hover:scale-110 transition-transform">
                  {valueIcons[i]}
                </div>
                <h4 className="font-serif text-lg font-bold text-charcoal mb-3">{t(`agency_page.values.${key}.title`)}</h4>
                <p className="text-steel text-sm leading-relaxed">{t(`agency_page.values.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* L'Expertise Métier */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">
              {t('agency_page.expertise_eyebrow')}
            </span>
            <h2 className="font-serif text-4xl font-bold text-metallic-navy mb-6">
              {t('agency_page.expertise_title')}
            </h2>
            <p className="text-steel text-lg leading-relaxed mb-6">
              {t('agency_page.expertise_body_1')}
            </p>
            <p className="text-steel leading-relaxed mb-8">
              {t('agency_page.expertise_body_2')}
            </p>
            <div className="space-y-3">
              {checkpoints.map((item: string, i: number) => (
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
                  "{t('agency_page.expertise_quote')}"
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
              <div className="text-metallic-gold-inline font-medium uppercase tracking-wide text-sm mb-4">{t('agency_page.founder_role')}</div>
              <p className="text-steel leading-relaxed max-w-2xl">
                {t('agency_page.founder_bio')}
              </p>
              <div className="flex items-start gap-2 text-charcoal font-semibold font-serif text-sm mt-4 justify-center md:justify-start">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>1 rue Auguste Grivot — Châteauneuf-sur-Loire, 45110</span>
              </div>
            </div>
          </div>
        </div>

        {/* Réseau Partenaires */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">
              {t('agency_page.network_eyebrow')}
            </span>
            <h2 className="font-serif text-4xl font-bold text-metallic-navy mb-4">
              {t('agency_page.network_title')}
            </h2>
            <p className="text-steel text-lg max-w-2xl mx-auto leading-relaxed">
              {t('agency_page.network_subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(Array.isArray(partners) ? partners : []).map((partner, i) => (
              <div key={i} className="glass-card p-5 rounded-2xl group hover:border-gold/30 transition-colors">
                <div className="text-3xl mb-3">{partnerEmojis[i]}</div>
                <h4 className="font-serif text-base font-bold text-charcoal mb-2">{partner.label}</h4>
                <p className="text-steel text-sm leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* La Vision */}
        <div className="text-center mb-20">
          <div className="max-w-3xl mx-auto">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
              {t('agency_page.vision_eyebrow')}
            </span>
            <h2 className="font-serif text-4xl font-bold text-metallic-navy mb-6">
              {t('agency_page.vision_title')}
            </h2>
            <p className="text-steel text-xl leading-relaxed mb-6">
              {t('agency_page.vision_body_1')}
            </p>
            <p className="text-steel text-lg leading-relaxed">
              {t('agency_page.vision_body_2')}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-leather bg-charcoal text-white rounded-3xl overflow-hidden relative text-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
            <div className="absolute top-0 left-1/3 w-80 h-80 bg-gold/6 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 px-8 md:px-16 py-14">
            <div className="inline-flex items-center gap-2 text-metallic-gold-inline font-medium uppercase tracking-widest text-sm mb-4">
              <Users size={16} />
              <span>{t('agency_page.cta.eyebrow')}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              {t('agency_page.cta.title')}
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {t('agency_page.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-7">
              <button onClick={onGoToContact} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 btn-metallic-gold rounded-full font-semibold shadow-xl text-base">
                <Mail size={18} />
                {t('agency_page.cta.btn_message')}
              </button>
              <a href={CONTACT_CONFIG.phoneHref} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-white/25 text-white/75 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300">
                <Phone size={18} />
                {t('agency_page.cta.btn_call')}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              {(Array.isArray(guarantees) ? guarantees : []).map((g: string) => (
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
