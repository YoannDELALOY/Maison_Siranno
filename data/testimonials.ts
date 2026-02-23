// Témoignages clients de Maison Siranno

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  projectId: string;
}

// ─── Témoignages page d'accueil (3) ────────────────────────────────────────
export const homeTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Fondateur & Dirigeant",
    company: "JD Rénovation",
    content: "Yoann a transformé notre entreprise du tout au tout. Avant : aucune présence en ligne, tout reposait sur le bouche-à-oreille. Aujourd'hui, notre site génère des demandes de devis chaque semaine, nos 80 articles de blog nous positionnent en tête sur Google localement, et notre identité visuelle reflète vraiment le sérieux de notre travail. Un investissement rentabilisé en moins de deux mois.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Moniteur d'aquagym",
    company: "Cours d'aquagym",
    content: "J'avais besoin d'un outil simple pour suivre mes séances et mes adhérents — sans me retrouver avec un logiciel usine à gaz. Yoann a compris exactement ce dont j'avais besoin et a livré une application que j'utilise bord du bassin, les mains mouillées, sans aucune friction. La prise en main était immédiate.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    projectId: "app-suivi-seances-sport"
  },
  {
    name: "Lucas FERREIRA",
    role: "Entrepreneur & Indépendant",
    company: "Consultant Digital",
    content: "J'avais du mal à structurer mes projets et mes finances au même endroit sans me perdre dans des tableurs. L'app de gestion que Maison Siranno a développée pour moi est à la fois ludique et puissante — l'approche RPG me donne vraiment envie de l'utiliser au quotidien. C'est rare de trouver un outil qui te motive autant qu'il t'organise.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    projectId: "app-gestion-projet-rpg"
  },
];

// ─── Témoignages page réalisations (3) ─────────────────────────────────────
export const projectsTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Fondateur & Dirigeant",
    company: "JD Rénovation",
    content: "Ce que j'apprécie le plus chez Maison Siranno, c'est la proximité. Yoann ne livre pas juste un site — il comprend votre métier, il vous forme, il reste disponible. C'est une vraie collaboration, pas une prestation froide. Je recommande les yeux fermés à n'importe quel artisan qui veut prendre le tournant digital.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Moniteur d'aquagym",
    company: "Cours d'aquagym",
    content: "Ce qui m'a impressionné, c'est que Yoann a pris le temps de venir observer une vraie séance pour comprendre comment je travaille. L'application reflète exactement mon flux de travail réel — avant, pendant et après la séance. C'est ça le sur-mesure : pas un template adapté, mais une solution construite pour moi.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    projectId: "app-suivi-seances-sport"
  },
  {
    name: "Camille RENAUD",
    role: "Créatrice de contenu",
    company: "Studio Renaud",
    content: "Maison Siranno m'a aidée à structurer ma stratégie de contenu et à mettre en place des automatisations qui ont complètement changé mon rapport à la production. Je publie deux fois plus souvent, avec deux fois moins d'effort. Et le personal branding a attiré des clients que je n'aurais jamais touchés autrement.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    projectId: "personal-branding-yoann-delaloy"
  },
];

// ─── Tous les témoignages — 1 par projet réel (pour ServiceDetailPage) ──────
export const allTestimonials: Testimonial[] = [
  // JD Rénovation
  {
    name: "Julien DELALOY",
    role: "Fondateur & Dirigeant",
    company: "JD Rénovation",
    content: "Yoann a transformé notre entreprise du tout au tout. Avant : aucune présence en ligne, tout reposait sur le bouche-à-oreille. Aujourd'hui, notre site génère des demandes de devis chaque semaine, nos 80 articles de blog nous positionnent en tête sur Google localement, et notre identité visuelle reflète vraiment le sérieux de notre travail. Un investissement rentabilisé en moins de deux mois.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    projectId: "jd-renovation"
  },

  // Portfolio Yoann DELALOY
  {
    name: "Marie LEFÈVRE",
    role: "Directrice",
    company: "Agence Recrutement Tech",
    content: "J'ai reçu le portfolio de Yoann avant même notre premier entretien. La qualité du travail était évidente dès les premières secondes — un site de cette finition est lui-même une lettre de motivation. C'est exactement ce qu'un portfolio doit faire : convaincre avant même que l'on ait lu une ligne.",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    projectId: "portfolio-yoann-delaloy"
  },

  // App Gestion de projet RPG
  {
    name: "Lucas FERREIRA",
    role: "Entrepreneur & Indépendant",
    company: "Consultant Digital",
    content: "J'avais du mal à structurer mes projets sans me perdre dans des tableurs. L'app développée par Maison Siranno est à la fois ludique et puissante — l'approche RPG me donne vraiment envie de l'utiliser au quotidien. C'est rare de trouver un outil qui te motive autant qu'il t'organise.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    projectId: "app-gestion-projet-rpg"
  },

  // App Gestion financière RPG
  {
    name: "Thomas VAILLANT",
    role: "Investisseur particulier",
    company: "Indépendant",
    content: "Je suivais mon patrimoine sur un fichier Excel vieillissant. L'application de Maison Siranno a tout changé — les dashboards sont beaux, les données sont claires, et l'aspect RPG m'engage vraiment à y revenir chaque semaine. Pour la première fois, j'ai une vision globale et en temps réel de ma situation financière.",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    projectId: "app-gestion-financiere-rpg"
  },

  // App Suivi séances sport
  {
    name: "Maxime JAMBOU",
    role: "Moniteur d'aquagym",
    company: "Cours d'aquagym",
    content: "J'avais besoin d'un outil simple pour suivre mes séances et mes adhérents, sans me retrouver avec un logiciel usine à gaz. Yoann a compris exactement ce dont j'avais besoin et a livré une application que j'utilise bord du bassin, les mains mouillées, sans aucune friction. La prise en main était immédiate.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    projectId: "app-suivi-seances-sport"
  },

  // Automatisation Yoann DELALOY
  {
    name: "Sébastien MORIN",
    role: "Directeur Commercial",
    company: "PME Industrie",
    content: "Maison Siranno nous a mis en place un système d'automatisation qui traite notre boîte mail, génère nos comptes-rendus de réunion et alimente notre CRM automatiquement. Ce qui nous prenait 2-3 heures par jour est désormais géré en arrière-plan. Nos commerciaux se concentrent enfin sur ce qui compte : vendre.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    projectId: "automatisation-yoann-delaloy"
  },

  // Personal Branding Yoann DELALOY
  {
    name: "Camille RENAUD",
    role: "Créatrice de contenu",
    company: "Studio Renaud",
    content: "Maison Siranno m'a aidée à structurer ma stratégie de contenu et à mettre en place des automatisations qui ont changé mon rapport à la production. Je publie deux fois plus souvent, avec deux fois moins d'effort. Et le personal branding a attiré des clients que je n'aurais jamais touchés autrement.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    projectId: "personal-branding-yoann-delaloy"
  },

  // Siranno Hub
  {
    name: "Yoann DELALOY",
    role: "Fondateur",
    company: "Maison Siranno",
    content: "Siranno Hub est le projet qui me ressemble le plus. Plus de 3 800 agents IA orchestrés, des dizaines de dashboards, un accès direct depuis Telegram et WhatsApp. Ce que je faisais en plusieurs heures chaque jour — veille, mails, rapports, gestion de projet — est maintenant géré en quelques secondes. C'est ma démonstration que l'IA doit servir la liberté, pas la complexité.",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    projectId: "siranno-hub"
  },
];
