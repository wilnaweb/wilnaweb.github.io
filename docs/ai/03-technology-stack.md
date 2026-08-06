# Technology Stack

This document defines the official technology stack of the WIL.DEV project.

The technologies listed here are part of the project's architecture and must not be replaced without explicit approval.

The goal is to maintain a modern, lightweight, maintainable and long-term sustainable stack.

---

# Architecture Overview

Project Type

Static Website

Architecture

Static Site Generation (SSG)

Rendering Strategy

Build Time Rendering

Deployment

GitHub Pages

Source of Truth

Markdown Content

Primary Language

English

Secondary Language

Brazilian Portuguese

---

# Core Framework

## Astro

Astro is the foundation of the project.

Reasons:

- Excellent performance
- Static-first architecture
- Native Markdown support
- Content Collections
- Minimal JavaScript
- Excellent SEO
- Great developer experience

Rules

- Prefer server rendering during build.
- Avoid client-side rendering.
- Use Islands Architecture only when necessary.
- Never transform the project into a SPA.

---

# Programming Language

## TypeScript

TypeScript is mandatory.

Configuration

Strict Mode enabled.

Rules

- Avoid `any`.
- Prefer explicit interfaces.
- Use readonly when appropriate.
- Prefer immutable data.
- Use enums only when they improve readability.
- Keep types close to their domain.

---

# UI Framework

## Tailwind CSS

Tailwind CSS is the official styling solution.

Reasons

- Utility First
- Small bundle size
- Fast development
- Easy maintenance

Rules

- Prefer Tailwind utilities.
- Avoid unnecessary custom CSS.
- Keep custom CSS isolated.
- Never create a parallel CSS framework.

---

# Content Management

## Markdown

Markdown is the project's content engine.

All business information must live inside Markdown files.

Examples

- Pages
- Case Studies
- Articles
- Learning
- Career
- Contact

Rules

Markdown contains content.

Astro renders content.

Components display content.

Never move business content into components.

---

# Content Collections

Astro Content Collections are mandatory.

Every content type must belong to a collection.

Examples

- pages
- case-studies

Never read Markdown files manually.

Always use Collections.

---

# Images

Preferred formats

SVG

↓

WebP

↓

PNG

↓

JPEG

Rules

- SVG whenever possible.
- Optimize every image.
- Never upload oversized images.
- Prefer responsive images.
- Avoid duplicate assets.

---

# Icons

Official Library

Lucide Icons

Rules

- Use only the required icons.
- Avoid loading unnecessary icon packs.
- Keep visual consistency.

---

# Fonts

Preferred Strategy

Self-hosted fonts.

Fallback

Google Fonts.

Rules

- Minimize font families.
- Minimize font weights.
- Prioritize performance.

---

# Deployment

Hosting

GitHub Pages

Requirements

Static build only.

No backend.

No server runtime.

No database.

No server-side APIs.

The final output must be deployable directly from the generated `dist` directory.

---

# Package Manager

Official

npm

Rules

Do not introduce:

- pnpm
- yarn
- bun

unless explicitly approved.

---

# Version Control

Git

Repository

GitHub

Branch Strategy

Git Flow

Commit Style

Conventional Commits

---

# Search

Native browser search.

No external search engine.

No client-side indexing libraries unless approved.

---

# Analytics

Google Analytics

Implementation Requirements

Analytics must be isolated.

Never mix analytics logic with presentation components.

Analytics must be easy to disable.

---

# SEO

Required Features

- Sitemap
- Robots.txt
- RSS Feed
- Canonical URLs
- Open Graph
- Twitter Cards
- Structured Data
- Meta Tags

Every page must support SEO metadata.

---

# Accessibility

Target

WCAG AA

Requirements

Semantic HTML.

Keyboard navigation.

Proper heading hierarchy.

Accessible forms.

Color contrast.

ARIA only when necessary.

---

# Performance Targets

Target Lighthouse Score

Performance

100

Accessibility

100

Best Practices

100

SEO

100

Rules

Avoid unnecessary JavaScript.

Avoid large bundles.

Optimize images.

Optimize fonts.

Keep HTML semantic.

Avoid layout shifts.

---

# Dependencies

Every dependency must satisfy at least one of these conditions:

- Solves a real problem.
- Reduces maintenance.
- Improves performance.
- Improves accessibility.
- Improves developer productivity.

Avoid dependencies that solve trivial problems.

---

# Forbidden Technologies

Do not introduce without approval.

React Router

Next.js

Vue

Angular

Bootstrap

jQuery

CSS Frameworks other than Tailwind

Heavy Animation Libraries

Client-side CMS

Large UI Frameworks

---

# Future Evolution

The stack should evolve carefully.

Technology updates are welcome when they:

Improve maintainability.

Reduce complexity.

Increase performance.

Simplify development.

Technology should never be replaced simply because a newer option exists.

Long-term stability has higher priority than novelty.