import { useLanguage } from '../contexts/LanguageContext';
import fr from '../i18n/fr.json';
import en from '../i18n/en.json';
import es from '../i18n/es.json';

type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

const translations = { fr, en, es } as const;

type Translations = typeof fr;

/** Résout un chemin "a.b.c" dans un objet imbriqué */
function resolvePath(obj: unknown, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return path;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === 'string' ? current : path;
}

export const useTranslation = () => {
  const { lang } = useLanguage();
  const dict = translations[lang] as unknown;

  /** t('navbar.links.expertise') → string traduit */
  const t = (key: string, vars?: Record<string, string>): string => {
    let str = resolvePath(dict, key);
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        str = str.replace(`{{${k}}}`, v);
      });
    }
    return str;
  };

  return { t, lang };
};
