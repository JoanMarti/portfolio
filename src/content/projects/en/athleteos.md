---
title: "AthleteOS"
headline: "Four devices, one training answer"
summary: "A personal product I designed and built for my ultra distance training: it brings Suunto, Garmin, Fitbit and WHOOP into one source and turns the data into one explained recommendation a day."
client: "Personal project"
sector: "Health and sport tech"
year: "2026"
role: "Product designer and developer"
team: "Solo"
duration: "Ongoing"
tools: [Figma, Next.js, TypeScript, Supabase, Recharts, Claude Code]
cover: signals
featured: false
order: 6
kind: side-project
tldr:
  - "As an ultra distance athlete I wear Suunto, Garmin, Fitbit and WHOOP. Each device sees part of the picture, but none tells me how my condition is, how I should train today, or which sessions are actually working."
  - "I designed and built AthleteOS: it connects every device into one source and turns HRV, sleep, training load and recovery into a daily readiness score and one recommendation that explains itself."
  - "A working product I use on my own training, open source on GitHub, and a hands on test of how to make data driven recommendations people understand and trust."
metrics:
  - value: "1"
    label: "source for every device"
    method: "Suunto, Garmin, Fitbit, WHOOP and Strava in one data model"
  - value: "0 to 100"
    label: "daily readiness score"
    method: "HRV, sleep, load and recovery trend"
  - value: "9"
    label: "rules behind each recommendation"
    method: "Evaluated in priority order, each one explained"
links:
  - label: "View the code on GitHub"
    href: https://github.com/JoanMarti/athleteos
---
## Why I started it

Ultra distance is my hobby. Training for races that last many hours means long blocks of work where small decisions add up: when to push, when to rest, which sessions to repeat. I wanted to understand my own condition better and train with intention instead of habit.

The data was all there, but in pieces. **Suunto** records my trail and mountain sessions with precise GPS, **Garmin** my activities and body battery, **Fitbit** my sleep and resting heart rate, and **WHOOP** my recovery and HRV. Four apps, four dashboards, and numbers that often disagree. None of them answered the questions I actually had.

<dl class="glance">
  <div><dt>How is my condition?</dt><dd>One honest read of today, built from every signal instead of one device’s opinion.</dd></div>
  <div><dt>How should I train today?</dt><dd>One recommendation, with the reason behind it, not a wall of charts.</dd></div>
  <div><dt>Which training works?</dt><dd>Planned versus done, load versus fitness, and how recovery responds over weeks.</dd></div>
</dl>

## One source for every device

The first job was to connect everything and speak one language. Each provider connects with OAuth, its data is mapped into one model, and the app shows clearly what is connected and when it last synced.

| Source | What it brings |
| --- | --- |
| Suunto | Trail, mountain and swim sessions with precise outdoor GPS |
| Garmin | Activities, Body Battery, SpO₂ and HRV |
| Fitbit | Sleep stages, HRV, resting heart rate and steps |
| WHOOP | Recovery score, sleep and HRV (RMSSD) |
| Strava | Activities with power, pace, heart rate and zones |

![AthleteOS data sources screen with Strava, Fitbit and Suunto connection cards and privacy notes](/projects/athleteos/connect.webp "Data sources: each device shows what it brings, its connection status and how its data is handled. Tokens stay encrypted and access is read only.")

**Trust starts in the plumbing.** Read only access, tokens encrypted before storage, and the option to disconnect at any time are part of the experience, not just the backend. If I cannot see where a number comes from, I will not trust the advice built on it.

## From data to one answer

The daily view answers the first two questions. It leads with a **readiness score from 0 to 100** and one recommended session, and everything else sits below.

![AthleteOS today view with a readiness score of 82, score breakdown and a recommended threshold session](/projects/athleteos/today.webp "Today: the readiness score and its breakdown on the left, one recommended session on the right, with the reason in one line.")

The score weighs four signals, and the breakdown is always visible so the number never feels like a black box:

<ul class="pb-stats"><li><strong>35%</strong><span>HRV</span></li><li><strong>30%</strong><span>Sleep</span></li><li><strong>25%</strong><span>Training load (TSB)</span></li><li><strong>10%</strong><span>Recovery trend</span></li></ul>

The recommendation comes from **nine rules evaluated in priority order**. Safety rules come first: forced rest when fatigue is critical, active recovery when readiness is low. Quality sessions only appear when the body is ready. Every recommendation names the signal that drove it.

<details class="more">
<summary>The nine rules, in priority order</summary>
<div class="more-body">

| Rule | When | Session |
| --- | --- | --- |
| 1 | Form below −35 or six hard days in a row | Complete rest |
| 2 | Readiness below 35 | Active recovery, zone 1 |
| 3 | Friday after three or more hard days | Deliberate unload, zone 2 |
| 4 | Two weeks or less to a race | Taper |
| 5 | Readiness below 55 or form below −15 | Aerobic endurance, zone 2 |
| 6 | Readiness 70 or more with a power goal | Threshold intervals |
| 7 | Readiness 70 or more with a race goal | VO₂max efforts |
| 8 | Weekend and readiness 75 or more | Long session, zone 2 |
| 9 | Anything else | Moderate aerobic, zone 2 |

A clear rule engine was a deliberate first step: it is easy to explain and to debug before adding machine learning on top.

</div>
</details>

## Which training works

The third question needs time, so it lives one level down. The weekly view compares planned and actual load day by day; the recovery view shows how HRV, sleep and fatigue respond over 30 days.

![AthleteOS weekly view comparing planned and actual load by day, with the week plan and sport breakdown](/projects/athleteos/week.webp "This week: planned versus actual load, the plan by session type and how time splits between sports.")

![AthleteOS recovery view with 30 day HRV trend, sleep stages and fatigue, fitness and form chart](/projects/athleteos/recovery.webp "Recovery: HRV against its 30 day average, 14 nights of sleep stages, and fatigue, fitness and form (ATL, CTL, TSB) over time.")

Reading fatigue (ATL), fitness (CTL) and form (TSB) next to HRV and sleep is what tells me whether a block of training is building fitness or just digging a hole.

## Design decisions

- **Decide what to leave out.** The challenge was never showing more data. Each screen answers one question and pushes the rest one level down.
- **Explain every number.** Scores come with their breakdown and recommendations with their reason, because trust depends on being able to check.
- **Levels instead of one size for everyone.** Four athlete levels, from recreational to professional, each with its own training distribution and nutrition targets, so the same data leads to advice that fits the person.
- **A small design system of my own.** Dark first, a sporty display face with a monospaced face for numbers, and a layout that switches from a sidebar on desktop to bottom navigation on mobile.

![AthleteOS health and recovery view with recovery components and the daily recommendation](/projects/athleteos/health.webp "Health and recovery: the components behind recovery, each with its source device, and the recommendation for the day.")

## Designed and built with AI

I designed AthleteOS and built it myself with Claude Code: a Next.js and TypeScript app with Supabase, charts in Recharts, and integrations for each provider. Building it, not only designing it, let me test the ideas against real data and real constraints.

The screenshots use demo data.

## What’s next

- Test the recommendations across a full ultra training season and see which sessions really move my performance.
- AI generated weekly summaries in plain language, grounded in the same rules.
- Study how I, and other athletes, react to recommendations we disagree with, which is the real test of trust.
