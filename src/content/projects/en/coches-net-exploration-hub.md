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

Coches.net was a data driven company: product, marketing and engineering decided with numbers, and design had to earn its place the same way. I worked in Adobe Analytics every week, building my own views of page flows, entry points and device segments to find the patterns worth designing for, and agreeing the success metric with product before any screen existed.

![Adobe Analytics workspace with top pages, visits and unique visitors](/projects/coches-net/adobe-analytics.webp "A typical Adobe Analytics workspace: top pages, visits and unique visitors, segmented by device. Illustrative view with sample data.")

Then I ran interviews, usability tests, surveys and benchmarking to understand why. The pattern was clear. Buyers wanted continuity between sessions. They needed to compare and revisit to feel confident, and they valued platforms that remembered them.

That reframed the challenge:

> Retention wasn’t a search problem. It was a memory problem.

## First step: a home that routes

Before the hub, the home page had to do a better job of getting people to the right place. Most visits arrived from search engines and landed on a generic page that sent everyone to the same search form.

Together with the SEO team I redesigned the first version of the home as a grid of large entry points, one for each way people buy: used cars, new cars, Km 0, extended warranty, motorbikes, vans and road tests. Each tile matched a search intent people already had, so search traffic reached the listings in fewer steps and users went straight into the section that fitted them, instead of starting from an empty search.

It also gave the analytics a clearer signal: which section each visitor chose became the first piece of context the hub could later build on.

![The first version of the new Coches.net home on a laptop, with large entry points by buying intent](/projects/coches-net/home-v1.webp "The first version of the new home: one large entry point per buying intent, designed with SEO so search traffic reached the listings and users went straight into the right section.")

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
