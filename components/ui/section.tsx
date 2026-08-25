import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/reveal'

export function Section({
  children,
  className,
  id,
  as: Tag = 'section',
  container = true,
}: {
  children: React.ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div'
  container?: boolean
}) {
  return (
    <Tag id={id} className={cn('py-16 sm:py-20 lg:py-24', className)}>
      {container ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </Tag>
  )
}

export function Eyebrow({
  children,
  tone = 'calipso',
  className,
}: {
  children: React.ReactNode
  tone?: 'calipso' | 'amber' | 'light'
  className?: string
}) {
  const color =
    tone === 'amber'
      ? 'text-brand-amber'
      : tone === 'light'
        ? 'text-brand-amber'
        : 'text-brand-calipso'
  return (
    <span
      className={cn(
        'inline-flex items-center text-sm font-semibold uppercase tracking-widest',
        color,
        className,
      )}
    >
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'calipso',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  tone?: 'calipso' | 'amber' | 'light'
}) {
  return (
    <Reveal>
      <div
        className={cn(
          'max-w-3xl',
          align === 'center' ? 'mx-auto text-center' : 'text-left',
        )}
      >
        {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
        <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  )
}
