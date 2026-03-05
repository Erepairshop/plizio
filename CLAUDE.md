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

## PLIZIO ROOM — Izometrikus szoba rendszer

> Állapot: fejlesztés alatt (2026-03-05)
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
app/room/page.tsx              ← Szoba nézet (fő UI)
app/room/layout.tsx            ← SEO metadata
components/room/               ← Szoba komponensek mappa
  IsoRoom.tsx                  ← Szoba shell (padló + falak + ablak)
  IsoGrid.tsx                  ← Izometrikus rács logika + drag-drop
  FurnitureRegistry.tsx        ← Bútor definíciók + SVG registry
  FurnitureSVG.tsx             ← Egyedi bútor SVG komponensek (PÉLDÁK)
  RoomRenderer.tsx             ← Teljes szoba renderelő (shell + bútorok + fények)
  DayNightCycle.tsx            ← Ablak fény ciklus (valós idő)
lib/room.ts                    ← Szoba adatkezelés (localStorage)
```

### Izometrikus koordináta rendszer

```
SVG viewBox: 0 0 400 300

Izometrikus tengelyek:
  X tengely: jobbra-le (→↘)   dx = TILE_W/2,  dy = TILE_H/2
  Y tengely: balra-le  (←↘)   dx = -TILE_W/2, dy = TILE_H/2

TILE_W = 48  (rombusz szélesség)
TILE_H = 24  (rombusz magasság)

Grid → SVG pixel konverzió:
  screenX = originX + (gridX - gridY) * TILE_W/2
  screenY = originY + (gridX + gridY) * TILE_H/2

originX = viewBox_width / 2   (200)
originY = 80                   (padló teteje)
```

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
3. **Árnyék** minden bútor alatt: `<ellipse fill="rgba(0,0,0,0.15)">`
4. **Szín paletta**: meleg, pasztell — kerüld a neon/élénk színeket (a szoba cozy legyen!)
5. **Kontúr**: nincs fekete outline, inkább sötétebb árnyalat a széleknél
6. **Highlight**: felső lapon halvány fehér gradient (fény illúzió)

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
1. Rajzold meg SVG-ben a `components/room/FurnitureSVG.tsx`-be
2. Kövesd az izometrikus perspektívát (felső lap + bal oldal + jobb oldal)
3. Add hozzá a `FURNITURE_DEFS` tömbbe a `FurnitureRegistry.tsx`-ben
4. Adj meg: `id, name, icon (emoji fallback), price, gridW, gridH, room (melyik szobába illik)`
5. Opcionális: animáció (idle / interaction)
6. Tesztelés: nézd meg a szobában hogy jól illeszkedik-e a rácsra

**SVG méretezés:**
- Minden bútor SVG `viewBox="0 0 48 48"` alapon készül (1×1 grid)
- 2×1 bútor: `viewBox="0 0 96 48"`
- 2×2 bútor: `viewBox="0 0 96 72"`
- A RoomRenderer skálázza a grid pozícióra

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
