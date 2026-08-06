# Internationalization Standards

This document defines the internationalization (i18n) standards for the WIL.DEV project.

Internationalization is a core architectural feature of the website.

Every page, route and content structure must support multiple languages without compromising maintainability.

---

# Purpose

The project is designed to serve users from different countries.

The primary languages are:

- English (Primary)
- Brazilian Portuguese (Secondary)

Every implementation must preserve a consistent multilingual experience.

---

# General Principles

Internationalization should be:

- predictable;
- maintainable;
- scalable;
- content-driven.

Avoid language-specific implementations whenever possible.

---

# Primary Language

English is the project's primary language.

Every new content must be created in English first.

Only after approval should the Portuguese translation be created.

English is the reference version.

---

# Secondary Language

Brazilian Portuguese is the secondary language.

Portuguese content should remain synchronized with the English version.

Translations should preserve meaning rather than literal wording.

---

# Folder Structure

Content is organized by language.

Example

```text
content/

├── en/
│
└── pt-br/
```

Both languages must expose the same information architecture.

---

# Routing

Language should be part of the URL structure.

Example

```text
/

English Home

/pt-br/

Portuguese Home
```

Every translated page should have an equivalent route.

---

# URL Stability

URLs should remain stable.

Avoid changing translated URLs without necessity.

Broken URLs negatively affect SEO and user experience.

---

# Translation Workflow

The recommended workflow is:

Create English content

↓

Review English

↓

Translate to Portuguese

↓

Review translation

↓

Publish both versions

Never publish incomplete translations.

---

# Content Synchronization

When the English version changes:

Review the Portuguese version.

Translations should evolve together.

Avoid maintaining outdated translations.

---

# Metadata

Every language version must define:

- title
- description
- language
- canonical URL
- hreflang

Metadata should be translated appropriately.

---

# Hreflang

Every translated page should reference its equivalents.

Example

English page

↓

Portuguese page

Portuguese page

↓

English page

Language relationships should always remain synchronized.

---

# Navigation

Navigation structure must remain identical across all languages.

Users should always find the same information regardless of language.

---

# Component Design

Components should never contain fixed text.

Text should always come from:

- Markdown;
- translation resources;
- component properties.

Avoid hardcoded strings.

---

# Images

Images should remain language-independent whenever possible.

When text inside an image is unavoidable:

Provide localized versions.

Prefer avoiding text inside images.

---

# Dates

Display dates according to the selected language.

Formatting should respect local conventions.

Content metadata should continue using ISO format internally.

---

# Numbers

Numbers should respect locale formatting when presented to users.

Internal values should remain language-neutral.

---

# Future Languages

The architecture should allow additional languages without requiring structural changes.

Adding a new language should require:

- new content;
- new translations;
- configuration updates.

Architecture should remain unchanged.

---

# Accessibility

Every language version must declare the correct document language.

Examples

```html
<html lang="en">

<html lang="pt-BR">
```

Screen readers depend on correct language metadata.

---

# SEO

Every translated page should include:

- canonical URL;
- hreflang references;
- translated metadata;
- localized structured data when applicable.

Search engines should understand language relationships automatically.

---

# AI Translation Rules

When translating content:

Preserve:

- meaning;
- technical terminology;
- structure;
- navigation;
- metadata.

Avoid:

- literal translations;
- invented content;
- omitted sections;
- inconsistent terminology.

Translation quality is more important than translation speed.

---

# Review Checklist

Before approving multilingual content:

✓ English version exists

✓ Portuguese version exists

✓ Metadata translated

✓ Routes consistent

✓ Navigation consistent

✓ Hreflang configured

✓ Language declared

✓ Terminology consistent

✓ Internal links updated

✓ No missing translations

---

# Anti-Patterns

Avoid:

- hardcoded text;
- language-specific components;
- missing translations;
- inconsistent terminology;
- outdated translations;
- duplicated routing logic;
- different navigation structures.

---

# Definition of Good Internationalization

Good internationalization is:

- transparent;
- maintainable;
- scalable;
- predictable.

Users should feel that every language version was designed specifically for them.

---

# Final Principle

Internationalization is more than translating text.

It is preserving the same experience, the same quality and the same information regardless of the selected language.

Every language should be treated as a first-class citizen of the project.