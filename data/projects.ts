// Données de toutes les réalisations de Maison Siranno

export type ExpertiseCategory = 'web-apps-saas' | 'automatisation-n8n' | 'contenu-marketing-ia' | 'ia-agents-rag' | 'conseil-formation' | 'pilotage-continu';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  expertise: ExpertiseCategory;
  expertises?: ExpertiseCategory[];
  image: string;
  description: string;
  tags: string[];
  client: string;
  year: string;
  date: string;
  fullDescription: string;
  challenges: string[];
  results: string[];
  url?: string;
  githubUrl?: string;
  process?: string[]; // Étapes "Comment nous l'avons fait" — 3 à 5 bullets narratifs
}

export const projectsData: ProjectData[] = [
  // ─── 1. JD RÉNOVATION ────────────────────────────────────────────────────────
  {
    id: 'jd-renovation',
    title: "JD Rénovation",
    category: "Site Vitrine & Identité Numérique",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas', 'contenu-marketing-ia', 'conseil-formation', 'pilotage-continu'],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    description: "Présence numérique complète pour une entreprise de rénovation : site vitrine, 80 articles de blog, charte graphique, Google Workspace et accompagnement continu.",
    tags: ["Site Vitrine", "SEO Local", "Identité Visuelle", "Google Workspace", "Blog", "Contenu"],
    client: "Julien DELALOY",
    year: "2025",
    date: "2025-03",
    fullDescription: "JD Rénovation est une entreprise du bâtiment fondée par Julien Delaloy, spécialisée dans la rénovation complète : carrelage, maçonnerie, couverture et charpente. Avant notre intervention, l'entreprise n'avait aucune présence numérique et dépendait uniquement du bouche-à-oreille pour trouver ses clients. Nous avons construit de A à Z son écosystème digital : identité visuelle, site web, stratégie de contenu, infrastructure Google Workspace, et supports papier pour les chantiers. Une mission 360° sur-mesure pour une PME artisanale.",
    challenges: [
      "Partir de zéro : aucune présence web, aucun email professionnel, aucun outil numérique",
      "Secteur très concurrentiel localement avec des acteurs déjà bien positionnés",
      "Client non familiarisé avec les outils numériques — prise en main progressive indispensable",
      "Budget adapté à une petite entreprise artisanale tout en visant un résultat premium"
    ],
    url: "https://www.jd-renovation.fr",
    results: [
      "+60% de demandes de devis dès le 2ème mois suivant le lancement",
      "Score Lighthouse 94/100 — site mobile-first ultra-rapide",
      "3 semaines de 0 à un site live en production",
      "Top 5 Google sur les requêtes locales clés en 6 semaines",
      "80 articles de blog publiés avec visuels et vidéos associés",
      "Identité visuelle complète livrée : logo, couleurs, typographie, supports papier",
      "Google Workspace déployé : messagerie pro, Drive partagé, agenda"
    ],
    process: [
      "Nous avons démarré par un audit complet de la concurrence locale pour identifier les mots-clés à fort trafic et les angles de contenu qui convertissent dans le secteur du bâtiment sur la zone géographique ciblée.",
      "La charte graphique a été construite autour de couleurs sobres et professionnelles traduisant la solidité du savoir-faire artisanal, déclinée sur tous les supports : web, print (flyers, devis), et véhicule.",
      "Le site a été développé avec un formulaire de contact intelligent qui qualifie le type d'intervention dès la prise de contact, filtrant les demandes hors périmètre et économisant un temps précieux à Julien.",
      "80 articles de blog ont été rédigés et publiés, chacun accompagné d'images et de courtes vidéos illustrant les chantiers, renforçant l'autorité locale et le référencement naturel sur les requêtes de longue traîne.",
      "Google Workspace a été configuré de A à Z : boîte mail pro @jd-renovation.fr, Drive partagé pour les devis et factures, agenda synchronisé, et formation de Julien pour une prise en main autonome en moins d'une heure."
    ]
  },

  // ─── 2. PORTFOLIO YOANN DELALOY ──────────────────────────────────────────────
  {
    id: 'portfolio-yoann-delaloy',
    title: "Portfolio Yoann DELALOY",
    category: "Portfolio Web & CV Numérique",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas', 'pilotage-continu'],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    description: "Portfolio web et CV PDF interactif mettant en valeur les compétences techniques de Yoann DELALOY — développeur, automatiseur et fondateur de Maison Siranno.",
    tags: ["Portfolio", "React", "TypeScript", "CV PDF", "Personal Branding"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-09",
    fullDescription: "Ce portfolio a été conçu comme une vitrine technique et personnelle pour Yoann DELALOY, développeur full-stack, expert en automatisation IA et fondateur de Maison Siranno. L'objectif : démontrer par l'exemple la qualité du travail que l'agence peut produire, tout en servant de CV interactif pour les prises de contact. Le site (yoanndelaloy.fr) combine animations premium, présentation des projets et un générateur de CV PDF accessible directement depuis le navigateur.",
    challenges: [
      "Mettre en valeur un profil rare : développeur, automatiseur, stratège et fondateur d'agence",
      "Créer une expérience visuelle suffisamment premium pour convaincre des clients exigeants",
      "Générer un CV PDF fidèle au design web sans librairie tierce lourde",
      "Maintenir des performances excellentes malgré les animations complexes"
    ],
    url: "https://www.yoanndelaloy.fr",
    results: [
      "Portfolio live sur yoanndelaloy.fr avec animations premium",
      "CV PDF téléchargeable généré depuis le navigateur — fidèle au design",
      "Score Lighthouse 96/100 malgré la richesse visuelle",
      "Vitrine technique qui sert directement d'argument commercial pour Maison Siranno",
      "Référencement sur les requêtes 'développeur React freelance' et 'expert IA automatisation'"
    ],
    process: [
      "Nous avons commencé par définir la stratégie de positioning : mettre en avant le profil hybride (technique + stratégique) plutôt que de chercher à concurrencer les portfolios de pure UI.",
      "Le design a été conçu pour refléter l'univers de Maison Siranno : textures métalliques, animations fluides, typographie premium — le portfolio est lui-même une démonstration du niveau de finition proposé aux clients.",
      "La génération du CV PDF a été implémentée avec une approche CSS Print Media, garantissant une sortie propre et professionnelle sans dépendance à des services tiers.",
      "Une section 'réalisations' dynamique permet d'ajouter de nouveaux projets sans modifier le code, facilitant la maintenance sur le long terme."
    ]
  },

  // ─── 3. APP GESTION DE PROJET RPG ────────────────────────────────────────────
  {
    id: 'app-gestion-projet-rpg',
    title: "App Gestion de Projet RPG",
    category: "Application Web Sur-Mesure",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas'],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    description: "Application de gestion de projet type Notion avec une UX/UI inspirée des jeux vidéo RPG et un système de gamification complet pour booster l'engagement.",
    tags: ["React", "TypeScript", "Gamification", "RPG", "UX/UI", "App Web"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-10",
    fullDescription: "Née d'une conviction simple — la gestion de projet n'a pas à être ennuyeuse — cette application réimagine l'expérience Notion à travers le prisme des jeux de rôle (RPG). L'utilisateur y est un héros qui progresse, gagne de l'expérience, monte de niveau et débloque des récompenses en accomplissant ses tâches et projets. L'interface combine la puissance organisationnelle d'un outil comme Notion avec l'engagement émotionnel d'un RPG, créant une expérience de productivité unique qui transforme le travail quotidien en aventure.",
    challenges: [
      "Concevoir un système de gamification cohérent qui reste motivant sur la durée",
      "Maintenir la lisibilité et l'efficacité de l'outil malgré l'habillage RPG",
      "Créer une UX immersive sans sacrifier la performance de l'application",
      "Équilibrer la complexité des mécaniques RPG avec la simplicité d'usage attendue d'un outil de productivité"
    ],
    results: [
      "Application complète avec tableaux kanban, listes de tâches et vue calendrier en univers RPG",
      "Système de XP, niveaux, achievements et récompenses visuelles opérationnel",
      "UX immersive avec sons, animations et transitions thématiques",
      "Architecture React modulaire prête pour l'ajout de nouvelles fonctionnalités",
      "Performances Core Web Vitals optimales malgré la richesse des effets visuels"
    ],
    process: [
      "Le design system RPG a été défini en premier : palette de couleurs fantasy, typographies évocatrices, iconographie cohérente avec l'univers visé — le tout sans jamais perdre de vue la lisibilité.",
      "Les mécaniques de gamification ont été modélisées comme un mini-système de règles : chaque type de tâche rapporte des points d'XP calibrés, les objectifs hebdomadaires débloquent des succès, et les streaks de productivité sont récompensés visuellement.",
      "L'architecture de données a été pensée pour que la couche gamification soit découplée de la logique métier, permettant d'ajuster les mécaniques de jeu sans toucher à la gestion des projets.",
      "Des sessions de test ont été menées pour valider que les animations et sons RPG restaient motivants sans devenir distrayants lors d'une utilisation intensive."
    ]
  },

  // ─── 4. APP GESTION FINANCIÈRE RPG ───────────────────────────────────────────
  {
    id: 'app-gestion-financiere-rpg',
    title: "App Gestion Financière RPG",
    category: "Application Web Sur-Mesure",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas'],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    description: "Application de gestion patrimoniale type Finary, revisitée avec une UX/UI RPG poussée et un système de gamification pour transformer l'épargne en quête.",
    tags: ["React", "TypeScript", "Finance", "Gamification", "RPG", "Dashboard"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-11",
    fullDescription: "L'application de gestion financière RPG réinvente la relation à l'épargne et à l'investissement. Inspirée de Finary mais portée par un univers visuel de jeu de rôle, elle transforme chaque objectif financier en quête, chaque investissement en ressource à gérer, et chaque palier d'épargne en victoire à célébrer. L'objectif est de rendre la gestion de patrimoine accessible, engageante et même excitante pour des profils qui perçoivent habituellement ces sujets comme austères ou complexes.",
    challenges: [
      "Rendre accessibles des concepts financiers complexes (diversification, rendement, risque) à travers la métaphore RPG",
      "Concevoir des visualisations de données financières aussi belles qu'informatives",
      "Assurer la sécurité des données sensibles dans une architecture front-end",
      "Maintenir la cohérence RPG sur des écrans très chargés en données (dashboards)"
    ],
    results: [
      "Dashboard patrimonial complet : actifs, passifs, épargne, investissements en vue RPG",
      "Système de quêtes financières : objectifs définis par l'utilisateur transformés en missions",
      "Visualisations interactives type Recharts habillées en carte du monde fantasy",
      "Mécaniques de progression visuelle : niveaux de 'richesse', achievements, paliers",
      "Architecture sécurisée avec données stockées localement (aucune donnée bancaire transmise)"
    ],
    process: [
      "La première phase a consisté à mapper les concepts financiers sur des mécaniques RPG : le patrimoine net = les points de vie du héros, les revenus passifs = la régénération, les dettes = les malédictions à lever.",
      "Les dashboards ont été conçus avec une attention particulière à la hiérarchie de l'information : les indicateurs clés sont accessibles en un coup d'œil, les détails disponibles au drill-down, sans noyer l'utilisateur.",
      "Le système de quêtes financières a été conçu pour être flexible : l'utilisateur définit son objectif (acheter une voiture, constituer un fonds d'urgence, préparer sa retraite), et l'app le découpe automatiquement en étapes ludiques.",
      "Des revues de design systématiques ont permis de trouver le bon équilibre entre immersion RPG et sobriété d'un outil professionnel — le tout sans jamais sacrifier la lisibilité des chiffres."
    ]
  },

  // ─── 5. APP SUIVI SÉANCES SPORT ──────────────────────────────────────────────
  {
    id: 'app-suivi-seances-sport',
    title: "App Suivi de Séances de Sport",
    category: "Application Web Sur-Mesure",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas', 'conseil-formation'],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    description: "Application de suivi de séances d'aquagym sur-mesure pour Maxime Jambou, permettant de planifier, enregistrer et analyser chaque entraînement.",
    tags: ["React", "TypeScript", "Sport", "Suivi", "Dashboard", "Mobile-first"],
    client: "Maxime JAMBOU",
    year: "2025",
    date: "2025-10",
    fullDescription: "Maxime Jambou est moniteur d'aquagym. Il avait besoin d'un outil simple et efficace pour suivre les séances de ses adhérents : présences, progression, exercices réalisés, et notes personnalisées par profil. Les solutions existantes (Excel, apps génériques) ne correspondaient pas à la spécificité de l'aquagym ni à ses habitudes de travail. Nous avons co-construit une application sur-mesure, mobile-first, pensée pour être utilisée en bordure de bassin.",
    challenges: [
      "Concevoir une interface utilisable en milieu humide, avec les mains mouillées, sur smartphone",
      "Modéliser la spécificité des exercices aquatiques (résistance de l'eau, intensité variable selon profondeur)",
      "Permettre le suivi de plusieurs groupes d'adhérents avec des niveaux différents",
      "Livrer rapidement un MVP utilisable avant la prochaine saison"
    ],
    results: [
      "Application mobile-first opérationnelle dès la première séance post-lancement",
      "Suivi de présence, d'exercices et de progression par adhérent",
      "Bibliothèque d'exercices aquatiques avec niveaux d'intensité",
      "Dashboard hebdomadaire pour analyser la régularité et la progression du groupe",
      "Prise en main en moins de 10 minutes — formation incluse dans la livraison"
    ],
    process: [
      "Plusieurs séances de travail avec Maxime ont permis de comprendre précisément son workflow : avant la séance (préparer le plan), pendant (noter les présences et ajustements), après (archiver et analyser).",
      "Le design a été pensé pour l'usage terrain : gros boutons, contrastes élevés (lisibilité en plein soleil), actions principales accessibles en un tap depuis l'écran principal.",
      "La bibliothèque d'exercices aquatiques a été construite avec Maxime, qui a apporté son expertise métier pour définir les niveaux d'intensité, les variantes et les contre-indications.",
      "Une phase de test en conditions réelles (bord de bassin, smartphone mouillé) a été organisée avant le lancement, validant l'ergonomie dans l'environnement d'utilisation réel.",
      "Un accompagnement post-lancement de 2 semaines a permis d'ajuster quelques points d'interface remontés après les premières séances en conditions réelles."
    ]
  },

  // ─── 6. AUTOMATISATION YOANN DELALOY ─────────────────────────────────────────
  {
    id: 'automatisation-yoann-delaloy',
    title: "Automatisation Yoann DELALOY",
    category: "Automatisation & Agents IA",
    expertise: 'automatisation-n8n',
    expertises: ['automatisation-n8n', 'ia-agents-rag'],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    description: "Système d'automatisation personnel complet : tri de boîte mail, veille métier, rapports de réunion automatiques, rédaction de documentation et agent orchestrateur IA.",
    tags: ["n8n", "Claude", "Automatisation", "Agent IA", "Veille", "Productivité"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-09",
    fullDescription: "Ce projet est l'automatisation du quotidien de Yoann DELALOY lui-même — un laboratoire permanent où chaque gain de temps libère de la bande passante pour créer de la valeur. Le système repose sur un agent orchestrateur central (bot de discussion connecté à Claude) qui pilote une constellation de workflows n8n spécialisés : gestion intelligente de la boîte mail, veille métier automatique, génération de rapports de réunion depuis des transcriptions, rédaction assistée de documentation technique, et aide à l'écriture de code. Un exemple concret de ce que Maison Siranno peut mettre en place pour ses clients.",
    challenges: [
      "Orchestrer de nombreux workflows IA sans créer de dépendances fragiles entre eux",
      "Calibrer les prompts des agents pour maintenir un niveau de qualité constant sans supervision",
      "Gérer les coûts API des modèles de langage sur un usage quotidien intensif",
      "Construire un système évolutif que l'on peut enrichir sans tout reconstruire"
    ],
    results: [
      "Boîte mail traitée, triée et prérépondue automatiquement chaque matin",
      "Veille métier quotidienne sur les thématiques IA, automatisation et développement",
      "Rapports de réunion générés depuis transcription en moins de 2 minutes",
      "Documentation technique produite 4× plus vite avec l'agent dédié",
      "Agent orchestrateur accessible via chat pour déclencher n'importe quel workflow",
      "Réduction estimée à -3h de tâches répétitives par jour ouvré"
    ],
    process: [
      "L'architecture a démarré par un audit des tâches répétitives de la semaine type : classification par fréquence, durée et valeur ajoutée — pour identifier les quick wins et les gains les plus significatifs.",
      "Chaque domaine d'automatisation (mail, veille, réunion, code, documentation) a été traité comme un projet indépendant avec son propre workflow n8n et ses propres critères de qualité.",
      "L'agent orchestrateur a été développé en dernier, une fois les briques élémentaires stabilisées : un bot de conversation (Telegram) connecté à Claude qui permet de déclencher n'importe quel workflow par message naturel.",
      "Des boucles de rétroaction ont été intégrées : certains workflows génèrent un résumé de leur propre exécution, envoyé chaque semaine pour permettre d'identifier les dérives et d'ajuster les prompts.",
      "L'ensemble du système est documenté et versionné, permettant de l'auditer, de le reproduire pour d'autres clients, et de l'enrichir sans risque de régression."
    ]
  },

  // ─── 7. PERSONAL BRANDING YOANN DELALOY ──────────────────────────────────────
  {
    id: 'personal-branding-yoann-delaloy',
    title: "Personal Branding Yoann DELALOY",
    category: "Stratégie de Contenu & Personal Branding",
    expertise: 'contenu-marketing-ia',
    expertises: ['contenu-marketing-ia', 'pilotage-continu'],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=800",
    description: "Stratégie de contenu et personal branding complets pour Yoann DELALOY : positionnement, ligne éditoriale, production et pilotage sur la durée.",
    tags: ["Personal Branding", "LinkedIn", "Stratégie Contenu", "IA", "Vidéo", "Copywriting"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-09",
    fullDescription: "Le personal branding de Yoann DELALOY a été pensé comme un actif stratégique au service de Maison Siranno. En positionnant Yoann comme une voix de référence sur l'IA appliquée au business, l'automatisation et le développement augmenté par l'IA, la stratégie vise à générer un flux entrant de prospects qualifiés sans dépendre d'une publicité payante. La production de contenu est accélérée par les outils IA (Claude, Kling AI, NotebookLM) sans jamais sacrifier l'authenticité et la singularité du propos.",
    challenges: [
      "Définir un positionnement différenciant dans un espace très saturé (IA, marketing digital)",
      "Maintenir un rythme de publication soutenu sans y consacrer des journées entières",
      "Produire des contenus qui engagent tout en démontrant une expertise technique réelle",
      "Coordonner vidéo, texte, visuel et audio en cohérence pour une marque personnelle forte"
    ],
    results: [
      "Ligne éditoriale claire : 3 piliers de contenu, ton de voix défini, charte visuelle personnelle",
      "Production accélérée grâce aux agents IA : 1 contenu long → décliné en 5 formats en 1h",
      "Présence active sur LinkedIn avec publications régulières sur IA, automatisation et développement",
      "Stratégie vidéo courte format (Kling AI) pour démo techniques et cas d'usage clients",
      "Newsletter mensuelle automatisée : curation de veille + insights personnels"
    ],
    process: [
      "Un atelier de positionnement a permis de définir les 3 angles éditoriaux qui fondent toute la stratégie : 'IA appliquée au concret', 'automatisation pour l'indépendant', et 'développement augmenté par l'IA'.",
      "Un système de production de contenu assisté par IA a été mis en place : chaque idée de fond est d'abord développée en article long, puis déclinée automatiquement en post LinkedIn, script vidéo, newsletter et thread.",
      "La production vidéo a été structurée autour d'outils IA (Kling AI, synthèse vocale, montage automatisé) pour maintenir un rythme de publication hebdomadaire sans équipe dédiée.",
      "Un tableau de bord de pilotage a été mis en place pour suivre les performances de chaque format et affiner la stratégie en continu selon les données d'engagement réelles."
    ]
  },

  // ─── 8. SIRANNO HUB ──────────────────────────────────────────────────────────
  {
    id: 'siranno-hub',
    title: "Siranno Hub",
    category: "SaaS IA & Assistant Personnel",
    expertise: 'ia-agents-rag',
    expertises: ['ia-agents-rag', 'pilotage-continu'],
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=800",
    description: "SaaS de type ERP personnel ultra-complet : +3 800 agents IA, dizaines de dashboards (projet, patrimoine, marketing), accessible via Telegram et WhatsApp.",
    tags: ["SaaS", "IA", "Agents RAG", "ERP", "Dashboard", "Telegram", "WhatsApp"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-11",
    fullDescription: "Siranno Hub est le projet le plus ambitieux de Maison Siranno : un SaaS personnel de type ERP boosté à l'intelligence artificielle, conçu pour centraliser et automatiser la gestion de vie — projets, patrimoine, marketing, veille, communication. Il repose sur une architecture de plus de 3 800 agents IA travaillant de concert, organisés en clusters spécialisés et orchestrés par un agent maître. L'interface se compose de plusieurs dizaines de dashboards thématiques accessibles via navigateur, mais aussi directement depuis Telegram et WhatsApp pour une intégration totale dans le quotidien.",
    challenges: [
      "Orchestrer +3 800 agents IA sans latence ni conflits entre les workflows",
      "Concevoir une UX cohérente sur plusieurs dizaines de dashboards très différents",
      "Permettre l'accès via interfaces de messagerie (Telegram, WhatsApp) sans perte de richesse",
      "Maintenir la performance et la stabilité sur un système de cette envergure",
      "Sécuriser des données sensibles (patrimoine, communications) dans une architecture cloud"
    ],
    results: [
      "+3 800 agents IA opérationnels en coordination",
      "Plusieurs dizaines de dashboards : gestion de projet, patrimoine, marketing, veille",
      "Accessibilité complète depuis Telegram et WhatsApp — zéro interface à ouvrir",
      "Latence agent < 2 secondes sur 95% des requêtes en conditions normales",
      "Architecture évolutive : ajout de nouveaux agents sans refonte de l'existant",
      "Centralisation de toutes les données de pilotage en un seul hub unifié"
    ],
    process: [
      "L'architecture a été pensée comme une ville : chaque cluster d'agents gère un quartier (finance, projets, marketing...), avec un réseau de communication standardisé entre quartiers et un centre de contrôle global.",
      "Le système de RAG (Retrieval-Augmented Generation) a été construit sur une base vectorielle (PostgreSQL + pgvector) alimentée en continu par les données de l'utilisateur, permettant aux agents de répondre avec un contexte personnel ultra-précis.",
      "L'interface Telegram/WhatsApp a été développée comme une couche d'abstraction : l'utilisateur envoie un message naturel, le routeur IA identifie l'agent compétent et orchestre la réponse sans que l'utilisateur ait à connaître l'architecture sous-jacente.",
      "Des dizaines de dashboards ont été conçus avec un design system unifié — malgré la diversité des domaines — pour garantir une cohérence visuelle et une courbe d'apprentissage minimale.",
      "Un monitoring en temps réel surveille la santé de l'ensemble des agents et déclenche des alertes automatiques en cas d'anomalie, garantissant la fiabilité du système au quotidien."
    ]
  },
];
