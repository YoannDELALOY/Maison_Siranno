import React, { useRef, useState } from 'react';
import { ArrowRight, Clock, BookOpen, Calendar, ChevronLeft, ChevronRight, Mail, Phone, Tag } from 'lucide-react';
import { BlogCategory, BlogArticle } from '../data/blog';
import { useSeo } from '../hooks/useSeo';
import { useTranslation } from '../hooks/useTranslation';
import { useLocalizedData } from '../hooks/useLocalizedData';
import iconWebApps from '../Media/Logos/Logo_expertise/Icone_Développement_Web_Apps_&_SaaS.png';
import iconAutomatisation from '../Media/Logos/Logo_expertise/Icone_Automatisation_&_Orchestration_n8n.png';
import iconIA from '../Media/Logos/Logo_expertise/Icone_Intelligence_Artificielle_&_Agents_RAG.png';
import iconContenu from '../Media/Logos/Logo_expertise/Icone_Création_de_Contenu_&_Marketing_IA.png';
import iconConseil from '../Media/Logos/Logo_expertise/Icone_Conseil_&_Formation.png';
import iconPilotage from '../Media/Logos/Logo_expertise/Icone_Pilotage_Continu.png';

interface BlogPageProps {
  onNavigateBlogArticle?: (projectId: string) => void;
  onGoToContact?: () => void;
}

const EXPERTISE_SLIDERS: { category: BlogCategory; label: string; icon: string }[] = [
  { category: 'Développement Web & SaaS',        label: 'Développement Web & SaaS',         icon: iconWebApps },
  { category: 'Automatisation & n8n',             label: 'Automatisation & n8n',             icon: iconAutomatisation },
  { category: 'Intelligence Artificielle & RAG',  label: 'Intelligence Artificielle & RAG',  icon: iconIA },
  { category: 'Contenu & Marketing IA',           label: 'Contenu & Marketing IA',           icon: iconContenu },
  { category: 'Conseil & Formation',              label: 'Conseil & Formation',              icon: iconConseil },
  { category: 'Pilotage Continu',                 label: 'Pilotage Continu',                 icon: iconPilotage },
];

// ─── Carte dark (style réalisation) ─────────────────────────────────────────

const ArticleCardDark: React.FC<{ article: BlogArticle; onClick?: () => void }> = ({ article, onClick }) => {

  return (
    <div
      data-cursor-hover={article.available ? '' : undefined}
      className="group relative rounded-2xl overflow-hidden flex-shrink-0 w-72 md:w-80 transition-all duration-300 hover:-translate-y-2"
      style={{
        backgroundColor: '#0F172A',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: '600px 600px',
        backgroundBlendMode: 'overlay',
        borderLeft: '3px solid #D4AF37',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 24px 0 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
        opacity: article.available ? 1 : 0.65,
        cursor: article.available ? 'pointer' : 'default',
      }}
      onClick={article.available ? onClick : undefined}
    >
      {/* Reflet gauche */}
      <div
        className="absolute top-0 left-0 bottom-0 w-8 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 100%)' }}
      />

      {/* Badge "Bientôt" */}
      {!article.available && (
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full border border-gold/20 font-medium flex items-center gap-1">
            <Clock size={9} />
            Bientôt
          </span>
        </div>
      )}

      {/* Image */}
      <div className="h-44 overflow-hidden relative">
        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </div>

      {/* Contenu */}
      <div className="p-5 relative">
        {/* Icône BookOpen au hover */}
        {article.available && (
          <div className="absolute top-0 right-5 -translate-y-1/2 btn-metallic-gold text-charcoal p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-1/2 transition-all duration-300 shadow-lg z-20">
            <BookOpen size={14} />
          </div>
        )}

        <span className="inline-block text-xs font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border mb-2 bg-gold/10 border-gold/30 text-metallic-gold-inline">
          {article.category}
        </span>

        <h3 className="font-serif text-base font-bold mb-2 text-metallic-silver group-hover:text-white transition-colors leading-snug line-clamp-2">
          {article.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="flex items-center gap-1 px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded-full border border-white/5">
              <Tag size={8} />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-3">
          <span className="flex items-center gap-1.5">
            <Calendar size={10} />
            {article.date}
          </span>
          <span className={`flex items-center gap-1.5 font-medium ${article.available ? 'text-gold/70 group-hover:text-gold transition-colors' : 'text-gray-600'}`}>
            <BookOpen size={10} />
            {article.readTime} de lecture
          </span>
        </div>
      </div>
    </div>
  );
};

// ─── Slider horizontal d'une catégorie ──────────────────────────────────────

const CategorySlider: React.FC<{
  category: BlogCategory;
  label: string;
  icon: string;
  articles: BlogArticle[];
  onNavigateBlogArticle?: (id: string) => void;
}> = ({ category, label, icon, articles: allArticles, onNavigateBlogArticle }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const articles = allArticles.filter((a) => a.category === category);

  const checkScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  if (articles.length === 0) return null;

  return (
    <div className="mb-16">
      {/* En-tête section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-transparent p-1.5">
            <img src={icon} alt={label} className="w-full h-full object-contain" />
          </div>
          <h2 className="font-serif text-xl font-bold text-metallic-navy">{label}</h2>
          <span className="text-sm text-steel/60">({articles.length} articles)</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canLeft}
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-steel hover:border-gold hover:text-gold transition-all disabled:opacity-25"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canRight}
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-steel hover:border-gold hover:text-gold transition-all disabled:opacity-25"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Track scrollable */}
      <div
        ref={trackRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {articles.map((article) => (
          <ArticleCardDark
            key={article.id}
            article={article}
            onClick={() => onNavigateBlogArticle?.(article.id)}
          />
        ))}
      </div>
    </div>
  );
};

// ─── Carte "À lire maintenant" (grande, pleine largeur en grille) ────────────

const ArticleCardFeatured: React.FC<{ article: BlogArticle; onClick?: () => void }> = ({ article, onClick }) => {

  return (
    <div
      data-cursor-hover
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2"
      style={{
        backgroundColor: '#0F172A',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: '600px 600px',
        backgroundBlendMode: 'overlay',
        borderLeft: '3px solid #D4AF37',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 24px 0 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
      onClick={onClick}
    >
      <div
        className="absolute top-0 left-0 bottom-0 w-8 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 100%)' }}
      />

      <div className="h-52 overflow-hidden relative">
        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </div>

      <div className="p-6 relative">
        <div className="absolute top-0 right-6 -translate-y-1/2 btn-metallic-gold text-charcoal p-2.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-1/2 transition-all duration-300 shadow-lg z-20">
          <BookOpen size={16} />
        </div>

        <span className="inline-block text-xs font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border mb-3 bg-gold/10 border-gold/30 text-metallic-gold-inline">
          {article.category}
        </span>

        <h3 className="font-serif text-lg font-bold mb-2 text-metallic-silver group-hover:text-white transition-colors leading-snug">
          {article.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="flex items-center gap-1 px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded-full border border-white/5">
              <Tag size={9} />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
          <span className="flex items-center gap-1.5"><Calendar size={11} />{article.date}</span>
          <span className="flex items-center gap-1.5 font-medium text-gold/70 group-hover:text-gold transition-colors">
            <BookOpen size={11} />
            {article.readTime} de lecture
          </span>
        </div>
      </div>
    </div>
  );
};

// ─── Carte "À venir" (compact, semi-opaque) ──────────────────────────────────

const ArticleCardComing: React.FC<{ article: BlogArticle }> = ({ article }) => {

  return (
    <div
      className="rounded-2xl overflow-hidden flex gap-4 items-center p-4"
      style={{
        backgroundColor: '#0F172A',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E")`,
        backgroundSize: '600px 600px',
        backgroundBlendMode: 'overlay',
        borderLeft: '3px solid rgba(212,175,55,0.3)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        opacity: 0.75,
      }}
    >
      <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale" loading="lazy" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-full border bg-gold/10 border-gold/30 text-metallic-gold-inline">
            {article.category}
          </span>
          <span className="px-1.5 py-0.5 bg-gold/10 text-gold text-xs rounded-full border border-gold/20 font-medium flex items-center gap-1">
            <Clock size={8} />
            Bientôt
          </span>
        </div>
        <h4 className="font-serif text-sm font-bold text-gray-300 leading-snug line-clamp-2">{article.title}</h4>
        <p className="text-xs text-gray-500 mt-0.5">{article.readTime} de lecture</p>
      </div>
    </div>
  );
};

// ─── Page principale ─────────────────────────────────────────────────────────

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigateBlogArticle, onGoToContact }) => {
  const { t } = useTranslation();
  const { blog: blogArticles } = useLocalizedData();
  useSeo(
    'Blog IA & Web — Conseils, guides et études de cas | Maison Siranno',
    'Découvrez nos articles sur le développement web, l\'automatisation n8n, l\'IA RAG, le marketing automation et le pilotage continu. Conseils pratiques pour dirigeants de PME.',
    'https://maisonsiranno.fr/blog'
  );
  const availableArticles = blogArticles.filter((a) => a.available);
  const comingSoonArticles = blogArticles.filter((a) => !a.available);

  // Les 3 articles les plus récents disponibles
  const featuredArticles = availableArticles.slice(0, 3);
  // Les 3 prochains articles à venir
  const nextComing = comingSoonArticles.slice(0, 3);

  return (
    <div
      className="min-h-screen pt-32 pb-24 relative"
      style={{
        backgroundColor: '#FAF6EE',
        backgroundImage: [
          `url("data:image/svg+xml,%3Csvg viewBox='0 0 700 700' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pg'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.30' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pg)' opacity='0.22'/%3E%3C/svg%3E")`,
          `radial-gradient(ellipse at 10% 20%, rgba(212,175,55,0.08) 0%, transparent 50%)`,
          `radial-gradient(ellipse at 85% 70%, rgba(212,175,55,0.06) 0%, transparent 45%)`,
          `radial-gradient(ellipse at 50% 50%, rgba(245,235,200,0.18) 0%, transparent 70%)`,
        ].join(', '),
        backgroundSize: '700px 700px, 100% 100%, 100% 100%, 100% 100%',
        backgroundBlendMode: 'multiply, normal, normal, normal',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
            {t('blog_page.eyebrow')}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-metallic-navy">
            {t('blog_page.title').split(' ')[0]}{' '}
            <span className="text-metallic-gold">{t('blog_page.title').split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-steel text-xl max-w-2xl mx-auto leading-relaxed">
            {t('blog_page.subtitle')}
          </p>
        </div>

        {/* ─── Section "À venir" ─────────────────────────────────────────── */}
        {nextComing.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/20" />
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gold/60" />
                <h2 className="font-serif text-xl font-bold text-metallic-navy whitespace-nowrap">
                  {t('blog_page.coming_soon_title')}
                </h2>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/20" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {nextComing.map((article) => (
                <ArticleCardComing key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {/* ─── Section "À lire maintenant" ──────────────────────────────── */}
        {featuredArticles.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30" />
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-gold" />
                <h2 className="font-serif text-2xl font-bold text-metallic-navy whitespace-nowrap">
                  {t('blog_page.featured_title')}
                </h2>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCardFeatured
                  key={article.id}
                  article={article}
                  onClick={() => onNavigateBlogArticle?.(article.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ─── Séparateur ───────────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-xs px-4">
            {t('blog_page.by_expertise_label')}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>

        {/* ─── 6 Sliders par expertise ──────────────────────────────────── */}
        {EXPERTISE_SLIDERS.map((slider) => (
          <CategorySlider
            key={slider.category}
            category={slider.category}
            label={slider.label}
            icon={slider.icon}
            articles={blogArticles}
            onNavigateBlogArticle={onNavigateBlogArticle}
          />
        ))}

        {/* ─── CTA ──────────────────────────────────────────────────────── */}
        <div className="cta-leather glass-panel rounded-3xl border border-gold/20 overflow-hidden relative text-center mt-8">
          <div className="relative z-10 px-8 md:px-16 py-14">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">{t('blog_page.cta.eyebrow')}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy mb-4">
              {t('blog_page.cta.title')}
            </h2>
            <p className="text-steel text-lg mb-8 max-w-2xl mx-auto">
              {t('blog_page.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-7">
              <button
                onClick={onGoToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 btn-metallic-gold rounded-full font-semibold shadow-xl text-charcoal text-base"
              >
                <Mail size={18} />
                {t('blog_page.cta.btn_message')}
              </button>
              <a
                href="tel:+33XXXXXXXXX"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-charcoal/25 text-charcoal/60 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
              >
                <Phone size={18} />
                {t('blog_page.cta.btn_call')}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-steel/60">
              {['Réponse sous 24h', 'Sans engagement', 'Consultation offerte', 'Devis sous 48h'].map((g) => (
                <span key={g} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
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
