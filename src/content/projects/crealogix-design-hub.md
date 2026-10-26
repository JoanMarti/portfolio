---
title: Crealogix Design Hub
headline: One design system, many banks — white-label and multi-tenant across seven countries
summary: A SaaS-ready design system that let banking clients share one core while keeping their own brand, regulations and regional needs.
client: Crealogix
sector: Banking software (SaaS)
year: "TODO"
role: Senior UX/UI Designer — Design Systems & Product Platform
team: Innovation team; designers and engineers in CH, DE, AT, UK, ES, SA and SG
duration: "TODO"
tools: [Figma, Storybook, Confluence, Design tokens]
cover: tenants
featured: true
order: 2
tldr:
  - Crealogix builds digital banking channels for retail, private, corporate and wealth clients. Each office was building its own components, so delivery slowed and quality varied from client to client.
  - I defined a multi-tenant model — shared core, token-driven brand themes, segment extensions — and the documentation and governance that made teams actually adopt it.
  - Handoff got 40% faster, designers were happier with their tools, and the system became the standard for every new product.
metrics:
  - value: "−40%"
    label: design handoff time
    method: "TODO: method — e.g. average days from design-ready to dev-ready, before vs after"
  - value: "+35%"
    label: designer satisfaction
    method: Quarterly satisfaction survey of designers across offices
  - value: "7"
    label: countries adopting one core
    method: Switzerland, Germany, Austria, UK, Spain, Saudi Arabia, Singapore
---

## The problem

As Crealogix grew, offices in Switzerland, Germany, Austria, the UK, Spain, Saudi Arabia and Singapore each built their own component sets. The result was predictable: duplicated components, diverging patterns, documentation nobody trusted and slower customisation for every new bank.

In banking SaaS, inconsistency isn’t just a UX problem — it **multiplies risk**. Compliance, accessibility and brand trust all depend on predictable quality.

The system had to be four things at once:

- a **shared core** for every banking product,
- a **white-label layer** so each client could apply its own brand,
- a **regional layer** for European and Middle Eastern requirements,
- something designers and developers would adopt **without being forced**.

## What I did

I worked across product definition and system architecture inside the innovation team, acting as system owner for design, documentation and enablement.

**Discovery first.** Interviews with designers, PMs and business stakeholders across regions; an audit mapping duplicated components; and a benchmark of Material, Carbon, Lightning and the Bloomberg Terminal — the last one because dense financial UIs have different rules. Four barriers came up:

1. Outdated documentation → low trust → rework.
2. No room for client or regional customisation → teams forked components.
3. Design and dev tooling misaligned → implementation drift.
4. Compliance and accessibility applied unevenly across markets.

## Key decisions

**Customisation through tokens, not components.** This was the central call. Each bank’s brand — colour, typography, shape, icon style — lived in a theme of token overrides on top of the same components. Nobody needed to copy a button to make it look like their bank. Trade-off: themes are less expressive than custom components, but the core stays maintainable.

**Three layers with clear ownership.**
- *Core*: foundations, base components, accessibility rules — owned centrally.
- *Theme*: brand and market rules (language, RTL readiness, legal content) — configured per client.
- *Extensions*: patterns per segment, such as KYC, approvals and portfolio views for retail, private, corporate and wealth — contributed by product teams under review.

**Token names that match code.** Semantic tokens first, raw values never, and the same names in Figma and in code variables. That shared vocabulary removed a whole class of handoff questions.

**Documentation as the adoption engine.** Two areas: *system fundamentals* (principles, versioning, theming rules, contribution workflow, onboarding for designers and developers) and *components* (usage, variants, states, do and don’t, accessibility, a live Storybook demo, implementation notes, version history). I used AI for first drafts of component pages, naming checks, release-note summaries and gap detection (comparing Figma properties against the doc template) — always reviewed before publishing.

## Rollout

Iterative and social rather than mandated: workshops and onboarding sessions per office, a regular triage and release rhythm, and feedback collected from teams using the system on live projects. Adoption was tracked through Figma library analytics, handoff-time measurements and satisfaction surveys.

## What I learned

- Multi-tenant systems work when customisation is token-driven. Component-driven customisation always ends in forks.
- Governance has to be light but explicit, or teams go back to local copies.
- Documentation is the main adoption lever. Once it’s out of date, trust collapses fast.

**Next time** I’d invest earlier in automated parity between Figma and code (linting and token sync pipelines) and in segment-specific patterns for wealth and corporate banking.
