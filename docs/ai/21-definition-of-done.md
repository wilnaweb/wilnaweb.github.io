# Definition of Done

This document defines the criteria that determine when a task is considered complete in the WIL.DEV project.

Completion is measured by quality, not by implementation alone.

A feature is considered done only when all applicable requirements defined in this document have been satisfied.

---

# Purpose

The purpose of the Definition of Done is to ensure that every implementation reaches the same quality standard.

Every completed task should be:

- correct;
- maintainable;
- documented;
- reviewable;
- production-ready.

---

# General Principle

Working software is only the starting point.

A task is complete only when it satisfies all applicable engineering, architectural and quality requirements.

---

# Functional Completion

The requested functionality has been fully implemented.

All acceptance criteria have been satisfied.

No requested behavior remains incomplete.

---

# Architecture

The implementation follows the documented architecture.

Existing project patterns have been respected.

No unnecessary architectural changes were introduced.

---

# Components

Components:

- have a single responsibility;
- are reusable;
- are independent;
- do not contain business content.

No unnecessary components were created.

---

# Content

Business content:

- exists only in Markdown;
- contains valid frontmatter;
- uses complete metadata;
- follows project writing standards.

---

# TypeScript

TypeScript standards have been respected.

Requirements:

- no `any`;
- explicit public types;
- meaningful interfaces;
- readable code.

---

# Astro

Astro standards have been respected.

Requirements:

- static rendering preferred;
- hydration justified;
- Content Collections used correctly;
- layouts respected.

---

# Front-End

The implementation follows:

- Design System;
- Tailwind standards;
- HTML and CSS standards.

The interface remains visually consistent.

---

# Accessibility

Accessibility requirements have been verified.

Examples:

- semantic HTML;
- keyboard navigation;
- visible focus;
- alt text;
- proper labels;
- WCAG AA compliance.

---

# SEO

SEO metadata has been verified.

Requirements:

- title;
- description;
- canonical URL;
- Open Graph;
- Twitter Card;
- structured data (when applicable).

---

# Performance

Performance requirements have been preserved.

Requirements:

- optimized images;
- minimal JavaScript;
- optimized assets;
- no unnecessary dependencies.

---

# Internationalization

If the task affects multilingual content:

- English updated;
- Portuguese updated;
- metadata synchronized;
- hreflang preserved.

No language should become outdated.

---

# Documentation

Relevant documentation has been updated.

When required:

- README;
- Architecture documentation;
- Development guidelines;
- Decision Records.

Documentation evolves together with the implementation.

---

# Source Code

Source code is:

- readable;
- maintainable;
- consistent;
- free of temporary code.

Debug statements have been removed.

Commented code has been removed.

---

# Repository

The repository contains:

- no temporary files;
- no generated artifacts;
- no unnecessary assets.

Only production-ready files remain.

---

# Git

The implementation is ready to be committed.

Requirements:

- meaningful commit;
- Conventional Commits;
- clean history.

---

# Self Review

The implementation has been reviewed by its own author.

Questions to verify:

Can another engineer understand this implementation quickly?

Does it follow project conventions?

Can it be simplified?

Can existing code be reused instead?

Has unnecessary complexity been introduced?

---

# Quality Gates

Every applicable Quality Gate has passed.

No unresolved issues remain.

---

# Testing

When applicable:

- implementation verified;
- interactions validated;
- navigation reviewed;
- edge cases considered.

No known regressions remain.

---

# Final Validation

Before considering the task complete, verify:

✓ Requirements implemented

✓ Architecture respected

✓ Documentation updated

✓ Components reusable

✓ Markdown validated

✓ TypeScript standards followed

✓ Astro standards followed

✓ Front-End standards followed

✓ Accessibility verified

✓ SEO verified

✓ Performance preserved

✓ Internationalization updated

✓ Repository clean

✓ Self-review completed

✓ Ready for Pull Request

---

# Conditions That Prevent Completion

A task is **not** considered complete if any of the following applies:

- requirements are only partially implemented;
- TODOs remain;
- placeholder content exists;
- documentation is outdated;
- accessibility is broken;
- SEO metadata is missing;
- performance has regressed;
- architecture has been violated;
- code review has not been performed.

---

# Definition of Success

A successful implementation:

- solves the requested problem;
- integrates naturally with the existing architecture;
- preserves consistency;
- improves maintainability;
- introduces no unnecessary complexity.

Future developers should be able to understand and extend the implementation with minimal effort.

---

# Final Principle

Completion is not defined by writing code.

Completion is achieved when the implementation is technically correct, architecturally consistent, fully documented and ready to be maintained for many years.

If there is doubt about whether a task is complete, it is not complete.