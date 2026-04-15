# Visual Lab — SEO landing oldalak (Codex task)

## Kontextus

A Visual Lab Deutschland tanuló-térkép működik (`lib/visualLab/`). ~150 POI-val,
4 nyelven (de/hu/ro/en), ~240 képpel és audio-val, pontos GeoJSON alapú határokkal.

Az **interaktív térkép** (kliens-oldali React) nem optimális SEO-hoz — Google
csak a kezdő HTML-t látja. Ahhoz hogy a tartalom rangsoroljon, külön statikus
HTML landing oldalak kellenek minden POI-hoz, minden nyelven.

Ez **Phase 6** a Visual Lab projektben — végső fázis, miután minden tartalom
dúsan feltöltött (jelenlegi állapot).

---

## Goal

Generálj **~640 statikus HTML oldalt** (140 POI × 4 nyelv + 16 állam × 4 + 4 ország-oldal):

### URL struktúra

Per-nyelv eltérő slug-okkal (SEO-optimalizálva):

| Nyelv | Ország slug | Hreflang |
|-------|-------------|----------|
| de    | `/de/deutschland/` | de |
| hu    | `/hu/nemetorszag/` | hu |
| ro    | `/ro/germania/` | ro |
| en    | `/en/germany/` | en |

Példák:
- `/de/deutschland/bayern/muenchen/`
- `/hu/nemetorszag/bajororszag/munchen/`
- `/ro/germania/bavaria/munchen/`
- `/en/germany/bavaria/munich/`

Bundesland és POI slug szintén nyelv-specifikus amennyire lehetséges (németül
a natív név, magyarul magyar megfelelő ha van, egyébként a német).

### Routing

Next.js App Router, `output: "export"`. Dynamic route-ok:

```
app/
  [lang]/
    [country]/
      page.tsx                    // ország oldal
      [state]/
        page.tsx                  // Bundesland oldal (16× per lang)
        [poi]/
          page.tsx                // POI oldal (~140× per lang)
```

`generateStaticParams()` minden szinten visszaadja az összes paraméter-
kombinációt a `lib/visualLab/data/poi.ts` adatokból.

`generateMetadata()` dinamikusan kitölti a title/description/og/twitter/
hreflang metákat.

---

## Implementáció

### 1. URL slug-ok (`lib/seo/slugs.ts`)

Hozz létre egy központi slug-map-et:

```ts
type Lang = "de" | "hu" | "ro" | "en";

export const COUNTRY_SLUGS: Record<Lang, string> = {
  de: "deutschland", hu: "nemetorszag", ro: "germania", en: "germany"
};

// State slugs — natural name in each language
export const STATE_SLUGS: Record<string, Record<Lang, string>> = {
  "DE-BY": { de: "bayern", hu: "bajororszag", ro: "bavaria", en: "bavaria" },
  "DE-BW": { de: "baden-wuerttemberg", hu: "baden-wurttemberg", ro: "baden-wurttemberg", en: "baden-wurttemberg" },
  // ... all 16
};

// POI slug — use localized name when available, fallback to ID
export function poiSlug(poi: POI, lang: Lang): string {
  const name = poi.name[lang] ?? poi.name.de;
  return slugify(name);
}
```

### 2. Országos oldal (`app/[lang]/[country]/page.tsx`)

Tartalom:
- H1: "Németország interaktív térképe" (nyelvre lokalizálva)
- Hero: Deutschland SVG (a meglévő `deutschlandMap`) inline renderelve, kattintható állami link-ekkel (minden Bundesland mutat a saját oldalára)
- 16 Bundesland kártya rácsban, mindegyik: név + címer + rövid leírás + link
- Bevezető bekezdés (`description` a `regions` tömbből, DE entry)
- Structured data: `Country` JSON-LD
- Breadcrumb: Home › Németország
- Hreflang link a 4 nyelvre

### 3. Állam oldal (`app/[lang]/[country]/[state]/page.tsx`)

Tartalom:
- H1: Bundesland neve (lang-lokalizálva)
- Hero: Bundesland SVG drill-down a `bundeslandSubregions.ts`-ből
- Adatok: főváros, terület, lakosság (ezeket a `regions` entry `facts`-ból, vagy új mezők: `area`, `population`)
- POI kategóriák szekciói:
  - Városok (ebben az államban)
  - Természeti (folyók, hegyek, tavak, szigetek ami a parent=state-re szűr)
  - Történelmi helyek
  - Nevezetességek
  Minden kategóriában kártyák link-kel a POI oldalra
- Structured data: `AdministrativeArea` JSON-LD
- Breadcrumb: Home › Németország › Bajorország

### 4. POI oldal (`app/[lang]/[country]/[state]/[poi]/page.tsx`)

Ez a **legfontosabb SEO-oldal**:
- H1: POI neve
- Hero kép: `image` nagy méretben, alt-text-tel
- Címer (`coa`) kis ikonként
- Audio player: `audio` kiejtés + `aria-label`
- Leírás 2-3 bekezdés (`description` + `descriptionAdvanced` ha van)
- Facts bullet-lista (`facts`)
- Történelmi korszak (ha történelmi POI): `historyPeriod`, `historyYear`
- Geográfiai adatok (ha releváns): `elevation`, `length`, `area`
- GPS koordináták + "Megnyitás OpenStreetMap-en" link
- Kapcsolódó helyek: ugyanabban a Bundesland-ban lévő másik 4-6 POI
- "Vissza a térképre" gomb → `/astro-sachkunde/1/#vlab-<poi-id>` (belső link amit a Visual Lab komponens megért és kiemeli)
- Structured data: típusa szerint `Place`, `TouristAttraction`, `Mountain`, `RiverBodyOfWater`, `Museum`, `HistoricalPlace`
- Breadcrumb: Home › Németország › Bajorország › München

### 5. JSON-LD Structured Data (`components/seo/StructuredData.tsx`)

Egy komponens ami POI típusa alapján generál megfelelő schema.org JSON-LD-t:

```ts
type → schema.org
"state-capital" | "city" → "City"
"river" → "RiverBodyOfWater"
"mountain" → "Mountain"
"lake" → "BodyOfWater"
"island" → "Place" + additionalType "Island"
"landmark" → "TouristAttraction"
"historical" → "LandmarksOrHistoricalBuildings"
"forest" → "Place"
"sea" → "BodyOfWater"
```

Minden JSON-LD tartalmaz:
- `@context`, `@type`
- `name` (aktuális nyelven)
- `description`
- `image` (abszolút URL)
- `geo`: `{ @type: "GeoCoordinates", latitude, longitude }`
- `containedInPlace` (parent state)
- `inLanguage` (aktuális lang)

### 6. Breadcrumb JSON-LD (`components/seo/Breadcrumb.tsx`)

`BreadcrumbList` JSON-LD + visible breadcrumb nav.

### 7. Hreflang linkek (`components/seo/HreflangLinks.tsx`)

Minden oldalon 4 `<link rel="alternate" hreflang="de|hu|ro|en">` + 1 `x-default`.
Használd a POI ID-t a `slugs.ts`-ből az ekvivalens URL-ek felépítéséhez.

### 8. Sitemap (`app/sitemap.ts`)

Next.js beépített `MetadataRoute.Sitemap`. Generáld:
- 4 ország oldal (nyelvenként)
- 16 × 4 = 64 állam oldal
- 140 × 4 = 560 POI oldal
- **Összesen 628 URL**

Prioritás: country=1.0, state=0.8, POI=0.6. lastModified=build time.

### 9. Robots (`app/robots.ts`)

```ts
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://plizio.com/sitemap.xml",
  };
}
```

### 10. `generateMetadata` minden route-ban

- `title`: `<POI név> - <State> | Plizio Visual Lab`
- `description`: `<POI description> (aktuális nyelv, max 160 char)`
- `openGraph`: title, description, image (POI kép), url, locale
- `twitter`: card=summary_large_image, title, description, image
- `alternates`: { languages: { de: ..., hu: ..., ro: ..., en: ... } }

### 11. Stílus / UX

- Kövesd a Plizio dark-space stílust: `bg-[#020408]`, cián kiemelések, `text-white/80`
- Mobil-first (sok gyerek telefonon jön)
- Kép `next/image` helyett egyszerű `<img loading="lazy">` (static export kompatibilitás)
- Minden oldal legyen 1-2 sec alatt betöltődő

### 12. Integráció a meglévő Visual Lab-bal

A POI oldalakon egy "Térképen megtekintés" gomb:
- Link: `/astro-sachkunde/<grade>/?vlab=<poi-id>`
- A `VisualLab.tsx`-ben olvasd ki a `vlab` query paramot, nyisd meg a Deutschland Karte játékot és automatikusan selected legyen a POI

Másik irányban: a `VisualLab` InteractiveMap POI info-kártyáján "Bővebben" gomb → megy az adott POI SEO oldalára.

---

## Fájl-lista (becslés)

| Fájl | Sorok |
|------|-------|
| `app/[lang]/[country]/page.tsx` | 100 |
| `app/[lang]/[country]/[state]/page.tsx` | 150 |
| `app/[lang]/[country]/[state]/[poi]/page.tsx` | 200 |
| `lib/seo/slugs.ts` | 80 |
| `components/seo/StructuredData.tsx` | 100 |
| `components/seo/Breadcrumb.tsx` | 50 |
| `components/seo/HreflangLinks.tsx` | 30 |
| `components/seo/PoiGalleryCard.tsx` | 80 |
| `app/sitemap.ts` | 60 |
| `app/robots.ts` | 15 |
| `lib/seo/slugify.ts` | 30 |
| Visual Lab integráció (módosítások) | 50 |
| **Összesen** | **~945** |

---

## Kritikus szabályok

1. **Static export kompatibilis**: `output: "export"` van a `next.config.ts`-ben. NE használj dinamikus server-side featuret (`dynamic = "force-dynamic"`, cookies, headers). Minden `generateStaticParams`-szal buildelődik.
2. **NE használj `opengraph-image.tsx`-et** — a `next.config.ts` CLAUDE.md szabály tiltja static export-nál. Helyette `metadata.openGraph.images: [...]` static string URL-ekkel.
3. **`next/image` TILOS** static export-nál (vagy csak `unoptimized: true`-val).
4. **4 nyelv kötelező** minden oldalon — 4 `[lang]` variáns minden route-hoz.
5. **Slug-ütközés**: ha két POI azonos slug-ot generálna, append POI type prefix (pl. `rhein-river`).
6. **`npx next build`** sikerüljön — nem csak tsc.
7. **Ne bontsd el a meglévő Visual Lab-ot** — csak hozzáadsz oldalakat és egy kis integrációs pontot.
8. **Branch**: `recovery-base` (nincs új branch-re szükség).
9. **Dolgozz Windows gépen SSH-n át**: `User@100.109.55.70`, path: `C:\Users\User\plizio-repo`.

---

## Validáció

```bash
cd C:\Users\User\plizio-repo
npx tsc --noEmit                # 0 új error
npx next build                  # success
ls out/de/deutschland/bayern/muenchen/index.html  # létezik
cat out/sitemap.xml | head -20  # 628 URL
```

---

## Output

- ~12 új fájl, ~945 sor kód
- 4 × (1 + 16 + 140) = **628 statikus HTML** generálva a `out/` mappába
- Minden strukturált (JSON-LD), crawl-friendly, Google-lal együttműködő
- Plizio belső keresztlinkek Visual Lab <-> SEO oldalak között

---

## Időkeret

~1 nap munka. Javasolt sorrend:
1. Slug rendszer + static params (~2 óra)
2. POI oldal komponens (~3 óra)
3. State + country oldalak (~2 óra)
4. Structured data + metadata (~1 óra)
5. Sitemap + robots (~30 perc)
6. Integráció + tesztelés (~1 óra)
