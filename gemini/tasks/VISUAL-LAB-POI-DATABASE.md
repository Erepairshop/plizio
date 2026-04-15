# Visual Lab — POI adatbázis feltöltése (Codex task)

## Kontextus

Egy interaktív Deutschland térkép már működik a repo-ban:
- `lib/visualLab/maps/deutschland.svg.ts` — 16 Bundesland valós GeoJSON-ból
- `lib/visualLab/maps/bundeslandSubregions.ts` — 114 Regierungsbezirke/Kreise drill-down
- `lib/visualLab/components/InteractiveMap.tsx` — pan/zoom/click kész

Ami **hiányzik**: maga a **tartalom** — városok, folyók, hegyek, történelmi helyek a térképen. Te ezt a POI adatbázist fogod feltölteni.

Ez a térkép **3 tantárgyban** lesz használva: Sachkunde (K1–K4), Geographie (K5–K8), Geschichte. Egy POI adatbázis, sok felhasználás — minden POI-n jelöljük melyik tantárgyhoz és osztályhoz passzol.

## Meglévő assetek (NE generálj újat ezek helyett!)

A teljes kép/audio inventory: `public/geo-assets-inventory.json`

**Dióhéjban:**
- **196 kép** (`public/geo-images/`): 26 német város + 15 magyar + 13 folyó + 11 történelmi helyszín + 5 hegy + 5 tó + 5 sziget + 5 landmark + címerek (coa_*.svg)
- **19 audio** (`public/geo-audio/`): város kiejtések + EU országkódok

**FONTOS**: ha egy POI-nak a meglévő `geo-images`-ben van képe, KÖSD BE (`image: "/geo-images/city-muenchen.jpg"`). Ha nincs, hagyd üresen — a felhasználó később hozzáadhat, vagy `coa_` SVG-t mutatunk fallbackként.

## POI típus (`lib/visualLab/data/poi.ts` fájl)

```ts
export type POI = {
  id: string;                       // pl. "city-muenchen", "river-rhein", "hist-potsdam"
  type: "state-capital" | "city" | "river" | "mountain" | "lake"
      | "island" | "landmark" | "historical" | "forest" | "sea" | "region";
  parent: string;                   // Bundesland ID-je, pl. "DE-BY" (München)
                                    // folyónál/országos elemnél: "DE"

  coords: [lon: number, lat: number];  // VALÓS GPS (Google Maps-ről) — a térképen pontként jelenik meg

  name: { de: string; hu: string; ro: string; en: string };
  description: { de: string; hu: string; ro: string; en: string };  // 1-2 mondat
  facts: { de: string[]; hu: string[]; ro: string[]; en: string[] }; // 2-4 tudásmorzsa

  // TANTÁRGY-RELEVANCIA:
  subjects: ("sachkunde" | "geographie" | "geschichte")[];
  grades: number[];                 // melyik osztályokban releváns, pl. [1,2,3,4] vagy [5,6,7,8]

  // OPCIONÁLIS KONTEXTUS (csak ha releváns):
  sachkundeHint?: { de: string; hu: string; ro: string; en: string };  // 1 egyszerű mondat K1-K4-nek
  historyPeriod?: "middle-ages" | "reformation" | "empire" | "ww1" | "ww2" | "ddr" | "modern";
  geographyTheme?: "capital" | "economic" | "port" | "industry" | "natural" | "cultural";

  image?: string;                   // /geo-images/... (csak ha már létezik!)
  coa?: string;                     // /geo-images/coa_...svg
  audio?: string;                   // /geo-audio/...ogg
};
```

A `poi.ts` már létezik, tartalmazza a 16 `regions` tömböt (Bundesländer POI-ként). Azt **ne bántsd**, csak bővítsd a `pois` tömböt további entries-szel.

## Tartalmi terv — ~115 POI

### Tier 1: Landeshauptstadt + főbb városok (20 POI)

- **16 Landeshauptstadt** (Berlin, München, Stuttgart, Düsseldorf, Hamburg, Hannover, Wiesbaden, Mainz, Saarbrücken, Bremen, Kiel, Schwerin, Potsdam, Magdeburg, Erfurt, Dresden)
  - `type: "state-capital"`, `subjects: ["sachkunde","geographie","geschichte"]`, `grades: [1,2,3,4,5,6,7,8]`
- **~4 további nagy város** (Köln, Frankfurt, Leipzig, Nürnberg)
  - `type: "city"`, minden osztályhoz

### Tier 2: Természeti — folyók, hegyek, tavak (~40 POI)

- **Folyók** (~10): Rhein, Elbe, Donau, Main, Mosel, Neckar, Weser, Isar, Oder, Spree
  - `type: "river"`, `parent: "DE"`, `subjects: ["sachkunde","geographie"]`, `grades: [2,3,4,5,6,7,8]`
- **Hegyek/csúcsok** (~8): Zugspitze, Großglockner (bei AT, skip), Feldberg, Brocken, Wasserkuppe, Arber, Watzmann, Fichtelberg
- **Tavak** (~6): Bodensee, Chiemsee, Starnberger See, Ammersee, Müritz, Schweriner See
- **Szigetek** (~5): Sylt, Rügen, Helgoland, Fehmarn, Usedom
- **Erdők/területek** (~5): Schwarzwald, Bayerischer Wald, Harz, Lüneburger Heide, Spreewald
- **Tengerek** (~2): Nordsee, Ostsee

### Tier 3: Történelmi helyek (~25 POI)

Példák:
- **Middle ages** (4-5): Wartburg (Luther), Aachen (Karl der Große), Speyer (Dom), Lübeck (Hansa)
- **Reformation** (3): Wittenberg, Worms, Augsburg
- **Empire/imperial** (3): Berliner Schloss, Versailles-related, Bismarck sites
- **WW2** (5): Nürnberger Reichsparteitagsgelände, Berlin bunker area, Dachau memorial, Peenemünde
- **DDR/Cold War** (5): Berliner Mauer, Brandenburger Tor, Leipzig (Montagsdemos), Potsdam (conference), Point Alpha
- **Modern** (3): Bonn (Hauptstadt), Frankfurt (pénzügyi központ), Rostock (reunification)

Mindegyik: `type: "historical"`, `historyPeriod` beállítva, `subjects: ["geschichte"]`, `grades: [5,6,7,8]`

### Tier 4: Landmarks / Nevezetességek (~30 POI)

- Kölner Dom, Brandenburger Tor, Neuschwanstein, Berliner Fernsehturm, Elbphilharmonie, Zwinger (Dresden), Reichstag, Kieler Woche, Oktoberfest-Wiesn, Hamburger Hafen, Porsche/Mercedes múzeumok, stb.

`subjects: ["sachkunde","geographie","geschichte"]`, grades és `geographyTheme` a tartalomtól függ.

## Kritikus szabályok

1. **GPS koordináták VALÓSAK legyenek** (Wikipedia / Google Maps alapján)
2. **`parent`** pontos Bundesland ID → München = "DE-BY", Berlin = "DE-BE"
3. **Országos elemeknél** (folyó, tenger, teljes ország-régió): `parent: "DE"`
4. **Multi-language teljes** — minden `{de, hu, ro, en}` kötelező
5. **Meglévő képet kösd be** `geo-assets-inventory.json` szerint — ne generálj újat, ne találj ki fájlnevet
6. **TS szintaktika HELYES** — ne csinálj self-import-ot, ne ismételj kulcsot
7. **Tömör leírás** — `description` 1-2 mondat, `facts` 2-4 rövid tudásmorzsa (max 10 szó mindegyik)

## Validáció

Futtasd végül:
```bash
npx tsc --noEmit
```
→ **0 error** legyen.

## Output

Csak ezt az egy fájlt módosítsd:
- `lib/visualLab/data/poi.ts` — append új POI-k a `pois` tömbbe

A `regions` tömb és a többi fájl **ne változzon**.

## Időkeret

~115 entry, minden 4 nyelvű leírással és facts-szel. Gondold át batch-enkénti munkát (Tier 1 → Tier 2 → …) és commit-onként mentsd.
