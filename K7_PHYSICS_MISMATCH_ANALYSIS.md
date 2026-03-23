# K7 Physics Curriculum vs Generator Keys — Mismatch Analysis

**Generated:** 2026-03-23
**Status:** Complete audit of 28 curriculum subtopics vs. 4 generator files

---

## Executive Summary

- **Total curriculum subtopics:** 28
- **Correctly mapped:** 5 (18%)
- **Partially mapped (wrong key):** 3 (11%)
- **Missing generators:** 20 (71%)
- **Orphaned generators:** 1 (bernoulli)
- **Unintegrated generator files:** 1 (magnetism — not in curriculum!)

### Critical Impact
Students selecting ~71% of topics will receive **EMPTY questions** due to missing generators. The curriculum structure is incomplete, and the generator files are not properly aligned.

---

## Curriculum Structure: 28 Subtopics across 6 Themes

### Theme 1: MECHANICS (🚀 Red) — 5 subtopics
1. **speed_velocity** → Speed & Velocity
2. **acceleration** → Acceleration
3. **newton_first** → Newton's 1st Law
4. **newton_second** → Newton's 2nd Law
5. **newton_third** → Newton's 3rd Law

### Theme 2: WORK & POWER (💪 Orange) — 5 subtopics
6. **work** → Work
7. **power** → Power
8. **kinetic_energy_calc** → Kinetic Energy
9. **potential_energy_calc** → Potential Energy
10. **mechanical_advantage** → Mechanical Advantage

### Theme 3: OPTICS (🔍 Blue) — 5 subtopics
11. **lenses_convex** → Convex Lenses
12. **lenses_concave** → Concave Lenses
13. **image_formation** → Image Formation
14. **eye_optics** → The Eye
15. **optical_instruments** → Optical Instruments

### Theme 4: THERMAL (🌡️ Red-Orange) — 4 subtopics
16. **thermal_expansion** → Thermal Expansion
17. **specific_heat** → Specific Heat
18. **phase_changes** → Phase Changes
19. **heat_engines** → Heat Engines

### Theme 5: WAVES (🌊 Purple) — 4 subtopics
20. **wave_equation** → Wave Equation
21. **electromagnetic_spectrum** → EM Spectrum
22. **infrared_uv** → Infrared & UV
23. **wave_interference** → Interference

### Theme 6: EARTH & SPACE (🌍 Green) — 5 subtopics
24. **gravity_universal** → Universal Gravitation
25. **solar_system** → Solar System
26. **orbits** → Orbits
27. **seasons_tides** → Seasons & Tides
28. **space_exploration** → Space Exploration

---

## Generator Files: What's Actually Implemented

### File 1: `physikGeneratorsK7_forces.ts`
**Generator keys (flat structure):**
- `basics`, `basics_mcq`, `basics_typing`
- `newton`, `newton_mcq`, `newton_typing`
- `friction`, `friction_mcq`, `friction_typing`
- `speed`, `speed_mcq`, `speed_typing`
- `bernoulli`, `bernoulli_mcq`, `bernoulli_typing`

**What it covers:**
- ✅ Basic forces, Newton's laws, friction, speed/velocity/acceleration, Bernoulli's principle

### File 2: `physikGeneratorsK7_magnetism.ts`
**Generator keys (NESTED structure):**
```
{
  basics: { combined, _mcq, _typing },
  earth: { combined, _mcq, _typing },
  electromagnets: { combined, _mcq, _typing },
  induction: { combined, _mcq, _typing }
}
```

**What it covers:**
- ✅ Magnetic field basics, Earth's magnetism, electromagnets, induction
- ❌ **PROBLEM:** Not integrated into curriculum! No magnetism theme exists.

### File 3: `physikGeneratorsK7_optics.ts`
**Generator keys (flat structure):**
- `light`, `light_mcq`, `light_typing`
- `reflection`, `reflection_mcq`, `reflection_typing`
- `refraction`, `refraction_mcq`, `refraction_typing`

**What it covers:**
- ✅ Light, reflection, refraction
- ❌ Missing: lenses, image formation, eye optics, optical instruments

### File 4: `physikGeneratorsK7_thermo.ts`
**Generator keys (NESTED structure):**
```
{
  temperature: { combined, _mcq, _typing },
  heat_transfer: { combined, _mcq, _typing },
  expansion: { combined, _mcq, _typing },
  states: { combined, _mcq, _typing },
  specific_heat: { combined, _mcq, _typing }
}
```

**What it covers:**
- ✅ Temperature, heat transfer, expansion, phase changes, specific heat
- ❌ Missing: heat engines

---

## Critical Mismatches

### Problem 1: Forces Generator Naming Doesn't Match Curriculum IDs

| Curriculum Subtopic | Expected Key | Actual Key | Status |
|---|---|---|---|
| `speed_velocity` | `speed_velocity` | `speed` | ⚠️ Mismatch |
| `acceleration` | `acceleration` | `speed` | ⚠️ Wrong (same as velocity!) |

The `getK7Questions()` function looks for keys matching subtopic IDs:
```js
for (const themeGens of Object.values(generators)) {
  if (themeGens[sub.id]) { generatorFn = themeGens[sub.id]; break; }
}
```

When searching for `sub.id = "speed_velocity"`, it finds **nothing** because the key is `"speed"`.

### Problem 2: Magnetism File Structure Mismatch

**Magnetism uses NESTED structure:**
```js
K7_MAGNETISM_GENERATORS = {
  basics: {
    combined: (...) => [],
    _mcq: (...) => [],
    _typing: (...) => []
  }
}
```

**Forces/Optics/Thermo use FLAT structure:**
```js
K7_FORCES_GENERATORS = {
  basics: (lang, seed) => [...],
  basics_mcq: (lang, seed) => [...],
  basics_typing: (lang, seed) => [...]
}
```

**Result:** `getK7Questions()` expects flat keys like `"basics_mcq"`, but magnetism has `generators.basics._mcq`. The magnetism generators **will never be found** and will always return empty questions.

### Problem 3: Magnetism Not in Curriculum

The magnetism generator file is **completely orphaned**:
- ❌ No `theme.id = "magnetism"` in `K7_CURRICULUM`
- ❌ No subtopics for magnetic phenomena
- ❌ Generators will never be called

All 4 magnetism topics need to be added to the curriculum structure.

### Problem 4: Bernoulli Generator Has No Matching Subtopic

`bernoulli` (+ `bernoulli_mcq`, `bernoulli_typing`) exists but:
- ❌ No curriculum subtopic with ID `"bernoulli"`
- ❌ Generator is orphaned — will never be called
- ⚠️ **Could be:** Alias for `mechanical_advantage` (since Bernoulli is about energy/work efficiency)

### Problem 5: 20 Subtopics Have No Generators

| Theme | Missing Generators | Count |
|---|---|---|
| Work & Power | `work`, `power`, `kinetic_energy_calc`, `potential_energy_calc`, `mechanical_advantage` | 5 |
| Optics | `lenses_convex`, `lenses_concave`, `image_formation`, `eye_optics`, `optical_instruments` | 5 |
| Waves | `wave_equation`, `electromagnetic_spectrum`, `infrared_uv`, `wave_interference` | 4 |
| Earth & Space | `gravity_universal`, `solar_system`, `orbits`, `seasons_tides`, `space_exploration` | 5 |
| Thermal | `heat_engines` | 1 |

Students selecting any of these 20 topics will see **zero questions** (empty `questions: []` fallback from curriculum definition).

---

## Full Mapping Table: All 28 Subtopics vs Generator Status

| Theme | Subtopic ID | Expected Key | Actual Key | Status |
|---|---|---|---|---|
| **MECHANICS** | speed_velocity | speed_velocity | speed | ⚠️ Mismatch |
| | acceleration | acceleration | speed | ⚠️ Wrong |
| | newton_first | newton_first | newton | ✅ Match |
| | newton_second | newton_second | newton | ✅ Match |
| | newton_third | newton_third | newton | ✅ Match |
| **WORK & POWER** | work | work | ❌ NONE | ❌ Missing |
| | power | power | ❌ NONE | ❌ Missing |
| | kinetic_energy_calc | kinetic_energy_calc | ❌ NONE | ❌ Missing |
| | potential_energy_calc | potential_energy_calc | ❌ NONE | ❌ Missing |
| | mechanical_advantage | mechanical_advantage | ❌ NONE | ❌ Missing |
| **OPTICS** | lenses_convex | lenses_convex | ❌ NONE | ❌ Missing |
| | lenses_concave | lenses_concave | ❌ NONE | ❌ Missing |
| | image_formation | image_formation | ❌ NONE | ❌ Missing |
| | eye_optics | eye_optics | ❌ NONE | ❌ Missing |
| | optical_instruments | optical_instruments | ❌ NONE | ❌ Missing |
| **THERMAL** | thermal_expansion | thermal_expansion | expansion | ✅ Match |
| | specific_heat | specific_heat | specific_heat | ✅ Match |
| | phase_changes | phase_changes | states | ⚠️ Mismatch |
| | heat_engines | heat_engines | ❌ NONE | ❌ Missing |
| **WAVES** | wave_equation | wave_equation | ❌ NONE | ❌ Missing |
| | electromagnetic_spectrum | electromagnetic_spectrum | ❌ NONE | ❌ Missing |
| | infrared_uv | infrared_uv | ❌ NONE | ❌ Missing |
| | wave_interference | wave_interference | ❌ NONE | ❌ Missing |
| **EARTH & SPACE** | gravity_universal | gravity_universal | ❌ NONE | ❌ Missing |
| | solar_system | solar_system | ❌ NONE | ❌ Missing |
| | orbits | orbits | ❌ NONE | ❌ Missing |
| | seasons_tides | seasons_tides | ❌ NONE | ❌ Missing |
| | space_exploration | space_exploration | ❌ NONE | ❌ Missing |

**Summary:** 5 correct, 3 mismatched, 20 missing = **29% working, 71% broken**

---

## How getK7Questions() Fails

The function searches for generators like this:

```typescript
for (const sub of theme.subtopics) {
  if (selectedSubtopicIds.includes(sub.id)) {
    // MCQ generátor
    let generatorFn: ((seed?: number) => PhysikQuestion[]) | undefined;
    for (const themeGens of Object.values(generators)) {
      if (themeGens[sub.id]) {
        generatorFn = themeGens[sub.id];  // ← Looking for sub.id!
        break;
      }
    }
    if (generatorFn) {
      pool.push(...generatorFn(...));  // ← Uses generator
    } else {
      pool.push(...sub.questions);     // ← Falls back to empty [] !!!
    }
  }
}
```

**When student selects `work`:**
1. Loop finds subtopic with `sub.id = "work"`
2. Loop checks all generators: `forces`, `magnetism`, `optics`, `thermo`
3. No generator has key `"work"` → `generatorFn = undefined`
4. Falls back to `sub.questions` which is `[]` (empty!)
5. Student gets 0 questions

---

## Recommended Fixes (Priority Order)

### Tier 1: CRITICAL (Fix broken generators)

#### Fix 1: Magnetism Generator Structure
**File:** `lib/physikGeneratorsK7_magnetism.ts`

Convert nested structure to flat:
```js
// BEFORE (nested — broken):
export const K7_MAGNETISM_GENERATORS = {
  basics: { combined, _mcq, _typing }
}

// AFTER (flat — matches other files):
export const K7_MAGNETISM_GENERATORS = {
  basics: (lang, seed) => [...generateBasicsMCQ(...), ...generateBasicsTyping(...)],
  basics_mcq: (lang, seed) => generateBasicsMCQ(...),
  basics_typing: (lang, seed) => generateBasicsTyping(...),
  // ... repeat for earth, electromagnets, induction
}
```

#### Fix 2: Add Magnetism to Curriculum
**File:** `lib/physikCurriculum7.ts`

Add new theme after earth_space:
```typescript
{
  id: "magnetism",
  name: "Magnetismus",
  icon: "🧲",
  color: "#C084FC",
  subtopics: [
    { id: "magnetic_basics", name: { de: "Magnetische Grundlagen", en: "Magnetic Basics", ... }, questions: [], hasGenerator: true },
    { id: "earth_magnetic", name: { de: "Erdmagnetfeld", en: "Earth's Magnetic Field", ... }, questions: [], hasGenerator: true },
    { id: "electromagnets", name: { de: "Elektromagnete", en: "Electromagnets", ... }, questions: [], hasGenerator: true },
    { id: "electromagnetic_induction", name: { de: "Elektromagnetische Induktion", en: "EM Induction", ... }, questions: [], hasGenerator: true },
  ],
}
```

Then update generator keys to match:
```js
// In magnetism generators:
magnetic_basics: (lang, seed) => [...generateBasicsMCQ(...), ...generateBasicsTyping(...)],
earth_magnetic: (lang, seed) => [...generateEarthMCQ(...), ...generateEarthTyping(...)],
electromagnets: (lang, seed) => [...generateElectromagnetsMCQ(...), ...generateElectromagnetsTyping(...)],
electromagnetic_induction: (lang, seed) => [...generateInductionMCQ(...), ...generateInductionTyping(...)],
// + _mcq/_typing variants
```

#### Fix 3: Rename Forces Generator Keys
**File:** `lib/physikGeneratorsK7_forces.ts`

Option A (Recommended): Create aliases
```js
const K7_FORCES_GENERATORS = {
  // Keep old names for compatibility
  basics: (lang, seed) => [...],
  basics_mcq: (lang, seed) => [...],
  basics_typing: (lang, seed) => [...],

  // NEW: Add renamed keys for curriculum match
  speed_velocity: (lang, seed) => [...generateSpeedMCQ(...), ...generateSpeedTyping(...)],
  speed_velocity_mcq: (lang, seed) => generateSpeedMCQ(...),
  speed_velocity_typing: (lang, seed) => generateSpeedTyping(...),

  acceleration: (lang, seed) => [...generateSpeedMCQ(...), ...generateSpeedTyping(...)],
  acceleration_mcq: (lang, seed) => generateSpeedMCQ(...),
  acceleration_typing: (lang, seed) => generateSpeedTyping(...),

  // ... rest of generators
}
```

Option B (Better): Split speed into velocity + acceleration generators (future refactor)

#### Fix 4: Map Thermal "states" to "phase_changes"
**File:** `lib/physikGeneratorsK7_thermo.ts`

Add alias in K7_THERMO_GENERATORS:
```js
export const K7_THERMO_GENERATORS = {
  // ... existing ...

  // NEW: Alias for curriculum subtopic ID
  phase_changes: (lang, seed) => [
    ...generateStatesMCQ(lang, seed),
    ...generateStatesTyping(lang, seed)
  ],
  phase_changes_mcq: (lang, seed) => generateStatesMCQ(lang, seed),
  phase_changes_typing: (lang, seed) => generateStatesTyping(lang, seed),
}
```

Also fix in THERMO_GENERATORS to use `states` consistently or rename internally.

#### Fix 5: Remove or Rename Bernoulli
**File:** `lib/physikGeneratorsK7_forces.ts`

Option A: Alias as mechanical_advantage
```js
export const K7_FORCES_GENERATORS = {
  // ... existing ...

  // Bernoulli Principle = Mechanical Advantage (energy/work efficiency)
  mechanical_advantage: (lang, seed) => [...generateBernoulliMCQ(...), ...generateBernoulliTyping(...)],
  mechanical_advantage_mcq: (lang, seed) => generateBernoulliMCQ(...),
  mechanical_advantage_typing: (lang, seed) => generateBernoulliTyping(...),
}
```

Option B: Keep bernoulli but add to curriculum (less preferred)

---

### Tier 2: HIGH PRIORITY (Create missing Work & Power + Optics)

#### Create 5 Work & Power Generators
**File:** `lib/physikGeneratorsK7_forces.ts` (expand)

Add new generator functions and export keys:
```js
function generateWorkMCQ(lang = "en", seed = 0): CurriculumMCQ[] { ... }
function generateWorkTyping(lang = "en", seed = 0): CurriculumTyping[] { ... }

function generatePowerMCQ(lang = "en", seed = 0): CurriculumMCQ[] { ... }
function generatePowerTyping(lang = "en", seed = 0): CurriculumTyping[] { ... }

function generateKineticEnergyMCQ(lang = "en", seed = 0): CurriculumMCQ[] { ... }
function generateKineticEnergyTyping(lang = "en", seed = 0): CurriculumTyping[] { ... }

function generatePotentialEnergyMCQ(lang = "en", seed = 0): CurriculumMCQ[] { ... }
function generatePotentialEnergyTyping(lang = "en", seed = 0): CurriculumTyping[] { ... }

function generateMechanicalAdvantageMCQ(lang = "en", seed = 0): CurriculumMCQ[] { ... }
function generateMechanicalAdvantageTyping(lang = "en", seed = 0): CurriculumTyping[] { ... }
```

Then add to K7_FORCES_GENERATORS:
```js
work: (lang, seed) => [...generateWorkMCQ(lang, seed), ...generateWorkTyping(lang, seed)],
work_mcq: (lang, seed) => generateWorkMCQ(lang, seed),
work_typing: (lang, seed) => generateWorkTyping(lang, seed),

// ... power, kinetic_energy_calc, potential_energy_calc, mechanical_advantage
```

#### Create 5 Optics Generators
**File:** `lib/physikGeneratorsK7_optics.ts` (expand)

Add generators for lenses, image formation, eye, instruments. Convert nested thermo pattern to flat.

---

### Tier 3: MEDIUM PRIORITY (Create missing Waves + Earth/Space)

#### Create 4 Waves Generators
**New File:** `lib/physikGeneratorsK7_waves.ts`

```js
function generateWaveEquationMCQ(lang = "en", seed = 0): CurriculumMCQ[] { ... }
function generateWaveEquationTyping(lang = "en", seed = 0): CurriculumTyping[] { ... }

function generateEMSpectrumMCQ(lang = "en", seed = 0): CurriculumMCQ[] { ... }
function generateEMSpectrumTyping(lang = "en", seed = 0): CurriculumTyping[] { ... }

function generateInfraredUVMCQ(lang = "en", seed = 0): CurriculumMCQ[] { ... }
function generateInfraredUVTyping(lang = "en", seed = 0): CurriculumTyping[] { ... }

function generateWaveInterferenceMCQ(lang = "en", seed = 0): CurriculumMCQ[] { ... }
function generateWaveInterferenceTyping(lang = "en", seed = 0): CurriculumTyping[] { ... }

export const K7_WAVES_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  wave_equation: (lang, seed) => [...generateWaveEquationMCQ(lang, seed), ...generateWaveEquationTyping(lang, seed)],
  wave_equation_mcq: (lang, seed) => generateWaveEquationMCQ(lang, seed),
  wave_equation_typing: (lang, seed) => generateWaveEquationTyping(lang, seed),

  // ... rest
}
```

#### Create 5 Earth & Space Generators
**New File:** `lib/physikGeneratorsK7_earth_space.ts`

Similar structure for: gravity_universal, solar_system, orbits, seasons_tides, space_exploration.

#### Create 1 Heat Engines Generator
**File:** `lib/physikGeneratorsK7_thermo.ts` (expand)

```js
function generateHeatEnginesMCQ(lang = "en", seed = 0): CurriculumMCQ[] { ... }
function generateHeatEnginesTyping(lang = "en", seed = 0): CurriculumTyping[] { ... }

// Add to K7_THERMO_GENERATORS:
heat_engines: { combined, _mcq, _typing },  // or convert to flat pattern
```

---

## Implementation Checklist

### Phase 1: Fix Existing (Days 1-2)
- [ ] Convert magnetism from nested to flat structure
- [ ] Add magnetism theme to K7_CURRICULUM
- [ ] Rename magnetism generator keys to match curriculum IDs
- [ ] Add speed_velocity alias to forces generators
- [ ] Add acceleration alias to forces generators
- [ ] Add phase_changes alias to thermo generators
- [ ] Rename/alias bernoulli as mechanical_advantage

### Phase 2: Create High-Priority (Days 3-5)
- [ ] Create 5 Work & Power generators (forces file)
- [ ] Create 5 Optics generators (optics file)

### Phase 3: Create Medium-Priority (Days 6-8)
- [ ] Create 4 Waves generators (new file)
- [ ] Create 5 Earth & Space generators (new file)
- [ ] Create 1 Heat Engines generator (thermo file)

### Phase 4: Integration & Testing (Days 9-10)
- [ ] Register all generator maps in physikTest7.ts (if it exists)
- [ ] Test getK7Questions() with each of 28 subtopics
- [ ] Verify no empty question arrays returned
- [ ] QA all topics produce 10+ questions minimum
- [ ] Check that typing questions are included where applicable

---

## Files to Create/Modify

| File | Action | Lines Added |
|---|---|---|
| `lib/physikCurriculum7.ts` | Add magnetism theme | ~15 |
| `lib/physikGeneratorsK7_forces.ts` | Add 5 Work&Power + aliases | ~200 |
| `lib/physikGeneratorsK7_magnetism.ts` | Flatten structure + rename keys | ~50 |
| `lib/physikGeneratorsK7_optics.ts` | Add 5 lens/eye/instrument generators | ~300 |
| `lib/physikGeneratorsK7_thermo.ts` | Add heat_engines + phase_changes alias | ~100 |
| `lib/physikGeneratorsK7_waves.ts` | **NEW** — 4 waves generators | ~400 |
| `lib/physikGeneratorsK7_earth_space.ts` | **NEW** — 5 Earth/Space generators | ~500 |

---

## Key Takeaway

The K7 physics curriculum is **structurally incomplete**:
- **28 subtopics defined** but only **5 with working generators**
- **71% of topics have no question source**
- **Generator files not aligned** with curriculum structure
- **Magnetism generators exist but are orphaned** (not in curriculum)

**Recommended approach:** Fix Tier 1 issues immediately (2 days), then incrementally add missing generators (4-5 days), for a total ~10-day project to achieve 100% curriculum coverage.
