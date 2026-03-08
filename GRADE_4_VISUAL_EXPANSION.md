# Grade 4 Vizuális Tananyag Kiterjesztés - Javaslat

**Cél:** Az OP szöveges kérdéseit gyerekbarát, interaktív vizuális komponensekké alakítani.
**Elv:** Az alapok megtartása + szelektív bővítés (nem mindent kell vizuálisá tenni)

---

## 📋 Grade 4 Témakörök az OP Listájáról

### **1. Zahlenräume (Számkörök) – 10,000-ig és 100,000-ig**
**Jelenlegi:** Szöveges/választásos kérdések (pl. "Melyik a nagyobb: 4382 vagy 4283?")

**Javaslat – Szemivisuális fejlesztés:**
- ✅ **Számegyenes-vizualizáció**: Interaktív SVG számegyenes, ahol a tanuló az adott szám helyét jelöli meg
- ✅ **Place Value Blocks**: Téglalapok/kockák rendszere (1000-es, 100-as, 10-es, 1-es)
  ```
  4382 = [█] [███] [██] [██]
  ```
  A tanuló ezt manipulálhatja drag-drop-pal

**Implementáció:**
- Komponens: `VisualNumberPlace.tsx` - SVG-alapú (egyszerű, gyors)
- Típus: Optional (nem kötelező minden kérdéshez)

---

### **2. Stellenwertsystem (Helyérték-rendszer)**
**Jelenlegi:** "3HT + 5ZT + 2T + 6H + 4Z + 8E = ?"

**Javaslat – Teljes vizuális overhaul:**
- ✅ **Place Value Grid**: 6 oszlopos táblázat (HT, ZT, T, H, Z, E)
  - Tanuló **egérrel drag**-olhat számokat az oszlopokba
  - Valós idejű kalkulus: az alul a végeredmény számként jelenik meg

**Komponens:** `PlaceValueGrid.tsx`
```
[Input HT] [Input ZT] [Input T] [Input H] [Input Z] [Input E]
   3          5         2        6         4        8

Végeredmény: 352,648
```

---

### **3. Addition & Subtraktion (Összeadás/Kivonás)**
**Jelenlegi:** "45678 + 23945 = ?" vagy írásbeli layout (már vizuális!)

**Javaslat – Hibrid megközelítés:**
- ✅ Írásbeli oszlopos forma (már vizuális) → megtartjuk
- ✅ **Új típus: "Szöveges feladat oszlopos megoldással"**
  - Szöveg: "Peternek 24,350 Ft-ja van. Kap még 12,870 Ft-ot. Mennyi lesz?"
  - Megoldás: Oszlopos form az alábbi helyeken:
    ```
      24,350
    + 12,870
    --------
    ```
  - Tanuló kitölti az oszlopok között a részeredményeket

**Komponens:** `SchriftlichAdditionWithText.tsx`

---

### **4. Multiplikation & Division (Szorzás/Osztás)**
**Jelenlegi:** "234 × 6 = ?" és "864 : 4 = ?" szöveges vagy oszlopos form

**Javaslat – Gyerekbarát átmenet:**
- ✅ Szorzótábla interaktív gyakorlat (sajátság, nem kérdéstípus)
- ✅ **Új: Szorzás "lebontásával"**
  ```
  234 × 6 = ?

  234 = 200 + 30 + 4
  200 × 6 = 1200
   30 × 6 =  180
    4 × 6 =   24

  Összesen: _____
  ```
  Tanuló a részeredményeket gépeli, automatikus összeg-számolás

- ✅ **Osztás maradékkal vizualizáció**
  ```
  37 : 6 = ? R ?

  [█████] × 6 = 36    (6 darab 6-os, összesen 36)
  Marad: 37 - 36 = 1

  Válasz: 6 R 1
  ```

**Komponensek:** `MultiplicationBreakdown.tsx`, `DivisionWithRemainder.tsx`

---

### **5. Runden (Kerekítés)**
**Jelenlegi:** "4382 → _____ (10-esre kerekítve)"

**Javaslat – Számégyenes-alapú:**
- ✅ **Interaktív számegyenes kerekítés**
  ```
  Kerekítsd 10-esre:

  4380 ────── [4382] ────── 4390
           ↑ Kattints a közelebbire!
  ```
  Tanuló kattint a "4380" vagy "4390"-re (automatikus ellenőrzés)

**Komponens:** `NumberLineRounding.tsx`

---

### **6. Geometrie (Geometria) – Terület, Kerület, Szimmetria**
**Jelenlegi:** "Téglalap kerülete: 5 cm + 3 cm + 5 cm + 3 cm = ?"

**Javaslat – Teljes vizuális megoldás:**

#### **6a. Kerület és Terület**
- ✅ **Interaktív rács-alapú terület-számolás**
  ```
  Számold meg a négyzeteket!

  [□][□][□][□]
  [□][□][□][□]
  [□][□][□][□]

  Összesen: ____ négyzet
  ```
  Tanuló kattint a négyzetekre (kivilágítódnak), automatikus összeg

#### **6b. Szimmetria – "Mirror Drawing"**
- ✅ **Interaktív szimmetria rajz**
  ```
  Töltsd ki a hiányzó felet!

  [Adott fél] | [Rajzoljon be a tanuló]
  ```
  Tanuló SVG canvas-on rajzol, a szimmetriatengely mellett automatikus tükrözés

#### **6c. Szögek (90°, 180°, stb.)**
- ✅ **SVG-alapú szög-rajzoló**
  - Tanuló kattintással vagy húzással szöget rajzol
  - Gyerekek tanulnak: derékszög = 90°, egyenes = 180°, stb.

**Komponensek:** `GridAreaCounter.tsx`, `SymmetryMirrorCanvas.tsx`, `AngleDrawer.tsx`

---

### **7. Mértékegységek (Units) – **SZMEUZETEM KATEGÓRIA az OP listájában!**

#### **7a. Hosszúságok (mm, cm, dm, m, km)**
- ✅ **ZEICHNEN (rajzolás): "Rajzolj 5 cm-es szakaszt!"**
  ```
  Rajzolj egy 5 cm hosszú vonalat!

  Vonalzó segítségével:
  [0 cm──────────────────────────────] 20 cm

  Tanuló: Kattintson 0-ás és 5-ös pontnál → Vonal lesz

  ✓ Helyes! Ez 5 cm hosszú.
  ```

- ✅ **MESSEN (mérés): "Mennyi hosszú ez a vonal?"**
  ```
  Mérj meg ezzel a vonalzóval!

  [vonal rajz]

  [0──────────────────────] 20 cm

  Tanuló: Drag az elejére és végére → Automatikus mérés
  Válasz megjelenítés: "Ez a vonal 7 cm hosszú"
  ```

#### **7b. Súly (g, kg, t)**
- ✅ **Mérleg vizualizáció**
  ```
  Melyik nehezebb?

  [2 kg] ═════════════ [1500 g]
         ↓ balra dől-e, vagy jobbra?

  2 kg = 2000 g > 1500 g, tehát BALRA nehezebb
  ```
  Tanuló interaktív mérlegre helyez objektumokat

#### **7c. Idő (másodperc, perc, óra) – **UHRZEIT (óraolvasás)**
- ✅ **Interaktív analóg óra**
  ```
  Hány óra van?

  [Analóg óra SVG-vel]
        12
    9      3      ← Tanuló beírja: 3:15 vagy válasszon választási listában
        6

  Válasz: Megjelenítés "3:15" formában vagy "15 perc múlva 4"
  ```

- ✅ **Idő-számolás: "Mennyi idő teljesedett?"**
  ```
  A film 14:30-kor kezdődik, 16:00-kor végződik.
  Meddig tartott?

  [Timeline vizualizáció]
  14:30 ─── [90 perc] ─── 16:00

  Válasz: ____ perc (vagy óra:perc)
  ```

#### **7d. Pénz (€, ¢)**
- ✅ **Pénzszámológép UI**
  ```
  3,50 € + 2,40 € = ?

  [Érme rajzok: 2€, 1€, 50¢, 20¢, 20¢]

  Tanuló: Kattintva kiválasztja az érméket → Összeg számolódik
  ```

**Komponensek:**
- `LengthDrawing.tsx` (rajzolás vonalzóval)
- `LengthMeasurement.tsx` (mérés)
- `AnalogClock.tsx` (óraolvasás)
- `TimelineDuration.tsx` (idő-eltelt számolása)
- `MoneyCalculator.tsx` (pénz)

---

### **8. Törtszámok (Brüche)**
**Jelenlegi:** "3/4 + 1/4 = ?" szöveges formában

**Javaslat – Pizza/Kör alapú vizualizáció:**
- ✅ **Pizza szeletekkel való tört-összeadás**
  ```
  3/4 pizza + 1/4 pizza = ?

  [Kör 3/4-ed kitöltve] + [Kör 1/4-ed kitöltve] = [Kör teljes]

  Tanuló: Összeadásra kattint → Animáció az összesítéshez
  ```

**Komponens:** `FractionPizzaAdder.tsx`

---

### **9. Sorozatok (Zahlenfolgen)**
**Jelenlegi:** "2 – 4 – 6 – 8 – ?"

**Javaslat – Interaktív minta felismerés:**
- ✅ **"Sequence builder" game**
  ```
  Mi a minta?

  2 ──→ 4 ──→ 6 ──→ 8 ──→ ?
       +2    +2    +2

  Válasz: _____ (vagy gombokat kattintanak: 10, 12, 14 közül)
  ```
  Tanuló meglátja, hogy +2 az addíció

**Komponens:** `SequenceBuilder.tsx`

---

### **10. Logikai gondolkodás (Logisches Denken)**
**Jelenlegi:** "Mi a hiányzó szám?" szöveges feladvány

**Javaslat – Nem változtatunk, de hint-rendszer:**
- ✅ Az osztalyon marad, szöveges formában

---

## 🛠 Implementációs Prioritás

### **1. Fázis (Kritikus - szokogletes szóban említett):**
- [ ] `LengthDrawing.tsx` – Zeichnen (rajzolás)
- [ ] `LengthMeasurement.tsx` – Messen (mérés)
- [ ] `AnalogClock.tsx` – Uhrzeit (óraolvasás)

### **2. Fázis (Magas prioritás):**
- [ ] `GridAreaCounter.tsx` – Terület-számolás
- [ ] `PlaceValueGrid.tsx` – Helyérték-rendszer
- [ ] `FractionPizzaAdder.tsx` – Törtek

### **3. Fázis (Könnyebb):**
- [ ] `SymmetryMirrorCanvas.tsx` – Szimmetria
- [ ] `SequenceBuilder.tsx` – Sorozatok
- [ ] `TimelineDuration.tsx` – Idő-eltelt

### **4. Fázis (Kiterjesztés):**
- [ ] `AngleDrawer.tsx` – Szögek
- [ ] `MoneyCalculator.tsx` – Pénz
- [ ] `NumberLineRounding.tsx` – Kerekítés

---

## 💾 Kódszerkezet Javaslat

### 1. **Új mappa: `components/grade4-visual/`**
```
components/
  ├─ grade4-visual/
  │  ├─ LengthDrawing.tsx          (Zeichnen)
  │  ├─ LengthMeasurement.tsx      (Messen)
  │  ├─ AnalogClock.tsx            (Uhrzeit)
  │  ├─ GridAreaCounter.tsx        (Terület)
  │  ├─ PlaceValueGrid.tsx         (Helyérték)
  │  ├─ FractionPizzaAdder.tsx     (Törtek)
  │  ├─ SymmetryMirrorCanvas.tsx   (Szimmetria)
  │  ├─ SequenceBuilder.tsx        (Sorozatok)
  │  ├─ TimelineDuration.tsx       (Idő)
  │  ├─ AngleDrawer.tsx            (Szögek)
  │  ├─ MoneyCalculator.tsx        (Pénz)
  │  └─ types.ts                   (Shared types)
```

### 2. **Módosítás: `lib/schoolTaskGenerator.ts`**
```ts
// Új típusok az Aufgaben-hoz:
export type VisualTaskType =
  | "standard"                // szöveges/választásos
  | "length-drawing"         // Zeichnen
  | "length-measurement"     // Messen
  | "clock-reading"         // Uhrzeit
  | "grid-area"             // Terület-számolás
  | "place-value-grid"      // Helyérték
  | "fraction-pizza"        // Tört-pizza
  | ... stb.

interface AufgabenWithVisual extends SubQuestion {
  visualType?: VisualTaskType;
  visualData?: Record<string, any>;  // pl. target length, clock time
}
```

### 3. **Módosítás: `components/SchoolTaskBlock.tsx`**
```tsx
// Task render logika:
<SubQuestion>
  {sq.visualType ? (
    <VisualTaskRenderer type={sq.visualType} data={sq.visualData} />
  ) : (
    <StandardTaskRenderer />
  )}
</SubQuestion>
```

---

## ✅ Felhasználói Élmény (UX)

### **Zeichnen (rajzolás) - LengthDrawing.tsx**
```
┌─────────────────────────────────────┐
│ Rajzolj egy 5 cm hosszú vonalat!    │
│                                       │
│ Vonalzó: |0─────5─────10────15─────20 cm
│          ↓                         │
│ [Tanuló drag-ol 0-tól 5-ig]       │
│ → Kék vonal jelenik meg           │
│                                   │
│ ✓ Helyes! Ez 5 cm hosszú.         │
│                                   │
│ [ Tovább ] [ Próbál újra ]        │
└─────────────────────────────────────┘
```

### **Messen (mérés) - LengthMeasurement.tsx**
```
┌─────────────────────────────────────┐
│ Mérj meg ezt a vonalat!             │
│                                       │
│ ═════════════════ (fekete vonal)    │
│                                       │
│ Vonalzó: |0─────5─────10────15─────20 cm
│          ↓                         │
│ [Tanuló drag-ol a vonal elején és végén]
│ → "Ez a vonal 8 cm hosszú" → megjelenik
│                                   │
│ [ ✓ Helyes! ] [ Próbál újra ]     │
└─────────────────────────────────────┘
```

### **Uhrzeit (óra) - AnalogClock.tsx**
```
┌─────────────────────────────────────┐
│ Hány óra van?                       │
│                                       │
│        12                           │
│    9       3  ← Interaktív mutatók │
│        6                           │
│                                   │
│ Válasz: [3:15] vagy válassz ▼    │
│                                   │
│ [ ✓ Helyes! ] [ Próbál újra ]     │
└─────────────────────────────────────┘
```

---

## 📝 Implementációs Checklist

- [ ] Mappa létrehozása: `components/grade4-visual/`
- [ ] `types.ts` az összes visual type-tal
- [ ] 1. Fázis komponensek (3 db): Zeichnen, Messen, Uhrzeit
- [ ] `schoolTaskGenerator.ts` bővítése visual task típusokkal
- [ ] `SchoolTaskBlock.tsx` módosítása visual rendereléshez
- [ ] Tesztelés az OP Grade 4 teszt UI-jában
- [ ] 2. Fázis komponensek (3 db)
- [ ] ... stb.

---

## 🎯 Tanulási Célok (Learning Outcomes)

| Vizuális Típus | Tanulási Cél |
|---|---|
| **Zeichnen** | Hosszúság mérésének készségét (cm, mm) |
| **Messen** | Vonalzó helyes használata, hosszúság leolvasása |
| **Uhrzeit** | Analóg óra olvasása, időfogalom megértése |
| **Terület (Grid)** | Kétdimenziós gondolkodás, terület-fogalom |
| **Helyérték (Grid)** | Helyérték-rendszer mélyebb megértése |
| **Tört (Pizza)** | Azonos számlálójú törtek összeadása, vizuális |
| **Szimmetria** | Szimmetria-tengely, tükrözés |
| **Sorozatok** | Minta-felismerés, additív/multiplikatív sorozatok |

---

## 🚀 Jövőbeli Bővítések

- [ ] **Tesz-alapú hintrendszer**: "Kattints a közelebbire" tűnik túl könnyűnek? Hagyj 5 sec-et gondolkodási időt
- [ ] **Gamification**: Pontok és medálok visual feladatokhoz
- [ ] **Oktatói dashboard**: Mely visual taskokkal küzdenek a tanulók legtöbbet?
- [ ] **Multimediás kiterjesztés**: Hangeffektek (pl. "ding" helyes válaszhoz)

---

**Verzió:** 1.0
**Készült:** 2026-03-08
**Szerző:** Claude AI
**Státusz:** Javaslat - awaiting approval
