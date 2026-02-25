// English translations of Maison Siranno client testimonials

import { Testimonial } from './testimonials';

// ─── Home page testimonials (3) ─────────────────────────────────────────────
export const homeTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Founder & CEO",
    company: "JD Rénovation",
    content: "Yoann completely transformed our business. Before: no online presence, everything relied on word of mouth. Today, our website generates quote requests every week, our 80 blog articles put us at the top of local Google results, and our visual identity truly reflects the professionalism of our work. An investment paid back in under two months.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Aqua aerobics instructor",
    company: "Aqua aerobics classes",
    content: "I needed a simple tool to track my sessions and my members — without ending up with an overly complex piece of software. Yoann understood exactly what I needed and delivered an application I use poolside, with wet hands, with zero friction. The onboarding was instant.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    projectId: "app-suivi-seances-sport"
  },
  {
    name: "Lucas FERREIRA",
    role: "Entrepreneur & Freelancer",
    company: "Digital Consultant",
    content: "I was struggling to organise my projects and my finances in one place without getting lost in spreadsheets. The management app Maison Siranno built for me is both fun and powerful — the RPG approach genuinely makes me want to use it every day. It's rare to find a tool that motivates you just as much as it organises you.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    projectId: "app-gestion-projet-rpg"
  },
];

// ─── Projects page testimonials (3) ─────────────────────────────────────────
export const projectsTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Founder & CEO",
    company: "JD Rénovation",
    content: "What I appreciate most about Maison Siranno is the closeness. Yoann doesn't just deliver a website — he understands your business, he trains you, he stays available. It's a true collaboration, not a cold transaction. I'd recommend him without hesitation to any tradesperson looking to make the digital shift.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Aqua aerobics instructor",
    company: "Aqua aerobics classes",
    content: "What impressed me most is that Yoann took the time to come and observe a real session to understand how I work. The application perfectly mirrors my actual workflow — before, during and after the session. That's what bespoke really means: not an adapted template, but a solution built for me.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    projectId: "app-suivi-seances-sport"
  },
  {
    name: "Camille RENAUD",
    role: "Content creator",
    company: "Studio Renaud",
    content: "Maison Siranno helped me structure my content strategy and set up automations that completely changed my relationship with production. I publish twice as often with half the effort. And the personal branding has attracted clients I would never have reached otherwise.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    projectId: "personal-branding-yoann-delaloy"
  },
];

// ─── All testimonials — 1 per real project (for ServiceDetailPage) ──────────
export const allTestimonials: Testimonial[] = [
  // JD Rénovation
  {
    name: "Julien DELALOY",
    role: "Founder & CEO",
    company: "JD Rénovation",
    content: "Yoann completely transformed our business. Before: no online presence, everything relied on word of mouth. Today, our website generates quote requests every week, our 80 blog articles put us at the top of local Google results, and our visual identity truly reflects the professionalism of our work. An investment paid back in under two months.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    projectId: "jd-renovation"
  },

  // Portfolio Yoann DELALOY
  {
    name: "Marie LEFÈVRE",
    role: "Director",
    company: "Tech Recruitment Agency",
    content: "I received Yoann's portfolio even before our first interview. The quality of the work was obvious from the very first seconds — a site with this level of finish is itself a cover letter. That's exactly what a portfolio should do: convince before you've read a single line.",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    projectId: "portfolio-yoann-delaloy"
  },

  // App Gestion de projet RPG
  {
    name: "Lucas FERREIRA",
    role: "Entrepreneur & Freelancer",
    company: "Digital Consultant",
    content: "I was struggling to organise my projects without getting lost in spreadsheets. The app developed by Maison Siranno is both fun and powerful — the RPG approach genuinely makes me want to use it every day. It's rare to find a tool that motivates you just as much as it organises you.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    projectId: "app-gestion-projet-rpg"
  },

  // App Gestion financière RPG
  {
    name: "Thomas VAILLANT",
    role: "Individual investor",
    company: "Independent",
    content: "I was tracking my wealth in an ageing Excel file. The Maison Siranno application changed everything — the dashboards are beautiful, the data is clear, and the RPG aspect genuinely keeps me coming back every week. For the first time, I have a global, real-time view of my financial situation.",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    projectId: "app-gestion-financiere-rpg"
  },

  // App Suivi séances sport
  {
    name: "Maxime JAMBOU",
    role: "Aqua aerobics instructor",
    company: "Aqua aerobics classes",
    content: "I needed a simple tool to track my sessions and my members, without ending up with overly complex software. Yoann understood exactly what I needed and delivered an application I use poolside, with wet hands, with zero friction. The onboarding was instant.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    projectId: "app-suivi-seances-sport"
  },

  // Automatisation Yoann DELALOY
  {
    name: "Sébastien MORIN",
    role: "Sales Director",
    company: "Industrial SME",
    content: "Maison Siranno set up an automation system for us that processes our inbox, generates meeting minutes and feeds our CRM automatically. What used to take us 2–3 hours a day is now handled in the background. Our sales team can finally focus on what matters: selling.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    projectId: "automatisation-yoann-delaloy"
  },

  // Personal Branding Yoann DELALOY
  {
    name: "Camille RENAUD",
    role: "Content creator",
    company: "Studio Renaud",
    content: "Maison Siranno helped me structure my content strategy and set up automations that changed my relationship with production. I publish twice as often with half the effort. And the personal branding has attracted clients I would never have reached otherwise.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    projectId: "personal-branding-yoann-delaloy"
  },

  // Siranno Hub
  {
    name: "Yoann DELALOY",
    role: "Founder",
    company: "Maison Siranno",
    content: "Siranno Hub is the project that represents me most. Over 3,800 AI agents orchestrated, dozens of dashboards, direct access from Telegram and WhatsApp. What I used to do in several hours each day — monitoring, emails, reports, project management — is now handled in seconds. It's my proof that AI should serve freedom, not complexity.",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    projectId: "siranno-hub"
  },
];
