---
title: Coches.net exploration hub
headline: Turning one-visit searches into returning buyers on Spain’s largest car marketplace
summary: A personalised space that remembers what each buyer was looking at — saved searches, favourites, comparisons — and brings them back to it.
client: Coches.net (Adevinta)
sector: Automotive marketplace
year: "TODO"
role: Senior UX/UI Designer
team: Product owner, engineering squad, analytics
duration: "TODO"
tools: [Adobe Analytics, Figma, Guerrilla testing, A/B testing]
cover: loop
featured: false
order: 4
tldr:
  - Car buyers on Coches.net searched, looked at a listing and left. Buying a car takes weeks of comparing, but the platform made people start from zero every visit.
  - I designed an exploration hub in the main navigation that keeps saved searches, favourites, comparisons and personalised recommendations in one place, and validated it with guerrilla tests and a staged A/B test.
  - Unique users grew 210%, average session time went from 50 seconds to 90, and leads to dealers rose 50%.
metrics:
  - value: "+210%"
    label: unique users
    method: "A/B test vs control, Adobe Analytics — TODO: confirm whether section or platform level"
  - value: "50s → 90s"
    label: average session time (+80%)
    method: A/B test, Adobe Analytics
  - value: "+50%"
    label: leads generated
    method: Lead events to dealers, A/B test
  - value: "+35%"
    label: favourites usage
    method: Adobe Analytics event tracking
---

## The problem

Coches.net had plenty of listings and a search engine people used. The problem wasn’t usability; it was **growth**. Buying a car takes many sessions, but every visit started from scratch: search, open a listing, leave. Discovery, comparison and coming back weren’t supported anywhere.

## Data before design

I started with Adobe Analytics — session duration, feature usage, devices, page flows, favourites and drop-off points — to set a behavioural baseline:

- **65%** of users only looked at the most popular brands.
- **80%** engaged more with personalised content.
- **60%** regularly went back to cars they had saved.
- **85%** wanted to compare cars.

Then interviews, usability tests, surveys and benchmarking to understand *why*. The pattern was clear: buyers wanted continuity between sessions. They needed to compare and revisit to feel confident, and they valued platforms that “remembered” them.

That reframed the challenge:

> Retention wasn’t a search problem. It was a memory problem.

## The solution

A new exploration hub, built into the main navigation, that brings together:

- saved searches,
- favourites,
- personalised recommendations,
- comparison tools,
- relevant content and profile shortcuts.

Instead of making buyers restart discovery every visit, the platform picks up where they left off. The intended behaviour changed from **search → exit** to **search → explore → compare → return → contact a dealer**.

## Key decisions

**A hub, not another feature.** Favourites and saved searches already existed but were scattered. Bringing them together gave buyers one place to return to, and gave the product a surface for recommendations.

**Modular, within the legacy platform.** The hub had to live inside the existing architecture and UI system, mobile-first, without hurting performance or SEO. I designed it as modules that could ship and be measured separately.

**Test small, then scale.** Guerrilla tests with 5–8 users per round to validate flows, then an A/B test designed with the product owner — goals, sample size, success metrics, rollout phases. A 5% sample wasn’t enough for statistical confidence, so we scaled it up gradually until it was.

## Results

- **+210%** unique users
- Average session time from **50 seconds to 1 minute 30** (+80%)
- **+50%** leads to dealers
- **+35%** use of favourites, with more return visits and content interaction

## Why it worked

People don’t come back to platforms. They come back to *their progress*. Storing intent, preferences and comparisons kept buyers’ momentum — and momentum is what turns browsing into a lead.
