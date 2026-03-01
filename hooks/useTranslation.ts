import { useLanguage } from '../contexts/LanguageContext';
import fr from '../i18n/fr.json';
import en from '../i18n/en.json';
import es from '../i18n/es.json';

/** Dictionnaire complet des traductions, indexé par code langue */
const translations = { fr, en, es } as const;

/**
 * Parcourt récursivement un objet en suivant un chemin pointé ("a.b.c").
 * @param obj   Objet source (typiquement le dictionnaire de traduction)
 * @param path  Chemin de la clé, e.g. "navbar.links.expertise"
 * @returns     La valeur résolue, ou `path` si la clé est introuvable (fallback visible)
 */
function resolvePath(obj: unknown, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return path;
    current = (current as Record<string, unknown>)[key];
  }
  return current !== undefined ? current : path;
}

/**
 * Hook d'internationalisation — retourne la fonction `t()` et la langue active.
 *
 * Utilisation :
 * ```tsx
 * const { t } = useTranslation();
 * t('navbar.links.expertise')           // → string
 * t('blog_page.read_time', { time: '5 min' }) // → string avec interpolation
 * t('footer.nav_links', { returnObjects: true }) // → string[]
 * ```
 */
export const useTranslation = () => {
  const { lang } = useLanguage();
  const dict = translations[lang] as unknown;

  /**
   * Résout et retourne une traduction.
   * @param key      Chemin pointé vers la clé, e.g. "section.title"
   * @param options  `returnObjects: true` pour retourner tableaux/objets ;
   *                 ou un Record<string, string> pour interpoler les variables ({key} ou {{key}})
   */
  const t = (key: string, options?: { returnObjects?: boolean } | Record<string, string>): unknown => {
    let result = resolvePath(dict, key);

    // Fallback : clé introuvable + tableau attendu → tableau vide pour éviter les crash `.map()`
    if (options && 'returnObjects' in options && options.returnObjects && typeof result === 'string' && result === key) {
      return [];
    }

    // Interpolation des variables : remplace {varName} et {{varName}} dans la chaîne traduite
    if (options && typeof result === 'string') {
      Object.entries(options).forEach(([k, v]) => {
        if (k !== 'returnObjects' && typeof v === 'string') {
          result = (result as string).replace(`{{${k}}}`, v).replace(`{${k}}`, v);
        }
      });
    }

    return result;
  };

  return { t, lang };
};
