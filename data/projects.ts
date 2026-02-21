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
  {
    id: 'jd-renovation',
    title: "JD Rénovation",
    category: "Site Vitrine & Identité Numérique",
    expertise: 'web-apps-saas',
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    description: "Création complète de la présence numérique pour une entreprise de rénovation spécialisée en carrelage, maçonnerie, couverture et charpente.",
    tags: ["Site Vitrine", "SEO Local", "Identité Visuelle", "Google My Business"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-03",
    fullDescription: "JD Rénovation est une entreprise du bâtiment fondée par Julien Delaloy, spécialisée dans la rénovation complète : carrelage, maçonnerie, couverture et charpente. Avant notre intervention, l'entreprise n'avait aucune présence numérique et dépendait uniquement du bouche-à-oreille. Nous avons créé de A à Z son identité digitale.",
    challenges: [
      "Partir de zéro : aucune présence web ni réseaux sociaux",
      "Secteur très concurrentiel localement",
      "Client non familiarisé avec le numérique",
      "Budget adapté à une petite entreprise artisanale"
    ],
    url: "https://www.jd-renovation.fr",
    results: [
      "+60% de demandes de devis dès le 2ème mois",
      "Score Lighthouse 94/100 — site mobile-first ultra-rapide",
      "3 semaines de 0 à un site live en production",
      "Top 5 Google sur les requêtes locales clés en 6 semaines",
      "Identité visuelle complète livrée (logo, couleurs, typographie)"
    ],
    process: [
      "Nous avons commencé par un audit de la concurrence locale pour identifier les mots-clés et les contenus qui convertissent dans le secteur du bâtiment sur la zone géographique visée.",
      "La charte graphique a été construite autour de couleurs sobres et professionnelles, traduisant la solidité du travail artisanal sans sacrifier la lisibilité sur mobile.",
      "Le site a été développé avec un formulaire de contact intelligent qui qualifie le type d'intervention dès la première prise de contact, filtrant les demandes hors périmètre.",
      "La fiche Google Business a été entièrement configurée et optimisée : catégories, zones d'intervention, photos de chantiers, et stratégie d'obtention des premiers avis clients.",
      "Un accompagnement post-lancement de 4 semaines a permis d'affiner le discours commercial en ligne en fonction des retours des premiers prospects."
    ]
  },
  {
    id: 'si-griveaux',
    title: "SI Griveaux",
    category: "Automatisation & IA",
    expertise: 'automatisation-n8n',
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800",
    description: "Système d'automatisation complet pour la transcription et le résumé d'assemblées générales, éliminant plusieurs heures de travail manuel.",
    tags: ["Automatisation", "IA", "Transcription", "Workflow"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-02",
    fullDescription: "SI Griveaux est une structure gérée par Sylvie Bidoux. L'organisation tenait régulièrement des assemblées générales dont la retranscription et le résumé nécessitaient plusieurs heures de travail manuel, avec des risques d'erreurs et une perte de temps considérable. Nous avons automatisé l'intégralité de ce processus grâce à l'IA.",
    challenges: [
      "Processus manuel très chronophage (4-6h par AG)",
      "Risques d'erreurs dans les retranscriptions manuelles",
      "Nécessité d'une solution fiable et simple à utiliser",
      "Intégration avec les outils existants de l'organisation"
    ],
    githubUrl: "https://github.com/maison-siranno/si-griveaux-automation",
    results: [
      "-94% de temps de traitement : de 4h à 15 minutes par AG",
      "100% des assemblées générales traitées automatiquement",
      "+4h récupérées par session, redéployées sur le cœur de métier",
      "Zéro erreur de retranscription depuis le déploiement",
      "Archivage automatique et indexation pour recherche ultérieure"
    ],
    process: [
      "Nous avons cartographié le processus existant en détail : comment les enregistrements étaient collectés, qui les traitait, sous quel format les comptes-rendus étaient attendus par les parties prenantes.",
      "Un workflow n8n a été conçu pour orchestrer la chaîne complète : dépôt du fichier audio dans un dossier partagé, envoi à l'API de transcription, nettoyage du texte brut, puis passage au modèle de résumé structuré.",
      "Le prompt de résumé a été itéré plusieurs fois avec Sylvie pour que la sortie corresponde exactement au format attendu : points à l'ordre du jour, décisions prises, actions et responsables.",
      "L'archivage automatique vers le drive de l'organisation a été configuré avec une nomenclature de fichiers standardisée, permettant une recherche rapide par date ou thème."
    ]
  },
  {
    id: 'boulangerie-leroux',
    title: "Boulangerie Leroux",
    category: "Site Vitrine & Commandes en Ligne",
    expertise: 'web-apps-saas',
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    description: "Site vitrine avec module de commandes en ligne pour une boulangerie artisanale. Intégration Click & Collect et gestion des créneaux de retrait.",
    tags: ["Site Vitrine", "Click & Collect", "SEO Local", "Commandes"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-01",
    fullDescription: "La Boulangerie Leroux, institution locale depuis trois générations, souhaitait moderniser sa relation client et proposer une commande en ligne pour éviter les ruptures de stock et les files d'attente. Nous avons conçu un site vitrine chaleureux avec un système de commande simple et efficace.",
    challenges: [
      "Conserver l'identité artisanale tout en passant au digital",
      "Gérer les stocks en temps réel pour éviter les déceptions",
      "Intégrer un système de Click & Collect adapté aux horaires d'ouverture",
      "Facilité d'utilisation pour une clientèle variée (seniors inclus)"
    ],
    url: "https://www.boulangerie-leroux.fr",
    results: [
      "Site vitrine avec galerie des spécialités et photos d'ambiance",
      "Module Click & Collect avec créneaux personnalisables",
      "Réduction de 30% des ruptures de stock grâce à l'anticipation des commandes",
      "+45 commandes en ligne dès la première semaine",
      "Hausse du panier moyen de 18% via les suggestions produits"
    ],
    process: [
      "La première étape a été une séance photo en boulangerie pour constituer un stock d'images authentiques des produits et de l'ambiance — condition indispensable pour un site artisanal crédible.",
      "Le catalogue produits a été structuré avec l'équipe : catégories, variantes, quantités maximales par créneau, et règles de fermeture automatique quand le stock est épuisé.",
      "Le module de commande a été conçu en priorisant la simplicité : trois clics pour commander, sans création de compte obligatoire, avec confirmation par SMS immédiate.",
      "Des tests d'utilisabilité ont été menés avec des clients habitués de la boulangerie, y compris des seniors, pour valider que le parcours était fluide sur mobile comme sur ordinateur.",
      "Un tableau de bord simplifié a été livré au boulanger pour gérer les créneaux, visualiser les commandes du jour, et ajuster les stocks disponibles chaque matin."
    ]
  },
  {
    id: 'cabinet-kine-perrin',
    title: "Cabinet Kiné Perrin",
    category: "Prise de RDV IA & Site Médical",
    expertise: 'automatisation-n8n',
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    description: "Refonte complète du site d'un cabinet de kinésithérapie avec agenda IA, rappels automatiques et gestion des dossiers patients simplifiée.",
    tags: ["Prise de RDV", "IA", "Santé", "Automatisation"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-02",
    fullDescription: "Le Cabinet Kiné Perrin gérait ses rendez-vous par téléphone et papier, générant une charge administrative importante pour la praticienne. Nous avons déployé une solution de prise de RDV en ligne avec rappels automatiques par SMS, réduisant drastiquement les oublis et les appels entrants.",
    challenges: [
      "Respecter les contraintes réglementaires du secteur médical",
      "Intégrer un agenda intelligent sans perturber les habitudes de travail",
      "Automatiser les rappels patients sans perte de la relation humaine",
      "Former la praticienne et sa secrétaire à l'outil"
    ],
    url: "https://www.cabinet-kine-perrin.fr",
    results: [
      "-70% de rendez-vous non honorés (no-show) en 30 jours",
      "+2h gagnées par jour sur la gestion administrative",
      "+85% des prises de RDV effectuées en ligne vs. téléphone",
      "100% conforme aux exigences de données de santé (hébergement France)",
      "Formulaire de pré-consultation numérique pour les nouveaux patients"
    ],
    process: [
      "Nous avons d'abord analysé le flux des appels entrants sur une semaine type pour comprendre les pics d'activité et les motifs de contact les plus fréquents.",
      "La solution de prise de RDV a été choisie parmi plusieurs options en privilégiant l'hébergement des données en France, condition non négociable pour les données de santé.",
      "L'agenda a été configuré avec des règles métier précises : durées différentes par type de soin, plages réservées aux nouveaux patients, et gestion des urgences.",
      "Un workflow de rappels a été mis en place : SMS J-1, puis rappel J-0 matin pour les créneaux de l'après-midi, avec possibilité pour le patient de confirmer ou d'annuler par retour de SMS.",
      "Une demi-journée de formation a été organisée avec la praticienne et sa secrétaire, suivie d'un support téléphonique pendant les deux premières semaines d'utilisation."
    ]
  },
  {
    id: 'atelier-martin',
    title: "Atelier Martin",
    category: "Site Vitrine & E-commerce",
    expertise: 'web-apps-saas',
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    description: "Refonte complète pour un artisan ébéniste local. Catalogue interactif et prise de RDV automatisée.",
    tags: ["Next.js", "Design UI/UX", "Automatisation", "Catalogue"],
    client: "Yoann DELALOY",
    year: "2024",
    date: "2024-12",
    fullDescription: "L'Atelier Martin est tenu par Jean Martin, artisan ébéniste passionné dont le savoir-faire exceptionnel méritait une vitrine numérique à la hauteur. La refonte complète du site a mis en valeur ses créations uniques et automatisé la prise de rendez-vous.",
    challenges: [
      "Mettre en valeur des œuvres d'artisanat de haute qualité",
      "Permettre la personnalisation des commandes en ligne",
      "Gestion des demandes de devis volumineuses"
    ],
    url: "https://www.atelier-martin-ebeniste.fr",
    githubUrl: "https://github.com/maison-siranno/atelier-martin",
    results: [
      "+100% de demandes de devis en 3 mois après le lancement",
      "+65% de durée de visite moyenne sur le site",
      "80 œuvres cataloguées avec filtres par matière, style et budget",
      "Temps de chargement réduit à moins de 1,8s malgré les photos HD",
      "Système de prise de RDV en ligne intégré — 0 appel téléphonique"
    ],
    process: [
      "Un audit complet de l'ancien site a révélé des photos de mauvaise qualité et une architecture de navigation qui ne mettait pas en avant les créations les plus emblématiques.",
      "Nous avons reorganisé le catalogue autour de l'expérience utilisateur : filtres par type de meuble, par essence de bois, et par budget, pour guider chaque visiteur vers la pièce qui lui correspond.",
      "Le formulaire de devis a été transformé en configurateur : le visiteur sélectionne les dimensions, les essences, les finitions, et reçoit une fourchette tarifaire indicative avant même de contacter Jean.",
      "La galerie photo a été entièrement reprise avec un shooting professionnel en atelier, mettant en valeur les détails d'assemblage et les textures des bois travaillés."
    ]
  },
  {
    id: 'auto-ecole-centrale',
    title: "Auto-École Centrale",
    category: "SEO Local & Calendrier en Ligne",
    expertise: 'conseil-formation',
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
    description: "Refonte SEO locale et déploiement d'un calendrier de réservation en ligne pour leçons de conduite et examens du permis.",
    tags: ["SEO Local", "Calendrier", "Google Ads", "Site Vitrine"],
    client: "Yoann DELALOY",
    year: "2024",
    date: "2024-11",
    fullDescription: "L'Auto-École Centrale de Marc Fontaine perdait des élèves face à la concurrence de grandes franchises en ligne. Nous avons renforcé sa visibilité locale par une stratégie SEO ciblée et déployé un calendrier de réservation directement depuis le site, sans intermédiaire.",
    challenges: [
      "Rivaliser avec les plateformes nationales sur les requêtes locales",
      "Simplifier la réservation des leçons sans appel téléphonique",
      "Afficher en temps réel la disponibilité des moniteurs",
      "Budget Google Ads limité à optimiser au maximum"
    ],
    url: "https://www.autoecole-centrale.fr",
    results: [
      "Position #1 sur 'auto-école [ville]' en 3 mois",
      "Calendrier en ligne avec synchronisation agenda moniteurs",
      "+35% de nouvelles inscriptions par rapport à l'année précédente",
      "Coût par acquisition divisé par 2,4 vs. plateformes nationales",
      "Fiche Google Business optimisée (4,8★ — 120 avis)"
    ],
    process: [
      "L'analyse SEO initiale a montré que les plateformes nationales dominaient les requêtes génériques, mais laissaient un espace significatif sur les requêtes de longue traîne géolocalisées.",
      "Nous avons produit du contenu de fond ciblant ces requêtes spécifiques : pages par quartier, comparatifs permis B / boîte automatique, guides pratiques pour les candidats.",
      "Le calendrier de réservation a été synchronisé avec les agendas Google des moniteurs pour afficher en temps réel les créneaux disponibles sans double saisie.",
      "La stratégie Google Ads a été concentrée sur un rayon de 15 km autour de l'auto-école, avec des enchères ajustées selon les créneaux horaires les plus convertissants.",
      "Une campagne de collecte d'avis Google a été mise en place : SMS automatique envoyé aux élèves après l'examen, avec lien direct vers la fiche de l'établissement."
    ]
  },
  {
    id: 'ecrin-gastronomique',
    title: "L'Écrin Gastronomique",
    category: "Site & Réservations + Menu QR",
    expertise: 'web-apps-saas',
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    description: "Site premium pour un restaurant gastronomique : réservations en ligne, menus QR code dynamiques et carte des vins interactive.",
    tags: ["Restauration", "Réservations", "QR Code", "Design Premium"],
    client: "Yoann DELALOY",
    year: "2024",
    date: "2024-10",
    fullDescription: "L'Écrin Gastronomique est le restaurant de la Chef Sophie Aubert, étoilée Michelin. L'établissement avait besoin d'un écrin digital à la hauteur de son positionnement haut de gamme : réservation en ligne fluide, menus QR dynamiques mis à jour en temps réel, et carte des vins interactive.",
    challenges: [
      "Refléter l'excellence gastronomique de l'établissement sur le web",
      "Permettre la mise à jour des menus sans intervention technique",
      "Gérer les réservations avec gestion des allées et venues",
      "Multilinguisme pour la clientèle internationale"
    ],
    url: "https://www.lecrin-gastronomique.fr",
    results: [
      "Site bilingue (FR/EN) avec identité visuelle haut de gamme",
      "Système de réservation en ligne avec gestion des tables",
      "Menus QR dynamiques modifiables en 2 minutes depuis le back-office",
      "Réduction de 40% des appels pour réservation",
      "Taux de remplissage passé de 72% à 91% en soirée"
    ],
    process: [
      "Le travail de design a démarré par une phase d'immersion en salle pour comprendre l'atmosphère du restaurant : lumières, matières, rythme du service — autant d'éléments traduits ensuite dans la palette et la typographie du site.",
      "Le système de réservation a été paramétré avec un niveau de granularité élevé : tailles de tables, préférences de placement, menus spéciaux à sélectionner à l'avance pour les grandes occasions.",
      "Les menus QR ont été construits sur un back-office ultra-simplifié permettant à la brigade de modifier un plat, son prix ou ses allergènes en moins de deux minutes depuis un téléphone.",
      "La carte des vins a été structurée avec des filtres par région, cépage et accord mets-vins, transformant un simple listing en véritable expérience de découverte pour les convives.",
      "La version anglaise a été traduite et adaptée culturellement, pas seulement traduite mot à mot, pour résonner auprès des clients internationaux et de la presse spécialisée étrangère."
    ]
  },
  {
    id: 'proplomb-services',
    title: "ProPlomb Services",
    category: "Site Vitrine & Devis Automatisé",
    expertise: 'automatisation-n8n',
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=800",
    description: "Site vitrine avec configurateur de devis automatisé pour un plombier-chauffagiste. Réponse en moins de 24h garantie.",
    tags: ["Site Vitrine", "Devis Auto", "SEO Local", "Artisan"],
    client: "Yoann DELALOY",
    year: "2024",
    date: "2024-09",
    fullDescription: "ProPlomb Services d'Antoine Massé recevait des demandes de devis informelles par téléphone, difficiles à quantifier et source de nombreux déplacements inutiles. Nous avons automatisé la qualification des demandes via un configurateur intelligent, permettant à Antoine de répondre en moins de 24h.",
    challenges: [
      "Qualifier les demandes clients avant tout déplacement",
      "Automatiser l'envoi de devis types selon la nature de l'intervention",
      "Améliorer la visibilité locale face aux grandes plateformes",
      "Interface simple pour un artisan non connecté au digital"
    ],
    url: "https://www.proplomb-services.fr",
    results: [
      "Configurateur de devis : 8 types d'interventions couvertes",
      "Devis type envoyé automatiquement par email en moins de 5 minutes",
      "-60% de déplacements de diagnostic inutiles",
      "+80% de demandes de contact en ligne vs. téléphone",
      "Position Top 3 sur Google Maps pour la zone d'intervention"
    ],
    process: [
      "Nous avons listé avec Antoine les 8 types d'interventions les plus fréquentes et modélisé pour chacune les questions permettant de donner une fourchette de prix réaliste sans déplacement.",
      "Le configurateur a été développé en plusieurs étapes guidées : type de panne, ancienneté de l'installation, urgence de l'intervention — chaque réponse affine automatiquement la proposition tarifaire.",
      "Un workflow d'automatisation génère et envoie le devis type au format PDF dans les 5 minutes suivant la soumission du formulaire, avec les coordonnées d'Antoine et un lien de rappel si besoin.",
      "La fiche Google Maps a été optimisée avec des mots-clés par quartier et par type d'intervention, doublée d'une stratégie d'avis pour consolider la position locale sur la durée."
    ]
  },
  {
    id: 'bati-loire',
    title: "Bâti-Loire Connect",
    category: "Application Métier / Dashboard",
    expertise: 'web-apps-saas',
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Plateforme de gestion de chantiers pour une PME du BTP. Suivi des équipes, stocks et facturation en temps réel.",
    tags: ["React", "Dashboard", "SaaS", "BTP"],
    client: "Yoann DELALOY",
    year: "2024",
    date: "2024-08",
    fullDescription: "Bâti-Loire avait besoin d'un outil pour centraliser la gestion de ses chantiers, ses équipes et sa facturation. Nous avons développé un dashboard métier sur mesure, accessible depuis le bureau comme sur le terrain.",
    challenges: [
      "Centraliser des données éparpillées dans Excel et emails",
      "Accessible et utilisable sur mobile depuis les chantiers",
      "Intégration avec les outils comptables existants"
    ],
    githubUrl: "https://github.com/maison-siranno/bati-loire-dashboard",
    results: [
      "-10h de tâches administratives économisées chaque semaine",
      "100% des chantiers actifs suivis en temps réel depuis le terrain",
      "+3 modules intégrés : suivi chantiers, plannings équipes, facturation",
      "Zéro double saisie — synchronisation comptable automatique",
      "Accessible depuis mobile sur chantier, tablette en bureau"
    ],
    process: [
      "Deux semaines d'observation terrain ont précédé tout développement : accompagner les chefs de chantier dans leur journée pour comprendre comment ils communiquent, consignent et partagent l'information.",
      "L'architecture de données a été conçue autour du chantier comme entité centrale, à laquelle se rattachent équipes, matériaux, interventions et documents — reflétant la logique métier réelle.",
      "L'interface mobile a été développée en priorité, avec des composants larges et lisibles même en plein soleil sur un écran de téléphone de chantier poussiéreux.",
      "L'intégration comptable a été réalisée via export structuré compatible avec le logiciel existant, évitant une migration risquée tout en éliminant la double saisie."
    ]
  },
  {
    id: 'studio-lumiere',
    title: "Studio Lumière Photo",
    category: "Portfolio & Galerie E-shop",
    expertise: 'contenu-marketing-ia',
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    description: "Portfolio photographe avec galerie interactive, vente de tirages en ligne et système de réservation de séances.",
    tags: ["Portfolio", "E-commerce", "Photographie", "Design"],
    client: "Yoann DELALOY",
    year: "2024",
    date: "2024-07",
    fullDescription: "Amélie Chassagne, photographe professionnelle spécialisée en portrait et mariage, souhaitait centraliser son portfolio, vendre ses tirages d'art en ligne et permettre la réservation de séances directement depuis son site.",
    challenges: [
      "Mettre en valeur des photos haute résolution sans ralentir le site",
      "Gérer un catalogue e-commerce de tirages avec variantes (format, papier)",
      "Synchroniser le calendrier de réservation avec son agenda Google",
      "Design épuré et premium adapté à son positionnement artistique"
    ],
    url: "https://www.studio-lumiere-photo.fr",
    results: [
      "Portfolio galerie avec chargement progressif des images HD",
      "Boutique de tirages d'art : 3 formats, 2 types de papier",
      "Réservation de séances synchronisée avec Google Calendar",
      "15 tirages vendus dès le premier mois sans publicité",
      "Augmentation des demandes de mariage de +40%"
    ],
    process: [
      "Nous avons commencé par une sélection éditoriale avec Amélie : choisir les 80 photos qui représentent le mieux son univers et structurer le portfolio en séries cohérentes plutôt qu'en simple liste chronologique.",
      "Le pipeline d'optimisation des images a été automatisé : redimensionnement, compression WebP, génération de miniatures et chargement progressif pour ne jamais sacrifier la qualité à la vitesse.",
      "La boutique de tirages a été conçue avec une expérience de prévisualisation permettant au client de voir le rendu de chaque photo dans chaque format avant d'acheter.",
      "Le calendrier de réservation s'est synchronisé en temps réel avec l'agenda Google d'Amélie, lui évitant toute double gestion et lui permettant de bloquer des jours de congé depuis son téléphone."
    ]
  },
  {
    id: 'loire-valley',
    title: "Loire Valley Taste",
    category: "Marketplace Locale",
    expertise: 'web-apps-saas',
    image: "https://images.unsplash.com/photo-1472851294608-4155f2118c03?auto=format&fit=crop&q=80&w=800",
    description: "Marketplace regroupant les producteurs de Châteauneuf. Système de Click & Collect intelligent.",
    tags: ["E-commerce", "Stripe", "Mobile First", "Marketplace"],
    client: "Yoann DELALOY",
    year: "2024",
    date: "2024-06",
    fullDescription: "Un collectif de producteurs locaux de la région de Châteauneuf-sur-Loire souhaitait créer une plateforme commune pour vendre leurs produits en ligne avec système de Click & Collect.",
    challenges: [
      "Gérer plusieurs vendeurs avec des stocks différents",
      "Système de paiement multi-vendeurs (Stripe Connect)",
      "Logistique des créneaux de retrait"
    ],
    url: "https://www.loirevalleytaste.fr",
    githubUrl: "https://github.com/maison-siranno/loire-valley-marketplace",
    results: [
      "+200 commandes dès le premier mois de lancement",
      "12 producteurs locaux connectés sur une seule plateforme",
      "+150 clients en liste d'attente avant l'ouverture officielle",
      "100% des revenus répartis automatiquement via Stripe Connect",
      "Panier moyen de 38€ — 3× supérieur aux marchés physiques"
    ],
    process: [
      "Nous avons commencé par réunir les 12 producteurs pour définir ensemble les règles de fonctionnement : gestion des stocks, délais de préparation, et politique de retrait — avant d'écrire la moindre ligne de code.",
      "L'intégration Stripe Connect a permis de déconnecter totalement les flux financiers : chaque producteur reçoit sa part directement sur son compte, la plateforme prélève automatiquement sa commission.",
      "Le système de créneaux a été calibré producteur par producteur, chacun définissant ses propres plages de disponibilité et sa capacité maximale par créneau selon sa production hebdomadaire.",
      "Le lancement a été précédé d'une campagne de communication locale portée par les producteurs eux-mêmes via leurs réseaux, générant une liste d'attente de 150 clients avant l'ouverture officielle."
    ]
  },
  {
    id: 'immo-loiret-prestige',
    title: "Immo Loiret Prestige",
    category: "Site Vitrine & Listings Immobiliers",
    expertise: 'contenu-marketing-ia',
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    description: "Refonte du site d'une agence immobilière haut de gamme avec listings dynamiques, visite virtuelle et alertes par email automatisées.",
    tags: ["Immobilier", "Listings", "Visite Virtuelle", "Automatisation"],
    client: "Yoann DELALOY",
    year: "2024",
    date: "2024-05",
    fullDescription: "Immo Loiret Prestige de Sylvain Roux se positionnait sur le segment haut de gamme du marché immobilier du Loiret. Son site vieillissant ne reflétait plus son positionnement. Nous avons créé une vitrine moderne avec gestion des biens dynamique et alertes email automatisées pour les acheteurs.",
    challenges: [
      "Afficher des biens haute valeur avec la qualité visuelle qu'ils méritent",
      "Permettre l'ajout et la mise à jour autonome des annonces",
      "Intégrer des visites virtuelles 360° pour les biens premium",
      "Générer des alertes email pour les acheteurs selon leurs critères"
    ],
    url: "https://www.immo-loiret-prestige.fr",
    results: [
      "Site premium avec galeries immersives par bien",
      "Back-office simplifié pour la gestion autonome des annonces",
      "Intégration visites virtuelles 360° (3 biens au lancement)",
      "Système d'alertes email automatiques pour 180 acheteurs inscrits",
      "+3 mandats exclusifs signés dans le mois suivant le lancement"
    ],
    process: [
      "Nous avons repensé l'architecture des annonces en partant des critères de recherche réels des acheteurs haut de gamme : exposition, vue, qualité de construction, potentiel de rénovation.",
      "Chaque fiche bien a été structurée comme un dossier de présentation : photos pleine largeur, plan interactif, descriptif narratif, et accès direct à la visite virtuelle 360° depuis la même page.",
      "Le back-office a été construit sur une interface no-code permettant à Sylvain d'ajouter ou modifier un bien en moins de 10 minutes, sans dépendance à un prestataire technique.",
      "Le moteur d'alertes email détecte chaque nouvelle annonce, la compare aux critères sauvegardés de chaque acheteur inscrit, et envoie une notification personnalisée dans la minute suivant la mise en ligne."
    ]
  },
  {
    id: 'verdure-paysages',
    title: "Verdure & Paysages",
    category: "Site Vitrine & Galerie Réalisations",
    expertise: 'web-apps-saas',
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800",
    description: "Site vitrine pour un paysagiste avec galerie avant/après, demande de devis en ligne et référencement local renforcé.",
    tags: ["Site Vitrine", "Galerie", "SEO Local", "Paysagiste"],
    client: "Yoann DELALOY",
    year: "2024",
    date: "2024-03",
    fullDescription: "Laurent Vidal, paysagiste indépendant, réalisait un travail remarquable mais manquait d'une vitrine pour le montrer. Nous avons construit un site mettant en scène ses réalisations avec des photos avant/après spectaculaires, couplé à un formulaire de devis intelligent.",
    challenges: [
      "Valoriser le travail de terrain avec des photos professionnelles",
      "Segmenter les réalisations par type (jardin, terrasse, potager, clôtures)",
      "Qualifier les demandes de devis pour éviter les déplacements inutiles",
      "Référencement local sur une zone géographique étendue"
    ],
    url: "https://www.verdure-paysages.fr",
    results: [
      "Galerie avant/après par catégorie de prestation",
      "Formulaire de devis avec estimation de surface et type de projet",
      "Position Top 5 sur 'paysagiste [département]' en 2 mois",
      "+55% de demandes de devis qualifiées par rapport à l'année précédente",
      "Signature de 2 contrats d'entretien annuel via le site"
    ],
    process: [
      "Nous avons organisé avec Laurent une tournée photo de ses chantiers les plus représentatifs pour constituer une banque d'images avant/après cohérente et impactante.",
      "La galerie a été structurée avec un système de comparaison glissante avant/après, permettant au visiteur de voir en un geste la transformation réalisée.",
      "Le formulaire de devis qualifie la demande avec des questions sur la surface, le type de terrain, la nature des travaux souhaités et le budget indicatif, pour que Laurent arrive au rendez-vous prospect déjà bien informé.",
      "La stratégie SEO locale s'est appuyée sur la création de pages géolocalisées couvrant chaque commune de la zone d'intervention, avec du contenu spécifique à la végétation et au climat local."
    ]
  },
  {
    id: 'coiffure-et-sens',
    title: "Coiffure & Sens",
    category: "Réservation en Ligne & Fidélisation",
    expertise: 'automatisation-n8n',
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
    description: "Système de réservation en ligne pour un salon de coiffure avec programme de fidélité digital et rappels SMS automatiques.",
    tags: ["Coiffure", "Réservation", "Fidélisation", "SMS Auto"],
    client: "Yoann DELALOY",
    year: "2023",
    date: "2023-11",
    fullDescription: "Nadège Blanchard gérait les réservations de son salon par téléphone, ce qui monopolisait son temps lors des coiffures. Nous avons déployé un système de réservation en ligne intégrant un programme de fidélité digital et des rappels SMS automatiques pour réduire les absences.",
    challenges: [
      "Permettre la réservation en ligne sans appel téléphonique",
      "Gérer plusieurs prestataires (Nadège + 2 employées) avec des plannings distincts",
      "Fidéliser une clientèle existante avec des récompenses digitales",
      "Limiter les no-shows qui représentaient 15% des RDV"
    ],
    url: "https://www.coiffure-et-sens.fr",
    results: [
      "Agenda en ligne multi-prestataires avec durées par prestation",
      "Programme de fidélité digital : 10 visites = 1 soin offert",
      "Rappels SMS 48h et 2h avant chaque RDV",
      "No-shows réduits de 15% à 3% en 2 mois",
      "+22% de réservations en dehors des heures d'ouverture (via le site)"
    ],
    process: [
      "Nous avons cartographié toutes les prestations proposées avec leurs durées réelles — coupé femme, balayage, soin, etc. — pour paramétrer un agenda qui reflète exactement la réalité du salon.",
      "Chaque coiffeuse a reçu son propre accès pour visualiser et gérer son planning, avec des règles de priorité définissant qui peut prendre quel type de prestation.",
      "Le programme de fidélité a été digitalisé : tampon virtuel crédité automatiquement après chaque visite, visible par la cliente dans la confirmation de RDV et dans ses rappels.",
      "Le workflow de rappels SMS a été calibré en deux temps : J-2 pour permettre l'annulation anticipée, et J-0 matin pour réduire les oublis de dernière minute, avec un lien de confirmation en un clic."
    ]
  },
  {
    id: 'scenes-orleans',
    title: "Scènes d'Orléans",
    category: "Site Événementiel & Billetterie",
    expertise: 'contenu-marketing-ia',
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800",
    description: "Site événementiel pour une association culturelle avec billetterie en ligne, agenda des spectacles et newsletter automatisée.",
    tags: ["Événementiel", "Billetterie", "Culture", "Newsletter"],
    client: "Yoann DELALOY",
    year: "2023",
    date: "2023-09",
    fullDescription: "Scènes d'Orléans est une association culturelle organisant une quarantaine de spectacles par an. Elle dépendait de canaux de vente physiques et de réseaux sociaux pour communiquer. Nous avons créé un site événementiel complet avec billetterie intégrée et newsletter automatisée.",
    challenges: [
      "Centraliser l'agenda des spectacles sur une plateforme propre",
      "Intégrer la billetterie en ligne avec paiement sécurisé",
      "Automatiser la communication autour des événements",
      "Budget associatif contraint"
    ],
    url: "https://www.scenes-orleans.fr",
    results: [
      "Site événementiel avec agenda interactif et pages spectacle dédiées",
      "Billetterie en ligne : paiement CB sécurisé, envoi e-ticket automatique",
      "Newsletter automatisée : 1 email par semaine avec les événements à venir",
      "35% des billets vendus en ligne dès la première saison",
      "Base email passée de 400 à 1 200 abonnés en 6 mois"
    ],
    process: [
      "La contrainte budgétaire associative a orienté les choix technologiques : nous avons sélectionné des outils open-source et des offres freemium permettant de couvrir l'ensemble des besoins sans coût fixe mensuel élevé.",
      "Chaque spectacle a reçu une page dédiée avec visuels, synopsis, intervenants et jauge de billets restants en temps réel, transformant le site en outil de vente actif et non plus en simple agenda.",
      "La billetterie a été configurée avec génération automatique d'e-tickets QR, vérifiables à l'entrée depuis le téléphone du bénévole sans équipement dédié.",
      "La newsletter automatisée se compose chaque semaine depuis les données de l'agenda : les spectacles des 7 prochains jours sont agrégés, mis en forme et envoyés aux abonnés sans aucune intervention manuelle."
    ]
  }
];
