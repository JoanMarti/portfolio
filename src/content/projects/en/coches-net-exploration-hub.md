---
title: Coches.net exploration hub
headline: From one visit to returning buyers
summary: A personal space that remembers what each buyer was looking at (saved searches, favourites and comparisons) and brings them back to it.
client: Coches.net (Adevinta)
sector: Automotive marketplace
year: "2017 to 2019"
role: "Senior UI/UX Designer, User Growth and Retention"
team: Product owner, engineering squad and analytics
duration: "2 years"
tools: [Adobe Analytics, Figma, Guerrilla testing, A/B testing]
cover: loop
featured: true
order: 5
tldr:
  - Car buyers on Coches.net searched, looked at a listing and left. Buying a car takes weeks of comparing, but the platform made people start from zero on every visit.
  - I designed an exploration hub in the main navigation that keeps saved searches, favourites, comparisons and personal recommendations in one place, and validated it with guerrilla tests and a staged A/B test.
  - Unique users grew by 210%, average session time went from 50 to 90 seconds, and leads to dealers rose by 50%.
metrics:
  - value: "+210%"
    label: unique users
    method: A/B test against a control group in Adobe Analytics  # TODO: confirm whether this is section or platform level
  - value: "50s → 90s"
    label: average session time (+80%)
    method: A/B test, Adobe Analytics
  - value: "+50%"
    label: leads generated
    method: Lead events sent to dealers, A/B test
  - value: "+35%"
    label: use of favourites
    method: Event tracking in Adobe Analytics
---

## The problem

Coches.net had plenty of listings and a search engine people used. The problem wasn’t usability, it was **growth**. Buying a car takes many sessions, but every visit started from scratch: search, open a listing, leave. Discovery, comparison and coming back weren’t supported anywhere.

## Data before design

I started with Adobe Analytics (session duration, feature usage, devices, page flows, favourites and drop-off points) to set a behavioural baseline:

- **65%** of users only looked at the most popular brands.
- **80%** engaged more with personalised content.
- **60%** regularly went back to cars they had saved.
- **85%** wanted to compare cars.

Then I ran interviews, usability tests, surveys and benchmarking to understand why. The pattern was clear. Buyers wanted continuity between sessions. They needed to compare and revisit to feel confident, and they valued platforms that remembered them.

That reframed the challenge:

> Retention wasn’t a search problem. It was a memory problem.

## The solution

A new exploration hub, built into the main navigation, that brings together:

- saved searches,
- favourites,
- personal recommendations,
- comparison tools,
- relevant content and profile shortcuts.

Instead of making buyers restart their search on every visit, the platform picks up where they left off. The intended behaviour changed from **search and leave** to **search, explore, compare, return and contact a dealer**.

## Key decisions

**A hub, not another feature.** Favourites and saved searches already existed but were scattered. Bringing them together gave buyers one place to return to, and gave the product a surface for recommendations.

**Modular, inside the existing platform.** The hub had to live inside the existing architecture and UI system, mobile first, without hurting performance or SEO. I designed it as modules that could ship and be measured separately.

**Test small, then scale.** Guerrilla tests with five to eight users per round to validate the flows, then an A/B test designed with the product owner, covering goals, sample size, success metrics and rollout phases. A 5% sample wasn’t enough for statistical confidence, so we increased it gradually until it was.

## Results

- **+210%** unique users
- Average session time from **50 seconds to 1 minute 30** (+80%)
- **+50%** leads to dealers
- **+35%** use of favourites, with more return visits and more interaction with content

## Why it worked

People don’t come back to platforms. They come back to their progress. Storing intent, preferences and comparisons kept buyers’ momentum, and momentum is what turns browsing into a lead.
