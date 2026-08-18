import { routes } from './seo'

export const footerContent = {
  // Corporate message preserved from the current site.
  message:
    'Transformamos la inteligencia artificial en soluciones reales para tu negocio. Estrategia, automatización e innovación con Dinq.',
  email: 'info@dinq.ai',
  copyright: 'Dinq, Todos los derechos reservados.',
  parentGroup: {
    label: 'Bigtoone',
    href: 'https://bigto.one',
  },
  nav: [
    { label: 'Inicio', href: routes.home },
    { label: 'Sobre DINQ', href: routes.about },
    { label: 'Servicios', href: routes.services },
    { label: 'Actualidad', href: routes.blog },
    { label: 'Contacto', href: routes.contact },
  ],
  legal: [
    { label: 'Aviso Legal', href: routes.legalNotice },
    { label: 'Política de Privacidad', href: routes.privacy },
    { label: 'Política de Cookies', href: routes.cookies },
  ],
  // Social networks currently linked on the live site.
  // [PENDIENTE DE IMPORTAR DEL SITIO ACTUAL]: confirmar URLs exactas de perfiles.
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', platform: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/', platform: 'instagram' },
    { label: 'X', href: 'https://x.com/', platform: 'x' },
  ],
}
