import { serviceDetails } from './services'

/**
 * Contact page content. Corporate copy preserved from the current site.
 */

export const contactContent = {
  title: 'Solicita tu cita',
  description:
    'Transformamos la inteligencia artificial en soluciones reales para tu negocio. Estrategia, automatización e innovación con Dinq.',
  subtitle:
    'Nuestra asistencia te ayudará en tu mejor plan de Inteligencia Artificial',
  email: 'info@dinq.ai',
}

/** Options for the "Servicio de interés" select — derived from real services. */
export const serviceInterestOptions = serviceDetails.map((s) => ({
  value: s.id,
  label: s.title,
}))
