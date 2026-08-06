# Development Rules

This document defines the software engineering standards adopted by the WIL.DEV project.

These rules are framework-independent and apply to every source file in the repository.

Framework-specific rules are documented separately.

---

# Purpose

The objective of these standards is to produce software that is:

- Readable
- Maintainable
- Predictable
- Testable
- Scalable

Code is expected to remain understandable for many years.

Future maintainability has higher priority than short-term productivity.

---

# Engineering Philosophy

The project follows a pragmatic software engineering approach.

The primary principles are:

- Simplicity
- Readability
- Maintainability
- Consistency
- Reusability

Whenever multiple valid solutions exist, choose the simplest one.

---

# Clean Code

Every implementation should prioritize readability.

Code is read much more often than it is written.

Write code that explains itself.

Avoid unnecessary comments.

Good names are better than comments.

---

# Naming

Names should clearly describe their purpose.

Good examples

```
loadArticles()

featuredArticles

currentLanguage
```

Avoid generic names.

Bad examples

```
data

temp

value

item

obj
```

---

# Functions

Functions should perform one responsibility.

Good functions are:

- small;
- predictable;
- easy to understand;
- easy to reuse.

Avoid large functions with multiple responsibilities.

---

# Classes

Create classes only when they provide real value.

Prefer simpler abstractions when appropriate.

Avoid object-oriented design simply for its own sake.

---

# Single Responsibility

Every module should have one reason to change.

Every function should perform one task.

Every file should represent one concept.

---

# Separation of Concerns

Never mix unrelated concerns.

Separate:

- content;
- presentation;
- styling;
- configuration;
- business logic.

Each layer should have a single responsibility.

---

# DRY

Don't Repeat Yourself.

Whenever duplicated logic appears:

Evaluate whether it should become reusable.

Avoid copy-and-paste.

---

# KISS

Keep It Simple.

Simple solutions are easier to:

- understand;
- maintain;
- review;
- debug.

Avoid unnecessary abstractions.

---

# YAGNI

You Aren't Gonna Need It.

Implement only what is required today.

Avoid speculative architecture.

Do not build features for hypothetical future requirements.

---

# Composition

Prefer composition over inheritance.

Small independent modules are easier to evolve.

---

# Magic Values

Avoid unexplained values.

Bad

```typescript
if (status === 7)
```

Better

```typescript
if (status === STATUS_APPROVED)
```

Meaning should always be explicit.

---

# Side Effects

Functions should avoid unexpected side effects.

Inputs should clearly determine outputs.

Hidden behavior makes software difficult to maintain.

---

# Error Handling

Errors should be handled intentionally.

Avoid silently ignoring failures.

Provide meaningful error messages when appropriate.

---

# Defensive Programming

Validate external input.

Never assume external data is valid.

Fail gracefully.

---

# Dependencies

Every dependency increases maintenance cost.

Before adding one, ask:

Does the standard library solve this?

Can existing project code solve this?

Is this dependency worth maintaining?

Prefer fewer dependencies.

---

# Configuration

Configuration should be centralized.

Avoid hardcoded configuration values.

Environment-specific behavior should remain configurable.

---

# Logging

Logs should help diagnose problems.

Avoid excessive logging.

Avoid logging sensitive information.

---

# Comments

Write comments only when necessary.

Comments should explain:

Why

Not

What

Code should explain what it does.

---

# TODOs

Avoid leaving TODOs in production code.

Incomplete work should remain in a development branch.

---

# Refactoring

Refactor continuously.

Small improvements are preferred over large rewrites.

Never refactor unrelated code while implementing another feature.

---

# Breaking Changes

Avoid breaking existing behavior.

If a breaking change is required:

- document it;
- update affected code;
- verify all references.

---

# Code Duplication

Whenever duplication appears:

Ask whether a reusable abstraction should exist.

Never duplicate code simply because it is faster.

---

# Code Review Mindset

Before considering code complete, ask:

Can this be simpler?

Can this be reused?

Is the naming clear?

Does it follow project standards?

Will another engineer understand this quickly?

---

# Maintainability

Future developers should understand the implementation without needing its original author.

Readable code has higher value than clever code.

---

# Consistency

Consistency is one of the project's highest priorities.

If the repository already follows a pattern:

Follow the pattern.

Do not introduce new conventions without approval.

---

# Performance

Optimize only when necessary.

Measure before optimizing.

Avoid premature optimization.

Readable code has priority over micro-optimizations.

---

# Security

Never expose:

- secrets;
- tokens;
- credentials;
- private keys.

Validate every external input.

Avoid unsafe assumptions.

---

# Technical Debt

Every shortcut creates technical debt.

Only introduce technical debt intentionally.

Document it.

Track it.

Resolve it.

---

# Review Checklist

Before considering development complete:

✓ Naming is clear.

✓ Functions have one responsibility.

✓ No duplicated code exists.

✓ No unnecessary dependencies were introduced.

✓ Error handling is appropriate.

✓ Code follows project standards.

✓ Complexity is justified.

✓ Future maintenance is straightforward.

---

# Definition of Good Code

Good code is:

- Simple
- Predictable
- Consistent
- Testable
- Readable
- Maintainable
- Reusable

The best code is often the code that requires the least explanation.

---

# Final Principle

Every implementation should leave the project in a better state than it was before.

Small improvements accumulate over time.

Long-term quality is more important than short-term speed.