import React, { useState, useEffect, useRef } from 'react';

import { useLanguage, Language } from '../contexts/LanguageContext';

const LANGS: { code: Language; flag: string; label: string; countryCode: string }[] = [
  { code: 'fr', flag: '🇫🇷', label: 'Français',  countryCode: 'fr' },
  { code: 'en', flag: '🇬🇧', label: 'English',   countryCode: 'gb' },
  { code: 'es', flag: '🇪🇸', label: 'Español',   countryCode: 'es' },
];

const FlagImg: React.FC<{ countryCode: string; label: string }> = ({ countryCode, label }) => (
  <img
    src={`https://flagcdn.com/20x15/${countryCode}.png`}
    srcSet={`https://flagcdn.com/40x30/${countryCode}.png 2x`}
    width={20}
    height={15}
    alt={label}
    className="rounded-sm shrink-0"
    style={{ display: 'inline-block' }}
  />
);

export const LanguageButton: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

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

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Changer de langue"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-gold/10 border border-white/10 text-charcoal text-sm transition-all duration-200"
      >
        <FlagImg countryCode={current.countryCode} label={current.label} />
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute top-full right-0 mt-1 bg-charcoal border border-white/10 rounded-xl shadow-2xl overflow-hidden min-w-[140px] z-50"
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
              <FlagImg countryCode={l.countryCode} label={l.label} />
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
