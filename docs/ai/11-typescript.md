# TypeScript Standards

This document defines how TypeScript must be used throughout the WIL.DEV project.

The objective is to produce code that is predictable, maintainable and easy to understand.

TypeScript should improve software quality, not increase complexity.

---

# Purpose

TypeScript exists to:

- improve readability;
- increase type safety;
- reduce runtime errors;
- improve refactoring;
- enhance developer experience.

Never use TypeScript only as documentation.

Types must provide real value.

---

# Configuration

The project uses TypeScript in **Strict Mode**.

Strict Mode must remain enabled.

Never relax compiler rules simply to silence errors.

Compiler errors should be fixed, not ignored.

---

# Type Safety

Always prefer explicit types.

Good

```typescript
interface Article {
  title: string;
  slug: string;
}
```

Avoid relying excessively on implicit typing when it reduces readability.

---

# Avoid any

Never use `any`.

Prefer:

```typescript
unknown
```

or

proper interfaces.

`any` removes the primary benefit of TypeScript.

---

# Interfaces

Use interfaces for public contracts.

Examples

- Component Props
- Collection Models
- Configuration Objects
- Shared Data Structures

Interfaces improve consistency and readability.

---

# Type Aliases

Use type aliases only when they better represent the domain.

Examples

```typescript
type Language = "en" | "pt-br";
```

Avoid creating unnecessary aliases.

---

# Enums

Avoid enums unless they clearly improve readability.

Prefer literal unions whenever possible.

Good

```typescript
type Theme = "light" | "dark";
```

Instead of

```typescript
enum Theme {
  Light,
  Dark
}
```

---

# Immutability

Prefer immutable objects.

Use `readonly` whenever appropriate.

Avoid unnecessary mutation.

Immutable code is easier to reason about.

---

# Function Signatures

Every exported function should have an explicit return type.

Example

```typescript
function loadArticles(): Article[] {
```

Explicit contracts improve maintainability.

---

# Function Parameters

Keep parameter lists small.

Prefer:

```typescript
createArticle(article)
```

instead of

```typescript
createArticle(
    title,
    description,
    slug,
    image,
    date,
    author,
    category
)
```

Use objects when parameter lists become large.

---

# Nullability

Be explicit.

Prefer

```typescript
Article | null
```

instead of implicit nullable values.

Never assume values always exist.

---

# Optional Properties

Use optional properties intentionally.

Avoid making everything optional.

Required information should remain required.

---

# Assertions

Avoid unnecessary type assertions.

Bad

```typescript
value as Article
```

Prefer proper type narrowing.

Assertions should be the exception.

---

# Type Guards

Use type guards when handling unknown values.

Avoid unsafe assumptions.

Runtime validation complements compile-time safety.

---

# Generics

Use generics only when they simplify code.

Avoid overly complex generic hierarchies.

Simple generics are preferred.

---

# Utility Types

Use built-in utility types when appropriate.

Examples

- Partial
- Pick
- Omit
- Readonly
- Record

Avoid reinventing existing utilities.

---

# Naming

Interfaces

PascalCase

```typescript
Article
```

Types

PascalCase

```typescript
Language
```

Generic Types

Single capital letters only when obvious.

Otherwise use descriptive names.

---

# Imports

Prefer importing only what is required.

Avoid wildcard imports.

Good

```typescript
import type { Article } from "./article";
```

Use `import type` whenever possible.

---

# Type Organization

Keep types close to the domain they describe.

Avoid giant global type files.

Types should evolve together with the code they support.

---

# Error Handling

TypeScript does not replace runtime validation.

External data should always be validated.

Never trust user input.

Never trust external APIs.

---

# Readability

Readable types are more valuable than clever types.

Avoid creating types that require extensive TypeScript knowledge to understand.

---

# Performance

Type definitions should not significantly increase implementation complexity.

Choose the simplest correct type.

---

# Anti-Patterns

Avoid:

- any
- unnecessary assertions
- giant interfaces
- deeply nested generic types
- implicit nullability
- duplicated interfaces
- global type dumping

---

# Review Checklist

Before approving TypeScript code:

✓ No `any`

✓ Interfaces are meaningful

✓ Public APIs are typed

✓ Return types are explicit

✓ Readonly used where appropriate

✓ Utility types used correctly

✓ No duplicated types

✓ Types remain readable

---

# Definition of Good TypeScript

Good TypeScript is:

- Simple
- Explicit
- Safe
- Predictable
- Readable
- Maintainable

The objective is to help developers understand the code, not to demonstrate advanced TypeScript features.

---

# Final Principle

TypeScript is a tool for improving software quality.

If a type makes the code harder to understand without increasing safety, simplify it.

Readable types are better than clever types.