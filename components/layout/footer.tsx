import Link from 'next/link'
import { Mail } from 'lucide-react'
import { footerContent } from '@/content/footer'
import { Logo } from '@/components/brand/logo'
import { CookieSettingsButton } from '@/components/layout/cookie-banner'
import { SocialIcon } from '@/components/brand/social-icon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              {footerContent.message}
            </p>
            <a
              href={`mailto:${footerContent.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-brand-amber"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {footerContent.email}
            </a>
            <div className="mt-5 flex items-center gap-3">
              {footerContent.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand-amber hover:text-brand-amber"
                >
                  <SocialIcon platform={s.platform} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Navegación
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {footerContent.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-brand-amber">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Enlaces legales">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Legal
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {footerContent.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-brand-amber">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton className="text-white/70 hover:text-brand-amber" />
              </li>
              <li>
                <a
                  href={footerContent.parentGroup.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-brand-amber"
                >
                  {footerContent.parentGroup.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          Copyright© {year} {footerContent.copyright}
        </div>
      </div>
    </footer>
  )
}
