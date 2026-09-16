// English translations of Maison Siranno client testimonials
//
// See data/testimonials.ts for the rule: real clients only, and no generated
// portrait images. Five fictional testimonials were removed on 16/09/2026.

import { Testimonial } from './testimonials';

// ─── Home page testimonials ─────────────────────────────────────────────────
export const homeTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Founder & CEO",
    company: "JD Rénovation",
    content: "Yoann completely transformed our business. Before: no online presence, everything relied on word of mouth. Today, our website generates quote requests every week, our 80 blog articles put us at the top of local Google results, and our visual identity truly reflects the professionalism of our work. An investment paid back in under two months.",
    image: "",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Aqua aerobics instructor",
    company: "Aqua aerobics classes",
    content: "I needed a simple tool to track my sessions and my members — without ending up with an overly complex piece of software. Yoann understood exactly what I needed and delivered an application I use poolside, with wet hands, with zero friction. The onboarding was instant.",
    image: "",
    projectId: "app-suivi-seances-sport"
  },
];

// ─── Projects page testimonials ─────────────────────────────────────────────
export const projectsTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Founder & CEO",
    company: "JD Rénovation",
    content: "What I appreciate most about Maison Siranno is the closeness. Yoann doesn't just deliver a website — he understands your business, he trains you, he stays available. It's a true collaboration, not a cold transaction. I'd recommend him without hesitation to any tradesperson looking to make the digital shift.",
    image: "",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Aqua aerobics instructor",
    company: "Aqua aerobics classes",
    content: "What impressed me most is that Yoann took the time to come and observe a real session to understand how I work. The application perfectly mirrors my actual workflow — before, during and after the session. That's what bespoke really means: not an adapted template, but a solution built for me.",
    image: "",
    projectId: "app-suivi-seances-sport"
  },
];

// ─── One testimonial per project, for the detail pages ──────────────────────
export const allTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Founder & CEO",
    company: "JD Rénovation",
    content: "Yoann completely transformed our business. Before: no online presence, everything relied on word of mouth. Today, our website generates quote requests every week, our 80 blog articles put us at the top of local Google results, and our visual identity truly reflects the professionalism of our work. An investment paid back in under two months.",
    image: "",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Aqua aerobics instructor",
    company: "Aqua aerobics classes",
    content: "I needed a simple tool to track my sessions and my members, without ending up with overly complex software. Yoann understood exactly what I needed and delivered an application I use poolside, with wet hands, with zero friction. The onboarding was instant.",
    image: "",
    projectId: "app-suivi-seances-sport"
  },
  // Signed in his own name: a founder's note on an internal tool, not a client
  // review — the stated role makes that explicit.
  {
    name: "Yoann DELALOY",
    role: "Founder",
    company: "Maison Siranno",
    content: "Siranno Hub is the project that represents me most. What I used to do in several hours each day — monitoring, emails, reports, project management — is now handled in seconds. It's my proof that AI should serve freedom, not complexity.",
    image: "",
    projectId: "siranno-hub"
  },
];
