import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionId } from '../types';
// Ré-exports pour compatibilité avec App.tsx et les autres composants
export type { ProjectData } from '../data/projects';
export { projectsData } from '../data/projects';
import { projectsData, ProjectData } from '../data/projects';

interface ProjectCardProps {
  project: ProjectData;
  onClick: (project: ProjectData) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
  <div
    className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 shadow-xl cursor-pointer flex-shrink-0 snap-start"
    style={{
      width: 'min(85vw, 300px)',
      minWidth: 'min(85vw, 300px)',
      background: '#0D1B2A',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
    }}
    onClick={() => onClick(project)}
  >
    <div className="h-48 overflow-hidden relative">
      <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10"></div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
    </div>

    <div className="p-6 relative">
      <div className="absolute top-0 right-6 -translate-y-1/2 btn-metallic-gold text-charcoal p-2.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-1/2 transition-all duration-300 shadow-lg z-20">
        <ExternalLink size={16} />
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

      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

interface ProjectsProps {
  onOpenProject?: (project: ProjectData) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProject }) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  const scrollLeft = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.offsetWidth * 0.8, behavior: 'smooth' });
  }, []);

  const scrollRight = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: el.offsetWidth * 0.8, behavior: 'smooth' });
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      const el = scrollRef.current;
      if (el) el.scrollBy({ left: delta > 0 ? 260 : -260, behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute -right-20 top-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête */}
        <div className="text-center md:text-left mb-12">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-2 block">
            Nos Réalisations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-metallic-silver">
            L'Excellence en{' '}
            <span className="text-metallic-gold">Action</span>
          </h2>
        </div>

        {/* Carrousel scroll-based */}
        <div className="relative">
          {/* Flèche gauche */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg"
              aria-label="Défiler à gauche"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Flèche droite */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg"
              aria-label="Défiler à droite"
            >
              <ChevronRight size={22} />
            </button>
          )}

          {/* Conteneur scroll natif */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory px-4 sm:px-0 justify-start"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            } as React.CSSProperties}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {[...projectsData]
              .sort((a, b) => b.date.localeCompare(a.date))
              .slice(0, 10)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={(p) => onOpenProject?.(p)}
                />
              ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-3 italic md:hidden">
          Glissez pour voir tous les projets
        </p>
      </div>
    </section>
  );
};
