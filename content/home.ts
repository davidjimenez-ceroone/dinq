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

/**
 * Tool ecosystem. Each tool optionally carries a `slug` that maps to a brand
 * logo hosted by theSVG (https://thesvg.org). Tools without a `slug` fall back
 * to a text chip. Presented as a technological ecosystem — not official
 * partners. Brand marks belong to their respective owners.
 */
export type Tool = { name: string; slug?: string }
export type ToolCategory = { title: string; tools: Tool[] }

export const toolsSection = {
  title: 'Las mejores herramientas. Una estrategia.',
  description:
    'No dependemos de una única plataforma. Seleccionamos y combinamos las tecnologías de IA que mejor encajan con cada proyecto, proceso y objetivo.',
  categories: [
    {
      title: 'Modelos fundacionales / Chat',
      tools: [
        { name: 'ChatGPT', slug: 'openai-chatgpt' },
        { name: 'Claude', slug: 'claude' },
        { name: 'Gemini', slug: 'gemini' },
        { name: 'Grok', slug: 'grok' },
        { name: 'DeepSeek', slug: 'deepseek' },
        { name: 'Llama' },
        { name: 'Mistral', slug: 'mistral' },
        { name: 'Qwen', slug: 'qwen' },
        { name: 'Kimi AI', slug: 'kimi' },
        { name: 'Perplexity', slug: 'perplexity' },
      ],
    },
    {
      title: 'Plataformas cloud / enterprise AI',
      tools: [
        { name: 'Amazon Bedrock', slug: 'aws-amazon-bedrock' },
        { name: 'Amazon SageMaker', slug: 'aws-amazon-sagemaker' },
        { name: 'watsonx.ai' },
        { name: 'Microsoft Azure AI Foundry', slug: 'azure' },
        { name: 'Google Vertex AI', slug: 'gcp-vertexai' },
        { name: 'Microsoft 365 Copilot', slug: 'microsoft-365-copilot' },
      ],
    },
    {
      title: 'Zoho AI Suite',
      tools: [
        { name: 'Zia / Zia Agent Studio', slug: 'zoho' },
        { name: 'Zoho Creator IA', slug: 'zoho' },
      ],
    },
    {
      title: 'Generación de imagen',
      tools: [
        { name: 'Adobe Firefly', slug: 'firefly-adobe' },
        { name: 'Midjourney', slug: 'midjourney' },
        { name: 'Ideogram', slug: 'ideogram' },
        { name: 'FLUX', slug: 'flux-black-forest-labs' },
        { name: 'Stable Diffusion', slug: 'stability-stablediffusion' },
        { name: 'Leonardo AI' },
        { name: 'Krea', slug: 'krea' },
      ],
    },
    {
      title: 'Vídeo generativo',
      tools: [
        { name: 'Runway', slug: 'runway' },
        { name: 'Synthesia' },
        { name: 'HeyGen' },
        { name: 'Colossyan' },
      ],
    },
    {
      title: 'Voz / Audio',
      tools: [
        { name: 'ElevenLabs', slug: 'elevenlabs' },
        { name: 'Fish Audio', slug: 'fish-audio' },
        { name: 'Suno', slug: 'suno' },
        { name: 'Retell AI' },
      ],
    },
    {
      title: 'Coding assistants',
      tools: [
        { name: 'GitHub Copilot', slug: 'github-copilot' },
        { name: 'Cursor', slug: 'cursor' },
        { name: 'Claude Code', slug: 'claude-code' },
        { name: 'Codex', slug: 'codex-openai' },
        { name: 'Antigravity', slug: 'antigravity-google' },
        { name: 'Replit', slug: 'replit' },
        { name: 'v0', slug: 'v0' },
      ],
    },
    {
      title: 'Agentes autónomos / agentic AI',
      tools: [
        { name: 'Manus', slug: 'manus' },
        { name: 'Devin' },
        { name: 'Salesforce Agentforce', slug: 'salesforce' },
        { name: 'OpenAI Agents SDK', slug: 'openai' },
        { name: 'n8n', slug: 'n8n' },
        { name: 'LangChain', slug: 'langchain' },
        { name: 'Composio', slug: 'composio' },
      ],
    },
    {
      title: 'Sistemas agénticos / Orquestación',
      tools: [
        { name: 'VibeTasking' },
        { name: 'Lindy' },
        { name: 'Relevance AI' },
        { name: 'Dify AI', slug: 'dify' },
        { name: 'Langflow', slug: 'langflow' },
        { name: 'Flowise' },
        { name: 'CrewAI', slug: 'crewai' },
        { name: 'Taskade' },
        { name: 'Activepieces' },
        { name: 'browser-use' },
        { name: 'Skyvern' },
        { name: 'Nango' },
        { name: 'Factory' },
        { name: 'Julius' },
        { name: 'OpenClaw' },
      ],
    },
    {
      title: 'Notetaking / Transcripción + Investigación',
      tools: [
        { name: 'Plaud' },
        { name: 'Otter.ai' },
        { name: 'Granola', slug: 'granola' },
        { name: 'NotebookLM', slug: 'notebooklm' },
        { name: 'Aragón' },
      ],
    },
  ] satisfies ToolCategory[],
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
  brand: 'subvfy',
  title: 'Financiación inteligente para tu evolución digital.',
  paragraphs: [
    'La tecnología de Subvfy permite a cualquier entidad o despacho profesional filtrar las mejores oportunidades de financiación para proyectos de IA y digitalización mediante el análisis de datos.',
    'Accede a la base de datos de subvenciones del grupo Bigtoone.',
  ],
  cta: {
    label: 'Buscador de ayudas',
    href: 'https://subvfy.app.fandit.es/auth/login',
  },
}

export const benefits = {
  title: 'Beneficios de implementar IA con Dinq',
  intro:
    'Impulsa tu negocio con inteligencia. En Dinq, combinamos IA y estrategia para que tu marca avance con decisión en el mundo digital. Innovación, eficiencia y visión: eso es navegar con nosotros.',
  cards: [
    {
      title: 'Automatización de procesos',
      description:
        'Reduce tareas manuales y repetitivas mediante soluciones inteligentes que agilizan el trabajo diario, minimizan errores y permiten que tu equipo se concentre en actividades de mayor valor.',
    },
    {
      title: 'Mayor eficiencia y productividad',
      description:
        'Optimiza el rendimiento de tus equipos y procesos con herramientas de inteligencia artificial que permiten trabajar de forma más rápida, precisa y organizada.',
      stat: { value: '4.7+', label: 'Empresas que usan la IA' },
    },
    {
      title: 'Reducción de costes operativos',
      description:
        'Simplifica procesos complejos, aprovecha mejor tus recursos y reduce costes mediante soluciones escalables diseñadas según las necesidades de tu empresa.',
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
      logo: '/logos/repsol.webp',
    },
    {
      quote:
        'En Europa, la cultura del riesgo y la regulación han frenado la adopción de la IA. Para afrontarlo, hemos firmado un acuerdo con Andersen que nos permite ofrecer soluciones de IA con respaldo legal, desde la estrategia hasta desarrollos personalizados, garantizando el cumplimiento normativo.',
      role: 'Presidente',
      company: '1MillionBot',
      logo: '/logos/1millionbot.webp',
    },
    {
      quote:
        'El uso de la IA a gran escala nos permite mejorar nuestras capacidades operativas, aumentar la productividad de los empleados y optimizar la calidad del servicio al cliente. Esto impulsa el crecimiento empresarial y nos permite ofrecer soluciones más eficientes y personalizadas.',
      role: 'Director de Tecnología e Información',
      company: 'Bank of America',
      logo: '/logos/bank-of-america.webp',
    },
    {
      quote:
        'La integración de IA en nuestros procesos internos y en los servicios que ofrecemos a nuestros clientes ha sido un cambio significativo. Hemos optimizado nuestras operaciones y ayudado a más de 65,000 pymes a gestionar su marketing digital de manera eficiente y rentable.',
      role: 'CEO',
      company: 'BeeDIGITAL',
      logo: '/logos/bee-digital.webp',
    },
    {
      quote:
        'La implementación de IA ha transformado nuestra forma de trabajar. Gracias a la inteligencia artificial, hemos optimizado nuestros procesos de producción, mejorado la calidad de nuestros productos y reducido costos operativos. Esta tecnología nos ha permitido ser más eficientes y ofrecer soluciones más innovadoras a nuestros clientes.',
      role: 'CEO',
      company: 'Bosch',
      logo: '/logos/bosch.webp',
    },
    {
      quote:
        'Nuestra IA conversacional predictiva, reconocida internacionalmente, aprende del contexto del usuario para anticiparse a sus necesidades. La aplicamos en sectores como automoción y electrónica, mejorando la personalización y eficiencia de nuestros clientes.',
      role: 'CEO',
      company: 'Sherpa.ai',
      logo: '/logos/sherpa-ai.webp',
    },
  ],
}

export const contactCta = {
  title: 'Solicita tu cita',
  description:
    'Transformamos la inteligencia artificial en soluciones reales para tu negocio. Estrategia, automatización e innovación con Dinq.',
}
