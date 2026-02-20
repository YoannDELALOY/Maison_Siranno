# Maison Siranno — Agence IA & Web

Site web de l'agence Maison Siranno, fondée par Yoann DELALOY à Châteauneuf-sur-Loire (Loiret, 45).

## Stack Technique

| Technologie | Rôle |
|---|---|
| React 19 + TypeScript | Framework UI |
| Tailwind CSS (CDN) | Styles utilitaires |
| Vite | Bundler & Dev server |
| Lucide React | Icônes |
| Recharts | Graphiques |
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
├── components/          # Composants React
│   ├── Hero.tsx         # Section Hero (home)
│   ├── Services.tsx     # Section Expertises (home)
│   ├── Projects.tsx     # Section Réalisations (home, carrousel)
│   ├── About.tsx        # Section Agence (home)
│   ├── Testimonials.tsx # Section Témoignages (home)
│   ├── Contact.tsx      # Section Contact + formulaire
│   ├── Footer.tsx       # Pied de page
│   ├── Navbar.tsx       # Navigation
│   ├── ExpertisePage.tsx     # Page Expertise (dédiée)
│   ├── ProjectsPage.tsx      # Page Réalisations (dédiée)
│   ├── AgencyPage.tsx        # Page L'Agence (dédiée)
│   ├── BlogPage.tsx          # Page Blog
│   ├── BlogArticlePage.tsx   # Article de blog détaillé
│   ├── ServiceDetailPage.tsx # Page détail expertise
│   ├── ProjectModal.tsx      # Modal projet
│   ├── ServiceModal.tsx      # Modal service
│   ├── LegalMentions.tsx     # Mentions légales
│   ├── PrivacyPolicy.tsx     # Politique de confidentialité
│   └── CookieBanner.tsx      # Bannière cookies
├── data/               # Données (séparées des composants)
│   ├── services.ts     # 5 expertises
│   ├── projects.ts     # 15 réalisations
│   ├── testimonials.ts # Témoignages (home + réalisations)
│   └── blog.ts         # 20 articles de blog
├── public/             # Assets statiques
│   ├── logos/          # Logos Maison Siranno
│   ├── robots.txt      # Configuration robots SEO
│   └── sitemap.xml     # Sitemap XML
├── Media/              # Images et médias
├── App.tsx             # Root component + routing manuel
├── index.tsx           # Point d'entrée React
├── index.html          # HTML + meta SEO + Tailwind CDN
├── types.ts            # Types TypeScript partagés
├── vite.config.ts      # Configuration Vite
├── Dockerfile          # Build Docker multi-stage
├── docker-compose.yml  # Déploiement VPS + Traefik
└── nginx.conf          # Configuration nginx SPA
```

## Guide Ajout de Contenu

### Ajouter un nouveau projet

Dans `data/projects.ts`, ajouter un objet au tableau `projectsData` :

```typescript
{
  id: 'mon-projet',
  title: "Nom du Projet",
  category: "Type de projet",
  expertise: 'web-apps-saas', // Une des 5 catégories
  image: "https://images.unsplash.com/...",
  description: "Description courte",
  tags: ["Tag1", "Tag2", "Tag3"],
  client: "Nom client",
  year: "2025",
  date: "2025-06",
  fullDescription: "Description complète de l'article de blog",
  challenges: ["Défi 1", "Défi 2"],
  results: ["Résultat 1", "Résultat 2"]
}
```

### Ajouter un article de blog

Dans `data/blog.ts`, ajouter un objet au tableau `blogArticles` :

```typescript
{
  id: 'mon-article',
  title: "Titre de l'article",
  excerpt: "Résumé visible en aperçu",
  category: 'Intelligence Artificielle', // Une des 5 catégories BlogCategory
  date: "Mars 2025",
  readTime: "7 min",
  image: "https://images.unsplash.com/...",
  tags: ["Tag1", "Tag2"],
  available: true, // false = "Bientôt"
}
```

### Ajouter une expertise

Dans `data/services.ts`, ajouter au tableau `servicesData` et dans `components/Services.tsx` ajouter l'icône dans `serviceIcons`.

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

# Builder l'image
docker build -t maison-siranno:latest .

# Démarrer le container
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

## Variables d'Environnement

Aucune variable d'environnement requise pour le frontend statique.

Pour le formulaire de contact (Formspree), remplacer dans `components/Contact.tsx` :
```typescript
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'; // → Votre ID Formspree
```

## SEO

- `public/robots.txt` — Configuration crawlers + IA-friendly
- `public/sitemap.xml` — Sitemap XML complet
- `index.html` — Meta SEO, Open Graph, JSON-LD LocalBusiness

---

**Maison Siranno** — Agence IA & Web · Châteauneuf-sur-Loire, Loiret (45)
**Contact** : contact@yoanndelaloy.com · 06 47 34 43 64
**Fondateur** : Yoann DELALOY
