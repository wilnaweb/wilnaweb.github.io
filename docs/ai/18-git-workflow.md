# Git Workflow

This document defines the Git workflow standards for the WIL.DEV project.

The objective is to maintain a clean, understandable and maintainable repository history.

Every commit should represent a meaningful and reviewable unit of work.

---

# Purpose

Git is more than version control.

It is the project's historical record.

Every commit tells part of the project's evolution.

Write history that future developers can understand.

---

# Branch Strategy

The project follows a simplified Git Flow.

Main branches

```
main
```

Production-ready code.

```
develop
```

Integration branch.

Feature branches

```
feature/<feature-name>
```

Bug fixes

```
fix/<issue-name>
```

Documentation

```
docs/<topic>
```

Hotfixes

```
hotfix/<issue-name>
```

---

# Branch Naming

Use lowercase.

Use kebab-case.

Good

```
feature/home-page

feature/case-study-template

fix/navigation-menu

docs/design-system
```

Bad

```
FeatureHome

myBranch

Fix01

feature_new
```

---

# Commit Philosophy

Each commit should represent one logical change.

Avoid mixing unrelated modifications.

One purpose.

One commit.

---

# Commit Messages

The project follows Conventional Commits.

Examples

```
feat: add expertise page

fix: correct navigation links

docs: update design system

refactor: simplify hero component

style: improve spacing

chore: update dependencies

build: configure github pages

ci: update deployment workflow

test: add component tests
```

---

# Commit Rules

Commits should be:

- small;
- focused;
- descriptive;
- reviewable.

Avoid giant commits.

---

# Before Committing

Always verify:

- code compiles;
- formatting is correct;
- lint passes;
- documentation updated;
- unnecessary files removed.

Never commit broken code.

---

# Pull Requests

Every Pull Request should contain one objective.

Good

```
Implement Career page
```

Bad

```
Career page
+
SEO improvements
+
New components
+
Dark Mode fixes
```

Small PRs are easier to review.

---

# Pull Request Description

Every PR should explain:

- what changed;
- why it changed;
- important implementation decisions;
- potential impacts.

Reviewers should understand the change without reading every commit.

---

# Code Review

Before requesting review, verify:

- architecture respected;
- coding standards followed;
- documentation updated;
- no duplicated code;
- accessibility preserved;
- performance preserved.

Self-review first.

---

# Merge Strategy

Prefer:

Squash Merge

when multiple small commits belong to the same feature.

Preserve meaningful history.

---

# Documentation

Whenever architecture changes:

Update the corresponding documentation.

Examples

```
docs/

docs/ai/

DEC entries
```

Code and documentation should evolve together.

---

# Architecture Decisions

When a significant architectural decision is made:

Create a new DEC entry.

Never modify historical decisions.

Architecture history should remain immutable.

---

# Refactoring

Refactoring should not introduce unrelated feature changes.

Separate:

Refactoring

↓

Feature Development

↓

Bug Fixes

Each deserves its own commit history.

---

# Dependencies

Adding a dependency requires justification.

Document:

- why it is needed;
- alternatives considered;
- expected benefits.

Dependencies increase maintenance cost.

---

# Generated Files

Avoid committing generated artifacts unless they are part of the deployment strategy.

Examples

Do not commit:

```
node_modules

coverage

.cache

tmp
```

Commit only source code and project assets.

---

# Large Changes

Large implementations should be divided into multiple commits.

Each commit should leave the project in a working state.

Avoid "everything in one commit."

---

# Rollback

Commits should be reversible.

Small commits simplify rollback.

Avoid commits that modify unrelated parts of the project.

---

# Release Preparation

Before creating a release:

✓ Documentation updated

✓ Build successful

✓ No lint errors

✓ No TypeScript errors

✓ No broken links

✓ SEO verified

✓ Accessibility verified

✓ Performance verified

---

# Git History

Git history should tell the story of the project.

Reading commit history should explain:

- how the project evolved;
- why decisions were made;
- when features appeared.

History is documentation.

---

# Anti-Patterns

Avoid:

- giant commits;
- vague commit messages;
- committing broken code;
- mixing unrelated changes;
- force pushing shared branches;
- committing temporary files;
- rewriting published history.

---

# Review Checklist

Before pushing code:

✓ Project builds successfully

✓ Commit message follows Conventional Commits

✓ Documentation updated

✓ Related DEC created if needed

✓ No debug code

✓ No temporary files

✓ No commented code

✓ Self-review completed

---

# Definition of Good Git Usage

Good Git usage is:

- clean;
- incremental;
- descriptive;
- traceable;
- easy to review.

Every commit should make sense independently.

---

# Final Principle

Git is the memory of the project.

Every commit becomes part of its permanent history.

Write history that future developers will appreciate reading.