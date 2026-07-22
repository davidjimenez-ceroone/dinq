import { serviceDetails } from './services'

/**
 * Contact page content. Corporate copy preserved from the current site.
 */

export const contactContent = {
  title: 'Solicita tu cita',
  description:
    'Transformando ideas a la excelencia con Dinq. Sube al siguiente nivel con la implementación de Inteligencia Artificial con Dinq.',
  subtitle:
    'Nuestra asistencia te ayudará en tu mejor plan de Inteligencia Artificial',
  email: 'info@dinq.ai',
}

/** Options for the "Servicio de interés" select — derived from real services. */
export const serviceInterestOptions = serviceDetails.map((s) => ({
  value: s.id,
  label: s.title,
}))
