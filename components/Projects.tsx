import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionId } from '../types';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
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
}

export const projectsData: ProjectData[] = [
  {
    id: 'jd-renovation',
    title: "JD Rénovation",
    category: "Site Vitrine & Identité Numérique",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    description: "Création complète de la présence numérique pour une entreprise de rénovation spécialisée en carrelage, maçonnerie, couverture et charpente.",
    tags: ["Site Vitrine", "SEO Local", "Identité Visuelle", "Google My Business"],
    client: "Julien Delaloy",
    year: "2025",
    date: "2025-03",
    fullDescription: "JD Rénovation est une entreprise du bâtiment fondée par Julien Delaloy, spécialisée dans la rénovation complète : carrelage, maçonnerie, couverture et charpente. Avant notre intervention, l'entreprise n'avait aucune présence numérique et dépendait uniquement du bouche-à-oreille. Nous avons créé de A à Z son identité digitale.",
    challenges: [
      "Partir de zéro : aucune présence web ni réseaux sociaux",
      "Secteur très concurrentiel localement",
      "Client non familiarisé avec le numérique",
      "Budget adapté à une petite entreprise artisanale"
    ],
    results: [
      "Site vitrine moderne, mobile-first, avec galerie de réalisations",
      "Référencement local optimisé (Google My Business, SEO on-page)",
      "Formulaire de contact avec qualification automatique des demandes",
      "Identité visuelle cohérente (logo, couleurs, typographie)",
      "+60% de demandes de devis dès le 2ème mois"
    ]
  },
  {
    id: 'si-griveaux',
    title: "SI Griveaux",
    category: "Automatisation & IA",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800",
    description: "Système d'automatisation complet pour la transcription et le résumé d'assemblées générales, éliminant plusieurs heures de travail manuel.",
    tags: ["Automatisation", "IA", "Transcription", "Workflow"],
    client: "Sylvie Bidoux",
    year: "2025",
    date: "2025-02",
    fullDescription: "SI Griveaux est une structure gérée par Sylvie Bidoux. L'organisation tenait régulièrement des assemblées générales dont la retranscription et le résumé nécessitaient plusieurs heures de travail manuel, avec des risques d'erreurs et une perte de temps considérable. Nous avons automatisé l'intégralité de ce processus grâce à l'IA.",
    challenges: [
      "Processus manuel très chronophage (4-6h par AG)",
      "Risques d'erreurs dans les retranscriptions manuelles",
      "Nécessité d'une solution fiable et simple à utiliser",
      "Intégration avec les outils existants de l'organisation"
    ],
    results: [
      "Transcription automatique des enregistrements audio/vidéo d'AG",
      "Résumé intelligent structuré par points, décisions et actions",
      "Réduction du temps de traitement de 4h à 15 minutes",
      "Archivage automatique et indexation pour recherche ultérieure",
      "Interface simple accessible à toute l'équipe"
    ]
  },
  {
    id: 'boulangerie-leroux',
    title: "Boulangerie Leroux",
    category: "Site Vitrine & Commandes en Ligne",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    description: "Site vitrine avec module de commandes en ligne pour une boulangerie artisanale. Intégration Click & Collect et gestion des créneaux de retrait.",
    tags: ["Site Vitrine", "Click & Collect", "SEO Local", "Commandes"],
    client: "Famille Leroux",
    year: "2025",
    date: "2025-01",
    fullDescription: "La Boulangerie Leroux, institution locale depuis trois générations, souhaitait moderniser sa relation client et proposer une commande en ligne pour éviter les ruptures de stock et les files d'attente. Nous avons conçu un site vitrine chaleureux avec un système de commande simple et efficace.",
    challenges: [
      "Conserver l'identité artisanale tout en passant au digital",
      "Gérer les stocks en temps réel pour éviter les déceptions",
      "Intégrer un système de Click & Collect adapté aux horaires d'ouverture",
      "Facilité d'utilisation pour une clientèle variée (seniors inclus)"
    ],
    results: [
      "Site vitrine avec galerie des spécialités et photos d'ambiance",
      "Module Click & Collect avec créneaux personnalisables",
      "Réduction de 30% des ruptures de stock grâce à la anticipation des commandes",
      "+45 commandes en ligne dès la première semaine",
      "Hausse du panier moyen de 18% via les suggestions produits"
    ]
  },
  {
    id: 'cabinet-kine-perrin',
    title: "Cabinet Kiné Perrin",
    category: "Prise de RDV IA & Site Médical",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    description: "Refonte complète du site d'un cabinet de kinésithérapie avec agenda IA, rappels automatiques et gestion des dossiers patients simplifiée.",
    tags: ["Prise de RDV", "IA", "Santé", "Automatisation"],
    client: "Dr. Claire Perrin",
    year: "2025",
    date: "2025-02",
    fullDescription: "Le Cabinet Kiné Perrin gérait ses rendez-vous par téléphone et papier, générant une charge administrative importante pour la praticienne. Nous avons déployé une solution de prise de RDV en ligne avec rappels automatiques par SMS, réduisant drastiquement les oublis et les appels entrants.",
    challenges: [
      "Respecter les contraintes réglementaires du secteur médical",
      "Intégrer un agenda intelligent sans perturber les habitudes de travail",
      "Automatiser les rappels patients sans perte de la relation humaine",
      "Former la praticienne et sa secrétaire à l'outil"
    ],
    results: [
      "Agenda en ligne avec créneaux configurables par type de soin",
      "Rappels SMS automatiques 24h avant chaque rendez-vous",
      "-70% de rendez-vous non honorés (no-show)",
      "Gain de 2h par jour sur la gestion administrative",
      "Formulaire de pré-consultation numérique pour les nouveaux patients"
    ]
  },
  {
    id: 'atelier-martin',
    title: "Atelier Martin",
    category: "Site Vitrine & E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    description: "Refonte complète pour un artisan ébéniste local. Catalogue interactif et prise de RDV automatisée.",
    tags: ["Next.js", "Design UI/UX", "Automatisation", "Catalogue"],
    client: "Jean Martin",
    year: "2024",
    date: "2024-12",
    fullDescription: "L'Atelier Martin est tenu par Jean Martin, artisan ébéniste passionné dont le savoir-faire exceptionnel méritait une vitrine numérique à la hauteur. La refonte complète du site a mis en valeur ses créations uniques et automatisé la prise de rendez-vous.",
    challenges: [
      "Mettre en valeur des œuvres d'artisanat de haute qualité",
      "Permettre la personnalisation des commandes en ligne",
      "Gestion des demandes de devis volumineuses"
    ],
    results: [
      "Catalogue interactif avec filtres par matière et style",
      "Système de prise de RDV en ligne intégré",
      "Galerie photo professionnelle optimisée",
      "Doublement des demandes de devis en 3 mois"
    ]
  },
  {
    id: 'auto-ecole-centrale',
    title: "Auto-École Centrale",
    category: "SEO Local & Calendrier en Ligne",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
    description: "Refonte SEO locale et déploiement d'un calendrier de réservation en ligne pour leçons de conduite et examens du permis.",
    tags: ["SEO Local", "Calendrier", "Google Ads", "Site Vitrine"],
    client: "Marc Fontaine",
    year: "2024",
    date: "2024-11",
    fullDescription: "L'Auto-École Centrale de Marc Fontaine perdait des élèves face à la concurrence de grandes franchises en ligne. Nous avons renforcé sa visibilité locale par une stratégie SEO ciblée et déployé un calendrier de réservation directement depuis le site, sans intermédiaire.",
    challenges: [
      "Rivaliser avec les plateformes nationales sur les requêtes locales",
      "Simplifier la réservation des leçons sans appel téléphonique",
      "Afficher en temps réel la disponibilité des moniteurs",
      "Budget Google Ads limité à optimiser au maximum"
    ],
    results: [
      "Position #1 sur 'auto-école [ville]' en 3 mois",
      "Calendrier en ligne avec synchronisation agenda moniteurs",
      "+35% de nouvelles inscriptions par rapport à l'année précédente",
      "Coût par acquisition divisé par 2,4 vs. plateformes nationales",
      "Fiche Google Business optimisée (4,8★ — 120 avis)"
    ]
  },
  {
    id: 'ecrin-gastronomique',
    title: "L'Écrin Gastronomique",
    category: "Site & Réservations + Menu QR",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    description: "Site premium pour un restaurant gastronomique : réservations en ligne, menus QR code dynamiques et carte des vins interactive.",
    tags: ["Restauration", "Réservations", "QR Code", "Design Premium"],
    client: "Chef Sophie Aubert",
    year: "2024",
    date: "2024-10",
    fullDescription: "L'Écrin Gastronomique est le restaurant de la Chef Sophie Aubert, étoilée Michelin. L'établissement avait besoin d'un écrin digital à la hauteur de son positionnement haut de gamme : réservation en ligne fluide, menus QR dynamiques mis à jour en temps réel, et carte des vins interactive.",
    challenges: [
      "Refléter l'excellence gastronomique de l'établissement sur le web",
      "Permettre la mise à jour des menus sans intervention technique",
      "Gérer les réservations avec gestion des allées et venues",
      "Multilinguisme pour la clientèle internationale"
    ],
    results: [
      "Site bilingue (FR/EN) avec identité visuelle haut de gamme",
      "Système de réservation en ligne avec gestion des tables",
      "Menus QR dynamiques modifiables en 2 minutes depuis le back-office",
      "Réduction de 40% des appels pour réservation",
      "Taux de remplissage passé de 72% à 91% en soirée"
    ]
  },
  {
    id: 'proplomb-services',
    title: "ProPlomb Services",
    category: "Site Vitrine & Devis Automatisé",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=800",
    description: "Site vitrine avec configurateur de devis automatisé pour un plombier-chauffagiste. Réponse en moins de 24h garantie.",
    tags: ["Site Vitrine", "Devis Auto", "SEO Local", "Artisan"],
    client: "Antoine Massé",
    year: "2024",
    date: "2024-09",
    fullDescription: "ProPlomb Services d'Antoine Massé recevait des demandes de devis informelles par téléphone, difficiles à quantifier et source de nombreux déplacements inutiles. Nous avons automatisé la qualification des demandes via un configurateur intelligent, permettant à Antoine de répondre en moins de 24h.",
    challenges: [
      "Qualifier les demandes clients avant tout déplacement",
      "Automatiser l'envoi de devis types selon la nature de l'intervention",
      "Améliorer la visibilité locale face aux grandes plateformes",
      "Interface simple pour un artisan non connecté au digital"
    ],
    results: [
      "Configurateur de devis : 8 types d'interventions couvertes",
      "Devis type envoyé automatiquement par email en moins de 5 minutes",
      "-60% de déplacements de diagnostic inutiles",
      "+80% de demandes de contact en ligne vs. téléphone",
      "Position Top 3 sur Google Maps pour la zone d'intervention"
    ]
  },
  {
    id: 'bati-loire',
    title: "Bâti-Loire Connect",
    category: "Application Métier / Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Plateforme de gestion de chantiers pour une PME du BTP. Suivi des équipes, stocks et facturation en temps réel.",
    tags: ["React", "Dashboard", "SaaS", "BTP"],
    client: "Bâti-Loire PME",
    year: "2024",
    date: "2024-08",
    fullDescription: "Bâti-Loire avait besoin d'un outil pour centraliser la gestion de ses chantiers, ses équipes et sa facturation. Nous avons développé un dashboard métier sur mesure, accessible depuis le bureau comme sur le terrain.",
    challenges: [
      "Centraliser des données éparpillées dans Excel et emails",
      "Accessible et utilisable sur mobile depuis les chantiers",
      "Intégration avec les outils comptables existants"
    ],
    results: [
      "Tableau de bord temps réel de l'avancement des chantiers",
      "Gestion des équipes et des plannings intégrée",
      "Génération automatique de factures et devis",
      "Gain de 10h/semaine sur l'administration"
    ]
  },
  {
    id: 'studio-lumiere',
    title: "Studio Lumière Photo",
    category: "Portfolio & Galerie E-shop",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    description: "Portfolio photographe avec galerie interactive, vente de tirages en ligne et système de réservation de séances.",
    tags: ["Portfolio", "E-commerce", "Photographie", "Design"],
    client: "Amélie Chassagne",
    year: "2024",
    date: "2024-07",
    fullDescription: "Amélie Chassagne, photographe professionnelle spécialisée en portrait et mariage, souhaitait centraliser son portfolio, vendre ses tirages d'art en ligne et permettre la réservation de séances directement depuis son site.",
    challenges: [
      "Mettre en valeur des photos haute résolution sans ralentir le site",
      "Gérer un catalogue e-commerce de tirages avec variantes (format, papier)",
      "Synchroniser le calendrier de réservation avec son agenda Google",
      "Design épuré et premium adapté à son positionnement artistique"
    ],
    results: [
      "Portfolio galerie avec chargement progressif des images HD",
      "Boutique de tirages d'art : 3 formats, 2 types de papier",
      "Réservation de séances synchronisée avec Google Calendar",
      "15 tirages vendus dès le premier mois sans publicité",
      "Augmentation des demandes de mariage de +40%"
    ]
  },
  {
    id: 'loire-valley',
    title: "Loire Valley Taste",
    category: "Marketplace Locale",
    image: "https://images.unsplash.com/photo-1472851294608-4155f2118c03?auto=format&fit=crop&q=80&w=800",
    description: "Marketplace regroupant les producteurs de Châteauneuf. Système de Click & Collect intelligent.",
    tags: ["E-commerce", "Stripe", "Mobile First", "Marketplace"],
    client: "Collectif Producteurs",
    year: "2024",
    date: "2024-06",
    fullDescription: "Un collectif de producteurs locaux de la région de Châteauneuf-sur-Loire souhaitait créer une plateforme commune pour vendre leurs produits en ligne avec système de Click & Collect.",
    challenges: [
      "Gérer plusieurs vendeurs avec des stocks différents",
      "Système de paiement multi-vendeurs (Stripe Connect)",
      "Logistique des créneaux de retrait"
    ],
    results: [
      "Marketplace avec 12 producteurs locaux",
      "Système Click & Collect avec créneaux réservables",
      "Paiement sécurisé et répartition automatique des revenus",
      "+200 commandes dès le premier mois de lancement"
    ]
  },
  {
    id: 'immo-loiret-prestige',
    title: "Immo Loiret Prestige",
    category: "Site Vitrine & Listings Immobiliers",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    description: "Refonte du site d'une agence immobilière haut de gamme avec listings dynamiques, visite virtuelle et alertes par email automatisées.",
    tags: ["Immobilier", "Listings", "Visite Virtuelle", "Automatisation"],
    client: "Sylvain Roux",
    year: "2024",
    date: "2024-05",
    fullDescription: "Immo Loiret Prestige de Sylvain Roux se positionnait sur le segment haut de gamme du marché immobilier du Loiret. Son site vieillissant ne reflétait plus son positionnement. Nous avons créé une vitrine moderne avec gestion des biens dynamique et alertes email automatisées pour les acheteurs.",
    challenges: [
      "Afficher des biens haute valeur avec la qualité visuelle qu'ils méritent",
      "Permettre l'ajout et la mise à jour autonome des annonces",
      "Intégrer des visites virtuelles 360° pour les biens premium",
      "Générer des alertes email pour les acheteurs selon leurs critères"
    ],
    results: [
      "Site premium avec galeries immersives par bien",
      "Back-office simplifié pour la gestion autonome des annonces",
      "Intégration visites virtuelles 360° (3 biens au lancement)",
      "Système d'alertes email automatiques pour 180 acheteurs inscrits",
      "+3 mandats exclusifs signés dans le mois suivant le lancement"
    ]
  },
  {
    id: 'verdure-paysages',
    title: "Verdure & Paysages",
    category: "Site Vitrine & Galerie Réalisations",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800",
    description: "Site vitrine pour un paysagiste avec galerie avant/après, demande de devis en ligne et référencement local renforcé.",
    tags: ["Site Vitrine", "Galerie", "SEO Local", "Paysagiste"],
    client: "Laurent Vidal",
    year: "2024",
    date: "2024-03",
    fullDescription: "Laurent Vidal, paysagiste indépendant, réalisait un travail remarquable mais manquait d'une vitrine pour le montrer. Nous avons construit un site mettant en scène ses réalisations avec des photos avant/après spectaculaires, couplé à un formulaire de devis intelligent.",
    challenges: [
      "Valoriser le travail de terrain avec des photos professionnelles",
      "Segmenter les réalisations par type (jardin, terrasse, potager, clôtures)",
      "Qualifier les demandes de devis pour éviter les déplacements inutiles",
      "Référencement local sur une zone géographique étendue"
    ],
    results: [
      "Galerie avant/après par catégorie de prestation",
      "Formulaire de devis avec estimation de surface et type de projet",
      "Position Top 5 sur 'paysagiste [département]' en 2 mois",
      "+55% de demandes de devis qualifiées par rapport à l'année précédente",
      "Signature de 2 contrats d'entretien annuel via le site"
    ]
  },
  {
    id: 'coiffure-et-sens',
    title: "Coiffure & Sens",
    category: "Réservation en Ligne & Fidélisation",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
    description: "Système de réservation en ligne pour un salon de coiffure avec programme de fidélité digital et rappels SMS automatiques.",
    tags: ["Coiffure", "Réservation", "Fidélisation", "SMS Auto"],
    client: "Nadège Blanchard",
    year: "2023",
    date: "2023-11",
    fullDescription: "Nadège Blanchard gérait les réservations de son salon par téléphone, ce qui monopolisait son temps lors des coiffures. Nous avons déployé un système de réservation en ligne intégrant un programme de fidélité digital et des rappels SMS automatiques pour réduire les absences.",
    challenges: [
      "Permettre la réservation en ligne sans appel téléphonique",
      "Gérer plusieurs prestataires (Nadège + 2 employées) avec des plannings distincts",
      "Fidéliser une clientèle existante avec des récompenses digitales",
      "Limiter les no-shows qui représentaient 15% des RDV"
    ],
    results: [
      "Agenda en ligne multi-prestataires avec durées par prestation",
      "Programme de fidélité digital : 10 visites = 1 soin offert",
      "Rappels SMS 48h et 2h avant chaque RDV",
      "No-shows réduits de 15% à 3% en 2 mois",
      "+22% de réservations en dehors des heures d'ouverture (via le site)"
    ]
  },
  {
    id: 'scenes-orleans',
    title: "Scènes d'Orléans",
    category: "Site Événementiel & Billetterie",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800",
    description: "Site événementiel pour une association culturelle avec billetterie en ligne, agenda des spectacles et newsletter automatisée.",
    tags: ["Événementiel", "Billetterie", "Culture", "Newsletter"],
    client: "Association Culturelle",
    year: "2023",
    date: "2023-09",
    fullDescription: "Scènes d'Orléans est une association culturelle organisant une quarantaine de spectacles par an. Elle dépendait de canaux de vente physiques et de réseaux sociaux pour communiquer. Nous avons créé un site événementiel complet avec billetterie intégrée et newsletter automatisée.",
    challenges: [
      "Centraliser l'agenda des spectacles sur une plateforme propre",
      "Intégrer la billetterie en ligne avec paiement sécurisé",
      "Automatiser la communication autour des événements",
      "Budget associatif contraint"
    ],
    results: [
      "Site événementiel avec agenda interactif et pages spectacle dédiées",
      "Billetterie en ligne : paiement CB sécurisé, envoi e-ticket automatique",
      "Newsletter automatisée : 1 email par semaine avec les événements à venir",
      "35% des billets vendus en ligne dès la première saison",
      "Base email passée de 400 à 1 200 abonnés en 6 mois"
    ]
  }
];

interface ProjectCardProps {
  project: ProjectData;
  onClick: (project: ProjectData) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
  <div
    className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 shadow-xl cursor-pointer flex-shrink-0 snap-start"
    style={{
      width: 'min(85vw, 300px)',
      minWidth: 'min(85vw, 300px)',
      background: '#0D1B2A',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
    }}
    onClick={() => onClick(project)}
  >
    <div className="h-48 overflow-hidden relative">
      <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10"></div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
    </div>

    <div className="p-6 relative">
      <div className="absolute top-0 right-6 -translate-y-1/2 btn-metallic-gold text-charcoal p-2.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-1/2 transition-all duration-300 shadow-lg z-20">
        <ExternalLink size={16} />
      </div>

      <div className="text-xs font-medium text-metallic-gold-inline mb-1 uppercase tracking-wider">
        {project.category}
      </div>
      <h3 className="font-serif text-lg font-bold mb-2 text-metallic-silver group-hover:text-white transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

interface ProjectsProps {
  onOpenProject?: (project: ProjectData) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProject }) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  const scrollLeft = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.offsetWidth * 0.8, behavior: 'smooth' });
  }, []);

  const scrollRight = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: el.offsetWidth * 0.8, behavior: 'smooth' });
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      const el = scrollRef.current;
      if (el) el.scrollBy({ left: delta > 0 ? 260 : -260, behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute -right-20 top-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête */}
        <div className="text-center md:text-left mb-12">
          <span className="text-metallic-gold-inline font-medium tracking-widest uppercase text-sm mb-2 block">
            Nos Réalisations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-metallic-silver">
            L'Excellence en{' '}
            <span className="text-metallic-gold">Action</span>
          </h2>
        </div>

        {/* Carrousel scroll-based */}
        <div className="relative">
          {/* Flèche gauche */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg"
              aria-label="Défiler à gauche"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Flèche droite */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg"
              aria-label="Défiler à droite"
            >
              <ChevronRight size={22} />
            </button>
          )}

          {/* Conteneur scroll natif */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory px-4 sm:px-0 justify-start"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            } as React.CSSProperties}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {[...projectsData]
              .sort((a, b) => b.date.localeCompare(a.date))
              .slice(0, 10)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={(p) => onOpenProject?.(p)}
                />
              ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-3 italic md:hidden">
          Glissez pour voir tous les projets
        </p>
      </div>
    </section>
  );
};
