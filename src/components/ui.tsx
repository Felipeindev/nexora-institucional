import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, type ReactNode } from 'react'
import { ArrowUpRight, type LucideIcon } from 'lucide-react'

export function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[.25em] text-electric">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-silver">{text}</p>}
    </div>
  )
}

type BtnProps = { children: ReactNode; to?: string; variant?: 'primary' | 'ghost'; type?: 'button' | 'submit'; disabled?: boolean }
export function Button({ children, to, variant = 'primary', type = 'button', disabled }: BtnProps) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition duration-300 active:scale-[.97] disabled:opacity-50 ${
    variant === 'primary' ? 'bg-ice text-obsidian hover:bg-electric' : 'border border-silver/30 text-ice hover:border-electric hover:text-electric'}`
  const icon = <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
  return to ? <Link to={to} className={cls}>{children}{icon}</Link> : <button type={type} disabled={disabled} className={cls}>{children}</button>
}

export function FeatureCard({ icon: Icon, title, text, index }: { icon: LucideIcon; title: string; text: string; index: string }) {
  return (
    <div className="panel group relative h-full overflow-hidden rounded-2xl p-7 transition duration-500 hover:-translate-y-1 hover:border-electric/50">
      <span className="font-mono text-xs text-silver/50">{index}</span>
      <Icon className="mt-6 text-electric transition group-hover:scale-110" size={28} aria-hidden />
      <h3 className="mt-5 font-display text-xl font-medium">{title}</h3>
      <p className="mt-3 leading-relaxed text-silver">{text}</p>
      <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-electric/10 blur-2xl transition group-hover:bg-electric/25" />
    </div>
  )
}
