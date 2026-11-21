import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from './ui'
import { submitContact, type ContactPayload } from '../lib/contact'

type Errors = Partial<Record<keyof ContactPayload, string>>
const empty: ContactPayload = { nome: '', email: '', empresa: '', mensagem: '' }

export default function ContactForm() {
  const [v, setV] = useState(empty)
  const [err, setErr] = useState<Errors>({})
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle')

  const validate = (): Errors => {
    const e: Errors = {}
    if (v.nome.trim().length < 2) e.nome = 'Informe seu nome.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Informe um e-mail válido.'
    if (v.empresa.trim().length < 2) e.empresa = 'Informe o nome da empresa.'
    if (v.mensagem.trim().length < 10) e.mensagem = 'Escreva ao menos 10 caracteres.'
    return e
  }
  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault()
    const e = validate(); setErr(e)
    if (Object.keys(e).length) return
    setState('sending'); await submitContact(v); setV(empty); setState('done')
  }
  if (state === 'done') return (
    <div role="status" className="panel rounded-2xl p-10 text-center">
      <CheckCircle2 className="mx-auto text-electric" size={44} aria-hidden />
      <h3 className="mt-4 font-display text-2xl">Formulário validado com sucesso</h3>
      <p className="mt-2 text-silver">Este é um site de demonstração: nenhuma mensagem foi realmente enviada.</p>
      <button onClick={() => setState('idle')} className="mt-6 text-sm text-electric underline underline-offset-4">Preencher novamente</button>
    </div>
  )
  const field = (k: keyof ContactPayload, label: string, type = 'text') => {
    const common = { id: k, value: v[k], 'aria-invalid': !!err[k], 'aria-describedby': err[k] ? `${k}-e` : undefined,
      onChange: (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value }),
      className: `w-full rounded-xl border bg-obsidian/60 px-4 py-3 text-ice transition placeholder:text-silver/40 hover:border-silver/40 ${err[k] ? 'border-red-400' : 'border-silver/20'}` }
    return (
      <div>
        <label htmlFor={k} className="mb-2 block font-mono text-xs uppercase tracking-[.15em] text-silver">{label}</label>
        {k === 'mensagem' ? <textarea rows={5} {...common} /> : <input type={type} {...common} />}
        {err[k] && <p id={`${k}-e`} className="mt-1.5 text-sm text-red-300">{err[k]}</p>}
      </div>
    )
  }
  return (
    <form onSubmit={onSubmit} noValidate className="panel space-y-5 rounded-2xl p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">{field('nome', 'Nome')}{field('email', 'E-mail', 'email')}</div>
      {field('empresa', 'Empresa')}{field('mensagem', 'Mensagem')}
      <Button type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Enviando…' : 'Enviar mensagem'}</Button>
    </form>
  )
}
