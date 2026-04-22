# Visual Lab — Deutschland tanuló-térkép (Codex task)

## Kontextus

A `lib/visualLab/components/InteractiveMap.tsx`-ben már él egy interaktív Deutschland térkép:
- 16 Bundesland valós GeoJSON-ból (`lib/visualLab/maps/deutschland.svg.ts`)
- Drill-down 114 Regierungsbezirke/Kreise-re (`bundeslandSubregions.ts`)
- Pan/zoom/touch ready

**Fontos**: ez **tanuló-térkép**, nem játék. Semmilyen kvíz/pontszám nincs róla. A user kattint egy pontra, olvas, tanul. Használható 3 tantárgynál (Sachkunde / Geographie / Geschichte) — ugyanaz a térkép, különböző réteg-aktiválásokkal.

---

## FELADAT 1 — Asset-letöltés (képek + audio)

A meglévő `public/geo-images/` és `public/geo-audio/` mappában már van 196 kép és 19 audio (listázva: `public/geo-assets-inventory.json`). DE sok POI-hoz még nincs asset.

Amire szükségünk lesz — töltsd le **közkincs / CC-licensz** forrásokból (Wikimedia Commons, Natural Earth, Flagpedia):

### Képek (`public/geo-images/`)

**Városok** (ha még nincs): Bonn, Mainz, Magdeburg, Erfurt, Schwerin, Potsdam, Saarbrücken, Hannover (ezek Landeshauptstadt-ok), továbbá: Heidelberg, Lübeck, Regensburg, Würzburg, Rostock, Augsburg, Trier, Freiburg, Kassel, Göttingen, Bayreuth, Weimar, Jena, Aachen, Bielefeld (a meglévő coa-ra épp jó), Bochum, Duisburg, Oberhausen, Gelsenkirchen, Braunschweig.

**Folyók** (fotó felől, jellegzetes nézet): Rhein (ha nincs), Elbe, Havel, Spree (belvárosi), Ruhr, Saar, Neckar, Lech, Inn, Werra, Ems.

**Hegyek / csúcsok**: Zugspitze csúcs, Brocken, Feldberg (Fekete-erdő), Watzmann, Fichtelberg, Nagyobb erdő-panorámák: Harz, Schwarzwald, Bayerischer Wald, Lüneburger Heide.

**Tavak**: Bodensee nézet, Chiemsee, Starnberger See, Ammersee, Müritz, Schweriner See.

**Szigetek**: Sylt (dűnék), Rügen (Kreidefelsen), Helgoland (vörös szikla), Usedom, Fehmarn, Borkum, Norderney.

**Landmarks / nevezetességek**: Brandenburger Tor, Reichstag, Berliner Fernsehturm, Elbphilharmonie, Zwinger Dresden, Wartburg, Schloss Neuschwanstein, Schloss Sanssouci, Speyerer Dom, Aachener Dom, Regensburger Dom, Wormser Dom, Schloss Heidelberg, Porta Nigra (Trier), Völklinger Hütte, Schloss Schwerin, Hamburger Hafen, Hamburger Rathaus, Frauenkirche München, Marienplatz München.

**Történelmi helyszínek (Geschichte)**: Berliner Mauer (darabok, East Side Gallery), Checkpoint Charlie, Dokumentationszentrum Reichsparteitag (Nürnberg), Wittenberg Schlosskirche, Augsburg Rathaus, Reichstag 1945, Bonn Bundeshaus, DDR-Museum, Stasi-Museum, Point Alpha, Waldsassen Kloster, Rothenburg ob der Tauber, Potsdam Konferenzort (Cecilienhof), Wolfenbüttel, Peenemünde, Dachau-emlékmű (tapintatosan), Buchenwald-emlékmű, Bautzen, Lutherstadt Eisleben.

**Tengerek / tájak**: Nordsee (Wattenmeer), Ostsee (Kreidefelsen/part), Thüringer Wald panoráma, Rhein-völgy panoráma.

**Címer-SVG-k** (`coa_*.svg`, Wikimedia) ami hiányzik: az összes még nem fedett Landkreis/Kreis címer — de ez Tier 2. Előbb a fönti pontok.

### Audio (`public/geo-audio/`)

Német kiejtések (forssforrá-siánt: Forvo CC, vagy TTS-ből) minden Landeshauptstadt-hoz + folyókhoz + hegyekhez, ha még nincs.

Fájlkonvenció: **meglévő struktúra tartsd**:
- `city-<name>.jpg/webp` (kisbetű, ékezet nélkül: `muenchen`, `duesseldorf`)
- `coa_city-<name>.svg`
- `mnt-<name>.jpg`
- `river-<name>.jpg` (németül: `rhein`, magyarul: `duna` — csak ha külön-külön van)
- `lake-<name>.jpg`
- `hist-<name>.jpg`
- `landmark-<name>.jpg`

### Frissítsd az inventory-t

Miután letöltötted, futtasd (vagy írj új scriptet):
```bash
cd public/geo-images && ls | head
```
Majd regeneráld a `public/geo-assets-inventory.json`-t (a strukúrát kövesd — van benne 3 szekció: `coats_of_arms`, `photos`, `audio`).

---

## FELADAT 2 — POI adatbázis (`lib/visualLab/data/poi.ts`)

A fájl már létezik, tartalmazza a `regions` tömböt (16 Bundesländert). **Azt ne bántsd**, bővítsd a `pois` tömböt új entries-szel.

### POI típus

```ts
export type POI = {
  id: string;                       // "city-muenchen", "river-rhein", "hist-potsdam"
  type: "state-capital" | "city" | "river" | "mountain" | "lake"
      | "island" | "landmark" | "historical" | "forest" | "sea" | "region";
  parent: string;                   // Bundesland ID ("DE-BY") vagy "DE" országos elemnél

  coords: [lon: number, lat: number];  // VALÓS GPS Wikipedia-ról

  // KÉT SZINTŰ TARTALOM (kicsi + nagy)
  name: { de: string; hu: string; ro: string; en: string };

  // Rövid 1-2 mondat, K1-K4-nek egyszerűbb, K5+nek részletesebb
  description: { de: string; hu: string; ro: string; en: string };
  descriptionAdvanced?: { de: string; hu: string; ro: string; en: string };  // csak ha jelentősen más

  facts: { de: string[]; hu: string[]; ro: string[]; en: string[] };         // 2-4 alap-fact
  factsAdvanced?: { de: string[]; hu: string[]; ro: string[]; en: string[] }; // +2-3 részletesebb (K5+)

  // TANTÁRGY-RELEVANCIA
  subjects: ("sachkunde" | "geographie" | "geschichte")[];
  grades: number[];

  // HISTORY kontextus (ha historical/landmark + geschichte)
  historyPeriod?: "middle-ages" | "reformation" | "empire" | "ww1" | "ww2" | "ddr" | "modern";
  historyYear?: number | [number, number];  // pl. 1989 vagy [1939, 1945]

  // NATURE kontextus
  elevation?: number;     // hegy magassága m
  length?: number;        // folyó hossz km
  area?: number;          // tó/sziget terület km²

  // ASSET linkek (csak ha létezik az inventory-ban!)
  image?: string;         // "/geo-images/city-muenchen.jpg"
  coa?: string;           // "/geo-images/coa_city-muenchen.svg"
  audio?: string;         // "/geo-audio/city-muenchen.ogg"
};
```

### Tartalmi mátrix (~140 POI)

| Kategória | Mennyi | Példák |
|-----------|--------|--------|
| Landeshauptstadt | 16 | Berlin, München, Stuttgart, Düsseldorf, Hamburg, Hannover, Wiesbaden, Mainz, Saarbrücken, Bremen, Kiel, Schwerin, Potsdam, Magdeburg, Erfurt, Dresden |
| Nagy városok | ~15 | Köln, Frankfurt am Main, Leipzig, Nürnberg, Heidelberg, Lübeck, Regensburg, Würzburg, Rostock, Augsburg, Trier, Freiburg, Kassel, Aachen, Braunschweig |
| Folyók | ~12 | Rhein, Elbe, Donau, Main, Mosel, Neckar, Weser, Isar, Oder, Spree, Ruhr, Havel |
| Hegyek | ~8 | Zugspitze (2962m), Brocken (1141m), Feldberg (1493m), Arber (1456m), Watzmann (2713m), Wasserkuppe (950m), Fichtelberg (1215m), Großer Arber |
| Tavak | ~6 | Bodensee (536 km²), Chiemsee, Starnberger See, Ammersee, Müritz, Schweriner See |
| Szigetek | ~5 | Sylt, Rügen, Helgoland, Usedom, Fehmarn |
| Erdők/tájak | ~5 | Schwarzwald, Bayerischer Wald, Harz, Lüneburger Heide, Spreewald |
| Tengerek | 2 | Nordsee, Ostsee |
| Landmarks | ~15 | Kölner Dom, Brandenburger Tor, Neuschwanstein, Reichstag, Frauenkirche München, Speyerer Dom, Wartburg, Schloss Sanssouci, Porta Nigra, Elbphilharmonie, Zwinger, Fernsehturm Berlin, Heidelberger Schloss, Schloss Schwerin, Völklinger Hütte |
| Történelmi helyek | ~25 | Wittenberg (reformation), Weimar (classical), Nürnberg (Reichsparteitag), Berliner Mauer (ddr), Checkpoint Charlie, Leipzig (Montagsdemos), Potsdam/Cecilienhof (konferencia), Aachen (Karl der Große), Speyer (Salier), Augsburg (Religionsfrieden), Bonn (Hauptstadt), Rostock (reunification), Lübeck (Hansa), Regensburg (Reichstag), Rothenburg ob der Tauber (middle-ages), Peenemünde (ww2), Wartburg (Luther), Frankfurt Paulskirche (1848), Hambach (1832), Berlin Reichstag (1933), Stasi-Museum, Buchenwald, Dachau, Cecilienhof, Point Alpha |

### Példa entry (city, Landeshauptstadt)

```ts
{
  id: "city-muenchen",
  type: "state-capital",
  parent: "DE-BY",
  coords: [11.5819, 48.1351],
  name: { de: "München", hu: "München", ro: "München", en: "Munich" },
  description: {
    de: "Hauptstadt von Bayern, Heimat des Oktoberfests.",
    hu: "Bajorország fővárosa, az Oktoberfest otthona.",
    ro: "Capitala Bavariei, gazda Oktoberfest.",
    en: "Capital of Bavaria, home of Oktoberfest."
  },
  facts: {
    de: ["Etwa 1,5 Mio. Einwohner.", "Frauenkirche & Marienplatz.", "FC Bayern München."],
    hu: ["Kb. 1,5 millió lakos.", "Frauenkirche & Marienplatz.", "FC Bayern München."],
    ro: ["Aproximativ 1,5 mil. locuitori.", "Frauenkirche & Marienplatz.", "FC Bayern München."],
    en: ["About 1.5M inhabitants.", "Frauenkirche & Marienplatz.", "FC Bayern Munich."]
  },
  factsAdvanced: {
    de: ["Gegründet 1158 von Heinrich dem Löwen.", "BMW-Stammsitz.", "Host der Olympischen Spiele 1972."],
    hu: [],  // ha nincs kiegészítés, üres array
    ro: [],
    en: ["Founded 1158 by Henry the Lion.", "BMW headquarters.", "Hosted 1972 Olympics."]
  },
  subjects: ["sachkunde", "geographie", "geschichte"],
  grades: [1, 2, 3, 4, 5, 6, 7, 8],
  image: "/geo-images/city-muenchen.jpg",
  coa: "/geo-images/coa_city-muenchen.svg",
  audio: "/geo-audio/city-muenchen.ogg",
}
```

### Példa (folyó, országos elem)

```ts
{
  id: "river-rhein",
  type: "river",
  parent: "DE",
  coords: [7.60, 50.33],  // Lorelei környéki pont (a folyó közepe felé)
  name: { de: "Rhein", hu: "Rajna", ro: "Rin", en: "Rhine" },
  description: {
    de: "Einer der längsten Flüsse Europas.",
    hu: "Európa egyik leghosszabb folyója.",
    ro: "Unul dintre cele mai lungi râuri ale Europei.",
    en: "One of Europe's longest rivers."
  },
  facts: {
    de: ["1230 km lang.", "Quelle in der Schweiz.", "Mündet in die Nordsee."],
    hu: ["1230 km hosszú.", "Svájcból ered.", "Az Északi-tengerbe ömlik."],
    ro: ["1230 km lungime.", "Izvorăște în Elveția.", "Se varsă în Marea Nordului."],
    en: ["1230 km long.", "Sources in Switzerland.", "Flows into the North Sea."]
  },
  length: 1230,
  subjects: ["sachkunde", "geographie"],
  grades: [2, 3, 4, 5, 6, 7, 8],
  image: "/geo-images/river-rhein.jpg",
}
```

---

## Kritikus szabályok

1. **GPS koordináták VALÓSAK** — Wikipedia infobox-ról ellenőrizd.
2. **Parent ID** pontos (`DE-BY`, `DE-NW`, országos: `DE`).
3. **Multi-language kötelező** mind a 4 nyelven (ha nincs fordítás, használd a német nevet mind a négyben, de inkább keress valódit).
4. **Asseteket csak akkor hivatkozd** ha már létezik a fájl (`public/geo-images/`, `public/geo-audio/`). Letöltés UTÁN frissítsd a POI-ban a linket.
5. **`factsAdvanced` opcionális** — ha nincs mit hozzátenni K5+-nek, hagyd ki.
6. **TS szintaktika** — `npx tsc --noEmit` VÉGÉN 0 hiba legyen.
7. **Meglévő `regions` tömb** ne változzon.

---

## Output

- `public/geo-images/*` — új képek, címerek
- `public/geo-audio/*` — új audio-k
- `public/geo-assets-inventory.json` — regenerálva
- `lib/visualLab/data/poi.ts` — ~140 új POI a `pois` tömbhöz

---

## Időkeret

Nagy task, sok letöltés. Dolgozz **Tier-enkénti commit**-okkal:
1. Landeshauptstadt + assetek (16 POI)
2. Folyók + assetek
3. Hegyek/tavak/szigetek + assetek
4. Landmarks + assetek
5. Történelmi helyszínek + assetek

Claude (a másik ágens) közben felépíti a layer-toggle UI-t, POI-renderelést, info-kártyát, audio-play gombot — automatikusan működni fog a te adatodon, nem kell koordinálni.

---

## Working directory

**Dolgozz közvetlenül a Windows repóban SSH-n át:**
- Host: `100.109.55.70` (Tailscale)
- User: `User` (passwordless key auth megvan)
- Path: `C:\Users\User\plizio-repo`
- Branch: `recovery-base`

Így nem kell SCP-znem a fájlokat, egyenesen a célban dolgozol.
