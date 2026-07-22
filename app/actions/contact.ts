'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error' | 'unconfigured'
  message?: string
  fieldErrors?: Record<string, string>
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: bots fill hidden fields.
  const honeypot = String(formData.get('company_website') ?? '')
  if (honeypot.trim() !== '') {
    // Silently reject spam without leaking detection.
    return { status: 'success', message: 'Gracias por tu mensaje.' }
  }

  const name = String(formData.get('name') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const role = String(formData.get('role') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const service = String(formData.get('service') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const privacy = formData.get('privacy') === 'on'

  const fieldErrors: Record<string, string> = {}
  if (!name) fieldErrors.name = 'Introduce tu nombre.'
  if (!company) fieldErrors.company = 'Introduce el nombre de tu empresa.'
  if (!email) fieldErrors.email = 'Introduce tu correo electrónico.'
  else if (!isEmail(email)) fieldErrors.email = 'Introduce un correo electrónico válido.'
  if (!message) fieldErrors.message = 'Escribe tu mensaje.'
  if (!privacy) fieldErrors.privacy = 'Debes aceptar la política de privacidad.'

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      message: 'Revisa los campos marcados e inténtalo de nuevo.',
      fieldErrors,
    }
  }

  // Real delivery target. Configure CONTACT_WEBHOOK_URL (e.g. a CRM/email
  // endpoint) to enable submissions. Without it we do NOT fake a success.
  const endpoint = process.env.CONTACT_WEBHOOK_URL
  if (!endpoint) {
    return {
      status: 'unconfigured',
      message:
        'El formulario aún no está conectado a un backend. Escríbenos directamente a info@dinq.ai mientras completamos la configuración.',
    }
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        company,
        role,
        email,
        phone,
        service,
        message,
        submittedAt: new Date().toISOString(),
      }),
    })
    if (!res.ok) throw new Error(`Delivery failed with status ${res.status}`)
    return {
      status: 'success',
      message: 'Gracias por tu mensaje. Nos pondremos en contacto contigo lo antes posible.',
    }
  } catch (error) {
    // Log only on the server; never expose internals to the client.
    console.error('[v0] contact submission failed:', error)
    return {
      status: 'error',
      message:
        'No hemos podido enviar tu mensaje en este momento. Vuelve a intentarlo en unos minutos.',
    }
  }
}
