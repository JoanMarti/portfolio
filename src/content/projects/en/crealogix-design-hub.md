---
title: Crealogix Design Hub
headline: One design system, many banks
summary: A SaaS-ready design system that let banking clients share one core while keeping their own brand, regulations and regional needs.
client: Crealogix
sector: Banking software (SaaS)
year: "TODO"
role: Senior UX/UI Designer, Design Systems and Product Platform
team: Innovation team, with designers and engineers in Switzerland, Germany, Austria, the UK, Spain, Saudi Arabia and Singapore
duration: "TODO"
tools: [Figma, Storybook, Confluence, Design tokens]
cover: tenants
featured: true
order: 3
tldr:
  - Crealogix builds digital banking channels for retail, private, corporate and wealth clients. Each office was building its own components, so delivery slowed down and quality varied from one client to the next.
  - I defined a multi-tenant model with a shared core, brand themes driven by tokens and extensions for each banking segment, plus the documentation and governance that made teams actually adopt it.
  - Handoff got 40% faster, designers were happier with their tools, and the system became the standard for every new product.
metrics:
  - value: "40%"
    label: less time for design handoff
    method: "TODO: method, for example average days from design ready to development ready, before and after"
  - value: "+35%"
    label: designer satisfaction
    method: Quarterly satisfaction survey of designers across offices
  - value: "7"
    label: countries adopting one core
    method: Switzerland, Germany, Austria, UK, Spain, Saudi Arabia and Singapore
---

## The problem

As Crealogix grew, its offices in Switzerland, Germany, Austria, the UK, Spain, Saudi Arabia and Singapore each built their own component sets. The result was predictable: duplicated components, diverging patterns, documentation nobody trusted and slower customisation for every new bank.

In banking software, inconsistency is not just a UX problem. It **multiplies risk**, because compliance, accessibility and brand trust all depend on predictable quality.

The system had to be four things at once:

- a **shared core** for every banking product,
- a **white-label layer** so each client could apply its own brand,
- a **regional layer** for European and Middle Eastern requirements,
- something designers and developers would adopt **without being forced to**.

## What I did

I worked across product definition and system architecture inside the innovation team, acting as owner of the system’s design, documentation and enablement.

**Discovery first.** Interviews with designers, product managers and business stakeholders across regions, an audit mapping duplicated components, and a benchmark of Material, Carbon, Lightning and the Bloomberg Terminal. The last one was there because dense financial interfaces follow different rules. Four barriers came up:

1. Outdated documentation led to low trust and rework.
2. There was no room for client or regional customisation, so teams copied components.
3. Design and development tools were misaligned, so implementations drifted.
4. Compliance and accessibility were applied unevenly across markets.

## Key decisions

**Customisation through tokens, not components.** This was the central decision. Each bank’s brand (colour, typography, shape and icon style) lived in a theme of token overrides on top of the same components. Nobody needed to copy a button to make it look like their bank. Themes are less expressive than custom components, but the core stays maintainable.

**Three layers with clear ownership.**
- *Core:* foundations, base components and accessibility rules, owned centrally.
- *Theme:* brand and market rules such as language, right-to-left readiness and legal content, configured per client.
- *Extensions:* patterns for each segment, such as KYC, approvals and portfolio views for retail, private, corporate and wealth banking, contributed by product teams and reviewed.

**Token names that match code.** Semantic tokens first, raw values never, and the same names in Figma and in code variables. That shared vocabulary removed a whole class of handoff questions.

**Documentation as the engine of adoption.** It had two areas. *System fundamentals* covered principles, versioning, theming rules, the contribution workflow and onboarding for designers and developers. *Components* covered usage, variants, states, dos and don’ts, accessibility, a live Storybook demo, implementation notes and version history. I used AI for first drafts of component pages, naming checks, release note summaries and gap detection (comparing Figma properties with the documentation template), always reviewed before publishing.

## Rollout

The rollout was iterative and social rather than mandated: workshops and onboarding sessions for each office, a regular rhythm for triage and releases, and feedback collected from teams using the system on live projects. Adoption was tracked through Figma library analytics, handoff time measurements and satisfaction surveys.

## What I learned

- Multi-tenant systems work when customisation is driven by tokens. Customisation through components always ends in copies.
- Governance has to be light but explicit, or teams go back to local copies.
- Documentation is the main lever for adoption. Once it’s out of date, trust collapses fast.

**Next time** I would invest earlier in automated parity between Figma and code (linting and token sync pipelines) and in patterns for wealth and corporate banking.
