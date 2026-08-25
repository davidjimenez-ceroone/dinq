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
  social: [
    { label: 'Facebook', href: 'https://facebook.com/dinqai', platform: 'facebook' },
    { label: 'Instagram', href: 'https://instagram.com/dinq_ai', platform: 'instagram' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/dinq-ai', platform: 'linkedin' },
  ],
}
