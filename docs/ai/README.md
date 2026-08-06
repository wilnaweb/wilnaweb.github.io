# AI Documentation

This directory contains the operational documentation used by AI assistants during the development of the **WIL.DEV** project.

Unlike the documentation located in the root `/docs` folder, the documents inside `/docs/ai` are **not intended to explain the project to humans**.

Their purpose is to provide precise implementation rules for AI coding assistants such as GitHub Copilot, ChatGPT, Claude, Gemini, Cursor, Windsurf, Cline and future AI development tools.

---

# Purpose

The goal of this directory is to ensure that every AI working on the project follows the same architecture, coding standards and development practices.

Instead of relying on prompts that must be rewritten for every conversation, the project stores its engineering knowledge inside version-controlled documents.

This makes the project:

- easier to maintain;
- easier to evolve;
- independent from any specific AI provider;
- consistent across multiple development sessions.

---

# Relationship with the Project Documentation

The repository contains two different kinds of documentation.

## `/docs`

Project documentation.

These documents describe the project itself.

Examples:

- project vision;
- requirements;
- design system;
- information architecture;
- roadmap.

These documents are primarily written for humans.

---

## `/docs/ai`

AI operational documentation.

These documents describe **how an AI must work** while contributing to the project.

They define:

- implementation rules;
- coding standards;
- architectural constraints;
- review criteria;
- quality gates;
- forbidden actions.

---

# Required Reading

Every AI assistant must read the following document before starting any implementation.

```
docs/08-ai-development-guide.md
```

After reading it, the AI should load only the documents required for the current task.

---

# Document Organization

Each document covers one specific subject.

| File | Purpose |
|-------|---------|
| 01-project-context.md | Project context and objectives |
| 02-working-rules.md | AI working behavior |
| 03-technology-stack.md | Technologies used by the project |
| 04-folder-structure.md | Repository organization |
| 05-content-architecture.md | Markdown content structure |
| 06-components.md | Astro component rules |
| 07-design-system.md | Design implementation rules |
| 08-markdown-rules.md | Markdown authoring standards |
| 09-development-rules.md | General coding standards |
| 10-astro-rules.md | Astro-specific rules |
| 11-typescript-rules.md | TypeScript standards |
| 12-tailwind-rules.md | Tailwind CSS guidelines |
| 13-seo.md | SEO implementation |
| 14-performance.md | Performance optimization |
| 15-accessibility.md | Accessibility requirements |
| 16-internationalization.md | Multi-language implementation |
| 17-git-workflow.md | Git conventions |
| 18-quality-gates.md | Review checklist before completion |
| 19-forbidden-actions.md | Actions the AI must never perform |
| 20-definition-of-done.md | Completion criteria |

---

# How to Use

The AI should not load every document.

Instead, it should load only the documents required by the current task.

Examples:

---

## Creating a new Astro component

Read:

```
08-ai-development-guide.md

docs/ai/06-components.md

docs/ai/10-astro-rules.md

docs/ai/12-tailwind-rules.md
```

---

## Creating a new Case Study

Read:

```
08-ai-development-guide.md

docs/ai/05-content-architecture.md

docs/ai/08-markdown-rules.md
```

---

## Improving SEO

Read:

```
08-ai-development-guide.md

docs/ai/13-seo.md

docs/ai/18-quality-gates.md
```

---

## Creating a new page

Read:

```
08-ai-development-guide.md

docs/ai/05-content-architecture.md

docs/ai/06-components.md

docs/ai/10-astro-rules.md
```

---

## Refactoring code

Read:

```
08-ai-development-guide.md

docs/ai/09-development-rules.md

docs/ai/18-quality-gates.md

docs/ai/19-forbidden-actions.md
```

---

# Design Philosophy

Each document should focus on a single topic.

Avoid mixing unrelated subjects.

Small documents are easier for AI assistants to process than a single large document.

---

# Project Evolution

This directory is expected to evolve together with the project.

Whenever a significant architectural decision is approved, the corresponding AI documentation should also be updated.

The objective is to ensure that the knowledge required to maintain the project remains versioned alongside the source code.

---

# Final Principle

These documents define **how the project should be implemented**.

They do **not** replace engineering judgment.

When a situation is not explicitly covered, the AI should:

1. Follow the existing architecture.
2. Reuse established patterns.
3. Prefer simplicity.
4. Avoid introducing new conventions without approval.
5. Preserve long-term maintainability.

Consistency is always preferred over novelty.