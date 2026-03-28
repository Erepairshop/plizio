# CLAUDE.md - Projekt utasítások

## Repo struktúra

A repo tisztán van szervezve:
- **Forráskód**: `app/`, `components/`, `lib/`, `data/`, `public/`
- **Build output**: `out/` mappa (ez megy a szerverre `public_html/`-be)
- A gyökérben NEM lehetnek build output fájlok (index.html, _next/, stb.)

---

## CODEBASE TÉRKÉP (token-spóroláshoz — ne olvasd újra ha már tudod)

### Oldalak (`app/<játék>/page.tsx`)
| Route | Fájl | Leírás |
|-------|------|--------|
| `/` | `app/page.tsx` | Főoldal, játékválasztó |
| `/kodex` | `app/kodex/page.tsx` | Kódex expedíció (10 szint + titkos kód) |
| `/collection` | `app/collection/page.tsx` | Kártyagyűjtemény + beváltás |
| `/shop` | `app/shop/page.tsx` | Bolt (skinok, kiegészítők) |
| `/profile` | `app/profile/page.tsx` | Profil, avatar szerkesztő |
| `/dashboard` | `app/dashboard/page.tsx` | Statisztikák |
| `/skyclimb` | `app/skyclimb/page.tsx` | Sky Climb játék |
| `/quickpick` | `app/quickpick/page.tsx` | Quick Pick játék |
| `/mathtest` | `app/mathtest/page.tsx` | Matekteszt |
| `/milliomos` | `app/milliomos/page.tsx` | Ki nyer milliót? |
| `/wordscramble` | `app/wordscramble/page.tsx` | Szókeverő |
| `/spotdiff` | `app/spotdiff/page.tsx` | Különbségkereső |
| `/numberrush` | `app/numberrush/page.tsx` | Számroham |
| `/daily` | `app/daily/page.tsx` | Napi kihívás |
| `/memoryflash` | `app/memoryflash/page.tsx` | Memory Flash |
| `/reflexgrid` | `app/reflexgrid/page.tsx` | Reflex Grid |
| `/racetrack` | `app/racetrack/page.tsx` | Versenyút |
| `/citydrive` | `app/citydrive/page.tsx` | Városvezetés |
| `/room` | `app/room/page.tsx` | Izometrikus szoba (bútorok, avatar) |
| `/multiplayer` | `app/multiplayer/page.tsx` | Multiplayer kihivas rendszer |

### Lib fájlok (`lib/`)
| Fájl | Fő funkciók | localStorage kulcsok |
|------|-------------|----------------------|
| `cards.ts` | `getCards()`, `saveCard()`, `removeCardsByRarity()`, `calculateRarity()`, `generateCardId()` | `plizio_cards`, `plizio_redeemed_ids` |
| `specialCards.ts` | `getSpecialCardCount()`, `addSpecialCards()`, `spendSpecialCards()`, `claimShareReward()` | `plizio_special_cards`, `plizio_share_today` |
| `milestones.ts` | `getStats()`, `updateStats()`, `incrementTotalGames()`, `incrementPerfectScores()`, `checkNewMilestones()`, `claimMilestone()` | `plizio_stats`, `plizio_milestones_claimed` |
| `kodex-words.ts` | `getLevelConfig()`, `getPuzzleForLevel()`, `getSecretCode(lang, index)`, `getSecretCodeCount()`, `getVowels()`, `getSpecialKeys()` | — |
| `gender.ts` | `getGender()`, `setGender()` | `plizio_avatar_gender` |
| `skins.ts` | `getSkinDef()`, `getActiveSkin()`, `setActiveSkin()`, `ownSkin()` | `plizio_owned_skins`, `plizio_active_skin` |
| `clothing.ts` | `getActive()`, `getTopDef()`, `getBottomDef()`, `getShoeDef()`, `getCapeDef()`, `getGlassesDef()`, `getGloveDef()` | `plizio_owned_<type>`, `plizio_active_<type>` |
| `accessories.ts` | `getHatDef()`, `getActiveHat()`, `getTrailDef()`, `getActiveTrail()` | `plizio_owned_hats`, `plizio_active_hat`, `plizio_owned_trails`, `plizio_active_trail` |
| `faces.ts` | `getFaceDef()`, `getActiveFace()` | `plizio_owned_faces`, `plizio_active_face` |
| `language.ts` | `type Language = "hu" \| "de" \| "en" \| "ro"` | — |
| `multiplayer.ts` | `createChallenge()`, `acceptChallenge()`, `declineChallenge()`, `cancelChallenge()`, `abandonMatch()`, `submitScore()`, `getMyPendingChallenges()`, `getMySentChallenges()`, `getMyActiveMatches()`, `getMyMatchHistory()`, `subscribeToMatch()`, `GAME_LABELS` | — (Supabase only) |

### Kulcs TypeScript típusok

**`lib/cards.ts`**
```ts
type CardRarity = "bronze" | "silver" | "gold" | "legendary"
interface GameCard { id: string; game: string; theme?: string; rarity: CardRarity; score: number; total: number; date: string }
// calculateRarity(score, total, streak, allowGold: boolean | number = true):
//   pct===100 && streak>=3 → legendary
//   allowGold=false → soha nem gold
//   allowGold=true → goldThreshold=95 (effectivePct>=95 → gold)
//   allowGold=szám → goldThreshold=szám (pl. 85 → effectivePct>=85 → gold)
//   effectivePct>=70 → silver; else bronze
//   streakBonus = min(streak*2, 15); effectivePct = pct + streakBonus
```

**Időbónusz rendszer (2026-03-10) — quiz játékokhoz, láthatatlan a játékosnak:**
```ts
// finalScore = helyes × 100 + max(0, (várható_idő - elapsed) × szorzó)
// calculateRarity(finalScore, maxScore, streak, 85)
// A játékos továbbra is helyes/összes-t lát a képernyőn
```

| Játék | Várható idő | Szorzó | Max bónusz | maxScore |
|-------|------------|--------|-----------|---------|
| Quick Pick | 30s | 10 | 150 | 1150 |
| Math Test | 60s | 10 | 150 | 1150 |
| Daily | 30s | 10 | 150 | 1150 |
| Milliomos | 90s | 5 | 100 | 1600 |

**Kártya ritkaság szabályok játékonként:**
| Játék | Gold lehetséges? | Legendary lehetséges? |
|-------|-----------------|----------------------|
| Reflex Rush | ✅ level 5-től | ✅ level 10 win |
| Number Rush | ✅ level 4-től | ✅ level 10 win |
| Kodex | ❌ `calculateRarity(..., false)` | ✅ level 10 win |
| Sky Climb | ❌ `calculateRarity(..., false)` | ❌ |
| Quick Pick | ✅ `calculateRarity(combined, 1150, streak, 85)` | ✅ 100%+streak≥3 |
| Math Test | ✅ `calculateRarity(combined, maxScore, streak, 85)` | ✅ 100%+streak≥3 |
| Milliomos | ✅ `calculateRarity(combined, 1600, streak, 85)` | ✅ 15/15+streak≥3 |
| Daily | ✅ `calculateRarity(combined, 1150, 0, 85)` | ❌ (streak=0 always) |
| Word Scramble | ❌ `calculateRarity(..., false)` | ❌ |
| Spot Diff | ❌ `calculateRarity(..., false)` | ❌ |
| Memory Flash | ❌ `calculateRarity(..., false)` | ❌ |
| Race Track | ❌ `calculateRarity(..., false)` | ❌ |
| City Drive | ❌ `calculateRarity(..., false)` | ❌ |
| Deutsch Test | ❌ `calculateRarity(..., false)` | ❌ |
| English Test | ❌ `calculateRarity(..., false)` | ❌ |

**SZABÁLY:** Oktatási/tanulási játékok (Deutsch/English Test, Spot Diff stb.): időbónusz NÉLKÜL.
Level-alapú játékok (Reflex/Number Rush): saját `calcRarity()` függvény (time-based).

**`lib/milestones.ts`**
```ts
interface PlayerStats { totalGames: number; perfectScores: number; highestStreak: number; skyHighestLevel: number }
// MILESTONES (id → reward⭐): first_game→1, player_10→1, veteran_25→2, master_50→3, legend_100→5, marathon_250→10
//   streak_7→2, streak_14→3, streak_30→5, perfect_1→1, perfect_5→3, sky_10_v2→1, sky_17→2
// updateStats() uses Math.max (never decrements); incrementTotalGames/incrementPerfectScores increment directly
```

**`lib/skins.ts`**
```ts
interface SkinDef { id: string; icon: string; price: number; bodyColor: string; headColor: string; limbColor: string; emissive: string; emissiveIntensity: number; shoeColor: string; particle?: string }
// 16 skins: default(0), fire(5), ice(5), gold(10), neon(10), ghost(15), robot(15), legendary(25),
//           shadow(8), ocean(8), toxic(10), lava(12), crystal(15), void(20), candy(8), nature(6)
```

**`lib/accessories.ts`**
```ts
interface HatDef { id: string; icon: string; name: string; price: number; color: string; emissive: string; emissiveIntensity: number; type: "crown"|"cap"|"halo"|"horns"|"tophat"|"helmet"|"antenna"|"wizard" }
interface TrailDef { id: string; icon: string; name: string; price: number; color: string; emissive: string; type: "fire"|"ice"|"rainbow"|"stars"|"smoke"|"electric" }
// 8 hats (prices 3-12), 6 trails (prices 4-15)
```

**`lib/faces.ts`**
```ts
interface FaceDef { id: string; name: string; icon: string; price: number; eyeType: string; eyeColor: string; mouthType: string; mouthColor: string; blush?: boolean; blushColor?: string }
// eyeType: "dot"|"round"|"angry"|"happy"|"sad"|"star"|"heart"|"x"|"wink"
// mouthType: "smile"|"grin"|"sad"|"neutral"|"open"|"tongue"|"cat"|"fangs"|"none"
// 18 faces (prices 0-10): default, happy, grin, sad, angry, wink, surprised, tongue, cool, cat, robot_face, heart_eyes, star_eyes, fangs, x_eyes, kawaii, demon, alien
```

**`lib/clothing.ts`**
```ts
interface TopDef { id; name; icon; price; color; accent?: string; type: "tshirt"|"hoodie"|"jacket"|"vest"|"armor"|"suit" }
interface BottomDef { id; name; icon; price; color; type: "pants"|"shorts"|"skirt"|"jogger" }
interface ShoeDef { id; name; icon; price; color; sole?: string; type: "sneaker"|"boot"|"sandal"|"highTop"|"formal" }
interface CapeDef { id; name; icon; price; color; emissive; emissiveIntensity }
interface GlassesDef { id; name; icon; price; color; lensColor; type: "sunglasses"|"round"|"visor"|"monocle"|"thug" }
interface GloveDef { id; name; icon; price; color }
// SlotType = "top"|"bottom"|"shoe"|"cape"|"glasses"|"gloves"
// getActive(slot), setActive(slot, id|null), buyItem(slot, id) — generic functions
// 18 tops (0-20⭐), 12 bottoms (0-6⭐), 13 shoes (0-10⭐), 8 capes (8-20⭐), 10 glasses (3-10⭐), 8 gloves (3-10⭐)
```

### Fő komponensek (`components/`)
| Fájl | Leírás |
|------|--------|
| `AvatarCompanion.tsx` | Avatar rajzoló (gender, skin, clothing, accessories) |
| `LanguageProvider.tsx` | `useLang()` hook → `{ lang, setLang }` |
| `MilestonePopup.tsx` | Mérföldkő popup (játék után jelenik meg) |
| `RewardReveal.tsx` | Jutalom animáció |
| `GameCard.tsx` | Kártya megjelenítő komponens |
| `ChallengeOverlay.tsx` | Globalis kihivas popup (layout.tsx-ben, barhol megjelenik) |
| `ChallengeWaiting.tsx` | Kihivo varakozo kepernyoje (avatar + countdown) |
| `MultiplayerExitConfirm.tsx` | "Biztos kilepesz?" megerosito dialog multi modban |
| `MultiplayerAbandonNotice.tsx` | Ertesites ha ellenfél elhagyta a jatekot |
| `ResultCard.tsx` | Eredmeny kartya (solo + multi ket oszlop) |

### AvatarCompanion — részletes dokumentáció

**`fixed` prop viselkedés:**
- `fixed=true` (default): `position: fixed z-50`, saját méret: `w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48`, jobb alul (`bottom: max(20px, safe-area+20px), right: 20px`)
- `fixed=false`: `relative w-full h-full` — kitölti a **szülő konténert**, NEM alkalmaz explicit méretet

**Konténer méretek oldalanként (`fixed=false` esetén):**
| Oldal | Konténer méret | Megjegyzés |
|-------|---------------|------------|
| `/kodex` playing | `72×72px` `overflow-hidden` | water-sink animáció: `y: wrongCount/MAX_WRONG * 28` |
| `/profile` | `w-52 h-52 sm:w-60 sm:h-60` | responsive, nincs overflow-hidden |
| `/shop` | `w-40 h-40` | flex shrink-0, tab-on belül |
| `/reflexrush` expedition header | `w-20 h-20` | jobb oldalon, `opacity` animáció (NEM scale!) |
| `/reflexrush` levelComplete | `w-60 h-60` | középen, victory mood |
| `/reflexrush` levelFailed | `w-52 h-52` | középen, disappointed mood |
| `/numberrush` expedition header | `w-20 h-20` | jobb oldalon, `opacity` animáció (NEM scale!) |
| `/numberrush` levelComplete | `w-60 h-60` | középen, victory mood |
| `/numberrush` levelFailed | `w-52 h-52` | középen, disappointed mood |
| `/room` avatar | `60×60px` (baseAvatarSize=60, scaled by zoom) | DOM overlay az SVG fölött, NEM SVG-ben! |

**⚠️ KRITIKUS:** `fixed=false` avatar konténerén SOHA ne használj `initial={{ scale: 0 }}` vagy `initial={{ width: 0 }}`!
→ A Three.js canvas 0px mérettel inicializálódik és üres marad.
→ Mindig `initial={{ opacity: 0 }} animate={{ opacity: 1 }}` animációt használj!

**Canvas beállítások (ne változtasd meg):**
```ts
camera={{ position: [0, 0.15, 2.6], fov: 44 }}
gl={{ antialias: false, powerPreference: 'low-power', alpha: true, stencil: false }}
// Avatar group: position={[0, -0.05, 0]} scale={0.78}
```

**Avatar test arányok (2026-03-06 emberibb redesign):**
```
Fej:     sphereGeometry args={[0.18, 16, 12]}  position y=0.58
Nyak:    cylinderGeometry args={[0.07, 0.085, 0.16, 8]}  position y=0.40
Test:    boxGeometry args={[0.40/0.43, 0.58/0.60, 0.28]}  (gender alapján)
Váll:    sphereGeometry args={[0.085]}  position y=0.26
Felső kar: cylinderGeometry args={[0.045, 0.052, 0.24, 6]}
Előkar:  cylinderGeometry args={[0.04, 0.045, 0.18, 6]}
Kéz:     sphereGeometry args={[0.058, 8, 6]}
Láb:     cylinderGeometry args={[0.072, 0.082, 0.52, 6]}  position y=-0.52
Cipő:    boxGeometry args={[0.12, 0.065, 0.20]}  position y=-0.79
```

**Mood értékek:** `'idle' | 'focused' | 'happy' | 'disappointed' | 'victory' | 'surprised' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin'`
- `wave`/`dance`/`spin` = 1.4s reakció animáció (érintésre triggerelhető)
- többi = 0.6s

**Avatar kar anatómia:**
- Váll gömb: `position={[±0.33, 0.26, 0]}` (fentebb mint régen, 0.20→0.26)
- Felső kar (`leftArmRef/rightArmRef`): `position={[±0.33, 0.26, 0]}`
- Forearm csoport (`leftForearmRef/rightForearmRef`): könyök pivot `position={[0, -0.22, 0]}` a karon belül
- Kéz gömb: `position={[0, -0.18, 0]}` a forearm csoporton belül
- Animációnál az előkarnál `rotation.z` → könyökhajlítás hatás
- Láb pozíció animációkban: `y=-0.52` (régen: -0.44)

**FaceFeatures — száj/szem geometriák:**
- `smile`: `TorusGeometry` ∪ (rotation.z=Math.PI) → mosolygó ív
- `grin`: szélesebb torus ∪ + fehér fogak box
- `sad`: `TorusGeometry` ∩ (no rotation) → lefelé húzott száj
- `neutral`: vékony `BoxGeometry`
- `open`: teljes torus gyűrű + sötét `CircleGeometry` belül
- `happy` eyes: `^` ív (TorusGeometry top-half, nincs fehér)
- `angry`: bőrszínű overlay squint + éles szemöldök (rotZ=±0.40)
- `wink`: bal szem = vízszintes vonal, jobb = normál
- `heart`: 3 gömb szív alakban, emissive
- `star`: 4 keresztező bar + izzó fehér közép
- `mouthRef` típus: `THREE.Object3D | null` (nem Mesh! — csoport is lehet)

**Default skin (`id:'default'`) → fallback warm colors:**
- `hasRealSkin = activeSkin && activeSkin.id !== 'default'`
- Ha nincs real skin: test=#e8c9a0 beige, fej=#e8c9a0, ruhák=#6b8fad/#1e3a5f legacy

**Nyak mesh:** `position={[0, 0.40, 0]}`, `CylinderGeometry args={[0.07, 0.085, 0.16, 8]}`

**Szemhéj animáció (pislogás):**
- `thetaStart=PI/2, thetaLength=PI/2` → alső félgömb → scale.y növelésekor LEFELÉ növekszik ✅
- `thetaStart=0, thetaLength=PI/2` → felső félgömb → FELFELÉ növekszik ❌ (rossz irány)
- Lid pozíció: `y=0.065, z=0.225, r=0.052` (szemmel egy szinten, előtte)

### Kodex (`app/kodex/page.tsx`) — teljes state térkép

**ExpeditionSave** (localStorage: `kodex_expedition_v2`):
```ts
{ currentLevel: number, completedLevels: number[], collectedLetters: string[],
  earnedBadges: BadgeId[], secretCodeIndex: number }
```

**Játék state változók:**
```ts
screen: "expedition"|"playing"|"levelComplete"|"failed"|"complete"
cfg: LevelConfig          // aktuális szint konfigja
puzzle: string            // a kitalálandó szó/mondat
guessed: Set<string>      // már kitalált betűk
wrongCount: number        // hibás tippek száma
gameState: "playing"|"won"|"lost"
shieldPending: boolean    // pajzs badge aktív-e
badgesUsedThisLevel: number  // max 2/szint
explorerRevealed: boolean    // explorer badge használva
secretPhase: "animating"|"playing"  // 10. szint fázisa
completeBadge: BadgeId|null  // szintteljesítési jutalom
completeLetter: string       // összegyűjtött titkos betű
earnedCard: CardRarity|null  // CSAK level 10-nél legendary
```

**LEVEL_CONFIGS szintstruktúra** (1-10):
- 1-3: `type:"word"`, 4-6: `type:"sentence"`, 7-9: `type:"word"/"sentence"`, 10: `type:"secretcode"`
- lives: 6 (1-9. szint), 3 (10. szint)
- Badge jutalmak sorban: vocals(1), shield(2), key(3), explorer(5), tracker(7)

**Titkos kódok**: `SECRET_CODES_LIST` — 5 kód/nyelv (hu/de/en/ro)
- `getSecretCode(lang, index)` — expedíción belül fix, `secretCodeIndex` alapján
- 9 betű reveal szintenként (1-9), a maradék betűk a 10. szinten találhatók ki

**Badge-ek**: `"vocals"`(magánhangzók), `"shield"`(pajzs), `"explorer"`(téma reveal), `"tracker"`(betű hint), `"key"`(speciális)

**Fontos logika:**
- Legendary kártya CSAK level 10 teljesítésekor mentődik/jelenik meg
- `saveExped()` = setExped + localStorage mentés egyszerre
- `freshExpedition()` = `{ currentLevel:1, completedLevels:[], collectedLetters:[], earnedBadges:["vocals","shield","key"], secretCodeIndex: random(0-4) }`

### Reflex Rush (`app/reflexrush/page.tsx`) — state térkép

**localStorage:** `reflexrush_expedition_v1` → `{ currentLevel: number, completedLevels: number[] }`

**Screen states:** `"expedition" | "playing" | "levelComplete" | "levelFailed"`

**LevelConfig mezők:**
```ts
interface LevelConfig {
  level: number; gridSize: number; duration: number; target: number;
  hasGold: boolean; hasRed: boolean; hasLightning: boolean; hasBomb: boolean; hasTrapGreen: boolean;
  spawnInterval: number; maxActiveCells: number; cellLifetime: number;
}
```

**LEVELS táblázat (10 szint):**
```
lv1:  3×3  35s  target:8   green only
lv2:  3×3  30s  target:12  +gold
lv3:  4×4  35s  target:18  +red
lv4:  4×4  30s  target:20  +red  spawnInterval:1000
lv5:  4×4  28s  target:24  +lightning  (first level with gold card eligible)
lv6:  5×5  35s  target:28  +bomb
lv7:  5×5  30s  target:34  spawnInterval:800
lv8:  5×5  32s  target:40  spawnInterval:750
lv9:  6×6  32s  target:48  spawnInterval:680
lv10: 6×6  38s  target:58  +trapGreen  spawnInterval:650
```

**CellType:** `"idle" | "green" | "trapgreen" | "gold" | "red" | "lightning" | "bomb"`
- `trapgreen`: vizuálisan UGYANOLYAN mint a green (zöld keret, ✓ ikon) — de -5 pont! TRAP!
- `trapFlash: Set<number>` state: 500ms-ig piros 💥 flash a trapgreen érintésekor

**Fontos state változók:**
```ts
screen: Screen
score: number; timeLeft: number; combo: number
activeLevel: number; completedLevels: number[]
cells: CellType[]         // gridSize×gridSize méretű flat tömb
trapFlash: Set<number>    // aktív trap flash indexek
level10FailsRef: useRef(0) // level10 újrapróbálások száma
```

**Level 10 ease after 3 fails:**
```ts
const cfg = (levelNum === 10 && level10FailsRef.current >= 3)
  ? { ...LEVELS[9], target: 46, duration: 44, hasTrapGreen: false }
  : LEVELS[levelNum - 1];
```

**calcRarity:** `(timeLeft, duration, level)` → level<5: max silver; level>=5: r>0.55→gold, r>0.25→silver; level10 win → legendary

**SpawnInterval weights (level10):** green:50, gold:15, red:20, lightning:5, bomb:16, trapgreen:12

---

### Number Rush (`app/numberrush/page.tsx`) — state térkép

**localStorage:** `numberrush_expedition_v1` → `{ currentLevel: number, completedLevels: number[] }`

**Screen states:** `"expedition" | "playing" | "levelComplete" | "levelFailed"`

**NRLevelConfig:**
```ts
interface NRLevelConfig {
  level: number; gridSize: number; count: number;
  flashDelay: number;   // ms, 0 = sosem tűnnek el
  timeLimit: number;    // másodperc
  hasPowerups: boolean; powerupCount: number;
}
```

**LEVELS táblázat (10 szint):**
```
lv1:  3×3  count:6   flashDelay:0     45s  no powerups
lv2:  3×3  count:9   flashDelay:0     50s  no powerups
lv3:  4×4  count:12  flashDelay:0     50s  no powerups
lv4:  4×4  count:12  flashDelay:8000  45s  2 powerups  (first level with gold eligible)
lv5:  4×4  count:14  flashDelay:7500  42s  2 powerups
lv6:  5×5  count:16  flashDelay:7000  45s  3 powerups
lv7:  5×5  count:18  flashDelay:6500  42s  3 powerups
lv8:  5×5  count:20  flashDelay:6000  40s  3 powerups
lv9:  6×6  count:24  flashDelay:5800  45s  4 powerups
lv10: 6×6  count:28  flashDelay:5500  42s  4 powerups  (→ legendary on win)
```

**GridCell típusok:**
```ts
type GridCell =
  | { type: "number"; value: number; revealed: boolean }
  | { type: "powerup"; kind: PowerupKind; used: boolean }
  | { type: "empty" }
type PowerupKind = "freeze" | "reveal" | "shield" | "rush"
```

**Power-up hatások:**
- `freeze`: +8s az időhöz
- `reveal`: 3s-ig minden szám látható
- `shield`: következő hiba nem számít
- `rush`: 5s-ig 2× gyorsabb az idő? (vizuális rush effekt)

**Fontos state változók:**
```ts
screen: Screen
grid: GridCell[]; gridRef: useRef   // gridRef a stale closure elkerülésére
nextExpected: number                // soron következő szám (1-től count-ig)
timeLeft: number; found: number
shieldActive: boolean; revealActive: boolean; rushActive: boolean
activeLevel: number; completedLevels: number[]
```

**buildGrid(cfg):** összekeveri a számokat (1..count) + powerupokat + empty cellákat → shuffled flat array

**calcRarity(timeLeft, timeLimit, level):** level<5: max silver; level>=5: timeLeft/timeLimit>0.55→gold, >0.25→silver; level===10 win → legendary

---

### Sky Climb (`app/skyclimb/page.tsx`) — state térkép

**localStorage:** nincs expedition mentés (szintek nem mentődnek)

**GameState:** `"menu" | "playing" | "dead" | "level-complete" | "reward"`

**Pontozás:** magasság (height) méterben. Szint teljesítés = cél platform elérése.

**Multiplayer architektúra:**

**Broadcast channel:** `skyclimb-${matchId}` (Supabase Realtime)

| Event | Payload | Küldés | Fogadás |
|-------|---------|--------|---------|
| `pos` | `{ p, x, y, z, fa }` | 120ms-enként (playing) | Ghost pozíció frissítés |
| `died` | `{ p, height }` | Halálkor | `oppDied=true`, ghost eltűnik |
| `finished` | `{ p }` | Cél elérésekor | `oppFinished=true` |
| `avatar` | `{ p, avatar: GhostAvatarData }` | Subscribe-kor + 2s delay | Ghost kinézet renderelés |

**GhostAvatarData:** `{ bodyColor, headColor, limbColor, shoeColor, hairColor, gender }`
- Ghost opacity: 0.55 (55% átlátszó)
- Pozíció interpoláció: `lerp(target, 0.2)` frame-enként
- Halálkor: `visible = false`

**multiResult score értékek:**
| oppScore | Jelentés |
|----------|---------|
| `-1` | Várakozás az ellenfélre |
| `999` | Ellenfél teljesítette a szintet |
| `>= 0` | Ellenfél meghalt ezen a magasságon |

**multiResult flow:**
```
I die/finish → submitScore() → setMultiResult({ myScore, oppScore: -1 })
  → oppDied/oppFinished later → setMultiResult({ ..., oppScore: actual })
  → MultiplayerResult megjelenik
```

**⚠️ KRITIKUS bug fix (2026-03-08):**
A dead+waiting screen feltétele `(!multiResult || multiResult.oppScore === -1)` kell legyen, NEM `!multiResult`! Különben a `submitScore().then()` által beállított `oppScore:-1` eltünteti a várakozó képernyőt és sötét marad.

**Reward flow multi módban:**
- `reward` → ha `oppScore !== -1` → `level-complete` (→ MultiplayerResult)
- `reward` → ha `oppScore === -1` → `dead` (várakozó spinner)

**LEVEL_GAMES:** ✅ Igen, szintek 1-9 választhatók (10 nem)
**Determinisztikus:** ✅ `generateLevel(lvl, matchSeed)` — mindkét játékos ugyanazokat a platformokat kapja

---

### Kártya csererendszer (`app/collection/page.tsx`)
- `MICRO_PER_CARD`: legendary=60, gold=6, silver=3, bronze=2 · `MICRO_PER_STAR`=60
- Átváltás: 1 legendary=1⭐, 10 gold=1⭐, 20 silver=1⭐, 30 bronze=1⭐
- `handleExchange()` mindig friss `getCards()` localStorage-t olvas (nem React state!)
- `plizio-cards-changed` event → collection display automatikusan frissül

### Avatar adatfolyam
Minden játékoldal betölti:
```ts
// useState inicializálás:
const [gender] = useState<AvatarGender>(getGender());
const [activeSkin] = useState(getSkinDef(getActiveSkin()));
const [activeFace] = useState(getFaceDef(getActiveFace()));
const [activeTop] = useState(() => { const id = getActive("top"); return id ? getTopDef(id) : null; });
// ... azonos minta: bottom, shoe, cape, glasses, gloves
const [activeHat] = useState(() => { const id = getActiveHat(); return id ? getHatDef(id) : null; });
const [activeTrail] = useState(() => { const id = getActiveTrail(); return id ? getTrailDef(id) : null; });
```
Ezeket `<AvatarCompanion {...avatarProps} jumpTrigger={...} />` kapja meg.

### Globális stílusok (`app/globals.css`)

**CSS téma változók (`@theme`):**
```css
--color-bg: #0A0A1A       /* háttér */
--color-card: #12122A     /* kártya */
--color-neon-pink: #FF2D78
--color-neon-blue: #00D4FF
--color-neon-green: #00FF88
--color-neon-purple: #B44DFF
--color-gold: #FFD700
```

**Glow utility osztályok:** `.glow-pink`, `.glow-blue`, `.glow-green`, `.glow-gold`, `.glow-purple`
**Text glow:** `.text-glow-pink`, `.text-glow-blue`, `.text-glow-green`
**Animációk:** `.animate-pulse-fast`, `.animate-shimmer`, `.animate-ripple`, `.animate-float`
_(Animációk `globals.css`-ben vannak definiálva, nem Tailwind configban!)_

### Language & i18n

- `LanguageProvider` wrappeli az egész appot (`app/layout.tsx`-ben)
- `useLang()` hook → `{ lang: "hu"|"de"|"en"|"ro", setLang(l: Language) }`
- localStorage-ben mentve: `saveLanguage(lang)` / `getLanguage()` (`lib/language.ts`)
- Default: `"en"`

### Next.js konfiguráció

- `output: "export"` → statikus export, nincs szerver, nincs dynamic route
- `trailingSlash: true` → minden route `/`-re végződik
- Viewport: `maximumScale: 1, userScalable: false` (zoom tiltva)
- Google Analytics: `G-BR2WCCRFG0`
- Service Worker: `<ServiceWorkerRegister />` komponens a layoutban

### Math Test rendszer — részletes dokumentáció

#### Fájlok
| Fájl | Leírás |
|------|--------|
| `lib/mathCurriculum.ts` | Fő kérdésgenerátor motor (G1-G8 generátorok + CURRICULUM + generateTest/Klassenarbeit) |
| `lib/mathTranslations.ts` | Minden fordítható szöveg (HU/DE/EN/RO) — topic nevek + kérdés template függvények |
| `lib/mathQuestionUtils.ts` | Vizuális kérdés segédek |
| `lib/mathLocale.ts` | Ország-specifikus konfiguráció (osztályzás, UI címkék) |
| `lib/mathTestGenerator.ts` | Legacy generátor (osztály-4 JSON fájlokhoz) |

#### Oldalak
| Route | Fájl | Leírás |
|-------|------|--------|
| `/mathtest` | `app/mathtest/page.tsx` | Fő matekteszt UI (multi-country, Klasse 1-8) |
| `/mathe-test` | `app/mathe-test/page.tsx` | DE hub oldal |
| `/mathe-test/klasse-{1-8}` | `app/mathe-test/klasse-N/page.tsx` | DE alcímoldalak (SEO) |
| `/math-test` | `app/math-test/page.tsx` | US/EN hub oldal |
| `/math-test/grade-{1-8}` | `app/math-test/grade-N/page.tsx` | US alcímoldalak (SEO) |

#### Country code → Language mapping
```ts
getLang("DE") → "DE"   // German curriculum
getLang("US") → "EN"   // US curriculum (imperial units, AM/PM)
getLang("GB") → "EN"   // British (metric, like HU/RO)
getLang("HU") → "HU"   // Hungarian
getLang("RO") → "RO"   // Romanian
```

#### Generator architektúra (`mathCurriculum.ts`)
- `G1`–`G8`: Grade-specifikus generátor objektumok (`Record<string, Generator>`)
- `type Generator = (cc: string) => MathQuestion`
- Minden generátor kap `cc` (country code) paramétert → locale-specifikus kérdések
- **US-only generátorok** (pl. `G2.units`, `G2.ampmClock`, `G3.units`, `G3.ampmClock`, `G4.units`):
  - `cc === "US"` esetén imperial/AM-PM kérdéseket generálnak
  - Egyéb country code esetén fallback: metrikus/sorozat kérdések
- `CURRICULUM[grade][period]`: `{ current: Generator[], review: Generator[] }`
  - `generateTest()`: 7 current + 3 review kérdés (10 összesen)

#### Klassenarbeit szekciók (alkategóriák) — `generateKlassenarbeit(grade)`
A Klassenarbeit (vizsgadolgozat) formátum fix szekciókba rendezi a kérdéseket:

| Grade | Szekciók | Kérdésszám |
|-------|---------|-----------|
| 1 | Addition · Subtraction · Word Problems · Comparison · Bonus | 2+2+2+2+1 = 9 |
| 2 | Addition · Subtraction · Multiplication · Word Problems · Bonus | 2+2+2+2+1 = 9 |
| 3 | Arithmetics · Multiplication · Word Problems · Geometry · Bonus | 2+2+2+2+1 = 9 |
| 4 | Kopfrechnen · Schriftlich · Bruchrechnung · Geometrie · Bonus | 2+3+2+2+1 = 10 |
| 5 | Kopfrechnen · Schriftlich · Sachaufgaben · Geometrie · Bonus | 2+3+2+2+1 = 10 |
| 6 | Arithmetics · Fractions · Ratios & Speed · Geometry · Bonus | 2+2+2+2+1 = 9 |
| 7 | Algebra · Equations · Geometry · Pythagoras · Bonus | 2+2+2+2+1 = 9 |
| 8 | Algebra · Equations · Functions · Probability · Bonus | 2+2+2+2+1 = 9 |

**Szekció-generátorok táblázat (Grade 4 — referencia más grade-ekhez):**
- Grade 4 `kopfrechnen`: `[G4.add, G4.sub, G4.mul, G4.div]`
- Grade 4 `schriftlich`: `[G4.longMul, G4.longDiv, G4.schriftlichAdd]`
- Grade 4 `bruchrechnung`: `[G4.fractionSimple, G4.fractionAddSimple]`
- Grade 4 `geometrie`: `[G4.geometry, G4.geometryB, G4.circleSimple]`
- Grade 4 `bonus`: `[G4.roundingG4, G4.sequence]`

**⚠️ Grade 4 generátor szabályok (gyakori hibák elkerülése):**
- `G4.fractionAdd` → **NE HASZNÁLD** G4-ben! Közös nevező / különféle nevezők, túl nehéz. → Használd `G4.fractionAddSimple`-t (azonos nevezők)
- `G4.circleBasics` → **NE HASZNÁLD** G4-ben! π-vel számol (kerület/terület). → Használd `G4.circleSimple`-t (sugár↔átmérő)
- `G4.decimals` → **NE HASZNÁLD** G4-ben! Tizedes összeadás, nehéz. → Használd `G4.timeWord`-ot vagy `G4.moneyWord`-ot
- `G4.units` → Klassenarbeit geometrie szekcióban NE HASZNÁLD! Csak mértékegységek (km, tonna). → Használd `G4.geometry`/`G4.geometryB`/`G4.circleSimple`
- Grade 2 `bonus`: `[G2.sequence, G2.missing100]`
- Grade 3 `geometry`: `[G3.units]` → US esetén imperial, egyéb esetén metrikus

#### Klassenarbeit vizuális blokk rendszer

**Fájlok:**
| Fájl | Leírás |
|------|--------|
| `lib/schoolTaskGenerator.ts` | `generateVisualBlock()` — vizuális blokk generátor, `SchoolTaskBlockType` típusok |
| `components/SchoolTaskBlock.tsx` | Render dispatcher — `renderVisualComponent()` vizuális típusokhoz |
| `components/grade4-visual/*.tsx` | 13 interaktív vizuális komponens (SVG/canvas) |

**Vizuális típusok (13 db):**
| `visualType` | Komponens | Válasz formátum | Leírás |
|---|---|---|---|
| `zeichnen` | LengthDrawing | szám (cm) | Vonal rajzolás vonalzóval |
| `messen` | LengthMeasurement | szám (cm) | Vonal mérés vonalzóval |
| `uhrzeit` | AnalogClock | `"H:MM"` (pl. `"3:05"`) | Analóg óra leolvasás |
| `grid-area` | GridAreaCounter | szám | Terület/kerület számolás rácsról |
| `place-value` | PlaceValueGrid | szám | Helyiérték meghatározás |
| `fraction-pizza` | FractionPizzaAdder | `"sz/n"` (pl. `"3/4"`) | Tört felismerés pizzáról |
| `symmetry` | SymmetryMirror | `"cella;cella;..."` | Tükrözés SVG rácson |
| `sequence` | SequenceBuilder | `"sz,sz,sz"` (vesszővel) | Számsor folytatás |
| `timeline` | TimelineDuration | szám (óra) | Időtartam számolás |
| `number-line` | NumberLineRounding | szám | Kerekítés számegyenesen |
| `angle` | AngleDrawer | szám (fok) | Szög rajzolás |
| `circle-draw` | CircleDrawer | szám (cm) | Kör rajzolás adott sugárral |
| `money` | MoneyCalculator | szám (€) | Pénz összeadás/visszajáró |

**Embedded mód (Klassenarbeit-ben):**
Minden vizuális komponens támogatja: `embedded={true}` + `onValueChange={(v: string) => ...}`
- `embedded=true`: elrejti a header-t, feedback-et, és a saját Prüfen gombot
- `onValueChange`: minden user interakció után hívódik, értéket ment a `schoolAnswers` state-be
- Osztályozás CSAK az "Abgeben" gombbal történik (globális), NEM vizuálisan komponensenként
- `onAnswer` prop kötelező (type constraint), de `() => {}` noop-pal hívható embedded módban

**Blokkonként 3 al-kérdés:**
`generateVisualBlock()` 3 `SubQuestion`-t generál különböző random paraméterekkel.
`SchoolTaskBlock` mindegyiket külön-külön rendereli `a)`, `b)`, `c)` jelöléssel.
Pontszám: 3P / vizuális blokk (1P / al-kérdés).

**Osztályozás:**
`gradeSchoolTest()` — egyszerű `String(userAnswer).trim() === String(sq.answer).trim()` összehasonlítás.
Nincs részleges pontszám, nincs tolerance. A vizuális komponens felelőssége, hogy a helyes formátumban reportolja az értéket.

**Új vizuális típus hozzáadása — checklist:**
1. `components/grade4-visual/MyVisual.tsx` — `embedded`, `onValueChange` prop támogatás
2. `lib/schoolTaskGenerator.ts` — `generateVisualSub()` switch-be új case + `VISUAL_TOPIC_TO_TYPE` map
3. `components/SchoolTaskBlock.tsx` — `renderVisualComponent()` switch-be új case + import

---

## VIZUÁLIS KOMPONENS FEJLESZTÉSI SZABÁLYOK (Grade 5-8)

> Tanult tapasztalatok a Grade 5 vizuális komponensek fejlesztéséből (2026-03-13)
> **Kötelező betartani minden új grade vizuális komponensnél!**

### 1. Embedded mód — instruction szöveg KÖTELEZŐ

**⚠️ KRITIKUS:** Embedded módban az egész header (`{!embedded && ...}` guard) el van rejtve. Ha az instruction szöveg CSAK a headerben van, a tanuló nem látja mit kell csinálnia!

**Szabály:** Minden vizuális komponensben legyen instruction/hint szöveg a BODY-ban is (guardon kívül), közvetlenül a choices/input elem előtt:
```tsx
{/* Instruction — always visible, even in embedded mode */}
<p className="text-xs font-semibold text-center text-slate-500 px-5 pb-2">{t.hint}</p>
```

**Kivételek (önmagukban érthetőek):**
- `BarChartRead` — van `{question}` a body-ban (max/min/total/diff specifikus kérdés)
- `AreaGrid`, `PerimeterCalc` — van `{t.question}` a body-ban
- `MultiplicationArray` — rows × cols = ? badge önmagában érthető
- `DivisionShare` — total ÷ groups = ? badge önmagában érthető
- `NumberLineArith` — az egyenlet (`start + operand = ?`) mindig látszik
- `UnitConverter` — az egyenlet (`5 km = ? m`) mindig látszik
- `LargeNumberRounding` — a roundTo badge + vizuális helyzet egyértelmű
- `WordProblemVisual` — a szöveges feladat mindig látszik

### 2. i18n — SOHA ne legyen hardcoded szöveg

Minden felhasználói szöveg a `LABELS` objektumban kell legyen, mind a 4 nyelven (hu/de/en/ro).

**Tipikus hibák:**
- Hardcoded HU string JSX-ben: `"eredeti"`, `"tükrözött"` → legyen `t.original`, `t.reflected`
- Hardcoded DE string: `"Hinweis verbergen"` → legyen `t.hideHint`
- Vegyes language pl. faktornál: `'1 Mio'` → nyelv-specifikus ternary

**Ellenőrzés:** Keresés JSX-ben: `grep -n '"[a-záéíóöőüű]' ComponentName.tsx` — ha találsz idézőjeles Magyar/Német szöveget, az gyanús.

### 3. Embedded grading — language-independent answer

**⚠️ KRITIKUS:** Az `onValueChange` által küldött érték ÉS a `schoolTaskGenerator`-ban tárolt `answer` UGYANOLYAN formátumban kell legyen.

**Helyes:** numerikus válasz `String(number)` — pl. `"4"`, `"120"`, `"-3"`
**Helyes:** language-independent key — pl. `"acute"`, `"left"`, `"right"`
**HIBÁS:** fordított label string — pl. `"Hegyesszög"` (HU), `"Spitzer Winkel"` (DE)

**Fix pattern ha MCQ fordított labeleket mutat:**
```tsx
// useMemo-ban: reverse map fordított label → key
const l2k = Object.fromEntries(typeKeys.map(k => [types[k], k]));
// onValueChange-kor: key küldése
onValueChangeRef.current(labelToKey[selected] ?? selected);
```

### 4. Teljes regisztrációs checklist (minden új G5+ vizuális komponensnél)

```
□ components/grade5-visual/MyVisual.tsx létrehozva
    - embedded prop + onValueChange support
    - instruction szöveg a body-ban ({t.hint} a choices előtt)
    - LABELS: mind 4 nyelv (hu/de/en/ro) kitöltve
    - onValueChange: language-independent answer küldés

□ lib/schoolTaskGenerator.ts
    - VisualQuestionType union-ba: | 'g5-my-visual'
    - TaskType union-ba: | 'visual_g5_my_visual'
    - VISUAL_TOPIC_KEYS Set-be: 'g5_my_topic'
    - generateVisualSub() switch: case 'g5_my_topic': { ... }
    - VISUAL_TOPIC_TO_TYPE map: g5_my_topic: 'visual_g5_my_visual'
    - TASK_TITLES map: visual_g5_my_visual: { de: ..., en: ..., hu: ..., ro: ... }

□ components/SchoolTaskBlock.tsx
    - dynamic import hozzáadva
    - renderVisualComponent() switch: case 'g5-my-visual': return <MyVisual ...>
```

### 5. Vizuális komponens stílus konvenciók

**Gradient háttér** (komponensenként egyedi szín):
```tsx
style={{ background: 'linear-gradient(135deg, #fdf4ff 0%, #f3e8ff 50%, #ede9fe 100%)' }}
```

**Gomb stílus (MCQ):** `py-3 rounded-xl font-extrabold text-base border-2`
- Normal: `bg-white border-slate-200 text-slate-700`
- Selected: color from `COLORS[i % COLORS.length]` = `['#3b82f6', '#10b981', '#f59e0b', '#ef4444']`
- Correct (submitted): `bg-green-500 border-green-500 text-white`
- Wrong selected: `bg-red-100 border-red-300 text-red-600 opacity-70`

**Header ikon:** `w-9 h-9 rounded-xl bg-COLOR-600 flex items-center justify-center`

**SVG wrapper:** `bg-white rounded-2xl shadow-sm border border-COLOR-100 p-3`

### 6. Új grade topik hozzáadása — mathCurriculum.ts

**Lépések (EN_THEMES, DE_THEMES, HU_THEMES, RO_THEMES mindegyikéhez):**
1. Generátor függvények írása `G6`/`G7`/`G8` objektumba
2. Topik blokk hozzáadása az adott grade-hez (color, icon, topics tömb)
3. `CURRICULUM[N]` periódusok frissítése (5 periódus, current+review)
4. `generateKlassenarbeit()` switch case N: szekciók hozzáadása

**Generátor tesztelés (kötelező mielőtt commitolsz):**
```ts
// Minden generátort 10× tesztelj:
for (let i = 0; i < 10; i++) console.log(G6.myGen("DE"));
// Ellenőrizd: nincs tört eredmény, nincs hardcoded EN szöveg, nem túl nehéz
// US country code teszt is: G6.myGen("US")
```

**Vizuális topik → új komponens:** ha a topik igényli (pl. negatív számegyenes, térfogat), kövesd a fenti regisztrációs checklisten!
4. Válasz formátumnak egyeznie kell: amit az `onValueChange` küld === amit `sq.answer` tartalmaz (string-ként)

**⚠️ Gyakori hibák vizuális komponenseknél:**
- NE hagyd benne a saját submit logikát embedded módban — `if (embedded) return;` guard kell a handleSubmit-ben
- Az `onValueChange` MINDIG string-et vár — számot is `String()`-gel kell küldeni
- Uhrzeit padding: `"3:05"` NEM `"3:5"` — a `padStart(2, '0')` kötelező
- Sequence válasz: `"5,7,9"` NEM `"5, 7, 9"` — szóköz nélkül, vesszővel

#### Imperial units (US-only, Grade 2-4)
Hozzáadott kérdéstípusok (`mathTranslations.ts` → `mathCurriculum.ts`):
- **Grade 2+**: inches in a foot (12), feet in a yard (3), feet→inches, yards→feet
- **Grade 3+**: ounces in a pound (16), pounds→ounces
- **Grade 4**: mindezek + nagyobb számok (3-8 ft, yd, lb)
- Topic name: `"imperialUnits"` → EN: "imperial units"

#### AM/PM Time (US-only, Grade 2-3)
Hozzáadott kérdéstípusok:
- `qAmPmElapsed(startH, endH)`: "School starts at 8 AM and ends at 3 PM. How many hours?"
- `qAmPmAddHours(startH, addH, isAm)`: "It is 9 AM. What hour will it be 3 hours later?"
- `qAmPmActivityEnd(startH, durH)`: "Activity starts at 2 PM and lasts 2 hours. What hour does it end?"
- Topic name: `"ampmTime"` → EN: "AM/PM time"
- Non-US fallback: `G2.ampmClock` → sequence kérdés; `G3.ampmClock` → missingMul

#### Új kérdések megjelenése a CURRICULUM-ban
- Grade 2 Period 3: + `G2.units`
- Grade 2 Period 4: + `G2.ampmClock`
- Grade 2 Period 5: + `G2.units`, `G2.ampmClock`
- Grade 3 Period 4: + `G3.ampmClock`
- Grade 3 Period 5: + `G3.ampmClock` (a `G3.units` már meglévő, de bővítve US imperial-lal)

#### Grade átalakítás checklist (jövőbeli grade-ek módosításakor)

Minden grade-nél (G1-G8) ugyanezeket a lépéseket kell követni:

**1. CURRICULUM[N] periódusok ellenőrzése:**
- Nézd meg az összes 5 periódust: `CURRICULUM[N].period1..period5`
- Ellenőrizd, hogy a generátorok az adott osztálynak megfelelő nehézségűek
- Ne használj magasabb osztály generátorokat (pl. G5 generátort G4-ben)

**2. Klassenarbeit szekciók ellenőrzése:**
- `generateKlassenarbeit()` switch case `N:`
- Szekciók nevei és generátor hozzárendelések
- Ellenőrizd: minden generátor létezik a `GN` objektumban

**3. Generátor hibák keresése:**
- Próbálj ki minden generátort 10-szer: `for (let i=0;i<10;i++) console.log(GN.xxx("DE"))`
- Keress: tört eredmények (nem egész szám ami egész kellene legyen), hardcoded szöveg (angol ahol fordítás kellene), túl nehéz feladatok
- US country code teszt: `GN.xxx("US")` — működik-e imperial/AM-PM?

**4. Vizuális blokkok (ha az adott grade használja):**
- `schoolTaskGenerator.ts` — generátorok helyes paraméterekkel
- Válasz formátum egyezés (onValueChange ↔ sq.answer)
- Embedded mód tesztelés

**5. Fordítások:**
- `mathTranslations.ts` — minden szöveges generátor 4 nyelven (DE/EN/HU/RO)
- Topic nevek a `TOPIC_NAMES` map-ben
- `qFunctionName()` segédfüggvények

---

#### Szöveges feladatok (word problems) — természetesség szabályai (2026-03-13)

> **Cél:** a feladatok ne érezzék magukat generáltnak. Egy valódi tanár által írt feladat érzete kell.

**⚠️ TILOS:** Egyetlen template-et egyetlen generátorhoz kötni!
```ts
// ROSSZ — minden hívásnál ugyanaz a struktúra:
word1: (cc) => { ... return q(wpHasFruit(name, fruit, a, b, cc), ...); }
// JÓ — minden hívásnál random választ egy pool-ból:
word1: (cc) => { return pick([ () => wpHasFruit(...), () => wpFoundInNature(...), ... ])(); }
```

**Pick-pool mérete:** min. 4 variáns / generátor (G1: 9 variáns, G2: 3-4 variáns).

**Természetesség-ellenőrző lista:**
- [ ] Minden variáns más helyszínen játszódik (erdő, piac, játszótér, otthon, iskola...)
- [ ] Más a kérdés-megfogalmazás ("Hány van most?", "Hány maradt?", "Hányan játszanak?", "Hányat talált összesen?")
- [ ] Legalább 2 feladat nem "Névnek X db van, kap/veszt Y-t" struktúrájú
- [ ] Van legalább 1 "helyszín-beágyazó" mondat (pl. "A játszótéren...", "Ma Anna születésnapja...")
- [ ] Mind a 4 nyelven olvasod el legalább 1 variánst — DE angolul hangzik-e? HU magyarosan?

**Meglévő wpXxx template-ek gyors összefoglalója (G1-G3):**
| Kontextus | Összeadás template-ek | Kivonás template-ek |
|-----------|----------------------|---------------------|
| Gyümölcs/étel | `wpHasFruit`, `wpMarketBasket` | `wpAte`, `wpPickedRipeFruit`, `wpSoldAtMarket` |
| Természet/sétálás | `wpFoundInNature` | `wpBirdsOnFence`, `wpBirds` |
| Közlekedés | `wpBus`, `wpKidsJoined` | `wpGotOffBus` |
| Otthon/személyes | `wpFilledBag`, `wpCoinsInBank`, `wpBuiltTower`, `wpCollectedStickers`, `wpBirthdayPresents`, `wpSchoolSupplies` | `wpAteFromPlate`, `wpGavePencils`, `wpUsedPaper`, `wpGifts`, `wpLostItems` |
| Iskola/sport | `wpBookshelf`, `wpSportsDay`, `wpSwimmingPool` | `wpKidsWentHome`, `wpSchoolTrip`, `wpBakery`, `wpLibraryReturn` |
| G2+ összetett | `wpSchool`, `wpClassroomTable`, `wpGardenFlowers` | `wpSavingsGoal`, `wpBought` |
| G3+ | `wpBikeTrip`, `wpBoxesInWarehouse`, `wpSchoolCafe` | `wpFruitShop` |

**Új template hozzáadása — szabályok:**
1. Minden template-nek van `cc: string` paramétere → `getLang(cc)` → 4 nyelv switch
2. Neve `wp` prefixszel kezdődik (word problem), nem `q` (question)
3. Export a `mathTranslations.ts`-ből, import a `mathCurriculum.ts`-be
4. Hivatkozás: add hozzá a CLAUDE.md fenti táblázatához is
5. Ellenőrzés: olvasd el mind a 4 nyelvű verziót — nem elég gépileg fordítani!

**Amit kerülj:**
- Ugyanaz a névcsere-séma (`${name} hat ${a} ${item}`) minden template-ben
- "darab" / "Stück" / "pieces" generic counter 3+ egymást követő template-ben
- Kérdés mindig ugyanolyan szavakkal ("Wie viele sind es insgesamt?" minden DE mondatban)

---

#### Topic constraint rendszer — dokumentáció (2026-03-13)

**Fájl:** `lib/mathCurriculum.ts` — `TOPIC_NUMBER_RANGE`, `TOPIC_OPERATION_TYPE`, constraint factory-k

**Hogyan működik:**
1. Tanuló kiválaszt topicokat (pl. `add10` + `word`)
2. `deriveTopicConstraint(topicKeys)` → legkisebb `maxNumber` a kiválasztott topicok közt
3. `generateTopicQuestions(grade, topicKey, cc, count, constraint)` → ha a topic natív számai nagyobbak, constrained generátort használ

**Compatibility guard (2026-03-13):**
Ha `topicMaxN >= constraint.maxNumber × 5` → a constraint NEM alkalmazható erre a topicra.
Példa: `g2_zahlen100` (100-as számok) + `constraint.maxNumber=10` → az 5× szabály miatt az eredeti 100-as generátor fut, nem a constrained.
```ts
const isIncompatible = topicMaxN !== undefined && topicMaxN >= constraint.maxNumber * 5;
if (needsConstraint && !isIncompatible) { /* alkalmaz constrained generátort */ }
```

**Constrained generátor factory-k:**
| Factory | Mikor hívódik | Mit csinál |
|---------|--------------|-----------|
| `makeConstrainedAddGen(maxN)` | `opType === 'add'` | `a+b ≤ maxN` összeadás |
| `makeConstrainedSubGen(maxN)` | `opType === 'sub'` | `a-b ≥ 0` kivonás |
| `makeConstrainedMixedGen(maxN)` | `opType === 'mixed'` | mix: add + sub + missing |
| `makeConstrainedMulGen(maxN)` | `opType === 'mul'` (maxN≥4) | szorzás maxN-en belül |
| `makeConstrainedWordGen(maxN)` | `opType === 'word'` | **valódi narratív** szöveg maxN-en belül |

**`makeConstrainedWordGen` sajátosságai:**
- Összeadásnál: `a + b ≤ maxN` biztosított
- Kivonásnál: `a - b ≥ 1` biztosított
- Minden nyelvhez 3 különböző narratív szöveg van beépítve (nem csak `a+b=?`)
- Nem importál extra wpXxx függvényeket (körköröss függőség elkerülése)

**`TOPIC_NUMBER_RANGE` bővítése (ha új topicot adsz hozzá):**
```ts
// Formátum: 'topicKey': maxNumber
'g3_add': 1000,   // Grade 3 összeadás, 1000-es számkörben
'g4_word': 9999,  // Grade 4 szöveges, max 4 jegyű számok
```
→ Ha nincs bejegyezve → constraint esetén `makeConstrainedMixedGen` fut fallbackként

**`TOPIC_OPERATION_TYPE` bővítése:**
```ts
'my_new_topic': 'add',   // 'add'|'sub'|'mul'|'div'|'mixed'|'word'
```
→ Ha nincs bejegyezve → `'word'` fallback (makeConstrainedWordGen fut)

---

### Egyéb lib fájlok (kevésbé érintett területek)

| Fájl | Leírás |
|------|--------|
| `auth.ts` | Autentikáció |
| `username.ts` | Felhasználónév mentés |
| `sync.ts` | Supabase szinkronizáció |
| `mobileOptimization.ts` | Mobil-specifikus logika |
| `pdfExport.ts`, `generateTestPdf.ts` | PDF export |
| `citydrive` autók | localStorage: `citydrive_owned_cars`, `citydrive_active_car` |

### Főoldal (`app/page.tsx`) — accordion state

- Kategória accordion state: `localStorage.getItem("plizio_cat_open")` → JSON boolean array
- Indexek a `categories` tömb sorrendje szerint (language-independent!)
- **Default:** összecsukva (false)
- Toggle-nél elmenti: `localStorage.setItem("plizio_cat_open", JSON.stringify(arr))`
- Inicializálás: `const savedArr: boolean[] = savedRaw ? JSON.parse(savedRaw) : []`

### Összes localStorage kulcs összefoglaló

| Kulcs | Tartalom |
|-------|---------|
| `plizio_cards` | GameCard[] |
| `plizio_redeemed_ids` | string[] |
| `plizio_special_cards` | number |
| `plizio_share_today` | string (dátum) |
| `plizio_stats` | PlayerStats |
| `plizio_milestones_claimed` | string[] |
| `plizio_avatar_gender` | "male"\|"female" |
| `plizio_owned_skins` | string[] |
| `plizio_active_skin` | string |
| `plizio_owned_<type>` | string[] (top/bottom/shoe/cape/glasses/gloves) |
| `plizio_active_<type>` | string\|null |
| `plizio_owned_hats` | string[] |
| `plizio_active_hat` | string |
| `plizio_owned_trails` | string[] |
| `plizio_active_trail` | string |
| `plizio_owned_faces` | string[] |
| `plizio_active_face` | string |
| `plizio_cat_open` | boolean[] (főoldal accordion) |
| `kodex_expedition_v2` | ExpeditionSave |
| `reflexrush_expedition_v1` | RRSave |
| `numberrush_expedition_v1` | NRSave |
| `citydrive_owned_cars` | string[] |
| `citydrive_active_car` | string |

---

### ⚠️ Fontos "NE CSINÁLD" szabályok

1. **RelatedGames komponens** — EL VAN TÁVOLÍTVA minden layout.tsx-ből. NE ADD VISSZA!
2. **`opengraph-image.tsx`** — static exportnál NE használd (font fetch elbukik)
3. **`npm run build`** — NEM MŰKÖDIK, mindig `npx next build`
4. **Avatar + scale:0 animáció** — Three.js canvas törik (lásd AvatarCompanion szekció)
5. **calculateRarity 4. param** — non-level játékoknál SOHA ne adj `false`-t! Most `false` helyett `85`-öt használunk (gold 85% felett). Csak oktatási játékoknál (Deutsch/English Test) marad `false`.
6. **`downloadFromSupabase` (sync.ts)** — NE írja felül a helyi active_skin-t ha már van! Csak ha `localStorage.getItem("plizio_active_skin") === null` (fresh browser). Egyébként a shop-ban aktivált skin elvész navigáció után.
7. **`special_cards` sync — NE használj `Math.max` kölcsönözhető egyenlegnél!**
   - `Math.max(local, server)` csak monoton növekvő értéknél helyes (pl. totalGames). Egyenlegnél (ami csökkenhet vásárlásnál) **örökre visszaállítja** a régi értéket bármely eszközön ami a régi értéket tárolta lokálisan.
   - **Helyes megközelítés: dirty flag + szerver értéke az igazság**
     - `addSpecialCards()` és `spendSpecialCards()` mindig beállítja: `localStorage.setItem("plizio_stars_dirty", "1")`
     - `downloadFromSupabase()`: ha `dirty=false` → szerver értékét veszi direktben (nem Math.max!); ha `dirty=true` → megtartja a lokálist
     - `uploadToSupabase()`: sikeres feltöltés után törli: `localStorage.removeItem("plizio_stars_dirty")`
   - **Általános szabály:** Ha egy érték CSÖKKENHET (vásárlás, elköltés), `Math.max` helyett dirty flag kell. Ha csak nőhet (statisztikák), `Math.max` helyes.
   - **Login flow:** Login esetén MINDIG `syncToSupabase(userId)`-t hívj (nem csak `downloadFromSupabase`-t)! A bidirectionális sync biztosítja, hogy a vendégként gyűjtött csillagok sem vesznek el (upload after download).
8. **`syncUsernameToSupabase` — szerver username prioritás (2026-03-10)**
   - Új eszközön gépelt "TempName" NE írja felül a fiók igazi felhasználónevét!
   - `syncUsernameToSupabase(userId)` ELŐSZÖR lekéri a szerveren lévő username-t (`WHERE user_id = userId`). Ha van → visszaállítja lokálisan. Ha nincs → linkeli a helyi username-t.
   - TILOS: local username-t linkelni a userId-hoz anélkül, hogy előbb megnéznénk van-e már linkelt username!
9. **Username modal timing** — NE jelenjen meg azonnal az első látogatásnál! Csak ha `stats.totalGames > 0` (legalább 1 játék után). Lásd `app/page.tsx` username check.
8. **Bútor árnyék `cy={0}` doboz bútoroknál** — Az izometrikus 3D forma alja (y=0 front vertex) és a shadow között rés keletkezik → LEBEGÉS illúzió. Doboz bútoroknál `cy={-4}` kell! Lapos talpúaknál (lámpa, növény) `cy={0}` helyes.
9. **Bútor `+ TILE_H/2` offset RoomRenderer-ben** — NE használj TILE_H/2 offsetet a bútor y pozíciónál! A tile KÖZEPE a helyes vizuális padlószint. `y = gridToScreen().y` — semmi offset!
10. **Bútor forgatás SVG `rotate()`-tel** — NE használj SVG `rotate(90°)` bútorforgatáshoz! Az fejjel lefelé fordítja 2D-ben. Helyette: `scale(-1, 1)` tükrözés (izometrikus forgatás illúzió).
11. **Avatar árnyék div a szobában** — NE adj nagy sötét árnyék ellipszist a szoba avatar alá! A DOM shadow a Canvas-tól távol van és LEBEGÉSNEK tűnik. Az avatárnak NINCS szüksége külön árnyékra a szobában.
12. **`sed` batch bútor shadow fix** — Ha sed-del módosítasz `cy={0}`-t, vigyázz a COLLATERAL DAMAGE-re! Nem-shadow ellipszisek is lehetnek cy={0}-val (glow effektek: Fireplace, TvStand, Aquarium). Mindig ellenőrizd: `grep -n 'cy={-4}' *.tsx`
13. **`AvatarCompanion` szobában: kötelező `passThrough={true}`** — Az AvatarCompanion div-en `pointer-events-auto` van hardcoded. Ha a szoba padlón akarod hogy átmenjenek a kattintások az avatar területén, NEM ELÉG a szülő div-re `pointer-events-none`-t rakni! A React Three Fiber Canvas saját belső container div-et hoz létre ahol a CSS öröklés nem megbízható.
   - **Helyes:** `<AvatarCompanion passThrough={true} ... />` — ez `pointer-events: none`-t rak közvetlenül a Canvas style propjára is
   - **Rossz:** `<div className="pointer-events-none"><AvatarCompanion ... /></div>` — az R3F Canvas áttöri az öröklést
   - Hatás ha hiányzik: ~60×60px "láthatatlan árnyék" az avatar körül (főleg hátrafelé nyúlik mert a canvas 75%-a felfelé van offsetelve a lábaktól) ahol nem lehet kattintani
14. **`calcFacing` izometrikus iránya** — Az izometrikus facing számításhoz mindkét `sdx` és `sdy` előjelét kell figyelni egyszerre, NEM magnitude-alapú tie-breaking:
   ```ts
   // sdx = dx-dy (screen horizontal), sdy = dx+dy (screen vertical)
   // HELYES: if (sdy >= 0) return sdx >= 0 ? 'se' : 'sw'; return sdx >= 0 ? 'ne' : 'nw';
   // HIBÁS:  if (Math.abs(sdx) >= Math.abs(sdy)) return sdx >= 0 ? 'se' : 'nw'; ...
   ```
   A hibás verzió: dx=0,dy=1 → 'nw' (rossz, kellene 'sw'); dx=0,dy=-1 → 'se' (rossz, kellene 'ne')
15. **Explorer SVG-kben NE legyen szöveges label** — Az SVG `viewBox="0 0 240 160"` túl kicsi ahhoz, hogy 4 nyelven (en/de/hu/ro) elférjenek a szöveges címkék (pill badge-ek). A német/magyar szavak 30-50%-kal hosszabbak mint az angol → kifutnak, egymásra lógnak.
   - **Szabály:** Új explorer SVG-ben a címkéket/label-eket a React oldalon kell megjeleníteni (az SVG alatti/melletti HTML elemként), NEM az SVG-n belül `<text>` elemmel.
   - Az SVG-ben csak a rajz legyen (állat, növény, diagram) — szöveg nélkül.
   - Ha mégis SVG-n belül kell label → max `fontSize={5}`, és teszteld mentálisan a leghosszabb nyelven (DE/HU).
16. **Explorer pattern — 2 architektúra létezik, ne keverd össze:**
   - **Pool-alapú (AstroDeutsch K1-K8, ÚJ):** `lib/explorerPools/deutschKN.ts` → `DynamicExplorer.tsx` → `KNExplorer.tsx` router → page.tsx bekötés. Ez az ajánlott minta új Deutsch grade-ekhez! Részletek: "ASTRODEUTSCH POOL-ALAPÚ EXPLORER ARCHITEKTÚRA" szekció.
   - **ExplorerEngine-alapú (AstroBiologie, Sachkunde, RÉGI Deutsch):** `ExplorerEngine.tsx` wrapper, FishExplorer minta: info + 1 kvíz per kör. R1-R4: `type: "mcq"` + 1 kérdés; R5: 2-3 review kérdés. A `type: "info"` NE használd.
17. **Sonnet agent nagy feladatokra NE** — A Sonnet model lassú és gyakran megakad nagy/összetett feladatoknál (pl. teljes fájl újraírás + SVG modernizálás). Mindig **osszuk kisebb feladatokra** (pl. pattern külön, SVG külön). Haiku gyorsabb és megbízhatóbb egyszerűbb feladatokra.
18. **Explorer kérdés label kulcsok** — Minden MCQ kérdés label key-jének mind a 4 nyelvben (en/de/hu/ro) léteznie kell a LABELS objektumban. Ellenőrizd mielőtt commitolsz: ha egy key hiányzik egy nyelvből, az a kérdés szöveg helyett a key stringet mutatja.
19. **SVG fejlesztési stratégia — 2 fázis:**
   - **1. fázis (Haiku):** Logika, pattern, labelek, kérdések — gyors és olcsó. SVG-k lehetnek egyszerű placeholderek.
   - **2. fázis (Opus):** SVG-k modernizálása — részletes, tankönyvi minőségű illusztrációk. Opus agentet használj, NEM haiku-t vagy sonnet-et!
   - Opus agent SVG feladatoknál: **1 agent = max 2-3 fájl**, párhuzamosan akár 5-6 agent is futhat.
   - Opus ~10% heti limitet használ 8 explorer SVG modernizálására — ez elfogadható.
20. **BlockDrag `groups[]` — SOHA ne adj nagy számokat!** — A `components/interactive/BlockDrag.tsx` `groups` tömb minden elemét **blokkszámként** értelmezi (for ciklus `i < g`). Ha `groups: [500, 500, 500, 500]` → **2000 blokk** jön létre a képernyőn, ami használhatatlan. **Szabály:** `groups[]` elemei legyenek kicsik (1-12), ahol minden blokk egy nagyobb értéket **képvisel**. Az `answer` = az elvárt blokkok száma a zónában.
   - **ROSSZ:** `groups: [500, 500, 500, 500], answer: 2000` → 2000 tap
   - **JÓ:** `groups: [1, 1, 1, 1], answer: 4` → 4 tap (4 blokk, mindegyik 500g-ot képvisel)
   - **ROSSZ:** `groups: [200, 300], answer: 500` → 500 tap
   - **JÓ:** `groups: [2, 3], answer: 5` → 5 tap (blokkonként 100-at képviselnek)
   - Ellenőrzés új explorer hozzáadásakor: `grep 'groups: \[' fájl.tsx` — ha bármelyik szám > 20, az gyanús!
21. **Biológia SVG könyvtár kész** — Az `app/astro-biologie/svg/` mappában 9 fájl, 38+ SVG komponens található (FishSvg, PlantSvg, MammalSvg, ReptileBirdSvg, ArthropodSvg, EcosystemSvg, CellSvg, BodySvg, SystemsSvg). Az `index.ts` mindent re-exportál. Új biológia explorerhez INNEN importálj, NE írj új SVG-t ha már van megfelelő!

**Kilépési gomb — játék közbeni státusz:**
| Játék | Van kilépés játék közben? | Hova visz? |
|-------|--------------------------|-----------|
| Reflex Rush | ✅ ✕ gomb bal felül (HUD) | expedition |
| Number Rush | ✅ ✕ gomb bal felül (HUD) | expedition |
| Kodex | ✅ megerősítéssel | expedition |
| NumberPath | ✅ Home ikon | expedition |
| MiniSudoku | ✅ Home ikon | expedition |
| WordHunt | ✅ ✕ gomb bal felül (HUD) | expedition |
| Sequence Rush | ✅ ✕ gomb bal felül (HUD) | expedition |
| Sky Climb, Quick Pick, Word Scramble, Spot Diff, Memory Flash, Race Track, City Drive, Daily, Milliomos | ✅ | főoldal |
| Math Test | ✅ ModernPaperTest onExit prop | grade-select |

**Kilépős gomb minta (expedition játékoknál):**
```tsx
<button
  onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold"
>✕</button>
```

---

### Szöveg szín szabály — NE HASZNÁLJ SZÜRKE SZÖVEGET!

**FONTOS:** A játékokban a szövegek NE legyenek túl halványak! Minimum opacity értékek:
- Fő szöveg (címkék, pontszámok, HUD): `text-white/80` vagy világosabb
- Másodlagos szöveg (alcím, hint, meta info): `text-white/60` minimum
- Gombok szövege: `text-white/70` minimum
- **TILOS:** `text-white/20`, `text-white/30`, `text-white/40` — ezek túl szürkék, alig láthatóak!

### Token-spórolási szabályok (Claude számára)
- Ha a feladat CLAUDE.md-ben dokumentált fájlt érint → NE olvasd az egész fájlt, csak a szükséges részt (Read offset+limit)
- Ha a state/type struktúra ismert fentről → NE olvasd újra a type definíciókat
- Ha csak egy függvényt kell módosítani → Grep a függvénynévre, csak azt olvasd be
- `plizio-cards-changed` custom event → UI refresh kártyaszámoknál (collection + header)
- `visibilitychange` event → collection oldal frissül tab-visszatérésnél

---

## ÚJ JÁTÉK LÉTREHOZÁSA — teljes checklist

Ha azt kell csinálni: "hozz létre egy új játékot X alapján", **ezt a sorrendet kövesd**:

### 1. Fájlok létrehozása

```
app/<game>/page.tsx      ← a játék maga
app/<game>/layout.tsx    ← SEO metadata
```

### 2. Főoldalra regisztrálás (`app/page.tsx`)

**A)** Add hozzá a nevet a `TRANSLATIONS` objektumhoz (mind a 4 nyelvhez: en/hu/de/ro):
```ts
// TRANSLATIONS.en.games, .hu.games, .de.games, .ro.games mindegyikébe:
mynewgame: "My New Game",
```

**B)** Add hozzá a `CATEGORIES_BASE` tömbben a megfelelő kategóriába:
```ts
{
  id: "mynewgame",
  icon: <LucideIcon>,       // importálni kell a lucide-react-ból
  nameKey: "mynewgame",     // megegyezik a TRANSLATIONS kulccsal
  color: "#RRGGBB",
  gradient: "bg-gradient-to-br from-X-500/20 to-Y-500/20",
}
```
**Kategória ID-k:** `"quizreflex"`, `"adventure"`, `"brain"`, `"logic"`

### 3. Oldalak táblázata — add hozzá a CODEBASE TÉRKÉP-be (fent)

### 4. Sitemap (`public/sitemap-games.xml`) — új `<url>` sor

### 5. Kártya reveal flow — KÖTELEZŐ MINTA (Sky Climb a referencia)

**Helyes sorrend minden nyereménynél:**
```
Win → saveCard() → setScreen("reward")
  → <RewardReveal> animáció (onDone)
  → setScreen("levelComplete")
  → Result screen (score, gombok, MilestonePopup)
```

**Screen típusban** kötelező a `"reward"` state:
```ts
type Screen = "expedition" | "playing" | "reward" | "levelComplete" | "levelFailed";
```

**Win handler minta:**
```ts
const rarity = calculateRarity(score, total, streak, false);
saveCard({ id: generateCardId(), game: "mygame", rarity, score, total, date: new Date().toISOString() });
window.dispatchEvent(new Event("plizio-cards-changed"));
incrementTotalGames();
setEarnedCard(rarity);   // ← beállítani MIELŐTT setScreen("reward")
setScreen("reward");     // ← NEM levelComplete!
```

**RewardReveal render:**
```tsx
{screen === "reward" && earnedCard && (
  <RewardReveal
    rarity={earnedCard}
    game="mygame"
    score={score}
    total={total}
    onDone={() => setScreen("levelComplete")}
  />
)}
```

**levelComplete screen:** NE jelenítsd meg inline a kártya dobozt — az már megjelent a RewardReveal-ben!

**⚠️ Rossz minta (NE CSINÁLD):**
- Win → direkt `setScreen("levelComplete")` ← kihagyja a RewardReveal animációt
- Inline kártya doboz a levelComplete-ben (bordered box + emoji) ← RewardReveal helyett

**Érintett játékok ahol ez MÉG NINCS rendben (TODO):**
- reflexrush, numberrush, sequencerush, wordhunt, numberpath, minisudoku
  → ezekben `levelComplete` közvetlen, inline kártya dobozzal

### 6. page.tsx kötelező elemek

**Avatar betöltési minta** (minden játékban ugyanez a `useState` init):
```tsx
const [gender] = useState<AvatarGender>(getGender());
const [activeSkin] = useState(getSkinDef(getActiveSkin()));
const [activeFace] = useState(getFaceDef(getActiveFace()));
const [activeTop] = useState(() => { const id = getActive("top"); return id ? getTopDef(id) : null; });
const [activeBottom] = useState(() => { const id = getActive("bottom"); return id ? getBottomDef(id) : null; });
const [activeShoe] = useState(() => { const id = getActive("shoe"); return id ? getShoeDef(id) : null; });
const [activeCape] = useState(() => { const id = getActive("cape"); return id ? getCapeDef(id) : null; });
const [activeGlasses] = useState(() => { const id = getActive("glasses"); return id ? getGlassesDef(id) : null; });
const [activeGloves] = useState(() => { const id = getActive("gloves"); return id ? getGloveDef(id) : null; });
const [activeHat] = useState(() => { const id = getActiveHat(); return id ? getHatDef(id) : null; });
const [activeTrail] = useState(() => { const id = getActiveTrail(); return id ? getTrailDef(id) : null; });
```

**Játék vége minta** (minden normál játéknál):
```tsx
// 1. Kártyamentés
const rarity = calculateRarity(score, total, streak, false); // false = no gold!
const card = { id: generateCardId(), game: "mynewgame", rarity, score, total, date: new Date().toISOString() };
saveCard(card);
window.dispatchEvent(new Event("plizio-cards-changed")); // UI frissítés

// 2. Statisztikák
incrementTotalGames();
if (score === total) incrementPerfectScores();

// 3. Mérföldkövek ellenőrzése
const newMilestones = checkNewMilestones();
if (newMilestones.length > 0) { /* MilestonePopup megjelenik */ }
```

**Expedition mentési kulcs** — mindig `<game>_expedition_v1` formátum:
```ts
const SAVE_KEY = "mynewgame_expedition_v1";
```
→ Add hozzá a localStorage kulcsok összefoglalójába is (fent)!

**Kilépési gomb** — **KÖTELEZŐ** minden playing screenen:
```tsx
<button
  onClick={() => { setScreen("expedition"); }} // vagy setGameState("menu")
  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
><X size={14} /></button>
```
→ Játék közbeni kilépés MINDIG kell. Ha elfelejted → bug lesz.

**Kártya ritkaság** — alapértelmezés szerint **sosem gold**:
```tsx
calculateRarity(score, total, streak, false) // 4. param MINDIG false, kivéve level-alapú játéknál
```

### 6. layout.tsx minta
```tsx
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "My New Game – Plizio",
  description: "...",
  alternates: { canonical: "https://plizio.com/mynewgame/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

---

## Google Indexing API — manuális futtatás

Ha a user kéri a Google indexelés futtatását (pl. "indexelj", "küldd be a sitemapot"), küldj copy-paste kész parancsot:

```bash
/opt/alt/alt-nodejs18/root/usr/bin/node scripts/google-index.mjs
```

A script automatikusan felismeri a szerver vs dev környezetet és megtalálja a sitemapokat.

---

## SSH Pull + Deploy parancs minden feladat végén

**FONTOS:** Minden feladat befejezésekor küldj a felhasználónak 2 copy-paste kész parancsot.
A user a `~/public_html` mappában van SSH-n, ami egyben a git repo is (`.git` ott van).

**1. parancs - Git pull (out mappa lehúzása):**
```bash
git fetch origin <branch-neve> && git checkout FETCH_HEAD -- out/
```

**2. parancs - Deploy (out tartalmának kimásolása):**
```bash
rm -rf _next next_static && cp -r out/* . && mv _next next_static && rm -rf out
```

⚠️ **Cloudflare Transform Rule miatt:** a Cloudflare `/_next/*` → `/next_static/$1` rewrite-ot végez, ezért a `_next/` mappát át kell nevezni `next_static/`-ra a szerveren!

Szabályok:
- A branch neve mindig az aktuális fejlesztési branch legyen
- MINDIG ezt a 2 parancsot küldd, semmi mást
- NE használj `cd`-t - a user már a `public_html`-ben van
- Minden push után küldd el mindkét parancsot

## SEO Módszertan (mindig kövesd!)

### Minden új játék/oldal esetén:
1. `app/<játék>/layout.tsx` → egyedi title, description, canonical, hreflang, JSON-LD (VideoGame séma)
2. Ha SEO landing page → 800+ szó valódi tartalommal (ne placeholder!)
3. `components/RelatedGames.tsx` → `RELATED_MAP`-be add hozzá az új játékot + melyik 4 játékra mutasson
4. `public/sitemap-games.xml` → új `<url>` sor hozzáadva
5. OG kép referencia a layout metadata-ban (`openGraph.images`)

### Minden új SEO kategória/landing page-nél:
- `layout.tsx` → CollectionPage JSON-LD + hreflang
- `public/sitemap-categories.xml` → új sor
- Cross-link a többi kategóriára (`/educational-games/`, `/brain-games/`, `/reflex-games/`)

### Mathe-test bővítésnél (/deutsch-test/ stb.):
- Ugyanaz a struktúra: hub + klasse-1..8 oldalak
- `MatheTestKlasse`-hoz hasonló shared component
- `public/sitemap-education.xml` → új sorok
- hreflang: `de`, `de-AT`, `de-CH`, `x-default`

### hreflang szabályok:
- Játékok (multilang): `hu`, `de`, `en`, `ro`, `x-default`
- Mathe-test (főleg DE): `de`, `de-AT`, `de-CH`, `x-default`
- Kategória oldalak (EN): `en`, `x-default`

### OG képek:
- Script: `scripts/generate-og.mjs` → futtatsd `node scripts/generate-og.mjs` build előtt
- Generált képek: `public/og/<oldalnev>.png`
- Referencia a layout metadata-ban: `openGraph: { images: [{ url: "/og/<oldalnev>.png", width: 1200, height: 630 }] }`
- **NE használj `opengraph-image.tsx`-et static exportnál** — font fetch miatt mindig elbukik

### Blog struktúra:
- Route: `app/blog/<slug>/page.tsx`
- Minimum 800 szó valódi tartalom
- FAQPage JSON-LD + BreadcrumbList kötelező
- Belső link a kapcsolódó játékra/oldalra

---


---

## ASTROMATH — Animált felfedező matematika (1-8. osztály)

> Állapot: fejlesztés alatt (2026-03-14) — Klasse 1, 2, 4 kész, többi tervezett
> Route: `/astromath/` (hub), `/astromath/1/`, `/astromath/2/`, `/astromath/4/`
> Mottó: „Haladj úgy, ahogy az iskolában tanítják — szigetenként, lépésről lépésre."

### Fájlstruktúra

```
app/astromath/page.tsx          ← Galaxia hub (8 bolygó, osztály-választó)
app/astromath/planets.tsx       ← SVG bolygó illusztrációk (PlanetTerra, Aquaria, Ignos, Aureon, Violetis, Saturnia, Verdis, Cosmara)
app/astromath/1/page.tsx        ← G1 teljes játékoldala
app/astromath/1/layout.tsx      ← SEO
app/astromath/2/page.tsx        ← G2 teljes játékoldala
app/astromath/2/layout.tsx      ← SEO
app/astromath/4/page.tsx        ← G4 teljes játékoldala (4. osztályos specifikus játéktípusokkal)
app/astromath/4/layout.tsx      ← SEO
app/astromath/games/            ← Megosztott játék motorok (G1, G2, G4 mind ezeket importálja)
  OrbitQuiz.tsx                 ← MCQ kvíz, 4 válasz, "Next" gomb
  BlackHole.tsx                 ← MCQ kvíz, sötét stílusú variáns
  GravitySort.tsx               ← Számok sorrendbe rakása
  StarMatch.tsx                 ← Kérdés-válasz párosítás tap-to-pair
  NumberDuel.tsx                ← Melyik szám nagyobb/kisebb? (comp)
  RocketLaunch.tsx              ← Checkpoint előtti bemelegítő kvíz
  SpeedRound.tsx                ← ⚡ G4+ — Időnyomásos kvíz (8s/kérdés, auto-advance)
  FractionVisual.tsx            ← 🍕 G4+ — SVG pizza-szelet tört vizualizáció
  EquationDrill.tsx             ← 🧮 G4+ — Nagy egyenlet-display, ? ikon, kártyaválasztás
  translations.ts               ← Megosztott fordítások a játék UI-hoz
lib/astromath.ts                ← G1 sziget definíciók, progress, GameType typedef
lib/astromath2.ts               ← G2 sziget definíciók, progress
lib/astromath4.ts               ← G4 sziget definíciók, progress
```

### Bolygók (planets.tsx)

| Osztály | Bolygó neve | Stílus | Fő szín |
|---------|------------|--------|---------|
| 1 | Terra | Föld-szerű, kontinensek, tenger | #1B6CA8 kék + #2ECC71 zöld |
| 2 | Aquaria | Óceánvilág, vortex | #0096C7 ciánkék |
| 3 | Ignos | Mars/tűz, kráterek | #C1121F vörös |
| 4 | Aureon | Gázóriás, sávok + viharfolt | #FFD700 arany |
| 5 | Violetis | Ködviharz, örvény | #B44DFF lila |
| 6 | Saturnia | Gyűrűs bolygó (Saturn-szerű) | #FF9500 narancs |
| 7 | Verdis | Dzsungelvilág, köd | #10B981 smaragd |
| 8 | Cosmara | Kristálybolygó, csillogás | #E879F9 pink |

**Exportok:** `GRADE_PLANETS[0..7]` (komponens tömb), `PLANET_NAMES[lang][0..7]` (névtömb)

### Architektúra — page.tsx főbb state-jei

```tsx
screen: "map" | "island" | "playing" | "checkpoint"
activeIsland: IslandDef | null
activeMission: MissionDef | null
activeGame: GameType | null         // "orbit-quiz" | "star-match" | "gravity-sort" | "black-hole"
questions: MathQuestion[]           // generált kérdések az aktív misszióhoz
progress: G1Progress                // localStorage-ból betöltve
```

### Progresszív tanterv — Iskolai sorrend (1. osztály)

Az 1. osztály szigetjei az iskolai tanrendet követik — **nem téma szerint csoportosítva, hanem időrendben**:

| Sziget | Téma | Számkör | topicKeys |
|--------|------|---------|-----------|
| i1 Zählinsel | Számolás, összehasonlítás | **1-10** | `g1_count`, `g1_compare`, `g1_pos` |
| i2 Additionsinsel | Összeadás | **1-10** | `g1_tausch`, `g1_zahlzerlegung`, `add10` |
| i3 Subtraktionsinsel | Kivonás | **1-10** | `sub10`, `g1_ergaenzen` |
| i4 Verdoppeln & Halbieren | Dupla/fele | 1-18 | `g1_verdoppeln`, `g1_halbieren` |
| i5 Zahlen bis 20 | Számolás, sor | **11-20** | `g1_num1120`, `g1_place_value20`, `g1_sequence` |
| i6 Sachaufgaben | Szöveges feladatok | 1-20 | `g1_tausch`, `g1_zahlzerlegung`, `sub10`, `add10` |
| i7 Formeninsel | Alakzatok, mintázatok | — | `g1_shapes`, `g1_spatial`, `g1_pattern` |
| i8 Messinsel | Mérések (óra, pénz, súly) | — | `g1_clock`, `g1_coins`, `g1_weight`, `g1_volume`, `g1_laenger`, `g1_wochentage` |
| i9 Daten & Muster | Adatok, sorozatok | 1-20 | `g1_data`, `g1_sequence`, `g1_count` |

**⚠️ FONTOS — Számkör korlát:**
- Az i1-re vonatkozó G1 generátorok (`compare`, `vorgaenger`, `nachfolger`, `numberLine`, `numberOrder`) limitálva vannak **max 10**-re a mathCurriculum.ts-ben.
- Az i5+ szigeteken más topic key-ek vannak (`g1_num1120`, `g1_sequence` stb.) amik **11-20**-ig mennek.
- NE változtasd meg ezeket a korlátokat — ez biztosítja a progresszív felépítést.

### Checkpoint rendszer

3 szigetenként egy checkpoint teszt következik:
```ts
CHECKPOINT_MAP = {
  test1: ["i1", "i2", "i3"],   // → checkpoint1: alapszámolás 1-10
  test2: ["i4", "i5", "i6"],   // → checkpoint2: 1-20, dupla, szöveges
  test3: ["i7", "i8", "i9"],   // → checkpoint3: alakzatok, mérések, sorozatok
}
```
Checkpoint téma key-ek: `CHECKPOINT_TOPICS` — ezekből generálódnak a checkpoint kérdések.

### Játéktípusok (GameType)

| GameType | Fájl | Kinek | Kérdésszám | Leírás |
|----------|------|-------|-----------|--------|
| `orbit-quiz` | OrbitQuiz.tsx | G1-G4 | 10 | MCQ kvíz, 4 válasz, "Next" gomb |
| `black-hole` | BlackHole.tsx | G1-G4 | 10 | MCQ kvíz, sötét stílusú variáns |
| `gravity-sort` | GravitySort.tsx | G1-G4 | 5 kör | Számok sorrendbe rakása |
| `star-match` | StarMatch.tsx | G1-G4 | 20 pár | Kérdés-válasz párosítás tap-to-pair |
| `number-duel` | NumberDuel.tsx | G1-G4 | — | Melyik szám nagyobb/kisebb? |
| `speed-round` | SpeedRound.tsx | **G4+** | 10 | ⚡ Időnyomásos (8s/kérdés), auto-advance, nincs "Next" gomb |
| `fraction-visual` | FractionVisual.tsx | **G4+** | 10 | 🍕 SVG pizza-szelet tört, önálló kérdésgenerálás |
| `equation-drill` | EquationDrill.tsx | **G4+** | 10 | 🧮 Nagy egyenlet-display, ? ikon pulsál, kártyaválasztás |

**SpeedRound részletek:**
- 8 másodperc/kérdés — draining timer bar (zöld→sárga→piros)
- Ha lejár az idő → automatikusan „téves" és következő kérdés
- Nincs „Next" gomb — azonnal auto-advance 650ms feedback után
- `lang` prop kötelező (saját LABELS fordítástömb, nem a T objektumot használja)

**FractionVisual részletek:**
- Saját kérdésgenerálás (nem kap `questions[]` propot!)
- SVG kör szektorokra osztva, M/N szektor kiszínezve
- Tört pool: 1/2, 1/3, 2/3, 1/4, 3/4, 1/5…4/5, 1/6, 5/6, 1/8, 3/8, 5/8, 7/8
- Props: `{ color, onDone, onCorrect?, onWrong?, lang? }`

**EquationDrill részletek:**
- OrbitQuiz-hoz hasonló, de: NAGY betűméret (text-3xl), villódzó "?" animáció
- MCQ kártyák: text-2xl, py-5 — könnyebb tap
- `lang` prop kötelező

**StarMatch részletek:**
- 5 forduló × 5 pár/forduló = 25 érintés összesen
- Bal oszlop: kérdések (fix), jobb oszlop: válaszok (véletlenszerű sorrendben)
- Progress dots a tetején (melyik fordulóban tart)
- `buildRound(questions, offset)` generál 5 párt a kérdéslistából, minden forduló más sorrendű válaszokat kap
- `generateMatchPairs(questions)`: 5 egyedi-válaszú kérdést vesz ki a poolból

**GravitySort részletek:**
- `generateSortRound(range)` → 5 véletlenszerű szám a `island.sortRange`-ből
- Minden sorrendbe-rakás után új kör indul (max 5 kör, utána befejezi)

### Csillag rendszer (motiváció)

**Misszió szint:** Minden misszió 1-3 csillagot ad az eredmény alapján:
- `calculateStars(score, total)` → 1 csillag: bármely befejezés, 2: ≥60%, 3: ≥90%
- Best result mentve: `missionStars: Record<string, number>` a `G1Progress`-ben
- Kulcs formátum: `"i1_m1"`, `"i2_m3"`, stb.

**Sziget szint:** `islandTotalStars(progress, islandId)` → max 9 (3 misszió × 3 csillag)
- SVG térképen megjelenik: `"⭐⭐ 6/9"` stílusban
- Island intro képernyőn: `"X/9"` összesítés a misszió listán felül

**Mission row megjelenítés:**
```tsx
// Misszió sorban: [1,2,3].map(s => s <= bestStars ? "⭐" : "✩")
```

### G1Progress interfész (lib/astromath.ts)

```ts
interface G1Progress {
  completedMissions: string[];          // "i1_m1", "i2_m3", ...
  completedIslands: string[];           // "i1", "i2", ...
  completedTests: string[];             // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (legjobb eredmény)
}
```

### localStorage

| Kulcs | Tartalom |
|-------|---------|
| `astromath_g1_v2` | `G1Progress` |

### SVG térkép — kritikus részletek

- **viewBox:** `"0 -220 320 860"` — FONTOS! A negatív Y offset szükséges, mert egyes szigetek y=-90 körül vannak (i9 svgY=-90, i8 svgY=-20), checkpointok y=-165 körül
- MAP_W=320, MAP_H=860, MAP_VB_OFFSET=220
- Konténer: `max-w-sm mx-auto` — mobile + desktop centrált
- SVG style: `minHeight: MAP_H, display: "block"` — nem nyújtja el
- `islandTotalStars()` a sziget badge szövegéhez: `total > 0 ? "⭐".repeat(Math.min(total,3)) + " " + total + "/9" : idx+1`

### Kérdésgenerálás

```ts
// Misszióhoz: generateIslandQuestions(island, lang, count)
// count: orbit-quiz/black-hole/gravity-sort → 10, star-match → 20
const qCount = mission.gameType === "star-match" ? 20 : 10;

// Checkpoint teszthez:
generateCheckpointQuestions(testId, lang, count)
```

### G4 szigetek (lib/astromath4.ts)

| Sziget | Téma | Játéktípusok | topicKeys |
|--------|------|-------------|-----------|
| i1 Große Zahlen | Nagy számok, helyiérték | speed-round, number-duel, gravity-sort | `place`, `place1k` |
| i2 Multiplikation | Szorzás | speed-round, equation-drill, star-match | `mul` |
| i3 Division | Osztás | speed-round, equation-drill, black-hole | `div` |
| i4 Bruchrechnung | Törtek | fraction-visual, orbit-quiz, star-match | `frac` |
| i5 Geometrie | Geometria | orbit-quiz, speed-round, star-match | `geo` |
| i6 Sachaufgaben | Szöveges feladatok | orbit-quiz, orbit-quiz, star-match | `word` |
| i7 Einheiten & Messen | Mértékegységek | orbit-quiz, star-match, black-hole | `units` |
| i8 Winkel & Symmetrie | Szögek, szimmetria | orbit-quiz, star-match, black-hole | `angles`, `symmetry_en` |
| i9 Großes Finale | Vegyes finálé | orbit-quiz, black-hole, star-match | `geo`, `word`, `frac` |

**Checkpoint témák (G4):**
- test1: `["place", "place1k", "mul", "div"]`
- test2: `["frac", "geo", "word"]`
- test3: `["units", "angles", "geo"]`

**localStorage kulcs:** `astromath_g4_v1`

### G2 szigetek (lib/astromath2.ts)

| Sziget | Téma | topicKeys |
|--------|------|-----------|
| i1 Zahlenraum 100 | Számok 100-ig | `g2_zahlen100`, `g2_ordnung` |
| i2 Kopfrechnen | Fejszámolás | `g2_kopf`, `g2_nachbarzahlen` |
| i3 Addition ohne Übertrag | Összeadás átvitel nélkül | `add`, `g2_add_hunderter` |
| i4 Subtraktion ohne Übertrag | Kivonás átvitel nélkül | `sub`, `g2_sub_hunderter` |
| i5 Addition mit Übertrag | Összeadás átvitellel | `add`, `g2_add_uebertrag` |
| i6 Subtraktion mit Übertrag | Kivonás átvitellel | `sub`, `g2_sub_uebertrag` |
| i7 Einmaleins | Szorzótábla | `g2_mal`, `mul` |
| i8 Division | Osztás | `g2_div`, `div` |
| i9 Messen & Sachaufgaben | Mérések + szöveges | `g2_messen`, `word` |

**localStorage kulcs:** `astromath_g2_v1`

### Sziget-animációk — IslandCompleteAnimation + RocketTransition (2026-03-15)

**Fájlok:**
| Fájl | Leírás |
|------|--------|
| `app/astromath/IslandCompleteAnimation.tsx` | 13s cinematic sziget teljesítésekor |
| `app/astromath/RocketTransition.tsx` | 1.3s gyors rakéta-átmenet navigációnál |

**IslandCompleteAnimation props:**
```tsx
<IslandCompleteAnimation
  islandIcon={activeIsland.icon}          // pl. "🔢"
  islandColor={activeIsland.color}        // pl. "#4ECDC4"
  islandName={activeIsland.name[lang] ?? activeIsland.name.en}
  lang={lang}
  onDone={handleIslandAnimDone}
/>
```

**Animáció fázisok (13s):**
1. `0–1.2s` — háttér fadeIn + csillagos tér
2. `1.2–3s` — sziget ikon zoomol be, "Island complete!" szöveg, keringő ⭐-ok
3. `3–4.8s` — SVG asztronauta besétál balról (integet)
4. `4.8–6.2s` — SVG rakéta leereszkedik felülről
5. `6.2–8.8s` — energia-részecskék repülnek az ikon → rakéta FUEL-mérőbe (töltés)
6. `8.8–10.2s` — asztronauta beül a rakétába
7. `10.2–12s` — rakéta gyújtás + felszállás (lángok)
8. `12–13s` → képernyő elfakul → `onDone()` → kártya jutalom

**RocketTransition props:**
```tsx
<RocketTransition color={bgColor} onDone={() => setScreen("island-intro")} />
```
1.3s alatt SVG rakéta repül balról jobbra, majd `onDone()` hívódik.

---

**Integrálás új Grade oldalba — teljes checklist (G3/G5-G8):**

```
1. Importok (RocketLaunch import után):
   import IslandCompleteAnimation from "@/app/astromath/IslandCompleteAnimation";
   import RocketTransition from "@/app/astromath/RocketTransition";

2. Screen type (meglévő "missing-number" | ... sorok után):
   | "island-transition"
   | "island-complete-anim"

3. handleIslandSelect CSERE:
   const handleIslandSelect = useCallback((island: IslandDef) => {
     if (walkTimerRef.current) clearTimeout(walkTimerRef.current);
     setActiveIsland(island);
     setAvatarIslandId(island.id);
     setAvatarWalking(false);
     setAvatarMood("idle");
     setScreen("island-transition");
   }, []);

4. handleAfterMission MÓDOSÍTÁS (justUnlockedIsland ág):
   if (justUnlockedIsland) {
     setScreen("island-complete-anim");   // ← volt: kártya mentés + setScreen("reward")
   } else {
     setScreen("mission-select");
   }

5. handleIslandAnimDone HOZZÁADÁS (handleAfterMission után):
   const handleIslandAnimDone = useCallback(() => {
     const rarity = calculateRarity(missionScore.score, missionScore.total, 0, false);
     saveCard({ id: generateCardId(), game: "astromath", rarity,
       score: missionScore.score, total: missionScore.total,
       date: new Date().toISOString() });
     window.dispatchEvent(new Event("plizio-cards-changed"));
     incrementTotalGames();
     checkNewMilestones();
     setEarnedCard(rarity);
     setRewardScore({ score: missionScore.score, total: missionScore.total });
     setScreen("reward");
   }, [missionScore]);

6. Screen renderek (// ─── MISSION DONE blokk ELÉ):
   if (screen === "island-transition") {
     return (
       <div className="min-h-screen bg-[#060614] relative">
         <Starfield />
         <RocketTransition color={bgColor} onDone={() => setScreen("island-intro")} />
       </div>
     );
   }
   if (screen === "island-complete-anim" && activeIsland) {
     return (
       <IslandCompleteAnimation
         islandIcon={activeIsland.icon}
         islandColor={activeIsland.color}
         islandName={activeIsland.name[lang as Lang] ?? activeIsland.name.en}
         lang={lang}
         onDone={handleIslandAnimDone}
       />
     );
   }
```

**Státusz:** G1 ✅ · G2 ✅ · G3 ✅ · G4 ✅ · G5 ✅ · G6-G8 TODO

---

### Tervezett fejlesztések (TODO)

1. **G6-G8 oldalak** — `/astromath/6/`, `/astromath/7/`, `/astromath/8/` megvalósítása
2. **Hangeffektek** — Web Audio API / rövid MP3 fájlok (sziget teljesítés, helyes válasz stb.)
3. **Animált pályabejárás** — ✅ KÉSZ (IslandCompleteAnimation + RocketTransition)
4. **G3/G4 explorerek átírása topic módra** — A G3/G4 explorerek jelenleg régi "flat rounds" módot használnak (info→mcq), míg a G1/G2 explorerek az újabb "topic" módot (topic-teach→topic-interact→topic-quiz). A topic mód jobb: van interaktív elem (block-drag, number-line). ~15 explorer fájl, fájlonként ~50 sor változás. Lépések: `rounds:[...]` → `topics:[...]`, interactive config hozzáadás, +15 sor LABELS/fájl (instruction/hint 4 nyelven).

### Új Grade (G6/G7/G8) hozzáadása — lépésről lépésre

> Minden új grade PONTOSAN ugyanazt a mintát követi mint G5. A fájlok 1:1 másolatok minimális módosítással.

**1. `lib/astromathN.ts` létrehozása** (pl. `lib/astromath6.ts`)
- Másold `lib/astromath5.ts`-t → cseréld: `G5` → `G6`, `g5_` → `g6_`, grade `5` → `6`
- 9 sziget definíció: az adott grade tananyaga alapján (`g6_*` topic key-ek kellenek a `mathCurriculum.ts`-ben!)
- `G6_CHECKPOINT_TOPICS`: 3 checkpoint, mindegyik az előző 3 sziget topic key-jeiből
- `G6_SAVE_KEY = "astromath_g6_v1"`
- Exportok: `G6_ISLANDS`, `loadG6Progress`, `saveG6Progress`, `isMissionDoneG6`, stb.

**2. `app/astromath/N/page.tsx` létrehozása** (pl. `app/astromath/6/page.tsx`)
- Másold `app/astromath/5/page.tsx`-t → cseréld: minden `G5`/`g5`/`astromath5` → `G6`/`g6`/`astromath6`
- `G5_LABEL` → `G6_LABEL` (szövegek: "Grade 6", "6. osztály", "Klasse 6", "Clasa 6")
- SVG filter/gradient id-k: `pathGlowG5` → `pathGlowG6`, `islandGlowG5` → `islandGlowG6`, stb.
- `bgColor` default: válassz az adott bolygó színéből (G6=#FF9500, G7=#10B981, G8=#E879F9)
- Progress bar gradient: válassz új szín párt
- `testTopicsG5` → `testTopicsG6`: checkpoint témák leírása mind 4 nyelven
- Ha új gameType kell (ami G5-ben sincs): add hozzá a Screen union-ba + renderelő switch-be
- `grade={6}` prop a PlaceValueExplorer, ConceptExplorer, UnitExplorer, WordProblemExplorer-nek (ha használod)

**3. `app/astromath/N/layout.tsx`** — SEO metadata (title, description, canonical)

**4. Hub oldal frissítése (`app/astromath/page.tsx`)**
- Import: `import { loadG6Progress } from "@/lib/astromath6";`
- State: `const [g6Done, setG6Done] = useState(0);`
- useEffect: `const p6 = loadG6Progress(); setG6Done(p6.completedIslands.length);`
- GRADES tömb: `{ grade: 6, ..., route: "/astromath/6", available: true }`
- Progress ternary: `g.grade === 6 ? g6Done :`

**5. `lib/astromath.ts`** — ha új gameType szükséges, add a `GameType` union-ba

**6. `mathCurriculum.ts`** — ELLENŐRIZD hogy a használt `g6_*` topic key-ek léteznek!
- Ha nem → előbb a generátorokat kell megírni a `mathCurriculum.ts`-ben (G6 objektum)

**7. Explorer komponensek grade prop** — ha az adott grade más számkört / nehézséget igényel:
- `PlaceValueExplorer`: új `ROUND_POOL_G6` + `grade >= 6` ág
- `ConceptExplorer`: új `ROUND_POOL_G6` + `grade >= 6` ág
- `UnitExplorer`: új `ROUND_POOL_G6`
- `WordProblemExplorer`: új `PROBLEMS_G6`

**8. Build + push**

**Bolygó színek referencia:**
| Grade | Bolygó | Szín | Glow |
|-------|--------|------|------|
| 6 | Saturnia | `#FF9500` | `rgba(255,149,0,0.4)` |
| 7 | Verdis | `#10B981` | `rgba(16,185,129,0.4)` |
| 8 | Cosmara | `#E879F9` | `rgba(232,121,249,0.4)` |

---

## PLIZIO WORLD — Meta-progression rendszer

> Allapot: tervezesi fazis (2026-03-07)
> Route: `/world`
> Jelenlegi: 2D SVG terkep 6 zonaval, S-kanyaros ut

### Koncepció

A World egy **meta-progression rendszer a jatekok fole huzva**. Minden sziget (zona) 5 kuldetest tartalmaz. A kuldetes teljesiteseert **exkluziv jutalmakat** kap a jatekos (skin, virtualis allat, stb.) — amiket CSAK itt lehet megszerezni.

**NEM** lock/unlock rendszer — minden sziget elerheto, de a feladatokat sorban kell teljesiteni az adott szigeten belul.

### Sziget struktura (pelda)

```
Sziget 1 (Hegyvdek):
  Feladat 1: "Jatssz NumberPath-ot"
  Feladat 2: "Erd el 5. szintet MiniSudoku-ban"
  Feladat 3: "Terj vissza holnap is" (streak)
  Feladat 4: "Oszd meg egy baratodnak"
  Feladat 5: "Jatssz 30 percet osszesen"
  Jutalom: Hegyvdek skin (exkluziv!)
```

### Feladat tipusok

| Tipus | Peldak |
|-------|--------|
| Jatek kihivas | "Erd el X szintet Y jatekban", "Szerezz Silver+ kartyat" |
| Streak/visszateres | "Terj vissza holnap is", "Jatssz 3 egymast koveto napon" |
| Idoalapu | "Jatssz 30 percet osszesen", "Jatssz 3 kulonbozo jatekkal" |
| Social | "Oszd meg egy baratodnak" |
| Gyujtes | "Szerezz 5 kartyat", "Valts be 3 kartyat" |

### Jutalmak (szigetenkent 1 exkluziv jutalom)

| Sziget | Jutalom | Tipus |
|--------|---------|-------|
| Hegyvdek | Hegyvdek skin | Exkluziv skin |
| Ocean | Ocean allat (hal?) | Virtualis allat |
| Varos | Neon skin / ruha | Exkluziv skin/ruha |
| Erdo | Erdo allat (nyuszi?) | Virtualis allat |
| Sivatag | Sivatag skin | Exkluziv skin |
| Vulkan | Legendary jutalom | Kulonleges |

### Terkep UI

- Jelenlegi: 2D SVG terkep, 6 sziget, bezier ut koztuk
- A terkep vizualisan mutatja a haladast: progress bar/kor minden szigeten (pl. 3/5)
- Kattintasra megnyilik a feladat lista
- Nem kell 3D — a latvanyossag az SVG reszletessegeben es animaciokban van

### Fajlok

| Fajl | Tartalom |
|------|----------|
| `app/world/page.tsx` | Terkep UI + feladat lista |
| `app/world/layout.tsx` | SEO metadata |
| `lib/world.ts` | Zona definiciok, progress, feladat ellenorzes |

### localStorage

| Kulcs | Tartalom |
|-------|---------|
| `plizio_world_progress` | `{ completedZones: string[], tasks: Record<zoneId, completedTaskIds[]> }` |
| `plizio_world_playtime` | `{ date: string, minutes: number, games: string[] }` |

---

## Out mappa szinkron (public_html deploy)

**FONTOS:** A felhasználó szerverén a fájlok a `public_html/` mappából futnak.

Minden feladat végén:
1. Futtasd le a `npx next build` parancsot (`npm run build` nem működik)
2. Az `out/` mappa automatikusan generálódik
3. Commitold és pushold az `out/` mappát is

Szabályok:
- Minden kód módosítás után MINDIG buildelj (`npm run build`)
- Az `out/` mappát MINDIG commitold és pushold
- **NE használj `git add -f out/`** — az `out/` mappa NEM szerepel a `.gitignore`-ban, tehát simán `git add out/` elegendő
- A deploy parancsban MINDIG töröld a régi `_next/` és `next_static/` mappát először, majd nevezd át: `rm -rf _next next_static && cp -r out/* . && mv _next next_static && rm -rf out`
  - Ez azért fontos, mert a JS chunk fájlnevek minden buildnél változnak
  - Ha nem törlöd, régi és új chunk fájlok keverednek, és elromlik az oldal

**⚠️ KRITIKUS — chunk fájlok 404 hibája:**
- Az `/out/` NEM lehet a `.gitignore`-ban! Ha benne van, a `git checkout -- out/` a szerveren nem húzza le megbízhatóan az `out/_next/` alkönyvtárat, és a chunk JS fájlok 404-et adnak.
- Ha valaki visszarakja az `/out/`-ot a `.gitignore`-ba → azonnal vedd ki!

---


---

## PLIZIO ROOM — Izometrikus szoba rendszer

> Állapot: **MŰKÖDIK** (2026-03-06) — alap szoba + bútorok + avatar + zoom kész
> Stílus: **Izometrikus SVG pixel-art** — kézzel rajzolt, meleg színek, konzisztens stílus
> Mottó: "Cozy Pixel meets Modern Neon"

### Alapkoncepció

A játékos **szobákat** rendezhet be bútorokkal. Minden szoba egy **izometrikus 2D SVG nézet** — padló rács + falak + bútorok. A bútorok ⭐-ért vásárolhatók a shopban (új "Szoba" tab).

**Játékmenet:**
1. Alapértelmezetten 1 szoba van (Hálószoba) — néhány alap bútorral
2. Új szobák vásárolhatók ⭐-ért (Konyha, Nappali, Fürdő, Kert)
3. Bútorok a shopból vásárolhatók → drag-drop elhelyezés a rácsra
4. Szobák közötti navigáció nyilakkal / swipe-pal
5. Nap/éjszaka ciklus az ablakban (valós idő alapján)
6. Bútor animációk (idle + interakció)

### Route és fájlok

```
app/room/page.tsx              ← Szoba nézet (fő UI, avatar DOM overlay, zoom/pan, edit mode)
app/room/layout.tsx            ← SEO metadata
components/room/               ← Szoba komponensek mappa
  IsoRoom.tsx                  ← Szoba shell (padló + falak + ablak) — TILE_W=48, TILE_H=24, wallHeight=120
  FurnitureRegistry.tsx        ← Bútor definíciók (FURNITURE_DEFS tömb) + getFurnitureDef()
  RoomRenderer.tsx             ← Bútor renderelő — painter's algorithm, forgatás, pozícionálás
  furniture/                   ← 25 bútor SVG komponens (Nightstand.tsx, LampFloor.tsx, stb.)
  furniture/types.ts           ← FurnitureProps interface: { x: number; y: number }
  furniture/index.ts           ← FURNITURE_COMPONENTS export map
lib/room.ts                    ← Szoba adatkezelés (localStorage): PlacedFurniture, getOwnedRooms, stb.
lib/roomInteractions.ts        ← Bútor interakciók (tap)
```

### Izometrikus koordináta rendszer

```
SVG viewBox: dinamikus (totalW × totalH)
  totalW = (gridW + gridH) * (TILE_W / 2) + 40
  totalH = wallHeight + (gridW + gridH) * (TILE_H / 2) + 20
  wallHeight = 120

Izometrikus tengelyek:
  X tengely: jobbra-le (→↘)   dx = TILE_W/2,  dy = TILE_H/2
  Y tengely: balra-le  (←↘)   dx = -TILE_W/2, dy = TILE_H/2

TILE_W = 48  (rombusz szélesség)
TILE_H = 24  (rombusz magasság)

Grid → SVG pixel konverzió:
  screenX = originX + (gridX - gridY) * TILE_W/2
  screenY = originY + (gridX + gridY) * TILE_H/2

originX = gridH * (TILE_W / 2) + 20
originY = wallHeight = 120
```

### ⚠️ Szoba renderelés — KRITIKUS pozícionálási szabályok

**Bútor pozícionálás (RoomRenderer.tsx):**
- Bútorok a **tile KÖZEPÉRE** kerülnek: `y = gridToScreen(gx, gy).y` — NINCS offset!
- `+ TILE_H/2` offset ROSSZ — a tile alsó csúcsára kerül, ami lebegésnek tűnik
- Bútor forgatás: `scale(-1, 1)` tükrözéssel (NEM SVG rotate!), ld. `isMirrored`

**Bútor SVG árnyék szabályok:**
- Doboz-alakú bútorok (nightstand, wardrobe, fridge, stb.): árnyék `cy={-4}` — feljebb az izometrikus test ALÁ
- Lapos talpú bútorok (lamp, plant, tree): árnyék `cy={0}` — a lapos talp lefedi
- Ha `cy={0}` → a shadow ry pixel-nyi rés látszik a bútor alja és árnyék közt → LEBEGÉS illúzió
- **Szabály:** Új bútor SVG-nél ha doboz-alakú → `cy={-4}`, ha lapos talpú → `cy={0}`

**Avatar a szobában (DOM overlay, NEM SVG!):**
```tsx
// Az avatar NEM az SVG-ben van, hanem egy abszolút pozícionált DOM div
// Az SVG getBoundingClientRect + viewBox alapján számolódik a pozíció
const domX = svgRect.left + (sx / viewBox.width) * svgRect.width - containerRect.left;
const domY = svgRect.top + (sy / viewBox.height) * svgRect.height - containerRect.top;

// Avatar div méret: baseAvatarSize (60px) * zoom
// Top offset: pos.top - avatarSize * 0.75  ← a 3D láb nem a canvas alján van!
//   A Three.js kamera fov + avatar pozíció miatt ~25% üres tér van a láb alatt
//   Ez az offset kompenzálja
```

**Zoom/Pan rendszer:**
- CSS transform: `scale(zoom) translate(pan.x/zoom, pan.y/zoom)` a szoba wrapper div-en
- MIN_ZOOM = 1, MAX_ZOOM = 5
- Avatar méret a zoom-mal skálázódik: `avatarSize = baseAvatarSize * zoom`
- Pinch zoom támogatás touch event-ekkel

### Szoba típusok

| Szoba | Grid méret | Padló szín | Fal szín | Ár | Alapból |
|-------|-----------|-----------|---------|-----|---------|
| Hálószoba | 6×6 | Meleg fa `#C4956A/#A87D5A` | Lila `#2A1F3D/#1E1630` | — | ✅ ingyenes |
| Nappali | 7×7 | Sötét fa `#8B6F4E/#7A5F3E` | Bordó `#3D1F2A/#2E1620` | 30⭐ | ❌ |
| Konyha | 5×6 | Csempe `#D4D4D4/#BABABA` | Zöldes `#1F3D2A/#163020` | 25⭐ | ❌ |
| Fürdő | 5×5 | Kék csempe `#7AAEC4/#5A8EA4` | Világoskék `#1F2D3D/#162030` | 20⭐ | ❌ |
| Kert | 8×8 | Fű `#4A8B3A/#3A7B2A` | Nincs fal! | 40⭐ | ❌ |

### Bútor kategóriák és SVG stílus szabályok

**Méretezés (grid cellákban):**
| Méret | Grid | Példák |
|-------|------|--------|
| 1×1 | 1 cella | Lámpa, növény, vödör |
| 2×1 | 2 cella hosszú | Asztal, pad, TV szekrény |
| 1×2 | 2 cella széles | Könyvespolc, szekrény |
| 2×2 | 4 cella | Ágy, kanapé, jakuzzi |

**SVG rajzolási szabályok:**
1. Minden bútor egy `<g>` csoport, `transform={translate(x,y)}` pozícionálással
2. Izometrikus perspektíva: felső lap rombusz, oldalsó lapok parallelogramma
3. **Árnyék** minden bútor alatt: `<ellipse fill="rgba(0,0,0,0.1x)">` — `cy={-4}` doboz bútoroknál, `cy={0}` lapos talpúaknál
4. **Szín paletta**: meleg, pasztell — kerüld a neon/élénk színeket (a szoba cozy legyen!)
5. **Kontúr**: nincs fekete outline, inkább sötétebb árnyalat a széleknél
6. **Highlight**: felső lapon halvány fehér gradient (fény illúzió)
7. **Forgatás**: `scale(-1, 1)` tükrözéssel (NEM SVG `rotate()`! Az fejjel lefelé forgatja a bútort)

**Izometrikus lap rajzolási minta:**
```
Felső lap (top face):     M cx,cy-h  L cx+tw,cy-h+th  L cx,cy-h+2*th  L cx-tw,cy-h+th  Z
Bal oldal (left face):    M cx-tw,cy-h+th  L cx,cy-h+2*th  L cx,cy  L cx-tw,cy-th  Z
Jobb oldal (right face):  M cx+tw,cy-h+th  L cx,cy-h+2*th  L cx,cy  L cx+tw,cy-th  Z
```
Ahol: `tw` = tile félszélesség, `th` = tile félmagasság, `h` = bútor magassága

### Bútor lista (40+ tervezett, PÉLDA SVG-k jelölve ✅)

**Hálószoba bútorok:**
| ID | Név | Méret | Ár | SVG | Animáció |
|----|-----|-------|-----|-----|----------|
| `bed_basic` | Egyszerű ágy | 2×1 | 0⭐ | ✅ | — |
| `bed_double` | Franciaágy | 2×2 | 8⭐ | | — |
| `nightstand` | Éjjeliszekrény | 1×1 | 3⭐ | ✅ | — |
| `lamp_floor` | Állólámpa | 1×1 | 4⭐ | ✅ | fénykör idle |
| `wardrobe` | Szekrény | 1×2 | 6⭐ | ✅ | — |
| `rug_round` | Kerek szőnyeg | 2×2 | 5⭐ | | — |
| `poster` | Poszter (falra) | fal | 2⭐ | | — |

**Nappali bútorok:**
| ID | Név | Méret | Ár | SVG | Animáció |
|----|-----|-------|-----|-----|----------|
| `couch` | Kanapé | 2×1 | 10⭐ | ✅ | — |
| `tv_stand` | TV szekrény | 2×1 | 8⭐ | ✅ | képernyő szín váltás |
| `bookshelf` | Könyvespolc | 1×2 | 6⭐ | ✅ | — |
| `coffee_table` | Dohányzóasztal | 2×1 | 5⭐ | | — |
| `fireplace` | Kandalló | 2×1 | 15⭐ | | láng flicker |
| `guitar` | Gitár (állványon) | 1×1 | 7⭐ | | hangjegy ♪ interakció |
| `plant_big` | Nagy növény | 1×1 | 3⭐ | ✅ | — |
| `aquarium` | Akvárium | 2×1 | 12⭐ | | hal úszás + buborékok |

**Konyha bútorok:**
| ID | Név | Méret | Ár | SVG | Animáció |
|----|-----|-------|-----|-----|----------|
| `fridge` | Hűtőszekrény | 1×1 | 8⭐ | ✅ | — |
| `stove` | Tűzhely | 1×1 | 7⭐ | | gőz |
| `counter` | Pult | 2×1 | 5⭐ | | — |
| `kitchen_table` | Konyhaasztal | 2×2 | 6⭐ | | — |
| `coffee_machine` | Kávégép | 1×1 | 5⭐ | | gőz interakció |

**Fürdő bútorok:**
| ID | Név | Méret | Ár | SVG | Animáció |
|----|-----|-------|-----|-----|----------|
| `bathtub` | Kád | 2×1 | 10⭐ | | buborékok |
| `sink` | Mosdó | 1×1 | 4⭐ | | vízcseppek |
| `toilet` | WC | 1×1 | 3⭐ | | — |
| `mirror` | Tükör (falra) | fal | 5⭐ | | tükröződés |

**Kert bútorok:**
| ID | Név | Méret | Ár | SVG | Animáció |
|----|-----|-------|-----|-----|----------|
| `fountain` | Szökőkút | 2×2 | 20⭐ | | víz csobogás |
| `bench` | Pad | 2×1 | 5⭐ | | — |
| `swing` | Hinta | 1×1 | 8⭐ | | lengés |
| `trampoline` | Trambulin | 2×2 | 15⭐ | | ugrás interakció |
| `tree` | Fa | 1×1 | 6⭐ | | levél hullás |
| `flowerbed` | Virágágyás | 2×1 | 4⭐ | | — |

### Fény rendszer

Minden szobában:
```tsx
// Ambient light — szoba alap fénye (nap/éjszaka szerint változik)
<rect fill={`rgba(255,240,200,${ambientAlpha})`} mixBlendMode="soft-light" />

// Bútor fények — radiális gradient
// Lámpa: meleg sárga fénykör
<radialGradient id="lampLight">
  <stop offset="0%" stopColor="rgba(255,220,100,0.20)" />
  <stop offset="100%" stopColor="transparent" />
</radialGradient>

// TV: kékes fénykör
// Kandalló: narancs flicker (opacity animáció)
// Akvárium: kék-zöld fénykör
```

### Nap/éjszaka ciklus

Valós idő alapján (user device clock):
| Időszak | Óra | Ablak szín | Ambient | Extra |
|---------|-----|-----------|---------|-------|
| Hajnal | 5-7 | Rózsaszín-narancs | 0.3 | Madár SVG |
| Reggel | 7-12 | Világoskék | 0.5 | Napsugarak |
| Délután | 12-17 | Kék-arany | 0.4 | Felhők |
| Alkony | 17-20 | Narancs-lila | 0.25 | Naplemente |
| Este | 20-23 | Sötétkék | 0.1 | Csillagok |
| Éjszaka | 23-5 | Sötét | 0.05 | Hold + csillagok |

### localStorage kulcsok

| Kulcs | Tartalom |
|-------|---------|
| `plizio_rooms_owned` | `string[]` — birtokolt szoba ID-k |
| `plizio_rooms_furniture` | `Record<roomId, PlacedFurniture[]>` |
| `plizio_furniture_owned` | `string[]` — birtokolt bútor ID-k |

```ts
interface PlacedFurniture {
  furnitureId: string    // bútor definíció ID
  gridX: number          // rácspozíció
  gridY: number
  rotation: 0 | 1 | 2 | 3  // 90°-os forgatás (0=alapállapot)
}
```

### Shop integráció

Új tab a shopban: **"Szoba"** — 2 szekció:
1. **Szobák** — új szoba vásárlás (ha még nincs)
2. **Bútorok** — szoba-specifikus és univerzális bútorok

Ár tartomány: 2-20⭐ (bútorok), 20-40⭐ (szobák)

### Drag & Drop elhelyezés

```tsx
// Grid cella kiemelés drag közben
// Zöld: elhelyezhető
// Piros: foglalt / nem fér el
// Snap to grid: legközelebbi rács pozícióra ugrik
```

**Mobil:** long-press a bútorra → drag mód → elengedés = elhelyezés
**Desktop:** click + drag

### JÁTÉK INTEGRÁCIÓ — Szoba feladatok

A szoba rendszer beépül a napi feladat rendszerbe:
| Feladat | Jutalom |
|---------|---------|
| "Helyezz el egy új bútort" | +1⭐ |
| "Vásárolj egy szobát" | +2⭐ |
| "Rendezd be a konyhát (min 5 bútor)" | +3⭐ |

### SVG Fejlesztési szabályok (BŐVÍTÉSHEZ)

**Új bútor hozzáadása — checklist:**
1. Hozz létre `components/room/furniture/MyFurniture.tsx` fájlt
2. Kövesd az izometrikus perspektívát (felső lap + bal oldal + jobb oldal)
3. Árnyék: `<ellipse cx={0} cy={-4} rx={N} ry={N} fill="rgba(0,0,0,0.1x)" />` (doboz), `cy={0}` (lapos talp)
4. Export-áld `components/room/furniture/index.ts`-ben a FURNITURE_COMPONENTS map-be
5. Add hozzá a `FURNITURE_DEFS` tömbbe a `FurnitureRegistry.tsx`-ben
6. Adj meg: `id, name, icon, price, gridW, gridH, room, category`
7. Opcionális: `hasAnimation: true, animationType: "glow"|"flicker"|"bubble"`
8. Tesztelés: nézd meg a szobában hogy jól illeszkedik-e a rácsra, NEM LEBEG-E

**SVG stílus referencia (Nightstand példa):**
```tsx
<g transform={`translate(${x}, ${y})`}>
  <ellipse cx={0} cy={-4} rx={16} ry={6} fill="rgba(0,0,0,0.12)" />  {/* shadow — cy={-4}! */}
  <path d="M 0,0 L 12,-6 L 12,-22 L 0,-16 Z" fill="#5A3E28" />       {/* jobb oldal */}
  <path d="M 0,0 L -12,-6 L -12,-22 L 0,-16 Z" fill="#7B5E42" />     {/* bal oldal */}
  <path d="M 0,-28 L 12,-22 L 0,-16 L -12,-22 Z" fill="#8B6E52" />   {/* felső lap */}
</g>
```

**Meglévő 25 bútor (components/room/furniture/):**
Aquarium, Bathtub, BedBasic, BedDouble, Bench, Bookshelf, CoffeeTable,
Counter, Couch, Desk, Fireplace, Flowerbed, Fountain, Fridge,
KitchenTable, LampFloor, Nightstand, PlantBig, RugRound, Sink,
Stove, Toilet, Tree, TvStand, Wardrobe

---

## MULTIPLAYER RENDSZER

> Allapot: **MUKODIK** (2026-03-07) — kihivas, elfogadas, jatek, eredmeny
> Backend: Supabase `multiplayer_matches` tabla
> Route: `/multiplayer`

### Architektura

Jatekosok nev alapjan kihivjak egymast. A kihivas Supabase-ben tarolodik, mindketten polling-gal figyelik a statust. Azonos `seed` alapjan mindketten ugyanazokat a kerdeseket kapjak (seeded PRNG).

### Fajlok

| Fajl | Leiras |
|------|--------|
| `lib/multiplayer.ts` | Supabase CRUD: createChallenge, acceptChallenge, declineChallenge, cancelChallenge, abandonMatch, submitScore, getMyPendingChallenges, getMySentChallenges, getMyActiveMatches, getMyMatchHistory, subscribeToMatch |
| `app/multiplayer/page.tsx` | Fo multiplayer UI: kihivas kuldese, pending/active/history tabfulek |
| `components/ChallengeOverlay.tsx` | **Globalis** popup — BARHOL az oldalon megjelenik ha kihivnak (layout.tsx-ben mountolva) |
| `components/ChallengeWaiting.tsx` | Kihivo varakozo kepernyoje — avatar + "Varakozas [nev] elfogadja..." + decline/countdown |
| `components/MultiplayerExitConfirm.tsx` | Megerosito dialog jatek kozbeni kilepeskor multi modban |
| `components/MultiplayerAbandonNotice.tsx` | Ertesites ha az ellenfél elhagyta a jatekot (polling) |
| `components/ResultCard.tsx` | Eredmeny kartya (multi + solo) — multi modban ket oszlop, mindket jatekos pontszama |

### Supabase tabla: `multiplayer_matches`

```ts
interface MultiplayerMatch {
  id: string;                    // UUID
  game: string;                  // jatek route (pl. "quickpick")
  player1_name: string;          // kihivo neve
  player2_name: string | null;   // kihivott neve
  status: "waiting" | "playing" | "finished" | "declined" | "cancelled" | "abandoned";
  seed: string | null;           // seeded PRNG seed
  player1_score: number | null;
  player2_score: number | null;
  created_at: string;
}
```

### Match statusz eletciklus

```
waiting → playing     (player2 elfogadja: acceptChallenge)
waiting → declined    (player2 elutasitja: declineChallenge)
waiting → cancelled   (player1 visszavonja: cancelChallenge)
playing → finished    (mindketten befejezik: submitScore)
playing → abandoned   (valaki kilep: abandonMatch)
```

### Kihivas flow (teljes)

**Player A (kihivo):**
1. Kivalasztja ellenfelet + jatekot → `createChallenge(game, opponentName)`
2. `ChallengeWaiting` overlay jelenik meg (avatar + varakozas animacio)
3. Polling 2mp-enkent a match statuszra
4. Ha B elfogad → avatar oromkodik → 3-2-1 countdown → navigacio a jatekra
5. Ha B elutasit → disappointed avatar + "[nev] elutasitotta a kihivast" + Vissza gomb
6. Ha A megse → `cancelChallenge()` → overlay bezarul

**Player B (kihivott):**
1. `ChallengeOverlay` (globalis, layout.tsx-ben) polling-gal figyeli a pending kihivasokat
2. Megjelenik BARHOL az oldalon: avatar + buborek: "[kihivo] kihivott teged [jatek]-ra!"
3. Accept → `acceptChallenge()` → avatar oromkodik → 3-2-1 countdown → navigacio
4. Decline → `declineChallenge()` → overlay eltunik

**Jatek kozben:**
- URL parameterek: `?match=ID&seed=SEED&p=1|2&vs=opponentName`
- Mindketten ugyanazokat a kerdeseket kapjak (seeded PRNG a `seed` alapjan)
- Kilépés gomb → `MultiplayerExitConfirm` ("Biztos kilepesz? Ellenfeled ertesitest kap")
- Ha kilep → `abandonMatch()` → masik jatekos latja `MultiplayerAbandonNotice`-t
- Vegeredmeny → `submitScore(matchId, score, isPlayer1)`
- Eredmeny → `ResultCard` ket oszlopban mutatja mindket pontszamot

### Globalis ChallengeOverlay (layout.tsx)

- Mountolva: `app/layout.tsx` → `<LanguageProvider>` belul
- **Kivetel:** `/multiplayer` oldalon NEM aktiv (az oldal sajat maga kezeli)
- Polling: 4mp-enkent `getMyPendingChallenges()`
- Dismissed set: egyszer elutasitott kihivasok nem jelennek meg ujra

### Jatek multi-kompatibilita — checklist

**Jelenleg multi-kompatibilis jatekok:**
quickpick, reflexrush, numberrush, sequencerush, wordhunt, numberpath, minisudoku, wordscramble

**Level-alapu jatekok (`LEVEL_GAMES` set):**
reflexrush, numberrush, sequencerush, wordhunt, numberpath, minisudoku, wordscramble
→ Ezeknel a multiplayer kihivasnal level valaszto jelenik meg (1-9, 10-es NEM valaszthato)
→ URL-ben `&level=X` parameterrel erkezik a jatek oldalra

---

#### Uj jatek multi-kompatibilissa tetele — TELJES checklist:

**1. Importok hozzaadasa:**
```tsx
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import MultiplayerExitConfirm from "@/components/MultiplayerExitConfirm";
import MultiplayerAbandonNotice from "@/components/MultiplayerAbandonNotice";
import MultiplayerResult from "@/components/MultiplayerResult";
import { submitScore, abandonMatch, submitMixRoundScore, pollMixRound } from "@/lib/multiplayer";
import { getUsername } from "@/lib/username";
```

**2. Suspense wrapper (kotelezo `useSearchParams` miatt):**
```tsx
export default function MyGamePageWrapper() {
  return <Suspense><MyGamePage /></Suspense>;
}
function MyGamePage() { /* ... */ }
```

**3. URL parameterek olvasasa:**
```tsx
const searchParams = useSearchParams();
const router = useRouter();
const matchId = searchParams.get("match");
const playerNum = searchParams.get("p");
const opponentName = searchParams.get("vs") || "???";
const urlLevel = searchParams.get("level");
const mixround = searchParams.get("mixround");
const isMultiplayer = !!matchId;
const isMix = !!mixround;
```

**4. Multiplayer state valtozok:**
```tsx
const [showExitConfirm, setShowExitConfirm] = useState(false);
const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
const [mixFinished, setMixFinished] = useState(false);
const [scoreSubmitted, setScoreSubmitted] = useState(false);
```

**5. Screen type bovitese:**
```tsx
type Screen = "expedition" | "playing" | "reward" | "levelComplete" | "levelFailed"
  | "multi-waiting" | "multi-result";
```

**6. Auto-start multiplayer modban (expedition kihagyasa):**
```tsx
const multiStarted = useRef(false);
useEffect(() => {
  if (isMultiplayer && urlLevel && !multiStarted.current) {
    multiStarted.current = true;
    const lv = Math.min(9, Math.max(1, parseInt(urlLevel) || 1));
    setTimeout(() => startLevel(lv), 100);
  }
}, [isMultiplayer, urlLevel]); // eslint-disable-line react-hooks/exhaustive-deps
```

**7. Expedition elrejtese multi modban:**
```tsx
{screen === "expedition" && !isMultiplayer && ( /* ... */ )}
```

**8. Win handler (levelSuccess) — multi ag:**
```tsx
if (isMultiplayer && matchId && !scoreSubmitted) {
  setScoreSubmitted(true);
  // Kartya mentes + incrementTotalGames itt is kell!
  if (isMix) {
    submitMixRoundScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
  } else {
    submitScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
  }
  return;
}
// ... eredeti solo logika ...
```

**9. Fail handler (levelFailed) — multi ag:**
```tsx
if (isMultiplayer && matchId && !scoreSubmitted) {
  setScoreSubmitted(true);
  if (isMix) {
    submitMixRoundScore(matchId, currentScore, playerNum === "1").then(() => setScreen("multi-waiting"));
  } else {
    submitScore(matchId, currentScore, playerNum === "1").then(() => setScreen("multi-waiting"));
  }
  return;
}
```

**10. Polling effect (multi-waiting):**
```tsx
useEffect(() => {
  if (screen !== "multi-waiting" || !isMultiplayer || !matchId) return;
  const isP1 = playerNum === "1";
  const checkMatch = async () => {
    if (isMix) {
      const result = await pollMixRound(matchId, parseInt(mixround || "1"), isP1, opponentName);
      if (result.action === "finished") {
        setMyFinalScore(result.myWins); setOppFinalScore(result.oppWins);
        setMixFinished(true); setScreen("multi-result"); return true;
      }
      if (result.action === "next") { router.push(result.url); return true; }
      return false;
    } else {
      const { supabase } = await import("@/lib/supabase/client");
      const { data } = await supabase.from("multiplayer_matches").select("*").eq("id", matchId).single();
      if (!data) return false;
      const oppDone = isP1 ? data.player2_done : data.player1_done;
      const oppScore = isP1 ? data.player2_score : data.player1_score;
      if (oppDone && oppScore !== null) { setOppFinalScore(oppScore); setScreen("multi-result"); return true; }
      return false;
    }
  };
  checkMatch();
  const interval = setInterval(async () => { if (await checkMatch()) clearInterval(interval); }, 2000);
  return () => clearInterval(interval);
}, [screen, isMultiplayer, matchId, isMix, playerNum, router, opponentName, mixround]);
```

**11. Kilepes gomb (playing screen) — multi:**
```tsx
onClick={() => {
  if (isMultiplayer) setShowExitConfirm(true);
  else { /* eredeti: setScreen("expedition") */ }
}}
```

**12. Multi-waiting render:**
```tsx
{screen === "multi-waiting" && (
  <motion.div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm gap-5 px-6"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <motion.div className="text-3xl font-black text-[GAME_COLOR]">{score}/{total}</motion.div>
    {isMix && <span className="text-white/60 text-xs font-bold uppercase">Round {mixround} ✓</span>}
    <motion.div className="w-10 h-10 border-2 border-[GAME_COLOR] border-t-transparent rounded-full"
      animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
    <span className="text-white/60 text-sm font-medium text-center">
      {lang === "hu" ? `Várakozás ${opponentName}-ra...` : `Waiting for ${opponentName}...`}
    </span>
  </motion.div>
)}
```

**13. Multi-result render:**
```tsx
{screen === "multi-result" && oppFinalScore !== null && (
  <MultiplayerResult
    myScore={myFinalScore !== null ? myFinalScore : score}
    oppScore={oppFinalScore}
    myName={getUsername() || "???"}
    oppName={opponentName}
    onContinue={() => router.push("/multiplayer")}
  />
)}
```

**14. Exit confirm + abandon overlays (JSX vegen):**
```tsx
{isMultiplayer && matchId && (
  <>
    <MultiplayerExitConfirm open={showExitConfirm}
      onStay={() => setShowExitConfirm(false)}
      onLeave={() => { abandonMatch(matchId); router.push("/multiplayer"); }} />
    {screen === "playing" && <MultiplayerAbandonNotice matchId={matchId} opponentName={opponentName} />}
  </>
)}
```

**15. lib/multiplayer.ts regisztracio:**
- `GameType` union-ba add hozza az uj jatek route-jat
- `GAME_LABELS`-be add hozza a megjelenito nevet
- Ha level-alapu: `LEVEL_GAMES` set-be is add hozza

---

**⚠️ Mix round race condition — KRITIKUS szabaly:**
- Csak Player 1 (`p=1`) hivja az `advanceMixRound()` fuggvenyt
- Player 2 a `pollMixRound()` helperrel figyeli a kor szam valtozasat
- Ha mindketten hivjak → P1 reseteli a done flageket → P2 orokre varakozik!
- A `pollMixRound()` helper ezt automatikusan kezeli

### GAME_LABELS (multiplayer.ts)

A `GAME_LABELS` map hatarozza meg a jatekok megjelenített nevet a kihivas UI-ban.
Uj jatek hozzaadasakor ide is be kell irni.

### localStorage — multiplayer NEM hasznal localStorage-t

Minden adat Supabase-ben van. Nincs helyi mentes.

### Fontos "NE CSINALD" szabalyok (multiplayer)

1. **Ne toröld a declined match-et** — `declineChallenge` update-el, NEM delete-el! A kihivonak latnia kell az elutasitast.
2. **Ne hasznalj `Math.max`-ot score-oknal** — a score egyszer iródik, nincs sync problema.
3. **ChallengeOverlay skip /multiplayer** — `pathname === "/multiplayer"` eseten NE jelenjen meg (az oldal sajat maga kezeli).
4. **Avatar scale:0 animacio** — ChallengeWaiting/ChallengeOverlay avatar mindig `initial={{ opacity: 0 }}`, SOHA NEM `initial={{ scale: 0 }}`.
5. **Seed determinism** — Multi modban a kerdesgenerator KOTELESZ a `seed` parametert hasznalni. Ha nem determinisztikus, a ket jatekos kulonbozo kerdeseket kap.

---

## ÚJ ASTRO JÁTÉK LÉTREHOZÁSA — copy+rename minta

> Tanult tapasztalat (2026-03-22) — mindig ezt a mintát kövesd, ne írj új UI-t!

### Helyes minta: copy + lib import csere

**Alapszabály:** Az astro játékok (astrodeutsch, astroenglish, astromagyar, astro-biologie stb.) grade oldalai **mind ugyanolyan struktúrájúak**. Új grade oldal létrehozásakor SOHA ne írj új UI-t — mindig másold az előző grade oldalát és csak a lib importokat cseréld.

### Melyik template-et használd?

| Játék tartalmaz... | Template |
|---|---|
| Csak `orbit-quiz` + `star-match` + `black-hole` | **`astrodeutsch/5/page.tsx`** |
| + `speed-round`, `spell-race` stb. (Deutsch explorer) | `astrodeutsch/5/page.tsx` |
| + English explorer játékok (fill-gap, word-sort stb.) | `astroenglish/5/page.tsx` |
| + Math vizuális játékok (fraction-visual, equation-drill stb.) | `astromath/5/page.tsx` |

**Biológia, Sachkunde, természettudományos játékok** → mindig **`astrodeutsch/5/page.tsx`** az alap (legegyszerűbb, csak 3 game type).

### Copy+rename lépések

```bash
# 1. Másold az adott grade fájlt
cp app/astrodeutsch/5/page.tsx app/uj-jatek/5/page.tsx

# 2. Cseréld a lib importot és a függvényneveket
# astrodeutsch: K5_ISLANDS, loadK5Progress, isMissionDoneK5 stb.
# → uj-jatek: BIO_K5_ISLANDS as K5_ISLANDS, loadBioK5Progress as loadK5Progress stb.
```

**Amit MINDIG cserélni kell:**
- `from "@/lib/astroDeutsch5"` → `from "@/lib/ujJatek5"` (megfelelő aliasokkal)
- `game: "astrodeutsch"` → `game: "uj-jatek"` (kártyamentésnél)
- `router.push("/astrodeutsch")` → `router.push("/uj-jatek")` (hub route)
- `AstroDeutschK5Page` → `UjJatekK5Page` (export default function neve)
- Grade label szöveg
- Nebula/glow SVG filter ID-k (hogy ne ütközzenek más oldal szűrőivel)
- `bgColor` default szín
- Progress bar gradient

**Amit NEM kell cserélni:**
- Starfield komponens
- CATEGORY_CONFIG (explore/build/challenge kártyák)
- Screen type union
- IslandMapSVG struktúra (csak a függvényneveket a lib-ből)
- MissionDoneScreen, IslandDoneScreen, CheckpointDoneScreen
- Játék renderek (gameScreen blokk)

### Island SVG-k

- Ha az új játékhoz **nincs island SVG fájl** → töröld a `K5_ISLAND_SVGS` importot, és az SVG conditional-t cseréld egyszerű emoji `<text>`-re:
```tsx
{unlocked ? (
  <text x={island.svgX} y={island.svgY + 7} textAnchor="middle" fontSize={20}
    opacity={done ? 0.85 : 1}>{island.icon}</text>
) : ( ... )}
```

### Layout fájlok

Layout fájlokat is másold és csak a title/description/canonical-t cseréld:
```bash
cp app/astrodeutsch/5/layout.tsx app/uj-jatek/5/layout.tsx
# Változtass: title, description, canonical URL
```

### Ellenőrzőlista új Astro grade hozzáadásakor

```
□ cp app/astrodeutsch/N/page.tsx app/uj-jatek/N/page.tsx
□ Lib import + alias nevek cserélve
□ game: "uj-jatek" (2× — mission done + checkpoint done)
□ router.push("/uj-jatek")
□ Export function neve megváltozott
□ Grade label szöveg (en/hu/de/ro)
□ bgColor default + progress bar gradient
□ SVG filter ID-k egyediek (nebula1bioN stb.)
□ cp app/astrodeutsch/N/layout.tsx app/uj-jatek/N/layout.tsx
□ Layout: title, description, canonical
□ npx next build — hibamentes?
□ Hub page (page.tsx) frissítve: új grade route + progress loader
```

## ÚJ TEST JÁTÉK LÉTREHOZÁSA — két minta

> Minden tantárgyhoz két játék létezik párhuzamosan:
> - **Astro játék** (`/astro-biologie`, `/astromagyar` stb.) — tanítás/gyakorlás, sziget-alapú
> - **Test játék** (`/biologietest`, `/magyarteszt` stb.) — rendes iskolai teszt, grade-select + topic-select

### Pattern 1: LanguageTestEngine config (egyszerű — ~80 sor)

Használd ha: nyelvi teszt (deutsch, english, magyar, romanian) VAGY Sachkunde-szerű tantárgy.

**Template:** `app/sachkundetest/page.tsx` vagy `app/englishtest/page.tsx`

```tsx
"use client";
import { LanguageTestEngine } from "@/app/deutschtest/page";
import { MY_CURRICULUM, getMyQuestions, calculateMyGrade, MY_SUBTOPIC_HINTS } from "@/lib/myCurriculum";
import { MY_VISUAL_TYPES } from "@/lib/myVisualGenerators";
import type { LanguageTestEngineConfig } from "@/lib/languageTestTypes";

const MY_CONFIG: LanguageTestEngineConfig = {
  gameId: "mytest",
  title: "MY TEST",
  icon: "📝",
  color: "#3B82F6",
  ttsLang: "en-US",
  ttsRate: 0.92,
  ttsPitch: 1.05,
  dateLocale: "en-US",
  storageKey: "mytest_country",
  bgChars: ["A", "B", "C", "?", "!"],
  bgColors: ["rgba(59,130,246,0.15)", ...],
  curriculum: MY_CURRICULUM,
  getQuestions: getMyQuestions,
  calculateGrade: calculateMyGrade,
  subtopicHints: MY_SUBTOPIC_HINTS,
  visualTypes: MY_VISUAL_TYPES,
};

export default function MyTestPage() {
  return <LanguageTestEngine config={MY_CONFIG} />;
}
```

**Copy lépések:**
```bash
cp app/sachkundetest/page.tsx app/ujtest/page.tsx
# Cseréld: gameId, title, color, ttsLang, storageKey, curriculum imports
```

### Pattern 2: Custom subject test (biologietest minta — ~500 sor)

Használd ha: természettudományos tantárgy (biológia, fizika, kémia) ahol a kérdések és UI eltér a LanguageTestEngine-től.

**Template:** `app/biologietest/page.tsx`

```bash
cp app/biologietest/page.tsx app/ujtest/page.tsx
# Cseréld: curriculum importok, GRADE_DEFS, gameId, title, color
```

**Fő különbség a LanguageTestEngine-től:**
- Nincs TTS
- Grade-select → topic-select → quiz flow (saját logika)
- `BiologieQuestion` típus helyett saját típus
- Generator map-ek self-register importok

### Melyiket válaszd?

| Tantárgy | Pattern |
|---|---|
| Deutsch, English, Magyar, Română | Pattern 1 (LanguageTestEngine) |
| Sachkunde, Természetismeret | Pattern 1 (LanguageTestEngine) |
| Biológia, Fizika, Kémia | Pattern 2 (biologietest másolat) |
| Matematika | Saját (`mathtest`) — ne másold |

### Ellenőrzőlista új Test játék hozzáadásakor

```
□ Megfelelő template másolva (sachkundetest vagy biologietest)
□ gameId, title, color, storageKey cserélve
□ Curriculum lib fájl létezik (lib/ujCurriculum.ts)
□ Visual generators fájl létezik (lib/ujVisualGenerators.ts) — ha Pattern 1
□ app/ujtest/layout.tsx létrehozva (cp sachkunde-test/layout.tsx alapján)
□ Főoldalon regisztrálva (app/page.tsx TRANSLATIONS + CATEGORIES_BASE)
□ npx next build — hibamentes?
```

### Astro + Test párosítás szabály

Minden tantárgyhoz **mindig kettő** jön létre:
| Astro játék | Test játék | Lib |
|---|---|---|
| `/astro-biologie` | `/biologietest` | `lib/astroBiologie*.ts` + `lib/biologieCurriculum*.ts` |
| `/astrodeutsch` | `/deutschtest` | `lib/astroDeutsch*.ts` + `lib/germanCurriculum*.ts` |
| `/astroenglish` | `/englishtest` | `lib/astroEnglish*.ts` + `lib/englishCurriculum.ts` |
| `/astromagyar` | `/magyarteszt` | `lib/astroMagyar*.ts` + `lib/hungarianCurriculum.ts` |
| `/astro-sachkunde` | `/sachkundetest` | `lib/astroSachkunde*.ts` + `lib/sachkundeCurriculum*.ts` |

---

## SHARED GAME ENGINES — QuizEngine, MatchEngine, SortEngine

> A régi önálló komponensek (OrbitQuiz, BlackHole, SpeedRound, StarMatch, GravitySort) lecserélve közös engine-ekre (2026-03-22).
> Az engine-ek a `components/` mappában vannak, a wrapper-ek `app/astromath/games/`-ban.

### QuizEngine (`components/QuizEngine.tsx`)

**Lecseréli:** `OrbitQuiz.tsx`, `BlackHole.tsx`, `SpeedRound.tsx`

```ts
export interface QuizQuestion {
  question: string;
  options: (string | number)[];
  correctAnswer: string | number;
  hint?: string;
}

export interface QuizConfig {
  timer?: number;              // mp/kérdés, 0 = nincs timer (default)
  showStreak?: boolean;        // streak/combo számláló (default: true)
  showScore?: boolean;         // élő pontszám (default: true)
  particles?: boolean;         // részecske effekt helyes válasznál (default: true)
  advanceDelay?: number;       // auto-advance késleltetés ms (default: 1800)
  columns?: 1 | 2;             // rács elrendezés (default: auto)
  showCorrectOnWrong?: boolean; // helyes válasz mutatása hiba esetén (default: true)
}

interface Props {
  questions: QuizQuestion[];
  color: string;
  onDone: (score: number, total: number) => void;
  onCorrect?: () => void;
  onWrong?: () => void;
  onClose?: () => void;
  config?: QuizConfig;
  lang?: string;
}
```

**Wrapper-ek:**
| Wrapper | Config különbség |
|---------|-----------------|
| `OrbitQuiz` | `{ showStreak: true, particles: true }` (alap) |
| `BlackHole` | `{ columns: 1 }` (egyoszlopos) |
| `SpeedRound` | `{ timer: 11, advanceDelay: 1200 }` (időnyomásos) |

**TTS:** Beépített `speakText()` — nyelv-alapú hangválasztás (en-US, de-DE, hu-HU, ro-RO).

### MatchEngine (`components/MatchEngine.tsx`)

**Lecseréli:** `StarMatch.tsx`

```ts
export interface MatchPair { left: string; right: string }

interface Props {
  pairs: MatchPair[];
  color: string;
  onDone: (score: number, total: number) => void;
  regenerate?: () => MatchPair[];  // új pár generálás következő körre
  rounds?: number;                 // körök száma (default: 3)
  lang?: string;
}
```

- 3 kör × 5 pár = 15 párosítás összesen
- Bal oszlop: kérdések (fix), jobb oszlop: válaszok (kevert)
- Rossz párosítás: 600ms piros flash

### SortEngine (`components/SortEngine.tsx`)

**Lecseréli:** `GravitySort.tsx`

```ts
export interface SortRound {
  numbers: number[];
  sorted: number[];
  labels?: string[];       // opcionális felirat a számok helyett (pl. "2³")
  sortedLabels?: string[];
}

interface Props {
  sortRange: [number, number];
  color: string;
  onDone: (score: number, total: number) => void;
  generateRound?: () => SortRound;
  rounds?: number;    // körök száma (default: 5)
  lang?: string;
}
```

- 5 kör × 5 szám — tap sorrendben (kicsitől a nagyig)
- Streak counter 2+-nál jelenik meg

---

## ASTRODEUTSCH POOL-ALAPÚ EXPLORER ARCHITEKTÚRA (K1-K8)

> **Mottó:** "one data file to edit" — a barát csak a pool TS fájlt tölti ki, semmi mást.

### Fájlstruktúra

```
lib/explorerPools/
  types.ts              ← PoolTopicDef + SvgConfig típusok
  deutschK1.ts          ← K1 pool adatok (9 island × POOL + LABELS)
  deutschK2.ts          ← K2 pool adatok
  deutschK3.ts          ← K3 pool adatok
  deutschK4.ts          ← K4 pool adatok (physics interactive típusok is)
  deutschK5.ts          ← K5 pool adatok
  deutschK6.ts          ← K6 pool adatok (template, TODO-val)
  ...
components/
  DynamicExplorer.tsx   ← Univerzális motor — pool → 5 random topic per mount
app/astrodeutsch/games/
  k1/K1Explorer.tsx     ← Router: island.id → DynamicExplorer
  k2/K2Explorer.tsx
  k3/K3Explorer.tsx
  k4/K4Explorer.tsx
  k5/K5Explorer.tsx
  k6/K6Explorer.tsx     ← (még nem kész, K6 template kitöltése után)
  DeutschExplore.tsx    ← Régi fallback (ha nincs pool az adott islandhez)
```

### PoolTopicDef típus (types.ts)

```ts
export interface PoolTopicDef {
  id: string;
  title: string;                    // label key
  svg: SvgConfig;                   // SVG leíró (pure TS data)
  hint1: string;                    // label key
  hint2: string;                    // label key — KÖTELEZŐ (ne felejtsd el!)
  interactive: TopicInteractive;    // interaktív játék
  quiz:
    | { question: string; choices: string[]; answer: string }  // manual label keys
    | { generate: string };          // GENERATORS[key]() hívás mountkor
}
```

### SvgConfig típusok (TopicSvgRenderer.tsx rendereli)

| type | Kötelező mezők | Tipikus buktató |
|------|---------------|-----------------|
| `two-groups` | `left.items`, `right.items`, `left.border`, `right.border` | `border` mező hiánya! |
| `text-bubbles` | `items[].text`, `items[].color` | `color` mező hiánya! |
| `article-noun` | `articleColor` | hiánya → tört render |
| `letter-circles` | `letters[]` | max 1-2 char/item |
| `word-card` | `word`, `translation` | — |
| `sentence-flow` | `parts[]` | — |
| `image-label` | `image`, `labels[]` | — |
| `comparison-table` | `rows[]` | — |

### TopicInteractive típusok (19 db)

Egyszerű (K1-K3): `block-drag`, `number-line`, `word-order`, `gap-fill`, `match-pairs`, `highlight-text`, `tap-count`

Közepes (K3-K5): `drag-to-bucket`, `sentence-build`, `label-diagram`, `balance-scale`, `ratio-slider`

Haladó (K4+, physics): `physics-magnet`, `physics-slingshot`, `physics-stacker`, `physics-bucket`

**Physics típusok kötelező mezői (K4+, leggyakoribb hibaforrás):**
```ts
// physics-slingshot — NEM items[], hanem:
{ type: "physics-slingshot", question: "q_key", targets: [{ id: "t1", text: "label_key", isCorrect: true }, ...] }

// physics-magnet — NEM items[], hanem:
{ type: "physics-magnet", pairs: [{ left: "left_key", right: "right_key" }, ...] }

// physics-stacker — NEM items[], hanem:
{ type: "physics-stacker", words: ["w1", "w2", "w3"], correctOrder: ["w2", "w1", "w3"] }
```

### Mixed quiz mode

`quiz: { generate: "generator_key" }` → `DynamicExplorer` mountkor hívja `GENERATORS[key]()` a `lib/deutschGenerators.ts`-ből.

`quiz: { question: "q_key", choices: ["c1","c2","c3","c4"], answer: "c1" }` → manual label keys, mindig működik.

### KNExplorer router minta (K2-K8 azonos)

```tsx
const ISLAND_CONFIG: Record<string, IslandConfig> = {
  i1: { pool: NOMEN_POOL, labels: NOMEN_LABELS, title: "explorer_title", icon: "🏷️", mix: { easy: 2, medium: 2, hard: 1 } },
  // ... i2-i9
};

export default function K2Explorer({ island, grade, onDone, color, lang }) {
  const cfg = ISLAND_CONFIG[island.id];
  if (cfg) return <DynamicExplorer pool={cfg.pool} labels={cfg.labels} ... grade={2} />;
  return <DeutschExplore island={island} grade={grade} onDone={onDone} />;  // fallback
}
```

### Page.tsx bekötés minta

```tsx
// Import:
const K5Explorer = dynamic(() => import("@/app/astrodeutsch/games/k5/K5Explorer"), { ssr: false });

// Render (deutsch-explore screen):
<K5Explorer island={activeIsland} grade={5} color={bgColor} lang={lang} onDone={handleMissionDone} />
```

### Leggyakoribb hibák a pool fájlokban (barát által)

1. **`hint2` hiánya** — minden topichoz kötelező, nem csak hint1
2. **`border` hiánya `two-groups`-ban** — bg szín alapján add hozzá
3. **`color` hiánya `text-bubbles` items-ben** — adj `"#1e293b"` alapértelmezést
4. **`articleColor` hiánya `article-noun`-ban** — der=#1D4ED8, die=#B91C1C, das=#065F46
5. **Duplikált `import type { PoolTopicDef }`** — csak egyszer, a fájl elején
6. **Physics rossz mező nevek** — lásd fenti physics típusok táblázat

### Quiz ismétlés elkerülő rendszer (2026-03-28)

Három rétegű védelem a kérdés ismétlések ellen:

**1. Generator-key dedup** (`lib/explorerUtils.ts` — `deduplicateGenerators`):
- Ugyanaz a `generate:` kulcs nem kerülhet 2× ugyanabba a sessionbe
- Ha mégis bekerülne, lecseréli egy másik pool topikra

**2. Question-text dedup** (`components/DynamicExplorer.tsx` — `useMemo` blokk):
- `resolveQuiz()` után szöveg szinten is ellenőriz
- Ha ugyanaz a kérdés szöveg kétszer szerepelne → kicseréli pool-ból

**3. Session history** (`lib/explorerUtils.ts` — `getRandomTopicsWithHistory`):
- `localStorage` kulcs: `plizio_seen_<explorerId>` — utolsó ~10 látott topik title-je (max 2 session)
- Következő sessionben a "friss" topikokból választ először
- Fallback: ha nincs elég friss → teljes pool-ból választ
- `DynamicExplorer` ezt hívja `getRandomTopics` helyett

**Eredmény:** `belső ismétlés: 0` minden poolban, cross-run ismétlés ~2-3 session védelmi ablakkal.

**⚠️ Szabály:** Ha új tantárgyhoz (pl. AstroEnglish, AstroMagyar) is pool-alapú explorert hozol létre, ugyanez a rendszer automatikusan működik — `DynamicExplorer`-t kell használni és az `explorerId` prop egyedi legyen pool-onként.

### Új grade hozzáadása — checklist

```
□ lib/explorerPools/deutschKN.ts kitöltve (barát)
□ npx tsc --noEmit → hibák javítása (fenti lista alapján)
□ app/astrodeutsch/games/kN/KNExplorer.tsx létrehozva (K4/K5 minta)
□ app/astrodeutsch/N/page.tsx bekötve (K5 minta)
□ git commit + push (no build)
```

---

## EXPLORERENGINE — Tanító-kvíz motor

> Lokáció: `app/astro-biologie/games/ExplorerEngine.tsx` (477 sor)
> Minden tantárgy explorer fájljai ezt használják (biológia, sachkunde, deutsch, english, magyar).

### ExplorerDef típus

```ts
export interface ExplorerDef {
  labels: Record<string, Record<string, string>>; // labels[langCode][labelKey] = szöveg
  rounds: RoundDef[];  // mindig 5 kör
}

export interface RoundDef {
  type: "info" | "mcq" | "order";
  infoTitle: string;           // label key — tanítási cím
  infoText: string;            // label key — tanítási szöveg
  svg: (lang: string) => React.ReactNode;  // SVG illusztráció
  questions?: MCQQuestion[];   // MCQ kérdés pool (1+ kérdés)
  orderSequence?: readonly string[];  // tap-in-order sorrend (label key-ek)
  hintKey?: string;            // opcionális hint (label key)
  bulletKeys?: string[];       // kulcs tények listaként (label key-ek)
}

interface MCQQuestion {
  question: string;    // label key
  choices: string[];   // label key-ek (4 választás)
  answer: string;      // label key (helyes válasz)
}
```

### Props

```ts
interface Props {
  def: ExplorerDef;
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}
```

### 5-körös struktúra (fix!)

| Kör | Típus | Cél |
|-----|-------|-----|
| R1-R4 | `"info"` → majd `"mcq"` | Tanítás (INFO fázis: szöveg + SVG + bullet pontok), aztán 1 kvíz kérdés |
| R5 | `"mcq"` | Ismétlő kvíz — 2-3 kérdés az előző körök anyagából |

**Fázisok:** `"info"` (tanítási tartalom + "Got it! →" gomb) → `"question"` (MCQ vagy order)
**Auto-advance:** 1500ms (helyes) | 2500ms (helytelen)

### Pontszámítás
- Minden MCQ kérdés: `totalRef += 1`, helyes válasz: `scoreRef += 1`
- Order sorrend: `totalRef += 1` ha befejezi, `scoreRef += 1` ha helyes

### TTS támogatás
Beépített `speak()` — nyelv-alapú hangválasztás:
- EN: en-US, DE: de-DE, HU: hu-HU (0.82 rate, 1.1 pitch), RO: ro-RO

### Explorer fájl minta (checklist)

```
□ LABELS — 4 nyelv (en/de/hu/ro), minden kör címe + szövege + bullet + kérdés + választások
□ SVG_R1..SVG_R5 — 5 SVG illusztráció függvény, (lang: string) => ReactNode
□ R1_POOL..R5_POOL — MCQ kérdés pool-ok (R1-R4: 1 kérdés, R5: 2-3 kérdés)
□ EXPLORER_DEF — ExplorerDef objektum, 5 kör
□ Export default wrapper: ({ color, lang, onDone }) => <ExplorerEngine def={DEF} ... />
```

**SVG szabályok (ismétlés):**
- NINCS `<text>` elem az SVG-ben — minden szöveg a LABELS objektumból jön
- `viewBox="0 0 240 160"` standard méret
- `(lang: string)` param az SVG függvényen

---

## ÖSSZES ASTRO JÁTÉK — Teljes leltár

### Áttekintés

| Játék | Route | Osztályok | Lib prefix | localStorage prefix | Osztály jelölés |
|-------|-------|-----------|------------|--------------------|-----------------|
| AstroMath | `/astromath` | 1-8 | `lib/astromath*.ts` | `astromath_g{N}_v{V}` | G (Grade) |
| AstroDeutsch | `/astrodeutsch` | 1-8 | `lib/astroDeutsch*.ts` | `astrodeutsch_k{N}_v1` | K (Klasse) |
| AstroEnglish | `/astroenglish` | 1-8 | `lib/astroEnglish*.ts` | `astroenglish_k{N}_v1` | K (Klasse) |
| AstroMagyar | `/astromagyar` | 1-8 | `lib/astroMagyar*.ts` | `astromagyar_o{N}_v1` | O (Osztály) |
| AstroBiologie | `/astro-biologie` | 5-8 | `lib/astroBiologie*.ts` | `astro-biologie_k{N}_v1` | K (Klasse) |
| AstroSachkunde | `/astro-sachkunde` | 1-4 | `lib/astroSachkunde*.ts` | `astrosachkunde_g{N}_v1` | G (Grade) |

### Közös Progress interfész (minden astro játéknál azonos struktúra)

```ts
interface Progress {
  completedMissions: string[];          // "i1_m1", "i2_m3", ...
  completedIslands: string[];           // "i1", "i2", ...
  completedTests: string[];             // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3 (legjobb eredmény)
}
```

### localStorage kulcsok (teljes lista)

| Kulcs | Játék |
|-------|-------|
| `astromath_g1_v2` | AstroMath G1 |
| `astromath_g2_v1` .. `astromath_g8_v1` | AstroMath G2-G8 |
| `astrodeutsch_k1_v1` .. `astrodeutsch_k8_v1` | AstroDeutsch K1-K8 |
| `astroenglish_k1_v1` .. `astroenglish_k8_v1` | AstroEnglish K1-K8 |
| `astromagyar_o1_v1` .. `astromagyar_o8_v1` | AstroMagyar O1-O8 |
| `astro-biologie_k5_v1` .. `astro-biologie_k8_v1` | AstroBiologie K5-K8 |
| `astrosachkunde_g1_v1` .. `astrosachkunde_g4_v1` | AstroSachkunde G1-G4 |

### Lib fájlok — load/save függvény nevek

| Játék | Load | Save | Prefix |
|-------|------|------|--------|
| AstroMath | `loadG{N}Progress()` | `saveG{N}Progress()` | G1-G8 |
| AstroDeutsch | `loadK{N}Progress()` | `saveK{N}Progress()` | K1-K8 |
| AstroEnglish | `loadK{N}Progress()` | `saveK{N}Progress()` | K1-K8 |
| AstroMagyar | `loadO{N}Progress()` | `saveO{N}Progress()` | O1-O8 |
| AstroBiologie | `loadBioK{N}Progress()` | `saveBioK{N}Progress()` | K5-K8 |
| AstroSachkunde | `loadSKG{N}Progress()` | `saveSKG{N}Progress()` | G1-G4 |

### Bolygók játékonként

**AstroMath:** Terra → Aquaria → Ignos → Aureon → Violetis → Saturnia → Verdis → Cosmara
**AstroDeutsch:** Buchstabia → Wortania → Grammatos → Kasusheim → Satzburg → Stilonia → Rhetorika → Analytica
**AstroEnglish:** Phonicia → Lexica → Syntaxia → Rhetorica → Literaria → Analytica → Dialecta → Symbolica
**AstroMagyar:** Betűria → Szókinesia → Mondatia → Aureon → Nyelvtania → Irodalmia → Stilisztia → Költészet

### Játéktípusok tantárgyanként

**Minden astro játék közös engine-ei:**
- `orbit-quiz` (QuizEngine wrapper)
- `black-hole` (QuizEngine, columns: 1)
- `star-match` (MatchEngine wrapper)
- `gravity-sort` (SortEngine wrapper)

**AstroMath extra:**
- `speed-round`, `number-duel`, `fraction-visual`, `equation-drill`, `missing-number`, `chain-calc`, `true-false-blitz`
- 30+ explorer típus (counting, addsub, algebra, geometry, probability stb.)

**AstroDeutsch extra:**
- `word-blitz`, `spell-race`, `sentence-scramble`, `gap-fill`, `category-rush`
- 30+ explorer típus (letter, syllable, article, noun, verb, kasus, clause stb.)

**AstroEnglish extra:**
- Hasonló a Deutsch-hoz, angol nyelvre adaptálva (phonics, vocab, grammar, literature stb.)

**AstroMagyar extra:**
- Hasonló struktúra, magyar nyelvre (betű, szó, mondat, nyelvtan, irodalom stb.)

**AstroBiologie:** Főleg explorer-alapú (FishExplorer, DNAExplorer, CellExplorer stb.) + orbit-quiz/star-match

**AstroSachkunde:** Egyszerű MCQ + explorer-alapú (K1-K4 szintű természetismeret)

### Sziget struktúra (minden astro játékban azonos)

- **9 sziget** grade-enként, minden szigetben **3 misszió**
- **3 checkpoint** (3 szigetenként): test1 (i1-i3), test2 (i4-i6), test3 (i7-i9)
- Misszió csillagok: 1-3 ⭐ az eredmény alapján (≥90% = 3⭐, ≥60% = 2⭐, egyébként 1⭐)
- Sziget max: 9⭐ (3 misszió × 3 csillag)

### Astro oldal page.tsx séma (minden grade oldal azonos minta)

```
Screen types: "map" | "island-transition" | "island-intro" | "island-complete-anim"
  | "mission-select" | "playing" | "checkpoint" | "reward" | "mission-done"

State: activeIsland, activeMission, activeGame, questions, progress, missionScore

Flow: map → island-transition (RocketTransition 1.3s) → island-intro → mission-select
  → playing (game engine) → mission-done → [island-complete-anim (13s) ha új sziget] → reward → map
```

### ⚠️ Astro fejlesztési szabályok

1. **Copy+rename minta** — Új grade oldal SOHA nem íródik nulláról, mindig másolat (ld. "ÚJ ASTRO JÁTÉK LÉTREHOZÁSA" szekció fent)
2. **Explorer fájlok ExplorerEngine-nel** — SOHA ne írj custom UI-t explorerhez, mindig ExplorerEngine wrapper
3. **SVG-ben nincs szöveg** — minden felirat a LABELS objektumból, 4 nyelven
4. **Explorer kártyák: `calculateRarity(score, total, 0, false)`** — soha nincs gold explorer-ből
5. **Checkpoint: 15 kérdés, 3⭐ csak 10+ helyes válasznál**
6. **IslandCompleteAnimation + RocketTransition** — minden grade oldalon integrálva kell legyen
