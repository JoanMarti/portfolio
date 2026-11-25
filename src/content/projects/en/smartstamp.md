---
title: Smartstamp
headline: Redesigning art authentication
summary: "I took over Smartstamp’s iOS and Android app with an unfinished information architecture, redefined its structure and flows, and redesigned the experience around four core actions: register, verify, transfer and certify."
client: Smartstamp
sector: Art tech and authentication
year: "2025"
role: "Senior Product Designer"
team: "TODO"            # TODO: founders, engineers, marketing. Who did you work with?
duration: "6 months"
tools: [Figma, User flows, Information architecture, UI library, Design specs, TestFlight]
cover: ia
featured: true
order: 2
discipline: [product, visual]
tldr:
  - Smartstamp creates a unique digital fingerprint of an artwork with AI and computer vision. When I joined, the app’s structure was a sitemap still in progress, with one homepage, six branches, key actions buried several levels deep and many areas marked as work in progress.
  - I redefined the information architecture and every core flow, then took the app through three versions. The first went to TestFlight, the second introduced a lighter home and a central Actions hub, and the third improved visibility, accessibility and navigation.
  - Transferring an artwork went from five levels deep to one tap from the navigation bar, every flow was defined end to end, and engineering received each change as a short, testable spec.
metrics:
  - value: "5 → 1"
    label: levels to reach Transfer artwork
    method: Received sitemap (Home › Spaces › Space › Artwork list › Artwork › Transfer) compared with the Actions tab in the new navigation
  - value: "90%"
    label: "completion of the identity verification journey"
    method: "TODO"
  - value: "7"
    label: core features in one Actions hub
    method: Register, Verify, Transfer, Resume drafts, Certificate, Exhibition label and Price list
  - value: "4"
    label: user types served by one app
    method: Registered artist, collector, enterprise and visitor
links: []
---

## Context

Certificates of authenticity are usually a signature on paper or a label on the back of a canvas. Both are easy to copy. Smartstamp, a Swiss company, built a patented technology that uses AI and computer vision to create a unique fingerprint of the artwork itself, recorded with blockchain timestamping. Anyone can then check a piece with a smartphone.

The technology worked. The app around it didn’t yet. It had to let four kinds of users (**registered artists, collectors, businesses and visitors**) register an artwork by photographing it correctly, verify any artwork, transfer ownership when a work is sold, and manage a collection.

## What I received

I inherited a sitemap that described the product as one homepage with six branches: profile, notifications, search, spaces, register and verify.

![The information architecture I received: a colour-coded sitemap with one homepage and six branches, deep nesting under Spaces and many sticky notes marked work in progress.](/projects/smartstamp/ia-received.svg "The sitemap I received. Each colour is a branch from the homepage, and the orange notes say “work in progress”.")

It was a useful starting point, but it had three structural problems:

- **Key actions were buried.** Transferring an artwork, one of the product’s three core actions, lived five levels down: Home › Spaces › Space › Artwork list › Artwork › Transfer.
- **The structure followed the system, not the user.** Branches matched backend objects such as spaces, archives and documents rather than what people come to do.
- **Large areas were undefined.** Search, notifications, transfers, support and several profile pages were marked as work in progress or not defined at all.

## Redefining the information architecture

I rebuilt the structure around the jobs people come to do. The result is a four-tab navigation in which every core action is reachable from the first screen.

<div class="ia">
  <section>
    <h3>Before</h3>
    <p class="ia-sub">One homepage and six branches, organised by system objects</p>
    <ul>
      <li><span class="node">Homepage</span>
        <ul>
          <li>User profile
            <ul><li>Upgrade account, Invite a friend, About us, Customer support, Settings, Personal information, Log out</li></ul>
          </li>
          <li>Notifications <span class="wip">(partly defined)</span></li>
          <li>Search bar <span class="wip">(not defined)</span></li>
          <li>Spaces
            <ul>
              <li>Single space
                <ul>
                  <li>Artwork list
                    <ul>
                      <li>Artwork details</li>
                      <li>Smart archive › certificates and documents</li>
                      <li><span class="deep">Transfer artwork</span> <span class="wip">(work in progress)</span></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Register new art</li>
          <li>Verify</li>
        </ul>
      </li>
    </ul>
  </section>
  <section>
    <h3>After</h3>
    <p class="ia-sub">Four tabs in version 3, organised by what people come to do</p>
    <ul>
      <li><span class="node">Home</span>
        <ul><li>Register artwork button, identity verification, quick actions (Verify, Transfer, More options), Artworks and Transferred</li></ul>
      </li>
      <li><span class="node">Actions</span>
        <ul>
          <li>Register artwork</li>
          <li>Verify artwork</li>
          <li><span class="key">Transfer artwork</span></li>
          <li>Resume drafts</li>
          <li>Generate certificate <span class="premium">Premium</span></li>
          <li>Exhibition label <span class="premium">Premium</span></li>
          <li>Price list <span class="premium">Premium</span></li>
        </ul>
      </li>
      <li><span class="node">Feedback</span>
        <ul><li>A direct channel from users to the team</li></ul>
      </li>
      <li><span class="node">Profile</span>
        <ul><li>Personal information, security, preferences (language, currency and units), plan and payments, support, invite a friend</li></ul>
      </li>
    </ul>
  </section>
</div>

Three principles guided the new structure:

- **Actions before objects.** Register, verify and transfer are what people come to do, so they sit at the top level. Spaces and records support them from the home screen.
- **One place that can grow.** The Actions hub gives every feature the same card and the same step by step pattern. New premium features such as certificates, exhibition labels and price lists slot in without changing the navigation.
- **Shortcuts outside the app.** Register, verify and transfer are also available as home screen quick actions on iPhone and iPad.

## From gaps to defined flows

With the structure settled, I mapped every flow end to end. The first version deliberately exposed what was missing, with undefined areas in blue and questions for marketing in pink.

![First version of the Smartstamp user flow. Blue blocks mark parts of the product that were not yet defined, and a pink block marks onboarding content that needed clarification with marketing.](/projects/smartstamp/userflow-v1.svg "Flow v1.0: undefined areas in blue and open questions with marketing in pink, so the gaps were visible to everyone.")

That map became the agenda for decisions with the founders, marketing and engineering. In version 1.2 every branch had an answer.

![Version 1.2 of the user flow with onboarding for collectors, all branches defined and fingerprint sequences of three, six, seven and nine captures.](/projects/smartstamp/userflow-v2.svg "Flow v1.2: onboarding written for collectors, user types and payment defined, and a choice of 3, 6, 7 or 9 fingerprint captures.")

The main changes between the two versions:

- **Onboarding written for collectors**, with four messages about protecting a collection, recording every change of hands and keeping provenance.
- **User types defined** (Art Intro, Art Lover, Art Pro and Enterprise), with plan selection and payment through Apple Pay or Google Pay.
- **Registration made explicit:** overview photo, detail photo, then a choice of how many fingerprints to capture (three by default, with options for six, seven or nine), a read-only summary, and a loading step that tells the user their data is being encrypted.
- **Exit points designed.** Leaving registration halfway returns to the dashboard with a warning that the process is incomplete, and the draft can be resumed later.

## Redesigning the interface

### Version 1

The first interface was dark, with the orange brand colour in the header and a home screen organised as a grid of spaces. It shipped to TestFlight in September 2025.

<div class="compare">
  <figure>
    <span class="tag">Version 1 design</span>
    <img src="/projects/smartstamp/home-v1-dark.webp" alt="Version 1 home screen in a dark theme: orange header with greeting and search, a toggle between Spaces and Transferred artwork, and a grid of eight spaces." />
    <p class="compare-note">Home as a grid of spaces. Transfers sit behind a toggle.</p>
  </figure>
  <figure>
    <span class="tag">Version 1 in TestFlight</span>
    <img src="/projects/smartstamp/home-v1-build.webp" alt="Screenshot of the first build running in TestFlight in September 2025: Smartstamp logo, a Spaces and Transferred Artworks toggle, one test space and a Register artwork button." />
    <p class="compare-note">The first build in TestFlight. Testing it showed how empty the home felt for new users.</p>
  </figure>
  <figure>
    <span class="tag">Version 2 redesign</span>
    <img src="/projects/smartstamp/home-v2.webp" alt="Version 2 home screen in a light theme: greeting, a premium banner, and horizontal sections for spaces, latest artwork records, QR records, verifications and transfers, with a Register artwork button." />
    <p class="compare-note">A light home made of sections for spaces, records, verifications and transfers, each one tap away from its full list.</p>
  </figure>
  <figure>
    <span class="tag tag--new">Version 3, latest</span>
    <img src="/projects/smartstamp/home-v3.webp" alt="Version 3 home screen on a phone: Smartstamp logo and search, a Register Artwork button at the top, a banner asking Pro users to verify their identity, quick actions for Verify Artwork, Transfer Artwork and More Options, an Artworks section, and a navigation bar with Home, Actions, Feedback and Profile." />
    <p class="compare-note">The latest version: the main action first, quick actions within reach and a clearer navigation.</p>
  </figure>
</div>
<!-- TODO: confirm which parts of version 1 you received and which you designed. -->

### Version 2

Version 2 kept the structure and changed how it feels and how it scales:

- **A home that shows activity.** Instead of a grid of folders, the home shows what is happening across the collection (latest records, verifications and transfers) with a persistent Register artwork button.
- **A lighter visual language.** A light theme with warmer neutrals lets the artworks carry the colour. Icons, labels and spacing in the bottom navigation were simplified so it competes less with the content.
- **The Actions hub.** Every core feature sits in one list, each with a short description, a usage counter (for example, two pending transfers or five certificates) and a premium badge where relevant. Each feature then follows the same structure: the steps explained up front and one primary button at the bottom.

![The Actions page specification next to eight screens: the Actions hub and the Register, Verify, Transfer, Resume drafts, Generate certificate, Exhibition label and Price list flows.](/projects/smartstamp/actions-hub.webp "The Actions hub and the seven flows it opens. All of them follow the same structure: steps first, one primary action at the bottom.")

![Specification for the visual redesign of the bottom navigation, with the Home, Verify and Profile screens using the new navigation bar.](/projects/smartstamp/nav-redesign.webp "Bottom navigation redesign: lighter icons, clearer labels and more room for content.")

![Smartstamp app icon on an iPad home screen with quick actions for Register artwork, Verify artwork and Transfer artwork.](/projects/smartstamp/ipad-quick-actions.webp "Home screen quick actions on iPad. The three core actions are available before the app opens.")

### Version 3

The latest version, shown on the right in the comparison above, refined version 2 in three areas:

- **Visibility.** Register artwork moved to the top of the home screen as the main action. A banner tells Pro users when their identity still needs to be verified, with a direct link to finish it. Verify and Transfer sit right below as quick actions, so the three core actions are visible without scrolling.
- **Accessibility.** Larger touch targets for quick actions, a text label under every icon, and an active tab marked by colour, an indicator line and its label rather than by colour alone. Warnings combine an icon, a title and a sentence of explanation, so they don’t rely on colour either.
- **Information architecture.** The navigation became Home, Actions, Feedback and Profile. Verify moved from its own tab into the home quick actions, where people look for it first, and a Feedback tab gives users a direct channel to the team. The home now groups content into Artworks and Transferred, each with a See all link.

## One flow in depth: adding a provenance document

Provenance is what gives a certified artwork its value, and a document that is added badly is a document that gets lost. In the latest version I designed several flows for adding documents and additional information to an artwork. This one, adding an ownership document by scanning it, shows how a use case becomes screens.

<dl class="usecase"><dt>User</dt><dd>Registered user: artist, collector or enterprise</dd><dt>Goal</dt><dd>Upload an ownership document for a specific artwork, to keep its provenance record complete</dd><dt>Platform</dt><dd>iOS and Android</dd><dt>Entry point</dt><dd>Artwork details, Documents tab, Add document</dd><dt>Outcome</dt><dd>The document is classified, attached to the artwork and easy to find for provenance tracking later</dd></dl>

### 1. Find the place for it

<ol class="flow-steps" style="--start:0"><li><img src="/projects/smartstamp/doc-flow/01-artwork.webp" alt="Artwork details with the Artwork and Documents tabs and quick actions" loading="lazy" /><p><strong>Artwork details.</strong> Documents get their own tab next to the artwork data, one tap away.</p></li><li><img src="/projects/smartstamp/doc-flow/02-documents-empty.webp" alt="Empty Documents tab explaining why documents matter, with an Add document button" loading="lazy" /><p><strong>An empty state that teaches.</strong> It explains why documents matter and offers a single primary action.</p></li></ol>

### 2. Classify and describe

<ol class="flow-steps" style="--start:2"><li><img src="/projects/smartstamp/doc-flow/04-title.webp" alt="Add document form with the title prefilled with the owner name" loading="lazy" /><p><strong>Sensible defaults.</strong> The title starts with the owner’s name, editable if needed.</p></li><li><img src="/projects/smartstamp/doc-flow/05-type.webp" alt="Document type grid with Ownership selected" loading="lazy" /><p><strong>Type before file.</strong> Eight types with icon and label. The selected one is filled, so it never relies on colour alone.</p></li><li><img src="/projects/smartstamp/doc-flow/06-description.webp" alt="Form with an optional description filled in" loading="lazy" /><p><strong>Optional context.</strong> A description with a character counter, never blocking.</p></li></ol>

### 3. Attach it the way that fits

<ol class="flow-steps" style="--start:5"><li><img src="/projects/smartstamp/doc-flow/07-attach-options.webp" alt="Upload options: scan document, take photo, choose image or attach file" loading="lazy" /><p><strong>Four ways in.</strong> Scan is the recommended first option, with photo, image and file as alternatives.</p></li><li><img src="/projects/smartstamp/doc-flow/08-scan.webp" alt="In-app scanner framing a certificate with a guide message" loading="lazy" /><p><strong>Guided scanning.</strong> The camera frames the page, with colour and automatic modes.</p></li><li><img src="/projects/smartstamp/doc-flow/09-scan-capture.webp" alt="Scanner with the document detected and a save button" loading="lazy" /><p><strong>Capture and confirm.</strong> The user checks the result before it is attached, or retakes it.</p></li></ol>

### 4. Review and save

<ol class="flow-steps" style="--start:8"><li><img src="/projects/smartstamp/doc-flow/10-attached.webp" alt="Form with the document attached and the option to remove it" loading="lazy" /><p><strong>Everything in one view.</strong> Title, type, description and file together, with a clear way to remove the file before saving.</p></li></ol>

The decisions behind it:

- **Classify at the source.** Asking for the type before the file means every document is filed correctly from the start, so the provenance record can later be filtered and grouped by type instead of being a pile of attachments.
- **Scan instead of photograph.** An in-app scanner with framing guides gives straight, legible documents that stay readable as evidence years later.
- **Keep the effort low.** A prefilled title, an optional description and one primary action per screen keep a task that people tend to postpone short enough to finish.
- **Accessible selection.** Every type tile combines an icon and a label, and the selected state changes fill and icon colour, not only the border.

## Designing the details

Artwork data changes often (prices, inventory numbers, series), so every field in the artwork record is edited in place and confirmed on its own. Size, weight and price use pickers with units (centimetres or inches, kilograms or pounds, CHF, EUR or USD), so international collectors enter data their own way and records stay consistent.

![Twelve states of the artwork record: inline editing, confirmation ticks, unit pickers for size and weight, a currency picker for price and multi-select for medium.](/projects/smartstamp/artwork-edit-states.webp "Artwork record states. Every field is edited in place and confirmed on its own.")

## A system behind the screens

I organised the work so it could grow with the product: one Figma file per feature (Home, Register, Verify, Transfer, Space, Search, Profile, Event log, Archive, emails and in-app promotions), all built on a shared UI library with documented components.

![The Smartstamp Figma workspace: more than 20 files, one per feature, including UI Library, Foundations CSS, User flow and Proto-Persona.](/projects/smartstamp/figma-files.webp "One file per feature, all built on the same UI library and foundations.")

<div class="compare">
  <figure>
    <img src="/projects/smartstamp/ui-buttons.webp" alt="Button component states for primary, secondary and tertiary buttons in default, hover and press, plus quick action icons, a row of spaces and two verification cards." />
    <p class="compare-note">Button states and the components built from them.</p>
  </figure>
  <figure>
    <img src="/projects/smartstamp/ui-button-docs.webp" alt="Documentation page for the button component: behaviour, variants, header actions, interaction and usability rules, visual hierarchy and behaviour notes." />
    <p class="compare-note">Each component is documented with its behaviour, variants, accessibility rules (tap targets of 44 to 48 px) and usage.</p>
  </figure>
</div>

## Working with engineering after launch

Once the app was in testing, I delivered improvements as short specs engineering could ship in the next version. Each one had the same fields: the problem, which users and platforms it affects, the entry point, what triggers it and the expected outcome.

![A design spec for reducing the bottom navigation height from 83 to 56 pixels, next to the updated Smartstamp home screen.](/projects/smartstamp/spec-bottom-nav.webp "Example spec: reducing the bottom navigation from 83 px to 56 px, in line with Material Design and Apple’s guidelines.")

One example: the bottom navigation took 83 pixels of height, which crowded artwork previews on smaller phones. Reducing it to 56 pixels gave every screen about 27 pixels back for content and brought the Register artwork button closer to the thumb.

## What I learned

- When you inherit a product, the first deliverable is a shared picture of what is missing. Making gaps visible speeds up decisions more than polished screens do.
- Organise navigation around what people come to do, not around the objects in the database. It also makes the product easier to extend.
- A first build in real hands, even in TestFlight, is the fastest way to see what the design got wrong. Version 2 came from using version 1.
