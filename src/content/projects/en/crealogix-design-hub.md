---
title: Crealogix Design Hub
headline: "One design system, many banks"
summary: "A multi-brand design system and shared UX standards that let 5+ financial organisations in Switzerland, Europe and the Middle East share one core while keeping their own brand, markets and regulations."
client: Crealogix
sector: "Banking software (SaaS)"
year: "2019 to 2021"
role: "Lead UX/UI Designer and Design Systems Specialist"
team: "Designers as direct reports, Product, Engineering and customer facing teams in Switzerland, Spain and Germany"
duration: "2 years 2 months"
# TODO (Joan): number of banks live on the system, time to onboard a new bank or brand theme before and after,
#   how the four metrics were measured, and whether +35% is customer or designer satisfaction (the old site said designers).
tools: [Figma, Storybook, Confluence, Design tokens, CSS, Angular]
cover: tenants
featured: true
order: 3
discipline: [product, visual]
tldr:
  - "Crealogix sells digital banking to many banks at once. Each office was building its own components, so every new client meant more copies, slower delivery and uneven quality."
  - "I led designers and helped establish shared UX standards and a multi-brand design system: brand themes driven by tokens on one core, extensions for each banking segment, and documentation teams trusted."
  - "One system for 5+ financial organisations across Switzerland, Europe and the Middle East, with around 75% more adoption and efficiency and 50% more implementation efficiency."
metrics:
  - value: "+75%"
    label: "adoption and efficiency of the system"
    method: "Measured across all the banks on the system, together with metrics on team implementation, product evolution and efficiency"
  - value: "+35%"
    label: "customer satisfaction"
    method: "Client feedback on the implementation of the design system and customer satisfaction, collected across all the banks"
  - value: "+50%"
    label: "implementation efficiency"
    method: "Measured across all the banks on the system, as part of the efficiency metrics"
  - value: "5+"
    label: "financial organisations on one system"
    method: "Banks and financial organisations working on the shared core"
---

## What was at stake

<dl class="glance">
  <div><dt>Business risk</dt><dd>Crealogix sells the same digital banking platform to many banks. Without a shared core, every new client becomes a fork that slows delivery and multiplies risk in compliance, accessibility and brand trust.</dd></div>
  <div><dt>Scope</dt><dd>5+ financial organisations in Switzerland, Europe and the Middle East, across retail, corporate, private banking and wealth management. Selected clients included Julius Baer, Credit Suisse and J. Safra Sarasin.</dd></div>
  <div><dt>Key decision</dt><dd>Customise through tokens, not components. A new bank means a new theme on the same core, never a copy of a button.</dd></div>
</dl>

## Context

Crealogix builds digital banking channels for retail, corporate, private and wealth clients, and sells them as a platform. That business model only works if one product can look and behave like many banks at once.

As the company grew, its offices in Switzerland, Germany, Austria, the UK, Spain, Saudi Arabia and Singapore each built their own component sets. The result was predictable: duplicated components, diverging patterns, documentation nobody trusted and slower customisation for every new bank.

In banking software, inconsistency is not just a UX problem. It **multiplies risk**, because compliance, accessibility and brand trust all depend on predictable quality. And every week spent rebuilding a component for one bank is a week not spent on the product all of them pay for.

The system had to be four things at once:

- a **shared core** for every banking product,
- a **white label layer** so each client could apply its own brand,
- a **regional layer** for Swiss, European and Middle Eastern requirements,
- something designers and developers would adopt **without being forced to**.

## Discovery

I started with interviews with designers, product managers and business stakeholders across regions, an audit mapping duplicated components, and a benchmark of Material, Carbon, Lightning and the Bloomberg Terminal. The last one was there because dense financial interfaces follow different rules. Four barriers came up:

1. **Outdated documentation** led to low trust and rework.
2. **No room for client or regional customisation**, so teams copied components.
3. **Design and development tools were misaligned**, so implementations drifted.
4. **Compliance and accessibility were applied unevenly** across markets.

## The vision: one source of truth

The goal was bigger than a component library. The design system sat at the centre, UX documentation explained how and why to use it, and together they became one source of truth for everyone who builds a banking product at Crealogix.

<figure class="rings" aria-label="Three concentric circles: the design system inside UX documentation inside one source of truth">
  <div class="ring r1"><span>One source of truth</span><div class="ring r2"><span>UX documentation</span><div class="ring r3"><span>Design system</span></div></div></div>
  <figcaption>Each ring depends on the one inside it: no source of truth without documentation, no documentation without a system worth documenting.</figcaption>
</figure>

## Roadmap: the non-tangible first

The roadmap deliberately started with what you cannot see. Without shared purpose, principles and identity, every component turns into a debate about taste. With them, components become decisions teams can check against.

<div class="roadmap" role="group" aria-label="Roadmap in three phases">
  <div class="phase"><p class="ph">Phase 1 <em>non-tangible</em></p><div class="cards"><div class="card soft"><strong>Purpose and values</strong><ul><li>Where are we going?</li><li>Why?</li><li>How?</li></ul></div><div class="card soft"><strong>Design principles</strong><ul><li>How to design for the web</li><li>Gesture design</li><li>Data visualisation</li></ul></div><div class="card soft"><strong>Identity and language</strong><ul><li>Colours, fonts, spaces</li><li>Shapes, icons, illustrations</li><li>Photography, animation</li><li>Voice and tone</li></ul></div></div></div>
  <div class="phase"><p class="ph">Phase 2 <em>tangible</em></p><div class="cards"><div class="card hard"><strong>Tokens</strong><ul><li>Colour and opacity</li><li>Spacing units</li><li>Font size and family</li><li>Flex grid</li><li>Shadow and z-index</li></ul></div><div class="card hard"><strong>Atoms</strong><ul><li>Button</li><li>Badge</li><li>Input</li></ul></div></div></div>
  <div class="phase"><p class="ph">Phase 3</p><div class="cards"><div class="card hard"><strong>Molecules</strong><ul><li>Basic behaviours</li><li>Navigation patterns</li><li>Segment patterns</li></ul></div></div></div>
</div>

<p class="roadmap-cap">Phase 1 aligned the company on why and how. Phase 2 turned it into tokens and atoms. Phase 3 composed them into patterns.</p>

## Hard decisions

**1. Customise through tokens, not components.** This was the central decision. Each bank’s brand (colour, typography, shape and icon style) lived in a theme of token overrides on top of the same components. Nobody needed to copy a button to make it look like their bank.

*Trade off:* themes are less expressive than custom components. *Gain:* one core to maintain, test and certify for accessibility, whatever the number of banks.

**2. Principles before components.** Starting with purpose, principles and identity felt slow to teams who wanted buttons. But it gave every later debate a reference, from gesture design to data visualisation.

*Trade off:* fewer visible deliverables in the first phase. *Gain:* component decisions that were argued once, not once per office.

**3. Three layers with clear ownership.** A shared core, a theme per bank and market, and extensions per banking segment. Each layer had an owner, so autonomy did not mean fragmentation.

*Trade off:* more governance work. *Gain:* product teams could move fast inside their segment without breaking the core.

**4. Token names that match code.** Semantic tokens first, raw values never, and the same names in Figma and in code variables. That shared vocabulary removed a whole class of handoff questions.

## Architecture: one core, many banks

<figure class="arch" aria-label="Diagram of the three layers of the Crealogix design system">
  <p class="arch-badge">One core, many banks</p>
  <div class="arch-layer arch-core"><p class="arch-title">Core</p><p class="arch-sub">Foundations · Base components · Accessibility rules</p></div>
  <p class="arch-arrow"><span aria-hidden="true">↓</span>Themed per bank and market</p>
  <div class="arch-layer"><p class="arch-title">Theme</p>
  <div class="arch-cols">
    <div><strong>Brand</strong><ul><li>Colour</li><li>Typography</li><li>Shape</li><li>Icon style</li></ul></div>
    <div><strong>Market</strong><ul><li>Language</li><li>Right to left readiness</li><li>Legal content</li></ul></div>
  </div></div>
  <p class="arch-arrow"><span aria-hidden="true">↓</span>Extended per banking segment</p>
  <div class="arch-layer"><p class="arch-title">Extensions</p><p class="arch-sub">Retail · Corporate · Private banking · Wealth management</p>
  <div class="arch-cols">
    <div><strong>KYC</strong><ul><li>Onboarding and identity checks</li></ul></div>
    <div><strong>Approvals</strong><ul><li>Multi step sign off</li></ul></div>
    <div><strong>Portfolio views</strong><ul><li>Dense financial data</li></ul></div>
  </div></div>
  <figcaption>The core is owned centrally, themes are configured per client, and extensions are contributed by product teams and reviewed.</figcaption>
</figure>

The **core** holds foundations, base components and accessibility rules, owned centrally. The **theme** layer carries each bank’s brand and each market’s rules, such as language, right to left readiness for the Middle East and legal content. **Extensions** add patterns for each segment, such as KYC, approvals and portfolio views, contributed by product teams and reviewed before they enter the system.

## The system in detail

The decisions above only hold if the craft does. This is what designers and developers used every day.

### Foundations

Colour and typography were built for many brands from the start. Five palettes (two brand colours, primary, secondary and tertiary) each run in nine tones, four lighter and four darker than the base, plus transparent steps from 8% to 48% for overlays, hover and selection states. A bank changes the base values in its theme, and every tone and state follows.

Typography uses one named scale from XXXBig to XXXSmall plus caps, checked in three contexts: black on light, white on dark and disabled. Named sizes instead of pixel values meant themes could change the typeface without renaming anything in code.

![Colour UI page with brand, primary, secondary and tertiary palettes in nine tones and transparent steps](/projects/crealogix/color-ui.webp "Colour: five palettes in nine tones each, plus transparent steps for overlays and states.")

![Typography page with the size scale shown in black, white and disabled](/projects/crealogix/typography.webp "Typography: one named scale, tested in black, white and disabled.")

### Components, documented as decisions

Every component had two pages: a **definition** and an **interaction pattern**. The button shows the level of detail.

The definition covers status and version, three types (solid, outline and flat), the four style properties (typography, outline, shape and shadow), five states (default, hover, active, focus and disabled), sizes per device (48 px on mobile, 48 and 32 px on tablet, 48, 32 and 24 px on desktop) and every semantic variant.

The interaction pattern explains how to use it, with dos and don’ts:

- **One primary button per page**, and it always marks the happy path.
- **A descriptive label** such as “Transfer” or “Send”, with “Next” only for generic steps.
- **A fixed position:** at the bottom on mobile and on the right on desktop.
- **Disabled until mandatory fields are filled**, with the missing field highlighted, instead of an error after clicking.
- **Always a way out:** “Cancel” on independent forms and on the first step of a process, “Back” on later steps.

<div class="compare compare--wide">
  <figure>
    <img src="/projects/crealogix/button-definition.webp" alt="Button definition page with types, structure, states, sizes and variants" />
    <p class="compare-note">Definition: types, structure, states, sizes per device and variants.</p>
  </figure>
  <figure>
    <img src="/projects/crealogix/button-pattern.webp" alt="Button interaction pattern page with general guidelines and dos and don’ts" />
    <p class="compare-note">Interaction pattern: usage rules, dos and don’ts and behaviour in forms.</p>
  </figure>
</div>

### From Figma to CSS and Angular

The system was designed to be built. Every decision in Figma had a direct counterpart in CSS and in the Angular component library, and I worked with engineering on how each one was implemented and reviewed parity between them.

| In Figma | In CSS | In Angular |
| --- | --- | --- |
| Colour, type and spacing styles | Semantic tokens as CSS custom properties | One shared theme file imported by every app |
| A bank’s theme | A set of token overrides on a theme class | The client theme applied when the app starts |
| Variants: type and size | Modifier classes that only read tokens | Component inputs with the same names |
| States: hover, focus, disabled | `:hover`, `:focus-visible`, `[disabled]` | Disabled state bound to form validity |
| Right to left layouts | Logical properties such as `padding-inline` | `dir` attribute set per locale |

Three rules made that mapping hold:

- **Components never hardcode a value.** They only read tokens, so a theme can change a bank’s whole look without touching component code.
- **Names travel unchanged.** A variant called “outline” in Figma is `type="outline"` in Angular and `cx-button--outline` in CSS, so designers and developers talk about the same thing.
- **Behaviour is part of the component.** Focus styles, disabled logic and minimum sizes live in the component itself, so every bank inherits accessibility instead of rebuilding it.

A simplified example of the button, showing how the layers meet:

<p class="code-label">Tokens, theme and component in CSS</p>

```css
/* Core: semantic tokens, shared by every bank */
:root {
  --cx-color-primary: #1f6fe5;
  --cx-color-focus: #7aa7ff;
  --cx-radius-control: 4px;
  --cx-space-md: 16px;
}

/* Theme: a bank overrides tokens, never components */
.theme-bank-a {
  --cx-color-primary: #0b3d91;
  --cx-radius-control: 0;
}

/* Component: styled only through tokens */
.cx-button {
  min-block-size: var(--cx-button-height, 48px);
  padding-inline: var(--cx-space-md);
  border-radius: var(--cx-radius-control);
  background: var(--cx-color-primary);
}
.cx-button--medium { --cx-button-height: 32px; }
.cx-button--small { --cx-button-height: 24px; }
.cx-button:focus-visible {
  outline: 2px solid var(--cx-color-focus);
  outline-offset: 2px;
}
```

<p class="code-label">The same variants as Angular inputs</p>

```ts
@Component({
  selector: 'cx-button',
  template: `
    <button [class]="classes" [disabled]="disabled">
      <ng-content></ng-content>
    </button>`,
})
export class CxButtonComponent {
  @Input() type: 'solid' | 'outline' | 'flat' = 'solid';
  @Input() size: 'big' | 'medium' | 'small' = 'big';
  @Input() disabled = false;

  get classes(): string {
    return `cx-button cx-button--${this.type} cx-button--${this.size}`;
  }
}
```

<p class="code-label">The interaction rule in a real form</p>

```html
<!-- The primary action stays disabled until the form is valid -->
<cx-button type="solid" [disabled]="transferForm.invalid">Transfer</cx-button>
```

The examples are simplified for this case study, but the structure is the one the system followed: tokens at the core, themes as overrides, and components whose API mirrors Figma.

## Documentation as the engine of adoption

Documentation had two areas. **System fundamentals** covered principles, versioning, theming rules, the contribution workflow and onboarding for designers and developers. **Components** covered usage, variants, states, dos and don’ts, accessibility, a live Storybook demo, implementation notes and version history.

I used AI for first drafts of component pages, naming checks, release note summaries and gap detection (comparing Figma properties with the documentation template), always reviewed before publishing.

<div class="video">
  <iframe src="https://www.youtube.com/embed/FUA0fpCOTEc" title="Crealogix Design Hub" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
  <p class="video-caption">The Crealogix Design Hub in use. <a href="https://youtu.be/FUA0fpCOTEc" target="_blank" rel="noopener">Watch on YouTube</a></p>
</div>

## Leading the team

I managed designers as formal direct reports across several international programmes: setting priorities, mentoring, giving feedback, supporting their development and holding the bar on design quality. The design system was also a team tool. It gave everyone the same standards to review against, so feedback was about decisions, not personal taste.

## Rollout and governance

The rollout was iterative and social rather than mandated: workshops and onboarding sessions for each office, a regular rhythm for triage and releases, and feedback collected from teams using the system on live projects. Adoption was tracked through Figma library analytics, handoff time measurements and satisfaction surveys.

## Business impact

- **One system for 5+ financial organisations** in Switzerland, Europe and the Middle East, each with its own brand on the same core.
- **Around 75% more adoption and efficiency** as teams moved from local copies to the shared system.
- **50% more implementation efficiency**, through reusable patterns and token names shared by design and code.
- **35% higher customer satisfaction**, through more consistent journeys across products and brands.
- **A new bank meant a new theme, not a new fork**, which is what makes a platform business scale.

## What changed in the organisation

- **One vocabulary across offices.** Designers and developers in different countries used the same names for the same things.
- **Contribution instead of copies.** Product teams extended the system through a reviewed workflow instead of forking it.
- **Shared UX standards.** Reviews across programmes were held against the same principles and patterns.

## What I learned

- Multi-tenant systems work when customisation is driven by tokens. Customisation through components always ends in copies.
- Start with the non-tangible. Principles and identity save more time than any component.
- Governance has to be light but explicit, or teams go back to local copies.
- Documentation is the main lever for adoption. Once it is out of date, trust collapses fast.

**Next time** I would invest earlier in automated parity between Figma and code (linting and token sync pipelines) and in patterns for wealth and corporate banking.
