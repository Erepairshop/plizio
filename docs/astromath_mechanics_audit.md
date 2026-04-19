# Astro-Math Játékmechanikai Audit

Ez a riport az `app/astromath/visual-lab/games/*.tsx` fájlokban található játékok mechanikáit vizsgálja. A cél a játékmenet felülvizsgálata és javaslatok tétele az interaktivitás növelésére, különösen a drag & drop mechanikák bevezetésére.

## 1. Játéklista

| Játék neve | Fájl | Mechanika leírás |
| :--- | :--- | :--- |
| **AngleLaserGame** | `AngleLaserGame.tsx` | A játékos egy csúszkán beállít egy szöget, majd egy gombbal "lő", hogy eltaláljon egy célpontot. |
| **BildGeschichteGame** | `BildGeschichteGame.tsx` | A játékos lépésenként választ képeket és szövegrészeket, hogy egy történetet építsen fel. (Kreatív írás) |
| **FractionReactorGame** | `FractionReactorGame.tsx` | A képernyő tetejéről eső, törteket ábrázoló elemek közül kell a helyesre koppintani. (Reflex/ügyességi) |
| **GruselBuilderGame** | `GruselBuilderGame.tsx` | A játékos mondatokat és opciókat választva épít fel egy "grusel" történetet. (Kreatív írás) |
| **MathCampaignGame** | `MathCampaignGame.tsx` | Ez egy keretrendszer, ami a többi minijátékot egy kampányba fűzi. Nincs saját mechanikája. |
| **MathDefenderGame** | `MathDefenderGame.tsx` | A játékosnak be kell gépelnie a közeledő aszteroidákon lévő matematikai feladatok megoldását, hogy "lövöldözve" elpusztítsa őket. |
| **MathNinjaGame** | `MathNinjaGame.tsx` | A Fruit Ninja-hoz hasonlóan, a játékosnak el kell "vágnia" a feldobott számokat a megadott szabály szerint. (Reflex/ügyességi) |
| **MeteorScaleGame** | `MeteorScaleGame.tsx` | A játékosnak a lehulló meteorok közül kell a helyes számra koppintania, hogy egyensúlyba hozzon egy mérleget. (Reflex/ügyességi) |
| **StarMapperGame** | `StarMapperGame.tsx` | A játékosnak be kell gépelnie egy célpont X és Y koordinátáit a koordináta-rendszeren. |
| **TimeWarpGame** | `TimeWarpGame.tsx` | Mozgó analóg órák közül kell a megadott időpontot mutatóra koppintani, mielőtt az elhagyja a képernyőt. (Reflex/ügyességi) |

## 2. Kategorizálás

Az összes vizsgált játék a jelenlegi formájában NEM használ aktív drag & drop mechanikát.

- **Drag&drop konténer**: **NINCS**
- **MCQ / Tap-only (Reflex alapú)**:
  - `TimeWarpGame`
  - `MeteorScaleGame`
  - `FractionReactorGame`
  - `MathNinjaGame` (Slice mechanika, de tap-alapú)
- **Input-alapú (Billentyűzet)**:
  - `StarMapperGame`
  - `MathDefenderGame`
  - `AngleLaserGame` (Csúszka + gomb)
- **Egyéb (Kreatív / Választás alapú)**:
  - `BildGeschichteGame`
  - `GruselBuilderGame`

## 3. Részletes javaslatok a passzív játékokra

Mivel egyik játék sem drag & drop alapú, mindegyikre lehetne javaslatot tenni. Az alábbiakban a legkönnyebben átalakítható, legnagyobb potenciállal rendelkező játékokra fókuszálunk.

### A) MeteorScaleGame

- **Jelenlegi feladat**: A gyereknek rá kell koppintania a helyes számot tartalmazó meteorra, hogy az egyenlet igaz legyen a mérlegen.
- **Javasolt aktív mechanika**: Ahelyett, hogy a meteorokra koppintana, a gyereknek **meg kellene fognia (drag) a helyes meteort, és belehúznia (drop) a mérleg serpenyőjébe**.
- **Konténer-mechanika**: A mérleg jobb oldali serpenyője egyértelmű "drop zone"-ként funkcionálhatna. A belehúzott meteor vizuálisan megjelennhetne a serpenyőben, ami után a mérleg animációval egyensúlyba kerülne.

### B) FractionReactorGame

- **Jelenlegi feladat**: A gyereknek rá kell koppintania a helyes törtet ábrázoló lebegő elemre.
- **Javasolt aktív mechanika**: A képernyő alján lehetne egy "reaktor mag" (drop zone). A gyereknek a lehulló elemek közül **meg kellene fognia a helyes törtet ábrázolót, és belehúznia a reaktorba**. A rossz elemeket el kell engednie.
- **Konténer-mechanika**: A "reaktor mag" egy statikus konténer, ami vizuálisan "beszippantja" a helyes elemeket, és jelzi a sikeres találatot (pl. felvillan).

### C) StarMapperGame

- **Jelenlegi feladat**: A gyereknek be kell gépelnie a koordinátákat.
- **Javasolt aktív mechanika**: Gépelés helyett egy célkeresztet (vagy egy kis űrhajót) kellene a gyereknek **drag & drop módszerrel a rácson a helyes (X, Y) pozícióra húznia**, majd egy "Lock" gombbal megerősítenie a pozíciót.
- **Konténer-mechanika**: A teljes koordináta-rács egy nagy "drop zone". A célkereszt a rácson belül szabadon mozgatható, de csak a rácspontokra "pattan" (snap-to-grid), hogy a pontosság egyértelmű legyen.

## 4. Részletes javítási javaslat prioritással

1.  **MeteorScaleGame**: A legkönnyebben és leglátványosabban átalakítható. A "mérlegbe húzás" koncepciója egyértelmű, és a meglévő vizuális elemek (mérleg, meteorok) szinte tökéletesen illeszkednek egy drag & drop logikához.
2.  **FractionReactorGame**: Szintén könnyen átalakítható. A "reaktorba húzás" mechanikája tematikus és interaktív. A játékmenet alig változna, de az érzete sokkal aktívabb lenne.
3.  **StarMapperGame**: A gépelést lecserélni egy vizuális drag & drop műveletre nagyban javítaná a fiatalabb korosztály számára a játékélményt. Ez az átalakítás kicsit komplexebb (snap-to-grid logika), de megéri a befektetést.

## 5. Közös lib / komponens

A jelenlegi kódbázisban **NINCS** újrafelhasználható, általános célú drag & drop konténer komponens (`components/interactive/DragToBucket.tsx` és `BlockDrag.tsx` tap-alapúak).

**Javaslat**: Hozzon létre egy új, általános komponenst, pl. `components/interactive/DragAndDropContainer.tsx`. Ez a komponens a `framer-motion` könyvtárra épülhetne, ami már a projekt része.

**A komponens felelősségei lehetnének:**
- Draggable (húzható) elemek definiálása.
- Drop zone (konténer) területek definiálása.
- Callback-ek biztosítása a sikeres (onDrop) és sikertelen (onDragEnd) húzások kezelésére.
- Vizuális visszajelzések kezelése (pl. amíg húzzák, amíg a konténer felett van).

Egy ilyen közös komponens jelentősen felgyorsítaná a fenti játékok és a jövőbeli interaktív feladatok fejlesztését.
