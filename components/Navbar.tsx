import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SectionId } from '../types';

type NavPage = 'expertise' | 'realisations' | 'agence' | 'home';

interface NavbarProps {
  onNavigate?: (page: NavPage) => void;
  currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: NavPage }[] = [
    { label: 'Expertise', page: 'expertise' },
    { label: 'Réalisations', page: 'realisations' },
    { label: "L'Agence", page: 'agence' },
  ];

  const handleNavClick = (page: NavPage) => {
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Fallback ancre si pas de routing
      const sectionMap: Record<NavPage, string> = {
        expertise: `#${SectionId.SERVICES}`,
        realisations: `#${SectionId.PROJECTS}`,
        agence: `#${SectionId.ABOUT}`,
        home: `#${SectionId.HOME}`,
      };
      window.location.href = sectionMap[page];
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActivePage = (page: NavPage) => currentPage === page;

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex items-center justify-between
          ${
            isScrolled
              ? 'top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-auto md:min-w-[820px] rounded-full glass-panel px-6 py-3 shadow-2xl shadow-charcoal/5 border border-white/60'
              : 'top-0 left-0 right-0 w-full px-6 py-6 bg-transparent'
          }
        `}
      >
        <div className={`flex items-center justify-between w-full ${isScrolled ? '' : 'max-w-7xl mx-auto'}`}>

          {/* Logo Image */}
          <button onClick={handleLogoClick} className="flex items-center group shrink-0 focus:outline-none">
            <img
              src="/logos/Design sans titre (84).png"
              alt="Maison Siranno - L'art du web"
              className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'}`}
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.page)}
                className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-gold after:transition-all
                  ${isActivePage(link.page)
                    ? 'text-gold after:w-full'
                    : 'text-charcoal/80 hover:text-gold after:w-0 hover:after:w-full'
                  }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={`#${SectionId.CONTACT}`}
              onClick={() => { if (currentPage !== 'home' && onNavigate) { onNavigate('home'); setTimeout(() => { document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' }); }, 300); } }}
              className={`flex items-center gap-2 btn-metallic-dark rounded-full text-sm font-medium shadow-lg transition-all duration-300
                ${isScrolled ? 'px-4 py-2' : 'px-5 py-2.5'}
              `}
            >
              <Phone size={16} />
              <span>Discuter</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-paper/96 backdrop-blur-xl md:hidden animate-fade-in flex flex-col justify-center items-center">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-6 p-2 text-charcoal"
            aria-label="Fermer le menu"
          >
            <X size={32} />
          </button>

          {/* Logo centré dans le menu mobile */}
          <div className="absolute top-6 left-6">
            <img
              src="/logos/Design sans titre (84).png"
              alt="Maison Siranno"
              className="h-10 object-contain"
            />
          </div>

          <div className="flex flex-col space-y-8 text-center px-8 w-full">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.page)}
                className={`text-2xl font-serif font-medium transition-all ${isActivePage(link.page) ? 'text-gold' : 'text-charcoal hover:text-gold'}`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={`#${SectionId.CONTACT}`}
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (currentPage !== 'home' && onNavigate) {
                  onNavigate('home');
                  setTimeout(() => { document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' }); }, 300);
                }
              }}
              className="mt-4 px-8 py-4 btn-metallic-gold rounded-full text-lg font-semibold shadow-lg mx-auto inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Démarrer un projet
            </a>
          </div>
        </div>
      )}
    </>
  );
};
