// Témoignages clients de Maison Siranno
//
// RÈGLE, posée le 16/09/2026 : une seule personne réelle par entrée, et
// uniquement des clients qui existent. Cinq témoignages fictifs figuraient ici
// — Lucas Ferreira, Camille Renaud, Marie Lefèvre, Thomas Vaillant et
// Sébastien Morin — avec des photos tirées de randomuser.me. Ils ont été
// retirés : un faux avis sur un site qui vend est une pratique commerciale
// trompeuse, et il ruine l'argument même de l'agence.
//
// `image` reste vide tant que la personne n'a pas fourni sa propre photo :
// le composant AvatarTemoignage affiche alors ses initiales. Ne jamais y
// remettre une image d'illustration.
//
// Conséquence assumée : certains projets n'ont plus de témoignage associé.
// Les écrans le gèrent déjà (ils masquent le bloc). Un projet sans avis vaut
// mieux qu'un projet avec un avis inventé.

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  /** Vide tant que le client n'a pas fourni sa photo. Jamais d'image générée. */
  image: string;
  projectId: string;
}

// ─── Témoignages page d'accueil ────────────────────────────────────────────
export const homeTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Fondateur & Dirigeant",
    company: "JD Rénovation",
    content: "Yoann a transformé notre entreprise du tout au tout. Avant : aucune présence en ligne, tout reposait sur le bouche-à-oreille. Aujourd'hui, notre site génère des demandes de devis chaque semaine, nos 80 articles de blog nous positionnent en tête sur Google localement, et notre identité visuelle reflète vraiment le sérieux de notre travail. Un investissement rentabilisé en moins de deux mois.",
    image: "",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Moniteur d'aquagym",
    company: "Cours d'aquagym",
    content: "J'avais besoin d'un outil simple pour suivre mes séances et mes adhérents — sans me retrouver avec un logiciel usine à gaz. Yoann a compris exactement ce dont j'avais besoin et a livré une application que j'utilise bord du bassin, les mains mouillées, sans aucune friction. La prise en main était immédiate.",
    image: "",
    projectId: "app-suivi-seances-sport"
  },
];

// ─── Témoignages page réalisations ─────────────────────────────────────────
export const projectsTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Fondateur & Dirigeant",
    company: "JD Rénovation",
    content: "Ce que j'apprécie le plus chez Maison Siranno, c'est la proximité. Yoann ne livre pas juste un site — il comprend votre métier, il vous forme, il reste disponible. C'est une vraie collaboration, pas une prestation froide. Je recommande les yeux fermés à n'importe quel artisan qui veut prendre le tournant digital.",
    image: "",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Moniteur d'aquagym",
    company: "Cours d'aquagym",
    content: "Ce qui m'a impressionné, c'est que Yoann a pris le temps de venir observer une vraie séance pour comprendre comment je travaille. L'application reflète exactement mon flux de travail réel — avant, pendant et après la séance. C'est ça le sur-mesure : pas un template adapté, mais une solution construite pour moi.",
    image: "",
    projectId: "app-suivi-seances-sport"
  },
];

// ─── Un témoignage par projet, pour les pages de détail ────────────────────
// Trois projets seulement en ont un. Les autres s'affichent sans.
export const allTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Fondateur & Dirigeant",
    company: "JD Rénovation",
    content: "Yoann a transformé notre entreprise du tout au tout. Avant : aucune présence en ligne, tout reposait sur le bouche-à-oreille. Aujourd'hui, notre site génère des demandes de devis chaque semaine, nos 80 articles de blog nous positionnent en tête sur Google localement, et notre identité visuelle reflète vraiment le sérieux de notre travail. Un investissement rentabilisé en moins de deux mois.",
    image: "",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Moniteur d'aquagym",
    company: "Cours d'aquagym",
    content: "J'avais besoin d'un outil simple pour suivre mes séances et mes adhérents, sans me retrouver avec un logiciel usine à gaz. Yoann a compris exactement ce dont j'avais besoin et a livré une application que j'utilise bord du bassin, les mains mouillées, sans aucune friction. La prise en main était immédiate.",
    image: "",
    projectId: "app-suivi-seances-sport"
  },
  // Signé de son propre nom : c'est un mot du fondateur sur son outil interne,
  // pas un avis client, et la mention du rôle le dit clairement.
  {
    name: "Yoann DELALOY",
    role: "Fondateur",
    company: "Maison Siranno",
    content: "Siranno Hub est le projet qui me ressemble le plus. Ce que je faisais en plusieurs heures chaque jour — veille, mails, rapports, gestion de projet — est maintenant géré en quelques secondes. C'est ma démonstration que l'IA doit servir la liberté, pas la complexité.",
    image: "",
    projectId: "siranno-hub"
  },
];
