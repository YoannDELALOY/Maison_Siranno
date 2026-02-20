import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, ExternalLink, Tag, User, Calendar, BookOpen } from 'lucide-react';
import { ProjectData } from './Projects';

interface BlogArticlePageProps {
  project: ProjectData | null;
  onBack: () => void;
  onGoToContact: () => void;
}

const perlinNoise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`;
const perlinLight = `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`;

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({ project, onBack, onGoToContact }) => {
  if (!project) return null;

  return (
    <div className="min-h-screen">
      {/* Hero image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Opacité réduite pour laisser l'image visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/40 to-transparent"></div>

        {/* Bouton retour */}
        <div className="absolute top-6 left-6 z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/20 transition-all border border-white/20"
          >
            <ArrowLeft size={16} />
            ← Retour aux articles
          </button>
        </div>

        {/* Infos centrées */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 pt-20 z-10">
          <span className="text-xs font-medium text-metallic-gold-inline uppercase tracking-widest block mb-2">
            {project.category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-metallic-silver mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/70 justify-center">
            <span className="flex items-center gap-1.5">
              <User size={14} />
              Yoann Delaloy
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {project.year}
            </span>
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="flex items-center gap-1 px-2 py-0.5 bg-white/10 rounded-full text-xs border border-white/20">
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Corps de l'article — scrollable custom */}
      <div
        className="max-w-5xl mx-auto px-4 py-12"
        style={{ overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#D4AF37 transparent' } as React.CSSProperties}
      >
        {/* Wrapper effet livre bicolonne */}
        <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">

          {/* Page gauche — sombre, récapitulatif */}
          <div
            className="md:w-2/5 flex-shrink-0 p-8 md:p-10 flex flex-col gap-8"
            style={{
              backgroundColor: '#0F172A',
              backgroundImage: `${perlinNoise}, ${perlinNoise}`,
              backgroundSize: '600px 600px, 300px 300px',
              backgroundBlendMode: 'overlay, overlay',
              boxShadow: 'inset -24px 0 48px rgba(0,0,0,0.65)',
            }}
          >
            {/* Ligne or en haut */}
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-gold/30 rounded-full"></div>

            {/* Catégorie */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gold/60 mb-1">Catégorie</p>
              <p className="text-metallic-gold-inline font-semibold text-sm">{project.category}</p>
            </div>

            {/* Client */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gold/60 mb-1">Client</p>
              <p className="text-white/90 font-medium">{project.client}</p>
            </div>

            {/* Année */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gold/60 mb-1">Année</p>
              <p className="text-white/90 font-medium">{project.year}</p>
            </div>

            {/* Tags */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gold/60 mb-3">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-xs text-gold/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Spacer + déco bas */}
            <div className="flex-1"></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-gold/30 to-transparent rounded-full"></div>
          </div>

          {/* Reliure dorée verticale */}
          <div
            className="hidden md:block w-px flex-shrink-0"
            style={{
              background: 'linear-gradient(to bottom, transparent, #D4AF37 20%, #F5D678 50%, #D4AF37 80%, transparent)',
              boxShadow: '0 0 8px rgba(212,175,55,0.4)',
            }}
          ></div>

          {/* Page droite — crème, contenu */}
          <div
            className="flex-1 p-8 md:p-10 space-y-8"
            style={{
              backgroundColor: '#FAF6EE',
              backgroundImage: perlinLight,
              backgroundSize: '600px 600px',
              boxShadow: 'inset 24px 0 32px rgba(0,0,0,0.08)',
            }}
          >
            {/* Description */}
            <div>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Les défis */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6">
              <h2 className="font-serif text-xl font-bold text-metallic-navy mb-4 flex items-center gap-3">
                <AlertCircle size={20} className="text-gold" />
                Les défis
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3 text-charcoal/70">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Les résultats */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6">
              <h2 className="font-serif text-xl font-bold text-metallic-navy mb-4 flex items-center gap-3">
                <CheckCircle2 size={20} className="text-safe-green" />
                Les résultats
              </h2>
              <ul className="space-y-3">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-safe-green mt-0.5 shrink-0" />
                    <span className="text-charcoal/80">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA — fond or métallique */}
        <div
          className="mt-10 rounded-3xl p-10 relative overflow-hidden text-center"
          style={{
            background: 'linear-gradient(135deg, #C9A227 0%, #F5D678 35%, #D4AF37 55%, #B8860B 80%, #D4AF37 100%)',
            backgroundSize: '200% 200%',
            boxShadow: '0 8px 32px rgba(212,175,55,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
          }}
        >
          {/* Grain texture sur le CTA */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: perlinNoise,
              backgroundSize: '400px 400px',
              mixBlendMode: 'overlay',
            }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

          <div className="relative z-10">
            <BookOpen size={32} className="text-charcoal mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold mb-2 text-charcoal">
              Un projet similaire ?
            </h2>
            <p className="text-charcoal/70 mb-8">
              Discutons de vos besoins. La première consultation est gratuite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full font-semibold hover:bg-charcoal/80 transition-colors shadow-lg"
                >
                  En savoir plus sur le projet <ExternalLink size={16} />
                </a>
              )}
              <button
                onClick={onGoToContact}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/30 backdrop-blur-sm text-charcoal border border-charcoal/20 rounded-full font-semibold hover:bg-white/50 transition-colors shadow-lg"
              >
                Visitez le site <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
