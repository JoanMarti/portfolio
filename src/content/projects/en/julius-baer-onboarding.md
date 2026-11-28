---
title: Julius Baer onboarding
headline: Digital onboarding with a human touch
summary: An adaptive onboarding proof of concept for high-net-worth clients, validated with clients and advisors and approved by the executive board for a pilot.
client: Julius Baer (through IBM iX Switzerland)
sector: Private banking
year: "2022"
role: "Senior UX/UI Designer, IBM iX"
team: Four-person cross-functional innovation team
duration: "5 months"
tools: [Figma, Interview synthesis, Journey mapping, Moderated usability testing]
cover: branching
featured: true
order: 4
tldr:
  - Onboarding at Julius Baer was split across digital and human channels. For clients who expect discretion and a personal relationship, the first digital impression didn’t match the brand.
  - I led research, the adaptive flow logic and high-fidelity prototypes for a proof of concept that tailors onboarding to each client and keeps the advisor visible throughout.
  - The proof of concept was validated with clients and advisors, approved by the executive board, and moved to a pilot with A/B testing and defined KPIs.
metrics:
  - value: "Approved"
    label: by the executive board for a pilot
    method: Board review of the proof of concept, research findings and risk framing
  - value: "5"
    label: pilot KPIs defined
    method: Completion rate, time to account activation, client confidence, advisor engagement and drop-off
---

## The problem

Private banking runs on trust and personal relationships, under strict KYC, anti-money-laundering and data protection rules. Julius Baer’s onboarding didn’t reflect that. Clients went through:

- repetitive data entry,
- unclear next steps,
- little personalisation,
- an advisor who was barely visible,
- drop-offs during identity verification.

The risk was strategic, not cosmetic. **Digital friction erodes trust**, and in private banking trust is the product.

The question we had to answer was:

> Can we modernise onboarding without compromising trust, compliance or the advisor relationship?

## What I did

I joined IBM iX Switzerland as Lead UX/UI Designer for Julius Baer’s innovation programme. This was a validation project, not a redesign. Our job was to reduce the risk of a large investment before it was made.

**Research with the people who matter.** High-net-worth clients, clients referred by advisors, returning investors, private advisors and internal compliance stakeholders. I used AI to summarise interviews and cluster patterns, especially the emotional language around trust and anxiety, and checked every output by hand because the context is so sensitive.

What we learned:

- Clients equate friction with lower trust.
- Personalisation increases the sense of exclusivity.
- Seeing their advisor in the flow makes clients feel secure.
- KYC steps create anxiety when clients don’t know why something is asked.
- Above all, clients want to know what happens next.

## Mapping the whole service

I framed the concept as a digital distributor and mapped the whole service in a blueprint, from how a lead finds the bank to the ongoing relationship once they are a client. It started from one persona and one flow: wealth planning and a mandate.

![Whiteboard photo with sticky notes: design principles, three journeys and the stages of the digital distributor from hearing about it to maintenance.](/projects/julius-baer-onboarding/jb-whiteboard-blur.webp "It started on paper: principles, journeys and stages on sticky notes.")

<div class="bp-top"><div class="bp-card"><p class="bp-h">Persona: Sophie</p><ul><li>35 to 50 years old</li><li>A working professional, such as a corporate lawyer, or with inherited wealth</li><li>Bankable assets of around CHF 2 million, about half of it in cash</li></ul><p class="bp-s">Pain points</p><ul><li>Overwhelmed by the complexity of wealth management offering and pricing</li><li>Little time or interest to build investment knowledge</li><li>Lacks the confidence to manage conflicting goals and growing wealth</li><li>Frustrated by standard products and a very traditional service</li></ul><p class="bp-s">Goal</p><p class="bp-goal">Holistic wealth planning advice and the investment recommendation that follows</p></div><div class="bp-card"><p class="bp-h">Design principles</p><ul class="bp-pr"><li>Transparency wherever possible: packages, pricing, minimum investment.</li><li>Clients are always taken by the hand and never feel lost or that they forgot something.</li><li>Clients feel confident and in control, and can always ask someone.</li><li>Nothing is hidden. We guide them through everything, even a 15% match.</li></ul></div></div>

<div class="bp-j" role="group" aria-label="Three journeys"><div class="bp-card"><p class="bp-s">Journey 1</p><p class="bp-goal">Only looking for a mandate, with no need for wealth planning</p></div><div class="bp-card"><p class="bp-s">Journey 2</p><p class="bp-goal">Only looking for wealth planning and the bank’s expertise</p></div><div class="bp-card"><p class="bp-s">Journey 3, the ideal one</p><p class="bp-goal">A holistic approach: a mandate that supports the wealth planning goals</p></div></div>

<div class="bp" role="group" aria-label="Service blueprint for the digital distributor, in eight stages"><p class="bp-arc">The profile can always be refined</p><ol><li><strong>Lead acquisition</strong><span>How to reach leads for the new service</span><small>Out of scope for us. Leads come through referrals</small></li><li><strong>Get hooked</strong><span>Play with simulations and teasers. Each answer refines the profile</span><small>A playful questionnaire on investing and wealth planning, free content such as what is, how can I and investment ideas, meeting the team and what makes the offer different, and first questions such as currency and domicile</small></li><li><strong>Create account</strong><span>No onboarding yet. Previous simulations can be retrieved</span><small>An access code to come back without an account, progress saved in the browser, or a simple account with name, phone and email</small></li><li><strong>Choose a package</strong><span>Recommended packages based on what the client told us</span><small>Mandates, banking products, advice and wealth planning sessions, lending, and an hour with a tax or legacy and estate specialist</small></li><li><strong>Onboarding</strong><span>Find and pick the right onboarding path</span><small>As little information as possible, prefilled wherever we can. Fast track: fund the strategy and go. Advised: start with an advisory session to refine the package</small></li><li><strong>Next steps</strong><span>Transfer funds or book the first session</span></li><li><strong>First session</strong><span>Access to the pool of experts and guidance on the final setup</span><small>A first investment and wealth planning session with a relationship manager from the pool, who can see the profile and give holistic advice, then the final setup with upselling such as leverage</small></li><li><strong>Maintenance</strong><span>A dashboard for the investments and wealth planning advice, and sessions with experts</span><small>An app for desktop and mobile, perhaps the same as e-banking. Change strategy, book sessions, and a profiling wizard to capture what a session needs</small></li></ol></div>

## Looking for patterns

Before drawing anything, I collected onboarding and configuration patterns from apps outside banking: insurance, fitness, events, real estate and wellbeing. For each one I noted what it could solve for us. They fell into four groups.

<div class="patterns" role="group" aria-label="Patterns collected for the onboarding"><div><p class="pt-h">Ask</p><ul><li>Conversational questions to learn about the client</li><li>Bubbles to pick areas of interest, with more detail on tap</li></ul></div><div><p class="pt-h">Explore</p><ul><li>Main categories and their services in one view</li><li>Easy to scan and drill into one area</li><li>Swipe through the selected services and open the details</li></ul></div><div><p class="pt-h">Decide</p><ul><li>Configure each service in a “cart”</li><li>Chart previews in a modal, full screen once chosen</li><li>A clear value proposition for each service</li></ul></div><div><p class="pt-h">Progress</p><ul><li>A simple sign of how far the client is</li><li>Progress together with a preview of the cart</li><li>A success state at the end</li></ul></div></div>

## Structuring the journey

The patterns shaped a simple content flow, from what hooks the client to becoming a prospect.

<ol class="phases"><li><strong>Areas of interest</strong><span>Life goals, key questions and main services, to hook the client</span></li><li><strong>Explore details</strong><span>The specific services, products or goals behind each one</span></li><li><strong>Proposal</strong><span>A product the client can configure</span></li><li><strong>Sign up</strong><span>The client becomes a prospect</span></li></ol>

Underneath, I mapped three ways in. A client could start from a service, from a question or from a moment in life, and each way had the same levels down to the details.

<div class="ia3" role="group" aria-label="Three ways into the same structure"><div class="ia3-col"><p class="ia3-h">Services</p><p class="ia3-l">Category</p><div class="ia3-c cat"><span>Investing</span><span>Wealth planning</span></div><p class="ia3-l">Service</p><div class="ia3-c svc"><span>Advisory mandate</span><span>Discretionary mandate</span><span>Structured products</span><span>Securities execution and advisory</span><span>Foreign exchange and precious metals</span></div><p class="ia3-l">Details</p><div class="ia3-c det"><span>Discretionary mandate: mandates and strategies</span></div></div><div class="ia3-col"><p class="ia3-h">Questions</p><p class="ia3-l">Category</p><div class="ia3-c cat"><span>Key questions the client asks</span></div><p class="ia3-l">Service</p><div class="ia3-c svc"><span>The services that answer each one</span></div><p class="ia3-l">Details</p><div class="ia3-c det"><span>The details behind each service</span></div></div><div class="ia3-col"><p class="ia3-h">Emotions</p><p class="ia3-l">Category</p><div class="ia3-c cat"><span>Family</span><span>Succession</span></div><p class="ia3-l">Service</p><div class="ia3-c svc"><span>One entry for each family situation</span></div><p class="ia3-l">Details</p><div class="ia3-c det"><span>The details behind each service</span></div></div></div>

The step by step concept came from there. The client first selects all their goals and moments, can read the details of any of them, then sees everything in a cart view where they refine it or add more services before continuing.

## Key decisions

**Many paths, one structure.** Instead of one linear flow, the onboarding adapts to the referral source, the client profile, any existing relationship and investment experience. All paths share the same skeleton, so compliance reviews one structure instead of a dozen flows. We modelled the paths and edge cases before prototyping to find redundant questions and likely drop-off points.

**The advisor is part of the interface.** An advisor introduction appears early in the flow, with a visible contact throughout. The goal was not to replace the relationship with technology but to make it present inside the digital experience.

**Explain compliance instead of hiding it.** Each KYC step says why it is needed and what comes next, with progress always visible. Transparency turned regulatory friction into a moment of reassurance.

**Visual restraint.** A minimal interface, subtle micro-interactions and no gimmicks. In private banking, calm is the premium signal.

## The prototype

The first screens ask before they sell. Three short questions about goals, topics of interest and topics to explore, with progress always visible and the option to skip.

![Three onboarding screens: life goals to choose from with photos, topics of interest as icon bubbles, and topics to explore such as derivatives, currencies and sustainable investing as bubbles.](/projects/julius-baer-onboarding/jb-questions.webp "Goals, topics of interest and topics to explore. The client picks what matters, never fills in a form.")

The answers shape what comes next. The home shows the goals the client picked and suggests services to discuss with their relationship manager. Opening a pillar 3a account, the client sees a recommended strategy based on those answers, can choose a different one, and has a person to ask at the bottom of the screen.

![Home screen with the client’s selected life goals and three suggested services: structured products, wealth planning and discretionary mandates. Two investment strategy screens for a pillar 3a account with a recommended Income 35% strategy, a confirmation message and a quick question option with an advisor photo.](/projects/julius-baer-onboarding/jb-suggestions.webp "Suggestions based on the client’s goals, a recommended strategy they can change, and an advisor one tap away.")

## Validation

High-fidelity prototypes for desktop and mobile, tested in moderated sessions with high-net-worth clients, advisors and internal stakeholders. We looked at completion confidence, trust signals, clarity of the flow, moments of hesitation and how advisors felt about their role in it.

## Outcome

- The proof of concept was validated with clients and advisors.
- **The executive board approved** a pilot with A/B testing.
- KPIs were defined for the rollout: completion rate, time to account activation, client confidence, advisor engagement and drop-off reduction.

## What I learned

In private banking, UX is trust engineering. Innovation has to coexist with regulation, and board approval takes a narrative, evidence and honest risk framing, not just good screens.
