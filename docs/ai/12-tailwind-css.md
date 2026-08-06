# Tailwind CSS Standards

This document defines how Tailwind CSS must be used throughout the WIL.DEV project.

Tailwind is the project's official styling framework.

These standards ensure consistency, maintainability and long-term scalability.

---

# Purpose

Tailwind CSS exists to:

- accelerate development;
- improve consistency;
- reduce CSS complexity;
- minimize stylesheet size;
- encourage reusable UI patterns.

Tailwind should simplify development, not complicate it.

---

# Philosophy

The project follows a Utility-First approach.

Styles should be composed using Tailwind utilities instead of writing custom CSS.

Custom CSS should only be introduced when Tailwind cannot adequately solve the problem.

---

# Source of Truth

The Design System defines the visual language.

Tailwind is only the implementation mechanism.

Never create visual styles that contradict the Design System.

Reference:

```
docs/04-design-system.md
```

---

# General Principles

Every implementation should prioritize:

- consistency;
- readability;
- simplicity;
- reusability.

Avoid styling decisions based solely on personal preference.

---

# Utility Classes

Prefer Tailwind utility classes whenever possible.

Good

```html
<div class="flex items-center gap-4">
```

Avoid creating custom CSS for layouts already supported by Tailwind.

---

# Class Organization

Group utility classes logically.

Recommended order:

Layout

↓

Display

↓

Spacing

↓

Sizing

↓

Typography

↓

Colors

↓

Borders

↓

Effects

↓

Transitions

Example

```html
<div class="
    flex
    items-center
    justify-between
    gap-6
    p-6
    text-lg
    font-semibold
    text-primary
    bg-white
    rounded-xl
    shadow-md
">
```

Readable classes are easier to maintain.

---

# Long Class Lists

Avoid excessively long class lists.

If the same combination appears repeatedly:

Create a reusable component.

Do not copy and paste utility groups.

---

# Custom CSS

Use custom CSS only when:

- Tailwind cannot express the desired behavior;
- browser-specific features are required;
- animations become excessively verbose;
- readability improves significantly.

Tailwind should remain the primary styling solution.

---

# Arbitrary Values

Avoid arbitrary values.

Bad

```html
mt-[23px]
```

Prefer design tokens.

Good

```html
mt-6
```

Arbitrary values should require explicit justification.

---

# Spacing

Use only spacing values defined by the project's spacing scale.

Avoid manually choosing pixel values.

Consistent spacing creates visual rhythm.

---

# Colors

Only use colors defined by the Design System.

Avoid:

```html
text-[#123456]
```

Prefer semantic color names.

Example

```html
text-primary

bg-surface

border-muted
```

Semantic colors improve maintainability.

---

# Typography

Typography utilities should follow the Design System.

Avoid overriding typography locally.

Respect:

- font family;
- font size;
- font weight;
- line height.

---

# Layout

Prefer Flexbox and Grid.

Use:

Flexbox

↓

One-dimensional layouts

Grid

↓

Two-dimensional layouts

Choose the simplest layout system.

---

# Width and Height

Avoid fixed dimensions whenever possible.

Prefer:

```html
w-full

max-w-4xl

min-h-screen
```

Fluid layouts improve responsiveness.

---

# Responsive Design

Always use Mobile First.

Example

```html
grid

md:grid-cols-2

lg:grid-cols-3
```

Avoid desktop-first implementations.

---

# Breakpoints

Use only project-approved breakpoints.

Never create custom media queries unless absolutely necessary.

The breakpoint system must remain consistent across the project.

---

# Dark Mode

Every component must support Dark Mode.

Use Tailwind's dark variant.

Example

```html
bg-white

dark:bg-neutral-900
```

Avoid maintaining separate stylesheets.

---

# Hover States

Hover should reinforce interaction.

Prefer subtle transitions.

Example

```html
hover:bg-primary

hover:text-white
```

Avoid excessive animations.

---

# Focus States

Interactive elements must provide visible focus styles.

Example

```html
focus:outline-none

focus:ring-2

focus:ring-primary
```

Keyboard accessibility is mandatory.

---

# Transitions

Use transitions sparingly.

Good

```html
transition-colors

duration-200
```

Avoid long or distracting animations.

---

# Shadows

Use the project's predefined shadow scale.

Avoid arbitrary shadow values.

Shadows should reinforce hierarchy, not decoration.

---

# Border Radius

Use only approved radius values.

Examples

```html
rounded

rounded-lg

rounded-xl
```

Avoid arbitrary radii.

---

# Containers

Use the project's layout containers.

Avoid manually defining page widths.

Page width should remain consistent across the entire website.

---

# Z-Index

Avoid arbitrary z-index values.

Use a documented layering strategy.

Examples

- Header
- Navigation
- Modal
- Overlay
- Tooltip

Every layer should have a defined purpose.

---

# Animation

Animations should improve usability.

Avoid decorative animations.

Use motion only when it provides meaningful feedback.

---

# Tailwind Configuration

Project-wide customization belongs in:

```
tailwind.config.ts
```

Avoid local configuration scattered throughout the project.

---

# Plugins

Only introduce Tailwind plugins when they provide significant value.

Avoid unnecessary plugins.

Each plugin increases maintenance cost.

---

# Component Reuse

Repeated Tailwind patterns should become reusable components.

Never duplicate long utility combinations.

One implementation.

Multiple usages.

---

# Anti-Patterns

Avoid:

- arbitrary values;
- inline styles;
- duplicated utility groups;
- excessive nesting;
- custom CSS for simple layouts;
- unnecessary Tailwind plugins;
- inconsistent spacing;
- inconsistent colors.

---

# Review Checklist

Before approving a Tailwind implementation:

✓ Mobile First

✓ Responsive

✓ Design tokens respected

✓ No arbitrary values

✓ Utility classes remain readable

✓ No duplicated utility groups

✓ Dark Mode supported

✓ Focus states implemented

✓ Visual consistency preserved

---

# Definition of Good Tailwind Code

Good Tailwind code is:

- Consistent
- Predictable
- Readable
- Responsive
- Accessible
- Easy to maintain

The objective is to produce interfaces that are easy to evolve and visually consistent.

---

# Final Principle

Tailwind is a tool, not the architecture.

The Design System defines the visual language.

Tailwind implements that language.

Whenever multiple implementations are possible, choose the one that produces the simplest, most readable and most maintainable markup.