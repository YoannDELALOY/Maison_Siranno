import React, { useState, useCallback } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services, ServiceData } from './components/Services';
import { Projects, ProjectData } from './components/Projects';
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
import { blogArticles, BlogArticle } from './data/blog';
import { ExpertiseProjectsPage } from './components/ExpertiseProjectsPage';
import { CookieBanner } from './components/CookieBanner';
import { CustomCursor } from './components/CustomCursor';
import { projectsData } from './components/Projects';
import { ExpertiseCategory } from './data/projects';
import { SectionId } from './types';

type Page = 'home' | 'mentions' | 'privacy' | 'expertise' | 'realisations' | 'agence' | 'service-detail' | 'blog' | 'blog-article' | 'blog-article-detail' | 'expertise-projects';

function App() {
  const [page, setPage] = useState<Page>('home');
  const [activeService, setActiveService] = useState<ServiceData | null>(null);
  const [activeServicePage, setActiveServicePage] = useState<ServiceData | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);
  const [activeBlogProject, setActiveBlogProject] = useState<ProjectData | null>(null);
  const [activeBlogArticle, setActiveBlogArticle] = useState<BlogArticle | null>(null);
  const [activeExpertiseCategory, setActiveExpertiseCategory] = useState<ExpertiseCategory | null>(null);
  const [blogArticleFromPage, setBlogArticleFromPage] = useState<Page>('blog');
  const [expertiseProjectsFromPage, setExpertiseProjectsFromPage] = useState<Page>('realisations');

  const showLegal = useCallback((p: 'mentions' | 'privacy') => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goHome = useCallback(() => {
    setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigate = useCallback((p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goToContact = useCallback(() => {
    setPage('home');
    setTimeout(() => {
      document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }, []);

  const openProject = useCallback((idOrProject: string | ProjectData) => {
    if (typeof idOrProject === 'string') {
      const found = projectsData.find((p) => p.id === idOrProject);
      if (found) setActiveProject(found);
    } else {
      setActiveProject(idOrProject);
    }
  }, []);

  const openServiceDetail = useCallback((service: ServiceData) => {
    setActiveServicePage(service);
    setPage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const backFromServiceDetail = useCallback(() => {
    setPage('expertise');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToBlogArticle = useCallback((id: string, fromPage?: Page) => {
    // D'abord chercher dans les articles blog standalone
    const blogArticle = blogArticles.find((a) => a.id === id && a.available);
    if (blogArticle) {
      setActiveBlogArticle(blogArticle);
      setBlogArticleFromPage(fromPage ?? page);
      setPage('blog-article-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // Sinon chercher dans les réalisations
    const found = projectsData.find((p) => p.id === id);
    if (found) {
      setActiveBlogProject(found);
      setBlogArticleFromPage(fromPage ?? page);
      setPage('blog-article');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [page]);

  const backFromBlogArticle = useCallback(() => {
    setActiveBlogProject(null);
    setActiveBlogArticle(null);
    setPage(blogArticleFromPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [blogArticleFromPage]);

  const navigateToExpertiseProjects = useCallback((expertiseId: ExpertiseCategory, fromPage?: Page) => {
    setActiveExpertiseCategory(expertiseId);
    setExpertiseProjectsFromPage(fromPage ?? page);
    setPage('expertise-projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  // Pages légales : sans Navbar ni Footer
  if (page === 'mentions') {
    return <LegalMentions onBack={goHome} />;
  }

  if (page === 'privacy') {
    return <PrivacyPolicy onBack={goHome} />;
  }

  // Toutes les autres pages : avec Navbar + Footer
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
            onBack={() => { setPage(expertiseProjectsFromPage); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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

      {/* Modales */}
      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onNavigateBlog={navigateToBlogArticle}
      />

      {/* Cookie Banner */}
      <CookieBanner onNavigatePrivacy={() => showLegal('privacy')} />
    </div>
  );
}

const WrappedApp: React.FC = () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

export default WrappedApp;
