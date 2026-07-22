import { CurveFlow } from '@/components/brand/curve-flow'

export function PageHero({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string
  subtitle?: string
  breadcrumb?: { label: string; href?: string }[]
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <CurveFlow tone="mixed" className="absolute inset-0 h-full w-full opacity-30" />
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-calipso/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {breadcrumb ? (
          <nav aria-label="Ruta de navegación" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              {breadcrumb.map((item, i) => (
                <li key={item.label} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden="true">/</span> : null}
                  {item.href ? (
                    <a href={item.href} className="hover:text-brand-amber">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-white/80">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}
