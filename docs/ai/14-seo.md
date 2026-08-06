# SEO Standards

This document defines the Search Engine Optimization (SEO) standards for the WIL.DEV project.

SEO is considered a first-class architectural concern.

Every page should be discoverable, understandable and correctly indexed by search engines.

SEO should be implemented as part of the development process, never as a post-release activity.

---

# Purpose

The primary purpose of SEO is to increase the visibility of the project's technical content.

Every page should communicate effectively with both:

- humans;
- search engines.

High-quality content is always more important than keyword optimization.

---

# SEO Philosophy

The project follows these principles:

- Content First
- Semantic HTML
- Performance First
- Accessibility First
- Structured Metadata
- Stable URLs

Search engines should understand the website naturally.

Never optimize for search engines at the expense of the user experience.

---

# Metadata

Every public page must define:

- Title
- Description
- Canonical URL
- Language
- Open Graph Metadata
- Twitter Card Metadata

Metadata should never be optional.

---

# Page Titles

Every page must have a unique title.

Titles should:

- describe the page accurately;
- contain relevant keywords naturally;
- remain concise;
- avoid duplication.

Good

```
Adobe Experience Manager Expertise
```

Bad

```
Home

Welcome

New Page
```

---

# Meta Description

Every page must provide a meaningful description.

Descriptions should:

- summarize the page;
- encourage clicks naturally;
- remain concise;
- avoid keyword stuffing.

---

# Canonical URLs

Every page must define its canonical URL.

Canonical URLs must:

- use the production domain;
- remain stable;
- prevent duplicate indexing.

---

# Open Graph

Every page should expose Open Graph metadata.

Required fields:

- og:title
- og:description
- og:image
- og:url
- og:type

Open Graph images should follow a consistent visual identity.

---

# Twitter Cards

Every page should expose Twitter Card metadata.

Preferred card type:

```
summary_large_image
```

Metadata should remain synchronized with Open Graph whenever possible.

---

# Structured Data

Use Schema.org structured data whenever appropriate.

Supported schemas include:

- WebSite
- Person
- Article
- BreadcrumbList

Structured data must accurately represent the page.

Never generate misleading schema.

---

# Heading Structure

Heading hierarchy improves both SEO and accessibility.

Rules:

- exactly one H1;
- logical heading hierarchy;
- descriptive section titles.

Never use headings only for styling.

---

# URLs

URLs must be:

- lowercase;
- descriptive;
- stable;
- human-readable;
- kebab-case.

Avoid:

- IDs;
- timestamps;
- unnecessary nesting;
- special characters.

URLs should remain stable over time.

---

# Internal Linking

Every page should link to related content whenever appropriate.

Examples:

Case Study

↓

Related Expertise

↓

Related Articles

↓

Career

↓

Learning

Internal linking improves navigation and search engine discovery.

---

# External Links

External links should point only to authoritative sources.

Examples:

- Adobe
- GitHub
- Medium
- W3C
- MDN
- Official Documentation

Avoid linking to low-quality websites.

---

# Images

Every image must define:

- descriptive filename;
- meaningful alt text.

Good

```
adobe-edge-delivery-services.webp
```

Bad

```
image01.webp
```

Image metadata contributes to SEO.

---

# Performance

Performance is a ranking factor.

Every page should:

- minimize JavaScript;
- optimize images;
- avoid layout shifts;
- reduce render-blocking resources.

SEO and performance should always evolve together.

---

# Accessibility

Accessible websites are easier for search engines to understand.

Semantic HTML improves:

- indexing;
- navigation;
- content understanding.

Accessibility supports SEO.

---

# Sitemap

The website must generate a sitemap automatically.

Include:

- all public pages;
- case studies;
- articles.

Exclude:

- drafts;
- archived content;
- private pages.

The sitemap must remain synchronized with the website.

---

# Robots.txt

Provide a valid `robots.txt`.

Allow indexing of all public pages.

Block only resources that should never be indexed.

---

# RSS Feed

Technical articles should be available through RSS.

RSS generation should occur automatically during the production build.

---

# Language Metadata

Every page must declare its language.

Examples

```
en

pt-BR
```

Language metadata improves international indexing.

---

# Hreflang

Translated pages must reference each other using hreflang metadata.

Example

English

↓

Portuguese

Portuguese

↓

English

Language relationships must remain synchronized.

---

# Breadcrumbs

Whenever appropriate, pages should expose breadcrumb structured data.

Breadcrumbs improve:

- navigation;
- search appearance;
- information hierarchy.

---

# Duplicate Content

Avoid duplicate content.

Every page should provide unique value.

When duplicate content is unavoidable:

Use canonical URLs.

---

# Broken Links

Broken links reduce SEO quality.

Every release should validate:

- internal links;
- external links;
- image references.

No broken links should reach production.

---

# Content Quality

Content quality is the most important SEO factor.

Every page should be:

- accurate;
- useful;
- well structured;
- technically correct;
- regularly reviewed.

Never create content exclusively to improve rankings.

---

# Metadata Consistency

Metadata should remain synchronized with page content.

Whenever a page changes:

Review:

- title;
- description;
- Open Graph;
- Twitter metadata;
- structured data.

---

# Redirects

When URLs change:

Create permanent redirects.

Avoid losing search engine authority.

Broken URLs should be prevented whenever possible.

---

# SEO Review Checklist

Before approving any page:

✓ Unique title

✓ Meta description

✓ Canonical URL

✓ Open Graph

✓ Twitter Card

✓ Structured Data

✓ One H1

✓ Semantic headings

✓ Internal links

✓ Image alt text

✓ Sitemap inclusion

✓ Language metadata

✓ Hreflang

✓ No broken links

✓ Optimized performance

---

# Definition of Good SEO

Good SEO is:

- transparent;
- semantic;
- maintainable;
- user-focused;
- content-driven.

Search engines should understand the website naturally.

---

# Final Principle

SEO is the consequence of building a technically excellent website.

Do not optimize for algorithms.

Optimize for people.

Well-structured, accessible and performant content naturally produces better search engine results over time.