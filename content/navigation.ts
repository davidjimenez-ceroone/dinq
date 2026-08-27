import { routes } from './seo'

export type NavItem = {
  label: string
  href: string
}

export const mainNav: NavItem[] = [
  { label: 'Inicio', href: routes.home },
  { label: 'Sobre DINQ', href: routes.about },
  { label: 'Servicios', href: routes.services },
  { label: 'Actualidad', href: routes.blog },
]

export const primaryCta = {
  label: 'Contacto',
  href: routes.contact,
}
