// Données des 6 expertises de Maison Siranno
// Les icônes JSX sont ajoutées dans Services.tsx pour éviter la circularité des imports

export interface ProcessStep {
  title: string;
  description: string;
  detailedDescription?: string[];
  clientRequirements?: string[];
  agencyWork?: string[];
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
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
  stats: ServiceStat[];
  faq: ServiceFaq[];
}

export const servicesData: ServiceDataRaw[] = [
  {
    id: 'web-apps-saas',
    icon: null,
    title: "Développement Web Apps & SaaS",
    description: "Du code qui génère du CA. Une relation de proximité, un savoir-faire artisanal du développement, et l'IA comme accélérateur — nous livrons vos applications modernes et scalables en un temps record.",
    delay: "0s",
    fullDescription: "Fini les projets web qui prennent 6 mois pour un résultat décevant. Grâce à l'IA — notamment Claude Code — nous développons vos MVP, SaaS et applications sur-mesure avec une vélocité inégalée, sans jamais sacrifier la qualité ni la relation de proximité que nous entretenons avec chaque client. React, Next.js, TypeScript, Tailwind : une stack moderne qui dure, pilotée par un artisan du code qui vous connaît.",
    benefits: [
      "MVP et SaaS livrés 3× plus vite qu'une agence classique",
      "Design pixel-perfect adapté à votre identité de marque",
      "Architecture scalable prête pour la croissance",
      "Mobile-first, SEO-ready, performances Core Web Vitals",
      "Autonomie client : back-office pour gérer votre contenu"
    ],
    useCases: ["SaaS & plateformes B2B", "Applications métiers sur-mesure", "MVP startups", "Refonte sites existants"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Claude Code", "Google AI Studio", "Vercel"],
    processSteps: [
      {
        title: "Découverte & brief",
        description: "Définir les objectifs, la cible et le cahier des charges.",
        detailedDescription: [
          "La **phase de découverte** est le socle sur lequel repose l'ensemble du projet. C'est ici que nous prenons le temps de comprendre votre univers, vos ambitions et les contraintes qui façonnent votre réalité opérationnelle. Un **brief insuffisant** est la première cause d'échec des projets digitaux : nous l'abordons donc avec la rigueur d'un cabinet de conseil, en posant les bonnes questions avant même d'ouvrir un éditeur de code.",
          "À l'issue de cet atelier structuré, vous disposez d'un **cahier des charges clair**, d'une vision partagée et d'un cadre contractuel précis qui élimine toute zone d'ombre. Vous savez exactement ce qui sera livré, dans quel **délai** et pour quel **budget** — sans mauvaise surprise. C'est le point de départ d'une collaboration de confiance."
        ],
        clientRequirements: [
          "Vos objectifs métier et KPIs cibles",
          "Vos contraintes de budget et de délai",
          "Des exemples de sites ou d'apps qui vous inspirent",
          "Votre charte graphique si elle existe (logo, couleurs, polices)"
        ],
        agencyWork: [
          "Nous animons un atelier de découverte structuré (30 à 60 min) pour cerner vos objectifs, contraintes et vision",
          "Nous formalisons le cahier des charges technique et fonctionnel",
          "Nous définissons la stack technologique adaptée à votre projet",
          "Nous établissons le planning de livraison avec jalons intermédiaires"
        ]
      },
      {
        title: "Planification",
        description: "Créer l'arborescence du site et les wireframes (croquis).",
        detailedDescription: [
          "La planification transforme vos intentions en une **architecture concrète et validée**. Avant d'écrire une seule ligne de code ou de dessiner un pixel d'interface, nous modélisons l'ensemble des **parcours utilisateurs** et la structure fonctionnelle de votre application. Cette étape protège votre investissement : identifier un problème de conception sur un wireframe prend dix minutes ; le corriger en production peut prendre des semaines.",
          "En approuvant l'arborescence et les **wireframes** à ce stade, vous figez le périmètre du projet et donnez à nos équipes un cap clair. Les fonctionnalités sont priorisées selon leur impact réel, le **backlog** est détaillé et les risques techniques sont déjà anticipés. Vous entrez dans la phase de design avec une visibilité totale sur ce qui sera construit."
        ],
        clientRequirements: [
          "Validation de l'arborescence et des wireframes proposés",
          "Priorisation des fonctionnalités (must-have vs nice-to-have)",
          "Retours sous 48h pour maintenir le planning"
        ],
        agencyWork: [
          "Nous créons l'arborescence complète du site ou de l'application",
          "Nous réalisons les wireframes basse fidélité dans Figma pour valider les parcours utilisateurs",
          "Nous identifions les risques techniques et proposons des alternatives",
          "Nous détaillons le backlog de fonctionnalités avec estimations"
        ]
      },
      {
        title: "Design UI/UX",
        description: "Réaliser les maquettes graphiques et l'interface visuelle.",
        detailedDescription: [
          "Le design est bien plus qu'une question d'esthétique : c'est la **première expérience** que vos utilisateurs auront de votre marque, et elle se joue en quelques secondes. Nous concevons des interfaces qui allient la rigueur **UX** — parcours fluides, hiérarchie visuelle, appels à l'action efficaces — à une direction artistique premium qui reflète le positionnement que vous méritez. Chaque écran est pensé pour **convertir** autant que pour séduire.",
          "Le **design system** que nous produisons à cette étape devient un actif durable pour votre entreprise. Il garantit la cohérence visuelle de toutes vos futures évolutions, réduit le **coût de maintenance** et permet à votre équipe d'étendre l'application sans jamais s'éloigner de l'identité que nous avons construite ensemble. Vous validez, nous affinons — et rien n'entre en développement sans votre approbation."
        ],
        clientRequirements: [
          "Vos retours sur les maquettes (2 cycles de révisions inclus)",
          "Accès à vos assets visuels (logos en vectoriel, photos HD)",
          "Validation finale de l'identité visuelle avant développement"
        ],
        agencyWork: [
          "Nous concevons les maquettes haute fidélité dans Figma, adaptées à votre charte",
          "Nous livrons 2 cycles de révisions inclus pour affiner chaque écran",
          "Nous appliquons les principes UX pour optimiser les conversions",
          "Nous produisons le design system réutilisable pour les évolutions futures"
        ]
      },
      {
        title: "Développement",
        description: "Coder le site ou le configurer via un CMS (ex : WordPress, Shopify).",
        detailedDescription: [
          "C'est ici que votre vision prend vie sous forme de code. Grâce aux agents IA — au premier rang desquels **Claude Code** — nous exécutons avec une **vélocité trois fois supérieure** à celle d'une agence traditionnelle, sans jamais sacrifier la qualité ni la maintenabilité. Chaque composant est structuré pour durer, documenté pour être compris et testé au fur et à mesure. Et parce que nous travaillons en **proximité directe** avec vous, chaque jalon est l'occasion d'un échange humain qui garantit que le produit final correspond exactement à votre vision.",
          "Tout au long du développement, vous bénéficiez d'une **transparence totale** grâce aux previews accessibles à chaque jalon. Vous voyez votre application grandir en temps réel, vous pouvez formuler des retours précis et nous ajustons immédiatement le cap si nécessaire. Cette approche **itérative** élimine les mauvaises surprises à la livraison et transforme le développement en une co-construction fluide."
        ],
        clientRequirements: [
          "Accès à votre hébergeur ou environnement cloud",
          "Contenu final rédigé ou validation de nos propositions de textes",
          "Validation des jalons intermédiaires de développement"
        ],
        agencyWork: [
          "Nous codons l'application avec React/Next.js, accélérés par nos agents IA (Claude Code) pour un rythme ×3 sans compromis sur la qualité",
          "Nous mettons en place l'architecture backend, la base de données et les APIs",
          "Nous déployons sur Vercel ou votre infrastructure avec CI/CD automatisé",
          "Nous partageons l'avancement via des previews accessibles à chaque jalon"
        ]
      },
      {
        title: "Contenu & SEO",
        description: "Intégrer les textes ou médias et optimiser pour les moteurs de recherche.",
        detailedDescription: [
          "Une application techniquement irréprochable qui n'est pas trouvée sur **Google** est une opportunité manquée. Cette étape garantit que votre investissement digital rayonne bien au-delà de votre réseau immédiat. Nous intégrons vos contenus avec un soin méticuleux pour la **sémantique**, la hiérarchie et les signaux que les moteurs de recherche valorisent — dès le premier jour de mise en ligne.",
          "L'optimisation **SEO technique** que nous mettons en place (balises, Schema.org, Core Web Vitals, Open Graph) constitue un socle solide sur lequel votre **référencement naturel** peut croître dans la durée. Vous bénéficiez également d'une configuration analytique complète qui vous permettra de mesurer précisément l'audience générée et de prendre des décisions éclairées sur vos futures actions marketing."
        ],
        clientRequirements: [
          "Vos textes finaux ou validation de nos contenus proposés",
          "Liste de vos mots-clés prioritaires dans votre secteur",
          "Accès Google Search Console et Analytics si existants"
        ],
        agencyWork: [
          "Nous intégrons vos textes et médias avec un soin particulier pour la hiérarchie sémantique",
          "Nous optimisons les balises meta, Open Graph, Schema.org et la structure des URLs",
          "Nous configurons Google Analytics 4 et Search Console",
          "Nous rédigeons les balises alt et optimisons les images pour le Core Web Vitals"
        ]
      },
      {
        title: "Tests",
        description: "Vérifier l'affichage (mobile/PC) et le bon fonctionnement technique (bugs).",
        detailedDescription: [
          "Aucun projet ne sort de nos ateliers sans avoir traversé un **protocole de tests rigoureux**. Nous simulons les conditions d'usage réelles de vos utilisateurs — appareils variés, navigateurs multiples, connexions dégradées — pour nous assurer que votre application délivre une **expérience irréprochable** dans chaque contexte. Les performances, l'accessibilité et la fiabilité sont évaluées avec des outils de référence (Lighthouse, PageSpeed Insights) et les résultats sont documentés.",
          "La phase de tests est aussi l'occasion de **vous impliquer directement** dans la validation finale. Vos retours sur vos appareils habituels, vos parcours critiques, vos formulaires — tout est passé en revue. Nous corrigeons chaque anomalie avant la mise en ligne, **sans exception**. Vous signalez, nous traitons, nous livrons une application qui fonctionne."
        ],
        clientRequirements: [
          "Tests sur vos appareils principaux (mobile, tablette, desktop)",
          "Signalement des bugs via notre outil de suivi partagé",
          "Validation du bon fonctionnement de vos parcours critiques"
        ],
        agencyWork: [
          "Nous réalisons des tests croisés sur navigateurs (Chrome, Firefox, Safari, Edge) et appareils (mobile, tablette, desktop)",
          "Nous exécutons des tests de performance (Lighthouse, PageSpeed) et corrigeons les problèmes identifiés",
          "Nous testons tous les parcours critiques et formulaires",
          "Nous documentons chaque anomalie et assurons leur correction avant livraison"
        ]
      },
      {
        title: "Lancement & maintenance",
        description: "Mettre le site en ligne et assurer les mises à jour régulières.",
        detailedDescription: [
          "Le **lancement** est un moment stratégique qui se prépare avec soin. Nous gérons l'intégralité de la mise en production — configuration DNS, certificat SSL, optimisation serveur — pour que votre application soit accessible, sécurisée et performante dès la **première seconde**. Les 48 heures qui suivent le lancement font l'objet d'une surveillance active de notre part, afin de détecter et corriger immédiatement toute anomalie en conditions réelles.",
          "La mise en ligne n'est pas la fin de notre engagement, c'est le début d'une **relation dans la durée**. Nous vous remettons les accès complets, la documentation technique et les clés de votre autonomie. Des formules de **maintenance** adaptées vous garantissent que votre application reste à jour, sécurisée et performante — pendant que vous vous concentrez sur ce que vous faites de mieux : votre métier."
        ],
        clientRequirements: [
          "Accès aux DNS ou délégation à votre registrar",
          "Présence disponible le jour du lancement",
          "Définition de la formule de maintenance souhaitée"
        ],
        agencyWork: [
          "Nous gérons la configuration DNS, SSL et la mise en production sur votre hébergeur",
          "Nous surveillons l'application pendant les 48h post-lancement",
          "Nous mettons en place les alertes de disponibilité et les sauvegardes automatiques",
          "Nous remettons les accès complets et la documentation technique"
        ]
      },
    ],
    stats: [
      { value: "3×", label: "Plus vite qu'une agence traditionnelle" },
      { value: "4–6 sem.", label: "Délai moyen de livraison MVP" },
      { value: "98%", label: "Clients satisfaits à la livraison" },
    ],
    faq: [
      {
        q: "Combien coûte le développement d'un MVP ou d'un SaaS ?",
        a: "Un MVP fonctionnel démarre à partir de 3 500 €. Un SaaS complet avec back-office et authentification est généralement entre 8 000 € et 20 000 € selon la complexité. Nous définissons ensemble un périmètre précis avant tout engagement.",
      },
      {
        q: "Pourrez-vous maintenir et faire évoluer l'application après la livraison ?",
        a: "Oui. Nous proposons des contrats de maintenance et d'évolution mensuel. Vous avez également la possibilité de reprendre le code en main : toute la base est documentée et ouverte.",
      },
      {
        q: "Je n'ai pas de cahier des charges, est-ce bloquant ?",
        a: "Pas du tout. Notre session de découverte (gratuite, 30 min) suffit à poser les bases. Nous rédigeons nous-mêmes le brief technique à partir de vos objectifs métier.",
      },
      {
        q: "Quelle est la différence entre votre approche et une agence classique ?",
        a: "Nous travaillons avec des agents IA (Claude Code, Google AI Studio) qui multiplient notre vitesse d'exécution par 3. Mais ce qui nous différencie vraiment d'une agence classique, c'est la proximité : vous avez un interlocuteur unique qui connaît votre projet sur le bout des doigts, de la première ligne de code au lancement.",
      },
    ],
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
    useCases: ["Qualification & nurturing leads auto", "Facturation et relances automatiques", "Synchronisation multi-outils", "Reporting automatisé", "Tri et réponse automatique de boîte mail", "Génération de rapports de réunion depuis transcription", "Veille métier quotidienne et synthèse IA", "Onboarding client automatisé (CRM → email → agenda)", "Alertes et notifications inter-équipes sur événements métier"],
    technologies: ["n8n", "Make", "Airtable", "Notion", "Slack", "Zapier", "Webhooks"],
    processSteps: [
      {
        title: "Audit des processus",
        description: "Cartographier vos tâches manuelles et identifier les goulots d'étranglement.",
        detailedDescription: [
          "L'audit des processus est une plongée dans les coulisses de votre organisation pour révéler ce qui vous **coûte du temps, de l'énergie et de l'argent** sans que vous en ayez pleinement conscience. Nous interviewons vos équipes, observons vos flux de travail réels et modélisons chaque processus manuel avec une précision chirurgicale. Ce que la plupart des entreprises perçoivent comme une routine inévitable est souvent, vu de l'extérieur, un **gisement considérable d'automatisation**.",
          "À l'issue de l'audit, vous recevez un **rapport complet** qui traduit chaque goulot d'étranglement en opportunité chiffrée. Vous savez combien d'heures hebdomadaires sont consommées inutilement, quel **ROI** vous pouvez attendre de chaque automatisation et dans quel ordre les traiter pour maximiser l'impact immédiat. C'est une vision claire qui transforme une intuition en stratégie."
        ],
        clientRequirements: [
          "Disponibilité de 2h pour un atelier d'audit avec vos équipes",
          "Accès observateur à vos outils principaux (CRM, email, etc.)",
          "Liste de vos tâches manuelles les plus chronophages"
        ],
        agencyWork: [
          "Nous animons un atelier d'audit avec vos équipes pour cartographier tous les processus manuels",
          "Nous modélisons vos flux actuels sous forme de diagrammes clairs",
          "Nous quantifions le temps perdu et calculons le ROI potentiel de chaque automatisation",
          "Nous livrons un rapport d'audit complet avec nos recommandations priorisées"
        ]
      },
      {
        title: "Priorisation",
        description: "Classer les automatisations par impact ROI et complexité technique.",
        detailedDescription: [
          "Toutes les automatisations ne se valent pas. Certaines délivrent un **retour sur investissement spectaculaire** en quelques jours ; d'autres sont techniquement complexes pour un gain marginal. La priorisation est l'étape stratégique qui vous garantit de concentrer vos ressources là où elles ont le **plus d'impact**. Nous appliquons une matrice Impact/Effort éprouvée pour classer vos opportunités et construire une feuille de route qui crée de la valeur dès les premières semaines.",
          "Vous entrez dans la phase de développement avec un **plan clair**, des **quick wins** identifiés et une vision moyen terme sur les automatisations plus complexes. Le budget est alloué de façon optimale, les attentes sont alignées et chaque membre de votre équipe comprend pourquoi nous traitons les sujets dans cet ordre. C'est la discipline stratégique qui fait la différence entre un projet d'automatisation réussi et un projet qui s'éparpille."
        ],
        clientRequirements: [
          "Validation du classement ROI et des priorités proposées",
          "Définition du budget alloué par automatisation",
          "Décision sur les quick wins à traiter en priorité"
        ],
        agencyWork: [
          "Nous classons les automatisations selon une matrice Impact/Effort pour maximiser le ROI",
          "Nous vous présentons un plan de déploiement en phases avec les quick wins en premier",
          "Nous estimons le temps de développement et le retour sur investissement de chaque workflow",
          "Nous validons avec vous les priorités et adaptons la feuille de route à votre budget"
        ]
      },
      {
        title: "Architecture",
        description: "Concevoir l'architecture des workflows et les connexions entre outils.",
        detailedDescription: [
          "Un workflow mal conçu à la base est une **dette technique** qui s'accumule : il fonctionne un temps, puis se brise sous le poids des cas particuliers et des évolutions de vos outils. Notre phase d'architecture est précisément là pour éviter ce scénario. Nous concevons des workflows **robustes, documentés et pensés pour durer** — avec une gestion des erreurs, des mécanismes de reprise et une logique métier qui reflète fidèlement vos règles de gestion.",
          "Avant d'écrire le premier nœud dans **n8n**, vous disposez d'un schéma d'architecture complet qui représente chaque flux, chaque condition et chaque point d'intégration. Cette documentation devient un **actif opérationnel** : elle facilite la maintenance, simplifie l'onboarding de nouveaux collaborateurs et sert de référence lors des évolutions futures. Vous investissez dans quelque chose qui dure."
        ],
        clientRequirements: [
          "Validation de l'architecture des workflows avant développement",
          "Accès API ou credentials pour vos outils (transmis de façon sécurisée)",
          "Confirmation des règles métier et des cas limites à gérer"
        ],
        agencyWork: [
          "Nous concevons l'architecture complète des workflows et leurs interconnexions",
          "Nous sélectionnons les connecteurs natifs ou développons les connecteurs sur-mesure nécessaires",
          "Nous définissons les règles de gestion des erreurs et les mécanismes de reprise",
          "Nous documentons l'architecture technique avant tout développement"
        ]
      },
      {
        title: "Développement n8n",
        description: "Construire et tester les workflows dans un environnement de staging.",
        detailedDescription: [
          "Le développement des workflows se déroule dans un **environnement de staging isolé**, ce qui signifie que votre production n'est jamais perturbée pendant la construction. Nous bâtissons chaque flux avec une attention particulière à la **logique conditionnelle**, aux transformations de données et aux mécanismes de reprise sur erreur — les trois piliers d'un workflow industriel qui peut tourner des mois sans supervision.",
          "Chaque workflow est **testé exhaustivement** avant de vous être présenté : scénarios nominaux, cas limites, erreurs simulées, volumes importants. Vous validez sur des données réelles (anonymisées si nécessaire) et nous ajustons jusqu'à ce que le comportement soit exactement celui que vous attendez. **Rien n'est mis en production** sans votre approbation explicite."
        ],
        clientRequirements: [
          "Jeu de données de test réelles (anonymisées si nécessaire)",
          "Validation des workflows en staging avant mise en production",
          "Retours sous 48h sur les scénarios testés"
        ],
        agencyWork: [
          "Nous construisons chaque workflow dans un environnement de staging isolé",
          "Nous développons la logique conditionnelle, les boucles et les transformations de données",
          "Nous testons exhaustivement chaque scénario nominal et cas d'erreur",
          "Nous optimisons les performances et la robustesse de chaque flux"
        ]
      },
      {
        title: "Intégration",
        description: "Connecter les workflows à vos outils existants (CRM, ERP, email...).",
        detailedDescription: [
          "L'intégration en production est le moment où vos automatisations entrent en contact avec vos **données et processus réels**. Nous gérons cette transition avec la plus grande prudence : déploiement progressif, validation étape par étape, **surveillance renforcée** pendant les premiers jours. Chaque connexion à vos outils (CRM, ERP, messagerie) est testée en conditions réelles avant de basculer l'ensemble du flux.",
          "Notre expérience des **intégrations complexes** nous permet d'anticiper les comportements inattendus et de les corriger avant qu'ils n'impactent votre activité. Vous bénéficiez d'une mise en production **sans rupture de service** et d'une période de surveillance active pendant laquelle nous intervenons immédiatement si nécessaire. Le passage en production est transparent pour vos équipes."
        ],
        clientRequirements: [
          "Accès admin à vos outils de production (CRM, ERP...)",
          "Fenêtre de mise en production définie (hors heures de pointe)",
          "Contact IT disponible si besoin de débogage lors du déploiement"
        ],
        agencyWork: [
          "Nous connectons les workflows à vos outils de production en suivant les bonnes pratiques de sécurité",
          "Nous effectuons une migration progressive avec validation à chaque étape",
          "Nous surveillons les premiers jours de fonctionnement en conditions réelles",
          "Nous corrigeons immédiatement tout comportement inattendu"
        ]
      },
      {
        title: "Monitoring",
        description: "Mettre en place les alertes et tableaux de bord de supervision.",
        detailedDescription: [
          "Un workflow qui tourne en silence est un workflow dont vous ignorez l'état de santé. Le **monitoring** que nous mettons en place transforme vos automatisations en systèmes transparents et pilotables : chaque exécution est tracée, chaque erreur déclenche une **alerte**, chaque métrique est visible en temps réel. Vous passez d'une boîte noire à un système de pilotage maîtrisé.",
          "Les alertes sont configurées pour vous notifier **uniquement lorsque votre intervention est vraiment nécessaire** — pas de bruit inutile, mais une réactivité garantie sur les anomalies critiques. Le **tableau de bord de supervision** devient votre tour de contrôle opérationnelle : un coup d'œil suffit pour savoir que vos processus tournent, et un clic suffit pour comprendre ce qui s'est passé en cas d'incident."
        ],
        clientRequirements: [
          "Définition des seuils d'alerte acceptables",
          "Désignation d'un responsable interne pour recevoir les notifications",
          "Validation du tableau de bord de supervision"
        ],
        agencyWork: [
          "Nous configurons les alertes email et Slack pour chaque point de défaillance possible",
          "Nous construisons un tableau de bord de supervision en temps réel",
          "Nous mettons en place les mécanismes de reprise automatique en cas d'erreur",
          "Nous paramétrons les journaux d'activité pour la traçabilité complète"
        ]
      },
      {
        title: "Documentation & formation",
        description: "Former vos équipes et livrer la documentation complète des flux.",
        detailedDescription: [
          "La valeur d'une automatisation ne s'arrête pas à son fonctionnement technique : elle doit être **comprise, maintenue et adaptée** par votre équipe sans dépendance permanente à notre présence. La documentation que nous livrons est conçue pour des opérationnels, pas pour des ingénieurs : claire, illustrée, **orientée cas d'usage**. Elle répond aux questions que vos collaborateurs se poseront dans six mois.",
          "La **session de formation pratique** que nous animons est calibrée sur le niveau réel de vos équipes et axée sur vos cas d'usage concrets, pas sur la théorie. À l'issue de cette session, votre référent interne est capable d'ajuster les paramètres courants, de comprendre une alerte et de solliciter notre support de façon pertinente. Vous restez **maîtres de votre système**, avec nous comme filet de sécurité."
        ],
        clientRequirements: [
          "Disponibilité des équipes pour la session de formation (2 à 3h)",
          "Désignation d'un référent interne pour la maintenance courante",
          "Validation de la documentation livrée avant clôture de mission"
        ],
        agencyWork: [
          "Nous rédigeons la documentation complète de chaque workflow (logique, déclencheurs, cas limites)",
          "Nous animons une session de formation pratique adaptée au niveau de vos équipes",
          "Nous créons des guides visuels pour les manipulations courantes",
          "Nous restons disponibles 30 jours post-livraison pour répondre à vos questions"
        ]
      },
    ],
    stats: [
      { value: "20h", label: "Économisées en moyenne chaque semaine" },
      { value: "0", label: "Erreur humaine sur les processus automatisés" },
      { value: "+400", label: "Connexions SaaS possibles (Notion, Airtable, CRM, Slack…)" },
    ],
    faq: [
      {
        q: "Quelle est la différence entre n8n et des outils comme Zapier ?",
        a: "Zapier est excellent pour des automatisations simples (si A alors B). n8n permet des architectures bien plus complexes : boucles, conditions multiples, transformations de données, gestion d'erreurs, et peut être hébergé sur votre propre serveur pour des raisons de confidentialité.",
      },
      {
        q: "Que se passe-t-il si un workflow plante ou rencontre une erreur ?",
        a: "Nous configurons systématiquement des alertes (email, Slack) et des mécanismes de reprise automatique. Un tableau de bord de supervision vous donne une visibilité en temps réel sur tous vos flux.",
      },
      {
        q: "Dois-je avoir des compétences techniques pour utiliser les workflows livrés ?",
        a: "Non. Nous concevons des workflows robustes et documentons tout. Une formation pratique est incluse à la livraison. Pour les évolutions mineures, une interface visuelle vous permet d'agir sans toucher au code.",
      },
      {
        q: "Peut-on connecter n8n à notre logiciel métier spécifique ?",
        a: "Dans la très grande majorité des cas, oui. n8n supporte plus de 400 intégrations natives. Pour les logiciels sans connecteur officiel, nous utilisons leurs API ou webhooks pour construire la connexion sur-mesure.",
      },
    ],
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
      {
        title: "Audit de marque",
        description: "Analyser votre positionnement, vos cibles et votre charte graphique existante.",
        detailedDescription: [
          "Avant de produire un seul contenu, nous prenons le temps de comprendre ce qui rend votre marque **unique** et ce qui la distingue véritablement de ses concurrents. Cet audit n'est pas une formalité administrative : c'est un travail de fond qui examine votre **positionnement**, la cohérence de votre communication actuelle et la perception que vous générez sur vos cibles. Les insights que nous en tirons conditionnent toute la **stratégie éditoriale** qui suivra.",
          "Le rapport d'audit que vous recevez est une **boussole stratégique** : il met en lumière vos forces à amplifier, les incohérences à corriger et les opportunités que vos concurrents n'ont pas encore saisies. C'est sur cette base documentée que nous construisons ensemble une stratégie de contenu qui a du sens pour votre marque et des **résultats mesurables** pour votre business."
        ],
        clientRequirements: [
          "Accès à vos supports de communication existants",
          "Partage de votre charte graphique et guide éditorial",
          "Description de votre cible idéale et de vos personas"
        ],
        agencyWork: [
          "Nous analysons en profondeur votre positionnement, vos contenus existants et vos concurrents",
          "Nous définissons vos personas cibles avec leurs problématiques et canaux de prédilection",
          "Nous évaluons la cohérence de votre identité visuelle et éditoriale actuelle",
          "Nous livrons un rapport d'audit avec les recommandations stratégiques prioritaires"
        ]
      },
      {
        title: "Stratégie éditoriale",
        description: "Définir les thèmes, formats et fréquences adaptés à chaque canal.",
        detailedDescription: [
          "Une **stratégie éditoriale solide** est la différence entre une présence digitale cohérente qui construit une audience et une production de contenu épuisante qui ne mène nulle part. Nous construisons votre calendrier éditorial sur 3 mois avec une logique thématique, des **formats adaptés à chaque canal** et une fréquence de publication réaliste qui peut être tenue dans la durée — sans sacrifier la qualité à la quantité.",
          "La **ligne éditoriale** que nous définissons devient le guide de référence pour tout contenu produit sous votre nom, qu'il soit généré par IA ou rédigé manuellement. Le ton, le vocabulaire, les sujets à aborder et ceux à éviter, les appels à l'action privilégiés — tout est documenté avec précision pour garantir une **voix de marque cohérente** sur tous vos canaux et dans le temps."
        ],
        clientRequirements: [
          "Validation du calendrier éditorial et des thèmes proposés",
          "Définition des canaux de diffusion prioritaires",
          "Budget mensuel alloué aux outils de diffusion"
        ],
        agencyWork: [
          "Nous construisons votre calendrier éditorial sur 3 mois avec les thèmes, formats et fréquences",
          "Nous rédigeons la ligne éditoriale et le guide de ton pour chaque canal",
          "Nous sélectionnons les formats les plus performants pour votre secteur",
          "Nous définissons les KPIs de contenu et les méthodes de mesure"
        ]
      },
      {
        title: "Mise en place IA",
        description: "Configurer les modèles IA et les pipelines de génération de contenu.",
        detailedDescription: [
          "La mise en place IA est l'étape technique qui transforme vos paramètres de marque en **instructions opérationnelles** pour les modèles de génération. Nous ne nous contentons pas de brancher un modèle générique : nous le configurons avec votre identité, votre lexique, vos valeurs et vos contraintes pour obtenir des contenus qui sonnent **authentiquement comme vous** — pas comme une IA qui imite une marque générique.",
          "Les **prompts maîtres** que nous construisons sont le résultat d'un travail d'ingénierie minutieux, testé sur des exemples réels et validé avec vous avant toute industrialisation. Ils deviennent un **actif intellectuel** de votre entreprise : réutilisables, évolutifs et transmissibles à votre équipe. La machine à contenu est prête à tourner à la vitesse et à l'échelle que votre ambition exige."
        ],
        clientRequirements: [
          "Exemples de contenus que vous aimez (ton, style, format)",
          "Validation des prompts maîtres avant industrialisation",
          "Accès aux abonnements IA si déjà existants"
        ],
        agencyWork: [
          "Nous configurons les modèles IA (Claude, GPT-4, Midjourney) avec vos paramètres de marque",
          "Nous construisons les prompts maîtres ancrés dans votre identité et testés sur des exemples réels",
          "Nous mettons en place le pipeline de génération, relecture et approbation",
          "Nous créons les templates de base pour chaque format de contenu"
        ]
      },
      {
        title: "Création des templates",
        description: "Produire les gabarits visuels et les prompts maîtres réutilisables.",
        detailedDescription: [
          "Les **templates** sont l'infrastructure invisible qui rend votre production de contenu à la fois rapide et cohérente. Nous concevons une bibliothèque de **gabarits visuels** adaptés à chaque format et réseau — carousel LinkedIn, story Instagram, bannière newsletter, visuel article — en cohérence parfaite avec votre charte graphique. Chaque template est pensé pour être déclinable à l'infini sans perdre son impact.",
          "La validation des **premiers contenus pilotes** est un moment de dialogue essentiel : c'est l'occasion d'affiner ce qui ne correspond pas exactement à votre vision avant d'industrialiser la production. Nous intégrons vos retours avec précision et livrons un **guide d'utilisation clair** pour que votre équipe puisse s'approprier les outils en toute autonomie. Vous héritez d'une infrastructure éditoriale prête à l'emploi."
        ],
        clientRequirements: [
          "Validation des premiers visuels et gabarits (2 cycles inclus)",
          "Retours sur le ton éditorial des contenus pilotes",
          "Décision sur les formats prioritaires (carousel, vidéo, article...)"
        ],
        agencyWork: [
          "Nous produisons une bibliothèque de gabarits visuels Canva/Figma cohérents avec votre charte",
          "Nous créons les prompts de génération d'images adaptés à chaque format et réseau social",
          "Nous réalisons les premiers contenus pilotes pour validation",
          "Nous livrons le guide d'utilisation des templates pour votre équipe"
        ]
      },
      {
        title: "Automation & diffusion",
        description: "Connecter les outils de publication et automatiser le calendrier éditorial.",
        detailedDescription: [
          "L'automation de la diffusion est le moment où votre **machine à contenu devient véritablement autonome**. Nous connectons vos outils de publication — Buffer, Brevo, Mailchimp — dans un pipeline fluide qui va de la génération du contenu jusqu'à sa publication sur les bons canaux, au bon moment, **sans intervention manuelle** de votre part. Vos équipes sont libérées de la charge opérationnelle de la diffusion pour se concentrer sur la stratégie.",
          "Les **séquences email automatisées** et les tunnels de conversion que nous déployons transforment votre audience en pipeline commercial actif. Chaque nouveau contact entre dans un **parcours personnalisé** qui le nourrit intelligemment selon son comportement et son profil. Avant la mise en production, l'ensemble de la chaîne est testé de bout en bout pour garantir une diffusion sans accroc dès le premier jour."
        ],
        clientRequirements: [
          "Accès admin à vos réseaux sociaux et outils d'emailing",
          "Validation du calendrier de publication automatisé",
          "Définition d'un processus de validation si souhaité"
        ],
        agencyWork: [
          "Nous configurons les outils de planification et publication automatique (Buffer, Brevo, Mailchimp)",
          "Nous construisons les workflows de génération → validation → publication",
          "Nous mettons en place les séquences email automatisées et les tunnels de conversion",
          "Nous testons l'ensemble de la chaîne de diffusion avant mise en production"
        ]
      },
      {
        title: "Tests & validation",
        description: "Valider le ton, la cohérence visuelle et la qualité sur chaque canal.",
        detailedDescription: [
          "La phase de tests et validation est le **garde-fou qui protège votre réputation de marque**. Avant de laisser la machine tourner en autonomie, nous soumettons les premiers lots de contenus à votre regard critique et mesurons l'**engagement** qu'ils génèrent. Chaque retour que vous formulez est un signal précieux qui affine la calibration des modèles et renforce la cohérence de votre voix éditoriale.",
          "Nous vérifions méticuleusement que les contenus publiés sur chaque canal respectent ses **codes spécifiques** — ce qui fonctionne sur LinkedIn n'est pas ce qui performe sur Instagram — tout en maintenant une **cohérence identitaire globale**. C'est cette double exigence, adaptation au canal et cohérence de marque, qui garantit une présence digitale professionnelle et impactante."
        ],
        clientRequirements: [
          "Relecture et approbation des premiers contenus pilotes",
          "Feedback détaillé sur ce qui ne correspond pas à votre voix de marque",
          "Validation avant mise en production de la chaîne automatisée"
        ],
        agencyWork: [
          "Nous soumettons les premiers lots de contenus à votre validation avant toute publication",
          "Nous mesurons l'engagement sur les contenus pilotes et ajustons les paramètres",
          "Nous vérifions la cohérence visuelle et éditoriale sur tous les canaux",
          "Nous corrigeons les prompts et templates selon vos retours"
        ]
      },
      {
        title: "Reporting & itération",
        description: "Analyser les performances et optimiser les contenus chaque mois.",
        detailedDescription: [
          "Le **reporting mensuel** est bien plus qu'un tableau de chiffres : c'est un moment de pilotage stratégique où les données guident les décisions éditoriales du mois suivant. Nous analysons les performances de chaque format, canal et thématique pour identifier ce qui **résonne le mieux** avec votre audience et amplifier les contenus qui créent le plus d'engagement et de conversion.",
          "L'**itération continue** est le secret des stratégies de contenu qui progressent mois après mois au lieu de stagner. Chaque analyse nourrit des ajustements concrets : prompts affinés, fréquences rééquilibrées, formats émergents intégrés. Vous bénéficiez d'une stratégie vivante, **pilotée par les données** et orientée vers vos objectifs business, pas vers des métriques de vanité."
        ],
        clientRequirements: [
          "Partage de vos objectifs de croissance (abonnés, reach, leads)",
          "Disponibilité mensuelle de 45 min pour le point de performance",
          "Validation des ajustements de stratégie proposés"
        ],
        agencyWork: [
          "Nous produisons un rapport mensuel de performance avec les métriques clés de chaque canal",
          "Nous analysons les contenus les plus performants et amplifions leur format",
          "Nous ajustons la stratégie éditoriale selon les données réelles",
          "Nous proposons proactivement des nouvelles opportunités de contenu"
        ]
      },
    ],
    stats: [
      { value: "10×", label: "Plus de contenu produit au même coût" },
      { value: "×5", label: "Plus de formats produits à partir d'un seul contenu source" },
      { value: "0h", label: "De rédaction manuelle pour votre équipe" },
    ],
    faq: [
      {
        q: "Le contenu généré par IA va-t-il ressembler à de l'IA ?",
        a: "Non, si c'est bien fait. Nous construisons des prompts maîtres ancrés dans votre identité de marque (ton, vocabulaire, valeurs) et systématiquement relus. L'objectif est un contenu qui sonne comme vous, produit plus vite.",
      },
      {
        q: "Comment assurez-vous la cohérence visuelle avec notre charte ?",
        a: "Nous créons des style guides IA spécifiques à votre marque : palettes, ambiances, références visuelles. Chaque visual est généré avec ces paramètres, garantissant une cohérence identitaire sur tous les canaux.",
      },
      {
        q: "Peut-on garder le contrôle éditorial sur ce qui est publié ?",
        a: "Absolument. Nous pouvons mettre en place un workflow de validation où chaque contenu passe par vous avant publication. La vitesse de production ne sacrifie pas votre contrôle.",
      },
      {
        q: "Quel est l'investissement minimal pour une stratégie content IA ?",
        a: "Un setup complet (stratégie + outils + templates + formation) démarre autour de 2 500 €. La gestion mensuelle est ensuite proposée en retainer à partir de 800 €/mois selon les volumes.",
      },
    ],
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
      {
        title: "Audit des données",
        description: "Recenser et qualifier vos sources documentaires (PDFs, bases, wikis...).",
        detailedDescription: [
          "La qualité d'un système **RAG** est directement proportionnelle à la qualité des données qui l'alimentent. L'**audit documentaire** est donc l'étape fondatrice du projet : nous recensons l'ensemble de vos sources d'information — PDFs, wikis internes, bases de données, emails archivés, transcriptions — et évaluons leur fraîcheur, leur complétude et leur pertinence pour les cas d'usage cibles. Un document mal structuré ou obsolète dans la base vectorielle génère des **réponses incorrectes** ; nous l'identifions et le traitons avant toute ingestion.",
          "Le rapport d'audit que nous livrons dresse un état des lieux précis de votre **capital documentaire** et définit le plan d'ingestion optimal : quelles sources traiter en priorité, lesquelles nécessitent une restructuration préalable, et quelles données exclure pour **protéger la qualité des réponses**. Vous entrez dans la phase d'architecture avec une vision claire de ce que votre agent saura — et ne saura pas — répondre."
        ],
        clientRequirements: [
          "Inventaire de vos sources documentaires (PDFs, wikis, bases de données...)",
          "Évaluation de la qualité et de la fraîcheur de vos documents",
          "Définition des périmètres de données autorisés pour l'IA"
        ],
        agencyWork: [
          "Nous recensons et qualifions toutes vos sources documentaires (PDFs, bases de données, wikis)",
          "Nous évaluons la qualité, la fraîcheur et la complétude de vos données",
          "Nous identifions les documents à nettoyer, restructurer ou exclure",
          "Nous livrons un rapport d'audit documentaire avec le plan d'ingestion"
        ]
      },
      {
        title: "Architecture RAG",
        description: "Concevoir le pipeline d'indexation vectorielle et de retrieval adapté.",
        detailedDescription: [
          "L'**architecture RAG** est le choix technique qui détermine les performances, la précision et la scalabilité de votre agent IA. Ce n'est pas une décision triviale : le modèle d'**embedding**, la stratégie de segmentation des documents, la base vectorielle retenue et le modèle de génération doivent être sélectionnés en cohérence avec vos cas d'usage, votre volume de données et vos contraintes de **confidentialité**. Une mauvaise architecture se paye en hallucinations et en performances décevantes.",
          "Nous documentons l'architecture complète avant tout développement et vous la présentons dans un langage accessible, en expliquant les **arbitrages effectués** et leurs conséquences opérationnelles. Vous comprenez ce que vous construisez et pourquoi. Cette transparence est essentielle pour un système que vous devrez **maintenir et faire évoluer** dans la durée."
        ],
        clientRequirements: [
          "Validation de l'architecture technique proposée",
          "Choix du niveau de confidentialité (cloud vs on-premise)",
          "Définition des cas d'usage prioritaires de l'agent"
        ],
        agencyWork: [
          "Nous concevons l'architecture complète du pipeline : ingestion, vectorisation, retrieval, génération",
          "Nous choisissons les modèles d'embedding et de génération adaptés à votre cas d'usage",
          "Nous sélectionnons la base vectorielle (Pinecone, ChromaDB, Supabase) selon vos contraintes",
          "Nous documentons l'architecture avant développement pour validation"
        ]
      },
      {
        title: "Ingestion & vectorisation",
        description: "Transformer vos données en vecteurs et les stocker dans la base vectorielle.",
        detailedDescription: [
          "La **vectorisation** de vos documents est le processus par lequel votre savoir organisationnel devient interrogeable par l'IA. Nous développons des pipelines d'extraction sur-mesure pour chaque type de source — car un PDF de contrat, une page Notion et une base de données SQL ne se traitent pas de la même façon. La **segmentation intelligente** des documents est particulièrement critique : trop court, le chunk perd son contexte ; trop long, il dilue la précision du retrieval.",
          "La **mise à jour incrémentale** que nous mettons en place garantit que votre base vectorielle reste synchronisée avec l'évolution de vos documents sources. Quand vous ajoutez un nouveau produit à votre catalogue, publiez une nouvelle politique interne ou mettez à jour votre documentation technique, l'agent en est informé **automatiquement**. Votre système RAG est vivant, pas figé à l'instant de son déploiement."
        ],
        clientRequirements: [
          "Fourniture des documents sources dans les formats convenus",
          "Validation des métadonnées et catégories de classement",
          "Accès aux systèmes sources si ingestion directe requise"
        ],
        agencyWork: [
          "Nous développons les pipelines d'extraction et de nettoyage pour chaque type de source",
          "Nous segmentons intelligemment vos documents pour un retrieval optimal",
          "Nous générons les embeddings et les indexons dans la base vectorielle",
          "Nous mettons en place la mise à jour incrémentale pour maintenir la base à jour"
        ]
      },
      {
        title: "Prompt engineering",
        description: "Rédiger et affiner les instructions système pour des réponses précises.",
        detailedDescription: [
          "Le **prompt engineering** est l'art qui fait la différence entre un agent qui répond correctement et un agent qui répond avec la précision, le ton et les limites que votre contexte exige. Les **instructions système** définissent la personnalité de votre agent, son périmètre de compétence, ses comportements face aux questions hors-sujet et la façon dont il cite ses sources. Ce travail de calibration minutieux est ce qui transforme un modèle de langage générique en **expert de votre domaine**.",
          "Nous testons et affinons les prompts sur un panel large de **questions réelles**, représentatives de ce que vos utilisateurs poseront effectivement. Chaque comportement insatisfaisant est analysé, compris et corrigé par un ajustement précis des instructions. Vous participez à cette phase de validation, vos retours sont la boussole qui guide le **calibrage final**. L'agent que vous recevez en production est le résultat de dizaines d'itérations invisibles."
        ],
        clientRequirements: [
          "Description précise du comportement attendu de l'agent",
          "Exemples de questions-réponses idéales dans votre domaine",
          "Validation des instructions système avant phase de tests"
        ],
        agencyWork: [
          "Nous rédigeons les instructions système qui définissent le comportement, le ton et les limites de l'agent",
          "Nous développons les chaînes de prompts pour les scénarios complexes",
          "Nous testons et affinons les prompts sur un large panel de questions réelles",
          "Nous documentons chaque choix de prompt engineering pour la maintenabilité"
        ]
      },
      {
        title: "Développement agent",
        description: "Coder l'agent IA, les outils et les connecteurs vers vos systèmes.",
        detailedDescription: [
          "Le développement de l'agent va bien au-delà de la connexion à un modèle de langage. Nous construisons une **architecture applicative complète** : les outils que l'agent peut utiliser (recherche dans la base vectorielle, appels API, création de tickets, envoi d'emails), la logique de routage qui décide quel outil utiliser selon le contexte, et les **guardrails de sécurité** qui empêchent des comportements non souhaités.",
          "L'interface par laquelle vos utilisateurs interagiront avec l'agent est **adaptée à votre contexte d'usage** : widget intégré sur votre site, API consommable par vos applications internes, bot Slack pour vos équipes ou interface dédiée. Nous gérons l'intégration de bout en bout, en incluant l'**authentification**, la gestion des sessions et les **logs d'interaction** qui vous permettront d'auditer les conversations et d'améliorer le système dans le temps."
        ],
        clientRequirements: [
          "Accès API aux systèmes à connecter (CRM, helpdesk...)",
          "Définition des actions autorisées et des limites de l'agent",
          "Désignation d'un référent technique pour les intégrations"
        ],
        agencyWork: [
          "Nous développons l'agent IA avec ses outils, connecteurs et logique de routage",
          "Nous intégrons l'agent à vos systèmes existants via API sécurisées",
          "Nous implémentons les guardrails de sécurité et les filtres de contenu",
          "Nous mettons en place l'interface utilisateur adaptée à votre contexte (widget, API, Slack...)"
        ]
      },
      {
        title: "Tests & évaluation",
        description: "Mesurer la pertinence des réponses et corriger les hallucinations.",
        detailedDescription: [
          "L'évaluation d'un système RAG est une **discipline rigoureuse** qui va bien au-delà de quelques questions posées manuellement. Nous constituons un **benchmark représentatif** de vos cas d'usage réels et mesurons objectivement le taux de précision, la pertinence du retrieval, les **hallucinations résiduelles** et la latence de réponse. Ces métriques nous donnent une vision quantifiée de la qualité du système et guident les ajustements nécessaires.",
          "Votre participation à cette phase est précieuse : vous êtes le **meilleur juge** de la pertinence des réponses dans votre domaine. Nous organisons des sessions de tests utilisateurs structurées et documentons systématiquement chaque réponse insatisfaisante pour en comprendre la cause — problème de retrieval, prompt insuffisant, **donnée source manquante** — et corriger à la source. Vous recevez un système dont les limites sont connues et documentées, pas cachées."
        ],
        clientRequirements: [
          "Participation aux sessions de tests utilisateurs",
          "Constitution d'un jeu de questions représentatives de vos cas réels",
          "Signalement des réponses incorrectes ou insuffisantes"
        ],
        agencyWork: [
          "Nous évaluons la pertinence des réponses sur un benchmark de questions représentatives",
          "Nous mesurons le taux de précision, les hallucinations résiduelles et la latence",
          "Nous ajustons les paramètres de retrieval et les prompts selon les résultats",
          "Nous documentons les limites connues du système pour une utilisation éclairée"
        ]
      },
      {
        title: "Déploiement & conformité",
        description: "Mettre en production sur infrastructure européenne et valider la conformité RGPD.",
        detailedDescription: [
          "Le déploiement d'un système IA en production est un acte qui engage la **responsabilité de votre entreprise**, particulièrement lorsqu'il implique des données personnelles ou sensibles. Nous gérons l'intégralité de la mise en production sur **infrastructure européenne** — chiffrement des données en transit et au repos, contrôle d'accès strict, journalisation des interactions — pour vous garantir un niveau de sécurité et de conformité adapté à vos obligations réglementaires.",
          "La **conformité RGPD** n'est pas une case à cocher après coup : elle est intégrée à l'architecture dès la conception. Nous réalisons l'audit de conformité, rédigeons les **mentions légales** adaptées et vous accompagnons dans la rédaction des entrées de registre de traitement si votre DPO l'exige. Vous mettez en production un système dont vous maîtrisez totalement les implications légales et opérationnelles."
        ],
        clientRequirements: [
          "Validation de la politique de données et conformité RGPD",
          "Accès au registre de traitements de votre DPO si applicable",
          "Définition du processus de mise à jour des données source"
        ],
        agencyWork: [
          "Nous déployons sur infrastructure européenne (AWS Paris ou OVH) avec chiffrement bout en bout",
          "Nous réalisons l'audit de conformité RGPD et rédigeons les mentions légales adaptées",
          "Nous configurons les logs d'accès et le monitoring de production",
          "Nous transférons les accès complets et formons votre équipe à la maintenance"
        ]
      },
    ],
    stats: [
      { value: "24/7", label: "Disponibilité sans interruption" },
      { value: "92%", label: "Taux de précision des réponses RAG" },
      { value: "−65%", label: "De tickets support traités par des humains" },
    ],
    faq: [
      {
        q: "Qu'est-ce que le RAG exactement et pourquoi c'est mieux qu'un ChatGPT classique ?",
        a: "RAG (Retrieval-Augmented Generation) signifie que l'IA cherche d'abord dans VOS données avant de répondre. Au lieu d'inventer des réponses (hallucinations), elle cite des sources vérifiées issues de vos documents. C'est la différence entre un stagiaire et un expert qui connaît votre dossier sur le bout des doigts.",
      },
      {
        q: "Nos données sont-elles en sécurité ? RGPD ?",
        a: "Oui. Toute l'infrastructure est hébergée en Europe (serveurs AWS Paris ou OVH). Vos données ne transitent jamais vers des tiers sans votre accord. Nous pouvons également déployer en full on-premise si nécessaire.",
      },
      {
        q: "Quel type de documents peut ingérer le système ?",
        a: "PDFs, Word, Excel, pages web, bases de données SQL, Notion, Confluence, emails, transcriptions audio... Pratiquement toute source structurée ou semi-structurée peut être indexée.",
      },
      {
        q: "Combien de temps pour déployer un premier agent opérationnel ?",
        a: "Un premier prototype fonctionnel est généralement livré en 2 à 3 semaines. La mise en production complète avec tests et conformité prend en moyenne 4 à 6 semaines selon le volume de données.",
      },
    ],
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
      {
        title: "Diagnostic initial",
        description: "Évaluer la maturité digitale de votre organisation et identifier les priorités.",
        detailedDescription: [
          "Le **diagnostic initial** est le point de départ de toute transformation réussie. Trop souvent, les entreprises investissent dans de nouveaux outils sans avoir évalué précisément leur **maturité actuelle** ni leurs véritables besoins. Nous comblons cette lacune en menant une analyse structurée de votre organisation : stack technologique existante, pratiques numériques de vos équipes, processus formels et informels, et positionnement face aux **standards de votre secteur**.",
          "À l'issue du diagnostic, vous disposez d'une **photographie claire et objective** de votre situation actuelle — avec ses forces à préserver et ses angles morts à corriger. Cette base documentée est indispensable pour prioriser les actions avec pertinence et éviter d'investir dans des solutions inadaptées à votre contexte réel. C'est le premier acte d'une transformation fondée sur des **faits, pas sur des intuitions**."
        ],
        clientRequirements: [
          "Disponibilité de 2h pour l'entretien de diagnostic",
          "Accès à vos outils numériques en mode observateur",
          "Description de vos grands défis organisationnels actuels"
        ],
        agencyWork: [
          "Nous menons un entretien de diagnostic structuré avec vos dirigeants et équipes clés",
          "Nous analysons votre stack technologique actuelle et identifions les doublons et manques",
          "Nous benchmarkons votre maturité digitale face aux standards de votre secteur",
          "Nous livrons un diagnostic synthétique avec les priorités d'action"
        ]
      },
      {
        title: "Cartographie des besoins",
        description: "Interviewer les équipes et recenser les usages, blocages et attentes.",
        detailedDescription: [
          "Les véritables besoins d'une organisation ne sont pas toujours ceux que la direction exprime en premier. Ils se trouvent dans les **irritants quotidiens** des équipes opérationnelles, dans les contournements bricolés faute d'outils adaptés, dans les frustrations exprimées lors des interviews individuelles. Nous allons chercher ces insights là où ils se trouvent : au **contact direct des collaborateurs** qui font le travail chaque jour.",
          "La cartographie que nous livrons traduit ces témoignages qualitatifs en une **modélisation structurée** des flux de travail et des points de friction. Ce document partagé — validé par vos équipes elles-mêmes — crée le **consensus nécessaire** à toute transformation : quand les collaborateurs reconnaissent leur réalité dans l'analyse, ils s'approprient beaucoup plus naturellement les solutions proposées."
        ],
        clientRequirements: [
          "Disponibilité des collaborateurs clés pour des interviews courtes (30 min)",
          "Liste des outils actuellement utilisés par équipe",
          "Carte des processus principaux si déjà documentés"
        ],
        agencyWork: [
          "Nous réalisons des interviews individuelles avec les collaborateurs clés (30 min chacun)",
          "Nous animons des ateliers collectifs pour identifier les blocages et attentes",
          "Nous modélisons les flux de travail actuels et les points de friction",
          "Nous synthétisons les besoins dans un document partagé validé par vos équipes"
        ]
      },
      {
        title: "Feuille de route",
        description: "Prioriser les actions et définir un plan de transformation réaliste.",
        detailedDescription: [
          "Une **transformation digitale** sans feuille de route rigoureuse devient rapidement une succession de projets isolés qui ne se renforcent pas mutuellement. Nous construisons un plan de transformation cohérent qui séquence les initiatives dans un ordre logique — **les fondations avant les superstructures** — en tenant compte de vos capacités d'absorption du changement, de vos contraintes budgétaires et de vos échéances stratégiques.",
          "Nous vous présentons **plusieurs scénarios** de transformation — minimal, recommandé, ambitieux — avec leurs impacts respectifs sur vos équipes, votre budget et vos délais. Cette approche par scénarios vous donne la flexibilité de choisir le **niveau d'ambition** adapté à votre contexte, avec une visibilité totale sur ce à quoi vous renoncez selon l'option retenue. Vous prenez une décision éclairée, pas un pari."
        ],
        clientRequirements: [
          "Validation des priorités et arbitrages budgétaires proposés",
          "Confirmation du calendrier de transformation souhaité",
          "Identification des sponsors internes du projet"
        ],
        agencyWork: [
          "Nous construisons un plan de transformation priorisé avec objectifs, délais et budgets",
          "Nous présentons plusieurs scénarios (minimal, recommandé, ambitieux) avec leurs impacts",
          "Nous définissons les indicateurs de succès mesurables pour chaque initiative",
          "Nous ajustons la feuille de route selon vos retours pour qu'elle soit réaliste et engageable"
        ]
      },
      {
        title: "Sélection des outils",
        description: "Recommander les solutions adaptées à votre contexte et votre budget.",
        detailedDescription: [
          "Le marché des outils digitaux est saturé de solutions qui promettent toutes de **révolutionner votre façon de travailler**. Notre rôle est de vous protéger de ce bruit et de vous guider vers les solutions qui correspondent réellement à votre contexte — taille d'équipe, contraintes techniques, budget, **conformité RGPD**, intégrations existantes. Nous évaluons les options avec les mêmes critères que si nous investissions notre propre argent.",
          "Les **démos comparatives** que nous réalisons vous permettent de voir les solutions en action sur vos propres cas d'usage, pas sur des scénarios marketing. Notre **recommandation finale** est argumentée, documentée et accompagnée d'une analyse des risques de chaque option. Vous prenez la décision finale en toute connaissance de cause, avec un expert qui n'a aucun intérêt commercial à vous orienter vers telle ou telle solution."
        ],
        clientRequirements: [
          "Contraintes techniques à respecter (hébergement, intégrations existantes)",
          "Budget annuel alloué aux nouveaux outils",
          "Décision finale sur les solutions retenues"
        ],
        agencyWork: [
          "Nous évaluons les solutions du marché selon vos critères spécifiques (budget, intégrations, RGPD)",
          "Nous réalisons des démos comparatives des solutions présélectionnées",
          "Nous négocions les conditions tarifaires avec les éditeurs si pertinent",
          "Nous rédigeons la fiche de décision avec la recommandation argumentée"
        ]
      },
      {
        title: "Formation sur mesure",
        description: "Animer des ateliers pratiques adaptés au niveau de chaque équipe.",
        detailedDescription: [
          "La formation que nous concevons n'est pas un cours générique sur un outil : c'est un **programme pédagogique ancré dans vos cas d'usage réels**, adapté au niveau de chaque groupe et conçu pour générer des **réflexes durables** plutôt que des connaissances théoriques éphémères. Nous partons de situations concrètes que vos collaborateurs vivent chaque jour et montrons comment les nouveaux outils les transforment immédiatement.",
          "Les supports que nous produisons — guides illustrés, vidéos Loom, fiches de référence rapide — sont pensés pour **durer au-delà de la formation**. Vos collaborateurs peuvent les consulter six mois plus tard lorsqu'ils ont besoin d'un rappel, sans avoir à vous solliciter. L'**investissement formation** génère ainsi de la valeur bien au-delà de la session initiale."
        ],
        clientRequirements: [
          "Disponibilité des équipes sur les créneaux de formation convenus",
          "Accès aux ordinateurs et postes de travail habituels",
          "Désignation d'un relais interne pour les questions post-formation"
        ],
        agencyWork: [
          "Nous concevons un programme pédagogique sur mesure adapté au niveau de chaque groupe",
          "Nous animons des ateliers pratiques sur vos outils et cas d'usage réels",
          "Nous créons des supports de formation réutilisables (guides, vidéos Loom, fiches pratiques)",
          "Nous évaluons la progression et adaptons le rythme en temps réel"
        ]
      },
      {
        title: "Accompagnement terrain",
        description: "Être présent lors des premières semaines d'adoption pour lever les freins.",
        detailedDescription: [
          "Les **premières semaines d'adoption** sont les plus critiques : c'est là que les bonnes habitudes se forment ou que les anciennes reprennent le dessus. Notre accompagnement terrain pendant cette période est ce qui fait la différence entre une formation qui génère de l'**adoption durable** et une formation qui est oubliée après quelques jours de retour au bureau. Nous sommes disponibles, réactifs et proactifs pour lever chaque frein au moment où il se présente.",
          "Ce suivi de proximité nous permet également d'identifier les **réajustements nécessaires** en temps réel : si certains collaborateurs ont besoin de plus d'accompagnement sur un point spécifique, si un outil ne répond pas exactement au besoin identifié, si de nouvelles questions émergent de l'usage réel. Nous documentons les **bonnes pratiques** qui émergent spontanément pour les transformer en standards partagés au sein de votre équipe."
        ],
        clientRequirements: [
          "Disponibilité pour des points hebdomadaires courts (15 à 30 min)",
          "Remontée des blocages rencontrés en utilisation réelle",
          "Ouverture à l'ajustement du programme si nécessaire"
        ],
        agencyWork: [
          "Nous sommes disponibles pour des points hebdomadaires courts afin de lever les blocages",
          "Nous répondons aux questions de vos équipes via un canal dédié (Slack ou email)",
          "Nous ajustons le programme de formation si certains points nécessitent plus de temps",
          "Nous documentons les bonnes pratiques émergentes pour pérenniser l'adoption"
        ]
      },
      {
        title: "Bilan & suivi",
        description: "Mesurer l'adoption, ajuster le programme et planifier la veille continue.",
        detailedDescription: [
          "Le **bilan à 30 et 90 jours** est le moment de vérité : les indicateurs d'adoption mesurés objectivement nous disent ce qui fonctionne, ce qui résiste et ce qui mérite d'être renforcé. Cette rigueur dans l'évaluation est ce qui distingue un accompagnement sérieux d'une simple prestation de formation : nous assumons la **responsabilité des résultats** et ajustons notre programme si les objectifs ne sont pas atteints.",
          "Le bilan est aussi l'occasion d'identifier de **nouvelles opportunités d'optimisation** que seul l'usage réel peut révéler. Les utilisateurs développent des usages créatifs que nous n'avions pas anticipés, ou expriment de nouveaux besoins qui ouvrent des perspectives d'évolution. Ce retour du terrain nourrit une **veille technologique ciblée** que nous vous partageons proactivement pour vous garder en avance sur votre secteur."
        ],
        clientRequirements: [
          "Collecte des indicateurs d'adoption définis en amont",
          "Participation au bilan à 30 et 90 jours",
          "Décision sur la suite : programme complémentaire ou autonomie"
        ],
        agencyWork: [
          "Nous mesurons les indicateurs d'adoption définis en amont et comparons aux objectifs",
          "Nous réalisons un bilan structuré à 30 et 90 jours avec recommandations d'ajustement",
          "Nous identifions les nouvelles opportunités d'optimisation révélées par l'usage réel",
          "Nous proposons un plan de veille technologique pour anticiper les évolutions futures"
        ]
      },
    ],
    stats: [
      { value: "85%", label: "Taux d'adoption réel à 3 mois" },
      { value: "4.9/5", label: "Satisfaction moyenne des formations" },
      { value: "+2 j.", label: "Récupérés par mois et par collaborateur" },
    ],
    faq: [
      {
        q: "Notre équipe n'est pas technique. Les formations sont-elles accessibles ?",
        a: "C'est précisément notre spécialité. Nous adaptons le niveau de chaque atelier au profil des participants. Aucun prérequis technique n'est nécessaire — nous partons de vos usages quotidiens et progressons à votre rythme.",
      },
      {
        q: "Que contient concrètement un audit stratégique IA ?",
        a: "L'audit couvre 4 axes : vos processus métier (goulots et opportunités), vos outils existants (doublons, manques), la maturité numérique de vos équipes et un benchmark de vos concurrents. Il se conclut par une feuille de route priorisée et chiffrée.",
      },
      {
        q: "Peut-on faire appel à vous ponctuellement sans engagement long terme ?",
        a: "Oui. Nous proposons des interventions à la carte : une journée d'audit, un atelier de formation unique ou une série de sessions. L'accompagnement continu (CDO as a Service) est une option, pas une obligation.",
      },
      {
        q: "Comment mesurez-vous l'efficacité des formations ?",
        a: "Nous définissons avec vous des indicateurs d'adoption mesurables avant la formation (ex : % d'utilisation d'un outil, temps moyen sur une tâche). Un bilan à 30 et 90 jours est inclus dans chaque programme.",
      },
    ],
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
      {
        title: "Définition des KPIs",
        description: "Identifier avec vous les indicateurs clés qui reflètent vos objectifs métier.",
        detailedDescription: [
          "Les **KPIs** ne valent que s'ils reflètent fidèlement ce qui compte vraiment pour votre business. Trop souvent, les tableaux de bord sont remplis de **métriques de vanité** — visiteurs, impressions, taux d'ouverture — qui donnent bonne conscience sans guider la décision. Nous travaillons avec vous pour identifier les 5 à 8 indicateurs qui ont un lien direct avec vos **revenus, votre rétention ou votre efficacité opérationnelle**.",
          "Le **référentiel KPIs** que nous livrons à l'issue de cet atelier devient la boussole de tout le pilotage : chaque action que nous recommandons, chaque optimisation que nous proposons, chaque décision que vous prenez est évaluée à l'aune de ces indicateurs. Vous pilotez enfin avec des chiffres qui ont du sens, pas avec des tableaux de bord qui impressionnent **mais n'orientent pas**."
        ],
        clientRequirements: [
          "Liste de vos objectifs business pour les 6 à 12 prochains mois",
          "Accès à vos données existantes (GA, CRM, comptabilité...)",
          "Validation des KPIs retenus et de leurs cibles chiffrées"
        ],
        agencyWork: [
          "Nous animons un atelier de définition des KPIs alignés sur vos objectifs stratégiques",
          "Nous sélectionnons les métriques les plus pertinentes parmi votre stack d'outils",
          "Nous fixons les cibles mensuelles et trimestrielles réalistes et ambitieuses",
          "Nous livrons le référentiel KPIs documenté qui sert de boussole au pilotage"
        ]
      },
      {
        title: "Mise en place du tracking",
        description: "Configurer les outils d'analyse et les sources de données à centraliser.",
        detailedDescription: [
          "Un pilotage ne peut être fiable que si les **données qui l'alimentent** le sont également. La mise en place du tracking est une étape technique fondamentale qui garantit que chaque KPI mesuré reflète la **réalité de votre activité** — sans doublons, sans lacunes, sans biais liés à une configuration bancale. Nous auditeons votre plan de taggage existant, corrigeons les anomalies et mettons en place une **collecte de données robuste** et exhaustive.",
          "La **centralisation** de toutes vos sources de données — analytics, CRM, publicité, ventes, support — dans un référentiel unique est ce qui rend le pilotage vraiment puissant. Vous n'avez plus besoin de jongler entre six outils pour comprendre la performance de votre business : **tout est visible en un seul endroit**, cohérent et actualisé en temps réel. Les alertes automatiques que nous configurons vous informent immédiatement lorsqu'un indicateur dévie de sa trajectoire."
        ],
        clientRequirements: [
          "Accès admin à vos outils analytics et sources de données",
          "Validation du plan de taggage proposé",
          "Fenêtre de déploiement sans impact sur votre activité"
        ],
        agencyWork: [
          "Nous configurons le plan de taggage sur votre site et vos outils",
          "Nous connectons toutes vos sources de données (GA4, CRM, publicité, ventes)",
          "Nous vérifions la qualité des données collectées et corrigeons les anomalies",
          "Nous mettons en place les alertes automatiques en cas de déviation"
        ]
      },
      {
        title: "Dashboard sur-mesure",
        description: "Construire votre tableau de bord vivant, accessible en temps réel.",
        detailedDescription: [
          "Un bon **tableau de bord** est celui que vos équipes consultent chaque matin avec intérêt, pas celui qui prend la poussière après trois semaines d'utilisation. Nous concevons votre dashboard en partant de vos **usages réels** : qui le consulte, avec quelle fréquence, pour prendre quelles décisions. La clarté visuelle, la hiérarchie des informations et la **fluidité de navigation** transforment des données brutes en insights actionnables.",
          "Le tableau de bord que nous construisons dans **Looker Studio** ou Metabase est organisé en vues adaptées à chaque profil — vue opérationnelle pour vos équipes, vue synthétique pour la direction, vue détaillée pour le marketing. Il se **rafraîchit automatiquement** et est accessible à toute personne autorisée, depuis n'importe quel appareil. Vos collaborateurs sont formés à le lire et à l'interpréter dès la livraison."
        ],
        clientRequirements: [
          "Validation des vues et indicateurs affichés",
          "Désignation des utilisateurs du dashboard",
          "Retours sur l'ergonomie et les visualisations préférées"
        ],
        agencyWork: [
          "Nous construisons votre tableau de bord dans Looker Studio ou Metabase",
          "Nous organisons les vues par profil (opérationnel, dirigeant, équipe marketing)",
          "Nous configurons le rafraîchissement automatique et l'accès multi-utilisateurs",
          "Nous formons vos équipes à la lecture et l'interprétation des données"
        ]
      },
      {
        title: "Revue mensuelle",
        description: "Analyser ensemble les résultats, les écarts et les opportunités.",
        detailedDescription: [
          "La **revue mensuelle** est le rendez-vous stratégique qui transforme vos données en décisions. Nous ne vous soumettons pas un rapport de chiffres — nous animons une **conversation structurée** autour de vos résultats, des écarts par rapport aux objectifs et des opportunités que les données révèlent. Chaque réunion se termine avec **2 à 3 actions prioritaires claires**, un responsable désigné et une date d'échéance. Rien ne reste dans le flou.",
          "Le **compte-rendu préparatoire** que nous livrons avant chaque réunion vous permet d'arriver avec un regard déjà formé sur les points clés, sans perdre de temps en lecture à froid pendant la session. Ce respect de votre temps est une marque de notre engagement pour une **collaboration efficace**. En 45 à 60 minutes par mois, vous disposez d'une vision complète de votre performance digitale et d'un cap clair pour le mois suivant."
        ],
        clientRequirements: [
          "Disponibilité mensuelle d'1h pour la revue de performance",
          "Lecture du compte-rendu préparatoire avant la réunion",
          "Validation ou ajustement des objectifs du mois suivant"
        ],
        agencyWork: [
          "Nous préparons un compte-rendu structuré : résultats vs objectifs, faits marquants, recommandations",
          "Nous animons la réunion de revue mensuelle (45 à 60 min) avec un ordre du jour précis",
          "Nous contextualisons les chiffres par rapport aux tendances sectorielles",
          "Nous définissons ensemble les 2-3 actions prioritaires du mois suivant"
        ]
      },
      {
        title: "Optimisations",
        description: "Ajuster les workflows, campagnes et automatisations en fonction des données.",
        detailedDescription: [
          "L'**optimisation continue** est le moteur de la croissance durable. Chaque mois, les données de performance révèlent des leviers que nous n'aurions pas pu identifier sans un historique suffisant : une **page de conversion** qui sous-performe, un segment d'audience plus réactif, un workflow dont le timing peut être amélioré, une automatisation dont le taux d'erreur augmente. Nous identifions ces opportunités systématiquement et proposons des ajustements concrets, **pas des observations générales**.",
          "Les **tests A/B** que nous réalisons sur les éléments clés de vos dispositifs digitaux transforment les hypothèses en certitudes. Chaque modification est mesurée, son impact est documenté et les **apprentissages sont capitalisés** pour nourrir les itérations suivantes. Vous bénéficiez d'un processus d'amélioration continue qui progresse mois après mois, porté par les données de votre propre activité."
        ],
        clientRequirements: [
          "Validation des modifications avant mise en production",
          "Définition des priorités d'optimisation pour le mois",
          "Autorisation d'accès aux outils concernés par les ajustements"
        ],
        agencyWork: [
          "Nous identifions les leviers d'optimisation les plus impactants via l'analyse des données",
          "Nous implémentons les ajustements validés sur vos workflows, campagnes ou automatisations",
          "Nous réalisons des tests A/B sur les éléments clés pour valider les hypothèses",
          "Nous mesurons l'impact de chaque optimisation et documentons les apprentissages"
        ]
      },
      {
        title: "Reporting exécutif",
        description: "Produire un compte-rendu clair et actionnable pour vos équipes dirigeantes.",
        detailedDescription: [
          "Le **reporting exécutif** s'adresse à des décideurs qui ont peu de temps et beaucoup de contexte à traiter. Nous concevons des rapports **synthétiques et visuellement percutants** qui vont à l'essentiel : vos performances clés, les tendances significatives et les recommandations d'action prioritaires. Un dirigeant doit pouvoir lire ce rapport en **cinq minutes** et en sortir avec une vision claire de la situation et des prochaines étapes.",
          "Les **benchmarks sectoriels** que nous intégrons systématiquement donnent une perspective indispensable à vos chiffres bruts. Savoir que votre taux de conversion est de 2,3 % n'a de sens que si vous savez que la **médiane de votre secteur** est à 1,8 %. Cette contextualisation est ce qui permet à vos dirigeants de calibrer leur niveau d'ambition et de communiquer avec confiance sur la performance digitale de l'entreprise."
        ],
        clientRequirements: [
          "Définition du format et des destinataires du rapport",
          "Validation avant envoi aux parties prenantes",
          "Retours sur les informations à mettre en avant"
        ],
        agencyWork: [
          "Nous rédigeons un rapport exécutif synthétique adapté à un public non-technique",
          "Nous produisons des visualisations percutantes qui facilitent la prise de décision",
          "Nous incluons les benchmarks sectoriels pour contextualiser vos performances",
          "Nous livrons le rapport en amont de la réunion pour une lecture préparatoire"
        ]
      },
      {
        title: "Veille & anticipation",
        description: "Surveiller les tendances du marché et anticiper les ajustements stratégiques.",
        detailedDescription: [
          "Dans un environnement digital qui évolue à **vitesse accélérée**, la veille n'est pas un luxe : c'est un **avantage compétitif**. Nous surveillons en permanence les évolutions de votre secteur, les mises à jour des algorithmes, les nouvelles pratiques concurrentielles et les technologies émergentes susceptibles d'impacter votre activité. Vous êtes alerté **proactivement** lorsqu'une opportunité ou une menace se matérialise — pas après que vos concurrents l'ont déjà saisie.",
          "Les **recommandations stratégiques** que nous formulons à partir de cette veille sont toujours contextualisées à votre situation spécifique : nous ne vous transmettons pas de newsletters génériques, nous vous apportons des insights actionnables qui s'inscrivent dans votre feuille de route. Cette **anticipation continue** est ce qui vous permet de rester en avance sur votre marché et de capitaliser sur les nouvelles opportunités avant vos concurrents."
        ],
        clientRequirements: [
          "Partage de vos orientations stratégiques futures",
          "Ouverture aux recommandations proactives de notre part",
          "Disponibilité pour un point flash en cas d'opportunité urgente"
        ],
        agencyWork: [
          "Nous surveillons les évolutions de votre secteur et des technologies pertinentes",
          "Nous vous alertons proactivement sur les opportunités ou menaces identifiées",
          "Nous proposons des ajustements stratégiques basés sur les signaux faibles du marché",
          "Nous préparons des recommandations d'évolution de votre stack digital"
        ]
      },
    ],
    stats: [
      { value: "100%", label: "Visibilité temps réel sur vos KPIs" },
      { value: "+28%", label: "ROI moyen à 6 mois de pilotage" },
      { value: "1 réunion", label: "Par mois suffit pour tout piloter" },
    ],
    faq: [
      {
        q: "Quels KPIs suivez-vous exactement ?",
        a: "Cela dépend entièrement de vos objectifs. Pour un e-commerce : taux de conversion, panier moyen, coût d'acquisition. Pour un SaaS : churn, MRR, activation. Nous commençons toujours par définir ensemble ce qui compte vraiment pour votre business.",
      },
      {
        q: "Comment fonctionne concrètement la réunion mensuelle ?",
        a: "Chaque mois, nous préparons un compte-rendu structuré : résultats vs objectifs, 3 faits marquants, 2–3 recommandations actionnables. La réunion dure 45 à 60 min et se tient en visio ou en présentiel selon vos préférences.",
      },
      {
        q: "Peut-on arrêter le retainer si on n'est pas satisfait ?",
        a: "Oui. Nos contrats de pilotage continu sont résiliables chaque mois avec un préavis de 30 jours. Nous préférons mériter votre confiance chaque mois plutôt que vous enfermer dans un engagement.",
      },
      {
        q: "Faut-il avoir déjà des outils en place pour démarrer ?",
        a: "Non. Si vous partez de zéro, nous mettons en place tout le tracking et les tableaux de bord dès le premier mois. Si vous avez déjà des outils, nous nous y connectons et les enrichissons.",
      },
    ],
  }
];
