---
title: Audi A6 connected HMI
headline: An interface for the car — designed for drivers who should be looking at the road
summary: Information architecture and interaction model for the connected Audi A6 infotainment system, tested in a driving simulator.
client: Audi (Volkswagen Group)
sector: Automotive
year: "2015"
role: Senior UX / HMI Designer
team: UX, HMI engineering, software and hardware teams
duration: "TODO"
tools: [Information architecture, Interaction design, High-fidelity prototyping, Simulator testing]
cover: hmi
featured: false
order: 7
tldr:
  - Cars were turning into connected platforms — navigation, media, phone, vehicle settings, driver assistance — and menus were getting deeper with every feature.
  - I defined the information architecture, navigation model and interaction principles for the connected A6, designing for the rotary controller first, and tested prototypes in a cabin simulator.
  - The result was a flatter, consistent HMI structure that could take new connected services without adding depth — and a shared model that aligned design and engineering.
metrics: []
---

## The problem

In 2015 the car industry was moving from separate controls to fully connected digital systems. Features were growing faster than the interface could absorb them, which led to deep menus, inconsistent patterns, poor discoverability and — most importantly — **driver distraction**.

Designing for a car isn’t like designing for web or mobile:

- **The user is driving.** Attention is limited, interactions must be quick and predictable, and errors have safety consequences.
- **The system is many systems.** Navigation, media, phone, settings and assistance, each on its own development cycle, with legacy behaviour.
- **The hardware is fixed.** One screen size, limited performance, and a rotary controller plus physical buttons as the main input.

So this was a systems-design project as much as an interface project.

## What I did

I focused on system-level UX: the information architecture, the navigation model and interaction logic, the HMI principles, screen layouts and components, and high-fidelity prototypes for in-cabin testing. A large part of the job was being the bridge to engineering, so concepts were feasible on the actual hardware.

## Principles first, screens second

Before designing screens, we agreed on principles that every team could use to make decisions:

- Flat navigation over deep menus.
- The same interaction patterns across every system.
- Predictable behaviour and immediate feedback.
- Fewer steps for frequent tasks.
- Rotary controller first, touch second.
- Keep the driver’s eyes on the road.

## Key decisions

**Fewer main categories, grouped by driver goals** rather than by which technical system owned the feature. Trade-off: some engineering ownership lines blurred, but drivers found things where they expected them.

**A shallow navigation model** with consistent screen templates, so each new connected service fitted an existing pattern instead of adding a level.

**A persistent status area** for system feedback and critical information, so drivers never had to look for it.

**Limited customisation.** Fewer options, more reliability and predictability — the right call in a safety-critical context.

## Testing in the cabin

We tested high-fidelity prototypes in a cabin simulator with task-based scenarios — navigation, media, phone and settings — while observing drivers’ attention and behaviour. Many issues only appeared in a realistic driving context and led to changes in navigation structure, flows, layouts and system messages.

## Outcome

- Faster task completion and clearer navigation in simulator tests.
- A scalable HMI architecture ready for future connected services.
- A shared interaction model that aligned design and engineering, communicated through flows, IA and prototypes rather than screens alone.

## What I learned

Designing for vehicles is designing for attention and safety. System behaviour matters as much as visuals, hardware shapes UX decisions, and prototyping in a realistic environment changes them significantly. I still apply that lesson to any high-stakes product: test where the pressure is real.
