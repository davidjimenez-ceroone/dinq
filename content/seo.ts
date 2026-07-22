/**
 * Global site configuration and per-route SEO metadata.
 * Meta titles ~50-60 chars, meta descriptions ~140-160 chars.
 */

export const siteConfig = {
  name: 'DINQ',
  legalName: 'BUSINESS INTEGRATE GROUP TO ONE SL',
  // Public site URL. Override with NEXT_PUBLIC_SITE_URL in production.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dinq.ai',
  email: 'info@dinq.ai',
  locale: 'es_ES',
  description:
    'Consultora estratégica de Inteligencia Artificial enfocada en la transformación empresarial.',
} as const

export const routes = {
  home: '/',
  about: '/sobre-dinq',
  services: '/soluciones-inteligencia-artificial-empresas',
  blog: '/blog',
  contact: '/contacto-consultoria-inteligencia-artificial',
  legalNotice: '/aviso-legal',
  privacy: '/politica-de-privacidad',
  cookies: '/politica-de-cookies',
} as const

type PageSeo = {
  title: string
  description: string
  path: string
}

export const pageSeo: Record<string, PageSeo> = {
  home: {
    title: 'Consultoría de Inteligencia Artificial para Empresas | DINQ',
    description:
      'Impulsamos la transformación empresarial con consultoría y soluciones de inteligencia artificial éticas, escalables y orientadas a resultados.',
    path: routes.home,
  },
  about: {
    title: 'Sobre DINQ, Consultora Estratégica de Inteligencia Artificial',
    description:
      'Conoce DINQ, consultora estratégica que ayuda a las empresas a integrar inteligencia artificial con un enfoque práctico, humano, ético y responsable.',
    path: routes.about,
  },
  services: {
    title: 'Soluciones de Inteligencia Artificial para Empresas',
    description:
      'Consultoría, automatización, análisis de datos, asistentes virtuales, formación y soluciones responsables de inteligencia artificial para empresas.',
    path: routes.services,
  },
  blog: {
    title: 'Actualidad sobre Inteligencia Artificial y Empresa',
    description:
      'Noticias, tendencias y análisis sobre inteligencia artificial aplicada a empresas, automatización, datos, innovación y transformación digital.',
    path: routes.blog,
  },
  contact: {
    title: 'Contacto y Consultoría de Inteligencia Artificial',
    description:
      'Contacta con DINQ para analizar cómo aplicar inteligencia artificial, automatización y análisis de datos en los procesos de tu empresa.',
    path: routes.contact,
  },
  legalNotice: {
    title: 'Aviso Legal',
    description:
      'Aviso legal de DINQ e información sobre el titular del sitio web, condiciones de uso, propiedad intelectual y legislación aplicable.',
    path: routes.legalNotice,
  },
  privacy: {
    title: 'Política de Privacidad',
    description:
      'Política de privacidad de DINQ: cómo tratamos y protegemos los datos personales que nos facilitas a través de este sitio web.',
    path: routes.privacy,
  },
  cookies: {
    title: 'Política de Cookies',
    description:
      'Política de cookies de DINQ: qué cookies utilizamos, con qué finalidad y cómo puedes gestionar tus preferencias de consentimiento.',
    path: routes.cookies,
  },
}
