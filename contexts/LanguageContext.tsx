import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'fr' | 'en' | 'es';

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'fr',
  setLang: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem('ms_lang');
    if (stored === 'en' || stored === 'es') return stored;
    const browser = navigator.language.slice(0, 2);
    if (browser === 'en') return 'en';
    if (browser === 'es') return 'es';
    return 'fr';
  });

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem('ms_lang', l);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
