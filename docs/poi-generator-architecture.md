# POI HTML generator architecture

Last reviewed: 2026-07-15

This document is the durable technical map of `scripts/generate-poi-html.mts`.
Read it before changing POI page content, sidecars, internal links, or the POI
deploy pipeline. Line numbers are orientation points and can drift; function
names and data paths are the stable references.

## Purpose and ownership

- Main generator: `scripts/generate-poi-html.mts`
- Output: static POI HTML pages under `out/<lang>/<country>/<region>/<poi>/`
- Supported primary languages: `de`, `hu`, `en`, `ro`
- Additional POI languages can exist, but navigation falls back to English
  where no translated landing page is generated.
- The generator writes `public/data/_poi-url-index.json` from pages it actually
  emits. This index is the authoritative source for internal POI links.
- Full generation replaces the URL index; delta generation merges into it.

## Data flow

1. `loadFullPois()` loads POIs from the generator's explicit import list.
2. Source POI fields are combined with render-time sidecar data.
3. Canonical paths are built from the POI parent/country/region hierarchy.
4. Localized static HTML and structured metadata are rendered.
5. Generated pages are written to `out/`.
6. The authoritative POI URL index is updated from successfully emitted pages.

Important: the generator import list and `_all_poi_sources.generated` serve
different pipelines. A POI present only in the latter can enter sitemap/search
data without getting an HTML page. New POI source files must be added to both
systems and committed.

## Page composition

The current POI page is assembled roughly in this order:

1. Breadcrumb, H1, trust strip, POI type tag, pronunciation audio
2. Statistics chips and page tabs
3. Hero image, optional Street View, bad-image admin control
4. Hero-side city information card or weather card
5. Marine information where applicable
6. Official links, yearly highlights/events, local news
7. Universal visit information: daylight, sunrise, sunset, golden hour, season
8. `descriptionAdvanced` lead content
9. Postcard call to action
10. Plizio tip and key facts
11. Monthly climate table and recommended period
12. Webcam where available
13. Structured practical information (`pinfo`)
14. Geography/history, facts and "Did you know" content
15. Nearby constellation map
16. PlizioGo route planner and optional daily itinerary
17. Local sights and nearby sights
18. FAQ
19. Map/hub links, explore section, related places and mobile actions

Conditional sections are omitted when their source data is absent or the POI
type is not eligible.

## Main modules

### Practical information

- Function: `renderPracticalInfo()` (around line 1697)
- Source: `public/data/poi-practical/<poi-id>.json`
- New `pinfo` schema is type-aware:
  - nature: access, season, terrain, gear, parking, safety, duration
  - heritage: visiting, hours hint, photography, duration, combinations,
    accessibility, tip
  - wildlife: season, time of day, rules, gear, access, patience tip
  - economic: role, visitability, viewpoint, local products, active period,
    nearby combination
- The legacy schema can also render address, opening hours, entrance fee,
  website, public transport, parking, accessibility, photo rules, best time and
  audio guide.

Do not add a second generic practical prose section. Correct or expand the
structured pinfo sidecar instead.

### City information card

- Function: `renderInfoCard()` (around line 1928)
- Eligibility: city-like POIs and state capitals
- Source: `public/data/city-tips/<poi-id>.json`, plus live public APIs
- Contains:
  - collapsible city card
  - five-day Open-Meteo forecast
  - public-holiday warning through Nager.Date
  - nearby radius/filter controls
  - general tips, gastronomy, shopping and quiet-place picks
- Analytics event: `infocard_open`
- Its rendered content is in the DOM and is indexable.

When this card exists, it replaces the standalone weather and standalone nearby
radius controls.

### Universal route planner

- Eligibility helper: `hasRoutePlanner()` (around line 2017)
- It is available for every POI with valid coordinates.
- Destination defaults to the current POI.
- Supports car and motorhome modes, origin, via point, overnight stops,
  campsite/aire facilities, detour limits and country advisories.
- Produces route choices and a Google Maps navigation route.

Do not add a separate generic "how to get there" widget without checking this
module first.

### Daily itinerary

- Function: `renderCityItinerary()` (around line 2109)
- It is rendered only when an itinerary sidecar exists for the POI.
- Supports sunny/rainy/winter variants and walking, bicycle, car and transit.
- Supports timed stops, visit durations, hop distance/time, local tips,
  gastronomy, quiet and shopping picks, warnings, language tips, cost estimate,
  navigation buttons, ICS export and a stop checklist.

The itinerary is currently city-oriented. Nature POIs that need deeper content
should preferably gain a compatible nature/day-route model rather than another
large free-text section.

### PlizioGo

- Function: `renderPlizioGo()` (around line 2457)
- Wraps the universal destination route planner and optional daily itinerary.
- Tabs are shown only when both parts are available.
- If no itinerary data exists, the POI still gets the destination planner.

### Other structured modules

- `renderKeyFacts()` (around line 1009): compact key facts
- `renderPlizioTip()` (around line 1360): contextual recommendation
- `renderVisitInfo()` (around line 2480): daylight and seasonal information
- yearly highlights/events: `public/data/poi-yearly-highlights.json`
- practical data: `public/data/poi-practical/<poi-id>.json`
- city tips: `public/data/city-tips/<poi-id>.json`
- local news: `public/data/poi-news/<poi-id>.json`
- sights: `public/data/sights/<poi-id>.json`
- advanced description: source `descriptionAdvanced`, with tier sidecar fallback
- additional global datasets provide webcams and official links

## Content-depth policy

The page already has broad module coverage. "Deepen the content" should usually
mean improving structured coverage and accuracy, not appending generic prose.

Preferred order:

1. Correct stale or inaccurate pinfo and city-info values using primary sources.
2. Curate sights and remove weak, irrelevant or duplicate nearby results.
3. Add a verified daily itinerary where the POI benefits from one.
4. Add verified recurring/current events with recurrence clearly labelled.
5. Fill missing official links, FAQ, news and webcam data where useful.
6. Add a new module only when the information does not fit an existing model.

Prioritization should combine module-coverage gaps with GSC impressions. Pages
already receiving impressions should be repaired/enriched before bulk generic
content is generated.

## Known examples from the 2026-07 review

- Sila National Park already has advanced description, facts, pinfo and sights.
  Its pinfo covers access, season, terrain, gear, parking, safety and duration.
  The meaningful gap is a verified nature itinerary or route cards with actual
  trail, distance, difficulty, duration and starting point data.
- Wieliczka already has pinfo and city tips, but some values require factual
  correction and its sights need curation. It has no daily itinerary sidecar.
- The Iceland country page is a thin country hub, not a generated POI page. Its
  enrichment belongs to the country-hub pipeline, not this POI generator.

## Change checklist

1. Determine whether the need fits pinfo, city tips, itinerary, events, sights,
   FAQ, news, official links or an existing source POI field.
2. Back up mutable TS/JSON data before bulk changes.
3. Keep sights/population enrichment in render-time sidecars; do not mutate POI
   source TS for those concerns.
4. For a new POI source, update the explicit generator imports and
   `_all_poi_sources`, then stage the new file.
5. Use `_poi-url-index.json` for internal links; do not hand-build POI links in
   hub generators.
6. Run focused generator/preflight checks first. Do not run a full build or
   deploy unless explicitly requested.
7. Preserve deploy order: POI generation must precede hub generators that
   consume the authoritative URL index.
