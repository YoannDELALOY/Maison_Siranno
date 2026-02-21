// Données des 6 expertises de Maison Siranno
// Les icônes JSX sont ajoutées dans Services.tsx pour éviter la circularité des imports

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceDataRaw {
  id: string;
  icon: null;
  title: string;
  description: string;
  delay: string;
  fullDescription: string;
  benefits: string[];
  useCases: string[];
  technologies: string[];
  processSteps: ProcessStep[];
}

export const servicesData: ServiceDataRaw[] = [
  {
    id: 'web-apps-saas',
    icon: null,
    title: "Développement Web Apps & SaaS",
    description: "Du code qui génère du CA. Nous livrons des applications modernes, scalables et pixel-perfect, plus vite qu'une agence traditionnelle — grâce au vibe coding (Cursor, Windsurf).",
    delay: "0s",
    fullDescription: "Fini les projets web qui prennent 6 mois pour un résultat décevant. Grâce aux outils IA de dernière génération (Cursor, Windsurf), nous livrons des MVP fonctionnels, des SaaS complets et des applications sur-mesure en un temps record — sans jamais sacrifier la qualité. React, Next.js, TypeScript, Tailwind : une stack moderne qui dure.",
    benefits: [
      "MVP et SaaS livrés 3× plus vite qu'une agence classique",
      "Design pixel-perfect adapté à votre identité de marque",
      "Architecture scalable prête pour la croissance",
      "Mobile-first, SEO-ready, performances Core Web Vitals",
      "Autonomie client : back-office pour gérer votre contenu"
    ],
    useCases: ["SaaS & plateformes B2B", "Applications métiers sur-mesure", "MVP startups", "Refonte sites existants"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Cursor", "Windsurf", "Vercel"],
    processSteps: [
      { title: "Découverte & brief", description: "Définir les objectifs, la cible et le cahier des charges." },
      { title: "Planification", description: "Créer l'arborescence du site et les wireframes (croquis)." },
      { title: "Design UI/UX", description: "Réaliser les maquettes graphiques et l'interface visuelle." },
      { title: "Développement", description: "Coder le site ou le configurer via un CMS (ex : WordPress, Shopify)." },
      { title: "Contenu & SEO", description: "Intégrer les textes ou médias et optimiser pour les moteurs de recherche." },
      { title: "Tests", description: "Vérifier l'affichage (mobile/PC) et le bon fonctionnement technique (bugs)." },
      { title: "Lancement & maintenance", description: "Mettre le site en ligne et assurer les mises à jour régulières." },
    ]
  },
  {
    id: 'automatisation-n8n',
    icon: null,
    title: "Automatisation & Orchestration n8n",
    description: "Pas des 'zaps' basiques. Des architectures de workflows complexes qui interconnectent votre stack et éliminent le travail manuel répétitif une fois pour toutes.",
    delay: "0.1s",
    fullDescription: "Chaque heure passée sur des tâches répétitives est une heure volée à votre cœur de métier. Nous auditeons vos processus, identifions les goulots d'étranglement et construisons des workflows n8n/Make robustes qui tournent 24h/24 sans surveillance. Résultat : zéro erreur humaine, temps libéré pour l'essentiel.",
    benefits: [
      "Audit complet de vos processus manuels actuels",
      "Workflows n8n/Make complexes et interconnectés",
      "Intégration CRM, email, agenda, facturation, Slack...",
      "Monitoring et alertes en cas d'anomalie",
      "Documentation complète pour votre équipe"
    ],
    useCases: ["Qualification & nurturing leads auto", "Facturation et relances automatiques", "Synchronisation multi-outils", "Reporting automatisé"],
    technologies: ["n8n", "Make", "Airtable", "Notion", "Slack", "Zapier", "Webhooks"],
    processSteps: [
      { title: "Audit des processus", description: "Cartographier vos tâches manuelles et identifier les goulots d'étranglement." },
      { title: "Priorisation", description: "Classer les automatisations par impact ROI et complexité technique." },
      { title: "Architecture", description: "Concevoir l'architecture des workflows et les connexions entre outils." },
      { title: "Développement n8n", description: "Construire et tester les workflows dans un environnement de staging." },
      { title: "Intégration", description: "Connecter les workflows à vos outils existants (CRM, ERP, email...)." },
      { title: "Monitoring", description: "Mettre en place les alertes et tableaux de bord de supervision." },
      { title: "Documentation & formation", description: "Former vos équipes et livrer la documentation complète des flux." },
    ]
  },
  {
    id: 'contenu-marketing-ia',
    icon: null,
    title: "Création de Contenu & Marketing IA",
    description: "Votre bras armé marketing : newsletters automatisées, réseaux sociaux, visuels IA, tunnels de vente. Une présence de marque omniprésente sans mobiliser vos équipes.",
    delay: "0.2s",
    fullDescription: "Le contenu est roi, mais le produire prend un temps fou. Nous automatisons votre machine à contenu : newsletters personnalisées, posts réseaux sociaux générés et publiés automatiquement, visuels IA cohérents avec votre charte, tunnels de conversion. Votre marque est partout, votre équipe reste focus sur son cœur de métier.",
    benefits: [
      "Newsletters automatisées et personnalisées par segment",
      "Calendrier éditorial IA pour réseaux sociaux",
      "Création de visuels IA cohérents (Midjourney, Flux, DALL-E)",
      "Tunnels de vente et séquences email automation",
      "Reporting ROI content mensuel"
    ],
    useCases: ["Marketing automation B2B/B2C", "Personal branding dirigeants", "Lancement produit", "Stratégie contenu SEO"],
    technologies: ["Midjourney", "DALL-E", "Flux", "Claude AI", "Mailchimp", "Buffer", "Brevo"],
    processSteps: [
      { title: "Audit de marque", description: "Analyser votre positionnement, vos cibles et votre charte graphique existante." },
      { title: "Stratégie éditoriale", description: "Définir les thèmes, formats et fréquences adaptés à chaque canal." },
      { title: "Mise en place IA", description: "Configurer les modèles IA et les pipelines de génération de contenu." },
      { title: "Création des templates", description: "Produire les gabarits visuels et les prompts maîtres réutilisables." },
      { title: "Automation & diffusion", description: "Connecter les outils de publication et automatiser le calendrier éditorial." },
      { title: "Tests & validation", description: "Valider le ton, la cohérence visuelle et la qualité sur chaque canal." },
      { title: "Reporting & itération", description: "Analyser les performances et optimiser les contenus chaque mois." },
    ]
  },
  {
    id: 'ia-agents-rag',
    icon: null,
    title: "Intelligence Artificielle & Agents RAG",
    description: "Transformez votre savoir dormant en ressource interactive instantanée. Chatbots IA sur vos données, agents autonomes, intégration IA générative dans vos produits.",
    delay: "0.3s",
    fullDescription: "L'IA générique ne connaît pas votre entreprise. Nous construisons des systèmes RAG (Retrieval-Augmented Generation) entraînés sur vos données propriétaires : documentation interne, bases de connaissances, historique clients. Résultat : des assistants IA qui répondent avec la précision d'un expert de votre domaine, disponibles 24/7.",
    benefits: [
      "Chatbot IA RAG sur votre documentation interne",
      "Agents autonomes pour qualification de leads ou support",
      "Intégration IA dans vos produits existants (API)",
      "Fine-tuning et prompt engineering expert",
      "Conformité RGPD : données hébergées en Europe"
    ],
    useCases: ["Support client IA niveau 1 & 2", "Assistant commercial intelligent", "FAQ dynamique sur vos produits", "Analyse de documents automatique"],
    technologies: ["OpenAI", "Claude", "LangChain", "Pinecone", "ChromaDB", "Supabase", "RAG"],
    processSteps: [
      { title: "Audit des données", description: "Recenser et qualifier vos sources documentaires (PDFs, bases, wikis...)." },
      { title: "Architecture RAG", description: "Concevoir le pipeline d'indexation vectorielle et de retrieval adapté." },
      { title: "Ingestion & vectorisation", description: "Transformer vos données en vecteurs et les stocker dans la base vectorielle." },
      { title: "Prompt engineering", description: "Rédiger et affiner les instructions système pour des réponses précises." },
      { title: "Développement agent", description: "Coder l'agent IA, les outils et les connecteurs vers vos systèmes." },
      { title: "Tests & évaluation", description: "Mesurer la pertinence des réponses et corriger les hallucinations." },
      { title: "Déploiement & conformité", description: "Mettre en production sur infrastructure européenne et valider la conformité RGPD." },
    ]
  },
  {
    id: 'conseil-formation',
    icon: null,
    title: "Conseil & Formation",
    description: "Un partenaire stratégique qui audite votre organisation, forme vos équipes et garantit l'adoption réelle des technologies déployées.",
    delay: "0.4s",
    fullDescription: "La technologie la plus avancée ne vaut rien si vos équipes ne l'adoptent pas. Nous vous accompagnons de l'audit stratégique jusqu'à la formation de vos collaborateurs. Une relation de confiance dans la durée, pas un projet livré et oublié.",
    benefits: [
      "Audit stratégique IA & digital de votre structure",
      "Formation équipes sur les outils déployés",
      "Ateliers pratiques et montée en compétences",
      "Veille technologique et recommandations proactives",
      "Documentation et support post-formation"
    ],
    useCases: ["Audit transformation digitale", "Formation IA pour PME", "CDO as a Service", "Ateliers équipes dirigeantes"],
    technologies: ["Notion", "Miro", "Loom", "Google Workspace", "ChatGPT", "Typeform"],
    processSteps: [
      { title: "Diagnostic initial", description: "Évaluer la maturité digitale de votre organisation et identifier les priorités." },
      { title: "Cartographie des besoins", description: "Interviewer les équipes et recenser les usages, blocages et attentes." },
      { title: "Feuille de route", description: "Prioriser les actions et définir un plan de transformation réaliste." },
      { title: "Sélection des outils", description: "Recommander les solutions adaptées à votre contexte et votre budget." },
      { title: "Formation sur mesure", description: "Animer des ateliers pratiques adaptés au niveau de chaque équipe." },
      { title: "Accompagnement terrain", description: "Être présent lors des premières semaines d'adoption pour lever les freins." },
      { title: "Bilan & suivi", description: "Mesurer l'adoption, ajuster le programme et planifier la veille continue." },
    ]
  },
  {
    id: 'pilotage-continu',
    icon: null,
    title: "Pilotage Continu",
    description: "Suivi mensuel de vos KPIs digitaux, optimisation permanente et accès prioritaire pour garantir des performances durables et une croissance maîtrisée.",
    delay: "0.5s",
    fullDescription: "Un tableau de bord vivant, des ajustements en temps réel et un interlocuteur dédié chaque mois. Nous pilotons vos indicateurs digitaux, identifions les leviers de croissance et itérons en continu pour maximiser votre ROI — sans jamais perdre de vue vos objectifs métier.",
    benefits: [
      "Pilotage mensuel KPIs et tableaux de bord sur-mesure",
      "Optimisation continue des workflows et automatisations",
      "Reporting ROI détaillé et recommandations d'itération",
      "Accès prioritaire pour évolutions et nouvelles fonctionnalités",
      "Réunion de suivi mensuelle avec compte-rendu actionnable"
    ],
    useCases: ["Retainer mensuel digital", "Optimisation ROI continu", "Performance marketing", "Supervision opérationnelle IA"],
    technologies: ["Looker Studio", "Google Analytics", "Metabase", "Notion", "n8n", "Datadog"],
    processSteps: [
      { title: "Définition des KPIs", description: "Identifier avec vous les indicateurs clés qui reflètent vos objectifs métier." },
      { title: "Mise en place du tracking", description: "Configurer les outils d'analyse et les sources de données à centraliser." },
      { title: "Dashboard sur-mesure", description: "Construire votre tableau de bord vivant, accessible en temps réel." },
      { title: "Revue mensuelle", description: "Analyser ensemble les résultats, les écarts et les opportunités." },
      { title: "Optimisations", description: "Ajuster les workflows, campagnes et automatisations en fonction des données." },
      { title: "Reporting exécutif", description: "Produire un compte-rendu clair et actionnable pour vos équipes dirigeantes." },
      { title: "Veille & anticipation", description: "Surveiller les tendances du marché et anticiper les ajustements stratégiques." },
    ]
  }
];
