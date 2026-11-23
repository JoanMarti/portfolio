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
  - "Alongside my growth and retention work, I was one of the people responsible for the design system in the motor vertical: with researchers and designers from every platform we merged several systems into one, built on an inverted triangle structure I proposed, from Sketch with Abstract for versioning step by step until the components were fully customised React components in SUI, themed for each brand."
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

On top of that, each platform team had started its own design system. Web, iOS and Android each had good ideas, but none of them was the reference.

> How do four brands share one system without all looking the same?

## My role

I was a Senior UX/UI Designer in the Growth and Retention team. Next to that product work I took part in the technology transformation of web, iOS and Android, and I was one of the people responsible for the design system in the motor vertical (Coches.net). For every component that meant three checks:

- **Definition:** does it solve the real need, with the right states and behaviour?
- **Implementation:** is it feasible as specified, and does the built version match the design?
- **Library and platforms:** is it in the shared library correctly, and does it work when applied on web, iOS and Android?

I validated, managed and tested components against those checks before they reached the products.

## From several systems to one

I was part of a team of researchers, interaction designers and UX designers from the different platforms. Each of us had built a design system for our own platform, and for a while we improved them in parallel. After many conversations and shared reviews we agreed to work on a single system, and the question became how to structure it so every designer could use it the same way.

## The inverted triangle

I proposed a structure borrowed from CSS: the inverted triangle. The widest layer, at the top, reaches everything and changes rarely; each layer below is more specific and builds on the one above. In practice, a foundation library in Sketch was linked to the components, and every component took its attributes from those foundations instead of defining its own.

<figure class="tri"><div><strong>Foundations</strong><span>Colour, typography, spacing and elevation in one Sketch library</span></div><div><strong>Components</strong><span>Take every attribute from the foundations, never their own values</span></div><div><strong>Accessibility</strong><span>Contrast, focus, sizes and labels checked on every component</span></div><div><strong>General patterns</strong><span>How search, filters, forms and alerts behave everywhere</span></div><div><strong>Vertical patterns</strong><span>What only motor, real estate or classifieds users need</span></div><figcaption>The inverted triangle I proposed for the shared system: broad and stable at the top, specific to each vertical at the bottom.</figcaption></figure>

Because every designer used the same foundations, the system aligned the team quickly: a change in a colour or a spacing value reached every component that used it, on every platform.

With the structure agreed, we worked down the triangle in order:

<ol class="phases"><li><strong>Component definition</strong><span>What each component is for, its states, variants and behaviour</span></li><li><strong>Accessibility</strong><span>Contrast, focus states, touch sizes and labels as part of every definition</span></li><li><strong>Interaction patterns</strong><span>General patterns for all products, then the particular ones of each vertical</span></li></ol>

<p class="phases-note">From the shared base to what each vertical needs.</p>

The last step mattered most. A car buyer, someone looking for a flat and someone selling a second hand sofa are different users with different needs. The shared system gave them the same quality and consistency, and the vertical patterns let each product answer its own users.

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

## Close to frontend

Throughout the project I worked very closely with the frontend developers. That taught me how they needed things and how design had to be prepared so the handover caused less friction. It changed the way I delivered work:

- **The same names as the code**, so a component or a variable meant the same thing in Sketch and in React.
- **Values from the theme, never loose values**, so what developers received already matched the variables they used.
- **Every state and edge case in the definition**, so fewer questions came back during development.

That closeness is also what made the move from Sketch to React components possible without losing what design had defined.

## Open by default

SUI is open source. The code, the history and the brand themes are public on GitHub, and SUI Studio shows the live catalogue. That openness was part of the model: proposals and bugs were discussed in the open, and every package had its own version, so a team could upgrade a component without waiting for a global release.

The code is the work of Adevinta Spain’s frontend community. My part was on the design side for the motor vertical: starting the system in Sketch, versioning it, validating and testing each component for definition, implementation and use on every platform, and keeping design and code aligned while it moved to React.

## What I learned

- **Alignment comes from conversations, not files.** One system only worked once every platform team had shaped it together.
- **Version control is a design problem too.** Until design had history and branches, every other improvement was fragile.
- **Separate brand from behaviour early.** Themes let several brands share one system without anyone giving up their identity.
- **Move step by step.** Each step made the team’s work easier right away, which is what kept people using the system while it was still being built.
- **Sit with frontend.** Understanding how developers need things is the fastest way to remove friction between design and code.
