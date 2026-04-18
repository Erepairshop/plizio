# Codex érintett fájlok audit-listája (2026-04-18)

Codex három batch-et futtatott és tartalmi hibákat hagyott (rossz subject-keveredés, hiányzó ékezetek, placeholder szöveg mint "(de)", szóhibák, pattern-finish rossz nyelven).

## Javítandó batch-ek

### 1. Magyar K1-K4 (commit `f4539e5de2`)
**9 pool fájl** — `lib/astro/games/<gameKey>/magyar.ts`
- [x] tap-match/magyar.ts — **JAVÍTVA 2026-04-18 manuálisan**
- [x] pattern-finish/magyar.ts — **JAVÍTVA 2026-04-18 manuálisan** (német ragozás → magyar)
- [ ] bubble-choice/magyar.ts
- [ ] count-catch/magyar.ts
- [ ] drag-sort/magyar.ts
- [ ] memory-pairs/magyar.ts
- [ ] quick-tap/magyar.ts
- [ ] shape-spotter/magyar.ts
- [ ] sound-match/magyar.ts

### 2. English K1-K4 (commit `6dbe5ed634`)
**9 pool fájl** — `lib/astro/games/<gameKey>/english.ts`
- [ ] tap-match/english.ts — **English→German mismatch, kell: English→Hungarian**
- [ ] bubble-choice/english.ts
- [ ] count-catch/english.ts
- [ ] drag-sort/english.ts
- [ ] memory-pairs/english.ts
- [ ] pattern-finish/english.ts
- [ ] quick-tap/english.ts
- [ ] shape-spotter/english.ts
- [ ] sound-match/english.ts

### 3. Geographie K5-K8 (commit `76fad01fe4`)
**9 pool fájl** — `lib/astro/games/<gameKey>/geographie.ts`
- [ ] category-rush/geographie.ts
- [ ] timeline-slider/geographie.ts
- [ ] speed-match/geographie.ts
- [ ] true-false-blitz/geographie.ts
- [ ] word-chain/geographie.ts
- [ ] fill-blank/geographie.ts
- [ ] mcq4-explanation/geographie.ts
- [ ] sort-puzzle/geographie.ts
- [ ] gap-fill-story/geographie.ts

## Ismert hiba-típusok

1. **Subject-keveredés**: Magyar pool német szavakat tanít, English pool English→German párosítás
2. **Ékezethiány**: "haz" helyett "ház", "konyv" helyett "könyv"
3. **Placeholder szemét**: `"kutya (de)"` — a "(de)" suffix soha nem törlődött
4. **Pattern-finish nyelv-hibák**: magyar patterns-ben német conjugation (ich bin, du bist)
5. **Inconsistens round-szám**: romana/tap-match csak 2 round (minimum 3-5 kell)

## Javítási stratégia

**Manuális**: gyors fix a látható/tesztelt pool-okra (2 kész, 25 hátra)
**Gemini batch**: ha 429 elmúlik, egy nagy batch az összes 25 pool-ra újraíráshoz (subject-pontos tartalommal)
**Audit módszer**: minden pool legalább 1 round-jának megnyitása dev-ben, tartalmi check.

---

# Egyéb beépített hibák listája (nem Codex)

### A. Visual Lab subject hiányzik english/magyar/romana-nak (2026-04-18)

**Probléma**: `components/VisualLab.tsx` `VisualLabSubject` type csak sachkunde/geographie/geschichte/astromath/deutsch/informatika/physik/kemia/biologie. NINCS `english | magyar | romana`. Ezért 17 route (astromagyar 1-8, astroenglish 1-8, astroromana) hardcoded `subject="deutsch"`-öt passzol — emiatt német Visual Lab-ot tölt be magyar/angol/román órán.

**Érintett fájlok**:
- `app/astromagyar/{1,2,3,4,5,6,7,8}/page.tsx` — `<VisualLab subject="deutsch" ...>`
- `app/astroenglish/{1,2,3,4,5,6,7,8}/page.tsx` — ugyanaz
- `app/astroromana/AstroRomanaGradePage.tsx` — ugyanaz

**Javítási terv**:
1. `VisualLabSubject` type kiegészítése: `| "english" | "magyar" | "romana"`
2. `SUBJECT_GAMES` map-ben `english`, `magyar`, `romana` entry — mindegyikhez saját játéklista (esetleg kezdetben a deutsch-ból örökölt + subject-specifikus labels)
3. Subject-specifikus label-ek `getVisualLabLabel()` / i18n-ben
4. 17 route `subject="deutsch"` → megfelelő subject név
5. Játékok tartalmának lang-respektálása — ellenőrizni hogy kiírt szöveg (pl. WortWaechter, SatzbauSniper) nyelv-érzékenyen renderel-e vagy német-fix

**Komplexitás**: **közepes-nagy** (~1-2 óra, 17 route + type + games map bővítés + possible lang refactor). Nem kritikus, de UX hiba.

**Érintettség**: english/magyar/romana órákon Visual Lab-ot nyitó gyerek német tartalmat kap — zavaró.

---

### B. Visual Lab pool bővítés 10 round/grade-re (2026-04-18)

**Probléma**: A Visual Lab pool-ok vékonyak. Gyerek hamar újra-újra ugyanazokat a round-okat látja.

**Jelenlegi méret**:
| Pool fájl | Sorok | Round-ok |
|---|---|---|
| `lib/visualLab/pools/englishPool.ts` | 128 | ~2-3 meteorCatch (4-lang kész) |
| `lib/visualLab/pools/magyarPool.ts` | 47 | 1 meteorCatch (4-lang kész) |
| `lib/visualLab/pools/romanianPool.ts` | 31 | 1 meteorCatch (4-lang kész) |
| `lib/visualLab/pools/astrodeutschPool.ts` | 48 | 2 round (vokale, artikel) — NEM fordított |
| `lib/visualLab/pools/astroLanguagePools.ts` | 1000+ | deutsch K1-K8 tipp/wort/artikel/satz/silben/verben (~1-3 round/grade, GERMAN-ONLY `instruction: string`) |
| `lib/visualLab/pools/biologiePool.ts` | ? | |
| `lib/visualLab/pools/chemistryPool.ts` | ? | |
| `lib/visualLab/pools/geographyPool.ts` | ? | |
| `lib/visualLab/pools/geschichtePool.ts` | ? | |
| `lib/visualLab/pools/informatikaPool.ts` | ? | |
| `lib/visualLab/pools/physicsPool.ts` | ? | |
| `lib/visualLab/pools/sachkundeK1-K4.ts` | ? | |

**Cél**: **10 round / grade minden pool-ban**. 4-lang helyesen fordítva.

**Scope becslés**:
- `astrodeutschPool` style (subject-generic, 5 játék): 5 játék × 8 grade (ha per-grade) × 10 round = 400 round / subject
- `astroLanguagePools` style (language-specifikus, 6 játék): 6 × 8 × 10 = 480 round / subject
- 4 nyelv subject + content subject-ek (bio/kemia/physik/stb) = **több ezer round**

**Batch-stratégia**:
1. Fázis 1 (english/magyar/romana generic pool): ~400 round — 1 Gemini batch
2. Fázis 2 (astroLanguagePools fordítás + bővítés 10/grade): 6 játék × 8 grade × 10 round × 4 lang — 3-4 batch
3. Fázis 3 (content subject pool-ok bővítése 10/grade-re): bio/chem/phys/geo/gesch/math/inf/sachkunde = 8 subject × 5 játék × 8 grade × 10 round = 3200 round — **több batch**

**Összes**: 5-8 Gemini Flash batch, ~1-2 nap aktív munka.

**Bővítési prioritás**:
- P1: english/magyar/romana generic pool (gyereknek a "saját anyanyelv órája" fontos)
- P2: astroLanguagePools deutsch content expansion (tipp-sturm K1: 1→10 round/grade)
- P3: astroLanguagePools 4-lang-ra átalakítás + english/magyar/romana ekvivalens language-games
- P4: content subject pool-ok (biologie/kemia/physik/stb.)
- [ ] folyamatban: **P1 megkezdése**
