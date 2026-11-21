export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden>
      <div className="absolute inset-0 rounded-full bg-electric/10 blur-3xl" />
      <svg viewBox="0 0 500 500" className="relative h-full w-full">
        <defs>
          <linearGradient id="hv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F2F4F7" /><stop offset="1" stopColor="#668BC5" /></linearGradient>
          <radialGradient id="hg"><stop offset="0" stopColor="#668BC5" stopOpacity=".35" /><stop offset="1" stopColor="#668BC5" stopOpacity="0" /></radialGradient>
        </defs>
        <circle cx="250" cy="250" r="230" fill="url(#hg)" />
        <g className="spin-slow"><circle cx="250" cy="250" r="220" fill="none" stroke="#B7C0CC" strokeOpacity=".25" strokeDasharray="2 10" /><circle cx="250" cy="30" r="5" fill="#668BC5" /></g>
        <g className="spin-rev"><circle cx="250" cy="250" r="170" fill="none" stroke="#668BC5" strokeOpacity=".4" strokeDasharray="60 14" /><rect x="76" y="246" width="8" height="8" fill="#F2F4F7" /></g>
        <circle cx="250" cy="250" r="120" fill="#171C25" stroke="#B7C0CC" strokeOpacity=".2" />
        <g className="float">
          <path d="M190 180h28v140h-28zM282 180h28v140h-28zM218 180h28l36 140h-28z" fill="url(#hv)" />
          <rect x="239" y="180" width="14" height="14" fill="#090B10" />
        </g>
        <g fontFamily="JetBrains Mono Variable, monospace" fontSize="11" fill="#B7C0CC">
          <text x="30" y="110">&gt; sistemas.build()</text><text x="330" y="420">&gt; ia.aprende()</text><text x="300" y="70">&gt; fluxos.automatiza()</text>
        </g>
      </svg>
    </div>
  )
}
