import React, { createContext, useContext, useState, useCallback } from 'react';

/** Codes langue supportés par l'application */
export type Language = 'fr' | 'en' | 'es';

/** Valeur exposée par le contexte langue */
interface LanguageContextValue {
  /** Langue active */
  lang: Language;
  /**
   * Change la langue, persiste en localStorage et recharge la page.
   * Le rechargement garantit que toutes les données localisées (statiques)
   * sont correctement remplacées sans gestion de cache complexe.
   */
  setLang: (l: Language) => void;
}

/**
 * Contexte React pour la gestion de la langue active.
 * Valeur par défaut : français (ne devrait jamais être utilisée hors du Provider).
 */
const LanguageContext = createContext<LanguageContextValue>({
  lang: 'fr',
  setLang: () => {},
});

/**
 * Fournisseur du contexte langue.
 *
 * Priorité de détection de la langue au premier chargement :
 * 1. Valeur sauvegardée dans `localStorage` (clé `ms_lang`)
 * 2. Langue du navigateur (`navigator.language`)
 * 3. Fallback : français
 */
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang] = useState<Language>(() => {
    const stored = localStorage.getItem('ms_lang');
    if (stored === 'en' || stored === 'es') return stored;
    const browser = navigator.language.slice(0, 2);
    if (browser === 'en') return 'en';
    if (browser === 'es') return 'es';
    return 'fr';
  });

  /** Persiste la langue choisie et force un rechargement complet */
  const setLang = useCallback((l: Language) => {
    localStorage.setItem('ms_lang', l);
    window.location.reload();
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

/** Hook consommateur du contexte langue */
export const useLanguage = () => useContext(LanguageContext);
