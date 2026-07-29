import { routes } from './seo'

/**
 * Home page corporate content — preserved verbatim from https://dinq.ai/.
 * Only visual presentation changes; wording is kept literal.
 */

export const hero = {
  eyebrow: 'La quinta revolución',
  title: 'Inteligencia Artificial para la transformación empresarial',
  description:
    'Impulsamos la evolución empresarial mediante soluciones de inteligencia artificial de vanguardia. Nos especializamos en desarrollar estrategias personalizadas que optimizan tus operaciones, mejoran la toma de decisiones y te conectan de manera más efectiva con tus clientes.',
  primaryCta: { label: 'Comenzar', href: routes.about },
  secondaryCta: { label: 'Contáctanos', href: routes.contact },
}

export const toolsSection = {
  title: 'Nuestras Herramientas',
  // Presented as tools / technological ecosystem — not official partners.
  tools: [
    'Adobe Firefly',
    'Amazon SageMaker',
    'ChatGPT',
    'Claude',
    'DeepSeek',
    'Gemini',
    'Midjourney',
    'Amazon Bedrock',
    'Grok',
    'Llama',
    'PaLM',
    'Perplexity',
    'watsonx.ai',
    'Manus',
  ],
}

export const aboutTeaser = {
  eyebrow: 'Quiénes somos',
  title:
    'Llevamos la innovación al corazón de tu negocio mediante soluciones de IA personalizadas y efectivas',
  description:
    'Nuestro enfoque combina la comprensión del negocio con el poder predictivo de la inteligencia artificial para maximizar resultados',
  cta: { label: 'Sobre DINQ', href: routes.about },
}

export const valuesVisionMission = {
  tabs: [
    {
      key: 'valores',
      label: 'Nuestros valores',
      title: 'Más allá de la inteligencia artificial: nuestros principios',
      description:
        'En nuestra consultora entendemos que la Inteligencia Artificial no solo debe ser potente sino también consciente. Por eso nuestras decisiones, estrategias y soluciones se construyen sobre valores sólidos como el compromiso, la integridad, la innovación y el respeto sobre el impacto humano.',
    },
    {
      key: 'vision',
      label: 'Nuestra visión',
      title: 'Imaginamos un futuro donde la tecnología piensa con conciencia',
      description:
        'Queremos liderar una transformación digital centrada en las personas, donde la inteligencia artificial se convierta en una herramienta de progreso ético y sostenible.',
    },
    {
      key: 'mision',
      label: 'Nuestra misión',
      title: 'Impulsamos decisiones inteligentes con impacto real',
      description:
        'Acompañamos a las empresas en su transformación digital, integrando soluciones de inteligencia artificial con un enfoque estratégico, ético y humano.',
    },
  ],
}

/**
 * Indicators. Values recovered from the current site's animated counters.
 */
export const indicators = [
  { label: 'Empresas que invierten en IA', value: '83', suffix: '%+' },
  { label: 'Automatización de tareas', value: '60', suffix: '%+' },
  { label: 'Satisfacción de uso de IA', value: '4.6', suffix: '/5' },
  { label: 'Reducción de costos', value: '45', suffix: '%+' },
]

export const servicesSection = {
  eyebrow: '¿Qué ofrecemos?',
  title: 'Tu historia de éxito comienza con Dinq',
  services: [
    {
      id: 'consultoria-estrategica',
      title: 'Consultoría estratégica en IA',
      summary:
        '· Asesoramiento Ético y Regulatorio en el uso de IA. · Detección de oportunidades para aplicar IA en procesos empresariales.',
      icon: 'compass',
    },
    {
      id: 'desarrollo-soluciones',
      title: 'Desarrollo de soluciones con IA',
      summary:
        '· Algoritmos personalizados según el sector. · Automatización inteligente de procesos (RPA+IA)',
      icon: 'cpu',
    },
    {
      id: 'analisis-datos',
      title: 'Análisis de datos avanzados',
      summary:
        '· Recolección, limpieza y estructuración de datos. · Visualización de insights clave con dashboards interactivos.',
      icon: 'bar-chart',
    },
    {
      id: 'chatbots-asistentes',
      title: 'Implementación de ChatBots y asistentes virtuales',
      summary:
        '· Desarrollo de asistentes conversacionales personalizados. · IA generativa para atención al cliente. · Integración con CRM.',
      icon: 'message-circle',
    },
    {
      id: 'formacion-acompanamiento',
      title: 'Formación y acompañamiento',
      summary:
        '· Talleres de formación personalizados tanto para equipos directivos como para técnicos. · Cultura de Inteligencia Artificial para organizaciones.',
      icon: 'graduation-cap',
    },
    {
      id: 'diseno-etico',
      title: 'Diseño ético y responsable',
      summary:
        '· Auditoria de sesgos algorítmicos. · Diseños centrados en el usuario y la inclusión. · Cumplimiento con normativas.',
      icon: 'shield-check',
    },
  ],
}

export const helpBanner = {
  eyebrow: 'Nosotros te ayudamos',
  title: 'Súmate a la tendencia de la Inteligencia Artificial.',
  description:
    'Haz que la innovación trabaje para ti. En Dinq, te guiamos para integrar la inteligencia artificial en tu negocio,con soluciones reales que generan impacto desde el primer día.',
}

export const howWeWork = {
  eyebrow: 'Cómo trabajamos',
  title: 'Servicio de consultoría a la acción',
  steps: [
    {
      title: 'Toma de Contacto',
      description:
        'Iniciamos con un acercamiento personalizado para comprender el contexto, los desafíos y los objetivos del cliente.',
    },
    {
      title: 'Consultoría Personal',
      description:
        'Analizamos las necesidades y proponemos una estrategia a medida, alineada con la visión y proyección del negocio.',
    },
    {
      title: 'Desarrollo de Estrategias',
      description:
        'Diseñamos e integramos soluciones de IA adaptadas, garantizando eficiencia, escalabilidad y facilidad de adopción.',
    },
    {
      title: 'Seguimiento y Evolución',
      description:
        'Acompañamos el proceso post-implementación, evaluando resultados y ajustando para una mejora continua.',
    },
  ],
}

export const financing = {
  title: 'Financiación inteligente para tu evolución digital.',
  description:
    'La tecnología de Subvfy permite a cualquier entidad o despacho profesional filtrar las mejores oportunidades de financiación para proyectos de IA y digitalización mediante el análisis de datos.Accede a la base de datos de subvenciones del grupo Bigtoone.',
  cta: { label: 'Buscador de ayudas', href: 'https://bigto.one' },
}

export const benefits = {
  title: 'Beneficios de implementar IA con Dinq',
  intro:
    'Impulsa tu negocio con inteligencia. En Dinq, combinamos IA y estrategia para que tu marca avance con decisión en el mundo digital. Innovación, eficiencia y visión: eso es navegar con nosotros.',
  cards: [
    {
      title: 'Comunicación oportuna y transparente',
      description:
        'La confianza se construye con cada mensaje. En Dinq, potenciamos la claridad y la rapidez en cada interacción, fortaleciendo relaciones y generando valor en tiempo real.',
    },
    {
      title: 'Aumentar el rendimiento',
      description:
        'Estrategia inteligente, resultados reales. En Dinq, usamos IA para atraer a los clientes correctos y convertir visitas en ventas.',
      stat: { value: '4.7+', label: 'Empresas que usan la IA' },
    },
    {
      title: 'Soluciones económicas sencillas',
      description:
        'Con la Inteligencia Artificial ayudamos a simplificar los procesos financieros complejos',
    },
  ],
}

export const appointmentCta = {
  title: 'Solicita tu cita gratuita',
  description: 'Nuestra asistencia te ayudará en tu mejor plan de Inteligencia Artificial',
  cta: { label: 'Contáctanos', href: routes.contact },
}

export const futureProjects = {
  eyebrow: 'Proyectos de futuro',
  headings: [
    'Apostando por la innovación y la creatividad',
    'Excelencia digital pionera: descubre todas las ventajas con Dinq.',
    'Lidera el cambio con tecnología de vanguardia.',
  ],
  description:
    'En Dinq, combinamos innovación, estrategia y experienciapara llevar tu transformación digital al siguiente nivel.',
}

export const testimonials = {
  eyebrow: 'Comentarios y opiniones',
  title:
    'Comentarios/opiniones de PYMES y empresas internacionales con uso de IA',
  items: [
    {
      quote:
        'Empleados de Repsol han destacado cómo la implementación de IA generativa ha optimizado tareas rutinarias, permitiéndoles centrarse en actividades de mayor valor añadido. La empresa ha logrado ahorros significativos de tiempo y mejoras en la calidad del trabajo mediante el uso de prompts estructurados.',
      role: 'Director General Ejecutivo',
      company: 'Repsol Energía',
    },
    {
      quote:
        'En Europa, la cultura del riesgo y la regulación han frenado la adopción de la IA. Para afrontarlo, hemos firmado un acuerdo con Andersen que nos permite ofrecer soluciones de IA con respaldo legal, desde la estrategia hasta desarrollos personalizados, garantizando el cumplimiento normativo.',
      role: 'Presidente',
      company: '1MillionBot',
    },
    {
      quote:
        'El uso de la IA a gran escala nos permite mejorar nuestras capacidades operativas, aumentar la productividad de los empleados y optimizar la calidad del servicio al cliente. Esto impulsa el crecimiento empresarial y nos permite ofrecer soluciones más eficientes y personalizadas.',
      role: 'Director de Tecnología e Información',
      company: 'Bank of America',
    },
    {
      quote:
        'La integración de IA en nuestros procesos internos y en los servicios que ofrecemos a nuestros clientes ha sido un cambio significativo. Hemos optimizado nuestras operaciones y ayudado a más de 65,000 pymes a gestionar su marketing digital de manera eficiente y rentable.',
      role: 'CEO',
      company: 'BeeDIGITAL',
    },
    {
      quote:
        'La implementación de IA ha transformado nuestra forma de trabajar. Gracias a la inteligencia artificial, hemos optimizado nuestros procesos de producción, mejorado la calidad de nuestros productos y reducido costos operativos. Esta tecnología nos ha permitido ser más eficientes y ofrecer soluciones más innovadoras a nuestros clientes.',
      role: 'CEO',
      company: 'Bosch',
    },
    {
      quote:
        'Nuestra IA conversacional predictiva, reconocida internacionalmente, aprende del contexto del usuario para anticiparse a sus necesidades. La aplicamos en sectores como automoción y electrónica, mejorando la personalización y eficiencia de nuestros clientes.',
      role: 'CEO',
      company: 'Sherpa.ai',
    },
  ],
}

export const contactCta = {
  title: 'Solicita tu cita',
  description:
    'Transformando ideas a la excelencia con Dinq. Sube al siguiente nivel con la implementación de Inteligencia Artificial con Dinq.',
}
