# Frutíferas João Pessoa

Landing page local em React 19, TypeScript strict, Vite, CSS Modules e Lucide React.

```bash
npm install
npm run dev
```

Validação: `npm run typecheck`, `npm run lint`, `npm run build`. A pasta `dist` pode ser hospedada em qualquer serviço de arquivos estáticos.

Testes de navegador: `npx playwright install chromium` e `npx playwright test` (com `npm run dev` em outro terminal). Cobrem as sete larguras do briefing, URLs de contato, menu mobile, teclado e foco do lightbox, imagens carregadas e mensagem do formulário.

## Conteúdo e fotos

Dados comerciais centralizados em `src/config/site.ts`; categorias e galeria em `src/data`. As fotografias são referências ilustrativas do Unsplash, identificadas na interface; não são fotos da empresa e não documentam técnicas de enxertia ou alporquia. Substitua os arquivos em `public/images` por fotografias oficiais autorizadas (versões WebP de 480 e 960 px) e atualize descrições e avisos depois de validar a origem. Não há preços, estoque garantido, checkout ou coleta em backend.

## SEO

Copie `.env.example` para `.env.local` e defina `VITE_SITE_URL` com o domínio HTTPS real antes do build. Canonical, URL e imagem Open Graph são configurados com esse domínio; nenhum domínio fictício é usado. Favicon tipográfico provisório configurável via `VITE_FAVICON_URL`. Fontes locais. O mapa é incorporado do Google Maps; os contatos abrem WhatsApp e Instagram.

## Interações

Menu mobile com Escape, galeria em modal nativo com foco confinado e restaurado, navegação por setas, formulário que monta mensagem no WhatsApp. Animações respeitam `prefers-reduced-motion`. Formulário sem armazenamento. Categorias ilustrativas com disponibilidade sujeita a consulta.
