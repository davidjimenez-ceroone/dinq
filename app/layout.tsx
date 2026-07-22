import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteShell } from '@/components/layout/site-shell'
import { CookieBanner } from '@/components/layout/cookie-banner'
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/seo/json-ld'
import { siteConfig } from '@/content/seo'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Consultoría de Inteligencia Artificial para Empresas | DINQ',
    template: '%s | DINQ',
  },
  description:
    'Impulsamos la transformación empresarial con consultoría y soluciones de inteligencia artificial éticas, escalables y orientadas a resultados.',
  generator: 'v0.app',
  applicationName: 'DINQ',
  authors: [{ name: 'DINQ' }],
  keywords: [
    'inteligencia artificial',
    'consultoría IA',
    'transformación empresarial',
    'automatización',
    'análisis de datos',
    'DINQ',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    siteName: 'DINQ',
    title: 'Consultoría de Inteligencia Artificial para Empresas | DINQ',
    description:
      'Impulsamos la transformación empresarial con consultoría y soluciones de inteligencia artificial éticas, escalables y orientadas a resultados.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DINQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultoría de Inteligencia Artificial para Empresas | DINQ',
    description:
      'Impulsamos la transformación empresarial con consultoría y soluciones de inteligencia artificial éticas, escalables y orientadas a resultados.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#00272d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} bg-background`}>
      <body className="antialiased">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <SiteShell>{children}</SiteShell>
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
