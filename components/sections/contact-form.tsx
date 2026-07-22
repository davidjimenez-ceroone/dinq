'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { CheckCircle2, AlertCircle, Info, Loader2 } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions/contact'
import { serviceInterestOptions } from '@/content/contact'
import { routes } from '@/content/seo'

const initialState: ContactState = { status: 'idle' }

const labelClass = 'block text-sm font-medium text-brand-dark'
const inputClass =
  'mt-1.5 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-brand-dark shadow-sm outline-none transition focus:border-brand-calipso focus:ring-2 focus:ring-brand-calipso/30 placeholder:text-muted-foreground'

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)
  const errors = state.fieldErrors ?? {}

  return (
    <form action={formAction} noValidate className="space-y-5">
      {/* Honeypot field, visually hidden from users */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">No rellenar</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nombre <span className="text-brand-amber">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={inputClass}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Empresa <span className="text-brand-amber">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? 'company-error' : undefined}
            className={inputClass}
          />
          {errors.company && (
            <p id="company-error" className="mt-1 text-xs text-destructive">
              {errors.company}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className={labelClass}>
            Cargo <span className="text-muted-foreground">(opcional)</span>
          </label>
          <input
            id="role"
            name="role"
            type="text"
            autoComplete="organization-title"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-brand-amber">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClass}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Teléfono <span className="text-muted-foreground">(opcional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            Servicio de interés
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Selecciona una opción
            </option>
            {serviceInterestOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Mensaje <span className="text-brand-amber">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={inputClass}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          aria-invalid={!!errors.privacy}
          className="mt-1 h-4 w-4 rounded border-input text-brand-calipso focus:ring-brand-calipso"
        />
        <label htmlFor="privacy" className="text-sm text-muted-foreground">
          He leído y acepto la{' '}
          <Link
            href={routes.privacy}
            className="font-medium text-brand-calipso underline underline-offset-2"
          >
            Política de Privacidad
          </Link>
          . <span className="text-brand-amber">*</span>
        </label>
      </div>
      {errors.privacy && (
        <p className="text-xs text-destructive">{errors.privacy}</p>
      )}

      {/* Accessible status messages */}
      <div aria-live="polite" role="status">
        {state.status === 'success' && (
          <div className="flex items-start gap-2 rounded-xl bg-brand-calipso/10 p-4 text-sm text-brand-dark">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-calipso" />
            <span>{state.message}</span>
          </div>
        )}
        {state.status === 'error' && (
          <div className="flex items-start gap-2 rounded-xl bg-destructive/10 p-4 text-sm text-destructive">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <span>{state.message}</span>
          </div>
        )}
        {state.status === 'unconfigured' && (
          <div className="flex items-start gap-2 rounded-xl bg-brand-amber/15 p-4 text-sm text-brand-dark">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-amber" />
            <span>{state.message}</span>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-amber px-7 text-base font-semibold text-brand-dark transition hover:brightness-105 disabled:opacity-60 sm:w-auto"
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" />}
        {pending ? 'Enviando…' : 'Enviar mensaje'}
      </button>
    </form>
  )
}
