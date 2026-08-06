# Markdown Standards

This document defines the Markdown authoring standards for the WIL.DEV project.

Markdown is the primary format used to store business content. Every page, case study, article and documentation page must follow these rules.

The objective is to create Markdown files that are easy to read, easy to review, easy to translate and easy to maintain.

---

# Purpose

Markdown is the project's primary content format.

It should remain:

- Simple
- Predictable
- Readable
- Maintainable
- Portable

Markdown files should be optimized for long-term maintenance rather than visual appearance inside the editor.

---

# Source of Truth

Markdown is the only source of business content.

Business information must never be duplicated inside:

- Astro Components
- Layouts
- TypeScript files
- Configuration files

Markdown always has priority.

---

# Frontmatter

Every Markdown document must begin with a valid YAML frontmatter.

Example

```yaml
---
title: About
slug: /about
description: Learn more about Wilson Cavalcante.
language: en
status: approved
lastUpdated: 2026-08-05
---
```

Never omit required metadata.

---

# Required Fields

Every Markdown document must define:

- title
- slug
- description
- language
- status
- lastUpdated

Additional metadata may be introduced when required by a specific content type.

---

# Heading Hierarchy

Every document must contain exactly one H1.

Correct

```text
#

##

###

####
```

Incorrect

```text
#

###

######
```

Never skip heading levels.

The heading hierarchy should reflect the logical structure of the document.

---

# Paragraphs

Prefer short paragraphs.

Good paragraphs contain approximately:

- three to six lines.

Very long paragraphs reduce readability.

---

# Lists

Use unordered lists whenever sequence is not important.

Example

```markdown
- Architecture
- Performance
- Accessibility
```

Use numbered lists only when order matters.

Example

```markdown
1. Install dependencies
2. Build the project
3. Deploy
```

---

# Tables

Tables should only be used for structured information.

Good use cases:

- Feature comparison
- Technology matrix
- Specifications
- Timeline

Never use tables for visual layout.

---

# Code Blocks

Always specify the language.

Good

```typescript
const title = "WIL.DEV";
```

Avoid generic code blocks whenever syntax highlighting is available.

---

# Inline Code

Use inline code when referencing:

- file names;
- folders;
- commands;
- classes;
- functions;
- properties;
- technologies.

Example

```markdown
`astro.config.mjs`

`npm run build`

`BaseLayout`

`Content Collections`
```

---

# File References

Whenever referencing project files, use inline code.

Example

```markdown
`content/en/about.md`

`src/components/Hero.astro`

`docs/04-design-system.md`
```

---

# Links

Prefer descriptive links.

Good

```markdown
See the Design System documentation.
```

Avoid

```markdown
Click here.
```

Readers should immediately understand where a link leads.

---

# Images

Markdown should reference images.

Never embed images using raw HTML.

Store image assets under:

```text
public/images/
```

Use relative references when appropriate.

---

# HTML

Avoid HTML inside Markdown.

Prefer native Markdown syntax.

Only use HTML when Markdown cannot represent the required structure.

---

# Text Emphasis

Use formatting sparingly.

Examples

```markdown
**Important**

`Code`

*Emphasis*
```

Avoid excessive formatting.

Too much emphasis makes documents harder to read.

---

# Blank Lines

Separate logical sections using blank lines.

Whitespace improves readability.

Avoid dense blocks of Markdown.

---

# Block Quotes

Use block quotes only for quotations.

Example

```markdown
> This is a quoted sentence.
```

Do not use block quotes for visual styling.

---

# Writing Style

Every Markdown document should be:

- Professional
- Technical
- Objective
- Clear

Avoid:

- Marketing language
- Clickbait
- Excessive adjectives
- Emotional writing

---

# Terminology

Use consistent terminology throughout the project.

Always use the same name for the same concept.

Example

Always use

```text
Adobe Experience Manager
```

Do not alternate with

```text
Adobe CMS

Adobe Manager

AEM Platform
```

Consistency improves readability.

---

# Dates

Metadata dates must use ISO-8601 format.

Correct

```text
2026-08-05
```

Incorrect

```text
05/08/2026

August 5, 2026
```

---

# Language

Each Markdown document must contain only one language.

Never mix English and Portuguese inside the same document.

Translations belong in separate files.

---

# Internal References

Whenever appropriate, connect related content.

Examples

Case Study

↓

Related Articles

↓

Expertise

↓

Career

Internal linking improves navigation and discoverability.

---

# Content Duplication

Avoid duplicated content.

If the same information appears in multiple files:

- evaluate whether it should become reusable;
- reference the original content whenever possible.

Never maintain multiple conflicting versions of the same information.

---

# Comments

Avoid TODOs inside production Markdown.

Example

Bad

```markdown
<!-- TODO -->
```

Incomplete content should remain unpublished.

---

# Review Checklist

Before approving a Markdown document, verify:

- Frontmatter is valid.
- Required metadata exists.
- Exactly one H1 is present.
- Heading hierarchy is correct.
- Internal links are valid.
- Terminology is consistent.
- Grammar has been reviewed.
- Formatting is consistent.
- Markdown renders correctly.
- No duplicated content exists.

---

# Anti-Patterns

Avoid:

- HTML for layout.
- Multiple H1 headings.
- Mixed languages.
- Invalid YAML.
- Long paragraphs.
- Duplicated content.
- Excessive formatting.
- Broken links.
- Inconsistent terminology.

---

# Definition of Good Markdown

Good Markdown is:

- Easy to read
- Easy to review
- Easy to diff
- Easy to translate
- Easy to maintain
- Easy to render

Source readability is more important than editor appearance.

---

# Final Principle

Markdown is not merely a publishing format.

It is the project's long-term knowledge base.

Write every Markdown document as if it will still be maintained ten years from now.

Every document should be understandable by both humans and AI assistants.