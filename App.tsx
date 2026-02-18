import React, { useState, useCallback } from 'react';
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
import { projectsData } from './components/Projects';

type Page = 'home' | 'mentions' | 'privacy' | 'expertise' | 'realisations' | 'agence';

function App() {
  const [page, setPage] = useState<Page>('home');
  const [activeService, setActiveService] = useState<ServiceData | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

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

  const openProject = useCallback((idOrProject: string | ProjectData) => {
    if (typeof idOrProject === 'string') {
      const found = projectsData.find((p) => p.id === idOrProject);
      if (found) setActiveProject(found);
    } else {
      setActiveProject(idOrProject);
    }
  }, []);

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
      <Navbar onNavigate={navigate} currentPage={page} />

      <main>
        {page === 'home' && (
          <>
            <Hero />
            <Services onOpenService={setActiveService} />
            <Projects onOpenProject={openProject} />
            <About />
            <Testimonials onOpenProject={openProject} />
            <Contact />
          </>
        )}

        {page === 'expertise' && (
          <ExpertisePage onOpenService={setActiveService} />
        )}

        {page === 'realisations' && (
          <ProjectsPage onOpenProject={openProject} />
        )}

        {page === 'agence' && (
          <AgencyPage onOpenProject={openProject} />
        )}
      </main>

      <Footer onShowLegal={showLegal} />

      {/* Modales */}
      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}

export default App;
