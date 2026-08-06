# Color System

Version: 2.0

---

# Purpose

This document defines the official color system for the WIL.DEV brand.

Its purpose is not simply to define colors.

It defines how color communicates hierarchy, confidence and engineering quality across the entire platform.

Every color must have a purpose.

Nothing should exist purely for decoration.

---

# Color Philosophy

The WIL.DEV color system follows one principle:

> Neutral by Default.
> Intentional by Exception.

Most interfaces should remain visually neutral.

Accent colors exist only to guide attention.

The content should always remain the primary visual element.

---

# Brand Personality Through Color

The palette should communicate:

- Trust
- Precision
- Engineering
- Stability
- Professionalism
- Calm
- Technical Excellence

The interface should never rely on highly saturated colors.

Hierarchy should come from layout, typography and spacing.

Color is the final layer.

---

# Visual Identity

The WIL.DEV visual language follows an **Architectural Dark** approach.

Characteristics:

- Deep backgrounds
- Neutral surfaces
- Crisp typography
- Minimal gradients
- Controlled accents
- High readability

The interface should feel engineered rather than designed.

---

# Color Distribution

Approximate visual balance across the interface:

75% Neutral Colors

20% Surface Colors

5% Accent Colors

The interface should never become colorful.

Restraint creates confidence.

---

# Color Roles

Rather than thinking about individual colors, the system defines semantic roles.

Every UI color belongs to one of these categories.

## Background

Primary application background.

---

## Surface

Cards, panels and content containers.

---

## Surface Elevated

Modals, dropdowns and floating interfaces.

---

## Border

Defines structure.

Never decoration.

---

## Divider

Separates content.

Should remain subtle.

---

## Primary Text

Highest visual priority.

---

## Secondary Text

Supporting information.

---

## Muted Text

Low emphasis.

Never low readability.

---

## Interactive

Buttons, links and active states.

---

## Accent

Highlights.

Never dominant.

---

## Semantic

Success

Warning

Error

Information

---

# Design Tokens

The Design System should expose semantic tokens instead of raw colors.

Examples:

```text
--color-background

--color-surface

--color-surface-elevated

--color-border

--color-border-muted

--color-text-primary

--color-text-secondary

--color-text-muted

--color-primary

--color-primary-hover

--color-primary-active

--color-focus

--color-success

--color-warning

--color-error

--color-info
```

Implementation details belong to the Design System.

Branding defines the semantic meaning.

---

# Initial Color Direction

The following colors represent the intended visual direction.

These values may evolve during implementation.

Background

```
#0B1120
```

Surface

```
#111827
```

Surface Elevated

```
#1F2937
```

Border

```
#374151
```

Primary Text

```
#F8FAFC
```

Secondary Text

```
#CBD5E1
```

Muted Text

```
#94A3B8
```

Primary Brand

```
#2563EB
```

Primary Hover

```
#1D4ED8
```

Primary Active

```
#1E40AF
```

Focus

```
#60A5FA
```

---

# Accent Colors

Accent colors should be rare.

Recommended applications:

- Active navigation
- Links
- Primary actions
- Selected states
- Keyboard focus
- Data visualization

Never use accent colors to decorate layouts.

---

# Semantic Colors

Status colors should remain conventional.

Success

Green

Warning

Amber

Error

Red

Information

Blue

Users should understand status immediately without learning a custom system.

---

# Gradients

Gradients are not part of the core interface.

They may appear only in:

- Hero sections
- Brand illustrations
- Marketing assets
- Open Graph images

Never inside ordinary UI components.

---

# Shadows

Depth should be created through subtle shadows.

Avoid dramatic elevation.

Engineering products feel stable.

Not floating.

---

# Borders

Borders should organize information.

Prefer borders over heavy shadows.

Structure should come from alignment and spacing.

Not visual effects.

---

# Dark Mode

Dark Mode is the native experience.

The interface should be designed for dark environments first.

Dark Mode should communicate:

- confidence
- focus
- depth
- engineering

Not darkness.

---

# Light Mode

Light Mode is an equal citizen.

It should preserve:

- hierarchy
- spacing
- rhythm
- personality

Only luminance changes.

The identity remains the same.

---

# Accessibility

Every color combination must satisfy WCAG AA.

Contrast always has priority over aesthetics.

Accessibility is part of engineering quality.

---

# Color Hierarchy

The interface should guide attention through this order:

Typography

↓

Spacing

↓

Layout

↓

Color

↓

Motion

Color should never become the primary communication tool.

---

# Color Anti-Patterns

Avoid:

- Neon colors
- Rainbow gradients
- Excessive saturation
- Decorative backgrounds
- Random accent colors
- Colorful dashboards
- Visual noise

The interface should remain timeless.

---

# Engineering Principle

Color should quietly support engineering.

It should never compete with it.

Users should remember the ideas.

Not the palette.

---

# Success Criteria

The color system is successful if users perceive the interface as:

- trustworthy
- premium
- technical
- organized
- modern
- calm

without consciously noticing the colors.

---

# Final Principle

The best color system is almost invisible.

It quietly reinforces clarity, hierarchy and confidence.

Every color should strengthen one idea:

> Engineering Complex Solutions.