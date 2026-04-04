# CLAUDE.md - Projekt utasítások

## Repo struktúra

- **Forráskód**: `app/`, `components/`, `lib/`, `data/`, `public/`
- **Build output**: `out/` mappa (ez megy a szerverre `public_html/`-be)
- A gyökérben NEM lehetnek build output fájlok (index.html, _next/, stb.)
- **Részletes dokumentáció más játékokhoz:** `CLAUDE-ARCHIVE.md` (NE olvasd be automatikusan!)

## Alapszabályok

- `npm run build` **NEM MŰKÖDIK**, mindig `npx next build`
- `output: "export"` → statikus export, nincs szerver
- Language: `"hu" | "de" | "en" | "ro"`, `useLang()` hook
- **NE használj `opengraph-image.tsx`-et** static exportnál
- **Avatar + scale:0 animáció TILOS** — Three.js canvas törik
- **RelatedGames komponens** — EL VAN TÁVOLÍTVA, NE ADD VISSZA
- **Szöveg szín minimum:** fő szöveg `text-white/80`, másodlagos `text-white/60`, TILOS `text-white/20-40`

## SSH Pull + Deploy parancs minden feladat végén

A user a `~/public_html` mappában van SSH-n.

**1. parancs - Git pull (out mappa lehúzása):**
```bash
git fetch origin <branch-neve> && git checkout FETCH_HEAD -- out/
```

**2. parancs - Deploy (out tartalmának kimásolása):**
```bash
rm -rf _next next_static && cp -r out/* . && mv _next next_static && rm -rf out
```

Szabályok:
- A branch neve mindig az aktuális fejlesztési branch legyen
- MINDIG ezt a 2 parancsot küldd, semmi mást
- Minden push után küldd el mindkét parancsot

## Out mappa szinkron (public_html deploy)

Minden feladat végén:
1. `npx next build` (`npm run build` nem működik)
2. Az `out/` mappa automatikusan generálódik
3. Commitold és pushold az `out/` mappát is

- **NE használj `git add -f out/`** — simán `git add out/` elegendő
- Deploy parancsban töröld a régi `_next/` és `next_static/` mappát először
- Az `/out/` NEM lehet a `.gitignore`-ban!

---

## GRAVITAS — Űrállomás menedzsment játék

> Route: `/gravitas` | Állapot: **aktív fejlesztés** (2026-04)
> Koncepció: valós idejű űrállomás-kezelés, modulok, fenyegetések, avatar, warroom

### Fájlstruktúra és sorhosszak

| Fájl | Sorok | Leírás |
|------|-------|--------|
| `app/gravitas/page.tsx` | ~1770 | Fő UI: state, HUD, header, game view, minibuttons, bottom bar |
| `components/gravitas/GravitasOverlays.tsx` | ~377 | Panel overlay-ek (modules/marks/upgrades/journal) + resource help + command deck |
| `components/gravitas/GravitasUiParts.tsx` | ~400 | Közös UI komponensek (HUDChip, MapMiniButton, MiniActionButton, MarkBox stb.) |
| `components/gravitas/GravitasInteriors.tsx` | ~380 | Modul belső nézetek (reactor, sensor, core, logistics) + ModuleArtOverlay |
| `components/gravitas/ModuleInteriorPanel.tsx` | ~225 | Egyedi modul panel (level, integrity, upgrade) — beágyazva minden interior view-ba |
| `components/gravitas/ModuleUpgradePanel.tsx` | ~207 | Összesített modul fejlesztés panel |
| `components/gravitas/GalaxyInteriorView.tsx` | ~700 | Galaxis térkép (meteorit bányászat) |
| `components/gravitas/GravitasMaterialStrip.tsx` | ~80 | HUD anyag csík (6 meteor anyag) |
| `components/gravitas/warroom/` | mappa | WarRoomPanel.tsx, WarRoomUnitCard.tsx |
| `components/gravitas/GravitasShop.tsx` | ~230 | Bolt (star shop) |
| `components/gravitas/GravitasImprint.tsx` | ~220 | Avatar imprint hold UI |
| `components/gravitas/AwakeningCeremony.tsx` | ~140 | Avatar ébredési ceremónia |
| `lib/gravitas/economy.ts` | ~351 | **KÖZPONTI** ár/költség konfig — MINDEN ár itt van |
| `lib/gravitas/sim/types.ts` | ~295 | State típusok, command union |
| `lib/gravitas/sim/registry.ts` | ~143 | Modul registry (single source of truth) |
| `lib/gravitas/sim/commands.ts` | ~979 | Parancs kezelés (applyStarholdCommand) |
| `lib/gravitas/sim/tick.ts` | ~785 | Tick engine (advanceStarholdTick) |
| `lib/gravitas/sim/persistence.ts` | ~240 | Mentés/betöltés, migráció |
| `lib/gravitas/sim/createInitialState.ts` | ~214 | Kezdő state (demo + continuation) |
| `lib/gravitas/sim/events.ts` | ~1400 | Eseményrendszer |
| `lib/gravitas/sim/threats.ts` | ~400 | Fenyegetés rendszer |
| `lib/gravitas/sim/content.ts` | ~2300 | Összes szöveg (4 nyelv) |
| `lib/gravitas/sim/warroom/types.ts` | ~42 | Warroom típusok |
| `lib/gravitas/sim/warroom/units.ts` | | Egység definíciók |
| `lib/gravitas/sim/warroom/production.ts` | | Gyártás logika |

### Kulcs típusok (types.ts)

```ts
StarholdModuleId = "reactor" | "logistics" | "core" | "sensor"  // warroom NEM!
UpgradableModuleId = "reactor" | "logistics" | "core" | "sensor" | "warroom"  // economy.ts-ben
StarholdPhase = "boot" | "activation" | "awakened"
StarholdChapterId = "demo" | "continuation"
```

**StarholdState kulcs mezők:**
- `moduleLevels: { reactor, logistics, core, sensor, warroom: number }` — modul szintek (1-25)
- `upgradeQueue: ModuleUpgradeSlot[]` — aktív fejlesztések (valós idő!)
- `upgradeSlotCount: number` — párhuzamos slotok (default 1, max 5)
- `modules: Record<StarholdModuleId, StarholdModuleState>` — 4 modul state
- `warRoom: WarRoomState` — **külön** (NEM modules-ben!)
- `resources: { power, materials, stability, activation }`
- `marks: { reactorScar, shellStrain, supplyStress, voidEcho }`
- `threat: StarholdThreatState` — countdown, type, intensity, fortified/dampened/intercepted
- `progression: { stars, completedMilestones, unclaimedMilestones, unlockedItems }`

**ModuleUpgradeSlot:** `{ moduleId, targetLevel, startedAt: number, completesAt: number }` — Date.now() alapú!

**StarholdCommand union (28 típus):** SCAVENGE, STABILIZE_REACTOR, REPAIR_MODULE, REROUTE_TO_CORE, CHANNEL_TO_CORE, DISTORTION_SWEEP, PURGE_ANOMALY, OVERCLOCK_REACTOR, OPTIMIZE_LOGISTICS, DEEP_SCAN, FORTIFY_SHELL, DAMPEN_SIGNALS, INTERCEPT_THREAT, PREDICT_THREAT, EMERGENCY_VENT, TUNE_SHIELDS, EMERGENCY_DISCHARGE, RAPID_FABRICATION, AVATAR_PULSE, CLAIM_MILESTONE, BUY_ITEM, ACKNOWLEDGE_PHASE_SHIFT, RESOLVE_EVENT, CHANNEL_AVATAR_IMPRINT, RESET_AVATAR_IMPRINT, TRAIN_UNIT, CANCEL_TRAINING, UPGRADE_MODULE

### page.tsx State és UI struktúra

**State változók (line ~106-122):**
```ts
const [state, dispatch] = useReducer(reducer, undefined, createInitialStarholdState);
const [selectedModule, setSelectedModule] = useState<StarholdModuleId>("reactor");
const [shopOpen, setShopOpen] = useState(false);
const [activePanel, setActivePanel] = useState<"modules"|"marks"|"journal"|"activation"|"upgrades"|null>(null);
const [interiorView, setInteriorView] = useState<StarholdModuleId|"galaxy"|"warroom"|null>(null);
const [moduleInfoOpen, setModuleInfoOpen] = useState(false);
const [quickActionsOpen, setQuickActionsOpen] = useState(false);
```

**doAction (line ~153):** `(command: StarholdCommand, color: string) => void` — dispatch + flash
**handleSelectModule (line ~166):** module kattintás → interiorView közvetlenül nyitja
**handleOpenWarRoom (line ~176):** warroom-ot közvetlenül nyitja

**UI layout:**
- `<header>`: Back link, phase badge, chapter badge, galaxy btn, shop btn, reset btn
- HUD rows: Row1 = stats chips (power/mat/stab/entropy/activation), Row2 = GravitasMaterialStrip
- Game View: 3D scene / fallback, ModuleArtOverlay, interior views, minibuttons, bottom bar
- GravitasOverlays: panels + event card + game over screen

**Minibutton column (`absolute right-3 top-16 z-[32]`):**
| Sorrend | Ikon | Panel/Action |
|---------|------|-------------|
| 1 | LayoutGrid | modules panel |
| 2 | ShieldHalf | marks panel |
| 3 | ArrowUpCircle | upgrades panel |
| 4 | FileText | journal panel |
| 5 | Radar | galaxy interiorView |
| 6 | Layers | quickActionsOpen (command deck) |

**Interior views:** galaxy, sensor, reactor, core, logistics, warroom — mindegyik `absolute inset-0 z-[28]`
- Kattintás bármelyik modulra → közvetlenül megnyílik az interiorView (nem popup)
- Minden interior view tartalmazza a ModuleInteriorPanel-t (level, integrity, upgrade)

### GravitasOverlays.tsx struktúra (~377 sor)

**Overlay-ek sorrendben:**
1. **ResourceHelp**: `resourceHelpOpen` → modal
2. **AvatarBase**: `avatarBaseOpen` → imprint ágak
3. **CommandDeck**: `quickActionsOpen` → összes gyors parancs
4. **Panel container**: `activePanel` → slide-up panel (modules/marks/upgrades/journal)
5. **PendingEvent**: `state.pendingEvent` → anomaly/avatar prep card
6. **GameOver**: `showGameOver` → station lost screen

### Economy rendszer (economy.ts — ~351 sor)

**6 meteor anyag (GalaxyMaterialId):**
| ID | Rövidítés | ~Gyűjtés/óra | Ritkaság |
|----|-----------|-------------|---------|
| lumen_dust | LD | 100 | gyakori |
| verdant_crystals | VC | 82 | gyakori |
| aether_ore | AO | 66 | közepes |
| ember_shards | ES | 52 | ritka |
| sable_alloy | SA | 38 | ritka |
| rift_stone | RS | 26 | nagyon ritka |

**Modul költség profilok:** reactor=ES+LD, logistics=VC+LD, core=AO+LD, sensor=VC+AO, warroom=SA+LD
**Költség görbe:** `20 × 1.35^(level-1)` primary, secondary lv6+, rare lv14+
**Építési idő:** Core: 1nap→7nap lineáris, Többi: 12h→3.5nap lineáris

**Fő API-k:** `getLevelCost(moduleId, targetLevel)`, `canUpgradeModule(moduleId, levels, inventory)`, `isModuleInDanger(moduleId, levels)`
**Upgrade slot:** `UPGRADE_SLOT_CONFIG = { baseSlots: 1, maxSlots: 5 }`
**Warroom garrison:** `garrisonBase:10 + (level-1)×40` → lv25: ~970

### Warroom (standalone, NEM StarholdModuleId!)

```ts
WarRoomState = { level, online, productionSlot, garrison: Record<WarRoomUnitId, number> }
WarRoomUnitId = "militia" | "ranger" | "shieldbearer" | "scout_drone"
```
- `state.warRoom` — NEM `state.modules.warroom`!
- `warRoom.online` flag — saját toggle
- interiorView === "warroom" → WarRoomPanel render

### localStorage

| Kulcs | Tartalom |
|-------|---------|
| `gravitas_save_v2_${username}` | Teljes StarholdState JSON |
| `gravitas_save_v1` | Fallback régi mentés |
| `plizio_galaxy_inventory` | `Record<GalaxyMaterialId, number>` — meteor anyagok |

### Fejlesztési szabályok

1. **economy.ts = egyetlen igazság** — MINDEN ár, költség, görbe IDE kerül
2. **registry.ts = modul lista igazsága** — `getModuleIds()` használata hardcoded tömbök helyett
3. **Warroom standalone** — NEM `StarholdModuleId`, saját `state.warRoom`
4. **Upgrade = valós idő** — `Date.now()` nem tick, így bezárt játék közben is fut
5. **doAction(cmd, color)** — overlays-ban wrapper kell: `(cmd) => doAction(cmd, "rgba(…)")`
6. **Panel bővítés minta:** (1) activePanel union-ba, (2) minibutton hozzáadás, (3) header ikon, (4) content section

### GRAVITAS OPERATÍV MEMÓRIA (tokenkímélő gyorsindítás)

**Minimál olvasási sorrend (prioritás):**
1. `CLAUDE.md` (ez a Gravitas blokk + ez a memória rész)
2. `components/gravitas/GravitasInteriors.tsx` (ha layout/asset kérés)
3. `app/gravitas/page.tsx` (ha panel/nav/interior wiring kérés)
4. `lib/gravitas/economy.ts` + `lib/gravitas/sim/*` (ha ár, upgrade, tick, command kérés)

**Aktív ModuleArtOverlay asset map (forrás: GravitasInteriors.tsx):**
- reactor -> `/gravitas/modules/reactor-luminous.webp`
- logistics -> `/gravitas/modules/logistics-hub-v3.webp`
- sensor -> `/gravitas/modules/sensor-probe.webp`
- core -> `/gravitas/modules/core-crystal-v2.webp`
- repair-bay (dekor) -> `/gravitas/modules/repair-station-v2.webp`
- warroom entry -> `/gravitas/modules/command-deck.webp`

**Fontos UI viselkedés (aktuális):**
- Mobilon a ModuleArtOverlay nagy, scroll/pan jellegu stage-et használ (`overflow-auto`, nagyított canvas).
- Desktopon kompakt, középre rendezett klaszter marad (`sm:*` pozicionálás).
- `warroom` NEM `StarholdModuleId`, de az overlayben külön entry van; kattintás `onOpenWarRoom` ágra megy.
- A material csík 2 sorra törhet mobilon (`GravitasMaterialStrip` + page HUD wiring).

**Asset csere szabály (stabilitás):**
- Új modulképnél preferált út: új verziószámos fájlnév (`*-v2`, `*-v3`) + source csere.
- Nyers, feltöltött PNG-k maradhatnak repo gyökérben munkaanyagként; runtime a `public/gravitas/modules/*` fájlokat használja.

**Gyors ellenőrzési lista (Gravitas vizuális patch után):**
- Desktop: modulok egymáshoz képest olvasható klaszterben vannak, nincs kritikus overlap.
- Mobil: modulok láthatók, elérhetők scroll/pan mellett, nincs levágott fő elem.
- Warroom belépés: command-deck assetről nyitható, panel renderel.
- Galaxy: drón mission ciklus megy (`traveling -> mining -> returning -> clear`).
