import type { Metadata } from 'next'
import { LegalLayout } from '@/components/layout/legal-layout'
import { legalNotice } from '@/content/legal'
import { pageSeo, routes, siteConfig } from '@/content/seo'

export const metadata: Metadata = {
  title: pageSeo.legalNotice.title,
  description: pageSeo.legalNotice.description,
  alternates: { canonical: routes.legalNotice },
  openGraph: {
    title: pageSeo.legalNotice.title,
    description: pageSeo.legalNotice.description,
    url: `${siteConfig.url}${routes.legalNotice}`,
    type: 'website',
  },
}

export default function LegalNoticePage() {
  return (
    <LegalLayout title={legalNotice.title} sections={legalNotice.sections} />
  )
}
