# Components

This document defines the architectural standards for reusable UI components in the WIL.DEV project.

These rules are framework-independent.

They describe how components should be designed, organized and maintained regardless of the underlying technology.

Framework-specific implementation details are documented separately.

---

# Purpose

Components are reusable building blocks.

Their purpose is to render information consistently across the project.

Components should reduce duplication, improve maintainability and provide a predictable development experience.

---

# Core Principles

Every component must follow these principles.

- Single Responsibility
- Reusability
- Predictability
- Composability
- Maintainability
- Accessibility
- Performance

If a component violates one of these principles, reconsider its design.

---

# Single Responsibility

Each component must solve one problem.

Good examples

- Button
- Card
- Badge
- Hero
- Timeline
- ArticleCard

Avoid components responsible for multiple unrelated concerns.

---

# Separation of Concerns

Components are responsible only for presentation.

Components must never contain:

- business rules;
- business data;
- routing decisions;
- content management;
- application configuration.

Business logic belongs elsewhere.

---

# Component Categories

Every component should belong to one of the following categories.

## Layout Components

Responsible for page structure.

Examples

- Base Layout
- Page Layout
- Article Layout

---

## Section Components

Represent complete sections of a page.

Examples

- Hero
- Timeline
- Featured Articles
- Contact Section

---

## UI Components

Small reusable interface elements.

Examples

- Button
- Card
- Badge
- Avatar
- Tag
- Icon

---

## Utility Components

Reusable presentation helpers.

Examples

- Social Links
- Theme Switcher
- Language Switcher

---

# Component Design

Components should expose a clean and intuitive public interface.

Consumers of a component should not need to understand its internal implementation.

Complexity must remain internal.

---

# Reusability

Before creating a new component:

Search for an existing solution.

If a component already solves most of the problem, extend or compose it.

Creating new components should always be the last option.

---

# Composition

Prefer composition over duplication.

Small components should be combined to build larger interfaces.

Avoid monolithic components.

Example

```
Page

↓

Hero

↓

Container

↓

Button
```

Not

```
MegaHeroComponent
```

---

# Public Interface

Every component should expose a minimal public API.

Only expose what consumers actually need.

Avoid unnecessary configuration options.

---

# Explicit Inputs

Component inputs should always be explicit.

Good

```
title

description

image

url
```

Bad

```
data

config

item

payload
```

Explicit interfaces improve readability.

---

# Predictability

A component should always produce the same output for the same input.

Avoid hidden behavior.

Avoid unexpected side effects.

---

# Independence

Components should be as independent as possible.

Avoid hidden coupling.

Avoid assumptions about where a component is used.

A component should work correctly wherever it is placed.

---

# Nesting

Keep component hierarchies shallow.

Deep nesting increases complexity.

Prefer

```
Page

↓

Hero

↓

Button
```

Over

```
Page

↓

Hero

↓

Container

↓

Wrapper

↓

Section

↓

Button
```

---

# Content

Components must never contain business content.

Incorrect

```
Wilson Cavalcante
```

Correct

```
authorName
```

Content must always be provided externally.

---

# Styling

Components should encapsulate their own presentation.

Avoid relying on styles defined by unrelated components.

Visual behavior should remain predictable.

---

# Accessibility

Accessibility is mandatory.

Every component should support:

- semantic markup;
- keyboard navigation;
- screen readers;
- sufficient contrast;
- accessible labels when required.

Accessibility should never be considered optional.

---

# Responsiveness

Every component must behave correctly across all supported screen sizes.

Never create desktop-only components.

Never create mobile-only components unless explicitly required.

---

# Performance

Components should remain lightweight.

Avoid unnecessary complexity.

Avoid unnecessary rendering.

Avoid unnecessary client-side behavior.

The simplest implementation is usually the best one.

---

# Error Tolerance

Components should degrade gracefully.

Missing optional information should not break rendering.

Unexpected input should produce predictable output.

---

# Documentation

Complex components should include documentation explaining:

- purpose;
- responsibilities;
- expected inputs;
- important implementation decisions.

Documentation should explain why, not what.

---

# Evolution

When updating an existing component:

Preserve backwards compatibility whenever possible.

Avoid unnecessary breaking changes.

If a breaking change is unavoidable:

- document it;
- update all affected consumers.

---

# Anti-Patterns

Avoid:

- giant components;
- duplicated markup;
- duplicated styling;
- hidden dependencies;
- magic values;
- business logic;
- hardcoded content;
- unrelated responsibilities;
- unnecessary configuration.

---

# Definition of a Good Component

A good component is:

- reusable;
- predictable;
- independent;
- accessible;
- responsive;
- maintainable;
- readable;
- well documented.

If a component cannot be understood quickly, simplify it.

---

# Final Principle

Components are long-term assets.

Every new component should reduce future development effort.

When multiple implementations are possible:

Choose the simplest.

Choose the most reusable.

Choose the one that best fits the existing architecture.

Consistency is more valuable than creativity.