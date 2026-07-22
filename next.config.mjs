/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Preserve SEO by 301-redirecting the previous WordPress URLs.
      {
        source: '/sobre-nosotros',
        destination: '/sobre-dinq',
        permanent: true,
      },
      {
        source: '/soluciones-ia-para-empresas',
        destination: '/soluciones-inteligencia-artificial-empresas',
        permanent: true,
      },
      {
        source: '/contacto',
        destination: '/contacto-consultoria-inteligencia-artificial',
        permanent: true,
      },
      {
        source: '/politica-privacidad',
        destination: '/politica-de-privacidad',
        permanent: true,
      },
      {
        source: '/politica-de-cookies-ue',
        destination: '/politica-de-cookies',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
