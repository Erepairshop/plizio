# English Test — Country-Specific Implementation Plan

## Jelenlegi állapot
- Mind a 4 ország (US, UK, AU, CA) **teljesen azonos** — ugyanaz a tananyag, kérdések, osztályzás
- `getEnglishQuestions(grade, subtopicIds, count)` — nincs country code paraméter
- `calculateUSGrade(pct, _countryCode)` — a countryCode **figyelmen kívül van hagyva**
- Generátorok: `(seed?: number)` — nincs country code

---

## Implementációs sorrend

### Step 1: Osztályzási skálák (nincs függőség)
**Fájlok:** `lib/englishCurriculum.ts`, `app/englishtest/page.tsx`

- `calculateUSGrade` → `calculateEnglishGrade` átnevezés + country logika:
  - **US:** A/B/C/D/F (90/80/70/60%)
  - **UK:** GCSE 9-1 skála (95/87/80/72/64/56/47/38%)
  - **AU:** A-E (85/70/55/40%)
  - **CA:** A+/A/B+/B/C+/C/D/F (95/87/80/73/67/60/50%)
- `countries[]` sub leírások frissítése (pl. UK: "Grade 9–1 (GCSE)")
- **Kockázat:** Nulla — izolált függvény

### Step 2: Country code átvezetés (B, C, D előfeltétele)
**Fájlok:** `lib/languageTestTypes.ts`, `app/deutschtest/page.tsx`, `lib/englishCurriculum.ts`

- `LanguageTestEngineConfig.getQuestions` signature: + opcionális 4. param `countryCode?: string`
- `buildTest()` line 604: `config.getQuestions(g, [sid], 20, country)`
- `getEnglishQuestions()` signature: + opcionális 4. param `countryCode = "US"`
- **Kockázat:** Alacsony — opcionális param, meglévő hívók nem törnek el

### Step 3: Helyesírási variánsok (Step 2-re épül)
**Fájlok:** `lib/englishGenerators.ts`, `lib/englishCurriculum.ts`

Új adat:
```
US: color, favorite, realize, organize, center, theater, traveled, defense, catalog, gray
UK: colour, favourite, realise, organise, centre, theatre, travelled, defence, catalogue, grey
AU: = UK
CA: colour DE realize (mix)
```

- `SPELLING_VARIANTS` adattábla (15+ szópár)
- Új subtopic: `spelling_variants_g4` – `spelling_variants_g8`
- Generátorok: MCQ + typing kérdések, country-aware
- **Kockázat:** Közepes — generátor signature bővítés

### Step 4: Szókincs variánsok (Step 2-re épül, Step 3-mal párhuzamos)
**Fájlok:** `lib/englishGenerators.ts`, `lib/englishCurriculum.ts`

Új adat:
```
US: sidewalk, cookie, trunk, apartment, elevator, gas, french fries, trash, candy, eraser, soccer, vacation, math, diaper, store
UK: pavement, biscuit, boot, flat, lift, petrol, chips, rubbish, sweets, rubber, football, holiday, maths, nappy, shop
AU: footpath, bikkie, boot, flat, lift, petrol, chips, rubbish, lollies, rubber, soccer, holiday, maths, nappy, shop
CA: sidewalk, cookie, trunk, apartment, elevator, gas, fries, garbage, candy, eraser, soccer, vacation, math, diaper, store
```

- `VOCAB_VARIANTS` adattábla (15+ szópár + hint)
- Új subtopic: `vocab_variants_g3` – `vocab_variants_g8`
- Kérdéstípusok: "In British English, what is a 'sidewalk' called?" (MCQ) + typing
- **Kockázat:** Alacsony — tisztán additív

### Step 5: Dátum/mértékegység formátumok (Step 2-re épül, Step 3-4-gyel párhuzamos)
**Fájlok:** `lib/englishGenerators.ts`, `lib/englishCurriculum.ts`

- US: imperial (inch, foot, pound, gallon, Fahrenheit), MM/DD/YYYY
- UK/AU/CA: metric (cm, metre, kg, litre, Celsius), DD/MM/YYYY
- Mértékegység szavak helyesírása: US "meter/liter" vs UK/AU/CA "metre/litre"
- Új subtopicok: `measurements_g3_variants`, `date_format_g4_variants`, `temperature_units_g5`
- **Kockázat:** Alacsony — additív

---

## Érintett fájlok összefoglaló

| Fájl | Változás |
|------|---------|
| `app/englishtest/page.tsx` | countries[].sub, import átnevezés, calculateMark |
| `lib/englishCurriculum.ts` | calculateEnglishGrade, getEnglishQuestions +countryCode, új subtopicok |
| `lib/languageTestTypes.ts` | getQuestions interface +countryCode? |
| `app/deutschtest/page.tsx` | line 604: country átadás |
| `lib/englishGenerators.ts` | SPELLING_VARIANTS, VOCAB_VARIANTS, MEASUREMENT_SYSTEMS, DATE_FORMATS + új generátorok |
| `lib/englishVisualGenerators.ts` | Nem kell változtatni (nyelvtan univerzális) |

---

## Döntési pontok (implementáció előtt)

1. **Variáns kérdés keretezés:** Más országok szavait is kérdezzük ("In British English..."), vagy csak a saját ország szókincse legyen helyes? → Javasolt: más országok szavait IS kérdezzük (tanulságos)
2. **UK osztályzás grade-függő:** G1-5: A-E (primary), G6-8: GCSE 9-1 → vagy egységesen 9-1?
3. **Új vs módosított subtopicok:** Country-specifikus tartalom ÚJ subtopicokban (spelling_variants, vocab_variants), nem a meglévőkben → opt-in választás

## Token becslés
- Step 1: ~30K
- Step 2: ~40K
- Step 3: ~150K
- Step 4: ~120K
- Step 5: ~80K
- Build/test: ~50K
- **Összesen: ~470K token**
