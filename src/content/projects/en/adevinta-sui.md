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

The library file still keeps the foundations as they were defined: one type scale for desktop and mobile on a 16 px base, six colour roles with a full lightness range each, and spacing, icons and radius on an 8 px base.

<div class="lib-found">
  <figure class="wide"><img src="/projects/adevinta-sui/lib-type.webp" alt="Typography scale in Open Sans: headings from Giant to Large and body from Medium to xxSmall, each with its ratio to the base, size and line height for desktop and mobile." loading="lazy" /><figcaption>Type scale: every size is the base plus or minus a step, for desktop and mobile.</figcaption></figure>
  <figure><img src="/projects/adevinta-sui/lib-color.webp" alt="Colour definition: primary #2B91C1, accent #D57C1B, gray #777777, success #00A544, alert #FF6335 and error #E93E40, each with a full lightness gradation and a compressed version." loading="lazy" /><figcaption>Six colour roles, each with its lightness range.</figcaption></figure>
  <figure><img src="/projects/adevinta-sui/lib-spacing.webp" alt="Margins and paddings from 4 to 48 px on an 8 px base, icon sizes from 16 to 40 px, and border radius of 0, 2 px and 50%." loading="lazy" /><figcaption>Spacing, icons and radius from the same base. From the SUI library file in Figma.</figcaption></figure>
</div>

The public history of the repository shows the change. The library first grew as loose folders, then started again in atomic structure and grew from there.

<figure class="chart"><p class="chart-title">Components in the public SUI library, every quarter</p><ul class="chart-legend"><li><i style="background:#6b7682"></i>Loose folders</li><li><i style="background:#ff5a4f"></i>Atoms</li><li><i style="background:#5b7cff"></i>Molecules and others</li></ul><div class="chart-scroll"><svg class="chart-svg" viewBox="0 0 720 300" role="img" aria-labelledby="sui-chart-t"><title id="sui-chart-t">Components in the public SUI library, every quarter</title><line class="grid" x1="44" x2="710" y1="256.0" y2="256.0"/><text class="ax" x="36" y="260.0" text-anchor="end">0</text><line class="grid" x1="44" x2="710" y1="177.3" y2="177.3"/><text class="ax" x="36" y="181.3" text-anchor="end">30</text><line class="grid" x1="44" x2="710" y1="98.7" y2="98.7"/><text class="ax" x="36" y="102.7" text-anchor="end">60</text><line class="grid" x1="44" x2="710" y1="20.0" y2="20.0"/><text class="ax" x="36" y="24.0" text-anchor="end">90</text><path fill="#6b7682" d="M56.2 256.0V252.1Q56.2 248.1 60.2 248.1H83.3Q87.3 248.1 87.3 252.1V256.0Z"><title>Jan 17: 3 in loose folders</title></path><text class="ax" x="71.8" y="272" text-anchor="middle">Jan 17</text><path fill="#6b7682" d="M111.7 256.0V204.9Q111.7 200.9 115.7 200.9H138.8Q142.8 200.9 142.8 204.9V256.0Z"><title>Apr 17: 21 in loose folders</title></path><text class="ax odd" x="127.2" y="272" text-anchor="middle">Apr 17</text><path fill="#6b7682" d="M167.2 256.0V191.8Q167.2 187.8 171.2 187.8H194.3Q198.3 187.8 198.3 191.8V256.0Z"><title>Jul 17: 26 in loose folders</title></path><text class="ax" x="182.8" y="272" text-anchor="middle">Jul 17</text><text class="val" x="182.8" y="181.8" text-anchor="middle">26</text><path fill="#6b7682" d="M222.7 256.0V155.1Q222.7 151.1 226.7 151.1H249.8Q253.8 151.1 253.8 155.1V256.0Z"><title>Oct 17: 40 in loose folders</title></path><text class="ax odd" x="238.2" y="272" text-anchor="middle">Oct 17</text><path fill="#6b7682" d="M278.2 256.0V103.9H309.3V256.0Z"><title>Jan 18: 58 in loose folders</title></path><path fill="#ff5a4f" d="M278.2 101.9V90.8H309.3V101.9Z"><title>Jan 18: 5 atoms</title></path><path fill="#5b7cff" d="M278.2 88.8V92.2Q278.2 88.2 282.2 88.2H305.3Q309.3 88.2 309.3 92.2V88.8Z"><title>Jan 18: 1 molecules and others</title></path><text class="ax" x="293.8" y="272" text-anchor="middle">Jan 18</text><path fill="#6b7682" d="M333.7 256.0V85.6H364.8V256.0Z"><title>Apr 18: 65 in loose folders</title></path><path fill="#ff5a4f" d="M333.7 83.6V67.2H364.8V83.6Z"><title>Apr 18: 7 atoms</title></path><path fill="#5b7cff" d="M333.7 65.2V63.3Q333.7 59.3 337.7 59.3H360.8Q364.8 59.3 364.8 63.3V65.2Z"><title>Apr 18: 3 molecules and others</title></path><text class="ax odd" x="349.2" y="272" text-anchor="middle">Apr 18</text><path fill="#6b7682" d="M389.2 256.0V77.7H420.3V256.0Z"><title>Jul 18: 68 in loose folders</title></path><path fill="#ff5a4f" d="M389.2 75.7V43.6H420.3V75.7Z"><title>Jul 18: 13 atoms</title></path><path fill="#5b7cff" d="M389.2 41.6V37.1Q389.2 33.1 393.2 33.1H416.3Q420.3 33.1 420.3 37.1V41.6Z"><title>Jul 18: 4 molecules and others</title></path><text class="ax" x="404.8" y="272" text-anchor="middle">Jul 18</text><text class="val" x="404.8" y="27.1" text-anchor="middle">85</text><path fill="#ff5a4f" d="M444.7 256.0V219.3H475.8V256.0Z"><title>Oct 18: 14 atoms</title></path><path fill="#5b7cff" d="M444.7 217.3V199.7Q444.7 195.7 448.7 195.7H471.8Q475.8 195.7 475.8 199.7V217.3Z"><title>Oct 18: 9 molecules and others</title></path><text class="ax odd" x="460.2" y="272" text-anchor="middle">Oct 18</text><path fill="#ff5a4f" d="M500.2 256.0V211.4H531.3V256.0Z"><title>Jan 19: 17 atoms</title></path><path fill="#5b7cff" d="M500.2 209.4V181.3Q500.2 177.3 504.2 177.3H527.3Q531.3 177.3 531.3 181.3V209.4Z"><title>Jan 19: 13 molecules and others</title></path><text class="ax" x="515.8" y="272" text-anchor="middle">Jan 19</text><path fill="#ff5a4f" d="M555.7 256.0V211.4H586.8V256.0Z"><title>Apr 19: 17 atoms</title></path><path fill="#5b7cff" d="M555.7 209.4V163.0Q555.7 159.0 559.7 159.0H582.8Q586.8 159.0 586.8 163.0V209.4Z"><title>Apr 19: 20 molecules and others</title></path><text class="ax odd" x="571.2" y="272" text-anchor="middle">Apr 19</text><path fill="#ff5a4f" d="M611.2 256.0V208.8H642.3V256.0Z"><title>Jul 19: 18 atoms</title></path><path fill="#5b7cff" d="M611.2 206.8V149.9Q611.2 145.9 615.2 145.9H638.3Q642.3 145.9 642.3 149.9V206.8Z"><title>Jul 19: 24 molecules and others</title></path><text class="ax" x="626.8" y="272" text-anchor="middle">Jul 19</text><text class="val" x="626.8" y="139.9" text-anchor="middle">42</text><path fill="#ff5a4f" d="M666.7 256.0V208.8H697.8V256.0Z"><title>Oct 19: 18 atoms</title></path><path fill="#5b7cff" d="M666.7 206.8V149.9Q666.7 145.9 670.7 145.9H693.8Q697.8 145.9 697.8 149.9V206.8Z"><title>Oct 19: 24 molecules and others</title></path><text class="ax odd" x="682.2" y="272" text-anchor="middle">Oct 19</text><line class="ann" x1="432.5" x2="432.5" y1="20" y2="256"/><text class="ann-t" x="438.5" y="30">Sep 2018: loose folders removed,</text><text class="ann-t" x="438.5" y="44">the library continues as atoms and molecules</text></svg></div><figcaption>Counted from the public history of the SUI repository on GitHub: one point at the start of each quarter. Before the change, components lived in folders by topic (cards, forms, tags); after it, by level.</figcaption><details class="chart-table"><summary>See the data</summary><table><thead><tr><th>Quarter</th><th>Loose folders</th><th>Atoms</th><th>Molecules and others</th></tr></thead><tbody><tr><td>Jan 17</td><td>3</td><td>0</td><td>0</td></tr><tr><td>Apr 17</td><td>21</td><td>0</td><td>0</td></tr><tr><td>Jul 17</td><td>26</td><td>0</td><td>0</td></tr><tr><td>Oct 17</td><td>40</td><td>0</td><td>0</td></tr><tr><td>Jan 18</td><td>58</td><td>5</td><td>1</td></tr><tr><td>Apr 18</td><td>65</td><td>7</td><td>3</td></tr><tr><td>Jul 18</td><td>68</td><td>13</td><td>4</td></tr><tr><td>Oct 18</td><td>0</td><td>14</td><td>9</td></tr><tr><td>Jan 19</td><td>0</td><td>17</td><td>13</td></tr><tr><td>Apr 19</td><td>0</td><td>17</td><td>20</td></tr><tr><td>Jul 19</td><td>0</td><td>18</td><td>24</td></tr><tr><td>Oct 19</td><td>0</td><td>18</td><td>24</td></tr></tbody></table></details></figure>

## One system, many brands

The key decision was to separate what is shared from what is brand. Behaviour, structure and accessibility live in the common components; colour, typography and other brand values live in a theme per marketplace.

| Layer | What it holds | Shared by |
| --- | --- | --- |
| Components | Atoms and molecules: buttons, inputs, selects, cards, alerts and more, with their behaviour | Every marketplace |
| Common theme | The variables every component reads: colour roles, type scale, spacing, radius, elevation | Every marketplace |
| Brand theme | The values of each brand for those variables | One per marketplace: Coches.net, Fotocasa, Milanuncios, Habitaclia |

That way Coches.net still looks like Coches.net and Fotocasa like Fotocasa, but a fix or an improvement to a component reaches all of them at once.

The same button component, rendered from the public packages with two themes: the base theme and the Milanuncios theme. Colour, radius and type change; the component does not.

<div class="themes"><figure><img src="/projects/adevinta-sui/sui-theme-base.webp" alt="Buttons with the SUI base theme: blue primary, orange accent, square corners." /><figcaption>Base theme</figcaption></figure><figure><img src="/projects/adevinta-sui/sui-theme-milanuncios.webp" alt="The same buttons with the Milanuncios theme: green primary, yellow accent, rounded corners and Verdana." /><figcaption>Milanuncios theme</figcaption></figure></div>

## Close to frontend

Throughout the project I worked very closely with the frontend developers. That taught me how they needed things and how design had to be prepared so the handover caused less friction. It changed the way I delivered work:

- **The same names as the code**, so a component or a variable meant the same thing in Sketch and in React.
- **Values from the theme, never loose values**, so what developers received already matched the variables they used.
- **Every state and edge case in the definition**, so fewer questions came back during development.

That closeness is also what made the move from Sketch to React components possible without losing what design had defined.

Those values are still in the code. The default theme of SUI today uses the colours, font and scales defined in the library:

| In the library | In the SUI theme today |
| --- | --- |
| Primary #2B91C1 | <code>$c-primary</code> #2b91c1 |
| Accent #D57C1B | <code>$c-accent</code> #d57c1b |
| Gray #777777 | <code>$c-gray</code> #777777 |
| Success, alert, error #00A544, #FF6335, #E93E40 | <code>$c-success</code>, <code>$c-alert</code>, <code>$c-error</code> with the same values |
| Open Sans | <code>$ff-sans-serif</code> Open Sans |
| Type base 16 px, steps of B + 12, + 8, + 4, + 2, − 2, − 4, − 6 | <code>$fz-base</code> 16 px, with the same steps |
| Spacing base 8 px, from 4 to 48 px | <code>$p-base</code> and <code>$m-base</code> 8 px, from 4 to 48 px |

In the library, each component was defined with all its states before it was built. The button sheet covers primary, secondary, tertiary and accent buttons, with icons, in normal, hover and disabled, on light and on brand backgrounds.

![Button sheet from the SUI library: rows of primary, secondary, tertiary and accent buttons in normal, hover and disabled states, with and without icons, on a light background and on the blue brand background.](/projects/adevinta-sui/lib-buttons.webp "The button as defined in the library, before the code.")

Design decisions became props in code. The button has four designs and six colour roles, and each one is a value a developer passes, not a new component.

![The SUI button in four designs (solid, outline, flat, link) and six colour roles (primary, accent, neutral, success, alert, error).](/projects/adevinta-sui/sui-button-props.webp "One component, 24 combinations, each chosen with two props: design and color.")

## Open by default

SUI is open source. The code, the history and the brand themes are public on GitHub, and SUI Studio shows the live catalogue. That openness was part of the model: proposals and bugs were discussed in the open, and every package had its own version, so a team could upgrade a component without waiting for a global release.

The code is the work of Adevinta Spain’s frontend community. My part was on the design side for the motor vertical: starting the system in Sketch, versioning it, validating and testing each component for definition, implementation and use on every platform, and keeping design and code aligned while it moved to React.

Every component is its own package with its code, demo, tests and changelog in the same place. The button also keeps its original definition, the spec design wrote before the code.

<div class="pkg" role="group" aria-label="Structure of a SUI component package"><p class="pkg-root">components/atom/button/</p><ul><li><code>SPEC.md</code><span>The definition: purpose, types, sizes and rules, with its status, version and owners for UX, UI and front end</span></li><li><code>README.md</code><span>How to install and use it</span></li><li><code>src/</code><span>The React component and its styles, which read the theme</span></li><li><code>demo/</code><span>The live examples in SUI Studio: design, colour, size, accessibility, keyboard</span></li><li><code>test/</code><span>Automated tests</span></li><li><code>CHANGELOG.md</code><span>Every version, published on its own</span></li></ul><p class="pkg-cap">The button package, as it is on GitHub today.</p></div>

## Decisions and trade-offs

**1. One system instead of one per platform.** Web, iOS and Android each had a design system with good ideas, but none was the reference.

*Trade off:* Each platform team gave up its own system. *Gain:* One reference for every designer and developer across the four marketplaces.

**2. Step by step instead of a big rewrite.** Abstract first, then shared foundations, then React components in SUI.

*Trade off:* A slower path than replacing everything at once. *Gain:* Each step fixed the most painful problem of the previous one, and the teams kept shipping.

**3. Shared behaviour, brand in themes.** Components hold behaviour, structure and accessibility; each marketplace has its own theme.

*Trade off:* Less brand freedom inside the components. *Gain:* A fix to a component reaches all four brands at once.

## What I learned

- **Alignment comes from conversations, not files.** One system only worked once every platform team had shaped it together.
- **Version control is a design problem too.** Until design had history and branches, every other improvement was fragile.
- **Separate brand from behaviour early.** Themes let several brands share one system without anyone giving up their identity.
- **Move step by step.** Each step made the team’s work easier right away, which is what kept people using the system while it was still being built.
- **Sit with frontend.** Understanding how developers need things is the fastest way to remove friction between design and code.
