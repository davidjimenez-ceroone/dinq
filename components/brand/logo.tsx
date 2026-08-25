import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * DINQ wordmark — official brand logotype.
 * The PNG has a transparent background and the orange mark reads well on both
 * light (header) and dark (footer) surfaces, so a single asset serves both
 * variants. The `variant` prop is kept for API compatibility.
 */
export function Logo({
  variant = 'dark',
  className,
}: {
  variant?: 'dark' | 'light'
  className?: string
}) {
  return (
    <Link
      href="/"
      aria-label="DINQ — Inicio"
      className={cn('inline-flex items-center', className)}
      data-variant={variant}
    >
      <Image
        src="/logo-dinq.png"
        alt="DINQ"
        width={287}
        height={68}
        priority
        className="h-10 w-auto"
      />
    </Link>
  )
}

/**
 * DINQ isotype — official brand symbol.
 */
export function IsotypeMark({ className }: { className?: string }) {
  return (
    <Image
      src="/isotipo-dinq.png"
      alt=""
      aria-hidden="true"
      width={146}
      height={122}
      className={cn('h-8 w-auto', className)}
    />
  )
}
