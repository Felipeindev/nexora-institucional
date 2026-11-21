# NEXORA — Technology that moves business forward.

Site institucional **fictício** (projeto de portfólio). React + TypeScript + Vite + Tailwind CSS 4 + React Router + Framer Motion + Lucide.
Páginas: `/` (Home), `/solucoes`, `/sobre`. O e-mail `contato@nexora.example` é demonstrativo. **O formulário NÃO envia mensagens**: a integração futura deve ser feita em `src/lib/contact.ts`.

## Publicar sem terminal

### 1. Enviar ao GitHub (pelo navegador)
1. Descompacte o ZIP no app **Arquivos** do ChromeOS.
2. Em github.com, clique em **New repository**, dê um nome (ex.: `nexora`) e clique em **Create repository**.
3. Na página do repositório vazio, clique em **uploading an existing file**.
4. Abra a pasta descompactada, selecione **todo o conteúdo** (`src`, `public`, `package.json`, `package-lock.json`, `vercel.json`, etc.) e arraste para a página. Arrastar pastas preserva a estrutura.
5. Aguarde o upload, escreva uma mensagem (ex.: "Primeira versão") e clique em **Commit changes**.
   Confira que `package.json` está na **raiz** do repositório, não dentro de outra pasta.

### 2. Publicar na Vercel
1. Em vercel.com, entre com sua conta GitHub e clique em **Add New → Project**.
2. Escolha o repositório `nexora` e clique em **Import**.
3. A Vercel detecta **Vite** automaticamente (Build: `npm run build`, Output: `dist`). Não altere nada e clique em **Deploy**.
4. Ao terminar, você recebe o link público. A cada novo commit no GitHub o site é atualizado sozinho.

`vercel.json` garante que `/solucoes` e `/sobre` funcionem ao recarregar a página.
