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
// calculateRarity(score, total, streak): pct===100 && streak>=3 → legendary; effectivePct>=95 → gold; >=70 → silver; else bronze
// streakBonus = min(streak*2, 15); effectivePct = pct + streakBonus
```

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

**Canvas beállítások (ne változtasd meg):**
```ts
camera={{ position: [0, 0.15, 2.6], fov: 44 }}
gl={{ antialias: false, powerPreference: 'low-power', alpha: true, stencil: false }}
// Avatar group: position={[0, -0.08, 0]} scale={0.88}
```

**Mood értékek:** `'idle' | 'focused' | 'happy' | 'disappointed' | 'victory' | 'surprised' | 'confused' | 'laughing'`

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

### Egyéb lib fájlok (kevésbé érintett területek)

| Fájl | Leírás |
|------|--------|
| `auth.ts` | Autentikáció |
| `username.ts` | Felhasználónév mentés |
| `sync.ts` | Supabase szinkronizáció |
| `mobileOptimization.ts` | Mobil-specifikus logika |
| `mathTestGenerator.ts`, `mathQuestionUtils.ts`, `mathTranslations.ts` | Matekteszt generálás |
| `pdfExport.ts`, `generateTestPdf.ts` | PDF export |
| `citydrive` autók | localStorage: `citydrive_owned_cars`, `citydrive_active_car` |

### Token-spórolási szabályok (Claude számára)
- Ha a feladat CLAUDE.md-ben dokumentált fájlt érint → NE olvasd az egész fájlt, csak a szükséges részt (Read offset+limit)
- Ha a state/type struktúra ismert fentről → NE olvasd újra a type definíciókat
- Ha csak egy függvényt kell módosítani → Grep a függvénynévre, csak azt olvasd be
- `plizio-cards-changed` custom event → UI refresh kártyaszámoknál (collection + header)
- `visibilitychange` event → collection oldal frissül tab-visszatérésnél

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
rm -rf _next && cp -r out/* . && rm -rf out
```

Szabályok:
- A branch neve mindig az aktuális fejlesztési branch legyen
- MINDIG ezt a 2 parancsot küldd, semmi mást
- NE használj `cd`-t - a user már a `public_html`-ben van
- Minden push után küldd el mindkét parancsot

## Out mappa szinkron (public_html deploy)

**FONTOS:** A felhasználó szerverén a fájlok a `public_html/` mappából futnak.

Minden feladat végén:
1. Futtasd le a `npx next build` parancsot (`npm run build` nem működik)
2. Az `out/` mappa automatikusan generálódik
3. Commitold és pushold az `out/` mappát is

Szabályok:
- Minden kód módosítás után MINDIG buildelj (`npm run build`)
- Az `out/` mappát MINDIG commitold és pushold
- A deploy parancsban MINDIG töröld a régi `_next/` mappát először (`rm -rf ~/public_html/_next`)
  - Ez azért fontos, mert a JS chunk fájlnevek minden buildnél változnak
  - Ha nem törlöd, régi és új chunk fájlok keverednek, és elromlik az oldal
