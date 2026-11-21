import { Braces, BrainCircuit, Workflow } from 'lucide-react'
export const services = [
  { id: 'software', icon: Braces, title: 'Desenvolvimento de software', short: 'Sistemas web e plataformas sob medida.',
    desc: 'Criamos aplicações web e sistemas internos desenhados em torno do seu processo, com arquitetura limpa e fácil de evoluir.',
    problem: 'Planilhas, ferramentas desconexas e sistemas legados que travam o crescimento e escondem informação.',
    apps: ['Portais e painéis de gestão', 'Sistemas de cadastro e atendimento', 'Integração entre sistemas existentes', 'Modernização de aplicações antigas'] },
  { id: 'ia', icon: BrainCircuit, title: 'Inteligência artificial', short: 'IA aplicada a problemas reais de negócio.',
    desc: 'Aplicamos modelos de linguagem e análise de dados onde geram valor, com escopo claro e supervisão humana.',
    problem: 'Grandes volumes de texto e dados que consomem tempo da equipe e não viram decisão.',
    apps: ['Assistentes de atendimento', 'Classificação e resumo de documentos', 'Busca inteligente em bases internas', 'Apoio à análise de dados'] },
  { id: 'automacao', icon: Workflow, title: 'Automação empresarial', short: 'Processos repetitivos rodando sozinhos.',
    desc: 'Mapeamos fluxos e automatizamos as etapas manuais, conectando as ferramentas que a empresa já usa.',
    problem: 'Tarefas repetitivas, retrabalho e erros manuais que desperdiçam o tempo de quem deveria estar pensando.',
    apps: ['Fluxos de aprovação', 'Emissão e conferência de documentos', 'Sincronização entre ferramentas', 'Alertas e relatórios automáticos'] },
]
