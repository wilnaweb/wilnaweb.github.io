# HTML and CSS Standards

This document defines the HTML and CSS implementation standards for the WIL.DEV project.

These standards ensure semantic markup, accessibility, maintainability and consistent rendering across the entire website.

This document complements:

- Design System
- Tailwind CSS Standards
- Accessibility Standards

---

# Purpose

HTML defines the document structure.

CSS defines the visual presentation.

Both should remain independent, predictable and easy to maintain.

The objective is to build pages that are understandable by:

- users;
- browsers;
- search engines;
- assistive technologies;
- future developers.

---

# General Principles

Every HTML document should be:

- Semantic
- Accessible
- Responsive
- Readable
- Minimal

Every CSS implementation should be:

- Predictable
- Reusable
- Consistent
- Lightweight

---

# Semantic HTML

Always prefer semantic HTML elements.

Examples

```html
<header>

<nav>

<main>

<section>

<article>

<aside>

<footer>
```

Avoid generic `<div>` elements when a semantic element already exists.

Semantic HTML improves:

- accessibility;
- SEO;
- maintainability.

---

# Document Structure

Every page should follow this general structure.

```html
<html>

<head>

<body>

<header>

<nav>

<main>

<footer>

</body>

</html>
```

The page hierarchy should remain predictable.

---

# Heading Hierarchy

Every page must contain exactly one `<h1>`.

Heading order must never skip levels.

Correct

```text
h1

↓

h2

↓

h3

↓

h4
```

Incorrect

```text
h1

↓

h3
```

Headings define document structure.

Never use headings for visual styling.

---

# Landmark Elements

Every page should expose the primary landmarks.

Required landmarks

- Header
- Navigation
- Main
- Footer

Additional landmarks should only be added when necessary.

---

# Sections

Use `<section>` only when the content has its own heading.

Avoid wrapping everything inside sections.

Semantic meaning is more important than visual grouping.

---

# Articles

Use `<article>` only for independent content.

Examples

- Blog posts
- Technical articles
- Case studies

Avoid using `<article>` for generic containers.

---

# Navigation

Navigation must always use the `<nav>` element.

Multiple navigation areas are allowed when they represent different navigation contexts.

Examples

- Main Navigation
- Footer Navigation
- Breadcrumb Navigation

---

# Lists

Use proper list elements.

Examples

```html
<ul>

<ol>

<li>
```

Never simulate lists using `<div>` elements.

---

# Buttons and Links

Buttons trigger actions.

Links perform navigation.

Correct

```html
<button>

<a href="">
```

Incorrect

Using buttons for navigation.

Using links as buttons.

Semantic behavior matters.

---

# Forms

Forms must always include:

- labels;
- accessible controls;
- validation;
- error messages.

Placeholders never replace labels.

---

# Images

Every image must include:

- alt text;
- width;
- height (when possible).

Decorative images should use empty alt attributes.

Example

```html
alt=""
```

---

# Tables

Use tables only for tabular information.

Never use tables for layout.

Every table should contain:

- caption (when appropriate)
- table headers
- semantic structure

---

# HTML Attributes

Keep markup clean.

Avoid unnecessary attributes.

Prefer native browser behavior whenever possible.

---

# CSS Philosophy

CSS exists to support the Design System.

Never introduce isolated visual patterns.

Every visual decision should reinforce consistency.

---

# Separation of Concerns

HTML defines structure.

CSS defines presentation.

JavaScript defines behavior.

Never mix these responsibilities.

---

# Selectors

Selectors should remain simple.

Prefer:

- class selectors;
- component scope.

Avoid:

- deep nesting;
- overly specific selectors;
- ID selectors for styling.

---

# Specificity

Keep specificity low.

Avoid selector wars.

Predictable CSS is easier to maintain.

---

# Layout

Use modern layout techniques.

Preferred order

Grid

↓

Flexbox

↓

Block Layout

Avoid legacy layout techniques.

---

# Responsive Design

Mobile First.

Always.

Every layout should progressively adapt to larger screens.

Never create desktop-only pages.

---

# Units

Prefer relative units.

Examples

```css
rem

em

%

vh

vw
```

Avoid fixed pixel values unless truly necessary.

---

# Colors

Colors must come from the Design System.

Avoid arbitrary colors.

Never introduce new color palettes without approval.

---

# Typography

Typography must follow the Design System.

Never create isolated typography rules.

Hierarchy should remain consistent across all pages.

---

# White Space

Whitespace is a design element.

Avoid crowded layouts.

Proper spacing improves readability.

---

# Animations

Animations should improve usability.

Never animate for decoration alone.

Transitions should remain short and subtle.

---

# Focus States

Interactive elements must provide visible focus indicators.

Never remove focus styles without providing an accessible replacement.

---

# Overflow

Avoid unnecessary horizontal scrolling.

Layouts should adapt naturally to available space.

---

# Media

Images

Videos

Embeds

should remain responsive.

Never assume fixed viewport dimensions.

---

# Printing

Pages should remain reasonably printable.

Avoid styles that completely break printed output.

---

# Browser Compatibility

Prefer modern web standards.

Avoid browser-specific hacks whenever possible.

Use progressive enhancement.

---

# CSS Organization

Styles should follow component boundaries.

Avoid giant global stylesheets.

Each component should remain visually independent.

---

# Performance

Avoid:

- unnecessary wrappers;
- excessive nesting;
- unused styles;
- duplicated declarations.

Minimal HTML produces faster rendering.

---

# Anti-Patterns

Avoid:

- div soup;
- table layouts;
- inline styles;
- excessive nesting;
- absolute positioning for layout;
- unnecessary wrappers;
- CSS hacks;
- duplicated styles.

---

# Review Checklist

Before approving an implementation:

✓ Semantic HTML

✓ Accessible markup

✓ Responsive layout

✓ Proper heading hierarchy

✓ Meaningful landmarks

✓ Valid forms

✓ Responsive media

✓ Minimal markup

✓ Clean structure

✓ Consistent styling

---

# Definition of Good HTML and CSS

Good HTML is:

- Semantic
- Accessible
- Predictable
- Minimal

Good CSS is:

- Consistent
- Reusable
- Lightweight
- Maintainable

Together they should produce interfaces that are easy to understand and easy to evolve.

---

# Final Principle

HTML should describe the content.

CSS should describe the presentation.

Neither should depend on implementation details.

When in doubt, choose the solution that produces cleaner markup, simpler styling and better long-term maintainability.