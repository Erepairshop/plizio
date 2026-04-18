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
