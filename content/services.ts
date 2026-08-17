/**
 * Services page content — preserved verbatim from
 * https://dinq.ai/soluciones-ia-para-empresas/.
 * Each service exposes an anchor `id` so the home page can deep-link to it.
 */

export const servicesHero = {
  title: 'Servicios',
  subtitle: 'Mas allá de las expectativas: Dinq donde tus ideas tienen un futuro',
}

export type ServiceDetail = {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  image: string
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'consultoria-estrategica',
    title: 'Consultoría estratégica en IA',
    description:
      'Nuestro equipo de expertos te ofrece asesoramiento integral para integrar la IA de forma estratégica, seleccionando las tecnologías adecuadas y formando a tus equipos.',
    icon: 'compass',
    image: '/services/consultoria-estrategica.jpg',
    features: [
      'Asesoramiento ético y regulatorio en el uso de IA',
      'Detección de oportunidades para aplicar IA en procesos empresariales',
      'Evaluación de madurez digital para la adopción de IA',
      'Identificación y priorización de casos de usos de alto impacto',
      'Selección de tecnologías y plataformas de IA adecuadas',
      'Formación estratégica en IA para equipos directivos',
      'Gestión del cambio y cultura organizacional frente a la IA',
      'Diseño de hoja de ruta para la transformación con IA',
    ],
  },
  {
    id: 'desarrollo-soluciones',
    title: 'Desarrollo de soluciones con IA',
    description:
      'Definimos y alineamos una hoja de ruta de inteligencia artificial con tus objetivos de negocio, identificando casos de uso de alto impacto, evaluando riesgos y determinando la viabilidad técnica y económica.',
    icon: 'cpu',
    image: '/services/desarrollo-soluciones.jpg',
    features: [
      'Algoritmos personalizados segun el sector',
      'Automatización inteligente de procesos (RPA + IA)',
      'Modelos de IA personalizados entrenados con datos propios',
      'Integración de modelos predictivos en herramientas de gestión existentes',
      'IA conversacional para atención al cliente multicanal',
      'Plataforma de recomendación inteligente',
      'IA generativa para generación automatizada de contenido',
      'Sistemas de visión artificial para control de calidad y procesos logísticos',
    ],
  },
  {
    id: 'analisis-datos',
    title: 'Análisis de datos avanzados',
    description:
      'Diseñamos, prototipamos e implementamos soluciones a medida desde chatbots y sistemas de visión por computadora hasta automatización de procesos para optimizar operaciones y mejorar la experiencia de cliente.',
    icon: 'bar-chart',
    image: '/services/analisis-datos.jpg',
    features: [
      'Recolección, limpieza y estructuración de datos',
      'Visualización de insights clave con dashboards interactivos',
      'Modelos de analítica predictiva',
      'Modelos de analítica prescriptiva para soporte a la toma de decisiones',
      'Segmentación avanzada de clientes y comportamiento mediante clustering',
      'Análisis de sentimiento y reputación a partir de datos no estructurados (textos, redes sociales)',
      'Dashboards inteligentes con alertas y storytelling de datos',
    ],
  },
  {
    id: 'chatbots-asistentes',
    title: 'Implementación de ChatBots y asistentes virtuales',
    description:
      'Desarrollamos asistentes conversacionales personalizados con IA generativa para mejorar la atención al cliente e integrar soluciones con CRM, optimizando la comunicación y la eficiencia.',
    icon: 'message-circle',
    image: '/services/chatbots-asistentes.jpg',
    features: [
      'Desarrollo de asistentes conversacionales personalizados',
      'IA generativa para atención al cliente',
      'Integración con CRM',
      // TODO: contenido provisional "Elemento de lista" en el sitio actual.
      // No mostrar públicamente hasta importar el texto definitivo.
      'Entrenamiento continuo con aprendizaje supervisado y feedback de usuarios',
      'Automatización de procesos con IA conversacional + RPA',
      'Cumplimiento normativo y proteccion de datos en Bots con IA',
    ],
  },
  {
    id: 'formacion-acompanamiento',
    title: 'Formación y acompañamiento',
    description:
      'Ofrecemos talleres especializados para equipos directivos y técnicos, fomentando una cultura de Inteligencia Artificial en las organizaciones y brindando asistencia técnica post-implementación para asegurar un aprovechamiento continuo.',
    icon: 'graduation-cap',
    image: '/services/formacion-acompanamiento.jpg',
    features: [
      'Talleres para equipos directivos y técnicos',
      'Cultura de Inteligencia Artificial para organizaciones',
      'Asistencia técnica post-implementación',
      'Laboratorios prácticos con casos reales de aplicación de IA',
      'Formación en ética, riesgos y gobernanza de la IA',
      'Activación de comunidades de practicas internas sobre IA',
    ],
  },
  {
    id: 'diseno-etico',
    title: 'Diseño ético y responsable de IA',
    description:
      'Realizamos auditorías de sesgos algorítmicos, diseñamos soluciones centradas en el usuario y la inclusión, y aseguramos el cumplimiento normativo para una implementación de la IA justa y confiable.',
    icon: 'shield-check',
    image: '/services/diseno-etico.jpg',
    features: [
      'Auditoría de sesgos algorítmicos',
      'Diseños centrados en el usuario y la inclusión',
      'Cumplimiento con normativas',
      'Protocolos de revisión ética en proyectos con IA',
      'Evaluación de impacto algorítmico en procesos sensibles',
      'Gobernanza del ciclo de vida del modelo de IA',
      'Diseño de interfaces explicables y comprensibles para el usuario final',
    ],
  },
]

/** Editorial interstitials interleaved between services on the current site. */
export const serviceInterstitials = [
  {
    title: 'Comunicación oportuna y transparente',
    description:
      'La confianza se construye con cada mensaje.En Dinq, potenciamos la claridad y la rapidez en cada interacción,fortaleciendo relaciones y generando valor en tiempo real.',
    cta: { label: 'Contacto', href: '/contacto-consultoria-inteligencia-artificial' },
  },
  {
    title: 'Soluciones económicas sencillas',
    description:
      'Con la Inteligencia Artificial ayudamos a simplificar los procesos financieros complejos',
    cta: { label: 'Contacto', href: '/contacto-consultoria-inteligencia-artificial' },
  },
]
