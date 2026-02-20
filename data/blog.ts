// 20 articles de blog Maison Siranno

export type BlogCategory =
  | 'Développement Web & SaaS'
  | 'Automatisation & Workflows'
  | 'Intelligence Artificielle'
  | 'Marketing & Contenu'
  | 'Stratégie & Conseil';

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  available: boolean;
  body?: string; // Contenu de l'article (résumé pour les non-disponibles)
}

export const blogArticles: BlogArticle[] = [
  // ─── INTELLIGENCE ARTIFICIELLE ───────────────────────────────────
  {
    id: 'ia-artisans',
    title: "L'IA au service des artisans : mythe ou réalité ?",
    excerpt: "Automatiser ses devis, ses rappels clients, sa compta légère... Est-ce vraiment accessible à un artisan indépendant ? Retour d'expérience terrain après 12 mois de déploiements.",
    category: 'Intelligence Artificielle',
    date: "Janvier 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    tags: ["IA", "Artisanat", "Automatisation"],
    available: true,
  },
  {
    id: 'rag-entreprise',
    title: "RAG : transformer votre documentation en assistant IA surpuissant",
    excerpt: "Le Retrieval-Augmented Generation permet à vos équipes d'interroger en langage naturel toute la base de connaissance de l'entreprise. Comment ça marche, pour qui, combien ça coûte.",
    category: 'Intelligence Artificielle',
    date: "Février 2025",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800",
    tags: ["RAG", "IA", "LLM", "Entreprise"],
    available: true,
  },
  {
    id: 'chatbot-artisan',
    title: "Chatbot IA pour artisan : retour d'expérience 6 mois",
    excerpt: "Nous avons déployé un chatbot de qualification de leads pour 4 artisans locaux. Résultats, surprises, limites et bonnes pratiques : tout ce qu'on a appris sur le terrain.",
    category: 'Intelligence Artificielle',
    date: "Mars 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    tags: ["Chatbot", "IA", "Leads", "Artisanat"],
    available: true,
  },
  {
    id: 'ia-generative-business',
    title: "IA générative : quels cas d'usage réels pour votre PME en 2025 ?",
    excerpt: "GPT-4, Claude, Gemini... Au-delà du buzz, quelles applications concrètes génèrent du ROI pour les PME françaises ? Analyse des 10 cas d'usage les plus rentables.",
    category: 'Intelligence Artificielle',
    date: "Bientôt",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    tags: ["IA Générative", "PME", "ROI", "GPT"],
    available: false,
  },
  // ─── AUTOMATISATION & WORKFLOWS ──────────────────────────────────
  {
    id: 'automatisation-pme',
    title: "Automatisation pour PME : par où commencer ?",
    excerpt: "Trop de chefs d'entreprise pensent que l'automatisation c'est compliqué ou réservé aux grands groupes. Faux. Voici une méthode simple en 3 étapes pour identifier et automatiser vos tâches répétitives.",
    category: 'Automatisation & Workflows',
    date: "Novembre 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
    tags: ["Automatisation", "PME", "Workflow", "Productivité"],
    available: true,
  },
  {
    id: 'n8n-vs-make',
    title: "n8n vs Make (ex-Integromat) : lequel choisir en 2025 ?",
    excerpt: "Deux plateformes d'automatisation puissantes, deux philosophies différentes. Comparatif complet pour vous aider à choisir selon votre profil, votre budget et vos ambitions.",
    category: 'Automatisation & Workflows',
    date: "Décembre 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    tags: ["n8n", "Make", "Automatisation", "Comparatif"],
    available: true,
  },
  {
    id: 'workflow-rdv-auto',
    title: "Automatiser sa prise de RDV : le guide complet",
    excerpt: "Calendly, Cal.com, intégration agenda Google, rappels SMS, qualification des leads... Comment construire un système de RDV 100% automatisé qui libère vos créneaux sans friction client.",
    category: 'Automatisation & Workflows',
    date: "Bientôt",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    tags: ["RDV", "Calendly", "Automatisation", "CRM"],
    available: false,
  },
  {
    id: 'zapier-alternatifs',
    title: "Pourquoi quitter Zapier pour n8n : notre migration en 5 étapes",
    excerpt: "Coûts qui explosent, limitations des plans, manque de flexibilité... Retour sur notre migration de 23 workflows Zapier vers n8n self-hosted. Économies réalisées : -87% sur le coût mensuel.",
    category: 'Automatisation & Workflows',
    date: "Bientôt",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800",
    tags: ["Zapier", "n8n", "Migration", "Self-hosted"],
    available: false,
  },
  // ─── DÉVELOPPEMENT WEB & SAAS ────────────────────────────────────
  {
    id: 'seo-local-2025',
    title: "SEO local en 2025 : ce qui fonctionne vraiment",
    excerpt: "Google Maps, fiches établissement, avis, données structurées... Le référencement local a profondément évolué. Voici les leviers concrets qui font la différence pour les PME et commerces locaux.",
    category: 'Développement Web & SaaS',
    date: "Décembre 2024",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    tags: ["SEO", "Local", "Google", "PME"],
    available: true,
  },
  {
    id: 'site-vitrine-2025',
    title: "Pourquoi votre site vitrine vous coûte des clients",
    excerpt: "Un site lent, non mobile, sans CTA clair, c'est une pompe à fuites. Découvrez les 5 erreurs les plus courantes sur les sites de PME et comment les corriger rapidement.",
    category: 'Développement Web & SaaS',
    date: "Janvier 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    tags: ["Site Web", "Conversion", "UX", "PME"],
    available: true,
  },
  {
    id: 'vibe-coding',
    title: "Vibe Coding : comment l'IA transforme le développement web en 2025",
    excerpt: "Cursor, Windsurf, GitHub Copilot... Ces outils permettent de livrer des applications complètes 3× plus vite. Ce que ça change pour vous en tant que client, et comment en profiter.",
    category: 'Développement Web & SaaS',
    date: "Février 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["Vibe Coding", "IA", "Développement", "Cursor"],
    available: true,
  },
  {
    id: 'mvp-saas-6-semaines',
    title: "Lancer un MVP SaaS en 6 semaines : méthode et stack technique",
    excerpt: "De l'idée au produit en production en 6 semaines. Notre méthode, notre stack (React + Supabase + Stripe + Vercel) et les pièges à éviter pour les fondateurs non-techniques.",
    category: 'Développement Web & SaaS',
    date: "Bientôt",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["MVP", "SaaS", "Startup", "React"],
    available: false,
  },
  {
    id: 'core-web-vitals-2025',
    title: "Core Web Vitals 2025 : le guide pour ne plus perdre en SEO",
    excerpt: "LCP, INP, CLS — les métriques de performance que Google pénalise sans pitié. Comment les mesurer, les comprendre et les optimiser sur votre site React ou WordPress.",
    category: 'Développement Web & SaaS',
    date: "Bientôt",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
    tags: ["Core Web Vitals", "SEO", "Performance", "Google"],
    available: false,
  },
  // ─── MARKETING & CONTENU ─────────────────────────────────────────
  {
    id: 'newsletter-automatisee',
    title: "Newsletter automatisée : de 0 à 1 000 abonnés en 90 jours",
    excerpt: "La newsletter est l'actif marketing le plus rentable en 2025. Voici notre méthode pour créer un système entièrement automatisé : collecte, segmentation, envoi et analyse.",
    category: 'Marketing & Contenu',
    date: "Janvier 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    tags: ["Newsletter", "Email Marketing", "Automatisation", "Growth"],
    available: true,
  },
  {
    id: 'contenu-ia-reseaux',
    title: "Créer 30 posts réseaux sociaux par mois avec l'IA (en 2h)",
    excerpt: "Stratégie editoriale, génération de contenu, planification et publication automatique. Le système complet pour maintenir une présence forte sur LinkedIn, Instagram et Facebook sans y passer sa vie.",
    category: 'Marketing & Contenu',
    date: "Février 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    tags: ["Réseaux Sociaux", "IA", "Content Marketing", "LinkedIn"],
    available: true,
  },
  {
    id: 'tunnel-vente-automation',
    title: "Tunnel de vente automatisé : les 5 étapes d'un funnel qui convertit",
    excerpt: "Lead magnet, séquence email, nurturing, upsell... Comment construire un tunnel de vente entièrement automatisé qui travaille pour vous 24h/24 sans intervention manuelle.",
    category: 'Marketing & Contenu',
    date: "Bientôt",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800",
    tags: ["Tunnel de Vente", "Email", "Conversion", "Automation"],
    available: false,
  },
  {
    id: 'personal-branding-dirigeant',
    title: "Personal branding dirigeant : construire son autorité en 6 mois",
    excerpt: "Les dirigeants qui publient régulièrement génèrent 3× plus de leads que leur entreprise. Méthode, outils IA et exemples concrets pour construire votre personal brand sans vous épuiser.",
    category: 'Marketing & Contenu',
    date: "Bientôt",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    tags: ["Personal Branding", "LinkedIn", "Dirigeant", "Autorité"],
    available: false,
  },
  // ─── STRATÉGIE & CONSEIL ─────────────────────────────────────────
  {
    id: 'audit-digital-pme',
    title: "Comment auditer sa présence digitale en 1 journée",
    excerpt: "Site web, référencement, réseaux sociaux, avis Google, outils internes... La check-list complète pour faire le point sur votre maturité digitale et identifier les priorités d'investissement.",
    category: 'Stratégie & Conseil',
    date: "Décembre 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    tags: ["Audit", "Stratégie", "PME", "Digital"],
    available: true,
  },
  {
    id: 'roi-transformation-digitale',
    title: "ROI de la transformation digitale : comment le calculer vraiment",
    excerpt: "Temps économisé, leads générés, erreurs évitées, satisfaction client... Les vrais indicateurs pour mesurer le retour sur investissement d'un projet digital, au-delà du chiffre d'affaires.",
    category: 'Stratégie & Conseil',
    date: "Novembre 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["ROI", "Stratégie", "Transformation Digitale", "KPI"],
    available: true,
  },
  {
    id: 'formation-equipe-ia',
    title: "Former ses équipes à l'IA : méthode et retour d'expérience",
    excerpt: "L'IA ne remplace pas vos collaborateurs, elle les augmente — à condition qu'ils sachent s'en servir. Notre programme de formation IA adapté aux PME : objectifs, durée, résultats.",
    category: 'Stratégie & Conseil',
    date: "Bientôt",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    tags: ["Formation", "IA", "Équipes", "Change Management"],
    available: false,
  },
];

// Catégories avec couleurs pour les badges
export const categoryConfig: Record<BlogCategory, { color: string; bgColor: string }> = {
  'Développement Web & SaaS':    { color: 'text-blue-700',   bgColor: 'bg-blue-50 border-blue-200' },
  'Automatisation & Workflows':  { color: 'text-purple-700', bgColor: 'bg-purple-50 border-purple-200' },
  'Intelligence Artificielle':   { color: 'text-emerald-700',bgColor: 'bg-emerald-50 border-emerald-200' },
  'Marketing & Contenu':         { color: 'text-rose-700',   bgColor: 'bg-rose-50 border-rose-200' },
  'Stratégie & Conseil':         { color: 'text-amber-700',  bgColor: 'bg-amber-50 border-amber-200' },
};
