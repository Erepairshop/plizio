# Visual Lab AstroMath — 12 új vizuális játék (Codex/Gemini)

## Kontextus

Létezik egy Visual Lab (`components/VisualLab.tsx`) ahova mostantól vizuális MATH-játékokat rakunk. Már működik a Sachkunde-ban 5 játékkal (MeteorCatchGame, OrbitSortGame, SignalRunnerGame, ConstellationBuilderGame, MemoryRadarGame) — ezek a minta.

A fájl-struktúra (mintaként):
- `app/astro-sachkunde/visual-lab/games/MeteorCatchGame.tsx` (komponens)
- `lib/visualLab/types.ts` (shared típusok)
- `lib/visualLab/pools/sachkundeK1.ts`..`K4.ts` (grade-specifikus tartalom pool-ok)

## Goal: 12 új visuális matematika-játék K1-K8-ra

Új fájlok helye:
- `app/astromath/visual-lab/games/*.tsx` (12 új játék TSX)
- `lib/visualLab/types.ts` (kiegészítve új round-típusokkal)
- `lib/visualLab/pools/astromathK1.ts`..`K8.ts` (8 új pool — minden osztályhoz)

## Játéklista

### 1. ShapeSorter
- **Osztály**: K1-K4
- **Mit kell csinálni**: Képernyőn 6-8 alakzat lebeg véletlenszerűen (háromszög, négyzet, kör, ötszög, hatszög, téglalap). A prompt: "Tapintsd csak a háromszögeket!" — az adott típusú alakzatokat kell megtalálni, a többit elkerülni.
- **Round-type**:
  ```ts
  ShapeSorterRound {
    id, title, prompt,
    targetShape: "triangle" | "square" | "circle" | "pentagon" | "hexagon" | "rectangle",
    decoyShapes: string[],
    goal: number,  // hány helyes találat a pass-hoz
    theme: { bg, accent }
  }
  ```

### 2. PatternMatch
- **Osztály**: K1-K3
- **Mit kell csinálni**: 5-6 elemes minta látszik, utolsó(ak) rejtve. 3-4 választásból kell kitalálni mi folytatja. Mintázatok: forma (⭐○⭐○⭐?), szín, szám (2,4,6,8,?), méret.
- **Round-type**:
  ```ts
  PatternMatchRound {
    id, title, instruction,
    sequence: VisualLabItem[],  // látható elemek
    hidden: number,              // hány elemet rejtünk a végén
    choices: VisualLabItem[],
    correctIds: string[],
    theme: { bg, accent }
  }
  ```

### 3. ColorPattern
- **Osztály**: K1-K2
- **Mit kell csinálni**: Színsorozat folytatása (piros-kék-piros-kék-?). Egyszerűbb, mint PatternMatch.
- **Round-type**: hasonló mint PatternMatch, csak színekkel.

### 4. CountingDots
- **Osztály**: K1-K2
- **Mit kell csinálni**: Képernyőn sok pötty van véletlenszerűen, a user kattintson meg pontosan N db-ot. Miután N darabot kattintott, gomb "Kész!" — ellenőrzés.
- **Round-type**:
  ```ts
  CountingDotsRound {
    id, title, target: number, // hány pöttyöt kell megkattintani
    total: number,              // összesen hány van a képernyőn
    theme: { bg, accent }
  }
  ```

### 5. ShapeBuilder
- **Osztály**: K2-K5
- **Mit kell csinálni**: Tangram-szerű. 4-6 rész van a készletben, célforma megmutatva, a user drag-gel összerakja. Single-drop target.
- **Round-type**:
  ```ts
  ShapeBuilderRound {
    id, title, targetShape: string, // "house", "rocket", "cat"
    parts: { id, svg, correctX, correctY, rotation }[],
    theme: { bg, accent }
  }
  ```

### 6. SymmetrySpot
- **Osztály**: K2-K4
- **Mit kell csinálni**: Egy ábra látszik (pillangó, ház, levél). 3-4 vonal van felrakva, csak egy a valódi szimmetria-tengely. Kattints rá.
- **Round-type**:
  ```ts
  SymmetrySpotRound {
    id, title, imageSrc: string, // vagy SVG path
    lines: { id, x1, y1, x2, y2 }[],
    correctLineId: string,
    theme: { bg, accent }
  }
  ```

### 7. BarChartBuilder
- **Osztály**: K3-K5
- **Mit kell csinálni**: Táblázat: 5 kategória és adatok. A user **húzza** a oszlopok tetejét a megfelelő magasságra. Visszajelzés élőben.
- **Round-type**:
  ```ts
  BarChartBuilderRound {
    id, title, categories: string[],
    values: number[],     // helyes értékek
    maxValue: number,     // a Y-tengely maximuma
    theme: { bg, accent }
  }
  ```

### 8. DiceRoll
- **Osztály**: K5-K7
- **Mit kell csinálni**: Egy kockát dobnak N-szer (pl. 30), eredmény diagram épül. A user előre tippel milyen számnak lesz legtöbb dobása, de valóságban minden nagyjából egyformán.
- **Round-type**:
  ```ts
  DiceRollRound {
    id, title, totalRolls: number,
    // Nincs pre-generated adat, közben random
    theme: { bg, accent }
  }
  ```

### 9. CoinCounter
- **Osztály**: K1-K3
- **Mit kell csinálni**: Adott célösszeg (pl. 3.45 €). Kattints érmékre/bankókra hogy összejöjjön. Címletek: 1c, 2c, 5c, 10c, 20c, 50c, 1€, 2€, 5€, 10€.
- **Round-type**:
  ```ts
  CoinCounterRound {
    id, title, targetAmount: number, // in cents
    availableCoins: number[],         // title's which denominations available
    theme: { bg, accent }
  }
  ```

### 10. ChangeMaker
- **Osztály**: K3-K5
- **Mit kell csinálni**: "A vevő 5€-t ad, a termék 3.67€. Add vissza a helyes visszajárót!" A user pont annyi érméket kell kirakjon.
- **Round-type**:
  ```ts
  ChangeMakerRound {
    id, title, paid: number, price: number, // mindkettő cent
    expectedChange: number,
    theme: { bg, accent }
  }
  ```

### 11. LengthEstimator
- **Osztály**: K2-K4
- **Mit kell csinálni**: Egy vonal van a képernyőn, 3-4 hossz-becslés van felajánlva. Vagy egy vonalzó is mellette: a user mozgatja és olvassa le.
- **Round-type**:
  ```ts
  LengthEstimatorRound {
    id, title,
    lineLength: number,  // true length in cm
    choices: number[],   // ajánlott válaszok
    showRuler?: boolean,
    theme: { bg, accent }
  }
  ```

### 12. WeightBalance (egyszerű)
- **Osztály**: K1-K3
- **Mit kell csinálni**: Két oldal, 3-4 tárgy (ismert súllyal). A user tippel melyik a nehezebb. Sorozatos round-ok.
- **Round-type**:
  ```ts
  WeightBalanceRound {
    id, title,
    leftItems: { label, weight }[],
    rightItems: { label, weight }[],
    correctSide: "left" | "right" | "equal",
    theme: { bg, accent }
  }
  ```

## Pool-struktúra (minden osztályhoz)

Fájlok: `lib/visualLab/pools/astromathK1.ts`..`astromathK8.ts`

Minden fájl exportál egy `AstromathVisualLabGradePool`-t:
```ts
export const ASTROMATH_VISUAL_LAB_K<N>: AstromathVisualLabGradePool = {
  grade: <N>,
  shapeSorter: [... 3-5 round],
  patternMatch: [... 3-5 round],
  colorPattern: [... 3-5 round],
  // stb. minden játékhoz
};
```

NEM minden osztályhoz kell mind a 12 játék. Ha egy játék nem passzol (pl. ChangeMaker K1-K2-re nem), hagyd üresen (`[]`) vagy ne tedd be a typ-ba.

Ajánlott osztály-játék mátrix:
| Game | K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8 |
|------|----|----|----|----|----|----|----|----|
| ShapeSorter | ✓ | ✓ | ✓ | ✓ | — | — | — | — |
| PatternMatch | ✓ | ✓ | ✓ | — | — | — | — | — |
| ColorPattern | ✓ | ✓ | — | — | — | — | — | — |
| CountingDots | ✓ | ✓ | — | — | — | — | — | — |
| ShapeBuilder | — | ✓ | ✓ | ✓ | ✓ | — | — | — |
| SymmetrySpot | — | ✓ | ✓ | ✓ | — | — | — | — |
| BarChartBuilder | — | — | ✓ | ✓ | ✓ | ✓ | — | — |
| DiceRoll | — | — | — | — | ✓ | ✓ | ✓ | — |
| CoinCounter | ✓ | ✓ | ✓ | — | — | — | — | — |
| ChangeMaker | — | — | ✓ | ✓ | ✓ | — | — | — |
| LengthEstimator | — | ✓ | ✓ | ✓ | — | — | — | — |
| WeightBalance | ✓ | ✓ | ✓ | — | — | — | — | — |

## Round-content (példák per osztály)

K1 PatternMatch round: `⭐○⭐○⭐?` → válasz ○
K3 ShapeSorter round: "tapintsd csak a szabályos ötszögeket" (8 alakzat közt)
K5 BarChartBuilder: Havi esőnapok száma (5 hónap)
K5 DiceRoll: "Dobd 30-szor, melyik szám jön ki legtöbbször?"

## Shared tipusok

Egészítsd ki `lib/visualLab/types.ts`-t:
- Adj hozzá a 12 új Round típust a `VisualLabGameId` uniónhöz
- Definiáld a 12 új Round interface-t (fent megadva)
- Új interface: `AstromathVisualLabGradePool` (mint a SachkundeVisualLabGradePool, de az új round típusokkal)

## Stílus / UX

- Kövesd a MeteorCatchGame.tsx stílusát
- Sötét űr-háttér, cián/narancs accent
- `framer-motion` animációkhoz
- `lucide-react` ikonokhoz
- Minden játék self-contained — saját státuszt kezel, `onDone(score, total)` callback

## Bekötés

MIUTÁN kész a 12 játék + 8 pool:
- `components/VisualLab.tsx` `SUBJECT_GAMES`-ben adj hozzá új subject: `"astromath"` (ha még nincs), vagy bővítsd `sachkunde` mellett új tantárgyat
- Importáld mind a 12 komponenst és a 8 pool-t
- `SachkundeGameSwitch`-hez hasonló `AstromathGameSwitch` function

## Rules

1. Nem bántod a `lib/visualLab/components/InteractiveMap.tsx`-et
2. Nem bántod a `lib/visualLab/data/poi.ts`-t
3. Nem bántod a Sachkunde-játékokat
4. `npx tsc --noEmit` → 0 új hiba
5. Működjön K1-en K8-ig, legalább minimum 1-2 round minden alkalmas játékhoz
6. Dolgozz Windows-on SSH-n át: `User@100.109.55.70`, path: `C:\Users\User\plizio-repo`, branch: `recovery-base`

## Validáció

```bash
npx tsc --noEmit
ls app/astromath/visual-lab/games/*.tsx | wc -l  # 12
ls lib/visualLab/pools/astromath*.ts | wc -l     # 8
```

## Report

- Új játék-komponensek (12)
- Új pool-fájlok (8)
- Shared types frissítve
- Integráció a VisualLab.tsx-be
- TSC státusz
