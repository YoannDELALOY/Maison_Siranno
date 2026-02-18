import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { projectsData, ProjectData } from './Projects';
import { SectionId } from '../types';

interface ProjectsPageProps {
  onOpenProject?: (project: ProjectData) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenProject }) => {
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

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-obsidian border border-white/10 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 shadow-xl cursor-pointer"
              onClick={() => onOpenProject?.(project)}
            >
              <div className="h-52 overflow-hidden relative">
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6 relative">
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-gold text-charcoal p-2.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-1/2 transition-all duration-300 shadow-lg z-20">
                  <ExternalLink size={16} />
                </div>

                <div className="text-xs font-medium text-metallic-gold-inline mb-1 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-gold transition-colors text-white">
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
          ))}
        </div>

        {/* CTA */}
        <div className="text-center glass-panel rounded-3xl p-12 border border-gold/20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-metallic-navy mb-4">
            Votre projet, notre prochaine réalisation
          </h2>
          <p className="text-steel text-lg mb-8 max-w-xl mx-auto">
            Rejoignez les entreprises qui ont fait confiance à Maison Siranno pour leur transformation digitale.
          </p>
          <a
            href={`#${SectionId.CONTACT}`}
            className="inline-flex items-center gap-2 px-8 py-4 btn-metallic-dark rounded-full font-semibold shadow-xl text-white"
          >
            Lancer mon projet <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};
