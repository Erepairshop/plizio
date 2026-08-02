# Learn/Astro/Test deep audit - 2026-08-02

## Scope

The audit covered the live Learn shell, shared Astro engines, Test routes, visual renderers, subject pools, localization, responsive behavior, accessibility, scoring and persistence. Work was split into parallel batches of at most five agents and their patches were reviewed and validated together.

Sachkunde is intentionally live only for grades K1-K4. Internal K5-K8 material must not be exposed by the picker or direct Learn navigation.

## Shared fixes

1. Every visual block declared by `schoolTaskGenerator` is dispatched. Missing or unknown content shows a localized accessible state instead of a blank section.
2. M2/M3 empty pools and unknown game keys no longer produce blank screens. Empty rounds that could divide by zero or deadlock are rejected.
3. Final-answer double scoring was removed from shared fill-blank and MCQ views.
4. Learn language/progress storage is guarded for restricted or unavailable `localStorage`.
5. Delayed transitions in the shared Astro views use a cleanup-aware timeout registry. Shared round selection and shuffling are deterministic instead of render-time random.
6. `IslandMap` uses component-scoped SVG definition IDs, localized labels and cleanup-aware transitions.
7. Learn navigation enforces subject grade/language allowlists; Sachkunde K5-K8 stays hidden.
8. Narrow-screen header, language switcher, draft controls, print layout and icon-only controls received responsive/accessibility fixes.
9. Generic sentence visuals wrap long text and missing visuals expose localized fallbacks instead of technical component names.

## Subject fixes

- Math/Physics: missing visual dispatch and localization issues fixed; timer-dependent game behavior removed where it made exercises inaccessible.
- Biology/Geography/History/Sachkunde: empty routes, visual gaps and localization issues fixed in the live grades.
- English/Hungarian/Romanian/German: route wiring, content and timer issues fixed; Romanian grade routes now receive the selected grade consistently.
- AI/Informatics/CodeKids: explorer scoring and language handling fixed. All 109 AI/Informatics explorer pool files now pass parsing, duplicate-key and visible-label validation; no empty icon-grid label remains.

## Country content matrix

### History Test

- `DE`, `AT`, `CH`: shared German curriculum.
- `HU`: real Hungarian national history pool.
- `RO`: real Romanian national history pool.
- `US`: real United States history pool.
- `GB`: real British history pool.
- Unsupported country choices are not shown and no longer silently fall back to generic content.
- Country changes clear stale topic, question and answer state.

### Geography Test

- The current K5-K8 pool is a localized international curriculum, not a genuinely national curriculum.
- The UI therefore exposes one truthful curriculum variant per active language instead of pretending that separate countries have separate material.
- Translation-drill questions are filtered from geography assessment pools without removing ordinary Romanian text.

### Astro History

- Hungarian and Romanian UI languages use their national history pools.
- German and English remain truthful generic-history variants because the Astro route has no country selector.
- Country-specific islands, explorer questions, checkpoints and progress keys use the content variant identity.
- The former blank `geschichte-explore` country branch now renders a functional country explorer for K5-K8.

### Astro Geography

- Content is localized by language and progress/cache keys include the selected variant.
- It remains a shared international curriculum; there is no false country-specific claim.

## Data quality

- Country-history coverage: US 800 MCQ/400 typing, GB 800/400, HU 800/400, RO 793/400 across 40 topics each.
- Concrete Hungarian, Romanian and British factual/grammar defects were corrected.
- History audit currently reports zero errors and 22 low-priority warnings for intentionally silly/anachronistic distractors.
- AI/Informatics audit reports zero parse errors, duplicate keys, empty visible labels or token labels across 109 files.

## Validation

- `npx tsx scripts/audit-learn-routes.mts`: PASS.
- `npx tsx scripts/check-astromath.ts`: PASS for G1-G8.
- `node scripts/check-deutsch-pools.mjs`: PASS for K1-K8.
- `npx tsx scripts/audit-history-country-pools.mts`: PASS, zero errors.
- `npx tsx scripts/audit-geography-pools.mts`: PASS for every K5-K8 subtopic in DE/EN/HU/RO; five formerly empty K6 topics are now wired to relevant existing pools.
- `node scripts/audit-learn-ai-explorer.mjs`: PASS for 109 files.
- Focused TypeScript/TSX transpile: PASS for 175 changed Learn/Astro/Test files.
- Targeted `git diff --check`: PASS apart from repository line-ending notices.
- Full build and full typecheck were intentionally not run because this repository uses focused validation for the large codebase.
- Visual browser smoke remains blocked locally: both Turbopack and Webpack dev mode stall while compiling `/learn/`; Webpack produced no response within 75 seconds.

## Remaining work

1. Run a desktop/mobile visual smoke in a working preview or deployment environment.
2. If national Geography curricula are required later, add explicit country datasets before exposing a country selector.
3. The new country-history explorer is functional but visually simpler than the generic `DynamicExplorer`; enriching it is optional UI work, not a routing blocker.

## Wave 2 - language and science routes

The second five-worker wave covered AstroDeutsch, AstroRomana/Romanian Test,
AstroKemia/Kemia Test, AstroPhysik/Physik Test and AstroEnglish/English Test.

- AstroDeutsch K1-K8 map checkpoints and islands are keyboard accessible and expose localized state labels.
- AstroRomana K5-K8 now use the shared grade shell instead of four duplicated thousand-line pages. The shared shell retains explorer, M2/M3, checkpoint and progress behavior. Generated Romanian curriculum questions now supply formerly empty upper-grade islands and checkpoints.
- AstroKemia SVG defaults now match the live German route, repeated SVG instances use scoped gradient IDs, and K5-K8 structured data says `Klasse` rather than `Grade`.
- AstroPhysik K5-K8 generator calls use German consistently. K8 energy/communication gained missing curriculum aliases and typing rounds, and German slots no longer contain Hungarian text in that module.
- AstroEnglish K1-K2 generator-backed explorer quizzes are now resolved by subject and grade. Legacy pool keys are mapped explicitly, and the missing K2 antonym MCQ generator was implemented rather than redirected to unrelated content.

Wave 2 validation:

- `node scripts/check-english-pools.mjs`: PASS, 1080 topics.
- `npx tsx scripts/audit-astroenglish-generators.mts`: PASS, all 37 referenced generator keys resolve and return valid MCQs.
- `npx tsx scripts/audit-astroromana.mts`: PASS.
- `npx tsx scripts/audit-astrokemia.mts`: PASS.
- `npx tsx scripts/audit-astrophysik.mts`: PASS; remaining language-signal findings are warnings, not empty/broken generators.
- Focused TypeScript/TSX transpile: PASS for all Wave 2 runtime files.

Further deep-audit waves still need to cover the remaining route families, especially
AstroMagyar/Magyar Test and a final visual browser smoke of every live grade. Existing
shared Math, Biology, Geography, History, Sachkunde and AI/Informatics checks remain
green, but this does not replace route-by-route visual testing.

## Wave 3 - remaining core routes and shared runtime

The third persistent five-worker wave covered AstroMagyar/Magyar Test, AstroMath/Math
Test, AstroBiologie/BiologieTest, live AstroSachkunde/SachkundeTest K1-K4, and the
shared Learn/Astro/Test runtime and visual layer.

- Hungarian K1-K8 island/checkpoint generation now resolves curriculum aliases,
  filters generator output to valid MCQs and tops up narrow pools to complete flows.
- AstroMath validation now checks every live mission game type, M2/M3 game key,
  duplicate mission ID and required checkpoint. Grade landing-page CTAs preserve the
  selected grade through `?grade=N`.
- Biology K5-K8 narrow island wiring was expanded where it produced short flows, and
  generated MCQs now expose 2-4 distinct selectable options without fake distractors.
- Sachkunde remains intentionally live only for K1-K4. K2 array-generators and the K3
  traffic topic wiring were repaired; question adapters and K4 options were hardened.
- Shared engines reject malformed/unsupported rounds visibly instead of rendering dead
  screens. Quiz/explorer/test timers are cleanup-backed, storage access is guarded, and
  Visual Lab has dialog/Escape semantics and an empty-picker fallback.
- Shared quiz empty/close states are localized in DE/EN/HU/RO.

Wave 3 validation:

- `npx tsx scripts/audit-astromagyar.mts`: PASS, 8 grades, 72 islands, 24 checkpoints.
- `npx tsx scripts/check-astromath.ts`: PASS for G1-G8.
- `npx tsx scripts/audit-astrobiologie.mts`: PASS for K5-K8.
- `npx tsx scripts/audit-astrosachkunde.mts`: PASS for live K1-K4.
- `node scripts/audit-shared-learn-runtime.mjs`: PASS.
- `npx tsx scripts/audit-astro-game-rounds.mts`: PASS for all 13 subject registries.
- `npm run validate`: PASS, 210 quiz tasks.
- Focused TypeScript/TSX transpile: PASS for 31 Wave 3 files.

Remaining work is primarily a real-browser desktop/mobile visual smoke in a working
preview or deployment environment. Full repo typecheck remains impractical because it
times out or exhausts the Node heap; focused audits are the project policy.
