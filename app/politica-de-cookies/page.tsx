import type { Metadata } from 'next'
import { LegalLayout } from '@/components/layout/legal-layout'
import { cookiesPolicy } from '@/content/legal'
import { pageSeo, routes, siteConfig } from '@/content/seo'

export const metadata: Metadata = {
  title: pageSeo.cookies.title,
  description: pageSeo.cookies.description,
  alternates: { canonical: routes.cookies },
  openGraph: {
    title: pageSeo.cookies.title,
    description: pageSeo.cookies.description,
    url: `${siteConfig.url}${routes.cookies}`,
    type: 'website',
  },
}

export default function CookiesPage() {
  return (
    <LegalLayout
      title={cookiesPolicy.title}
      intro={cookiesPolicy.intro}
      sections={cookiesPolicy.sections}
    />
  )
}
