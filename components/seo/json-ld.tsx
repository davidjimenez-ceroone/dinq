import { siteConfig } from '@/content/seo'

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Data is fully controlled server-side; safe to serialize.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        email: siteConfig.email,
        description: siteConfig.description,
        logo: `${siteConfig.url}/og-image.png`,
        parentOrganization: {
          '@type': 'Organization',
          name: 'BUSINESS INTEGRATE GROUP TO ONE SL',
          url: 'https://bigto.one',
        },
      }}
    />
  )
}

export function WebsiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: 'es-ES',
      }}
    />
  )
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: name,
        name,
        description,
        url,
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: 'ES',
      }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  )
}

export function ArticleJsonLd({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  url: string
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline,
        description,
        image,
        datePublished,
        dateModified,
        author: { '@type': 'Person', name: author },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
          logo: {
            '@type': 'ImageObject',
            url: `${siteConfig.url}/og-image.png`,
          },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      }}
    />
  )
}
