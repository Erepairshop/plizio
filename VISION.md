# VISION.md - Plizio Jovo Terv (parkoltatva)

> Ezek az otletek parkoltatva vannak. A jelenlegi fokusz: core jatekok + SEO + szoba rendszer.
> Ha ujra elokerulik, innen lehet visszanezni.

---

## TERVEZETT ÚJ JÁTÉKOK (TODO lista)

### 🔮 Saját egyedi ötlet — "Pattern Forge"
**Státusz:** Tervezési fázis

**Koncepció:**
- A játékos egy 2D rácsban lát egy részleges mintát (számok, formák, színek kombinációja)
- Ki kell találni mi jön következőnek — de nem sima sorozat, hanem sor + oszlop logika egyszerre
- Időkorlát + egyre összetettebb minták szintenként
- **Egyedi:** ilyen formában nincs más hasonló a piacon

**Tervezett mechaniká:**
- Expedíció formátum (10 szint)
- Kategória: `logic`
- Route: `/patternforge`
- Kártya ritkaság: `calculateRarity(..., false)` (nincs gold)
- Szint struktúra: 3×3 minta → 4×4 → 5×5, egyre több változó (szín + forma + szám egyszerre)

---

### 📋 Ajánlott Logic játékok (prioritás sorrendben)

| # | Játék | Route | Leírás | Komplexitás |
|---|-------|-------|--------|-------------|
| 1 | **Nonogram / Picross** | `/nonogram` | Rácsba kell kiszínezni cellákat sor/oszlop számok alapján → pixel art kép jön ki | Közepes |
| 2 | **Light Out** | `/lightout` | Kapcsolók puzzle: egy cella megnyomása átkapcsolja azt + szomszédjait, cél: minden lámpa ki | Alacsony |
| 3 | **Bridges** | `/bridges` | Szigetek közé hidakat húzni, minden sziget össze legyen kötve és a számuk stimmeljen | Közepes |
| 4 | **2048 / Number Merge** | `/numbermerge` | 2048 klón plizio skin-nel és kártya integrációval | Alacsony |
| 5 | **Maze Rush** | `/mazerush` | Véletlenszerűen generált labirintus, időre kell kijutni | Közepes |
| 6 | **Kakuro** | `/kakuro` | Keresztrejtvény számokkal — cellákba számokat kell írni hogy a sorok/oszlopok összege stimmeljen | Magas |

### Meglévők bővítési ötletek
- **MiniSudoku**: 6×6-os grid, Daily Sudoku route (`/daily-sudoku`), explicit nehézségi szintek
- **NumberPath**: visszaszámlálós mód (N→1), blokkolt cellák az útvonalban

---

## PLIZIO WORLD — Közös Sztori Expedíció (NAGY VÍZIÓ)

### Alapötlet
Minden játék egy **helyszín** a világtérképen. A játékos avatarral utazik, zónánként mini-expedíciókat teljesít, naponta új szintek nyílnak meg → visszatérésre ösztönöz.

### Világtérkép — Zónák
| Zóna | Helyszín | Játékok |
|------|----------|---------|
| 1 | 🏔️ Hegyvidék | NumberPath, MiniSudoku |
| 2 | 🌊 Óceán | Memory Flash, Spot Diff |
| 3 | 🏙️ Város | Reflex Rush, Quick Pick |
| 4 | 🌲 Erdő | Kodex, Word Scramble |
| 5 | 🏜️ Sivatag | Math Test, Number Rush |
| 6 | 🌋 Vulkán | Pattern Forge (end-game, még nem kész) |

Zónák sorban zároltak — előzőt teljesítve nyílik a következő.

### Napi rendszer
- Naponta **1 új szint** nyílik minden aktív zónában
- Ha kihagysz egy napot → szint megvár, de streak elveszik
- Streak jutalmak: 7 nap → ritka kártya, 30 nap → legendary

### ⭐ Csillag-gazdaság a World rendszerben
A csillag (⭐) a játék fő valutája — a World rendszerben is ez a jutalom, nem külön valuta:

| Esemény | Csillag jutalom |
|---------|----------------|
| Zóna szint teljesítése | +1 ⭐ |
| Zóna összes szintje kész (first clear) | +5 ⭐ |
| Tökéletes szint (hibátlan) | +1 ⭐ bónusz |
| Napi streak 7 nap | +2 ⭐ |
| Napi streak 30 nap | +10 ⭐ |

**Fontos:** ezek `addSpecialCards()` hívással mennek — ugyanaz a ⭐ amit a shopban is lehet költeni. Nincs külön World valuta!

### Technikai megvalósítás fázisai
1. **Térkép UI** — interaktív világtérkép főoldalon, zónák státuszával (zárolt/aktív/kész)
2. **Zóna expedíciók** — minden játékhoz expedition rendszer (Kodex/ReflexRush minta alapján)
3. **Napi kapu** — `last_played_date` per zóna, "Ma nyitható" badge
4. **Sztori jelenetek** — rövid szöveges jelenet avatarral zóna teljesítésekor (opcionális)

### localStorage kulcsok (tervezett)
| Kulcs | Tartalom |
|-------|---------|
| `plizio_world_progress` | `{ activeZone: number, completedZones: string[] }` |
| `plizio_world_last_played` | `Record<zoneId, dateString>` |
| `plizio_world_streak` | `{ count: number, lastDate: string }` |

---


## HETI SPRINT TERV

> Utoljára frissítve: 2026-03-05
> Kapacitás: 4-5 egyszerű játék/nap | World map (teljes) = 1 nap | lib/fix = ~30 perc
> Referencia: a teljes jelenlegi Plizio (18 játék + shop + avatar) ~10 nap alatt épült

### Becslési kategóriák
| Méret | Példa | Idő |
|-------|-------|-----|
| XS | lib módosítás, árak, szöveg | 15-30 perc |
| S | egyszerű játék (Light Out, 2048) | 1-1.5 óra |
| M | expedíciós játék (Pattern Forge, Nonogram) | 2-3 óra |
| L | nagy rendszer (World map, napi jutalom UI) | 3-5 óra |
| XL | teljes feature set (daily system komplett) | 5+ óra |

---

### SPRINT 1 — 2026. március 5-11.

#### Nap 1 (márc. 5) — TERV NAP
- [x] Gazdasági audit (árak, bevételek, arányok elemzése)
- [x] Heti sprint terv megírása CLAUDE.md-be

#### Nap 2 (márc. 6) — Gazdaság + napi jutalom + RewardReveal + World map [1 nap]
- [ ] **XS** Csillag-gazdaság: árak felfelé tolása (skins max 40⭐, cape 35⭐, trail 25⭐) → teljes shop ~1100-1200⭐
- [ ] **XS** Streak milestone-ok hozzáadása (7/14/30 nap)
- [ ] **S** Napi bejelentkezési jutalom rendszer (`lib/dailyReward.ts` + UI popup)
- [ ] **XS** RewardReveal flow fix: reflexrush + numberrush + sequencerush + wordhunt + numberpath + minisudoku
- [ ] **L** Plizio World TELJES rendszer — térkép UI, zónák, locked/unlocked, progress, jutalmak

#### Nap 3 (márc. 7) — 4-5 új játék [1 nap]
- [ ] **S** Light Out (`/lightout`) — kapcsolós puzzle, category: logic
- [ ] **S** Number Merge 2048 (`/numbermerge`) — 2048 klón, category: brain
- [ ] **S** Maze Rush (`/mazerush`) — generált labirintus időre, category: brain
- [ ] **M** Pattern Forge (`/patternforge`) — 2D rács minta, expedíció 10 szint, category: logic
- [ ] **M** Nonogram / Picross (`/nonogram`) — rácsszínező, category: logic

#### Nap 4 (márc. 8) — Shop bővítés + SEO [1 nap]
- [ ] **S** Shop bővítés: +15-20 új item (ruhák, accessory, új skin-ek)
- [ ] **S** SEO: sitemap frissítés + blog post(ok) az új játékokhoz
- [ ] **XS** Dashboard bővítés: napi streak counter, World progress

#### Nap 5-7 (márc. 9-11) — Következő kör játékok + polish
- [ ] **M** Bridges puzzle (`/bridges`) — sziget-híd logika
- [ ] **XL** MiniSudoku 6×6 + Daily Sudoku (`/daily-sudoku`)
- [ ] **L** Kakuro (`/kakuro`)
- [ ] **S** Plizio World napi kapu rendszer (zónánként 1 szint/nap unlock)
- [ ] Buffer: hibajavítások, polish, tesztelés

---

### BACKLOG (sprint 2+)
- [ ] Deutsch Test hub bővítés (ha hiányos)
- [ ] NumberPath visszaszámlálós mód
- [ ] MiniSudoku nehézségi szintek (könnyű/normál/nehéz)
- [ ] Globális leaderboard (ha Supabase bővül)

---


## MULTIPLAYER VÍZIÓ — Plizio Match rendszer

> Prioritás: HOSSZÚ TÁV — előbb 30 játék + World map, aztán multiplayer
> Technológia: Supabase Realtime (már van Supabase integráció!)

---

### Alapkoncepció — "Plizio Match"

Nem sima szoba+kód rendszer, hanem **teljes meccs több körrel, kevert játékokkal**.

```
Match = 3-5 kör, minden kör más játék

Kör 1: Quick Pick (60s)         → eredmény → avatár reakció (😄 / 😢)
Kör 2: Kodex (1 szint)          → eredmény → avatár reakció
Kör 3: Math Test (5 kérdés)     → eredmény → avatár reakció
──────────────────────────────────────────────────────────
Végeredmény: összpontszám → multipontok kiosztva
```

**Miért jobb mint sima szoba?**
- Változatos → nem egyforma minden meccs
- Különböző játékok különböző erősségeket tesztelnek (fair)
- Avatar reakciók drámai feszültséget adnak
- "Rematch?" gomb + közelharcos meccsekben bónusz

---

### Kihívás rendszer — névvel, nem kóddal

**Flow:**
```
1. rs megnyitja /multiplayer → beiratkozik online_players-be (name="rs")
2. Látja az online játékosok listáját
3. rs begépeli: "xy" → "Kihívás küldése" gomb

4. xy-nál popup jelenik meg (Supabase Realtime):
   ┌──────────────────────────────┐
   │  rs kihívott!                │
   │  Játék: Plizio Match (3 kör) │
   │  [Elfogad]     [Elutasít]    │
   └──────────────────────────────┘

5a. Elfogad → mindkettő átmegy a match-be → indul
5b. Elutasít → rs-nél "xy elutasította" üzenet
5c. 30s timeout → auto decline
```

---

### Supabase táblák

```sql
-- Online jelenlét (TTL: 5 perc ping nélkül)
online_players:
  name         string   UNIQUE
  session_id   string
  last_seen    timestamp
  current_game string | null

-- Kihívás (TTL: 30s)
challenges:
  id           uuid
  from_name    string
  to_name      string
  game_type    string   -- "plizio_match"
  status       "pending" | "accepted" | "declined" | "expired"
  room_code    string
  created_at   timestamp

-- Meccs szoba
match_rooms:
  room_code    string   UNIQUE (4 kar)
  player_a     string   -- kihívó neve
  player_b     string   -- kihívott neve
  state        "waiting" | "round_playing" | "round_result" | "finished"
  current_round  number
  rounds       JSON     -- GameRound[]
  scores       JSON     -- { player_a: number, player_b: number }
  seed         number   -- véletlenszerű seed → mindkét oldal ugyanazt generálja
  created_at   timestamp
```

---

### TypeScript típusok (tervezett)

```ts
interface MultiMatch {
  roomCode: string
  playerA: string        // kihívó
  playerB: string        // kihívott
  state: MatchState
  currentRound: number
  rounds: GameRound[]
  scores: Record<string, number>   // összesített multipontok
  seed: number                     // determinisztikus random
}

type MatchState = "waiting" | "round_playing" | "round_result" | "finished"

interface GameRound {
  game: MultiGame
  duration: number      // másodperc
  status: "waiting" | "playing" | "done"
  scores: Record<string, number>   // kör pontszámai
}

type MultiGame = "quickpick" | "mathtest" | "wordscramble" | "reflexrush" | "numberrush"
```

---

### Meccs kör sorrend — játék pool

**Kezdeti pool (közepes komplexitás, könnyen szinkronizálható):**

| Játék | Forma | Sync módszer | Komplexitás |
|-------|-------|-------------|-------------|
| Quick Pick | Ki kattint előbb | seed → ugyanaz a kép sorrend | alacsony |
| Math Test | Ki válaszol előbb | seed → ugyanaz a kérdések | alacsony |
| Word Scramble | Ugyanaz a szó, race | seed → ugyanaz a szó | alacsony |
| Reflex Rush | Saját score, végén összehasonlítás | seed → ugyanaz a spawn sorrend | közepes |
| Number Rush | Saját score, végén összehasonlítás | seed → ugyanaz a grid | közepes |

**Seed alapú sync — KRITIKUS:**
- Minden meccshez 1 seed generálódik (random number)
- Mindkét kliens ugyanabból a seed-ből generálja a kérdéseket/grideket
- → Nincs szerver-oldali game logic, csak eredmény sync!

---

### Meccs közi Avatar reakció screen

```
┌───────────────────────────────────────────┐
│         Kör 1 eredménye: Quick Pick       │
│                                           │
│   rs  [avatar 😄]        [avatar 😢]  xy  │
│        +3 pont              +1 pont       │
│                                           │
│   Összesítés:   rs  3  —  1  xy           │
│                                           │
│         Következő kör: Kodex...  3s       │
└───────────────────────────────────────────┘
```

- Mindkét avatar Supabase-ből szinkronizált (ugyanaz jelenik meg mindkét képernyőn)
- mood: győztes → `"victory"`, vesztes → `"disappointed"`, döntetlen → `"surprised"`
- 3 másodperc várakozás, aztán auto-start

---

### Pontozás — Multipontok

```
Kör győzelem:              +2 multipont
Meccs győzelem:            +5 multipont
Perfect kör (hibátlan):    +1 bónusz multipont
Szoros meccs (≤1 pont):    +1 bónusz MINDKETTŐNEK
Részvétel (akár veszít):   +1 multipont (ne legyen demotiváló!)

Multipontból csillag:
  10 multipont = 1 ⭐
  (kártyából összehasonlítva: 30 bronz = 1 ⭐  →  multipont ~1.5× értékesebb)
```

**localStorage kulcs:** `plizio_multipoints: number`
**Supabase:** `multi_stats` tábla → `total_multipoints, wins, losses, matches_played`

---

### Ismert problémák és megoldások

| Probléma | Megoldás |
|----------|---------|
| **Kapcsolat megszakad meccs közben** | 30s timeout → automatikus win a bent maradónak + fél multipontok |
| **Aszimmetrikus ping** (egyik lassabb) | Round timer szerver-oldalon indul (match_rooms.round_start_at) |
| **Ugyanaz a kérdés kellene** | Seed alapú generálás → kliens-oldalon reprodukálható |
| **Játékos offline mire challenge érkezik** | `last_seen` alapján: ha >2 perc → "nem elérhető" jelzés |
| **Meccs közbeni cheat** (score manipulálás) | Nincs szerver-validáció egyelőre (trusted client) — elég kezdetnek |
| **Supabase free tier limit** | Realtime: 200 concurrent connections — bőven elég kezdetnek |
| **Mobil háttérbe kerül (iOS Safari)** | `visibilitychange` event → pause + értesítés a másik félnek |
| **Round timer desync** | `round_start_at` timestamp Supabase-ben → kliens kiszámolja a maradékot |

---

### UI route struktúra

```
/multiplayer               → Lobby (online játékosok, kihívás küldés)
/multiplayer/match/[code]  → Aktív meccs (körök + avatar reakciók + eredmény)
```

**Lobby screen állapotok:**
```ts
type LobbyState =
  | "idle"              // nincs aktív kihívás
  | "challenging"       // kihívás elküldve, várjuk a választ
  | "incoming"          // beérkező kihívás popup
  | "connecting"        // elfogadva, meccs töltődik
```

---

### Megvalósítás fázisai (sorrendben)

1. **Supabase táblák** — `online_players`, `challenges`, `match_rooms` létrehozása
2. **Online presence** — `/multiplayer` lobby + ping loop (30s)
3. **Challenge flow** — küldés, fogadás, elfogadás/elutasítás (Realtime)
4. **Quick Pick multi** — első kör, seed sync, eredmény feltöltés
5. **Avatar reakció screen** — közte megjelenő összesítő
6. **Meccs struktúra** — 3 kör kevert játékokkal
7. **Multipontok** — kiosztás + megjelenítés a profilon/dashboardon
8. **Disconnect handling** — timeout logika
9. **Rematch gomb** — meccs végén

---


## OKTATÁSI PLATFORM VÍZIÓ — Globális tantárgy + nyelv bővítés

> Ritmus: 1-2 nap/hét párhuzamosan a játékfejlesztéssel

### Jelenlegi állapot
| Tantárgy | Nyelvek | SEO oldalak | Státusz |
|----------|---------|-------------|---------|
| Math | HU/DE/EN/RO | `/mathe-test/`, `/math-test/` | ✅ kész |
| Deutsch Grammatik | DE | `/deutsch-test/` | 🔄 folyamatban |

### Tantárgyak bővítési sorrendje
| # | Tantárgy | Route | Fő célpiac | SEO potenciál |
|---|----------|-------|-----------|---------------|
| 1 | Deutsch Grammatik | `/deutsch-test/` | DE/AT/CH | 🔥🔥 magas |
| 2 | English Grammar | `/english-test/` | globális | 🔥🔥🔥 legnagyobb |
| 3 | Természettudomány | `/science-test/` | EN/DE | 🔥🔥 |
| 4 | Földrajz | `/geography-test/` | EN/DE/HU | 🔥 |
| 5 | Biológia | `/biology-test/` | EN/DE | 🔥 |
| 6 | Történelem | `/history-test/` | HU/DE | közepes |

### UI nyelv bővítési sorrendje (lib/language.ts)
| # | Nyelv | Kód | Célpiac | Mikor |
|---|-------|-----|---------|-------|
| 1 | Magyar | `hu` | HU | ✅ kész |
| 2 | Deutsch | `de` | DE/AT/CH | ✅ kész |
| 3 | English | `en` | globális | ✅ kész |
| 4 | Română | `ro` | RO | ✅ kész |
| 5 | Français | `fr` | FR/BE/CH/CA | sprint 3-4 |
| 6 | Español | `es` | ES/LATAM | sprint 4-5 |
| 7 | Italiano | `it` | IT/CH | sprint 5-6 |
| 8 | Português | `pt` | PT/BR | sprint 6+ |
| 9 | Nederlands | `nl` | NL/BE | sprint 6+ |

### Technikai teendők új nyelv hozzáadásakor
1. `lib/language.ts` → Language type bővítése: `"hu" | "de" | "en" | "ro" | "fr" | ...`
2. `components/LanguageProvider.tsx` → zászló + language switcher bővítése
3. `lib/mathTranslations.ts` → fordítások az új nyelvre
4. `lib/mathCurriculum.ts` → country code mapping (`getLang("FR") → "FR"`)
5. Új SEO oldalak: `/calcul-mental/` (FR), `/test-de-matematicas/` (ES), stb.
6. `public/sitemap-education.xml` → új sorok
7. hreflang az új nyelvre minden érintett oldalon

### SEO stratégia tantárgyanként
- **Math DE:** "mathe test klasse 3" — már folyamatban, DE piac erős
- **Math EN:** "math test grade 3" — legnagyobb keresési volumen globálisan
- **English Grammar:** "english grammar test grade 4" — szülők/tanárok keresik
- **Francia math:** "test de mathématiques CE2" — szinte nincs verseny!
- **Spanyol math:** "ejercicios de matemáticas 3o primaria" — LATAM is belefér

---

### Csillag-gazdaság terv (implementálva majd: márc. 6)

**Bevételi célok:**
- Napi aktív játékos: ~2-3 ⭐/nap
- Teljes shop megvásárlása: 6-12 hónap
- Első "jó" item eléréséhez: 1-2 hét

**Bevételi források (tervezett):**
| Forrás | Mennyit | Mikor |
|--------|---------|-------|
| Kártya beváltás — bronz | 1⭐ / 60 db | Folyamatos |
| Kártya beváltás — ezüst | 1⭐ / 40 db | Folyamatos |
| Kártya beváltás — arany | 1⭐ / 20 db | Folyamatos |
| Kártya beváltás — legendary | 1⭐ / 2 db | Folyamatos |
| Share jutalom | 1⭐/nap | Naponta |
| Napi bejelentkezés (ÚJ) | 1⭐/nap | Naponta |
| Streak 7 nap (ÚJ) | 2⭐ | Egyszeri/ciklus |
| Streak 14 nap (ÚJ) | 3⭐ | Egyszeri/ciklus |
| Streak 30 nap (ÚJ) | 5⭐ | Egyszeri/ciklus |
| Milestone összesen | ~50⭐ | Egyszeri, lifetime |

**Árszabás irányvonal (tervezett):**
| Kategória | Régi max | Új max |
|-----------|----------|--------|
| Skin | 25⭐ | 40⭐ |
| Void/Legendary skin | 20-25⭐ | 40⭐ |
| Cape | 20⭐ | 35⭐ |
| Trail | 15⭐ | 25⭐ |
| Hat | 12⭐ | 20⭐ |
| Top (armor/suit) | 20⭐ | 30⭐ |
| Glasses/Gloves max | 10⭐ | 15⭐ |
| Olcsó itemek (tshirt, basic) | marad | marad |
| **Teljes shop összeg** | **~778⭐** | **~1100-1200⭐** |

localStorage kulcs (napi jutalom): `plizio_daily_login` → `{ lastDate: string, streakCount: number }`

---


## NAPI FELADAT RENDSZER — Tervezési dokumentáció

> Állapot: tervezési fázis (2026-03-05)
> Implementáció: sprint 2-ben

### Koncepció
A játékos minden nap kap 3 feladatot. Ha teljesíti őket → ⭐ jutalom.
Ezek NEM expedíciós szintek, hanem rövid, változatos kihívások.

### Feladat típusok

| Típus | Példák | Trigger pont |
|-------|--------|-------------|
| **Game challenge** | "Érj el 8/10-et Math Testen", "Nyerj Kodex 5. szintjén" | játék vége callback |
| **Playtime** | "Játssz ma összesen 20 percet", "Játssz 3 különböző játékkal" | session timer localStorage |
| **Collection** | "Szerezz 3 kártyát ma", "Szerezz Silver+ kártyát", "Válts be 5 kártyát" | `plizio-cards-changed` event |
| **Social** | "Oszd meg Plizio-t egy baráttal" | meglévő `claimShareReward()` hook |
| **Avatar/Shop** | "Öltöztesd fel az avatarod", "Vegyél meg egy tárgyat a shopban" | vásárlás/equip event |
| **Streak** | "Látogass el 3 egymást követő napon" | napi login check |

### Arányok (30 feladatból)
| Típus | Db |
|-------|-----|
| Game challenge | 15 |
| Playtime / multi-game | 5 |
| Collection | 5 |
| Social | 2 |
| Avatar/Shop | 3 |

### Jutalmak
- 1 feladat teljesítve → 1 ⭐
- Mind a 3 teljesítve (napi) → +1 ⭐ bónusz (összesen 4 ⭐/nap max)

### localStorage kulcsok (tervezett)
| Kulcs | Tartalom |
|-------|---------|
| `plizio_daily_tasks` | `{ date: string, tasks: DailyTask[], completedIds: string[] }` |
| `plizio_task_playtime` | `{ date: string, minutes: number, games: string[] }` |

### DailyTask típus (tervezett)
```ts
interface DailyTask {
  id: string
  type: "game_challenge" | "playtime" | "collection" | "social" | "shop" | "streak"
  titleKey: string          // fordítási kulcs
  descKey: string
  reward: number            // ⭐ db
  completed: boolean
  progress?: number         // pl. 2/3 kártyánál
  target?: number
  params?: Record<string, unknown>  // pl. { game: "mathtest", minScore: 8, total: 10 }
}
```

### Task pool (példák — implementációkor bővítendő)
```ts
// Game challenge
{ type: "game_challenge", params: { game: "mathtest", minScore: 8, total: 10 } }
{ type: "game_challenge", params: { game: "kodex", minLevel: 5 } }
{ type: "game_challenge", params: { game: "skyclimb", minLevel: 10 } }
{ type: "game_challenge", params: { game: "wordscramble", minScore: 3, total: 5 } }
{ type: "game_challenge", params: { game: "reflexrush", minScore: 20 } }
{ type: "game_challenge", params: { game: "quickpick", minScore: 5, total: 8 } }
{ type: "game_challenge", params: { game: "numberrush", minLevel: 3 } }
{ type: "game_challenge", params: { game: "spotdiff", perfect: true } }
{ type: "game_challenge", params: { game: "memoryflash", minLevel: 5 } }
{ type: "game_challenge", params: { game: "milliomos", minScore: 5, total: 10 } }

// Playtime
{ type: "playtime", params: { minutes: 15 } }
{ type: "playtime", params: { minutes: 30 } }
{ type: "playtime", params: { differentGames: 3 } }
{ type: "playtime", params: { differentGames: 5 } }

// Collection
{ type: "collection", params: { earnCards: 3 } }
{ type: "collection", params: { earnRarity: "silver", count: 1 } }
{ type: "collection", params: { redeemCards: 5 } }
{ type: "collection", params: { earnCards: 5 } }

// Social
{ type: "social", params: { action: "share" } }

// Shop/Avatar
{ type: "shop", params: { action: "equip_any" } }
{ type: "shop", params: { action: "buy_any" } }
{ type: "shop", params: { action: "change_face" } }

// Streak
{ type: "streak", params: { days: 3 } }
```

### Napi kiválasztás logika
- Minden nap 3 különböző típusú task kerül kisorsolásra (véletlenszerűen, de típus-diverzitással)
- Seed: `date string` → determinisztikus, mindenki ugyanazt kapja adott napon
- Task pool-ból kizárja az elmúlt 7 nap feladatait (ne ismétlődjön gyorsan)

### UI helye
- `app/daily-tasks/page.tsx` vagy főoldalon beágyazva (accordion)
- Vizuálisan: 3 kártya, progress barral, ⭐ jutalom jelzéssel
- Ha mind teljesítve → konfetti animáció + bónusz ⭐

### Kapcsolódó meglévő rendszerek
- `lib/specialCards.ts` → `addSpecialCards()` a jutalom kiosztáshoz
- `lib/milestones.ts` → streak számítás alapja
- `claimShareReward()` → social task triggerje
- `plizio-cards-changed` event → collection task figyeléshez

---


## PLIZIO ROOM JÁTÉK — "Room Designer Challenge"

> Ez a szoba rendszerre épülő JÁTÉK koncepció
> Route: `/roomchallenge`
> Kategória: `brain`

### Játékmenet

A játékos kap egy **célfotót** (egy berendezett szoba képernyőképét) és egy **üres szobát** + bútor készletet. A cél: **reprodukálni a célfotó elrendezését** minél pontosabban, időre.

### Szintek (Expedíció, 10 szint)

| Szint | Szoba | Bútorok száma | Idő | Nehézség |
|-------|-------|--------------|-----|----------|
| 1 | Hálószoba 4×4 | 3 bútor | 60s | Könnyű — nagy bútorok, kevés hely |
| 2 | Hálószoba 4×4 | 4 bútor | 55s | + 1×1 bútor hozzáadva |
| 3 | Hálószoba 5×5 | 5 bútor | 55s | Nagyobb tér |
| 4 | Nappali 5×5 | 5 bútor | 50s | Új szobatípus |
| 5 | Nappali 6×6 | 6 bútor | 50s | + forgatás kell |
| 6 | Konyha 5×5 | 6 bútor | 45s | Szűk tér + sok 1×1 |
| 7 | Konyha 5×6 | 7 bútor | 45s | + hasonló bútorok |
| 8 | Vegyes 6×6 | 8 bútor | 40s | Több szoba bútora keverve |
| 9 | Kert 7×7 | 8 bútor | 40s | Nagy tér, trükkös elhelyezés |
| 10 | Vegyes 7×7 | 10 bútor | 35s | Mindent bevet |

### Pontozás

```ts
// Minden bútor pozíciója:
//   Tökéletes pozíció (exact match): +10 pont
//   1 cellával mellé: +5 pont
//   2+ cellával mellé: +2 pont (legalább bent van)
//   Helyes forgatás: +3 bónusz
//
// Szint max = bútorok * 13 (10 + 3 forgatás)
// Perfect = minden bútor exact + helyes forgatás
```

### Kártya ritkaság
```ts
calculateRarity(score, total, streak, false)  // sosem gold (standard szabály)
// Level 10 win → legendary (mint minden expedíciós játéknál)
```

### Screen states
```ts
type Screen = "expedition" | "playing" | "reward" | "levelComplete" | "levelFailed"
```

### UI Layout (playing screen)

```
┌──────────────────────────────────┐
│ [✕] Szint 3    ⏱ 42s    5/13 pont│
├──────────────────────────────────┤
│                                   │
│   ┌─── Célfotó (kicsi) ────┐    │
│   │  [ágy] [lámpa] [szekr] │    │
│   └─────────────────────────┘    │
│                                   │
│   ┌─── Te szobád (nagy) ────┐   │
│   │                          │   │
│   │    [üres rács]           │   │
│   │    drag-drop ide         │   │
│   │                          │   │
│   └──────────────────────────┘   │
│                                   │
│   ┌── Bútorok (alul) ──────┐    │
│   │ [🛏] [💡] [🗄] [📺]    │    │
│   └─────────────────────────┘    │
├──────────────────────────────────┤
│ [Avatar: mood based on progress] │
└──────────────────────────────────┘
```

### localStorage
```
roomchallenge_expedition_v1 → { currentLevel: number, completedLevels: number[] }
```

---


## PLIZIO LIFE — Élet szimulátor rendszer (NAGY VÍZIÓ)

> Állapot: tervezési fázis (2026-03-05)
> Prioritás: a Room rendszerre épül — először szobák, aztán Life
> Mottó: "Építsd fel az életed Plizio-ban!"

### Alapkoncepció

A Plizio nem csak játékgyűjtemény — hanem egy **virtuális élet szimulátor**. Az avatarodnak élete van:
- Háza/lakása (szoba rendszer)
- Párkapcsolata → házasság
- Gyereke születik (valós idejű terhesség!)
- Háziállat
- Munkahely → fizetés → bútor/szoba vásárlás

Ez ad **hosszú távú célt** és **napi visszatérési okot** — nem csak "még egy játék".

### Életciklus fázisok

```
1. EGYEDÜLÁLLÓ (alapállapot)
   └→ Saját szoba berendezése
   └→ Játékok → ⭐ keresés
   └→ Háziállat vásárlás (opcionális)

2. PÁRKERESÉS
   └→ NPC partner választás (nem multiplayer, hanem karakter lista)
   └→ "Randizás" mini-játékok (kérdések, ajándékok)
   └→ Szívmérő: 0-100% → 100%-nál jöhet a lánykérés

3. HÁZASSÁG
   └→ Esküvő animáció (avatár + partner együtt)
   └→ Partner beköltözik → új bútorok unlocked
   └→ Partner néha feladatokat ad ("Vegyél virágot!" → +szív)

4. TERHESSÉG (valós idejű!)
   └→ Aktiválás: bizonyos szint + házasság után opció
   └→ Időtartam: ~30 valós nap (1 hónap!)
   └→ Avatár kinézet változik (pocak növekszik hetente)
   └→ "Készülődés" feladatok: pelenkát venni, bölcsőt venni, stb.
   └→ Heti milestone-ok (ultrahang emoji, nemi felismerés, stb.)

5. GYEREK SZÜLETÉSE
   └→ Születés animáció 🎉
   └→ Baba avatár megjelenik a szobában
   └→ Gondoskodás feladatok: etetés, alvás, játék
   └→ Gyerek növekedése (hetek múlva totyogó, hónapok múlva kisgyerek)

6. CSALÁD ÉLET
   └→ Családi szoba (gyerekszoba bútorok unlocked)
   └→ Gyerek "segít" játékokban (kis bónusz)
   └→ Családi kihívások (napi feladatok bővülnek)
```

### Partner rendszer (NPC)

**NEM multiplayer** — hanem előre definiált NPC partnerek közül választ a játékos.

| Partner | Személyiség | Kedvenc játék | Speciális |
|---------|------------|--------------|-----------|
| Luna | Csendes, okos | Kodex | Könyv ajándék → +szív |
| Max | Energikus, vicces | Reflex Rush | Sport bútorok unlocked |
| Mira | Kreatív, művész | Pattern Forge | Dekor bútorok unlocked |
| Leo | Tudós, kíváncsi | Math Test | Tech bútorok unlocked |
| Aria | Természetimádó | Sky Climb | Kert bútorok unlocked |
| Rex | Sportos, bátor | Number Rush | Edzőterem bútorok unlocked |

Minden partnernek:
- Saját avatár megjelenés (szín, ruha, arc)
- 3-4 "randizás" mini-jelenet (válaszd a jó választ)
- Kedvenc ajándéktípus (virág, könyv, étel, stb.)
- Speciális bútor/szoba unlock házasság után

### Szívmérő rendszer

```
Szív: 0 ──────────────────── 100%
      │                       │
   Ismerős              Lánykérés!

Szív növelés:
  +5  Napi bejelentkezés (ha van partner)
  +3  Ajándék vásárlás (max 1/nap, ⭐-ért)
  +10 Kedvenc ajándék megtalálása
  +5  Partner kedvenc játékában jó eredmény
  -2  Kihagyott nap (nem jelentkeztél be)

Lánykérés feltétel: szív >= 100% + gyűrű megvásárlása (15⭐)
```

### Terhesség rendszer (30 nap valós idő)

| Hét | Nap | Esemény | Avatár változás | Feladat |
|-----|-----|---------|----------------|---------|
| 1 | 1-7 | Bejelentés 🎉 | — | — |
| 2 | 8-14 | Első ultrahang | Kis pocak | Bölcső vásárlás (8⭐) |
| 3 | 15-21 | Nemi felismerés (opcionális) | Közepes pocak | Pelenkák (3⭐) |
| 4 | 22-28 | Rúgás! 👶 | Nagy pocak | Babaszoba berendezés |
| 4+ | 29-30 | SZÜLETÉS! | Normál alak | — |

**Avatár terhesség vizuál:**
- Az AvatarCompanion-ben a test mesh-hez hozzáadott gömb (pocak)
- `pocakScale`: 0 → 0.3 → 0.5 → 0.7 (hétről hétre nő)
- Ruha automatikusan "terhes" verzióra vált (ha van)

**Napi visszatérés ösztönzés:**
- Ha nem lépsz be → a terhesség "szünetel" (nem halad a timer)
- Tehát 30 AKTÍV nap kell, nem 30 naptári nap
- Ez biztosítja hogy nem bünteti a kihagyást, de jutalmazz a napi visszatérést

### Gyerek rendszer

**Gyerek növekedése (valós idejű):**
| Kor | Idő (aktív napok) | Megjelenés | Képesség |
|-----|-------------------|-----------|----------|
| Újszülött | 0-7 nap | Baba (kicsi, bölcsőben) | Etetni kell naponta |
| Csecsemő | 8-21 nap | Kúszó baba | Játékot kér |
| Totyogó | 22-45 nap | Álló kisgyerek | Kisebb játékokban "segít" (+5% bónusz) |
| Kisgyerek | 46+ nap | Mini avatár | Saját szobát kér, kis feladatokat ad |

**Gondoskodás feladatok (napi):**
| Kor | Feladat | Ha kihagyod |
|-----|---------|------------|
| Újszülött | Etetés (1 kattintás) | Sírás animáció 😢 |
| Csecsemő | Etetés + játék | Szomorú mood |
| Totyogó | Játék + öltöztetés | "Unatkozik" |
| Kisgyerek | Választ egy játékot amit együtt "játsztok" | — |

**Gondoskodási szint → jutalom:**
- 7 egymást követő nap gondoskodás → +3⭐
- 30 nap → +10⭐ + speciális gyerek ruha

### Háziállat rendszer

Egyszerűbb mint a gyerek — de hasonló gondoskodás:

| Állat | Ár | Szoba | Speciális |
|-------|-----|-------|-----------|
| Kutya 🐕 | 10⭐ | Nappali | Ugrál ha hazaérsz |
| Cica 🐱 | 8⭐ | Hálószoba | Dorombol (animáció) |
| Hal 🐠 | 5⭐ | Akvárium bútor kell! | Úszkál |
| Nyuszi 🐰 | 7⭐ | Kert | Ugrál a kertben |
| Papagáj 🦜 | 12⭐ | Nappali | Beszél (random szövegbuborékok) |

Napi: etetés (1 kattintás) → boldogság nő → ha elégedett → bónusz ⭐

### Munkahely rendszer (passzív bevétel)

Az avatár "dolgozik" — minden nap kap fizetést (passzív ⭐):

| Állás | Feltétel | Napi fizetés | Speciális |
|-------|---------|-------------|-----------|
| Gyakornok | — | 1⭐/nap | Alap |
| Programozó | 50 játék | 2⭐/nap | Tech bútorok -20% |
| Tanár | 100 játék + matek master | 2⭐/nap | Edu játékok +bónusz |
| Művész | 200 játék + minden skin | 3⭐/nap | Dekor bútorok -30% |
| Igazgató | 500 játék + 50 legendary kártya | 5⭐/nap | Minden -20% |

A fizetés naponta 1× gyűjthető be (nem automatikus — be kell lépni!).

### localStorage kulcsok (Life rendszer)

| Kulcs | Tartalom |
|-------|---------|
| `plizio_life_partner` | `{ id: string, hearts: number, married: boolean, marriedDate: string } \| null` |
| `plizio_life_pregnancy` | `{ startDate: string, activeDays: number, gender: "boy"\|"girl"\|null } \| null` |
| `plizio_life_child` | `{ birthDate: string, activeDays: number, name: string, gender: "boy"\|"girl", lastCaredDate: string, careStreak: number } \| null` |
| `plizio_life_pet` | `{ type: string, name: string, happiness: number, lastFedDate: string } \| null` |
| `plizio_life_job` | `{ id: string, startDate: string } \| null` |
| `plizio_life_gifts` | `{ lastGiftDate: string, totalGifts: number }` |

### TypeScript típusok (tervezett)

```ts
interface PartnerState {
  id: string           // "luna" | "max" | "mira" | "leo" | "aria" | "rex"
  hearts: number       // 0-100
  married: boolean
  marriedDate?: string // ISO date
}

interface PregnancyState {
  startDate: string    // mikor kezdődött
  activeDays: number   // hány aktív nap telt el (max 30)
  gender: "boy" | "girl" | null  // 3. héttől derül ki
  lastActiveDate: string
}

interface ChildState {
  birthDate: string
  activeDays: number   // kor aktív napokban
  name: string         // játékos választ nevet
  gender: "boy" | "girl"
  lastCaredDate: string
  careStreak: number
}

interface PetState {
  type: "dog" | "cat" | "fish" | "bunny" | "parrot"
  name: string
  happiness: number    // 0-100
  lastFedDate: string
}

type JobId = "intern" | "programmer" | "teacher" | "artist" | "director"
```

### Megvalósítási fázisok

| Fázis | Tartalom | Becsült idő |
|-------|---------|-------------|
| **1. Szoba rendszer** | IsoRoom + bútorok + shop tab + drag-drop | 1-2 nap |
| **2. Háziállat** | Pet választó + etetés + animáció szobában | 0.5 nap |
| **3. Munkahely** | Állás rendszer + napi fizetés | 0.5 nap |
| **4. Partner + házasság** | NPC partnerek + randizás + szívmérő + esküvő | 1 nap |
| **5. Terhesség** | 30 napos timer + avatár pocak + feladatok | 1 nap |
| **6. Gyerek** | Születés + növekedés fázisok + gondoskodás | 1 nap |
| **7. Polish** | Animációk, hangulat, teljes integráció | 1 nap |

**Összesen: ~6 nap** (a szoba rendszer után)

### UI helye

```
/room          → Szoba nézet (bútorok, berendezés)
/life          → Élet dashboard (partner, gyerek, háziállat, munka)
/life/partner  → Partner választó / randizás
/life/baby     → Terhesség állapot / gyerek gondoskodás
```

Vagy: mindez egyetlen oldalon (/room), tabokkal:
- 🏠 Szoba
- 💕 Család
- 🐾 Háziállat
- 💼 Munka

### Kapcsolódás meglévő rendszerekhez

| Rendszer | Kapcsolódás |
|----------|------------|
| Shop (⭐) | Bútorok, szobák, ajándékok, állatok vásárlása |
| Napi feladatok | + gondoskodás feladatok (gyerek, állat) |
| Milestones | Házassági milestone, szülői milestone |
| Avatar | Terhesség pocak, partner megjelenés szobában |
| Játékok | Partner kedvenc játéka → bónusz, gyerek "segít" |
| World map | Szoba = "otthon" a világtérképen, innen indulsz |

---

### SZÁMLA RENDSZER — "Minél nagyobb luxus, annál több játék"

> Ez a Plizio Life KÖZPONTI MOTORJA — ez tartja vissza a játékost napról napra!
> Elv: a játékos maga építi fel az életét, de azt FENN IS KELL TARTANI.

#### Alapkoncepció

Minden birtokolt szoba, bútor, állat, családtag **heti fenntartási költséget** generál.
Ha a játékos nem fizeti → nem veszít semmit, de a "boldogság" és vizuális állapot romlik.
A játékos **maga dönti el** mekkora életet akar → mekkora "számlát" vállal.

#### Életszintek és heti költségek

| Életszint | Leírás | Heti számla | Napi játékigény |
|-----------|--------|------------|-----------------|
| 🏠 Minimál | 1 szoba, alap bútorok, nincs állat | ~5⭐/hét | 1-2 játék/nap |
| 🏡 Kényelmes | 2 szoba, pár extra bútor, 1 állat | ~15⭐/hét | 3-4 játék/nap |
| 🏘️ Családi | 3 szoba, partner, gyerek, állat | ~30⭐/hét | Napi aktív játék |
| 🏰 Luxus | 4+ szoba, minden max, teljes család | ~50⭐/hét | Hardcore játékos |
| 👑 Mogul | Minden szoba, minden bútor, teljes Life | ~70⭐/hét | Napi dedikált játék |

#### Számla összetevők (részletes)

| Költségtípus | Mennyiség | Mikor jön | Megjegyzés |
|-------------|-----------|-----------|------------|
| **Szoba rezsi** | 1-3⭐/szoba/hét | Hétfőnként | Hálószoba ingyenes, többi fizetős |
| **Luxus bútor fenntartás** | 0.5-1⭐/bútor/hét | Hétfőnként | Csak drága bútorokra (>10⭐ árú) |
| **Állat etetés** | 1⭐/állat/hét | Folyamatos | Etetés kattintás = "fizetés" |
| **Partner ajándék** | 2⭐/hét | Ha van partner | Szív szinten tartáshoz |
| **Gyerek igények** | 2-3⭐/hét | Ha van gyerek | Életkor alapján nő |
| **Munkahely ruha** | 1⭐/hét | Ha van jobb állás | Programozó+ szint |

#### Számla kiszámítás képlet

```ts
function calculateWeeklyBill(state: LifeState): number {
  let bill = 0;

  // Szoba rezsi (hálószoba ingyenes)
  const paidRooms = state.ownedRooms.filter(r => r !== "bedroom");
  bill += paidRooms.length * 2;  // 2⭐/extra szoba

  // Luxus bútorok (>10⭐ ár) fenntartása
  const luxuryFurniture = state.allPlacedFurniture
    .filter(f => getFurnitureDef(f.furnitureId)?.price > 10);
  bill += Math.ceil(luxuryFurniture.length * 0.5);

  // Állat
  if (state.pet) bill += 1;

  // Partner
  if (state.partner && !state.partner.married) bill += 1;  // randizás
  if (state.partner?.married) bill += 2;  // házas → ajándékok

  // Gyerek
  if (state.child) {
    const age = state.child.activeDays;
    if (age < 7) bill += 1;        // újszülött
    else if (age < 21) bill += 2;  // csecsemő
    else if (age < 45) bill += 2;  // totyogó
    else bill += 3;                // kisgyerek
  }

  // Munkahely
  if (state.job && state.job.id !== "intern") bill += 1;

  return bill;
}
```

#### Számla fizetés mechanizmusa

**Mikor:** Minden hétfőn (vagy 7 aktív nap után) megjelenik a **"Heti számla"** popup:

```
┌──────────────────────────────────┐
│      📋 Heti számla              │
│                                   │
│  🏠 Szoba rezsi (3 szoba)   6⭐  │
│  🛋️ Luxus bútorok           3⭐  │
│  🐱 Cica etetés              1⭐  │
│  💕 Partner ajándék           2⭐  │
│  👶 Gyerek igények            2⭐  │
│  ──────────────────────────────  │
│  ÖSSZESEN:                  14⭐  │
│                                   │
│  Egyenleged: 23⭐                │
│                                   │
│  [💰 Fizetek]    [⏳ Később]     │
└──────────────────────────────────┘
```

#### Ha NEM fizet (nincs büntetés, csak motiváció!)

**FONTOS SZABÁLY:** Soha ne büntessük a játékost keményen! Nem veszít bútort, szobát, partnert.

| Hány hete nem fizetett | Hatás | Vizuális feedback |
|------------------------|-------|------------------|
| 1 hét | Fények halványabbak a szobában | Ambient light -30% |
| 2 hét | Állat szomorú mood | 😢 buborék az állat felett |
| 3 hét | Partner szív -10/hét (lassan csökken) | Szív ikon szürkül |
| 4+ hét | Szoba "koszos" overlay (halványan) | Szemét/por SVG részecskék |
| 4+ hét | Avatár mood: disappointed | Automatikus mood |
| 4+ hét | Gyerek "unatkozik" (nem ad bónuszt) | 😐 buborék |

**Visszaállítás:** Bármikor fizet → **azonnal** visszaáll minden! Nincs "büntetés periódus".

#### Számla csökkentő mechanizmusok (smart spending)

| Módszer | Hatás | Hogyan |
|---------|-------|--------|
| **Munkahely fizetés** | Napi 1-5⭐ bevétel | Automatikus, ha van munka |
| **Takarékos mód** | Kikapcsolt szoba = nem fizet rezsit | Szoba "kikapcs" gomb |
| **DIY bútorok** | Olcsóbb bútoroknak nincs fenntartás | <10⭐ árú bútorok ingyen |
| **Kertész állás** | Állat etetés ingyenes | Speciális állás perk |
| **Családi csomag** | Gyerek+partner = 3⭐ összesen, nem 4-5 | Ha mindkettő van |

#### Szoba "kikapcsolás" (takarékos mód)

Ha a játékos nem akar annyit fizetni, **kikapcsolhat** szobákat:
- Kikapcsolt szoba: sötét, bútorok szürkék, nem interaktív
- NEM fizet rezsit utána
- Bármikor visszakapcsolható
- Bútorok megmaradnak, nem kell újra venni

```ts
interface RoomState {
  id: string;
  active: boolean;  // true = aktív (fizet), false = kikapcsolt
}
```

#### Játékon belüli bevétel vs számla egyensúly

**Cél: a számla MINDIG kifizethető legyen** ha a játékos napi 10-15 percet játszik.

| Bevételi forrás | Napi max | Heti max |
|----------------|---------|---------|
| Kártya beváltás | ~1⭐ | ~7⭐ |
| Napi jutalom | 1⭐ | 7⭐ |
| Share | 1⭐ | 7⭐ |
| Munkahely | 1-5⭐ | 7-35⭐ |
| Milestone-ok | alkalmi | alkalmi |
| Streak bónusz | — | 2-5⭐ |
| **Napi összesen** | **~4-8⭐** | **~30-60⭐** |

**Tehát:**
- Minimál szint (5⭐/hét) → bárki könnyedén kifizeti
- Kényelmes (15⭐/hét) → napi pár játékkal megy
- Luxus (50⭐/hét) → munkahely fizetés + aktív játék kell
- Mogul (70⭐/hét) → jó állás + napi dedikált idő — de elérhető!

#### localStorage kulcsok (számla rendszer)

| Kulcs | Tartalom |
|-------|---------|
| `plizio_life_bills` | `{ lastBillDate: string, unpaidWeeks: number, totalPaid: number }` |
| `plizio_rooms_active` | `Record<roomId, boolean>` (aktív/kikapcsolt) |

#### TypeScript típusok

```ts
interface BillState {
  lastBillDate: string;    // utolsó számla dátuma
  unpaidWeeks: number;     // hány hete nem fizetett (0 = rendben)
  totalPaid: number;       // összes kifizetett ⭐ (statisztika)
}

interface WeeklyBill {
  roomCost: number;
  furnitureCost: number;
  petCost: number;
  partnerCost: number;
  childCost: number;
  jobCost: number;
  total: number;
  discount: number;        // családi csomag stb.
}
```

#### UI megjelenés

**Szoba nézetben:** jobb felső sarokban kis ikon mutatja az aktuális heti költséget:
```
┌─────┐
│ 📋  │
│ 14⭐│
│/hét │
└─────┘
```

**Főoldalon:** Ha van fizetetlen számla → kis piros badge:
```
🏠 Szobám  🔴
```

**Dashboard-on:** Havi statisztika grafikon:
- Bevétel (zöld) vs Kiadás (piros) görbe
- "Megtakarítás" szám

#### Pszichológiai hatás (miért működik)

1. **Befektetés érzés** — "Megvettem ezt a szobát, nem akarom elveszíteni a fényét"
2. **Felelősség** — "Az állatom éhes, játszanom kell"
3. **Státusz** — "Nekem 5 szobám van és mind világít!" → büszkeség
4. **Választás** — A játékos MAGA dönt a nehézségről (nem mi kényszerítjük)
5. **Nincs frusztráció** — Nem veszít semmit, csak a "csillogás" csökken
6. **Progresszió érzet** — Jobb munkahely → nagyobb ház megengedhető → cél

---


## PLIZIO PHONE — Játékon belüli telefon navigáció

> A játékos avatárjának VAN TELEFONJA — ez a fő menü, navigáció, és kommunikáció!
> Nem hagyományos navbar/sidebar, hanem egy **vizuális telefon UI** a szobán belül.

### Alapkoncepció

A szoba nézetben az avatár kezében / a képernyő alján megjelenik egy **telefon ikon**.
Rákattintva **kinyílik a telefon** — rajta appok, értesítések, üzenetek.
Ez a TELJES navigáció — nincs külön menüsor, minden a telefonból érhető el.

### Telefon UI — "Plizio Phone"

```
┌─────────────────────────┐
│  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │
│  📱 PlizioPhone   14:32 │
│  ─────────────────────── │
│                           │
│  🎮 Játékok    🛒 Shop   │
│                           │
│  🏠 Szobám     👤 Profil  │
│                           │
│  💬 Üzenetek   📋 Feladatok│
│                           │
│  🗺️ Világtérkép 📊 Statok │
│                           │
│  🃏 Kártyák    ⚙️ Beállítás│
│                           │
│  ─────────────────────── │
│  🔔 2 új értesítés        │
│  ─────────────────────── │
│  ⭐ 47        🃏 156      │
│  ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ │
└─────────────────────────┘
```

### Telefon appok (ikonok a "kezdőképernyőn")

| App ikon | Név | Hova visz | Megjegyzés |
|----------|-----|-----------|------------|
| 🎮 | Játékok | Játékválasztó (főoldal) | Kategóriákkal |
| 🛒 | Shop | `/shop` | Skinok, bútorok, ruhák |
| 🏠 | Szobám | `/room` | Szoba nézet (ha már bent van → bezárja a telefont) |
| 👤 | Profil | `/profile` | Avatar szerkesztő |
| 💬 | Üzenetek | Chat overlay | Más felhasználóknak üzenet |
| 📋 | Feladatok | Napi feladat lista | Heti számla is itt |
| 🗺️ | Térkép | `/world` | Plizio World térkép |
| 📊 | Statisztikák | `/dashboard` | Játék statisztikák |
| 🃏 | Kártyák | `/collection` | Kártyagyűjtemény |
| ⚙️ | Beállítások | Nyelv, hang, stb. | Overlay |
| 💕 | Kapcsolatok | Partner/család kezelés | Csak ha van partner |
| 🐾 | Háziállat | Állat gondozás | Csak ha van állat |
| 💼 | Munka | Munkahely infó | Fizetés begyűjtés itt |

### Telefon megjelenés a szobában

**Zárt állapot:** Kis telefon ikon a képernyő jobb alsó sarkában (vagy az avatár kezében)
```
                          ┌────┐
  [szoba nézet...]        │ 📱 │  ← kattintásra nyílik
                          │ 🔴 │  ← piros pötty ha van értesítés
                          └────┘
```

**Nyitott állapot:** Képernyő közepén megjelenik a telefon (overlay, a szoba mögötte halványan látszik)

### Értesítések rendszer

A telefon ikonján **badge** jelzi ha van valami:

| Értesítés típus | Mikor | Badge szín |
|----------------|-------|------------|
| Új üzenet | Más felhasználó írt | 🔴 piros |
| Számla esedékes | Hétfőnként | 🟡 sárga |
| Napi feladat kész | Teljesítettél egy feladatot | 🟢 zöld |
| Állat éhes | Nem etettél | 🟠 narancs |
| Partner üzenet | Partner feladatot ad | 💕 rózsaszín |
| Új tartalom | Új játék/bútor elérhető | 🔵 kék |

### Üzenetküldés (💬 app)

**Egyszerű chat más felhasználókkal:**
```
┌─────────────────────────┐
│  💬 Üzenetek              │
│  ─────────────────────── │
│                           │
│  👤 xy_player       14:20 │
│    "Szép a szobád!"       │
│                           │
│  👤 gamer123       13:45  │
│    "Gyere meccsezni!"     │
│                           │
│  ─────────────────────── │
│  [Új üzenet írása...]     │
│  ─────────────────────── │
└─────────────────────────┘
```

**Üzenet típusok:**
- Szöveges üzenet (max 200 karakter)
- Szoba meghívó ("Nézd meg a szobám!")
- Meccs kihívás ("Játsszunk!")
- Ajándék küldés (⭐-ért vásárolt virtuális ajándék)

### Telefon animáció

**Kinyitás:**
```
1. Telefon ikon → kattintás
2. Telefon "felemelkedik" (scale: 0.3 → 1.0, opacity: 0 → 1)
3. Szoba háttér blur + sötétedik
4. App ikonok egymás után "bepattannak" (staggered animation)
```

**Bezárás:**
```
1. Telefon "lecsúszik" vagy scale → 0
2. Szoba háttér visszaáll
```

### Telefon testreszabás (EXTRA — shop item!)

A telefon kinézetét is lehet customizálni a shopban:

| Elem | Példák | Ár |
|------|--------|-----|
| Telefon szín | Fekete, Fehér, Rózsaszín, Arany | 3-5⭐ |
| Telefon tok | Neon, Pixel art, Fa mintás | 5-8⭐ |
| Háttérkép | Tájkép, Neon, Avatár szelfie | 2-4⭐ |
| Csengőhang | (vizuális effekt értesítésnél) | 3⭐ |

### Technikai megvalósítás

**Komponens:** `components/PlizioPhone.tsx`

```tsx
interface PhoneProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  starBalance: number;
  cardCount: number;
}
```

**State kezelés:**
```ts
// Telefon nyitott/zárt
const [phoneOpen, setPhoneOpen] = useState(false);

// Értesítések
const [notifications, setNotifications] = useState<Notification[]>([]);

// Aktív app (melyik "oldal" van nyitva a telefonon belül)
const [activeApp, setActiveApp] = useState<string | null>(null);
```

**Routing logika:**
- Egyes appok **overlay-ként** nyílnak (üzenetek, beállítások, feladatok)
- Más appok **navigálnak** (`router.push('/shop')`) és bezárják a telefont
- A szoba nézet a "home" — ide tér vissza mindig

### localStorage kulcsok

| Kulcs | Tartalom |
|-------|---------|
| `plizio_phone_skin` | `{ color: string, case: string, wallpaper: string }` |
| `plizio_notifications` | `Notification[]` |
| `plizio_messages` | `Message[]` |

### Telefon megjelenés játék KÖZBEN

Játék közben a telefon **NEM elérhető** (ne zavarjon):
- Szoba nézetben: igen ✅
- Világtérképen: igen ✅ (kis méretben)
- Játék közben (playing screen): NEM ❌
- Játék eredmény képernyőn: igen ✅ (visszatéréshez)

### Kapcsolódás a szoba rendszerhez

A telefon a szoba nézet RÉSZE — nem külön oldal:
```
/room oldal:
  ├── Izometrikus szoba (háttér)
  ├── Bútorok (interaktív)
  ├── Avatár (szobában áll/ül)
  └── Telefon ikon (jobb alul)
       └── Kinyitva: teljes telefon UI overlay
```

**A `/room` lesz az ÚJ FŐOLDAL** — a játékos ide érkezik, és a telefonból navigál mindenhova!

---


## PLIZIO WORLD LIFE — Teljes virtuális világ koncepció

> Ez az ÖSSZEFOGLALÓ VÍZIÓ — minden rendszer (szoba, telefon, life, multiplayer) hogyan áll össze.
> A Plizio nem játékgyűjtemény. A Plizio egy **virtuális világ**.

### Világ struktúra — Helyszínek

A játékos avatárja egy **világban** él. Nem oldalak között navigál, hanem **helyszínekre megy**.

| Helyszín | Leírás | Mit csinál ott | Izometrikus nézet |
|----------|--------|---------------|-------------------|
| 🏠 Otthon | Saját szoba/ház | Berendez, pihen, családdal van | Szoba belső |
| 🛒 Bevásárlóközpont | Shop + bútor bolt | Vásárol (ruha, skin, bútor, autó) | Bolt belső |
| 🏖️ Tengerpart | Nyaralás, társasági hely | Más játékosokkal találkozik, napozik | Strand nézet |
| 🏙️ Városközpont | Játékterem + munkahelyek | Játékokat játszik, dolgozik | Város utca |
| 🏞️ Park | Séta, háziállat sétáltatás | Állat boldogság nő, random NPC-k | Park nézet |
| 🏫 Iskola | Oktatási játékok | Matek teszt, nyelvtanulás | Iskola belső |
| 🎪 Szórakozóhely | Multiplayer meccsek | Kihívások, versenyek | Aréna nézet |
| 🏥 Kórház | Terhesség, gyerek születés | Ultrahang, születés animáció | Kórház belső |

### Közlekedés — Autó rendszer

A játékos **autóval** közlekedik a helyszínek között!

**Autó mint státuszszimbólum:**

| Autó | Ár | Sebesség | Különleges |
|------|-----|---------|-----------|
| 🚲 Bicikli | 0⭐ | Lassú (alap) | Ingyenes, mindenki kap |
| 🛵 Robogó | 10⭐ | Közepes | Első upgrade |
| 🚗 Kis autó | 25⭐ | Normál | Alap autó |
| 🚙 SUV | 40⭐ | Normál | Családi (gyerekkel is elfér) |
| 🏎️ Sportautó | 60⭐ | Gyors | Szép animáció |
| 🚐 Lakóautó | 50⭐ | Lassú | Nyaraláson "mobil szoba"! |
| 🏍️ Motor | 35⭐ | Gyors | Cool faktor |
| 🚁 Helikopter | 100⭐ | Instant | Luxus — bárhova azonnal |

**Autó megjelenés:**
- Helyszínek közötti utazásnál rövid **vezetés animáció** (2-3 másodperc)
- SVG izometrikus autó a város nézetben
- Parkolóhely a ház mellett (autó látható!)
- Autó testreszabás: szín, matrica (shop-ban)

**localStorage:** `plizio_owned_vehicles`, `plizio_active_vehicle`

### Háziállat avatárok — SVG állat rendszer

Minden állatnak **saját izometrikus SVG avatár** van, nem csak emoji!

**Állat típusok (bővített lista):**

| Állat | Ár | Hol él | Méret | Animáció | Különleges |
|-------|-----|--------|-------|----------|-----------|
| 🐕 Kutya | 10⭐ | Ház + Park | Közepes | Farokcsóválás, ugrálás | Sétáltatni kell a parkban |
| 🐱 Cica | 8⭐ | Ház | Kicsi | Dorombolás, nyújtózkodás | A bútorra mászik! |
| 🐹 Hörcsög | 5⭐ | Ház (ketrec bútor) | Apró | Kerékben fut | Ketrec bútor kell |
| 🐰 Nyuszi | 7⭐ | Kert | Kicsi | Ugrál | Kertben szabadon mozog |
| 🦜 Papagáj | 12⭐ | Ház | Kicsi | Szárnycsapkodás | Szövegbuborékok (random mondatok) |
| 🐠 Halak | 5⭐ | Akvárium bútor | Apró | Úszkálás | Akvárium bútor kell! |
| 🐢 Teknős | 6⭐ | Kert | Kicsi | Lassú séta | Hosszú életű, kevés gondozás |
| 🐍 Kígyó | 15⭐ | Ház (terrárium) | Közepes | Tekeredés | Ritka, cool faktor |
| 🦎 Kaméleon | 20⭐ | Ház | Kicsi | Színváltás! | Szoba színéhez alkalmazkodik |
| 🐎 Ló | 30⭐ | Kert (istálló) | Nagy | Ágaskodás | Lovaglás animáció a parkban |

**Állat interakciók:**
- Simogatás (kattintás) → boldogság +5, kis szív animáció
- Etetés (napi) → boldogság +10, ha elfelejted → -5/nap
- Játék (labda, csont, stb.) → boldogság +8
- Sétáltatás (kutya, parkba vinni) → boldogság +15
- Több állat tartható egyszerre!

**Állat mood-ok (vizuális):**
| Boldogság | Megjelenés |
|-----------|-----------|
| 80-100% | Boldog szem, farokcsóválás, szívek |
| 50-79% | Normál |
| 20-49% | Szomorú szem, lógó fül/farok |
| 0-19% | Sírós szem, nem mozog, "..." buborék |

### Társasági rendszer — Találkozás más játékosokkal

**Helyszín alapú multiplayer:**

A tengerparton, parkban, szórakozóhelyen **más online játékosok avatárjai is megjelennek**.

```
┌─────────────────────────────────────────┐
│  🏖️ Tengerpart                          │
│                                          │
│  [avatár1]     [te avatárod]   [avatár3] │
│   xy_player     ★ te ★        gamer99   │
│     🐕                          🐱       │
│  ~~~~~~~~ tenger ~~~~~~~~~               │
│                                          │
│  [avatár4]            [avatár5]          │
│   luna22              max_pro            │
└─────────────────────────────────────────┘
```

**Interakció más avatárokkal — rákattintás:**

Ha rákattintasz egy másik avatárra, megjelenik egy **interakciós menü**:

```
┌──────────────────────┐
│  👤 xy_player         │
│  Level 12 ⭐ 234      │
│  ──────────────────── │
│  👋 Köszönés          │
│  💬 Csevegés          │
│  🎮 Kihívás (meccs)   │
│  🎁 Ajándék küldés    │
│  👀 Profil megtekintés │
│  🏠 Szoba meglátogatás │
└──────────────────────┘
```

#### Köszönés / Üdvözlés animációk

Gyors egykattintásos interakciók — nem kell chatablak:

| Akció | Animáció | Másik fél látja |
|-------|----------|----------------|
| 👋 Integetés | Avatár integet (wave mood) | "xy_player integetett neked!" |
| 🤝 Pacsizás | Mindkét avatár pacsi animáció | Szinkronizált |
| 🫂 Ölelés | Avatárok közel + szív | Csak ha elfogadja |
| 💃 Tánc | Avatár táncol (dance mood) | Látja mindenki |
| 😂 Nevetés | Avatár nevet (laughing mood) | "Haha" buborék |

#### Csevegés — Chat ablak

Ha "Csevegés"-t választod, megnyílik egy **kettős chatablak**:

```
┌──────────────────────────────┐
│  💬 Csevegés: xy_player       │
│  ────────────────────────────│
│                               │
│  xy_player: Szép a szobád! 😊 │
│                               │
│        te: Köszi! A kanapé    │
│            új, tegnap vettem  │
│                               │
│  xy_player: Mennyi volt?      │
│                               │
│        te: 10 csillag         │
│                               │
│  xy_player: Játsszunk egyet?  │
│                               │
│  ────────────────────────────│
│  [Üzenet írása...      ] [📤] │
│                               │
│  😊 😂 👍 ❤️ 🎮 [Emoji panel]  │
│                               │
│  [🎮 Kihívás] [🎁 Ajándék]    │
└──────────────────────────────┘
```

**Chat funkciók:**
- Szöveges üzenet (max 200 karakter, szűrt — nincs káromkodás)
- Emoji gyors gombok
- "Kihívás" gomb → egyből meccs meghívó
- "Ajándék" gomb → virtuális ajándék (virág, szív, csillag)
- Chat előzmények mentve (localStorage + Supabase)

**Biztonsági szűrők:**
- Profanity filter (többnyelvű)
- Személyes adat blokkolás (email, telefon, cím pattern felismerés)
- Report gomb minden üzeneten
- Gyerekbarát: max 200 karakter, nincs kép küldés

### Nyaralás rendszer — Tengerpart

A tengerpart nem csak társasági hely, hanem **tevékenységek** is vannak:

| Tevékenység | Leírás | Jutalom |
|-------------|--------|---------|
| 🏊 Úszás | Kattintás → úszás animáció | +boldogság |
| 🏄 Szörfözés | Mini-játék (egyensúly) | +1⭐ |
| 🏰 Homokvárat épít | Kattintgatós mini-játék | +boldogság, szép homokvar SVG |
| 🍦 Fagyi vásárlás | 1⭐ → fagyi az avatár kezében | +boldogság, +partner szív |
| 📸 Szelfizés | Avatár + háttér → megosztható | +share jutalom |
| 🎣 Horgászás | Mini-játék (timing) | Hal → akvárium/eladás |

**Nyaralás költsége:**
- Belépés a tengerpartra: 2⭐ (naponta, vagy heti bérlet 10⭐)
- Tevékenységek extra költsége: 0-2⭐
- Partnert is viheted: +szív bónusz!

### Szoba meglátogatás — "Nézd meg a házam!"

Más játékosok szobáját is meg lehet nézni:

```
1. Rákattintasz avatárra → "Szoba meglátogatás"
2. Betölt AZ Ő szobája (read-only nézet)
3. Látod a bútorait, állatát, családját
4. Tudsz reakciót adni: ❤️ "Szép!", 👍 "Cool!", ⭐ "Wow!"
5. Reakciók száma megjelenik a háztulaj profilján
```

**Szoba rangsor:**
- Legtöbb ❤️ reakció → "Hét háza" badge
- Kategóriák: "Legszebb hálószoba", "Legjobb kert", stb.
- Havi verseny → győztes kap 10⭐

### Avatar interakció animációk (szinkronizált)

Két avatár közötti interakciók:

| Interakció | Avatár 1 | Avatár 2 | Trigger |
|-----------|---------|---------|---------|
| Pacsizás | Jobb kéz előre | Jobb kéz előre | Mindkét fél elfogadja |
| Ölelés | Karok szélesre | Karok szélesre | Elfogadás kell |
| High-five | Kéz fent | Kéz fent | Gyors, 1 kattintás |
| Tánc együtt | Dance mood | Dance mood | Mindketten táncolnak |
| Ajándék átadás | Kéz előre (tárggyal) | Kéz kinyújtva | Ajándék küldésnél |

### Supabase táblák (társasági rendszer)

```sql
-- Jelenlét helyszínenként
location_presence:
  user_name    string
  location     string    -- "beach" | "park" | "arcade" | "mall"
  last_seen    timestamp
  avatar_data  JSON      -- skin, clothes, accessories snapshot

-- Chat üzenetek
messages:
  id           uuid
  from_name    string
  to_name      string
  content      string    -- max 200 char, filtered
  location     string    -- hol történt
  created_at   timestamp
  read         boolean

-- Szoba reakciók
room_reactions:
  owner_name   string
  visitor_name string
  reaction     "heart" | "thumbsup" | "star"
  room_id      string
  created_at   timestamp

-- Avatar interakciók log
interactions:
  from_name    string
  to_name      string
  type         "wave" | "highfive" | "hug" | "dance" | "gift"
  location     string
  created_at   timestamp
```

### TypeScript típusok (társasági)

```ts
type LocationId = "home" | "beach" | "park" | "city" | "mall" | "school" | "arcade" | "hospital"

interface LocationPresence {
  userName: string
  location: LocationId
  lastSeen: string       // ISO timestamp
  avatarData: AvatarSnapshot  // skin + clothes snapshot
}

interface ChatMessage {
  id: string
  from: string
  to: string
  content: string
  location: LocationId
  createdAt: string
  read: boolean
}

interface AvatarInteraction {
  type: "wave" | "highfive" | "hug" | "dance" | "gift"
  fromUser: string
  toUser: string
  // gift extra:
  giftType?: "flower" | "heart" | "star" | "cake"
  giftCost?: number
}

type VehicleId = "bicycle" | "scooter" | "car" | "suv" | "sports" | "rv" | "motorcycle" | "helicopter"
```

### localStorage kulcsok (új)

| Kulcs | Tartalom |
|-------|---------|
| `plizio_owned_vehicles` | `string[]` |
| `plizio_active_vehicle` | `string` |
| `plizio_owned_pets` | `PetState[]` (több állat!) |
| `plizio_current_location` | `LocationId` |
| `plizio_chat_history` | `ChatMessage[]` (utolsó 100) |
| `plizio_room_reactions_received` | `number` (összesített) |

### Megvalósítási sorrend

| Fázis | Tartalom | Prioritás |
|-------|---------|-----------|
| **1.** | Szoba rendszer + bútorok (már elkezdve!) | ✅ Folyamatban |
| **2.** | Telefon UI + navigáció | Következő |
| **3.** | Állat SVG avatárok + gondozás | Hamar |
| **4.** | Autó rendszer + helyszínek közötti közlekedés | Közepes |
| **5.** | Tengerpart + nyaralás + tevékenységek | Közepes |
| **6.** | Társasági rendszer (jelenlét, chat, interakciók) | Nagy feature |
| **7.** | Szoba meglátogatás + reakciók | Társasági után |
| **8.** | Partner + házasság + gyerek (Life Sim) | Későbbi |
| **9.** | Munkahely + számla rendszer | Life Sim után |
| **10.** | Város nézet + összes helyszín | Végső polish |
