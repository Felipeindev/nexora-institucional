export default function Logo({ size = 34, withText = true }: { size?: number; withText?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <svg width={size} height={size} viewBox="0 0 40 40" role="img" aria-label="Monograma NEXORA">
        <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F2F4F7" /><stop offset="1" stopColor="#668BC5" /></linearGradient></defs>
        <path d="M5 4h6v32H5zM29 4h6v32h-6z" fill="url(#lg)" />
        <path d="M11 4h6l12 32h-6z" fill="#668BC5" />
        <rect x="17.5" y="4" width="3" height="3" fill="#F2F4F7" />
      </svg>
      {withText && <span className="font-display text-lg font-semibold tracking-[.28em]">NEXORA</span>}
    </span>
  )
}
