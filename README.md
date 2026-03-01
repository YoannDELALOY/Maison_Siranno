# Maison Siranno — Agence IA & Web

Site web de l'agence Maison Siranno, fondée par Yoann DELALOY à Châteauneuf-sur-Loire (Loiret, 45).
Disponible sur **[yoanndelaloy.com](https://yoanndelaloy.com)**

## Stack Technique

| Technologie | Rôle |
|---|---|
| React 19 + TypeScript | Framework UI |
| Tailwind CSS (CDN) | Styles utilitaires |
| Vite | Bundler & Dev server |
| Lucide React | Icônes |
| Recharts | Graphiques (chargement différé via React.lazy) |
| Formspree | Formulaire de contact |
| Docker + Nginx | Conteneurisation & serveur de fichiers statiques |
| Traefik | Reverse proxy + SSL Let's Encrypt |

---

## Installation Locale

```bash
# Cloner le dépôt
git clone https://github.com/YoannDELALOY/Maison_Siranno.git
cd Maison_Siranno

# Installer les dépendances
npm install

# Démarrer le serveur de développement (port 5174)
npm run dev
```

Le site sera accessible sur http://localhost:5174

## Build Production

```bash
npm run build      # génère dist/
npm run preview    # vérification locale du build
```

---

## Structure des Fichiers

```
maison-siranno/
├── .github/workflows/deploy.yml  # CI/CD GitHub Actions → VPS
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
│   ├── projects.ts / .en.ts / .es.ts
│   ├── services.ts / .en.ts / .es.ts
│   ├── testimonials.ts / .en.ts / .es.ts
│   ├── blog.ts / .en.ts / .es.ts
│   └── socialLinks.ts
├── constants/
│   ├── config.ts                  # CONTACT_CONFIG (email, tel, Formspree)
│   └── textures.ts                # Styles de texture réutilisables
├── public/
│   ├── logos/                     # Logos Maison Siranno
│   ├── robots.txt                 # Configuration robots SEO
│   └── sitemap.xml                # Sitemap XML
├── Media/                         # Images et icônes
├── App.tsx                        # Composant racine + routeur SPA manuel
├── index.tsx                      # Point d'entrée React
├── index.html                     # HTML + meta SEO + Tailwind CDN + polices
├── types.ts                       # Types TypeScript partagés
├── vite.config.ts                 # Configuration Vite
├── Dockerfile                     # Build Docker multi-stage (node → nginx)
├── docker-compose.yml             # Déploiement VPS + labels Traefik
└── nginx.conf                     # Config Nginx SPA + cache + sécurité
```

---

## Internationalisation (i18n)

Le site supporte 3 langues : **français** (défaut), **anglais** et **espagnol**.

- **Textes UI** → `i18n/{fr,en,es}.json` + hook `useTranslation`
- **Données** (projets, services, blog, témoignages) → `data/*.{en,es}.ts` + hook `useLocalizedData`
- **Persistance** → `localStorage` (clé `ms_lang`)

### Ajouter une traduction

1. Ajouter la clé dans `i18n/fr.json`, `i18n/en.json` et `i18n/es.json`
2. Utiliser `const { t } = useTranslation()` dans le composant
3. Appeler `t('section.ma_cle')` dans le JSX

---

## Guide Ajout de Contenu

### Ajouter une réalisation

Dans `data/projects.ts` (et `projects.en.ts`, `projects.es.ts`) :

```typescript
{
  id: 'mon-projet',
  title: "Nom du Projet",
  category: "Type de projet",
  expertise: 'web-apps-saas',
  image: "https://...",
  description: "Description courte",
  tags: ["Tag1", "Tag2"],
  client: "Nom client",
  year: "2025",
  date: "2025-06",
  fullDescription: "Description complète...",
  challenges: ["Défi 1"],
  results: ["Résultat 1"]
}
```

### Constantes centralisées

```typescript
import { CONTACT_CONFIG } from '../constants/config';    // email, tel, adresse
import { SOCIAL_LINKS } from '../data/socialLinks';       // liens réseaux sociaux
import { DARK_TEXTURE_STYLE } from '../constants/textures'; // styles grain
```

---

## Déploiement sur VPS (Docker + Traefik)

### Architecture

```
Internet → Traefik (80/443) → container maison-siranno (nginx:80)
                ↓
         Let's Encrypt SSL (auto-renew)
```

### 1. Préparer le VPS (une seule fois)

```bash
# Créer le réseau Traefik partagé
docker network create traefik_network

# Connecter Traefik à ce réseau (remplacer <traefik> par le nom de ton container)
docker network connect traefik_network <traefik>

# Cloner le projet
mkdir -p /opt/maison-siranno
cd /opt/maison-siranno
git clone https://github.com/YoannDELALOY/Maison_Siranno.git .
```

### 2. Démarrer le site

```bash
cd /opt/maison-siranno
docker compose up -d --build

# Vérifier
docker compose logs -f maison-siranno
```

### 3. Configurer le DNS

Dans ton gestionnaire DNS (ns1.dns-parking.com), créer :

| Type | Nom | Valeur |
|------|-----|--------|
| A | `@` | `<IP_VPS>` |
| A | `www` | `<IP_VPS>` |

### 4. Configurer GitHub Actions (déploiement automatique)

Dans **GitHub → Settings → Secrets and variables → Actions**, ajouter :

| Secret | Valeur |
|--------|--------|
| `VPS_HOST` | Adresse IP de ton VPS |
| `VPS_USER` | `root` |
| `VPS_SSH_KEY` | Clé privée SSH (voir ci-dessous) |
| `VPS_PORT` | `22` (optionnel, par défaut) |

#### Générer la clé SSH pour GitHub Actions

```bash
# Sur ta machine locale (ou sur le VPS)
ssh-keygen -t ed25519 -C "github-actions-maison-siranno" -f ~/.ssh/github_maison_siranno

# Afficher la clé publique → à ajouter sur le VPS
cat ~/.ssh/github_maison_siranno.pub

# Afficher la clé privée → à ajouter dans GitHub Secrets (VPS_SSH_KEY)
cat ~/.ssh/github_maison_siranno
```

#### Ajouter la clé publique sur le VPS

```bash
# Sur le VPS
mkdir -p ~/.ssh
echo "COLLER_LA_CLE_PUBLIQUE_ICI" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

Une fois configuré, chaque `git push` sur `main` déploie automatiquement le site.

### Test local avec Docker

```bash
docker build -t maison-siranno .
docker run -p 8080:80 maison-siranno
# → http://localhost:8080
```

---

## Configuration Formspree

Dans `constants/config.ts` :

```typescript
formspreeId: 'YOUR_FORMSPREE_ID',
```

## SEO

- `public/robots.txt` — Crawlers + IA-friendly
- `public/sitemap.xml` — Sitemap XML (domaine `yoanndelaloy.com`)
- `index.html` — Meta SEO, Open Graph, JSON-LD LocalBusiness
- Hook `useSeo` — Met à jour `<title>` et `<meta description>` par page
- Polices chargées en `preload` non-bloquant

---

**Maison Siranno** — Agence IA & Web · Châteauneuf-sur-Loire, Loiret (45)
**Site** : [yoanndelaloy.com](https://yoanndelaloy.com)
**Contact** : contact@yoanndelaloy.com · 06 47 34 43 64
**Fondateur** : Yoann DELALOY
