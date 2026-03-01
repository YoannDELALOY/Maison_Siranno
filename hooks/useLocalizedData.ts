import { useLanguage } from '../contexts/LanguageContext';
import { projectsData as projectsFr } from '../data/projects';
import { projectsData as projectsEn } from '../data/projects.en';
import { projectsData as projectsEs } from '../data/projects.es';
import { servicesData as servicesFr } from '../data/services';
import { servicesData as servicesEn } from '../data/services.en';
import { servicesData as servicesEs } from '../data/services.es';
import { blogArticles as blogFr } from '../data/blog';
import { blogArticles as blogEn } from '../data/blog.en';
import { blogArticles as blogEs } from '../data/blog.es';
import { homeTestimonials as homeFr, projectsTestimonials as projFr, allTestimonials as allFr } from '../data/testimonials';
import { homeTestimonials as homeEn, projectsTestimonials as projEn, allTestimonials as allEn } from '../data/testimonials.en';
import { homeTestimonials as homeEs, projectsTestimonials as projEs, allTestimonials as allEs } from '../data/testimonials.es';

/**
 * Table de correspondance langue → jeu de données pour chaque resource.
 * Toute nouvelle langue doit être ajoutée ici ET dans LanguageContext.
 */
const LOCALE_MAP = {
  projects:             { fr: projectsFr, en: projectsEn, es: projectsEs },
  services:             { fr: servicesFr, en: servicesEn, es: servicesEs },
  blog:                 { fr: blogFr,     en: blogEn,     es: blogEs     },
  homeTestimonials:     { fr: homeFr,     en: homeEn,     es: homeEs     },
  projectsTestimonials: { fr: projFr,     en: projEn,     es: projEs     },
  allTestimonials:      { fr: allFr,      en: allEn,      es: allEs      },
} as const;

/**
 * Hook fournissant l'ensemble des données statiques localisées selon la langue active.
 *
 * Retourne :
 * - `projects`             — réalisations de la page Projets
 * - `services`             — expertises de la page Expertise
 * - `blog`                 — articles de blog
 * - `homeTestimonials`     — témoignages affichés sur la page d'accueil
 * - `projectsTestimonials` — témoignages affichés sur la page Réalisations
 * - `allTestimonials`      — ensemble complet des témoignages
 */
export const useLocalizedData = () => {
  const { lang } = useLanguage();

  return {
    projects:             LOCALE_MAP.projects[lang],
    services:             LOCALE_MAP.services[lang],
    blog:                 LOCALE_MAP.blog[lang],
    homeTestimonials:     LOCALE_MAP.homeTestimonials[lang],
    projectsTestimonials: LOCALE_MAP.projectsTestimonials[lang],
    allTestimonials:      LOCALE_MAP.allTestimonials[lang],
  };
};
