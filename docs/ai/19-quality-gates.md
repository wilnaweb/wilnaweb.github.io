# Quality Gates

This document defines the mandatory quality gates for the WIL.DEV project.

Every implementation must satisfy these quality gates before it is considered complete.

Quality Gates are mandatory.

They exist to ensure consistency, maintainability and long-term software quality.

---

# Purpose

The objective of the Quality Gates is to prevent incomplete or inconsistent implementations from reaching the repository.

Every task must pass these validations before completion.

---

# General Principle

A feature is **not finished** simply because it works.

A feature is finished only after it satisfies every applicable quality gate.

Working software is the minimum requirement.

High-quality software is the objective.

---

# Architecture Gate

Verify that:

✓ The solution follows the documented architecture.

✓ Existing patterns were respected.

✓ No unnecessary architectural changes were introduced.

✓ Existing reusable components were reused whenever possible.

---

# Component Gate

Verify that:

✓ Components have a single responsibility.

✓ Components are reusable.

✓ Components are independent.

✓ Components do not contain business content.

✓ Component interfaces remain simple.

---

# Content Gate

Verify that:

✓ Business content exists only in Markdown.

✓ Frontmatter is valid.

✓ Metadata is complete.

✓ Internal links were reviewed.

✓ No duplicated content exists.

---

# TypeScript Gate

Verify that:

✓ Strict typing is respected.

✓ No `any` exists.

✓ Public APIs are typed.

✓ Interfaces remain readable.

✓ Types are not duplicated.

---

# Astro Gate

Verify that:

✓ Static rendering is preferred.

✓ Hydration is justified.

✓ Content Collections are used.

✓ Layout responsibilities are respected.

✓ No unnecessary client-side rendering exists.

---

# Front-End Gate

Verify that:

✓ Semantic HTML is used.

✓ Responsive behavior is correct.

✓ Design System is respected.

✓ Tailwind standards are followed.

✓ Dark Mode is supported.

---

# Accessibility Gate

Verify that:

✓ One H1 exists.

✓ Heading hierarchy is correct.

✓ Keyboard navigation works.

✓ Focus indicators are visible.

✓ Images contain alt text.

✓ Forms contain labels.

✓ WCAG AA requirements are respected.

---

# SEO Gate

Verify that:

✓ Title exists.

✓ Description exists.

✓ Canonical URL exists.

✓ Open Graph metadata exists.

✓ Twitter metadata exists.

✓ Structured data is correct.

✓ Internal links were reviewed.

---

# Performance Gate

Verify that:

✓ JavaScript is minimized.

✓ Images are optimized.

✓ Fonts are optimized.

✓ No unnecessary dependencies exist.

✓ Static rendering is preferred.

---

# Documentation Gate

Verify that:

✓ Documentation reflects the implementation.

✓ Architecture changes were documented.

✓ DEC entries were created when required.

✓ README updates were made when necessary.

---

# Git Gate

Verify that:

✓ Commit messages follow Conventional Commits.

✓ Branch naming follows standards.

✓ No temporary files exist.

✓ Debug code was removed.

---

# Code Quality Gate

Verify that:

✓ Naming is clear.

✓ Functions have one responsibility.

✓ No duplicated logic exists.

✓ Complexity is justified.

✓ Code remains readable.

---

# Review Gate

Before considering the implementation complete, ask:

Can another developer understand this quickly?

Can this implementation be reused?

Does it follow existing project conventions?

Would I approve this Pull Request?

If any answer is "No", continue improving the implementation.

---

# Self Review

Every implementation should include a self-review.

Review the code as if you were another engineer.

Look for:

- unnecessary complexity;
- duplicated logic;
- inconsistent naming;
- architectural violations.

---

# Regression Gate

Verify that existing functionality has not been negatively affected.

Changes should be isolated.

Avoid unintended side effects.

---

# Consistency Gate

Verify that the implementation matches:

- existing components;
- existing layouts;
- existing naming;
- existing styling;
- existing architecture.

Consistency is one of the project's highest priorities.

---

# Production Readiness

Before considering the task complete:

✓ Project builds successfully.

✓ No lint errors.

✓ No TypeScript errors.

✓ No broken links.

✓ No console errors.

✓ No placeholder content.

✓ No TODO comments.

✓ No debug code.

---

# Quality Mindset

Never ask:

"Does it work?"

Instead ask:

"Is this the best implementation that reasonably fits the project's standards?"

Quality should be intentional.

---

# Quality Checklist

Every completed implementation should satisfy:

✓ Architecture

✓ Components

✓ Markdown

✓ Astro

✓ TypeScript

✓ Front-End

✓ Accessibility

✓ SEO

✓ Performance

✓ Documentation

✓ Git

✓ Self Review

Only after every applicable item is satisfied should the task be considered complete.

---

# Anti-Patterns

Never approve code that contains:

- duplicated logic;
- temporary solutions;
- commented-out code;
- placeholder content;
- invalid metadata;
- inconsistent naming;
- accessibility regressions;
- unnecessary dependencies;
- architectural violations.

---

# Definition of Quality

Quality means:

- correctness;
- consistency;
- maintainability;
- simplicity;
- readability;
- accessibility;
- performance.

Quality is measured by how easy the project will be to maintain years from now.

---

# Final Principle

Every implementation should leave the repository in a better state than it was before.

Quality is not a final step.

Quality is part of every decision made during development.