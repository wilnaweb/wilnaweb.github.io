# Accessibility Standards

This document defines the accessibility standards for the WIL.DEV project.

Accessibility is a mandatory architectural requirement.

Every page, component and interaction must be designed and implemented so that it can be used by the widest possible audience, including people with disabilities.

Accessibility is not optional.

---

# Purpose

The purpose of accessibility is to ensure that every visitor can access the project's content regardless of:

- physical ability;
- visual ability;
- hearing ability;
- cognitive ability;
- device;
- input method.

Accessibility improves usability for everyone.

---

# Accessibility Philosophy

The project follows an **Accessibility First** philosophy.

Accessibility should never be added later.

It should be considered during:

- design;
- development;
- review;
- testing.

---

# Compliance

The project targets:

**WCAG 2.2 Level AA**

Every implementation should comply with this standard whenever technically possible.

---

# Semantic HTML

Always prefer semantic HTML.

Correct examples

```html
<header>

<nav>

<main>

<section>

<article>

<footer>
```

Avoid generic `<div>` elements when semantic elements are available.

Semantic HTML improves both accessibility and SEO.

---

# Heading Structure

Every page must contain:

- one H1;
- logical heading hierarchy;
- descriptive headings.

Never skip heading levels.

Headings define the document outline.

---

# Landmark Regions

Every page should expose the following landmarks:

- Header
- Navigation
- Main
- Footer

Additional landmarks should only be introduced when they improve navigation.

---

# Keyboard Navigation

Every interactive element must be fully usable with a keyboard.

Users must be able to:

- navigate;
- activate;
- close;
- submit;
- interact;

without using a mouse.

Keyboard accessibility is mandatory.

---

# Focus Management

Every interactive element must provide a visible focus state.

Never remove focus outlines without providing an accessible replacement.

Focus indicators should be:

- visible;
- consistent;
- high contrast.

---

# Links

Links must clearly describe their destination.

Good

```
Read the Adobe Experience Manager Case Study
```

Bad

```
Click here
```

Links should make sense even when read out of context.

---

# Buttons

Buttons should clearly describe the action they perform.

Avoid generic labels.

Good

```
Download Resume
```

Bad

```
Submit
```

Action labels should be explicit.

---

# Forms

Every form field must include:

- label;
- accessible validation;
- meaningful error messages.

Placeholders never replace labels.

---

# Images

Every informative image must define meaningful alt text.

Example

```
Adobe Experience Manager architecture diagram
```

Decorative images should use:

```html
alt=""
```

Avoid redundant descriptions.

---

# Icons

Icons should complement text.

Never rely on icons alone to communicate meaning.

Whenever an icon represents an action, provide an accessible label.

---

# Color

Color should never be the only way to communicate information.

Example

Bad

```
Red means error.
```

Good

```
Error icon

↓

Red color

↓

Error message
```

Multiple cues improve accessibility.

---

# Contrast

Text must meet WCAG AA contrast requirements.

Low-contrast text should never be used.

Readability has priority over aesthetics.

---

# Motion

Respect reduced motion preferences.

Users who prefer reduced motion should receive simplified animations.

Avoid excessive animation.

---

# Animations

Animations should never:

- flash rapidly;
- cause distraction;
- interfere with reading.

Motion should improve usability.

---

# Responsive Zoom

Pages should remain usable at 200% zoom without loss of functionality.

Content should reflow naturally.

---

# Screen Readers

Every page should be understandable when read using screen readers.

Avoid hidden meaning.

Use semantic markup.

Provide descriptive labels.

---

# ARIA

Use ARIA only when native HTML cannot express the required semantics.

Rule

Native HTML

↓

ARIA

No ARIA is better than incorrect ARIA.

---

# Tables

Tables should contain:

- table headers;
- semantic relationships;
- captions when appropriate.

Never use tables for layout.

---

# Language

Every page must declare its language.

Example

```html
<html lang="en">

<html lang="pt-BR">
```

Language metadata improves screen reader pronunciation.

---

# Error Messages

Error messages should:

- describe the problem;
- explain how to resolve it.

Avoid vague messages.

Good

```
Email address is required.
```

Bad

```
Invalid input.
```

---

# Interactive Components

Interactive components should expose:

- proper roles;
- keyboard support;
- accessible names;
- focus management.

Accessibility should remain consistent across all components.

---

# Media

Video should provide captions whenever applicable.

Audio should provide transcripts whenever possible.

Media should never become inaccessible.

---

# Testing

Accessibility should be verified using:

- keyboard navigation;
- browser accessibility tools;
- automated accessibility testing;
- manual review.

Never rely exclusively on automated tools.

---

# Accessibility Review Checklist

Before approving any implementation:

✓ Semantic HTML

✓ One H1

✓ Logical heading hierarchy

✓ Visible focus states

✓ Keyboard navigation

✓ Labels on every form field

✓ Meaningful alt text

✓ Accessible links

✓ Accessible buttons

✓ Sufficient contrast

✓ Responsive zoom

✓ Proper language metadata

✓ Appropriate ARIA usage

✓ WCAG AA compliance

---

# Anti-Patterns

Avoid:

- removing focus outlines;
- using color alone;
- missing labels;
- missing alt text;
- inaccessible forms;
- keyboard traps;
- generic link text;
- invalid heading hierarchy;
- unnecessary ARIA;
- inaccessible custom controls.

---

# Definition of Good Accessibility

Good accessibility is:

- invisible to most users;
- essential for many users;
- beneficial for everyone.

Accessible interfaces are easier to use, easier to understand and easier to maintain.

---

# Final Principle

Accessibility is not a feature.

It is a quality attribute of the software.

Every implementation should make the website usable by as many people as possible, regardless of their abilities or the technology they use.

When accessibility and visual preference conflict, accessibility always wins.