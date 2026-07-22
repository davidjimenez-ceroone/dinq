import Link from 'next/link'
import { CtaButton } from '@/components/brand/cta-button'
import { CurveFlow } from '@/components/brand/curve-flow'
import { routes } from '@/content/seo'
import { mainNav } from '@/content/navigation'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-dark text-white">
      <CurveFlow
        tone="mixed"
        className="absolute inset-0 h-full w-full opacity-30"
      />
      <div className="relative mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-amber">
          Error 404
        </p>
        <h1 className="mt-4 text-balance text-4xl font-bold leading-tight sm:text-5xl">
          La página que buscas no existe
        </h1>
        <p className="mt-5 text-pretty leading-relaxed text-white/80">
          Es posible que el enlace haya cambiado o que la página se haya movido.
          Puedes volver al inicio o explorar nuestras secciones.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton href={routes.home} variant="primary">
            Volver al inicio
          </CtaButton>
          <CtaButton href={routes.contact} variant="outline-light">
            Contactar con DINQ
          </CtaButton>
        </div>

        <nav
          aria-label="Enlaces útiles"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand-amber"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}
