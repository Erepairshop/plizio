# Visual Lab — Térkép modul újraépítése (Recovery)

## Háttér

Plizio.com-on volt egy **Visual Lab interaktív térkép modul** ami az 5 napos elveszett munkában készült. A forráskód elveszett (SSD halál), de a **szerver megőrizte az asseteket**: 196 kép + 19 audio fájl.

A feladat: regenerálni a térkép forráskódot. Az **assetek megvannak**, ezeket NE generáld újra, használd amik vannak.

## Mit látott a felhasználó (referencia)

Sötét űr-stílusú interaktív térkép cián outline-okkal:

1. **Deutschland főtérkép** — 16 Bundesland kattintható
2. **Klikk Bundesland-ra** → infokártya alul (zászló + név + főváros + leírás)
3. **"Detailansicht aktivieren" gomb** → drill-down régió-térkép (pl. Bayern → Unterfranken/Mittelfranken/Oberbayern stb.)
4. **Klikk városra** → infokártya képpel + tudásmorzsával
5. Multi-language: DE, HU, RO, EN

Több térkép: Deutschland (kész), Magyarország, Románia (Erdély), USA, Európa.

## Asset inventory (USE THESE!)

A teljes asset-DB itt: `public/geo-assets-inventory.json`

### Coats of Arms (56 SVG, `/geo-images/coa_*.svg`)
- 9 db DE-* (Bundesländer): DE-BE, DE-BW, DE-HB, DE-HE, DE-MV, DE-NW, DE-RP, DE-SH, DE-TH
- 8 db EU-* (országok): EU-AD, EU-DE, EU-FR, EU-GB, EU-MC, EU-ME, EU-RO, EU-UA
- 19 db city-* (német városok): berlin, bielefeld, bonn, bremen, dortmund, dresden, duesseldorf, duisburg, essen, frankfurt, hannover, kiel, koeln, leipzig, mannheim, muenchen, muenster, nuernberg, stuttgart, wiesbaden, wuppertal
- 8 db hu-* (magyar városok): budapest, debrecen, holloko, kecskemet, miskolc, pecs, szekesfehervar, szombathely
- 1 hist (weimar), 1 island (helgoland), 1 lake (bodensee), 2 landmark (cologne-cathedral, wartburg), 2 mnt (arber, zugspitze), 3 river (main, mosel, rhein)

### Photos (140 fájl `.jpg/.webp/.png`, `/geo-images/`)
- **city-** (26): berlin, bielefeld, bochum, bremen, dortmund, dresden, duesseldorf, essen, frankfurt, hamburg, hannover, karlsruhe, kiel, koeln, leipzig, luebeck, mannheim, muenchen, muenster, nuernberg, paris, **pécs**, stuttgart, **szeged**, wiesbaden, wuppertal
- **hu-** (15): badacsony, budapest, bukk, danube, drava, gyor, holloko, kecskemet, mecsek, miskolc, pecs, szeged, szombathely, tisza-t (Tisza-tó), velence
- **ro-** (7): bran, bucharest, danube, monasteries, peles, razim, siret
- **us-** (12): boston, chicago, elbert, houston, la, liberty, mississippi, missouri, rainier, saltlake, seattle, superior
- **river-** (13): danube, donau, duna, isar, main, mosel, neckar, oder, rhein, spree, tisza, volga, weser (3 nyelven ugyanaz: Danube/Donau/Duna)
- **hist-** (11): checkpoint-charlie, hambach, iron-curtain, luebeck, magdeburg, muenster-peace, nuernberg-trials, potsdam, speyer, teutoburg, weimar
- **mnt-** (5): arber, dollberg, grosserfeldberg, kahlerasten, wasserkuppe
- **landmark-** (5): cologne-cathedral, heidelberg-castle, neuschwanstein, schwarzwald, wartburg
- **lake-** (5): ammersee, bodensee, chiemsee, mueritz, starnberg
- **island-** (5): borkum, fehmarn, ruegen, sylt, usedom
- **EU-** (16): AD, AL, AT, BY, DE, ES, FR, GB, IT, KV, MC, ME, MT, PL, PT, RO, SM, UA
- **HU-megyék** (6): HU-BE, HU-BU, HU-HE, HU-PE, HU-TO, HU-VE
- **geo-** (2): mittelgebirge, tiefland
- **germany-** (1): germany-full

### Audio (19 fájl `.ogg`, `/geo-audio/`)
- 4 német város kiejtés: koeln, leipzig, muenchen, stuttgart
- 9 EU országkód kiejtés: DE, FI, FR, IE, MT, NO, RU, SE, UA
- 5 magyar: balaton, budapest, debrecen, miskolc, parliament

## Mit kell csinálnod (Gemini feladat)

### 1. SVG térkép path-ok generálása

A meglévő coa-k alapján tudod milyen országokra/régiókra/városokra van adat. Generálj:
- `lib/visualLab/maps/deutschland.svg.ts` — 16 Bundesland path-ok (id-vel: `DE-BE` stb.)
- `lib/visualLab/maps/bayern.svg.ts` — Bayern régiók (Unterfranken, Mittelfranken, Oberbayern, Niederbayern, Oberpfalz, Schwaben, Oberfranken)
- `lib/visualLab/maps/magyarorszag.svg.ts` — magyar megyék (HU-BE Békés, HU-BU Budapest, HU-HE Heves, HU-PE Pest, HU-TO Tolna, HU-VE Veszprém — meglévő coa-k szerint, vagy mind 19 megye)
- `lib/visualLab/maps/erdely.svg.ts` — Erdély/Bukovina régió Románia
- `lib/visualLab/maps/europa.svg.ts` — európai országok (a meglévő EU-* coa-k)
- `lib/visualLab/maps/usa.svg.ts` — USA államok (a meglévő us-* helyszínek alapján)

Forrás: Google Maps API / Wikipedia / GeoJSON public sources.

### 2. City/POI database

Egy fájlba a meglévő coa-k és photos alapján:
- `lib/visualLab/data/poi.ts` — minden POI (Point of Interest)

```ts
type POI = {
  id: string;              // pl. "city-muenchen", "river-rhein"
  type: "city" | "river" | "mountain" | "lake" | "island" | "landmark" | "historical" | "country" | "region";
  parent: string;          // pl. "DE-BY" (Bayern), "DE", "EU"
  coords: [lon: number, lat: number];
  name: { de: string; hu: string; ro: string; en: string };
  description: { de: string; hu: string; ro: string; en: string };
  facts: { de: string[]; hu: string[]; ro: string[]; en: string[] };  // tudásmorzsák
  image?: string;          // pl. "/geo-images/city-muenchen.jpg" (csak ha létezik az inventory-ban)
  coa?: string;            // pl. "/geo-images/coa_city-muenchen.svg"
  audio?: string;          // pl. "/geo-audio/city-muenchen.ogg"
};
```

A meglévő 196 fájl alapján generáld a POI listát. Ahol nincs kép, hagyd üresen — NE generálj újat a meglévő nélkül.

### 3. Subject layer config

Ugyanaz a térkép különböző tantárgyaknál más POI-kat mutat:
- `lib/visualLab/data/layers.ts`

```ts
type SubjectLayer = {
  subject: "geographie" | "geschichte" | "sachkunde";
  poiTypes: POI["type"][];  // pl. geschichte → ["historical", "landmark"], geographie → ["city", "river", "mountain", "lake", "island"]
};
```

### 4. NE csináld a komponenst!

Az `<InteractiveMap>` React komponens, drill-down logika, kártya overlay — ezt **Claude (én) csinálom** Plizio mintákhoz illesztve. Te csak az adatot adod (SVG path-ok + JSON DB).

## Output format

A te output-od **3 fájl**:
1. `lib/visualLab/maps/*.svg.ts` — SVG path-ok TypeScript export-ként
2. `lib/visualLab/data/poi.ts` — POI database
3. `lib/visualLab/data/layers.ts` — Subject layer config

## Style/Színek (követd a Plizio brand-et)

- Háttér: `bg-[#020408]` vagy `bg-[#0A0A1A]` (dark space)
- Outline: cián `#06B6D4` vagy `#22D3EE`
- Hover: cyan glow
- Text: `text-white/80` fő, `text-white/60` másodlagos
- Font: szabványos sans

## Fontos szabályok

1. **NE generálj új képet** ha már van a `geo-images/`-ban — használd amit látsz az inventory-ban
2. **Multi-language** mindenhol: DE/HU/RO/EN
3. **Meglévő ID-konvenciókat tartsd be**: `DE-BY`, `EU-DE`, `city-muenchen`, `river-rhein` stb.
4. **GPS koordináták** valós (Google Maps / Wikipedia adatok)
5. **Kérdezz** ha bizonytalan vagy egy adatban (pl. egy POI tényleg létezett-e a régiben)

## Időkeret

A user mondta: te gyors vagy ezzel, néhány óra alatt összerakod. A komponens munka én csinálom közben — összekapcsoljuk amikor mindketten készek.
