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
- **Styles texture** → `constants/textures.ts` (`DARK_TEXTURE_STYLE`, `LIGHT_TEXTURE_STYLE`, `BLUE_TEXTURE_STYLE`)
- **Liens sociaux** → `data/socialLinks.ts` (`SOCIAL_LINKS`)
- Ne pas dupliquer ces valeurs dans les composants

### Hooks
- **Swipe mobile** → `hooks/useSwipe.ts` pour tout carousel tactile
- **SEO** → `hooks/useSeo.ts` pour chaque page
- **i18n** → `hooks/useTranslation.ts` + `LanguageContext`

### CSS custom (dans `index.html`)
- `.text-metallic-gold` — titres or 3D
- `.text-metallic-gold-inline` — badges or
- `.text-metallic-navy` — titres bleu nuit
- `.text-metallic-silver` — titres argent métallique
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
- **Réseaux sociaux** : centralisés dans `data/socialLinks.ts` (`SOCIAL_LINKS`)

---

## Notes importantes

- Pas de backend ni de CMS — toutes les données sont dans `data/`
- Routing entièrement manuel (pas de react-router)
- `goToContact` : `setPage('home')` + `setTimeout(() => scrollIntoView('#contact'))`

---

## Backlog des tâches

> Légende : ✅ Validée | 🔲 À faire

---

### Phase A — Internationalisation (i18n FR/EN/ES)

| # | Tâche | Statut |
|---|-------|--------|
| A-1 | Traduire tous les textes codés en dur dans BlogArticlePage, ExpertisePage, ServiceDetailPage, Services, Footer | ✅ |
| A-2 | Migrer tous les composants vers `useLocalizedData` hook | ✅ |
| A-3 | Ajouter traductions EN/ES pour projets et témoignages | ✅ |
| A-4 | Compléter la phase de traduction groupe L et refactorer les composants | ✅ |
| A-5 | Traduire les textes restants codés en dur — groupe M (EN & ES) | ✅ |
| A-6 | Mettre à jour les traductions EN/ES pour les nouvelles tâches UI ajoutées (Phase C) | 🔲 |

---

### Phase B — UI / Design

| # | Tâche | Description | Statut |
|---|-------|-------------|--------|
| B-1 | **Section Réalisations (accueil) — bouton site web dans le center peek** | Sur la page d'accueil, dans la section "réalisations", déplacer le bouton "Site web" (lien externe) hors de la carte et l'intégrer à l'intérieur du center peek, avec les autres boutons d'action. | ✅ |
| B-2 | **Section ADN (accueil) — retirer la barre sous le titre** | Sur la page d'accueil, dans la section "ADN de l'agence", supprimer la barre décorative qui apparaît sous le titre. | ✅ |
| B-3 | **Section Contact (accueil) — boutons réseaux sociaux gold au hover** | Sur la page d'accueil, dans la section contact, partie gauche (fond bleu), les boutons de réseaux sociaux doivent passer en style gold métallique au survol de la souris. | ✅ |
| B-4 | **Footer — boutons réseaux sociaux gold au hover** | Dans le footer, les boutons de réseaux sociaux doivent passer en style gold métallique au survol de la souris. | ✅ |
| B-5 | **Page Expertise — titre du CTA en argent métallique** | Sur la page expertise, dans la section CTA (appel à l'action), le titre doit être de couleur argent métallique (classe `.text-metallic-silver`). | ✅ |
| B-6 | **Page Expertise — titres de section en bleu métallique** | Sur la page expertise, le titre de chaque section d'expertise sur fond texture claire (ex : "Pilotage Continu") doit être en bleu métallique (`.text-metallic-navy`). | ✅ |
| B-7 | **Pages détail expertise — center peek Méthode : `<strong>` sans épaisseur, texture gold** | Dans les pages de chaque expertise, dans la section Méthode, au sein du center peek (modal qui s'ouvre au clic sur une carte étape), les balises `<strong>` ne doivent plus être en gras. Elles doivent afficher la texture gold métallique sans épaisseur. | ✅ |
| B-8 | **Pages détail expertise — center peek Méthode : titres "Ce que nous ferons" / "Votre rôle" en gold métallique** | Dans les pages de chaque expertise, dans la section Méthode, les titres de colonnes "Ce que nous ferons" et "Votre rôle" (dans le center peek) doivent passer en texture gold métallique. | ✅ |
| B-9 | **Pages détail expertise — fond texturé avec points créme diffus** | Sur toutes les pages de détail d'expertise, le fond de la page doit adopter le même style que les sections hero et expertise de la page d'accueil : fond texturé sombre avec points de couleur créme diffus. | ✅ |
| B-10 | **Page Réalisations — fond texturé avec points créme diffus** | Sur la page "Réalisations", le fond de la page doit adopter le même style que les sections hero et expertise de la page d'accueil : fond texturé avec points de couleur créme diffus. | ✅ |
| B-11 | **Pages réalisation dédiée expertise — CTA fond bleu texturé** | Sur les pages de réalisation dédiées à une expertise, dans la section CTA, le fond doit utiliser la même texture bleue que le CTA de la page expertise. | ✅ |
| B-12 | **Page L'Agence — fond texturé avec points créme diffus** | Le fond de la page "L'Agence" doit être identique au fond de la section hero et méthode de la page d'accueil, avec les points créme diffus. | ✅ |
| B-13 | **Page L'Agence — cartes avec fond texturé (formulaire style)** | Sur la page "L'Agence", dans toutes les sections (héros, parcours, philosophie, différence, réseaux), les cartes doivent afficher le fond texturé identique à celui du formulaire de la page d'accueil. | ✅ |
| B-14 | **Page Blog — fond des sliders d'articles identique au fond de page** | Sur la page blog, le fond des sliders/cartes d'articles doit être identique au fond de la page (transparence totale ou même texture), de sorte que la différence ne soit pas visible. | ✅ |
| B-15 | **Navbar — drapeau à la place du code langue** | Dans la barre de navigation, sur le sélecteur de langue, afficher le drapeau de la langue active à la place du code texte (FR, EN, ES). | ✅ |
| B-16 | **Page Blog — fond texturé avec points créme diffus** | Le fond de la page blog doit être identique au fond de la section hero et expertise de la page d'accueil, avec les points de couleur créme diffus. | ✅ |
| B-17 | **Changement de langue — rechargement de la page** | Lorsque l'utilisateur change de langue, déclencher un rechargement (ou remontage) de la page afin que toutes les traductions soient prises en compte sans résidu d'ancienne langue. | ✅ |
| B-18 | **Audit Lighthouse — atteindre ≥ 80 partout** | Analyser le rapport Lighthouse, appliquer les corrections (fonts non-bloquantes, lazy-load Recharts, preconnect tiers, width/height images, loading=lazy). | ✅ |
| B-19 | **Refactoring global du projet** | Centralisation des données de contact (`CONTACT_CONFIG`), liens sociaux (`SOCIAL_LINKS`), composant `BlobBackground` réutilisable, `useCallback` deps corrigées dans `App.tsx`. | ✅ |
| B-20 | **Code review complète** | Bug shadowing `t` dans Testimonials corrigé, `useMemo` ajouté dans Projects, `useLocalizedData` refactorisé avec `LOCALE_MAP`, clés i18n `service_modal.*` ajoutées. | ✅ |
| B-21 | **Conventions de nommage & bonnes pratiques** | Renommage SCREAMING_SNAKE_CASE pour toutes les constantes exportées, paramètres renommés pour clarté, imports dupliqués fusionnés. | ✅ |
| B-22 | **Nettoyage du code mort** | Suppression `Globe`, `ExternalLink`, `perlinNoise` (BlogArticlePage), imports dupliqués fusionnés, fichier orphelin `test-render.tsx` supprimé. | ✅ |
| B-23 | **Qualité professionnelle — code senior** | JSDoc complet sur hooks (`useTranslation`, `useLocalizedData`, `useSwipe`), contexte `LanguageContext`, `App.tsx` commenté intégralement. | ✅ |
| B-24 | **Documentation in-code — commentaires complets** | JSDoc sur tous les hooks, contextes, constantes (`config.ts`, `textures.ts`, `socialLinks.ts`), callbacks et états de `App.tsx`. | ✅ |
| B-25 | **README.md complet** | README mis à jour : stack, i18n, structure complète, guide ajout de contenu, constantes centralisées, déploiement Docker. | ✅ |
| B-26 | **Mise à jour du PRD** | PRD mis à jour pour refléter l'état réel après B-18 → B-26. | ✅ |
| B-27 | **Commit final** | Créer un commit propre avec message conventionnel couvrant toutes les modifications apportées. | ✅ |

---

### Phase C — Améliorations UI (sprint suivant)

| # | Tâche | Description | Statut |
|---|-------|-------------|--------|
| C-1 | **Section Réalisations (accueil) — bouton lien vers le site web dans le center peek** | Dans la section "réalisations" de la page d'accueil, ajouter un bouton "Voir le site" dans le center peek (à côté des boutons "En savoir plus" et "Démarrer mon projet") qui ouvre le lien externe du projet dans un nouvel onglet. S'appuyer sur le champ `url` ou `siteUrl` du projet dans `data/projects.ts`. | ✅ |
| C-2 | **Section Réalisations (accueil) — indicateur "Cliquez pour en savoir plus" sur les cartes** | Ajout d'un indicateur "Voir le détail →" en bas de chaque carte réalisation, discret par défaut (`text-gold/40`) et gold au hover. Traduit FR/EN/ES via `home_projects.card_click_hint`. | ✅ |
| C-3 | **Section Contact (accueil) — boutons réseaux sociaux gold au hover** | Remplacement des classes hover manuelles par `btn-metallic-dark` sur les boutons sociaux de la section contact (fond bleu gauche). Transition vers gold métallique au hover, cohérente avec les autres CTA du site. | ✅ |
| C-4 | **Footer — boutons réseaux sociaux gold au hover** | Même traitement que C-3 : classes remplacées par `btn-metallic-dark` sur les icônes sociales rondes du footer. | ✅ |
| C-5 | **Page Expertise — titres de section sur fond clair en bleu métallique** | Les sections à index pair (fond clair) utilisent maintenant `text-metallic-navy` pour le titre d'expertise. Les sections sombres conservent `text-metallic-silver`. | ✅ |
| C-6 | **Pages détail expertise — `<strong>` dans center peek Méthode : texture gold sans gras** | Les `<strong>` dans le `StepModal` utilisent désormais `text-metallic-gold-inline` (gradient plat, sans double drop-shadow 3D) avec `font-normal` pour supprimer le gras natif. | ✅ |
| C-7 | **Fond à points créme diffus — z-index inférieur au footer** | `BlobBackground` passe de `z-0` à `z-[-1]`, ce qui le place derrière tous les éléments du contexte d'empilement racine, footer inclus. | ✅ |
| C-8 | **Page Blog — cartes d'articles en bleu foncé comme les cartes de réalisations** | Les trois variantes de cartes (`ArticleCardDark`, `ArticleCardFeatured`, `ArticleCardComing`) utilisent désormais `background: #0D1B2A` avec les couleurs de texte claires adaptées (`text-metallic-silver`, `text-gray-400`, `bg-white/5`). | ✅ |
| C-9 | **Navbar — drapeau de langue à la place du code texte** | `LanguageButton` remplace les emojis drapeaux (non rendus sur Windows) par des images `flagcdn.com` (PNG 20×15 + srcSet 2x). | ✅ |
| C-10 | **Pages de réalisation — crash page blanche** | `ExternalLink` supprimé par erreur lors du nettoyage B-22 mais encore utilisé dans `BlogArticlePage`. Import restauré — toutes les pages de réalisation s'affichent à nouveau. | ✅ |
| C-11 | **Page Blog — bande sombre sous les sliders d'articles** | Suppression du `pb-4` sur le conteneur scrollable des `CategorySlider` : ce padding inutile (scrollbar masquée) laissait apparaître une bande sombre sous la rangée de cartes. | ✅ |
