import React from 'react';
import { ArrowLeft, Clock, Calendar, Tag, Mail, Phone, ArrowRight, BookOpen } from 'lucide-react';
import { BlogArticle, categoryConfig } from '../data/blog';

interface BlogArticleDetailPageProps {
  article: BlogArticle;
  onBack: () => void;
  onGoToContact: () => void;
}

const darkTextureStyle: React.CSSProperties = {
  backgroundColor: '#0F172A',
  backgroundImage: [
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='blt1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23blt1)' opacity='0.55'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='blt2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23blt2)' opacity='0.28'/%3E%3C/svg%3E")`,
  ].join(', '),
  backgroundSize: '600px 600px, 200px 200px',
  backgroundBlendMode: 'overlay, screen',
};

const lightTextureStyle: React.CSSProperties = {
  backgroundColor: '#FAF6EE',
  backgroundImage: [
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 700 700' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='blt3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.32' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23blt3)' opacity='0.38'/%3E%3C/svg%3E")`,
    `radial-gradient(ellipse at 12% 18%, rgba(185,145,65,0.1) 0%, transparent 48%)`,
    `radial-gradient(ellipse at 80% 72%, rgba(160,120,45,0.08) 0%, transparent 42%)`,
  ].join(', '),
  backgroundSize: '700px 700px, 100% 100%, 100% 100%',
  backgroundBlendMode: 'multiply, normal, normal',
};

export const BlogArticleDetailPage: React.FC<BlogArticleDetailPageProps> = ({ article, onBack, onGoToContact }) => {
  const cfg = categoryConfig[article.category];

  return (
    <div className="min-h-screen pt-24 pb-24">

      {/* Bouton retour */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-steel hover:text-gold transition-colors text-sm font-medium group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au blog
        </button>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden py-16 mb-12"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold/8 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Catégorie */}
          <div className="mb-4">
            <span className={`inline-block text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full border ${cfg.bgColor} ${cfg.color}`}>
              {article.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-metallic-silver leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {article.readTime} de lecture
            </span>
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 px-2 py-0.5 bg-white/8 border border-white/10 rounded-full text-xs text-gray-300">
                  <Tag size={9} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      {article.image && (
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div className="rounded-2xl overflow-hidden h-72 md:h-96">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Corps de l'article */}
      {article.body ? (
        <div className="max-w-4xl mx-auto px-6">

          {/* Introduction */}
          <div className="mb-10">
            <p className="text-steel text-lg leading-relaxed">{article.body.intro}</p>
          </div>

          {/* Sections */}
          {article.body.sections.map((section, si) => (
            <div key={si} className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-metallic-navy mb-5">
                {section.title}
              </h2>
              {section.paragraphs.map((p, pi) => (
                <p key={pi} className="text-steel leading-relaxed mb-4">{p}</p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <div className="mt-4 rounded-2xl p-6" style={lightTextureStyle}>
                  <ul className="space-y-3">
                    {section.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span className="text-charcoal/80 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Points clés */}
          {article.body.keyTakeaways && article.body.keyTakeaways.length > 0 && (
            <div className="mb-12 rounded-2xl overflow-hidden" style={darkTextureStyle}>
              <div className="relative z-10 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg border" style={{ background: 'rgba(212,175,55,0.12)', borderColor: 'rgba(212,175,55,0.3)' }}>
                    <BookOpen size={16} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-metallic-silver">Points clés à retenir</h3>
                </div>
                <ul className="space-y-3">
                  {article.body.keyTakeaways.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Conclusion */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-metallic-navy mb-4">Conclusion</h2>
            <p className="text-steel text-lg leading-relaxed">{article.body.conclusion}</p>
          </div>

        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="text-center py-16 rounded-2xl border" style={{ borderColor: 'rgba(212,175,55,0.2)', background: 'rgba(212,175,55,0.04)' }}>
            <Clock size={32} className="text-gold/40 mx-auto mb-4" />
            <p className="font-serif text-xl font-bold text-[#1E3A5F] mb-2">Article bientôt disponible</p>
            <p className="text-steel">Cet article est en cours de rédaction. Revenez prochainement !</p>
          </div>
        </div>
      )}

      {/* CTA final */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="cta-leather bg-charcoal text-white rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-80 h-80 bg-gold/6 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 px-8 md:px-14 py-12">
            <div className="text-center mb-8">
              <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">Passons à l'action</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-metallic-silver">Un projet en tête ?</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Première consultation gratuite. En 30 minutes, nous analysons votre situation et définissons ensemble la meilleure approche.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={onGoToContact} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 btn-metallic-gold rounded-full font-semibold shadow-xl text-sm">
                <Mail size={16} />
                Envoyer un message
              </button>
              <a href="tel:+33XXXXXXXXX" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-white/25 text-white/75 hover:border-gold hover:text-gold transition-all duration-300">
                <Phone size={16} />
                Appeler directement
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
