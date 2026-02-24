import { useEffect } from 'react';

const DEFAULT_TITLE = 'Maison Siranno — Agence IA & Web | Châteauneuf-sur-Loire (45)';
const DEFAULT_DESC  = "Maison Siranno — Agence IA & Web à Châteauneuf-sur-Loire. Développement web apps & SaaS, automatisation n8n, agents IA RAG, marketing automation. Résultats mesurables dès 30 jours. Yoann DELALOY.";
const DEFAULT_URL   = 'https://maisonsiranno.fr/';

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

export const useSeo = (title: string, description: string, url: string = DEFAULT_URL) => {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]',           'content', description);
    setMeta('meta[property="og:title"]',          'content', title);
    setMeta('meta[property="og:description"]',    'content', description);
    setMeta('meta[property="og:url"]',            'content', url);
    setMeta('meta[name="twitter:title"]',         'content', title);
    setMeta('meta[name="twitter:description"]',   'content', description);
    setMeta('link[rel="canonical"]',              'href',    url);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]',           'content', DEFAULT_DESC);
      setMeta('meta[property="og:title"]',          'content', DEFAULT_TITLE);
      setMeta('meta[property="og:description"]',    'content', DEFAULT_DESC);
      setMeta('meta[property="og:url"]',            'content', DEFAULT_URL);
      setMeta('meta[name="twitter:title"]',         'content', DEFAULT_TITLE);
      setMeta('meta[name="twitter:description"]',   'content', DEFAULT_DESC);
      setMeta('link[rel="canonical"]',              'href',    DEFAULT_URL);
    };
  }, [title, description, url]);
};
