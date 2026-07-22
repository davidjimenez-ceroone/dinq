import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * DINQ wordmark.
 * NOTE: [PENDIENTE DE IMPORTAR DEL SITIO ACTUAL] — sustituir por los archivos
 * oficiales del logotipo cuando estén disponibles. Este wordmark es un
 * marcador de posición basado en la tipografía corporativa (Poppins).
 */
export function Logo({
  variant = 'dark',
  className,
}: {
  variant?: 'dark' | 'light'
  className?: string
}) {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-dark'
  return (
    <Link
      href="/"
      aria-label="DINQ — Inicio"
      className={cn('inline-flex items-center gap-2', className)}
    >
      <span aria-hidden="true" className="inline-flex h-8 w-8 items-center justify-center">
        <IsotypeMark className="h-8 w-8" />
      </span>
      <span className={cn('text-2xl font-bold tracking-tight', textColor)}>
        DINQ
      </span>
    </Link>
  )
}

/**
 * Isotype-inspired mark: interlocking curves that echo evolution and
 * connection. Used as the placeholder brand symbol.
 */
export function IsotypeMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 24c0-8.837 7.163-16 16-16 8.837 0 16 7.163 16 16"
        stroke="#229CC1"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M40 24c0 8.837-7.163 16-16 16-8.837 0-16-7.163-16-16"
        stroke="#F8AD13"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="4" fill="#00272D" />
    </svg>
  )
}
