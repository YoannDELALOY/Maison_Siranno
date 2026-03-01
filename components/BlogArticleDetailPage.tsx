import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowLeft, Clock, Calendar, Tag, Mail, Phone, BookOpen } from 'lucide-react';
import { BlogArticle, BlogCategory } from '../data/blog';
import { DARK_TEXTURE_STYLE, LIGHT_TEXTURE_STYLE } from '../constants/textures';
import iconWebApps from '../Media/Logos/Logo_expertise/Icone_Développement_Web_Apps_&_SaaS.png';
import iconAutomatisation from '../Media/Logos/Logo_expertise/Icone_Automatisation_&_Orchestration_n8n.png';
import iconContenu from '../Media/Logos/Logo_expertise/Icone_Création_de_Contenu_&_Marketing_IA.png';
import iconIA from '../Media/Logos/Logo_expertise/Icone_Intelligence_Artificielle_&_Agents_RAG.png';
import iconConseil from '../Media/Logos/Logo_expertise/Icone_Conseil_&_Formation.png';
import iconPilotage from '../Media/Logos/Logo_expertise/Icone_Pilotage_Continu.png';

interface BlogArticleDetailPageProps {
  article: BlogArticle;
  onBack: () => void;
  onGoToContact: () => void;
}

const categoryIconMap: Record<BlogCategory, string> = {
  'Développement Web & SaaS': iconWebApps,
  'Automatisation & n8n': iconAutomatisation,
  'Intelligence Artificielle & RAG': iconIA,
  'Contenu & Marketing IA': iconContenu,
  'Conseil & Formation': iconConseil,
  'Pilotage Continu': iconPilotage,
};


/* ── Convertit **gras** et *italique* en éléments React ── */
const renderText = (text: string): React.ReactNode => {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-semibold text-charcoal">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return part;
      })}
    </>
  );
};

export const BlogArticleDetailPage: React.FC<BlogArticleDetailPageProps> = ({ article, onBack, onGoToContact }) => {
  const { t } = useTranslation();
  useSeo(
    `${article.title} | Maison Siranno`,
    article.excerpt,
    `https://maisonsiranno.fr/blog/${article.slug}`
  );
  const expertiseIcon = categoryIconMap[article.category];

  /* ── JSON-LD Article + FAQ schema ── */
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { '@type': 'Person', name: 'Yoann DELALOY' },
    publisher: {
      '@type': 'Organization',
      name: 'Maison Siranno',
      logo: { '@type': 'ImageObject', url: 'https://maisonsiranno.fr/logos/Design%20sans%20titre%20(84).png' },
    },
    image: article.image,
    keywords: article.tags.join(', '),
  };

  const faqSchema = article.body?.keyTakeaways && article.body.keyTakeaways.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.body.keyTakeaways.map((point) => ({
          '@type': 'Question',
          name: point.replace(/\*\*/g, '').replace(/\*/g, ''),
          acceptedAnswer: { '@type': 'Answer', text: point.replace(/\*\*/g, '').replace(/\*/g, '') },
        })),
      }
    : null;

  return (
    <article className="min-h-screen pt-24 pb-24">

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Bouton retour */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-steel hover:text-gold transition-colors text-sm font-medium group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {t('blog_article_detail.back_link')}
        </button>
      </div>

      {/* Hero */}
      <header
        className="relative overflow-hidden py-16 mb-12"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)' }}
      >
        {/* Blobs décoratifs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold/8 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
        </div>

        {/* Icônes d'expertise décoratives — gauche et droite */}
        {expertiseIcon && (
          <>
            <img
              src={expertiseIcon}
              alt=""
              aria-hidden="true"
              className="hidden md:block absolute left-[6%] top-1/2 -translate-y-1/2 w-36 h-36 lg:w-52 lg:h-52 object-contain pointer-events-none"
              style={{ opacity: 0.15, filter: 'drop-shadow(0 0 16px rgba(212,175,55,0.3))' }}
            />
            <img
              src={expertiseIcon}
              alt=""
              aria-hidden="true"
              className="hidden md:block absolute right-[6%] top-1/2 -translate-y-1/2 w-36 h-36 lg:w-52 lg:h-52 object-contain pointer-events-none"
              style={{ opacity: 0.15, filter: 'drop-shadow(0 0 16px rgba(212,175,55,0.3))' }}
            />
          </>
        )}

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Badge expertise — gold métallique */}
          <div className="mb-4">
            <span className="btn-metallic-gold inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
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
              {t('blog_page.read_time', { time: article.readTime })}
            </span>
          </div>

          {/* Tags — style gold métallique */}
          <div className="flex flex-wrap gap-2 mt-4">
            {(article.tags || []).map((tag, i) => (
              <span
                key={tag}
                className="btn-metallic-gold flex items-center gap-1 text-xs font-semibold rounded-full px-2.5 py-1 cursor-default"
                style={{
                  animation: `tagAppear 0.5s ease forwards`,
                  animationDelay: `${0.3 + i * 0.06}s`,
                  opacity: 0,
                }}
              >
                <Tag size={9} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

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
          <section className="mb-10">
            <p className="text-steel text-lg leading-relaxed">{renderText(article.body.intro)}</p>
          </section>

          {/* Sections */}
          {article.body.sections.map((section, si) => (
            <section key={si} className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-metallic-navy mb-5">
                {section.title}
              </h2>
              {section.paragraphs.map((p, pi) => (
                <p key={pi} className="text-steel leading-relaxed mb-4">{renderText(p)}</p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <div className="mt-4 rounded-2xl p-6" style={LIGHT_TEXTURE_STYLE}>
                  <ul className="space-y-3">
                    {section.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span className="text-charcoal/80 leading-relaxed">{renderText(b)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* Points clés */}
          {article.body.keyTakeaways && article.body.keyTakeaways.length > 0 && (
            <aside className="mb-12 rounded-2xl overflow-hidden" style={DARK_TEXTURE_STYLE}>
              <div className="relative z-10 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg border" style={{ background: 'rgba(212,175,55,0.12)', borderColor: 'rgba(212,175,55,0.3)' }}>
                    <BookOpen size={16} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-metallic-silver">{t('blog_article_detail.key_takeaways')}</h3>
                </div>
                <ul className="space-y-3">
                  {article.body.keyTakeaways.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{renderText(point)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-metallic-navy mb-4">{t('blog_article_detail.conclusion')}</h2>
            <p className="text-steel text-lg leading-relaxed">{renderText(article.body.conclusion)}</p>
          </section>

        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="text-center py-16 rounded-2xl border" style={{ borderColor: 'rgba(212,175,55,0.2)', background: 'rgba(212,175,55,0.04)' }}>
            <Clock size={32} className="text-gold/40 mx-auto mb-4" />
            <p className="font-serif text-xl font-bold text-[#1E3A5F] mb-2">{t('blog_article_detail.coming_soon_title')}</p>
            <p className="text-steel">{t('blog_article_detail.coming_soon_body')}</p>
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
              <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-3 block">{t('blog_article_detail.cta_eyebrow')}</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-metallic-silver">{t('blog_article_detail.cta_title')}</h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                {t('blog_article_detail.cta_subtitle')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button onClick={onGoToContact} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 btn-metallic-gold rounded-full font-semibold shadow-xl text-sm">
                <Mail size={16} />
                {t('expertise_page.cta.btn_message')}
              </button>
              <a href="tel:+33XXXXXXXXX" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-white/25 text-white/75 hover:border-gold hover:text-gold transition-all duration-300">
                <Phone size={16} />
                {t('expertise_page.cta.btn_call')}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              {t('blog_article_detail.cta.guarantees', { returnObjects: true }).map((g: string) => (
                <span key={g} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60 shrink-0"></span>
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS tags */}
      <style>{`
        @keyframes tagAppear {
          from { opacity: 0; transform: translateY(8px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

    </article>
  );
};
