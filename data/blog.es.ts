// Artículos del blog — Maison Siranno (Español)

export type BlogCategory =
  | 'Desarrollo Web & SaaS'
  | 'Automatización & n8n'
  | 'Inteligencia Artificial & RAG'
  | 'Contenido & Marketing IA'
  | 'Consultoría & Formación'
  | 'Seguimiento Continuo';

export interface BlogArticleSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogArticleBody {
  intro: string;
  sections: BlogArticleSection[];
  conclusion: string;
  keyTakeaways?: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  available: boolean;
  body?: BlogArticleBody;
}

export const blogArticles: BlogArticle[] = [
  {
    id: 'seo-local-2025',
    title: 'SEO local en 2025: lo que realmente funciona',
    excerpt: 'Google Maps, fichas de establecimiento, reseñas de clientes, datos estructurados... El posicionamiento local ha evolucionado profundamente. Aquí están las palancas concretas que marcan la diferencia para las PYME y artesanos.',
    category: 'Desarrollo Web & SaaS',
    date: 'Diciembre 2024',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    tags: ['SEO', 'Local', 'Google', 'PYME'],
    available: true,
    body: {
      intro: 'En 2025, el **46 %** de las búsquedas de **Google** tienen una intención local. Sin embargo, la mayoría de las **PYME** siguen aplicando recetas de *SEO* diseñadas para el ámbito nacional — y se preguntan por qué sus competidores las aplastas en **Google Maps**. El **posicionamiento local** obedece a reglas distintas, y comprender esas reglas puede transformar radicalmente tu visibilidad en pocas semanas. Este artículo resume lo que hemos aprendido ayudando a artesanos, despachos y comercios a posicionarse en lo más alto de los resultados locales.',
      sections: [
        {
          title: 'La ficha Google Business Profile: tu prioridad absoluta',
          paragraphs: [
            '**Google Business Profile** (antes Google My Business) es la base del **SEO local**. Una ficha completa, actualizada y animada regularmente supera casi siempre a un sitio web perfecto que descuida esta herramienta. **Google** evalúa tres criterios para el ranking local: la *relevancia* (¿tu actividad corresponde a la búsqueda?), la *distancia* (¿dónde estás en relación al usuario?) y la *notoriedad* (¿eres conocido y recomendado?).',
            'Para optimizar tu ficha, empieza por elegir la **categoría principal correcta** — es la palanca más subestimada. Un fontanero que se declara en "Servicios a domicilio" en lugar de "Fontanero" pierde posiciones de inmediato. Añade categorías secundarias relevantes, **fotos recientes** (el algoritmo favorece las fichas activas), tus horarios exactos y una descripción que integre de forma natural tus *palabras clave locales*.',
          ],
          bullets: [
            'Completa el 100 % de los campos de tu ficha — cada campo que falta es una señal negativa',
            'Publica al menos 1 foto por semana (antes/después de obras, equipo, instalaciones)',
            'Responde a todas las reseñas, positivas y negativas, en menos de 24h',
            'Activa los mensajes y las preguntas/respuestas',
            'Usa la función "Publicaciones" para anunciar promociones y novedades',
          ],
        },
        {
          title: 'Las reseñas de clientes: el combustible del ranking local',
          paragraphs: [
            '**Google** utiliza la cantidad y la calidad de las **reseñas de clientes** como señal de confianza. Un comercio con **200 reseñas** a 4,3 estrellas superará casi siempre a un competidor con 15 reseñas a 5 estrellas. La regularidad también importa: un flujo constante de reseñas recientes está más valorado que un stock de reseñas antiguas.',
            'La mejor forma de conseguir reseñas es pedirlas **sistemáticamente**, justo después de la prestación — es cuando la satisfacción está en su punto más alto. Un simple mensaje de *WhatsApp* con el enlace directo a tu ficha de Google es suficiente. Para JD Rénovation, implementamos este proceso y obtuvimos **47 reseñas en 3 meses**, lo que impulsó la ficha a lo más alto de los resultados locales en Arras.',
          ],
          bullets: [
            'Crea un enlace corto a tu página de reseñas de Google y guárdalo como acceso directo',
            'Integra la solicitud de reseña en tu proceso post-prestación (email, SMS, WhatsApp)',
            'Nunca pidas explícitamente una reseña de 5 estrellas — pide una "valoración honesta"',
            'Responde a las reseñas negativas con calma y ofrece siempre una solución',
          ],
        },
        {
          title: 'El contenido local en tu sitio web: el arma secreta',
          paragraphs: [
            'Tu sitio web debe hablarle a **Google** en lenguaje local. Esto significa crear **páginas dedicadas por zona geográfica** si operas en varias ciudades, integrar el nombre de tu ciudad en las *etiquetas de título y meta*, y sobre todo publicar contenido que responda a preguntas locales específicas.',
            'Un blog de artesano que publica artículos como "Reforma de baño en Madrid: costes, plazos y errores que evitar" capta un **tráfico ultra-cualificado** que sus competidores ignoran. Estas páginas de *larga cola local* convierten **3 a 5 veces mejor** que las páginas genéricas porque corresponden exactamente a la intención de búsqueda del usuario.',
          ],
          bullets: [
            'Crea una página dedicada por ciudad objetivo (ej: \'/fontanero-madrid\', \'/fontanero-barcelona\')',
            'Menciona referencias locales en tu contenido (barrios, monumentos, zonas industriales)',
            'Integra los datos estructurados "LocalBusiness" con Schema.org',
            'Regístrate en los directorios locales de referencia (Páginas Amarillas, Yelp, etc.)',
          ],
        },
      ],
      conclusion: 'El **SEO local** no es una ciencia oscura reservada a expertos. Es un conjunto de buenas prácticas coherentes, aplicadas de forma regular, que con el tiempo se componen como intereses. Una **ficha de Google** cuidada, un flujo constante de **reseñas de clientes** y contenido web anclado en tu territorio: esos son los tres pilares que te convertirán en el **primer resultado local** de tu sector. Si quieres una auditoría de tu presencia local actual y un plan de acción concreto, contáctanos — la primera consulta es gratuita.',
      keyTakeaways: [
        'Google Business Profile completo y activo es más importante que tu sitio web para el SEO local',
        'Las reseñas recientes y regulares cuentan más que su puntuación media',
        'Las páginas de contenido local (por ciudad) captan un tráfico ultra-cualificado y poco explotado',
        'Los datos estructurados LocalBusiness amplifican cada señal local',
        'La regularidad siempre prima sobre los golpes puntuales en SEO local',
      ],
    },
  },

  {
    id: 'site-vitrine-erreurs',
    title: 'Por qué tu sitio web te cuesta clientes',
    excerpt: 'Un sitio lento, no adaptado a móvil, sin una CTA clara: es una bomba de fugas invisibles. Los 5 errores más comunes en los sitios de PYME — y cómo corregirlos rápidamente.',
    category: 'Desarrollo Web & SaaS',
    date: 'Enero 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
    tags: ['Sitio Web', 'Conversión', 'UX', 'PYME'],
    available: true,
    body: {
      intro: 'Tu sitio recibe visitantes pero no genera contactos. O peor, no tienes ni idea de cuántas personas lo visitan. Este escenario es la norma para el **70 % de las PYME**. No porque les falten competencias, sino porque nadie les ha dicho que ciertos **errores de diseño** pueden anular todo el tráfico que generan. Aquí están los cinco más destructivos — y las *correcciones concretas* para cada uno.',
      sections: [
        {
          title: 'Error n.º 1: Un sitio que carga en más de 3 segundos',
          paragraphs: [
            '**Google** ha hecho oficial lo que los *diseñadores UX* saben desde hace años: **el 53 % de los visitantes móviles** abandona un sitio que tarda más de **3 segundos** en cargar. Para tu **SEO**, cada segundo adicional de retraso reduce tu clasificación. Un sitio lento es, por tanto, una doble penalización: menos visitantes, y menos conversiones entre los que se quedan.',
            'Los culpables habituales: imágenes sin comprimir (una foto de **4 MB** en la página de inicio puede arruinarlo todo por sí sola), un alojamiento de entrada compartido con cientos de otros sitios, o un tema *WordPress* cargado de decenas de plugins sin usar. La solución: audita tu sitio en **PageSpeed Insights** y trata los problemas en el orden de prioridad indicado.',
          ],
        },
        {
          title: 'Error n.º 2: Ninguna llamada a la acción visible',
          paragraphs: [
            'Un visitante que llega a tu sitio no sabe necesariamente qué hacer a continuación. Si tu sitio no le dice explícitamente qué acción realizar — llamar, enviar un mensaje, pedir una cita — se irá sin hacer nada. Así de simple. Sin embargo, el **60 % de los sitios de PYME** no tienen una *CTA* visible sin desplazarse en su página de inicio.',
            'La corrección es inmediata: añade un **botón de acción principal** en la zona visible desde la llegada (por encima del *pliegue de la página*), repítelo después de cada sección importante, y asegúrate de que tenga un color contrastante. Para un artesano, un simple "Solicitar presupuesto gratis" con un número de teléfono clicable puede **duplicar la tasa de contacto**.',
          ],
          bullets: [
            'Tu CTA principal debe ser visible sin desplazarse en móvil y escritorio',
            'Usa un verbo de acción concreto: "Obtener presupuesto", "Pedir cita", "Llamar ahora"',
            'Repite la CTA al menos 3 veces en la página (arriba, al medio, abajo)',
            'El número de teléfono debe ser clicable en móvil (etiqueta tel:)',
          ],
        },
        {
          title: 'Los otros 3 errores críticos',
          paragraphs: [
            'La ausencia de una versión **móvil correcta**: en 2025, más del **65 % de las búsquedas locales** se realizan en smartphone. Un sitio no optimizado para móvil pierde inmediatamente la mitad de su audiencia potencial. Comprueba tu sitio en diferentes dispositivos — no solo el tuyo.',
            'Sin **prueba social visible**: las reseñas, testimonios y referencias deben mostrarse de forma destacada. Un visitante que no ve pruebas de que otros han confiado en ti dudará en contactarte. Integra directamente tus **reseñas de Google** en tu sitio mediante *widget* o capturas de pantalla. Por último, un formulario de contacto demasiado complejo destruye las conversiones: nombre, email, mensaje — es suficiente para un primer contacto.',
          ],
          bullets: [
            'Comprueba tu sitio en móvil con la herramienta de prueba de Google (search.google.com/test/mobile-friendly)',
            'Integra al menos 3 testimonios de clientes con nombre, apellido y foto si es posible',
            'Reduce tus formularios al mínimo estricto (máximo 3 campos para un primer contacto)',
            'Añade Google Analytics o una alternativa para medir por fin lo que ocurre',
          ],
        },
      ],
      conclusion: 'Un **sitio web eficaz** no es necesariamente el más bonito o el más sofisticado — es el que **convierte sus visitantes en contactos cualificados**. Estas cinco correcciones pueden aplicarse en un día de trabajo para la mayoría. Si quieres una auditoría completa de tu sitio con *recomendaciones priorizadas* y cuantificadas, nuestro equipo lo hace de forma gratuita en una primera consulta.',
      keyTakeaways: [
        'Un sitio que carga en más de 3s pierde el 53% de sus visitantes móviles',
        'La ausencia de CTA visible es la causa n.º 1 de los sitios que no generan contactos',
        'Mobile-first ya no es una opción: el 65% de las búsquedas locales vienen del smartphone',
        'Los testimonios de clientes visibles aumentan la tasa de conversión entre un 15 y un 35%',
      ],
    },
  },

  {
    id: 'dev-ia-claude-code',
    title: 'Desarrollar con Claude Code: el nuevo estándar del desarrollo web a medida',
    excerpt: 'Claude Code cambia la forma en que desarrollamos aplicaciones web. Menos fricción, más velocidad — sin sacrificar la calidad ni la relación con el cliente. Experiencia tras 6 meses de uso intensivo.',
    category: 'Desarrollo Web & SaaS',
    date: 'Febrero 2025',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    tags: ['Claude Code', 'Desarrollo', 'IA', 'A medida'],
    available: true,
    body: {
      intro: 'Desde septiembre de 2025, usamos **Claude Code** como herramienta principal de desarrollo en **Maison Siranno**. No para reemplazar la experiencia humana — sino para amplificarla. Lo que hemos descubierto en **seis meses de uso intensivo** cambia nuestra forma de trabajar, y sobre todo lo que podemos ofrecer a nuestros clientes. Aquí va una experiencia honesta: lo que **Claude Code** hace realmente bien, sus límites reales, y por qué creemos que es el futuro del *desarrollo a medida*.',
      sections: [
        {
          title: 'Lo que Claude Code cambia concretamente',
          paragraphs: [
            'La principal transformación no es la velocidad (aunque es real) — es la **reducción del coste cognitivo** de las tareas repetitivas. Generar componentes de *UI* estándar, escribir pruebas unitarias, documentar código existente, reformatear datos: tareas que **Claude Code** gestiona en pocos segundos, liberando la atención del desarrollador para los problemas que realmente requieren reflexión arquitectónica.',
            'Concretamente, en el proyecto **JD Rénovation**, entregamos un sitio completo con **80 artículos de blog**, sistema de formularios inteligente e integración con *Google Workspace* en **3 semanas** — donde el mismo alcance habría tardado de 6 a 8 semanas con un enfoque tradicional. Esta ganancia no viene de la magia sino de la eliminación sistemática del tiempo perdido en código *boilerplate*.',
          ],
          bullets: [
            'Generación de componentes React tipados en pocos segundos',
            'Refactoring de código existente con explicación del razonamiento',
            'Detección y corrección de bugs con contexto completo',
            'Migración de datos y transformación de formatos JSON',
            'Documentación automática del código para su mantenibilidad',
          ],
        },
        {
          title: 'La diferencia con las herramientas competidoras',
          paragraphs: [
            'Lo que distingue a **Claude Code** de otros asistentes de código es su capacidad de mantener un **contexto en archivos largos** y razonar sobre la arquitectura global — no solo sobre la línea de código actual. Entiende los *patrones* del proyecto, respeta las convenciones establecidas y puede proponer *refactorings* que mejoran la coherencia global sin romper nada.',
            'Probamos varios enfoques antes de estandarizar en **Claude Code**. Lo que nos convenció: su fiabilidad en tareas complejas, su tendencia a **explicar sus decisiones** en lugar de imponer una solución, y su capacidad de adaptar su nivel de detalle al contexto — técnico para las discusiones de arquitectura, simple y directo para documentar una funcionalidad que mostrar al cliente.',
          ],
        },
        {
          title: 'Lo que eso cambia para nuestros clientes',
          paragraphs: [
            'El beneficio para nuestros clientes es directo: **proyectos entregados más rápido**, con menos errores de tipado y de lógica, y documentación incluida. Pero sobre todo, la reducción del tiempo en tareas mecánicas nos permite dedicar más atención a lo que realmente importa: comprender el **negocio del cliente**, *cuestionar* las especificaciones, y proponer soluciones adaptadas a su contexto real en lugar de a una *plantilla* genérica.',
            'La **relación de proximidad** sigue siendo el núcleo de nuestra propuesta de valor. **Claude Code** no la reemplaza — la refuerza, dándonos el ancho de banda necesario para estar realmente presentes en los puntos que importan: la estrategia, la *UX* y el acompañamiento post-entrega.',
          ],
        },
      ],
      conclusion: '**Claude Code** es una herramienta potente, pero no es más que una herramienta. La diferencia entre un buen proyecto web y un excelente proyecto web no depende del asistente de **IA** utilizado — depende de la calidad de la reflexión previa, de la comprensión del **negocio del cliente** y del rigor en la ejecución. Lo que **Claude Code** nos aporta es más tiempo para estos elementos que marcan la verdadera diferencia.',
      keyTakeaways: [
        'Claude Code reduce el tiempo en tareas repetitivas, no en la reflexión arquitectónica',
        'La ganancia real es el ancho de banda liberado para concentrarse en el valor de negocio',
        'La calidad del entregable mejora porque el desarrollador comete menos errores por fatiga',
        'La relación con el cliente se profundiza cuando se pasa menos tiempo en el boilerplate',
      ],
    },
  },

  {
    id: 'mvp-saas-6-semaines',
    title: 'Lanzar un MVP SaaS en 6 semanas: método y stack técnico',
    excerpt: 'De la idea al producto en producción en 6 semanas. Nuestro método, nuestro stack (React + Supabase + Stripe + Vercel) y las trampas que evitar para los fundadores no técnicos.',
    category: 'Desarrollo Web & SaaS',
    date: 'Enero 2025',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['MVP', 'SaaS', 'Startup', 'React'],
    available: true,
    body: {
      intro: '**Seis semanas.** Es el tiempo que necesita un equipo bien organizado para pasar de una idea de *SaaS* a un producto en producción capaz de cobrar sus primeros pagos. No una maqueta de *Figma*, no un prototipo improvisado — un producto real con autenticación, base de datos, **billing con Stripe** y despliegue continuo. Hemos aplicado este método en **11 proyectos** entre 2023 y 2024, con una tasa de puesta en producción a 6 semanas del **82 %**. Aquí está exactamente cómo lo hacemos.',
      sections: [
        {
          title: 'Semanas 1-2: Decisión de stack y arquitectura sin deuda técnica',
          paragraphs: [
            'La elección del **stack** es la decisión más estructurante — y la más frecuentemente mal tomada. Demasiados fundadores eligen una tecnología porque la conocen, no porque sea la más adecuada para el problema. Para un *SaaS B2B* estándar (panel de control, gestión de usuarios, suscripciones), nuestro stack de referencia es invariable desde hace 18 meses: **React + TypeScript** en el front, **Supabase** como *backend-as-a-service* (PostgreSQL + autenticación + almacenamiento), **Stripe** para el billing, **Vercel** para el despliegue. Este cuarteto permite a un desarrollador en solitario entregar en **6 semanas** lo que hace 5 años tardaba 6 meses con un stack clásico.',
            'La semana 1 se dedica íntegramente a la definición del **alcance mínimo viable**. Sin *feature creep*, sin "puede que necesitemos". Usamos un método brutal: para cada funcionalidad planteada, la pregunta es "¿podemos validar nuestra hipótesis de negocio sin esto?". Si la respuesta es sí, la *feature* sale del alcance. El resultado siempre es un alcance reducido entre un **40 y un 60 %** respecto a las ambiciones iniciales — y eso es exactamente lo que hace posible la entrega en 6 semanas.',
          ],
          bullets: [
            'Stack recomendado: React + TypeScript / Supabase / Stripe / Vercel',
            'Supabase reemplaza 3 servicios: base de datos, autenticación, almacenamiento de archivos',
            'Vercel permite el despliegue continuo desde GitHub en 5 minutos de configuración',
            'Definir el MVP en la semana 1: eliminar toda funcionalidad no esencial para la validación',
            'Usar un sistema de diseño existente (Shadcn/UI, Radix) — no reconstruir los componentes base',
          ],
        },
        {
          title: 'Semanas 3-4: El núcleo del producto — autenticación, datos, lógica de negocio',
          paragraphs: [
            'Estas dos semanas constituyen el sprint más intenso. La autenticación de **Supabase** está operativa en **menos de un día** (email/contraseña + *magic link* + OAuth Google). La estructura de la base de datos se modela con cuidado — es el único lugar donde no cortamos caminos, porque una arquitectura de *BD* mal pensada cuesta mucho corregirla después. Usamos sistemáticamente **Row Level Security** (RLS) de Supabase para aislar los datos *multi-tenant* desde el principio.',
            'La **lógica de negocio** — el núcleo del producto, el valor diferenciador — se desarrolla en la semana 4. Aquí es donde la claridad del alcance de la semana 1 da sus frutos: el equipo puede concentrarse en lo que realmente importa sin distraerse con funcionalidades secundarias. Un panel de control minimalista pero funcional, las operaciones *CRUD* esenciales, las notificaciones básicas. Cada día termina con un despliegue en la URL de *preview* de **Vercel** que el cliente puede consultar.',
          ],
          bullets: [
            'Autenticación Supabase operativa en < 4h (email + Google OAuth)',
            'Row Level Security activado desde el principio para el aislamiento de datos multi-tenant',
            'Migraciones de base de datos versionadas en Git desde el primer esquema',
            'Despliegue de preview automático en cada Pull Request con Vercel',
            'Pruebas de integración en los endpoints críticos (autenticación, billing)',
          ],
        },
        {
          title: 'Semanas 5-6: Billing con Stripe, onboarding y puesta en producción',
          paragraphs: [
            'La integración de **Stripe** en la semana 5 siempre sigue el mismo *patrón*: **Stripe Checkout** para la suscripción (evita gestionar los formularios de tarjeta), *webhooks* para sincronizar el estado de la suscripción en **Supabase**, y **Stripe Customer Portal** para la gestión en autoservicio (cambio de plan, cancelación). Este tríptico cubre el **95 % de las necesidades SaaS** y está operativo en 2 a 3 días de desarrollo.',
            'La semana 6 se dedica al *onboarding* y al *pulido*. Un *SaaS* sin un onboarding claro pierde el **70 % de sus usuarios** en los primeros 7 días. Construimos un *flujo* de activación mínimo: email de bienvenida, checklist de configuración *in-app*, y un primer éxito garantizado en los **5 minutos** tras el registro. La puesta en producción final incluye la configuración del dominio personalizado, las variables de entorno de producción, y una prueba de extremo a extremo del recorrido de pago.',
          ],
          bullets: [
            'Stripe Checkout gestiona los pagos sin almacenar datos bancarios en local',
            'Webhooks de Stripe → Supabase para sincronización en tiempo real del estado de suscripción',
            'Stripe Customer Portal: gestión del plan en autoservicio sin código personalizado',
            'Checklist de onboarding in-app: al menos un "momento ¡ajá!" en los primeros 5 minutos',
            'Checklist de puesta en producción: dominio, HTTPS, variables de entorno, monitorización con Sentry',
          ],
        },
      ],
      conclusion: '**Seis semanas** es poco tiempo — pero es suficiente para validar una hipótesis de negocio con un producto que parece un producto real. La clave es la disciplina del **alcance mínimo**: construyes para aprender, no para impresionar. Si tienes una idea de *SaaS* y quieres estar en producción antes de que acabe el trimestre, contáctanos para hablar de tu proyecto.',
      keyTakeaways: [
        'El stack React + Supabase + Stripe + Vercel reduce el tiempo de desarrollo un 60% vs stack clásico',
        'Reducir el alcance entre un 40 y un 60% en la semana 1 es la condición principal para respetar los plazos',
        'Supabase reemplaza autenticación + base de datos + almacenamiento en un único servicio',
        'La integración Stripe Checkout + webhooks + Customer Portal cubre el 95% de las necesidades de billing',
        'El onboarding en la semana 6 es tan importante como las funcionalidades — sin él, el 70% de los usuarios desaparece',
      ],
    },
  },

  {
    id: 'core-web-vitals-2025',
    title: 'Core Web Vitals 2025: la guía para dejar de perder en SEO',
    excerpt: 'LCP, INP, CLS — las métricas de rendimiento que Google penaliza sin piedad. Cómo medirlas, comprenderlas y optimizarlas en tu sitio React o WordPress.',
    category: 'Desarrollo Web & SaaS',
    date: 'Próximamente',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    tags: ['Core Web Vitals', 'SEO', 'Rendimiento', 'Google'],
    available: false,
  },

  {
    id: 'automatisation-pme',
    title: 'Automatización para PYME: ¿por dónde empezar?',
    excerpt: 'Demasiados directivos creen que la automatización está reservada a las grandes empresas. Falso. Un método sencillo en 3 pasos para identificar y automatizar tus tareas repetitivas desde esta semana.',
    category: 'Automatización & n8n',
    date: 'Noviembre 2024',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
    tags: ['Automatización', 'PYME', 'n8n', 'Productividad'],
    available: true,
    body: {
      intro: 'De media, un directivo de **PYME** pasa **2 a 3 horas al día** en tareas que una máquina podría hacer en su lugar: recordatorios por email, introducción de datos entre herramientas, informes semanales, notificaciones internas... Es el **30 al 40 %** de una jornada de trabajo. La **automatización** no es un proyecto de *IT* complejo reservado a los *DSI* de las grandes empresas — es una serie de pequeñas decisiones concretas que cualquier PYME puede implementar con las herramientas adecuadas. Aquí está por dónde empezar.',
      sections: [
        {
          title: 'Paso 1: Mapear tus tareas repetitivas',
          paragraphs: [
            'Antes de automatizar cualquier cosa, dedica una semana a anotar cada tarea que tú o tu equipo repetís más de **3 veces a la semana**. Sé preciso: "enviar el informe semanal por email" es una tarea automatizable, "gestionar clientes difíciles" no lo es. El objetivo es elaborar una lista bruta de **10 a 20 candidatos** a la automatización.',
            'Clasifica luego estas tareas según dos criterios: la **frecuencia** (¿cuántas veces por semana?) y el **tiempo unitario** (¿cuántos minutos por ocurrencia?). El producto de ambos te da el tiempo semanal perdido. Ordénalos de mayor a menor — son tus *quick wins* prioritarios.',
          ],
          bullets: [
            'Recordatorios de email a clientes (presupuestos sin respuesta, facturas impagadas)',
            'Transferencia de datos entre herramientas (ej: formulario web → CRM → hoja de cálculo)',
            'Notificaciones internas tras un evento (nuevo lead, pedido, ticket)',
            'Generación de informes y exportaciones periódicas',
            'Publicación en redes sociales',
          ],
        },
        {
          title: 'Paso 2: Elegir las herramientas adecuadas',
          paragraphs: [
            'Para una PYME que empieza con la automatización, **n8n** es nuestra recomendación principal. *Open-source*, potente, instalable en tu servidor o en la nube, conecta más de **400 servicios** sin código. Su lógica visual (nodos conectados entre sí) es accesible para perfiles no técnicos tras media jornada de formación.',
            'Para los casos simples (conectar dos aplicaciones sin lógica compleja), **Make** (antes *Integromat*) o incluso **Zapier** son suficientes y permiten empezar en **30 minutos**. Lo importante no es la herramienta — es empezar con algo concreto en lugar de buscar la solución perfecta.',
          ],
          bullets: [
            'n8n: mejor relación funcionalidades/coste, ideal si quieres flexibilidad',
            'Make: excelente para los casos intermedios, interfaz muy visual',
            'Zapier: el más sencillo de aprender, pero el más caro a escala',
            'Para los emails: combinado con Gmail u Outlook, cualquiera de estas herramientas funcionará',
          ],
        },
        {
          title: 'Paso 3: Empezar con un flujo de trabajo simple y medirlo',
          paragraphs: [
            'No intentes automatizarlo todo de golpe. Elige la tarea en lo más alto de tu lista (mayor tiempo perdido, lógica más simple) y construye un **primer flujo de trabajo**. Pruébalo durante dos semanas, corrige los casos límite, luego **documéntalo** para que alguien más pueda mantenerlo.',
            'Mide el **impacto real**: tiempo ahorrado, errores evitados, satisfacción del equipo. Estas cifras concretas te permitirán convencer a tus socios o a tu equipo de invertir en las siguientes automatizaciones. Es un *ciclo virtuoso*: cada victoria financia la siguiente.',
          ],
        },
      ],
      conclusion: 'La **automatización para PYME** no es un proyecto ambicioso que planificar durante 6 meses — es una disciplina que se instala progresivamente, *flujo de trabajo* a *flujo de trabajo*. Empieza por la tarea que más te molesta. Automatízala. Mide la ganancia. Repite. Si quieres acompañamiento para identificar tus mejores **oportunidades de automatización** y construir los primeros flujos de trabajo, contáctanos — llevamos haciéndolo desde el primer día.',
      keyTakeaways: [
        'Mapea tus tareas repetitivas antes de elegir una herramienta',
        'Prioriza por frecuencia × tiempo unitario para encontrar los quick wins',
        'n8n es el mejor punto de entrada para una PYME que quiere flexibilidad',
        'Empieza con un único flujo de trabajo, mide el impacto, luego amplía',
        'Documenta cada automatización para mantenerla en el tiempo',
      ],
    },
  },

  {
    id: 'n8n-vs-make',
    title: 'n8n vs Make (antes Integromat): ¿cuál elegir en 2025?',
    excerpt: 'Dos plataformas de automatización potentes, dos filosofías distintas. Comparativa completa para ayudarte a elegir según tu perfil, tu presupuesto y tus ambiciones.',
    category: 'Automatización & n8n',
    date: 'Diciembre 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    tags: ['n8n', 'Make', 'Comparativa', 'Automatización'],
    available: true,
    body: {
      intro: '¿**n8n** o **Make**? Es la pregunta que más nos hacen las **PYME** e independientes que quieren lanzarse a la automatización de sus procesos. Ambas herramientas son excelentes, pero responden a necesidades distintas. Tras haber construido **cientos de flujos de trabajo** en ambas plataformas, aquí está nuestro análisis sin rodeos — con casos concretos para ayudarte a decidir.',
      sections: [
        {
          title: 'Make: potencia con una bonita interfaz',
          paragraphs: [
            '**Make** (antes *Integromat*) es la referencia para quienes quieren una **interfaz visual intuitiva** y una curva de aprendizaje rápida. Sus escenarios se muestran como burbujas conectadas, la lógica condicional es sencilla de configurar, y la biblioteca de integraciones nativas supera las **1 500 aplicaciones**. Para un perfil no técnico que quiere automatizar sus herramientas sin escribir una sola línea de código, Make suele ser el mejor punto de entrada.',
            'El principal freno de **Make** es su modelo de precios por operación. Cada *operación* (cada acción ejecutada en un escenario) se contabiliza. En volúmenes bajos, es insignificante. Pero en cuanto automatizas procesos que se ejecutan miles de veces al mes — envío de newsletters, sincronización de *CRM* — la factura puede superar rápidamente los **100-200 €/mes**.',
          ],
          bullets: [
            'Interfaz visual muy accesible para no desarrolladores',
            '+1 500 integraciones nativas disponibles',
            'Excelente soporte y documentación',
            'Planes desde 9 €/mes — ojo al contador de operaciones',
          ],
        },
        {
          title: 'n8n: libertad sin compromisos',
          paragraphs: [
            '**n8n** es *open-source* y auto-alojable — esa es su diferencia fundamental. Puedes instalarlo en tu propio servidor (un *VPS* a **5 €/mes** es suficiente) y no pagar ninguna operación, sea cual sea el volumen. Para flujos de trabajo intensivos o datos sensibles que no quieres almacenar en un tercero, esto es decisivo.',
            '**n8n** es más técnico que Make: la curva de aprendizaje lleva algunas horas más, y algunos casos de uso requieren escribir pequeños fragmentos de *JavaScript*. Pero a cambio, tienes acceso a una **flexibilidad total**: lógica compleja, transformaciones de datos avanzadas, integración con cualquier *API* aunque no esté listada. Para perfiles técnicos o agencias que automatizan para sus clientes, **n8n** es nuestra elección de referencia.',
          ],
          bullets: [
            'Open-source y auto-alojable: ningún coste variable a escala',
            'Perfecto para datos sensibles (RGPD, datos bancarios, médicos)',
            'Flexible: JavaScript nativo para transformaciones complejas',
            'Comunidad activa, +400 nodos disponibles',
            'Curva de aprendizaje algo más alta que Make',
          ],
        },
        {
          title: 'Nuestra recomendación según tu perfil',
          paragraphs: [
            'Si eres un directivo o un perfil comercial no técnico que quiere automatizar rápidamente algunos procesos simples (sincronización de *CRM*, notificaciones, generación de documentos), empieza con **Make**. La curva de aprendizaje rápida te permitirá obtener resultados concretos en pocos días.',
            'Si eres una agencia, un desarrollador, o una empresa con necesidades de alto volumen o datos sensibles, **n8n** es la inversión que compensa. El tiempo de aprendizaje inicial se recupera ampliamente con la libertad y el ahorro a largo plazo. En **Maison Siranno**, migramos todos nuestros flujos de trabajo de *Zapier* a **n8n** en 2024 y ahorramos un **87 %** en nuestro coste mensual de automatización.',
          ],
        },
      ],
      conclusion: '**n8n** y **Make** son dos excelentes herramientas — el mal paso sería no elegir ninguna por indecisión. Empieza por la que corresponda a tu nivel técnico actual, y no tengas miedo de migrar después si tus necesidades evolucionan. Si quieres acompañamiento para elegir y desplegar la **solución más adecuada** a tu situación, con mucho gusto lo hablamos.',
      keyTakeaways: [
        'Make: ideal para no técnicos, curva de aprendizaje rápida, pero coste variable a escala',
        'n8n: para perfiles técnicos, open-source, sin coste de uso, más flexible',
        'Ambos conectan fácilmente las herramientas habituales (Gmail, Notion, Airtable, Slack)',
        'Para datos sensibles, el auto-alojamiento de n8n es una ventaja importante',
      ],
    },
  },

  {
    id: 'workflow-mail-auto',
    title: 'Cómo automatizar tu bandeja de entrada sin perder el control',
    excerpt: 'Clasificación inteligente, respuestas automáticas contextuales, reenvíos según prioridad... Cómo recuperar el control de tu bandeja de entrada convirtiéndola en un sistema pilotado.',
    category: 'Automatización & n8n',
    date: 'Enero 2025',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&q=80&w=800',
    tags: ['Email', 'Automatización', 'n8n', 'Productividad'],
    available: true,
    body: {
      intro: 'La **bandeja de entrada** es el mayor destructor de tiempo en una PYME. Un directivo recibe de media **121 emails al día** y pasa el **28 %** de su tiempo de trabajo gestionándolos. Esta cifra oculta una realidad aún más cruel: la mayoría de estos emails no requieren ninguna decisión humana. Pueden clasificarse, responderse o reenviarse **automáticamente**. Aquí está cómo recuperar el control de tu bandeja de entrada gracias a la **automatización** — sin arriesgarte a perderte lo que realmente importa.',
      sections: [
        {
          title: 'Mapear los flujos entrantes antes de automatizar',
          paragraphs: [
            'Antes de crear el menor *flujo de trabajo*, dedica una semana a categorizar mentalmente cada email recibido según su naturaleza: solicitud de cliente, recordatorio de proveedor, notificación automática, newsletter, solicitud de presupuesto, factura... Descubrirás que el **40 al 60 %** de tus emails pertenecen a solo **3 a 5 categorías recurrentes**.',
            'Estas categorías recurrentes son tus **objetivos de automatización**. Para cada una, pregúntate: ¿la respuesta o la siguiente acción es siempre la misma? Si es así, es automatizable. Si la respuesta varía según el contexto pero sigue una lógica predecible, es parcialmente automatizable con una **IA** de clasificación.',
          ],
        },
        {
          title: 'Las 4 automatizaciones de email a desplegar en prioridad',
          paragraphs: [
            'El **acuse de recibo inteligente** es el primer *flujo de trabajo* que hay que construir. En cuanto llega un email a tu dirección de contacto, se envía automáticamente un acuse con el plazo de respuesta garantizado y un enlace para concertar una cita si procede. Esto reduce los recordatorios innecesarios un **60 %** y profesionaliza de inmediato la imagen de la empresa.',
            'La **clasificación y el etiquetado automáticos** vienen después: las newsletters se archivan sin pasar por la bandeja principal, las facturas de proveedores se reenvían a contabilidad, las notificaciones de herramientas (*GitHub*, *Jira*, *Slack*) se agrupan en una carpeta dedicada. **Gmail** y **n8n** hacen todo esto factible en **una hora** de configuración.',
          ],
          bullets: [
            'Acuse de recibo automático para toda solicitud entrante',
            'Clasificación inteligente: newsletters, facturas, notificaciones separadas automáticamente',
            'Alerta prioritaria: un SMS si un cliente VIP o un prospecto caliente escribe',
            'Resumen diario: un email de síntesis a las 8h con los emails importantes del día anterior',
          ],
        },
        {
          title: 'Integrar la IA para la clasificación contextual',
          paragraphs: [
            'Para ir más lejos, es posible integrar un **LLM** (*Claude*, *GPT-4*) en tu *flujo de trabajo* de clasificación para analizar el contenido del email y decidir la acción apropiada. Un email de prospectos cualificados puede desencadenar automáticamente la creación de una ficha en tu **CRM**. Una reclamación de cliente puede generar un ticket de *soporte*. Una solicitud de presupuesto puede prerrellenar un formulario en tu herramienta de facturación.',
            'Hemos desplegado este sistema para nuestra propia actividad: nuestra bandeja de entrada se procesa, clasifica y **preresponde automáticamente** cada mañana antes de que nos despertemos. Resultado: gestionamos los emails en **20 minutos al día** en lugar de 2 horas, y nunca hemos perdido un email importante.',
          ],
        },
      ],
      conclusion: '**Automatizar tu bandeja de entrada** no es complejo — es metódico. Empieza por las automatizaciones más simples (acuse de recibo, clasificación básica) para medir la ganancia inmediata, luego aumenta la sofisticación progresivamente. El objetivo no es suprimir el email sino asegurarse de que solo dedicas tu tiempo a los **emails que realmente requieren tu atención**.',
      keyTakeaways: [
        'El 60% de los emails entrantes puede procesarse o clasificarse automáticamente',
        'El acuse de recibo automático reduce los recordatorios innecesarios un 60%',
        'La clasificación inteligente (newsletters, facturas, notificaciones) libera inmediatamente 30 min al día',
        'La integración de IA permite crear fichas CRM, tickets y presupuestos automáticamente',
      ],
    },
  },

  {
    id: 'workflow-rdv-auto',
    title: 'Automatizar la gestión de citas: la guía completa con n8n',
    excerpt: 'Calendly, Cal.com, integración con Google Calendar, recordatorios por SMS, cualificación de leads... Cómo construir un sistema de citas 100% automatizado sin fricción para el cliente.',
    category: 'Automatización & n8n',
    date: 'Noviembre 2024',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    tags: ['Citas', 'Calendly', 'Automatización', 'CRM'],
    available: true,
    body: {
      intro: '¿Cuántos intercambios de email se necesitan para fijar una cita con un cliente? De media, **3 a 5 intercambios** — es decir, de 10 a 15 minutos perdidos, por ambas partes, para cada cita. Para una **PYME** que organiza 20 citas por semana, eso son **5 horas** de trabajo puramente administrativo. Un sistema automatizado reduce esta cifra a cero. Aquí está cómo construimos **pipelines de citas completos** con **n8n**, desde el primer contacto hasta el seguimiento post-reunión.',
      sections: [
        {
          title: 'Elegir la herramienta de gestión de citas: Calendly vs Cal.com',
          paragraphs: [
            'El punto de entrada de un sistema de citas automatizado es siempre una **herramienta de reserva en línea**. **Calendly** es la más conocida: intuitiva, fiable, con una versión gratuita generosa. Se integra de forma nativa con *Google Calendar*, *Outlook*, *Zoom* y decenas de otras herramientas. Para el **90 % de los casos de PYME**, Calendly es más que suficiente. **Cal.com** es su alternativa *open-source*, auto-alojable y totalmente personalizable — preferible si quieres eliminar las menciones a la herramienta en tu página de reservas o tener un control total sobre tus datos.',
            'La configuración de la herramienta de reserva es más estratégica de lo que parece. Las **preguntas de cualificación** integradas en el formulario de reserva permiten filtrar prospectos no cualificados antes incluso de la primera llamada. Para un consultor que solo trabaja con PYME de al menos 10 empleados, una pregunta sobre el tamaño de la empresa en el formulario elimina las solicitudes fuera del objetivo. Recomendamos limitar a **3-4 preguntas como máximo** — a partir de ahí, la tasa de cumplimentación cae.',
          ],
          bullets: [
            'Calendly Free: 1 tipo de evento, suficiente para empezar',
            'Calendly Teams (16 $/mes): round-robin, eventos colectivos, informes',
            'Cal.com: open-source, auto-alojable en VPS a 5 €/mes, compatible con RGPD',
            'Integrar 2-3 preguntas de cualificación en el formulario de reserva',
            'Configurar los márgenes de tiempo antes/después para no agotarse entre reuniones',
          ],
        },
        {
          title: 'El flujo de trabajo con n8n: de la reserva al CRM en tiempo real',
          paragraphs: [
            'Una vez instalada la herramienta de reserva, **n8n** toma el relevo para orquestar todas las acciones alrededor de la cita. El *flujo de trabajo* arranca con un *webhook* que se activa con cada nueva reserva en **Calendly**. En pocos segundos, **n8n** crea o actualiza la ficha de contacto en el **CRM** (*HubSpot*, *Pipedrive*, *Notion* — según tu stack), envía un email de confirmación personalizado con los datos de conexión a *Zoom* generados al vuelo, y notifica al comercial correspondiente en *Slack*.',
            'El **recordatorio automático a D-1 y H-1** es la funcionalidad que más reduce las ausencias. Observamos una reducción del **35 al 60 %** de las ausencias añadiendo simplemente un SMS de recordatorio 24h antes de la cita. **n8n** puede enviar este SMS a través de *Twilio* o *Brevo* por un coste de unos pocos céntimos por mensaje. El *flujo de trabajo* también gestiona las cancelaciones: si se cancela una cita en **Calendly**, n8n actualiza automáticamente el estado en el **CRM** y libera el horario en la agenda.',
          ],
          bullets: [
            'Webhook de Calendly → n8n activa todas las acciones en cascada',
            'Creación automática de la ficha de prospecto en el CRM con las respuestas del formulario',
            'Enlace de Zoom (o Meet) generado automáticamente e integrado en el email de confirmación',
            'SMS de recordatorio D-1 y H-1 vía Twilio: reducción de ausencias del 35 al 60%',
            'Gestión de cancelaciones: actualización del CRM + notificación automática al equipo',
          ],
        },
        {
          title: 'El seguimiento post-cita: automatizar sin deshumanizar',
          paragraphs: [
            'El *flujo de trabajo* no termina al final de la reunión. **15 minutos** después de la hora de finalización prevista, **n8n** puede enviar un email de agradecimiento automático con los recursos mencionados durante la llamada (empaquetados en una *plantilla*), reactivar la cumplimentación de un cuestionario de satisfacción, o crear una tarea de seguimiento en la herramienta de gestión de proyectos.',
            'El escollo que hay que evitar es la *sobre-automatización* del seguimiento post-cita. Un email de agradecimiento genérico enviado 15 minutos después de una llamada de descubrimiento puede dañar la relación si el prospecto tiene la sensación de estar hablando con un robot. Recomendamos **bloquear las automatizaciones post-cita** para las reuniones estratégicas (*cierre*, relación con clientes delicados) y activarlas únicamente para las llamadas de descubrimiento de alto volumen.',
          ],
          bullets: [
            'Email de seguimiento automático 15 min después del final de la cita con recursos personalizados',
            'Creación automática de una tarea de recordatorio a D+3 en el CRM',
            'Cuestionario NPS automático para las citas de formación o soporte',
            'Desactivar las automatizaciones post-cita para las reuniones estratégicas (cierre)',
          ],
        },
      ],
      conclusion: 'Un **sistema de citas automatizado** no es un lujo — es una necesidad para toda PYME que quiera profesionalizar su proceso comercial sin contratar un asistente. La puesta en marcha lleva un día, el impacto es inmediato, y el *flujo de trabajo* funciona solo sin mantenimiento. Si quieres que te acompañemos en la construcción de este sistema para tu actividad, pide una cita — automáticamente, claro está.',
      keyTakeaways: [
        'Calendly (gratuito) es suficiente para empezar — Cal.com si quieres el auto-alojamiento compatible con RGPD',
        'Las preguntas de cualificación en el formulario filtran los prospectos no pertinentes antes de la primera llamada',
        'El webhook Calendly → n8n → CRM es el núcleo del sistema — operativo en 2h',
        'Los recordatorios por SMS D-1 y H-1 reducen las ausencias del 35 al 60%',
        'Evitar la sobre-automatización post-cita en las reuniones estratégicas',
      ],
    },
  },

  {
    id: 'zapier-migration-n8n',
    title: 'Por qué abandonar Zapier por n8n: nuestra migración en 5 pasos',
    excerpt: 'Costes disparados, limitaciones de los planes, falta de flexibilidad... Retrospectiva de nuestra migración de 23 flujos de trabajo de Zapier a n8n self-hosted. Ahorro conseguido: -87% en el coste mensual.',
    category: 'Automatización & n8n',
    date: 'Próximamente',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800',
    tags: ['Zapier', 'n8n', 'Migración', 'Self-hosted'],
    available: false,
  },

  {
    id: 'ia-artisans',
    title: 'La IA al servicio de los artesanos: ¿mito o realidad?',
    excerpt: 'Automatizar presupuestos, recordatorios a clientes, contabilidad ligera... ¿Es realmente accesible para un artesano independiente? Experiencia sobre el terreno tras 12 meses de despliegues.',
    category: 'Inteligencia Artificial & RAG',
    date: 'Enero 2025',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    tags: ['IA', 'Artesanía', 'Automatización', 'PYME'],
    available: true,
    body: {
      intro: 'Cuando se habla de **inteligencia artificial** a los artesanos, la reacción habitual es una mezcla de desconfianza y curiosidad: "¿Eso no es para las grandes empresas?" Tras **12 meses** de acompañamiento a fontaneros, albañiles, electricistas y peluqueros en su *transformación digital*, nuestra respuesta es clara: no, no está reservada a las grandes empresas. Y sí, puede cambiar concretamente el día a día de un autónomo. Aquí está lo que hemos aprendido sobre el terreno.',
      sections: [
        {
          title: 'Los usos que funcionan de verdad para los artesanos',
          paragraphs: [
            'Tras haber probado una decena de aplicaciones de **IA** con artesanos, tres casos de uso destacan claramente por su impacto y su facilidad de adopción. El primero es la **generación asistida de presupuestos**: al describir oralmente (por mensaje de voz) los trabajos a realizar, la IA estructura un presupuesto completo en pocos segundos, que el artesano solo tiene que revisar y ajustar. Julien de **JD Rénovation** redujo su tiempo de creación de presupuestos de **45 minutos a 8 minutos**.',
            'El segundo uso es la **gestión de recordatorios y seguimiento de clientes**. Un sistema sencillo conectado al calendario envía automáticamente recordatorios de citas, solicitudes de valoración tras la intervención y recordatorios para presupuestos sin respuesta. Maxime Jambou, monitor de aquagym, constató una **reducción del 40 %** de sus cancelaciones de última hora desde la implantación de los recordatorios automáticos.',
          ],
          bullets: [
            'Generación de presupuestos por dictado de voz: de 45 min a menos de 10 min',
            'Recordatorios y seguimiento automáticos: -40% de cancelaciones, +30% de presupuestos transformados',
            'Redacción de respuestas a reseñas de Google (sugerencias generadas, validadas en 1 clic)',
            'Ayuda a la redacción de emails profesionales para perfiles poco cómodos con la escritura',
          ],
        },
        {
          title: 'Lo que no funciona (todavía)',
          paragraphs: [
            'Hay que ser honesto: algunos usos prometidos por los vendedores de **IA** no cumplen sus promesas en condiciones reales de artesanía. Los *chatbots* de cualificación de leads funcionan bien en sitios con un volumen de visitas suficiente (mínimo **200 visitantes/mes**), pero son inútiles para un artesano que obtiene el **90 % de sus leads** por boca a boca.',
            'Del mismo modo, las herramientas de **contabilidad con IA** requieren un rigor en la digitalización de los justificantes que muchos artesanos tienen dificultades para mantener. La IA no corrige los malos hábitos — los *amplifica*. El mejor despliegue de IA para un artesano siempre empieza por una organización básica: carpetas ordenadas, números de teléfono guardados, presupuestos digitalizados.',
          ],
        },
        {
          title: 'Por dónde empezar concretamente',
          paragraphs: [
            'Nuestra recomendación para un artesano que quiere empezar con la **IA** sin ahogarse: empieza con una herramienta que puedas probar **gratuitamente durante 30 días** en una sola tarea precisa. Si pasas tiempo redactando emails o presupuestos, prueba *ChatGPT* o **Claude** solo para esa tarea durante un mes. Si los recordatorios a clientes te consumen tiempo, explora **Calendly** o una herramienta de SMS automatizado.',
            'La pregunta no es "¿cómo adoptar la IA?" sino "**¿qué tarea concreta me molesta lo suficiente** como para dedicarle 2 horas a automatizarla?". Ese es siempre el mejor punto de partida.',
          ],
        },
      ],
      conclusion: 'La **IA para artesanos** no es ni una revolución inmediata ni una promesa vacía. Es un conjunto de herramientas concretas que pueden liberar **de 30 minutos a 2 horas al día** en tareas administrativas — siempre que se parta del problema correcto y se adopten las herramientas adecuadas en el orden correcto. Si quieres identificar tus mejores oportunidades, ofrecemos una **auditoría gratuita de 30 minutos** para artesanos.',
      keyTakeaways: [
        'Los presupuestos asistidos por IA reducen el tiempo de redacción entre un 60 y un 80%',
        'Los recordatorios automáticos reducen las cancelaciones entre un 30 y un 40%',
        'La IA amplifica la organización existente — no corrige el desorden',
        'Empezar por una sola tarea precisa vale más que desplegar 5 herramientas a la vez',
      ],
    },
  },

  {
    id: 'rag-entreprise',
    title: 'RAG: transformar tu documentación en un potente asistente de IA',
    excerpt: 'El Retrieval-Augmented Generation permite a tus equipos interrogar en lenguaje natural toda la base de conocimiento de la empresa. Cómo funciona, para quién, y cuánto cuesta.',
    category: 'Inteligencia Artificial & RAG',
    date: 'Febrero 2025',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800',
    tags: ['RAG', 'IA', 'LLM', 'Documentación'],
    available: true,
    body: {
      intro: 'Imagina poder hacerle una pregunta a tu documentación interna como si hablaras con un experto omnisciente de tu empresa. "¿Cuál es nuestra política de reembolso para los clientes profesionales?" — y obtener una respuesta precisa con la fuente exacta, en **3 segundos**. Eso es lo que permite el **RAG** (*Retrieval-Augmented Generation*). No es ciencia ficción, ni está reservado a las *GAFAM*: es desplegable en pocas semanas para una **PYME** que tenga documentación que valorizar.',
      sections: [
        {
          title: 'Cómo funciona el RAG (en lenguaje humano)',
          paragraphs: [
            'Un sistema **RAG** funciona en dos tiempos. Primero, indexa tus documentos: contratos, FAQ, procedimientos, fichas de producto, emails tipo... Cada documento se divide en fragmentos, cada fragmento se transforma en un **vector numérico** (una representación matemática del sentido del texto) y se almacena en una *base vectorial*.',
            'Cuando un usuario hace una pregunta, el sistema identifica los fragmentos de tus documentos más cercanos *semánticamente* a esa pregunta, los inyecta en el contexto de un **LLM** (*Claude*, *GPT-4*) que genera una respuesta coherente y referenciada. Resultado: la **IA** responde con tus datos, en tu contexto, **sin alucinar** información inventada.',
          ],
          bullets: [
            'Indexación de documentos en vectores (una vez, o actualización automática)',
            'Búsqueda semántica: encuentra los pasajes relevantes aunque no haya palabras clave exactas',
            'Generación de respuesta contextualizada por un LLM con cita de las fuentes',
            'Accesible vía chatbot interno, API, Slack, Teams o interfaz web dedicada',
          ],
        },
        {
          title: '¿Para quién es pertinente el RAG?',
          paragraphs: [
            'El **RAG** es particularmente eficaz para empresas que tienen mucha documentación interna pero poco tiempo para consultarla. Una consultora con **500 páginas de metodologías**, una empresa industrial con voluminosos manuales técnicos, un servicio de atención al cliente con una base de conocimiento de **2 000 artículos** — todos se benefician de inmediato de un sistema RAG.',
            '¿El umbral de pertinencia? En general, si tu equipo pasa más de **30 minutos al día** buscando información en tus documentos internos, el **ROI** de un sistema RAG es positivo desde los primeros meses. Para **Siranno Hub**, construimos un *RAG* sobre nuestra propia base de conocimiento — cada agente de IA tiene acceso al historial completo de nuestros proyectos y procedimientos, lo que reduce drásticamente las preguntas repetitivas.',
          ],
        },
        {
          title: 'El coste real de un despliegue RAG',
          paragraphs: [
            'Un sistema **RAG** mínimo (*chatbot* sobre tus documentos, 10 a 50 usuarios, actualización manual) puede desplegarse por **2 000 a 5 000 €** de desarrollo y **100 a 300 €/mes** en costes de infraestructura y API. Para las PYME, generalmente se amortiza en **2 a 4 meses** si el caso de uso está bien elegido.',
            'Las tecnologías base: **Supabase** con la extensión *pgvector* para la base vectorial (gratis hasta 500 MB), la **API de Claude** o *OpenAI* para la generación (coste variable según uso), y **n8n** para orquestar las actualizaciones automáticas del índice. Un stack que dominamos de cabo a rabo.',
          ],
        },
      ],
      conclusion: 'El **RAG** es una de las aplicaciones de la **IA** más concretas y más rápidas de rentabilizar para una empresa con documentación existente. La barrera de entrada técnica ha bajado considerablemente en 2024-2025, y los **costes de infraestructura** se han vuelto accesibles para las PYME. Si tienes documentación dormida y equipos que pierden tiempo buscando información, hablemos.',
      keyTakeaways: [
        'El RAG conecta un LLM con TUS datos — sin alucinaciones inventadas',
        'Pertinente en cuanto tus equipos pasan 30 min+/día buscando en documentos internos',
        'Desplegable por 2 000 a 5 000 € y ~200 €/mes para una PYME',
        'Las respuestas citan sus fuentes — la trazabilidad está integrada',
      ],
    },
  },

  {
    id: 'chatbot-leads-pme',
    title: 'Chatbot de IA para PYME: retrospectiva de 6 meses',
    excerpt: 'Hemos desplegado chatbots de cualificación de leads para varias PYME locales. Resultados, sorpresas, límites y buenas prácticas: todo lo que aprendimos sobre el terreno.',
    category: 'Inteligencia Artificial & RAG',
    date: 'Marzo 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
    tags: ['Chatbot', 'IA', 'Leads', 'Conversión'],
    available: true,
    body: {
      intro: 'Hace **12 meses**, empezamos el despliegue de **chatbots de IA** en los sitios de varios clientes PYME — una consultora de RR. HH., dos artesanos de la construcción y una tienda de *e-commerce*. Seis meses después, esto es lo que realmente hemos aprendido: lo que funcionó mejor de lo esperado, lo que decepcionó, y las reglas que aplicamos ahora sistemáticamente antes de cada despliegue.',
      sections: [
        {
          title: 'Los resultados que superaron nuestras expectativas',
          paragraphs: [
            'El **chatbot de cualificación de leads** en el sitio de un artesano de reformas aumentó un **34 %** la tasa de transformación de visitas en solicitudes de presupuesto. No porque sea "inteligente" — sino porque está **disponible 24h/24** y hace las preguntas correctas en el momento adecuado. Antes, un visitante del sitio a las 22h se iba sin contactar. Ahora, recibe una respuesta inmediata a sus preguntas básicas y puede rellenar un formulario de cualificación guiado.',
            'Segundo resultado inesperado: la **calidad de los leads entrantes** mejoró. Al hacer preguntas de cualificación (zona geográfica, tipo de trabajos, presupuesto aproximado), el *chatbot* filtra las solicitudes fuera del ámbito antes de que el cliente tenga que intervenir. El artesano ya solo recibe **solicitudes de presupuesto cualificadas** — y pasa menos tiempo al teléfono con proyectos que no puede o no quiere aceptar.',
          ],
          bullets: [
            '+34% de tasa de transformación visita → solicitud de presupuesto',
            'Disponibilidad 24h/24: el 23% de las conversaciones tienen lugar después de las 20h o el fin de semana',
            'Mejor cualificación: -40% de solicitudes fuera del ámbito',
            'Tiempo de respuesta inicial de pocos segundos vs 4-8h con email',
          ],
        },
        {
          title: 'Lo que funcionó menos bien',
          paragraphs: [
            'El principal problema encontrado: los *chatbots* que hacen demasiado. En un sitio con poco tráfico (**menos de 100 visitantes/mes**), un *chatbot* proactivo que aparece después de 5 segundos frustra a los visitantes que solo venían a consultar. El *pop-up* intempestivo aumentó la **tasa de rebote** en dos sitios antes de que reconfigurásemos el activador.',
            'Otra decepción: los chatbots demasiado conversacionales. Cuando dimos demasiada libertad al **LLM**, empezó a responder a preguntas fuera del tema (precios de la competencia, consejos jurídicos...) con una seguridad que no estaba justificada. La regla que aplicamos ahora: el **chatbot debe tener un ámbito claro** y declinar elegantemente lo que está fuera de él.',
          ],
        },
        {
          title: 'Las 5 reglas que aplicamos ahora',
          paragraphs: [
            'Tras estos **6 meses de experiencia**, hemos formalizado cinco reglas que aplicamos sistemáticamente antes de cada despliegue de *chatbot*. La primera: nada de chatbot proactivo si el tráfico es inferior a **200 visitantes/mes**. La segunda: el chatbot debe tener un **guion preciso** para los 5 a 10 casos de uso más frecuentes, y declinar con educación el resto.',
          ],
          bullets: [
            'Activación pasiva (botón flotante) si el tráfico es < 200 visitantes/mes',
            'Guion preciso para las 5-10 preguntas más frecuentes',
            'Redirección a un humano en cuanto una pregunta supera el ámbito',
            'Sin chatbot en móvil sin una prueba específica en varios dispositivos',
            'Medir la tasa de resolución cada semana y ajustar las respuestas',
          ],
        },
      ],
      conclusion: 'Un **chatbot de IA** bien diseñado es una palanca potente — pero debe diseñarse con precisión, no desplegarse a la ligera. El éxito no depende de la sofisticación de la **IA** sino de la claridad del ámbito, de la **calidad del guion** y de la adecuación entre el *chatbot* y la madurez digital del sitio. Si quieres evaluar si un chatbot es pertinente para tu situación, una **consulta de 30 minutos** suele ser suficiente para responder a la pregunta.',
      keyTakeaways: [
        'Un chatbot bien configurado aumenta las conversiones entre un 20 y un 40% en un sitio activo',
        'La disponibilidad 24h/24 suele ser más valiosa que la sofisticación de la IA',
        'Un ámbito claro vale más que un chatbot omnisciente mal calibrado',
        'Por debajo de 200 visitantes/mes, el chatbot proactivo hace más mal que bien',
      ],
    },
  },

  {
    id: 'ia-generative-pme-2025',
    title: 'IA generativa en PYME: 7 casos de uso concretos en 2025',
    excerpt: 'GPT-4, Claude, Gemini... Más allá del ruido mediático, ¿qué aplicaciones concretas generan ROI para las PYME? Análisis de los 7 casos de uso más rentables con cifras reales.',
    category: 'Inteligencia Artificial & RAG',
    date: 'Diciembre 2024',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    tags: ['IA Generativa', 'PYME', 'ROI', 'Claude'],
    available: true,
    body: {
      intro: 'En 2024, el **67 %** de los directivos de PYME encuestados declaran haber "oído hablar" de la **IA generativa**. Pero solo el **18 %** la usa en sus procesos de forma regular. La brecha entre la conciencia y la adopción esconde una realidad simple: la mayoría de las PYME no saben por dónde empezar. Aquí están **7 casos de uso concretos** — no hipótesis, sino despliegues reales — con los ahorros o ganancias medidos en cada uno.',
      sections: [
        {
          title: 'Casos 1 a 3: Automatizar la producción escrita y documental',
          paragraphs: [
            'La **redacción de presupuestos y propuestas comerciales** es lo primero que citan sistemáticamente los directivos que acompañamos. Un consultor que redacta 8 propuestas por semana dedica de media **45 minutos** a cada una. Con un **asistente de IA** entrenado sobre sus propuestas tipo y conectado a su *CRM*, ese tiempo baja a **12 minutos** — es decir, **4,5 horas recuperadas por semana**. El mismo principio se aplica a las respuestas a licitaciones, los informes de intervención y las actas de reunión (transcripción automática vía *Whisper* + resumen estructurado por **Claude**).',
            'La **generación de contenido de marketing** (fichas de producto, publicaciones de *LinkedIn*, newsletters) es el caso de uso más visible, pero no necesariamente el más rentable. El reto no es producir contenido masivamente — es producir contenido de **calidad constante** sin depender de un redactor externo. Un sistema bien configurado con **Claude** o *GPT-4*, alimentado por un brief estructurado, produce primeros borradores que el **80 % de nuestros clientes** publica con menos del 20 % de modificaciones.',
          ],
          bullets: [
            'Presupuestos y propuestas: -62% de tiempo de redacción (45 min → 12 min por documento)',
            'Actas automáticas: Whisper transcribe, Claude estructura y resume en 2 minutos',
            'Fichas de producto de e-commerce: 50 fichas generadas y revisadas en un día vs una semana',
            'Respuestas a emails de clientes: borradores contextuales en 30 segundos desde el CRM',
          ],
        },
        {
          title: 'Casos 4 a 6: Análisis de datos y soporte al cliente',
          paragraphs: [
            'El **análisis de datos no estructurados** es un caso de uso subestimado. Las PYME acumulan años de emails, PDFs de contratos, opiniones de clientes, informes de auditoría — todos datos que duermen en carpetas porque nadie tiene tiempo de analizarlos. Un pipeline **RAG** (*Retrieval-Augmented Generation*) permite interrogar este corpus en lenguaje natural: "¿qué clientes mencionaron un problema de plazos en los últimos 6 meses?" responde en segundos a una pregunta que llevaría horas manualmente.',
            'El **soporte al cliente de primer nivel** es el caso de uso más medible en términos de **ROI**. Un *chatbot* RAG entrenado sobre la documentación del producto, las FAQ y los tickets anteriores responde correctamente al **60-75 %** de las solicitudes sin intervención humana. Para una tienda de *e-commerce* con **300 tickets/mes**, eso representa **180 a 225 tickets procesados automáticamente** — es decir, de 15 a 20 horas de trabajo de soporte recuperadas al mes. El ticket humano se concentra entonces en los casos complejos que realmente merecen atención.',
          ],
          bullets: [
            'Chatbot RAG sobre documentación interna: del 60 al 75% de las preguntas respondidas sin humano',
            'Análisis de sentimiento sobre reseñas de clientes: agrupación automática de temas negativos',
            'Extracción de información de PDFs contractuales: fechas, importes, cláusulas clave',
            'Vigilancia competitiva: resumen automático de las novedades del sector cada mañana',
          ],
        },
        {
          title: 'Caso 7: El asistente de IA interno conectado a tus herramientas',
          paragraphs: [
            'El caso de uso más transformador — y el más complejo de implementar — es el **asistente de IA interno** que tiene acceso a tus datos en tiempo real. Conectado a tu **CRM**, tu herramienta de contabilidad, tu calendario y tu base documental, puede responder a preguntas como "¿cuál es la facturación del cliente García desde enero?" o "¿qué proyectos llevan retraso esta semana?". Ya no es un *chatbot* generalista — es un *colaborador virtual* que conoce tu empresa.',
            'Hemos desplegado este tipo de sistema para **4 clientes PYME** en 2024. El stack utilizado es invariablemente el mismo: **n8n** para la orquestación, **Claude** (vía API Anthropic) para el razonamiento, **Supabase** o *Pinecone* para la base vectorial, y una interfaz sencilla en *React*. El coste de funcionamiento es de **50 a 200 €/mes** según el volumen de solicitudes. El ahorro en tiempo de búsqueda de información y en reuniones de sincronización es sistemáticamente superior a **10 veces ese coste** a partir del segundo mes.',
          ],
          bullets: [
            'Asistente conectado al CRM: consultas en lenguaje natural sobre tus datos de clientes',
            'Stack: n8n + Claude API + Supabase pgvector — desplegable en 2 a 4 semanas',
            'Coste de funcionamiento: 50 a 200 €/mes según volumen',
            'ROI típico: 10× a partir del 2.º mes (tiempo de búsqueda de información + sincronizaciones evitadas)',
            'Confidencialidad: datos tratados vía API Anthropic Enterprise (sin retención para entrenamiento)',
          ],
        },
      ],
      conclusion: 'La **IA generativa para PYME** no es un proyecto de 2 años — es una serie de decisiones concretas que puedes empezar a tomar esta semana. Identifica tu tarea más laboriosa y pregúntate si un **modelo de lenguaje** podría automatizar el **50 %** de ella. La respuesta probablemente es sí. Si quieres que analicemos juntos tus **oportunidades de IA más rentables**, contáctanos para una auditoría.',
      keyTakeaways: [
        'El 67% de los directivos de PYME conocen la IA generativa, solo el 18% la usa de verdad',
        'La redacción de propuestas comerciales ofrece el ROI más inmediato (-62% de tiempo)',
        'Los chatbots RAG gestionan del 60 al 75% de los tickets de soporte sin intervención humana',
        'Un asistente de IA conectado al CRM genera un ROI de 10× a partir del 2.º mes',
        'El stack n8n + Claude API + Supabase es nuestra referencia para las PYME',
      ],
    },
  },

  {
    id: 'agents-ia-orchestration',
    title: 'Agentes de IA y orquestación: comprender n8n, Claude y los LLM',
    excerpt: 'Los agentes de IA ya no son ciencia ficción. Comprender cómo funcionan, cómo orquestarlos con n8n y Claude, y cuándo aportan un valor real.',
    category: 'Inteligencia Artificial & RAG',
    date: 'Próximamente',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    tags: ['Agentes IA', 'Orquestación', 'n8n', 'LLM'],
    available: false,
  },

  {
    id: 'newsletter-automatisee',
    title: 'Newsletter automatizada: de 0 a 1.000 suscriptores en 90 días',
    excerpt: 'La newsletter es el activo de marketing más rentable en 2025. Sistema completamente automatizado: captación, segmentación, envío y análisis — cómo lo construimos.',
    category: 'Contenido & Marketing IA',
    date: 'Enero 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    tags: ['Newsletter', 'Email Marketing', 'Automatización', 'Growth'],
    available: true,
    body: {
      intro: 'En 2025, mientras el alcance orgánico de las redes sociales se desploma (**2 a 5 %** en *LinkedIn*, menos del **1 %** en *Instagram*), la **newsletter** sigue siendo el único canal de comunicación donde eres propietario de tu audiencia. Un suscriptor de newsletter vale estadísticamente **5 a 10 veces más** que un suscriptor de *social media* en términos de conversión. Aquí está cómo hemos construido un sistema de **newsletter completamente automatizado** para varios clientes — y cómo replicar este enfoque para tu actividad.',
      sections: [
        {
          title: 'Las bases: elegir la herramienta adecuada y la oferta de entrada correcta',
          paragraphs: [
            'La elección de la herramienta de newsletter depende de tu etapa. Para empezar, **Brevo** (antes *Sendinblue*) es nuestra recomendación para las **PYME**: interfaz en varios idiomas, conforme con el *RGPD*, plan gratuito hasta **300 emails/día**. Para necesidades más avanzadas (segmentación fina, automatizaciones complejas), **MailerLite** o *ActiveCampaign* ofrecen una mejor relación funcionalidades/precio que *Mailchimp*.',
            'La pregunta crucial antes de lanzar: ¿cuál es tu **oferta de entrada**? ¿Por qué debería alguien darte su email hoy? El "suscríbete a nuestra newsletter" ya no funciona. Necesitas un **lead magnet concreto**: guía PDF descargable, *checklist* accionable, mini-formación gratuita, análisis gratuito... La oferta de entrada es responsable del **70 %** de la tasa de conversión de tu formulario de suscripción.',
          ],
          bullets: [
            'Brevo: RGPD nativo, gratis hasta 300 emails/día',
            'MailerLite: mejor relación funcionalidades/precio para las PYME',
            'Tu lead magnet debe resolver un problema preciso en menos de 15 minutos',
            'Formulario simple: nombre + email solo (cada campo adicional cuesta ~15% de conversiones)',
          ],
        },
        {
          title: 'La secuencia de automatización: convertir un suscriptor en cliente',
          paragraphs: [
            'Una vez suscrito el usuario, la **secuencia de bienvenida automatizada** marca la diferencia. Los **7 primeros días** son críticos: si no envías nada, el suscriptor olvida quién eres y tu próxima newsletter acabará en spam. Construye una secuencia de **4 emails en 7 días**: email de bienvenida inmediato con el *lead magnet* prometido, email D+2 con tu mejor contenido existente, email D+4 con un caso de cliente o testimonio, email D+7 con una invitación a la acción (consulta, oferta).',
            'Para generar el contenido de estos emails con **IA**, usamos **Claude**: le proporcionamos el contexto (sector, audiencia, tono de voz) y las ideas principales del mensaje, y produce un primer borrador en pocos segundos. Un buen humano relee, ajusta, personaliza. El tiempo de creación pasa de **2 horas a 25 minutos** por email.',
          ],
          bullets: [
            'Email D+0: bienvenida + entrega del lead magnet prometido',
            'Email D+2: contenido de valor (artículo, consejo, insight del sector)',
            'Email D+4: prueba social (caso de cliente, testimonio, resultados)',
            'Email D+7: CTA suave (consulta gratuita, oferta de entrada)',
          ],
        },
        {
          title: 'Las palancas de crecimiento en los primeros 90 días',
          paragraphs: [
            'Para pasar de **0 a 1.000 suscriptores en 90 días**, hay que combinar varias fuentes de captación. La más rápida: importar tu red de *LinkedIn* existente (con su consentimiento, mediante un formulario o una publicación dedicada). La más *escalable*: crear **contenido SEO** que redirija a un formulario de suscripción (un artículo posicionado en Google puede generar suscripciones durante años). La más eficaz a corto plazo: una colaboración o intercambio de visibilidad con otro creador de contenido de tu ámbito.',
            'Para nuestros propios clientes, la combinación que mejor ha funcionado: un *lead magnet* potente, una **publicación de LinkedIn** anunciando su lanzamiento (dirigida a las conexiones existentes), y dos **artículos SEO** creados en paralelo. En 90 días, los clientes que siguieron este plan alcanzaron entre **400 y 1.200 suscriptores**.',
          ],
        },
      ],
      conclusion: 'La **newsletter automatizada** es una inversión de 2 a 3 semanas de puesta en marcha para un *activo de marketing* que trabaja de forma continua durante años. La automatización no reemplaza la calidad del contenido — garantiza la **regularidad** y libera tu tiempo para producir lo que importa. Si quieres acompañamiento para lanzar o relanzar tu newsletter, creamos el sistema completo de la A a la Z.',
      keyTakeaways: [
        'Un suscriptor de newsletter vale entre 5 y 10 veces más que un suscriptor de social media en conversión',
        'El lead magnet es responsable del 70% de la tasa de conversión del formulario',
        'La secuencia de bienvenida (7 días, 4 emails) es crítica para el engagement',
        'Brevo es el mejor punto de entrada para las PYME (RGPD nativo)',
        'Combinación ganadora: lead magnet + publicación LinkedIn + artículos SEO',
      ],
    },
  },
  {
    id: 'agents-ia-orchestration',
    title: 'Agentes IA y orquestación: comprender n8n, Claude y los LLM',
    excerpt: 'Los agentes IA ya no son ciencia ficción. Comprender cómo funcionan, cómo orquestarlos con n8n y Claude, y cuándo aportan un valor real.',
    category: 'Inteligencia Artificial & RAG',
    date: 'Próximamente',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    tags: ['Agentes IA', 'Orquestación', 'n8n', 'LLM'],
    available: false,
  },

  {
    id: 'newsletter-automatisee',
    title: 'Newsletter automatizada: de 0 a 1.000 suscriptores en 90 días',
    excerpt: 'La newsletter es el activo de marketing más rentable en 2025. Sistema completamente automatizado: captación, segmentación, envío y análisis — cómo lo hemos construido.',
    category: 'Contenido & Marketing IA',
    date: 'Enero 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    tags: ['Newsletter', 'Email Marketing', 'Automatización', 'Growth'],
    available: true,
    body: {
      intro: 'En 2025, cuando el alcance orgánico de las redes sociales se desploma (**2 a 5 %** en *LinkedIn*, menos del **1 %** en *Instagram*), la **newsletter** sigue siendo el único canal de comunicación donde eres propietario de tu audiencia. Un suscriptor de newsletter vale estadísticamente **5 a 10 veces más** que un suscriptor de *social media* en términos de conversión. Aquí explicamos cómo hemos construido un sistema de **newsletter completamente automatizado** para varios clientes — y cómo replicar este enfoque para tu actividad.',
      sections: [
        {
          title: 'Los fundamentos: elegir la herramienta correcta y la oferta de entrada adecuada',
          paragraphs: [
            'La elección de la herramienta de newsletter depende de tu etapa. Para empezar, **Brevo** (ex-*Sendinblue*) es nuestra recomendación para las **PYMES francesas**: interfaz en francés, conforme con el *RGPD*, plan gratuito hasta **300 emails/día**. Para necesidades más avanzadas (segmentación fina, automatizaciones complejas), **MailerLite** o *ActiveCampaign* ofrecen una mejor relación funcionalidades/precio que *Mailchimp*.',
            'La pregunta crucial antes de lanzar: ¿cuál es tu **oferta de entrada**? ¿Por qué alguien debería darte su email hoy? El "suscríbete a nuestra newsletter" ya no funciona. Necesitas un **lead magnet concreto**: guía PDF descargable, *checklist* accionable, mini-formación gratuita, análisis gratuito... La oferta de entrada es responsable del **70 %** de la tasa de conversión de tu formulario de inscripción.',
          ],
          bullets: [
            'Brevo: RGPD nativo, interfaz en español/francés, gratuito hasta 300 correos/día',
            'MailerLite: mejor relación funcionalidades/precio para PYMES',
            'Tu lead magnet debe resolver un problema concreto en menos de 15 minutos',
            'Formulario simple: nombre + email solamente (cada campo adicional cuesta ~15% de conversiones)',
          ],
        },
        {
          title: 'La secuencia de automatización: convertir un suscriptor en cliente',
          paragraphs: [
            'Una vez el suscriptor inscrito, la **secuencia de bienvenida automatizada** marca la diferencia. Los **primeros 7 días** son críticos: si no envías nada, el suscriptor olvida quién eres y tu próxima newsletter llegará al spam. Construye una secuencia de **4 emails en 7 días**: email de bienvenida inmediato con el *lead magnet* prometido, email D+2 con tu mejor contenido existente, email D+4 con un caso de cliente o testimonio, email D+7 con una invitación a la acción (consulta, oferta).',
            'Para generar el contenido de estos emails con **IA**, usamos **Claude**: le proporcionamos el contexto (sector, audiencia, tono de voz) y los puntos principales del mensaje, y produce un primer borrador en pocos segundos. Un buen humano revisa, ajusta y personaliza. El tiempo de creación pasa de **2 horas a 25 minutos** por email.',
          ],
          bullets: [
            'Email D+0: bienvenida + entrega del lead magnet prometido',
            'Email D+2: contenido de valor (artículo, consejo, insight del sector)',
            'Email D+4: prueba social (caso de cliente, testimonio, resultados)',
            'Email D+7: CTA suave (consulta gratuita, oferta de entrada)',
          ],
        },
        {
          title: 'Las palancas de crecimiento en los primeros 90 días',
          paragraphs: [
            'Para pasar de **0 a 1.000 suscriptores en 90 días**, hay que combinar varias fuentes de captación. La más rápida: importar tu red *LinkedIn* existente (con su consentimiento, mediante un formulario o una publicación dedicada). La más *escalable*: crear **contenido SEO** que redirija a un formulario de inscripción (un artículo posicionado en Google puede generar inscripciones durante años). La más eficaz a corto plazo: una colaboración o intercambio de visibilidad con otro creador de contenido en tu sector.',
            'Para nuestros propios clientes, la combinación que mejor ha funcionado: un *lead magnet* sólido, una **publicación en LinkedIn** anunciando su lanzamiento (dirigida a las conexiones existentes), y dos **artículos SEO** creados en paralelo. En 90 días, los clientes que siguieron este plan alcanzaron entre **400 y 1.200 suscriptores**.',
          ],
        },
      ],
      conclusion: 'La **newsletter automatizada** es una inversión de 2 a 3 semanas de configuración para un *activo de marketing* que trabaja de forma continua durante años. La automatización no reemplaza la calidad del contenido — garantiza la **regularidad** y libera tu tiempo para producir lo que importa. Si quieres acompañamiento para lanzar o relanzar tu newsletter, creamos el sistema completo de A a Z.',
      keyTakeaways: [
        'Un suscriptor de newsletter vale 5 a 10 veces más que un suscriptor de redes sociales en conversión',
        'El lead magnet es responsable del 70% de la tasa de conversión del formulario',
        'La secuencia de bienvenida (7 días, 4 emails) es crítica para el engagement',
        'Brevo es el mejor punto de entrada para las PYMES (RGPD nativo)',
        'Combinación ganadora: lead magnet + publicación LinkedIn + artículos SEO',
      ],
    },
  },

  {
    id: 'contenu-ia-linkedin',
    title: 'Crear 30 publicaciones en LinkedIn al mes con IA (en 2 horas)',
    excerpt: 'Estrategia editorial, generación asistida, planificación y publicación. El sistema completo para mantener una presencia sólida en LinkedIn sin dedicarle toda la vida.',
    category: 'Contenido & Marketing IA',
    date: 'Febrero 2025',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    tags: ['LinkedIn', 'IA', 'Contenido', 'Personal Branding'],
    available: true,
    body: {
      intro: '**LinkedIn** es la red profesional más eficaz para generar **leads B2B** — por delante de todas las demás redes combinadas para PYMES e independientes. Sin embargo, la mayoría de los directivos no publican regularmente, no por falta de ideas, sino por falta de tiempo y sistema. Aquí presentamos el sistema que hemos implantado para **Yoann Delaloy** (y que replicamos para nuestros clientes): **30 publicaciones al mes** en menos de **2 horas** de trabajo real.',
      sections: [
        {
          title: 'La estrategia: los 3 pilares de contenido que convierten',
          paragraphs: [
            'Antes de hablar de **IA** o herramientas, la **estrategia de contenido** es el fundamento. Sin una dirección clara, la IA producirá contenido genérico que no engancha. Define **3 pilares de contenido** que correspondan a tu expertise y a lo que tu público objetivo quiere consumir. Para **Maison Siranno**, nuestros 3 pilares son: "IA aplicada a lo concreto" (demos, casos de uso reales), "automatización para el independiente" (consejos prácticos, *workflows*), y "emprendimiento digital" (reflexiones, trayectoria, lecciones aprendidas).',
            'Cada pilar debe responder a una pregunta sencilla: ¿por qué alguien que no me conoce debería seguirme en este tema? Si no puedes responderlo claramente, el pilar no es lo suficientemente preciso. Afínalo hasta poder decir: "**Soy la mejor fuente** sobre [tema concreto] para [audiencia concreta]".',
          ],
          bullets: [
            'Pilar 1: tu expertise principal (casos concretos, resultados medidos)',
            'Pilar 2: tu punto de vista (opiniones, tendencias comentadas)',
            'Pilar 3: tu trayectoria (lecciones aprendidas, entre bastidores, humanidad)',
            'Proporción recomendada: 40% expertise / 40% opinión / 20% trayectoria',
          ],
        },
        {
          title: 'El sistema de producción: una sesión de 2 horas al mes',
          paragraphs: [
            'La clave del sistema es la **producción en batch**. Reserva **2 horas** una vez al mes (o 30 minutos a la semana si lo prefieres) para generar todo tu contenido de una vez. Fuera de ese bloque, no piensas en *LinkedIn* — publicas e interactúas, pero no creas.',
            'Durante tu sesión de producción, empieza por listar **30 ideas en bruto** en 20 minutos (una por publicación). No filtres en esta etapa — cantidad antes que calidad. Luego toma las 10 mejores ideas y pide a **Claude** que desarrolle cada una en una publicación de *LinkedIn* de 150-250 palabras según tu tono de voz. Revisa, ajusta, personaliza. Planifica con una herramienta como **Buffer** o la planificación nativa de *LinkedIn*. En 2 horas, **todo el mes está gestionado**.',
          ],
          bullets: [
            '20 min: lluvia de 30 ideas en bruto sin filtro',
            '60 min: desarrollo de las 10-15 mejores con Claude',
            '20 min: revisión, personalización, añadir anécdotas reales',
            '20 min: planificación y programación en Buffer o LinkedIn nativo',
          ],
        },
        {
          title: 'Los formatos que mejor funcionan en 2025',
          paragraphs: [
            'El algoritmo de **LinkedIn** en 2025 favorece tres tipos de contenido: las publicaciones con *storytelling* personal (los "esto es lo que aprendí"), los contenidos accionables con listas numeradas o con viñetas, y las publicaciones que plantean una pregunta e invitan al debate. Los *carruseles* (documentos PDF) siguen funcionando muy bien pero requieren más tiempo de producción.',
            'Lo que menos ha funcionado para nuestros clientes en 2024: las publicaciones puramente promocionales ("acabamos de lanzar...") y los artículos demasiado largos sin un buen gancho. En **LinkedIn**, el gancho (las **2 primeras líneas** antes del "ver más") es responsable del **80 %** de la decisión de leer o no.',
          ],
        },
      ],
      conclusion: '**30 publicaciones en LinkedIn al mes** con IA no significa 30 publicaciones genéricas sin alma. La **IA** acelera la redacción, pero es tu perspectiva, tus experiencias reales y tu **tono de voz** los que dan valor al contenido. El sistema funciona porque elimina la fricción de la *página en blanco* — no porque elimine al humano de la ecuación.',
      keyTakeaways: [
        '3 pilares de contenido bien definidos > 30 temas dispersos',
        'La producción en batch (2h/mes) es más eficaz que 10 min al día',
        'El gancho de LinkedIn (2 primeras líneas) determina el 80% de las lecturas',
        'Claude redacta un primer borrador en 30 segundos — tú lo personalizas en 3 minutos',
        'Planificar con antelación libera la mente para la interacción auténtica',
      ],
    },
  },

  {
    id: 'personal-branding-dirigeant',
    title: 'Personal branding del directivo: construir tu autoridad en 6 meses',
    excerpt: 'Los directivos que publican regularmente generan 3 veces más leads que su empresa. Método, herramientas IA y ejemplos concretos para construir tu marca personal sin agotarte.',
    category: 'Contenido & Marketing IA',
    date: 'Marzo 2025',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    tags: ['Personal Branding', 'LinkedIn', 'Autoridad', 'Directivo'],
    available: true,
    body: {
      intro: 'Según un estudio de *LinkedIn* de 2024, los contenidos publicados por directivos de empresas generan de media **3 veces más engagement** que los mismos contenidos publicados por la página de empresa. Y los prospectos que siguen a un directivo antes de convertirse en clientes tienen una **tasa de conversión 2 veces superior**. El **personal branding** no es una moda reservada a los influencers — es una palanca comercial directa, medible y duradera. Aquí explicamos cómo abordarlo metódicamente en **6 meses**.',
      sections: [
        {
          title: 'Las 4 semanas de fundación: posicionamiento e identidad',
          paragraphs: [
            'Antes de publicar un solo post, hay que definir por qué quieres ser conocido. No lo que haces — lo que aportas de diferente. "Soy consultor en transformación digital" es un título. "**Soy el consultor que dice no a los proyectos** que no sirven a los equipos operacionales" es un posicionamiento. La diferencia entre los dos determina si alguien te sigue o te ignora.',
            'Para **Yoann Delaloy**, el posicionamiento adoptado es: el experto que muestra concretamente cómo la **IA** y la **automatización** transforman el día a día de los independientes y las PYMES — con ejemplos reales, cifras verdaderas, y sin *marketing vacío*. Este **posicionamiento preciso** atrae exactamente al público correcto y repele los malos *fits* — lo que también es valioso.',
          ],
          bullets: [
            'Define tu ángulo diferenciador en una frase (no tu profesión — tu perspectiva única)',
            'Identifica tu audiencia objetivo precisa (no "los emprendedores" — "los artesanos de la construcción que quieren digitalizarse")',
            'Audita tu perfil de LinkedIn para alinearlo con ese posicionamiento',
            'Crea una foto profesional y un banner que reflejen tu identidad',
          ],
        },
        {
          title: 'Meses 2 y 3: construcción de la audiencia y primeros contenidos',
          paragraphs: [
            'Los dos primeros meses sirven para probar los formatos y **encontrar tu voz**. Publica **3 veces por semana como mínimo**, mide las impresiones y el engagement, y nota qué resuena mejor con tu audiencia. No te apegues demasiado pronto a un formato — lo que funciona para un consultor IT no funcionará necesariamente para un experto en RRHH.',
            'Para acelerar el crecimiento de la audiencia, dos palancas complementarias: el **engagement saliente** (comentar 10-15 publicaciones de personas influyentes en tu sector cada día) y las **colaboraciones** (entrevistas cruzadas, co-publicaciones, intercambios mutuos con creadores de contenido complementarios).',
          ],
        },
        {
          title: 'Meses 4-6: monetización y seguimiento',
          paragraphs: [
            'A partir del **4.º mes**, si hay regularidad, los primeros resultados de negocio empiezan a aparecer. Solicitudes de entrevistas, propuestas de colaboración, **leads entrantes** que mencionan haber "visto tus publicaciones"... Es el momento de introducir un **CTA claro** en tu contenido — no en cada publicación, pero sí regularmente.',
            'Implementa un **dashboard sencillo** para el seguimiento: suscriptores por semana, impresiones por publicación, tasa de engagement media, y sobre todo **leads entrantes atribuibles a LinkedIn**. Estos datos te permiten doblar lo que funciona y abandonar lo que no convierte.',
          ],
        },
      ],
      conclusion: 'El **personal branding** es una maratón, no un sprint. En **6 meses** de trabajo regular y metódico, es realista construir una audiencia de **1.000 a 3.000 suscriptores cualificados** y generar los primeros leads atribuibles. El **ROI** no es inmediato — es *exponencial*: cada publicación que haces hoy sigue trabajando para ti durante meses.',
      keyTakeaways: [
        'El posicionamiento diferenciador prevalece sobre la regularidad sola',
        'El engagement saliente (comentarios) acelera el crecimiento x2 a x3',
        'Los leads entrantes vía personal brand convierten 2 veces mejor',
        'Mide los resultados de negocio desde el 4.º mes, no solo las vanity metrics',
      ],
    },
  },

  {
    id: 'tunnel-vente-automation',
    title: 'Construir un embudo de ventas automatizado con IA',
    excerpt: 'Lead magnet, secuencia de email, nurturing, upsell... Cómo construir un embudo de ventas completamente automatizado y personalizado por IA que trabaja para ti 24h/24.',
    category: 'Contenido & Marketing IA',
    date: 'Octubre 2024',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800',
    tags: ['Embudo de Ventas', 'Email', 'Conversión', 'Automatización'],
    available: true,
    body: {
      intro: 'Un **embudo de ventas automatizado** no es un *emailing* masivo enviado a toda tu lista. Es un sistema que identifica en qué punto está cada prospecto en su reflexión, le envía el mensaje correcto en el momento adecuado, y lo acompaña naturalmente hacia la **decisión de compra** — sin intervención humana en cada etapa. En 2025, las herramientas disponibles permiten construir este sistema con un nivel de **personalización e inteligencia** que era exclusivo de las grandes marcas hace 3 años. Aquí presentamos el método completo.',
      sections: [
        {
          title: 'La arquitectura en 4 fases: atraer, capturar, nutrir, convertir',
          paragraphs: [
            'Todo embudo de ventas de alto rendimiento sigue la misma lógica en **4 fases**. La fase de *atracción* genera tráfico cualificado hacia tu contenido (**SEO**, *LinkedIn*, publicidad segmentada). La fase de *captura* transforma ese tráfico en leads identificados mediante un **lead magnet** — contenido de alto valor (guía, *template*, *checklist*, mini-formación) intercambiado por una dirección de email. La fase de *nurturing* mantiene la relación mediante una secuencia de emails que educan y cualifican al prospecto. La fase de **conversión** propone la oferta comercial en el momento óptimo.',
            'El error más común es saltarse directamente de la captura a la conversión. Un prospecto que acaba de descargar tu guía no está listo para comprar — te está descubriendo. Una **secuencia de nurturing** bien construida tiene como objetivo darle suficiente valor de forma gratuita para que asocie tu expertise a su problema. Estadísticamente, los prospectos nutridos durante **7 a 10 touchpoints** convierten a una tasa **3 a 4 veces superior** a los abordados directamente.',
          ],
          bullets: [
            'Lead magnet: 1 problema concreto, 1 solución concreta, entrega inmediata',
            'Secuencia de bienvenida: 5 emails en 10 días para establecer el expertise',
            'Segmentación comportamental: adaptar los mensajes según las páginas visitadas o los enlaces clicados',
            'Disparador de conversión: proponer la oferta tras una señal de interés fuerte (apertura de 3+ emails, visita a la página de precios)',
          ],
        },
        {
          title: 'Personalizar con IA: del mailing masivo a la conversación individual',
          paragraphs: [
            'El cambio mayor aportado por la **IA** al embudo de ventas es la **personalización a escala**. Con una herramienta como **Brevo** o *ActiveCampaign* combinada con una API de **LLM**, cada email puede adaptarse al sector de actividad del prospecto, al tamaño de su empresa, a las páginas que ha consultado en tu sitio y a las respuestas que ha dado en tu formulario de captación. Dos prospectos que descargan la misma guía reciben secuencias diferentes según su perfil.',
            'Hemos probado este enfoque en una campaña de **1.200 prospectos** para un cliente de consultoría en 2024. La personalización por sector (3 variantes: industria, retail, servicios) aumentó la **tasa de apertura del 22 % al 41 %**, y la tasa de clics del **3,8 % al 11,2 %**. La conversión final (solicitud de cita) pasó del 1,4 % al **4,7 %** — es decir, **3,3 veces** más prospectos cualificados para el mismo volumen de tráfico.',
          ],
          bullets: [
            'Personalización por sector: tasa de apertura +87% vs email genérico',
            'Dynamic content: insertar el nombre del prospecto Y su sector en el asunto y el cuerpo',
            'Scoring comportamental: asignar puntos según las acciones (apertura, clic, visita página precios)',
            'Disparador IA: enviar el email de conversión cuando el score supera un umbral definido',
            'Test A/B automático en los asuntos de email: dejar que la herramienta elija el ganador',
          ],
        },
        {
          title: 'Las herramientas y la stack para un embudo automatizado en 2025',
          paragraphs: [
            'Para una **PYME**, nuestra stack de referencia es: **Brevo** (ex-*Sendinblue*) para el *emailing* y la automatización (tarifas en euros, *RGPD* nativo, interfaz en francés, plan gratuito hasta **300 emails/día**), *Typeform* o **Tally** para los formularios de captación, y **n8n** para la orquestación de lógicas complejas (*scoring*, sincronización *CRM*, disparadores condicionales). El conjunto puede estar operativo en **2 a 3 días** de configuración.',
            'El punto crítico es la configuración del **scoring** y los disparadores. Un embudo que envía el email de venta demasiado pronto genera cancelaciones de suscripción. Demasiado tarde, pierde prospectos listos para comprar. Nuestro parámetro de referencia: email de conversión disparado tras **3 aperturas consecutivas** O 1 visita a la página de precios/servicios Y un plazo mínimo de **5 días** desde el *lead magnet*. Este parámetro solo puede **duplicar la tasa de conversión** respecto a una simple secuencia cronológica.',
          ],
          bullets: [
            'Brevo: emailing RGPD, automatización visual, plan gratuito generoso, 100% francés',
            'Tally (gratuito): formularios de captación elegantes con lógica condicional',
            'n8n: orquestación de disparadores complejos entre CRM, email y analytics',
            'Configuración óptima del scoring: 3 aperturas O visita página precios + plazo mínimo 5 días',
            'Vigilar las tasas de cancelación de suscripción — señal de alerta si > 0,5% por email',
          ],
        },
      ],
      conclusion: 'Un **embudo de ventas automatizado** bien construido funciona sin mantenimiento y genera **leads cualificados 24h/24**. Pero "bien construido" es el punto clave — un embudo mal segmentado o sin personalización puede hacer más daño que bien a tu reputación como remitente. Tómate el tiempo de la configuración inicial, mide rigurosamente las tasas en cada etapa, e *itera*. Si quieres que construyamos este sistema para ti, hablemos.',
      keyTakeaways: [
        'Los prospectos nutridos en 7-10 touchpoints convierten 3 a 4 veces mejor que los abordados directamente',
        'La personalización por sector multiplica la tasa de conversión por 3,3 según nuestras pruebas',
        'Stack recomendada para PYMES: Brevo + Tally + n8n — todo en RGPD',
        'El scoring comportamental (y no cronológico) es la palanca de conversión más poderosa',
        'Una tasa de cancelación > 0,5% por email señala un problema de segmentación o timing',
      ],
    },
  },

  {
    id: 'strategie-contenu-ia-2025',
    title: 'Estrategia de contenido IA-first: producir 10 veces más sin sacrificar la calidad',
    excerpt: 'Cómo construir un sistema de producción de contenido asistido por IA que multiplica tu output sin diluir tu voz ni tu expertise.',
    category: 'Contenido & Marketing IA',
    date: 'Próximamente',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800',
    tags: ['Contenido', 'IA', 'Estrategia', 'Productividad'],
    available: false,
  },

  {
    id: 'audit-digital-pme',
    title: 'Cómo auditar tu presencia digital en 1 día',
    excerpt: 'Sitio web, posicionamiento, redes sociales, reseñas de Google, herramientas internas... La checklist completa para evaluar tu madurez digital e identificar las prioridades de inversión.',
    category: 'Consultoría & Formación',
    date: 'Diciembre 2024',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    tags: ['Auditoría', 'Estrategia', 'PYME', 'Digital'],
    available: true,
    body: {
      intro: 'Muchos directivos de PYMES saben que deberían "hacer algo" por su **presencia digital** pero no saben por dónde empezar ni dónde concentrar su energía. Una **auditoría digital estructurada** permite responder a estas preguntas en un día — sin consultor externo, sin presupuesto, solo con las herramientas y el método correctos. Aquí explicamos cómo realizamos una *auditoría digital* rápida para nuestros clientes y cómo puedes hacerlo tú mismo.',
      sections: [
        {
          title: 'Bloque 1 (mañana): sitio web y posicionamiento',
          paragraphs: [
            'Empieza por tu sitio web. Cuatro herramientas gratuitas son suficientes para una primera auditoría completa: **Google PageSpeed Insights** (rendimiento y *Core Web Vitals*), **Google Search Console** (si ya está configurada, si no, instálala hoy), *SEMrush* versión gratuita (palabras clave en las que estás posicionado) y la herramienta de prueba móvil de Google.',
            'Para cada herramienta, anota los **3 problemas más críticos** — no la lista exhaustiva. El objetivo de una auditoría no es catalogar todos los problemas sino identificar las **5 a 10 acciones que tendrán mayor impacto**. Un sitio que carga en 8 segundos debe resolver primero ese problema antes de ocuparse de su *etiqueta alt* faltante.',
          ],
          bullets: [
            'PageSpeed Insights: puntuación < 50 en móvil = urgencia',
            'Search Console: busca las palabras clave con posición 11-20 (quick wins SEO)',
            'Prueba móvil: testea en al menos 3 dispositivos diferentes',
            'Verifica que tu certificado SSL esté activo (candado verde en la URL)',
          ],
        },
        {
          title: 'Bloque 2 (tarde): presencia local y redes sociales',
          paragraphs: [
            '¿Está tu ficha de **Google Business Profile** completa, actualizada y animada regularmente? Verifica los horarios, las fotos (al menos **10 fotos**, con una añadida en los últimos 3 meses), las reseñas (responde a todas las que no tienen respuesta) y la categoría principal. Una **ficha de Google bien optimizada** puede generar más contactos que un sitio web para un negocio local.',
            'Para las redes sociales, hazte una pregunta sencilla: ¿la última publicación en tus páginas profesionales data de **menos de 30 días**? Si tu última publicación remonta a más de 3 meses, un prospecto que llegue a tu página se preguntará si sigues en activo. Mejor eliminar un **perfil inactivo** que dejarlo visible con contenido anticuado.',
          ],
          bullets: [
            'Google Business Profile: fotos recientes, horarios exactos, respuestas a reseñas',
            'LinkedIn empresa: ¿presente? ¿activo? ¿coherente con el resto de la comunicación?',
            'Coherencia: ¿tu logo, colores y tono son los mismos en todas partes?',
            'Email profesional: ¿tienes un email @tunombre.es o sigues usando gmail/hotmail?',
          ],
        },
        {
          title: 'Bloque 3: herramientas internas y organización',
          paragraphs: [
            'Una auditoría digital no está completa sin una mirada a tus herramientas internas: ¿tienes un **CRM** (aunque sea básico) para gestionar tus contactos de clientes? ¿Están tus archivos organizados y accesibles para tu equipo? ¿Tienes una solución de **copia de seguridad** para tus datos críticos?',
            'Para finalizar la auditoría, construye una tabla simple con 3 columnas: Problema identificado / **Impacto estimado** (1-3) / **Esfuerzo estimado** (1-3). Ordena por *ratio impacto/esfuerzo* decreciente — esas son tus **acciones prioritarias para los próximos 90 días**.',
          ],
        },
      ],
      conclusion: 'Una **auditoría digital** solo vale si desemboca en un **plan de acción concreto**. Al final de tu día, deberías tener una lista de **5 a 10 acciones priorizadas** con un responsable y una fecha para cada una. Si el resultado de esta auditoría te desborda o si quieres una mirada externa para priorizar, es exactamente el tipo de acompañamiento que proponemos.',
      keyTakeaways: [
        'Google PageSpeed, Search Console y una prueba móvil son suficientes para una auditoría básica del sitio',
        'Una ficha de Google Business Profile bien mantenida puede generar más contactos que un sitio web',
        'Un perfil de red social inactivo hace más daño que ningún perfil',
        'El resultado de la auditoría es un plan de acción priorizado, no una lista exhaustiva de problemas',
      ],
    },
  },

  {
    id: 'roi-transformation-digitale',
    title: 'ROI de la transformación digital: cómo calcularlo de verdad',
    excerpt: 'Tiempo ahorrado, leads generados, errores evitados, satisfacción del cliente... Los indicadores reales para medir el retorno de inversión de un proyecto digital, más allá de la facturación.',
    category: 'Consultoría & Formación',
    date: 'Noviembre 2024',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['ROI', 'Transformación Digital', 'KPI', 'Estrategia'],
    available: true,
    body: {
      intro: '¿Cuánto rinde, concretamente? Es la pregunta que todo directivo tiene derecho a plantear antes de invertir en un proyecto digital — y una pregunta a la que muchas agencias y consultores no saben responder con precisión. El **ROI de la transformación digital** es calculable, medible y frecuentemente **subestimado** por las empresas que no tienen los indicadores correctos. Aquí presentamos nuestro método para calcularlo honestamente.',
      sections: [
        {
          title: 'Los 4 tipos de valor de un proyecto digital',
          paragraphs: [
            'El valor de un proyecto digital no se mide solo en facturación adicional. Se descompone en **cuatro categorías**: el *tiempo ahorrado* (valor = horas × coste por hora de la persona implicada), los *ingresos generados* (nuevos clientes, pedidos, leads convertidos directamente atribuibles), los **costes evitados** (errores humanos, pérdidas de datos, penalizaciones, costes de herramientas reemplazadas) y el *valor cualitativo* (satisfacción del cliente, reputación, atractivo para la contratación).',
            'La mayoría de los cálculos de **ROI digital** solo contabilizan la primera categoría. Al integrar las cuatro, el retorno de inversión real es a menudo **2 a 3 veces superior** a la estimación inicial. **JD Renovación**, por ejemplo, ganó **2 horas al día** en gestión administrativa (tiempo ahorrado) y generó **+60 % de solicitudes de presupuesto** en 2 meses (ingresos generados) — con un ROI positivo desde el 4.º mes.',
          ],
          bullets: [
            'Tiempo ahorrado = horas/semana × semanas/año × coste horario real',
            'Ingresos generados = nuevos clientes × ticket medio × tasa de conversión atribuible',
            'Costes evitados = herramientas reemplazadas + errores evitados + penalizaciones potenciales',
            'Valor cualitativo: difícil de cuantificar pero documentar mediante testimonios',
          ],
        },
        {
          title: 'El método concreto: antes/después medible',
          paragraphs: [
            'Antes de iniciar cualquier proyecto digital, define tus **indicadores de base actuales**. ¿Cuántos leads entrantes por semana? ¿Cuánto tiempo dedicado a la tarea objetivo? ¿Cuál es la tasa de error? ¿Cuál es el NPS? Estas *cifras de partida* son tu referencia — sin ellas, no podrás **probar el ROI** posteriormente.',
            'Tras el despliegue, mide los mismos indicadores a **1 mes, 3 meses y 6 meses**. Los proyectos digitales a menudo tienen una *curva en J*: una ligera degradación al inicio (periodo de adaptación) seguida de una mejora progresiva que supera el nivel inicial. No concluyas demasiado pronto.',
          ],
        },
        {
          title: 'Los proyectos con mejor ROI en PYMES',
          paragraphs: [
            'Sin sorpresa, los proyectos de **automatización** tienen a menudo el **mejor ROI a corto plazo** porque impactan directamente el tiempo de los equipos. Le siguen los proyectos de generación de leads digitales (**sitio + SEO + newsletter**) que tienen un ROI diferido pero duradero. Las herramientas de colaboración interna (*Google Workspace*, *Notion*, **CRM**) tienen un ROI más difícil de medir pero real en términos de fluidez operacional.',
          ],
          bullets: [
            'Automatización de tareas repetitivas: ROI positivo en 1-3 meses',
            'Sitio + SEO local: ROI positivo en 3-6 meses, duradero en 3-5 años',
            'Newsletter: ROI positivo en 6-12 meses, exponencial después',
            'CRM: ROI difícil de aislar pero indispensable más allá de 50 clientes activos',
          ],
        },
      ],
      conclusion: 'El **ROI de la transformación digital** no es una promesa abstracta — es un cálculo que se puede hacer con rigor antes, durante y después de un proyecto. Los directivos que piden **indicadores precisos desde el principio** toman mejores decisiones de inversión y obtienen mejores resultados. Por eso siempre definimos los ***KPIs* objetivo** antes de iniciar una misión.',
      keyTakeaways: [
        'El ROI digital se calcula en 4 dimensiones: tiempo, ingresos, costes evitados, calidad',
        'Sin medidas de partida, no podrás probar el ROI después',
        'Los proyectos de automatización tienen el mejor ROI a corto plazo para las PYMES',
        'La curva en J es normal: espera 3 meses antes de juzgar un proyecto digital',
      ],
    },
  },

  {
    id: 'formation-equipe-ia',
    title: 'Formar a los equipos en IA: método y experiencia',
    excerpt: 'La IA no reemplaza a tus colaboradores, los potencia — siempre que sepan usarla. Nuestro programa de formación IA adaptado a PYMES: objetivos, duración, resultados.',
    category: 'Consultoría & Formación',
    date: 'Marzo 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    tags: ['Formación', 'IA', 'Equipos', 'Change Management'],
    available: true,
    body: {
      intro: 'La encuesta *France Num* 2024 revela que el **67 %** de los empleados de PYMES han oído hablar de la **IA** en el trabajo, pero solo el **12 %** la usa regularmente en sus tareas cotidianas. Esta brecha no se debe a una falta de interés — se debe a una falta de acompañamiento. **Formar a los equipos en IA** no es solo una cuestión de herramienta: es un cambio de postura, de método de trabajo y de relación con el tiempo. Esto es lo que hemos aprendido al realizar **formaciones en IA** para PYMES de 5 a 80 empleados.',
      sections: [
        {
          title: 'Por qué fracasan las formaciones en IA clásicas',
          paragraphs: [
            'Las **formaciones en IA** que fracasan tienen siempre el mismo problema: son demasiado genéricas. Explicar cómo funciona un **LLM** a una asistente de dirección o a un comercial de campo es ineficaz. Lo que quieren saber es: ¿cómo va a cambiar esta herramienta **MI jornada laboral**, en **MIS tareas específicas**?',
            'El segundo error frecuente es formar sin contexto de aplicación inmediata. Una formación de **2 días en sala**, sin seguimiento, produce colaboradores que han "oído hablar de la IA" pero no la integran en su práctica. La formación debe ser **corta, práctica** e inmediatamente aplicable en casos concretos extraídos del día a día de la empresa.',
          ],
        },
        {
          title: 'Nuestro programa en 3 fases',
          paragraphs: [
            '**Fase 1** (medio día): Desmitificar y tranquilizar. Antes de nada, hay que abordar los miedos — el miedo a perder el empleo, el miedo a parecer incompetente, el miedo a "usar mal" la **IA**. Esta fase utiliza ejemplos concretos del sector de la empresa para mostrar lo que la IA hace bien, lo que hace mal, y lo que los humanos hacen mejor.',
            '**Fase 2** (1 día): Aplicaciones prácticas sobre los casos de la empresa. Cada participante trae **3 tareas repetitivas** de su día a día. Construimos juntos, en directo, los *prompts* y *workflows* para automatizarlas o acelerarlas. Es la fase que genera **más engagement** — la gente ve su propio trabajo transformado en tiempo real.',
          ],
          bullets: [
            'Fase 1: Desmitificar la IA, abordar los miedos, contexto del sector',
            'Fase 2: Taller práctico sobre los casos reales de la empresa',
            'Fase 3: Seguimiento a 30 días + buzón de preguntas async',
          ],
        },
        {
          title: 'Los resultados observados tras 3 meses',
          paragraphs: [
            'En las **4 formaciones en IA** que hemos realizado en 2024-2025, los resultados a 3 meses son coherentes: entre el **60 y el 80 %** de los participantes usan la IA de forma regular en su trabajo, con una **ganancia de tiempo media de 45 minutos a 1h30 al día**. Dos equipos crearon espontáneamente un "*wiki IA interno*" para compartir sus mejores prácticas.',
            'El factor de éxito más importante: la implicación de **al menos un manager de proximidad** en la formación. Cuando el manager usa él mismo las herramientas y fomenta su uso, la **tasa de adopción es del 75 %**. Cuando la formación es únicamente *bottom-up* (los equipos sin los managers), cae al **35 %**.',
          ],
        },
      ],
      conclusion: '**Formar a los equipos en IA** es una inversión con **ROI medible**: entre **45 minutos y 1h30** de productividad ganada por colaborador y por día, es decir, **150 a 300 horas anuales** por empleado. En un equipo de 10 personas, es el equivalente a **1 a 2 ETC** recuperados sin contratar. Si quieres hablar de un programa adaptado a tu sector y al tamaño de tu equipo, contáctanos.',
      keyTakeaways: [
        'Las formaciones en IA genéricas fracasan — hay que partir de los casos concretos de la empresa',
        'La implicación de los managers divide por 2 el riesgo de fracaso de la adopción',
        'Resultados a 3 meses: 60-80% de adopción, 45-90 min/día ahorrados',
        'Corta + práctica + seguimiento vale 10 veces más que larga + teórica + sin seguimiento',
      ],
    },
  },

  {
    id: 'cdao-pme',
    title: 'Implementar un CDAO en una PYME sin departamento TI: guía práctica',
    excerpt: 'Chief Data & AI Officer sin departamento IT: es posible y a menudo necesario. Cómo estructurar la gobernanza de datos e IA en una PYME de 10 a 100 empleados sin contratar un CDO a 100k€/año.',
    category: 'Consultoría & Formación',
    date: 'Enero 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800',
    tags: ['CDO', 'CDAO', 'Consultoría', 'Estrategia', 'PYME'],
    available: true,
    body: {
      intro: 'El rol de **Chief Data & AI Officer** (*CDAO*) se está volviendo indispensable en todas las organizaciones — incluidas las PYMES. Pero un *CDAO* a tiempo completo cuesta entre **80.000 y 130.000 €** al año con cargas. Para una PYME de 15 a 80 empleados, eso es a menudo inaccesible. Sin embargo, no nombrar a nadie responsable de los **datos y la IA** es garantizar que ni unos ni otra serán tratados seriamente nunca. Aquí explicamos cómo estructurar esta función de forma pragmática, sin contratar.',
      sections: [
        {
          title: 'Comprender lo que hace realmente un CDAO en una PYME',
          paragraphs: [
            'En una gran empresa, el *CDAO* supervisa equipos de *data scientists* y presupuestos de millones de euros. En una PYME, el rol es fundamentalmente diferente: se trata menos de técnica que de **gobernanza y priorización**. El **CDAO PYME** responde a cuatro preguntas fundamentales: ¿Qué datos recopilamos y dónde viven? ¿Cómo los explotamos para tomar mejores decisiones? ¿Qué **herramientas IA** podemos desplegar con nuestro presupuesto y recursos? ¿Cómo seguimos cumpliendo con el *RGPD* en todo eso?',
            'La buena noticia es que estas cuatro preguntas no requieren un experto técnico a tiempo completo. Requieren a alguien curioso, organizado, con comprensión de los retos de negocio — y capacidad para apoyarse en proveedores o consultores para las partes técnicas. En el **70 % de las PYMES** que acompañamos, este rol puede ser asumido por un perfil ya en plantilla: el director de marketing, el *DAF*, o un *office manager* ambicioso — con **20 a 30%** de su tiempo dedicado.',
          ],
          bullets: [
            'El CDAO PYME es un rol de gobernanza, no de ejecución técnica',
            '4 misiones: cartografía de datos, explotación decisional, despliegue IA, conformidad RGPD',
            'Perfiles internos capaces de asumir el rol a tiempo compartido: DAF, director de marketing, office manager senior',
            'Tiempo requerido: 20 a 30% de un ETC, no un puesto a tiempo completo',
          ],
        },
        {
          title: 'Los 3 proyectos prioritarios a lanzar en los primeros 90 días',
          paragraphs: [
            'El primer proyecto es el **inventario de datos**. La mayoría de las PYMES no saben exactamente qué datos poseen, dónde viven y quién tiene acceso a ellos. Este inventario — realizable en **2 a 3 días** de trabajo — revela sistemáticamente duplicados (3 versiones del fichero de clientes en 3 herramientas diferentes), **datos dormidos de gran valor** (historial de tickets de soporte, catálogo de presupuestos pasados), y riesgos *RGPD* no identificados (datos personales en *Google Sheets* compartidos).',
            'El segundo proyecto es la implantación de un **dashboard de seguimiento unificado**. Con demasiada frecuencia, los datos operacionales (facturación, pipeline comercial, satisfacción del cliente, rendimiento del sitio) viven en silos: el *DAF* mira su *ERP*, el comercial su **CRM**, el marketing sus *analytics*. Consolidar estos datos en un dashboard compartido (**Google Looker Studio** es gratuito y suficiente para empezar) transforma la reunión mensual de dirección en **decisiones basadas en hechos** — no en intuiciones.',
          ],
          bullets: [
            'Inventario de datos (2-3 días): localización, acceso, calidad, riesgos RGPD',
            'Dashboard unificado en Looker Studio: facturación + pipeline + NPS + tráfico web en una vista',
            'Documentación de los procesos de datos: quién introduce qué, dónde y con qué frecuencia',
            'Política IA: carta interna sobre los usos autorizados y los datos que no se meten en ChatGPT',
            'Nombramiento de un "Data Owner" por dominio de negocio (comercial, RRHH, finanzas)',
          ],
        },
        {
          title: 'El modelo CDAO as a Service: expertise externa a tiempo compartido',
          paragraphs: [
            'Si ningún perfil interno puede asumir este rol, la alternativa es el **CDAO as a Service** — un consultor senior dedicado a tu empresa 2 a 4 días al mes. Este modelo existe desde hace varios años en la consultoría pero se ha profesionalizado con el auge de la **IA**. Por **1.500 a 3.500 €/mes** según el nivel de implicación, accedes a una expertise que sería imposible de justificar como contratación.',
            'El ***CDAO* as a Service** es especialmente relevante para las PYMES en fase de *estructuración digital* (entre **15 y 60 empleados**). Ayuda a elegir las herramientas correctas, evitar las trampas de los contratos *SaaS* restrictivos, formar a los equipos, y pilotar los **proyectos IA** garantizando un **ROI medible**. En **Maison Siranno**, proponemos esta misión en forma de *retainer mensual* — una forma de tener un interlocutor estratégico dedicado sin los costes de una contratación.',
          ],
          bullets: [
            'CDAO as a Service: 2 a 4 días/mes, 1.500 a 3.500€/mes según alcance',
            'Vs contratación CDO full-time: 80.000 a 130.000€/año con cargas',
            'Misiones tipo: auditoría de datos, selección de herramientas, pilotaje de proyectos IA, formación de equipos',
            'Ideal para PYMES 15-60 empleados en estructuración digital',
          ],
        },
      ],
      conclusion: 'No tener un ***CDAO*** no es una opción neutra — es decidir que nadie será responsable de tus **datos** y de tu **trayectoria IA**. La buena noticia: en una PYME, este rol es accesible, ya sea valorando un perfil interno, ya sea mediante un modelo *as a Service*. Si quieres estructurar esta función en tu empresa, podemos acompañarte en la auditoría y la implantación.',
      keyTakeaways: [
        'El CDAO PYME es un rol de gobernanza (20-30% de un ETC), no un puesto técnico a tiempo completo',
        'El inventario de datos en 2-3 días revela sistemáticamente duplicados y riesgos RGPD ocultos',
        'Un dashboard unificado en Looker Studio transforma las reuniones de dirección en decisiones data-driven',
        'El CDAO as a Service (1.500 a 3.500€/mes) ofrece la expertise de un CDO a 120k€/año',
        'Nombrar un Data Owner por dominio de negocio es la primera decisión de gobernanza a tomar',
      ],
    },
  },

  {
    id: 'budget-digital-pme',
    title: 'Cuánto invertir en digital en 2025: guía de lectura para PYMES',
    excerpt: 'Sitio web, SEO, redes sociales, automatización, IA... ¿Qué presupuesto asignar a cada partida? Una guía pragmática por tamaño de empresa y sector de actividad.',
    category: 'Consultoría & Formación',
    date: 'Próximamente',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    tags: ['Presupuesto', 'Inversión', 'PYME', 'Estrategia'],
    available: false,
  },

  {
    id: 'monitoring-site-alertes',
    title: 'Monitorización del sitio web: las alertas que te evitan una catástrofe',
    excerpt: 'Tu sitio puede caer, ser hackeado o perder el 50 % de su tráfico sin que lo sepas durante días. Las herramientas y alertas esenciales para no llevarte nunca una sorpresa.',
    category: 'Seguimiento Continuo',
    date: 'Enero 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    tags: ['Monitorización', 'Alertas', 'Seguridad', 'Mantenimiento'],
    available: true,
    body: {
      intro: 'En enero de 2024, un artesano cliente perdió **3 semanas de tráfico de Google** sin saberlo: su proveedor de hosting había migrado sus servidores, rompiendo su **certificado SSL**. Google empezó a penalizar su sitio desde el primer día. Resultado: 3 semanas de leads perdidos, **6 semanas de recuperación SEO**. Esta historia habría podido evitarse con una alerta *SSL* básica configurada en **5 minutos**. Aquí están las alertas esenciales que todo sitio profesional debe tener — gratuitamente o casi.',
      sections: [
        {
          title: 'Las 5 alertas mínimas para todo sitio profesional',
          paragraphs: [
            'La primera alerta a configurar es la **monitorización de disponibilidad** (*uptime*). Herramientas como **UptimeRobot** (gratuito hasta **50 monitores**) comprueban tu sitio cada **5 minutos** y te envían un SMS o email en cuanto se vuelve inaccesible. Para un sitio de *e-commerce* o de captación de contactos, cada minuto de *downtime* cuesta leads. La configuración lleva **3 minutos**.',
            'La segunda alerta crítica es la **expiración del certificado SSL**. Tu certificado *SSL* expira cada **90 días** (*Let\'s Encrypt*) o 1 año (certificados de pago). Si te olvidas de renovarlo, los navegadores bloquean el acceso a tu sitio con un aterrador mensaje de alerta roja — y **Google** lo penaliza inmediatamente. Configura una alerta **30 días antes de la expiración** mediante tu registrar o una herramienta como *SSL Labs*.',
          ],
          bullets: [
            'Uptime monitoring (UptimeRobot, gratuito): alerta por SMS si el sitio cae',
            'Expiración SSL: alerta 30 días antes de la fecha de expiración',
            'Google Search Console: alerta por email sobre errores de rastreo',
            'Google Analytics: alerta si el tráfico cae más de un 30% respecto a la semana anterior',
            'Alerta de actualización de WordPress/CMS: nunca dejes vulnerabilidades de seguridad sin parchear',
          ],
        },
        {
          title: 'La vigilancia del rendimiento y del SEO',
          paragraphs: [
            'Las alertas de disponibilidad no cubren las **degradaciones silenciosas**: tu sitio es accesible pero carga en 8 segundos, o tu posición en **Google** para tus palabras clave principales ha caído 5 posiciones. Estas degradaciones pueden costar **20 a 40 %** de tu tráfico orgánico sin que ninguna alarma suene.',
            '**Google Search Console** envía alertas por email automáticas sobre problemas de indexación, errores *404* masivos y **penalizaciones manuales**. Es completamente gratuito e indispensable. Para el rendimiento, **PageSpeed Insights** puede usarse manualmente cada mes, o automatizarse mediante la *API* para informes semanales.',
          ],
        },
        {
          title: 'La seguridad: las alertas que el 90 % de las PYMES ignoran',
          paragraphs: [
            'Los sitios **WordPress** no mantenidos son hackeados de media cada **72 horas** a escala mundial. Las señales de un compromiso silencioso: enlaces hacia sitios dudosos inyectados en tus páginas, emails enviados desde tu dominio sin tu consentimiento (que llegan al spam de tus clientes), o una **caída repentina del tráfico de Google** (señal de que Google ha detectado contenido malicioso).',
            'La solución mínima: activar **Wordfence** (plugin *WordPress* gratuito) con alertas por email, configurar una alerta de monitorización de reputación del dominio mediante *Google Postmaster Tools*, y **actualizar WordPress**, los temas y plugins al menos una vez al mes.',
          ],
        },
      ],
      conclusion: 'Un sitio **sin monitorización** es un sitio que caerá un día sin que lo sepas. Las herramientas gratuitas cubren el **80 % de las necesidades básicas** — no hay ninguna razón para no configurarlas. Si quieres externalizar completamente esta vigilancia y recibir **informes mensuales completos** sobre la salud de tu sitio, es exactamente lo que hacemos en el marco de nuestras misiones de seguimiento continuo.',
      keyTakeaways: [
        'UptimeRobot gratuito vigila tu sitio cada 5 minutos y alerta en caso de caída',
        'Un certificado SSL expirado genera mensajes aterradores para tus visitantes Y penaliza tu SEO',
        'Search Console envía alertas automáticas sobre errores de indexación y penalizaciones',
        'Un sitio WordPress sin actualizar es hackeado de media cada 72h a escala global',
      ],
    },
  },

  {
    id: 'analytics-pme-indicateurs',
    title: 'Los 10 indicadores web que toda PYME debería vigilar cada semana',
    excerpt: 'Tráfico, tasa de rebote, conversiones, fuente de leads... Los 10 KPIs esenciales para pilotar tu presencia web con datos — sin ahogarte en tablas complejas.',
    category: 'Seguimiento Continuo',
    date: 'Febrero 2025',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Analytics', 'KPI', 'PYME', 'Datos'],
    available: true,
    body: {
      intro: 'La mayoría de los directivos de PYMES que tienen **Google Analytics** instalado en su sitio nunca acceden a él. Ya sea porque la interfaz es demasiado compleja, porque no saben qué buscar, o porque lo han delegado a una agencia que envía un informe PDF mensual de **40 páginas** que nadie lee. El **seguimiento web eficaz** no requiere experiencia en *data science* ni dashboards complejos. Requiere **10 indicadores**, consultados cada semana, en **15 minutos**.',
      sections: [
        {
          title: 'Los 5 indicadores de tráfico y audiencia',
          paragraphs: [
            'Empieza por los fundamentos: **visitantes únicos por semana** (tendencia a 4 semanas), fuente del tráfico (¿qué proporción viene de **Google**, de tu newsletter, de las redes sociales, de recomendaciones?), páginas más visitadas (¿qué contenidos atraen más visitas?), **tasa de rebote** por fuente (¿los visitantes procedentes de Google se quedan más tiempo que los de las redes sociales?) y dispositivo usado (¿qué proporción en móvil?).',
            'Estos cinco indicadores, leídos en **5 minutos**, te dan una visión completa de la salud de tu tráfico. Una caída del **tráfico orgánico** (Google) sin explicación visible es a menudo señal de un problema técnico o de una *actualización de algoritmo*. Un aumento del tráfico de redes sociales sin conversión es señal de que tu contenido engancha pero tu sitio **no convierte**.',
          ],
          bullets: [
            'Visitantes únicos/semana: tendencia a 4 semanas (¿subida o bajada?)',
            'Fuentes de tráfico: ¿qué proporción viene de cada canal?',
            'Páginas más vistas: reflejan las verdaderas preguntas de tus visitantes',
            'Tasa de rebote: >70% en una página clave señala un problema',
            'Móvil vs escritorio: determina tus prioridades de optimización',
          ],
        },
        {
          title: 'Los 5 indicadores de conversión y valor',
          paragraphs: [
            'Los indicadores de tráfico te dicen si la gente viene — los **indicadores de conversión** te dicen si estás convirtiendo esa audiencia en valor. Los 5 esenciales: número de **conversiones por semana** (formularios enviados, llamadas, compras según tu actividad), **tasa de conversión** (conversiones / visitas × 100), páginas que originan las conversiones (¿qué páginas generan contactos?), tiempo en el sitio (los visitantes que se quedan más de **2 minutos** son tus prospectos calientes), y palabras clave que aportan tráfico (desde *Search Console*).',
            'Una PYME con **1.000 visitantes/mes** y una **tasa de conversión del 2 %** genera 20 solicitudes. Pasando esa tasa al **3 %** (gracias a un mejor *CTA* o una página de contacto mejorada), genera 30 sin cambiar su volumen de tráfico. La **optimización de la conversión** es a menudo más rápida y menos costosa que la captación de tráfico adicional.',
          ],
          bullets: [
            'Tasa de conversión global: objetivo realista entre 1 y 3% para un sitio PYME',
            'Conversiones por fuente: ¿qué canal genera los mejores leads?',
            'Páginas que convierten: a menudo sorprendentes (no siempre la página de inicio)',
            'Tiempo medio por sesión: < 1 min = problema de relevancia o velocidad',
            'Visitantes nuevos vs recurrentes: una tasa de retorno > 20% indica una audiencia fiel',
          ],
        },
      ],
      conclusion: '**15 minutos por semana** sobre estos 10 indicadores sustituyen ventajosamente a cualquier informe mensual de 40 páginas. El objetivo no es comprender perfectamente los datos — es **detectar anomalías y tendencias**. Una caída del **30 %** del tráfico esta semana merece una investigación. Un aumento del **50 %** de las conversiones merece entender por qué para reproducir lo que funciona.',
      keyTakeaways: [
        '10 indicadores en 15 min/semana valen más que un informe mensual no leído',
        'Las fuentes de tráfico revelan qué canales merecen tu inversión',
        'Duplicar la tasa de conversión es a menudo más rápido que duplicar el tráfico',
        'Search Console es gratuito y revela las palabras clave que te traen visitantes',
      ],
    },
  },

  {
    id: 'mise-a-jour-site-checklist',
    title: 'La checklist de mantenimiento web mensual para no olvidar nada',
    excerpt: 'Actualizaciones del CMS, copias de seguridad, verificación de formularios, comprobación de enlaces rotos... La lista completa de tareas de mantenimiento a realizar cada mes para un sitio que nunca cae.',
    category: 'Seguimiento Continuo',
    date: 'Marzo 2025',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    tags: ['Mantenimiento', 'Checklist', 'CMS', 'WordPress'],
    available: true,
    body: {
      intro: 'Un sitio web no es un cartel pegado en una pared — es un **sistema vivo** que necesita un mantenimiento regular para seguir siendo eficaz, seguro y bien posicionado. Sin embargo, el **80 % de las PYMES** no hacen ningún mantenimiento proactivo de su sitio: intervienen en urgencia cuando algo se rompe. El **mantenimiento mensual** lleva **1 a 2 horas como máximo** y evita el 90 % de las crisis. Aquí está la *checklist* completa que usamos para nuestros clientes.',
      sections: [
        {
          title: 'Seguridad y actualizaciones (30 min)',
          paragraphs: [
            'La primera parte de la *checklist* cubre la seguridad. Para los sitios **WordPress**, que representan el **43 % de la web mundial**, las actualizaciones son críticas. Una versión de *WordPress* sin actualizar es una puerta abierta para los *bots* que escanean permanentemente las vulnerabilidades conocidas.',
            'Procedimiento: primero haz una **copia de seguridad completa** (base de datos + archivos), luego actualiza el *core* de WordPress, luego los **plugins uno por uno** (no todos a la vez — si un plugin rompe el sitio, debes poder identificar cuál), luego el tema. Verifica que el sitio funciona después de cada actualización crítica. Para los sitios que no son *WordPress*, verifica las dependencias *npm* o *composer* según tu stack.',
          ],
          bullets: [
            'Copia de seguridad completa antes de cualquier actualización (base de datos + archivos)',
            'Actualización del core de WordPress, luego plugins uno por uno',
            'Verificación del certificado SSL (fecha de expiración)',
            'Escaneo de seguridad con Wordfence o equivalente',
            'Verificación de los permisos de archivos (644 archivos, 755 carpetas)',
          ],
        },
        {
          title: 'Rendimiento y contenido (30 min)',
          paragraphs: [
            'Después de la seguridad, verifica el rendimiento. Lanza un test de **PageSpeed Insights** y compara con el mes anterior — una degradación suele ser señal de una imagen no optimizada añadida recientemente o de un plugin mal configurado. Verifica también que no haya **enlaces rotos** (*404*) en tus páginas principales con una herramienta como *Broken Link Checker*.',
            'Para el contenido: ¿están al día tus horarios? ¿Tus precios? ¿Tu información de contacto? Estas verificaciones básicas se descuidan a menudo y generan una **mala experiencia de cliente**. Un número de teléfono incorrecto o unos horarios de verano no actualizados después del verano pueden **costarte clientes** sin que lo sepas.',
          ],
          bullets: [
            'Test PageSpeed Insights + comparación con el mes anterior',
            'Escaneo de enlaces rotos (404) en las páginas principales',
            'Verificación de los formularios de contacto (prueba de envío completa)',
            'Actualización de la información: horarios, precios, equipo, novedades',
            'Verificación de la visualización en móvil (prueba en smartphone real)',
          ],
        },
        {
          title: 'Analytics e informes (15 min)',
          paragraphs: [
            'Termina la sesión de mantenimiento con un repaso rápido de los **analytics**. Compara el tráfico del mes pasado con el mes anterior y con el mismo mes del año pasado. Identifica las **3 páginas más consultadas** y las **3 páginas con la tasa de rebote más alta**. Anota todo en un *documento de seguimiento mensual* — es observando las tendencias a **6 a 12 meses** que se ven los verdaderos *patrones*.',
          ],
        },
      ],
      conclusion: '**Una hora y media al mes** para proteger meses o años de trabajo en tu presencia web — es la mejor inversión de tiempo que un directivo puede hacer. Si no tienes tiempo o competencias para gestionar este **mantenimiento internamente**, nuestra oferta de **seguimiento continuo** cubre exactamente estas tareas, con además la vigilancia 24h/24 y los informes mensuales.',
      keyTakeaways: [
        'Siempre hacer una copia de seguridad antes de actualizar — una restauración rápida vale su peso en oro',
        'Los plugins de WordPress sin actualizar son la primera causa de hacking',
        'Probar el formulario de contacto cada mes (los formularios se rompen sin avisar)',
        'Un documento de seguimiento mensual permite detectar las tendencias a 6-12 meses',
      ],
    },
  },

  {
    id: 'performance-continu-agence',
    title: 'Por qué el seguimiento continuo es la clave de un sitio de alto rendimiento a largo plazo',
    excerpt: 'Entregar un sitio es empezar la carrera — no terminarla. Por qué el 80% del valor de un proyecto digital se juega en los 12 meses posteriores a la puesta en línea.',
    category: 'Seguimiento Continuo',
    date: 'Febrero 2025',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Seguimiento', 'Agencia', 'Rendimiento', 'Performance'],
    available: true,
    body: {
      intro: 'La mayoría de las agencias web entregan un sitio y pasan al siguiente proyecto. El cliente, por su parte, se queda solo ante un producto que no siempre sabe cómo hacer evolucionar, medir o mantener. **Seis meses después de la entrega**, el sitio ya está perdiendo en rendimiento, seguridad y visibilidad. En **Maison Siranno**, hemos hecho la elección inversa: nuestro modelo de valor está estructurado en torno al **seguimiento continuo post-entrega**. Aquí explicamos por qué.',
      sections: [
        {
          title: 'Lo que ocurre realmente en un sitio 6 meses después de su entrega',
          paragraphs: [
            'Un sitio web entregado sin seguimiento continuo se degrada según un esquema predecible. El rendimiento técnico (*Core Web Vitals*) se deteriora primero de forma imperceptible y luego bruscamente cuando las dependencias *npm* o **WordPress** se quedan atrás. La seguridad se fragiliza con cada vulnerabilidad no *parcheada* — un sitio **WordPress** sin mantenimiento está comprometido de media **6 meses** después de su última actualización. El **SEO** evoluciona sin que nadie adapte la estrategia: Google actualiza su algoritmo **varios cientos de veces al año**.',
            'Los datos de *analytics* se acumulan sin que nadie los lea. Las **oportunidades de conversión** identificadas en los primeros meses nunca se implementan por falta de tiempo o competencias. El contenido envejece. Las redirecciones se rompen durante cambios de estructura. No es descuido — es simplemente el resultado natural de un producto entregado **sin piloto**. Un sitio es un *activo vivo*, no un entregable.',
          ],
          bullets: [
            'Rendimiento: degradación de los Core Web Vitals desde el 3.er mes sin optimización activa',
            'Seguridad: el 60% de los sitios WordPress hackeados lo han sido por un plugin sin actualizar',
            'SEO: pérdida media del 15 al 30% del tráfico orgánico en 12 meses sin contenido fresco',
            'Conversiones: las quick wins UX identificadas en analytics nunca se implementan sin seguimiento',
          ],
        },
        {
          title: 'El modelo de seguimiento continuo: qué implica concretamente',
          paragraphs: [
            'Nuestro modelo de **seguimiento continuo** se apoya en tres pilares mensuales. El primero es el **informe de rendimiento**: cada mes, un documento sintético de **2 páginas** que resume la evolución del tráfico, las conversiones, los *Core Web Vitals* y las posiciones **SEO** clave — con una interpretación y una recomendación de acción, no solo cifras brutas. El segundo pilar es el **mantenimiento técnico proactivo**: actualizaciones de seguridad, verificación de *backups*, monitorización de los tiempos de respuesta, y corrección de errores *404* antes de que perjudiquen al SEO.',
            'El tercer pilar es la **optimización continua**: cada mes, **2 a 4 horas de desarrollo** asignadas a mejoras priorizadas por impacto/esfuerzo. Sin grandes proyectos — ajustes dirigidos en las páginas con mayor potencial, los formularios que pierden leads, las páginas que ralentizan el *embudo de conversión*. En **12 meses**, son **24 a 48 horas de optimización acumuladas** que transforman un sitio estático en una máquina de conversiones.',
          ],
          bullets: [
            'Informe mensual: 2 páginas, tráfico + conversiones + SEO + recomendaciones accionables',
            'Mantenimiento proactivo: actualizaciones de seguridad + monitorización uptime + corrección errores 404',
            'Optimización continua: 2-4h/mes en los puntos de alto impacto identificados en analytics',
            'Reunión trimestral: revisión de rendimiento y ajuste de la estrategia de contenido',
          ],
        },
        {
          title: 'Medir el ROI del seguimiento continuo: cifras reales',
          paragraphs: [
            'La pregunta legítima es: ¿vale el coste? En los clientes que se han beneficiado de este modelo durante 12 meses completos, medimos mejoras sistemáticas en tres indicadores. El tráfico orgánico aumenta de media un 34 % en 12 meses gracias a las optimizaciones SEO continuas. La tasa de conversión (visitante → contacto o compra) progresa de 0,8 a 1,4 puntos según los sectores. El tiempo de carga se mantiene por debajo de 2,5 segundos durante todo el periodo, mientras que los sitios sin mantenimiento a menudo superan los 4-5 segundos tras 8 meses.',
            'Estas cifras tienen un valor financiero directamente calculable. Para un sitio de e-commerce con 5.000 visitas/mes y un ticket medio de 120 €, una mejora de 0,8 puntos de conversión representa 4.800 € de facturación adicional al mes. El coste del seguimiento continuo se amortiza así en 1 a 3 semanas de ingresos adicionales. Para un sitio escaparate, el reto está en los leads — un 34 % más de tráfico en un formulario que convierte al 3 %, se traduce en solicitudes comerciales adicionales cuantificables.',
          ],
          bullets: [
            '+34% de tráfico orgánico en 12 meses (media de clientes con seguimiento continuo)',
            '+0,8 a 1,4 puntos de tasa de conversión en 12 meses de optimización continua',
            'Tiempo de carga mantenido por debajo de 2,5s vs 4-5s para los sitios sin mantenimiento a los 8 meses',
            'ROI calculable: para un e-commerce 5k visitas/mes, +0,8pt conversión = +4.800€/mes',
          ],
        },
      ],
      conclusion: 'Un sitio web sin seguimiento continuo es un coche sin conductor — avanza, luego desacelera, luego se para. El seguimiento continuo no es un coste de mantenimiento: es una inversión en el rendimiento duradero de tu activo digital más importante. Si tienes un sitio en producción que merece más que el abandono post-entrega, hablemos de lo que podemos hacer juntos.',
      keyTakeaways: [
        'El 60% de los sitios WordPress hackeados lo han sido por un plugin sin actualizar — el mantenimiento no es negociable',
        'Un sitio sin contenido fresco pierde de media el 15 al 30% de su tráfico orgánico en 12 meses',
        'El modelo en 3 pilares: informe mensual + mantenimiento proactivo + 2-4h de optimización/mes',
        '+34% de tráfico orgánico y +0,8-1,4pt de conversión en 12 meses de seguimiento continuo',
        'Para un e-commerce, 1 punto adicional de conversión amortiza el seguimiento en pocas semanas',
      ],
    },
  },

  {
    id: 'datalog-reporting-automatise',
    title: 'Reporting automatizado: cómo generar tus KPIs sin esfuerzo cada lunes',
    excerpt: 'Google Analytics + Search Console + Brevo + n8n = un informe automático en tu bandeja de entrada cada lunes por la mañana. Cómo construir este sistema en menos de un día.',
    category: 'Seguimiento Continuo',
    date: 'Próximamente',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Reporting', 'Automatización', 'KPI', 'n8n'],
    available: false,
  },

  {
    id: 'nextjs-vs-react-2025',
    title: 'Next.js vs React clásico: ¿qué elegir para tu proyecto en 2025?',
    excerpt: 'Server components, App Router, SSR, SSG... Next.js 14 ha cambiado las reglas del juego. Pero, ¿sigue siendo la mejor opción para tu proyecto? Comparativa honesta según los casos de uso.',
    category: 'Desarrollo Web & SaaS',
    date: 'Octubre 2024',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'React', 'Arquitectura', 'Performance'],
    available: true,
    body: {
      intro: '**Next.js** se ha convertido en la elección por defecto de la mayoría de los desarrolladores **React** — hasta el punto de que elegir React "clásico" (una *SPA pura* sin framework) a veces se percibe como falta de modernidad. Es un error. **Next.js** es una herramienta extraordinaria para ciertos tipos de proyectos, y una **sobreingeniería costosa** para otros. Después de haber entregado decenas de proyectos con ambos enfoques, aquí está nuestra guía de decisión sin dogmatismo.',
      sections: [
        {
          title: 'Lo que Next.js aporta realmente (y lo que el marketing no dice)',
          paragraphs: [
            '**Next.js 14** con el **App Router** introduce los *Server Components* — componentes React que se ejecutan únicamente en el servidor y envían HTML estático al navegador. La ventaja es real: menos JavaScript en el cliente, mejor **LCP** (Largest Contentful Paint), y posibilidad de hacer consultas a la base de datos directamente en el componente sin pasar por una API separada. Para un sitio *content-heavy* (blog, e-commerce, escaparate SEO), es una ventaja significativa.',
            'Lo que el marketing de Next.js no destaca: la **curva de aprendizaje del App Router es pronunciada**, incluso para desarrolladores React experimentados. Las reglas sobre cuándo usar *\'use client\'* vs Server Component, la gestión del caché (que ha cambiado radicalmente entre Next.js 13 y 14), y las sutilezas de los Suspense boundaries generan confusión y bugs difíciles de depurar. Para un equipo junior o un proyecto con una **fecha límite ajustada**, esta complejidad puede resultar contraproducente.',
          ],
          bullets: [
            'Next.js destaca: sitios críticos en SEO, e-commerce, blogs, landing pages de alto tráfico',
            'React SPA destaca: dashboards de administración, apps SaaS, herramientas internas',
            'Server Components: ganancia de LCP real del 30 al 60% vs SPA equivalente',
            'App Router: curva de aprendizaje de 2 a 3 semanas para un dev React senior',
            'ISR (Incremental Static Regeneration): el verdadero superpoder de Next.js para el SEO',
          ],
        },
        {
          title: 'Cuándo React SPA sigue siendo la mejor opción',
          paragraphs: [
            'Para toda aplicación cuyas páginas requieren autenticación — un dashboard SaaS, un área de cliente, una herramienta de gestión interna — el SSR de Next.js no aporta ningún beneficio SEO (las páginas no se indexan) y añade complejidad innecesaria. Una SPA React con Vite, React Query para el data fetching y TanStack Router para la navegación es más sencilla de mantener, más rápida de desarrollar y igual de performante para la experiencia de usuario.',
            'El criterio decisivo es: ¿deben indexarse tus páginas en Google? Si sí, Next.js con SSR o SSG tiene sentido. Si no (aplicación autenticada), React + Vite es nuestra recomendación. En 2024 migramos 3 proyectos de Next.js a SPA pura porque la complejidad de Next.js no estaba justificada por el caso de uso — y los desarrolladores ganaron en productividad.',
          ],
          bullets: [
            'Páginas detrás de autenticación: SSR Next.js = complejidad sin beneficio SEO',
            'Vite + React: inicio de proyecto en 5 minutos, build de producción optimizado',
            'React Query (TanStack Query): caché del servidor y sincronización del estado asíncrono',
            'TanStack Router: tipado TypeScript nativo, mejor alternativa a React Router',
          ],
        },
        {
          title: 'Nuestra guía de decisión en 4 preguntas',
          paragraphs: [
            'Antes de elegir, responde estas 4 preguntas en orden. 1) ¿Tus páginas son accesibles sin autenticación? Si sí → Next.js es pertinente. 2) ¿Es el SEO crítico para tu modelo de negocio? Si sí → Next.js casi obligatorio. 3) ¿Ha trabajado tu equipo con el App Router antes? Si no, añade 2 a 4 semanas al planning. 4) ¿Necesita el proyecto una API backend? Si sí, las API Routes de Next.js simplifican la arquitectura — si no, es una ventaja innecesaria.',
            'En la práctica: para un sitio escaparate o un e-commerce, Next.js es la respuesta evidente en 2025. Para un SaaS B2B con dashboard de cliente, React + Vite sigue siendo nuestra referencia. Para un proyecto mixto (parte pública SEO + parte privada dashboard), Next.js puede gestionarlo todo pero requiere una arquitectura cuidadosa para no mezclar los paradigmas Server/Client Components.',
          ],
          bullets: [
            'Sitio escaparate / blog / e-commerce → Next.js (SSG + ISR)',
            'Dashboard SaaS / herramienta interna / app autenticada → React + Vite',
            'Proyecto mixto público + privado → Next.js con separación clara de rutas',
            'Equipo junior o deadline < 6 semanas → evaluar la curva de aprendizaje del App Router',
            'Presupuesto de servidor limitado → Next.js SSG en Vercel (gratuito para sitios estáticos)',
          ],
        },
      ],
      conclusion: 'El mejor framework es el que corresponde al problema y a las capacidades del equipo — no el más popular en Twitter. En 2025, Next.js con el App Router es una tecnología madura y potente para proyectos críticos en SEO. Para el resto, React sigue siendo React, y a menudo es suficiente. Si estás iniciando un proyecto y quieres una opinión sobre la stack adecuada, tomamos estas decisiones a diario.',
      keyTakeaways: [
        'Next.js es indispensable para sitios críticos en SEO — superfluo para apps autenticadas',
        'Los Server Components de Next.js 14 mejoran el LCP un 30-60% vs SPA equivalente',
        'Para dashboards SaaS, React + Vite + TanStack Query sigue siendo nuestra referencia en 2025',
        'El App Router requiere 2 a 4 semanas de formación para un dev React senior — hay que integrarlo en la planificación',
        'Criterio decisivo: ¿deben indexarse tus páginas en Google?',
      ],
    },
  },
  {
    id: 'pilotage-continu-site-web',
    title: 'Por qué su sitio web necesita un seguimiento continuo (y no solo un lanzamiento)',
    excerpt: 'Un sitio lanzado sin seguimiento pierde en promedio un 30% de su tráfico orgánico en 12 meses. El modelo de pilotaje continuo que aplicamos a nuestros clientes — y los resultados medidos.',
    category: 'Seguimiento Continuo',
    date: 'Octubre 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Seguimiento', 'SEO', 'Mantenimiento', 'Rendimiento', 'ROI'],
    available: true,
    body: {
      intro: 'La mayoría de las **PYME** consideran su sitio web como un proyecto con un inicio y un final: se lanza, se paga, y se pasa a otra cosa. Esta visión es costosa. Un sitio web es un **activo digital vivo** que necesita mantenimiento, optimización y seguimiento regulares para mantener — y mejorar — su rendimiento. Sin pilotaje continuo, el 60% de los sitios WordPress se hackean a causa de plugins no actualizados, y un sitio sin contenido nuevo pierde en promedio un **15 a 30% de su tráfico orgánico** en 12 meses.',
      sections: [
        {
          title: 'Lo que le ocurre a un sitio sin seguimiento',
          paragraphs: [
            'La degradación de un sitio sin mantenimiento sigue siempre el mismo patrón. Durante los primeros 3 meses post-lanzamiento, todo funciona: el tráfico llega, las posiciones SEO se mantienen, el sitio carga rápidamente. Entre los 3 y 6 meses, aparecen las primeras señales débiles: una página que se ralentiza, un plugin que deja de ser compatible con una actualización de WordPress, una keyword posicionada que baja 5 puestos sin razón aparente. A los 12 meses, si no se ha hecho nada, el cuadro es preocupante: tráfico orgánico bajando, vulnerabilidades de seguridad acumuladas, y a veces un hackeo o una penalización Google que borra meses de trabajo SEO.',
            'El error más costoso es confundir el mantenimiento técnico (actualizaciones de seguridad, backups, monitoring de uptime) con el pilotaje de rendimiento (análisis de tráfico, optimización de conversiones, ajuste de contenido SEO). Son dos dimensiones complementarias — una evita que el sitio se hunda, la otra lo hace crecer. Un buen modelo de pilotaje continuo cubre las dos.',
          ],
          bullets: [
            '60% de los sitios WordPress hackeados: causa principal, plugins no actualizados',
            '-15 a -30% de tráfico orgánico en 12 meses sin actualización de contenido',
            'Core Web Vitals: degradación media de 0,8 segundos de LCP en 6 meses sin optimización',
            'Plugins obsoletos: 73% de las vulnerabilidades críticas de WordPress están corregidas en las actualizaciones',
            'Señales SEO débiles: una keyword que baja 5 posiciones puede perder el 35% de sus clics',
          ],
        },
        {
          title: 'El modelo de pilotaje continuo: lo que implica concretamente',
          paragraphs: [
            'Nuestro modelo de **pilotaje continuo** se basa en tres pilares mensuales. El primero es el **informe de rendimiento**: cada mes, un documento sintético de **2 páginas** que resume la evolución del tráfico, las conversiones, los *Core Web Vitals* y las posiciones **SEO** clave — con una interpretación y una recomendación de acción, no solo cifras en bruto. El segundo pilar es el **mantenimiento técnico proactivo**: actualizaciones de seguridad, verificación de *backups*, monitoring de tiempos de respuesta, y corrección de errores *404* antes de que perjudiquen al SEO.',
            'El tercer pilar es la **optimización continua**: cada mes, **2 a 4 horas de desarrollo** asignadas a mejoras priorizadas por impacto/esfuerzo. No grandes proyectos — ajustes puntuales en las páginas de alto potencial, los formularios que pierden leads, las páginas que ralentizan el *embudo de conversión*. En **12 meses**, son **24 a 48 horas de optimización acumuladas** que transforman un sitio estático en una máquina de conversiones.',
          ],
          bullets: [
            'Informe mensual: 2 páginas, tráfico + conversiones + SEO + recomendaciones accionables',
            'Mantenimiento proactivo: actualizaciones de seguridad + monitoring uptime + corrección errores 404',
            'Optimización continua: 2-4h/mes en los puntos de alto impacto identificados en analytics',
            'Reunión trimestral: revisión de rendimiento y ajuste de la estrategia de contenido',
          ],
        },
        {
          title: 'Medir el ROI del pilotaje continuo: cifras reales',
          paragraphs: [
            'La pregunta legítima es: ¿vale el coste? En los clientes que se han beneficiado de este modelo durante 12 meses completos, medimos mejoras sistemáticas en tres indicadores. El tráfico orgánico aumenta en promedio un 34% en 12 meses gracias a las optimizaciones SEO continuas. La tasa de conversión (visitante → contacto o compra) progresa de 0,8 a 1,4 puntos según los sectores. El tiempo de carga se mantiene por debajo de los 2,5 segundos durante todo el período, donde los sitios no mantenidos superan a menudo los 4-5 segundos tras 8 meses.',
            'Estas cifras tienen un valor financiero directamente calculable. Para un sitio de e-commerce con 5.000 visitas/mes y un carrito medio de 120 €, una mejora de 0,8 puntos de conversión representa 4.800 € de facturación adicional por mes. El coste del pilotaje continuo se amortiza por tanto en 1 a 3 semanas de ingresos adicionales. Para un sitio escaparate, el reto está en los leads — un 34% más de tráfico en un formulario que convierte al 3% se traduce en solicitudes comerciales adicionales cuantificables.',
          ],
          bullets: [
            '+34% de tráfico orgánico en 12 meses (media clientes pilotaje continuo)',
            '+0,8 a 1,4 puntos de tasa de conversión en 12 meses de optimización continua',
            'Tiempo de carga mantenido bajo 2,5s vs 4-5s para los sitios no mantenidos a los 8 meses',
            'ROI calculable: para un e-commerce de 5k visitas/mes, +0,8pt conversión = +4.800€/mes',
          ],
        },
      ],
      conclusion: 'Un sitio web sin pilotaje continuo es un coche sin conductor — avanza, luego se ralentiza, luego se detiene. El pilotaje continuo no es un coste de mantenimiento: es una inversión en el rendimiento duradero de su activo digital más importante. Si tiene un sitio en producción que merece algo mejor que el abandono post-lanzamiento, hablemos de lo que podemos hacer juntos.',
      keyTakeaways: [
        '60% de los sitios WordPress hackeados lo fueron por un plugin no actualizado — el mantenimiento no es negociable',
        'Un sitio sin contenido nuevo pierde en promedio un 15 a 30% de su tráfico orgánico en 12 meses',
        'El modelo en 3 pilares: informe mensual + mantenimiento proactivo + 2-4h de optimización/mes',
        '+34% de tráfico orgánico y +0,8-1,4pt de conversión en 12 meses de pilotaje continuo',
        'Para un e-commerce, 1 punto de conversión adicional amortiza el pilotaje en pocas semanas',
      ],
    },
  },

  {
    id: 'datalog-reporting-automatise',
    title: 'Reporting automatizado: cómo generar sus KPIs sin esfuerzo cada lunes',
    excerpt: 'Google Analytics + Search Console + Brevo + n8n = un informe automático en su bandeja de entrada cada lunes por la mañana. Cómo construir este sistema en menos de un día.',
    category: 'Seguimiento Continuo',
    date: 'Próximamente',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Reporting', 'Automatización', 'KPI', 'n8n'],
    available: false,
  },

  {
    id: 'nextjs-vs-react-2025',
    title: 'Next.js vs React clásico: ¿qué elegir para su proyecto en 2025?',
    excerpt: 'Server components, App Router, SSR, SSG... Next.js 14 ha cambiado las reglas del juego. Pero, ¿sigue siendo la opción correcta para su proyecto? Comparativa honesta según los casos de uso.',
    category: 'Desarrollo Web & SaaS',
    date: 'Octubre 2024',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'React', 'Arquitectura', 'Rendimiento'],
    available: true,
    body: {
      intro: '**Next.js** se ha convertido en la elección por defecto de la mayoría de los desarrolladores **React** — hasta el punto de que elegir React "clásico" (una *SPA pura* sin framework) a veces se percibe como una falta de modernidad. Es un error. **Next.js** es una herramienta extraordinaria para ciertos tipos de proyectos, y una **sobre-ingeniería costosa** para otros. Tras haber entregado docenas de proyectos con ambos enfoques, aquí está nuestra guía de decisión sin dogmatismo.',
      sections: [
        {
          title: 'Lo que Next.js aporta realmente (y lo que el marketing no dice)',
          paragraphs: [
            '**Next.js 14** con el **App Router** introduce los *Server Components* — componentes React que se ejecutan únicamente en el servidor y envían HTML estático al navegador. La ventaja es real: menos JavaScript en el cliente, mejor **LCP** (Largest Contentful Paint), y posibilidad de hacer consultas a base de datos directamente en el componente sin pasar por una API separada. Para un sitio *content-heavy* (blog, e-commerce, escaparate SEO), es una ventaja significativa.',
            'Lo que el marketing de Next.js no destaca: la **curva de aprendizaje del App Router es pronunciada**, incluso para desarrolladores React con experiencia. Las reglas sobre cuándo usar *\'use client\'* vs Server Component, la gestión del caché (que ha cambiado radicalmente entre Next.js 13 y 14), y las sutilezas de los Suspense boundaries generan confusión y bugs difíciles de depurar. Para un equipo junior o un proyecto con una **fecha límite ajustada**, esta complejidad puede resultar contraproducente.',
          ],
          bullets: [
            'Next.js sobresale: sitios SEO-críticos, e-commerce, blogs, landing pages de alto tráfico',
            'React SPA sobresale: dashboards de administración, apps SaaS, herramientas internas',
            'Server Components: ganancia de LCP real del 30 al 60% vs SPA equivalente',
            'App Router: curva de aprendizaje de 2 a 3 semanas para un dev React senior',
            'ISR (Incremental Static Regeneration): el verdadero superpoder de Next.js para el SEO',
          ],
        },
        {
          title: 'Cuándo React SPA sigue siendo la buena elección',
          paragraphs: [
            'Para toda aplicación cuyas páginas requieren autenticación para ser consultadas — un dashboard SaaS, un espacio cliente, una herramienta de gestión interna — el SSR de Next.js no aporta ningún beneficio SEO (las páginas no están indexadas) y añade una complejidad innecesaria. Una SPA React con Vite, React Query para el data fetching y TanStack Router para la navegación es más sencilla de mantener, más rápida de desarrollar, y igual de performante para la experiencia de usuario.',
            'El criterio decisivo es: ¿sus páginas deben ser indexadas por Google? Si es así, Next.js con SSR o SSG tiene sentido. Si no (aplicación autenticada), React + Vite es nuestra recomendación. Hemos migrado 3 proyectos de Next.js a una SPA pura en 2024 porque la complejidad de Next.js no estaba justificada por el caso de uso — y los desarrolladores ganaron en productividad.',
          ],
          bullets: [
            'Páginas detrás de autenticación: SSR Next.js = complejidad sin beneficio SEO',
            'Vite + React: inicio de proyecto en 5 minutos, build de producción optimizado',
            'React Query (TanStack Query): caché de servidor y sincronización de estado asíncrono',
            'TanStack Router: tipado TypeScript nativo, mejor alternativa a React Router',
          ],
        },
        {
          title: 'Nuestra guía de decisión en 4 preguntas',
          paragraphs: [
            'Antes de elegir, responda a estas 4 preguntas en orden. 1) ¿Sus páginas son consultables sin autenticación? Si es así → Next.js pertinente. 2) ¿El SEO es crítico para su modelo de negocio? Si es así → Next.js casi obligatorio. 3) ¿Su equipo ya ha trabajado con el App Router? Si no, añada 2 a 4 semanas al planning. 4) ¿El proyecto necesita una API backend? Si es así, las API Routes de Next.js simplifican la arquitectura — si no, es una ventaja inútil.',
            'En la práctica: para un sitio escaparate o un sitio de e-commerce, Next.js es la respuesta evidente en 2025. Para un SaaS B2B con dashboard de cliente, React + Vite sigue siendo nuestra elección de referencia. Para un proyecto mixto (parte pública SEO + parte privada dashboard), Next.js puede gestionar todo pero requiere una arquitectura cuidadosa para evitar mezclar los paradigmas Server/Client Components.',
          ],
          bullets: [
            'Sitio escaparate / blog / e-commerce → Next.js (SSG + ISR)',
            'Dashboard SaaS / herramienta interna / app autenticada → React + Vite',
            'Proyecto mixto público + privado → Next.js con separación clara de rutas',
            'Equipo junior o fecha límite < 6 semanas → evaluar la curva de aprendizaje App Router',
            'Presupuesto de servidor limitado → Next.js SSG en Vercel (gratuito para sitios estáticos)',
          ],
        },
      ],
      conclusion: 'El mejor framework es el que corresponde al problema y a las capacidades del equipo — no el más popular en Twitter. En 2025, Next.js con el App Router es una tecnología madura y potente para los proyectos SEO-críticos. Para el resto, React sigue siendo React, y eso a menudo es suficiente. Si está iniciando un proyecto y quiere una opinión sobre la stack apropiada, tomamos estas decisiones a diario.',
      keyTakeaways: [
        'Next.js es indispensable para los sitios SEO-críticos — superfluo para las apps autenticadas',
        'Los Server Components de Next.js 14 mejoran el LCP un 30 a 60% vs SPA equivalente',
        'Para los dashboards SaaS, React + Vite + TanStack Query sigue siendo nuestra referencia en 2025',
        'El App Router requiere 2 a 4 semanas de formación para un dev React senior — a integrar en el planning',
        'Criterio decisivo: ¿sus páginas deben ser indexadas por Google?',
      ],
    },
  },

  {
    id: 'reduire-taux-rebond-site-vitrine',
    title: 'Cómo reducir un 70% la tasa de rebote de su sitio escaparate',
    excerpt: 'Una tasa de rebote elevada no es una fatalidad. 12 optimizaciones concretas — desde la velocidad de carga hasta el copywriting — para transformar sus visitantes en leads cualificados.',
    category: 'Desarrollo Web & SaaS',
    date: 'Noviembre 2024',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
    tags: ['Tasa de Rebote', 'Conversión', 'UX', 'Copywriting'],
    available: true,
    body: {
      intro: 'La **tasa de rebote media** de un sitio escaparate B2B en Francia es del **67 %**. En otras palabras, dos tercios de sus visitantes se marchan sin interactuar con una sola página. Para un sitio que genera **1.000 visitas al mes**, 670 personas potencialmente interesadas en sus servicios se van con las manos vacías. Reducir esta cifra un **70 %** no es un objetivo utópico — es el resultado que obtenemos sistemáticamente aplicando las **12 optimizaciones** que siguen.',
      sections: [
        {
          title: 'Las 4 causas raíz de una tasa de rebote elevada',
          paragraphs: [
            'Antes de optimizar, hay que diagnosticar. Una tasa de rebote elevada proviene de **4 causas distintas**, y el tratamiento es diferente según la causa. La primera es *la lentitud*: si su página tarda más de **3 segundos** en cargar en móvil, el **53 %** de los usuarios se marchan antes de ver su contenido (fuente: Google). La segunda es el *desajuste promesa/realidad*: el visitante ha hecho clic en un enlace o un anuncio que prometía algo que su página no entrega. La tercera es un **valor percibido insuficiente**: el mensaje no es suficientemente claro en los **primeros 5 segundos**. La cuarta es la ausencia de invitación a actuar.',
            'Para identificar cuál de estas causas es responsable de su rebote, use Google Analytics 4 observando la \'tasa de engagement\' (inverso del rebote) combinada con los datos de velocidad de Google Search Console. Un rebote > 80% en móvil con una duración de sesión < 10 segundos apunta al rendimiento. Un rebote elevado con una duración de sesión > 1 minuto apunta a la ausencia de CTA o a un problema de confianza.',
          ],
          bullets: [
            'Rendimiento móvil: cada segundo adicional de carga aumenta el rebote un 32%',
            'Desajuste SEO/Contenido: verificar que la página responde precisamente a la consulta que la genera',
            'Mensaje por encima del fold: la propuesta de valor debe ser legible sin hacer scroll',
            'CTA ausente: cada página debe proponer una sola acción clara',
            'Confianza: logos de clientes, testimonios y certificaciones visibles en la primera pantalla',
          ],
        },
        {
          title: 'Las 5 optimizaciones técnicas que lo cambian todo',
          paragraphs: [
            'La compresión de imágenes es sistemáticamente la primera optimización a realizar — y la de mayor impacto. Las imágenes no optimizadas representan en promedio el 60 al 80% del peso de una página web. Pasar al formato WebP con una compresión adecuada (calidad 75-80% en WebP es imperceptible visualmente) puede reducir el peso de las imágenes un 30 a 50%. Asocie esto con lazy loading nativo (atributo loading=\'lazy\' en todas las imágenes fuera del viewport) y ganará 1 a 2 segundos de tiempo de carga percibido.',
            'El Critical CSS inline es la segunda optimización técnica más rentable. Al inyectar los estilos críticos (todo lo visible por encima del fold) directamente en el HTML, se elimina el bloqueo del renderizado por los archivos CSS externos. Herramientas como Critters (integrado en Angular/Next.js) o Critical.css automatizan esta extracción. Combinado con una fuente web con font-display: swap, esto elimina los \'destellos\' de contenido sin estilo que irritan a los visitantes.',
          ],
          bullets: [
            'Imágenes WebP + compresión 75%: reducción del peso del 30 al 50%',
            'Lazy loading nativo en todas las imágenes bajo el fold',
            'Critical CSS inline: elimina el CSS render-blocking',
            'Preconnect a fuentes de Google y CDN de terceros para reducir la latencia',
            'Caché del navegador: headers Cache-Control para los assets estáticos (1 año para imágenes)',
          ],
        },
        {
          title: 'Las 7 optimizaciones de contenido y UX para captar al visitante',
          paragraphs: [
            'El copywriting above-the-fold es la palanca más subestimada. La regla de los 5 segundos es implacable: si un visitante no entiende en menos de 5 segundos qué hace usted, para quién, y qué resultado aporta — se marcha. La fórmula que funciona es sistemáticamente la misma: [Lo que hace] + [Para quién] + [Resultado medible]. "Agencia web para PYME industriales — sus leads triplicados en 6 meses" es un ejemplo que supera esta prueba. "Su socio digital de confianza" no la supera.',
            'La adición de prueba social inmediata (logos de clientes, número de proyectos realizados, nota media) en la primera pantalla reduce el rebote un 15 a 25% según nuestras pruebas. El visitante busca señales de confianza antes de invertir su atención. Un banner de logos reconocibles o una estadística concreta ("47 PYME acompañadas desde 2020") responde a esta expectativa en unos milisegundos de lectura.',
          ],
          bullets: [
            'Copywriting above-fold: [Lo que hace] + [Para quién] + [Resultado medible]',
            'Prueba social desde la 1ª pantalla: logos de clientes, estadísticas, nota de Google',
            '1 solo CTA principal por página — no 5 botones que compiten entre sí',
            'Navegación simplificada: máx. 5-6 ítems en el menú principal',
            'Vídeo corto (30-60s) en el hero: aumenta el engagement un 80% según HubSpot',
            'Chat en directo o enlace de WhatsApp visible: reduce la fricción de contacto un 40%',
          ],
        },
      ],
      conclusion: 'Reducir la tasa de rebote no es un proyecto de 3 meses — es una checklist de 12 optimizaciones que puede empezar a aplicar esta semana. Empiece por medir (Google Analytics 4 + PageSpeed Insights), identifique sus 3 páginas con mayor tráfico, y aplique las correcciones técnicas en primer lugar antes de trabajar el copywriting. Si quiere una auditoría de su sitio con un plan de priorización personalizado, contáctenos.',
      keyTakeaways: [
        'La tasa de rebote media de un sitio escaparate B2B francés es del 67% — hay margen de mejora',
        'Cada segundo adicional de carga aumenta el rebote un 32%',
        'Las imágenes WebP + lazy loading reducen el peso un 30 a 50% y ganan 1-2s de LCP',
        'La regla de los 5 segundos: propuesta de valor legible sin hacer scroll, o el visitante se marcha',
        'La prueba social desde la primera pantalla reduce el rebote un 15 a 25%',
      ],
    },
  },

  {
    id: 'connecter-crm-comptabilite-n8n',
    title: 'Conectar su CRM con su contabilidad con n8n: tutorial paso a paso',
    excerpt: 'Cada presupuesto aceptado debe convertirse en una factura. Cada pago recibido debe actualizar el CRM. Este puente entre Pipedrive (o HubSpot) y Pennylane (o Sellsy) se construye en un día con n8n.',
    category: 'Automatización & n8n',
    date: 'Noviembre 2024',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800',
    tags: ['CRM', 'Contabilidad', 'n8n', 'Pipedrive', 'Pennylane'],
    available: true,
    body: {
      intro: 'Su comercial cierra un deal en **Pipedrive**. Alguien debe crear la factura en **Pennylane**. Ese "alguien" es a menudo usted, o su asistente, o su contable — y lleva **5 a 10 minutos por transacción**, con riesgos de error en cada entrada manual. Para una PYME que emite **30 facturas al mes**, eso son **2 a 5 horas de entrada pura** al mes. Con **n8n**, este puente es automático, instantáneo y sin errores. Aquí le explicamos cómo construirlo.',
      sections: [
        {
          title: 'Cartografiar los flujos antes de construir',
          paragraphs: [
            'Antes de abrir n8n, dedique 30 minutos a cartografiar con precisión los flujos de datos entre su CRM y su herramienta de contabilidad. La pregunta no es "cómo conectar técnicamente los dos" — es "¿qué ocurre en una herramienta que debería desencadenar una acción en la otra?". Para la mayoría de las PYME, hay 4 flujos principales: (1) Deal ganado en el CRM → crear la factura en contabilidad, (2) Factura pagada en contabilidad → actualizar el estado del deal en el CRM, (3) Nuevo contacto creado en el CRM → crear el cliente en contabilidad, (4) Factura con retraso → crear una tarea de seguimiento en el CRM.',
            'Para cada flujo, identifique el desencadenante exacto (qué campo cambia, qué estado se alcanza), los datos a transferir (los campos en común entre las dos herramientas), y las condiciones de ejecución (¿el flujo debe activarse para TODOS los deals o solo para los de un cierto tipo?). Esta cartografía, aunque sea rudimentaria en papel, reducirá a la mitad el tiempo de construcción del workflow.',
          ],
          bullets: [
            'Flujo 1: Deal \'Ganado\' CRM → Borrador de factura en contabilidad',
            'Flujo 2: Factura \'Pagada\' contabilidad → Estado \'Facturado\' en el CRM',
            'Flujo 3: Nuevo contacto CRM → Creación de ficha de cliente en contabilidad',
            'Flujo 4: Factura > 30 días impagada → Tarea de seguimiento en el CRM + alerta al comercial',
            'Identificar los campos en común: nombre del cliente, NIF, importe sin IVA, referencia del deal',
          ],
        },
        {
          title: 'Construir el workflow en n8n: paso a paso',
          paragraphs: [
            'El workflow principal (Deal ganado → Factura) comienza con un nodo Trigger Webhook o, mejor, un nodo nativo de Pipedrive/HubSpot configurado en el evento \'deal.won\' o \'deal.stage_changed\'. Este nodo le devuelve todos los datos del deal: nombre del contacto, importe, líneas de productos, fechas. Añada un nodo IF para verificar que el deal tiene los datos necesarios (importe > 0, cliente completado) antes de continuar — esta verificación evita las facturas creadas con datos incompletos.',
            'El nodo de creación de factura en Pennylane usa la API REST de Pennylane. Un nodo HTTP Request con método POST hacia \'/api/external/v1/customer_invoices\', autenticado por Bearer Token (a obtener en los parámetros API de Pennylane), es suficiente. El body JSON mapea los campos del deal hacia los campos de la factura. Atención al mapeo del IVA: hay que recuperar el ID del tipo de IVA aplicable en Pennylane previamente mediante un nodo GET, e inyectarlo después en el body de creación.',
          ],
          bullets: [
            'Nodo desencadenador: Pipedrive (nativo n8n) en el evento deal.won',
            'Nodo IF: verificar que contact_id, amount y products están completados',
            'Nodo HTTP Request: POST /api/external/v1/customer_invoices en la API de Pennylane',
            'Nodo de notificación: Slack o email al comercial para confirmar la creación',
            'Gestión de errores: nodo Error Trigger + notificación al admin si el workflow falla',
          ],
        },
        {
          title: 'Probar, monitorizar y mantener el workflow',
          paragraphs: [
            'Un workflow de facturación automática requiere una fase de prueba rigurosa antes de activarse en producción. Use el modo \'Test Workflow\' de n8n con datos reales procedentes de deals de prueba — no ficticios — para asegurarse de que todos los campos están correctamente mapeados. Verifique especialmente el importe sin IVA vs con IVA (Pennylane trabaja sin IVA), los redondeos en las líneas (IVA calculado a 2 decimales), y la coherencia de la referencia del deal transmitida.',
            'Una vez en producción, configure un monitoring semanal: verifique en el diario de ejecución de n8n que cada activación ha terminado con éxito, y crúcela con el número de deals ganados en su CRM para detectar cualquier ejecución perdida. Para workflows financieros, recomendamos sistemáticamente un informe semanal automático (generado por otro workflow n8n) que liste las facturas creadas automáticamente en la semana.',
          ],
          bullets: [
            'Probar con deals de prueba reales — no datos ficticios que no representan los casos límite',
            'Verificar: sin IVA/con IVA, redondeos IVA, referencia del deal transmitida, ID cliente exacto',
            'Modo \'pinned data\' de n8n para reproducir una activación específica durante el debug',
            'Diario de ejecución: verificación semanal de errores',
            'Informe semanal automático: facturas creadas vs deals ganados (deben ser iguales)',
          ],
        },
      ],
      conclusion: 'Este workflow CRM → contabilidad es una de las automatizaciones más rentables que una PYME puede desplegar: impacto inmediato, riesgo bajo, y ganancia medible en horas desde la primera semana. La construcción lleva un día — el mantenimiento es casi nulo una vez estabilizado. Si quiere que construyamos este workflow para su stack específico (Hubspot/Salesforce/Pipedrive + Pennylane/Sellsy/Quickbooks), contáctenos.',
      keyTakeaways: [
        '30 facturas/mes introducidas manualmente = 2 a 5h de trabajo evitables — de inmediato',
        'Cartografiar los 4 flujos principales en papel antes de abrir n8n divide el tiempo de construcción por 2',
        'Nodo IF de verificación antes de la creación: evita las facturas incompletas',
        'Probar con deals de prueba reales, no con datos ficticios',
        'Monitoring semanal: deals ganados vs facturas creadas deben ser iguales',
      ],
    },
  },

  {
    id: '10-automatisations-pme-2025',
    title: 'Las 10 automatizaciones que toda PYME debería tener en 2025',
    excerpt: 'Seguimiento de impagados, onboarding de clientes, informe semanal, publicación social, cualificación de leads... Los 10 workflows que más tiempo ahorran en una PYME bien organizada.',
    category: 'Automatización & n8n',
    date: 'Diciembre 2024',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
    tags: ['Automatización', 'PYME', 'n8n', 'Workflows', 'Productividad'],
    available: true,
    body: {
      intro: 'Si tuviera que desplegar solo **10 automatizaciones** en su PYME este año, ¿cuáles elegiría? Tras haber construido cientos de *workflows* para **PYME francesas** de todos los tamaños y sectores, tenemos una respuesta clara. Estas **10 automatizaciones** cubren los puntos de fricción universales — los que existen en todas las empresas, independientemente del sector. Juntas, ahorran en promedio **8 a 12 horas por semana** en una PYME de 10 a 30 empleados.',
      sections: [
        {
          title: 'Automatizaciones 1 a 4: comercial y relación con el cliente',
          paragraphs: [
            'La automatización n°1 es el seguimiento de los presupuestos sin respuesta. Un presupuesto enviado y olvidado es facturación perdida. Un workflow sencillo monitoriza cada presupuesto creado en su herramienta de facturación, y si no se registra ninguna respuesta tras 3 días, envía automáticamente un email de seguimiento personalizado desde la dirección del comercial. Tras 7 días sin respuesta, se crea una tarea \'llamada de seguimiento\' en el CRM. Resultado observado: +18 a +30% de tasa de transformación en los presupuestos.',
            'La automatización n°2 es el onboarding automatizado de clientes. Cuando un nuevo cliente firma un presupuesto, recibe automáticamente un email de bienvenida con la información práctica (contactos, proceso, enlaces útiles), una invitación a su herramienta de colaboración, y un cuestionario de encuadre. En paralelo, el equipo interno recibe una notificación con toda la información del cliente y una checklist de acciones a realizar en las primeras 48h. Este workflow transforma una transición a menudo caótica en un proceso fluido y profesional.',
          ],
          bullets: [
            'N°1 — Seguimiento presupuesto: D+3 email automático, D+7 tarea CRM para llamada → +18 a +30% de conversión',
            'N°2 — Onboarding cliente: email de bienvenida + invitación a herramientas + cuestionario de encuadre automáticos',
            'N°3 — Cualificación de leads entrantes: scoring automático y enrutamiento al comercial adecuado',
            'N°4 — Seguimiento NPS trimestral: envío automático + agregación de resultados en dashboard',
          ],
        },
        {
          title: 'Automatizaciones 5 a 8: finanzas, RRHH y operaciones',
          paragraphs: [
            'La automatización n°5 es el seguimiento de las facturas impagadas — la más rentable en términos de flujo de caja. Un workflow monitoriza las facturas con plazo vencido y envía seguimientos progresivos: email cordial en D+3, seguimiento más firme en D+10, y alerta al director en D+20 para pasar a un seguimiento telefónico o a un requerimiento. Las PYME que despliegan este workflow reducen sus plazos medios de pago de 8 a 12 días.',
            'La automatización n°7 es la recopilación y agregación de los informes de actividad semanales. Cada viernes a las 16h, cada miembro del equipo recibe un formulario de 5 preguntas (logros de la semana, bloqueos, previsiones para la semana siguiente). Las respuestas se agregan automáticamente en un documento Google Docs estructurado y se envían al director cada lunes a las 8h. Este workflow sustituye las reuniones de sincronización semanales que a menudo aportan escaso valor.',
          ],
          bullets: [
            'N°5 — Seguimiento impagados: D+3/D+10/D+20 progresivo → -8 a -12 días de plazo medio de pago',
            'N°6 — Onboarding RRHH: acceso a herramientas, documentos a firmar, checklist D1/D7/D30 automáticos',
            'N°7 — Informe semanal del equipo: recopilación de formulario el viernes → síntesis para el director el lunes',
            'N°8 — Monitoring del sitio web: alerta inmediata si el tiempo de respuesta > 3s o error 500',
          ],
        },
        {
          title: 'Automatizaciones 9 y 10: marketing y vigilancia',
          paragraphs: [
            'La automatización n°9 es la publicación social multi-canal desde un único calendario editorial. Usted redacta el contenido una vez en una tabla de Airtable (o Notion), con una columna por red (LinkedIn, Twitter/X, Facebook) y una fecha de publicación. El workflow de n8n monitoriza la tabla, y el día D a la hora prevista, publica el contenido correcto en la red correcta con los visuales asociados — sin ninguna intervención manual. El ahorro de tiempo es de 3 a 5h por semana para una presencia en 3 redes.',
            'La automatización n°10 es la vigilancia competitiva y sectorial automatizada. Un workflow monitoriza las palabras clave de su sector en Google News, vigila los nuevos contenidos publicados por sus competidores (vía RSS), y le envía cada mañana un resumen de 10 a 15 noticias relevantes — resumidas en 2 líneas cada una por un LLM. Lo que llevaba 30 a 45 minutos de vigilancia manual diaria se condensa en 5 minutos de lectura de un email.',
          ],
          bullets: [
            'N°9 — Publicación social desde Airtable/Notion: 1 fuente, 3 redes, 0 copiar-pegar',
            'N°10 — Vigilancia automatizada: Google News + RSS competidores + resumen LLM → 5 min/día vs 45 min',
            'Complejidad de despliegue: N°1 a N°5 son las más sencillas (1-2h cada una)',
            'N°8 (monitoring) y N°10 (vigilancia IA) son las más sofisticadas (4-8h)',
            'Priorización recomendada: empezar por N°1 (seguimiento de presupuesto) — ROI en D+1',
          ],
        },
      ],
      conclusion: 'Estas 10 automatizaciones no son proyectos ambiciosos — cada una se construye en 1 a 8 horas con n8n. La clave no es desplegarlas todas a la vez, sino empezar por la primera (seguimiento de presupuesto) esta semana, medir la ganancia, y construir la segunda el mes siguiente. En 3 meses, habrá transformado su forma de trabajar. Si quiere un acompañamiento para identificar y desplegar sus automatizaciones prioritarias, proponemos sesiones de 4h para construir su primer workflow juntos.',
      keyTakeaways: [
        'Estos 10 workflows ahorran 8 a 12h/semana en una PYME de 10 a 30 empleados',
        'Empezar por el seguimiento de presupuesto automatizado: ROI medido desde D+1, +18 a +30% de conversión',
        'El seguimiento de impagados automatizado reduce los plazos de pago de 8 a 12 días en promedio',
        'La publicación social desde un calendario único ahorra 3 a 5h/semana en 3 redes',
        'Priorizar por impacto/complejidad: los workflows 1 a 5 se construyen en 1 a 2h cada uno',
      ],
    },
  },

  {
    id: 'assistant-ia-sur-vos-donnees',
    title: 'Construir un asistente IA personalizado sobre sus datos de empresa',
    excerpt: 'RAG, embeddings, base vectorial... Cómo crear un chatbot que responda con precisión a las preguntas de su equipo basándose en sus documentos internos — sin enviar sus datos a OpenAI.',
    category: 'Inteligencia Artificial & RAG',
    date: 'Diciembre 2024',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800',
    tags: ['RAG', 'Asistente IA', 'LLM', 'Supabase', 'Datos internos'],
    available: true,
    body: {
      intro: 'Imagine poder hacer preguntas a su base documental interna en *lenguaje natural* y obtener respuestas precisas con las fuentes citadas. "¿Cuáles son las condiciones de garantía de nuestro producto X?" o "¿Qué cláusula del contrato Dupont se aplica en caso de retraso?". Eso es exactamente lo que permite la arquitectura **RAG** (Retrieval-Augmented Generation). Esto ya no es ciencia ficción — llevamos desplegando este tipo de sistemas para **PYME francesas desde 2023**. Aquí le explicamos cómo funciona y cómo construirlo.',
      sections: [
        {
          title: 'Entender el RAG: la lógica en 4 pasos',
          paragraphs: [
            'El **RAG** (Retrieval-Augmented Generation) es una arquitectura que combina un *motor de búsqueda semántica* con un **LLM**. A diferencia de un LLM solo (como ChatGPT), el RAG no "sabe" de antemano lo que hay en sus documentos — los busca dinámicamente en cada pregunta. Aquí están los **4 pasos**: (1) *Ingesta*: sus documentos (PDF, Word, emails, páginas web) se dividen en *chunks* de **200 a 500 palabras**, y cada chunk se transforma en un **vector numérico** (embedding) que representa su sentido semántico. Estos vectores se almacenan en una **base de datos vectorial**.',
            'Ante una pregunta del usuario, (2) la pregunta también se transforma en un vector, (3) los chunks semánticamente más cercanos se recuperan (típicamente los 3 a 8 más relevantes), y (4) estos chunks se inyectan en el prompt del LLM con la pregunta: "Basándote únicamente en estos extractos, responde a esta pregunta". El LLM genera entonces una respuesta anclada en su documentación real — y no una alucinación inventada de principio a fin.',
          ],
          bullets: [
            'Ingesta: división en chunks → embedding → almacenamiento en base vectorial',
            'Query: pregunta → embedding → búsqueda de los k-vecinos más cercanos',
            'Aumentación: inyección de los chunks en el contexto del prompt LLM',
            'Generación: el LLM responde basándose únicamente en los extractos proporcionados',
            'Ventaja clave: el LLM cita sus fuentes — las respuestas son verificables',
          ],
        },
        {
          title: 'La stack técnica para una PYME francesa',
          paragraphs: [
            'Para una PYME francesa preocupada por la confidencialidad de los datos, nuestra stack de referencia es: Supabase con la extensión pgvector como base vectorial (gratuito hasta 500 MB de vectores, alojable en Europa), la API Anthropic Claude como LLM (política de confidencialidad Enterprise: los datos no se usan para el entrenamiento), y n8n para la orquestación del pipeline de ingesta y de query. La interfaz de usuario puede ser tan simple como un formulario de Typeform o tan sofisticada como una app React según sus necesidades.',
            'La ingesta de documentos con esta stack funciona así: un workflow de n8n monitoriza una carpeta de Google Drive (o un email), extrae el texto de los PDF (mediante la API unstructured.io o pdfplumber), divide en chunks con un overlap de 50 palabras, genera los embeddings mediante la API de Voyage AI (especializada y más económica que OpenAI Ada), y almacena los vectores + el texto original en Supabase. Para 1.000 documentos de 10 páginas, el coste de ingesta es de 2 a 5 € en embeddings.',
          ],
          bullets: [
            'Base vectorial: Supabase pgvector (RGPD, alojable en Europa, gratuito hasta 500MB)',
            'LLM: Claude Haiku (económico, 0,25$/M tokens) o Claude Sonnet (potente, 3$/M tokens)',
            'Embeddings: Voyage AI (6× más barato que OpenAI Ada, mejor rendimiento en español/francés)',
            'Orquestación: n8n (ingesta automática desde Google Drive o email)',
            'Interfaz: Typeform para un MVP en 1 día, app React para una solución de producción',
          ],
        },
        {
          title: 'Los errores a evitar para un RAG que funcione de verdad',
          paragraphs: [
            'El primer error es la calidad de los chunks. Un chunk demasiado largo diluye la información y degrada la precisión de la búsqueda. Un chunk demasiado corto pierde el contexto necesario para que el LLM responda correctamente. Nuestra regla empírica: 300 a 400 tokens (es decir, 200-300 palabras) con un overlap de 50 tokens entre chunks consecutivos. Para documentos muy estructurados (contratos, fichas técnicas), dividir por sección lógica en lugar de por número fijo de palabras mejora significativamente los resultados.',
            'El segundo error es la calidad de los documentos fuente. Un RAG es tan bueno como la calidad de su base documental. Documentos mal escaneados (OCR deficiente), versiones obsoletas no eliminadas, o documentos muy redundantes degradan los resultados. Antes de lanzar la ingesta, dedique 2h a limpiar su base documental: eliminar duplicados, verificar que las versiones estén actualizadas, y asegurarse de que los PDF son textuales (no imágenes escaneadas sin OCR).',
          ],
          bullets: [
            'Tamaño óptimo de los chunks: 300 a 400 tokens con overlap de 50 tokens',
            'Para documentos estructurados (contratos): dividir por sección lógica, no por número de palabras',
            'Limpiar la base documental antes de la ingesta: duplicados, versiones obsoletas, PDFs no textuales',
            'Probar con 20 preguntas representativas antes de la puesta en producción',
            'Indicador de calidad: si el LLM dice "no encuentro información" con demasiada frecuencia → problema de chunking o de cobertura documental',
          ],
        },
      ],
      conclusion: 'Un asistente RAG sobre sus datos de empresa no es un proyecto de 6 meses — es un MVP desplegable en 2 a 4 semanas con las herramientas adecuadas. La inversión se amortiza rápidamente en cuanto su equipo deja de buscar 20 minutos una información que está en un PDF olvidado. Si quiere que construyamos este sistema para su documentación interna, contáctenos para un presupuesto.',
      keyTakeaways: [
        'El RAG = motor de búsqueda semántica + LLM: responde con precisión desde sus documentos',
        'Stack recomendada: Supabase pgvector + Claude + Voyage AI + n8n — 100% compatible con RGPD',
        'Tamaño óptimo de los chunks: 300 a 400 tokens con overlap de 50 tokens',
        'Coste de ingesta de 1.000 documentos: 2 a 5€ — coste por consulta: < 0,01€ por pregunta',
        'Limpiar la base documental antes de la ingesta: es el 80% de la calidad del resultado final',
      ],
    },
  },

  {
    id: 'llm-open-source-vs-gpt4',
    title: 'LLM open source vs GPT-4: ¿qué modelo para su uso?',
    excerpt: 'Llama 3, Mistral, Gemma vs GPT-4o, Claude Sonnet... El rendimiento de los modelos open source ha alcanzado a los propietarios en muchos casos de uso. Cómo elegir según sus restricciones reales.',
    category: 'Inteligencia Artificial & RAG',
    date: 'Enero 2025',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&q=80&w=800',
    tags: ['LLM', 'Open Source', 'Mistral', 'GPT-4', 'Claude'],
    available: true,
    body: {
      intro: 'En *enero de 2025*, la frontera entre modelos de IA **propietarios** y **open source** nunca ha sido tan difusa. **Llama 3.3 70B** de Meta supera a GPT-4 de finales de 2023 en varios benchmarks. **Mistral Large 2** rivaliza con Claude Sonnet en las tareas de razonamiento en francés. Para una PYME que integra **LLM** en sus procesos, la elección ya no es "OpenAI o nada" — es una decisión que depende de sus restricciones de *coste*, *confidencialidad* y *rendimiento*.',
      sections: [
        {
          title: 'El estado de fuerzas en 2025',
          paragraphs: [
            'En el lado propietario, tres actores dominan: OpenAI con GPT-4o (modelo flagship equilibrado), Anthropic con Claude Sonnet 3.5 (excelente en razonamiento complejo y en francés), y Google con Gemini 1.5 Pro (contexto de 1 millón de tokens, ideal para documentos muy largos). Estos modelos tienen la ventaja de estar disponibles inmediatamente mediante API, sin infraestructura que gestionar, con SLA de disponibilidad garantizados.',
            'En el lado open source, Llama 3.3 (Meta), Mistral Large 2 (francés) y Qwen 2.5 72B (Alibaba) son las referencias de principios de 2025. Sus rendimientos en tareas habituales (resumen, extracción de información, redacción) son comparables a los modelos propietarios de la generación anterior. La ventaja decisiva: pueden autoalojarse en su infraestructura, lo que elimina cualquier envío de datos a un tercero y reduce los costes un 70 a 90% para los usos de alto volumen.',
          ],
          bullets: [
            'GPT-4o: mejor equilibrio rendimiento/coste en OpenAI, fuerte en multimodal',
            'Claude Sonnet 3.5: nuestra referencia para las tareas complejas en francés',
            'Gemini 1.5 Pro: único modelo con contexto de 1M tokens (análisis de documentos muy largos)',
            'Llama 3.3 70B: nivel GPT-4 inicio 2024, autoalojable, gratuito',
            'Mistral Large 2: modelo francés, excelente en RAG, disponible en Mistral API y Ollama',
          ],
        },
        {
          title: 'Los criterios de elección según su caso de uso',
          paragraphs: [
            'El primer criterio es la confidencialidad de los datos. Si envía datos de clientes, información financiera o documentos contractuales a un LLM, debe asegurarse de que el proveedor cumple con el RGPD. OpenAI Enterprise y Anthropic Enterprise proponen acuerdos de tratamiento de datos (DPA) y garantizan que sus datos no se usan para el entrenamiento. Pero si su nivel de exigencia es máximo, el autoalojamiento de un modelo open source en su servidor es la única opción que garantiza que ningún dato sale de su infraestructura.',
            'El segundo criterio es el coste a escala. Para usos de bajo volumen (unos cientos de solicitudes por día), las APIs propietarias son perfectamente económicas — 50 a 200 €/mes para la mayoría de las PYME. Pero para usos intensivos (tratamiento automático de miles de documentos, chatbot en producción con alto volumen de solicitudes), el coste de las APIs propietarias puede alcanzar 1.000 a 5.000 €/mes. Un servidor GPU alquilado para ejecutar Llama 3 70B cuesta 0,60 a 1,20 €/hora — rentable a partir de 500 solicitudes/día.',
          ],
          bullets: [
            'Datos muy sensibles (médico, jurídico, financiero): autoalojamiento open source obligatorio',
            'Volumen < 500 req/día: API propietaria (OpenAI/Anthropic) — sencillo y económico',
            'Volumen > 500 req/día: evaluar el autoalojamiento Llama/Mistral en servidor GPU',
            'Rendimiento en español/francés: Mistral Large 2 > GPT-4o en la mayoría de tareas',
            'Contexto muy largo (> 100k tokens): Gemini 1.5 Pro sin competencia',
          ],
        },
        {
          title: 'Nuestra recomendación práctica por perfil',
          paragraphs: [
            'Para una PYME que empieza con la IA y quiere un resultado rápido sin infraestructura que gestionar: empiece con la API de Anthropic (Claude Haiku para las tareas simples, Sonnet para las tareas complejas). La relación calidad/precio es excelente, la API es estable y bien documentada, y Claude es especialmente fuerte en francés y en razonamiento estructurado. Presupuesto típico: 30 a 150 €/mes para usos estándar de PYME.',
            'Para una empresa que gestiona datos sensibles o que prevé un volumen elevado: invierta 2 a 4 semanas en desplegar Mistral o Llama mediante Ollama en un VPS GPU (Scaleway o OVH ofrecen GPU A100 en Francia). El esfuerzo inicial es real pero el ROI es rápido, y mantiene un control total sobre sus datos. Mistral Large 2 es nuestra recomendación para los equipos que trabajan en francés — el modelo fue entrenado con una fuerte representación del francés y destaca en documentos jurídicos y contractuales.',
          ],
          bullets: [
            'Inicio rápido: Anthropic API (Claude Haiku 0,25$/M + Sonnet 3$/M tokens)',
            'Datos sensibles: Mistral Large 2 mediante Ollama en VPS GPU OVH/Scaleway (Francia)',
            'Uso intensivo: Llama 3.3 70B autoalojado, GPU A100 a 0,90€/h en Scaleway',
            'Caso mixto: API para el desarrollo, autoalojamiento para producción',
            'Evaluar siempre con sus datos reales — los benchmarks genéricos no predicen el rendimiento en su caso de uso específico',
          ],
        },
      ],
      conclusion: 'El mejor LLM no existe — existe el mejor LLM para su caso de uso, sus datos y sus restricciones de presupuesto. En 2025, los modelos open source han alcanzado un nivel que los hace viables para la mayoría de los usos de PYME, y la competencia ha obligado a los actores propietarios a reducir significativamente sus precios. Es un excelente momento para evaluar seriamente la IA en sus procesos. Si quiere un acompañamiento para elegir e integrar el modelo adecuado, contáctenos.',
      keyTakeaways: [
        'Llama 3.3 70B y Mistral Large 2 alcanzan el nivel de GPT-4 inicio 2024 en muchas tareas',
        'Para datos sensibles, el autoalojamiento open source es la única opción 100% confidencial',
        'Umbral de rentabilidad del autoalojamiento: aproximadamente 500 solicitudes/día',
        'Mistral Large 2 es nuestra recomendación para las PYME francesas (excelente en francés, RGPD)',
        'Evalúe siempre con sus datos reales — los benchmarks genéricos no predicen su caso de uso',
      ],
    },
  },

  {
    id: '30-contenus-par-mois-ia',
    title: 'Crear 30 contenidos al mes con 2h de trabajo gracias a la IA',
    excerpt: 'Sistema editorial completo para generar, refinar y publicar 30 contenidos mensuales en todos sus canales — sin sacrificar su voz ni su expertise — en 2h de trabajo semanal.',
    category: 'Contenido & Marketing IA',
    date: 'Noviembre 2024',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    tags: ['Contenido', 'IA', 'Marketing', 'Productividad', 'LinkedIn'],
    available: true,
    body: {
      intro: '**30 contenidos al mes**: 1 artículo de blog, 12 posts de LinkedIn, 8 newsletters, 8 stories o reels, 1 estudio de caso. No es un objetivo para un equipo de 5 content managers — es lo que **una sola persona** puede producir en **2 horas de trabajo por semana** con un *sistema editorial IA* bien engrasado. No es magia y no es contenido de baja calidad: es un **proceso reproducible** que hemos construido y documentado. Aquí le explicamos cómo.',
      sections: [
        {
          title: 'El método del \'contenido raíz\': producir 1 para tener 10',
          paragraphs: [
            'El principio fundamental del sistema es el contenido raíz. Cada mes, produce 1 solo contenido de fondo — un artículo de 1.500 palabras, un episodio de podcast de 30 minutos, o un estudio de caso detallado. Este contenido raíz es su materia prima. A partir de él, la IA extrae y reformatea: 4 posts de LinkedIn (uno por sección principal), 2 newsletters (resumen + ángulo diferente), 1 hilo de Twitter, extractos para stories, y títulos de artículos secundarios para el SEO.',
            'La clave es que se concentra en un solo contenido de alta calidad, anclado en su expertise real. Ahí es donde se invierte su tiempo humano — 1h30 a 2h por semana. La IA gestiona el reformateo y la adaptación a los diferentes formatos y canales. Resultado: una presencia editorial coherente en todos sus canales, con un tono unificado que viene de usted — porque todo deriva del mismo contenido fuente escrito por usted.',
          ],
          bullets: [
            '1 contenido raíz/semana (artículo o podcast) → 8 a 10 contenidos derivados',
            'Su tiempo invertido: 90 a 120 minutos solo en el contenido raíz',
            'La IA gestiona: reformateo, adaptación de tono/formato por canal, extracción de citas',
            'Coherencia garantizada: todos los contenidos derivan de la misma fuente de expertise',
          ],
        },
        {
          title: 'El sistema de prompts para mantener su voz',
          paragraphs: [
            'El principal riesgo de los contenidos IA es la pérdida de voz — esos textos lisos y genéricos que huelen a ChatGPT a kilómetros. La solución es un \'system prompt\' personalizado que codifica su estilo de escritura. Para construirlo, recopile 5 a 10 de sus mejores contenidos pasados y pida a Claude que extraiga las características estilísticas: longitud media de las frases, tipo de ejemplos utilizados, registro de lenguaje, estructuras retóricas recurrentes. El resultado es una guía de estilo que inyecta en cada prompt.',
            'Un system prompt eficaz para una PYME francesa se parece a: "Escribes para un directivo de PYME francesa. Tono directo y concreto, frases cortas, datos cuantificados sistemáticamente, ejemplos extraídos de la industria francesa. Evitar: la jerga inglesa no traducida, las metáforas vacías, las generalidades sin cifras. Estructura: entrada con un dato cuantificado, desarrollo en pasos accionables, conclusión con CTA claro." Este prompt por sí solo transforma la calidad de las salidas de IA.',
          ],
          bullets: [
            'System prompt personalizado: extrae su estilo de sus 5-10 mejores contenidos',
            'Elementos clave del estilo a codificar: longitud de frases, tipo de ejemplos, registro, estructuras',
            'Probar el prompt en 3 contenidos antes de industrializarlo',
            'Actualizar el prompt cada 3 meses a medida que su estilo evoluciona',
          ],
        },
        {
          title: 'La infraestructura técnica: Airtable, n8n y las APIs',
          paragraphs: [
            'El sistema gira en torno a una tabla de Airtable (o Notion) que sirve de calendario editorial centralizado. Cada fila es un contenido raíz con sus metadatos: tema, ángulo, público objetivo, palabras clave SEO, estado (idea/en curso/listo/publicado). Una vez validado el contenido raíz, un botón en Airtable activa un workflow de n8n que genera automáticamente los 8 a 10 contenidos derivados mediante la API de Claude, los almacena en las columnas correspondientes de la tabla, y notifica que los contenidos están listos para revisión.',
            'La revisión lleva 20 a 30 minutos por semana: repasa los contenidos derivados, ajusta lo que suena forzado, añade detalles específicos que la IA no podía conocer (un cliente reciente, una anécdota sobre el terreno). Es este paso humano el que transforma un contenido IA aceptable en contenido experto memorable. El workflow de publicación (Airtable → n8n → Buffer/Brevo/WordPress) publica después automáticamente según el calendario definido.',
          ],
          bullets: [
            'Calendario editorial centralizado: Airtable o Notion con estados y metadatos',
            'Activación del workflow: botón Airtable → n8n → API Claude → relleno de columnas derivadas',
            'Revisión humana: 20-30 min/semana para añadir las anécdotas de campo y ajustar el tono',
            'Publicación automática: n8n → Buffer (social) + Brevo (newsletter) + WordPress (blog)',
            'Coste mensual del sistema: 30 a 80€ (Airtable + Claude API + Buffer) para 30 contenidos',
          ],
        },
      ],
      conclusion: '30 contenidos al mes con 2h de trabajo semanal es un objetivo realista — no una promesa de marketing. La condición es una inversión inicial de 2 a 3 jornadas para construir el sistema, redactar el system prompt, y configurar la infraestructura. Después de eso, es un proceso que funciona solo. Si quiere que construyamos este sistema para usted llave en mano, contáctenos.',
      keyTakeaways: [
        '1 contenido raíz/semana genera 8 a 10 contenidos derivados mediante la IA',
        'El system prompt personalizado es la clave para mantener su voz en los contenidos IA',
        'Infraestructura: Airtable + n8n + Claude API + Buffer — coste 30 a 80€/mes',
        '20 a 30 min/semana de revisión humana transforman contenidos IA aceptables en contenidos expertos',
        'Inversión inicial: 2 a 3 días para construir el sistema, luego < 2h/semana para hacerlo funcionar',
      ],
    },
  },

  {
    id: 'personal-branding-linkedin-dirigeants',
    title: 'Personal branding en LinkedIn: la estrategia completa para los directivos',
    excerpt: 'Un directivo visible en LinkedIn genera en promedio 3 a 5 veces más leads entrantes que su empresa. El método completo para construir una audiencia cualificada sin dedicarle 2 horas al día.',
    category: 'Contenido & Marketing IA',
    date: 'Enero 2025',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=800',
    tags: ['LinkedIn', 'Personal Branding', 'Directivos', 'Inbound', 'Contenido'],
    available: true,
    body: {
      intro: '**LinkedIn** cuenta con **29 millones de usuarios activos** en Francia. Entre ellos, **menos del 1%** publica contenido regularmente. Ese **1%** capta el **99% de la visibilidad**. Para un directivo de PYME, estar en ese 1% no es un esfuerzo titánico — es una **decisión estratégica** y un *sistema* a mantener. Aquí le explicamos por qué y sobre todo cómo.',
      sections: [
        {
          title: 'Por qué el personal branding del directivo supera a la página de empresa',
          paragraphs: [
            'Los datos son contundentes: una publicación de un individuo recibe en promedio 8 veces más engagement que una publicación idéntica publicada en una página de empresa. LinkedIn favorece algorítmicamente a los creadores individuales sobre las páginas corporativas — el algoritmo fue diseñado para fomentar la red profesional humana, no la comunicación institucional. Un directivo con 5.000 seguidores comprometidos genera más leads que la página de LinkedIn de su empresa con 50.000 seguidores pasivos.',
            'Más allá de los datos, hay un efecto de confianza: los clientes B2B compran personas antes de comprar empresas. Ver al directivo compartir su expertise, sus bastidores, sus convicciones crea un vínculo que precede y acelera la venta. Según nuestras observaciones en los clientes que acompañamos, un directivo activo en LinkedIn recibe en promedio 3 a 5 veces más solicitudes entrantes después de 6 meses de presencia regular que antes.',
          ],
          bullets: [
            'Publicaciones individuales vs página de empresa: 8x más engagement en promedio',
            'Algoritmo de LinkedIn favorece a los creadores individuales sobre las páginas corporativas',
            '+3 a 5x de solicitudes entrantes después de 6 meses de presencia regular',
            'Los clientes B2B confían en una persona antes de confiar en una empresa',
          ],
        },
        {
          title: 'La estrategia de contenido: qué publicar y con qué frecuencia',
          paragraphs: [
            'La regla de oro es la siguiente: el 80% de su contenido debe aportar valor a su audiencia sin pedir nada a cambio. El 20% puede promocionar su actividad. El mix editorial que recomendamos a los directivos: 40% de expertise (enseñanzas extraídas de sus proyectos, errores cometidos, aprendizajes), 30% de bastidores (su forma de trabajar, su visión, sus convicciones), 20% de actualidad sectorial comentada (no reposteada — comentada con su punto de vista), y 10% de promoción de sus servicios o resultados de clientes.',
            'Sobre la frecuencia: 3 posts por semana es el óptimo para la mayoría de los directivos. Menos, y el algoritmo le olvida entre cada post. Más, y corre el riesgo de agotar a su audiencia (y a usted mismo). La regularidad supera a la intensidad: 3 posts/semana durante 52 semanas hace más que 10 posts/semana durante 2 meses. Elija una frecuencia que pueda mantener 12 meses, incluso en sus semanas más cargadas.',
          ],
          bullets: [
            'Mix editorial: 40% expertise / 30% bastidores / 20% actualidad comentada / 10% promoción',
            'Frecuencia óptima: 3 posts/semana — regularidad > intensidad',
            'Formato que mejor funciona en 2025: texto estructurado con subtítulos (no carruseles)',
            'Evitar: las citas inspiradoras genéricas, el positivismo de fachada, los posts demasiado largos',
            'Cuidar el gancho: las 2 primeras líneas determinan el 70% de la tasa de lectura',
          ],
        },
        {
          title: 'El sistema para mantenerlo a largo plazo sin dedicarle 2h al día',
          paragraphs: [
            'El mayor obstáculo para el personal branding de los directivos no es la falta de ideas — es la falta de tiempo. La solución es un sistema de batch creation: una sesión de 2h por semana (idealmente el viernes por la mañana) durante la cual redacta los 3 posts de la semana siguiente. No escribe cuando está inspirado — escribe a hora fija, en ráfaga, y luego programa. Buffer y la función nativa de programación de LinkedIn hacen esto trivial.',
            'Para las ideas, mantenga un \'diario de contenidos\' — una nota en su teléfono donde captura en tiempo real los insights de sus semanas: una pregunta pertinente de un cliente, un error cometido y lo que aprendió, una cifra inesperada de un proyecto, una convicción que incomoda. Estas notas en bruto son su materia prima. Al final de la semana, tiene 5 a 10 gérmenes de ideas entre los que elegir los 3 mejores. La IA (Claude) transforma después cada germen en un post estructurado que usted revisa y personaliza en 10 minutos.',
          ],
          bullets: [
            'Batch creation: 2h por semana para escribir los 3 posts de la semana siguiente',
            'Diario de contenidos: capturar los insights en tiempo real en una nota del teléfono',
            'Claude para la estructuración: germen de idea → borrador de post en 2 minutos → revisión 10 min',
            'Programación: Buffer o LinkedIn nativo para publicar a las horas óptimas (mar/jue 8-9h)',
            'Interactuar los primeros 60 minutos tras la publicación: responder cada comentario impulsa el algoritmo',
          ],
        },
      ],
      conclusion: 'Un personal branding efectivo en LinkedIn no es una cuestión de talento — es una cuestión de sistema y constancia. Los directivos que generan leads mediante LinkedIn no son necesariamente los oradores más brillantes; son los que han decidido compartir su expertise regularmente y se mantienen en ello. Empiece mañana, no cuando "tenga tiempo". Si quiere un acompañamiento para definir su estrategia y poner en marcha el sistema editorial, proponemos sesiones de coaching dedicadas.',
      keyTakeaways: [
        'Menos del 1% de los miembros de LinkedIn publica regularmente — ese 1% capta el 99% de la visibilidad',
        'Publicaciones individuales = 8x más engagement que las páginas de empresa',
        'Mix editorial: 40% expertise / 30% bastidores / 20% actualidad comentada / 10% promo',
        'Frecuencia óptima: 3 posts/semana — la regularidad supera a la intensidad a lo largo de 12 meses',
        'Batch creation: 2h/semana en sesión dedicada para escribir los 3 posts de la semana siguiente',
      ],
    },
  },

  {
    id: 'convaincre-equipe-outils-ia',
    title: 'Cómo convencer a su equipo de adoptar las herramientas de IA en 30 días',
    excerpt: 'La resistencia al cambio es el primer obstáculo para la adopción de la IA en la empresa. Plan de acción concreto en 4 fases para transformar escépticos en embajadores.',
    category: 'Consultoría & Formación',
    date: 'Octubre 2024',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    tags: ['Formación', 'Change Management', 'IA', 'Adopción', 'Equipo'],
    available: true,
    body: {
      intro: 'Ha probado las herramientas de IA, está convencido del potencial, quiere desplegarlo. Y entonces se encuentra con el muro más difícil de franquear en cualquier **transformación digital**: la *resistencia de su propio equipo*. "Es complicado", "no tenemos tiempo para aprenderlo", "va a reemplazar nuestros empleos"... Estas objeciones son legítimas y merecen una respuesta — no un decreto. Aquí tiene un **plan de acción en 4 fases** para transformar escépticos en embajadores en **30 días**.',
      sections: [
        {
          title: 'Entender las verdaderas razones de la resistencia',
          paragraphs: [
            'La resistencia a la IA en la empresa casi nunca es una resistencia a la tecnología en sí — es un miedo, a menudo legítimo, a tres cosas: el miedo a la obsolescencia (mi trabajo va a ser automatizado), el miedo al fracaso (voy a tener que aprender una nueva forma de trabajar y hacerlo mal delante de mis compañeros), y el miedo a la sobrecarga (además de mi trabajo habitual, ahora debo aprender nuevas herramientas). Nombrar estos miedos explícitamente en una reunión de equipo — incluso antes de hablar de despliegue — es el primer paso indispensable.',
            'Un diagnóstico de las resistencias lleva 1 hora: organice una ronda de mesa o un formulario anónimo con 3 preguntas: "¿Qué le preocupa de la adopción de la IA?" / "¿Qué tarea de su día a día le agota más?" / "¿Qué le ayudaría a sentirse cómodo con estas herramientas?". Las respuestas le darán un cuadro preciso de los bloqueos — y a menudo, las tareas que agotan son exactamente las que la IA puede automatizar, lo que abre un diálogo constructivo.',
          ],
          bullets: [
            '3 miedos fundamentales: obsolescencia / fracaso / sobrecarga — nómbrelos explícitamente',
            'Diagnóstico en 1h: formulario anónimo antes de cualquier reunión de despliegue',
            'Nunca desplegar la IA como un "proyecto de IT" impuesto desde arriba — co-construir con el equipo',
            'Identificar los "early adopters" naturales en el equipo — serán sus embajadores',
          ],
        },
        {
          title: 'El plan en 4 fases en 30 días',
          paragraphs: [
            'Semana 1 — Demostración por el resultado: no muestre la herramienta, muestre el resultado. Tome una tarea real y frustrante de su equipo (el seguimiento de los presupuestos, la redacción de las actas, la clasificación de emails), y muestre en directo cómo la IA la reduce un 80%. La demo debe durar 10 minutos como máximo y terminar con "¿alguien quiere probarlo con su propia tarea?". Esta pregunta crea un compromiso voluntario — mucho más potente que una formación impuesta. Semana 2 — Experimentación guiada: cada miembro del equipo identifica una tarea personal a automatizar y recibe acompañamiento en su primera experiencia. El objetivo no es la perfección — es un primer éxito rápido que crea la convicción.',
            'Semana 3 — Compartir en equipo: organice una sesión de 30 minutos en la que cada participante comparte su experiencia (éxitos, fracasos, sorpresas). Estos testimonios de pares tienen un impacto 5 veces superior a cualquier presentación del equipo directivo. Semana 4 — Integración en los procesos: formalice los usos que han funcionado en procedimientos simples (1 página máx. por herramienta), y designe un "referente IA" en el equipo — el early adopter más entusiasta — que será el punto de contacto para las preguntas futuras.',
          ],
          bullets: [
            'S1 — Demo resultado (10 min): tarea real → resultado concreto → pregunta "¿quién quiere probarlo?"',
            'S2 — Experimentación guiada: 1 tarea personal por persona, con acompañamiento',
            'S3 — Compartir con pares: sesión 30 min, testimonios del equipo → 5x más impacto que la dirección',
            'S4 — Integración en procesos: procedimientos simples + designación de un referente IA',
            'Medir la adopción: tasa de uso semanal en D+30 y D+90',
          ],
        },
        {
          title: 'Los errores que hacen fracasar la adopción',
          paragraphs: [
            'El error n°1 es desplegar demasiadas herramientas simultáneamente. Cada nueva herramienta requiere atención y aprendizaje — sobrecargar al equipo con 5 herramientas a la vez garantiza el abandono de todas. Empiece con una sola herramienta, en un solo caso de uso, con un grupo piloto de 3 a 5 personas voluntarias. Domine esa herramienta antes de pasar a la siguiente.',
            'El error n°2 es medir la adopción por la disponibilidad de la herramienta (el software está instalado, los accesos están creados) en lugar de por el uso real. Una herramienta instalada y no utilizada no es adopción — es un desperdicio. Mida la frecuencia de uso real, las tareas procesadas, y sobre todo la autoevaluación del equipo sobre su comodidad con la herramienta en D+30 y D+90.',
          ],
          bullets: [
            'Error clásico: desplegar 5 herramientas a la vez → adopción de ninguna',
            'Empezar con 1 herramienta, 1 caso de uso, 3 a 5 voluntarios — dominar antes de ampliar',
            'Medir el uso real, no la disponibilidad de los accesos',
            'Prever tiempo de formación en los agendas — no "además del trabajo"',
            'Celebrar los éxitos públicamente: el equipo que gana tiempo en una tarea merece ser citado',
          ],
        },
      ],
      conclusion: 'La adopción de herramientas IA en la empresa es ante todo un proyecto humano — no un proyecto técnico. El despliegue lleva un día. Convencer a un equipo lleva 30 días si hace las cosas en el orden correcto. Invierta en la comprensión de las resistencias, empiece con voluntarios, y deje que los resultados hablen. Si quiere que animemos esta dinámica de adopción en su empresa, proponemos acompañamientos de 30 días llave en mano.',
      keyTakeaways: [
        '3 miedos fundamentales detrás de la resistencia: obsolescencia, fracaso público, sobrecarga',
        'Mostrar el resultado antes que la herramienta: demo de 10 min sobre una tarea real del equipo',
        'Los testimonios de pares tienen 5x más impacto que las presentaciones de la dirección',
        'Desplegar 1 herramienta, 1 caso de uso, 3-5 voluntarios — dominar antes de ampliar',
        'Medir el uso real en D+30 y D+90, no la disponibilidad de los accesos',
      ],
    },
  },

  {
    id: 'audit-digital-pme-12-points',
    title: 'La auditoría digital para PYME: 12 puntos a verificar imprescindiblemente',
    excerpt: 'Antes de invertir en lo digital, saber dónde está. Las 12 dimensiones de una auditoría digital completa para PYME — con las preguntas exactas a formular y los indicadores a medir.',
    category: 'Consultoría & Formación',
    date: 'Febrero 2025',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    tags: ['Auditoría Digital', 'PYME', 'Estrategia', 'Diagnóstico'],
    available: true,
    body: {
      intro: 'La mayoría de las **PYME** que vienen a vernos para mejorar su presencia digital no saben exactamente dónde están. Tienen un sitio web, algunas redes sociales, un CRM quizás, y una sensación vaga de que "podría funcionar mejor". Una **auditoría digital** cambia eso: da una imagen **precisa y cuantificada** de las fortalezas y las lagunas — y permite priorizar las inversiones con una *lógica de impacto* en lugar de por intuición. Aquí están los **12 puntos** que examinamos sistemáticamente.',
      sections: [
        {
          title: 'Puntos 1 a 4: presencia online y captación',
          paragraphs: [
            'El primer punto es el rendimiento SEO: ¿aparece su sitio en las consultas de sus clientes potenciales? Usamos Google Search Console (gratuito) para medir el número de impresiones, clics y la posición media en los últimos 3 meses. Un sitio de buen rendimiento genera al menos 1 clic por cada 10 impresiones en sus consultas principales. Por debajo de este ratio, hay o bien un problema de posicionamiento (demasiado lejos en la página para generar clics), o bien un problema de title/meta description (mensaje inadecuado).',
            'El segundo punto es la presencia local: ¿su ficha de Google Business Profile está completa, verificada y animada regularmente? Para cualquier PYME cuyos clientes son locales o regionales, es a menudo la palanca SEO más rápida. Los puntos 3 y 4 cubren las redes sociales (presencia, regularidad, engagement real) y la publicidad de pago (¿es rentable? ¿el tracking es correcto?). Buscamos sistemáticamente calcular un coste por lead o coste por adquisición real — no solo un coste por clic.',
          ],
          bullets: [
            'SEO: ratio clics/impresiones > 10% en las consultas principales (Search Console)',
            'Google Business Profile: ficha verificada, completa (100% de los campos), animada (1 post/semana)',
            'Redes sociales: tasa de engagement real (no los seguidores — las interacciones/publicación)',
            'Publicidad de pago: coste por lead real calculado, no solo el CPM o CPC',
          ],
        },
        {
          title: 'Puntos 5 a 8: sitio web, conversión y datos',
          paragraphs: [
            'El punto 5 es el rendimiento técnico del sitio: Core Web Vitals, tiempo de carga en móvil, y puntuación de PageSpeed. Una puntuación de PageSpeed en móvil inferior a 50 es una señal de alarma — Google penaliza activamente los sitios lentos en móvil desde 2021. El punto 6 es la tasa de conversión: ¿qué porcentaje de visitantes realizan la acción deseada (formulario, llamada, compra)? La media B2B es del 2 al 5% — por debajo, hay un problema de UX, de mensaje o de confianza.',
            'Los puntos 7 y 8 cubren los analytics y la recopilación de datos. ¿Está Google Analytics 4 correctamente instalado y configurado con objetivos de conversión? ¿El píxel de Meta y las etiquetas de conversión de Google Ads rastrean correctamente los leads? Una auditoría de analytics revela casi siempre datos faltantes o erróneos — y por tanto decisiones tomadas sobre cifras falsas. Hemos auditado empresas que optimizaban sus campañas sobre una tasa de conversión sesgada por un doble tag.',
          ],
          bullets: [
            'PageSpeed móvil: objetivo > 70, auditoría si < 50',
            'Tasa de conversión del sitio: benchmark B2B 2 a 5% — analizar las fricciones si < 1%',
            'GA4: eventos de conversión configurados y verificados (prueba en tiempo real)',
            'Tracking publicitario: verificar la activación de los píxeles con la extensión Tag Assistant',
            'Heatmap: Hotjar o Microsoft Clarity (gratuito) para ver dónde los visitantes abandonan',
          ],
        },
        {
          title: 'Puntos 9 a 12: herramientas, procesos y seguridad',
          paragraphs: [
            'Los puntos 9 y 10 cubren el CRM y las herramientas internas. ¿El CRM es realmente utilizado por el equipo comercial (tasa de entrada > 80% de las interacciones) o es una herramienta fantasma? ¿Los datos de clientes son limpios y están actualizados, o hay duplicados y contactos obsoletos? Un CRM mal utilizado es más peligroso que un CRM ausente — da una falsa impresión de control.',
            'Los puntos 11 y 12 cubren la seguridad y la conformidad con el RGPD. ¿Tiene el sitio un certificado SSL válido, copias de seguridad automáticas diarias, y un sistema de actualizaciones regulares? ¿La política de privacidad está actualizada y es conforme (mención de las cookies de terceros, derecho al olvido, datos de contacto del DPO)? Un sitio de WordPress no actualizado es una brecha de seguridad abierta. Identificamos sistemáticamente sitios con plugins con 2 a 3 años de antigüedad sin actualizar en nuestras auditorías.',
          ],
          bullets: [
            'CRM: tasa de entrada > 80% de las interacciones, datos limpios (< 5% de duplicados)',
            'Herramientas digitales: inventario de suscripciones SaaS activas + coste mensual total',
            'Seguridad: SSL válido, copias de seguridad diarias, actualizaciones semanales de plugins',
            'RGPD: banner de cookies conforme, política de privacidad actualizada, registro de tratamientos',
            'Puntuación global: 12 puntos → escala rojo/naranja/verde para cada dimensión',
          ],
        },
      ],
      conclusion: 'Una auditoría digital de 12 puntos le da en 2 a 3 días una imagen precisa de su situación digital y una lista priorizada de acciones a llevar a cabo. Es la base de toda inversión digital inteligente — sin auditoría, navega a ciegas. Si quiere que realicemos esta auditoría para su empresa con un informe estructurado y un plan de acción, contáctenos.',
      keyTakeaways: [
        'La auditoría cubre 4 dimensiones: captación / sitio y conversión / datos / herramientas y seguridad',
        'Ratio clics/impresiones Search Console > 10%: indicador clave de la salud SEO',
        'PageSpeed móvil < 50 = señal de alarma, Google penaliza activamente desde 2021',
        'Un CRM mal utilizado (< 80% de entrada) es más peligroso que un CRM ausente',
        'La auditoría revela sistemáticamente datos de analytics erróneos y decisiones sesgadas',
      ],
    },
  },

  {
    id: 'dashboard-pilotage-pme-5-kpis',
    title: 'Dashboard de pilotaje para PYME: los 5 KPIs que realmente importan',
    excerpt: 'Demasiados indicadores ahogan la decisión. Las 5 métricas que todo directivo de PYME debe monitorizar cada semana — y cómo mostrarlas en un único cuadro de mando automatizado.',
    category: 'Seguimiento Continuo',
    date: 'Diciembre 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['KPIs', 'Dashboard', 'Pilotaje', 'PYME', 'Data'],
    available: true,
    body: {
      intro: 'La mayoría de los cuadros de mando de PYME tienen el mismo problema: **demasiados indicadores**. *47 métricas* repartidas en 6 pestañas, actualizadas manualmente el primer lunes de cada mes. Resultado: nadie los mira realmente, las decisiones se toman por intuición, y las anomalías se detectan demasiado tarde. Un buen **cuadro de mando de PYME** cabe en una sola pantalla, se actualiza automáticamente, y contiene exactamente **5 indicadores clave**. Aquí están cuáles y por qué.',
      sections: [
        {
          title: 'Los 5 KPIs universales de una PYME de servicios',
          paragraphs: [
            'KPI 1 — La facturación mensual recurrente (MRR) vs objetivo: no la facturación total (que incluye operaciones puntuales no representativas), sino la facturación recurrente — lo que está seguro de facturar el mes que viene si no hace nada nuevo. Es el indicador de salud fundamental de la empresa. La tendencia (al alza, estable, a la baja) en los últimos 6 meses es más importante que la cifra absoluta. KPI 2 — El pipeline comercial: cuántos presupuestos en curso, por qué importe total, y cuál es la tasa de transformación habitual. Esta cifra predice la facturación de los próximos 30 a 90 días.',
            'KPI 3 — El plazo medio de pago: ¿cuántos días transcurren en promedio entre la emisión de una factura y su cobro? Un plazo que se alarga es una señal de alerta temprana sobre la salud de su tesorería. KPI 4 — La tasa de satisfacción del cliente (NPS o puntuación simple): medida trimestralmente como mínimo. Un cliente satisfecho renueva, un cliente insatisfecho se va a menudo sin avisar y a veces haciendo ruido. KPI 5 — La productividad por ETC (o por proyecto): facturación / número de ETC o margen por proyecto. Es el indicador que revela si está creciendo de forma sana o creciendo perdiendo margen.',
          ],
          bullets: [
            'KPI 1 — MRR vs objetivo: tendencia 6 meses más importante que el valor absoluto',
            'KPI 2 — Pipeline: importe total × tasa de transformación = facturación previsible',
            'KPI 3 — Plazo medio de pago: alerta si > 45 días o si tiende a alargarse',
            'KPI 4 — NPS o puntuación de satisfacción trimestral: < 7/10 es una señal de alarma',
            'KPI 5 — Margen por proyecto o facturación/ETC: indicador de crecimiento sano vs crecimiento destructivo',
          ],
        },
        {
          title: 'Construir el dashboard en un día con Looker Studio',
          paragraphs: [
            'Google Looker Studio (anteriormente Data Studio) es gratuito, alojado por Google, y conecta de forma nativa las fuentes de datos más habituales de una PYME: Google Analytics, Google Sheets, y mediante conectores de terceros, los principales CRM y herramientas de facturación. Para un dashboard de 5 KPIs, basta con un día de configuración.',
            'La arquitectura recomendada: (1) su contable o su herramienta de facturación alimenta una hoja de cálculo de Google con la facturación mensual y los plazos de pago — manualmente una vez al mes o automáticamente si su herramienta lo permite; (2) su CRM (HubSpot o Pipedrive) exporta automáticamente el pipeline mediante un conector nativo de Looker Studio; (3) los datos de satisfacción se recopilan mediante un formulario simple y se almacenan en una hoja de cálculo. Looker Studio consolida todo en un cuadro en una sola página, compartible con su equipo directivo.',
          ],
          bullets: [
            'Looker Studio: gratuito, conectores nativos GA4 + Sheets + HubSpot + Pipedrive',
            'Arquitectura recomendada: Sheets (finanzas) + CRM (pipeline) + Forms (satisfacción)',
            'Actualización automática: Sheets conectadas a su herramienta de facturación mediante n8n',
            'Compartir: URL pública consultable en modo lectura para toda la dirección',
            'Mobile-friendly: Looker Studio genera automáticamente una versión responsive',
          ],
        },
        {
          title: 'Hacer vivir el dashboard: el ritual semanal de 15 minutos',
          paragraphs: [
            'Un cuadro de mando sin ritual de consulta es inútil. Nuestra recomendación: 15 minutos cada lunes por la mañana, solo o con los responsables clave, para recorrer los 5 KPIs y responder a 3 preguntas: ¿Hay alguna anomalía que tratar esta semana? ¿Hay alguna tendencia preocupante en las últimas 4 semanas? ¿Cuál es la prioridad de acción número 1 que se desprende de estas cifras?',
            'Esta rutina transforma los datos en decisiones. Sin ella, incluso el mejor cuadro de mando sigue siendo decorativo. Para nuestros clientes más avanzados, automatizamos un resumen textual de los KPIs cada lunes mediante un workflow de n8n + Claude: el sistema analiza las cifras, detecta las anomalías, y envía un email de síntesis al director con un comentario interpretativo. Es un estado de situación del lunes por la mañana en 3 minutos de lectura.',
          ],
          bullets: [
            'Ritual lunes: 15 min para responder a 3 preguntas (anomalía / tendencia / prioridad de acción)',
            'Revisión mensual: 45 min con toda la dirección para las decisiones estratégicas',
            'Automatización avanzada: n8n + Claude → email de síntesis de KPIs cada lunes por la mañana',
            'Regla de oro: si un KPI nunca desencadena una acción, no está en el dashboard correcto',
          ],
        },
      ],
      conclusion: '5 KPIs, un cuadro de mando automatizado, 15 minutos por semana. Es todo lo que se necesita para pilotar una PYME con visibilidad suficiente para tomar buenas decisiones rápidamente. No busque la perfección analítica — busque la claridad operacional. Si quiere que construyamos este dashboard para su empresa con sus datos existentes, contáctenos.',
      keyTakeaways: [
        'Solo 5 KPIs: MRR vs objetivo / pipeline / plazo de pago / satisfacción / margen por ETC',
        'Looker Studio gratuito conecta GA4 + Sheets + CRM en un cuadro de mando automatizado',
        'La tendencia en 6 meses es más importante que el valor absoluto para el MRR',
        'Ritual lunes 15 min: anomalía / tendencia / prioridad de acción — transforma datos en decisiones',
        'Automatización avanzada: email de síntesis de KPIs generado por n8n + Claude cada lunes',
      ],
    },
  },

  {
    id: 'maintenir-site-react-production',
    title: 'Cómo mantener un sitio React en producción sin conocimientos técnicos',
    excerpt: 'Actualizaciones de seguridad, despliegues, monitoring, copias de seguridad... Los procesos y herramientas que permiten a un no desarrollador mantener un sitio React en producción sin romper nada.',
    category: 'Seguimiento Continuo',
    date: 'Febrero 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Producción', 'Mantenimiento', 'DevOps', 'No técnico'],
    available: true,
    body: {
      intro: 'Su agencia ha entregado un sitio **React** magnífico. Lo ha pagado, está orgulloso, y ahora se da cuenta de que **nadie en su equipo sabe cómo mantenerlo**. Las actualizaciones de seguridad se acumulan en las alertas de GitHub que no abre. Un día, llega un mensaje *"sitio caído"* a las 9h de la mañana y llama frenéticamente a su proveedor. No tiene por qué ser así. Aquí están los procesos y herramientas que permiten **mantener un sitio React en producción** sin depender de un desarrollador para cada intervención.',
      sections: [
        {
          title: 'Entender qué significa "mantener" para un sitio React',
          paragraphs: [
            'Un sitio React es una aplicación JavaScript que se ejecuta en el navegador del visitante, servida desde un alojamiento (Vercel, Netlify, OVH, etc.). Mantener este sitio cubre 4 dimensiones: la seguridad de las dependencias npm (las bibliotecas utilizadas en el código — potencialmente 200 a 500 paquetes — son afectadas regularmente por vulnerabilidades), la disponibilidad (¿responde el sitio? ¿carga correctamente?), las actualizaciones de contenido (cambiar un texto, una imagen, una información), y la coherencia con las evoluciones de los servicios de terceros integrados (API de pago, CRM, analytics).',
            'Buenas noticias: el mantenimiento de un sitio React en producción es menos complejo de lo que parece si la arquitectura inicial fue bien pensada. Si su sitio está alojado en Vercel o Netlify, conectado a un repositorio de GitHub, y utiliza un CMS headless para el contenido (Sanity, Contentful, o incluso Notion), puede gestionar el 80% de las operaciones de mantenimiento sin tocar el código.',
          ],
          bullets: [
            '4 dimensiones de mantenimiento: seguridad dependencias / disponibilidad / contenido / servicios de terceros',
            'Vercel o Netlify + GitHub: la base de una arquitectura mantenible sin expertise DevOps',
            'CMS headless: permite las actualizaciones de contenido sin tocar el código',
            'Dependabot (GitHub): alertas y PR automáticas para las vulnerabilidades de dependencias',
          ],
        },
        {
          title: 'Las herramientas de monitoring que todo propietario de sitio debe configurar',
          paragraphs: [
            'El monitoring de disponibilidad es la primera capa de protección. UptimeRobot (plan gratuito: 50 monitores, verificación cada 5 minutos) monitoriza su URL y le envía un SMS o email en cuanto el sitio no responde. Configure también alertas sobre los códigos de error HTTP (500, 503) y sobre un tiempo de respuesta superior a 3 segundos. Estas alertas le permiten detectar un problema antes que sus clientes.',
            'La segunda capa es el monitoring de errores JavaScript. Sentry (plan gratuito para pequeños volúmenes) captura cada error que se produce en el navegador de sus visitantes en tiempo real. Cuando un formulario falla, cuando una integración de terceros se cae, cuando una actualización introduce un bug — Sentry se lo dice inmediatamente con la información técnica suficiente para que un desarrollador pueda corregirlo rápidamente. Sin Sentry, descubre estos problemas cuando un cliente se queja.',
          ],
          bullets: [
            'UptimeRobot gratuito: vigilancia cada 5 min + SMS/email si el sitio cae',
            'Sentry gratuito: captura de errores JS en tiempo real con contexto técnico',
            'Google Search Console: alertas si el sitio es penalizado o desindexado por Google',
            'Cloudflare gratuito: CDN + protección DDoS básica + analytics de tráfico',
            'StatusPage.io o Betterstack: comunicación transparente hacia sus clientes en caso de incidente',
          ],
        },
        {
          title: 'Los procesos para las operaciones habituales sin desarrollador',
          paragraphs: [
            'Las actualizaciones de contenido en un sitio React sin CMS headless normalmente requieren un desarrollador. Si su sitio no tiene uno, la primera acción a negociar con su agencia es la adición de un CMS sencillo. Sanity.io tiene un plan gratuito generoso y una interfaz de administración accesible a cualquier perfil no técnico. Una vez configurado, modifica los textos, las imágenes y la información de su sitio desde una interfaz web — sin tocar el código ni el despliegue.',
            'Para las actualizaciones de seguridad de las dependencias, configure Dependabot en su repositorio de GitHub. Dependabot detecta automáticamente las vulnerabilidades en sus dependencias npm y crea Pull Requests de actualización. Para las actualizaciones \'patch\' (correcciones de bugs, sin cambio de API), estas PR pueden configurarse para ser mergeadas automáticamente — su sitio se mantiene actualizado sin intervención manual. Para las actualizaciones \'major\' (cambio de API potencialmente rupturista), una revisión por un desarrollador 1 vez por trimestre es suficiente.',
          ],
          bullets: [
            'CMS headless (Sanity.io gratuito): actualizaciones de contenido sin código',
            'Dependabot GitHub: alertas automáticas + PR para las vulnerabilidades npm',
            'Auto-merge de Dependabot en las actualizaciones \'patch\': seguridad sin intervención',
            'Vercel Deployments: cada merge en main = despliegue automático en 2 minutos',
            'Checklist mensual: verificar las alertas de Sentry + UptimeRobot + Search Console',
          ],
        },
      ],
      conclusion: 'Mantener un sitio React en producción sin conocimientos técnicos es posible — a condición de que la arquitectura inicial haya sido pensada para ello. UptimeRobot + Sentry + Dependabot + un CMS headless: estas cuatro herramientas cubren el 80% de las necesidades de mantenimiento habitual. El resto (el 20% de problemas técnicos reales) merece un contrato de mantenimiento con su agencia. Si quiere que auditemos su arquitectura actual y pongamos en marcha estas herramientas, contáctenos.',
      keyTakeaways: [
        'UptimeRobot gratuito + Sentry gratuito: monitoring de disponibilidad y errores en 30 min de configuración',
        'Sanity.io headless CMS: actualizaciones de contenido accesibles a un perfil no técnico',
        'Dependabot auto-merge en patches: seguridad de dependencias sin intervención manual',
        'Vercel + GitHub: despliegue automático en cada merge, sin FTP ni SSH',
        'Checklist mensual de 15 min: alertas Sentry + UptimeRobot + Search Console',
      ],
    },
  }
];
