// English translations of Maison Siranno projects

import { ProjectData, ExpertiseCategory } from './projects';

export const projectsData: ProjectData[] = [
  // ─── 1. JD RÉNOVATION ────────────────────────────────────────────────────────
  {
    id: 'jd-renovation',
    title: "JD Rénovation",
    category: "Showcase Website & Digital Identity",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas', 'contenu-marketing-ia', 'conseil-formation', 'pilotage-continu'],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    description: "Complete digital presence for a renovation company: showcase website, 80 blog articles, visual identity, Google Workspace setup, and ongoing support.",
    tags: ["Showcase Website", "Local SEO", "Visual Identity", "Google Workspace", "Blog", "Content"],
    client: "Julien DELALOY",
    year: "2025",
    date: "2025-03",
    fullDescription: "JD Rénovation is a construction company founded by Julien Delaloy, specialising in full-scale renovation: tiling, masonry, roofing and carpentry. Before our involvement, the business had no digital presence whatsoever and relied entirely on word of mouth to find clients. We built its digital ecosystem from scratch: visual identity, website, content strategy, Google Workspace infrastructure, and printed materials for job sites. A fully custom 360° mission for a small artisan business.",
    challenges: [
      "Starting from zero: no web presence, no professional email, no digital tools of any kind",
      "A highly competitive local market with established players already well-positioned",
      "A client unfamiliar with digital tools — progressive onboarding was essential",
      "A budget suited to a small artisan business while targeting a premium-quality result"
    ],
    url: "https://www.jd-renovation.fr",
    results: [
      "+60% increase in quote requests from the second month after launch",
      "Lighthouse score 94/100 — ultra-fast, mobile-first website",
      "3 weeks from zero to a live production site",
      "Top 5 on Google for key local search queries within 6 weeks",
      "80 blog articles published with associated visuals and videos",
      "Complete visual identity delivered: logo, colours, typography, printed materials",
      "Google Workspace deployed: professional email, shared Drive, synchronised calendar"
    ],
    process: [
      "We started with a thorough audit of the local competitive landscape to identify high-traffic keywords and content angles that convert in the construction sector within the target geographic area.",
      "The visual identity was built around sober, professional colours conveying the solidity of artisan expertise, applied consistently across all media: web, print (flyers, quotes), and vehicle branding.",
      "The website was developed with an intelligent contact form that qualifies the type of work required at the very first point of contact, filtering out out-of-scope requests and saving Julien valuable time.",
      "80 blog articles were written and published, each accompanied by images and short videos illustrating completed projects, strengthening local authority and natural search rankings for long-tail queries.",
      "Google Workspace was configured end-to-end: professional @jd-renovation.fr mailbox, shared Drive for quotes and invoices, synchronised calendar, and training for Julien to become independently proficient in under an hour."
    ]
  },

  // ─── 2. PORTFOLIO YOANN DELALOY ──────────────────────────────────────────────
  {
    id: 'portfolio-yoann-delaloy',
    title: "Portfolio Yoann DELALOY",
    category: "Web Portfolio & Digital CV",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas', 'pilotage-continu'],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    description: "Web portfolio and interactive PDF CV showcasing the technical skills of Yoann DELALOY — developer, automation specialist and founder of Maison Siranno.",
    tags: ["Portfolio", "React", "TypeScript", "PDF CV", "Personal Branding"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-09",
    fullDescription: "This portfolio was designed as both a technical and personal showcase for Yoann DELALOY, full-stack developer, AI automation expert and founder of Maison Siranno. The goal: to lead by example and demonstrate the quality of work the agency can produce, while serving as an interactive CV for incoming contacts. The site (yoanndelaloy.fr) combines premium animations, project showcasing, and a PDF CV generator accessible directly from the browser.",
    challenges: [
      "Showcasing a rare profile: developer, automation specialist, strategist and agency founder all in one",
      "Creating a visual experience premium enough to convince demanding clients",
      "Generating a PDF CV faithful to the web design without heavyweight third-party libraries",
      "Maintaining excellent performance despite complex animations"
    ],
    url: "https://www.yoanndelaloy.fr",
    results: [
      "Portfolio live at yoanndelaloy.fr with premium animations",
      "Downloadable PDF CV generated in-browser — faithful to the design",
      "Lighthouse score 96/100 despite the visual richness",
      "A technical showcase that directly serves as a commercial argument for Maison Siranno",
      "Ranking on 'freelance React developer' and 'AI automation expert' search queries"
    ],
    process: [
      "We began by defining the positioning strategy: highlighting the hybrid profile (technical + strategic) rather than competing with pure UI portfolios.",
      "The design was crafted to reflect the Maison Siranno universe: metallic textures, fluid animations, premium typography — the portfolio is itself a demonstration of the level of finish offered to clients.",
      "PDF CV generation was implemented using a CSS Print Media approach, ensuring a clean and professional output with no dependency on third-party services.",
      "A dynamic 'projects' section allows new work to be added without modifying the codebase, making long-term maintenance straightforward."
    ]
  },

  // ─── 3. APP GESTION DE PROJET RPG ────────────────────────────────────────────
  {
    id: 'app-gestion-projet-rpg',
    title: "RPG Project Management App",
    category: "Custom Web Application",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas'],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    description: "A Notion-style project management application with a RPG video-game-inspired UX/UI and a full gamification system to boost engagement and productivity.",
    tags: ["React", "TypeScript", "Gamification", "RPG", "UX/UI", "Web App"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-10",
    fullDescription: "Born from a simple conviction — project management does not have to be boring — this application reimagines the Notion experience through the lens of role-playing games (RPG). The user becomes a hero who progresses, earns experience, levels up and unlocks rewards by completing tasks and projects. The interface combines the organisational power of a tool like Notion with the emotional engagement of an RPG, creating a unique productivity experience that transforms daily work into an adventure.",
    challenges: [
      "Designing a coherent gamification system that remains motivating over the long term",
      "Maintaining the clarity and efficiency of the tool despite the RPG overlay",
      "Creating an immersive UX without sacrificing application performance",
      "Balancing the complexity of RPG mechanics with the simplicity of use expected from a productivity tool"
    ],
    results: [
      "Complete application with kanban boards, task lists and calendar view in an RPG universe",
      "Operational XP system, levels, achievements and visual rewards",
      "Immersive UX with thematic sounds, animations and transitions",
      "Modular React architecture ready for the addition of new features",
      "Optimal Core Web Vitals performance despite the richness of visual effects"
    ],
    process: [
      "The RPG design system was defined first: a fantasy colour palette, evocative typefaces, iconography consistent with the target universe — all without ever losing sight of readability.",
      "The gamification mechanics were modelled as a mini ruleset: each task type earns calibrated XP points, weekly objectives unlock achievements, and productivity streaks are visually rewarded.",
      "The data architecture was designed so that the gamification layer is decoupled from the business logic, allowing game mechanics to be adjusted without touching project management.",
      "Test sessions were conducted to validate that RPG animations and sounds remained motivating rather than distracting during intensive use."
    ]
  },

  // ─── 4. APP GESTION FINANCIÈRE RPG ───────────────────────────────────────────
  {
    id: 'app-gestion-financiere-rpg',
    title: "RPG Financial Management App",
    category: "Custom Web Application",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas'],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    description: "A Finary-style wealth management application, reimagined with an advanced RPG UX/UI and a gamification system that turns saving into a quest.",
    tags: ["React", "TypeScript", "Finance", "Gamification", "RPG", "Dashboard"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-11",
    fullDescription: "The RPG financial management app reinvents the relationship with saving and investing. Inspired by Finary but carried by a role-playing game visual universe, it transforms each financial goal into a quest, each investment into a resource to manage, and each savings milestone into a victory to celebrate. The goal is to make wealth management accessible, engaging and even exciting for people who usually perceive these topics as austere or overly complex.",
    challenges: [
      "Making complex financial concepts (diversification, yield, risk) accessible through the RPG metaphor",
      "Designing financial data visualisations that are as beautiful as they are informative",
      "Ensuring the security of sensitive data within a front-end architecture",
      "Maintaining RPG consistency across data-heavy screens (dashboards)"
    ],
    results: [
      "Complete wealth dashboard: assets, liabilities, savings, investments in RPG view",
      "Financial quest system: user-defined objectives transformed into missions",
      "Interactive Recharts-style visualisations styled as a fantasy world map",
      "Visual progression mechanics: 'wealth' levels, achievements, milestones",
      "Secure architecture with data stored locally (no banking data transmitted)"
    ],
    process: [
      "The first phase involved mapping financial concepts onto RPG mechanics: net worth = the hero's hit points, passive income = regeneration, debts = curses to lift.",
      "Dashboards were designed with careful attention to information hierarchy: key indicators accessible at a glance, details available on drill-down, without overwhelming the user.",
      "The financial quest system was designed to be flexible: the user defines their goal (buying a car, building an emergency fund, preparing for retirement), and the app automatically breaks it down into playful steps.",
      "Systematic design reviews helped find the right balance between RPG immersion and the sobriety expected of a professional tool — never at the expense of numerical readability."
    ]
  },

  // ─── 5. APP SUIVI SÉANCES SPORT ──────────────────────────────────────────────
  {
    id: 'app-suivi-seances-sport',
    title: "Sports Session Tracking App",
    category: "Custom Web Application",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas', 'conseil-formation'],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    description: "A custom aqua aerobics session tracking application for Maxime Jambou, enabling him to plan, record and analyse every training session.",
    tags: ["React", "TypeScript", "Sport", "Tracking", "Dashboard", "Mobile-first"],
    client: "Maxime JAMBOU",
    year: "2025",
    date: "2025-10",
    fullDescription: "Maxime Jambou is an aqua aerobics instructor. He needed a simple, effective tool to track his members' sessions: attendance, progression, exercises performed, and personalised notes by profile. Existing solutions (Excel, generic apps) did not match the specific nature of aqua aerobics or his working habits. We co-built a fully custom, mobile-first application designed to be used poolside.",
    challenges: [
      "Designing an interface usable in a wet environment, with wet hands, on a smartphone",
      "Modelling the specifics of aquatic exercises (water resistance, variable intensity by depth)",
      "Enabling tracking of multiple member groups with different fitness levels",
      "Delivering a usable MVP quickly ahead of the next season"
    ],
    results: [
      "Mobile-first application operational from the very first session after launch",
      "Attendance, exercise and progression tracking per member",
      "Aquatic exercise library with intensity levels",
      "Weekly dashboard to analyse group regularity and progression",
      "Onboarding in under 10 minutes — training included in the delivery"
    ],
    process: [
      "Several working sessions with Maxime allowed us to precisely understand his workflow: before the session (preparing the plan), during (noting attendance and adjustments), and after (archiving and analysis).",
      "The design was built for field use: large buttons, high contrast (readability in direct sunlight), primary actions accessible in one tap from the main screen.",
      "The aquatic exercise library was built with Maxime, who contributed his professional expertise to define intensity levels, variations and contraindications.",
      "A real-conditions test phase (poolside, wet smartphone) was organised before launch to validate ergonomics in the actual usage environment.",
      "A 2-week post-launch support period allowed a few interface points flagged after the first real-world sessions to be adjusted."
    ]
  },

  // ─── 6. AUTOMATISATION YOANN DELALOY ─────────────────────────────────────────
  {
    id: 'automatisation-yoann-delaloy',
    title: "Yoann DELALOY Automation",
    category: "Automation & AI Agents",
    expertise: 'automatisation-n8n',
    expertises: ['automatisation-n8n', 'ia-agents-rag'],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    description: "Complete personal automation system: inbox triage, industry monitoring, automatic meeting reports, documentation writing and an AI orchestrator agent.",
    tags: ["n8n", "Claude", "Automation", "AI Agent", "Monitoring", "Productivity"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-09",
    fullDescription: "This project is the automation of Yoann DELALOY's own daily life — a permanent laboratory where every time saving frees up bandwidth to create value. The system is built around a central orchestrator agent (a conversational bot connected to Claude) that drives a constellation of specialised n8n workflows: intelligent inbox management, automatic industry monitoring, meeting report generation from transcripts, assisted writing of technical documentation, and coding assistance. A concrete example of what Maison Siranno can deploy for its clients.",
    challenges: [
      "Orchestrating numerous AI workflows without creating fragile dependencies between them",
      "Calibrating agent prompts to maintain consistent quality without supervision",
      "Managing language model API costs under intensive daily use",
      "Building an evolving system that can be enriched without rebuilding from scratch"
    ],
    results: [
      "Inbox processed, sorted and pre-replied automatically every morning",
      "Daily industry monitoring on AI, automation and development topics",
      "Meeting reports generated from transcripts in under 2 minutes",
      "Technical documentation produced 4× faster with the dedicated agent",
      "Orchestrator agent accessible via chat to trigger any workflow",
      "Estimated reduction of -3 hours of repetitive tasks per working day"
    ],
    process: [
      "The architecture started with an audit of repetitive tasks across the typical week: classified by frequency, duration and added value — to identify quick wins and the most significant gains.",
      "Each automation domain (email, monitoring, meetings, code, documentation) was treated as an independent project with its own n8n workflow and its own quality criteria.",
      "The orchestrator agent was developed last, once the elemental building blocks were stable: a conversational bot (Telegram) connected to Claude that allows any workflow to be triggered via a natural language message.",
      "Feedback loops were integrated: certain workflows generate a summary of their own execution, sent weekly to identify drift and adjust prompts.",
      "The entire system is documented and versioned, allowing it to be audited, reproduced for other clients, and enriched without risk of regression."
    ]
  },

  // ─── 7. PERSONAL BRANDING YOANN DELALOY ──────────────────────────────────────
  {
    id: 'personal-branding-yoann-delaloy',
    title: "Yoann DELALOY Personal Branding",
    category: "Content Strategy & Personal Branding",
    expertise: 'contenu-marketing-ia',
    expertises: ['contenu-marketing-ia', 'pilotage-continu'],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=800",
    description: "Full content strategy and personal branding for Yoann DELALOY: positioning, editorial line, production and long-term management.",
    tags: ["Personal Branding", "LinkedIn", "Content Strategy", "AI", "Video", "Copywriting"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-09",
    fullDescription: "Yoann DELALOY's personal branding was conceived as a strategic asset in service of Maison Siranno. By positioning Yoann as a reference voice on AI applied to business, automation, and AI-augmented development, the strategy aims to generate a steady inbound flow of qualified prospects without relying on paid advertising. Content production is accelerated by AI tools (Claude, Kling AI, NotebookLM) without ever sacrificing authenticity or the singularity of the message.",
    challenges: [
      "Defining a differentiating positioning in a highly saturated space (AI, digital marketing)",
      "Maintaining a sustained publication rhythm without dedicating entire days to it",
      "Producing content that engages while demonstrating genuine technical expertise",
      "Coordinating video, text, visuals and audio in a coherent personal brand"
    ],
    results: [
      "Clear editorial line: 3 content pillars, defined tone of voice, personal visual charter",
      "AI-accelerated production: 1 long-form piece → adapted into 5 formats in 1 hour",
      "Active LinkedIn presence with regular publications on AI, automation and development",
      "Short-form video strategy (Kling AI) for technical demos and client use cases",
      "Automated monthly newsletter: curated monitoring + personal insights"
    ],
    process: [
      "A positioning workshop defined the 3 editorial angles underpinning the entire strategy: 'AI applied in practice', 'automation for the independent professional', and 'AI-augmented development'.",
      "An AI-assisted content production system was put in place: each substantive idea is first developed into a long-form article, then automatically adapted into a LinkedIn post, video script, newsletter and thread.",
      "Video production was structured around AI tools (Kling AI, voice synthesis, automated editing) to maintain a weekly publication rhythm without a dedicated team.",
      "A performance dashboard was put in place to track the results of each format and continuously refine the strategy based on real engagement data."
    ]
  },

  // ─── 8. SIRANNO HUB ──────────────────────────────────────────────────────────
  {
    id: 'siranno-hub',
    title: "Siranno Hub",
    category: "AI SaaS & Personal Assistant",
    expertise: 'ia-agents-rag',
    expertises: ['ia-agents-rag', 'pilotage-continu'],
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=800",
    description: "Ultra-comprehensive personal ERP-type SaaS: 3,800+ AI agents, dozens of dashboards (project, wealth, marketing), accessible via Telegram and WhatsApp.",
    tags: ["SaaS", "AI", "RAG Agents", "ERP", "Dashboard", "Telegram", "WhatsApp"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-11",
    fullDescription: "Siranno Hub is Maison Siranno's most ambitious project: a personal ERP-type SaaS supercharged with artificial intelligence, designed to centralise and automate life management — projects, wealth, marketing, monitoring, communication. It is built on an architecture of over 3,800 AI agents working in concert, organised into specialised clusters and orchestrated by a master agent. The interface consists of dozens of thematic dashboards accessible via browser, but also directly from Telegram and WhatsApp for total integration into daily life.",
    challenges: [
      "Orchestrating 3,800+ AI agents without latency or conflicts between workflows",
      "Designing a coherent UX across dozens of very different dashboards",
      "Enabling access via messaging interfaces (Telegram, WhatsApp) without loss of richness",
      "Maintaining performance and stability on a system of this scale",
      "Securing sensitive data (wealth, communications) in a cloud architecture"
    ],
    results: [
      "3,800+ AI agents operational in coordination",
      "Dozens of dashboards: project management, wealth, marketing, monitoring",
      "Full accessibility from Telegram and WhatsApp — zero interface to open",
      "Agent latency < 2 seconds on 95% of requests under normal conditions",
      "Scalable architecture: new agents added without overhauling the existing system",
      "All management data centralised in a single unified hub"
    ],
    process: [
      "The architecture was conceived like a city: each agent cluster manages a district (finance, projects, marketing...), with a standardised communication network between districts and a global control centre.",
      "The RAG (Retrieval-Augmented Generation) system was built on a vector database (PostgreSQL + pgvector) continuously fed by the user's own data, enabling agents to respond with an ultra-precise personal context.",
      "The Telegram/WhatsApp interface was developed as an abstraction layer: the user sends a natural language message, the AI router identifies the right agent and orchestrates the response — without the user needing to know the underlying architecture.",
      "Dozens of dashboards were designed with a unified design system — despite the diversity of domains — to guarantee visual consistency and a minimal learning curve.",
      "Real-time monitoring watches the health of all agents and triggers automatic alerts in case of anomaly, ensuring the system's reliability day after day."
    ]
  },
];
