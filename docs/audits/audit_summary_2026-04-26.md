# Audit Sorozat — 2026-04-26 (codex 5.4 mini)

## Audit-1: Cross-language contamination (UI/meta szint)

**Ahol kontamináció van:**

1. **HIGH**: `app/astromath/layout.tsx:7` — német SEO meta minden locale-hoz (HU/EN/RO oldalak is német címmel/leírással indexelődnek)
2. **HIGH**: `app/astromath/{1..8}/layout.tsx` — magyar title+description, de JSON-LD breadcrumb angol "Home"/"Grade X" → vegyes-locale meta minden grade layoutra ismétlődik
3. **MEDIUM**: `components/VisualLab.tsx:146` — `deutschlandMap` román fordítása "Harta României" (Németország helyett Románia térképét sugallja)

**Pool fájlok mintavételezve — nincs egyértelmű szivárgás. A főprobléma a shared UI/meta layer.**

## Audit-2: Test variance (math test repetíció)

**Legrepetitívebb routek:**
- Grade 4 `test3`: 146/500 unique (legrosszabb)
- Grade 1 `test2`: 159/500 unique
- Grade 1 `test3`: 245/500 unique
- Grade 1 `P1`: 128/500 unique
- Grade 7 `P1`: 150/500 unique

**Jó esetek:** Grade 5 `test1`: 478/500, Grade 3 `P1`: 499/500.

**Ok:** Több island/route nagyon kicsi `topicKeys` poolból dolgozik (`lib/astromath4.ts:42,54,78,90`). A `generateTest` helper (`lib/mathCurriculum.ts:7005`) 70/30 current/review arányt + 15 retry-t használ — kis poolnál plafonba ütközik.

**Recommendation:** legrosszabb 3-5 generátor célzott bővítése, NEM shuffle-finomhangolás.

## Audit-3: KVÍZMIX placeholder

**Codex JAVÍTOTTA** (commit `d7d83e841cf`):
- `lib/explorerPools/biologieK5.ts`: "Summary A/B/C/D" fallback eltávolítva, summary kötelező
- `lib/explorerPools/biologieK6.ts`: 9 K6 biologia subject-re egyedi 4-lang summary opciók

Még nyitott: kemia/physik/geschichte/sachkunde K5-K8 placeholder audit (más subject-ekre).

## Audit-4: Astro pool/generator mismatch

**Eltérő szögből nézte** — a régi `scripts/check-deutsch-pools.mjs` validatort javította (blokk-szintű parsing, hamis duplikátum-warning eliminálva). Commit: `6384d2e69ff`.

Nyitott: tényleges astro pool/generator 4-lang mismatch audit még kell.

## Audit-5: K1 difficulty (6-7 éves szint)

**Túl nehéz K1 tartalom (HIGH):**
1. **Informatika K1** (`lib/explorerPools/informatikaK1_i1.ts:23-34, 56-67`) — Scanner, Wi-Fi, Update, Neustart, Programme installieren (K2-K3 szint)
2. **Sachkunde K1** (`app/astro-sachkunde/games/K1Explorer.tsx`) — `mix={{ easy: 2, medium: 2, hard: 1 }}` túl agresszív; `lib/explorerPools/sachkundeK1.ts:630-772` WISSEN_POOL+DIPLOM_POOL medium+hard feladatokkal

**Közepes (MEDIUM):**
3. **English K1** (`lib/explorerPools/englishK1.ts:2931-3040, 4044-4068, 4594-4692`) — compound words, adjectives, sentence vs fragment, story structure (K2+)
4. **Deutsch K1** (`lib/deutsch/k1.ts:108-566`) — Silbentrennung blokk: Bleistift, Polizei, Abenteuer, Dinosaurier, Computer, Diphthongen (K2 határ)

**OK:** test, állatok, természet, időjárás, család, közlekedés, anyagok — alapvetően korosztály-megfelelő.

## Konszolidált prioritás (javasolt teendő)

1. **Audit-5 alapján K1 tisztítás** — informatika/sachkunde túl nehéz blokkok átemelése K2-be
2. **Audit-1 alapján** astromath layout meta + breadcrumb HU/RO/EN locale-aware-ré tétele + VisualLab `deutschlandMap` ro fordítás javítása
3. **Audit-3 folytatása** — kemia/physik/geschichte/sachkunde placeholder cleanup
4. **Audit-2 alapján** Grade 1-4 math topic poolok bővítése (Grade 4 test3 prioritás)
5. **Audit-4 új run** — eredeti astro pool/generator audit (codex félrement, csak validator-fixet csinált)
