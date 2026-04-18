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
