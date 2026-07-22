import type { Metadata } from 'next'
import { LegalLayout } from '@/components/layout/legal-layout'
import { privacyPolicy } from '@/content/legal'
import { pageSeo, routes, siteConfig } from '@/content/seo'

export const metadata: Metadata = {
  title: pageSeo.privacy.title,
  description: pageSeo.privacy.description,
  alternates: { canonical: routes.privacy },
  openGraph: {
    title: pageSeo.privacy.title,
    description: pageSeo.privacy.description,
    url: `${siteConfig.url}${routes.privacy}`,
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <LegalLayout title={privacyPolicy.title} sections={privacyPolicy.sections} />
  )
}
