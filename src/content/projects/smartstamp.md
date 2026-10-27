---
title: Smartstamp
headline: A mobile app that gives every artwork a digital fingerprint, from registration to ownership transfer
summary: I designed Smartstamp’s iOS and Android app end to end, turning a patented AI fingerprinting technology into flows that artists, collectors and businesses can use with their phone.
client: Smartstamp
sector: Art tech and authentication
year: "TODO"            # TODO: confirm years
role: Product Designer  # TODO: confirm exact title (Lead / Senior Product Designer?)
team: "TODO"            # TODO: founders, engineers, marketing — who did you work with?
duration: "TODO"
tools: [Figma, UI library, CSS foundations, User flows, Proto-personas]
coverImage:
  src: /projects/smartstamp/cover.webp
  alt: Six screens of the Smartstamp app showing the artwork record being edited — size, weight and price pickers, medium selection and inline confirmations.
featured: true
order: 2
tldr:
  - Smartstamp’s technology creates a unique digital fingerprint of an artwork with AI and computer vision, so its authenticity can be checked with a smartphone. The challenge was making a precise, technical process feel simple for artists, collectors and businesses.
  - I mapped the whole product, closed the gaps in the first flows with marketing and engineering, and designed the app — onboarding, artwork registration and fingerprint capture, verification, ownership transfer, collections — on top of a UI library and CSS foundations I built.
  - A complete iOS and Android app organised in more than 20 feature files, plus a way of documenting improvements that engineering could ship version by version.
metrics: []
links: []
---

## The problem

Certificates of authenticity are usually a signature on paper or a label on the back of a canvas. Both are easy to copy. Smartstamp, a Swiss company, built a patented technology that uses AI and computer vision to create a unique fingerprint of the artwork itself, and records it with blockchain timestamping.

The technology worked. The product didn’t exist yet. People had to be able to:

- **register** an artwork by photographing it correctly,
- **verify** any artwork with their phone, in normal lighting,
- **transfer** ownership when a work is sold,
- and do all of this without understanding computer vision.

Four different users had to be served by one app: **registered artists, collectors, businesses and visitors**.

## Mapping the whole product first

I started by drawing the complete product as one user flow: splash and onboarding, sign-up, the dashboard, and from there the five core jobs — profile, notifications, search, register, verify and transfer.

![First version of the Smartstamp user flow. Blue blocks mark parts of the product that were not yet defined, and a pink block marks onboarding content that needed clarification with marketing.](/projects/smartstamp/userflow-v1.webp "First version of the flow. I marked undefined areas in blue and open questions with marketing in pink, so the gaps were visible to everyone instead of hidden in a meeting.")

The first version was deliberately honest. Instead of designing screens around the gaps, I marked them: search, social login and part of registration were **not defined**, and onboarding content needed **clarification with marketing**. Registration also depended on a technical step — image capture and artwork size recognition using AI — that engineering was still shaping.

That map became the agenda for decisions with the founders, marketing and engineering.

![Second version of the user flow, with onboarding for collectors, all branches defined and several fingerprint capture sequences of different lengths.](/projects/smartstamp/userflow-v2.webp "Second version: every branch defined, onboarding written for collectors, and fingerprint sequences from three to eight captures.")

In the second version every branch had an answer: onboarding written for collectors, a registration flow that ends in selecting a space, verification by QR code or artwork ID, and transfers with a history of past transfers.
<!-- TODO: confirm what decides the number of fingerprint captures (artwork size?) and add one sentence here. -->

## Key decisions

**Registration as a guided photo session.** Fingerprinting only works if the photos are right. The flow walks the user step by step — overview photo, artwork details, then a sequence of close-up fingerprint captures — confirming each step before moving on. A short onboarding appears before the first capture, when the user actually needs it, not at sign-up.

**Verification in one gesture.** Anyone can verify an artwork by scanning its QR code, or typing its artwork ID when scanning isn’t possible. It’s the action a visitor or a buyer needs, so it sits in the bottom navigation next to Home, Register and Profile.

**An artwork record that is easy to correct.** Artwork data is the heart of the product, and it changes: prices, inventory numbers, series. Each field is edited in place and confirmed individually. Size, weight and price use pickers with units — centimetres or inches, kilograms or pounds, CHF, EUR or USD — so international collectors enter data their own way and the record stays consistent.

![Twelve states of the artwork record: inline editing, confirmation ticks, unit pickers for size and weight, currency picker for price and multi-select for medium.](/projects/smartstamp/artwork-edit-states.webp "Artwork record states: every field edits in place and confirms on its own; size, weight and price use unit and currency pickers.")

**Spaces to organise a collection.** Collectors group artworks into spaces, like rooms or collections. Empty states explain what a space is and invite the first action, so a new account never looks broken.

**Status that tells the truth.** Every artwork shows whether it is verified, and an event log records what happened to it. For an authentication product, the history is part of the value.

## A system behind the screens

I organised the work so it could scale with the product: one Figma file per feature — Home, Register Artwork, Verify, Transfer, Space, Search, Profile, Event Log, Archive, emails and in-app promotions — all built on a shared **UI library** and **CSS foundations**, with proto-personas to keep the four user types in view.

![The Smartstamp Figma workspace: more than 20 files, one per feature, including UI Library, Foundations-CSS, User flow and Proto-Persona.](/projects/smartstamp/figma-files.webp "One file per feature, all built on the same UI library and CSS foundations.")

![Overview of the final home and artwork screens in Figma, in the dark theme with the orange Smartstamp header.](/projects/smartstamp/screens-overview.webp "Final home, spaces, notifications and artwork screens, including empty states and error states.")

## Improving after launch

Once the app was in people’s hands, I kept improving it through small, documented changes that engineering could ship in the next version. Each one had the same short spec: the problem, which users and platforms it affects, where it appears, what triggers it and the expected outcome.

![A design spec for reducing the bottom navigation height from 83 to 56 pixels, next to the updated Smartstamp home screen.](/projects/smartstamp/spec-bottom-nav.webp "Example of a quick-fix spec: reducing the bottom navigation from 83px to 56px to match Material Design and iOS guidelines and give artwork more space.")

One example: the bottom navigation took 83 pixels of height, which crowded artwork previews on smaller phones. Reducing it to 56 pixels — in line with Material Design and Apple’s guidelines — gave every screen about 27 pixels back for content and brought the main “Register artwork” button closer to the thumb.

## What I learned

- In a product built on a new technology, the first deliverable is a shared map of what is still undefined. Making gaps visible speeds up decisions more than polished screens do.
- Precision tasks, like photographing an artwork for fingerprinting, need guidance at the moment of action, not a long onboarding up front.
- Small, well-documented fixes build trust with engineering and keep a live product improving between big releases.
