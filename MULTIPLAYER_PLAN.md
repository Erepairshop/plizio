# MULTIPLAYER RENDSZER — TELJES FEJLESZTÉSI TERV

> Cél: Minden játék (kivéve "Lernen" kategória) működjön multiplayer + mix módban is, hibák javítva.

---

## JELENLEGI ÁLLAPOT

### Multiplayer-KÉSZ (14 játék — page.tsx-ben bekötve)
| # | Játék | Kategória | Típus | Seed | Mix | Státusz |
|---|-------|-----------|-------|------|-----|---------|
| 1 | quickpick | quizreflex | non-level | ✅ seeded | ✅ | OK |
| 2 | reflexrush | quizreflex | level 1-10 | ❌ Math.random | ✅ | SEED HIÁNYZIK |
| 3 | numberrush | quizreflex | level 1-10 | ❌ Math.random | ✅ | SEED HIÁNYZIK |
| 4 | sequencerush | quizreflex | level 1-10 | ❌ ellenőrizni | ✅ | ELLENŐRIZNI |
| 5 | wordhunt | quizreflex | level 1-10 | ❌ Math.random | ✅ | SEED HIÁNYZIK |
| 6 | wordscramble | quizreflex | level 1-10 | ❌ Math.random | ✅ | SEED HIÁNYZIK |
| 7 | memoryflash | quizreflex | non-level | ❌ ellenőrizni | ✅ | ELLENŐRIZNI |
| 8 | spotdiff | quizreflex | non-level | ❌ ellenőrizni | ✅ | ELLENŐRIZNI |
| 9 | numberpath | logic | level 1-10 | ❌ ellenőrizni | ✅ | ELLENŐRIZNI |
| 10 | minisudoku | logic | level 1-10 | ❌ ellenőrizni | ✅ | ELLENŐRIZNI |
| 11 | lightout | logic | level 1-10 | ❌ ellenőrizni | ✅ | ELLENŐRIZNI |
| 12 | numbermerge | logic | level 1-10 | ❌ ellenőrizni | ✅ | ELLENŐRIZNI |
| 13 | nonogram | logic | level 1-10 | ❌ ellenőrizni | ✅ | ELLENŐRIZNI |
| 14 | mazerush | logic | level 1-10 | ❌ ellenőrizni | ✅ | ELLENŐRIZNI |

### Multiplayer-KÉSZ de hiányzik a GAME_LABELS regisztráció
| # | Játék | Probléma |
|---|-------|----------|
| 15 | skyclimb | ✅ seed, ⚠️ mix polling HIÁNYZIK |
| 16 | airhockey | page.tsx-ben van multi kód, de NINCS GAME_LABELS-ben |

### NEM multiplayer, DE KELLENE
| # | Játék | Kategória | Típus | Nehézség |
|---|-------|-----------|-------|----------|
| 17 | milliomos | quizreflex | quiz 15 kérdés | KÖZEPES — seed kell a kérdésekhez |
| 18 | kodex | quizreflex | expedition 10 lvl | NEHÉZ — expedition logika átírás |
| 19 | citydrive | adventure | végtelen futás | KÖNNYŰ — score alapú |
| 20 | racetrack | adventure | végtelen futás | KÖNNYŰ — score alapú |
| 21 | pingpong | sport | arcade | MÁR VAN de ellenőrizni |
| 22 | tennis | sport | arcade | page létezik, nincs regisztrálva |
| 23 | squash | sport | arcade | page létezik, nincs regisztrálva |

### NEM multiplayer, NEM IS KELL (Lernen)
| # | Játék | Ok |
|---|-------|----|
| — | astromath | Tanulási progresszió, nem verseny |
| — | mathtest | Oktatási teszt |
| — | deutschtest | Nyelvtanulás |
| — | englishtest | Nyelvtanulás |

---

## FÁZIS 1: KRITIKUS HIBÁK JAVÍTÁSA (lib/multiplayer.ts)

### 1.1 — submitScore() race condition fix
```
Fájl: lib/multiplayer.ts — submitScore()
Probléma: Nem ellenőrzi hogy status === "playing"
Javítás: .eq("status", "playing") hozzáadása az update query-hez
```

### 1.2 — pollMixRound() null match kezelés
```
Fájl: lib/multiplayer.ts — pollMixRound()
Probléma: if (!data) return { action: "wait" } → végtelen várakozás
Javítás: return { action: "error", reason: "match_not_found" } + UI hibaüzenet a játékokban
```

### 1.3 — Nem-implementált játékok kiszedése GAME_LABELS-ből
```
Fájl: lib/multiplayer.ts
Probléma: memoryflash, spotdiff, milliomos, kodex, pingpong, tennis a GAME_LABELS-ben
          de a page.tsx-ükben NINCS multi kód → ellenfél örökké vár
Javítás: ÁTMENETILEG kiszedni amíg nincs bekötve; VAGY bekötni (→ Fázis 3)
```

### 1.4 — Duplikált kihívás megelőzés
```
Fájl: lib/multiplayer.ts — createChallenge()
Probléma: Ugyanannak az embernek 50× lehet kihívást küldeni
Javítás: Ellenőrzés: van-e már "waiting"/"playing" match ugyanezzel az ellenféllel?
         Ha igen → return { ok: false, reason: "already_challenged" }
```

### 1.5 — subscribeToMatch() dead code eltávolítás VAGY használat
```
Fájl: lib/multiplayer.ts + komponensek
Probléma: subscribeToMatch() importálva de sehol nem hívva
Döntés: Vagy kiszedni, vagy átírni polling → realtime-ra (jövőbeli Fázis)
→ Egyelőre: unused importok törlése a játékokból
```

---

## FÁZIS 2: SEEDED RNG BEVEZETÉSE

### 2.1 — Közös seeded RNG modul
```
Fájl: lib/seededRandom.ts (ÚJ)
Tartalom:
  - seededRandom(seed: string): () => number    // Mulberry32 PRNG
  - seededShuffle<T>(arr: T[], rng): T[]        // Fisher-Yates seed-del
  - seededPick<T>(arr: T[], rng): T             // Random elem seed-del
  - seededInt(min, max, rng): number             // Random egész seed-del
```

### 2.2 — Játékonkénti seed bekötés
Minden játékban ahol Math.random() van és multi módban fut:

| Játék | Hol kell seed | Mit cserélni |
|-------|--------------|-------------|
| reflexrush | cell spawn logika (spawnCell) | Math.random() → rng() |
| numberrush | buildGrid() | Math.random() → rng() |
| wordhunt | grid generálás + szó elhelyezés | Math.random() → rng() |
| wordscramble | szóválasztás + betűkeverés | Math.random() → rng() |
| sequencerush | sorozat generálás | ellenőrizni, valószínűleg kell |
| memoryflash | kártya elhelyezés | ellenőrizni |
| spotdiff | különbség pozíciók | ellenőrizni |
| numberpath | útvonal generálás | ellenőrizni |
| minisudoku | puzzle generálás | ellenőrizni |
| lightout | puzzle generálás | ellenőrizni |
| numbermerge | tábla generálás | ellenőrizni |
| nonogram | puzzle generálás | ellenőrizni |
| mazerush | labirintus generálás | ellenőrizni |

**Minta minden játékhoz:**
```tsx
// A játék elején:
const seed = searchParams.get("seed");
const rng = seed ? seededRandom(seed) : Math.random;

// Minden Math.random() hívást rng()-re cserélni
// FONTOS: Csak multi módban kell seed! Solo módban maradhat Math.random()
```

**Kritikus szabály:** A seed-es generátor DETERMINISZTIKUS kell legyen:
- Ugyanaz a seed → MINDIG ugyanaz az eredmény
- Nem függhet Date.now()-tól, window mérettől, stb.
- Mindkét játékos PONTOSAN ugyanazt a pályát/kérdéseket kapja

---

## FÁZIS 3: HIÁNYZÓ JÁTÉKOK BEKÖTÉSE

### 3.1 — Skyclimb mix polling javítás
```
Fájl: app/skyclimb/page.tsx
Probléma: submitMixRoundScore hívás megvan, de pollMixRound NINCS
Javítás: useEffect polling hozzáadása (quickpick mintájára)
Munka: ~30 perc
```

### 3.2 — Airhockey regisztráció + mix polling
```
Fájl: app/airhockey/page.tsx + lib/multiplayer.ts
Probléma: Multi kód van a page-ben, de nincs GAME_LABELS-ben
Javítás:
  1. Hozzáadni GAME_LABELS-hez (NEM level-based)
  2. Mix polling effect hozzáadása
Munka: ~30 perc
```

### 3.3 — Milliomos multiplayer bekötése
```
Fájl: app/milliomos/page.tsx
Típus: Quiz, 15 kérdés, nem level-based
Teendő:
  1. Seeded kérdésgenerálás (mindkét játékos ugyanazt a 15 kérdést kapja)
  2. Standard multi boilerplate (URL params, submitScore, polling, exit confirm)
  3. Score = helyes válaszok száma (0-15)
  4. GAME_LABELS-be + GameType union-ba regisztrálás
Munka: ~2 óra
Megjegyzés: A "segítségek" (50:50, telefon, közönség) multi módban ki legyenek kapcsolva!
```

### 3.4 — Kodex multiplayer bekötése
```
Fájl: app/kodex/page.tsx
Típus: Hangman-szerű, level 1-10 expedition
DÖNTÉS SZÜKSÉGES: A kodex expedition-alapú (1-10 szint progresszió).
  Multi módban:
  - Opció A: Csak 1 szintet játszanak (kihívás = 1 szint, pl. level 5)
  - Opció B: NEM kötjük be (túl bonyolult az expedition logika multi módban)

  → JAVASLAT: Opció A — 1 szint, level 1-9 választható
  Teendő:
    1. Seeded szó/mondat generálás az adott szinthez
    2. Standard multi boilerplate
    3. Score = wrongCount alapú (kevesebb hiba = jobb)
       Pl: score = maxLives - wrongCount (6 - hibák)
    4. LEVEL_GAMES-be regisztrálás
  Munka: ~3 óra
```

### 3.5 — Citydrive multiplayer bekötése
```
Fájl: app/citydrive/page.tsx
Típus: Végtelen futás, score = megtett távolság / pénz
Teendő:
  1. URL params olvasása (match, seed, p, vs)
  2. Seeded forgalom/akadály generálás
  3. submitScore a játék végekor (crash/game over)
  4. Standard multi boilerplate
  5. NEM level-based (nincs level választó)
Munka: ~2 óra
```

### 3.6 — Racetrack multiplayer bekötése
```
Fájl: app/racetrack/page.tsx
Típus: Végtelen futás, score = megtett távolság
Teendő: Ugyanaz mint citydrive
Munka: ~2 óra
```

### 3.7 — Pingpong ellenőrzés + javítás
```
Fájl: app/pingpong/page.tsx
Státusz: GAME_LABELS-ben van, de ellenőrizni kell:
  - Van-e page.tsx-ben multi kód?
  - Működik-e a mix mód?
  - Van-e polling?
Munka: ~1 óra
```

### 3.8 — Tennis regisztráció
```
Fájl: app/tennis/page.tsx
Státusz: Page létezik, NINCS regisztrálva
Teendő:
  1. Ellenőrizni van-e multi kód a page-ben
  2. Ha nincs → standard boilerplate
  3. GAME_LABELS + GameType regisztrálás
Munka: ~2 óra
```

### 3.9 — Squash regisztráció (ha van page)
```
Státusz: Ellenőrizni kell létezik-e
Munka: ~2 óra (ha létezik)
```

---

## FÁZIS 4: MIX MÓD STABILIZÁLÁS

### 4.1 — Minden játékban egységes mix-waiting screen
```
Probléma: Néhány játékban eltérő a mix-waiting implementáció
Javítás: Közös MultiplayerWaiting komponens kiemelése
  Props: { score, total, round, opponentName, gameColor }
  → Minden játékban ugyanaz a kinézet
```

### 4.2 — Mix mód error recovery
```
Probléma: Ha egy játék crashel mix közben, a match örökre "playing" marad
Javítás:
  1. pollMixRound() timeout: 5 perc után → "error" action
  2. UI: "A meccs megszakadt. Visszatérés a multiplayer oldalra."
  3. Match status → "abandoned" automatikusan
```

### 4.3 — Mix játék kiválasztás javítása (multiplayer/page.tsx)
```
Probléma: A mix mód véletlenszerűen választ 5 játékot, de:
  - Belekerülhet nem-implementált játék (memoryflash, stb.)
  - Nincs szűrés a ténylegesen működő játékokra
Javítás: MIX_ELIGIBLE_GAMES lista bevezetése
  → Csak azok a játékok kerülhetnek mix-be, amik TÉNYLEGESEN működnek multi+mix módban
```

---

## FÁZIS 5: STALE MATCH CLEANUP

### 5.1 — Client-side cleanup
```
Fájl: lib/multiplayer.ts
Új függvény: cleanupStaleMatches()
  - 30 percnél régebbi "waiting" matchek → "cancelled"
  - Hívás: multiplayer oldal betöltésekor + ChallengeOverlay init-kor
```

### 5.2 — Supabase Database Cleanup (opcionális, szerver-oldali)
```
Supabase SQL cron job (ha van pg_cron):
  UPDATE multiplayer_matches
  SET status = 'cancelled'
  WHERE status = 'waiting'
  AND created_at < NOW() - INTERVAL '30 minutes';

  UPDATE multiplayer_matches
  SET status = 'abandoned'
  WHERE status = 'playing'
  AND created_at < NOW() - INTERVAL '2 hours';
```

---

## VÉGREHAJTÁSI SORREND (javasolt)

```
FÁZIS 1: Kritikus hibák     (~2 óra)
  1.1 submitScore race fix
  1.2 pollMixRound null fix
  1.3 GAME_LABELS cleanup (átmenetileg kiszedni a nem működőket)
  1.4 Duplikált kihívás megelőzés
  1.5 Dead import cleanup

FÁZIS 2: Seeded RNG          (~4 óra)
  2.1 lib/seededRandom.ts létrehozása
  2.2 Játékonkénti seed bekötés (14 játék ellenőrzése + javítása)

FÁZIS 3: Új játékok bekötése  (~12 óra)
  3.1 Skyclimb mix fix (30 perc)
  3.2 Airhockey regisztráció (30 perc)
  3.3 Milliomos bekötése (2 óra)
  3.4 Kodex bekötése (3 óra)
  3.5 Citydrive bekötése (2 óra)
  3.6 Racetrack bekötése (2 óra)
  3.7 Pingpong ellenőrzés (1 óra)
  3.8 Tennis regisztráció (2 óra)

FÁZIS 4: Mix stabilizálás    (~3 óra)
  4.1 Közös MultiplayerWaiting komponens
  4.2 Error recovery
  4.3 MIX_ELIGIBLE_GAMES lista

FÁZIS 5: Cleanup              (~1 óra)
  5.1 Client-side stale cleanup
  5.2 DB cleanup (opcionális)
```

---

## VÉGSŐ EREDMÉNY

**Multiplayer-kompatibilis játékok: 22/26 (85%)**

| Kategória | Játékok | Multi | Mix |
|-----------|---------|-------|-----|
| Quiz/Reflex | 10 | 10/10 ✅ | 10/10 ✅ |
| Adventure | 3 | 3/3 ✅ | 3/3 ✅ |
| Logic | 6 | 6/6 ✅ | 6/6 ✅ |
| Sport | 3-4 | 3-4 ✅ | 3-4 ✅ |
| **Lernen** | **4** | **0 ❌** | **0 ❌** |

**Javított hibák:**
- ✅ submitScore race condition
- ✅ pollMixRound null match
- ✅ Seed fairness minden játékban
- ✅ Duplikált kihívás megelőzés
- ✅ Stale match cleanup
- ✅ GAME_LABELS ↔ implementáció szinkronban
- ✅ Skyclimb + airhockey mix mód
- ✅ Egységes mix-waiting UI

---

## MULTIPLAYER BEKÖTÉSI CHECKLIST (copy-paste minden új játékhoz)

```
□ lib/multiplayer.ts
  □ GameType union-ba: | "mygame"
  □ GAME_LABELS-be: mygame: "My Game"
  □ LEVEL_GAMES-be (ha level-based): .add("mygame")
  □ MIX_ELIGIBLE_GAMES-be (ha mix is kell)

□ app/mygame/page.tsx
  □ Importok: submitScore, submitMixRoundScore, pollMixRound, abandonMatch
  □ Importok: MultiplayerExitConfirm, MultiplayerAbandonNotice, MultiplayerResult
  □ Suspense wrapper (useSearchParams miatt)
  □ URL params: match, seed, p, vs, level, mixround
  □ isMultiplayer + isMix computed
  □ State: scoreSubmitted, showExitConfirm, oppFinalScore, myFinalScore
  □ Screen types: + "multi-waiting" | "multi-result"
  □ Auto-start effect (ha level-based)
  □ Expedition elrejtése multi módban
  □ Seeded RNG használat (seed → rng → generálás)
  □ Win handler: mix ág + single multi ág + solo ág
  □ Fail handler: ugyanaz a 3 ág
  □ Polling useEffect (multi-waiting screen)
  □ Exit gomb → showExitConfirm (multi) / expedition (solo)
  □ multi-waiting render (spinner + score)
  □ multi-result render (MultiplayerResult)
  □ MultiplayerExitConfirm + MultiplayerAbandonNotice JSX
  □ Kártya mentés + incrementTotalGames multi módban is!
```
