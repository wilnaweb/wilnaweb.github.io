# Content Architecture

This document defines how content is organized inside the WIL.DEV project.

Content architecture is one of the most important aspects of the project.

Business information must remain completely separated from application code.

Markdown files are the single source of truth.

---

# Philosophy

The website follows a Content First architecture.

This means:

Content exists independently from presentation.

Presentation exists independently from implementation.

Implementation exists independently from deployment.

Every layer has a single responsibility.

---

# Source of Truth

Business content must exist only inside the `content/` directory.

Never duplicate business information inside:

- Astro components
- Layouts
- TypeScript files
- Configuration files

Markdown is always the authoritative source.

---

# Content Directory

The content directory follows the structure below.

```text
content/

├── en/
│
└── pt-br/
```

Each language contains the same information architecture.

---

# Primary Language

English (`content/en`) is the project's primary language.

All new content must be created in English first.

Only after the English version is approved should the Portuguese translation be created.

Never create content directly in Portuguese without an English source.

---

# Translation Rules

Portuguese files are translations.

They must preserve:

- meaning
- structure
- navigation
- metadata

Translations should not introduce new content.

If language-specific adaptations are necessary, they must preserve the intent of the original.

---

# Content Categories

The project currently contains the following content types.

## Pages

Examples

- Home
- About
- Expertise
- Career
- Learning
- Writing
- Contact

---

## Case Studies

Each enterprise project is an independent Markdown document.

Example

```
case-studies/

o-tempo.md

palmeiras.md

cogna.md
```

Never combine multiple case studies into one file.

---

## Articles

Technical publications.

Each article is represented by a single Markdown document.

---

# Frontmatter

Every Markdown file must contain frontmatter.

Example

```yaml
---
title:
slug:
description:
language:
status:
lastUpdated:
---
```

The frontmatter defines metadata.

Business content starts after the frontmatter.

---

# Required Metadata

Every page must define:

title

slug

description

language

status

lastUpdated

Do not omit required metadata.

---

# Slug Rules

Slugs must:

- use lowercase
- use kebab-case
- avoid abbreviations
- avoid dates
- remain stable

Good

```
software-architecture
```

Bad

```
softwareArchitecture

SoftwareArchitecture

article01

new-page-final
```

---

# Writing Style

Technical.

Professional.

Objective.

Readable.

Never write marketing copy.

Never exaggerate achievements.

Never use clickbait.

---

# Heading Hierarchy

Use a logical heading hierarchy.

Example

```
#

##

###

####
```

Never skip heading levels.

Avoid multiple H1 elements.

Each page must contain exactly one H1.

---

# Lists

Prefer short lists.

Avoid excessive nesting.

Keep formatting consistent.

---

# Internal Links

Whenever appropriate, pages should reference related content.

Examples

Case Study

↓

Related Articles

↓

Expertise

↓

Career

The objective is to improve navigation and knowledge discovery.

---

# Related Content

Whenever creating a new page, evaluate whether related pages should be updated.

Examples

A new Case Study may require updates to:

- Home
- Case Studies Index
- Career
- Expertise

Maintain consistency across the website.

---

# Images

Images belong to the presentation layer.

Markdown should reference images but should not embed large media assets directly.

Store assets in:

```
public/images/
```

---

# Reusable Content

If multiple pages repeat the same business information, evaluate whether the information should become reusable content.

Avoid copy-and-paste.

---

# Archived Content

Never delete historical content without approval.

If content becomes obsolete:

mark it;

archive it;

preserve history.

---

# AI Content Generation

When generating new content:

Follow existing writing style.

Maintain consistent formatting.

Preserve terminology.

Reuse existing page structure.

Never invent facts.

If required information is missing:

stop;

request clarification.

---

# Content Validation

Before considering a page complete, verify:

✓ Frontmatter exists

✓ Metadata is complete

✓ Slug follows conventions

✓ Heading hierarchy is correct

✓ Internal links are valid

✓ Language is correct

✓ Formatting is consistent

✓ Grammar is reviewed

✓ No duplicated content exists

✓ Markdown renders correctly

---

# Definition of Good Content

Good content is:

clear;

organized;

accurate;

maintainable;

easy to translate;

easy to navigate;

easy to expand.

The objective is to build a knowledge base that remains valuable for many years.

---

# Final Principle

Content is the most valuable asset of the WIL.DEV project.

The website exists to present knowledge.

Code exists only to deliver that knowledge.

Whenever a technical decision conflicts with content quality, preserve the content.