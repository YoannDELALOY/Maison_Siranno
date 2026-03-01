import React, { useState, useCallback } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services, ServiceData } from './components/Services';
import { Projects } from './components/Projects';
import { ProjectData } from './data/projects';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { ProjectModal } from './components/ProjectModal';
import { LegalMentions } from './components/LegalMentions';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ExpertisePage } from './components/ExpertisePage';
import { ProjectsPage } from './components/ProjectsPage';
import { AgencyPage } from './components/AgencyPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { BlogPage } from './components/BlogPage';
import { BlogArticlePage } from './components/BlogArticlePage';
import { BlogArticleDetailPage } from './components/BlogArticleDetailPage';
import { BlogArticle } from './data/blog';
import { ExpertiseProjectsPage } from './components/ExpertiseProjectsPage';
import { CookieBanner } from './components/CookieBanner';
import { CustomCursor } from './components/CustomCursor';
import { ExpertiseCategory } from './data/projects';
import { SectionId } from './types';
import { useLocalizedData } from './hooks/useLocalizedData';

/**
 * Identifiants des pages du routeur SPA manuel.
 * Pas de react-router : la navigation est gérée par l'état `page` dans App.
 */
type Page =
  | 'home'
  | 'mentions'
  | 'privacy'
  | 'expertise'
  | 'realisations'
  | 'agence'
  | 'service-detail'
  | 'blog'
  | 'blog-article'
  | 'blog-article-detail'
  | 'expertise-projects';

/**
 * Composant racine de l'application.
 * Gère le routage SPA, les modales et les transitions entre pages.
 * Enveloppé par `WrappedApp` qui injecte le contexte langue.
 */
function App() {
  const { projects: projectsData, blog: blogArticles } = useLocalizedData();

  // ── État de navigation ──────────────────────────────────────────────────
  const [page, setPage] = useState<Page>('home');

  // ── État des modales et pages de détail ─────────────────────────────────
  /** Service affiché dans la modale flottante (ServiceModal) */
  const [activeService, setActiveService] = useState<ServiceData | null>(null);
  /** Service affiché en page dédiée (ServiceDetailPage) */
  const [activeServicePage, setActiveServicePage] = useState<ServiceData | null>(null);
  /** Réalisation affichée dans la modale flottante (ProjectModal) */
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);
  /** Réalisation affichée en article de blog (BlogArticlePage) */
  const [activeBlogProject, setActiveBlogProject] = useState<ProjectData | null>(null);
  /** Article de blog standalone affiché (BlogArticleDetailPage) */
  const [activeBlogArticle, setActiveBlogArticle] = useState<BlogArticle | null>(null);
  /** Catégorie d'expertise affichée (ExpertiseProjectsPage) */
  const [activeExpertiseCategory, setActiveExpertiseCategory] = useState<ExpertiseCategory | null>(null);

  /** Page d'origine pour le bouton « Retour » des articles de blog */
  const [blogArticleFromPage, setBlogArticleFromPage] = useState<Page>('blog');
  /** Page d'origine pour le bouton « Retour » des projets par expertise */
  const [expertiseProjectsFromPage, setExpertiseProjectsFromPage] = useState<Page>('realisations');

  // ── Callbacks de navigation ─────────────────────────────────────────────

  /** Affiche une page légale (mentions / politique de confidentialité) */
  const showLegal = useCallback((legalPage: 'mentions' | 'privacy') => {
    setPage(legalPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /** Retourne à la page d'accueil */
  const goHome = useCallback(() => {
    setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /** Navigation générique vers n'importe quelle page */
  const navigate = useCallback((targetPage: Page) => {
    setPage(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /**
   * Navigue vers la page d'accueil et scrolle jusqu'à la section Contact.
   * Le timeout laisse le temps au re-render avant le scroll.
   */
  const goToContact = useCallback(() => {
    setPage('home');
    setTimeout(() => {
      document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }, []);

  /**
   * Ouvre la modale d'une réalisation.
   * Accepte soit un identifiant string (recherche dans les données localisées),
   * soit directement un objet ProjectData.
   */
  const openProject = useCallback((projectIdOrData: string | ProjectData) => {
    if (typeof projectIdOrData === 'string') {
      const found = projectsData.find((p) => p.id === projectIdOrData);
      if (found) setActiveProject(found);
    } else {
      setActiveProject(projectIdOrData);
    }
  }, [projectsData]);

  /** Ouvre la page dédiée d'un service (ServiceDetailPage) */
  const openServiceDetail = useCallback((service: ServiceData) => {
    setActiveServicePage(service);
    setPage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /** Retourne à la page Expertise depuis le détail d'un service */
  const backFromServiceDetail = useCallback(() => {
    setPage('expertise');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /**
   * Navigue vers la page de détail d'un article ou d'une réalisation.
   * Cherche d'abord dans les articles de blog standalone, puis dans les réalisations.
   * @param id       Identifiant de l'article ou de la réalisation
   * @param fromPage Page d'origine (pour le bouton retour)
   */
  const navigateToBlogArticle = useCallback((id: string, fromPage?: Page) => {
    const blogArticle = blogArticles.find((a) => a.id === id && a.available);
    if (blogArticle) {
      setActiveBlogArticle(blogArticle);
      setBlogArticleFromPage(fromPage ?? page);
      setPage('blog-article-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // Fallback : chercher dans les réalisations (affichées via BlogArticlePage)
    const found = projectsData.find((p) => p.id === id);
    if (found) {
      setActiveBlogProject(found);
      setBlogArticleFromPage(fromPage ?? page);
      setPage('blog-article');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [page, blogArticles, projectsData]);

  /** Retourne à la page d'origine après lecture d'un article */
  const backFromBlogArticle = useCallback(() => {
    setActiveBlogProject(null);
    setActiveBlogArticle(null);
    setPage(blogArticleFromPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [blogArticleFromPage]);

  /**
   * Navigue vers la liste des réalisations filtrées par catégorie d'expertise.
   * @param expertiseId Catégorie d'expertise à afficher
   * @param fromPage    Page d'origine (pour le bouton retour)
   */
  const navigateToExpertiseProjects = useCallback((expertiseId: ExpertiseCategory, fromPage?: Page) => {
    setActiveExpertiseCategory(expertiseId);
    setExpertiseProjectsFromPage(fromPage ?? page);
    setPage('expertise-projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  /** Retourne à la page d'origine depuis la liste filtrée par expertise */
  const backFromExpertiseProjects = useCallback(() => {
    setPage(expertiseProjectsFromPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [expertiseProjectsFromPage]);

  // ── Pages légales : sans Navbar ni Footer ──────────────────────────────
  if (page === 'mentions') {
    return <LegalMentions onBack={goHome} />;
  }

  if (page === 'privacy') {
    return <PrivacyPolicy onBack={goHome} />;
  }

  // ── Toutes les autres pages : avec Navbar + Footer ──────────────────────
  return (
    <div className="min-h-screen bg-paper relative overflow-x-hidden">
      <CustomCursor />
      <Navbar onNavigate={navigate} currentPage={page} />

      <main>
        {page === 'home' && (
          <>
            <Hero />
            <Services onOpenService={openServiceDetail} />
            <Projects onOpenProject={openProject} />
            <About />
            <Testimonials onOpenProject={navigateToBlogArticle} />
            <Contact />
          </>
        )}

        {page === 'expertise' && (
          <ExpertisePage
            onOpenService={setActiveService}
            onNavigateService={openServiceDetail}
            onGoToContact={goToContact}
          />
        )}

        {page === 'realisations' && (
          <ProjectsPage
            onOpenProject={openProject}
            onNavigateBlogArticle={navigateToBlogArticle}
            onGoToContact={goToContact}
            onNavigateExpertise={navigateToExpertiseProjects}
          />
        )}

        {page === 'expertise-projects' && activeExpertiseCategory && (
          <ExpertiseProjectsPage
            expertiseId={activeExpertiseCategory}
            onBack={backFromExpertiseProjects}
            onNavigateBlogArticle={navigateToBlogArticle}
            onGoToContact={goToContact}
          />
        )}

        {page === 'agence' && (
          <AgencyPage
            onGoToContact={goToContact}
          />
        )}

        {page === 'service-detail' && activeServicePage && (
          <ServiceDetailPage
            service={activeServicePage}
            onBack={backFromServiceDetail}
            onGoToContact={goToContact}
            onViewProject={openProject}
          />
        )}

        {page === 'blog' && (
          <BlogPage
            onNavigateBlogArticle={navigateToBlogArticle}
            onGoToContact={goToContact}
          />
        )}

        {page === 'blog-article' && (
          <BlogArticlePage
            project={activeBlogProject}
            onBack={backFromBlogArticle}
            onGoToContact={goToContact}
          />
        )}

        {page === 'blog-article-detail' && activeBlogArticle && (
          <BlogArticleDetailPage
            article={activeBlogArticle}
            onBack={backFromBlogArticle}
            onGoToContact={goToContact}
          />
        )}
      </main>

      <Footer
        onShowLegal={showLegal}
        onNavigateService={openServiceDetail}
      />

      {/* Modales flottantes */}
      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onNavigateBlog={navigateToBlogArticle}
      />

      {/* Bandeau RGPD */}
      <CookieBanner onNavigatePrivacy={() => showLegal('privacy')} />
    </div>
  );
}

/**
 * Point d'entrée exporté — enveloppe App dans le LanguageProvider
 * pour que tout l'arbre ait accès au contexte langue.
 */
const WrappedApp: React.FC = () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

export default WrappedApp;
