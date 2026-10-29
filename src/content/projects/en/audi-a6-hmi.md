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
  <div class="anatomy-screen"><img src="/projects/audi/home-screen.webp" alt="The production home screen with seven numbered elements" /><span class="pin" style="left:77.3%;top:28%" aria-hidden="true">1</span><span class="pin" style="left:30.2%;top:29.5%" aria-hidden="true">2</span><span class="pin" style="left:32.6%;top:36.5%" aria-hidden="true">3</span><span class="pin" style="left:43%;top:39%" aria-hidden="true">4</span><span class="pin" style="left:31.6%;top:72.4%" aria-hidden="true">5</span><span class="pin" style="left:62.4%;top:53.2%" aria-hidden="true">6</span><span class="pin" style="left:63.4%;top:82.4%" aria-hidden="true">7</span></div>
  <ol class="anatomy-legend"><li><strong>Status bar.</strong> Connectivity, phone, profile and time, always in the same place, so the driver never searches for system state.</li><li><strong>Shortcut bar.</strong> Home and the four most frequent destinations, visible on every screen. One tap from anywhere, no going back.</li><li><strong>Tile grid.</strong> Two rows of four. Large, evenly spaced targets where the whole tile responds, not only the label.</li><li><strong>Illustration.</strong> Recognised in peripheral vision before anything is read. Shape does the first part of the work.</li><li><strong>Label.</strong> Short, in capitals, with generous tracking for legibility on a dark screen at arm’s length.</li><li><strong>Colour accent.</strong> A thin line per category. It identifies without shouting, and keeps the screen calm at night.</li><li><strong>Page indicator.</strong> More tiles are one swipe away, so the structure grows sideways instead of deeper.</li></ol>
  <p class="anatomy-h">Read order at a glance</p>
  <ol class="read-order"><li><span>1</span>Shape, in peripheral vision</li><li><span>2</span>Colour, the category</li><li><span>3</span>Label, the confirmation</li><li><span>4</span>Touch, the whole tile</li></ol>
  <figcaption>The home screen in the production car, annotated.</figcaption>
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
