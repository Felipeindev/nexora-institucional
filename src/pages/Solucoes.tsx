import { Check } from 'lucide-react'
import { Button, Reveal, SectionHeading, useSeo } from '../components/ui'
import { services } from '../lib/data'

export default function Solucoes() {
  useSeo('Soluções | NEXORA', 'Desenvolvimento de software, inteligência artificial e automação empresarial: conheça as soluções da NEXORA.')
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Soluções" title="Tecnologia aplicada ao que trava o seu negócio." text="Três áreas complementares, desenhadas para funcionar juntas ou separadas." />
        </div>
      </section>
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className="border-t border-silver/10 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="font-mono text-7xl font-light text-electric/30 md:text-8xl">0{i + 1}</span>
                <div className="panel mt-4 flex h-16 w-16 items-center justify-center rounded-2xl"><s.icon className="text-electric" size={30} aria-hidden /></div>
                <h2 className="mt-6 font-display text-3xl font-semibold">{s.title}</h2>
              </div>
            </Reveal>
            <div className="space-y-8 lg:col-span-8">
              <Reveal><p className="text-xl leading-relaxed text-ice">{s.desc}</p></Reveal>
              <div className="grid gap-5 md:grid-cols-2">
                <Reveal delay={0.08}><div className="panel h-full rounded-2xl p-6"><p className="font-mono text-xs uppercase tracking-[.2em] text-electric">Problema que resolve</p><p className="mt-3 leading-relaxed text-silver">{s.problem}</p></div></Reveal>
                <Reveal delay={0.16}><div className="panel h-full rounded-2xl p-6"><p className="font-mono text-xs uppercase tracking-[.2em] text-electric">Aplicações práticas</p>
                  <ul className="mt-3 space-y-2">{s.apps.map(a => <li key={a} className="flex gap-2 text-silver"><Check size={18} className="mt-0.5 shrink-0 text-electric" aria-hidden />{a}</li>)}</ul></div></Reveal>
              </div>
              <Reveal><Button to="/sobre#contato" variant="ghost">Conversar sobre {s.title.toLowerCase()}</Button></Reveal>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
