---
title: "SUI design system"
headline: "One design system for four marketplaces"
summary: "From a Sketch UI kit to SUI, the shared React design system behind Coches.net, Fotocasa, Milanuncios and Habitaclia, themed per brand and open source."
client: "Adevinta Spain (Coches.net, Fotocasa, Milanuncios, Habitaclia)"
sector: "Online marketplaces"
year: "2017 to 2019"
role: "Senior UX/UI Designer, Growth and Retention"
team: "Designers and the frontend community across the marketplaces"
duration: "2 years"
tools: [Sketch, Abstract, React, SUI Components]
cover: layers
featured: true
order: 2.8
tldr:
  - "Coches.net was moving its web, iOS and Android apps to a new technology stack, and design worked from a UI kit in Sketch with no version control, so designers and developers drifted apart and each marketplace solved the same problems on its own."
  - "Alongside my growth and retention work, I was one of the people responsible for the design system in the motor vertical: I started it in Sketch with Abstract for versioning, then refined it step by step until the components were fully customised React components in SUI, themed for each brand."
  - "One shared system served Coches.net, Fotocasa, Milanuncios and Habitaclia. Between 2017 and 2019 the public library grew from about 24 loose components to some 42 organised as atoms and molecules, each brand on its own theme."
metrics:
  - value: "4"
    label: "marketplaces on one system"
    method: "Brand themes in the public SUI repository"
  - value: "24 → 42"
    label: "components, now in atomic structure"
    method: "Public repository history, May 2017 to May 2019"
  - value: "3"
    label: "platforms in the transformation"
    method: "Web, iOS and Android"
links:
  - label: "SUI Components on GitHub"
    href: https://github.com/SUI-Components/sui-components
  - label: "SUI Studio, the live component catalogue"
    href: https://sui-components.vercel.app/
---
## The problem

Coches.net was going through a technology transformation of its web, iOS and Android apps. Design still worked from a UI kit in Sketch, and Sketch had no real version control at the time: files were copied, renamed and overwritten, nobody knew which version was the latest, and what developers built drifted away from what design had drawn.

The same was true across Adevinta’s Spanish marketplaces. Coches.net, Fotocasa, Milanuncios and Habitaclia had different brands but very similar needs: listings, search, filters, forms, alerts. Each one was solving them on its own.

> How do four brands share one system without all looking the same?

## My role

I was a Senior UX/UI Designer in the Growth and Retention team. Next to that product work I took part in the technology transformation of web, iOS and Android, and I was one of the people responsible for the design system in the motor vertical (Coches.net). For every component that meant three checks:

- **Definition:** does it solve the real need, with the right states and behaviour?
- **Implementation:** is it feasible as specified, and does the built version match the design?
- **Library and platforms:** is it in the shared library correctly, and does it work when applied on web, iOS and Android?

I validated, managed and tested components against those checks before they reached the products.

## From a UI kit to a system in three steps

I did not replace everything at once. Each step fixed the most painful problem of the previous one.

<ol class="phases"><li><strong>Sketch + Abstract</strong><span>One shared library with versions, branches and review, instead of copies of files</span></li><li><strong>Shared foundations</strong><span>Colour, type and spacing as variables, components grouped as atoms and molecules</span></li><li><strong>React components</strong><span>Fully customised components in SUI, the same pieces design used, themed per brand</span></li></ol>

<p class="phases-note">From files to a living system, one step at a time.</p>

- **Version control first.** Abstract gave design what git gave engineering: a single source of truth, branches to explore without breaking the library, and a history of every change. It was the precondition for everything else.
- **Then a common language.** Components were organised as atoms and molecules, and their styles moved to shared theme variables. Design and code started to use the same names for the same things.
- **Finally, code as the source of truth.** The components became fully customised React components in SUI, so a change made once reached every product that used them.

## One system, many brands

The key decision was to separate what is shared from what is brand. Behaviour, structure and accessibility live in the common components; colour, typography and other brand values live in a theme per marketplace.

| Layer | What it holds | Shared by |
| --- | --- | --- |
| Components | Atoms and molecules: buttons, inputs, selects, cards, alerts and more, with their behaviour | Every marketplace |
| Common theme | The variables every component reads: colour roles, type scale, spacing, radius, elevation | Every marketplace |
| Brand theme | The values of each brand for those variables | One per marketplace: Coches.net, Fotocasa, Milanuncios, Habitaclia |

That way Coches.net still looks like Coches.net and Fotocasa like Fotocasa, but a fix or an improvement to a component reaches all of them at once.

## Open by default

SUI is open source. The code, the history and the brand themes are public on GitHub, and SUI Studio shows the live catalogue. That openness was part of the model: proposals and bugs were discussed in the open, and every package had its own version, so a team could upgrade a component without waiting for a global release.

The code is the work of Adevinta Spain’s frontend community. My part was on the design side for the motor vertical: starting the system in Sketch, versioning it, validating and testing each component for definition, implementation and use on every platform, and keeping design and code aligned while it moved to React.

## What I learned

- **Version control is a design problem too.** Until design had history and branches, every other improvement was fragile.
- **Separate brand from behaviour early.** Themes let several brands share one system without anyone giving up their identity.
- **Move step by step.** Each step made the team’s work easier right away, which is what kept people using the system while it was still being built.
