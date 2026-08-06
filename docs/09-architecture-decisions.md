# WIL.DEV

# Documento 09 — Project Decisions

**Versão:** 1.0

**Status:** Living Document

---

# Objetivo

Este documento registra todas as decisões arquiteturais, funcionais e estratégicas tomadas durante o desenvolvimento do projeto.

Seu objetivo é evitar ambiguidades, registrar o histórico das decisões e servir como referência para futuras implementações.

Sempre que uma decisão alterar algum documento já aprovado, este documento deverá ser atualizado e o documento impactado deverá receber uma nova versão.

---

# DEC-001

## Arquitetura Multi-Page

**Status**

Approved

**Data**

05/08/2026

**Descrição**

O projeto utilizará arquitetura Multi-Page.

A Home será apenas uma página de apresentação.

Cada área importante possuirá sua própria URL.

**Motivação**

- Melhor SEO
- Melhor escalabilidade
- Melhor organização
- Melhor experiência do usuário

---

# DEC-002

## Idioma Principal

**Status**

Approved

**Descrição**

O idioma principal do projeto será Inglês.

Português será disponibilizado como idioma secundário.

**Motivação**

O posicionamento profissional possui foco internacional e grande parte da produção técnica já é publicada em inglês.

---

# DEC-003

## Case Studies

**Status**

Approved

**Descrição**

A seção "Projects" foi substituída por "Case Studies".

**Motivação**

O termo comunica melhor problemas resolvidos, arquitetura, decisões técnicas e resultados obtidos.

---

# DEC-004

## Conteúdo Primeiro

**Status**

Approved

**Descrição**

O conteúdo será o principal ativo do projeto.

O design deverá servir para destacar a informação.

Nunca competir com ela.

---

# DEC-005

## Escopo da V1

**Status**

Approved

**Descrição**

A primeira versão não incluirá:

- Labs
- Knowledge Graph
- Integrações automáticas
- CMS
- Backend
- API
- Busca

Esses itens passam oficialmente para o backlog da V2.

---

---

# DEC-006

## Career Outside Main Navigation

**Status**

Approved

**Categoria**

Information Architecture

**Descrição**

A página **Career** continuará fazendo parte da arquitetura da aplicação, porém deixará de integrar o menu principal.

Ela será acessível através da página **About**, por chamadas contextuais (Call To Action), além de permanecer disponível no rodapé do site.

---

**Motivação**

A maioria dos visitantes deseja compreender rapidamente:

- Quem é o profissional;
- No que ele é especialista;
- Quais projetos realizou;
- Como entrar em contato.

A timeline completa da carreira representa um conteúdo complementar, importante para recrutadores e clientes que desejam aprofundar a análise do histórico profissional, mas não constitui um ponto de entrada prioritário para a navegação.

Essa decisão reduz a quantidade de itens do menu principal, melhora a experiência do usuário e fortalece a narrativa construída pelo site.

---

**Impacto**

Documentos impactados:

- Documento 02 — Information Architecture
- Documento 05 — Content Strategy
- Documento 06 — Sitemap & Navigation

Nenhum impacto na estrutura funcional da aplicação.

---

# DEC-007

## Technical Stack

**Status**

Approved

**Categoria**

Technical Architecture

---

### Descrição

A primeira versão do WIL.DEV será desenvolvida utilizando uma arquitetura baseada em geração de sites estáticos (Static Site Generation - SSG).

A stack oficial do projeto será composta por:

- Astro
- TypeScript
- HTML5
- CSS3
- JavaScript (ES Modules)
- Markdown como fonte de conteúdo
- Git
- GitHub
- GitHub Pages para hospedagem

Todo o conteúdo do site será armazenado em arquivos Markdown organizados por idioma, permanecendo completamente separado da implementação.

---

### Restrições Arquiteturais

A implementação deverá respeitar obrigatoriamente as seguintes restrições.

- Hospedagem em GitHub Pages.
- Site 100% estático.
- Nenhum backend.
- Nenhum banco de dados.
- Nenhuma API própria.
- Nenhum conteúdo hardcoded nos componentes.
- Internacionalização baseada em arquivos.
- Compatibilidade com domínio próprio.
- SEO completo.
- Excelente performance.

---

### Motivação

A stack foi escolhida por atender aos principais objetivos definidos para a primeira versão do projeto.

- Excelente performance.
- Compatibilidade nativa com GitHub Pages.
- Ótimo suporte a Markdown.
- Facilidade para internacionalização.
- Excelente SEO.
- Estrutura baseada em componentes.
- Baixa complexidade de manutenção.
- Evolução futura sem necessidade de reescrever o projeto.

Além disso, Astro permite construir uma aplicação moderna mantendo uma saída totalmente estática, alinhando-se perfeitamente às restrições arquiteturais estabelecidas para a V1.

---

### Impacto

Documentos impactados.

- Documento 07 — Development Guidelines

Nenhum outro documento necessita de alteração.

---

### Alternativas Avaliadas

As seguintes alternativas foram consideradas durante o planejamento.

- HTML/CSS/JavaScript puro
- Vite
- Eleventy (11ty)
- Hugo
- Next.js (Static Export)

Após análise, Astro apresentou o melhor equilíbrio entre simplicidade, organização, performance e capacidade de evolução.

---

# DEC-008

## Content-Driven Expertise Architecture

**Status**

Approved

**Categoria**

Information Architecture

---

### Descrição

A página **Expertise** deixará de funcionar como uma lista estática de competências.

Ela passará a atuar como um índice de especializações, organizando as principais áreas de conhecimento do profissional.

Cada área de especialização será representada por um componente visual (Technology Card) e poderá evoluir futuramente para uma página dedicada.

Exemplos.

```
/expertise

↓

Adobe Experience Cloud

↓

/expertise/adobe-experience-cloud
```

```
/expertise

↓

Software Architecture

↓

/expertise/software-architecture
```

---

### Princípios

Cada área deverá apresentar apenas informações objetivamente comprováveis.

Sempre que possível deverão ser exibidos:

- Visão geral.
- Principais tecnologias.
- Projetos relacionados.
- Artigos relacionados.
- Tempo de experiência.
- Funções desempenhadas.
- Competências relacionadas.

O conteúdo será mantido em arquivos Markdown.

A camada visual será responsável apenas pela apresentação dessas informações.

---

### Motivação

O objetivo é transformar a página Expertise em uma base estruturada de conhecimento profissional, substituindo listas tradicionais de tecnologias por uma navegação orientada por especialidades.

Essa abordagem oferece diversos benefícios.

- Melhor organização.
- Maior escalabilidade.
- Melhor experiência de navegação.
- Melhor SEO.
- Reutilização do conteúdo.
- Separação entre conteúdo e apresentação.

Além disso, essa arquitetura permite que novas especialidades sejam adicionadas ao longo do tempo sem necessidade de reestruturar a página principal.

---

### Impacto

Documentos impactados.

- Documento 02 — Information Architecture
- Documento 05 — Content Strategy
- Documento 06 — Sitemap & Navigation
- Documento 07 — Development Guidelines

Impacto no conteúdo.

- `content/en/expertise.md`
- `content/pt-br/expertise.md`

Impacto futuro.

Cada área de especialização poderá evoluir para uma página própria dentro de `/expertise/`.

---

### Decisão Complementar

Os componentes de interface (Technology Cards) não deverão conter informações fixas.

Todo o conteúdo será carregado a partir dos arquivos Markdown, mantendo a separação entre conteúdo e apresentação estabelecida pela arquitetura do projeto.

---