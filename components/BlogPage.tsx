import React from 'react';
import { ArrowRight, Clock, BookOpen, Calendar, Tag } from 'lucide-react';

interface BlogPageProps {
  onNavigateBlogArticle?: (projectId: string) => void;
  onGoToContact?: () => void;
}

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  available: boolean;
}

const blogArticles: BlogArticle[] = [
  {
    id: 'ia-artisans',
    title: "L'IA au service des artisans : mythe ou réalité ?",
    excerpt: "Automatiser ses devis, ses rappels clients, sa compta légère... Est-ce vraiment accessible à un artisan indépendant en 2025 ? Retour d'expérience terrain après 12 mois de déploiements.",
    category: "Intelligence Artificielle",
    date: "Janvier 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    tags: ["IA", "Artisanat", "Automatisation"],
    available: true,
  },
  {
    id: 'seo-local-2025',
    title: "SEO local en 2025 : ce qui fonctionne vraiment",
    excerpt: "Google Maps, fiches établissement, avis, données structurées... Le référencement local a profondément évolué. Voici les leviers concrets qui font la différence pour les PME et commerces locaux.",
    category: "SEO & Visibilité",
    date: "Décembre 2024",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    tags: ["SEO", "Local", "Google", "PME"],
    available: true,
  },
  {
    id: 'automatisation-pme',
    title: "Automatisation pour PME : par où commencer ?",
    excerpt: "Trop de chefs d'entreprise pensent que l'automatisation c'est compliqué ou réservé aux grands groupes. Faux. Voici une méthode simple en 3 étapes pour identifier et automatiser vos tâches répétitives.",
    category: "Automatisation",
    date: "Novembre 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
    tags: ["Automatisation", "PME", "Workflow", "Productivité"],
    available: true,
  },
  {
    id: 'site-vitrine-2025',
    title: "Pourquoi votre site vitrine vous coûte des clients",
    excerpt: "Un site lent, non mobile, sans CTA clair, c'est une pompe à fuites. Découvrez les 5 erreurs les plus courantes sur les sites de PME et comment les corriger rapidement.",
    category: "Stratégie Digitale",
    date: "Bientôt",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    tags: ["Site Web", "Conversion", "UX", "PME"],
    available: false,
  },
  {
    id: 'chatbot-artisan',
    title: "Chatbot IA pour artisan : retour d'expérience 6 mois",
    excerpt: "Nous avons déployé un chatbot de qualification de leads pour 4 artisans locaux. Résultats, surprises, limites et bonnes pratiques : tout ce qu'on a appris sur le terrain.",
    category: "Intelligence Artificielle",
    date: "Bientôt",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    tags: ["Chatbot", "IA", "Leads", "Artisanat"],
    available: false,
  },
];

const ArticleCard: React.FC<{ article: BlogArticle }> = ({ article }) => (
  <div
    className="glass-card rounded-2xl overflow-hidden flex flex-col relative group"
    style={{ opacity: article.available ? 1 : 0.75 }}
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
      />
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-medium text-metallic-gold-inline uppercase tracking-wider">
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
          <span key={tag} className="flex items-center gap-1 px-2 py-0.5 bg-gold/8 text-charcoal/60 text-xs rounded-full border border-gold/15">
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
        <span className="flex items-center gap-1.5 text-gold group-hover:text-charcoal transition-colors font-medium">
          <BookOpen size={11} />
          {article.readTime} de lecture
        </span>
      </div>
    </div>
  </div>
);

export const BlogPage: React.FC<BlogPageProps> = ({ onGoToContact }) => {
  const availableArticles = blogArticles.filter((a) => a.available);
  const comingSoonArticles = blogArticles.filter((a) => !a.available);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-20">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
            Blog & Réflexions
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-metallic-navy">
            Nos{' '}
            <span className="text-metallic-gold">Articles</span>
          </h1>
          <p className="text-steel text-xl max-w-2xl mx-auto leading-relaxed">
            Retours d'expérience, conseils pratiques et réflexions sur le digital, l'IA et la transformation des entreprises locales.
          </p>
        </div>

        {/* Articles disponibles */}
        {availableArticles.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30"></div>
              <h2 className="font-serif text-2xl font-bold text-metallic-navy whitespace-nowrap">
                À lire maintenant
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {/* Articles à venir */}
        {comingSoonArticles.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30"></div>
              <h2 className="font-serif text-2xl font-bold text-metallic-navy whitespace-nowrap">
                Prochainement
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {comingSoonArticles.map((article) => (
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
