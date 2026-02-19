import React from 'react';
import { ArrowRight, Star, Quote, BookOpen } from 'lucide-react';
import { projectsData, ProjectData } from './Projects';

interface ProjectsPageProps {
  onOpenProject?: (project: ProjectData) => void;
  onNavigateBlogArticle?: (projectId: string) => void;
  onGoToContact?: () => void;
}

const testimonials = [
  {
    name: "Julien Delaloy",
    role: "Fondateur",
    company: "JD Rénovation",
    content: "Yoann a su créer notre présence numérique de A à Z. Site vitrine, identité visuelle, référencement local... en quelques semaines, notre entreprise de rénovation est devenue visible sur toute la région. Les demandes de devis ont explosé dès le premier mois.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    projectId: "jd-renovation"
  },
  {
    name: "Sylvie Bidoux",
    role: "Gérante",
    company: "SI Griveaux",
    content: "Grâce à Yoann, nos assemblées générales sont désormais automatiquement retranscrites et résumées. Ce qui prenait plusieurs heures de travail manuel se fait en quelques minutes. Un gain de temps considérable et une fiabilité redoutable.",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    projectId: "si-griveaux"
  }
];

interface ProjectCardPageProps {
  project: ProjectData;
  onNavigate: (projectId: string) => void;
}

const ProjectCardPage: React.FC<ProjectCardPageProps> = ({ project, onNavigate }) => {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2"
      style={{
        backgroundColor: '#0F172A',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: '600px 600px',
        backgroundBlendMode: 'overlay',
        borderLeft: '3px solid #D4AF37',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 24px 0 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
      onClick={() => onNavigate(project.id)}
    >
      {/* Effet reliure / courbure page */}
      <div
        className="absolute top-0 left-0 bottom-0 w-8 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 100%)' }}
      ></div>

      <div className="h-52 overflow-hidden relative">
        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-6 relative">
        {/* Bouton "Lire" au survol */}
        <div className="absolute top-0 right-6 -translate-y-1/2 btn-metallic-gold text-charcoal p-2.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-1/2 transition-all duration-300 shadow-lg z-20">
          <BookOpen size={16} />
        </div>

        <div className="text-xs font-medium text-metallic-gold-inline mb-1 uppercase tracking-wider">
          {project.category}
        </div>
        <h3 className="font-serif text-lg font-bold mb-2 text-metallic-silver group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
          <span>{project.client}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </div>
  );
};

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenProject, onNavigateBlogArticle, onGoToContact }) => {

  const handleCardClick = (projectId: string) => {
    if (onNavigateBlogArticle) {
      onNavigateBlogArticle(projectId);
    } else if (onOpenProject) {
      const project = projectsData.find((p) => p.id === projectId);
      if (project) onOpenProject(project);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-20">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-4 block">
            Portfolio & Références
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-metallic-navy">
            Nos{' '}
            <span className="text-metallic-gold">Réalisations</span>
          </h1>
          <p className="text-steel text-xl max-w-2xl mx-auto leading-relaxed">
            Des projets concrets, des résultats mesurables. Chaque réalisation témoigne
            d'une collaboration unique et d'une approche sur mesure.
          </p>
        </div>

        {/* Grille de projets — style page de livre */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projectsData.map((project) => (
            <ProjectCardPage
              key={project.id}
              project={project}
              onNavigate={handleCardClick}
            />
          ))}
        </div>

        {/* Section Témoignages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-2 block">
              Témoignages
            </span>
            <h2 className="font-serif text-4xl font-bold text-metallic-navy mb-4">
              Ils nous font{' '}
              <span className="text-metallic-gold underline decoration-gold/30 underline-offset-4">confiance</span>
            </h2>
            <p className="text-steel">Des partenaires locaux qui ont franchi le cap du digital.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="glass-card p-8 rounded-2xl flex flex-col relative group"
              >
                <div className="absolute top-6 right-8 text-gold/10 group-hover:text-gold/25 transition-colors">
                  <Quote size={40} fill="currentColor" />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="icon-metallic-gold inline-flex">
                      <Star size={16} fill="#D4AF37" color="#D4AF37" />
                    </span>
                  ))}
                </div>

                <p className="text-charcoal/80 italic mb-8 flex-grow leading-relaxed relative z-10 text-base">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-charcoal">{t.name}</div>
                    <div className="text-xs text-metallic-gold-inline uppercase tracking-wide font-medium">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="cta-leather glass-panel rounded-3xl p-12 border border-gold/20 relative text-center">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy mb-4">
              Votre projet, notre prochaine réalisation
            </h2>
            <p className="text-steel text-lg mb-8 max-w-xl mx-auto">
              Rejoignez les entreprises qui ont fait confiance à Maison Siranno pour leur transformation digitale.
            </p>
            <button
              onClick={onGoToContact}
              className="inline-flex items-center gap-2 px-8 py-4 btn-metallic-dark rounded-full font-semibold shadow-xl text-white"
            >
              Lancer mon projet <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
