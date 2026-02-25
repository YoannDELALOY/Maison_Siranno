// Traducciones al español de los proyectos de Maison Siranno

import { ProjectData, ExpertiseCategory } from './projects';

export const projectsData: ProjectData[] = [
  // ─── 1. JD RÉNOVATION ────────────────────────────────────────────────────────
  {
    id: 'jd-renovation',
    title: "JD Rénovation",
    category: "Sitio Vitrina e Identidad Digital",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas', 'contenu-marketing-ia', 'conseil-formation', 'pilotage-continu'],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    description: "Presencia digital completa para una empresa de reformas: sitio vitrina, 80 artículos de blog, identidad visual, Google Workspace y acompañamiento continuo.",
    tags: ["Sitio Vitrina", "SEO Local", "Identidad Visual", "Google Workspace", "Blog", "Contenido"],
    client: "Julien DELALOY",
    year: "2025",
    date: "2025-03",
    fullDescription: "JD Rénovation es una empresa de construcción fundada por Julien Delaloy, especializada en reformas integrales: alicatado, albañilería, cubiertas y carpintería. Antes de nuestra intervención, la empresa no tenía ninguna presencia digital y dependía únicamente del boca a boca para encontrar clientes. Construimos su ecosistema digital desde cero: identidad visual, sitio web, estrategia de contenidos, infraestructura Google Workspace y materiales impresos para las obras. Una misión 360° completamente a medida para una pequeña empresa artesanal.",
    challenges: [
      "Partir de cero: sin presencia web, sin correo profesional, sin herramientas digitales de ningún tipo",
      "Un mercado local muy competitivo con actores ya bien posicionados",
      "Un cliente poco familiarizado con las herramientas digitales — la incorporación progresiva era indispensable",
      "Un presupuesto adaptado a una pequeña empresa artesanal sin renunciar a un resultado de calidad premium"
    ],
    url: "https://www.jd-renovation.fr",
    results: [
      "+60% de solicitudes de presupuesto desde el segundo mes tras el lanzamiento",
      "Puntuación Lighthouse 94/100 — sitio ultra-rápido y mobile-first",
      "3 semanas de cero a un sitio en producción",
      "Top 5 en Google para las búsquedas locales clave en 6 semanas",
      "80 artículos de blog publicados con visuales y vídeos asociados",
      "Identidad visual completa entregada: logotipo, colores, tipografía, materiales impresos",
      "Google Workspace desplegado: correo profesional, Drive compartido, calendario sincronizado"
    ],
    process: [
      "Comenzamos con una auditoría exhaustiva del entorno competitivo local para identificar las palabras clave con mayor tráfico y los ángulos de contenido que convierten en el sector de la construcción en la zona geográfica objetivo.",
      "La identidad visual se construyó en torno a colores sobrios y profesionales que transmiten la solidez del saber hacer artesanal, aplicada de forma coherente en todos los soportes: web, impresión (folletos, presupuestos) y vehículo.",
      "El sitio se desarrolló con un formulario de contacto inteligente que califica el tipo de intervención desde el primer contacto, filtrando solicitudes fuera del ámbito de actuación y ahorrando tiempo valioso a Julien.",
      "Se redactaron y publicaron 80 artículos de blog, cada uno acompañado de imágenes y vídeos cortos que ilustran las obras, reforzando la autoridad local y el posicionamiento orgánico en búsquedas de cola larga.",
      "Google Workspace se configuró de principio a fin: buzón profesional @jd-renovation.fr, Drive compartido para presupuestos y facturas, calendario sincronizado y formación para que Julien pudiera manejarlo de forma autónoma en menos de una hora."
    ]
  },

  // ─── 2. PORTFOLIO YOANN DELALOY ──────────────────────────────────────────────
  {
    id: 'portfolio-yoann-delaloy',
    title: "Portfolio Yoann DELALOY",
    category: "Portfolio Web y CV Digital",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas', 'pilotage-continu'],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    description: "Portfolio web y CV PDF interactivo que pone en valor las competencias técnicas de Yoann DELALOY — desarrollador, especialista en automatización y fundador de Maison Siranno.",
    tags: ["Portfolio", "React", "TypeScript", "CV PDF", "Personal Branding"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-09",
    fullDescription: "Este portfolio fue diseñado como escaparate técnico y personal de Yoann DELALOY, desarrollador full-stack, experto en automatización con IA y fundador de Maison Siranno. El objetivo: demostrar con el ejemplo la calidad del trabajo que la agencia puede producir, al tiempo que sirve de CV interactivo para las tomas de contacto. El sitio (yoanndelaloy.fr) combina animaciones premium, presentación de proyectos y un generador de CV PDF accesible directamente desde el navegador.",
    challenges: [
      "Poner en valor un perfil poco habitual: desarrollador, automatizador, estratega y fundador de agencia",
      "Crear una experiencia visual lo suficientemente premium como para convencer a clientes exigentes",
      "Generar un CV PDF fiel al diseño web sin librerías de terceros pesadas",
      "Mantener un rendimiento excelente a pesar de las animaciones complejas"
    ],
    url: "https://www.yoanndelaloy.fr",
    results: [
      "Portfolio en vivo en yoanndelaloy.fr con animaciones premium",
      "CV PDF descargable generado desde el navegador — fiel al diseño",
      "Puntuación Lighthouse 96/100 pese a la riqueza visual",
      "Un escaparate técnico que sirve directamente como argumento comercial para Maison Siranno",
      "Posicionamiento en búsquedas de 'desarrollador React freelance' y 'experto IA automatización'"
    ],
    process: [
      "Empezamos por definir la estrategia de posicionamiento: destacar el perfil híbrido (técnico + estratégico) en lugar de competir con portfolios de pura UI.",
      "El diseño se concibió para reflejar el universo de Maison Siranno: texturas metálicas, animaciones fluidas, tipografía premium — el portfolio es en sí mismo una demostración del nivel de acabado ofrecido a los clientes.",
      "La generación del CV PDF se implementó con un enfoque de CSS Print Media, garantizando una salida limpia y profesional sin dependencia de servicios de terceros.",
      "Una sección de 'realizaciones' dinámica permite añadir nuevos proyectos sin modificar el código, facilitando el mantenimiento a largo plazo."
    ]
  },

  // ─── 3. APP GESTION DE PROJET RPG ────────────────────────────────────────────
  {
    id: 'app-gestion-projet-rpg',
    title: "App de Gestión de Proyectos RPG",
    category: "Aplicación Web a Medida",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas'],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    description: "Aplicación de gestión de proyectos estilo Notion con una UX/UI inspirada en los videojuegos RPG y un completo sistema de gamificación para potenciar el compromiso.",
    tags: ["React", "TypeScript", "Gamificación", "RPG", "UX/UI", "App Web"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-10",
    fullDescription: "Nacida de una convicción sencilla — la gestión de proyectos no tiene por qué ser aburrida — esta aplicación reimagina la experiencia Notion a través del prisma de los juegos de rol (RPG). El usuario es un héroe que progresa, gana experiencia, sube de nivel y desbloquea recompensas al completar tareas y proyectos. La interfaz combina la potencia organizativa de una herramienta como Notion con el compromiso emocional de un RPG, creando una experiencia de productividad única que transforma el trabajo diario en una aventura.",
    challenges: [
      "Diseñar un sistema de gamificación coherente que se mantenga motivador a largo plazo",
      "Mantener la claridad y la eficacia de la herramienta a pesar del envoltorio RPG",
      "Crear una UX inmersiva sin sacrificar el rendimiento de la aplicación",
      "Equilibrar la complejidad de las mecánicas RPG con la sencillez de uso propia de una herramienta de productividad"
    ],
    results: [
      "Aplicación completa con tableros kanban, listas de tareas y vista de calendario en universo RPG",
      "Sistema de XP, niveles, logros y recompensas visuales operativo",
      "UX inmersiva con sonidos, animaciones y transiciones temáticas",
      "Arquitectura React modular preparada para la adición de nuevas funcionalidades",
      "Rendimiento Core Web Vitals óptimo a pesar de la riqueza de efectos visuales"
    ],
    process: [
      "El sistema de diseño RPG se definió en primer lugar: paleta de colores fantástica, tipografías evocadoras, iconografía coherente con el universo buscado — sin perder nunca de vista la legibilidad.",
      "Las mecánicas de gamificación se modelaron como un mini sistema de reglas: cada tipo de tarea otorga puntos de XP calibrados, los objetivos semanales desbloquean logros y las rachas de productividad se recompensan visualmente.",
      "La arquitectura de datos se diseñó para que la capa de gamificación esté desacoplada de la lógica de negocio, permitiendo ajustar las mecánicas de juego sin tocar la gestión de proyectos.",
      "Se realizaron sesiones de prueba para validar que las animaciones y los sonidos RPG seguían siendo motivadores y no distrayentes durante un uso intensivo."
    ]
  },

  // ─── 4. APP GESTION FINANCIÈRE RPG ───────────────────────────────────────────
  {
    id: 'app-gestion-financiere-rpg',
    title: "App de Gestión Financiera RPG",
    category: "Aplicación Web a Medida",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas'],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    description: "Aplicación de gestión patrimonial estilo Finary, revisitada con una UX/UI RPG avanzada y un sistema de gamificación para convertir el ahorro en una misión.",
    tags: ["React", "TypeScript", "Finanzas", "Gamificación", "RPG", "Dashboard"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-11",
    fullDescription: "La aplicación de gestión financiera RPG reinventa la relación con el ahorro y la inversión. Inspirada en Finary pero dotada de un universo visual de juego de rol, transforma cada objetivo financiero en una misión, cada inversión en un recurso a gestionar y cada hito de ahorro en una victoria que celebrar. El objetivo es hacer la gestión patrimonial accesible, atractiva e incluso emocionante para perfiles que habitualmente perciben estos temas como áridos o complejos.",
    challenges: [
      "Hacer accesibles conceptos financieros complejos (diversificación, rentabilidad, riesgo) a través de la metáfora RPG",
      "Diseñar visualizaciones de datos financieros tan bellas como informativas",
      "Garantizar la seguridad de los datos sensibles en una arquitectura front-end",
      "Mantener la coherencia RPG en pantallas con gran carga de datos (dashboards)"
    ],
    results: [
      "Dashboard patrimonial completo: activos, pasivos, ahorro e inversiones en vista RPG",
      "Sistema de misiones financieras: objetivos definidos por el usuario convertidos en quests",
      "Visualizaciones interactivas tipo Recharts con aspecto de mapa del mundo fantástico",
      "Mecánicas de progresión visual: niveles de 'riqueza', logros e hitos",
      "Arquitectura segura con datos almacenados localmente (ningún dato bancario transmitido)"
    ],
    process: [
      "La primera fase consistió en mapear los conceptos financieros sobre mecánicas RPG: el patrimonio neto equivale a los puntos de vida del héroe, los ingresos pasivos a la regeneración y las deudas a las maldiciones que levantar.",
      "Los dashboards se diseñaron prestando especial atención a la jerarquía de la información: los indicadores clave accesibles de un vistazo, los detalles disponibles mediante drill-down, sin abrumar al usuario.",
      "El sistema de misiones financieras se diseñó para ser flexible: el usuario define su objetivo (comprar un coche, constituir un fondo de emergencia, preparar la jubilación) y la app lo descompone automáticamente en pasos lúdicos.",
      "Revisiones de diseño sistemáticas permitieron encontrar el equilibrio adecuado entre la inmersión RPG y la sobriedad de una herramienta profesional, sin sacrificar nunca la legibilidad de las cifras."
    ]
  },

  // ─── 5. APP SUIVI SÉANCES SPORT ──────────────────────────────────────────────
  {
    id: 'app-suivi-seances-sport',
    title: "App de Seguimiento de Sesiones Deportivas",
    category: "Aplicación Web a Medida",
    expertise: 'web-apps-saas',
    expertises: ['web-apps-saas', 'conseil-formation'],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    description: "Aplicación a medida de seguimiento de sesiones de aquagym para Maxime Jambou, que permite planificar, registrar y analizar cada entrenamiento.",
    tags: ["React", "TypeScript", "Deporte", "Seguimiento", "Dashboard", "Mobile-first"],
    client: "Maxime JAMBOU",
    year: "2025",
    date: "2025-10",
    fullDescription: "Maxime Jambou es monitor de aquagym. Necesitaba una herramienta sencilla y eficaz para hacer el seguimiento de las sesiones de sus alumnos: asistencia, progresión, ejercicios realizados y notas personalizadas por perfil. Las soluciones existentes (Excel, aplicaciones genéricas) no se adaptaban a la especificidad del aquagym ni a sus hábitos de trabajo. Co-construimos una aplicación completamente a medida, mobile-first, concebida para usarse al borde de la piscina.",
    challenges: [
      "Diseñar una interfaz utilizable en un entorno húmedo, con las manos mojadas, desde un smartphone",
      "Modelar la especificidad de los ejercicios acuáticos (resistencia del agua, intensidad variable según la profundidad)",
      "Permitir el seguimiento de varios grupos de alumnos con niveles diferentes",
      "Entregar un MVP utilizable rápidamente antes de la próxima temporada"
    ],
    results: [
      "Aplicación mobile-first operativa desde la primera sesión tras el lanzamiento",
      "Seguimiento de asistencia, ejercicios y progresión por alumno",
      "Biblioteca de ejercicios acuáticos con niveles de intensidad",
      "Dashboard semanal para analizar la regularidad y la progresión del grupo",
      "Incorporación en menos de 10 minutos — formación incluida en la entrega"
    ],
    process: [
      "Varias sesiones de trabajo con Maxime permitieron entender con precisión su flujo de trabajo: antes de la sesión (preparar el plan), durante (anotar asistencias y ajustes) y después (archivar y analizar).",
      "El diseño se pensó para el uso en campo: botones grandes, alto contraste (legibilidad bajo el sol directo), acciones principales accesibles con un solo toque desde la pantalla principal.",
      "La biblioteca de ejercicios acuáticos se construyó junto a Maxime, quien aportó su experiencia profesional para definir los niveles de intensidad, las variantes y las contraindicaciones.",
      "Se organizó una fase de prueba en condiciones reales (borde de piscina, smartphone mojado) antes del lanzamiento para validar la ergonomía en el entorno de uso real.",
      "Un acompañamiento post-lanzamiento de 2 semanas permitió ajustar algunos puntos de la interfaz detectados tras las primeras sesiones en condiciones reales."
    ]
  },

  // ─── 6. AUTOMATISATION YOANN DELALOY ─────────────────────────────────────────
  {
    id: 'automatisation-yoann-delaloy',
    title: "Automatización Yoann DELALOY",
    category: "Automatización y Agentes IA",
    expertise: 'automatisation-n8n',
    expertises: ['automatisation-n8n', 'ia-agents-rag'],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    description: "Sistema de automatización personal completo: triaje de bandeja de entrada, vigilancia sectorial, informes de reunión automáticos, redacción de documentación y agente orquestador IA.",
    tags: ["n8n", "Claude", "Automatización", "Agente IA", "Vigilancia", "Productividad"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-09",
    fullDescription: "Este proyecto es la automatización del día a día del propio Yoann DELALOY — un laboratorio permanente donde cada ahorro de tiempo libera ancho de banda para crear valor. El sistema se basa en un agente orquestador central (un bot de conversación conectado a Claude) que dirige una constelación de flujos de trabajo n8n especializados: gestión inteligente de la bandeja de entrada, vigilancia sectorial automática, generación de informes de reunión a partir de transcripciones, redacción asistida de documentación técnica y ayuda a la escritura de código. Un ejemplo concreto de lo que Maison Siranno puede implantar para sus clientes.",
    challenges: [
      "Orquestar numerosos flujos de trabajo de IA sin crear dependencias frágiles entre ellos",
      "Calibrar los prompts de los agentes para mantener un nivel de calidad constante sin supervisión",
      "Gestionar los costes de las APIs de modelos de lenguaje con un uso diario intensivo",
      "Construir un sistema evolutivo que pueda enriquecerse sin reconstruirlo desde cero"
    ],
    results: [
      "Bandeja de entrada procesada, clasificada y pre-respondida automáticamente cada mañana",
      "Vigilancia sectorial diaria sobre las temáticas de IA, automatización y desarrollo",
      "Informes de reunión generados desde transcripción en menos de 2 minutos",
      "Documentación técnica producida 4× más rápido con el agente dedicado",
      "Agente orquestador accesible vía chat para activar cualquier flujo de trabajo",
      "Reducción estimada de -3 horas de tareas repetitivas por día laborable"
    ],
    process: [
      "La arquitectura comenzó con una auditoría de las tareas repetitivas de la semana tipo: clasificadas por frecuencia, duración y valor añadido — para identificar las ganancias rápidas y las más significativas.",
      "Cada dominio de automatización (correo, vigilancia, reuniones, código, documentación) se trató como un proyecto independiente con su propio flujo n8n y sus propios criterios de calidad.",
      "El agente orquestador se desarrolló en último lugar, una vez estabilizados los bloques elementales: un bot de conversación (Telegram) conectado a Claude que permite activar cualquier flujo mediante un mensaje en lenguaje natural.",
      "Se integraron bucles de retroalimentación: algunos flujos generan un resumen de su propia ejecución, enviado semanalmente para identificar desviaciones y ajustar los prompts.",
      "Todo el sistema está documentado y versionado, permitiendo auditarlo, reproducirlo para otros clientes y enriquecerlo sin riesgo de regresión."
    ]
  },

  // ─── 7. PERSONAL BRANDING YOANN DELALOY ──────────────────────────────────────
  {
    id: 'personal-branding-yoann-delaloy',
    title: "Personal Branding Yoann DELALOY",
    category: "Estrategia de Contenidos y Personal Branding",
    expertise: 'contenu-marketing-ia',
    expertises: ['contenu-marketing-ia', 'pilotage-continu'],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=800",
    description: "Estrategia de contenidos y personal branding completos para Yoann DELALOY: posicionamiento, línea editorial, producción y gestión a largo plazo.",
    tags: ["Personal Branding", "LinkedIn", "Estrategia de Contenidos", "IA", "Vídeo", "Copywriting"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-09",
    fullDescription: "El personal branding de Yoann DELALOY se concibió como un activo estratégico al servicio de Maison Siranno. Al posicionar a Yoann como una voz de referencia en IA aplicada al negocio, la automatización y el desarrollo aumentado por IA, la estrategia busca generar un flujo constante de prospectos cualificados sin depender de publicidad de pago. La producción de contenidos se acelera con herramientas de IA (Claude, Kling AI, NotebookLM) sin sacrificar nunca la autenticidad y la singularidad del mensaje.",
    challenges: [
      "Definir un posicionamiento diferenciador en un espacio muy saturado (IA, marketing digital)",
      "Mantener un ritmo de publicación sostenido sin dedicarle jornadas enteras",
      "Producir contenidos que generen engagement demostrando a la vez una experiencia técnica real",
      "Coordinar vídeo, texto, imagen y audio de forma coherente para una marca personal sólida"
    ],
    results: [
      "Línea editorial clara: 3 pilares de contenido, tono de voz definido, identidad visual personal",
      "Producción acelerada por agentes IA: 1 contenido largo → adaptado a 5 formatos en 1 hora",
      "Presencia activa en LinkedIn con publicaciones regulares sobre IA, automatización y desarrollo",
      "Estrategia de vídeo corto (Kling AI) para demos técnicas y casos de uso de clientes",
      "Newsletter mensual automatizada: resumen de vigilancia sectorial + reflexiones personales"
    ],
    process: [
      "Un taller de posicionamiento permitió definir los 3 ángulos editoriales que fundamentan toda la estrategia: 'IA aplicada a lo concreto', 'automatización para el profesional independiente' y 'desarrollo aumentado por IA'.",
      "Se implantó un sistema de producción de contenidos asistido por IA: cada idea de fondo se desarrolla primero en un artículo largo, que luego se adapta automáticamente a post de LinkedIn, guion de vídeo, newsletter y hilo.",
      "La producción de vídeo se estructuró en torno a herramientas de IA (Kling AI, síntesis de voz, edición automatizada) para mantener un ritmo de publicación semanal sin equipo dedicado.",
      "Se implantó un panel de control de seguimiento para medir el rendimiento de cada formato y afinar continuamente la estrategia según los datos reales de engagement."
    ]
  },

  // ─── 8. SIRANNO HUB ──────────────────────────────────────────────────────────
  {
    id: 'siranno-hub',
    title: "Siranno Hub",
    category: "SaaS IA y Asistente Personal",
    expertise: 'ia-agents-rag',
    expertises: ['ia-agents-rag', 'pilotage-continu'],
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=800",
    description: "SaaS tipo ERP personal ultra-completo: más de 3.800 agentes IA, decenas de dashboards (proyecto, patrimonio, marketing), accesible desde Telegram y WhatsApp.",
    tags: ["SaaS", "IA", "Agentes RAG", "ERP", "Dashboard", "Telegram", "WhatsApp"],
    client: "Yoann DELALOY",
    year: "2025",
    date: "2025-11",
    fullDescription: "Siranno Hub es el proyecto más ambicioso de Maison Siranno: un SaaS personal tipo ERP potenciado con inteligencia artificial, concebido para centralizar y automatizar la gestión de vida — proyectos, patrimonio, marketing, vigilancia, comunicación. Se basa en una arquitectura de más de 3.800 agentes IA que trabajan de forma coordinada, organizados en clusters especializados y orquestados por un agente maestro. La interfaz se compone de varias decenas de dashboards temáticos accesibles desde el navegador, pero también directamente desde Telegram y WhatsApp para una integración total en el día a día.",
    challenges: [
      "Orquestar más de 3.800 agentes IA sin latencia ni conflictos entre los flujos de trabajo",
      "Diseñar una UX coherente en varias decenas de dashboards muy diferentes",
      "Permitir el acceso desde interfaces de mensajería (Telegram, WhatsApp) sin pérdida de riqueza",
      "Mantener el rendimiento y la estabilidad de un sistema de esta envergadura",
      "Proteger datos sensibles (patrimonio, comunicaciones) en una arquitectura cloud"
    ],
    results: [
      "Más de 3.800 agentes IA operativos y coordinados",
      "Varias decenas de dashboards: gestión de proyectos, patrimonio, marketing, vigilancia",
      "Accesibilidad total desde Telegram y WhatsApp — sin necesidad de abrir ninguna interfaz",
      "Latencia del agente < 2 segundos en el 95% de las solicitudes en condiciones normales",
      "Arquitectura escalable: nuevos agentes añadidos sin necesidad de reformar lo existente",
      "Centralización de todos los datos de gestión en un único hub unificado"
    ],
    process: [
      "La arquitectura se concibió como una ciudad: cada cluster de agentes gestiona un barrio (finanzas, proyectos, marketing...), con una red de comunicación estandarizada entre barrios y un centro de control global.",
      "El sistema de RAG (Retrieval-Augmented Generation) se construyó sobre una base vectorial (PostgreSQL + pgvector) alimentada continuamente con los datos del usuario, permitiendo a los agentes responder con un contexto personal ultra-preciso.",
      "La interfaz de Telegram/WhatsApp se desarrolló como una capa de abstracción: el usuario envía un mensaje en lenguaje natural, el enrutador IA identifica al agente competente y orquesta la respuesta sin que el usuario necesite conocer la arquitectura subyacente.",
      "Decenas de dashboards se diseñaron con un sistema de diseño unificado — a pesar de la diversidad de dominios — para garantizar la coherencia visual y una curva de aprendizaje mínima.",
      "Una monitorización en tiempo real vigila el estado de todos los agentes y activa alertas automáticas ante cualquier anomalía, garantizando la fiabilidad del sistema día a día."
    ]
  },
];
