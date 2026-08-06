# WIL.DEV

# Documento 07 — Development Guidelines

**Versão:** 1.1  
**Status:** Approved

---

# 1. Objetivo

Este documento estabelece as diretrizes técnicas para implementação da primeira versão do WIL.DEV.

Seu objetivo é garantir que toda implementação siga os mesmos princípios arquiteturais, padrões de organização e critérios de qualidade definidos durante o planejamento do projeto.

Este documento não define regras de negócio ou conteúdo.

Seu foco é exclusivamente a implementação técnica.

---

# 2. Filosofia de Desenvolvimento

Toda implementação deverá seguir os princípios abaixo.

- Simplicidade acima de complexidade.
- Conteúdo acima de efeitos visuais.
- Performance acima de dependências desnecessárias.
- Organização acima de velocidade.
- Código limpo acima de atalhos.
- Evolução contínua.

O objetivo é produzir um projeto fácil de manter durante muitos anos.

---

# 3. Restrições Arquiteturais

A primeira versão deverá respeitar obrigatoriamente as seguintes restrições.

- Hospedagem em GitHub Pages.
- Geração 100% estática.
- Compatibilidade com domínio próprio.
- Nenhum backend.
- Nenhum banco de dados.
- Nenhuma API própria.
- Todo conteúdo armazenado em arquivos Markdown.
- Internacionalização baseada em arquivos.
- SEO completo.
- Excelente performance.

Essas restrições não poderão ser violadas durante a V1.

---

# 4. Stack Tecnológica

A implementação utilizará uma stack compatível com geração de sites estáticos.

## Framework

Astro

---

## Linguagens

- HTML5
- CSS3
- TypeScript
- JavaScript (ES Modules)

---

## Conteúdo

Markdown (.md)

---

## Controle de Versão

Git

GitHub

---

## Hospedagem

GitHub Pages

---

# 5. Estrutura do Projeto

```text
wil.dev/

docs/
content/
assets/
public/
src/

astro.config.mjs
package.json
README.md
```

Cada diretório deverá possuir uma única responsabilidade.

---

# 6. Organização do Código

```text
src/

components/

layouts/

pages/

styles/

scripts/

utils/

content/
```

Cada módulo deverá possuir responsabilidade única.

Evitar arquivos excessivamente grandes.

---

# 7. Organização dos Assets

```text
assets/

images/

logos/

icons/

documents/

fonts/
```

Todas as imagens deverão possuir nomes descritivos.

Evitar arquivos sem organização.

---

# 8. Organização do Conteúdo

Todo conteúdo permanecerá completamente separado da implementação.

```text
content/

en/

pt-br/
```

Nenhum texto deverá ser escrito diretamente dentro dos componentes.

Toda informação deverá ser carregada a partir dos arquivos Markdown.

---

# 9. Internacionalização

A internacionalização será baseada em estrutura de diretórios.

```text
content/

en/

...

pt-br/

...
```

Cada idioma possuirá exatamente a mesma estrutura.

---

# 10. Convenções

Todos os arquivos deverão utilizar.

- letras minúsculas;
- kebab-case;
- nomes descritivos.

Exemplos.

```
about.md

case-studies

visual-design-direction.md

o-tempo.md
```

---

# 11. Estrutura dos Case Studies

Cada estudo de caso possuirá seu próprio arquivo.

```text
case-studies/

index.md

o-tempo.md

palmeiras.md

cogna.md

yduqs.md

irani.md

find-motoboy.md

razoes-para-acreditar.md
```

Todos seguirão exatamente a mesma estrutura editorial.

---

# 12. Componentização

Os componentes deverão ser reutilizáveis.

Exemplos.

- Header
- Footer
- Hero
- CTA
- Section
- Timeline
- Skill Card
- Technology Badge
- Article Card
- Case Card

Evitar componentes específicos quando um componente genérico puder ser reutilizado.

Os componentes deverão representar informações de forma visual, mantendo o conteúdo separado da apresentação.

Exemplos de componentes:

- Technology Card
- Skill Card
- Case Study Card
- Article Card
- Timeline Item
- Statistic Card
- CTA Banner

Os componentes deverão ser alimentados exclusivamente pelos arquivos de conteúdo (.md), evitando duplicação de informações na camada de apresentação.


---

# 13. Performance

A performance faz parte da experiência do usuário.

Prioridades.

- poucas dependências;
- JavaScript mínimo;
- imagens otimizadas;
- carregamento rápido;
- lazy loading;
- geração estática;
- excelente pontuação no Lighthouse.

Objetivo.

PageSpeed superior a 90.

---

# 14. SEO

Todas as páginas deverão possuir.

- Title
- Meta Description
- Canonical URL
- Open Graph
- Twitter Card
- Structured Data (Schema.org)
- Sitemap
- Robots.txt

URLs deverão ser amigáveis.

---

# 15. Acessibilidade

Toda implementação deverá seguir boas práticas.

Prioridades.

- HTML semântico;
- contraste adequado;
- navegação por teclado;
- foco visível;
- textos alternativos;
- estrutura hierárquica de títulos.

---

# 16. Dark Mode

Dark Mode fará parte da primeira versão.

A implementação deverá utilizar os mesmos componentes.

Não deverão existir páginas duplicadas.

Toda alteração visual deverá ocorrer através de Design Tokens.

---

# 17. Qualidade

Antes de qualquer publicação deverão ser validados.

- Responsividade.
- SEO.
- Acessibilidade.
- Links.
- Performance.
- Conteúdo.
- Internacionalização.

Nenhuma funcionalidade será considerada pronta sem atender esses critérios.

---

# 18. Build e Deploy

Todo processo deverá ser automatizado.

Fluxo esperado.

```
Git Commit

↓

GitHub

↓

Build

↓

GitHub Pages

↓

Publicação
```

Nenhum deploy manual deverá ser necessário.

---

# 19. Evolução

Toda alteração deverá respeitar os documentos aprovados.

Antes de modificar qualquer comportamento deverão ser consultados.

- 00 — Project Charter
- 01 — Product Requirements
- 02 — Information Architecture
- 03 — Brand Identity
- 04 — Visual Design Direction
- 05 — Content Strategy
- 06 — Sitemap & Navigation
- 08 — Project Decisions

Caso uma implementação entre em conflito com algum desses documentos, a decisão deverá ser registrada em **Project Decisions** antes da alteração.

---

# 20. Objetivo Final

O resultado esperado é uma aplicação moderna, rápida, organizada e facilmente evolutiva.

A implementação deverá refletir os mesmos princípios definidos para a marca WIL.DEV: simplicidade, clareza, qualidade, engenharia e foco no conteúdo.

O código deverá ser tão organizado quanto o conteúdo que ele apresenta.

---