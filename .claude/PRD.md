# PRD — Maison Siranno · Refonte Globale
**Dernière mise à jour :** 2026-02-23
**Statut global :** 🟡 En cours — 20 / 42 tâches complétées

---

## Informations complémentaires validées

### Témoignages réels
- **Maxime JAMBOU** → App suivi de séances d'aquagym (vrai client, nom réel à utiliser)
- **Julien DELALOY** → JD Rénovation (vrai client, nom réel à utiliser)
- Autres témoignages : inventés mais réalistes

### Siranno Hub
SaaS de type ERP personnel ultra-complet :
- +3 800 agents IA travaillant de concert
- Plusieurs dizaines de dashboards (gestion de projet, patrimoine, marketing)
- Tout boosté à l'IA
- Accessible via chat Telegram et WhatsApp
- Catégories : Intelligence Artificielle & Agents RAG + Pilotage Continu

### Stratégie blog
- Ratio recommandé : 60% articles pratiques/how-to (trafic long-tail), 25% cas d'usage clients (conversion), 15% tendances/veille (autorité)
- Objectif : top 3 Google sur requêtes longue traîne FR + être cité comme source par les LLM
- Structure SEO : title H1 optimisé, méta description, FAQ schema, liens internes croisés entre articles et pages expertise



---

## Contexte du site

**Maison Siranno** est une agence digitale premium fondée par Yoann DELALOY en septembre 2025. Elle propose 6 expertises :
1. **Développement Web Apps & SaaS** — Sites, apps sur-mesure, SaaS (stack React/Next.js/TypeScript, Claude Code)
2. **Automatisation & Orchestration n8n** — Workflows automatisés, agents IA
3. **Création de Contenu & Marketing IA** — Stratégie contenu, personal branding
4. **Intelligence Artificielle & Agents RAG** — LLM, bases vectorielles, RAG
5. **Conseil & Formation** — Accompagnement, montée en compétences
6. **Pilotage Continu** — Maintenance, suivi analytique, mises à jour

**Stack technique :** React 19 + TypeScript, Tailwind CSS CDN, routing manuel dans App.tsx (page state), Vite bundler.

**Icônes d'expertise :** `/Media/Logos/Logo_expertise/Icone_[nom].png`
- Développement Web : `Icone_Développement_Web_Apps_&_SaaS.png`
- Automatisation : `Icone_Automatisation_&_Orchestration_n8n.png`
- Contenu & Marketing : `Icone_Création_de_Contenu_&_Marketing_IA.png`
- IA & RAG : `Icone_Intelligence_Artificielle_&_Agents_RAG.png`
- Conseil & Formation : `Icone_Conseil_&_Formation.png`
- Pilotage Continu : `Icone_Pilotage_Continu.png`

**Vraies réalisations (7) :**
- JD Rénovation (web, contenu, conseil, pilotage)
- Portfolio Yoann DELALOY (web, pilotage)
- App Gestion de projet RPG (web)
- App Gestion financière RPG (web)
- App Suivi séances de sport (web, conseil)
- Automatisation Yoann DELALOY (automatisation, IA)
- Personal Branding Yoann DELALOY (contenu, pilotage)

---

## Règles de validation

> **Important :** Chaque tâche doit être validée par l'utilisateur avant de passer à la suivante.
> Workflow : Je complète une tâche → je résume ce qui a été fait → je demande validation → tâche suivante.

---

## Liste des tâches

### GROUPE A — Curseur (CustomCursor.tsx)
| # | Statut | Tâche |
|---|--------|-------|
| A1 | ✅ | **Curseur : détection élargie** — `[data-cursor-hover]` ajouté au sélecteur, `[data-cursor-ignore]` pour forcer gold par défaut |
| A2 | ✅ | **Curseur : animation heartbeat** — keyframe `cursor-heartbeat` (scale 1.0→1.4, cycle 0.5s) injectée et appliquée sur hover |
| A3 | ✅ | **Curseur : graphique PerformanceChart** — `data-cursor-ignore` ajouté sur le wrapper dans About.tsx |

### GROUPE B — Page d'accueil (Hero, Projects, Testimonials, About)
| # | Statut | Tâche |
|---|--------|-------|
| B1 | ⬜ | **Accueil - Section Réalisations : inverser boutons CenterPeek** — "Démarrer mon projet" prend le style de "Voir le site" et vice versa |
| B2 | ✅ | **Accueil - Réalisations : curseur gold-rouge** — `data-cursor-hover` sur ProjectCard (Projects.tsx) |
| B3 | ✅ | **Accueil - Témoignages : curseur gold-rouge** — `data-cursor-hover` sur TestimonialCard (Testimonials.tsx) |
| B4 | ✅ | **Accueil - ADN Agence : curseur gold sur graphique** — Résolu via A3 (`data-cursor-ignore`) |

### GROUPE C — Contenu services.ts (données textuelles)
| # | Statut | Tâche |
|---|--------|-------|
| C1 | ✅ | **Développement Web : reformuler messaging** — Supprimer mentions "vibe coding", "Cursor", "Windsurf" → valoriser proximité client, savoir-faire, Claude Code |
| C2 | ✅ | **Automatisation : remplacer "ROI ×4 en 6 mois"** — Remplacé par "+400 connexions SaaS possibles" |
| C3 | ✅ | **Automatisation : ajouter 2+ cas d'usage typiques** — 5 cas d'usage supplémentaires ajoutés |
| C4 | ✅ | **Contenu & Marketing : remplacer "+340% engagement IA"** — Remplacé par "×5 formats produits depuis 1 contenu source" |
| C5 | ✅ | **Partenaires agence : section ajoutée dans AgencyPage** — 8 partenaires détaillés avec descriptions |

### GROUPE D — Tags hero des pages d'expertise (ServiceDetailPage.tsx)
| # | Statut | Tâche |
|---|--------|-------|
| D1 | ✅ | **Tags hero Dev Web** — Remplacer par : Claude Code, React, Next.js, TypeScript, CMS, Wordpress, Google AI Studio, full-stack apps |
| D2 | ✅ | **Tags hero Contenu & Marketing** — Remplacer par : NanoBana Pro, NotebookLM, Google AI Studio, Claude Code, Kling AI |
| D3 | ✅ | **Tags hero IA & RAG** — Remplacer par : ChatGPT, Claude, Gemini, Supabase, Pinecone, RAG, PostgreSQL |
| D4 | ✅ | **Tags hero Conseil & Formation** — Remplacer par : IA, Google Workspace, Cloud, Automatisation, Graphisme, Marque |
| D5 | ✅ | **Tags hero Pilotage Continu** — Remplacer par : Maintenance, Mises à jour, Datalog, Analytique, Monitoring |
| D6 | ✅ | **Tags hero : effet gold métallique au survol** — Les tags deviennent gold métallique au hover (toutes pages expertise) |

### GROUPE E — UI des pages d'expertise (ServiceDetailPage.tsx)
| # | Statut | Tâche |
|---|--------|-------|
| E1 | ✅ | **Carte "Bénéfices concrets" : titre argent métallique** — Appliquer `.text-metallic-silver` ou équivalent sur le titre H3 de cette carte |
| E2 | ✅ | **Section CTA expertise : titre argent métallique** — Appliquer style argent métallique sur le titre du bloc CTA en bas de page |
| E3 | ✅ | **Section Méthode : curseur gold-rouge sur cartes d'étape** — `data-cursor-hover` sur ProcessStepCard (ServiceDetailPage.tsx) |
| E4 | ✅ | **Témoignages expertise : bouton vers la réalisation liée** — Ajouter bouton gold métallique "Voir la réalisation" sur chaque témoignage |
| E5 | ✅ | **Pages expertise : icône hero = icône d'expertise dédiée** — Remplacer l'icône Lucide par l'image PNG d'expertise correspondante |

### GROUPE F — Page d'accueil / ExpertisePage — carte Dev Web
| # | Statut | Tâche |
|---|--------|-------|
| F1 | ✅ | **Carte expertise Dev Web (accueil + page expertise)** — Reformuler description pour valoriser proximité, savoir-faire, sans mention "vibe coding" ni outils concurrents |

### GROUPE G — Page Réalisations (ProjectsPage.tsx)
| # | Statut | Tâche |
|---|--------|-------|
| G1 | ⬜ | **ProjectsPage : icônes de section = icônes d'expertise** — Remplacer les icônes Lucide par les PNG d'expertise pour chaque section |
| G2 | ⬜ | **ProjectsPage : icônes des cartes = icônes d'expertise** — Même remplacement sur les cartes de réalisation |
| G3 | ✅ | **ProjectsPage : curseur gold-rouge sur cartes** — `data-cursor-hover` sur ProjectCardPage et ExpertiseCTACard |
| G4 | ✅ | **ProjectsPage : curseur gold-rouge sur témoignages** — `data-cursor-hover` sur cartes témoignages ProjectsPage |

### GROUPE H — Pages dédiées aux réalisations (ExpertiseProjectsPage.tsx)
| # | Statut | Tâche |
|---|--------|-------|
| H1 | ⬜ | **ExpertiseProjectsPage : icône hero = icône d'expertise** — Remplacer l'icône par le PNG d'expertise correspondant |
| H2 | ⬜ | **Bouton retour : revenir sur la page d'origine** — Mémoriser la page précédente (accueil, réalisations, expertise) et y revenir au lieu de toujours aller vers /blog |

### GROUPE I — Données réalisations (projects.ts)
| # | Statut | Tâche |
|---|--------|-------|
| I1 | ✅ | **Remplacer toutes les réalisations fictives** — Remplacer par les 7 vraies réalisations avec contenu détaillé et placement dans les bonnes expertises |

### GROUPE J — Page Agence (AgencyPage.tsx)
| # | Statut | Tâche |
|---|--------|-------|
| J1 | ✅ | **AgencyPage : revoir phrase d'accroche sous le titre** — Nouvelle accroche axée sur la singularité du parcours |
| J2 | ✅ | **AgencyPage : corriger dates du parcours** — Finance 2012–Présent, BTP 2010–2024, Transition 2018–2025, Siranno Sept.2025–Présent |

### GROUPE K — Page Blog (BlogPage.tsx + data/blog.ts)
| # | Statut | Tâche |
|---|--------|-------|
| K1 | ⬜ | **Blog : restructurer catégories** — Ajouter "À venir" (3 articles masqués) au-dessus de "À lire maintenant" (3 derniers publiés), puis 6 catégories par expertise en slider |
| K2 | ⬜ | **Blog : cartes identiques aux cartes de réalisation** — Unifier le design des cartes d'articles avec celui des cartes de réalisation |
| K3 | ✅ | **Blog : curseur gold-rouge sur cartes** — `data-cursor-hover` conditionnel sur ArticleCard disponible (BlogPage.tsx) |
| K4 | ⬜ | **Blog : générer 30 articles (5 par expertise)** — Contenu très complet, titres + corps complets dans data/blog.ts |

### GROUPE L — Traductions manquantes (EN & ES)
| # | Statut | Tâche |
|---|--------|-------|
| L1 | ✅ | **Étape 1 : Accueil Hero** — Traduire "en ligne" et "croissance digitale" (1x EN, 1x ES) |
| L2 | ✅ | **Étape 2 : Réalisation dédié Hero** — Traduire "9 min de lecture" (1x EN, 1x ES) |
| L3 | ✅ | **Étape 3 : Blog Article CTA** — Traduire "première consultation gratuite..." (1x EN, 1x ES) |
| L4 | ✅ | **Étape 4 : Réalisations dédiées** — Traduire le bouton "Lire l'étude de cas" (1x EN, 1x ES) |
| L5 | ✅ | **Étape 5 : Accueil Réalisation Center Peek** — Traduire "Réalisé par", "Les défis", "Les résultats", "un projet similaire", "en savoir plus", "Démarrer mon projet" (1x EN, 1x ES) |
| L6 | ✅ | **Étape 6 : Expertise CTA** — Traduire les 4 points ("reponse sous 24h", "Sans engagement", etc.) (1x EN, 1x ES) |
| L7 | ✅ | **Étape 7 : Blog CTA** — Traduire les 4 points ("reponse sous 24h", "Sans engagement", etc.) (1x EN, 1x ES) |
| L8 | ✅ | **Étape 8 : Blog CTA (FR)** — Traduire les 4 points ("reponse sous 24h", "Sans engagement", etc.) (1x EN, 1x ES) |
| L9 | ✅ | **Étape 9 : Accueil Réalisations Titre** — Traduire "l'excellence en action" et "nos réalisations" (1x EN, 1x ES) |
| L10 | ✅ | **Étape 10 : Accueil ADN** — Traduire toute la section ADN de l'agence (1x EN, 1x ES) |
| L11 | ✅ | **Étape 11 : Accueil Expertise Titre** — Traduire "L'IA et le web..." et la phrase d'accroche (1x EN, 1x ES) |
| L12 | ✅ | **Étape 12 : Accueil Contact** — Traduire toute la section ("Parlons de votre Futur") (1x EN, 1x ES) |
| L13 | ✅ | **Étape 13 : Accueil Témoignage** — Traduire "Ils nous font confiance" et la phrase d'accroche (1x EN, 1x ES) |
| L14 | ✅ | **Étape 14 : Réalisation dédiée Témoignage** — Traduire "réalisé par", "année", "Github du projet" (1x EN, 1x ES) |
| L15 | ✅ | **Étape 15 : Expertise dédiée Ce que nous réalisons** — Traduire "ce que nous réalisons", "bénéfices concrets", "cas d'usage typiques", "un projet en tête ?", "première consultation...", "discutons-en" (1x EN, 1x ES) |
| L16 | ✅ | **Étape 16 : Expertise dédiée CTA** — Traduire "première consultation..." et les 4 points (1x EN, 1x ES) |
| L17 | ✅ | **Étape 17 : Expertise FAQ** — Traduire "Question fréquente" et "Tout ce que vous voulez savoir" (1x EN, 1x ES) |
| L18 | ✅ | **Étape 18 : Expertise dédiée Hero** — Traduire "Expertise Détaillée" (1x EN, 1x ES) |
| L19 | ✅ | **Étape 19 : Expertise dédiée Ils nous font confiance** — Traduire la section entière et le bouton témoignage (1x EN, 1x ES) |
| L20 | ✅ | **Étape 20 : Expertise dédiée Méthode** — Traduire "méthode" et "Notre approche en 7 étapes" (1x EN, 1x ES) |
| L21 | ✅ | **Étape 21 : Réalisation dédié expertise CTA** — Traduire toute la section (1x EN, 1x ES) |
| L22 | ✅ | **Étape 22 : Réalisation dédié expertise Hero** — Traduire "réalisation", le titre et la phrase d'accroche (1x EN, 1x ES) |
| L23 | ✅ | **Étape 23 : Réalisation dédié CTA Accroche** — Traduire "première consultation..." et les 4 points (1x EN, 1x ES) |
| L24 | ✅ | **Étape 24 : Réalisation CTA** — Traduire les 4 points (1x EN, 1x ES) |
| L25 | ✅ | **Étape 25 : Réalisations Catégorie 1** — Traduire le titre et la phrase d'accroche (1x EN, 1x ES) |
| L26 | ✅ | **Étape 26 : Réalisations Catégorie 2** — Traduire le titre et la phrase d'accroche (1x EN, 1x ES) |
| L27 | ✅ | **Étape 27 : Réalisations Catégorie 3** — Traduire le titre et la phrase d'accroche (1x EN, 1x ES) |
| L28 | ✅ | **Étape 28 : Réalisations Catégorie 4** — Traduire le titre et la phrase d'accroche (1x EN, 1x ES) |
| L29 | ✅ | **Étape 29 : Accueil Hero** — Traduire le grand titre d'accroche et le sous-titre (1x EN, 1x ES) |
| L30 | ✅ | **Étape 30 : Refactoring & Review globale** — Vérifier la cohérence FR/EN/ES globale (1x EN, 1x ES) |

### GROUPE M — Traductions manquantes — Lot 2 (EN & ES)
> **Contexte** : Éléments identifiés sur captures d'écran comme encore non traduits après le groupe L.
> **Règle** : Chaque étape = 2 tâches (1x EN + 1x ES). 4 étapes = 8 tâches.

| # | Statut | Tâche |
|---|--------|-------|
| M1 | ✅ | **Étape 1 EN — Expertise "Cas d'usage typiques"** — Ajouter clé `service_detail.typical_use_title` dans `en.json` ("Typical use cases") et brancher `t()` dans `ServiceDetailPage.tsx:651` |
| M2 | ✅ | **Étape 1 ES — Expertise "Cas d'usage typiques"** — Ajouter clé `service_detail.typical_use_title` dans `es.json` ("Casos de uso típicos") |
| M3 | ✅ | **Étape 2 EN — Agence Parcours Timeline** — Déplacer les 4 cartes du tableau `timeline` (AgencyPage.tsx) vers `agency_page.timeline` dans `en.json` (period, sector, description traduits en anglais) et brancher `t(..., { returnObjects: true })` dans le composant |
| M4 | ✅ | **Étape 2 ES — Agence Parcours Timeline** — Ajouter `agency_page.timeline` dans `es.json` avec les 4 cartes traduites en espagnol |
| M5 | ✅ | **Étape 3 EN — Agence Parcours Timeline (fr.json)** — Ajouter `agency_page.timeline` dans `fr.json` pour uniformiser la source (même structure que EN/ES, textes déjà en FR) |
| M6 | ✅ | **Étape 3 ES — Agence Parcours Timeline vérification** — Vérifier le rendu en ES sur la page Agence (section Parcours) et corriger si nécessaire |
| M7 | ✅ | **Étape 4 EN — Revue globale des textes hardcodés** — "Bénéfices concrets", "Voir les détails", aria-labels (Fermer/Précédent/Suivant/Témoignage) migrés en `t()` dans `ServiceDetailPage.tsx` |
| M8 | ✅ | **Étape 4 ES — Revue globale des textes hardcodés** — Clés ES ajoutées : "Beneficios concretos", "Ver detalles", "Cerrar", "Anterior", "Siguiente", "Testimonio {n}" |
---

## Ordre d'exécution recommandé

**Phase 1 — Fondations données** : I1, C1–C5, J1–J2
**Phase 2 — Curseur & UX** : A1–A3, B2–B4, G3–G4, K3, E3
**Phase 3 — UI Expertise** : D1–D6, E1–E5, F1
**Phase 4 — Réalisations pages** : G1–G2, H1–H2
**Phase 5 — Accueil** : B1
**Phase 6 — Blog** : K1–K4 (tâche la plus longue — 30 articles)

---

## Notes importantes

- **CustomCursor** : le curseur détecte déjà `a, button, [role="button"], [tabindex]` mais PAS les `div` avec `onClick` (cards, testimonials). Il faut ajouter un sélecteur `[data-cursor-hover]` et apposer cet attribut sur tous les éléments div cliquables.
- **Icônes** : les fichiers PNG sont dans `/Media/Logos/Logo_expertise/` — les chemins dans le code doivent être `/Media/Logos/Logo_expertise/Icone_[nom].png`
- **Tags hero** : le composant existe dans ServiceDetailPage.tsx, chercher le tableau de tags par serviceId
- **Bouton retour** : App.tsx gère le routing, il faut passer `fromPage` en prop ou via un state global

