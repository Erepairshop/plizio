# PLIZIO - Fejlesztesi Terv

---

## 1. FOOLDAL KATEGORIAK

**Jelenlegi**: 4 jatek kártya egymas mellett (Quick Pick, Reflex Grid, Memory Flash, Sky Climb)

**Terv**: 2 kategoria szekcioval

```
┌─────────────────────────────────────┐
│            🔥 PLIZIO 🔥             │
│           [DAILY] [🏆]              │
│                                     │
│  ─── ⚡ QUIZ & REFLEX ───          │
│  ┌──────┐ ┌──────┐ ┌──────┐       │
│  │Quick │ │Reflex│ │Memory│        │
│  │Pick  │ │Grid  │ │Flash │        │
│  └──────┘ └──────┘ └──────┘       │
│                                     │
│  ─── 🏔️ ADVENTURE ───              │
│  ┌──────┐ ┌──────┐                 │
│  │ Sky  │ │ ???  │  (jovo)         │
│  │Climb │ │      │                 │
│  └──────┘ └──────┘                 │
└─────────────────────────────────────┘
```

**Modositando fajlok**: `app/page.tsx`
- GAMES tomb helyett CATEGORIES tomb (label, icon, games[])
- Szekcio cimek neon vonallal elvalasztva
- Adventure kategoria kulon neon-green glow-val

---

## 2. QUICK PICK VIZUALIS FEJLESZTES

**Jelenlegi**: Szoveges kerdesek ("China" vs "USA", unit: "population")
**Problema**: Nem mindenki olvassa el / erti

### 2a. Emoji/Ikon alapu megjelenites
Minden kerdeshez hozzárendelünk emojit/ikont:

```json
{
  "itemA": "China",
  "valueA": 1425000000,
  "itemB": "USA",
  "valueB": 335000000,
  "unit": "population",
  "emojiA": "🇨🇳",
  "emojiB": "🇺🇸",
  "unitIcon": "👥"
}
```

**Megjelenites terv**:
```
┌─────────────────────────────────┐
│          👥 population          │
│                                 │
│  ┌──────────┐  ┌──────────┐   │
│  │   🇨🇳    │  │   🇺🇸    │   │
│  │          │  │          │   │
│  │  China   │  │   USA    │   │
│  │          │  │          │   │
│  │ [TAP!]   │  │ [TAP!]   │   │
│  └──────────┘  └──────────┘   │
│                                 │
│  ━━━━━━━━ 5 / 10 ━━━━━━━━    │
└─────────────────────────────────┘
```

### 2b. 3D-szeru kartyak
- CSS perspective + transform: rotateY a kartya kivalasztaskor
- Kartyak "felfordulnak" a valasz megjelenitesekor
- Glow/shadow effektek (mar Framer Motion van, bovitjuk)
- Szam animacio (mar van, de nagyobb/lathathobb)

### 2c. Kategoria-specifikus hatterek
- Football: zold palya gradient hatter
- K-Pop: neon pink/lila
- Anime: arany csillagok
- General: kek/cyan

**Modositando fajlok**:
- `app/quickpick/page.tsx` - UI atdolgozas
- `data/quickpick/*.json` - emoji mezo hozzaadasa

---

## 3. ADAT BOVITES (KERDESKESZLET NOVELESE)

**Jelenlegi allapot**:
| Fajl | Kerdesek |
|------|----------|
| quickpick/general.json | 50 |
| quickpick/kpop.json | 20 |
| quickpick/football.json | 20 |
| quickpick/anime.json | 20 |
| memoryflash/general.json | 10 |
| memoryflash/animals.json | 10 |
| **Osszesen** | **130** |

**Cel**: Minimum 3x bovites, hogy ne ismetlodjenek napi szinten

| Fajl | Jelenlegi | Cel | Noveles |
|------|-----------|-----|---------|
| quickpick/general.json | 50 | 150+ | +100 (vilag, termeszet, tudomany, tech) |
| quickpick/kpop.json | 20 | 60+ | +40 (Spotify, YT, foll, albumok) |
| quickpick/football.json | 20 | 60+ | +40 (golok, dijak, arsz, stadionok) |
| quickpick/anime.json | 20 | 60+ | +40 (epizodok, rating, nezettseg) |
| memoryflash/general.json | 10 | 40+ | +30 (tobb emoji jelenet) |
| memoryflash/animals.json | 10 | 30+ | +20 |
| **Osszesen** | **130** | **400+** | **+270** |

**Uj temak is lehetsegesek** (kesobb):
- quickpick/gaming.json (Twitch, Steam, esport)
- quickpick/movies.json (box office, rating)
- memoryflash/food.json
- memoryflash/travel.json

**Modositando fajlok**: `data/quickpick/*.json`, `data/memoryflash/*.json`

---

## 4. MEMORY FLASH FEJLESZTES

**Jelenlegi**: Emoji jelenetek (jo!) de csak 10+10 kerdes

### 4a. Tobb es nehezebb kerdesek
- 40+ general, 30+ animals
- Nehezebb: "Melyik szin NEM volt?", "Hany piros targy?", "Mi volt a 3. elem?"

### 4b. Vizualis fejlesztes
- Nagyobb emoji megjelenites (jelenleg kicsik)
- Hatter szin valtozas a tema szerint
- Timer vizualis (korforgó nem csak szam)
- "Szemek" animacio (mar van, de erosebb blur effekt)

**Modositando fajlok**:
- `app/memoryflash/page.tsx`
- `data/memoryflash/*.json`

---

## 5. REFLEX GRID FEJLESZTES

**Jelenlegi**: Mukodik jol, 4x4 grid

### 5a. Vizualis polish
- Tobb szin/tipusu cella (arany = +5 bonusz, ritka)
- Combo szamlalo animacioval
- Hatter pulzal a tempoval (lassutol gyorsig)
- Cella "robbanas" effekt tapintaskor

**Modositando fajlok**: `app/reflexgrid/page.tsx`

---

## 6. OSSZEFOGLALO - PRIORITASOK

| # | Feladat | Meret | Prioritas |
|---|---------|-------|-----------|
| 1 | Fooldal kategoriak | Kicsi | ⭐⭐⭐ |
| 2 | Quick Pick emoji/vizualis | Kozepes | ⭐⭐⭐ |
| 3 | Adat bovites (osszes jatek) | Nagy | ⭐⭐⭐ |
| 4 | Quick Pick 3D kartya effekt | Kozepes | ⭐⭐ |
| 5 | Memory Flash bovites | Kozepes | ⭐⭐ |
| 6 | Reflex Grid polish | Kicsi | ⭐ |

---

## 7. JOVO TERVEK (BACKLOG)

| # | Feladat | Prioritas | Allapot |
|---|---------|-----------|---------|
| 1 | +50 Quick Pick kerdes (400+ cel) | Kozepes | Kesz: 356, cel 400+ |
| 2 | Uj Quick Pick temak (gaming, movies) | Alacsony | Tervezes |
| 3 | Hangeffektek (ugras, gyujtes, halal) | Kozepes | Tervezes |
| 4 | Online Leaderboard (ranglista) | Magas | Tervezes |
| 5 | Tobb Memory Flash tema (geography, science) | Alacsony | Tervezes |
| 6 | Avatar ikon a 2D jatekokban | Alacsony | Tervezes |
| 7 | Animalt atmenetek oldalak kozott | Alacsony | Tervezes |
| 8 | VIP vasarlasok Legendary kartyaval | Magas | Tervezes |
| 9 | LEARNING kategoria jatekok (matek, nyelvi feladatok, tesztek) | Magas | Kategoria letrehozva, ures |

---

## KESZ FELADATOK (2026-02-26)

- ✅ Fooldal kategoriak (osszecsukhatoak, uj LEARNING kategoria)
- ✅ Quick Pick emoji/vizualis fejlesztes
- ✅ Adat bovites (356 QP + 70 MF kerdes)
- ✅ 3D kartya effektek
- ✅ Memory Flash bovites
- ✅ Reflex Grid polish
- ✅ Magnes power-up javitas (gentle guide, nem eros huzas)
- ✅ Raketa power-up javitas (5 blokk ugras, level 5+ utan)
- ✅ Shop power-up aktivalas (sky_extralife mukodik)
- ✅ Csillag jutalom minden jatekban (+1 ⭐)
- ✅ X bezaro gomb minden jatekban
- ✅ Magyar szoveg eltavolitva (angol)
- ✅ Kartya ritk. szamitas javitva
