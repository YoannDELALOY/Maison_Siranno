import React, { useState, useEffect, useRef } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LANGS: { code: Language; flag: string; label: string }[] = [
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
];

interface LanguageButtonProps {
  isScrolled?: boolean;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({ isScrolled = false }) => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  /* Fermer si clic en dehors */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const handleSelect = (code: Language) => {
    setLang(code);
    setOpen(false);
  };

  /* Position : flottant bas-droite quand scrolled, sinon dans la barre */
  const isFloating = isScrolled;

  return (
    <div
      ref={ref}
      className={
        isFloating
          ? 'fixed bottom-6 right-6 z-50'
          : 'relative'
      }
    >
      {/* Bouton principal */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Changer de langue"
        aria-expanded={open}
        className={
          isFloating
            ? 'flex items-center gap-2 px-4 py-3 rounded-full btn-metallic-dark text-white shadow-2xl border border-gold/20 transition-all duration-300'
            : 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-gold/10 border border-white/10 text-white text-sm transition-all duration-200'
        }
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="text-sm font-medium hidden sm:inline">{current.code.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute ${isFloating ? 'bottom-full right-0 mb-2' : 'top-full right-0 mt-1'} bg-charcoal border border-white/10 rounded-xl shadow-2xl overflow-hidden min-w-[140px] z-50`}
          style={{ backdropFilter: 'blur(16px)' }}
        >
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => handleSelect(l.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                l.code === lang
                  ? 'text-gold bg-gold/10 font-semibold'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-base">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
