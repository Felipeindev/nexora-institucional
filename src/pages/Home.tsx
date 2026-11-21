import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Sparkles, GitBranch, ShieldCheck } from 'lucide-react'
import { Button, FeatureCard, Reveal, SectionHeading, useSeo } from '../components/ui'
import HeroVisual from '../components/HeroVisual'
import { services } from '../lib/data'

const diffs = [
  { icon: Layers, title: 'Engenharia sob medida', text: 'Cada solução nasce do seu processo, não de um modelo pronto adaptado à força.' },
  { icon: Sparkles, title: 'IA com propósito', text: 'Usamos inteligência artificial onde ela resolve um problema concreto, e só nele.' },
  { icon: GitBranch, title: 'Processo antes da ferramenta', text: 'Entendemos e simplificamos o fluxo antes de automatizar qualquer etapa.' },
  { icon: ShieldCheck, title: 'Entrega transparente', text: 'Etapas curtas, decisões documentadas e visibilidade do andamento do começo ao fim.' },
]

export default function Home() {
  useSeo('NEXORA | Software, IA e automação empresarial', 'A NEXORA desenvolve soluções digitais que conectam inovação, eficiência e crescimento para empresas que desejam evoluir.')
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.25em] text-electric">Software · IA · Automação</p>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] md:text-6xl"><span className="text-metal">O futuro dos negócios</span> começa com tecnologia inteligente.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-silver">Desenvolvemos soluções digitais que conectam inovação, eficiência e crescimento para empresas que desejam evoluir.</p>
            <div className="mt-9 flex flex-wrap gap-4"><Button to="/solucoes">Conheça nossas soluções</Button><Button to="/sobre#contato" variant="ghost">Fale com a NEXORA</Button></div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-5">
        <Reveal className="lg:col-span-3"><SectionHeading eyebrow="01 / Institucional" title="Tecnologia que trabalha para o seu negócio." text="A NEXORA une desenvolvimento de software, inteligência artificial e automação para pequenas e médias empresas em transformação digital. Nosso foco é eficiência real: menos retrabalho, mais clareza e crescimento sustentável." /></Reveal>
        <Reveal delay={0.15} className="lg:col-span-2"><div className="panel rounded-2xl p-7 font-mono text-sm text-silver">
          {['Software sob medida', 'IA aplicada', 'Automação de processos'].map((t, i) => <p key={t} className="flex items-center gap-3 border-b border-silver/10 py-4 last:border-0"><span className="text-electric">0{i + 1}</span>{t}</p>)}
        </div></Reveal>
      </section>

      <section className="border-y border-silver/10 bg-graphite/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal><SectionHeading eyebrow="02 / Soluções" title="Três frentes, um mesmo objetivo." /></Reveal>
          <div className="mt-12">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.08}>
                <Link to="/solucoes" className="group flex items-center gap-6 border-t border-silver/15 py-8 transition hover:pl-3 last:border-b">
                  <span className="font-mono text-sm text-electric">0{i + 1}</span>
                  <s.icon className="hidden text-silver transition group-hover:text-electric sm:block" aria-hidden />
                  <div className="flex-1"><h3 className="font-display text-xl md:text-2xl">{s.title}</h3><p className="mt-1 text-silver">{s.short}</p></div>
                  <ArrowRight className="text-silver transition group-hover:translate-x-1 group-hover:text-electric" aria-label="Ver solução" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal><SectionHeading eyebrow="03 / Diferenciais" title="Como trabalhamos de forma diferente." /></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {diffs.map((d, i) => <Reveal key={d.title} delay={i * 0.08}><FeatureCard {...d} index={`0${i + 1}`} /></Reveal>)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal><div className="panel relative overflow-hidden rounded-3xl px-8 py-16 text-center md:py-20">
          <div className="grid-bg absolute inset-0 opacity-70" aria-hidden />
          <div className="relative"><h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold md:text-4xl">Pronto para mover o seu negócio adiante?</h2>
            <p className="mx-auto mt-4 max-w-xl text-silver">Conte-nos o seu desafio e desenhamos juntos o próximo passo.</p>
            <div className="mt-8 flex justify-center"><Button to="/sobre#contato">Fale com a NEXORA</Button></div></div>
        </div></Reveal>
      </section>
    </>
  )
}
