# Design System Implementation

This document defines how AI assistants must implement the WIL.DEV Design System.

This document does not define the design itself.

The design is defined in:

```
docs/04-design-system.md
```

This document defines how that design should be translated into code.

---

# Purpose

The Design System exists to ensure visual consistency across the entire project.

Every page should feel like part of the same product.

Every component should look like it belongs to the same design language.

Visual consistency is more important than visual originality.

---

# Source of Truth

The Design System is the single source of truth for every visual decision.

Never create new visual patterns without explicit approval.

When in doubt:

Follow the Design System.

Never improvise.

---

# Design Principles

Every implementation should follow these principles.

Consistency

Simplicity

Hierarchy

Whitespace

Accessibility

Responsiveness

Performance

---

# Visual Consistency

Every page should share the same visual language.

Typography

Spacing

Colors

Borders

Radius

Icons

Buttons

Cards

Links

Navigation

All visual elements should feel related.

---

# Design Tokens

Every visual property should come from design tokens whenever possible.

Examples

Typography

Spacing

Border Radius

Shadows

Colors

Breakpoints

Never invent new values.

Never use arbitrary values without justification.

---

# Typography

Typography should create a clear reading hierarchy.

Headings

↓

Sections

↓

Paragraphs

↓

Captions

Never break typography consistency.

---

# Spacing

Spacing should follow a predictable scale.

Avoid random spacing values.

Consistent spacing improves readability.

Whitespace is an important design element.

---

# Colors

Only colors defined by the Design System may be used.

Avoid creating:

new shades

new gradients

new palettes

Visual identity must remain stable.

---

# Icons

Icons should:

be simple;

be consistent;

support content;

never replace text.

Icons are complementary.

Never rely on icons alone to communicate important information.

---

# Images

Images should support the content.

Never use decorative images that do not add value.

Prefer:

real projects;

technical diagrams;

screenshots;

professional photography.

Avoid generic stock images.

---

# Cards

Cards should present information clearly.

Every card should follow the same visual language.

Spacing

Borders

Typography

Hover effects

Padding

Radius

should remain consistent.

---

# Buttons

Buttons should communicate actions.

Primary actions should always look like primary actions.

Secondary actions should never compete visually with primary actions.

Avoid creating multiple button styles.

---

# Navigation

Navigation should remain predictable.

Users should always know:

where they are;

where they can go next.

Never redesign navigation patterns without approval.

---

# Responsive Design

Responsiveness is mandatory.

Design must work across:

mobile

tablet

desktop

wide desktop

Never implement desktop-first layouts.

---

# Accessibility

Visual design must support accessibility.

Examples

Readable typography

Good contrast

Visible focus states

Large click targets

Clear navigation

Accessibility takes precedence over aesthetics.

---

# Dark Mode

Every new component must support both themes.

Never create components that work only in one theme.

Color choices must remain readable in both modes.

---

# Motion

Animations should be subtle.

Motion exists to improve usability.

Never animate purely for decoration.

Prefer:

small transitions;

simple fades;

natural movement.

Avoid excessive animation.

---

# Layout

Layouts should prioritize readability.

Content should never feel crowded.

Avoid unnecessary visual complexity.

Good layout is often invisible.

---

# Visual Hierarchy

Every page should answer three questions immediately.

What is this page?

↓

What is most important?

↓

What should the visitor do next?

Design should guide the eye naturally.

---

# Repetition

Repeated UI patterns should become reusable components.

Never duplicate visual implementations.

One pattern.

One implementation.

Many uses.

---

# Evolution

The Design System will evolve over time.

New visual patterns should only be introduced when they clearly improve consistency or usability.

Avoid visual experimentation inside production code.

---

# Final Principle

The Design System is not a collection of styles.

It is the visual language of the project.

Every implementation should strengthen that language.

When multiple visual solutions are possible,

choose the one that best preserves consistency across the entire website.