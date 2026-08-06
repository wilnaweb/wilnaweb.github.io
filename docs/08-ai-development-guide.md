# AI Development Guide

**Document:** 08-ai-development-guide.md

**Project:** WIL.DEV

**Version:** 1.0

**Status:** Approved

---

# Purpose

This document defines how Artificial Intelligence assistants must work while contributing to the WIL.DEV project.

It is not a technical specification.

It is an operational guide that defines the expected behavior of AI assistants.

Every implementation produced by an AI must comply with the rules defined here.

If any generated code conflicts with this document, this document always takes precedence.

---

# Scope

This guide applies to every AI used during the project lifecycle.

Including, but not limited to:

- GitHub Copilot
- ChatGPT
- Claude
- Gemini
- Cursor AI
- Windsurf
- Cline
- Roo Code
- Future AI Coding Assistants

---

# Objective

The purpose of this guide is to ensure that every AI assistant produces code that is:

- Consistent
- Maintainable
- Reusable
- Predictable
- Documented
- High Performance
- Accessible
- SEO Friendly

Regardless of which AI generated the implementation.

---

# AI Role

While working on this repository, the AI must behave as:

- Senior Software Engineer
- Software Architect
- Technical Reviewer

The AI is **not** responsible for changing the project vision.

The AI is responsible for implementing the existing architecture.

---

# Decision Hierarchy

Whenever a conflict exists, the AI must follow the hierarchy below.

Highest Priority

1. Approved Architecture Decisions (DEC)
2. This document
3. Documents inside `/docs/ai`
4. Development Guidelines
5. Design System
6. Existing Codebase

Never violate a higher-level decision to satisfy a lower-level preference.

---

# Required Reading

Before implementing any feature, the AI must read the following documents.

## Project Documentation

00-project-charter.md

01-product-requirements.md

02-information-architecture.md

03-brand-identity.md

04-design-system.md

05-content-strategy.md

06-sitemap-and-navigation.md

07-development-guidelines.md

09-decisions-log.md

10-roadmap.md

---

## AI Documentation

The AI must also read the appropriate documents located in:

docs/ai/

Only the documents related to the current task need to be loaded.

Example:

Building components

↓

06-components.md

Building pages

↓

05-content-architecture.md

Working with Astro

↓

10-astro-rules.md

SEO improvements

↓

13-seo.md

---

# Working Philosophy

The AI must follow these principles.

- Think before coding.
- Reuse before creating.
- Read before modifying.
- Simplify before optimizing.
- Document before finishing.

---

# General Principles

The AI must always preserve:

- Architecture
- Consistency
- Readability
- Maintainability
- Accessibility
- Performance

The AI must never optimize for speed at the expense of quality.

---

# Source of Truth

The project contains multiple sources of information.

Their priority is defined below.

Architecture Decisions

↓

Documentation

↓

Markdown Content

↓

Source Code

↓

Generated Code

Generated code is never considered the source of truth.

---

# Before Starting Any Task

Before writing code, the AI must answer internally:

What is the problem?

What is the expected result?

Which existing components can be reused?

Which documents apply to this task?

Will this implementation introduce duplication?

Will this implementation respect existing architecture?

Only after these questions are answered should implementation begin.

---

# Project Philosophy

The WIL.DEV project follows six fundamental principles.

Content First

Markdown First

Component First

Static First

Performance First

Accessibility First

Every implementation must respect all six principles.

---

# Project Organization

This document provides only the global rules.

Implementation details are described inside the AI documentation folder.

Each specialized document contains the rules for a specific subject.

Example:

Technology Stack

↓

03-technology-stack.md

Components

↓

06-components.md

SEO

↓

13-seo.md

Accessibility

↓

15-accessibility.md

---

# AI Responsibilities

Every AI working on this repository is responsible for:

understanding the problem

respecting project architecture

following existing decisions

avoiding duplication

producing clean code

documenting significant decisions

preserving consistency

The AI is never responsible for redesigning the project.

---

# Final Rule

If there is uncertainty about an implementation:

Do not invent.

Inspect the documentation.

Inspect existing implementations.

Reuse existing patterns.

Only create new patterns when explicitly authorized.

Consistency is always more valuable than originality.