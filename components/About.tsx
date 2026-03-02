import React, { Suspense } from 'react';
import { MapPin, CheckCircle2, Users, Lightbulb } from 'lucide-react';
import { SectionId } from '../types';
import { useTranslation } from '../hooks/useTranslation';

// Recharts (~1.2 MB) chargé uniquement quand la section est affichée
const PerformanceChart = React.lazy(() => import('./PerformanceChart').then(m => ({ default: m.PerformanceChart })));

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id={SectionId.ABOUT} className="py-24 bg-paper relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: Philosophy & Agency DNA */}
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-metallic-gold-inline font-medium uppercase tracking-widest text-sm mx-auto md:mx-0">
            <Users size={16} />
            <span>{t('about.eyebrow')}</span>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight text-metallic-navy">
            {t('about.title').split(':').shift()}:{' '}
            <br className="hidden lg:block" />
            <span className="text-metallic-gold">{t('about.title').split(':').pop()?.trim()}</span>.
          </h2>

          <div className="text-steel text-lg leading-relaxed">
            <p className="mb-3">
              {t('about.description_1').split('Maison Siranno').shift()}
              <strong className="text-charcoal font-semibold">Maison Siranno</strong>
              {t('about.description_1').split('Maison Siranno').pop()}
            </p>
            <p>
              {t('about.description_2')}
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <h4 className="font-serif font-semibold text-charcoal text-lg">{t('about.why_title')}</h4>
            {(t('about.why_items', { returnObjects: true }) as string[]).map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle2 className="text-safe-green shrink-0" size={20} />
                <span className="text-charcoal font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Bloc fondateur centré sur mobile */}
          <div className="pt-8 flex flex-col items-center md:items-start gap-4 border-t border-gray-100 mt-8">
            <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-charcoal overflow-hidden border-2 border-gold shadow-lg shrink-0">
                <img src="https://picsum.photos/200/200?grayscale" alt="Yoann Delaloy" width="64" height="64" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <div className="font-serif text-xl font-bold text-charcoal">Yoann DELALOY</div>
                <div className="text-sm text-metallic-gold-inline font-medium uppercase tracking-wide">{t('about.founder_role')}</div>
              </div>
            </div>
            <div className="flex items-start gap-2 text-charcoal font-semibold font-serif text-sm text-center md:text-left justify-center md:justify-start">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>1 rue Auguste Grivot<br />Châteauneuf-sur-Loire, 45110</span>
            </div>
          </div>
        </div>

        {/* Right: Performance Viz */}
        <div className="relative" style={{ isolation: 'isolate' }}>

          {/* Main Card — z-index 10 */}
          <div
            className="glass-panel p-8 rounded-3xl shadow-2xl border-t border-white/80 backdrop-blur-xl bg-white/60"
            style={{ position: 'relative', zIndex: 10 }}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal">{t('about.chart_title')}</h3>
                <p className="text-sm text-steel">{t('about.chart_subtitle')}</p>
              </div>
              <div className="p-2 bg-gold/10 rounded-lg text-gold">
                <div className="p-2 bg-gold/10 rounded-lg text-gold">
                  <Lightbulb size={20} />
                </div>
              </div>
            </div>

            {/* Graphique dans son propre contexte, pas de z-index conflictuel */}
            <div data-cursor-ignore style={{ position: 'relative', zIndex: 1, overflow: 'visible' }}>
              <Suspense fallback={<div className="w-full h-[300px] flex items-center justify-center text-steel text-sm">Chargement…</div>}>
                <PerformanceChart />
              </Suspense>
            </div>

            <div className="mt-6 flex justify-between items-center text-sm border-t border-gray-100 pt-4">
              <div className="text-steel">{t('about.chart_satisfaction_label')}</div>
              <div className="font-bold text-safe-green flex items-center gap-1">
                {t('about.chart_satisfaction_value')}
              </div>
            </div>
          </div>

          {/* Background Blobs — derrière tout */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-blob pointer-events-none" style={{ zIndex: 0 }}></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl animate-blob pointer-events-none" style={{ zIndex: 0, animationDelay: '2s' }}></div>

          {/* Badge flottant "100% Sur Mesure" — doit être AU-DESSUS du graphique (z-index 50) */}
          <div
            className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 glass-card p-4 rounded-xl shadow-xl border-l-4 border-gold animate-slide-up"
            style={{ animationDelay: '0.5s', zIndex: 50 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold font-serif text-metallic-gold">{t('about.badge_value')}</div>
              <div className="text-xs text-steel uppercase tracking-wider">{t('about.badge_label')}</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
