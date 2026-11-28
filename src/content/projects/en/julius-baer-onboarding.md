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
