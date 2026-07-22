import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

/**
 * On-demand revalidation webhook for the WordPress CMS.
 *
 * Point a WordPress "save_post" webhook here (or hit it manually) to refresh
 * blog content without waiting for the ISR window. Protected by a shared
 * secret in REVALIDATE_SECRET.
 */
export async function POST(request: Request) {
  const secret =
    request.headers.get('x-revalidate-secret') ??
    new URL(request.url).searchParams.get('secret')

  if (!process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { revalidated: false, message: 'Revalidation secret is not configured.' },
      { status: 501 },
    )
  }

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { revalidated: false, message: 'Invalid secret.' },
      { status: 401 },
    )
  }

  revalidateTag('wordpress', 'max')

  return NextResponse.json({ revalidated: true, now: Date.now() })
}
