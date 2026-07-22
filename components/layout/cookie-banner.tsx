'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { routes } from '@/content/seo'

const STORAGE_KEY = 'dinq-cookie-consent'
const OPEN_EVENT = 'dinq:open-cookie-settings'

type Consent = {
  necessary: true
  preferences: boolean
  statistics: boolean
  marketing: boolean
}

const categories = [
  {
    key: 'necessary' as const,
    label: 'Necesarias',
    description:
      'Aseguran que la web funcione correctamente. No pueden desactivarse.',
    locked: true,
  },
  {
    key: 'preferences' as const,
    label: 'Preferencias',
    description: 'Recuerdan tus ajustes para mejorar tu experiencia.',
  },
  {
    key: 'statistics' as const,
    label: 'Estadísticas',
    description: 'Nos ayudan a entender cómo se utiliza la web de forma anónima.',
  },
  {
    key: 'marketing' as const,
    label: 'Marketing',
    description: 'Se utilizan para mostrar contenido y publicidad relevantes.',
  },
]

/** Button to reopen preferences (used in the footer). */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={cn('text-left', className)}
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      Gestionar consentimiento
    </button>
  )
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [configuring, setConfiguring] = useState(false)
  const [prefs, setPrefs] = useState<Consent>({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
    else {
      try {
        setPrefs(JSON.parse(stored))
      } catch {
        setVisible(true)
      }
    }
    const openHandler = () => {
      setConfiguring(true)
      setVisible(true)
    }
    window.addEventListener(OPEN_EVENT, openHandler)
    return () => window.removeEventListener(OPEN_EVENT, openHandler)
  }, [])

  const persist = (consent: Consent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
    setPrefs(consent)
    setVisible(false)
    setConfiguring(false)
    // NOTE: statistics / marketing scripts must only load here, after consent.
  }

  const acceptAll = () =>
    persist({ necessary: true, preferences: true, statistics: true, marketing: true })
  const rejectNonEssential = () =>
    persist({ necessary: true, preferences: false, statistics: false, marketing: false })
  const savePreferences = () => persist(prefs)

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background shadow-2xl">
        <div className="flex items-start gap-3 p-5 sm:p-6">
          <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-amber/15 text-brand-amber">
            <Cookie className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <h2 id="cookie-title" className="text-base font-semibold text-brand-dark">
                Gestionar consentimiento de cookies
              </h2>
              <button
                type="button"
                aria-label="Cerrar"
                onClick={() => setVisible(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Utilizamos cookies para optimizar nuestro sitio web y nuestro servicio. Puedes
              aceptar todas, rechazar las no necesarias o configurar tus preferencias. Consulta
              nuestra{' '}
              <Link
                href={routes.cookies}
                className="font-medium text-brand-calipso underline underline-offset-2"
              >
                Política de Cookies
              </Link>
              .
            </p>

            {configuring && (
              <ul className="mt-4 space-y-3">
                {categories.map((cat) => (
                  <li
                    key={cat.key}
                    className="flex items-start justify-between gap-4 rounded-xl border border-border bg-muted/40 p-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-brand-dark">{cat.label}</p>
                      <p className="text-xs text-muted-foreground">{cat.description}</p>
                    </div>
                    <label className="relative mt-0.5 inline-flex cursor-pointer items-center">
                      <span className="sr-only">{cat.label}</span>
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={prefs[cat.key]}
                        disabled={cat.locked}
                        onChange={(e) =>
                          setPrefs((p) => ({ ...p, [cat.key]: e.target.checked }))
                        }
                      />
                      <span className="h-6 w-11 rounded-full bg-input transition-colors peer-checked:bg-brand-calipso peer-disabled:opacity-60" />
                      <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform peer-checked:translate-x-5" />
                    </label>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand-amber px-5 text-sm font-semibold text-brand-dark transition hover:brightness-105"
              >
                Aceptar todas
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="inline-flex h-11 items-center justify-center rounded-full border border-brand-dark/20 px-5 text-sm font-semibold text-brand-dark transition hover:bg-muted"
              >
                Rechazar no necesarias
              </button>
              {configuring ? (
                <button
                  type="button"
                  onClick={savePreferences}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand-dark px-5 text-sm font-semibold text-white transition hover:bg-brand-dark-2"
                >
                  Guardar preferencias
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfiguring(true)}
                  className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold text-brand-calipso transition hover:bg-muted"
                >
                  Configurar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
