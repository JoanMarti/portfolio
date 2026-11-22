---
title: Instamusic
headline: Music discovery by mood
summary: A mood-based discovery app that breaks the “because you listened to” loop, built as a layer on top of existing streaming services.
client: Musiclist (Barcelona startup)
sector: Consumer music
year: "2019"
role: Product Design Lead (also owned product management)
team: Founders, engineering and design
duration: Three months to MVP
tools: [Figma, Hotjar, Google Analytics, Typeform, Guerrilla testing]
cover: mood
featured: false
order: 7
tldr:
  - Recommendation engines rely on listening history, so they keep serving more of the same. Young listeners aged 15 to 25 wanted something new that matched the moment.
  - I defined the MVP, ran discovery, and designed and tested two entry flows on top of Spotify and Apple Music. One used an optional selfie as a playful mood signal, the other a quick manual mood selection.
  - We shipped the MVP in three months and validated it with more than 50 people in Barcelona. The selfie flow felt faster, more fun and “less like the same algorithm again”.
metrics:
  - value: "3 months"
    label: from idea to shipped MVP
  - value: "50+"
    label: participants in field tests
    method: Guerrilla testing at different times of day in Barcelona
---

## The problem

By 2019 streaming was mainstream and recommendations were mature, but they all worked the same way: because you listened to X. Younger listeners, shaped by TikTok and Instagram, discovered music by mood and by moment. They wanted novelty without configuring filters.

> Young listeners want a fast, effortless way to discover music that matches how they feel right now, without getting stuck in the same algorithmic loop.

## What I did

As Product Design Lead I owned product definition and UX: the discovery plan, recruiting for interviews and field tests, product hypotheses, MVP scope, success metrics, workshops and the story for investors.

**Discovery.** Hotjar and Google Analytics to find high-interest entry points, a branching Typeform survey to segment motivations, and in-depth interviews about frustration with repetition and how people look for something new. The insight was that the problem wasn’t a lack of recommendations. It was a lack of **novelty** and of **relevance to the moment**.

![Joan facilitating a focus group, participants sorting printed user profiles with sticky notes on the wall](/projects/instamusic/focus-group.webp "Running a focus group: participants sorted printed listener profiles by mood and moment, and their notes on the wall shaped the first hypotheses.")

**Ideation.** How might we questions, Crazy 8s and impact and effort mapping led to the key idea: an optional selfie as a playful mood check that produces a set of recommendations in seconds.

## Key decisions

**Test two entry flows against each other.** Flow A used the selfie and flow B used quick mood chips and sliders. We tested speed, clarity, fun compared with creepiness, expectations around consent and willingness to connect a streaming account.

Flow A, the one we took forward, in four steps:

<ol class="flow-steps" style="--start:0"><li><img src="/projects/instamusic/screens/home.webp" alt="Home screen with a large camera button and the headline Discover music with your photos" loading="lazy" /><p><strong>One clear action.</strong> The home is a single invitation: take a photo and discover music.</p></li><li><img src="/projects/instamusic/screens/camera.webp" alt="Camera view framing a selfie" loading="lazy" /><p><strong>A playful mood check.</strong> The selfie captures how you feel right now, in one tap.</p></li><li><img src="/projects/instamusic/screens/photo.webp" alt="Photo preview with a Continue button" loading="lazy" /><p><strong>Confirm before anything happens.</strong> The user sees the photo and decides whether to continue.</p></li><li><img src="/projects/instamusic/screens/tags-selected.webp" alt="Detected tags for mood, genre and context, some selected, with a Create your playlist button" loading="lazy" /><p><strong>You stay in control.</strong> The app suggests tags for mood, genre and context; the user keeps only the ones that fit.</p></li></ol>

**Be a layer, not a catalogue.** Instead of licensing music, users connected Spotify or Apple Music and played tracks there. That kept the MVP focused on what was new, which was discovery and the engagement loop.

The music lives where users already listen: they connect Spotify, get a playlist and export it in one tap.

<ol class="flow-steps" style="--start:4"><li><img src="/projects/instamusic/screens/connect.webp" alt="Welcome screen with Connect with Spotify and a free access option" loading="lazy" /><p><strong>Connect or explore freely.</strong> Spotify is the main path, with a free option for people who don’t want to connect an account.</p></li><li><img src="/projects/instamusic/screens/playlist.webp" alt="Generated playlist with its tags and an Export to Spotify button" loading="lazy" /><p><strong>A playlist for the moment.</strong> The tags that built it stay visible above the list.</p></li><li><img src="/projects/instamusic/screens/exported.webp" alt="Confirmation dialog saying the playlist was exported, with Open Spotify" loading="lazy" /><p><strong>Back to their player.</strong> The playlist is exported and opens in Spotify.</p></li></ol>

**Design responsible AI from the start.** Because the concept involves reading emotion from a face, safeguards were part of the design, not a legal afterthought:
- The selfie is opt-in, and manual mood selection is always available.
- Clear microcopy explains what the camera is used for.
- No images are stored by default, and processing on the device is preferred.
- It is easy to skip, revoke and delete.
- Mood is treated as a soft signal, never as a diagnosis.


In the interface, those safeguards look like this:

<ol class="flow-steps" style="--start:7"><li><img src="/projects/instamusic/screens/tags.webp" alt="Detected tags shown as unselected suggestions" loading="lazy" /><p><strong>Suggestions, not verdicts.</strong> Detected tags start unselected; nothing is assumed about the user.</p></li><li><img src="/projects/instamusic/screens/tags-info.webp" alt="Dialog explaining what tags are and how they are used" loading="lazy" /><p><strong>Explain the why.</strong> A short explanation of what tags are and how they improve the search.</p></li><li><img src="/projects/instamusic/screens/preferences.webp" alt="Preferences screen with language, privacy and help" loading="lazy" /><p><strong>Privacy one tap away.</strong> Privacy and help are always reachable from preferences.</p></li></ol>

## Results

Field tests with more than 50 participants at different times of day. Flow A was consistently seen as more fun, more novel and quicker to decide with. The MVP was then measured on completed discoveries, saves and shares, and short-term return visits, to support fundraising conversations.

## What I’d do next

Combine mood with context (time and activity) and explicit preferences, add a control for more new or more familiar music, A/B test the consent step, and measure long-term retention by cohort.
