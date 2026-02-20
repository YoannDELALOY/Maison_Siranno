// Témoignages clients de Maison Siranno

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  projectId: string;
}

// Témoignages pour la page d'accueil
export const homeTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Fondateur",
    company: "JD Rénovation",
    content: "Yoann a su créer notre présence numérique de A à Z. Site vitrine, identité visuelle, référencement local... en quelques semaines, notre entreprise de rénovation est devenue visible sur toute la région. Les demandes de devis ont explosé dès le premier mois.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    projectId: "jd-renovation"
  },
  {
    name: "Sylvie BIDOUX",
    role: "Gérante",
    company: "SI Griveaux",
    content: "Grâce à Yoann, nos assemblées générales sont désormais automatiquement retranscrites et résumées. Ce qui prenait plusieurs heures de travail manuel se fait en quelques minutes. Un gain de temps considérable et une fiabilité redoutable.",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    projectId: "si-griveaux"
  },
  {
    name: "Maxime JAMBOU",
    role: "Dirigeant",
    company: "Consultant Indépendant",
    content: "Avant l'automatisation mise en place par Yoann, je passais mes soirées à organiser mes rendez-vous — répondre aux demandes, vérifier les disponibilités, envoyer des confirmations. Aujourd'hui, mon agenda se remplit tout seul. Ni moi ni mes clients ne subissons plus cette friction. C'est une liberté que je n'aurais pas imaginée possible.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    projectId: "cabinet-kine-perrin"
  }
];

// Témoignages pour la page réalisations (différents de home)
export const projectsTestimonials: Testimonial[] = [
  {
    name: "Marc FONTAINE",
    role: "Directeur",
    company: "Auto-École Centrale",
    content: "En 3 mois, nous sommes passés de la page 3 de Google à la première position sur notre ville. Le système de réservation en ligne a littéralement changé notre quotidien — les appels ont chuté de 60% et les inscriptions ont bondi.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    projectId: "auto-ecole-centrale"
  },
  {
    name: "Nadège BLANCHARD",
    role: "Propriétaire",
    company: "Coiffure & Sens",
    content: "Le taux de no-show est passé de 15% à 3%. C'est énorme dans mon métier. Les clientes réservent à 23h depuis leur canapé, et moi je récupère des heures de vie que je passais au téléphone.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    projectId: "coiffure-et-sens"
  },
  {
    name: "Sophie AUBERT",
    role: "Chef Étoilée",
    company: "L'Écrin Gastronomique",
    content: "Notre taux de remplissage en soirée est passé de 72% à 91%. Le site reflète enfin le niveau de notre cuisine. Les réservations en ligne ont transformé notre gestion des tables et réduit considérablement les appels.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    projectId: "ecrin-gastronomique"
  }
];
