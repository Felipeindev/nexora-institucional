import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Layout from './components/Layout'
const Home = lazy(() => import('./pages/Home'))
const Solucoes = lazy(() => import('./pages/Solucoes'))
const Sobre = lazy(() => import('./pages/Sobre'))
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Suspense fallback={<div className="min-h-screen bg-obsidian" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="solucoes" element={<Solucoes />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </MotionConfig>
  )
}
