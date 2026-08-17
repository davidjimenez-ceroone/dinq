import Image from 'next/image'
import { Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ServiceDetail } from '@/content/services'

export function ServiceBanner({
  service,
  index,
  Icon,
}: {
  service: ServiceDetail
  index: number
  Icon: LucideIcon
}) {
  // Even → image left / text right. Odd → text left / image right.
  const imageRight = index % 2 === 1

  return (
    <article
      id={service.id}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
    >
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div
          className={cn(
            'relative min-h-64 lg:min-h-full',
            imageRight ? 'lg:order-2' : 'lg:order-1',
          )}
        >
          <Image
            src={service.image || '/placeholder.svg'}
            alt={`${service.title} — Dinq`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-brand-dark/10 to-transparent"
          />
          <span
            aria-hidden="true"
            className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-brand-amber font-mono text-base font-bold text-brand-dark shadow-lg"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Text */}
        <div
          className={cn(
            'flex flex-col justify-center gap-5 p-8 sm:p-10 lg:p-12',
            imageRight ? 'lg:order-1' : 'lg:order-2',
          )}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-amber/15 text-brand-amber">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="h-1 w-10 rounded-full bg-brand-amber" aria-hidden="true" />
          </div>

          <h2 className="text-balance text-2xl font-bold text-brand-dark sm:text-3xl">
            {service.title}
          </h2>

          <p className="text-pretty leading-relaxed text-muted-foreground">
            {service.description}
          </p>

          <ul className="mt-1 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-calipso/15 text-brand-calipso">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/90">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
