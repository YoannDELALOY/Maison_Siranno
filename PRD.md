# PRD — Maison Siranno

## Vue d'ensemble

Site vitrine de l'agence Maison Siranno (Yoann Delaloy), spécialisée en IA, développement web et automatisation. SPA React sans backend.

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | React 19 (ESM via import maps) |
| Language | TypeScript |
| CSS | Tailwind CSS (CDN + config inline dans `index.html`) |
| Icônes | Lucide React |
| Graphiques | Recharts |
| Bundler | Vite 6 |
| Déploiement | `npm run build` → `dist/` |

---

## Architecture

```
/
├── App.tsx                   # Routing SPA (state `page`)
├── index.html                # Point d'entrée, Tailwind config, CSS custom
├── components/               # Composants React
│   ├── useSeo.ts             # Hook SEO (titre, meta description)
│   └── useTranslation.ts     # Hook i18n (FR/EN/ES)
├── constants/
│   ├── config.ts             # Données de contact centralisées
│   └── textures.ts           # Styles texture SVG réutilisables
├── contexts/
│   └── LanguageContext.tsx   # Contexte i18n
├── data/                     # Données statiques
│   ├── blog.ts               # 42 articles de blog
│   ├── projects.ts           # Projets réalisations
│   ├── services.ts           # 6 expertises
│   └── testimonials.ts       # Témoignages clients
├── hooks/
│   ├── useSeo.ts             # SEO dynamique
│   ├── useSwipe.ts           # Swipe tactile horizontal
│   └── useTranslation.ts     # i18n
├── Media/                    # Assets images PNG
└── types.ts                  # Types partagés (SectionId, etc.)
```

### Pages (routing via `page` state dans App.tsx)

| Page | Valeur state |
|------|-------------|
| Accueil | `home` |
| Expertise | `expertise` |
| Réalisations | `realisations` |
| Agence | `agence` |
| Détail service | `service-detail` |
| Blog | `blog` |
| Article blog | `blog-article` |
| Mentions légales | `mentions` |
| Politique de confidentialité | `privacy` |

---

## Conventions de développement

### Constantes
- **Contact** → `constants/config.ts` (`CONTACT_CONFIG`)
- **Styles texture** → `constants/textures.ts` (`darkTextureStyle`, `lightTextureStyle`)
- Ne pas dupliquer ces valeurs dans les composants

### Hooks
- **Swipe mobile** → `hooks/useSwipe.ts` pour tout carousel tactile
- **SEO** → `hooks/useSeo.ts` pour chaque page
- **i18n** → `hooks/useTranslation.ts` + `LanguageContext`

### CSS custom (dans `index.html`)
- `.text-metallic-gold` — titres or 3D
- `.text-metallic-gold-inline` — badges or
- `.text-metallic-navy` — titres bleu nuit
- `.btn-metallic-gold` / `.btn-metallic-dark` — boutons CTA
- `.glass-panel` / `.glass-card` — effets verre
- `.cta-leather` — texture cuir
- `.bg-paper` — fond papier

---

## Déploiement

```bash
npm run build   # génère dist/
npm run dev     # dev server port 5173
```

Le dossier `dist/` contient le site statique prêt à déployer (Vercel, Netlify, hébergement standard).

---

## Contacts & intégrations externes

- **Formulaire** : Formspree — configurer `CONTACT_CONFIG.formspreeId` dans `constants/config.ts`
- **Téléphone / email** : centralisés dans `constants/config.ts`
- **Réseaux sociaux** : liens dans `components/Contact.tsx`

---

## Notes importantes

- Pas de backend ni de CMS — toutes les données sont dans `data/`
- Routing entièrement manuel (pas de react-router)
- `goToContact` : `setPage('home')` + `setTimeout(() => scrollIntoView('#contact'))`
