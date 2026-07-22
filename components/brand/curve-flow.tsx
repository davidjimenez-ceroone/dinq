import { cn } from '@/lib/utils'

/**
 * Reusable graphic resource inspired by the isotype curves.
 * Represents evolution, processes, connections and flows.
 * Decorative only — does not replace the official isotype.
 */
export function CurveFlow({
  className,
  tone = 'calipso',
}: {
  className?: string
  tone?: 'calipso' | 'amber' | 'mixed'
}) {
  const stroke =
    tone === 'amber' ? '#F8AD13' : tone === 'calipso' ? '#229CC1' : 'url(#dinqGrad)'
  return (
    <svg
      className={cn('pointer-events-none select-none', className)}
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dinqGrad" x1="0" y1="0" x2="600" y2="400">
          <stop stopColor="#F8AD13" />
          <stop offset="1" stopColor="#229CC1" />
        </linearGradient>
      </defs>
      <path
        d="M-20 320C120 320 160 80 300 80s180 240 320 240"
        stroke={stroke}
        strokeWidth="2"
        opacity="0.5"
      />
      <path
        d="M-20 360C120 360 160 160 300 160s180 200 320 200"
        stroke={stroke}
        strokeWidth="2"
        opacity="0.3"
      />
      <path
        d="M-20 280C120 280 160 40 300 40s180 240 320 240"
        stroke={stroke}
        strokeWidth="2"
        opacity="0.7"
      />
    </svg>
  )
}
