import React, { useState } from 'react';
import { ArrowRight, Clock, BookOpen, Calendar, Tag, Filter } from 'lucide-react';
import { blogArticles, categoryConfig, BlogCategory } from '../data/blog';

interface BlogPageProps {
  onNavigateBlogArticle?: (projectId: string) => void;
  onGoToContact?: () => void;
}

const ALL_CATEGORIES: BlogCategory[] = [
  'Développement Web & SaaS',
  'Automatisation & Workflows',
  'Intelligence Artificielle',
  'Marketing & Contenu',
  'Stratégie & Conseil',
];

const ArticleCard: React.FC<{ article: typeof blogArticles[0]; onClick?: () => void }> = ({ article, onClick }) => {
  const cfg = categoryConfig[article.category];
  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden flex flex-col relative group ${article.available ? 'cursor-pointer hover:-translate-y-1 transition-transform duration-300' : ''}`}
      style={{ opacity: article.available ? 1 : 0.72 }}
      onClick={article.available ? onClick : undefined}
    >
      {!article.available && (
        <div className="absolute top-4 right-4 z-20">
          <span className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full border border-gold/20 font-medium flex items-center gap-1">
            <Clock size={10} />
            Bientôt
          </span>
        </div>
      )}

      <div className="h-44 overflow-hidden relative">
        <div className="absolute inset-0 bg-charcoal/25 group-hover:bg-charcoal/10 transition-colors z-10"></div>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border ${cfg.bgColor} ${cfg.color}`}>
            {article.category}
          </span>
        </div>

        <h3 className="font-serif text-lg font-bold mb-3 text-charcoal group-hover:text-charcoal/80 transition-colors leading-snug">
          {article.title}
        </h3>

        <p className="text-steel text-sm leading-relaxed mb-4 flex-1">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="flex items-center gap-1 px-2 py-0.5 bg-gold/10 text-charcoal/60 text-xs rounded-full border border-gold/20">
              <Tag size={9} />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-steel border-t border-gray-100 pt-4 mt-auto">
          <span className="flex items-center gap-1.5">
            <Calendar size={11} />
            {article.date}
          </span>
          <span className={`flex items-center gap-1.5 font-medium ${article.available ? 'text-gold group-hover:text-charcoal transition-colors' : 'text-steel'}`}>
            <BookOpen size={11} />
            {article.readTime} de lecture
          </span>
        </div>
      </div>
    </div>
  );
};

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigateBlogArticle, onGoToContact }) => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'Tous'>('Tous');

  const availableArticles = blogArticles.filter((a) => a.available);
  const comingSoonArticles = blogArticles.filter((a) => !a.available);

  const filteredAvailable = activeCategory === 'Tous'
    ? availableArticles
    : availableArticles.filter((a) => a.category === activeCategory);

  const filteredComing = activeCategory === 'Tous'
    ? comingSoonArticles
    : comingSoonArticles.filter((a) => a.category === activeCategory);

  // Les 3 articles les plus récents pour la section "À lire maintenant" (filtre Tous)
  const featuredArticles = availableArticles.slice(0, 3);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
            Blog & Réflexions
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-metallic-navy">
            Nos{' '}
            <span className="text-metallic-gold">Articles</span>
          </h1>
          <p className="text-steel text-xl max-w-2xl mx-auto leading-relaxed">
            Retours d'expérience, conseils pratiques et réflexions sur le digital, l'IA et l'automatisation pour les entreprises ambitieuses.
          </p>
        </div>

        {/* Filtres catégories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <div className="flex items-center gap-2 text-sm text-steel mr-2">
            <Filter size={14} />
            <span>Filtrer :</span>
          </div>
          <button
            onClick={() => setActiveCategory('Tous')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              activeCategory === 'Tous'
                ? 'btn-metallic-gold text-charcoal border-transparent'
                : 'border-gray-200 text-steel hover:border-gold/50 hover:text-gold'
            }`}
          >
            Tous ({availableArticles.length + comingSoonArticles.length})
          </button>
          {ALL_CATEGORIES.map((cat) => {
            const count = blogArticles.filter((a) => a.category === cat).length;
            const cfg = categoryConfig[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? `${cfg.bgColor} ${cfg.color} border-current`
                    : 'border-gray-200 text-steel hover:border-gold/50 hover:text-gold'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Section "À lire maintenant" — uniquement si filtre "Tous" */}
        {activeCategory === 'Tous' && featuredArticles.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30"></div>
              <h2 className="font-serif text-2xl font-bold text-metallic-navy whitespace-nowrap">
                À lire maintenant
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onClick={() => onNavigateBlogArticle?.(article.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tous les articles disponibles quand filtre "Tous" (hors les 3 featured) */}
        {activeCategory === 'Tous' && availableArticles.length > 3 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30"></div>
              <h2 className="font-serif text-2xl font-bold text-metallic-navy whitespace-nowrap">
                Tous nos articles
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableArticles.slice(3).map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onClick={() => onNavigateBlogArticle?.(article.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Articles filtrés disponibles (filtre catégorie actif) */}
        {activeCategory !== 'Tous' && filteredAvailable.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30"></div>
              <h2 className="font-serif text-2xl font-bold text-metallic-navy whitespace-nowrap">
                {activeCategory}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAvailable.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onClick={() => onNavigateBlogArticle?.(article.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Message si aucun article disponible pour ce filtre */}
        {activeCategory !== 'Tous' && filteredAvailable.length === 0 && filteredComing.length > 0 && (
          <div className="text-center py-8 mb-12">
            <p className="text-steel text-base">Aucun article disponible dans cette catégorie pour l'instant — consultez les prochaines publications ci-dessous.</p>
          </div>
        )}

        {/* Articles à venir */}
        {filteredComing.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30"></div>
              <h2 className="font-serif text-2xl font-bold text-metallic-navy whitespace-nowrap">
                Prochainement
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredComing.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="cta-leather glass-panel rounded-3xl p-12 border border-gold/20 relative text-center">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy mb-4">
              Votre projet mérite d'être raconté
            </h2>
            <p className="text-steel text-lg mb-8 max-w-xl mx-auto">
              Rejoignez les entreprises qui ont transformé leur présence digitale avec Maison Siranno.
            </p>
            <button
              onClick={onGoToContact}
              className="inline-flex items-center gap-2 px-8 py-4 btn-metallic-dark rounded-full font-semibold shadow-xl text-white"
            >
              Démarrer mon projet <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
