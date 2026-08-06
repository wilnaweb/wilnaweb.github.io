# Performance Standards

This document defines the performance standards for the WIL.DEV project.

Performance is a fundamental architectural requirement.

Every implementation must preserve or improve the website's performance.

Performance should never be treated as an optional optimization.

---

# Purpose

The website should provide an excellent browsing experience.

Visitors should immediately access the content with minimal waiting time.

Performance contributes directly to:

- User Experience
- Accessibility
- SEO
- Maintainability

---

# Performance Philosophy

The project follows a **Performance First** philosophy.

Whenever multiple technical solutions exist, prefer the one that:

- generates less HTML;
- generates less CSS;
- generates less JavaScript;
- performs fewer network requests;
- reduces rendering complexity.

Simple solutions are usually faster.

---

# Performance Budget

Every implementation should respect the project's performance budget.

Target values:

- Lighthouse Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Every release should strive to maintain these scores.

---

# JavaScript

JavaScript is the most expensive asset.

Use JavaScript only when absolutely necessary.

Prefer:

Static HTML

↓

CSS

↓

Minimal JavaScript

↓

Heavy JavaScript

Avoid unnecessary hydration.

---

# Astro Islands

Hydrate only components that require interaction.

Static content should never be hydrated.

Every hydrated component increases runtime cost.

---

# HTML

HTML should remain:

- semantic;
- clean;
- minimal.

Avoid unnecessary wrappers.

Avoid deeply nested structures.

Smaller HTML renders faster.

---

# CSS

Keep CSS lightweight.

Avoid:

- duplicated styles;
- unused styles;
- excessive specificity.

Tailwind utilities should remain the primary styling strategy.

---

# Images

Every image should be optimized.

Preferred formats:

SVG

↓

WebP

↓

PNG

↓

JPEG

Images should:

- use appropriate dimensions;
- avoid unnecessary file size;
- provide width and height attributes.

---

# Responsive Images

Use responsive images whenever appropriate.

Never serve desktop-sized images to mobile devices.

---

# Lazy Loading

Images below the fold should be lazy loaded.

Critical images should load immediately.

Prioritize above-the-fold content.

---

# Fonts

Fonts should be optimized.

Recommendations:

- self-hosted fonts;
- minimal font families;
- minimal font weights;
- preload critical fonts.

Avoid unnecessary font downloads.

---

# Icons

Use lightweight icon libraries.

Load only required icons.

Avoid large icon bundles.

---

# Network Requests

Reduce the number of HTTP requests whenever possible.

Avoid unnecessary external resources.

Group related assets efficiently.

---

# Third-Party Scripts

Every third-party script has a cost.

Before adding one, verify:

- Is it essential?
- Can it be deferred?
- Can it be loaded conditionally?

Minimize external dependencies.

---

# Animations

Animations should remain lightweight.

Prefer:

- CSS transitions;
- transform;
- opacity.

Avoid expensive layout-triggering animations.

---

# Layout Stability

Avoid layout shifts.

Always define dimensions for:

- images;
- media;
- containers.

The layout should remain stable during loading.

---

# Rendering

Prefer static rendering.

Avoid client-side rendering unless interaction requires it.

Rendering should occur at build time whenever possible.

---

# Build Output

Production builds should generate:

- optimized HTML;
- optimized CSS;
- optimized assets.

No unused resources should be shipped.

---

# Caching

Static assets should be cache-friendly.

Assets with content hashes are preferred.

Avoid invalidating caches unnecessarily.

---

# Content Loading

Load only the content required for the current page.

Avoid loading unnecessary collections or data.

---

# Code Splitting

Split code naturally according to application structure.

Avoid loading JavaScript that is never executed.

---

# Bundle Size

Keep bundles as small as possible.

Every dependency increases bundle size.

Evaluate dependencies carefully.

---

# Dependencies

Before introducing a dependency, ask:

Does it reduce complexity?

Does it improve maintainability?

Does it justify its performance cost?

If not, do not introduce it.

---

# Accessibility

Performance and accessibility should evolve together.

Fast pages should also be fully accessible.

Never sacrifice accessibility for speed.

---

# SEO

Performance directly affects SEO.

Fast pages improve:

- indexing;
- rankings;
- user engagement.

Performance optimizations should benefit both users and search engines.

---

# Monitoring

Performance should be reviewed periodically.

Measure:

- Lighthouse
- Core Web Vitals
- Bundle Size

Avoid relying on assumptions.

Measure first.

---

# Anti-Patterns

Avoid:

- unnecessary hydration;
- large JavaScript bundles;
- oversized images;
- render-blocking resources;
- duplicated assets;
- unnecessary dependencies;
- excessive animations;
- layout shifts.

---

# Review Checklist

Before approving any implementation:

✓ Static rendering preferred

✓ Minimal JavaScript

✓ Optimized images

✓ Responsive images

✓ Lazy loading implemented

✓ Optimized fonts

✓ Stable layout

✓ Lightweight CSS

✓ No unnecessary dependencies

✓ Performance budget respected

---

# Definition of Good Performance

Good performance means:

- fast initial rendering;
- responsive interactions;
- stable layouts;
- efficient resource loading;
- minimal runtime overhead.

Users should experience the content immediately.

---

# Final Principle

Performance is not achieved through isolated optimizations.

It is the result of hundreds of good engineering decisions.

Every component, every asset and every dependency contributes to the overall performance of the website.

Always choose the implementation that delivers the best user experience with the least complexity.