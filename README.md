# Infinit Modas

Site da loja **Infinit Modas** (moda feminina e acessórios, Centro de Santa Rosa – RS), feito com Next.js 16, React 19, TypeScript e Tailwind CSS 4.

## Rodar no computador

Precisa do [Node.js](https://nodejs.org) 20 ou mais novo.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Para gerar a versão de produção:

```bash
npm run build
npm start
```

## Onde mudar as coisas

- **Telefones, endereço, horário e redes sociais:** `src/lib/site.ts`
- **Seções da página:** `src/components/sections/`
- **Efeitos de mouse e rolagem:** `src/components/Interactions.tsx`
- **Cores e animações:** `src/app/globals.css`

## Fotos

Coloque as fotos reais em `public/fotos/` com os nomes listados em `public/fotos/LEIA-ME.txt`. Enquanto uma foto não existir, o site mostra um fundo decorativo no lugar.
