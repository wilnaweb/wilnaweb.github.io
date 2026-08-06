# Folder Structure

This document defines the official repository structure of the WIL.DEV project.

Every file created by an AI assistant must respect this architecture.

The repository organization is considered part of the software architecture.

Never move files or create new folders without a clear architectural reason.

---

# Repository Overview

```
/
├── .github/
├── .vscode/
├── docs/
├── content/
├── public/
├── src/
├── package.json
├── astro.config.mjs
├── tsconfig.json
└── README.md
```

Every directory has a specific responsibility.

Never place files in a directory simply because "it works".

---

# Root Directory

The root directory should contain only project-level configuration.

Examples:

- package.json
- astro.config.mjs
- tsconfig.json
- README.md

Never place source code in the root directory.

---

# docs/

Contains all project documentation.

Examples:

- architecture
- design decisions
- roadmap
- development guidelines
- AI documentation

Never store application code here.

---

# docs/ai/

Contains documentation specifically written for AI assistants.

These documents define:

- coding standards
- architecture rules
- implementation guidelines
- review criteria

Never duplicate these documents elsewhere.

---

# content/

Contains every business content used by the website.

This is the project's primary source of truth.

No business content should exist outside this directory.

---

# content/en/

Primary language.

All new content must be created here first.

English is always the reference version.

---

# content/pt-br/

Brazilian Portuguese translation.

Translations should preserve the meaning of the English version.

Never translate automatically without review.

---

# src/

Contains application source code.

Only application logic belongs here.

---

# src/components/

Contains reusable Astro components.

Components must be:

- reusable
- isolated
- predictable
- presentation-focused

Components must never contain business content.

---

# src/layouts/

Contains page layouts.

Examples:

- BaseLayout
- DefaultLayout
- ArticleLayout
- CaseStudyLayout

Layouts define page structure.

Layouts never define business content.

---

# src/pages/

Contains Astro routes.

Routes should be lightweight.

Their responsibility is only:

- load content
- render layouts
- connect components

Never place business logic here.

---

# src/content/

Contains Astro Content Collection configuration.

Examples:

- collection schemas
- loaders
- validation

This folder is configuration only.

---

# src/lib/

Contains reusable utilities.

Examples:

- helpers
- formatters
- utilities

Never place UI code here.

---

# src/styles/

Contains global styles.

Rules:

Keep this directory as small as possible.

Tailwind should provide most styling.

Only global styles belong here.

---

# public/

Contains static assets.

Examples:

- favicon
- robots.txt
- sitemap.xml
- images
- fonts

Files inside public are copied directly to the build output.

Do not place source code here.

---

# public/images/

Contains website images.

Suggested organization:

```
images/

hero/

case-studies/

articles/

profile/

icons/
```

Avoid mixing unrelated assets.

---

# public/fonts/

Contains self-hosted fonts.

Only production fonts belong here.

---

# .github/

Contains GitHub configuration.

Examples:

- workflows
- issue templates
- pull request templates

---

# .vscode/

Contains workspace configuration.

Examples:

- recommended extensions
- formatting settings
- launch configurations

Never place project logic here.

---

# Naming Convention

Directories

Use lowercase.

Use kebab-case.

Correct:

```
case-studies
```

Wrong:

```
CaseStudies

Case_Studies

caseStudies
```

---

# File Naming

Markdown

```
software-architecture.md
```

Astro

```
HeroSection.astro
```

TypeScript

```
content-loader.ts
```

Images

```
hero-background.webp

profile-photo.webp
```

---

# Component Organization

Each component should have its own directory when complexity increases.

Example:

```
Hero/

Hero.astro

Hero.types.ts

Hero.css

Hero.test.ts
```

Simple components may remain as a single file.

---

# Import Strategy

Prefer absolute imports using aliases.

Example

```
@/components

@/layouts

@/lib
```

Avoid deep relative imports whenever possible.

Wrong

```
../../../../components
```

Correct

```
@/components
```

---

# Separation of Responsibilities

Every file should have one responsibility.

Good examples:

One component

↓

One purpose

↓

One responsibility

Avoid components responsible for:

layout

routing

business logic

API

styling

content

at the same time.

---

# Folder Evolution

New folders should only be created when:

- an existing folder becomes too large;
- a new architectural layer appears;
- separation improves maintainability.

Never create folders "just in case."

---

# Final Principle

Repository organization is part of the architecture.

A well-organized repository reduces onboarding time, simplifies maintenance and makes AI-assisted development significantly more reliable.

When in doubt, prefer consistency with the existing structure over introducing a new organizational pattern.