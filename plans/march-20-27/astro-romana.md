# AstroRomână — Terv

## Architektúra összefoglaló

**AstroDeutsch = AstroMath másolata + nyelvi tartalom.** Nagyon tiszta minta, könnyen ismételhető.

### 3 réteg:

**Réteg 1 — Teljesen közös (0 változtatás):**
- `app/astromath/games/` — OrbitQuiz, BlackHole, StarMatch, SpeedRound, RocketLaunch
- `app/astromath/IslandCompleteAnimation.tsx`, `RocketTransition.tsx`
- `app/astromath/games/translations.ts` — megosztott UI címkék

**Réteg 2 — Nyelv-specifikus játékmotorok:**
- AstroDeutsch-ben: `GapFill`, `CategoryRush`, `WordBlitz`, `SpellRace`, `SentenceScramble`, `LetterExplorer`, `ArticleExplorer`, `NounExplorer`, `VerbExplorer`, `DeutschVisualGame`
- Ezek közül az MCQ-alapúak (OrbitQuiz, StarMatch, SpeedRound) **már működnek** román kérdésekkel is
- A nyelv-specifikus explorer-ek román párhuzamot igényelnek

**Réteg 3 — Grade-specifikus fájlok:**
- Minden grade = 1 page.tsx (~900 sor) + 1 lib fájl (~170-370 sor) + 1 islands SVG
- Ezek mechanikus másolatok egymásról — csak az importok és island definíciók különböznek

---

## Kérdés bridge

```ts
// DeutschMCQ és CurriculumMCQ (román) AZONOS shape:
// { type:"mcq", topic, subtopic, question, options: string[], correct: number }
function romanianToMathQuestion(rq: CurriculumMCQ): MathQuestion {
  return { question, correctAnswer: options[correct], options, topic, isWordProblem: false, hasStringOptions: true }
}
```
→ Triviális másolat a `deutschToMathQuestion`-ről.

---

## Meglévő román tartalom

| Grade | Curriculum | Generátor | Mélység |
|---|---|---|---|
| Clasa 1 | `romanianCurriculum.ts` C1 | `romanianGenerators.ts` | 35 subtopic, ~2900 sor |
| Clasa 2 | `romanianCurriculum.ts` C2 | `romanianGeneratorsC2.ts` | 28 subtopic, ~750 sor |
| Clasa 3 | `romanianCurriculum.ts` C3 | `romanianGeneratorsC3.ts` | 23 subtopic, ~615 sor |
| Clasa 4-8 | **NEM LÉTEZIK** | **NEM LÉTEZIK** | — |

**→ AstroRomână CSAK Clasa 1-3-ra építhető meglévő tartalommal.**

---

## Létrehozandó fájlok

| Fájl | ~Sorok | Alapja |
|---|---|---|
| `lib/astroRomana.ts` | ~375 | `astroDeutsch.ts` másolat, C1 islands |
| `lib/astroRomana2.ts` | ~170 | `astroDeutsch2.ts`, C2 islands |
| `lib/astroRomana3.ts` | ~165 | `astroDeutsch3.ts`, C3 islands |
| `app/astroromana/page.tsx` | ~140 | Hub (3 grade, nem 8) |
| `app/astroromana/layout.tsx` | ~15 | SEO |
| `app/astroromana/planets.tsx` | ~80 | 3 bolygó SVG |
| `app/astroromana/islands.tsx` | ~120 | C1 island SVG-k |
| `app/astroromana/islands-c2.tsx` | ~120 | C2 island SVG-k |
| `app/astroromana/islands-c3.tsx` | ~120 | C3 island SVG-k |
| `app/astroromana/1/page.tsx` | ~900 | `astrodeutsch/1/page.tsx` másolat |
| `app/astroromana/1/layout.tsx` | ~15 | SEO |
| `app/astroromana/2/page.tsx` | ~850 | `astrodeutsch/2/page.tsx` másolat |
| `app/astroromana/2/layout.tsx` | ~15 | SEO |
| `app/astroromana/3/page.tsx` | ~850 | `astrodeutsch/3/page.tsx` másolat |
| `app/astroromana/3/layout.tsx` | ~15 | SEO |

---

## Javasolt MVP megközelítés

**Clasa 1-3, CSAK MCQ-alapú missziók** (OrbitQuiz, StarMatch, SpeedRound) — egyetlen nyelv-specifikus explorer komponens sem kell. A meglévő román generátorokból jönnek a kérdések.

| Fázis | Komplexitás | Leírás |
|---|---|---|
| Lib fájlok (3 grade island def) | Közepes | Copy-adapt, 9 island × 3 grade, román topic key-ek |
| Hub + grade page.tsx | Alacsony | Mechanikus másolat + átnevezés |
| MCQ missziók | Triviális | Már működik román kérdésekkel |
| Román explorer-ek (C1) | **Magas** | 5-8 új komponens (LetterExplorerRO, SyllableExplorerRO stb.) |
| C4-C8 tartalom | **Nagyon magas** | Teljes új curriculum kell |

---

## MVP vs Teljes

**MVP (meglévő tartalommal):** ~400-600K token
- C1-C3, MCQ-only missziók
- Nem kell explorer komponens
- Meglévő generátorok elégségesek

**Teljes (explorer-ekkel):** ~800K-1.2M token
- C1-C3 nyelv-specifikus explorer-ek (LetterExplorer, SyllableExplorer, stb.)
- Vizuális játékok (RomanianVisualGame wrapper)

**C4-C8 bővítés:** Külön projekt — először a romanianGeneratorsC4-C8 fájlokat kell megírni

---

## Ideális hosszútávú cél: Közös AstroLanguage motor

Ahogy a LanguageTestEngine közös motor a MathTest/DeutschTest/EnglishTest-nek, úgy kellene egy **AstroLanguageEngine** is:

```
app/astro/engine/AstroPage.tsx     ← közös page motor
app/astro/engine/AstroHub.tsx      ← közös hub motor
app/astrodeutsch/config.ts         ← német konfig + island definíciók
app/astroromana/config.ts          ← román konfig + island definíciók
app/astroenglish/config.ts         ← angol konfig (ha kell)
```

Ez a refaktor ~300-400K token lenne, de utána bármely új nyelv ~100K token alatt ráhúzható.
