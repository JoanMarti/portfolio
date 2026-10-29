---
title: Audi A6 connected HMI
headline: Eyes on the road
summary: Information architecture and interaction model for the connected Audi A6 infotainment system, tested in a driving simulator.
client: Audi (Volkswagen Group)
sector: Automotive
year: "2015"
role: Senior UX and HMI Designer
team: UX, HMI engineering, software and hardware teams
duration: "TODO"
tools: [Information architecture, Interaction design, Voice interaction, High-fidelity prototyping, Simulator testing]
cover: hmi
featured: false
order: 8
tldr:
  - Cars were turning into connected platforms with navigation, media, phone, vehicle settings and driver assistance, and the menus got deeper with every feature.
  - I defined the information architecture, navigation model and interaction principles for the connected A6, designing for the rotary controller first, and tested prototypes in a cabin simulator.
  - The result was a flatter, consistent HMI structure that could take new connected services without adding depth, and a shared model that aligned design and engineering.
metrics: []
---


## The problem

In 2015 the car industry was moving from separate controls to fully connected digital systems. Features were growing faster than the interface could absorb them, which led to deep menus, inconsistent patterns, features that were hard to find and, most importantly, **driver distraction**.

Designing for a car isn’t like designing for the web or a phone:

- **The user is driving.** Attention is limited, interactions must be quick and predictable, and errors have safety consequences.
- **The system is many systems.** Navigation, media, phone, settings and assistance each have their own development cycle and older behaviour.
- **The hardware is fixed.** One screen size, limited performance, and a rotary controller and physical buttons as the main input.

So this was as much a system design project as an interface project.

![Designers and engineers working around a prototype Audi in the development workshop](/projects/audi/workshop.webp "Concepts were checked around the real vehicle, not only on a screen.")

## What I did

I focused on the experience at system level: the information architecture, the navigation model and interaction logic, the HMI principles, screen layouts and components, and high-fidelity prototypes for testing in the cabin. A large part of the job was being the bridge to engineering, so that concepts worked on the actual hardware.

## The HMI as a system

The HMI is not a screen. It sits between four things, and a decision in one of them ripples through all the others.

<figure class="hmi-sys" aria-label="Diagram of the HMI system with its inputs, outputs, vehicle systems and platform">
  <div class="node n-vs"><p>Vehicle systems</p><ul><li>Navigation</li><li>Media</li><li>Phone</li><li>Vehicle settings</li><li>Driver assistance (ADAS)</li><li>Connected services</li><li>Vehicle status</li></ul></div>
  <span class="arr a-d1" aria-hidden="true"></span>
  <div class="node n-in"><p>Inputs</p><ul><li>Rotary controller</li><li>Steering wheel buttons</li><li>Touchscreen</li><li>Voice control</li></ul></div>
  <span class="arr a-r1" aria-hidden="true"></span>
  <div class="node n-hmi"><p>HMI system</p><ul><li>UI layer</li><li>Interaction logic</li><li>System states</li><li>System feedback</li><li>Navigation model</li></ul></div>
  <span class="arr a-r2" aria-hidden="true"></span>
  <div class="node n-out"><p>Outputs</p><ul><li>Central display</li><li>Instrument cluster</li><li>Head-up display</li><li>Audio feedback</li></ul></div>
  <span class="arr a-d2" aria-hidden="true"></span>
  <div class="node n-pf"><p>Platform</p><ul><li>Embedded system</li><li>Vehicle data and CAN bus</li><li>Sensors</li><li>Connectivity and cloud</li></ul></div>
  <figcaption>Content comes from the vehicle systems, the platform sets the limits, and the HMI turns four inputs into four outputs.</figcaption>
</figure>

**Vehicle systems** feed it content, each with its own release cycle. **Inputs** reach it four ways: rotary controller, steering wheel buttons, touchscreen and voice. **Outputs** go to the central display, the instrument cluster, the head-up display and audio. Underneath, the **platform** (embedded system, vehicle data over the CAN bus, sensors and cloud connectivity) sets hard limits on performance and timing. Mapping this first gave design and engineering one picture of where every decision would land.

## Principles first, screens second

Before designing screens, we agreed on principles that every team could use to make decisions:

- Flat navigation instead of deep menus.
- The same interaction patterns across every system.
- Predictable behaviour and immediate feedback.
- Fewer steps for frequent tasks.
- Rotary controller first, touch second.
- Keep the driver’s eyes on the road.

## Information architecture

Five categories, grouped by what the driver wants to do, each with no more than five destinations. The tree stays two levels deep: home, a category, a destination.

<figure class="tree" aria-label="Navigation tree of the HMI from home to five categories">
  <p class="root">HOME</p>
  <div class="cols">
    <div><p class="cat">Navigation</p><ul><li>Enter destination</li><li>Recent destinations</li><li>Favourites</li><li>Map settings</li></ul></div>
    <div><p class="cat">Media</p><ul><li>Radio</li><li>Media library</li><li>Bluetooth audio</li><li>USB</li><li>Media settings</li></ul></div>
    <div><p class="cat">Phone</p><ul><li>Contacts</li><li>Call history</li><li>Keypad</li><li>Messages</li><li>Phone settings</li></ul></div>
    <div><p class="cat">Vehicle</p><ul><li>Driving settings</li><li>Driver assistance</li><li>Lights</li><li>Climate</li><li>Vehicle status</li></ul></div>
    <div><p class="cat">Settings</p><ul><li>Display</li><li>Sound</li><li>Connectivity</li><li>System</li><li>User profiles</li></ul></div>
  </div>
  <figcaption>Two levels below home at most. New connected services join an existing category instead of adding depth.</figcaption>
</figure>

The most frequent destinations also live in a persistent bar on the left of the screen, so the driver can jump to navigation, media, phone or radio from anywhere without going back home.

## Key decisions

**Fewer main categories, grouped by what the driver wants to do** rather than by which technical system owned the feature. Some lines of engineering ownership became less clear, but drivers found things where they expected them.

**A shallow navigation model** with consistent screen templates, so each new connected service fitted an existing pattern instead of adding a level.

**A persistent status area** for system feedback and critical information, so drivers never had to look for it.

**Limited customisation.** Fewer options meant more reliability and predictability, which was the right call in a context where safety comes first.

## One model, four inputs

The same structure had to work whether the driver turned the rotary controller, pressed a steering wheel button, touched the screen or spoke. So focus, feedback and confirmation were designed once and then expressed in each input, instead of designing four separate interfaces.

Voice was designed to feel natural rather than like a command language. In the climate context the screen suggests phrases such as “Mir ist zu warm” (I am too warm) and highlights the words the system understands, so drivers learn what to say without a manual.

![Voice control screen for climate with suggested phrases above the climate controls](/projects/audi/voice-climate.webp "Voice in context: suggested phrases for climate, with the words the system understands highlighted. Climate controls stay on the lower screen.")

## The interface in the car

Two touchscreens split the work: the upper one for infotainment and navigation, the lower one for climate and comfort. The driver always knows which screen does what.

![Audi A6 cockpit with the instrument cluster and the two central touchscreens](/projects/audi/cockpit.webp "The cockpit: instrument cluster, upper screen for infotainment, lower screen for climate.")

The home screen is a grid of large tiles with a colour accent for each category, so a destination is recognised by its image and colour at a glance instead of by reading labels. A status bar keeps connectivity, phone and profile information always in the same place.

<div class="compare compare--wide">
  <figure>
    <img src="/projects/audi/home-screen.webp" alt="The home screen with eight large tiles and the persistent left bar" />
    <p class="compare-note">Home: large tiles, a colour accent per category and the persistent left bar.</p>
  </figure>
  <figure>
    <img src="/projects/audi/home-tiles.webp" alt="Close view of the home tiles for navigation, car, telephone and media" />
    <p class="compare-note">Tiles readable at a glance, with icon, label and colour working together.</p>
  </figure>
</div>

### Anatomy of the home screen

A screen read in a fraction of a second needs a strict hierarchy. Every element has one job, and the order in which the eye finds them is designed, not left to chance.

<figure class="anatomy">
  <div class="anatomy-screen"><svg viewBox="0 0 800 450" role="img" aria-label="Annotated wireframe of the HMI home screen with seven numbered elements" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="800" height="450" rx="18" fill="#0c0d10"/><g fill="none" stroke="#d4d4d8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M648 36 L658 45 L653 49 L653 31 L658 35 L648 44"/><circle cx="676" cy="36" r="3.5"/><path d="M669 49 q7 -10 14 0"/><rect x="692" y="31" width="9" height="17" rx="2"/></g><g fill="#d4d4d8"><rect x="710" y="44" width="3" height="5"/><rect x="715" y="40" width="3" height="9"/><rect x="720" y="36" width="3" height="13"/><rect x="725" y="32" width="3" height="17" opacity=".4"/></g><text x="742" y="47" fill="#e4e4e7" font-size="15" font-weight="600">16:11</text><rect x="18" y="70" width="70" height="340" rx="6" fill="#16171b"/><rect x="18" y="70" width="70" height="68" rx="6" fill="#2a2c33"/><path d="M40 110 L53 98 L66 110 M44 107 L44 120 L62 120 L62 107" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M53 160 L63 188 L53 182 L43 188 Z" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M48 254 L48 232 L62 228 L62 250" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="45" cy="254" r="4" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="59" cy="250" r="4" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M44 296 q2 -6 6 -4 l4 6 q1 3 -2 5 q3 7 9 10 q2 -3 5 -2 l6 4 q2 4 -4 6 q-14 0 -24 -25 z" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="53" cy="372" r="3" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M53 375 L53 392 M44 364 a12 12 0 0 0 0 16 M62 364 a12 12 0 0 1 0 16" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><line x1="26" y1="138" x2="80" y2="138" stroke="#2a2c33"/><line x1="26" y1="206" x2="80" y2="206" stroke="#2a2c33"/><line x1="26" y1="274" x2="80" y2="274" stroke="#2a2c33"/><line x1="26" y1="342" x2="80" y2="342" stroke="#2a2c33"/><rect x="130" y="80" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><path d="M165 160 Q195 112 243 120" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><path d="M179 166 Q205 128 245 134" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="205" y="202" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">NAVIGATION</text><line x1="136" y1="228" x2="274" y2="228" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><rect x="296" y="80" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><ellipse cx="371" cy="142" rx="34" ry="13" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="371" cy="139" rx="16" ry="6" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="371" y="202" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">SETTINGS</text><line x1="302" y1="228" x2="440" y2="228" stroke="#d4d4d8" stroke-width="3" stroke-linecap="round"/><rect x="462" y="80" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><circle cx="547" cy="138" r="15" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><path d="M503 156 a10 10 0 0 1 8 -16 a13 13 0 0 1 24 2 a9 9 0 0 1 4 14 z" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="537" y="202" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">WEATHER</text><line x1="468" y1="228" x2="606" y2="228" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/><rect x="628" y="80" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><path d="M663 158 C683 158 687 118 703 118 C719 118 723 158 743 152" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="703" y="202" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">RADIO</text><line x1="634" y1="228" x2="772" y2="228" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/><rect x="130" y="250" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><path d="M175 316 L225 298 L239 308 L189 326 Z" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><path d="M167 324 Q205 342 245 316" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="205" y="372" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">TELEPHONE</text><line x1="136" y1="398" x2="274" y2="398" stroke="#84cc16" stroke-width="3" stroke-linecap="round"/><rect x="296" y="250" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><rect x="337" y="298" width="68" height="26" rx="8" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><path d="M349 298 L357 286 L385 286 L393 298" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><circle cx="351" cy="312" r="3" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><circle cx="391" cy="312" r="3" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="371" y="372" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">CAR</text><line x1="302" y1="398" x2="440" y2="398" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/><rect x="462" y="250" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><ellipse cx="537" cy="296" rx="38" ry="7" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="537" cy="310" rx="28" ry="6" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="537" cy="324" rx="22" ry="7" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="537" y="372" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">MEDIA</text><line x1="468" y1="398" x2="606" y2="398" stroke="#eab308" stroke-width="3" stroke-linecap="round"/><rect x="628" y="250" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><path d="M685 300 L703 290 L721 300 L721 324 L703 334 L685 324 Z M685 300 L703 310 L721 300 M703 310 L703 334" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="703" y="372" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">HELP</text><line x1="634" y1="398" x2="772" y2="398" stroke="#d4d4d8" stroke-width="3" stroke-linecap="round"/><rect x="440" y="421" width="16" height="4" rx="2" fill="#e4e4e7"/><rect x="460" y="421" width="10" height="4" rx="2" fill="#52525b"/><g class="mk"><circle cx="626" cy="41" r="13"/><text x="626" y="45.5" text-anchor="middle">1</text></g><g class="mk"><circle cx="96" cy="74" r="13"/><text x="96" y="78.5" text-anchor="middle">2</text></g><g class="mk"><circle cx="130" cy="80" r="13"/><text x="130" y="84.5" text-anchor="middle">3</text></g><g class="mk"><circle cx="262" cy="124" r="13"/><text x="262" y="128.5" text-anchor="middle">4</text></g><g class="mk"><circle cx="276" cy="198" r="13"/><text x="276" y="202.5" text-anchor="middle">5</text></g><g class="mk"><circle cx="436" cy="228" r="13"/><text x="436" y="232.5" text-anchor="middle">6</text></g><g class="mk"><circle cx="490" cy="423" r="13"/><text x="490" y="427.5" text-anchor="middle">7</text></g></svg></div>
  <ol class="anatomy-legend"><li><strong>Status bar.</strong> Connectivity, phone, profile and time, always in the same place, so the driver never searches for system state.</li><li><strong>Shortcut bar.</strong> Home and the four most frequent destinations, visible on every screen. One tap from anywhere, no going back.</li><li><strong>Tile grid.</strong> Two rows of four. Large, evenly spaced targets where the whole tile responds, not only the label.</li><li><strong>Illustration.</strong> Recognised in peripheral vision before anything is read. Shape does the first part of the work.</li><li><strong>Label.</strong> Short, in capitals, with generous tracking for legibility on a dark screen at arm’s length.</li><li><strong>Colour accent.</strong> A thin line per category. It identifies without shouting, and keeps the screen calm at night.</li><li><strong>Page indicator.</strong> More tiles are one swipe away, so the structure grows sideways instead of deeper.</li></ol>
  <p class="anatomy-h">Read order at a glance</p>
  <ol class="read-order"><li><span>1</span>Shape, in peripheral vision</li><li><span>2</span>Colour, the category</li><li><span>3</span>Label, the confirmation</li><li><span>4</span>Touch, the whole tile</li></ol>
  <figcaption>Wireframe drawn for this case study to show the system’s UI logic. It is not a copy of the production screen.</figcaption>
</figure>

## Testing in the cabin

We tested high-fidelity prototypes in a cabin simulator with tasks for navigation, media, phone and settings, while observing drivers’ attention and behaviour. Many issues only appeared in a realistic driving context, and they led to changes in the navigation structure, flows, layouts and system messages.

<div class="video">
  <iframe src="https://www.youtube.com/embed/XGqnJOjWSzs" title="Audi A6 connected HMI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
  <p class="video-caption">The connected A6 HMI in use. <a href="https://youtu.be/XGqnJOjWSzs" target="_blank" rel="noopener">Watch on YouTube</a></p>
</div>

## Outcome

- Faster task completion and clearer navigation in simulator tests.
- A scalable HMI architecture ready for future connected services.
- A shared interaction model that aligned design and engineering, communicated through flows, information architecture and prototypes rather than screens alone.

## What I learned

Designing for vehicles is designing for attention and safety. System behaviour matters as much as visuals, hardware shapes UX decisions, and prototyping in a realistic environment changes them a lot. I still apply that lesson to any product where the stakes are high: test where the pressure is real.
