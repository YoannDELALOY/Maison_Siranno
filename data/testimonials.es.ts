// Traducciones al español de los testimonios de clientes de Maison Siranno
//
// Ver data/testimonials.ts para la regla: solo clientes reales, y ninguna
// foto generada. Cinco testimonios ficticios se retiraron el 16/09/2026.

import { Testimonial } from './testimonials';

// ─── Testimonios página de inicio ───────────────────────────────────────────
export const homeTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Fundador y Director",
    company: "JD Rénovation",
    content: "Yoann transformó nuestra empresa de arriba abajo. Antes: sin presencia online, todo dependía del boca a boca. Hoy, nuestro sitio genera solicitudes de presupuesto cada semana, nuestros 80 artículos de blog nos posicionan en la cima de los resultados de Google locales y nuestra identidad visual refleja realmente la seriedad de nuestro trabajo. Una inversión amortizada en menos de dos meses.",
    image: "",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Monitor de aquagym",
    company: "Clases de aquagym",
    content: "Necesitaba una herramienta sencilla para hacer el seguimiento de mis sesiones y mis alumnos, sin acabar con un software complicado. Yoann entendió exactamente lo que necesitaba y entregó una aplicación que uso al borde de la piscina, con las manos mojadas, sin ningún rozamiento. La incorporación fue inmediata.",
    image: "",
    projectId: "app-suivi-seances-sport"
  },
];

// ─── Testimonios página de realizaciones ────────────────────────────────────
export const projectsTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Fundador y Director",
    company: "JD Rénovation",
    content: "Lo que más valoro de Maison Siranno es la cercanía. Yoann no solo entrega un sitio web — comprende tu negocio, te forma, se mantiene disponible. Es una colaboración real, no una prestación fría. Lo recomiendo sin dudarlo a cualquier artesano que quiera dar el salto digital.",
    image: "",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Monitor de aquagym",
    company: "Clases de aquagym",
    content: "Lo que me impresionó fue que Yoann se tomó el tiempo de venir a observar una sesión real para entender cómo trabajo. La aplicación refleja exactamente mi flujo de trabajo real — antes, durante y después de la sesión. Eso es lo que significa a medida: no una plantilla adaptada, sino una solución construida para mí.",
    image: "",
    projectId: "app-suivi-seances-sport"
  },
];

// ─── Un testimonio por proyecto, para las páginas de detalle ────────────────
export const allTestimonials: Testimonial[] = [
  {
    name: "Julien DELALOY",
    role: "Fundador y Director",
    company: "JD Rénovation",
    content: "Yoann transformó nuestra empresa de arriba abajo. Antes: sin presencia online, todo dependía del boca a boca. Hoy, nuestro sitio genera solicitudes de presupuesto cada semana, nuestros 80 artículos de blog nos posicionan en la cima de los resultados de Google locales y nuestra identidad visual refleja realmente la seriedad de nuestro trabajo. Una inversión amortizada en menos de dos meses.",
    image: "",
    projectId: "jd-renovation"
  },
  {
    name: "Maxime JAMBOU",
    role: "Monitor de aquagym",
    company: "Clases de aquagym",
    content: "Necesitaba una herramienta sencilla para hacer el seguimiento de mis sesiones y mis alumnos, sin acabar con un software complicado. Yoann entendió exactamente lo que necesitaba y entregó una aplicación que uso al borde de la piscina, con las manos mojadas, sin ningún rozamiento. La incorporación fue inmediata.",
    image: "",
    projectId: "app-suivi-seances-sport"
  },
  // Firmado con su propio nombre: es la nota de un fundador sobre su
  // herramienta interna, no una reseña de cliente.
  {
    name: "Yoann DELALOY",
    role: "Fundador",
    company: "Maison Siranno",
    content: "Siranno Hub es el proyecto que más me representa. Lo que antes me llevaba varias horas cada día — vigilancia, correos, informes, gestión de proyectos — ahora se resuelve en segundos. Es mi demostración de que la IA debe servir a la libertad, no a la complejidad.",
    image: "",
    projectId: "siranno-hub"
  },
];
