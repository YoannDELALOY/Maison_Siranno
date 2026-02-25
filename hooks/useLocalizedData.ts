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

export const useLocalizedData = () => {
  const { lang } = useLanguage();

  const projects = lang === 'en' ? projectsEn : lang === 'es' ? projectsEs : projectsFr;
  const services = lang === 'en' ? servicesEn : lang === 'es' ? servicesEs : servicesFr;
  const blog = lang === 'en' ? blogEn : lang === 'es' ? blogEs : blogFr;
  const homeTestimonials = lang === 'en' ? homeEn : lang === 'es' ? homeEs : homeFr;
  const projectsTestimonials = lang === 'en' ? projEn : lang === 'es' ? projEs : projFr;
  const allTestimonials = lang === 'en' ? allEn : lang === 'es' ? allEs : allFr;

  return { projects, services, blog, homeTestimonials, projectsTestimonials, allTestimonials };
};
