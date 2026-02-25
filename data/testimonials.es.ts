// Traducciones al español de los testimonios de clientes de Maison Siranno

import { Testimonial } from './testimonials';

// ─── Testimonios página de inicio (3) ───────────────────────────────────────
export const homeTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Fundador y Director",
    company: "JD Rénovation",
    content: "Yoann transformó nuestra empresa de arriba abajo. Antes: sin presencia online, todo dependía del boca a boca. Hoy, nuestro sitio genera solicitudes de presupuesto cada semana, nuestros 80 artículos de blog nos posicionan en la cima de los resultados de Google locales y nuestra identidad visual refleja realmente la seriedad de nuestro trabajo. Una inversión amortizada en menos de dos meses.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Monitor de aquagym",
    company: "Clases de aquagym",
    content: "Necesitaba una herramienta sencilla para hacer el seguimiento de mis sesiones y mis alumnos, sin acabar con un software complicado. Yoann entendió exactamente lo que necesitaba y entregó una aplicación que uso al borde de la piscina, con las manos mojadas, sin ningún rozamiento. La incorporación fue inmediata.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    projectId: "app-suivi-seances-sport"
  },
  {
    name: "Lucas FERREIRA",
    role: "Emprendedor y Autónomo",
    company: "Consultor Digital",
    content: "Me costaba organizar mis proyectos y mis finanzas en un mismo lugar sin perderme entre hojas de cálculo. La app de gestión que Maison Siranno desarrolló para mí es a la vez divertida y potente — el enfoque RPG me da genuinas ganas de usarla a diario. Es difícil encontrar una herramienta que te motive tanto como te organiza.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    projectId: "app-gestion-projet-rpg"
  },
];

// ─── Testimonios página de realizaciones (3) ────────────────────────────────
export const projectsTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Fundador y Director",
    company: "JD Rénovation",
    content: "Lo que más valoro de Maison Siranno es la cercanía. Yoann no solo entrega un sitio web — comprende tu negocio, te forma, se mantiene disponible. Es una colaboración real, no una prestación fría. Lo recomiendo sin dudarlo a cualquier artesano que quiera dar el salto digital.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Monitor de aquagym",
    company: "Clases de aquagym",
    content: "Lo que me impresionó fue que Yoann se tomó el tiempo de venir a observar una sesión real para entender cómo trabajo. La aplicación refleja exactamente mi flujo de trabajo real — antes, durante y después de la sesión. Eso es lo que significa a medida: no una plantilla adaptada, sino una solución construida para mí.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    projectId: "app-suivi-seances-sport"
  },
  {
    name: "Camille RENAUD",
    role: "Creadora de contenidos",
    company: "Studio Renaud",
    content: "Maison Siranno me ayudó a estructurar mi estrategia de contenidos y a poner en marcha automatizaciones que cambiaron completamente mi relación con la producción. Publico el doble de veces con la mitad del esfuerzo. Y el personal branding ha atraído clientes a los que nunca habría llegado de otra manera.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    projectId: "personal-branding-yoann-delaloy"
  },
];

// ─── Todos los testimonios — 1 por proyecto real (para ServiceDetailPage) ───
export const allTestimonials: Testimonial[] = [
  // JD Rénovation
  {
    name: "Julien DELALOY",
    role: "Fundador y Director",
    company: "JD Rénovation",
    content: "Yoann transformó nuestra empresa de arriba abajo. Antes: sin presencia online, todo dependía del boca a boca. Hoy, nuestro sitio genera solicitudes de presupuesto cada semana, nuestros 80 artículos de blog nos posicionan en la cima de los resultados de Google locales y nuestra identidad visual refleja realmente la seriedad de nuestro trabajo. Una inversión amortizada en menos de dos meses.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    projectId: "jd-renovation"
  },

  // Portfolio Yoann DELALOY
  {
    name: "Marie LEFÈVRE",
    role: "Directora",
    company: "Agencia de Selección Tech",
    content: "Recibí el portfolio de Yoann antes incluso de nuestra primera entrevista. La calidad del trabajo era evidente desde los primeros segundos — un sitio con ese nivel de acabado es en sí mismo una carta de presentación. Eso es exactamente lo que debe hacer un portfolio: convencer antes de que hayas leído una sola línea.",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    projectId: "portfolio-yoann-delaloy"
  },

  // App Gestion de projet RPG
  {
    name: "Lucas FERREIRA",
    role: "Emprendedor y Autónomo",
    company: "Consultor Digital",
    content: "Me costaba organizar mis proyectos sin perderme entre hojas de cálculo. La app desarrollada por Maison Siranno es a la vez divertida y potente — el enfoque RPG me da genuinas ganas de usarla a diario. Es difícil encontrar una herramienta que te motive tanto como te organiza.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    projectId: "app-gestion-projet-rpg"
  },

  // App Gestion financière RPG
  {
    name: "Thomas VAILLANT",
    role: "Inversor particular",
    company: "Independiente",
    content: "Hacía el seguimiento de mi patrimonio en un archivo Excel ya anticuado. La aplicación de Maison Siranno lo cambió todo — los dashboards son bonitos, los datos son claros y el aspecto RPG me motiva a volver cada semana. Por primera vez tengo una visión global y en tiempo real de mi situación financiera.",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    projectId: "app-gestion-financiere-rpg"
  },

  // App Suivi séances sport
  {
    name: "Maxime JAMBOU",
    role: "Monitor de aquagym",
    company: "Clases de aquagym",
    content: "Necesitaba una herramienta sencilla para hacer el seguimiento de mis sesiones y mis alumnos, sin acabar con un software complicado. Yoann entendió exactamente lo que necesitaba y entregó una aplicación que uso al borde de la piscina, con las manos mojadas, sin ningún rozamiento. La incorporación fue inmediata.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    projectId: "app-suivi-seances-sport"
  },

  // Automatisation Yoann DELALOY
  {
    name: "Sébastien MORIN",
    role: "Director Comercial",
    company: "PYME Industrial",
    content: "Maison Siranno nos implantó un sistema de automatización que procesa nuestra bandeja de entrada, genera las actas de reunión y alimenta nuestro CRM de forma automática. Lo que antes nos llevaba 2 o 3 horas al día ahora se gestiona en segundo plano. Nuestros comerciales pueden centrarse por fin en lo que importa: vender.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    projectId: "automatisation-yoann-delaloy"
  },

  // Personal Branding Yoann DELALOY
  {
    name: "Camille RENAUD",
    role: "Creadora de contenidos",
    company: "Studio Renaud",
    content: "Maison Siranno me ayudó a estructurar mi estrategia de contenidos y a poner en marcha automatizaciones que cambiaron mi relación con la producción. Publico el doble de veces con la mitad del esfuerzo. Y el personal branding ha atraído clientes a los que nunca habría llegado de otra manera.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    projectId: "personal-branding-yoann-delaloy"
  },

  // Siranno Hub
  {
    name: "Yoann DELALOY",
    role: "Fundador",
    company: "Maison Siranno",
    content: "Siranno Hub es el proyecto que más me representa. Más de 3.800 agentes IA orquestados, decenas de dashboards, acceso directo desde Telegram y WhatsApp. Lo que antes me llevaba varias horas cada día — vigilancia, correos, informes, gestión de proyectos — ahora se resuelve en segundos. Es mi demostración de que la IA debe servir a la libertad, no a la complejidad.",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    projectId: "siranno-hub"
  },
];
