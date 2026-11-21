import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { Button } from './ui'

const links = [{ to: '/', label: 'Início' }, { to: '/solucoes', label: 'Soluções' }, { to: '/sobre', label: 'Sobre' }]

function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  const item = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 text-sm transition ${isActive ? 'text-ice after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-electric' : 'text-silver hover:text-ice'}`
  return (
    <header className="sticky top-0 z-50 border-b border-silver/10 bg-obsidian/75 backdrop-blur-xl">
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" aria-label="NEXORA, página inicial"><Logo /></Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(l => <NavLink key={l.to} to={l.to} end className={item}>{l.label}</NavLink>)}
          <Button to="/sobre#contato">Fale conosco</Button>
        </div>
        <button className="rounded-lg p-2 md:hidden" aria-expanded={open} aria-controls="menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <motion.div id="menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-5 border-t border-silver/10 px-6 py-6 md:hidden">
          {links.map(l => <NavLink key={l.to} to={l.to} end className={item}>{l.label}</NavLink>)}
          <Button to="/sobre#contato">Fale conosco</Button>
        </motion.div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-silver/10 bg-graphite/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-5 font-mono text-xs text-electric">Technology that moves business forward.</p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-col gap-3 text-sm text-silver">
          {links.map(l => <Link key={l.to} to={l.to} className="w-fit transition hover:text-ice">{l.label}</Link>)}
        </nav>
        <div className="text-sm text-silver">
          <a href="mailto:contato@nexora.example" className="transition hover:text-ice">contato@nexora.example</a>
          <p className="mt-3 text-xs leading-relaxed text-silver/70">NEXORA é uma empresa fictícia criada para fins de portfólio. O e-mail acima é demonstrativo e não existe.</p>
        </div>
      </div>
      <p className="border-t border-silver/10 py-5 text-center font-mono text-xs text-silver/50">© 2026 NEXORA · Projeto de demonstração</p>
    </footer>
  )
}

export default function Layout() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 80)
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return (
    <div className="min-h-screen">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:m-3 focus:rounded focus:bg-ice focus:px-4 focus:py-2 focus:text-obsidian">Ir para o conteúdo</a>
      <Navbar />
      <motion.main id="conteudo" key={pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  )
}
