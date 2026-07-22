import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const ctaVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-calipso disabled:opacity-60 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-amber text-brand-dark hover:brightness-105 hover:shadow-lg hover:shadow-brand-amber/25',
        dark: 'bg-brand-dark text-white hover:bg-brand-dark-2',
        calipso: 'bg-brand-calipso text-white hover:brightness-110',
        outline:
          'border border-brand-dark/20 bg-transparent text-brand-dark hover:bg-brand-dark hover:text-white',
        'outline-light':
          'border border-white/40 bg-transparent text-white hover:bg-white hover:text-brand-dark',
      },
      size: {
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-7 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

type CtaButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
} & VariantProps<typeof ctaVariants>

export function CtaButton({
  href,
  children,
  className,
  variant,
  size,
  external,
}: CtaButtonProps) {
  const classes = cn(ctaVariants({ variant, size }), className)
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}

export { ctaVariants }
