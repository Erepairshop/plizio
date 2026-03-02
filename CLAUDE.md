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

### Fő komponensek (`components/`)
| Fájl | Leírás |
|------|--------|
| `AvatarCompanion.tsx` | Avatar rajzoló (gender, skin, clothing, accessories) |
| `LanguageProvider.tsx` | `useLang()` hook → `{ lang }` |
| `MilestonePopup.tsx` | Mérföldkő popup (játék után jelenik meg) |
| `RewardReveal.tsx` | Jutalom animáció |
| `GameCard.tsx` | Kártya megjelenítő komponens |

### Kodex-specifikus adatok (`lib/kodex-words.ts`)
- **10 szint**: `LEVEL_CONFIGS[]` — típusok: `"word"`, `"sentence"`, `"secretcode"` (10. szint)
- **Titkos kódok**: `SECRET_CODES_LIST` — 5 kód per nyelv (hu/de/en/ro), `getSecretCode(lang, index)`
- **Expedíció state** (`app/kodex/page.tsx`): localStorage kulcs `kodex_expedition_v2`
  - `{ currentLevel, completedLevels, collectedLetters, earnedBadges, secretCodeIndex }`
- **Badge-ek**: `"vocals"`, `"shield"`, `"explorer"`, `"tracker"`, `"key"`

### Kártya csererendszer (`app/collection/page.tsx`)
- Mikropont értékek: legendary=60, gold=6, silver=3, bronze=2
- 60 mikropont = 1 ⭐ (csillag)
- `handleExchange()` mindig friss localStorage-t olvas (nem React state-t)
- `plizio-cards-changed` esemény → collection automatikusan frissül

### Avatar adatfolyam
Minden játékoldal betölti:
```
getGender() → gender
getSkinDef(getActiveSkin()) → activeSkin
getFaceDef(getActiveFace()) → activeFace
getActive("top/bottom/shoe/cape/glasses/gloves") → clothing
getActiveHat() / getActiveTrail() → accessories
```
Ezeket `<AvatarCompanion {...avatarProps} />` kapja meg.

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
1. Futtasd le a `npm run build` parancsot
2. Az `out/` mappa automatikusan generálódik
3. Commitold és pushold az `out/` mappát is

Szabályok:
- Minden kód módosítás után MINDIG buildelj (`npm run build`)
- Az `out/` mappát MINDIG commitold és pushold
- A deploy parancsban MINDIG töröld a régi `_next/` mappát először (`rm -rf ~/public_html/_next`)
  - Ez azért fontos, mert a JS chunk fájlnevek minden buildnél változnak
  - Ha nem törlöd, régi és új chunk fájlok keverednek, és elromlik az oldal
