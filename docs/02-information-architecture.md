# WIL.DEV

# Documento 02 — Information Architecture

**Versão:** 1.1
**Status:** Approved

---

# 1. Objetivo

Este documento define a Arquitetura da Informação (Information Architecture) da primeira versão do WIL.DEV.

Seu objetivo é organizar todo o conteúdo do site de forma lógica, intuitiva e escalável, permitindo que visitantes encontrem rapidamente as informações mais relevantes e possibilitando a evolução contínua do projeto sem necessidade de reorganizações estruturais.

Este documento não define layout, identidade visual ou tecnologias de implementação.

Seu foco é exclusivamente a organização da informação e da navegação.

---

# 2. Princípios

Toda a arquitetura será baseada nos seguintes princípios.

## Clareza

Cada página possui uma única responsabilidade.

O visitante deve compreender imediatamente o objetivo de cada área.

---

## Conteúdo em Primeiro Lugar

O conteúdo é o principal ativo do projeto.

A interface existe para facilitar sua leitura.

---

## Não Repetição

Cada informação deve existir apenas em um único local.

Exemplos.

- História profissional → About
- Competências → Expertise
- Estudos de Caso → Case Studies
- Empresas → Career

Outras páginas apenas referenciam essas informações quando necessário.

---

## Evolução

Novos projetos, artigos e certificações deverão ser adicionados sem necessidade de reorganizar a estrutura existente.

---

## SEO First

Todo conteúdo relevante possuirá uma URL própria.

---

# 3. Estrutura da Aplicação

O WIL.DEV será composto por múltiplas páginas independentes.

A Home funcionará como ponto de entrada da plataforma, apresentando uma visão geral da carreira e direcionando o visitante para os demais conteúdos.

Não será utilizada arquitetura Single Page.

---

# 4. Estrutura do Site

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

Cada página possui uma responsabilidade específica.

---

# 5. Responsabilidade das Páginas

## Home

Apresenta uma visão executiva da carreira.

Objetivos.

- despertar interesse;
- comunicar posicionamento;
- direcionar para as demais páginas.

---

## About

Conta a história profissional.

Apresenta.

- trajetória;
- posicionamento;
- filosofia profissional;
- diferenciais.

Não detalha projetos.

A partir desta página o visitante poderá acessar a Career Timeline.

---

## Expertise

Centraliza todas as competências.

Organizadas por área.

- Adobe Experience Cloud
- Software Architecture
- Cloud Architecture
- Digital Experience
- Martech
- Technical Leadership

---

## Case Studies

Apresenta os principais projetos.

Cada estudo de caso possui página própria.

Estrutura padrão.

- Contexto
- Desafio
- Solução
- Papel desempenhado
- Arquitetura
- Tecnologias
- Resultados

---

## Writing

Centraliza todos os artigos técnicos.

Agrupados por categoria.

---

## Career

Apresenta exclusivamente a evolução cronológica da carreira.

Seu objetivo é servir como complemento da página About.

Ela não faz parte da navegação principal.

Seu acesso ocorrerá através da página About e do rodapé.

---

## Learning

Centraliza.

- Formação
- Cursos
- Certificações
- Bootcamps

---

## Contact

Centraliza todos os canais oficiais.

---

# 6. Jornada Principal

A jornada recomendada será.

```
Home

↓

About

↓

Expertise

↓

Case Studies

↓

Writing

↓

Contact
```

A página Career será acessada apenas quando o visitante desejar aprofundar sua análise da trajetória profissional.

---

# 7. Organização da Informação

Cada informação deverá possuir apenas uma página responsável.

| Informação | Página |
|------------|---------|
| História profissional | About |
| Competências | Expertise |
| Estudos de Caso | Case Studies |
| Empresas | Career |
| Formação | Learning |
| Artigos | Writing |
| Contato | Contact |

---

# 8. Internacionalização

Idiomas suportados.

- English (Principal)
- Português (Brasil)

A arquitetura permanecerá exatamente igual.

Somente o conteúdo será localizado.

---

# 9. Evolução

Novas funcionalidades deverão respeitar esta arquitetura.

Caso uma funcionalidade não possua local adequado dentro da estrutura atual, uma revisão deste documento deverá ser realizada antes da implementação.

---

# 10. Backlog Arquitetural (V2+)

Itens previstos.

- Knowledge Graph
- Labs
- Resources
- Busca
- Integração com Medium
- Integração com GitHub
- Integração com Gists
- Analytics
- API de Conteúdo

Esses itens não fazem parte da V1.

---