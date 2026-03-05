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

**⚠️ KRITIKUS:** `fixed=false` avatar konténerén SOHA ne használj `initial={{ scale: 0 }}` vagy `initial={{ width: 0 }}`!
→ A Three.js canvas 0px mérettel inicializálódik és üres marad.
→ Mindig `initial={{ opacity: 0 }} animate={{ opacity: 1 }}` animációt használj!

**Canvas beállítások (ne változtasd meg):**
```ts
camera={{ position: [0, 0.15, 2.6], fov: 44 }}
gl={{ antialias: false, powerPreference: 'low-power', alpha: true, stencil: false }}
// Avatar group: position={[0, -0.08, 0]} scale={0.88}
```

**Mood értékek:** `'idle' | 'focused' | 'happy' | 'disappointed' | 'victory' | 'surprised' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin'`
- `wave`/`dance`/`spin` = 1.4s reakció animáció (érintésre triggerelhető)
- többi = 0.6s

**Avatar kar anatómia:**
- Felső kar (`leftArmRef/rightArmRef`): `position={[±0.33, 0.16, 0]}`
- Forearm csoport (`leftForearmRef/rightForearmRef`): könyök pivot `position={[0, -0.22, 0]}` a karon belül
- Kéz gömb: `position={[0, -0.18, 0]}` a forearm csoporton belül
- Animációnál az előkarnál `rotation.z` → könyökhajlítás hatás

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

**Nyak mesh:** `position={[0, 0.34, 0]}`, `CylinderGeometry args={[0.1, 0.115, 0.2, 8]}`

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
> Pro Max kapacitás: ~2-3 deliverable/nap | ~15-18 item/hét
> Komplex játék (10 szintes expedíció): ~2-3 óra | Egyszerű játék: ~1-1.5 óra | Lib/fix: ~30 perc

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

#### Nap 2 (márc. 6) — Gazdaság + fix [~3 óra]
- [ ] **XS** Csillag-gazdaság: árak felfelé tolása (skins max 40⭐, cape 35⭐, trail 25⭐ stb.) → teljes shop ~1100-1200⭐
- [ ] **S** Napi bejelentkezési jutalom rendszer (`lib/dailyReward.ts` + UI popup)
- [ ] **XS** Streak milestone-ok: napi streak 7/14/30 nap jutalmak
- [ ] **XS** RewardReveal flow fix: reflexrush + numberrush (inline kártya doboz eltávolítása)

#### Nap 3 (márc. 7) — Új játékok I. [~3 óra]
- [ ] **S** Light Out (`/lightout`) — kapcsolós puzzle, category: logic
- [ ] **S** Number Merge 2048 (`/numbermerge`) — 2048 klón plizio skinnel, category: brain

#### Nap 4 (márc. 8) — Új játékok II. [~3 óra]
- [ ] **M** Pattern Forge (`/patternforge`) — 2D rács minta-felismerés, expedíció (10 szint), category: logic
- [ ] **XS** Shop bővítés: +10-15 új ruha/accessory item

#### Nap 5 (márc. 9) — Új játékok III. + javítások [~3.5 óra]
- [ ] **M** Nonogram / Picross (`/nonogram`) — rácsszínező puzzle, category: logic
- [ ] **XS** RewardReveal flow fix: sequencerush, wordhunt, numberpath, minisudoku

#### Nap 6 (márc. 10) — World map alapok [~4 óra]
- [ ] **L** Plizio World térkép UI — interaktív zónák, locked/unlocked state, zóna progress
- [ ] **XS** localStorage kulcsok: `plizio_world_progress`, `plizio_world_last_played`

#### Nap 7 (márc. 11) — SEO + Buffer [~2.5 óra]
- [ ] **S** SEO: deutsch-test bővítés (ha nincs meg minden klasse oldal)
- [ ] **XS** Sitemap frissítés (új játékok)
- [ ] **XS** Blog post (1db, az egyik új játékhoz)
- [ ] Buffer: hibajavítások, polish

---

### BACKLOG (következő sprintek)

#### Alacsony prioritás / Következő sprint
- [ ] **M** Bridges puzzle (`/bridges`) — sziget-híd logika
- [ ] **M** Maze Rush (`/mazerush`) — labirintus generátor időre
- [ ] **L** Daily login streak UI (vizuális naptár, streak counter a főoldalon)
- [ ] **L** Plizio World napi kapu rendszer (zónánként 1 szint/nap)
- [ ] **S** Dashboard bővítés (új statisztikák: napi streak, world progress)

#### Nagy projektek (több sprint)
- [ ] **XL** Plizio World teljes rendszer (térkép + expedíciók + napi kapu + jutalmak)
- [ ] **XL** MiniSudoku 6×6 + Daily Sudoku (`/daily-sudoku`)
- [ ] **L** Kakuro (`/kakuro`) — magas komplexitás

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
