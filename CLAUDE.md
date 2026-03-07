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

### Kulcs TypeScript típusok

**`lib/cards.ts`**
```ts
type CardRarity = "bronze" | "silver" | "gold" | "legendary"
interface GameCard { id: string; game: string; theme?: string; rarity: CardRarity; score: number; total: number; date: string }
// calculateRarity(score, total, streak, allowGold=true):
//   pct===100 && streak>=3 → legendary
//   allowGold && effectivePct>=95 → gold
//   effectivePct>=70 → silver; else bronze
//   streakBonus = min(streak*2, 15); effectivePct = pct + streakBonus
```

**Kártya ritkaság szabályok játékonként:**
| Játék | Gold lehetséges? | Legendary lehetséges? |
|-------|-----------------|----------------------|
| Reflex Rush | ✅ level 5-től | ✅ level 10 win |
| Number Rush | ✅ level 4-től | ✅ level 10 win |
| Kodex | ❌ `calculateRarity(..., false)` | ✅ level 10 win |
| Sky Climb | ❌ `calculateRarity(..., false)` | ❌ |
| Quick Pick | ❌ `calculateRarity(..., false)` | ❌ |
| Math Test | ❌ `calculateRarity(..., false)` | ❌ |
| Milliomos | ❌ `calculateRarity(..., false)` | ❌ |
| Word Scramble | ❌ `calculateRarity(..., false)` | ❌ |
| Spot Diff | ❌ `calculateRarity(..., false)` | ❌ |
| Memory Flash | ❌ `calculateRarity(..., false)` | ❌ |
| Race Track | ❌ `calculateRarity(..., false)` | ❌ |
| City Drive | ❌ `calculateRarity(..., false)` | ❌ |
| Daily | ❌ `calculateRarity(..., false)` | ❌ |
| Deutsch Test | ❌ `calculateRarity(..., false)` | ❌ |

**SZABÁLY:** Level-alapú játékok (Reflex/Number Rush) saját `calcRarity()` függvényt használnak (time-based).
Összes többi játék: `calculateRarity(score, total, streak, false)` — **sosem ad gold-ot**.

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

**Szekció-generátorok táblázat (Grade 2-4):**
- Grade 2 `bonus`: `[G2.sequence, G2.missing100]`
- Grade 3 `geometry`: `[G3.units]` → US esetén imperial, egyéb esetén metrikus
- Grade 4 `geometrie`: `[G4.units]` → US esetén imperial, egyéb esetén km/tonna/liter

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
5. **calculateRarity 4. param** — non-level játékoknál mindig `false`-t adj át
6. **`downloadFromSupabase` (sync.ts)** — NE írja felül a helyi active_skin-t ha már van! Csak ha `localStorage.getItem("plizio_active_skin") === null` (fresh browser). Egyébként a shop-ban aktivált skin elvész navigáció után.
7. **`special_cards` sync — NE használj `Math.max` kölcsönözhető egyenlegnél!**
   - `Math.max(local, server)` csak monoton növekvő értéknél helyes (pl. totalGames). Egyenlegnél (ami csökkenhet vásárlásnál) **örökre visszaállítja** a régi értéket bármely eszközön ami a régi értéket tárolta lokálisan.
   - **Helyes megközelítés: dirty flag + szerver értéke az igazság**
     - `addSpecialCards()` és `spendSpecialCards()` mindig beállítja: `localStorage.setItem("plizio_stars_dirty", "1")`
     - `downloadFromSupabase()`: ha `dirty=false` → szerver értékét veszi direktben (nem Math.max!); ha `dirty=true` → megtartja a lokálist
     - `uploadToSupabase()`: sikeres feltöltés után törli: `localStorage.removeItem("plizio_stars_dirty")`
   - **Általános szabály:** Ha egy érték CSÖKKENHET (vásárlás, elköltés), `Math.max` helyett dirty flag kell. Ha csak nőhet (statisztikák), `Math.max` helyes.
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
  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/50 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold"
>✕</button>
```

---

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
  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/50 hover:bg-white/20 hover:text-white transition-colors"
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
- A deploy parancsban MINDIG töröld a régi `_next/` és `next_static/` mappát először, majd nevezd át: `rm -rf _next next_static && cp -r out/* . && mv _next next_static && rm -rf out`
  - Ez azért fontos, mert a JS chunk fájlnevek minden buildnél változnak
  - Ha nem törlöd, régi és új chunk fájlok keverednek, és elromlik az oldal

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
