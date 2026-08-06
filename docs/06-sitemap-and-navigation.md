# WIL.DEV

# Documento 06 — Sitemap & Navigation

**Versão:** 1.1
**Status:** Approved

---

# 1. Objetivo

Este documento define a estrutura de navegação da primeira versão do WIL.DEV.

Seu objetivo é estabelecer como os visitantes navegarão pelo site, garantindo uma experiência simples, consistente e intuitiva.

Este documento complementa a Arquitetura da Informação, definindo páginas, menus, relacionamentos e fluxo de navegação.

---

# 2. Princípios

Toda navegação deverá seguir os princípios abaixo.

## Simplicidade

Qualquer informação importante deverá ser encontrada rapidamente.

---

## Consistência

O menu principal deverá permanecer igual em todas as páginas.

---

## Clareza

Cada item do menu deverá representar claramente seu conteúdo.

---

## Escalabilidade

Novas páginas poderão ser adicionadas sem necessidade de reorganizar toda a navegação.

---

## SEO

Cada conteúdo relevante possuirá uma URL própria.

---

# 3. Sitemap

```
/

├── Home

├── About

├── Expertise

├── Case Studies
│
│   ├── Portal O TEMPO
│   ├── Palmeiras
│   ├── Cogna
│   ├── Yduqs
│   ├── Razões para Acreditar
│   ├── Find Motoboy
│   └── Irani

├── Writing

├── Career

├── Learning

└── Contact
```

---

# 4. Menu Principal

O menu principal será composto por apenas seis itens.

- Home
- About
- Expertise
- Case Studies
- Writing
- Contact

O objetivo é manter uma navegação simples e objetiva.

---

# 5. Menu Secundário

A página About funcionará como ponto de acesso para conteúdos complementares.

A partir dela será possível acessar:

- Career Timeline
- Learning

Essas páginas permanecem acessíveis, porém não fazem parte da navegação principal.

---

# 6. Footer

O rodapé deverá conter.

## Navegação

- About
- Expertise
- Case Studies
- Writing
- Career
- Learning
- Contact

---

## Canais

- LinkedIn
- GitHub
- Gists
- Medium

---

## Idiomas

- English
- Português

---

## Informações

- Copyright
- Ano
- Versão do Site (opcional)

---

# 7. Navegação dos Case Studies

Todos os estudos de caso seguirão exatamente a mesma estrutura.

```
Case Studies

↓

Lista

↓

Case

↓

Próximo Case

↓

Case Studies
```

Cada página deverá possuir.

- Voltar para lista
- Estudo anterior
- Próximo estudo

---

# 8. Navegação entre Idiomas

O visitante poderá trocar o idioma em qualquer página.

Exemplo.

```
/case-studies/o-tempo

↓

/pt-br/case-studies/o-tempo
```

A mudança de idioma deverá preservar a página atual.

---

# 9. Navegação Contextual

As páginas deverão criar conexões naturais entre os conteúdos.

Exemplos.

## About

↓

Career Timeline

↓

Learning

↓

Case Studies

---

## Expertise

↓

Tecnologia

↓

Case Study relacionado

↓

Artigo relacionado

---

## Writing

↓

Case Study relacionado

↓

Expertise relacionada

---

Essa estratégia reduz duplicidade e melhora a descoberta de conteúdo.

---

# 10. Call To Actions

Cada página deverá possuir pelo menos uma chamada para ação.

## Home

Explore Case Studies

---

## About

View Career Timeline

Explore My Expertise

---

## Expertise

See Related Case Studies

---

## Case Study

View Next Case

---

## Writing

Read More Articles

---

## Contact

Let's Talk

---

# 11. Navegação Mobile

No Mobile.

- Menu tipo Hamburger.
- Navegação simplificada.
- Conteúdo priorizado.

---

# 12. Navegação Desktop

No Desktop.

- Menu fixo.
- Header reduzido durante scroll.
- Navegação sempre disponível.

---

# 13. Breadcrumbs

A V1 não utilizará breadcrumbs.

A estrutura de navegação é suficientemente simples para dispensar esse recurso.

O uso poderá ser reavaliado na V2.

---

# 14. Página 404

A aplicação deverá possuir uma página personalizada.

A página deverá oferecer.

- Link para Home
- Link para Case Studies
- Link para Writing
- Link para Contact

---

# 15. Estrutura das URLs

As URLs deverão ser simples, previsíveis e permanentes.

Exemplos.

```
/

/about

/expertise

/case-studies

/case-studies/o-tempo

/case-studies/palmeiras

/writing

/contact
```

Versão em português.

```
/pt-br/

/pt-br/about

/pt-br/expertise

/pt-br/case-studies

/pt-br/case-studies/o-tempo
```

As URLs permanecerão em inglês mesmo na versão em português.

Essa decisão simplifica manutenção, internacionalização e SEO.

---

# 16. Objetivo Final

Ao navegar pelo WIL.DEV, o visitante deverá compreender rapidamente:

- Quem é o profissional.
- No que ele é especialista.
- Quais problemas resolveu.
- Como compartilha conhecimento.
- Como entrar em contato.

A navegação deverá parecer natural e fluida, conduzindo o visitante através de uma narrativa construída em torno da experiência profissional, sem depender de menus complexos ou estruturas difíceis de compreender.

---