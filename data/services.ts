// Données des 5 expertises de Maison Siranno
// Les icônes JSX sont ajoutées dans Services.tsx pour éviter la circularité des imports

export interface ServiceDataRaw {
  id: string;
  icon: null;
  title: string;
  description: string;
  delay: string;
  fullDescription: string;
  benefits: string[];
  useCases: string[];
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
    useCases: ["SaaS & plateformes B2B", "Applications métiers sur-mesure", "MVP startups", "Refonte sites existants"]
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
    useCases: ["Qualification & nurturing leads auto", "Facturation et relances automatiques", "Synchronisation multi-outils", "Reporting automatisé"]
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
    useCases: ["Marketing automation B2B/B2C", "Personal branding dirigeants", "Lancement produit", "Stratégie contenu SEO"]
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
    useCases: ["Support client IA niveau 1 & 2", "Assistant commercial intelligent", "FAQ dynamique sur vos produits", "Analyse de documents automatique"]
  },
  {
    id: 'conseil-formation-pilotage',
    icon: null,
    title: "Conseil, Formation & Pilotage Continu",
    description: "Pas juste un exécutant. Un partenaire de croissance long terme qui garantit l'adoption réelle, la montée en compétences de vos équipes et les performances durables.",
    delay: "0.4s",
    fullDescription: "La technologie la plus avancée ne vaut rien si vos équipes ne l'adoptent pas. Nous vous accompagnons de l'audit stratégique jusqu'à la formation de vos collaborateurs, en passant par le pilotage mensuel de vos KPIs digitaux. Une relation de confiance dans la durée, pas un projet livré et oublié.",
    benefits: [
      "Audit stratégique IA & digital de votre structure",
      "Formation équipes sur les outils déployés",
      "Pilotage mensuel KPIs et optimisation continue",
      "Veille technologique et recommandations proactives",
      "Accès prioritaire pour évolutions et nouvelles fonctionnalités"
    ],
    useCases: ["Audit transformation digitale", "Formation IA pour PME", "CDO as a Service", "Optimisation ROI digital"]
  }
];
