# Maison Siranno — Agence IA & Web

Site web de l'agence Maison Siranno, fondée par Yoann DELALOY à Châteauneuf-sur-Loire (Loiret, 45).

## Stack Technique

| Technologie | Rôle |
|---|---|
| React 19 + TypeScript | Framework UI |
| Tailwind CSS (CDN) | Styles utilitaires |
| Vite | Bundler & Dev server |
| Lucide React | Icônes |
| Recharts | Graphiques (chargement différé via React.lazy) |
| Formspree | Formulaire de contact |

## Installation Locale

```bash
# Cloner le dépôt
git clone https://github.com/YoannDELALOY/maison-siranno.git
cd maison-siranno

# Installer les dépendances
npm install

# Démarrer le serveur de développement (port 5174)
npm run dev
```

Le site sera accessible sur http://localhost:5174

## Build Production

```bash
npm run build
```

Le dossier `dist/` est généré. Vérifier avec :
```bash
npm run preview
```

## Structure des Fichiers

```
maison-siranno/
├── components/                    # Composants React
│   ├── Hero.tsx                   # Section Hero (accueil)
│   ├── Services.tsx               # Section Expertises (accueil, carousel)
│   ├── Projects.tsx               # Section Réalisations (accueil, carousel)
│   ├── About.tsx                  # Section Agence (accueil)
│   ├── Testimonials.tsx           # Section Témoignages (accueil)
│   ├── Contact.tsx                # Section Contact + formulaire Formspree
│   ├── Footer.tsx                 # Pied de page
│   ├── Navbar.tsx                 # Navigation + sélecteur de langue
│   ├── BlobBackground.tsx         # Fond animé réutilisable (blobs or)
│   ├── CustomCursor.tsx           # Curseur personnalisé
│   ├── ExpertisePage.tsx          # Page Expertise (dédiée)
│   ├── ExpertiseProjectsPage.tsx  # Page réalisations filtrées par expertise
│   ├── ProjectsPage.tsx           # Page Réalisations (dédiée)
│   ├── AgencyPage.tsx             # Page L'Agence (dédiée)
│   ├── BlogPage.tsx               # Page Blog
│   ├── BlogArticlePage.tsx        # Réalisation présentée en article
│   ├── BlogArticleDetailPage.tsx  # Article de blog standalone
│   ├── ServiceDetailPage.tsx      # Page détail d'un service
│   ├── ProjectModal.tsx           # Modale réalisation
│   ├── ServiceModal.tsx           # Modale service
│   ├── PerformanceChart.tsx       # Graphique Recharts (chargé en lazy)
│   ├── LegalMentions.tsx          # Mentions légales
│   ├── PrivacyPolicy.tsx          # Politique de confidentialité
│   └── CookieBanner.tsx           # Bannière RGPD
├── contexts/
│   └── LanguageContext.tsx        # Contexte React i18n (fr/en/es)
├── hooks/
│   ├── useTranslation.ts          # Hook t() pour les textes UI
│   ├── useLocalizedData.ts        # Hook données statiques localisées
│   ├── useSwipe.ts                # Hook swipe tactile (carousels mobiles)
│   └── useSeo.ts                  # Hook mise à jour <title> et <meta>
├── i18n/
│   ├── fr.json                    # Traductions français
│   ├── en.json                    # Traductions anglais
│   └── es.json                    # Traductions espagnol
├── data/                          # Données statiques (source de vérité)
│   ├── projects.ts                # Réalisations — français
│   ├── projects.en.ts             # Réalisations — anglais
│   ├── projects.es.ts             # Réalisations — espagnol
│   ├── services.ts                # Expertises — français
│   ├── services.en.ts             # Expertises — anglais
│   ├── services.es.ts             # Expertises — espagnol
│   ├── testimonials.ts            # Témoignages — français
│   ├── testimonials.en.ts         # Témoignages — anglais
│   ├── testimonials.es.ts         # Témoignages — espagnol
│   ├── blog.ts                    # Articles de blog — français
│   ├── blog.en.ts                 # Articles de blog — anglais
│   ├── blog.es.ts                 # Articles de blog — espagnol
│   └── socialLinks.ts             # Liens réseaux sociaux (source unique)
├── constants/
│   ├── config.ts                  # CONTACT_CONFIG (email, tel, adresse, Formspree)
│   └── textures.ts                # Styles de texture réutilisables (grain SVG)
├── public/
│   ├── logos/                     # Logos Maison Siranno
│   ├── robots.txt                 # Configuration robots SEO
│   └── sitemap.xml                # Sitemap XML
├── Media/                         # Images et icônes
├── App.tsx                        # Composant racine + routeur SPA manuel
├── index.tsx                      # Point d'entrée React
├── index.html                     # HTML + meta SEO + Tailwind CDN + polices
├── types.ts                       # Types TypeScript partagés (SectionId…)
├── vite.config.ts                 # Configuration Vite
├── Dockerfile                     # Build Docker multi-stage
├── docker-compose.yml             # Déploiement VPS + Traefik
└── nginx.conf                     # Configuration nginx SPA
```

## Internationalisation (i18n)

Le site supporte 3 langues : **français** (défaut), **anglais** et **espagnol**.

### Architecture

- **Textes UI** → `i18n/{fr,en,es}.json` + hook `useTranslation`
- **Données** (projets, services, blog, témoignages) → fichiers `data/*.{en,es}.ts` + hook `useLocalizedData`
- **Persistance** → `localStorage` (clé `ms_lang`)
- **Détection automatique** → langue du navigateur au premier chargement

### Ajouter une traduction

1. Ajouter la clé dans `i18n/fr.json`, `i18n/en.json` et `i18n/es.json`
2. Utiliser `const { t } = useTranslation()` dans le composant
3. Appeler `t('section.ma_cle')` dans le JSX

### Ajouter une langue

1. Ajouter le code dans `contexts/LanguageContext.tsx` → type `Language`
2. Créer `i18n/{code}.json` (copier fr.json et traduire)
3. Créer les fichiers `data/*.{code}.ts`
4. Mettre à jour `hooks/useLocalizedData.ts` → `LOCALE_MAP`
5. Mettre à jour `hooks/useTranslation.ts` → `translations`

## Guide Ajout de Contenu

### Ajouter une réalisation

Dans `data/projects.ts` (et `projects.en.ts`, `projects.es.ts`), ajouter un objet :

```typescript
{
  id: 'mon-projet',           // Identifiant unique (slug)
  title: "Nom du Projet",
  category: "Type de projet",
  expertise: 'web-apps-saas', // ExpertiseCategory (voir type)
  image: "https://...",
  description: "Description courte",
  tags: ["Tag1", "Tag2"],
  client: "Nom client",
  year: "2025",
  date: "2025-06",            // Format YYYY-MM (pour tri)
  fullDescription: "Description complète...",
  challenges: ["Défi 1"],
  results: ["Résultat 1"]
}
```

### Ajouter un article de blog

Dans `data/blog.ts` (et `blog.en.ts`, `blog.es.ts`), ajouter un objet :

```typescript
{
  id: 'mon-article',
  slug: 'mon-article',        // Pour l'URL canonique SEO
  title: "Titre de l'article",
  excerpt: "Résumé visible en aperçu",
  category: 'Intelligence Artificielle & RAG', // BlogCategory
  date: "Mars 2025",
  readTime: "7 min",
  image: "https://...",
  tags: ["Tag1", "Tag2"],
  available: true,            // false = carte "Bientôt disponible"
  body: {                     // Optionnel — null si available: false
    intro: "Introduction...",
    sections: [{ title: "...", paragraphs: ["..."], bullets: ["..."] }],
    keyTakeaways: ["Point clé 1"],
    conclusion: "Conclusion..."
  }
}
```

### Constantes centralisées

Ne pas dupliquer les données de contact ou les liens sociaux — utiliser les sources uniques :

```typescript
import { CONTACT_CONFIG } from '../constants/config';   // email, tel, adresse
import { SOCIAL_LINKS } from '../data/socialLinks';      // liens réseaux sociaux
import { DARK_TEXTURE_STYLE, LIGHT_TEXTURE_STYLE } from '../constants/textures'; // styles grain
```

## Déploiement Docker (VPS Hostinger)

### Prérequis

- Docker + Docker Compose installés sur le VPS
- Traefik configuré avec réseau `traefik-network`
- Port 80 et 443 redirigés vers Traefik
- Certificats Let's Encrypt configurés dans Traefik

### Build et déploiement

```bash
# Sur le serveur VPS
git clone https://github.com/YoannDELALOY/maison-siranno.git
cd maison-siranno

docker build -t maison-siranno:latest .
docker-compose up -d

# Voir les logs
docker-compose logs -f maison-siranno
```

### Test local avec Docker

```bash
docker build -t maison-siranno .
docker run -p 8080:80 maison-siranno
# → http://localhost:8080
```

### Mise à jour du site

```bash
git pull origin main
docker-compose build --no-cache
docker-compose up -d --force-recreate
```

## Configuration Formspree

Dans `constants/config.ts`, remplacer l'identifiant du formulaire :

```typescript
formspreeId: 'YOUR_FORMSPREE_ID', // → Votre ID Formspree réel
```

## SEO

- `public/robots.txt` — Configuration crawlers + IA-friendly
- `public/sitemap.xml` — Sitemap XML complet
- `index.html` — Meta SEO, Open Graph, JSON-LD LocalBusiness
- Hook `useSeo` — Met à jour `<title>` et `<meta description>` dynamiquement par page
- Polices chargées en `preload` non-bloquant (performance Lighthouse)

---

**Maison Siranno** — Agence IA & Web · Châteauneuf-sur-Loire, Loiret (45)
**Contact** : contact@yoanndelaloy.com · 06 47 34 43 64
**Fondateur** : Yoann DELALOY
