# Gravitas Backlog

> Cél: a Gravitas prototípust úgy bontani, hogy külön mini agentekre lehessen osztani, és az építés ne fulladjon szét. Ez execution backlog, nem víziódoksi.

## Current State

- Route: `/gravitas`
- Core scaffold exists: sim core, activation engine, event engine, Phaser scene host
- Main loop exists: boot -> activation -> awakened
- UI already has:
  - module focus panel
  - action panel
  - event resolution card
  - persistent marks
- Alias route: `/starhold` should remain compatibility-only

## Workstreams

### 1. Sim Core Hardening

Goal:
- make the state model more engine-like and less page-driven

Tasks:
- separate any remaining page-level logic into sim helpers
- keep command handling strict and single-purpose
- make marks / persistent consequences easy to extend
- prepare room for hidden states and trapped states

Done when:
- state transitions are readable
- new event types can be added without touching the page
- the sim is still simple enough for the MVP

### 2. Event System

Goal:
- turn isolated incidents into branching, chained situations

Tasks:
- add more chainable incidents
- make event chains leave durable traces
- define a few negative loop / soft trap states
- make event resolution text shorter and clearer

Done when:
- events can affect future ticks
- a bad decision can carry forward as a state scar
- the player feels consequence, not just popup resolution

### 3. Activation / Avatar Origin

Goal:
- make the avatar awakening the emotional center of the game

Tasks:
- keep the activation flow multi-stage
- make the hold-transfer feel physical and readable
- add stronger visual payoff for the awakening moment
- prepare later branches for failed activation / partial awakening

Done when:
- the player remembers the activation moment
- awakening feels like a real system event, not a menu click

### 4. Phaser Scene Layer

Goal:
- keep the station view alive and readable without overbuilding it

Tasks:
- improve scene motion and emphasis on selected modules
- make event states visually obvious
- keep the overlay readable on mobile
- reserve room for later action scenes without redesign

Done when:
- the scene feels like a command center
- the player can read status at a glance

### 5. Future Systems

Goal:
- keep the architecture ready for the long game

Planned later:
- trapped states / ever zones
- hidden true-ending path
- module specializations
- co-op / multiplayer world map
- clan / society layer
- cross-game Plizio rewards
- adaptive player modeling

## Near-Term Next Steps

1. Add one more chainable incident that can branch into a long-running state scar.
2. Add one more module-specific action path, not just generic repair/scavenge.
3. Add one scene-level signal for the current event chain stage.
4. Add one failure or partial-success branch for activation.
5. Keep the first slice calm; do not widen the system before the current core is solid.

## Agent-Friendly Slices

### Slice A: Sim Expansion

Scope:
- `lib/gravitas/sim/*`

Task:
- add or refine engine helpers without touching the UI

Good output:
- clearer transitions
- more durable consequences
- one new chain or trap mechanic

### Slice B: Scene Polish

Scope:
- `components/gravitas/*`
- `lib/gravitas/phaser/*`

Task:
- improve readability and feedback in the station view

Good output:
- better module emphasis
- clearer event highlighting
- cleaner mobile presentation

### Slice C: UI / Flow Polish

Scope:
- `app/gravitas/page.tsx`

Task:
- tighten copy, action ordering, and activation flow presentation

Good output:
- fewer words
- stronger hierarchy
- better “holding power” on the activation panel

### Slice D: Future Content Scaffold

Scope:
- root docs only

Task:
- write future-facing docs for hidden states, multiplayer, and meta layers

Good output:
- the next work package is ready before code starts

## Guardrails

- Do not turn Gravitas into a full multiplayer rewrite yet.
- Do not widen the system before the current event loop is stable.
- Prefer reusable engine layers over one-off page logic.
- Keep the first slice calm and strategic.

