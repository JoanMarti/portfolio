---
title: Finora
headline: "Your Swiss finances, one clear view"
summary: "A read-only wealth app for people in Switzerland that brings bank accounts, investments and Pillar 3a together. I took it from zero to an Android 1.0 build on my own: product strategy, data model, design and code."
client: Finora (own product)
sector: "Fintech, personal finance"
year: "2026"
role: "Founder, product designer and builder"
team: "Solo, designing and building with Claude Code"
duration: "Sep to Oct 2026, 31 sprints"
tools: [Figma, Flutter, Riverpod, Claude Code, GitHub Actions]
cover: wealth
featured: true
order: 2.5
kind: side-project
discipline: [product, visual]
tldr:
  - "People in Switzerland keep their money across several banks, a pension fund and Pillar 3a, and no app shows the whole picture in a Swiss way."
  - "I defined the product, designed a data model that normalises any bank into one view, and built the app in Flutter for iOS, Android and the web, with a business plan built on consent based cross-selling and a freemium tier."
  - "A working product in 31 sprints: a 1.0 Android build, a live web demo in four languages, a reference backend and 219 automated tests."
metrics:
  - value: "0 → 1"
    label: "from idea to an Android 1.0 build"
    method: "Product, design and code by me, September to October 2026"
  - value: "31"
    label: "sprints, each one shippable"
    method: "Pull requests merged on GitHub, each with its own release scope"
  - value: "219"
    label: "automated tests"
    method: "Unit, widget, contract and translation tests run in CI on every change"
  - value: "4"
    label: "languages: EN, DE, FR, IT"
    method: "Every user facing text lives in translation files checked by a test"
links:
  - label: "Open the live demo"
    href: https://joanmarti.github.io/finora-mvp/
  - label: "Source code on GitHub"
    href: https://github.com/JoanMarti/finora-mvp
---

## At a glance

<dl class="glance">
  <div><dt>The bet</dt><dd>Open banking is arriving in Switzerland through SIX bLink and OpenWealth. Whoever turns that data into a calm, trustworthy overview earns a daily habit.</dd></div>
  <div><dt>My role</dt><dd>Everything from zero: the product thesis, data model, information architecture, UI, business model and the code itself.</dd></div>
  <div><dt>The result</dt><dd>A product people can install today: Android 1.0, a live web demo and an architecture ready to switch from demo data to real bank connections.</dd></div>
</dl>

## The problem

A typical household in Switzerland splits its money across two or three banks, an investment platform, a pension fund and one or more Pillar 3a accounts. Each provider shows its own slice. Nobody shows the whole, and the questions people actually ask cut across all of them: how much do I really have, am I saving enough, will my pension be enough, and can I afford a home?

International aggregators exist, but they don’t speak Swiss: no Pillar 3a, no AHV, no cantonal taxes, no prices written as CHF 1’248.40. And trust is fragile. People will not hand over banking access to an app that looks like it might move their money or sell their data.

> The opportunity was not another budgeting app. It was a calm, Swiss, read-only view of everything someone owns, with clear next steps.

## The goal: the Swiss aggregator that is missing

Today a household in Switzerland needs one app per bank, another for the broker, a portal for the pension fund, one more for Pillar 3a and another for the health insurer. Each app answers questions about its own product. None answers questions about the household, and no Swiss product brings them together.

<dl class="glance">
  <div><dt>Today</dt><dd>An app or portal per provider, each with its own login, its own numbers and its own slice of the picture.</dd></div>
  <div><dt>With Finora</dt><dd>Every account in one read-only view, in CHF, with Swiss rules for Pillar 3a, AHV, taxes and housing.</dd></div>
  <div><dt>Why it matters</dt><dd>The overview builds the habit. The habit lets Finora show savings that no single provider would ever point out.</dd></div>
</dl>

I set three product objectives, in this order:

1. **Aggregate.** Connect every bank and wealth provider through SIX bLink and OpenWealth, plus manual assets such as property.
2. **Explain.** Turn the overview into answers: am I okay, can I buy a home, will my pension be enough.
3. **Act.** When the data shows someone pays too much, connect them with a better product, only with their consent.

## Product principles

I wrote these down before designing a single screen, and every later decision was checked against them:

- **Read-only by design.** Finora can never move money. Any payment or trade hands the user back to their bank. This is the foundation of trust, so it is said on the first screen.
- **Value before profiling.** Onboarding asks only what is needed to build an overview. Income, goals and risk come later, when the product can explain why it needs them.
- **Wealth before accounts.** The first tab answers how much I have and where it is going. Institutions and transactions live one level down.
- **Insight before cross-sell.** A partner offer can only appear after an explainable signal in the user’s own data, and only with express consent.
- **Education, not advice.** Investment themes are exploratory and say clearly that they are not personal recommendations.

## A data model that makes banks comparable

The hardest design problem was invisible: data. Every bank describes accounts, balances and transactions differently, and a dashboard can only be trusted if its numbers never contradict each other. So I designed the data layer first.

<figure class="arch" aria-label="Diagram of how Finora turns bank data into one view">
  <p class="arch-badge">Many sources, one truth</p>
  <div class="arch-layer"><p class="arch-title">Sources</p><div class="arch-cols">
    <div><strong>Banks</strong><ul><li>SIX bLink</li><li>Current and savings accounts</li></ul></div>
    <div><strong>Wealth</strong><ul><li>OpenWealth</li><li>Portfolios and Pillar 3a</li></ul></div>
    <div><strong>Manual</strong><ul><li>Property, cars</li><li>Other assets</li></ul></div>
  </div></div>
  <p class="arch-arrow"><span aria-hidden="true">↓</span>Adapters normalise every payload</p>
  <div class="arch-layer arch-core"><p class="arch-title">One financial model</p><p class="arch-sub">Institutions · Accounts · Transactions · Money in Rappen · Data health</p></div>
  <p class="arch-arrow"><span aria-hidden="true">↓</span>Derived, never stored</p>
  <div class="arch-layer"><p class="arch-title">The app</p><p class="arch-sub">Net worth, allocation, history, health score and alerts, all calculated from the same accounts</p></div>
  <figcaption>The interface never talks to a bank directly. Swapping demo data for real bLink or OpenWealth connections changes one place, not the screens.</figcaption>
</figure>

Four decisions keep the numbers honest:

- **Money is exact.** Amounts are stored as whole Rappen, never as decimals, and formatted only in the interface.
- **Totals are derived, never stored.** Net worth and allocation are calculated from the accounts every time, so the dashboard cannot disagree with the account list.
- **Institution and account are separate.** One bank can hold five accounts without duplicating its connection state.
- **Data health is part of the model.** Every connection is healthy, stale, needs action or manual, and the same state shows on the dashboard, the bank and the profile.

## Onboarding that earns trust

<ol class="flow-steps" style="--start:0"><li><img src="/projects/finora/welcome.webp" alt="Welcome screen saying Your finances. One clear view, with read-only by design and you stay in control" loading="lazy" /><p><strong>Promise first.</strong> Read-only and “you stay in control” are the first things people read, before any sign-up.</p></li><li><img src="/projects/finora/about-you.webp" alt="About you form with year of birth, canton, employment and family status" loading="lazy" /><p><strong>Only what changes the numbers.</strong> Canton, work and family drive taxes, pension rules and estimates. Everything stays on the device.</p></li></ol>

The flow adapts to each person: the banks and products they choose are exactly what the dashboard shows, and people can explore everything with demo data before creating an account.

## A dashboard with a clear hierarchy

The dashboard is where most money apps fail: twenty widgets with equal weight. I designed it as a reading order, from the answer to the details.

![Finora desktop dashboard with total wealth, evolution, financial health and upcoming bills](/projects/finora/desktop-dashboard.webp "Desktop: total wealth first, then its evolution, then the financial health score and what is coming up. Navigation groups the product into Overview, Plan, Save and You.")

1. **How much do I have?** Total net worth, with cash, investments, Pillar 3a and debt as one row underneath.
2. **Where is it going?** Wealth evolution over 6, 12 or 24 months.
3. **Am I okay?** A financial health score out of 100, with one next step.
4. **What do I need to do?** Upcoming bills and deadlines, then planning tools.

The same hierarchy holds on a phone, a tablet and a desktop, with layouts designed for each instead of one stretched screen.

<ol class="flow-steps" style="--start:2"><li><img src="/projects/finora/dashboard.webp" alt="Mobile dashboard with total wealth, shortcuts, health score and wealth evolution" loading="lazy" /><p><strong>The same order on mobile.</strong> Answer, evolution, health and shortcuts, all reachable with one thumb.</p></li><li><img src="/projects/finora/health.webp" alt="Financial health check with score 91 out of 100 and areas such as emergency fund and savings rate" loading="lazy" /><p><strong>A score you can act on.</strong> Six areas, each explained in plain language and linked to the screen that improves it.</p></li></ol>

## Making financial health explainable

A single score is only useful if people understand it and can change it. The health check combines six areas, weighted by how much they matter for a household in Switzerland:

| Area | Weight | What it looks at |
| --- | --- | --- |
| Emergency fund | 20% | Months of spending covered by savings |
| Savings rate | 20% | Share of income kept each month |
| Retirement | 20% | Projected income from AHV, pension fund and Pillar 3a |
| Pillar 3a | 15% | Contributions against this year’s limit |
| Housing | 15% | Affordability of current or planned housing |
| Fixed costs | 10% | Share of income going to fixed bills |

When Finora lacks the data for an area, it says so and suggests what to add, instead of guessing. The score is a conversation starter, not a judgement.

## Accounts, spending and Swiss planning

<ol class="flow-steps" style="--start:4"><li><img src="/projects/finora/accounts.webp" alt="Accounts screen with portfolio total, filters and connected institutions with sync state" loading="lazy" /><p><strong>Every institution, clearly organised.</strong> Totals, filters and a visible sync state for each connection.</p></li><li><img src="/projects/finora/account-detail.webp" alt="Account insight with balance evolution and a contextual saving tip" loading="lazy" /><p><strong>Insight per account.</strong> Balance evolution by period and a saving signal only when the data supports it.</p></li><li><img src="/projects/finora/analysis.webp" alt="Spending analysis with savings rate, fixed costs share and income versus spending" loading="lazy" /><p><strong>Spending, month by month.</strong> Savings rate, fixed costs and cash flow, without manual categorising.</p></li><li><img src="/projects/finora/home-buying.webp" alt="Home affordability simulator showing the highest affordable price" loading="lazy" /><p><strong>Can I buy a home?</strong> A simulator built on Swiss rules: equity, affordability and pension fund withdrawals.</p></li></ol>

Planning is where Finora becomes Swiss: a three pillar retirement outlook (AHV including the 13th pension, pension fund and Pillar 3a), a tax summary for each year with CSV export, a financial calendar of Swiss deadlines, and simulators for home buying and tax savings.

## Cross-selling from the user’s own data

Seeing every account at once is also the business advantage. Finora can justify an offer with the user’s own number, “you pay CHF 348 a month to your health insurer”, instead of generic advertising. The engine runs on 15 explainable rules. Each one starts from a signal in the data and estimates a cautious yearly saving.

| Opportunity | Triggered when | Estimated yearly saving | How Finora earns |
| --- | --- | --- | --- |
| Switch basic health insurance | A health premium in the bills, during switching season (until 30 November) | 5 to 15% of the premium | Fee per contract, capped at CHF 70 per person |
| Review insurance | Two or more insurance policies in the bills | CHF 420 to 840 | Share of the commission |
| Idle cash | More than 3 months of spending sitting in current accounts | 0.4 to 0.8% of the excess | Fee per opened account |
| Use Pillar 3a room | Room left up to CHF 7’258, with priority in the last quarter | 20 to 30% of the room, in taxes | Fee per account or contribution |
| Renew the mortgage | A connected mortgage | 0.1 to 0.3% of the debt | Share of the broker commission |
| Card and bank fees | A credit card, or current accounts at two or more banks | CHF 50 to 240 | Fee per card or account |
| Phone and internet | A telecom bill above CHF 60 a month | 20 to 40% of the bill | Fee per contract |
| Review subscriptions | Two or more subscriptions | Up to half of their total | Nothing: there is no partner, it builds trust |

Savings are shown as “a range, not a promise” and will be calibrated with the first partners. With the demo profile they add up to about CHF 3’250 a year.

<ol class="flow-steps" style="--start:8"><li><img src="/projects/finora/offers.webp" alt="Ways to save, listing 13 data based opportunities with estimated yearly savings" loading="lazy" /><p><strong>Offers from the user’s own data.</strong> Each one comes from an explainable rule and shows the estimated yearly saving.</p></li><li><img src="/projects/finora/plus.webp" alt="Finora Premium plan at CHF 4.92 a month billed yearly, with a 14 day free trial" loading="lazy" /><p><strong>Freemium, stated plainly.</strong> Premium lifts limits and adds deeper planning. The trial reminds people before it ends.</p></li></ol>

The offer experience follows one rule: an offer only appears if it can be explained with the user’s data and the user has said they want to see offers.

- **One question before any analysis.** “Shall we look for ways to save?” Until the answer is yes, nothing is analysed for offers. Under the revised Swiss data protection act this is high risk profiling, so consent is stored with the version of the text.
- **Why you see this.** Every offer shows the user’s own figure behind it, how the saving was estimated and how Finora would be paid.
- **Consent per partner.** The continue button only activates once the user agrees to share their name, email and that data with that specific partner.
- **The commission never decides the ranking.** Offers are ordered by deadline and size of the saving. At most two appear on the dashboard, and “Not interested” hides one for good.
- **Everyday analysis never moves behind the paywall.** Finora Premium (CHF 59 a year) lifts limits and adds deeper planning. It never changes which offers appear.

## The business plan

Finora earns when it helps people save. I modelled the plan per 10,000 active users with explicit assumptions, so the first pilot can prove or break each one.

<ul class="pb-stats"><li><strong>CHF 10.6</strong><span>revenue per active user and year, base case</span></li><li><strong>60%</strong><span>of users accepting offers, the assumption with most impact</span></li><li><strong>CHF 59</strong><span>Premium per year, or CHF 6.90 a month</span></li><li><strong>Q2 2027</strong><span>proposed pilot, after partners and legal review</span></li></ul>

| Revenue source | Conversion a year (assumption) | Revenue per conversion | Revenue a year |
| --- | --- | --- | --- |
| Mortgages | 0.3% of 6’000 users with consent → 18 | CHF 1’500 | CHF 27’000 |
| Basic health insurance | 4% → 240 | CHF 70 (legal cap) | CHF 16’800 |
| Banking: savings, cards, accounts | 3% → 180 | CHF 80 | CHF 14’400 |
| Other insurance | 1.5% → 90 | CHF 150 | CHF 13’500 |
| Pillar 3a | 2% → 120 | CHF 100 | CHF 12’000 |
| Telecom | 2% → 120 | CHF 40 | CHF 4’800 |
| Finora Premium | 3% of 10’000 users → 300 | CHF 59 | CHF 17’700 |
| **Total** | | | **CHF 106’200, about CHF 10.6 per user** |

Every rate and fee except the CHF 70 cap is an assumption to validate with partners. Mortgages bring a quarter of the revenue from very few conversions, so a single broker agreement changes the result.

- **Why now.** Basic health insurance premiums rise by 5.0% on average in 2027 and the deadline to switch is 30 November. It is the moment of the year when most people look for savings.
- **Partners in three waves.** First, programmes that are open with a known fee (real estate valuation and mobile plans through Awin, a health insurance comparison site). Then a pilot for spending abroad and investing. Finally, direct deals with a Pillar 3a provider and a mortgage broker, where the saving for the user is largest.
- **Regulation shapes the model.** To earn insurance commissions, Finora must register with FINMA as an untied intermediary or work with one that is. Health insurance commissions are capped at CHF 70 per person since September 2024. Referrals to financial products need a legal review under the Financial Services Act before launch.
- **A funnel that can be measured without personal data.** The app already records views, partner clicks and dismissals as anonymous counts. Pilot targets: 60% consent, 15% click to partner, 25% partner conversion, fewer than 20% dismissals.

Still open to close the plan: acquisition cost per user, 12 month retention and the real fees of the first partners.

## Designed and built with AI

I designed Finora and built it in code with Claude Code, in 31 short sprints, each ending with a shippable product. Working this way changed how I design: decisions were tested in the real product the same day, not in a prototype.

- **Flutter** for iOS, Android and the web from one codebase, with responsive layouts for phone, tablet and desktop.
- **A clean architecture**: the interface depends on a financial data contract, so a real bank provider replaces the demo data in one place.
- **A reference backend and contract tests** that keep the app and its API from drifting apart.
- **219 automated tests**, including translation checks that fail if any of the four languages misses a text.
- **Continuous delivery**: every change is analysed, tested and deployed to the live web demo, and Android releases are built automatically.
- **Accessibility by default**: 48 px touch targets, descriptive labels, visible sync states and a palette tested for contrast.

![Finora desktop plans screen comparing Free and Premium](/projects/finora/desktop-plans.webp "Desktop layouts were designed for each screen, not stretched from mobile.")

## What I learned

- **In fintech, the data model is the design.** The calm dashboard is only possible because every number comes from one source and cannot contradict another.
- **Trust is designed in many small places**: read-only on the first screen, consent with versions, visible sync states, and a commission that never decides the ranking.
- **Building it myself made me a better product designer.** I had to make every trade off concrete, from the price of the yearly plan to what happens when a bank connection goes stale.

**Next:** validate onboarding, connection comprehension and the dashboard hierarchy with 5 to 8 people who bank with several Swiss institutions, confirm coverage and costs with bLink and OpenWealth providers, and measure completion, connection success and repeat use.

All figures, balances and people in the screenshots are fictional demo data.
