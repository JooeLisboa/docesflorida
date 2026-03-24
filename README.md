# Flórida Doces — Cartão Interativo Premium

Projeto de página única em **Next.js + TypeScript + Tailwind CSS**, criado para apresentar a marca **Flórida Doces - Brigaderia 🍫** em formato de cartão interativo elegante, delicado e focado em conversão para WhatsApp.

---

## 1) Visão geral do projeto

Este projeto entrega uma experiência de cartão digital premium com foco em:

- estética sofisticada e emocional;
- linguagem visual leve, com atmosfera de Páscoa refinada;
- copy curta e acolhedora;
- seção de produtos em destaque;
- CTA direto para encomendas via WhatsApp;
- arquitetura escalável e simples de editar.

A proposta evita complexidade de e-commerce completo para preservar o conceito de **cartão interativo premium**.

---

## 2) Conceito visual

Direção adotada:

- **base off-white/creme/champagne** para leveza;
- **dourado elegante** como cor de destaque;
- **tipografia editorial** para títulos + texto limpo para leitura;
- **glassmorphism sutil** com bordas suaves e sombra controlada;
- elementos discretos de Páscoa (glows, partículas e shapes orgânicos);
- microinterações curtas e performáticas (sem excesso de animação).

Resultado esperado: sensação de marca artesanal premium, afetiva e moderna.

---

## 3) Tecnologias usadas

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (entrada suave no hero)
- **lucide-react** (ícones leves)
- **next/image** (otimização de imagens)

---

## 4) Estrutura de pastas

```bash
.
├── app/
│   ├── cartao/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BackgroundEffects.tsx
│   ├── BrandIntroSection.tsx
│   ├── CardShell.tsx
│   ├── ContactSection.tsx
│   ├── FeaturedProductsSection.tsx
│   ├── FloatingWhatsAppButton.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   └── ProductCard.tsx
├── data/
│   └── siteContent.ts
├── public/
│   └── images/
│       ├── logo-florida.svg
│       ├── product-brigadeiro.svg
│       ├── product-kit.svg
│       └── product-ovo.svg
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

## 5) Explicação dos componentes

- `HeroSection`: logo, título, bio, CTAs principais.
- `BrandIntroSection`: texto institucional afetivo da marca.
- `FeaturedProductsSection`: grade de destaques (3 produtos).
- `ProductCard`: card reutilizável de produto com imagem e CTA.
- `ContactSection`: bloco de encomendas com WhatsApp.
- `Footer`: fechamento delicado com identidade da marca.
- `FloatingWhatsAppButton`: CTA fixo no mobile/desktop.
- `BackgroundEffects`: camadas leves de atmosfera visual.
- `CardShell`: container padrão com estilo premium reutilizável.

---

## 6) Como editar os textos

Todos os textos ficam em `data/siteContent.ts`:

- `brand.name`, `brand.subtitle`, `brand.bio`;
- `intro.title`, `intro.text`;
- `contact.primaryCTA`, `contact.secondaryCTA`;
- `brand.footerLine`.

Assim, você altera conteúdo sem tocar no layout dos componentes.

---

## 7) Como editar produtos

No mesmo arquivo `data/siteContent.ts`, altere o array `products`.

Cada item possui:

- `id`
- `name`
- `description`
- `image`
- `imageAlt`
- `ctaLabel`

O componente `FeaturedProductsSection` renderiza automaticamente.

---

## 8) Como trocar imagens

1. Adicione os arquivos em `public/images`.
2. Atualize o campo `image` de cada produto em `data/siteContent.ts`.
3. Se trocar logo, ajuste `/images/logo-florida.svg` ou o caminho em `HeroSection` e `Footer`.

Recomendação:

- preferir **WebP/AVIF** ou SVG leve;
- manter dimensões coerentes;
- evitar arquivos grandes para preservar performance.

---

## 9) Como alterar WhatsApp

No arquivo `data/siteContent.ts`, ajuste:

- `contact.phoneDisplay` (formato visual);
- `contact.phoneRaw` (somente números, padrão wa.me);
- `contact.prefilledMessage` (mensagem inicial automática).

A função `getWhatsAppLink()` já centraliza e codifica o link.

---

## 10) Como alterar cores

As cores estão em dois pontos:

1. **Tailwind**: `tailwind.config.ts` (`cream`, `champagne`, `gold`, `mocha`, `rose`).
2. **Dados de marca**: `data/siteContent.ts` (`colors`) para referência central.

Isso permite evolução da identidade visual sem retrabalho estrutural.

---

## 11) Como rodar localmente

```bash
npm install
npm run dev
```

Depois abra:

- `http://localhost:3000/cartao`

---

## 12) Como fazer build

```bash
npm run build
npm run start
```

---

## 13) Decisões de performance adotadas

- uso de **Next.js App Router**;
- imagens com `next/image` e assets locais leves;
- animação mínima (somente entrada suave no hero);
- sem bibliotecas visuais pesadas;
- estrutura enxuta de componentes;
- classes Tailwind organizadas para evitar CSS extenso.

---

## 14) Boas práticas usadas

- dados centralizados (`data/siteContent.ts`);
- componentes pequenos e reutilizáveis;
- separação clara entre conteúdo e apresentação;
- sem hardcode espalhado para telefone/CTAs/produtos;
- layout mobile-first com boa leitura e toque.

---

## 15) Sugestões de expansão futura (sem quebrar a proposta)

- adicionar carrossel opcional de depoimentos curtos;
- incluir seção “sabores da semana” com toggle simples;
- conexão com CMS leve (ex.: JSON externo ou headless CMS);
- modo sazonal (Páscoa, Dia das Mães, Natal) por tema;
- tag de disponibilidade por produto (sob encomenda / pronta entrega).

> Recomendação: manter sempre o limite de uma página curta e elegante para não descaracterizar o formato de cartão interativo.
