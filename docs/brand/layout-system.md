# Layout System

Version: 1.0

---

# Purpose

This document defines the layout architecture for the WIL.DEV platform.

The goal is to establish a consistent structure across every page, regardless of content type.

A predictable layout improves usability, readability and trust.

The layout should feel engineered.

Not assembled.

---

# Design Philosophy

Layout is architecture.

The interface should be constructed with the same discipline used in software engineering.

Every page should feel:

- structured
- balanced
- intentional
- spacious
- predictable

The layout should quietly communicate confidence.

---

# Core Principle

Content defines layout.

Layout never defines content.

The interface adapts to the information.

Never the opposite.

---

# Grid System

The platform uses a 12-column responsive grid.

Characteristics:

- Mobile First
- Responsive
- Flexible
- Consistent

The grid should remain invisible.

Users should never perceive it.

Only feel its order.

---

# Containers

The platform uses four container sizes.

---

## Narrow

Purpose:

Long-form reading.

Examples:

- Articles
- Documentation
- Writing
- Case Studies

Recommended width:

720–800px

Reading comfort has priority.

---

## Standard

Purpose:

General content.

Examples:

- Home
- About
- Career
- Contact

Recommended width:

1100–1200px

---

## Wide

Purpose:

Landing pages.

Examples:

- Hero
- Marketing sections
- Showcase

Recommended width:

1280–1440px

---

## Full

Purpose:

Backgrounds

Hero sections

Visual storytelling

Interactive experiences

Content should remain aligned inside an internal container.

---

# Horizontal Rhythm

Content should always align to the same vertical guides.

Alignment communicates engineering quality.

Avoid arbitrary positioning.

---

# Vertical Rhythm

Sections should establish a predictable cadence.

Recommended flow:

Hero

↓

Section

↓

Spacing

↓

Section

↓

Spacing

↓

Footer

Whitespace is part of the architecture.

---

# Section Structure

Every section should follow the same hierarchy.

Eyebrow

↓

Title

↓

Description

↓

Content

↓

Actions

↓

Spacing

This predictable rhythm improves scanning.

---

# Reading Layout

Long-form content should prioritize readability.

Recommended structure:

Title

↓

Metadata

↓

Summary

↓

Content

↓

Code

↓

Images

↓

Related Content

Reading should never feel exhausting.

---

# Dashboard Principle

If future dashboards are introduced:

Information should be organized by importance.

Not by visual symmetry.

Users should immediately identify:

- primary metrics
- secondary metrics
- actions

---

# Sidebar

Sidebars should support content.

Never compete with it.

Possible usage:

- Table of Contents
- Related Articles
- Metadata
- Navigation

Avoid unnecessary widgets.

---

# Cards

Cards should separate information.

Not decorate pages.

Spacing should communicate grouping.

Borders should remain subtle.

---

# Spacing System

Spacing should follow a consistent scale.

Preferred spacing tokens:

XS

SM

MD

LG

XL

2XL

3XL

Component implementations should consume spacing tokens rather than arbitrary values.

---

# Responsive Behavior

Layouts should adapt progressively.

Do not hide information simply because the screen is smaller.

Instead:

- reorganize
- stack
- simplify interaction

Preserve content value.

---

# Breakpoints

The implementation should expose semantic breakpoints.

Suggested names:

- Mobile
- Tablet
- Laptop
- Desktop
- Wide

Avoid naming breakpoints after pixel values.

---

# Alignment

Text should align consistently.

Avoid unnecessary center alignment.

Prefer left alignment for:

- articles
- documentation
- long-form reading

Center alignment should be reserved for:

- Hero
- Empty States
- Landing Pages

---

# Hero Layout

Hero sections should contain:

Headline

↓

Supporting Copy

↓

Primary Action

↓

Secondary Action

↓

Visual Element

The message always comes first.

---

# Article Layout

Recommended order:

Title

↓

Metadata

↓

Reading Time

↓

Tags

↓

Content

↓

Related Articles

↓

Author

---

# Navigation Layout

Navigation should remain minimal.

Recommended structure:

Logo

↓

Primary Navigation

↓

Search

↓

Theme Switcher

↓

Call To Action

Avoid unnecessary menu items.

---

# Footer Layout

Footer should communicate completion.

Suggested areas:

- Brand
- Navigation
- Social
- Contact
- Copyright

Simple.

Organized.

Useful.

---

# Visual Balance

Every screen should maintain visual equilibrium.

Avoid:

- oversized empty areas
- crowded sections
- inconsistent widths
- arbitrary alignment

Balance improves trust.

---

# Accessibility

Layouts should support:

- zoom
- keyboard navigation
- responsive reflow
- readable spacing

Accessibility is part of layout quality.

---

# Performance

Layouts should avoid unnecessary nesting.

Prefer:

simple DOM

↓

semantic HTML

↓

lightweight rendering

Complex layouts create unnecessary complexity.

---

# Future Evolution

New layouts should extend the existing system.

Never introduce new layout patterns without strong justification.

Consistency is more valuable than novelty.

---

# Layout Quality Checklist

Before approving a page, verify:

✓ Consistent grid

✓ Predictable spacing

✓ Clear hierarchy

✓ Comfortable reading width

✓ Responsive behavior

✓ Accessible structure

✓ Balanced composition

✓ Minimal visual noise

---

# Final Principle

A great layout is rarely noticed.

Users should remember the ideas.

The layout should quietly organize the experience.

Every page should reinforce one belief:

> **Engineering Complex Solutions.**