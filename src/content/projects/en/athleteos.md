---
title: AthleteOS
headline: One answer from seven wearables
summary: A personal project where I designed and coded a training platform that combines data from Strava, WHOOP, Garmin and others into one daily recommendation.
client: Personal project
sector: Health and sport tech
year: "2026"
role: Product designer and developer
team: Solo
duration: Ongoing
tools: [Figma, Next.js, TypeScript, Supabase, Recharts, Claude]
cover: signals
featured: false
order: 6
kind: side-project
tldr:
  - Endurance athletes collect data in many apps (Strava, WHOOP, Garmin, Suunto, Wahoo, Intervals.icu and TrainingPeaks), but none of them answers the one question that matters in the morning. How should I train today?
  - I designed and built a platform that combines training load, HRV, sleep and recovery into a daily readiness score and a single recommendation, with its own design system built for dark mode first.
  - A working product on GitHub, and a hands-on way to test how to make data-driven recommendations understandable and trustworthy.
metrics: []
links:
  - label: View the code on GitHub
    href: https://github.com/JoanMarti/athleteos
---

<!-- TODO: add 3 or 4 screenshots (dashboard, weekly view, recovery, onboarding) to public/projects/athleteos/ -->

## Why I built it

I wanted to work on the part of AI and data products that interests me most as a designer: **turning complex signals into one decision people trust**. Building it myself, rather than only designing it, let me test those ideas against real data and real constraints.

## The design problem

An athlete with a watch, a recovery strap and a training app has three dashboards and no answer. The numbers often disagree. The challenge wasn’t showing more data. It was **deciding what to leave out** and explaining the rest.

## Key decisions

**One recommendation, explained.** The daily view leads with a readiness score from 0 to 100, built from HRV, sleep, training load and recovery trend, and one recommendation from an engine of nine prioritised rules. Every recommendation shows why, naming the signal that drove it. A clear rule-based engine was a deliberate first step: easier to explain and debug before adding machine learning on top.

**Progressive depth.** The daily view comes first. Weekly load, 30-day trends (ATL, CTL and TSB), HRV and sleep phases sit one level down for athletes who want to dig in.

**Levels instead of one size for everyone.** Four athlete levels, from recreational to professional, each with its own training protocols and nutrition targets, so the same data leads to advice that fits the person.

**Trust in the plumbing too.** OAuth for every provider, tokens encrypted before storage, and a clear connection status with sync times. Users can see what is connected and when it last updated. That is part of the experience, not just the backend.

**A small design system of my own.** CSS custom properties, designed for dark mode first, a sporty display typeface paired with a monospaced face for numbers, and a responsive layout that switches from a sidebar on desktop to bottom navigation on mobile.

## What’s next

- AI-generated weekly summaries in plain language, grounded in the same rules.
- Testing how users react to recommendations they disagree with, which is the real test of trust.
