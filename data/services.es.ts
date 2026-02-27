import { ServiceDataRaw } from './services';

export const servicesData: ServiceDataRaw[] = [
  {
    id: 'web-apps-saas',
    icon: null,
    title: "Desarrollo de Web Apps & SaaS",
    description: "Código que genera ingresos. Una relación de proximidad, un saber hacer artesanal del desarrollo y la IA como acelerador — entregamos sus aplicaciones modernas y escalables en tiempo récord.",
    delay: "0s",
    fullDescription: "Basta de proyectos web que toman 6 meses para un resultado decepcionante. Gracias a la IA — en particular Claude Code — desarrollamos sus MVPs, SaaS y aplicaciones a medida con una velocidad inigualada, sin sacrificar jamás la calidad ni la relación de proximidad que mantenemos con cada cliente. React, Next.js, TypeScript, Tailwind: un stack moderno que perdura, impulsado por un artesano del código que lo conoce a usted.",
    benefits: [
      "MVPs y SaaS entregados 3× más rápido que una agencia tradicional",
      "Diseño pixel-perfect adaptado a su identidad de marca",
      "Arquitectura escalable lista para el crecimiento",
      "Mobile-first, SEO-ready, rendimiento Core Web Vitals",
      "Autonomía del cliente: back-office para gestionar su contenido"
    ],
    useCases: ["SaaS y plataformas B2B", "Aplicaciones de negocio a medida", "MVPs para startups", "Rediseño de sitios existentes"],
    technologies: ["Claude Code", "React", "Next.js", "TypeScript", "CMS", "WordPress", "Google AI Studio", "Full-stack apps"],
    processSteps: [
      {
        title: "Descubrimiento y brief",
        description: "Definir los objetivos, el público objetivo y el pliego de condiciones.",
        detailedDescription: [
          "La **fase de descubrimiento** es el cimiento sobre el que reposa todo el proyecto. Aquí es donde nos tomamos el tiempo de comprender su universo, sus ambiciones y las restricciones que configuran su realidad operacional. Un **brief insuficiente** es la primera causa de fracaso en los proyectos digitales: lo abordamos con el rigor de una consultora, formulando las preguntas correctas antes de abrir siquiera un editor de código.",
          "Al término de este taller estructurado, usted dispone de un **pliego de condiciones claro**, una visión compartida y un marco contractual preciso que elimina toda zona gris. Sabe exactamente qué se entregará, en qué **plazo** y con qué **presupuesto** — sin sorpresas desagradables. Es el punto de partida de una colaboración basada en la confianza."
        ],
        clientRequirements: [
          "Sus objetivos de negocio y KPIs objetivo",
          "Sus restricciones de presupuesto y plazo",
          "Ejemplos de sitios o apps que le inspiran",
          "Su manual de marca si existe (logo, colores, tipografías)"
        ],
        agencyWork: [
          "Animamos un taller de descubrimiento estructurado (30 a 60 min) para definir sus objetivos, restricciones y visión",
          "Formalizamos el pliego de condiciones técnico y funcional",
          "Definimos el stack tecnológico adaptado a su proyecto",
          "Establecemos el calendario de entrega con hitos intermedios"
        ]
      },
      {
        title: "Planificación",
        description: "Crear la arquitectura del sitio y los wireframes (bocetos).",
        detailedDescription: [
          "La planificación transforma sus intenciones en una **arquitectura concreta y validada**. Antes de escribir una sola línea de código o dibujar un píxel de interfaz, modelamos el conjunto de los **recorridos de usuario** y la estructura funcional de su aplicación. Esta etapa protege su inversión: identificar un problema de diseño en un wireframe toma diez minutos; corregirlo en producción puede tomar semanas.",
          "Al aprobar la arquitectura de la información y los **wireframes** en esta fase, usted fija el alcance del proyecto y da a nuestros equipos un rumbo claro. Las funcionalidades se priorizan según su impacto real, el **backlog** está detallado y los riesgos técnicos ya están anticipados. Entra en la fase de diseño con visibilidad total sobre lo que se construirá."
        ],
        clientRequirements: [
          "Validación de la arquitectura y los wireframes propuestos",
          "Priorización de funcionalidades (must-have vs nice-to-have)",
          "Feedback en menos de 48h para mantener el calendario"
        ],
        agencyWork: [
          "Creamos la arquitectura completa del sitio o de la aplicación",
          "Realizamos los wireframes de baja fidelidad en Figma para validar los recorridos de usuario",
          "Identificamos los riesgos técnicos y proponemos alternativas",
          "Detallamos el backlog de funcionalidades con estimaciones"
        ]
      },
      {
        title: "Diseño UI/UX",
        description: "Realizar las maquetas gráficas y la interfaz visual.",
        detailedDescription: [
          "El diseño es mucho más que una cuestión de estética: es la **primera experiencia** que sus usuarios tendrán de su marca, y se juega en cuestión de segundos. Concebimos interfaces que combinan el rigor **UX** — recorridos fluidos, jerarquía visual, llamadas a la acción eficaces — con una dirección artística premium que refleja el posicionamiento que usted merece. Cada pantalla está pensada para **convertir** tanto como para seducir.",
          "El **sistema de diseño** que producimos en esta etapa se convierte en un activo duradero para su empresa. Garantiza la coherencia visual de todas sus futuras evoluciones, reduce el **coste de mantenimiento** y permite a su equipo extender la aplicación sin alejarse jamás de la identidad que hemos construido juntos. Usted valida, nosotros refinamos — y nada entra en desarrollo sin su aprobación."
        ],
        clientRequirements: [
          "Sus comentarios sobre las maquetas (2 ciclos de revisiones incluidos)",
          "Acceso a sus assets visuales (logos en vectorial, fotos HD)",
          "Validación final de la identidad visual antes del desarrollo"
        ],
        agencyWork: [
          "Concebimos las maquetas de alta fidelidad en Figma, adaptadas a su manual de marca",
          "Entregamos 2 ciclos de revisiones incluidos para refinar cada pantalla",
          "Aplicamos los principios UX para optimizar las conversiones",
          "Producimos el sistema de diseño reutilizable para las evoluciones futuras"
        ]
      },
      {
        title: "Desarrollo",
        description: "Codificar el sitio o configurarlo a través de un CMS (ej: WordPress, Shopify).",
        detailedDescription: [
          "Aquí es donde su visión cobra vida en código. Gracias a los agentes de IA — con **Claude Code** a la cabeza — ejecutamos con una **velocidad tres veces superior** a la de una agencia tradicional, sin sacrificar jamás la calidad ni la mantenibilidad. Cada componente está estructurado para perdurar, documentado para ser comprendido y probado a medida que avanzamos. Y porque trabajamos en **proximidad directa** con usted, cada hito es la ocasión de un intercambio humano que garantiza que el producto final corresponde exactamente a su visión.",
          "A lo largo del desarrollo, usted se beneficia de una **transparencia total** gracias a las previsualizaciones accesibles en cada hito. Ve crecer su aplicación en tiempo real, puede formular comentarios precisos y ajustamos inmediatamente el rumbo si es necesario. Este enfoque **iterativo** elimina las malas sorpresas en la entrega y transforma el desarrollo en una cocreación fluida."
        ],
        clientRequirements: [
          "Acceso a su proveedor de hosting o entorno cloud",
          "Contenido final redactado o validación de nuestras propuestas de textos",
          "Validación de los hitos intermedios de desarrollo"
        ],
        agencyWork: [
          "Codificamos la aplicación con React/Next.js, acelerados por nuestros agentes IA (Claude Code) para un ritmo ×3 sin compromisos en la calidad",
          "Ponemos en marcha la arquitectura backend, la base de datos y las APIs",
          "Desplegamos en Vercel o su infraestructura con CI/CD automatizado",
          "Compartimos el avance mediante previsualizaciones accesibles en cada hito"
        ]
      },
      {
        title: "Contenido y SEO",
        description: "Integrar textos y medios, y optimizar para los motores de búsqueda.",
        detailedDescription: [
          "Una aplicación técnicamente impecable que no se encuentra en **Google** es una oportunidad perdida. Esta etapa garantiza que su inversión digital llegue mucho más allá de su red inmediata. Integramos sus contenidos con un cuidado meticuloso por la **semántica**, la jerarquía y las señales que los motores de búsqueda valoran — desde el primer día de publicación.",
          "La optimización **SEO técnica** que implementamos (metaetiquetas, Schema.org, Core Web Vitals, Open Graph) constituye una base sólida sobre la que su **posicionamiento orgánico** puede crecer a largo plazo. También se beneficia de una configuración analítica completa que le permitirá medir con precisión la audiencia generada y tomar decisiones informadas sobre sus futuras acciones de marketing."
        ],
        clientRequirements: [
          "Sus textos finales o validación de nuestros contenidos propuestos",
          "Lista de sus palabras clave prioritarias en su sector",
          "Acceso a Google Search Console y Analytics si existen"
        ],
        agencyWork: [
          "Integramos sus textos y medios con especial atención a la jerarquía semántica",
          "Optimizamos las metaetiquetas, Open Graph, Schema.org y la estructura de URLs",
          "Configuramos Google Analytics 4 y Search Console",
          "Redactamos los atributos alt y optimizamos las imágenes para el Core Web Vitals"
        ]
      },
      {
        title: "Pruebas",
        description: "Verificar la visualización (móvil/PC) y el correcto funcionamiento técnico (bugs).",
        detailedDescription: [
          "Ningún proyecto sale de nuestros talleres sin haber pasado por un **protocolo de pruebas riguroso**. Simulamos las condiciones de uso reales de sus usuarios — dispositivos variados, múltiples navegadores, conexiones degradadas — para asegurarnos de que su aplicación ofrece una **experiencia impecable** en cada contexto. El rendimiento, la accesibilidad y la fiabilidad se evalúan con herramientas de referencia (Lighthouse, PageSpeed Insights) y los resultados quedan documentados.",
          "La fase de pruebas es también la ocasión de **implicarle directamente** en la validación final. Sus comentarios sobre sus dispositivos habituales, sus recorridos críticos, sus formularios — todo se revisa. Corregimos cada anomalía antes de la publicación, **sin excepción**. Usted señala, nosotros resolvemos, entregamos una aplicación que funciona."
        ],
        clientRequirements: [
          "Pruebas en sus dispositivos principales (móvil, tableta, escritorio)",
          "Notificación de bugs a través de nuestra herramienta de seguimiento compartida",
          "Validación del correcto funcionamiento de sus recorridos críticos"
        ],
        agencyWork: [
          "Realizamos pruebas cruzadas en navegadores (Chrome, Firefox, Safari, Edge) y dispositivos (móvil, tableta, escritorio)",
          "Ejecutamos pruebas de rendimiento (Lighthouse, PageSpeed) y corregimos los problemas identificados",
          "Probamos todos los recorridos críticos y formularios",
          "Documentamos cada anomalía y garantizamos su corrección antes de la entrega"
        ]
      },
      {
        title: "Lanzamiento y mantenimiento",
        description: "Publicar el sitio y asegurar las actualizaciones regulares.",
        detailedDescription: [
          "El **lanzamiento** es un momento estratégico que se prepara con cuidado. Gestionamos la totalidad de la puesta en producción — configuración DNS, certificado SSL, optimización del servidor — para que su aplicación sea accesible, segura y de alto rendimiento desde el **primer segundo**. Las 48 horas siguientes al lanzamiento son objeto de vigilancia activa por nuestra parte, con el fin de detectar y corregir inmediatamente cualquier anomalía en condiciones reales.",
          "La publicación no es el fin de nuestro compromiso, es el inicio de una **relación a largo plazo**. Le entregamos los accesos completos, la documentación técnica y las claves de su autonomía. Los planes de **mantenimiento** adaptados le garantizan que su aplicación permanezca actualizada, segura y de alto rendimiento — mientras usted se concentra en lo que mejor sabe hacer: su negocio."
        ],
        clientRequirements: [
          "Acceso a los DNS o delegación en su registrar",
          "Disponibilidad el día del lanzamiento",
          "Definición del plan de mantenimiento deseado"
        ],
        agencyWork: [
          "Gestionamos la configuración DNS, SSL y la puesta en producción en su proveedor de hosting",
          "Supervisamos la aplicación durante las 48h post-lanzamiento",
          "Configuramos las alertas de disponibilidad y las copias de seguridad automáticas",
          "Entregamos los accesos completos y la documentación técnica"
        ]
      },
    ],
    stats: [
      { value: "3×", label: "Más rápido que una agencia tradicional" },
      { value: "4–6 sem.", label: "Plazo medio de entrega de un MVP" },
      { value: "98%", label: "Clientes satisfechos en la entrega" },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta el desarrollo de un MVP o un SaaS?",
        a: "Un MVP funcional comienza a partir de 3.500 €. Un SaaS completo con back-office y autenticación se sitúa generalmente entre 8.000 € y 20.000 € según la complejidad. Definimos juntos un alcance preciso antes de cualquier compromiso.",
      },
      {
        q: "¿Podrán mantener y hacer evolucionar la aplicación tras la entrega?",
        a: "Sí. Ofrecemos contratos mensuales de mantenimiento y evolución. También tiene la posibilidad de retomar el código en sus manos: toda la base está documentada y es abierta.",
      },
      {
        q: "No tengo un pliego de condiciones, ¿supone eso un problema?",
        a: "En absoluto. Nuestra sesión de descubrimiento (gratuita, 30 min) es suficiente para sentar las bases. Nosotros mismos redactamos el brief técnico a partir de sus objetivos de negocio.",
      },
      {
        q: "¿Cuál es la diferencia entre su enfoque y el de una agencia tradicional?",
        a: "Trabajamos con agentes de IA (Claude Code, Google AI Studio) que multiplican nuestra velocidad de ejecución por 3. Pero lo que realmente nos diferencia de una agencia tradicional es la proximidad: usted tiene un interlocutor único que conoce su proyecto al dedillo, desde la primera línea de código hasta el lanzamiento.",
      },
    ],
  },
  {
    id: 'automatisation-n8n',
    icon: null,
    title: "Automatización y Orquestación n8n",
    description: "No son 'zaps' básicos. Arquitecturas de workflows complejas que interconectan su stack y eliminan el trabajo manual repetitivo de una vez por todas.",
    delay: "0.1s",
    fullDescription: "Cada hora invertida en tareas repetitivas es una hora robada a su actividad principal. Auditamos sus procesos, identificamos los cuellos de botella y construimos workflows robustos de n8n/Make que funcionan 24h/24 sin supervisión. Resultado: cero error humano, tiempo liberado para lo esencial.",
    benefits: [
      "Auditoría completa de sus procesos manuales actuales",
      "Workflows complejos e interconectados con n8n/Make",
      "Integración con CRM, email, agenda, facturación, Slack...",
      "Monitorización y alertas en caso de anomalía",
      "Documentación completa para su equipo"
    ],
    useCases: ["Cualificación y nurturing de leads automatizado", "Facturación y seguimientos automáticos", "Sincronización multi-herramienta", "Reporting automatizado", "Clasificación y respuesta automática de bandeja de correo", "Generación de informes de reunión desde transcripciones", "Vigilancia de mercado diaria y síntesis con IA", "Onboarding de cliente automatizado (CRM → email → agenda)", "Alertas y notificaciones inter-equipos sobre eventos de negocio"],
    technologies: ["n8n", "Make", "Airtable", "Notion", "Slack", "Zapier", "Webhooks"],
    processSteps: [
      {
        title: "Auditoría de procesos",
        description: "Cartografiar sus tareas manuales e identificar los cuellos de botella.",
        detailedDescription: [
          "La auditoría de procesos es una inmersión en los bastidores de su organización para revelar lo que le **cuesta tiempo, energía y dinero** sin que sea plenamente consciente de ello. Entrevistamos a sus equipos, observamos sus flujos de trabajo reales y modelamos cada proceso manual con precisión quirúrgica. Lo que la mayoría de las empresas percibe como una rutina inevitable es, visto desde fuera, a menudo un **yacimiento considerable de automatización**.",
          "Al término de la auditoría, usted recibe un **informe completo** que traduce cada cuello de botella en una oportunidad cuantificada. Sabe cuántas horas semanales se consumen innecesariamente, qué **ROI** puede esperar de cada automatización y en qué orden tratarlas para maximizar el impacto inmediato. Es una visión clara que transforma una intuición en estrategia."
        ],
        clientRequirements: [
          "Disponibilidad de 2h para un taller de auditoría con sus equipos",
          "Acceso como observador a sus herramientas principales (CRM, email, etc.)",
          "Lista de sus tareas manuales más laboriosas"
        ],
        agencyWork: [
          "Animamos un taller de auditoría con sus equipos para cartografiar todos los procesos manuales",
          "Modelamos sus flujos actuales en forma de diagramas claros",
          "Cuantificamos el tiempo perdido y calculamos el ROI potencial de cada automatización",
          "Entregamos un informe de auditoría completo con nuestras recomendaciones priorizadas"
        ]
      },
      {
        title: "Priorización",
        description: "Clasificar las automatizaciones por impacto ROI y complejidad técnica.",
        detailedDescription: [
          "No todas las automatizaciones valen lo mismo. Algunas ofrecen un **retorno sobre la inversión espectacular** en pocos días; otras son técnicamente complejas para una ganancia marginal. La priorización es la etapa estratégica que le garantiza concentrar sus recursos donde tienen el **mayor impacto**. Aplicamos una matriz Impacto/Esfuerzo contrastada para clasificar sus oportunidades y construir una hoja de ruta que crea valor desde las primeras semanas.",
          "Usted entra en la fase de desarrollo con un **plan claro**, **quick wins** identificados y una visión a medio plazo sobre las automatizaciones más complejas. El presupuesto se asigna de forma óptima, las expectativas están alineadas y cada miembro de su equipo comprende por qué tratamos los temas en este orden. Es la disciplina estratégica que marca la diferencia entre un proyecto de automatización exitoso y uno que se dispersa."
        ],
        clientRequirements: [
          "Validación de la clasificación por ROI y las prioridades propuestas",
          "Definición del presupuesto asignado por automatización",
          "Decisión sobre los quick wins a tratar en prioridad"
        ],
        agencyWork: [
          "Clasificamos las automatizaciones según una matriz Impacto/Esfuerzo para maximizar el ROI",
          "Presentamos un plan de despliegue por fases con los quick wins en primer lugar",
          "Estimamos el tiempo de desarrollo y el retorno sobre la inversión de cada workflow",
          "Validamos con usted las prioridades y adaptamos la hoja de ruta a su presupuesto"
        ]
      },
      {
        title: "Arquitectura",
        description: "Diseñar la arquitectura de los workflows y las conexiones entre herramientas.",
        detailedDescription: [
          "Un workflow mal diseñado desde la base es una **deuda técnica** que se acumula: funciona un tiempo, luego se rompe bajo el peso de los casos particulares y las evoluciones de sus herramientas. Nuestra fase de arquitectura existe precisamente para evitar este escenario. Diseñamos workflows **robustos, documentados y pensados para perdurar** — con gestión de errores, mecanismos de recuperación y una lógica de negocio que refleja fielmente sus reglas operacionales.",
          "Antes de escribir el primer nodo en **n8n**, usted dispone de un esquema de arquitectura completo que representa cada flujo, cada condición y cada punto de integración. Esta documentación se convierte en un **activo operacional**: facilita el mantenimiento, simplifica la incorporación de nuevos colaboradores y sirve de referencia en las evoluciones futuras. Usted invierte en algo que perdura."
        ],
        clientRequirements: [
          "Validación de la arquitectura de los workflows antes del desarrollo",
          "Acceso API o credenciales para sus herramientas (transmitidas de forma segura)",
          "Confirmación de las reglas de negocio y los casos límite a gestionar"
        ],
        agencyWork: [
          "Diseñamos la arquitectura completa de los workflows y sus interconexiones",
          "Seleccionamos los conectores nativos o desarrollamos los conectores a medida necesarios",
          "Definimos las reglas de gestión de errores y los mecanismos de recuperación",
          "Documentamos la arquitectura técnica antes de cualquier desarrollo"
        ]
      },
      {
        title: "Desarrollo n8n",
        description: "Construir y probar los workflows en un entorno de staging.",
        detailedDescription: [
          "El desarrollo de los workflows tiene lugar en un **entorno de staging aislado**, lo que significa que su producción nunca se ve perturbada durante la construcción. Construimos cada flujo con especial atención a la **lógica condicional**, las transformaciones de datos y los mecanismos de recuperación ante errores — los tres pilares de un workflow industrial que puede funcionar meses sin supervisión.",
          "Cada workflow se **prueba exhaustivamente** antes de presentárselo: escenarios nominales, casos límite, errores simulados, volúmenes elevados. Usted valida sobre datos reales (anonimizados si es necesario) y ajustamos hasta que el comportamiento es exactamente el que esperaba. **Nada va a producción** sin su aprobación explícita."
        ],
        clientRequirements: [
          "Conjunto de datos de prueba reales (anonimizados si es necesario)",
          "Validación de los workflows en staging antes de pasar a producción",
          "Feedback en menos de 48h sobre los escenarios probados"
        ],
        agencyWork: [
          "Construimos cada workflow en un entorno de staging aislado",
          "Desarrollamos la lógica condicional, los bucles y las transformaciones de datos",
          "Probamos exhaustivamente cada escenario nominal y caso de error",
          "Optimizamos el rendimiento y la robustez de cada flujo"
        ]
      },
      {
        title: "Integración",
        description: "Conectar los workflows a sus herramientas existentes (CRM, ERP, email...).",
        detailedDescription: [
          "La integración en producción es el momento en que sus automatizaciones entran en contacto con sus **datos y procesos reales**. Gestionamos esta transición con la mayor cautela: despliegue progresivo, validación paso a paso, **vigilancia reforzada** durante los primeros días. Cada conexión con sus herramientas (CRM, ERP, mensajería) se prueba en condiciones reales antes de activar el flujo completo.",
          "Nuestra experiencia con las **integraciones complejas** nos permite anticipar los comportamientos inesperados y corregirlos antes de que impacten su actividad. Usted se beneficia de una puesta en producción **sin interrupción del servicio** y de un período de vigilancia activa durante el cual intervenimos inmediatamente si es necesario. El paso a producción es transparente para sus equipos."
        ],
        clientRequirements: [
          "Acceso de administrador a sus herramientas de producción (CRM, ERP...)",
          "Ventana de puesta en producción definida (fuera de horas punta)",
          "Contacto de IT disponible si se necesita depuración durante el despliegue"
        ],
        agencyWork: [
          "Conectamos los workflows a sus herramientas de producción siguiendo las buenas prácticas de seguridad",
          "Realizamos una migración progresiva con validación en cada etapa",
          "Supervisamos los primeros días de funcionamiento en condiciones reales",
          "Corregimos inmediatamente cualquier comportamiento inesperado"
        ]
      },
      {
        title: "Monitorización",
        description: "Configurar las alertas y los paneles de supervisión.",
        detailedDescription: [
          "Un workflow que funciona en silencio es un workflow cuyo estado de salud desconoce. La **monitorización** que implementamos transforma sus automatizaciones en sistemas transparentes y controlables: cada ejecución queda registrada, cada error genera una **alerta**, cada métrica es visible en tiempo real. Pasa de una caja negra a un sistema de pilotaje dominado.",
          "Las alertas se configuran para notificarle **únicamente cuando su intervención es realmente necesaria** — sin ruido innecesario, pero con reactividad garantizada ante anomalías críticas. El **panel de supervisión** se convierte en su torre de control operacional: un vistazo basta para saber que sus procesos están funcionando, y un clic basta para comprender qué ha sucedido en caso de incidente."
        ],
        clientRequirements: [
          "Definición de los umbrales de alerta aceptables",
          "Designación de un responsable interno para recibir las notificaciones",
          "Validación del panel de supervisión"
        ],
        agencyWork: [
          "Configuramos las alertas de email y Slack para cada punto de fallo posible",
          "Construimos un panel de supervisión en tiempo real",
          "Implementamos los mecanismos de recuperación automática en caso de error",
          "Configuramos los registros de actividad para una trazabilidad completa"
        ]
      },
      {
        title: "Documentación y formación",
        description: "Formar a sus equipos y entregar la documentación completa de los flujos.",
        detailedDescription: [
          "El valor de una automatización no se detiene en su funcionamiento técnico: debe ser **comprendida, mantenida y adaptada** por su equipo sin dependencia permanente de nuestra presencia. La documentación que entregamos está concebida para personal operativo, no para ingenieros: clara, ilustrada, **orientada a casos de uso**. Responde a las preguntas que sus colaboradores se harán dentro de seis meses.",
          "La **sesión de formación práctica** que animamos está calibrada al nivel real de sus equipos y centrada en sus casos de uso concretos, no en la teoría. Al término de esta sesión, su referente interno es capaz de ajustar los parámetros habituales, comprender una alerta y solicitar nuestro soporte de forma pertinente. Usted sigue siendo **dueño de su sistema**, con nosotros como red de seguridad."
        ],
        clientRequirements: [
          "Disponibilidad de los equipos para la sesión de formación (2 a 3h)",
          "Designación de un referente interno para el mantenimiento habitual",
          "Validación de la documentación entregada antes del cierre del proyecto"
        ],
        agencyWork: [
          "Redactamos la documentación completa de cada workflow (lógica, disparadores, casos límite)",
          "Animamos una sesión de formación práctica adaptada al nivel de sus equipos",
          "Creamos guías visuales para las operaciones habituales",
          "Permanecemos disponibles 30 días tras la entrega para responder sus preguntas"
        ]
      },
    ],
    stats: [
      { value: "20h", label: "Ahorradas de media cada semana" },
      { value: "0", label: "Error humano en los procesos automatizados" },
      { value: "+400", label: "Conexiones SaaS posibles (Notion, Airtable, CRM, Slack…)" },
    ],
    faq: [
      {
        q: "¿Cuál es la diferencia entre n8n y herramientas como Zapier?",
        a: "Zapier es excelente para automatizaciones simples (si A entonces B). n8n permite arquitecturas mucho más complejas: bucles, condiciones múltiples, transformaciones de datos, gestión de errores, y puede alojarse en su propio servidor por razones de confidencialidad.",
      },
      {
        q: "¿Qué pasa si un workflow falla o encuentra un error?",
        a: "Configuramos sistemáticamente alertas (email, Slack) y mecanismos de recuperación automática. Un panel de supervisión le ofrece visibilidad en tiempo real sobre todos sus flujos.",
      },
      {
        q: "¿Necesito tener conocimientos técnicos para utilizar los workflows entregados?",
        a: "No. Diseñamos workflows robustos y documentamos todo. Una formación práctica está incluida en la entrega. Para las evoluciones menores, una interfaz visual le permite actuar sin tocar el código.",
      },
      {
        q: "¿Puede n8n conectarse a nuestro software de negocio específico?",
        a: "En la gran mayoría de los casos, sí. n8n soporta más de 400 integraciones nativas. Para los programas sin conector oficial, utilizamos sus API o webhooks para construir la conexión a medida.",
      },
    ],
  },
  {
    id: 'contenu-marketing-ia',
    icon: null,
    title: "Creación de Contenido y Marketing con IA",
    description: "Su brazo armado de marketing: newsletters automatizadas, redes sociales, visuales IA, túneles de venta. Una presencia de marca omnipresente sin movilizar a sus equipos.",
    delay: "0.2s",
    fullDescription: "El contenido es el rey, pero producirlo consume un tiempo enorme. Automatizamos su máquina de contenido: newsletters personalizadas, posts en redes sociales generados y publicados automáticamente, visuales de IA coherentes con su manual de marca, túneles de conversión. Su marca está en todas partes, su equipo permanece centrado en su actividad principal.",
    benefits: [
      "Newsletters automatizadas y personalizadas por segmento",
      "Calendario editorial con IA para redes sociales",
      "Creación de visuales IA coherentes (Midjourney, Flux, DALL-E)",
      "Túneles de venta y secuencias de email automation",
      "Reporting mensual de ROI de contenidos"
    ],
    useCases: ["Marketing automation B2B/B2C", "Personal branding de directivos", "Lanzamiento de producto", "Estrategia de contenidos SEO"],
    technologies: ["NanoBana Pro", "NotebookLM", "Google AI Studio", "Claude Code", "Kling AI"],
    processSteps: [
      {
        title: "Auditoría de marca",
        description: "Analizar su posicionamiento, sus públicos objetivo y su manual de identidad visual existente.",
        detailedDescription: [
          "Antes de producir un solo contenido, nos tomamos el tiempo de comprender lo que hace a su marca **única** y lo que la distingue verdaderamente de sus competidores. Esta auditoría no es una mera formalidad administrativa: es un trabajo de fondo que examina su **posicionamiento**, la coherencia de su comunicación actual y la percepción que genera en sus públicos objetivo. Los insights que de ella extraemos condicionan toda la **estrategia editorial** que vendrá a continuación.",
          "El informe de auditoría que usted recibe es una **brújula estratégica**: pone de relieve sus fortalezas a amplificar, las incoherencias a corregir y las oportunidades que sus competidores aún no han aprovechado. Es sobre esta base documentada que construimos juntos una estrategia de contenidos que tiene sentido para su marca y genera **resultados medibles** para su negocio."
        ],
        clientRequirements: [
          "Acceso a sus materiales de comunicación existentes",
          "Compartir su manual de identidad visual y guía editorial",
          "Descripción de su cliente ideal y sus personas"
        ],
        agencyWork: [
          "Analizamos en profundidad su posicionamiento, sus contenidos existentes y sus competidores",
          "Definimos sus personas objetivo con sus problemáticas y canales de preferencia",
          "Evaluamos la coherencia de su identidad visual y editorial actual",
          "Entregamos un informe de auditoría con las recomendaciones estratégicas prioritarias"
        ]
      },
      {
        title: "Estrategia editorial",
        description: "Definir los temas, formatos y frecuencias adaptados a cada canal.",
        detailedDescription: [
          "Una **estrategia editorial sólida** es la diferencia entre una presencia digital coherente que construye una audiencia y una producción de contenido agotadora que no lleva a ninguna parte. Construimos su calendario editorial a 3 meses con una lógica temática, **formatos adaptados a cada canal** y una frecuencia de publicación realista que puede mantenerse a largo plazo — sin sacrificar la calidad por la cantidad.",
          "La **línea editorial** que definimos se convierte en la guía de referencia para todo contenido producido bajo su nombre, ya sea generado por IA o redactado manualmente. El tono, el vocabulario, los temas a abordar y los que evitar, las llamadas a la acción preferidas — todo está documentado con precisión para garantizar una **voz de marca coherente** en todos sus canales y en el tiempo."
        ],
        clientRequirements: [
          "Validación del calendario editorial y los temas propuestos",
          "Definición de los canales de difusión prioritarios",
          "Presupuesto mensual asignado a las herramientas de difusión"
        ],
        agencyWork: [
          "Construimos su calendario editorial a 3 meses con los temas, formatos y frecuencias",
          "Redactamos la línea editorial y la guía de tono para cada canal",
          "Seleccionamos los formatos de mayor rendimiento para su sector",
          "Definimos los KPIs de contenido y los métodos de medición"
        ]
      },
      {
        title: "Configuración de IA",
        description: "Configurar los modelos de IA y los pipelines de generación de contenido.",
        detailedDescription: [
          "La configuración de IA es la etapa técnica que transforma sus parámetros de marca en **instrucciones operacionales** para los modelos de generación. No nos limitamos a conectar un modelo genérico: lo configuramos con su identidad, su léxico, sus valores y sus restricciones para obtener contenidos que suenen **auténticamente como usted** — no como una IA que imita a una marca genérica.",
          "Los **prompts maestros** que construimos son el resultado de un trabajo de ingeniería minucioso, probado sobre ejemplos reales y validado con usted antes de cualquier industrialización. Se convierten en un **activo intelectual** de su empresa: reutilizables, evolutivos y transmisibles a su equipo. La máquina de contenido está lista para funcionar a la velocidad y escala que su ambición exige."
        ],
        clientRequirements: [
          "Ejemplos de contenidos que le gustan (tono, estilo, formato)",
          "Validación de los prompts maestros antes de la industrialización",
          "Acceso a las suscripciones de IA si ya existen"
        ],
        agencyWork: [
          "Configuramos los modelos de IA (Claude, GPT-4, Midjourney) con sus parámetros de marca",
          "Construimos los prompts maestros anclados en su identidad y probados sobre ejemplos reales",
          "Implementamos el pipeline de generación, revisión y aprobación",
          "Creamos las plantillas base para cada formato de contenido"
        ]
      },
      {
        title: "Creación de plantillas",
        description: "Producir las plantillas visuales y los prompts maestros reutilizables.",
        detailedDescription: [
          "Las **plantillas** son la infraestructura invisible que hace que su producción de contenido sea a la vez rápida y coherente. Diseñamos una biblioteca de **plantillas visuales** adaptadas a cada formato y red — carousel de LinkedIn, story de Instagram, banner de newsletter, visual de artículo — en perfecta coherencia con su manual de identidad visual. Cada plantilla está pensada para reproducirse infinitamente sin perder su impacto.",
          "La validación de los **primeros contenidos piloto** es un momento de diálogo esencial: es la oportunidad de refinar lo que no corresponde exactamente a su visión antes de industrializar la producción. Incorporamos sus comentarios con precisión y entregamos una **guía de uso clara** para que su equipo pueda apropiarse de las herramientas con total autonomía. Usted hereda una infraestructura editorial lista para usar."
        ],
        clientRequirements: [
          "Validación de los primeros visuales y plantillas (2 ciclos incluidos)",
          "Comentarios sobre el tono editorial de los contenidos piloto",
          "Decisión sobre los formatos prioritarios (carousel, vídeo, artículo...)"
        ],
        agencyWork: [
          "Producimos una biblioteca de plantillas visuales de Canva/Figma coherentes con su manual de marca",
          "Creamos los prompts de generación de imágenes adaptados a cada formato y red social",
          "Realizamos los primeros contenidos piloto para su validación",
          "Entregamos la guía de uso de las plantillas para su equipo"
        ]
      },
      {
        title: "Automatización y difusión",
        description: "Conectar las herramientas de publicación y automatizar el calendario editorial.",
        detailedDescription: [
          "La automatización de la difusión es el momento en que su **máquina de contenido se vuelve verdaderamente autónoma**. Conectamos sus herramientas de publicación — Buffer, Brevo, Mailchimp — en un pipeline fluido que va desde la generación del contenido hasta su publicación en los canales correctos, en el momento adecuado, **sin intervención manual** de su parte. Sus equipos se liberan de la carga operacional de la difusión para centrarse en la estrategia.",
          "Las **secuencias de email automatizadas** y los túneles de conversión que desplegamos transforman su audiencia en un pipeline comercial activo. Cada nuevo contacto entra en un **recorrido personalizado** que lo nutre inteligentemente según su comportamiento y su perfil. Antes de la puesta en producción, toda la cadena se prueba de extremo a extremo para garantizar una difusión sin problemas desde el primer día."
        ],
        clientRequirements: [
          "Acceso de administrador a sus redes sociales y herramientas de email",
          "Validación del calendario de publicación automatizado",
          "Definición de un proceso de validación si lo desea"
        ],
        agencyWork: [
          "Configuramos las herramientas de planificación y publicación automática (Buffer, Brevo, Mailchimp)",
          "Construimos los workflows de generación → validación → publicación",
          "Implementamos las secuencias de email automatizadas y los túneles de conversión",
          "Probamos toda la cadena de difusión antes de la puesta en producción"
        ]
      },
      {
        title: "Pruebas y validación",
        description: "Validar el tono, la coherencia visual y la calidad en cada canal.",
        detailedDescription: [
          "La fase de pruebas y validación es el **guardián que protege la reputación de su marca**. Antes de dejar funcionar la máquina de forma autónoma, sometemos los primeros lotes de contenidos a su mirada crítica y medimos el **engagement** que generan. Cada comentario que usted formula es una señal valiosa que afina la calibración de los modelos y refuerza la coherencia de su voz editorial.",
          "Verificamos meticulosamente que los contenidos publicados en cada canal respetan sus **códigos específicos** — lo que funciona en LinkedIn no es lo que tiene éxito en Instagram — manteniendo al mismo tiempo una **coherencia identitaria global**. Es esta doble exigencia, adaptación al canal y coherencia de marca, la que garantiza una presencia digital profesional e impactante."
        ],
        clientRequirements: [
          "Revisión y aprobación de los primeros contenidos piloto",
          "Feedback detallado sobre lo que no corresponde a su voz de marca",
          "Validación antes de la puesta en producción de la cadena automatizada"
        ],
        agencyWork: [
          "Sometemos los primeros lotes de contenidos a su validación antes de cualquier publicación",
          "Medimos el engagement en los contenidos piloto y ajustamos los parámetros",
          "Verificamos la coherencia visual y editorial en todos los canales",
          "Corregimos los prompts y plantillas según sus comentarios"
        ]
      },
      {
        title: "Reporting e iteración",
        description: "Analizar el rendimiento y optimizar los contenidos cada mes.",
        detailedDescription: [
          "El **reporting mensual** es mucho más que una tabla de cifras: es un momento de pilotaje estratégico donde los datos guían las decisiones editoriales del mes siguiente. Analizamos el rendimiento de cada formato, canal y temática para identificar lo que **resuena mejor** con su audiencia y amplificar los contenidos que generan más engagement y conversión.",
          "La **iteración continua** es el secreto de las estrategias de contenido que progresan mes a mes en lugar de estancarse. Cada análisis alimenta ajustes concretos: prompts refinados, frecuencias reequilibradas, formatos emergentes integrados. Usted se beneficia de una estrategia viva, **impulsada por los datos** y orientada hacia sus objetivos de negocio, no hacia métricas de vanidad."
        ],
        clientRequirements: [
          "Compartir sus objetivos de crecimiento (seguidores, alcance, leads)",
          "Disponibilidad mensual de 45 min para el punto de rendimiento",
          "Validación de los ajustes de estrategia propuestos"
        ],
        agencyWork: [
          "Producimos un informe mensual de rendimiento con las métricas clave de cada canal",
          "Analizamos los contenidos de mejor rendimiento y amplificamos su formato",
          "Ajustamos la estrategia editorial según los datos reales",
          "Proponemos proactivamente nuevas oportunidades de contenido"
        ]
      },
    ],
    stats: [
      { value: "10×", label: "Más contenido producido al mismo coste" },
      { value: "×5", label: "Más formatos producidos a partir de un único contenido fuente" },
      { value: "0h", label: "De redacción manual para su equipo" },
    ],
    faq: [
      {
        q: "¿El contenido generado por IA parecerá contenido de IA?",
        a: "No, si se hace bien. Construimos prompts maestros anclados en su identidad de marca (tono, vocabulario, valores) y los revisamos sistemáticamente. El objetivo es un contenido que suene como usted, producido más rápido.",
      },
      {
        q: "¿Cómo garantizan la coherencia visual con nuestro manual de marca?",
        a: "Creamos guías de estilo de IA específicas para su marca: paletas, ambientes, referencias visuales. Cada visual se genera con estos parámetros, garantizando una coherencia identitaria en todos los canales.",
      },
      {
        q: "¿Podemos mantener el control editorial sobre lo que se publica?",
        a: "Absolutamente. Podemos implementar un workflow de validación donde cada contenido pasa por usted antes de la publicación. La velocidad de producción no sacrifica su control.",
      },
      {
        q: "¿Cuál es la inversión mínima para una estrategia de content con IA?",
        a: "Una configuración completa (estrategia + herramientas + plantillas + formación) comienza alrededor de 2.500 €. La gestión mensual se ofrece después como retainer a partir de 800 €/mes según los volúmenes.",
      },
    ],
  },
  {
    id: 'ia-agents-rag',
    icon: null,
    title: "Inteligencia Artificial y Agentes RAG",
    description: "Transforme su conocimiento dormido en un recurso interactivo instantáneo. Chatbots de IA sobre sus datos, agentes autónomos, integración de IA generativa en sus productos.",
    delay: "0.3s",
    fullDescription: "La IA genérica no conoce su empresa. Construimos sistemas RAG (Retrieval-Augmented Generation) entrenados sobre sus datos propietarios: documentación interna, bases de conocimiento, historial de clientes. Resultado: asistentes de IA que responden con la precisión de un experto en su dominio, disponibles 24/7.",
    benefits: [
      "Chatbot IA RAG sobre su documentación interna",
      "Agentes autónomos para cualificación de leads o soporte",
      "Integración de IA en sus productos existentes (API)",
      "Fine-tuning y prompt engineering experto",
      "Cumplimiento RGPD: datos alojados en Europa"
    ],
    useCases: ["Soporte al cliente con IA nivel 1 y 2", "Asistente comercial inteligente", "FAQ dinámica sobre sus productos", "Análisis automático de documentos"],
    technologies: ["ChatGPT", "Claude", "Gemini", "Supabase", "Pinecone", "RAG", "PostgreSQL"],
    processSteps: [
      {
        title: "Auditoría de datos",
        description: "Inventariar y cualificar sus fuentes documentales (PDFs, bases de datos, wikis...).",
        detailedDescription: [
          "La calidad de un sistema **RAG** es directamente proporcional a la calidad de los datos que lo alimentan. La **auditoría documental** es por tanto la etapa fundacional del proyecto: inventariamos el conjunto de sus fuentes de información — PDFs, wikis internos, bases de datos, emails archivados, transcripciones — y evaluamos su actualidad, su completitud y su relevancia para los casos de uso objetivo. Un documento mal estructurado u obsoleto en la base vectorial genera **respuestas incorrectas**; lo identificamos y lo tratamos antes de cualquier ingestión.",
          "El informe de auditoría que entregamos ofrece un estado preciso de su **capital documental** y define el plan de ingestión óptimo: qué fuentes tratar en prioridad, cuáles requieren una reestructuración previa, y qué datos excluir para **proteger la calidad de las respuestas**. Usted entra en la fase de arquitectura con una visión clara de lo que su agente sabrá — y no sabrá — responder."
        ],
        clientRequirements: [
          "Inventario de sus fuentes documentales (PDFs, wikis, bases de datos...)",
          "Evaluación de la calidad y actualidad de sus documentos",
          "Definición de los perímetros de datos autorizados para la IA"
        ],
        agencyWork: [
          "Inventariamos y cualificamos todas sus fuentes documentales (PDFs, bases de datos, wikis)",
          "Evaluamos la calidad, la actualidad y la completitud de sus datos",
          "Identificamos los documentos a limpiar, reestructurar o excluir",
          "Entregamos un informe de auditoría documental con el plan de ingestión"
        ]
      },
      {
        title: "Arquitectura RAG",
        description: "Diseñar el pipeline de indexación vectorial y de retrieval adaptado.",
        detailedDescription: [
          "La **arquitectura RAG** es la elección técnica que determina el rendimiento, la precisión y la escalabilidad de su agente de IA. No es una decisión trivial: el modelo de **embedding**, la estrategia de segmentación de documentos, la base vectorial elegida y el modelo de generación deben seleccionarse en coherencia con sus casos de uso, su volumen de datos y sus restricciones de **confidencialidad**. Una mala arquitectura se paga en alucinaciones y en rendimientos decepcionantes.",
          "Documentamos la arquitectura completa antes de cualquier desarrollo y se la presentamos en un lenguaje accesible, explicando los **arbitrajes realizados** y sus consecuencias operacionales. Usted comprende qué está construyendo y por qué. Esta transparencia es esencial para un sistema que deberá **mantener y hacer evolucionar** a largo plazo."
        ],
        clientRequirements: [
          "Validación de la arquitectura técnica propuesta",
          "Elección del nivel de confidencialidad (cloud vs on-premise)",
          "Definición de los casos de uso prioritarios del agente"
        ],
        agencyWork: [
          "Diseñamos la arquitectura completa del pipeline: ingestión, vectorización, retrieval, generación",
          "Elegimos los modelos de embedding y generación adaptados a su caso de uso",
          "Seleccionamos la base vectorial (Pinecone, ChromaDB, Supabase) según sus restricciones",
          "Documentamos la arquitectura antes del desarrollo para su validación"
        ]
      },
      {
        title: "Ingestión y vectorización",
        description: "Transformar sus datos en vectores y almacenarlos en la base vectorial.",
        detailedDescription: [
          "La **vectorización** de sus documentos es el proceso por el cual su conocimiento organizacional se vuelve consultable por la IA. Desarrollamos pipelines de extracción a medida para cada tipo de fuente — porque un PDF de contrato, una página de Notion y una base de datos SQL no se tratan de la misma manera. La **segmentación inteligente** de los documentos es particularmente crítica: demasiado corto, el chunk pierde su contexto; demasiado largo, diluye la precisión del retrieval.",
          "La **actualización incremental** que implementamos garantiza que su base vectorial permanezca sincronizada con la evolución de sus documentos fuente. Cuando añade un nuevo producto a su catálogo, publica una nueva política interna o actualiza su documentación técnica, el agente es informado **automáticamente**. Su sistema RAG está vivo, no congelado en el momento de su despliegue."
        ],
        clientRequirements: [
          "Provisión de documentos fuente en los formatos acordados",
          "Validación de los metadatos y categorías de clasificación",
          "Acceso a los sistemas fuente si se requiere ingestión directa"
        ],
        agencyWork: [
          "Desarrollamos los pipelines de extracción y limpieza para cada tipo de fuente",
          "Segmentamos inteligentemente sus documentos para un retrieval óptimo",
          "Generamos los embeddings y los indexamos en la base vectorial",
          "Implementamos la actualización incremental para mantener la base al día"
        ]
      },
      {
        title: "Prompt engineering",
        description: "Redactar y refinar las instrucciones del sistema para respuestas precisas.",
        detailedDescription: [
          "El **prompt engineering** es el arte que marca la diferencia entre un agente que responde correctamente y uno que responde con la precisión, el tono y los límites que su contexto exige. Las **instrucciones del sistema** definen la personalidad de su agente, su ámbito de competencia, sus comportamientos ante preguntas fuera de tema y la forma en que cita sus fuentes. Este trabajo de calibración minucioso es lo que transforma un modelo de lenguaje genérico en un **experto en su dominio**.",
          "Probamos y refinamos los prompts sobre un amplio panel de **preguntas reales**, representativas de lo que sus usuarios harán efectivamente. Cada comportamiento insatisfactorio se analiza, se comprende y se corrige mediante un ajuste preciso de las instrucciones. Usted participa en esta fase de validación, sus comentarios son la brújula que guía la **calibración final**. El agente que recibe en producción es el resultado de decenas de iteraciones invisibles."
        ],
        clientRequirements: [
          "Descripción precisa del comportamiento esperado del agente",
          "Ejemplos de preguntas-respuestas ideales en su dominio",
          "Validación de las instrucciones del sistema antes de la fase de pruebas"
        ],
        agencyWork: [
          "Redactamos las instrucciones del sistema que definen el comportamiento, el tono y los límites del agente",
          "Desarrollamos las cadenas de prompts para los escenarios complejos",
          "Probamos y refinamos los prompts sobre un amplio panel de preguntas reales",
          "Documentamos cada decisión de prompt engineering para la mantenibilidad"
        ]
      },
      {
        title: "Desarrollo del agente",
        description: "Codificar el agente de IA, las herramientas y los conectores a sus sistemas.",
        detailedDescription: [
          "El desarrollo del agente va mucho más allá de la conexión a un modelo de lenguaje. Construimos una **arquitectura aplicativa completa**: las herramientas que el agente puede utilizar (búsqueda en la base vectorial, llamadas a APIs, creación de tickets, envío de emails), la lógica de enrutamiento que decide qué herramienta utilizar según el contexto, y los **guardrails de seguridad** que impiden comportamientos no deseados.",
          "La interfaz a través de la cual sus usuarios interactuarán con el agente está **adaptada a su contexto de uso**: widget integrado en su sitio, API consumible por sus aplicaciones internas, bot de Slack para sus equipos o interfaz dedicada. Gestionamos la integración de extremo a extremo, incluyendo la **autenticación**, la gestión de sesiones y los **logs de interacción** que le permitirán auditar las conversaciones y mejorar el sistema a lo largo del tiempo."
        ],
        clientRequirements: [
          "Acceso API a los sistemas a conectar (CRM, helpdesk...)",
          "Definición de las acciones autorizadas y los límites del agente",
          "Designación de un referente técnico para las integraciones"
        ],
        agencyWork: [
          "Desarrollamos el agente IA con sus herramientas, conectores y lógica de enrutamiento",
          "Integramos el agente a sus sistemas existentes a través de APIs seguras",
          "Implementamos los guardrails de seguridad y los filtros de contenido",
          "Configuramos la interfaz de usuario adaptada a su contexto (widget, API, Slack...)"
        ]
      },
      {
        title: "Pruebas y evaluación",
        description: "Medir la pertinencia de las respuestas y corregir las alucinaciones.",
        detailedDescription: [
          "La evaluación de un sistema RAG es una **disciplina rigurosa** que va mucho más allá de unas pocas preguntas formuladas manualmente. Construimos un **benchmark representativo** de sus casos de uso reales y medimos objetivamente la tasa de precisión, la pertinencia del retrieval, las **alucinaciones residuales** y la latencia de respuesta. Estas métricas nos ofrecen una visión cuantificada de la calidad del sistema y guían los ajustes necesarios.",
          "Su participación en esta fase es valiosa: usted es el **mejor juez** de la pertinencia de las respuestas en su dominio. Organizamos sesiones de pruebas de usuario estructuradas y documentamos sistemáticamente cada respuesta insatisfactoria para comprender su causa — problema de retrieval, prompt insuficiente, **dato fuente ausente** — y corregirla en el origen. Usted recibe un sistema cuyos límites son conocidos y documentados, no ocultados."
        ],
        clientRequirements: [
          "Participación en las sesiones de pruebas de usuario",
          "Conjunto de preguntas representativas de sus casos reales",
          "Señalización de respuestas incorrectas o insuficientes"
        ],
        agencyWork: [
          "Evaluamos la pertinencia de las respuestas sobre un benchmark de preguntas representativas",
          "Medimos la tasa de precisión, las alucinaciones residuales y la latencia",
          "Ajustamos los parámetros de retrieval y los prompts según los resultados",
          "Documentamos los límites conocidos del sistema para un uso informado"
        ]
      },
      {
        title: "Despliegue y cumplimiento",
        description: "Poner en producción sobre infraestructura europea y validar el cumplimiento del RGPD.",
        detailedDescription: [
          "El despliegue de un sistema de IA en producción es un acto que compromete la **responsabilidad de su empresa**, particularmente cuando implica datos personales o sensibles. Gestionamos la totalidad de la puesta en producción sobre **infraestructura europea** — cifrado de datos en tránsito y en reposo, control de acceso estricto, registro de interacciones — para garantizarle un nivel de seguridad y cumplimiento adaptado a sus obligaciones reglamentarias.",
          "El **cumplimiento del RGPD** no es una casilla que marcar a posteriori: está integrado en la arquitectura desde la concepción. Realizamos la auditoría de cumplimiento, redactamos los **avisos legales** adaptados y le acompañamos en la redacción de las entradas del registro de tratamientos si su DPO lo exige. Usted pone en producción un sistema cuyas implicaciones legales y operacionales domina totalmente."
        ],
        clientRequirements: [
          "Validación de la política de datos y el cumplimiento del RGPD",
          "Acceso al registro de tratamientos de su DPO si procede",
          "Definición del proceso de actualización de los datos fuente"
        ],
        agencyWork: [
          "Desplegamos sobre infraestructura europea (AWS París u OVH) con cifrado de extremo a extremo",
          "Realizamos la auditoría de cumplimiento del RGPD y redactamos los avisos legales adaptados",
          "Configuramos los logs de acceso y la monitorización de producción",
          "Transferimos los accesos completos y formamos a su equipo en el mantenimiento"
        ]
      },
    ],
    stats: [
      { value: "24/7", label: "Disponibilidad sin interrupción" },
      { value: "92%", label: "Tasa de precisión de las respuestas RAG" },
      { value: "−65%", label: "De tickets de soporte gestionados por humanos" },
    ],
    faq: [
      {
        q: "¿Qué es exactamente el RAG y por qué es mejor que un ChatGPT clásico?",
        a: "RAG (Retrieval-Augmented Generation) significa que la IA busca primero en SUS datos antes de responder. En lugar de inventar respuestas (alucinaciones), cita fuentes verificadas extraídas de sus documentos. Es la diferencia entre un becario y un experto que conoce su expediente al dedillo.",
      },
      {
        q: "¿Están seguros nuestros datos? ¿Y el RGPD?",
        a: "Sí. Toda la infraestructura está alojada en Europa (servidores AWS París u OVH). Sus datos nunca transitan hacia terceros sin su consentimiento. También podemos desplegar en modo completamente on-premise si es necesario.",
      },
      {
        q: "¿Qué tipo de documentos puede ingerir el sistema?",
        a: "PDFs, Word, Excel, páginas web, bases de datos SQL, Notion, Confluence, emails, transcripciones de audio... Prácticamente cualquier fuente estructurada o semiestructurada puede ser indexada.",
      },
      {
        q: "¿Cuánto tiempo lleva desplegar un primer agente operativo?",
        a: "Un primer prototipo funcional se entrega generalmente en 2 a 3 semanas. La puesta en producción completa con pruebas y cumplimiento tarda de media 4 a 6 semanas según el volumen de datos.",
      },
    ],
  },
  {
    id: 'conseil-formation',
    icon: null,
    title: "Consultoría y Formación",
    description: "Un socio estratégico que audita su organización, forma a sus equipos y garantiza la adopción real de las tecnologías desplegadas.",
    delay: "0.4s",
    fullDescription: "La tecnología más avanzada no vale nada si sus equipos no la adoptan. Le acompañamos desde la auditoría estratégica hasta la formación de sus colaboradores. Una relación de confianza a largo plazo, no un proyecto entregado y olvidado.",
    benefits: [
      "Auditoría estratégica de IA y digital de su organización",
      "Formación de equipos sobre las herramientas desplegadas",
      "Talleres prácticos y desarrollo de competencias",
      "Vigilancia tecnológica y recomendaciones proactivas",
      "Documentación y soporte post-formación"
    ],
    useCases: ["Auditoría de transformación digital", "Formación en IA para pymes", "CDO as a Service", "Talleres para equipos directivos"],
    technologies: ["IA", "Google Workspace", "Cloud", "Automatisation", "Graphisme", "Marque"],
    processSteps: [
      {
        title: "Diagnóstico inicial",
        description: "Evaluar la madurez digital de su organización e identificar las prioridades.",
        detailedDescription: [
          "El **diagnóstico inicial** es el punto de partida de toda transformación exitosa. Con demasiada frecuencia, las empresas invierten en nuevas herramientas sin haber evaluado con precisión su **madurez actual** ni sus necesidades reales. Colmamos este vacío realizando un análisis estructurado de su organización: stack tecnológico existente, prácticas digitales de sus equipos, procesos formales e informales, y posicionamiento respecto a los **estándares de su sector**.",
          "Al término del diagnóstico, usted dispone de una **fotografía clara y objetiva** de su situación actual — con sus fortalezas a preservar y sus puntos ciegos a corregir. Esta base documentada es indispensable para priorizar las acciones con pertinencia y evitar invertir en soluciones inadaptadas a su contexto real. Es el primer acto de una transformación basada en **hechos, no en intuiciones**."
        ],
        clientRequirements: [
          "Disponibilidad de 2h para la entrevista de diagnóstico",
          "Acceso como observador a sus herramientas digitales",
          "Descripción de sus principales desafíos organizacionales actuales"
        ],
        agencyWork: [
          "Realizamos una entrevista de diagnóstico estructurada con sus directivos y equipos clave",
          "Analizamos su stack tecnológico actual e identificamos duplicidades y carencias",
          "Benchmarkeamos su madurez digital frente a los estándares de su sector",
          "Entregamos un diagnóstico sintético con las prioridades de acción"
        ]
      },
      {
        title: "Cartografía de necesidades",
        description: "Entrevistar a los equipos y recopilar los usos, bloqueos y expectativas.",
        detailedDescription: [
          "Las verdaderas necesidades de una organización no siempre son las que la dirección expresa en primer lugar. Se encuentran en los **roces cotidianos** de los equipos operativos, en los rodeos improvisados por falta de herramientas adecuadas, en las frustraciones expresadas durante las entrevistas individuales. Vamos a buscar estos insights donde se encuentran: en el **contacto directo con los colaboradores** que realizan el trabajo cada día.",
          "La cartografía que entregamos traduce estos testimonios cualitativos en una **modelización estructurada** de los flujos de trabajo y los puntos de fricción. Este documento compartido — validado por sus propios equipos — crea el **consenso necesario** para cualquier transformación: cuando los colaboradores reconocen su realidad en el análisis, se apropian mucho más naturalmente de las soluciones propuestas."
        ],
        clientRequirements: [
          "Disponibilidad de los colaboradores clave para entrevistas cortas (30 min)",
          "Lista de las herramientas utilizadas actualmente por equipo",
          "Mapa de los procesos principales si ya están documentados"
        ],
        agencyWork: [
          "Realizamos entrevistas individuales con los colaboradores clave (30 min cada una)",
          "Animamos talleres colectivos para identificar los bloqueos y expectativas",
          "Modelamos los flujos de trabajo actuales y los puntos de fricción",
          "Sintetizamos las necesidades en un documento compartido validado por sus equipos"
        ]
      },
      {
        title: "Hoja de ruta",
        description: "Priorizar las acciones y definir un plan de transformación realista.",
        detailedDescription: [
          "Una **transformación digital** sin una hoja de ruta rigurosa se convierte rápidamente en una sucesión de proyectos aislados que no se refuerzan mutuamente. Construimos un plan de transformación coherente que secuencia las iniciativas en un orden lógico — **los cimientos antes que las superestructuras** — teniendo en cuenta su capacidad de absorción del cambio, sus restricciones presupuestarias y sus plazos estratégicos.",
          "Le presentamos **varios escenarios** de transformación — mínimo, recomendado, ambicioso — con sus respectivos impactos sobre sus equipos, su presupuesto y sus plazos. Este enfoque por escenarios le da la flexibilidad de elegir el **nivel de ambición** adaptado a su contexto, con visibilidad total sobre lo que sacrifica según la opción elegida. Usted toma una decisión informada, no una apuesta."
        ],
        clientRequirements: [
          "Validación de las prioridades y los arbitrajes presupuestarios propuestos",
          "Confirmación del calendario de transformación deseado",
          "Identificación de los patrocinadores internos del proyecto"
        ],
        agencyWork: [
          "Construimos un plan de transformación priorizado con objetivos, plazos y presupuestos",
          "Presentamos varios escenarios (mínimo, recomendado, ambicioso) con sus impactos",
          "Definimos los indicadores de éxito medibles para cada iniciativa",
          "Ajustamos la hoja de ruta según sus comentarios para que sea realista y comprometible"
        ]
      },
      {
        title: "Selección de herramientas",
        description: "Recomendar las soluciones adaptadas a su contexto y su presupuesto.",
        detailedDescription: [
          "El mercado de herramientas digitales está saturado de soluciones que todas prometen **revolucionar su forma de trabajar**. Nuestro papel es protegerle de este ruido y guiarle hacia las soluciones que realmente corresponden a su contexto — tamaño del equipo, restricciones técnicas, presupuesto, **cumplimiento del RGPD**, integraciones existentes. Evaluamos las opciones con los mismos criterios que si invirtiéramos nuestro propio dinero.",
          "Las **demostraciones comparativas** que realizamos le permiten ver las soluciones en acción sobre sus propios casos de uso, no sobre escenarios de marketing. Nuestra **recomendación final** está argumentada, documentada y acompañada de un análisis de riesgos de cada opción. Usted toma la decisión final con pleno conocimiento de causa, asesorado por un experto que no tiene ningún interés comercial en orientarle hacia tal o cual solución."
        ],
        clientRequirements: [
          "Restricciones técnicas a respetar (alojamiento, integraciones existentes)",
          "Presupuesto anual asignado a las nuevas herramientas",
          "Decisión final sobre las soluciones seleccionadas"
        ],
        agencyWork: [
          "Evaluamos las soluciones del mercado según sus criterios específicos (presupuesto, integraciones, RGPD)",
          "Realizamos demostraciones comparativas de las soluciones preseleccionadas",
          "Negociamos las condiciones tarifarias con los editores si es pertinente",
          "Redactamos la ficha de decisión con la recomendación argumentada"
        ]
      },
      {
        title: "Formación a medida",
        description: "Animar talleres prácticos adaptados al nivel de cada equipo.",
        detailedDescription: [
          "La formación que diseñamos no es un curso genérico sobre una herramienta: es un **programa pedagógico anclado en sus casos de uso reales**, adaptado al nivel de cada grupo y diseñado para generar **reflejos duraderos** en lugar de conocimientos teóricos efímeros. Partimos de situaciones concretas que sus colaboradores viven cada día y mostramos cómo las nuevas herramientas las transforman de inmediato.",
          "Los materiales que producimos — guías ilustradas, vídeos Loom, fichas de referencia rápida — están pensados para **durar más allá de la formación**. Sus colaboradores pueden consultarlos seis meses después cuando necesiten un recordatorio, sin tener que solicitarle nada. La **inversión en formación** genera así valor mucho más allá de la sesión inicial."
        ],
        clientRequirements: [
          "Disponibilidad de los equipos en los horarios de formación acordados",
          "Acceso a los ordenadores y puestos de trabajo habituales",
          "Designación de un relevo interno para las preguntas post-formación"
        ],
        agencyWork: [
          "Diseñamos un programa pedagógico a medida adaptado al nivel de cada grupo",
          "Animamos talleres prácticos sobre sus herramientas y casos de uso reales",
          "Creamos materiales de formación reutilizables (guías, vídeos Loom, fichas prácticas)",
          "Evaluamos la progresión y adaptamos el ritmo en tiempo real"
        ]
      },
      {
        title: "Acompañamiento sobre el terreno",
        description: "Estar presente durante las primeras semanas de adopción para eliminar los frenos.",
        detailedDescription: [
          "Las **primeras semanas de adopción** son las más críticas: es aquí donde se forman los buenos hábitos o donde los antiguos recuperan el terreno perdido. Nuestro acompañamiento sobre el terreno durante este período es lo que marca la diferencia entre una formación que genera una **adopción duradera** y una formación que se olvida a los pocos días de volver a la oficina. Estamos disponibles, reactivos y proactivos para eliminar cada freno en el momento en que se presenta.",
          "Este seguimiento de proximidad nos permite también identificar los **reajustes necesarios** en tiempo real: si ciertos colaboradores necesitan más acompañamiento en un punto específico, si una herramienta no responde exactamente a la necesidad identificada, si emergen nuevas preguntas del uso real. Documentamos las **buenas prácticas** que emergen espontáneamente para transformarlas en estándares compartidos dentro de su equipo."
        ],
        clientRequirements: [
          "Disponibilidad para puntos semanales cortos (15 a 30 min)",
          "Comunicación de los bloqueos encontrados en el uso real",
          "Apertura al ajuste del programa si es necesario"
        ],
        agencyWork: [
          "Estamos disponibles para puntos semanales cortos con el fin de eliminar los bloqueos",
          "Respondemos a las preguntas de sus equipos a través de un canal dedicado (Slack o email)",
          "Ajustamos el programa de formación si ciertos puntos requieren más tiempo",
          "Documentamos las buenas prácticas emergentes para perennizar la adopción"
        ]
      },
      {
        title: "Balance y seguimiento",
        description: "Medir la adopción, ajustar el programa y planificar la vigilancia continua.",
        detailedDescription: [
          "El **balance a los 30 y 90 días** es el momento de la verdad: los indicadores de adopción medidos objetivamente nos dicen qué funciona, qué resiste y qué merece ser reforzado. Este rigor en la evaluación es lo que distingue un acompañamiento serio de una mera prestación de formación: asumimos la **responsabilidad de los resultados** y ajustamos nuestro programa si los objetivos no se alcanzan.",
          "El balance es también la ocasión de identificar **nuevas oportunidades de optimización** que solo el uso real puede revelar. Los usuarios desarrollan usos creativos que no habíamos anticipado, o expresan nuevas necesidades que abren perspectivas de evolución. Este retorno del terreno alimenta una **vigilancia tecnológica orientada** que le compartimos proactivamente para mantenerle por delante de su sector."
        ],
        clientRequirements: [
          "Recopilación de los indicadores de adopción definidos previamente",
          "Participación en el balance a los 30 y 90 días",
          "Decisión sobre lo siguiente: programa complementario o autonomía"
        ],
        agencyWork: [
          "Medimos los indicadores de adopción definidos previamente y los comparamos con los objetivos",
          "Realizamos un balance estructurado a los 30 y 90 días con recomendaciones de ajuste",
          "Identificamos las nuevas oportunidades de optimización reveladas por el uso real",
          "Proponemos un plan de vigilancia tecnológica para anticipar las evoluciones futuras"
        ]
      },
    ],
    stats: [
      { value: "85%", label: "Tasa de adopción real a los 3 meses" },
      { value: "4.9/5", label: "Satisfacción media de las formaciones" },
      { value: "+2 días", label: "Recuperados al mes por colaborador" },
    ],
    faq: [
      {
        q: "Nuestro equipo no es técnico. ¿Las formaciones son accesibles?",
        a: "Es precisamente nuestra especialidad. Adaptamos el nivel de cada taller al perfil de los participantes. No se requiere ningún prerequisito técnico — partimos de sus usos cotidianos y progresamos a su ritmo.",
      },
      {
        q: "¿Qué incluye concretamente una auditoría estratégica de IA?",
        a: "La auditoría cubre 4 ejes: sus procesos de negocio (cuellos de botella y oportunidades), sus herramientas existentes (duplicidades y carencias), la madurez digital de sus equipos y un benchmark de sus competidores. Concluye con una hoja de ruta priorizada y presupuestada.",
      },
      {
        q: "¿Puede contratarse puntualmente sin compromiso a largo plazo?",
        a: "Sí. Ofrecemos intervenciones a la carta: un día de auditoría, un taller de formación único o una serie de sesiones. El acompañamiento continuo (CDO as a Service) es una opción, no una obligación.",
      },
      {
        q: "¿Cómo miden la eficacia de las formaciones?",
        a: "Definimos con usted indicadores de adopción medibles antes de la formación (ej: % de uso de una herramienta, tiempo medio en una tarea). Un balance a los 30 y 90 días está incluido en cada programa.",
      },
    ],
  },
  {
    id: 'pilotage-continu',
    icon: null,
    title: "Pilotaje Continuo",
    description: "Seguimiento mensual de sus KPIs digitales, optimización permanente y acceso prioritario para garantizar un rendimiento duradero y un crecimiento controlado.",
    delay: "0.5s",
    fullDescription: "Un panel de control vivo, ajustes en tiempo real y un interlocutor dedicado cada mes. Pilotamos sus indicadores digitales, identificamos los palancas de crecimiento e iteramos continuamente para maximizar su ROI — sin perder jamás de vista sus objetivos de negocio.",
    benefits: [
      "Pilotaje mensual de KPIs y paneles de control a medida",
      "Optimización continua de workflows y automatizaciones",
      "Reporting de ROI detallado y recomendaciones de iteración",
      "Acceso prioritario para evoluciones y nuevas funcionalidades",
      "Reunión de seguimiento mensual con actas accionables"
    ],
    useCases: ["Retainer mensual digital", "Optimización continua del ROI", "Rendimiento de marketing", "Supervisión operacional de IA"],
    technologies: ["Maintenance", "Mises à jour", "Datalog", "Analytique", "Monitoring"],
    processSteps: [
      {
        title: "Definición de KPIs",
        description: "Identificar con usted los indicadores clave que reflejan sus objetivos de negocio.",
        detailedDescription: [
          "Los **KPIs** solo tienen valor si reflejan fielmente lo que realmente importa para su negocio. Con demasiada frecuencia, los paneles de control están llenos de **métricas de vanidad** — visitantes, impresiones, tasas de apertura — que dan buena conciencia sin guiar la decisión. Trabajamos con usted para identificar los 5 a 8 indicadores que tienen un vínculo directo con sus **ingresos, su retención o su eficiencia operacional**.",
          "El **referencial de KPIs** que entregamos al término de este taller se convierte en la brújula de todo el pilotaje: cada acción que recomendamos, cada optimización que proponemos, cada decisión que usted toma se evalúa a la luz de estos indicadores. Usted pilota por fin con cifras que tienen sentido, no con paneles de control que impresionan **pero no orientan**."
        ],
        clientRequirements: [
          "Lista de sus objetivos de negocio para los próximos 6 a 12 meses",
          "Acceso a sus datos existentes (GA, CRM, contabilidad...)",
          "Validación de los KPIs seleccionados y sus objetivos numéricos"
        ],
        agencyWork: [
          "Animamos un taller de definición de KPIs alineados con sus objetivos estratégicos",
          "Seleccionamos las métricas más pertinentes de su stack de herramientas",
          "Fijamos los objetivos mensuales y trimestrales realistas y ambiciosos",
          "Entregamos el referencial de KPIs documentado que sirve de brújula al pilotaje"
        ]
      },
      {
        title: "Configuración del tracking",
        description: "Configurar las herramientas de análisis y las fuentes de datos a centralizar.",
        detailedDescription: [
          "Un pilotaje solo puede ser fiable si los **datos que lo alimentan** lo son igualmente. La configuración del tracking es una etapa técnica fundamental que garantiza que cada KPI medido refleja la **realidad de su actividad** — sin duplicados, sin lagunas, sin sesgos derivados de una configuración deficiente. Auditamos su plan de etiquetado existente, corregimos las anomalías e implementamos una **recogida de datos robusta** y exhaustiva.",
          "La **centralización** de todas sus fuentes de datos — analytics, CRM, publicidad, ventas, soporte — en un referencial único es lo que hace que el pilotaje sea verdaderamente potente. Ya no necesita malabarismos con seis herramientas para comprender el rendimiento de su negocio: **todo es visible en un solo lugar**, coherente y actualizado en tiempo real. Las alertas automáticas que configuramos le informan inmediatamente cuando un indicador se desvía de su trayectoria."
        ],
        clientRequirements: [
          "Acceso de administrador a sus herramientas de analytics y fuentes de datos",
          "Validación del plan de etiquetado propuesto",
          "Ventana de despliegue sin impacto en su actividad"
        ],
        agencyWork: [
          "Configuramos el plan de etiquetado en su sitio y sus herramientas",
          "Conectamos todas sus fuentes de datos (GA4, CRM, publicidad, ventas)",
          "Verificamos la calidad de los datos recogidos y corregimos las anomalías",
          "Configuramos las alertas automáticas en caso de desviación"
        ]
      },
      {
        title: "Panel de control a medida",
        description: "Construir su panel de control vivo, accesible en tiempo real.",
        detailedDescription: [
          "Un buen **panel de control** es aquel que sus equipos consultan cada mañana con interés, no el que acumula polvo después de tres semanas de uso. Diseñamos su dashboard partiendo de sus **usos reales**: quién lo consulta, con qué frecuencia, para tomar qué decisiones. La claridad visual, la jerarquía de la información y la **fluidez de navegación** transforman los datos brutos en insights accionables.",
          "El panel de control que construimos en **Looker Studio** o Metabase está organizado en vistas adaptadas a cada perfil — vista operacional para sus equipos, vista sintética para la dirección, vista detallada para el marketing. Se **actualiza automáticamente** y es accesible para cualquier persona autorizada, desde cualquier dispositivo. Sus colaboradores son formados para leerlo e interpretarlo desde el día de la entrega."
        ],
        clientRequirements: [
          "Validación de las vistas e indicadores mostrados",
          "Designación de los usuarios del panel de control",
          "Comentarios sobre la ergonomía y las visualizaciones preferidas"
        ],
        agencyWork: [
          "Construimos su panel de control en Looker Studio o Metabase",
          "Organizamos las vistas por perfil (operacional, directivo, equipo de marketing)",
          "Configuramos la actualización automática y el acceso multi-usuario",
          "Formamos a sus equipos en la lectura e interpretación de los datos"
        ]
      },
      {
        title: "Revisión mensual",
        description: "Analizar juntos los resultados, las desviaciones y las oportunidades.",
        detailedDescription: [
          "La **revisión mensual** es la cita estratégica que transforma sus datos en decisiones. No le sometemos un informe de cifras — animamos una **conversación estructurada** en torno a sus resultados, las desviaciones respecto a los objetivos y las oportunidades que los datos revelan. Cada reunión concluye con **2 a 3 acciones prioritarias claras**, un responsable designado y una fecha límite. Nada queda en el aire.",
          "El **informe preparatorio** que entregamos antes de cada reunión le permite llegar con una mirada ya formada sobre los puntos clave, sin perder tiempo en una lectura en frío durante la sesión. Este respeto por su tiempo es una muestra de nuestro compromiso por una **colaboración eficaz**. En 45 a 60 minutos al mes, usted dispone de una visión completa de su rendimiento digital y de un rumbo claro para el mes siguiente."
        ],
        clientRequirements: [
          "Disponibilidad mensual de 1h para la revisión de rendimiento",
          "Lectura del informe preparatorio antes de la reunión",
          "Validación o ajuste de los objetivos del mes siguiente"
        ],
        agencyWork: [
          "Preparamos un informe estructurado: resultados vs objetivos, hechos destacados, recomendaciones",
          "Animamos la reunión de revisión mensual (45 a 60 min) con un orden del día preciso",
          "Contextualizamos las cifras respecto a las tendencias del sector",
          "Definimos juntos las 2-3 acciones prioritarias del mes siguiente"
        ]
      },
      {
        title: "Optimizaciones",
        description: "Ajustar los workflows, campañas y automatizaciones en función de los datos.",
        detailedDescription: [
          "La **optimización continua** es el motor del crecimiento sostenible. Cada mes, los datos de rendimiento revelan palancas que no habríamos podido identificar sin un historial suficiente: una **página de conversión** que rinde por debajo de lo esperado, un segmento de audiencia más reactivo, un workflow cuyo timing puede mejorarse, una automatización cuya tasa de error aumenta. Identificamos estas oportunidades sistemáticamente y proponemos ajustes concretos, **no observaciones generales**.",
          "Los **tests A/B** que realizamos sobre los elementos clave de sus dispositivos digitales transforman las hipótesis en certezas. Cada modificación se mide, su impacto se documenta y los **aprendizajes se capitalizan** para alimentar las iteraciones siguientes. Usted se beneficia de un proceso de mejora continua que progresa mes a mes, impulsado por los datos de su propia actividad."
        ],
        clientRequirements: [
          "Validación de las modificaciones antes de la puesta en producción",
          "Definición de las prioridades de optimización para el mes",
          "Autorización de acceso a las herramientas afectadas por los ajustes"
        ],
        agencyWork: [
          "Identificamos las palancas de optimización más impactantes a través del análisis de datos",
          "Implementamos los ajustes validados en sus workflows, campañas o automatizaciones",
          "Realizamos tests A/B sobre los elementos clave para validar las hipótesis",
          "Medimos el impacto de cada optimización y documentamos los aprendizajes"
        ]
      },
      {
        title: "Reporting ejecutivo",
        description: "Producir un informe claro y accionable para sus equipos directivos.",
        detailedDescription: [
          "El **reporting ejecutivo** se dirige a decisores que tienen poco tiempo y mucho contexto que procesar. Diseñamos informes **sintéticos y visualmente impactantes** que van a lo esencial: sus rendimientos clave, las tendencias significativas y las recomendaciones de acción prioritarias. Un directivo debe poder leer este informe en **cinco minutos** y salir con una visión clara de la situación y de los próximos pasos.",
          "Los **benchmarks sectoriales** que integramos sistemáticamente ofrecen una perspectiva indispensable a sus cifras brutas. Saber que su tasa de conversión es del 2,3 % solo tiene sentido si sabe que la **mediana de su sector** está en el 1,8 %. Esta contextualización es lo que permite a sus directivos calibrar su nivel de ambición y comunicar con confianza sobre el rendimiento digital de la empresa."
        ],
        clientRequirements: [
          "Definición del formato y de los destinatarios del informe",
          "Validación antes del envío a las partes interesadas",
          "Comentarios sobre las informaciones a destacar"
        ],
        agencyWork: [
          "Redactamos un informe ejecutivo sintético adaptado a un público no técnico",
          "Producimos visualizaciones impactantes que facilitan la toma de decisiones",
          "Incluimos los benchmarks sectoriales para contextualizar sus rendimientos",
          "Entregamos el informe antes de la reunión para una lectura preparatoria"
        ]
      },
      {
        title: "Vigilancia y anticipación",
        description: "Vigilar las tendencias del mercado y anticipar los ajustes estratégicos.",
        detailedDescription: [
          "En un entorno digital que evoluciona a **velocidad acelerada**, la vigilancia no es un lujo: es una **ventaja competitiva**. Supervisamos permanentemente las evoluciones de su sector, las actualizaciones de algoritmos, las nuevas prácticas competitivas y las tecnologías emergentes susceptibles de impactar su actividad. Usted es alertado **proactivamente** cuando una oportunidad o una amenaza se materializa — no después de que sus competidores ya la hayan aprovechado.",
          "Las **recomendaciones estratégicas** que formulamos a partir de esta vigilancia están siempre contextualizadas a su situación específica: no le transmitimos newsletters genéricas, le aportamos insights accionables que se inscriben en su hoja de ruta. Esta **anticipación continua** es lo que le permite mantenerse por delante de su mercado y capitalizar sobre las nuevas oportunidades antes que sus competidores."
        ],
        clientRequirements: [
          "Compartir sus orientaciones estratégicas futuras",
          "Apertura a las recomendaciones proactivas de nuestra parte",
          "Disponibilidad para un punto flash en caso de oportunidad urgente"
        ],
        agencyWork: [
          "Supervisamos las evoluciones de su sector y de las tecnologías pertinentes",
          "Le alertamos proactivamente sobre las oportunidades o amenazas identificadas",
          "Proponemos ajustes estratégicos basados en las señales débiles del mercado",
          "Preparamos recomendaciones de evolución de su stack digital"
        ]
      },
    ],
    stats: [
      { value: "100%", label: "Visibilidad en tiempo real sobre sus KPIs" },
      { value: "+28%", label: "ROI medio a los 6 meses de pilotaje" },
      { value: "1 reunión", label: "Al mes basta para pilotar todo" },
    ],
    faq: [
      {
        q: "¿Qué KPIs siguen exactamente?",
        a: "Depende completamente de sus objetivos. Para un e-commerce: tasa de conversión, cesta media, coste de adquisición. Para un SaaS: churn, MRR, activación. Siempre empezamos por definir juntos lo que realmente importa para su negocio.",
      },
      {
        q: "¿Cómo funciona concretamente la reunión mensual?",
        a: "Cada mes, preparamos un informe estructurado: resultados vs objetivos, 3 hechos destacados, 2–3 recomendaciones accionables. La reunión dura 45 a 60 min y se celebra en videoconferencia o presencialmente según sus preferencias.",
      },
      {
        q: "¿Podemos cancelar el retainer si no estamos satisfechos?",
        a: "Sí. Nuestros contratos de pilotaje continuo son rescindibles cada mes con un preaviso de 30 días. Preferimos ganarnos su confianza mes a mes antes que encerrarle en un compromiso.",
      },
      {
        q: "¿Necesitamos tener ya herramientas en marcha para empezar?",
        a: "No. Si parte de cero, ponemos en marcha todo el tracking y los paneles de control desde el primer mes. Si ya tiene herramientas, nos conectamos a ellas y las enriquecemos.",
      },
    ],
  }
];
