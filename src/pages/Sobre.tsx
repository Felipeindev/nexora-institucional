import { Compass, Eye, Gem, Handshake, Lightbulb, Target } from 'lucide-react'
import { FeatureCard, Reveal, SectionHeading, useSeo } from '../components/ui'
import ContactForm from '../components/ContactForm'

const values = [
  { icon: Gem, title: 'Clareza', text: 'Comunicação direta, sem jargão desnecessário.' },
  { icon: Handshake, title: 'Confiança', text: 'Compromissos realistas e entregas consistentes.' },
  { icon: Lightbulb, title: 'Inovação útil', text: 'Novidade só quando gera valor para o cliente.' },
  { icon: Compass, title: 'Responsabilidade', text: 'Cuidado com dados, qualidade e consequências.' },
]
const pillars = [
  { icon: Target, title: 'Propósito', text: 'Tornar a tecnologia acessível e útil, para que empresas de qualquer porte cresçam com mais eficiência.' },
  { icon: Eye, title: 'Visão', text: 'Ser referência em soluções digitais que unem inovação, confiança e resultados sustentáveis.' },
]
const steps = [['Descoberta', 'Entendemos o negócio, as pessoas e o problema real.'], ['Desenho', 'Definimos escopo, arquitetura e prioridades.'], ['Construção', 'Desenvolvemos em ciclos curtos com validações frequentes.'], ['Entrega', 'Publicamos com testes, documentação e treinamento.'], ['Evolução', 'Acompanhamos o uso e refinamos continuamente.']]

export default function Sobre() {
  useSeo('Sobre | NEXORA', 'Conheça o propósito, a visão, os valores e a metodologia da NEXORA, e entre em contato.')
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Sobre a NEXORA" title="Uma empresa de tecnologia feita para mover negócios." text="A NEXORA é uma empresa fictícia criada para demonstrar um projeto de portfólio. Ela representa uma consultoria que desenvolve software, IA e automação para pequenas e médias empresas." />
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2">
        {pillars.map((p, i) => <Reveal key={p.title} delay={i * 0.1}><div className="panel h-full rounded-3xl p-9"><p.icon className="text-electric" size={32} aria-hidden /><h2 className="mt-6 font-display text-2xl">{p.title}</h2><p className="mt-3 text-lg leading-relaxed text-silver">{p.text}</p></div></Reveal>)}
      </section>
      <section className="border-y border-silver/10 bg-graphite/40 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <Reveal><SectionHeading eyebrow="Filosofia de trabalho" title="Simples primeiro. Sofisticado quando necessário." /></Reveal>
          <Reveal delay={0.1}><p className="text-lg leading-relaxed text-silver">Acreditamos que a melhor tecnologia é a que desaparece no dia a dia: resolve o problema, economiza tempo e não exige que ninguém aprenda um sistema complicado. Por isso colocamos pessoas e processos à frente das ferramentas.</p></Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal><SectionHeading eyebrow="Valores" title="O que guia as nossas decisões." /></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{values.map((v, i) => <Reveal key={v.title} delay={i * 0.08}><FeatureCard {...v} index={`0${i + 1}`} /></Reveal>)}</div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal><SectionHeading eyebrow="Metodologia" title="Cinco etapas, do problema à evolução." /></Reveal>
        <ol className="mt-12 border-l border-electric/40">
          {steps.map(([t, d], i) => <Reveal key={t} delay={i * 0.06}><li className="relative pb-10 pl-8 last:pb-0"><span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-electric" /><span className="font-mono text-xs text-electric">0{i + 1}</span><h3 className="font-display text-xl">{t}</h3><p className="mt-1 text-silver">{d}</p></li></Reveal>)}
        </ol>
      </section>
      <section id="contato" className="mx-auto grid max-w-6xl scroll-mt-24 gap-10 px-6 pb-28 lg:grid-cols-5">
        <Reveal className="lg:col-span-2"><SectionHeading eyebrow="Contato" title="Vamos conversar sobre o seu desafio." text="Preencha o formulário. Este envio é demonstrativo e o endereço contato@nexora.example é fictício." /></Reveal>
        <Reveal delay={0.1} className="lg:col-span-3"><ContactForm /></Reveal>
      </section>
    </>
  )
}
