# Forbidden Actions

This document defines actions that AI assistants must never perform while contributing to the WIL.DEV project.

These rules have the highest priority.

If a requested implementation conflicts with these rules, stop and request clarification.

---

# Purpose

The objective of these restrictions is to preserve:

- architecture;
- maintainability;
- consistency;
- repository integrity.

AI assistants should never make assumptions that significantly alter the project.

---

# Never Invent Requirements

Implement only what has been requested.

Never introduce:

- new features;
- new workflows;
- new pages;
- new technologies;
- new dependencies;
- new business rules.

If requirements are unclear:

Ask.

Do not guess.

---

# Never Invent Content

Business content belongs to the author.

Never invent:

- projects;
- companies;
- customers;
- statistics;
- dates;
- metrics;
- certifications;
- awards;
- professional experience.

If information is missing:

Leave a placeholder only when explicitly requested.

Otherwise:

Ask for clarification.

---

# Never Modify Architecture Without Approval

Architecture is intentional.

Never:

- reorganize folders;
- change project structure;
- replace frameworks;
- introduce new architectural patterns.

Architecture changes require explicit approval.

---

# Never Ignore Existing Standards

Do not replace existing project conventions with personal preferences.

Respect:

- naming;
- folder organization;
- component patterns;
- documentation;
- coding style.

Consistency has priority.

---

# Never Duplicate Code

Before writing new code:

Search for an existing implementation.

Reuse whenever possible.

Duplication increases maintenance cost.

---

# Never Hardcode Business Content

Business content must never be embedded in source code.

Incorrect

```text
Wilson Cavalcante

Adobe Experience Manager

Career
```

Correct

Content should come from:

- Markdown;
- configuration;
- component properties.

---

# Never Introduce Unnecessary Dependencies

Every dependency increases:

- maintenance;
- bundle size;
- security risk.

Before adding one, verify whether:

- native APIs;
- existing project code;
- framework capabilities

already solve the problem.

---

# Never Relax Quality Standards

Do not:

- disable TypeScript errors;
- ignore lint warnings;
- bypass validation;
- suppress accessibility problems.

Fix problems.

Do not hide them.

---

# Never Break Accessibility

Never:

- remove focus indicators;
- remove labels;
- ignore keyboard navigation;
- remove alt text;
- reduce contrast below acceptable levels.

Accessibility regressions are unacceptable.

---

# Never Break SEO

Do not remove:

- metadata;
- canonical URLs;
- structured data;
- internal links;
- sitemap support.

SEO should never regress.

---

# Never Prioritize Cleverness

Avoid:

- unnecessary abstractions;
- advanced patterns without justification;
- clever code.

Readable code always wins.

---

# Never Create Giant Components

If a component becomes difficult to understand:

Split it.

Small components are easier to maintain.

---

# Never Ignore Existing Components

Before creating a new component:

Search the repository.

Prefer reuse.

---

# Never Mix Responsibilities

Do not mix:

- content;
- presentation;
- business logic;
- configuration;
- routing.

Each layer has its own responsibility.

---

# Never Commit Temporary Code

Remove:

- debug code;
- console logs;
- commented code;
- experimental implementations;
- temporary workarounds.

Production code should remain clean.

---

# Never Leave Placeholder Content

Avoid:

```
Lorem Ipsum

TODO

Coming Soon

Sample Text
```

Incomplete content should remain unpublished.

---

# Never Change Public Interfaces Without Reason

Avoid breaking:

- component APIs;
- routes;
- content structures;
- shared contracts.

Backward compatibility should be preserved whenever possible.

---

# Never Rewrite History

Do not modify historical documentation.

Examples:

- Decision Records
- Release Notes
- Published documentation

History should remain trustworthy.

---

# Never Ignore Documentation

Before implementing:

Read the relevant documentation.

Do not assume.

Documentation has priority over assumptions.

---

# Never Optimize Prematurely

Avoid optimization before measurement.

Prioritize:

- simplicity;
- readability;
- correctness.

Optimize only when necessary.

---

# Never Introduce Inconsistency

If five components follow one pattern,

the sixth component should follow the same pattern.

Avoid introducing new conventions without approval.

---

# Never Finish Without Review

Before considering any task complete:

Review:

- architecture;
- readability;
- accessibility;
- SEO;
- performance;
- documentation.

Self-review is mandatory.

---

# Stop and Ask

Stop immediately and request clarification whenever:

- requirements conflict;
- documentation is ambiguous;
- business information is missing;
- architecture changes are required;
- multiple valid interpretations exist.

Asking is always preferable to making incorrect assumptions.

---

# Final Rule

When uncertain:

Do not guess.

Do not invent.

Do not improvise.

Stop.

Review the documentation.

Ask for clarification.

Protecting the long-term quality of the project is always more important than finishing the task quickly.