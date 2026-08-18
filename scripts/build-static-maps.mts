// Multi-country static map generator — React-független standalone HTML per country.
// Output: public/<slug>-map-static/{index.html,de,hu,ro,en}/index.html
// Run:    node --experimental-strip-types scripts/build-static-maps.mts [iso|all]
import fs from "node:fs";
import path from "node:path";

type Lang = "de" | "hu" | "ro" | "en" | "it" | "es";
const CORE_LANGS: Lang[] = ["de", "hu", "ro", "en"];
const LANGS: Lang[] = [...CORE_LANGS, "it", "es"];

// Dedup blocklist — same set build-seo-index/split/generate-poi-html honor, so map
// markers never show a duplicate POI even if the pois/<ISO>.json is not yet re-split.
const DEDUP_BLOCK: Set<string> = (() => {
  try {
    return new Set<string>(JSON.parse(fs.readFileSync(
      path.resolve(process.cwd(), "lib/visualLab/data/_dedup_blocklist.json"), "utf8")));
  } catch { return new Set<string>(); }
})();

type Country = {
  iso: string;           // lowercase, matches /data/pois/<ISO>.json (uppercased)
  slug: string;          // URL slug = English country name
  svgFile: string;       // filename in lib/visualLab/maps/
  mapVar: string;        // exported region-paths array name
  vbVar: string;         // exported viewBox string name
  projFn: string;        // exported projectCoords function name
  names: Partial<Record<Lang, string>>;
  poiSourceIso?: string; // metro maps: load POIs from this country's JSON instead of <iso>.json
  poiParent?: string;    // metro maps: keep only POIs whose parent === this (e.g. "FR-IDF")
  excludeParents?: string[]; // country maps: drop POIs with these parents (moved to a metro map)
  metroLinks?: { mapSlug: string; lon: number; lat: number; names: Partial<Record<Lang, string>> }[]; // clickable markers -> sub-maps (metro/island)
  poiBBox?: BBox;          // sub-maps: keep only POIs whose coords fall in this box (parent-independent, catches mis-tagged POIs)
  excludeBBoxes?: BBox[];  // country maps: drop POIs inside these boxes (moved to a sub-map)
  zoomToPoiBBox?: boolean; // crop the viewBox to poiBBox (island/region zoom on a shared country SVG)
  islandRingsSlug?: string;   // island maps: refine poiBBox to POIs inside/near this island's coastline polygon
  excludeIslandSlugs?: string[]; // country maps: drop POIs inside/near these islands' polygons (routed to the island sub-map)
  parentMap?: string;         // sub-maps (island/metro): back button returns to /<parentMap>-map/ instead of "/"
};
type BBox = { minLon: number; maxLon: number; minLat: number; maxLat: number };
type SearchExtra = { id?: string; name: any; submap: string; coords?: [number, number] };
// Paris metro catchment (== parisMetro.svg.ts projection bbox). Used to keep IDF
// POIs on /paris-map/ and drop them from the France map regardless of (mis)parent.
const PARIS_BBOX: BBox = { minLon: 1.3597, maxLon: 3.6216, minLat: 48.0773, maxLat: 49.2750 };
function inBBox(coords: [number, number] | undefined, b: BBox): boolean {
  if (!coords || coords.length < 2) return false;
  const [lon, lat] = coords;
  return lon >= b.minLon && lon <= b.maxLon && lat >= b.minLat && lat <= b.maxLat;
}

// Island coastline polygons (lon/lat) for point-in-polygon POI assignment, so a
// POI on the mainland coast across the channel (inside the island's rough bbox)
// is NOT pulled onto the island map. Loaded from the generated _islandRings.ts.
let ISLAND_RINGS: Record<string, number[][][]> = {};
const ISLAND_BUF_DEG = 0.018; // ~2 km — include coast/harbour POIs just off the polygon
function pointInRing(lon: number, lat: number, ring: number[][]): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
    if (((yi > lat) !== (yj > lat)) && (lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi)) inside = !inside;
  }
  return inside;
}
function nearRings(coords: [number, number] | undefined, rings: number[][][] | undefined, buf: number): boolean {
  if (!coords || coords.length < 2 || !rings) return false;
  const [lon, lat] = coords;
  for (const ring of rings) if (pointInRing(lon, lat, ring)) return true;
  const k = Math.cos((lat * Math.PI) / 180); // lon is compressed at this latitude
  for (const ring of rings) {
    for (let i = 0; i < ring.length - 1; i++) {
      const ax = ring[i][0] * k, ay = ring[i][1], bx = ring[i + 1][0] * k, by = ring[i + 1][1];
      const px = lon * k, py = lat, dx = bx - ax, dy = by - ay;
      let t = dx || dy ? ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy) : 0;
      t = Math.max(0, Math.min(1, t));
      if (Math.hypot(px - (ax + t * dx), py - (ay + t * dy)) < buf) return true;
    }
  }
  return false;
}

// Croatian islands: each gets a zoomed sub-map (shared croatia.svg, cropped to the
// island bbox, POIs filtered by bbox). The Croatia map shows one clickable pin per
// island and excludes the island POIs (declutter + "enter the island").
const HR_ISLANDS: { slug: string; name: string; bbox: BBox; lon: number; lat: number; svg?: string }[] = [
  { slug: "krk",        name: "Krk",        bbox: { minLon: 14.45, maxLon: 14.80, minLat: 44.95, maxLat: 45.30 }, lon: 14.60, lat: 45.10, svg: "krk" },
  { slug: "cres",       name: "Cres",       bbox: { minLon: 14.18, maxLon: 14.46, minLat: 44.52, maxLat: 45.20 }, lon: 14.34, lat: 44.90 },
  { slug: "losinj",     name: "Lošinj",     bbox: { minLon: 14.34, maxLon: 14.56, minLat: 44.50, maxLat: 44.74 }, lon: 14.45, lat: 44.62 },
  { slug: "rab",        name: "Rab",        bbox: { minLon: 14.66, maxLon: 14.88, minLat: 44.68, maxLat: 44.84 }, lon: 14.77, lat: 44.76 },
  { slug: "pag",        name: "Pag",        bbox: { minLon: 14.83, maxLon: 15.22, minLat: 44.28, maxLat: 44.64 }, lon: 15.02, lat: 44.46 },
  { slug: "dugi-otok",  name: "Dugi Otok",  bbox: { minLon: 14.83, maxLon: 15.18, minLat: 43.86, maxLat: 44.14 }, lon: 15.00, lat: 44.00 },
  { slug: "ugljan",     name: "Ugljan i Pašman", bbox: { minLon: 14.98, maxLon: 15.46, minLat: 43.90, maxLat: 44.12 }, lon: 15.20, lat: 44.01 },
  { slug: "solta",      name: "Šolta",      bbox: { minLon: 16.18, maxLon: 16.44, minLat: 43.34, maxLat: 43.44 }, lon: 16.30, lat: 43.39 },
  { slug: "brac",       name: "Brač",       bbox: { minLon: 16.32, maxLon: 16.94, minLat: 43.22, maxLat: 43.42 }, lon: 16.63, lat: 43.32 },
  { slug: "hvar",       name: "Hvar",       bbox: { minLon: 16.33, maxLon: 17.22, minLat: 43.08, maxLat: 43.24 }, lon: 16.75, lat: 43.16, svg: "hvar" },
  { slug: "vis",        name: "Vis",        bbox: { minLon: 16.04, maxLon: 16.34, minLat: 42.96, maxLat: 43.12 }, lon: 16.19, lat: 43.04 },
  { slug: "korcula",    name: "Korčula",    bbox: { minLon: 16.64, maxLon: 17.16, minLat: 42.88, maxLat: 43.04 }, lon: 16.90, lat: 42.96 },
  { slug: "mljet",      name: "Mljet",      bbox: { minLon: 17.28, maxLon: 17.82, minLat: 42.68, maxLat: 42.84 }, lon: 17.55, lat: 42.76 },
  { slug: "murter",     name: "Murter",     bbox: { minLon: 15.57, maxLon: 15.66, minLat: 43.78, maxLat: 43.83 }, lon: 15.61, lat: 43.81 },
  { slug: "ciovo",      name: "Čiovo",      bbox: { minLon: 16.21, maxLon: 16.36, minLat: 43.48, maxLat: 43.53 }, lon: 16.29, lat: 43.51 },
  { slug: "lastovo",    name: "Lastovo",    bbox: { minLon: 16.82, maxLon: 16.96, minLat: 42.72, maxLat: 42.80 }, lon: 16.89, lat: 42.76 },
  { slug: "elafiti",    name: "Elafiti",    bbox: { minLon: 17.82, maxLon: 17.98, minLat: 42.66, maxLat: 42.76 }, lon: 17.90, lat: 42.71 },
];
const islandNames = (n: string): Partial<Record<Lang, string>> => ({ de: n, hu: n, ro: n, en: n });
// Auto-detect: if lib/visualLab/maps/<camel>.svg.ts exists (generated by
// _gen_island_svgs.py from OSM coastline), use that dedicated island SVG (real
// shape, own viewBox + projectIsland). Otherwise fall back to zooming the shared
// croatia.svg to the island bbox. New island SVGs activate automatically.
const ISLAND_MAPS_DIR = path.join(process.cwd(), "lib", "visualLab", "maps");
const islandCamel = (slug: string) => slug.replace(/-(.)/g, (_m, c) => c.toUpperCase());
const ISLAND_COUNTRIES: Country[] = HR_ISLANDS.map((i) => {
  const camel = islandCamel(i.slug);
  const hasSvg = fs.existsSync(path.join(ISLAND_MAPS_DIR, `${camel}.svg.ts`));
  return hasSvg
    ? {
        // Dedicated SVG: assign POIs by the actual coastline polygon (+buffer), not
        // the rough bbox — keeps mainland-coast POIs across the channel off the island.
        iso: i.slug, slug: i.slug, svgFile: `${camel}.svg.ts`, mapVar: `${camel}Map`, vbVar: `${camel}ViewBox`, projFn: "projectIsland",
        poiSourceIso: "HR", poiBBox: i.bbox, islandRingsSlug: i.slug, parentMap: "croatia", names: islandNames(i.name),
      }
    : {
        iso: i.slug, slug: i.slug, svgFile: "croatia.svg.ts", mapVar: "croatiaMap", vbVar: "croatiaViewBox", projFn: "projectCoordsHR",
        poiSourceIso: "HR", poiBBox: i.bbox, zoomToPoiBBox: true, parentMap: "croatia", names: islandNames(i.name),
      };
});
const HR_ISLAND_LINKS = HR_ISLANDS.map((i) => ({ mapSlug: i.slug, lon: i.lon, lat: i.lat, names: islandNames(i.name) }));
const HR_ISLAND_BBOXES = HR_ISLANDS.map((i) => i.bbox);

const COUNTRIES: Country[] = [
  { iso:"hr", slug:"croatia", svgFile:"croatia.svg.ts", mapVar:"croatiaMap", vbVar:"croatiaViewBox", projFn:"projectCoordsHR",
    metroLinks:HR_ISLAND_LINKS, excludeIslandSlugs:HR_ISLANDS.map(i => i.slug),
    names:{ de:"Kroatien", hu:"Horvátország", ro:"Croația", en:"Croatia" } },
  { iso:"hu", slug:"magyarorszag", svgFile:"magyarorszag.svg.ts", mapVar:"magyarorszagMap", vbVar:"magyarorszagViewBox", projFn:"projectCoordsHU",
    names:{ de:"Ungarn", hu:"Magyarország", ro:"Ungaria", en:"Hungary" } },
  { iso:"ro", slug:"romania", svgFile:"romania.svg.ts", mapVar:"romaniaMap", vbVar:"romaniaViewBox", projFn:"projectCoordsRO",
    names:{ de:"Rumänien", hu:"Románia", ro:"România", en:"Romania" } },
  { iso:"de", slug:"deutschland", svgFile:"deutschland.svg.ts", mapVar:"deutschlandMap", vbVar:"deutschlandViewBox", projFn:"projectCoords",
    names:{ de:"Deutschland", hu:"Németország", ro:"Germania", en:"Germany" } },
  { iso:"fr", slug:"france", svgFile:"france.svg.ts", mapVar:"franceMap", vbVar:"franceViewBox", projFn:"projectCoordsFR",
    excludeParents:["FR-IDF"], excludeBBoxes:[PARIS_BBOX],
    metroLinks:[{ mapSlug:"paris", lon:2.3522, lat:48.8566,
      names:{ de:"Paris (Großraum)", hu:"Párizs (nagyrégió)", ro:"Paris (zona metropolitană)", en:"Paris (metro area)" } }],
    names:{ de:"Frankreich", hu:"Franciaország", ro:"Franța", en:"France" } },
  // Metro map: Île-de-France (Paris) — departments background, POIs filtered by parent FR-IDF.
  { iso:"paris", slug:"paris", svgFile:"parisMetro.svg.ts", mapVar:"parisMetroMap", vbVar:"parisMetroViewBox", projFn:"projectCoordsParis",
    poiSourceIso:"FR", poiBBox:PARIS_BBOX, parentMap:"france",
    names:{ de:"Paris (Großraum)", hu:"Párizs (nagyrégió)", ro:"Paris (zona metropolitană)", en:"Paris (metro area)" } },
  { iso:"it", slug:"italy", svgFile:"italy.svg.ts", mapVar:"italyMap", vbVar:"italyViewBox", projFn:"projectCoordsIT",
    names:{ de:"Italien", hu:"Olaszország", ro:"Italia", en:"Italy", it:"Italia" } },
  { iso:"es", slug:"spain", svgFile:"spain.svg.ts", mapVar:"spainMap", vbVar:"spainViewBox", projFn:"projectCoordsES",
    names:{ de:"Spanien", hu:"Spanyolország", ro:"Spania", en:"Spain", es:"España" } },
  { iso:"pl", slug:"poland", svgFile:"poland.svg.ts", mapVar:"polandMap", vbVar:"polandViewBox", projFn:"projectCoordsPL",
    names:{ de:"Polen", hu:"Lengyelország", ro:"Polonia", en:"Poland" } },
  { iso:"gb", slug:"unitedkingdom", svgFile:"unitedkingdom.svg.ts", mapVar:"unitedkingdomMap", vbVar:"unitedkingdomViewBox", projFn:"projectCoordsUK",
    names:{ de:"Vereinigtes Königreich", hu:"Egyesült Királyság", ro:"Regatul Unit", en:"United Kingdom" } },
  { iso:"nl", slug:"netherlands", svgFile:"netherlands.svg.ts", mapVar:"netherlandsMap", vbVar:"netherlandsViewBox", projFn:"projectCoordsNL",
    names:{ de:"Niederlande", hu:"Hollandia", ro:"Țările de Jos", en:"Netherlands" } },
  { iso:"at", slug:"austria", svgFile:"austria.svg.ts", mapVar:"austriaMap", vbVar:"austriaViewBox", projFn:"projectCoordsAT",
    names:{ de:"Österreich", hu:"Ausztria", ro:"Austria", en:"Austria" } },
  { iso:"be", slug:"belgium", svgFile:"belgium.svg.ts", mapVar:"belgiumMap", vbVar:"belgiumViewBox", projFn:"projectCoordsBE",
    names:{ de:"Belgien", hu:"Belgium", ro:"Belgia", en:"Belgium" } },
  { iso:"pt", slug:"portugal", svgFile:"portugal.svg.ts", mapVar:"portugalMap", vbVar:"portugalViewBox", projFn:"projectCoordsPT",
    names:{ de:"Portugal", hu:"Portugália", ro:"Portugalia", en:"Portugal" } },
  { iso:"gr", slug:"greece", svgFile:"greece.svg.ts", mapVar:"greeceMap", vbVar:"greeceViewBox", projFn:"projectCoordsGR",
    names:{ de:"Griechenland", hu:"Görögország", ro:"Grecia", en:"Greece" } },
  { iso:"ie", slug:"ireland", svgFile:"ireland.svg.ts", mapVar:"irelandMap", vbVar:"irelandViewBox", projFn:"projectCoordsIE",
    names:{ de:"Irland", hu:"Írország", ro:"Irlanda", en:"Ireland" } },
  { iso:"dk", slug:"denmark", svgFile:"denmark.svg.ts", mapVar:"denmarkMap", vbVar:"denmarkViewBox", projFn:"projectCoordsDK",
    names:{ de:"Dänemark", hu:"Dánia", ro:"Danemarca", en:"Denmark" } },
  { iso:"se", slug:"sweden", svgFile:"sweden.svg.ts", mapVar:"swedenMap", vbVar:"swedenViewBox", projFn:"projectCoordsSE",
    names:{ de:"Schweden", hu:"Svédország", ro:"Suedia", en:"Sweden" } },
  { iso:"no", slug:"norway", svgFile:"norway.svg.ts", mapVar:"norwayMap", vbVar:"norwayViewBox", projFn:"projectCoordsNO",
    names:{ de:"Norwegen", hu:"Norvégia", ro:"Norvegia", en:"Norway" } },
  { iso:"fi", slug:"finland", svgFile:"finland.svg.ts", mapVar:"finlandMap", vbVar:"finlandViewBox", projFn:"projectCoordsFI",
    names:{ de:"Finnland", hu:"Finnország", ro:"Finlanda", en:"Finland" } },
  { iso:"ch", slug:"switzerland", svgFile:"switzerland.svg.ts", mapVar:"switzerlandMap", vbVar:"switzerlandViewBox", projFn:"projectCoordsCH",
    names:{ de:"Schweiz", hu:"Svájc", ro:"Elveția", en:"Switzerland" } },
  { iso:"cz", slug:"czech-republic", svgFile:"czechRepublic.svg.ts", mapVar:"czechRepublicMap", vbVar:"czechRepublicViewBox", projFn:"projectCoordsCZ",
    names:{ de:"Tschechien", hu:"Csehország", ro:"Cehia", en:"Czech Republic" } },
  { iso:"sk", slug:"slovakia", svgFile:"slovakia.svg.ts", mapVar:"slovakiaMap", vbVar:"slovakiaViewBox", projFn:"projectCoordsSK",
    names:{ de:"Slowakei", hu:"Szlovákia", ro:"Slovacia", en:"Slovakia" } },
  { iso:"si", slug:"slovenia", svgFile:"slovenia.svg.ts", mapVar:"sloveniaMap", vbVar:"sloveniaViewBox", projFn:"projectCoordsSI",
    names:{ de:"Slowenien", hu:"Szlovénia", ro:"Slovenia", en:"Slovenia" } },
  { iso:"bg", slug:"bulgaria", svgFile:"bulgaria.svg.ts", mapVar:"bulgariaMap", vbVar:"bulgariaViewBox", projFn:"projectCoordsBG",
    names:{ de:"Bulgarien", hu:"Bulgária", ro:"Bulgaria", en:"Bulgaria" } },
  { iso:"rs", slug:"serbia", svgFile:"serbia.svg.ts", mapVar:"serbiaMap", vbVar:"serbiaViewBox", projFn:"projectCoordsRS",
    names:{ de:"Serbien", hu:"Szerbia", ro:"Serbia", en:"Serbia" } },
  { iso:"ba", slug:"bosnia", svgFile:"bosnia.svg.ts", mapVar:"bosniaMap", vbVar:"bosniaViewBox", projFn:"projectCoordsBA",
    names:{ de:"Bosnien", hu:"Bosznia-Hercegovina", ro:"Bosnia și Herțegovina", en:"Bosnia and Herzegovina" } },
  { iso:"al", slug:"albania", svgFile:"albania.svg.ts", mapVar:"albaniaMap", vbVar:"albaniaViewBox", projFn:"projectCoordsAL",
    names:{ de:"Albanien", hu:"Albánia", ro:"Albania", en:"Albania" } },
  { iso:"me", slug:"montenegro", svgFile:"montenegro.svg.ts", mapVar:"montenegroMap", vbVar:"montenegroViewBox", projFn:"projectCoordsME",
    names:{ de:"Montenegro", hu:"Montenegró", ro:"Muntenegru", en:"Montenegro" } },
  { iso:"mk", slug:"northmacedonia", svgFile:"northmacedonia.svg.ts", mapVar:"northmacedoniaMap", vbVar:"northmacedoniaViewBox", projFn:"projectCoordsMK",
    names:{ de:"Nordmazedonien", hu:"Észak-Macedónia", ro:"Macedonia de Nord", en:"North Macedonia" } },
  { iso:"xk", slug:"kosovo", svgFile:"kosovo.svg.ts", mapVar:"kosovoMap", vbVar:"kosovoViewBox", projFn:"projectCoordsXK",
    names:{ de:"Kosovo", hu:"Koszovó", ro:"Kosovo", en:"Kosovo" } },
  { iso:"md", slug:"moldova", svgFile:"moldova.svg.ts", mapVar:"moldovaMap", vbVar:"moldovaViewBox", projFn:"projectCoordsMD",
    names:{ de:"Moldau", hu:"Moldova", ro:"Republica Moldova", en:"Moldova" } },
  { iso:"ua", slug:"ukraine", svgFile:"ukraine.svg.ts", mapVar:"ukraineMap", vbVar:"ukraineViewBox", projFn:"projectCoordsUA",
    names:{ de:"Ukraine", hu:"Ukrajna", ro:"Ucraina", en:"Ukraine" } },
  { iso:"by", slug:"belarus", svgFile:"belarus.svg.ts", mapVar:"belarusMap", vbVar:"belarusViewBox", projFn:"projectCoordsBY",
    names:{ de:"Belarus", hu:"Belarusz", ro:"Belarus", en:"Belarus" } },
  { iso:"lt", slug:"lithuania", svgFile:"lithuania.svg.ts", mapVar:"lithuaniaMap", vbVar:"lithuaniaViewBox", projFn:"projectCoordsLT",
    names:{ de:"Litauen", hu:"Litvánia", ro:"Lituania", en:"Lithuania" } },
  { iso:"lv", slug:"latvia", svgFile:"latvia.svg.ts", mapVar:"latviaMap", vbVar:"latviaViewBox", projFn:"projectCoordsLV",
    names:{ de:"Lettland", hu:"Lettország", ro:"Letonia", en:"Latvia" } },
  { iso:"ee", slug:"estonia", svgFile:"estonia.svg.ts", mapVar:"estoniaMap", vbVar:"estoniaViewBox", projFn:"projectCoordsEE",
    names:{ de:"Estland", hu:"Észtország", ro:"Estonia", en:"Estonia" } },
  { iso:"is", slug:"iceland", svgFile:"iceland.svg.ts", mapVar:"icelandMap", vbVar:"icelandViewBox", projFn:"projectCoordsIS",
    names:{ de:"Island", hu:"Izland", ro:"Islanda", en:"Iceland" } },
  { iso:"mt", slug:"malta", svgFile:"malta.svg.ts", mapVar:"maltaMap", vbVar:"maltaViewBox", projFn:"projectCoordsMT",
    names:{ de:"Malta", hu:"Málta", ro:"Malta", en:"Malta" } },
  { iso:"cy", slug:"cyprus", svgFile:"cyprus.svg.ts", mapVar:"cyprusMap", vbVar:"cyprusViewBox", projFn:"projectCoordsCY",
    names:{ de:"Zypern", hu:"Ciprus", ro:"Cipru", en:"Cyprus" } },
  { iso:"lu", slug:"luxembourg", svgFile:"luxembourg.svg.ts", mapVar:"luxembourgMap", vbVar:"luxembourgViewBox", projFn:"projectCoordsLU",
    names:{ de:"Luxemburg", hu:"Luxemburg", ro:"Luxemburg", en:"Luxembourg" } },
  { iso:"ad", slug:"andorra", svgFile:"andorra.svg.ts", mapVar:"andorraMap", vbVar:"andorraViewBox", projFn:"projectCoordsAD",
    names:{ de:"Andorra", hu:"Andorra", ro:"Andorra", en:"Andorra" } },
  { iso:"mc", slug:"monaco", svgFile:"monaco.svg.ts", mapVar:"monacoMap", vbVar:"monacoViewBox", projFn:"projectCoordsMC",
    names:{ de:"Monaco", hu:"Monaco", ro:"Monaco", en:"Monaco" } },
  { iso:"sm", slug:"sanmarino", svgFile:"sanmarino.svg.ts", mapVar:"sanmarinoMap", vbVar:"sanmarinoViewBox", projFn:"projectCoordsSM",
    names:{ de:"San Marino", hu:"San Marino", ro:"San Marino", en:"San Marino" } },
  { iso:"va", slug:"vatican", svgFile:"vatican.svg.ts", mapVar:"vaticanMap", vbVar:"vaticanViewBox", projFn:"projectCoordsVA",
    names:{ de:"Vatikan", hu:"Vatikán", ro:"Vatican", en:"Vatican" } },
  { iso:"li", slug:"liechtenstein", svgFile:"liechtenstein.svg.ts", mapVar:"liechtensteinMap", vbVar:"liechtensteinViewBox", projFn:"projectCoordsLI",
    names:{ de:"Liechtenstein", hu:"Liechtenstein", ro:"Liechtenstein", en:"Liechtenstein" } },

  // === North America (2026-05-27) ===
  { iso:"us", slug:"usa", svgFile:"usa.svg.ts", mapVar:"usaMap", vbVar:"usaViewBox", projFn:"projectCoordsUS",
    names:{ de:"USA", hu:"Egyesült Államok", ro:"SUA", en:"United States" } },
  { iso:"ca", slug:"canada", svgFile:"canada.svg.ts", mapVar:"canadaMap", vbVar:"canadaViewBox", projFn:"projectCoordsCA",
    names:{ de:"Kanada", hu:"Kanada", ro:"Canada", en:"Canada" } },
  { iso:"mx", slug:"mexico", svgFile:"mexico.svg.ts", mapVar:"mexicoMap", vbVar:"mexicoViewBox", projFn:"projectCoordsMX",
    names:{ de:"Mexiko", hu:"Mexikó", ro:"Mexic", en:"Mexico" } },
  { iso:"gt", slug:"guatemala", svgFile:"guatemala.svg.ts", mapVar:"guatemalaMap", vbVar:"guatemalaViewBox", projFn:"projectCoordsGT",
    names:{ de:"Guatemala", hu:"Guatemala", ro:"Guatemala", en:"Guatemala" } },
  { iso:"hn", slug:"honduras", svgFile:"honduras.svg.ts", mapVar:"hondurasMap", vbVar:"hondurasViewBox", projFn:"projectCoordsHN",
    names:{ de:"Honduras", hu:"Honduras", ro:"Honduras", en:"Honduras" } },
  { iso:"sv", slug:"elsalvador", svgFile:"elsalvador.svg.ts", mapVar:"elsalvadorMap", vbVar:"elsalvadorViewBox", projFn:"projectCoordsSV",
    names:{ de:"El Salvador", hu:"Salvador", ro:"El Salvador", en:"El Salvador" } },
  { iso:"ni", slug:"nicaragua", svgFile:"nicaragua.svg.ts", mapVar:"nicaraguaMap", vbVar:"nicaraguaViewBox", projFn:"projectCoordsNI",
    names:{ de:"Nicaragua", hu:"Nicaragua", ro:"Nicaragua", en:"Nicaragua" } },
  { iso:"cr", slug:"costarica", svgFile:"costarica.svg.ts", mapVar:"costaricaMap", vbVar:"costaricaViewBox", projFn:"projectCoordsCR",
    names:{ de:"Costa Rica", hu:"Costa Rica", ro:"Costa Rica", en:"Costa Rica" } },
  { iso:"pa", slug:"panama", svgFile:"panama.svg.ts", mapVar:"panamaMap", vbVar:"panamaViewBox", projFn:"projectCoordsPA",
    names:{ de:"Panama", hu:"Panama", ro:"Panama", en:"Panama" } },
  { iso:"bz", slug:"belize", svgFile:"belize.svg.ts", mapVar:"belizeMap", vbVar:"belizeViewBox", projFn:"projectCoordsBZ",
    names:{ de:"Belize", hu:"Belize", ro:"Belize", en:"Belize" } },
  { iso:"cu", slug:"cuba", svgFile:"cuba.svg.ts", mapVar:"cubaMap", vbVar:"cubaViewBox", projFn:"projectCoordsCU",
    names:{ de:"Kuba", hu:"Kuba", ro:"Cuba", en:"Cuba" } },
  { iso:"jm", slug:"jamaica", svgFile:"jamaica.svg.ts", mapVar:"jamaicaMap", vbVar:"jamaicaViewBox", projFn:"projectCoordsJM",
    names:{ de:"Jamaika", hu:"Jamaica", ro:"Jamaica", en:"Jamaica" } },
  { iso:"ht", slug:"haiti", svgFile:"haiti.svg.ts", mapVar:"haitiMap", vbVar:"haitiViewBox", projFn:"projectCoordsHT",
    names:{ de:"Haiti", hu:"Haiti", ro:"Haiti", en:"Haiti" } },
  { iso:"do", slug:"dominicanrepublic", svgFile:"dominicanrepublic.svg.ts", mapVar:"dominicanrepublicMap", vbVar:"dominicanrepublicViewBox", projFn:"projectCoordsDO",
    names:{ de:"Dominikanische Republik", hu:"Dominikai Köztársaság", ro:"Republica Dominicană", en:"Dominican Republic" } },
  { iso:"bs", slug:"bahamas", svgFile:"bahamas.svg.ts", mapVar:"bahamasMap", vbVar:"bahamasViewBox", projFn:"projectCoordsBS",
    names:{ de:"Bahamas", hu:"Bahama-szigetek", ro:"Bahamas", en:"Bahamas" } },
  { iso:"tt", slug:"trinidad", svgFile:"trinidad.svg.ts", mapVar:"trinidadMap", vbVar:"trinidadViewBox", projFn:"projectCoordsTT",
    names:{ de:"Trinidad", hu:"Trinidad", ro:"Trinidad", en:"Trinidad" } },

  // === South America (2026-05-27) ===
  { iso:"ar", slug:"argentina", svgFile:"argentina.svg.ts", mapVar:"argentinaMap", vbVar:"argentinaViewBox", projFn:"projectCoordsAR",
    names:{ de:"Argentinien", hu:"Argentína", ro:"Argentina", en:"Argentina" } },
  { iso:"bo", slug:"bolivia", svgFile:"bolivia.svg.ts", mapVar:"boliviaMap", vbVar:"boliviaViewBox", projFn:"projectCoordsBO",
    names:{ de:"Bolivien", hu:"Bolívia", ro:"Bolivia", en:"Bolivia" } },
  { iso:"br", slug:"brazil", svgFile:"brazil.svg.ts", mapVar:"brazilMap", vbVar:"brazilViewBox", projFn:"projectCoordsBR",
    names:{ de:"Brasilien", hu:"Brazília", ro:"Brazilia", en:"Brazil" } },
  { iso:"cl", slug:"chile", svgFile:"chile.svg.ts", mapVar:"chileMap", vbVar:"chileViewBox", projFn:"projectCoordsCL",
    names:{ de:"Chile", hu:"Chile", ro:"Chile", en:"Chile" } },
  { iso:"co", slug:"colombia", svgFile:"colombia.svg.ts", mapVar:"colombiaMap", vbVar:"colombiaViewBox", projFn:"projectCoordsCO",
    names:{ de:"Kolumbien", hu:"Kolumbia", ro:"Columbia", en:"Colombia" } },
  { iso:"ec", slug:"ecuador", svgFile:"ecuador.svg.ts", mapVar:"ecuadorMap", vbVar:"ecuadorViewBox", projFn:"projectCoordsEC",
    names:{ de:"Ecuador", hu:"Ecuador", ro:"Ecuador", en:"Ecuador" } },
  { iso:"gy", slug:"guyana", svgFile:"guyana.svg.ts", mapVar:"guyanaMap", vbVar:"guyanaViewBox", projFn:"projectCoordsGY",
    names:{ de:"Guyana", hu:"Guyana", ro:"Guyana", en:"Guyana" } },
  { iso:"py", slug:"paraguay", svgFile:"paraguay.svg.ts", mapVar:"paraguayMap", vbVar:"paraguayViewBox", projFn:"projectCoordsPY",
    names:{ de:"Paraguay", hu:"Paraguay", ro:"Paraguay", en:"Paraguay" } },
  { iso:"pe", slug:"peru", svgFile:"peru.svg.ts", mapVar:"peruMap", vbVar:"peruViewBox", projFn:"projectCoordsPE",
    names:{ de:"Peru", hu:"Peru", ro:"Peru", en:"Peru" } },
  { iso:"sr", slug:"suriname", svgFile:"suriname.svg.ts", mapVar:"surinameMap", vbVar:"surinameViewBox", projFn:"projectCoordsSR",
    names:{ de:"Suriname", hu:"Suriname", ro:"Suriname", en:"Suriname" } },
  { iso:"uy", slug:"uruguay", svgFile:"uruguay.svg.ts", mapVar:"uruguayMap", vbVar:"uruguayViewBox", projFn:"projectCoordsUY",
    names:{ de:"Uruguay", hu:"Uruguay", ro:"Uruguay", en:"Uruguay" } },
  { iso:"ve", slug:"venezuela", svgFile:"venezuela.svg.ts", mapVar:"venezuelaMap", vbVar:"venezuelaViewBox", projFn:"projectCoordsVE",
    names:{ de:"Venezuela", hu:"Venezuela", ro:"Venezuela", en:"Venezuela" } },

  // === Africa (2026-05-27) ===
  { iso:"dz", slug:"algeria", svgFile:"algeria.svg.ts", mapVar:"algeriaMap", vbVar:"algeriaViewBox", projFn:"projectCoordsDZ",
    names:{ de:"Algerien", hu:"Algéria", ro:"Algeria", en:"Algeria" } },
  { iso:"ao", slug:"angola", svgFile:"angola.svg.ts", mapVar:"angolaMap", vbVar:"angolaViewBox", projFn:"projectCoordsAO",
    names:{ de:"Angola", hu:"Angola", ro:"Angola", en:"Angola" } },
  { iso:"bj", slug:"benin", svgFile:"benin.svg.ts", mapVar:"beninMap", vbVar:"beninViewBox", projFn:"projectCoordsBJ",
    names:{ de:"Benin", hu:"Benin", ro:"Benin", en:"Benin" } },
  { iso:"bw", slug:"botswana", svgFile:"botswana.svg.ts", mapVar:"botswanaMap", vbVar:"botswanaViewBox", projFn:"projectCoordsBW",
    names:{ de:"Botswana", hu:"Botswana", ro:"Botswana", en:"Botswana" } },
  { iso:"bf", slug:"burkinafaso", svgFile:"burkinafaso.svg.ts", mapVar:"burkinafasoMap", vbVar:"burkinafasoViewBox", projFn:"projectCoordsBF",
    names:{ de:"Burkina Faso", hu:"Burkina Faso", ro:"Burkina Faso", en:"Burkina Faso" } },
  { iso:"bi", slug:"burundi", svgFile:"burundi.svg.ts", mapVar:"burundiMap", vbVar:"burundiViewBox", projFn:"projectCoordsBI",
    names:{ de:"Burundi", hu:"Burundi", ro:"Burundi", en:"Burundi" } },
  { iso:"cm", slug:"cameroon", svgFile:"cameroon.svg.ts", mapVar:"cameroonMap", vbVar:"cameroonViewBox", projFn:"projectCoordsCM",
    names:{ de:"Kamerun", hu:"Kamerun", ro:"Camerun", en:"Cameroon" } },
  { iso:"cv", slug:"capeverde", svgFile:"capeverde.svg.ts", mapVar:"capeverdeMap", vbVar:"capeverdeViewBox", projFn:"projectCoordsCV",
    names:{ de:"Kap Verde", hu:"Zöld-foki-szigetek", ro:"Capul Verde", en:"Cape Verde" } },
  { iso:"cf", slug:"centralafricanrepublic", svgFile:"centralafricanrepublic.svg.ts", mapVar:"centralafricanrepublicMap", vbVar:"centralafricanrepublicViewBox", projFn:"projectCoordsCF",
    names:{ de:"Zentralafrikanische Republik", hu:"Közép-afrikai Köztársaság", ro:"Republica Centrafricană", en:"Central African Republic" } },
  { iso:"td", slug:"chad", svgFile:"chad.svg.ts", mapVar:"chadMap", vbVar:"chadViewBox", projFn:"projectCoordsTD",
    names:{ de:"Tschad", hu:"Csád", ro:"Ciad", en:"Chad" } },
  { iso:"km", slug:"comoros", svgFile:"comoros.svg.ts", mapVar:"comorosMap", vbVar:"comorosViewBox", projFn:"projectCoordsKM",
    names:{ de:"Komoren", hu:"Comore-szigetek", ro:"Comore", en:"Comoros" } },
  { iso:"cg", slug:"congo", svgFile:"congo.svg.ts", mapVar:"congoMap", vbVar:"congoViewBox", projFn:"projectCoordsCG",
    names:{ de:"Kongo", hu:"Kongó", ro:"Congo", en:"Congo" } },
  { iso:"cd", slug:"drcongo", svgFile:"drcongo.svg.ts", mapVar:"drcongoMap", vbVar:"drcongoViewBox", projFn:"projectCoordsCD",
    names:{ de:"DR Kongo", hu:"Kongói DK", ro:"RD Congo", en:"DR Congo" } },
  { iso:"dj", slug:"djibouti", svgFile:"djibouti.svg.ts", mapVar:"djiboutiMap", vbVar:"djiboutiViewBox", projFn:"projectCoordsDJ",
    names:{ de:"Dschibuti", hu:"Dzsibuti", ro:"Djibouti", en:"Djibouti" } },
  { iso:"eg", slug:"egypt", svgFile:"egypt.svg.ts", mapVar:"egyptMap", vbVar:"egyptViewBox", projFn:"projectCoordsEG",
    names:{ de:"Ägypten", hu:"Egyiptom", ro:"Egipt", en:"Egypt" } },
  { iso:"gq", slug:"equatorialguinea", svgFile:"equatorialguinea.svg.ts", mapVar:"equatorialguineaMap", vbVar:"equatorialguineaViewBox", projFn:"projectCoordsGQ",
    names:{ de:"Äquatorialguinea", hu:"Egyenlítői-Guinea", ro:"Guineea Ecuatorială", en:"Equatorial Guinea" } },
  { iso:"er", slug:"eritrea", svgFile:"eritrea.svg.ts", mapVar:"eritreaMap", vbVar:"eritreaViewBox", projFn:"projectCoordsER",
    names:{ de:"Eritrea", hu:"Eritrea", ro:"Eritreea", en:"Eritrea" } },
  { iso:"sz", slug:"eswatini", svgFile:"eswatini.svg.ts", mapVar:"eswatiniMap", vbVar:"eswatiniViewBox", projFn:"projectCoordsSZ",
    names:{ de:"Eswatini", hu:"Eswatini", ro:"Eswatini", en:"Eswatini" } },
  { iso:"et", slug:"ethiopia", svgFile:"ethiopia.svg.ts", mapVar:"ethiopiaMap", vbVar:"ethiopiaViewBox", projFn:"projectCoordsET",
    names:{ de:"Äthiopien", hu:"Etiópia", ro:"Etiopia", en:"Ethiopia" } },
  { iso:"ga", slug:"gabon", svgFile:"gabon.svg.ts", mapVar:"gabonMap", vbVar:"gabonViewBox", projFn:"projectCoordsGA",
    names:{ de:"Gabun", hu:"Gabon", ro:"Gabon", en:"Gabon" } },
  { iso:"gm", slug:"gambia", svgFile:"gambia.svg.ts", mapVar:"gambiaMap", vbVar:"gambiaViewBox", projFn:"projectCoordsGM",
    names:{ de:"Gambia", hu:"Gambia", ro:"Gambia", en:"Gambia" } },
  { iso:"gh", slug:"ghana", svgFile:"ghana.svg.ts", mapVar:"ghanaMap", vbVar:"ghanaViewBox", projFn:"projectCoordsGH",
    names:{ de:"Ghana", hu:"Ghána", ro:"Ghana", en:"Ghana" } },
  { iso:"gn", slug:"guinea", svgFile:"guinea.svg.ts", mapVar:"guineaMap", vbVar:"guineaViewBox", projFn:"projectCoordsGN",
    names:{ de:"Guinea", hu:"Guinea", ro:"Guineea", en:"Guinea" } },
  { iso:"gw", slug:"guineabissau", svgFile:"guineabissau.svg.ts", mapVar:"guineabissauMap", vbVar:"guineabissauViewBox", projFn:"projectCoordsGW",
    names:{ de:"Guinea-Bissau", hu:"Bissau-Guinea", ro:"Guineea-Bissau", en:"Guinea-Bissau" } },
  { iso:"ci", slug:"ivorycoast", svgFile:"ivorycoast.svg.ts", mapVar:"ivorycoastMap", vbVar:"ivorycoastViewBox", projFn:"projectCoordsCI",
    names:{ de:"Elfenbeinküste", hu:"Elefántcsontpart", ro:"Coasta de Fildeș", en:"Ivory Coast" } },
  { iso:"ke", slug:"kenya", svgFile:"kenya.svg.ts", mapVar:"kenyaMap", vbVar:"kenyaViewBox", projFn:"projectCoordsKE",
    names:{ de:"Kenia", hu:"Kenya", ro:"Kenya", en:"Kenya" } },
  { iso:"ls", slug:"lesotho", svgFile:"lesotho.svg.ts", mapVar:"lesothoMap", vbVar:"lesothoViewBox", projFn:"projectCoordsLS",
    names:{ de:"Lesotho", hu:"Lesotho", ro:"Lesotho", en:"Lesotho" } },
  { iso:"lr", slug:"liberia", svgFile:"liberia.svg.ts", mapVar:"liberiaMap", vbVar:"liberiaViewBox", projFn:"projectCoordsLR",
    names:{ de:"Liberia", hu:"Libéria", ro:"Liberia", en:"Liberia" } },
  { iso:"ly", slug:"libya", svgFile:"libya.svg.ts", mapVar:"libyaMap", vbVar:"libyaViewBox", projFn:"projectCoordsLY",
    names:{ de:"Libyen", hu:"Líbia", ro:"Libia", en:"Libya" } },
  { iso:"mg", slug:"madagascar", svgFile:"madagascar.svg.ts", mapVar:"madagascarMap", vbVar:"madagascarViewBox", projFn:"projectCoordsMG",
    names:{ de:"Madagaskar", hu:"Madagaszkár", ro:"Madagascar", en:"Madagascar" } },
  { iso:"mw", slug:"malawi", svgFile:"malawi.svg.ts", mapVar:"malawiMap", vbVar:"malawiViewBox", projFn:"projectCoordsMW",
    names:{ de:"Malawi", hu:"Malawi", ro:"Malawi", en:"Malawi" } },
  { iso:"ml", slug:"mali", svgFile:"mali.svg.ts", mapVar:"maliMap", vbVar:"maliViewBox", projFn:"projectCoordsML",
    names:{ de:"Mali", hu:"Mali", ro:"Mali", en:"Mali" } },
  { iso:"mr", slug:"mauritania", svgFile:"mauritania.svg.ts", mapVar:"mauritaniaMap", vbVar:"mauritaniaViewBox", projFn:"projectCoordsMR",
    names:{ de:"Mauretanien", hu:"Mauritánia", ro:"Mauritania", en:"Mauritania" } },
  { iso:"mu", slug:"mauritius", svgFile:"mauritius.svg.ts", mapVar:"mauritiusMap", vbVar:"mauritiusViewBox", projFn:"projectCoordsMU",
    names:{ de:"Mauritius", hu:"Mauritius", ro:"Mauritius", en:"Mauritius" } },
  { iso:"ma", slug:"morocco", svgFile:"morocco.svg.ts", mapVar:"moroccoMap", vbVar:"moroccoViewBox", projFn:"projectCoordsMA",
    names:{ de:"Marokko", hu:"Marokkó", ro:"Maroc", en:"Morocco" } },
  { iso:"mz", slug:"mozambique", svgFile:"mozambique.svg.ts", mapVar:"mozambiqueMap", vbVar:"mozambiqueViewBox", projFn:"projectCoordsMZ",
    names:{ de:"Mosambik", hu:"Mozambik", ro:"Mozambic", en:"Mozambique" } },
  { iso:"na", slug:"namibia", svgFile:"namibia.svg.ts", mapVar:"namibiaMap", vbVar:"namibiaViewBox", projFn:"projectCoordsNA",
    names:{ de:"Namibia", hu:"Namíbia", ro:"Namibia", en:"Namibia" } },
  { iso:"ne", slug:"niger", svgFile:"niger.svg.ts", mapVar:"nigerMap", vbVar:"nigerViewBox", projFn:"projectCoordsNE",
    names:{ de:"Niger", hu:"Niger", ro:"Niger", en:"Niger" } },
  { iso:"ng", slug:"nigeria", svgFile:"nigeria.svg.ts", mapVar:"nigeriaMap", vbVar:"nigeriaViewBox", projFn:"projectCoordsNG",
    names:{ de:"Nigeria", hu:"Nigéria", ro:"Nigeria", en:"Nigeria" } },
  { iso:"rw", slug:"rwanda", svgFile:"rwanda.svg.ts", mapVar:"rwandaMap", vbVar:"rwandaViewBox", projFn:"projectCoordsRW",
    names:{ de:"Ruanda", hu:"Ruanda", ro:"Rwanda", en:"Rwanda" } },
  { iso:"st", slug:"saotome", svgFile:"saotome.svg.ts", mapVar:"saotomeMap", vbVar:"saotomeViewBox", projFn:"projectCoordsST",
    names:{ de:"São Tomé und Príncipe", hu:"São Tomé és Príncipe", ro:"São Tomé și Príncipe", en:"São Tomé and Príncipe" } },
  { iso:"sn", slug:"senegal", svgFile:"senegal.svg.ts", mapVar:"senegalMap", vbVar:"senegalViewBox", projFn:"projectCoordsSN",
    names:{ de:"Senegal", hu:"Szenegál", ro:"Senegal", en:"Senegal" } },
  { iso:"sc", slug:"seychelles", svgFile:"seychelles.svg.ts", mapVar:"seychellesMap", vbVar:"seychellesViewBox", projFn:"projectCoordsSC",
    names:{ de:"Seychellen", hu:"Seychelle-szigetek", ro:"Seychelles", en:"Seychelles" } },
  { iso:"sl", slug:"sierraleone", svgFile:"sierraleone.svg.ts", mapVar:"sierraleoneMap", vbVar:"sierraleoneViewBox", projFn:"projectCoordsSL",
    names:{ de:"Sierra Leone", hu:"Sierra Leone", ro:"Sierra Leone", en:"Sierra Leone" } },
  { iso:"so", slug:"somalia", svgFile:"somalia.svg.ts", mapVar:"somaliaMap", vbVar:"somaliaViewBox", projFn:"projectCoordsSO",
    names:{ de:"Somalia", hu:"Szomália", ro:"Somalia", en:"Somalia" } },
  { iso:"za", slug:"southafrica", svgFile:"southafrica.svg.ts", mapVar:"southafricaMap", vbVar:"southafricaViewBox", projFn:"projectCoordsZA",
    names:{ de:"Südafrika", hu:"Dél-Afrika", ro:"Africa de Sud", en:"South Africa" } },
  { iso:"ss", slug:"southsudan", svgFile:"southsudan.svg.ts", mapVar:"southsudanMap", vbVar:"southsudanViewBox", projFn:"projectCoordsSS",
    names:{ de:"Südsudan", hu:"Dél-Szudán", ro:"Sudanul de Sud", en:"South Sudan" } },
  { iso:"sd", slug:"sudan", svgFile:"sudan.svg.ts", mapVar:"sudanMap", vbVar:"sudanViewBox", projFn:"projectCoordsSD",
    names:{ de:"Sudan", hu:"Szudán", ro:"Sudan", en:"Sudan" } },
  { iso:"tz", slug:"tanzania", svgFile:"tanzania.svg.ts", mapVar:"tanzaniaMap", vbVar:"tanzaniaViewBox", projFn:"projectCoordsTZ",
    names:{ de:"Tansania", hu:"Tanzánia", ro:"Tanzania", en:"Tanzania" } },
  { iso:"tg", slug:"togo", svgFile:"togo.svg.ts", mapVar:"togoMap", vbVar:"togoViewBox", projFn:"projectCoordsTG",
    names:{ de:"Togo", hu:"Togo", ro:"Togo", en:"Togo" } },
  { iso:"tn", slug:"tunisia", svgFile:"tunisia.svg.ts", mapVar:"tunisiaMap", vbVar:"tunisiaViewBox", projFn:"projectCoordsTN",
    names:{ de:"Tunesien", hu:"Tunézia", ro:"Tunisia", en:"Tunisia" } },
  { iso:"ug", slug:"uganda", svgFile:"uganda.svg.ts", mapVar:"ugandaMap", vbVar:"ugandaViewBox", projFn:"projectCoordsUG",
    names:{ de:"Uganda", hu:"Uganda", ro:"Uganda", en:"Uganda" } },
  { iso:"zm", slug:"zambia", svgFile:"zambia.svg.ts", mapVar:"zambiaMap", vbVar:"zambiaViewBox", projFn:"projectCoordsZM",
    names:{ de:"Sambia", hu:"Zambia", ro:"Zambia", en:"Zambia" } },
  { iso:"zw", slug:"zimbabwe", svgFile:"zimbabwe.svg.ts", mapVar:"zimbabweMap", vbVar:"zimbabweViewBox", projFn:"projectCoordsZW",
    names:{ de:"Simbabwe", hu:"Zimbabwe", ro:"Zimbabwe", en:"Zimbabwe" } },

  // === Asia (2026-05-27) — uses shared asia.svg.ts ===
  { iso:"af", slug:"afghanistan", svgFile:"afghanistan.svg.ts", mapVar:"afghanistanMap", vbVar:"afghanistanViewBox", projFn:"projectCoordsAF",
    names:{ de:"Afghanistan", hu:"Afganisztán", ro:"Afganistan", en:"Afghanistan" } },
  { iso:"am", slug:"armenia", svgFile:"armenia.svg.ts", mapVar:"armeniaMap", vbVar:"armeniaViewBox", projFn:"projectCoordsAM",
    names:{ de:"Armenien", hu:"Örményország", ro:"Armenia", en:"Armenia" } },
  { iso:"az", slug:"azerbaijan", svgFile:"azerbaijan.svg.ts", mapVar:"azerbaijanMap", vbVar:"azerbaijanViewBox", projFn:"projectCoordsAZ",
    names:{ de:"Aserbaidschan", hu:"Azerbajdzsán", ro:"Azerbaidjan", en:"Azerbaijan" } },
  { iso:"bh", slug:"bahrain", svgFile:"bahrain.svg.ts", mapVar:"bahrainMap", vbVar:"bahrainViewBox", projFn:"projectCoordsBH",
    names:{ de:"Bahrain", hu:"Bahrein", ro:"Bahrain", en:"Bahrain" } },
  { iso:"bd", slug:"bangladesh", svgFile:"bangladesh.svg.ts", mapVar:"bangladeshMap", vbVar:"bangladeshViewBox", projFn:"projectCoordsBD",
    names:{ de:"Bangladesch", hu:"Banglades", ro:"Bangladesh", en:"Bangladesh" } },
  { iso:"bt", slug:"bhutan", svgFile:"bhutan.svg.ts", mapVar:"bhutanMap", vbVar:"bhutanViewBox", projFn:"projectCoordsBT",
    names:{ de:"Bhutan", hu:"Bhután", ro:"Bhutan", en:"Bhutan" } },
  { iso:"bn", slug:"brunei", svgFile:"brunei.svg.ts", mapVar:"bruneiMap", vbVar:"bruneiViewBox", projFn:"projectCoordsBN",
    names:{ de:"Brunei", hu:"Brunei", ro:"Brunei", en:"Brunei" } },
  { iso:"kh", slug:"cambodia", svgFile:"cambodia.svg.ts", mapVar:"cambodiaMap", vbVar:"cambodiaViewBox", projFn:"projectCoordsKH",
    names:{ de:"Kambodscha", hu:"Kambodzsa", ro:"Cambodgia", en:"Cambodia" } },
  { iso:"cn", slug:"china", svgFile:"china.svg.ts", mapVar:"chinaMap", vbVar:"chinaViewBox", projFn:"projectCoordsCN",
    names:{ de:"China", hu:"Kína", ro:"China", en:"China" } },
  { iso:"ge", slug:"georgia", svgFile:"georgia.svg.ts", mapVar:"georgiaMap", vbVar:"georgiaViewBox", projFn:"projectCoordsGE",
    names:{ de:"Georgien", hu:"Grúzia", ro:"Georgia", en:"Georgia" } },
  { iso:"in", slug:"india", svgFile:"india.svg.ts", mapVar:"indiaMap", vbVar:"indiaViewBox", projFn:"projectCoordsIN",
    names:{ de:"Indien", hu:"India", ro:"India", en:"India" } },
  { iso:"id", slug:"indonesia", svgFile:"indonesia.svg.ts", mapVar:"indonesiaMap", vbVar:"indonesiaViewBox", projFn:"projectCoordsID",
    names:{ de:"Indonesien", hu:"Indonézia", ro:"Indonezia", en:"Indonesia" } },
  { iso:"ir", slug:"iran", svgFile:"iran.svg.ts", mapVar:"iranMap", vbVar:"iranViewBox", projFn:"projectCoordsIR",
    names:{ de:"Iran", hu:"Irán", ro:"Iran", en:"Iran" } },
  { iso:"iq", slug:"iraq", svgFile:"iraq.svg.ts", mapVar:"iraqMap", vbVar:"iraqViewBox", projFn:"projectCoordsIQ",
    names:{ de:"Irak", hu:"Irak", ro:"Irak", en:"Iraq" } },
  { iso:"il", slug:"israel", svgFile:"israel.svg.ts", mapVar:"israelMap", vbVar:"israelViewBox", projFn:"projectCoordsIL",
    names:{ de:"Israel", hu:"Izrael", ro:"Israel", en:"Israel" } },
  { iso:"jp", slug:"japan", svgFile:"japan.svg.ts", mapVar:"japanMap", vbVar:"japanViewBox", projFn:"projectCoordsJP",
    names:{ de:"Japan", hu:"Japán", ro:"Japonia", en:"Japan" } },
  { iso:"jo", slug:"jordan", svgFile:"jordan.svg.ts", mapVar:"jordanMap", vbVar:"jordanViewBox", projFn:"projectCoordsJO",
    names:{ de:"Jordanien", hu:"Jordánia", ro:"Iordania", en:"Jordan" } },
  { iso:"kz", slug:"kazakhstan", svgFile:"kazakhstan.svg.ts", mapVar:"kazakhstanMap", vbVar:"kazakhstanViewBox", projFn:"projectCoordsKZ",
    names:{ de:"Kasachstan", hu:"Kazahsztán", ro:"Kazahstan", en:"Kazakhstan" } },
  { iso:"kw", slug:"kuwait", svgFile:"kuwait.svg.ts", mapVar:"kuwaitMap", vbVar:"kuwaitViewBox", projFn:"projectCoordsKW",
    names:{ de:"Kuwait", hu:"Kuvait", ro:"Kuwait", en:"Kuwait" } },
  { iso:"kg", slug:"kyrgyzstan", svgFile:"kyrgyzstan.svg.ts", mapVar:"kyrgyzstanMap", vbVar:"kyrgyzstanViewBox", projFn:"projectCoordsKG",
    names:{ de:"Kirgisistan", hu:"Kirgizisztán", ro:"Kârgâzstan", en:"Kyrgyzstan" } },
  { iso:"la", slug:"laos", svgFile:"laos.svg.ts", mapVar:"laosMap", vbVar:"laosViewBox", projFn:"projectCoordsLA",
    names:{ de:"Laos", hu:"Laosz", ro:"Laos", en:"Laos" } },
  { iso:"lb", slug:"lebanon", svgFile:"lebanon.svg.ts", mapVar:"lebanonMap", vbVar:"lebanonViewBox", projFn:"projectCoordsLB",
    names:{ de:"Libanon", hu:"Libanon", ro:"Liban", en:"Lebanon" } },
  { iso:"my", slug:"malaysia", svgFile:"malaysia.svg.ts", mapVar:"malaysiaMap", vbVar:"malaysiaViewBox", projFn:"projectCoordsMY",
    names:{ de:"Malaysia", hu:"Malajzia", ro:"Malaezia", en:"Malaysia" } },
  { iso:"mv", slug:"maldives", svgFile:"maldives.svg.ts", mapVar:"maldivesMap", vbVar:"maldivesViewBox", projFn:"projectCoordsMV",
    names:{ de:"Malediven", hu:"Maldív-szigetek", ro:"Maldive", en:"Maldives" } },
  { iso:"mn", slug:"mongolia", svgFile:"mongolia.svg.ts", mapVar:"mongoliaMap", vbVar:"mongoliaViewBox", projFn:"projectCoordsMN",
    names:{ de:"Mongolei", hu:"Mongólia", ro:"Mongolia", en:"Mongolia" } },
  { iso:"mm", slug:"myanmar", svgFile:"myanmar.svg.ts", mapVar:"myanmarMap", vbVar:"myanmarViewBox", projFn:"projectCoordsMM",
    names:{ de:"Myanmar", hu:"Mianmar", ro:"Myanmar", en:"Myanmar" } },
  { iso:"np", slug:"nepal", svgFile:"nepal.svg.ts", mapVar:"nepalMap", vbVar:"nepalViewBox", projFn:"projectCoordsNP",
    names:{ de:"Nepal", hu:"Nepál", ro:"Nepal", en:"Nepal" } },
  { iso:"kp", slug:"northkorea", svgFile:"northkorea.svg.ts", mapVar:"northkoreaMap", vbVar:"northkoreaViewBox", projFn:"projectCoordsKP",
    names:{ de:"Nordkorea", hu:"Észak-Korea", ro:"Coreea de Nord", en:"North Korea" } },
  { iso:"om", slug:"oman", svgFile:"oman.svg.ts", mapVar:"omanMap", vbVar:"omanViewBox", projFn:"projectCoordsOM",
    names:{ de:"Oman", hu:"Omán", ro:"Oman", en:"Oman" } },
  { iso:"pk", slug:"pakistan", svgFile:"pakistan.svg.ts", mapVar:"pakistanMap", vbVar:"pakistanViewBox", projFn:"projectCoordsPK",
    names:{ de:"Pakistan", hu:"Pakisztán", ro:"Pakistan", en:"Pakistan" } },
  { iso:"ps", slug:"palestine", svgFile:"palestine.svg.ts", mapVar:"palestineMap", vbVar:"palestineViewBox", projFn:"projectCoordsPS",
    names:{ de:"Palästina", hu:"Palesztina", ro:"Palestina", en:"Palestine" } },
  { iso:"ph", slug:"philippines", svgFile:"philippines.svg.ts", mapVar:"philippinesMap", vbVar:"philippinesViewBox", projFn:"projectCoordsPH",
    names:{ de:"Philippinen", hu:"Fülöp-szigetek", ro:"Filipine", en:"Philippines" } },
  { iso:"qa", slug:"qatar", svgFile:"qatar.svg.ts", mapVar:"qatarMap", vbVar:"qatarViewBox", projFn:"projectCoordsQA",
    names:{ de:"Katar", hu:"Katar", ro:"Qatar", en:"Qatar" } },
  { iso:"ru", slug:"russia", svgFile:"russia.svg.ts", mapVar:"russiaMap", vbVar:"russiaViewBox", projFn:"projectCoordsRU",
    names:{ de:"Russland", hu:"Oroszország", ro:"Rusia", en:"Russia" } },
  { iso:"sa", slug:"saudiarabia", svgFile:"saudiarabia.svg.ts", mapVar:"saudiarabiaMap", vbVar:"saudiarabiaViewBox", projFn:"projectCoordsSA",
    names:{ de:"Saudi-Arabien", hu:"Szaúd-Arábia", ro:"Arabia Saudită", en:"Saudi Arabia" } },
  { iso:"sg", slug:"singapore", svgFile:"singapore.svg.ts", mapVar:"singaporeMap", vbVar:"singaporeViewBox", projFn:"projectCoordsSG",
    names:{ de:"Singapur", hu:"Szingapúr", ro:"Singapore", en:"Singapore" } },
  { iso:"kr", slug:"southkorea", svgFile:"southkorea.svg.ts", mapVar:"southkoreaMap", vbVar:"southkoreaViewBox", projFn:"projectCoordsKR",
    names:{ de:"Südkorea", hu:"Dél-Korea", ro:"Coreea de Sud", en:"South Korea" } },
  { iso:"lk", slug:"srilanka", svgFile:"srilanka.svg.ts", mapVar:"srilankaMap", vbVar:"srilankaViewBox", projFn:"projectCoordsLK",
    names:{ de:"Sri Lanka", hu:"Srí Lanka", ro:"Sri Lanka", en:"Sri Lanka" } },
  { iso:"sy", slug:"syria", svgFile:"syria.svg.ts", mapVar:"syriaMap", vbVar:"syriaViewBox", projFn:"projectCoordsSY",
    names:{ de:"Syrien", hu:"Szíria", ro:"Siria", en:"Syria" } },
  { iso:"tw", slug:"taiwan", svgFile:"taiwan.svg.ts", mapVar:"taiwanMap", vbVar:"taiwanViewBox", projFn:"projectCoordsTW",
    names:{ de:"Taiwan", hu:"Tajvan", ro:"Taiwan", en:"Taiwan" } },
  { iso:"tj", slug:"tajikistan", svgFile:"tajikistan.svg.ts", mapVar:"tajikistanMap", vbVar:"tajikistanViewBox", projFn:"projectCoordsTJ",
    names:{ de:"Tadschikistan", hu:"Tádzsikisztán", ro:"Tadjikistan", en:"Tajikistan" } },
  { iso:"th", slug:"thailand", svgFile:"thailand.svg.ts", mapVar:"thailandMap", vbVar:"thailandViewBox", projFn:"projectCoordsTH",
    names:{ de:"Thailand", hu:"Thaiföld", ro:"Thailanda", en:"Thailand" } },
  { iso:"tl", slug:"timorleste", svgFile:"timorleste.svg.ts", mapVar:"timorlesteMap", vbVar:"timorlesteViewBox", projFn:"projectCoordsTL",
    names:{ de:"Osttimor", hu:"Kelet-Timor", ro:"Timorul de Est", en:"Timor-Leste" } },
  { iso:"tr", slug:"turkey", svgFile:"turkey.svg.ts", mapVar:"turkeyMap", vbVar:"turkeyViewBox", projFn:"projectCoordsTR",
    names:{ de:"Türkei", hu:"Törökország", ro:"Turcia", en:"Turkey" } },
  { iso:"tm", slug:"turkmenistan", svgFile:"turkmenistan.svg.ts", mapVar:"turkmenistanMap", vbVar:"turkmenistanViewBox", projFn:"projectCoordsTM",
    names:{ de:"Turkmenistan", hu:"Türkmenisztán", ro:"Turkmenistan", en:"Turkmenistan" } },
  { iso:"ae", slug:"uae", svgFile:"uae.svg.ts", mapVar:"uaeMap", vbVar:"uaeViewBox", projFn:"projectCoordsAE",
    names:{ de:"VAE", hu:"EAE", ro:"EAU", en:"UAE" } },
  { iso:"uz", slug:"uzbekistan", svgFile:"uzbekistan.svg.ts", mapVar:"uzbekistanMap", vbVar:"uzbekistanViewBox", projFn:"projectCoordsUZ",
    names:{ de:"Usbekistan", hu:"Üzbegisztán", ro:"Uzbekistan", en:"Uzbekistan" } },
  { iso:"vn", slug:"vietnam", svgFile:"vietnam.svg.ts", mapVar:"vietnamMap", vbVar:"vietnamViewBox", projFn:"projectCoordsVN",
    names:{ de:"Vietnam", hu:"Vietnám", ro:"Vietnam", en:"Vietnam" } },
  { iso:"ye", slug:"yemen", svgFile:"yemen.svg.ts", mapVar:"yemenMap", vbVar:"yemenViewBox", projFn:"projectCoordsYE",
    names:{ de:"Jemen", hu:"Jemen", ro:"Yemen", en:"Yemen" } },
  { iso:"hk", slug:"hongkong", svgFile:"hongkong.svg.ts", mapVar:"hongkongMap", vbVar:"hongkongViewBox", projFn:"projectCoordsHK",
    names:{ de:"Hongkong", hu:"Hongkong", ro:"Hong Kong", en:"Hong Kong" } },

  // === Oceania (2026-05-27) ===
  { iso:"au", slug:"australia", svgFile:"australia.svg.ts", mapVar:"australiaMap", vbVar:"australiaViewBox", projFn:"projectCoordsAU",
    names:{ de:"Australien", hu:"Ausztrália", ro:"Australia", en:"Australia" } },
  { iso:"nz", slug:"newzealand", svgFile:"newzealand.svg.ts", mapVar:"newzealandMap", vbVar:"newzealandViewBox", projFn:"projectCoordsNZ",
    names:{ de:"Neuseeland", hu:"Új-Zéland", ro:"Noua Zeelandă", en:"New Zealand" } },
  { iso:"pg", slug:"papuanewguinea", svgFile:"papuanewguinea.svg.ts", mapVar:"papuanewguineaMap", vbVar:"papuanewguineaViewBox", projFn:"projectCoordsPG",
    names:{ de:"Papua-Neuguinea", hu:"Pápua Új-Guinea", ro:"Papua Noua Guinee", en:"Papua New Guinea" } },
  { iso:"fj", slug:"fiji", svgFile:"fiji.svg.ts", mapVar:"fijiMap", vbVar:"fijiViewBox", projFn:"projectCoordsFJ",
    names:{ de:"Fidschi", hu:"Fidzsi", ro:"Fiji", en:"Fiji" } },
  { iso:"sb", slug:"solomonislands", svgFile:"solomonislands.svg.ts", mapVar:"solomonislandsMap", vbVar:"solomonislandsViewBox", projFn:"projectCoordsSB",
    names:{ de:"Salomonen", hu:"Salamon-szigetek", ro:"Solomon", en:"Solomon Islands" } },
  { iso:"vu", slug:"vanuatu", svgFile:"vanuatu.svg.ts", mapVar:"vanuatuMap", vbVar:"vanuatuViewBox", projFn:"projectCoordsVU",
    names:{ de:"Vanuatu", hu:"Vanuatu", ro:"Vanuatu", en:"Vanuatu" } },
  { iso:"nc", slug:"newcaledonia", svgFile:"newcaledonia.svg.ts", mapVar:"newcaledoniaMap", vbVar:"newcaledoniaViewBox", projFn:"projectCoordsNC",
    names:{ de:"Neukaledonien", hu:"Új-Kaledónia", ro:"Noua Caledonie", en:"New Caledonia" } },
  { iso:"pf", slug:"frenchpolynesia", svgFile:"frenchpolynesia.svg.ts", mapVar:"frenchpolynesiaMap", vbVar:"frenchpolynesiaViewBox", projFn:"projectCoordsPF",
    names:{ de:"Französisch-Polynesien", hu:"Francia Polinézia", ro:"Polinezia Franceză", en:"French Polynesia" } },
  { iso:"ws", slug:"samoa", svgFile:"samoa.svg.ts", mapVar:"samoaMap", vbVar:"samoaViewBox", projFn:"projectCoordsWS",
    names:{ de:"Samoa", hu:"Szamoa", ro:"Samoa", en:"Samoa" } },
  { iso:"to", slug:"tonga", svgFile:"tonga.svg.ts", mapVar:"tongaMap", vbVar:"tongaViewBox", projFn:"projectCoordsTO",
    names:{ de:"Tonga", hu:"Tonga", ro:"Tonga", en:"Tonga" } },
  { iso:"ki", slug:"kiribati", svgFile:"kiribati.svg.ts", mapVar:"kiribatiMap", vbVar:"kiribatiViewBox", projFn:"projectCoordsKI",
    names:{ de:"Kiribati", hu:"Kiribati", ro:"Kiribati", en:"Kiribati" } },
  { iso:"fm", slug:"micronesia", svgFile:"micronesia.svg.ts", mapVar:"micronesiaMap", vbVar:"micronesiaViewBox", projFn:"projectCoordsFM",
    names:{ de:"Mikronesien", hu:"Mikronézia", ro:"Micronezia", en:"Micronesia" } },
  { iso:"mh", slug:"marshallislands", svgFile:"marshallislands.svg.ts", mapVar:"marshallislandsMap", vbVar:"marshallislandsViewBox", projFn:"projectCoordsMH",
    names:{ de:"Marshallinseln", hu:"Marshall-szigetek", ro:"Insulele Marshall", en:"Marshall Islands" } },
  { iso:"pw", slug:"palau", svgFile:"palau.svg.ts", mapVar:"palauMap", vbVar:"palauViewBox", projFn:"projectCoordsPW",
    names:{ de:"Palau", hu:"Palau", ro:"Palau", en:"Palau" } },
  { iso:"nr", slug:"nauru", svgFile:"nauru.svg.ts", mapVar:"nauruMap", vbVar:"nauruViewBox", projFn:"projectCoordsNR",
    names:{ de:"Nauru", hu:"Nauru", ro:"Nauru", en:"Nauru" } },
  { iso:"tv", slug:"tuvalu", svgFile:"tuvalu.svg.ts", mapVar:"tuvaluMap", vbVar:"tuvaluViewBox", projFn:"projectCoordsTV",
    names:{ de:"Tuvalu", hu:"Tuvalu", ro:"Tuvalu", en:"Tuvalu" } },
  { iso:"ck", slug:"cookislands", svgFile:"cookislands.svg.ts", mapVar:"cookislandsMap", vbVar:"cookislandsViewBox", projFn:"projectCoordsCK",
    names:{ de:"Cookinseln", hu:"Cook-szigetek", ro:"Insulele Cook", en:"Cook Islands" } },
  ...ISLAND_COUNTRIES,
];

const HINT: Record<Lang, string> = {
  de: "Tippe auf einen Ort für Details",
  hu: "Koppints egy helyre a részletekért",
  ro: "Atinge un loc pentru detalii",
  en: "Tap a place for details",
  it: "Tocca un luogo per i dettagli",
  es: "Toca un lugar para ver los detalles",
};

function langsForCountry(country: Country): Lang[] {
  if (country.iso === "it") return [...CORE_LANGS, "it"];
  if (country.iso === "es") return [...CORE_LANGS, "es"];
  return CORE_LANGS;
}
const MORE: Record<Lang, string> = { de:"Mehr erfahren", hu:"Bővebben", ro:"Detalii", en:"Read more", it:"Scopri di più", es:"Más información" };
const BACK: Record<Lang, string> = { de:"Zurück", hu:"Vissza", ro:"Înapoi", en:"Back", it:"Indietro", es:"Volver" };
const TITLE_SUFFIX: Record<Lang, string> = { de:"Karte", hu:"térkép", ro:"hartă", en:"map", it:"mappa", es:"mapa" };
const SEARCH_PH: Record<Lang, string> = { de:"Suche…", hu:"Keresés…", ro:"Caută…", en:"Search…", it:"Cerca…", es:"Buscar…" };
const LOCATION_UI: Record<Lang, { button:string; locating:string; nearest:string; byCar:string; straight:string; denied:string; unavailable:string }> = {
  de: { button:"Mein Standort", locating:"Standort wird ermittelt…", nearest:"Am nächsten", byCar:"mit dem Auto", straight:"Luftlinie", denied:"Standortzugriff wurde nicht erlaubt.", unavailable:"Standort konnte nicht ermittelt werden." },
  hu: { button:"Saját helyzetem", locating:"Helyzet meghatározása…", nearest:"Legközelebbi", byCar:"autóval", straight:"légvonalban", denied:"A helyhozzáférés nincs engedélyezve.", unavailable:"A helyzet nem határozható meg." },
  ro: { button:"Locația mea", locating:"Se determină locația…", nearest:"Cel mai apropiat", byCar:"cu mașina", straight:"în linie dreaptă", denied:"Accesul la locație nu a fost permis.", unavailable:"Locația nu a putut fi determinată." },
  en: { button:"My location", locating:"Finding your location…", nearest:"Nearest", byCar:"by car", straight:"straight line", denied:"Location access was not allowed.", unavailable:"Your location could not be determined." },
  it: { button:"La mia posizione", locating:"Posizione in corso…", nearest:"Più vicino", byCar:"in auto", straight:"in linea retta", denied:"Accesso alla posizione non consentito.", unavailable:"Impossibile determinare la posizione." },
  es: { button:"Mi ubicación", locating:"Buscando tu ubicación…", nearest:"Más cercano", byCar:"en coche", straight:"en línea recta", denied:"No se permitió el acceso a la ubicación.", unavailable:"No se pudo determinar la ubicación." },
};

// Type → group mapping (5 visible groups). Unknown types fall into "other".
type Grp = "city" | "sight" | "nature" | "history" | "industry" | "other";
const TYPE_GROUP: Record<string, Grp> = {
  city:"city", town:"city", village:"city", "state-capital":"city", capital:"city",
  sight:"sight", landmark:"sight", monument:"sight", "kid-landmark":"sight",
  museum:"sight", gallery:"sight", statue:"sight", viewpoint:"sight",
  square:"sight", tower:"sight", bridge:"sight", harbor:"sight",
  "kid-friendly":"sight", "tourist-attraction":"sight", theater:"sight",
  university:"sight", icon:"sight", building:"sight",
  mountain:"nature", peak:"nature", lake:"nature", river:"nature", valley:"nature",
  forest:"nature", park:"nature", wildlife:"nature", "animal-habitat":"nature",
  geo:"nature", nature:"nature", beach:"nature", waterfall:"nature", cave:"nature",
  garden:"nature", reserve:"nature", "national-park":"nature",
  relief:"nature", island:"nature", sea:"nature", coast:"nature", desert:"nature",
  plateau:"nature", "wildlife-area":"nature", "mountain-range":"nature", landscape:"nature",
  historical:"history", geschichte:"history",
  castle:"history", fortress:"history", ruins:"history", ruin:"history", palace:"history",
  church:"history", cathedral:"history", basilica:"history", monastery:"history",
  mosque:"history", synagogue:"history", temple:"history",
  "historical-site":"history", battlefield:"history", fort:"history", fortification:"history",
  industry:"industry", factory:"industry", agriculture:"industry",
  port:"industry", energy:"industry", mine:"industry", "trade-hub":"industry",
};
function groupOf(t?: string): Grp { return (t && TYPE_GROUP[t]) || "other"; }

// Chip labels per group per lang
const GROUP_LABELS: Record<Grp, Record<Lang, string>> = {
  city:     { de:"Städte", hu:"Városok", ro:"Orașe", en:"Cities", it:"Città", es:"Ciudades" },
  sight:    { de:"Sehensw.", hu:"Látnivalók", ro:"Atracții", en:"Sights", it:"Luoghi", es:"Lugares" },
  nature:   { de:"Natur", hu:"Természet", ro:"Natură", en:"Nature", it:"Natura", es:"Naturaleza" },
  history:  { de:"Geschichte", hu:"Történelem", ro:"Istorie", en:"History", it:"Storia", es:"Historia" },
  industry: { de:"Industrie", hu:"Ipar", ro:"Industrie", en:"Industry", it:"Industria", es:"Industria" },
  other:    { de:"Sonst.", hu:"Egyéb", ro:"Altele", en:"Other", it:"Altro", es:"Otros" },
};

type SlimPoi = { id:string; type:string; grp:Grp; cx:number; cy:number; lon:number; lat:number; name:any; urls?:Record<string,string>; img?:string; desc?:any; facts?:any; sv?:string };

type MapQuizTask =
  | { id:string; type:"find_poi"; question:Partial<Record<Lang,string>>; targetPoiId:string }
  | { id:string; type:"find_region"; question:Partial<Record<Lang,string>>; targetRegionId:string }
  | { id:string; type:"odd_one_out"; question:Partial<Record<Lang,string>>; poiIds:string[]; targetPoiId:string }
  | { id:string; type:"sequence"; question:Partial<Record<Lang,string>>; poiIds:string[]; orderedPoiIds:string[] };

// Country-specific content, shared by the standalone HTML quiz engine below.
// A session uses every task once; add larger pools later and the engine will
// continue to draw ten without replacement.
const INLINE_MAP_QUIZ_POOLS: Record<string, MapQuizTask[]> = {
  de: [
    {
      id: "de-find-berlin", type: "find_poi", targetPoiId: "city-berlin",
      question: {
        de: "Wo liegt Berlin? Klicke auf die Stadt.",
        hu: "Hol található Berlin? Kattints a városra.",
        ro: "Unde se află Berlin? Apasă pe oraș.",
        en: "Where is Berlin? Click the city.",
      },
    },
    {
      id: "de-find-hamburg", type: "find_poi", targetPoiId: "city-hamburg",
      question: {
        de: "Finde Hamburg auf der Karte.",
        hu: "Keresd meg Hamburgot a térképen.",
        ro: "Găsește Hamburg pe hartă.",
        en: "Find Hamburg on the map.",
      },
    },
    {
      id: "de-find-zugspitze", type: "find_poi", targetPoiId: "mnt-zugspitze",
      question: {
        de: "Die Zugspitze ist Deutschlands höchster Berg. Wo liegt sie?",
        hu: "A Zugspitze Németország legmagasabb hegye. Hol található?",
        ro: "Zugspitze este cel mai înalt munte din Germania. Unde se află?",
        en: "The Zugspitze is Germany's highest mountain. Where is it?",
      },
    },
    {
      id: "de-find-bodensee", type: "find_poi", targetPoiId: "lake-bodensee",
      question: {
        de: "Finde den Bodensee im Süden Deutschlands.",
        hu: "Keresd meg a Bodeni-tavat Németország déli részén.",
        ro: "Găsește Lacul Constanța în sudul Germaniei.",
        en: "Find Lake Constance in southern Germany.",
      },
    },
    {
      id: "de-region-bayern", type: "find_region", targetRegionId: "DE-BY",
      question: {
        de: "Klicke auf das Bundesland Bayern.",
        hu: "Kattints Bajorország tartományra.",
        ro: "Apasă pe landul Bavaria.",
        en: "Click the state of Bavaria.",
      },
    },
    {
      id: "de-region-nrw", type: "find_region", targetRegionId: "DE-NW",
      question: {
        de: "Wo liegt Nordrhein-Westfalen?",
        hu: "Hol található Észak-Rajna-Vesztfália?",
        ro: "Unde se află Renania de Nord-Westfalia?",
        en: "Where is North Rhine-Westphalia?",
      },
    },
    {
      id: "de-region-sachsen", type: "find_region", targetRegionId: "DE-SN",
      question: {
        de: "Finde das Bundesland Sachsen.",
        hu: "Keresd meg Szászország tartományt.",
        ro: "Găsește landul Saxonia.",
        en: "Find the state of Saxony.",
      },
    },
    {
      id: "de-odd-bayern", type: "odd_one_out",
      poiIds: ["city-muenchen", "city-nuernberg", "city-augsburg", "city-regensburg", "city-stuttgart"],
      targetPoiId: "city-stuttgart",
      question: {
        de: "Welche dieser Städte liegt nicht in Bayern?",
        hu: "Melyik város nem Bajorországban található?",
        ro: "Care dintre aceste orașe nu se află în Bavaria?",
        en: "Which of these cities is not in Bavaria?",
      },
    },
    {
      id: "de-order-west-east", type: "sequence",
      poiIds: ["city-koeln", "city-frankfurt", "city-dresden"],
      orderedPoiIds: ["city-koeln", "city-frankfurt", "city-dresden"],
      question: {
        de: "Klicke die Städte von West nach Ost an.",
        hu: "Kattints a városokra nyugatról keletre haladva.",
        ro: "Apasă orașele de la vest la est.",
        en: "Click the cities from west to east.",
      },
    },
    {
      id: "de-sequence-cities", type: "sequence",
      poiIds: ["city-berlin", "city-hamburg", "city-muenchen"],
      orderedPoiIds: ["city-hamburg", "city-berlin", "city-muenchen"],
      question: {
        de: "Klicke in dieser Reihenfolge: Hamburg, Berlin, München.",
        hu: "Kattints ebben a sorrendben: Hamburg, Berlin, München.",
        ro: "Apasă în această ordine: Hamburg, Berlin, München.",
        en: "Click in this order: Hamburg, Berlin, Munich.",
      },
    },
  ],
};

const MAP_QUIZ_POOL_DIR = path.join(process.cwd(), "data", "map-quiz-pools");
const MAP_QUIZ_EXTENSION_DIR = path.join(process.cwd(), "data", "map-quiz-pool-extensions");
const MAP_QUIZ_POOLS: Record<string, MapQuizTask[]> = { ...INLINE_MAP_QUIZ_POOLS };

function validateMapQuizTasks(
  iso: string,
  tasks: MapQuizTask[],
  file: string,
  expectedCount: number,
  existingIds: Set<string> = new Set(),
): void {
  if (!Array.isArray(tasks) || tasks.length !== expectedCount) {
    throw new Error(`Map quiz pool ${iso} in ${file} must contain exactly ${expectedCount} tasks`);
  }
  const ids = new Set(existingIds);
  for (const task of tasks) {
    if (!task || typeof task.id !== "string" || ids.has(task.id)) {
      throw new Error(`Map quiz pool ${iso} in ${file} has a missing or duplicate task id`);
    }
    ids.add(task.id);
    if (!["find_poi", "find_region", "odd_one_out", "sequence"].includes(task.type)) {
      throw new Error(`Map quiz ${iso}/${task.id} in ${file} has invalid type`);
    }
    if (task.type === "find_poi" && typeof task.targetPoiId !== "string") {
      throw new Error(`Map quiz ${iso}/${task.id} in ${file} is missing targetPoiId`);
    }
    if (task.type === "find_region" && typeof task.targetRegionId !== "string") {
      throw new Error(`Map quiz ${iso}/${task.id} in ${file} is missing targetRegionId`);
    }
    if (task.type === "odd_one_out" && (
      typeof task.targetPoiId !== "string" || !Array.isArray(task.poiIds) || task.poiIds.length < 3
    )) {
      throw new Error(`Map quiz ${iso}/${task.id} in ${file} has invalid odd_one_out data`);
    }
    if (task.type === "sequence" && (
      !Array.isArray(task.poiIds) || !Array.isArray(task.orderedPoiIds) ||
      task.poiIds.length < 2 || task.orderedPoiIds.length !== task.poiIds.length
    )) {
      throw new Error(`Map quiz ${iso}/${task.id} in ${file} has invalid sequence data`);
    }
    for (const lang of CORE_LANGS) {
      if (!task.question || typeof task.question[lang] !== "string" || !task.question[lang].trim()) {
        throw new Error(`Map quiz ${iso}/${task.id} in ${file} is missing ${lang} question`);
      }
    }
  }
}

if (fs.existsSync(MAP_QUIZ_POOL_DIR)) {
  for (const file of fs.readdirSync(MAP_QUIZ_POOL_DIR).filter(f => f.endsWith(".json")).sort()) {
    const filePath = path.join(MAP_QUIZ_POOL_DIR, file);
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8")) as Record<string, MapQuizTask[]>;
    for (const [iso, tasks] of Object.entries(parsed)) {
      if (MAP_QUIZ_POOLS[iso]) throw new Error(`Duplicate map quiz pool for ${iso} in ${file}`);
      validateMapQuizTasks(iso, tasks, file, 10);
      MAP_QUIZ_POOLS[iso] = tasks;
    }
  }
}

if (fs.existsSync(MAP_QUIZ_EXTENSION_DIR)) {
  for (const file of fs.readdirSync(MAP_QUIZ_EXTENSION_DIR).filter(f => f.endsWith(".json")).sort()) {
    const filePath = path.join(MAP_QUIZ_EXTENSION_DIR, file);
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8")) as Record<string, MapQuizTask[]>;
    for (const [iso, tasks] of Object.entries(parsed)) {
      const baseTasks = MAP_QUIZ_POOLS[iso];
      if (!baseTasks) throw new Error(`Map quiz extension ${iso} in ${file} has no base pool`);
      if (baseTasks.length !== 10) throw new Error(`Duplicate map quiz extension for ${iso} in ${file}`);
      validateMapQuizTasks(iso, tasks, file, 20, new Set(baseTasks.map(task => task.id)));
      MAP_QUIZ_POOLS[iso] = [...baseTasks, ...tasks];
    }
  }
}

const MAP_QUIZ_UI: Record<Lang, Record<string,string>> = {
  de: { launch:"Quiz", start:"Quiz starten", next:"Weiter", close:"Beenden", restart:"Noch einmal", correct:"Richtig!", wrong:"Nicht ganz.", answer:"Richtige Antwort", score:"Punkte", task:"Aufgabe", complete:"Geschafft!", intro:"10 abwechslungsreiche Kartenaufgaben", sequence:"Nächster Ort", namePrompt:"Wie heißt du?", namePlaceholder:"Spielername", save:"Ergebnis speichern", saved:"Ergebnis gespeichert", best:"Dein bestes Ergebnis", invalidName:"Bitte 2 bis 16 Zeichen verwenden: Buchstaben, Zahlen, _ oder -" },
  hu: { launch:"Kvíz", start:"Kvíz indítása", next:"Tovább", close:"Kilépés", restart:"Újra", correct:"Helyes!", wrong:"Nem egészen.", answer:"Helyes válasz", score:"Pont", task:"Feladat", complete:"Kész!", intro:"10 változatos térképes feladat", sequence:"Következő hely", namePrompt:"Mi a neved?", namePlaceholder:"Játékosnév", save:"Eredmény mentése", saved:"Eredmény elmentve", best:"Legjobb eredményed", invalidName:"2-16 karaktert adj meg: betű, szám, _ vagy -" },
  ro: { launch:"Quiz", start:"Începe quizul", next:"Continuă", close:"Ieșire", restart:"Din nou", correct:"Corect!", wrong:"Nu chiar.", answer:"Răspuns corect", score:"Puncte", task:"Sarcina", complete:"Gata!", intro:"10 sarcini variate pe hartă", sequence:"Următorul loc", namePrompt:"Cum te numești?", namePlaceholder:"Nume jucător", save:"Salvează rezultatul", saved:"Rezultat salvat", best:"Cel mai bun rezultat", invalidName:"Folosește 2-16 caractere: litere, cifre, _ sau -" },
  en: { launch:"Quiz", start:"Start quiz", next:"Next", close:"Exit", restart:"Play again", correct:"Correct!", wrong:"Not quite.", answer:"Correct answer", score:"Score", task:"Task", complete:"Complete!", intro:"10 varied map challenges", sequence:"Next place", namePrompt:"What is your name?", namePlaceholder:"Player name", save:"Save result", saved:"Result saved", best:"Your best score", invalidName:"Use 2-16 characters: letters, numbers, _ or -" },
  it: { launch:"Quiz", start:"Inizia il quiz", next:"Avanti", close:"Esci", restart:"Gioca ancora", correct:"Corretto!", wrong:"Non proprio.", answer:"Risposta corretta", score:"Punti", task:"Domanda", complete:"Completato!", intro:"10 sfide diverse sulla mappa", sequence:"Luogo successivo", namePrompt:"Come ti chiami?", namePlaceholder:"Nome giocatore", save:"Salva risultato", saved:"Risultato salvato", best:"Il tuo miglior risultato", invalidName:"Usa da 2 a 16 caratteri: lettere, numeri, _ o -" },
  es: { launch:"Quiz", start:"Iniciar quiz", next:"Siguiente", close:"Salir", restart:"Jugar de nuevo", correct:"¡Correcto!", wrong:"No del todo.", answer:"Respuesta correcta", score:"Puntos", task:"Pregunta", complete:"¡Completado!", intro:"10 retos variados en el mapa", sequence:"Siguiente lugar", namePrompt:"¿Cómo te llamas?", namePlaceholder:"Nombre del jugador", save:"Guardar resultado", saved:"Resultado guardado", best:"Tu mejor resultado", invalidName:"Usa entre 2 y 16 caracteres: letras, números, _ o -" },
};

// Street View availability sidecar (built by the VPS metadata sweep):
// {"lat,lng"@4dp: 1}. When the POI center is covered, the mapcard gets a pegman link.
const SV_PATH = path.join(process.cwd(), "public", "data", "sight-sv.json");
let SV_OK: Record<string, 1 | string> = {};
if (fs.existsSync(SV_PATH)) {
  try { SV_OK = JSON.parse(fs.readFileSync(SV_PATH, "utf8")); } catch {}
}

// Load the pre-built POI id → URL per lang index (built by build-poi-url-index.mts).
const URL_INDEX_PATH = path.join(process.cwd(), "public", "data", "_poi-url-index.json");
let POI_URLS: Record<string, Record<string, string>> = {};
if (fs.existsSync(URL_INDEX_PATH)) {
  try { POI_URLS = JSON.parse(fs.readFileSync(URL_INDEX_PATH, "utf8")); } catch {}
}
if (Object.keys(POI_URLS).length < 1000) {
  throw new Error(
    `POI URL index is incomplete (${Object.keys(POI_URLS).length} entries). ` +
    "Run: npx tsx scripts/build-poi-url-index.mts",
  );
}

// Image-manifest: list of all webp filenames living on VPS under
// /poi-images/ and /geo-images/. POIs whose source TS lacks an `image` field
// can still get a marker-popup thumbnail if the matching file exists.
const IMG_MANIFEST_PATH = path.join(process.cwd(), "public", "data", "_image-manifest.json");
const IMG_SET = new Set<string>();
if (fs.existsSync(IMG_MANIFEST_PATH)) {
  try {
    const arr = JSON.parse(fs.readFileSync(IMG_MANIFEST_PATH, "utf8")) as string[];
    for (const f of arr) IMG_SET.add(f);
  } catch {}
}
function lookupFallbackImage(id: string): string | undefined {
  const tryNames = (s: string): string | undefined => {
    if (IMG_SET.has(`${s}.webp`)) return `/poi-images/${s}.webp`;
    // German umlaut transliteration: nuernberg ↔ nurnberg, koeln ↔ koln
    const stripped = s.replace(/ae/g, "a").replace(/oe/g, "o").replace(/ue/g, "u").replace(/ss/g, "s");
    if (stripped !== s && IMG_SET.has(`${stripped}.webp`)) return `/poi-images/${stripped}.webp`;
    return undefined;
  };
  const direct = tryNames(id);
  if (direct) return direct;
  // Strip common ID prefixes/suffixes (city-X, X-extra, X-poi)
  let core = id;
  if (core.startsWith("city-")) core = core.slice(5);
  core = core.replace(/-(extra|poi)$/, "");
  if (core !== id) return tryNames(core);
  return undefined;
}

function slimPoi(p: any, proj: (lon:number,lat:number)=>[number,number], W:number, H:number): SlimPoi | null {
  if (!p?.coords || !Array.isArray(p.coords) || p.coords.length < 2) return null;
  const [lon, lat] = p.coords;
  if (typeof lon !== "number" || typeof lat !== "number") return null;
  if (p.type === "country") return null;
  let xy: [number, number];
  try { xy = proj(lon, lat); } catch { return null; }
  const [cx, cy] = xy;
  if (cx < -5 || cx > W + 5 || cy < -5 || cy > H + 5) return null;
  const name: any = {};
  for (const l of LANGS) {
    if (p.name?.[l]) name[l] = p.name[l];
  }
  if (!Object.keys(name).length) return null;
  // URL lookup with dedup-aware fallback: tons of POIs exist as `<name>` AND
  // `<name>-poi` variants but only one of them is registered in the URL index.
  // Cluster popup shows the unregistered ones as italic "no-link" (#ffffff70)
  // which looks like a "grey/dead" entry. Try common alias forms here.
  let urls = POI_URLS[p.id];
  if (!urls) {
    const id = p.id as string;
    const aliases: string[] = [];
    if (id.endsWith("-poi")) aliases.push(id.slice(0, -4));
    else aliases.push(`${id}-poi`);
    if (id.endsWith("-extra")) aliases.push(id.slice(0, -6));
    // City self-page sits at state-slug, not POI-slug
    if (id.endsWith("-city")) aliases.push(id.slice(0, -5));
    for (const a of aliases) {
      if (POI_URLS[a]) { urls = POI_URLS[a]; break; }
    }
  }
  const t = p.type ?? "city";
  // Card preview snippet: first sentence of descriptionAdvanced (fallback description), per lang.
  // Capped at ~200 chars to keep map HTML lean.
  const desc: any = {};
  for (const l of LANGS) {
    const raw = (p.descriptionAdvanced?.[l] || p.description?.[l] || "").toString();
    if (!raw) continue;
    const trimmed = raw.replace(/\s+/g, " ").trim();
    // First sentence: split on .!? then take first non-empty segment up to 200 chars.
    const sentence = trimmed.split(/(?<=[.!?])\s+/)[0] || trimmed;
    desc[l] = sentence.length > 200 ? sentence.slice(0, 197) + "..." : sentence;
  }
  // First 2 facts per lang (from facts[] array, fallback to factsAdvanced).
  const facts: any = {};
  for (const l of LANGS) {
    const arr = p.facts?.[l] || p.factsAdvanced?.[l];
    if (Array.isArray(arr) && arr.length) {
      facts[l] = arr.slice(0, 2).map((s: any) => (typeof s === "string" ? s.slice(0, 110) : ""));
    }
  }
  const img = typeof p.image === "string" ? p.image : lookupFallbackImage(p.id);
  // Street View flag: store the pegman viewpoint ("lat,lng") when covered.
  // Pano_id-s talalatnal (string ertek) "panoid@lat,lng" — a kliens pano= linket
  // epit belole (viewpoint csak ~50m-en belul old fel panoramat).
  const svk = `${lat.toFixed(4)},${lon.toFixed(4)}`;
  const svv = SV_OK[svk];
  const sv = svv ? (typeof svv === "string" ? `${svv}@${svk}` : svk) : undefined;
  return {
    id: p.id, type: t, grp: groupOf(t),
    cx: +cx.toFixed(1), cy: +cy.toFixed(1),
    lon: +lon.toFixed(6), lat: +lat.toFixed(6),
    name,
    ...(sv ? { sv } : {}),
    ...(img ? { img } : {}),
    ...(Object.keys(desc).length ? { desc } : {}),
    ...(Object.keys(facts).length ? { facts } : {}),
    ...(urls ? { urls } : {}),
  };
}

function mergeNativeMapSidecars(country: Country, pois: any[]): void {
  const nativeLang = country.iso === "it" ? "it" : country.iso === "es" ? "es" : null;
  if (!nativeLang) return;
  const dir = path.join(process.cwd(), "public", "data", "i18n", nativeLang);
  if (!fs.existsSync(dir)) return;
  for (const poi of pois) {
    if (!poi?.id) continue;
    const file = path.join(dir, `${poi.id}.json`);
    if (!fs.existsSync(file)) continue;
    try {
      const native = JSON.parse(fs.readFileSync(file, "utf8"));
      if (native.name) (poi.name ||= {})[nativeLang] = native.name;
      if (native.description) (poi.description ||= {})[nativeLang] = native.description;
      const advanced = native.descriptionAdvanced || native.descAdv;
      if (advanced) (poi.descriptionAdvanced ||= {})[nativeLang] = advanced;
      if (Array.isArray(native.facts) && native.facts.length) (poi.facts ||= {})[nativeLang] = native.facts;
    } catch {}
  }
}

function parseViewBox(vb: string): { w: number; h: number } {
  const m = vb.split(/\s+/).map(Number);
  return { w: m[2] || 1000, h: m[3] || 1000 };
}

// Drop near-duplicate consecutive points and round to 1 decimal.
// `minDist` is in SVG units; 0.5 is invisible at country zoom.
function simplifyPath(d: string, minDist = 0.5): string {
  const parts = d.match(/[A-Za-z][^A-Za-z]*/g) || [];
  let lastX = -1e9, lastY = -1e9;
  const out: string[] = [];
  const r = (n: number) => (Math.round(n * 10) / 10).toString();
  for (const part of parts) {
    const cmd = part[0];
    const argStr = part.slice(1).trim();
    if ((cmd === "M" || cmd === "L") && argStr) {
      const nums = argStr.split(/[,\s]+/).map(Number);
      if (nums.length >= 2 && !isNaN(nums[0]) && !isNaN(nums[1])) {
        const x = nums[0], y = nums[1];
        const dx = x - lastX, dy = y - lastY;
        if (cmd === "M" || Math.hypot(dx, dy) >= minDist) {
          out.push(cmd + r(x) + "," + r(y));
          lastX = x; lastY = y;
        }
        continue;
      }
    }
    if (cmd === "Z" || cmd === "z") {
      out.push("Z");
      lastX = -1e9; lastY = -1e9;
      continue;
    }
    // Fallback: preserve unknown commands as-is
    out.push(part);
  }
  return out.join("");
}

function escAttr(s: string): string {
  return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function escText(s: string): string {
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

// Coord-based URL backfill: if two POIs sit on identical coords and one has
// no URL (typical for `<name>` vs `<name>-poi` duplicates not caught by the
// suffix-alias logic in slimPoi), copy the URLs from its sibling so the
// cluster popup doesn't render it as an italic "no-link" entry.
function backfillUrlsByCoord(pois: SlimPoi[]): void {
  const byCoord = new Map<string, SlimPoi[]>();
  for (const p of pois) {
    const k = `${p.cx.toFixed(1)},${p.cy.toFixed(1)}`;
    let arr = byCoord.get(k); if (!arr) { arr = []; byCoord.set(k, arr); }
    arr.push(p);
  }
  for (const group of byCoord.values()) {
    if (group.length < 2) continue;
    const donor = group.find(g => g.urls && Object.keys(g.urls).length > 0);
    if (!donor) continue;
    for (const g of group) {
      if (!g.urls || Object.keys(g.urls).length === 0) g.urls = donor.urls;
    }
  }
}

function renderHtml(c: Country, lang: Lang, regions: any[], pois: SlimPoi[], viewBox: string, W: number, H: number, searchExtra: SearchExtra[] = [], initView?: { s: number; tx: number; ty: number }): string {
  // Search-only entries: POIs moved to a sub-map (island/metro). Not drawn as
  // markers, but searchable — a hit links to the sub-map where the POI lives.
  const SEARCH_EXTRA_JS = searchExtra.map((e) => {
    const nm = (e.name && (e.name[lang] || e.name.en || e.name.de)) || "";
    const alln = [e.name?.de, e.name?.hu, e.name?.ro, e.name?.en].filter(Boolean)
      .map((n: any) => String(n).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")).join("|");
    const lon = e.coords?.[0], lat = e.coords?.[1];
    return { n: nm, s: alln, u: `/${e.submap}-map/${lang === "hu" ? "" : lang + "/"}`, lon, lat };
  }).filter((x) => x.n);
  const availableLangs = langsForCountry(c);
  const countryName = c.names[lang] || c.names.en || c.slug;
  const t = `${countryName} ${TITLE_SUFFIX[lang]}`;
  const hint = HINT[lang], more = MORE[lang], back = BACK[lang], searchPh = SEARCH_PH[lang], locationUi = LOCATION_UI[lang];
  const quizPool = MAP_QUIZ_POOLS[c.iso] || [];
  const poiIds = new Set(pois.map(p => p.id));
  const regionIds = new Set(regions.map(r => r.id));
  for (const task of quizPool) {
    const taskPoiIds = task.type === "find_poi" ? [task.targetPoiId]
      : task.type === "find_region" ? []
      : task.type === "odd_one_out" ? [...task.poiIds, task.targetPoiId]
      : [...task.poiIds, ...task.orderedPoiIds];
    const missingPois = taskPoiIds.filter(id => !poiIds.has(id));
    if (missingPois.length) throw new Error(`Quiz ${c.iso}/${task.id}: missing POI(s): ${missingPois.join(", ")}`);
    if (task.type === "find_region" && !regionIds.has(task.targetRegionId)) {
      throw new Error(`Quiz ${c.iso}/${task.id}: missing region ${task.targetRegionId}`);
    }
  }
  if (quizPool.length && quizPool.length !== 10 && quizPool.length !== 30) {
    throw new Error(`Quiz ${c.iso} must contain 10 base tasks or 30 pooled tasks, got ${quizPool.length}`);
  }
  const quizPayload = quizPool.map(task => ({ ...task, question: task.question[lang] || task.question.en || "" }));
  const quizUi = MAP_QUIZ_UI[lang];
  const langLinks = availableLangs.map(l => l === lang
    ? `<span class="lang on">${l.toUpperCase()}</span>`
    : `<a class="lang" href="/${c.slug}-map/${l==='hu'?'':l+'/'}">${l.toUpperCase()}</a>`
  ).join("");

  // Count POIs per group for chip badges
  const grpCount: Record<string, number> = { city:0, sight:0, nature:0, history:0, industry:0, other:0 };
  for (const p of pois) grpCount[p.grp] = (grpCount[p.grp]||0) + 1;

  // Build clusters at default scale=1. Threshold in viewBox units: ~8 CSS px.
  const CLUSTER_THRESH = Math.max(15, Math.min(W, H) / 60);
  type Cluster = { cx: number; cy: number; pois: SlimPoi[] };
  const clusters: Cluster[] = [];
  for (const p of pois) {
    let added = false;
    for (const cl of clusters) {
      if (Math.hypot(p.cx - cl.cx, p.cy - cl.cy) <= CLUSTER_THRESH) {
        cl.pois.push(p);
        const n = cl.pois.length;
        cl.cx = (cl.cx * (n - 1) + p.cx) / n;
        cl.cy = (cl.cy * (n - 1) + p.cy) / n;
        added = true;
        break;
      }
    }
    if (!added) clusters.push({ cx: p.cx, cy: p.cy, pois: [p] });
  }
  const multiClusters = clusters.filter(c => c.pois.length > 1);
  const clusteredIds = new Set<string>();
  for (const c of multiClusters) for (const p of c.pois) clusteredIds.add(p.id);
  // Cluster color = majority group color
  function clusterColor(cl: Cluster): string {
    const cnt: Record<string, number> = {};
    for (const p of cl.pois) cnt[p.grp] = (cnt[p.grp]||0) + 1;
    const top = Object.entries(cnt).sort((a,b)=>b[1]-a[1])[0][0];
    return ({city:'#60a5fa',sight:'#fbbf24',nature:'#22c55e',history:'#c084fc',industry:'#fb923c',other:'#9ca3af'} as any)[top] || '#9ca3af';
  }
  const GROUPS: Grp[] = ["city","sight","nature","history","industry","other"];
  // Tiny inline SVG icons per group (16x16). Single-color, currentColor.
  const ICON: Record<Grp, string> = {
    city: '<path d="M3 21V8l5-3v3l5-3v16M3 12h2m4 0h2m-2 4h2m-2-8h2m4 4h2m-2 4h2m-2-8h2"/>',
    sight: '<path d="M8 1l2.09 4.74L15 6.4l-3.5 3.41.83 4.83L8 12.27 3.67 14.64 4.5 9.81 1 6.4l4.91-.66z"/>',
    nature: '<path d="M8 14V9M8 9l-3 3M8 9l3 3M8 9V5l-3-2M8 5l3-2"/>',
    history: '<path d="M3 13V6l5-3 5 3v7M3 13h10M5 13V6m6 7V6"/>',
    industry: '<path d="M2 13V6l4 2V6l4 2V6l4 2v5z"/>',
    other: '<circle cx="8" cy="8" r="3"/>',
  };
  const GCOL: Record<Grp,string> = { city:"#60a5fa", sight:"#fbbf24", nature:"#22c55e", history:"#c084fc", industry:"#fb923c", other:"#9ca3af" };
  const chipsHtml = GROUPS
    .filter(g => grpCount[g] > 0)
    .map(g => `<button class="chip on g-${g}" data-g="${g}" aria-label="${GROUP_LABELS[g][lang]}" title="${GROUP_LABELS[g][lang]} (${grpCount[g]})"><svg viewBox="0 0 16 16" width="14" height="14" stroke="${GCOL[g]}" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round">${ICON[g]}</svg></button>`)
    .join("");
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=3">
<title>${t} — Plizio</title>
<meta name="description" content="${hint}">
<link rel="canonical" href="https://plizio.com/${c.slug}-map/${lang==='hu'?'':lang+'/'}">
${availableLangs.map(L => `<link rel="alternate" hreflang="${L}" href="https://plizio.com/${c.slug}-map/${L==='hu'?'':L+'/'}">`).join("\n")}
<link rel="alternate" hreflang="x-default" href="https://plizio.com/${c.slug}-map/">
<meta property="og:title" content="${t} — Plizio">
<meta property="og:description" content="${hint}">
<meta property="og:url" content="https://plizio.com/${c.slug}-map/${lang==='hu'?'':lang+'/'}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#f6f1e7">
<style>
*{box-sizing:border-box}
html,body{margin:0;padding:0;height:100%;background:#f6f1e7;color:#211d18;font-family:Georgia,'Times New Roman',serif;overflow:hidden}
header{display:flex;align-items:center;gap:.65rem;height:56px;padding:.45rem .8rem;background:#fbf8f1;border-bottom:1px solid #ddd4c2;box-shadow:0 3px 16px #49351d0d;position:relative;z-index:5}
header a.back{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border:1px solid #cfc3af;border-radius:3px;background:#f6f1e7;color:#8f3d1f;text-decoration:none;transition:background .15s,border-color .15s}
header a.back:hover,header a.back:focus-visible{background:#f3e7df;border-color:#b4502a;outline:none}
header a.back:active{background:#ead7ca}
.map-title{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
.map-title small{font:800 .56rem/1.1 system-ui,-apple-system,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#b4502a}
header h1{margin:0;font-size:clamp(.86rem,2vw,1.02rem);line-height:1.1;font-weight:700;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
header .langs{display:flex;gap:.25rem;flex-shrink:0}
.quiz-launch{height:31px;padding:0 .72rem;border-radius:3px;border:1px solid #8f3d1f;background:#b4502a;color:#fffaf3;font:800 .7rem/1 system-ui,-apple-system,sans-serif;cursor:pointer;white-space:nowrap;box-shadow:0 2px 0 #713018}
.quiz-launch:hover,.quiz-launch:focus-visible{background:#8f3d1f;color:#fff;outline:2px solid #d9b9a7;outline-offset:2px}
.lang{font:800 .66rem/1 system-ui,-apple-system,sans-serif;padding:.34rem .42rem;border:1px solid transparent;border-radius:3px;color:#6b6356;text-decoration:none;background:#f6f1e7}
.lang:hover,.lang:focus-visible{border-color:#cfc3af;outline:none}
.lang.on{background:#211d18;color:#fbf8f1}
#stage{position:absolute;inset:104px 0 0 0;overflow:hidden;touch-action:none;background:#efe8da}
#stage::before{content:"";position:absolute;inset:0;pointer-events:none;z-index:0;opacity:.55;background-image:linear-gradient(#cfc3af45 1px,transparent 1px),linear-gradient(90deg,#cfc3af45 1px,transparent 1px),radial-gradient(circle at 50% 45%,#fffaf288,transparent 58%);background-size:28px 28px,28px 28px,100% 100%}
#svg{width:100%;height:100%;display:block;cursor:grab;position:relative;z-index:1}
#svg.drag{cursor:grabbing}
.region{fill:#e5cbbb;stroke:#8f3d1f;stroke-width:1.15;stroke-opacity:.82;transition:fill .15s,stroke .15s}
.region:hover{fill:#d9ae96;stroke:#6f2f19}
/* Island maps: the single island shape is decorative — don't let it grab taps
   (no sticky hover-highlight on touch, POI markers stay easy to tap). Pan still
   works via the svg background. */
#gR.noint .region{pointer-events:none}
#gR.noint .region:hover{fill:#e5cbbb}
.label{fill:#5f5144;font-size:11px;font-weight:700;pointer-events:none;text-anchor:middle;paint-order:stroke;stroke:#f6f1e7;stroke-width:2px;stroke-linejoin:round}
.poi{cursor:pointer}
.poi circle{fill:#7c756a;stroke:#fbf8f1;stroke-width:.85;transition:r .12s,opacity .12s}
.poi.g-city circle{fill:#397ea8}.poi.g-sight circle{fill:#c28b22}.poi.g-nature circle{fill:#4e8054}.poi.g-history circle{fill:#8b5f91}.poi.g-industry circle{fill:#b96832}.poi.g-other circle{fill:#77736d}
.poi.dim{opacity:.16;pointer-events:none}
.poi.dim circle{filter:none}
.poi,.cluster{transition:opacity .2s}
#svg.dim-pois .poi,#svg.dim-pois .cluster{opacity:.1!important}
#svg.dim-pois .poi circle{filter:none}
.poi.match{pointer-events:auto}
.poi.match circle{stroke:#211d18;stroke-width:2;filter:drop-shadow(0 2px 2px #5a453755)}
.poi:hover circle,.poi.active circle{r:7.5;fill:#b4502a;stroke:#fffaf3;opacity:1;filter:drop-shadow(0 2px 3px #5a453766)}
.poi-metro{cursor:pointer}
.poi-metro .pm-halo{fill:#ffd54a;opacity:.18;animation:pmpulse 2.2s ease-in-out infinite}
.poi-metro .pm-ring{fill:none;stroke:#ffd54a;stroke-width:1.6;opacity:.85}
.poi-metro .pm-dot{fill:#fff;filter:drop-shadow(0 0 5px #ffd54a)}
.poi-metro .pm-label{fill:#211d18;font-size:11px;font-weight:800;paint-order:stroke;stroke:#f6f1e7;stroke-width:3.2px;stroke-linejoin:round;letter-spacing:.2px}
.poi-metro:hover .pm-ring,.poi-metro:focus .pm-ring{stroke-width:2.4;opacity:1}
.poi-metro:hover .pm-label{fill:#ffe98a}
@keyframes pmpulse{0%,100%{opacity:.16;transform:scale(1)}50%{opacity:.34;transform:scale(1.18)}}
.controls{position:absolute;top:56px;left:0;right:0;height:48px;z-index:4;padding:.42rem .6rem;display:flex;gap:.4rem;align-items:center;background:#f6f1e7;border-bottom:1px solid #ddd4c2;box-shadow:0 4px 14px #49351d0d;font-family:system-ui,-apple-system,sans-serif}
.chips{display:flex;gap:.25rem;flex-shrink:0}
.chip{flex-shrink:0;width:31px;height:31px;border-radius:3px;border:1px solid #cfc3af;background:#fbf8f1;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;user-select:none;padding:0;opacity:.42;transition:opacity .12s,background .12s,border-color .12s,transform .12s}
.chip.on{opacity:1}
.chip:hover,.chip:focus-visible{transform:translateY(-1px);outline:none;border-color:#8f3d1f}
.chip.on.g-city{background:#e5eff4;border-color:#79a7bd}
.chip.on.g-sight{background:#f3ead0;border-color:#c9a75d}
.chip.on.g-nature{background:#e4eee1;border-color:#83a47e}
.chip.on.g-history{background:#eee4ed;border-color:#aa89a9}
.chip.on.g-industry{background:#f2e2d7;border-color:#c28a67}
.chip.on.g-other{background:#ebe8e2;border-color:#aaa49b}
.chip svg{display:block}
.search{flex:1;min-width:0;display:flex;align-items:center;gap:.3rem;background:#fbf8f1;border:1px solid #cfc3af;border-radius:3px;padding:.15rem .5rem .15rem .65rem;height:31px;position:relative}
.search:focus-within{border-color:#b4502a;box-shadow:0 0 0 2px #b4502a18}
.search input{flex:1;border:none;outline:none;background:transparent;color:#211d18;font-size:.82rem;padding:.25rem 0;min-width:0;font-family:inherit}
.search input::placeholder{color:#8c8376}
.search-results{position:absolute;top:35px;left:-1px;right:-1px;background:#fbf8f1;border:1px solid #cfc3af;border-radius:3px;max-height:280px;overflow-y:auto;display:none;z-index:10;box-shadow:0 12px 28px #49351d2e}
.search.has-q .search-results.has-hits{display:block}
.search-results a{display:flex;align-items:center;gap:.4rem;padding:.48rem .58rem;color:#211d18;text-decoration:none;font-size:.8rem;border-bottom:1px solid #e5ddcf;cursor:pointer}
.search-results a:last-child{border-bottom:none}
.search-results a:hover,.search-results a.active{background:#f3e7df}
.search-results .dot{width:8px;height:8px;border-radius:50%;flex:none}
.search-results .nm{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.search-results .gr{font-size:.65rem;color:#786f62;text-transform:uppercase;letter-spacing:.04em}
.search-results .smore{display:flex;align-items:center;justify-content:center;width:100%;padding:.48rem;background:#f3e7df;color:#8f3d1f;border:none;border-top:1px solid #d8c8ba;cursor:pointer;font-size:.75rem;font-weight:700}
.search-results .smore:hover{background:#ead7ca}
.search-results .srest a{background:#f6f1e7}
.search button{background:transparent;border:none;color:#8c8376;font-size:1rem;cursor:pointer;padding:0 .15rem;display:none;line-height:1}
.search.has-q button{display:block}
.poi.hidden{display:none !important}
.poi.reveal{display:initial}
.cluster.hidden{display:none !important}
.cluster{cursor:pointer}
.cluster circle{transition:r .12s}
.cluster:hover circle{r:14}
/* At default zoom: clusters visible, in-cluster POIs hidden */
.poi.in-cluster{display:none}
/* At higher zoom: clusters hide, in-cluster POIs become visible */
#svg.expand .cluster{display:none}
#svg.expand .poi.in-cluster{display:initial}
#svg.quiz-mode .poi{display:none!important}
#svg.quiz-mode .poi.quiz-visible{display:initial!important;opacity:1!important;pointer-events:auto!important}
#svg.quiz-mode .cluster,#svg.quiz-mode .poi-metro{display:none!important}
#svg.quiz-mode .region{pointer-events:none;opacity:.7}
#svg.quiz-mode.quiz-region-task .region{pointer-events:auto;cursor:pointer;opacity:1}
#svg.quiz-mode .poi.quiz-correct circle,#svg.quiz-mode .region.quiz-correct{fill:#477a50!important;stroke:#e9f0dc!important;stroke-width:3!important;filter:drop-shadow(0 2px 2px #18392199)}
#svg.quiz-mode .poi.quiz-wrong circle,#svg.quiz-mode .region.quiz-wrong{fill:#a74638!important;stroke:#f5dfcc!important;stroke-width:3!important;filter:drop-shadow(0 2px 2px #4c171799)}
.quiz-marker-tag{pointer-events:none;transition:opacity .12s ease}
.quiz-marker-tag.crowded{opacity:0}
.quiz-label-bg{fill:#f7efd9;stroke:#6d5940;stroke-width:1.5px;rx:4px;ry:4px;filter:drop-shadow(0 2px 2px #1117)}
.quiz-marker-label{fill:#29271f;font-size:11px;font-weight:900;text-anchor:middle;paint-order:stroke;stroke:#f7efd9;stroke-width:1.6px;stroke-linejoin:round;letter-spacing:.1px}
#svg.quiz-mode .poi:hover .quiz-marker-tag,#svg.quiz-mode .poi:focus .quiz-marker-tag,#svg.quiz-mode .poi:focus-visible .quiz-marker-tag{opacity:1}
.quiz-panel{box-sizing:border-box;position:absolute;z-index:8;top:.75rem;left:50%;width:min(92vw,570px);transform:translateX(-50%) rotate(-.18deg);color:#2e3027;background-color:#f3ead2;background-image:linear-gradient(#6f9bac22 1px,transparent 1px),radial-gradient(circle at 12% 18%,#8b633e10 0 1px,transparent 1.5px),radial-gradient(circle at 82% 72%,#7e563414 0 1px,transparent 1.5px);background-size:100% 25px,17px 19px,23px 21px;border:1px solid #c7ae83;border-radius:4px 4px 12px 5px;box-shadow:0 18px 42px #0009,0 2px 0 #fff8 inset;padding:1rem 1.15rem 1.05rem;display:none;font-family:Georgia,'Times New Roman',serif}
.quiz-panel::before{content:"";position:absolute;top:-9px;left:50%;width:82px;height:19px;transform:translateX(-50%) rotate(1.5deg);background:#d7c196d9;border:1px solid #b79c6a88;box-shadow:0 2px 3px #5b402b35}
.quiz-panel.open{display:block;animation:quizIn .22s ease-out}
@keyframes quizIn{from{opacity:0;transform:translate(-50%,-8px)}to{opacity:1;transform:translate(-50%,0)}}
.quiz-top{display:flex;align-items:center;gap:.7rem;min-height:31px;border-bottom:1px solid #89755455;padding-bottom:.45rem}
.quiz-progress{font:800 .68rem/1.1 system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#405f68;white-space:nowrap}
.quiz-ruler{display:flex;flex:1;gap:3px;align-items:flex-end;height:15px;border-bottom:2px solid #9b8055;padding:0 2px}
.quiz-ruler i{display:block;flex:1;height:5px;background:#bfa77b;border-radius:2px 2px 0 0}
.quiz-ruler i.past{height:9px;background:#607f68}.quiz-ruler i.now{height:14px;background:#a54936}
.quiz-score{display:flex;align-items:center;justify-content:center;min-width:58px;min-height:28px;padding:0 .38rem;border:2px double #a54936;border-radius:50%;transform:rotate(2deg);font:800 .68rem/1 system-ui,sans-serif;color:#993c31;background:#f8edda99}
.quiz-exit{width:28px;height:28px;border-radius:50%;border:1px solid #8c7555;background:#eee1c6;color:#514631;font-size:1rem;cursor:pointer;box-shadow:0 1px 0 #fff inset}
.quiz-exit:hover,.quiz-exit:focus-visible{background:#dfcba6;outline:2px solid #456d76;outline-offset:2px}
.quiz-question{font-size:clamp(1.02rem,2.8vw,1.22rem);font-weight:700;line-height:1.35;margin:.72rem 0 .25rem;color:#282b24;text-wrap:balance}
.quiz-sub{font:italic .76rem/1.35 Georgia,serif;color:#456d76;min-height:1rem}
.quiz-feedback{display:none;position:relative;margin-top:.65rem;padding:.58rem .75rem .58rem 2.2rem;border:1px solid;font:700 .82rem/1.35 system-ui,sans-serif;transform:rotate(-.25deg)}
.quiz-feedback.show{display:block}
.quiz-feedback::before{position:absolute;left:.65rem;top:50%;transform:translateY(-50%) rotate(-8deg);font:900 1.25rem/1 Georgia,serif}
.quiz-feedback.ok{background:#dfe8d1;color:#315a39;border-color:#78906a}.quiz-feedback.ok::before{content:"\\2713"}
.quiz-feedback.bad{background:#f1d9ca;color:#8b342b;border-color:#b86a58}.quiz-feedback.bad::before{content:"\\2717"}
.quiz-actions{display:flex;gap:.55rem;margin-top:.65rem}
.quiz-btn{flex:1;border:1px solid #724736;border-radius:3px;padding:.68rem .8rem;font:800 .8rem/1 system-ui,sans-serif;cursor:pointer;background:#a95b3f;color:#fff8e8;box-shadow:0 2px 0 #603828,0 1px 0 #d98b69 inset;letter-spacing:.02em}
.quiz-btn:hover,.quiz-btn:focus-visible{background:#8f4934;outline:2px solid #456d76;outline-offset:2px}.quiz-btn:active{transform:translateY(1px);box-shadow:0 1px 0 #603828}
.quiz-btn.secondary{background:#e7d8b8;color:#4b513f;border-color:#94805e;box-shadow:0 2px 0 #a99775,0 1px 0 #fff8 inset}
.quiz-complete{text-align:center;padding:.55rem 0 .35rem}
.quiz-complete strong{display:flex;align-items:center;justify-content:center;width:104px;height:66px;margin:.1rem auto .35rem;border:3px double #a54936;border-radius:50%;transform:rotate(-3deg);font:800 1.45rem/1 system-ui,sans-serif;color:#9b3f32;background:#f6e6ce99}
.quiz-complete span{font:italic .78rem/1 Georgia,serif;color:#53695f}
.quiz-name-form{display:grid;gap:.45rem;margin-top:.7rem;text-align:left}
.quiz-name-form label{font:700 .76rem/1.2 system-ui,sans-serif;color:#4e5a4f}
.quiz-name-row{display:flex;gap:.45rem}
.quiz-name-row input{flex:1;min-width:0;border:0;border-bottom:2px solid #67808a;background:#fff4d955;color:#30362f;padding:.62rem .7rem;font:700 .84rem/1 system-ui,sans-serif;outline:none}
.quiz-name-row input:focus{border-color:#a54936;box-shadow:0 2px 0 #a5493630}
.quiz-name-row .quiz-btn{flex:0 0 auto}
.quiz-save-status{min-height:1rem;font:700 .72rem/1.2 system-ui,sans-serif;color:#477a50;text-align:center}
.quiz-save-status.error{color:#a74638}
.quiz-best{font:700 .75rem/1.2 system-ui,sans-serif;color:#456d76;text-align:center;margin-top:.35rem}
body.quiz-active .controls{opacity:.12;pointer-events:none}
body.quiz-active .hint{display:none}
@media(max-width:640px){header{height:84px;gap:.35rem;padding:.42rem 3rem 2rem .5rem}.map-title small{display:none}header h1{font-size:.82rem}.quiz-launch{position:absolute;right:.5rem;top:.42rem;width:34px;padding:0;font-size:0}.quiz-launch::before{content:"◆";font-size:.72rem}header .langs{position:absolute;left:48px;right:48px;bottom:5px;justify-content:center}.lang{padding:.3rem .55rem;font-size:.62rem}.controls{top:84px}.hint{top:140px}#stage{inset:132px 0 0}.quiz-panel{position:fixed;top:auto;bottom:.45rem;width:calc(100vw - .8rem);max-height:min(62vh,470px);overflow:auto;padding:.85rem .8rem .8rem;transform:translateX(-50%) rotate(-.1deg)}.quiz-panel.open{animation:quizSheetIn .24s ease-out}.quiz-marker-label{font-size:10px;stroke-width:1.5px}.quiz-progress{font-size:.61rem}.quiz-score{min-width:51px;font-size:.62rem}.quiz-ruler{gap:2px}.quiz-name-row{flex-direction:column}.quiz-name-row .quiz-btn{width:100%}}
@keyframes quizSheetIn{from{opacity:0;transform:translate(-50%,18px)}to{opacity:1;transform:translate(-50%,0)}}
@media(prefers-reduced-motion:reduce){.quiz-panel.open{animation:none}.quiz-btn:active{transform:none}}
.hint{position:absolute;top:112px;left:50%;transform:translateX(-50%);background:#fbf8f1e8;border:1px solid #d8cdbc;box-shadow:0 5px 18px #49351d1f;padding:.42rem .8rem;border-radius:3px;font:700 .72rem/1.2 system-ui,-apple-system,sans-serif;color:#6b6356;pointer-events:none;z-index:3;animation:fadeOut 4s 2s forwards}
@keyframes fadeOut{to{opacity:0}}
.popup{position:absolute;bottom:0;left:0;right:0;background:#fbf8f1f2;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-top:1px solid #cfc3af;border-radius:8px 8px 0 0;padding:1rem 1.2rem 1.4rem;transform:translateY(100%);transition:transform .25s;z-index:10;box-shadow:0 -12px 40px #49351d2b;color:#211d18;font-family:system-ui,-apple-system,sans-serif}
.popup.open{transform:translateY(0)}
.popup .x{position:absolute;top:.5rem;right:.7rem;width:32px;height:32px;border-radius:3px;background:#f3e7df;border:1px solid #d8c8ba;color:#8f3d1f;font-size:1.1rem;cursor:pointer;z-index:2}
.popup h2{margin:0 0 .3rem;font-size:1.1rem;font-weight:800}
.popup .type{font-size:.7rem;color:#b4502a;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem;font-weight:800}
.popup p{margin:0 0 .8rem;font-size:.85rem;line-height:1.45;color:#6b6356}
.popup a.more{display:inline-block;background:#b4502a;color:#fffaf3;text-decoration:none;font-weight:800;padding:.55rem 1rem;border-radius:3px;font-size:.85rem}
.popup .pcard{margin:-1rem -1rem .75rem;border-radius:12px 12px 0 0;overflow:hidden;display:none}
.popup .pcard.has-img{display:block;aspect-ratio:16/9;background-color:#efe8da;background-position:center;background-size:cover;background-repeat:no-repeat}
.popup .pdesc{margin:.5rem 0 .75rem;color:#6b6356;font-size:.88rem;line-height:1.4;display:none}
.popup .pdesc.show{display:block}
.popup .pfacts{margin:.2rem 0 .85rem;padding:0;list-style:none;display:none}
.popup .pfacts.show{display:block}
.popup .pfacts li{position:relative;padding:.2rem 0 .2rem 1rem;color:#71685c;font-size:.8rem;line-height:1.35}
.popup .pfacts li::before{content:"•";position:absolute;left:.15rem;color:#b4502a;font-weight:700}
.popup .single{display:none}.popup .list{display:none}
.popup.mode-single .single{display:block}
.popup.mode-list .list{display:block;max-height:60vh;overflow-y:auto;margin-right:-.5rem;padding-right:.5rem}
.popup .list .lh{font-size:.75rem;color:#786f62;margin:0 0 .5rem;text-transform:uppercase;letter-spacing:.05em}
.popup .list a,.popup .list .nl{display:flex;align-items:center;gap:.6rem;padding:.4rem .45rem;border-radius:3px;text-decoration:none;color:#211d18;font-size:.88rem;border-bottom:1px solid #e5ddcf}
.popup .list a:hover,.popup .list a:active{background:#f3e7df}
.popup .list .lthumb{width:42px;height:42px;border-radius:3px;flex-shrink:0;background:#efe8da center/cover no-repeat;display:flex;align-items:center;justify-content:center}
.popup .list .lthumb .dot{width:9px;height:9px;border-radius:50%}
.popup .list .lbody{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
.popup .list .n{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600}
.popup .list .g{font-size:.64rem;color:#b4502a;text-transform:uppercase;letter-spacing:.04em}
.popup .list .lgo{color:#b4502a;font-size:1.2rem;font-weight:700;flex-shrink:0;padding-right:.3rem}
.popup .list .nl{color:#786f62;font-style:normal}
.mapcard{position:fixed;z-index:20;width:max-content;min-width:150px;max-width:230px;background:#fbf8f1f2;backdrop-filter:blur(13px);-webkit-backdrop-filter:blur(13px);border:1px solid #cfc3af;border-radius:5px;box-shadow:0 14px 38px #49351d3b;opacity:0;visibility:hidden;pointer-events:none;transform:translate(-50%,-100%) translateY(-15px) scale(.95);transform-origin:bottom center;transition:opacity .16s,transform .16s;font-family:system-ui,-apple-system,sans-serif}
.mapcard.open{opacity:1;visibility:visible;pointer-events:auto;transform:translate(-50%,-100%) translateY(-15px) scale(1)}
.mapcard--below{transform:translate(-50%,0) translateY(15px) scale(.95);transform-origin:top center}
.mapcard--below.open{transform:translate(-50%,0) translateY(15px) scale(1)}
.mapcard::after{content:"";position:absolute;left:var(--ax,50%);top:100%;transform:translateX(-50%);border:7px solid transparent;border-top-color:#fbf8f1}
.mapcard--below::after{top:auto;bottom:100%;border-top-color:transparent;border-bottom-color:#fbf8f1}
.mapcard .mc-img{width:100%;aspect-ratio:16/9;background:#efe8da center/cover no-repeat;display:none;border-radius:4px 4px 0 0}
.mapcard .mc-img.has{display:block}
.mapcard .mc-body{padding:9px 11px 11px}
.mapcard .mc-type{font-size:.62rem;letter-spacing:.06em;text-transform:uppercase;color:#b4502a;font-weight:800}
.mapcard .mc-name{font-size:.95rem;font-weight:800;color:#211d18;margin:1px 0 5px;line-height:1.2}
.mapcard .mc-desc{font-size:.76rem;color:#6b6356;line-height:1.4;margin:0 0 9px;display:none}
.mapcard .mc-desc.show{display:block}
.mapcard .mc-more{display:inline-block;background:#b4502a;color:#fffaf3;text-decoration:none;font-weight:800;font-size:.78rem;padding:.42rem .75rem;border-radius:3px}
.mapcard .mc-sv{align-items:center;justify-content:center;width:28px;height:28px;margin-left:7px;vertical-align:-8px;border-radius:50%;background:#fbbc04;color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4)}
.mapcard .mc-sv:hover{background:#f9ab00}
.mapcard .mc-sv svg{display:block}
.mapcard .mc-x{position:absolute;top:5px;right:5px;width:24px;height:24px;border-radius:3px;background:#211d18c9;border:1px solid #fffaf344;color:#fff;font-size:.95rem;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;line-height:1;padding:0}
.burst{position:fixed;inset:0;z-index:15;pointer-events:none;display:none}
.burst.open{display:block}
.burst-svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.burst-line{stroke:#8f3d1f70;stroke-width:1.1;stroke-linecap:round;animation:burstFade .25s ease-out}
.burst-core{fill:#b4502a;filter:drop-shadow(0 2px 3px #49351d66)}
.burst-dots{position:absolute;inset:0}
.burst-dot{position:absolute;transform:translate(-50%,-50%);pointer-events:auto;cursor:pointer;border:none;background:none;padding:0;display:flex;flex-direction:column;align-items:center;gap:3px;animation:burstPop .22s ease-out}
.burst-dot .bd{width:15px;height:15px;border-radius:50%;background:currentColor;box-shadow:0 0 0 2px #fbf8f1,0 2px 5px #49351d66;transition:transform .12s}
.burst-dot:hover .bd,.burst-dot:focus-visible .bd{transform:scale(1.3)}
.burst-dot .bl{font:700 .72rem/1.2 system-ui,-apple-system,sans-serif;color:#211d18;background:#fbf8f1ed;border:1px solid #cfc3af;padding:2px 6px;border-radius:3px;white-space:nowrap;max-width:120px;overflow:hidden;text-overflow:ellipsis;box-shadow:0 2px 6px #49351d26}
@keyframes burstPop{from{opacity:0;transform:translate(-50%,-50%) scale(.4)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}}
@keyframes burstFade{from{opacity:0}to{opacity:1}}
.zoom{position:absolute;right:.7rem;bottom:.7rem;display:flex;flex-direction:column;gap:.35rem;z-index:4}
.zoom button{width:38px;height:38px;border-radius:3px;border:1px solid #cfc3af;background:#fbf8f1;color:#8f3d1f;font-size:1.2rem;font-weight:800;cursor:pointer;box-shadow:0 3px 10px #49351d1f}
.zoom button:hover,.zoom button:focus-visible{background:#f3e7df;border-color:#b4502a;outline:none}.zoom button:active{background:#ead7ca}
.locate{position:absolute;left:.7rem;bottom:.7rem;z-index:5;display:flex;align-items:center;gap:.42rem;height:40px;padding:0 .72rem;border-radius:20px;border:1px solid #b4502a;background:#fbf8f1ed;color:#8f3d1f;font:800 .72rem/1 system-ui,-apple-system,sans-serif;cursor:pointer;box-shadow:0 4px 14px #49351d2b;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.locate:hover,.locate:focus-visible{background:#f3e7df;border-color:#8f3d1f;outline:2px solid #d9b9a7;outline-offset:2px}.locate:disabled{cursor:wait;opacity:.72}.locate svg{flex:none}.locate.loading svg{animation:locspin 1s linear infinite}
.locate-status{position:absolute;left:.7rem;bottom:3.65rem;z-index:5;display:none;max-width:min(78vw,340px);padding:.58rem .72rem;border:1px solid #cfc3af;border-radius:5px;background:#fbf8f1f2;color:#3e382f;box-shadow:0 7px 22px #49351d2b;font:700 .75rem/1.35 system-ui,-apple-system,sans-serif;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.locate-status.show{display:block}.locate-status.error{border-color:#b86a58;color:#8b342b}.poi.location-nearest circle{fill:#b4502a!important;stroke:#fffaf3!important;stroke-width:2.5!important;filter:drop-shadow(0 0 5px #b4502a)}
body.quiz-active .locate,body.quiz-active .locate-status{opacity:.12;pointer-events:none}
@keyframes locspin{to{transform:rotate(360deg)}}
@media(max-width:420px){.locate{width:40px;padding:0;justify-content:center}.locate span{display:none}}
</style>
</head>
<body>
<header>
<a class="back" href="${c.parentMap ? `/${c.parentMap}-map/${lang === "hu" ? "" : lang + "/"}` : "/"}" onclick="if(history.length>1){history.back();return false;}" aria-label="${back}"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
<div class="map-title"><small>PLIZIO / MAP LAB</small><h1>${t}</h1></div>
${quizPool.length ? `<button type="button" class="quiz-launch" id="quizLaunch">◆ ${escText(quizUi.launch)}</button>` : ""}
<div class="langs">${langLinks}</div>
</header>
<div class="controls">
<div class="chips">${chipsHtml}</div>
<div class="search" id="searchWrap"><input id="searchIn" type="search" placeholder="${searchPh}" autocomplete="off"><button id="searchX" aria-label="clear">×</button><div class="search-results" id="searchRes"></div></div>
</div>
<div id="stage">
  <svg id="svg" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet" aria-label="${t}">
    <g id="gR"${c.islandRingsSlug ? ' class="noint"' : ''}>${regions.map(r => `<path class="region" data-id="${escAttr(r.id)}" data-name="${escAttr((r.name && (r.name[lang] || r.name.en)) || r.id)}" d="${r.path}"/>`).join("")}</g>
    <g id="gL">${regions.filter(r => r.labelX && r.labelY).map(r => `<text class="label" x="${r.labelX}" y="${r.labelY}">${escText((r.name && (r.name[lang] || r.name.en)) || r.id)}</text>`).join("")}</g>
    <g id="gP">${pois.map(p => {
      const url = p.urls?.[lang];
      const nm = p.name[lang]||p.name.en||p.id;
      // Metro-area link: a prominent, labelled, one-click pin (not a plain POI dot,
      // so chip filters never hide it and it reads as "open the metro map").
      if (p.id.startsWith("metro-") && url) {
        return `<a class="poi-metro" href="${escAttr(url)}" transform="translate(${p.cx},${p.cy})" aria-label="${escAttr(nm)}"><circle class="pm-halo" r="15"/><circle class="pm-ring" r="9"/><circle class="pm-dot" r="5"/><text class="pm-label" x="0" y="-15" text-anchor="middle">${escText(nm)} ▸</text></a>`;
      }
      const allNames = Array.from(new Set([p.name.de, p.name.hu, p.name.ro, p.name.en].filter(Boolean).map((n:any)=>String(n).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")))).join("|");
      const inCluster = clusteredIds.has(p.id);
      const cls = `poi g-${p.grp}${inCluster ? " in-cluster" : ""}`;
      const attrs = `data-id="${escAttr(p.id)}" data-name="${escAttr(nm)}" data-search="${escAttr(allNames)}" data-grp="${p.grp}" data-cx="${p.cx}" data-cy="${p.cy}" data-lon="${p.lon}" data-lat="${p.lat}"${url?` data-url="${escAttr(url)}"`:""}`;
      const r = p.grp === "city" ? 5 : 3.5;
      return `<g class="${cls}" ${attrs} transform="translate(${p.cx},${p.cy})"><circle r="${r}"/></g>`;
    }).join("")}</g>
    <g id="gC">${multiClusters.map((cl, i) => {
      const r = Math.min(13, 6 + Math.log2(cl.pois.length) * 2);
      const col = clusterColor(cl);
      const grps = Array.from(new Set(cl.pois.map(p => p.grp))).join(",");
      return `<g class="cluster" data-i="${i}" data-grps="${grps}" data-cx="${cl.cx.toFixed(1)}" data-cy="${cl.cy.toFixed(1)}" transform="translate(${cl.cx.toFixed(1)},${cl.cy.toFixed(1)})"><circle r="${r.toFixed(1)}" fill="${col}" stroke="#000" stroke-width=".8" fill-opacity=".88"/><text y="3.5" text-anchor="middle" font-size="${(r*1.1).toFixed(1)}" font-weight="800" fill="#0a0a1f">${cl.pois.length}</text></g>`;
    }).join("")}</g>
  </svg>
  <button type="button" class="locate" id="locateBtn" aria-label="${escAttr(locationUi.button)}" title="${escAttr(locationUi.button)}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><circle cx="12" cy="12" r="8"/></svg><span>${escText(locationUi.button)}</span></button>
  <div class="locate-status" id="locateStatus" role="status" aria-live="polite"></div>
  <div class="zoom"><button id="zin" aria-label="zoom in">+</button><button id="zout" aria-label="zoom out">−</button></div>
  ${quizPool.length ? `<section class="quiz-panel" id="quizPanel" aria-live="polite"></section>` : ""}
</div>
<div class="hint">${hint}</div>
<div class="popup" id="popup" role="dialog" aria-modal="false">
  <button class="x" id="px" aria-label="close">×</button>
  <div class="single">
    <div class="pcard" id="pcard"></div>
    <div class="type" id="ptype"></div>
    <h2 id="pname"></h2>
    <p class="pdesc" id="pdesc"></p>
    <ul class="pfacts" id="pfacts"></ul>
    <a class="more" id="pmore" href="#">${more} →</a>
  </div>
  <div class="list" id="plist"></div>
</div>
<div class="mapcard" id="mapcard" role="dialog" aria-modal="false">
  <button class="mc-x" id="mcx" aria-label="close">×</button>
  <div class="mc-img" id="mcImg"></div>
  <div class="mc-body">
    <div class="mc-type" id="mcType"></div>
    <div class="mc-name" id="mcName"></div>
    <p class="mc-desc" id="mcDesc"></p>
    <a class="mc-more" id="mcMore" href="#">${more} →</a>
    <a class="mc-sv" id="mcSv" href="#" target="_blank" rel="nofollow noopener" title="Street View" aria-label="Street View" style="display:none"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><circle cx="12" cy="6" r="3.1"/><path d="M12 9.8c-2 0-3.4 1.1-3.4 2.6v3l1.5.6.5 5h2.8l.5-5 1.5-.6v-3c0-1.5-1.4-2.6-3.4-2.6z"/></svg></a>
  </div>
</div>
<div class="burst" id="burst"><svg class="burst-svg" id="burstSvg"></svg><div class="burst-dots" id="burstDots"></div></div>
<script>
const LANG=${JSON.stringify(lang)},W=${W},H=${H};
const MAP_QUIZ_ID=${JSON.stringify(c.iso)};
const QUIZ_POOL=${JSON.stringify(quizPayload)};
const QUIZ_UI=${JSON.stringify(quizUi)};
const LOCATION_UI=${JSON.stringify(locationUi)};
try{localStorage.setItem('plizio_language',LANG)}catch(e){}
const CLUSTERS=${JSON.stringify(multiClusters.map(cl => cl.pois.map(p => ({id:p.id, name:p.name[lang]||p.name.en||p.id, grp:p.grp, url:p.urls?.[lang]||null, cx:p.cx, cy:p.cy}))))};
const SEARCH_EXTRA=${JSON.stringify(SEARCH_EXTRA_JS)};
const POI_CARD=${JSON.stringify(Object.fromEntries(pois.filter(p => p.img || p.sv || (p.desc && p.desc[lang]) || (p.facts && p.facts[lang])).map(p => [p.id, {
  i: p.img || undefined,
  s: (p.desc && p.desc[lang]) || undefined,
  f: (p.facts && p.facts[lang]) || undefined,
  v: p.sv || undefined,
}])))};
const svg=document.getElementById('svg'),stage=document.getElementById('stage');
const gR=document.getElementById('gR'),gL=document.getElementById('gL'),gP=document.getElementById('gP'),gC=document.getElementById('gC');
const EXPAND_SCALE=3.5;
let s=${initView ? initView.s : 1},tx=${initView ? initView.tx : 0},ty=${initView ? initView.ty : 0};
function ap(){const tr='translate('+tx+','+ty+') scale('+s+')';gR.setAttribute('transform',tr);gL.setAttribute('transform',tr);gP.setAttribute('transform',tr);if(gC)gC.setAttribute('transform',tr);svg.classList.toggle('expand',s>=EXPAND_SCALE);if(typeof closeMapcard==='function')closeMapcard();if(typeof closeBurst==='function')closeBurst()}
${initView ? "ap();/* island: frame the island bbox on load */" : ""}
function clmp(v){return Math.max(.5,Math.min(8,v))}
function toVb(cx,cy){const r=svg.getBoundingClientRect();return[(cx-r.left)*(W/r.width),(cy-r.top)*(H/r.height)]}
function zoomAt(f,cx,cy){const[vx,vy]=toVb(cx,cy);const ns=clmp(s*f);const k=ns/s;tx=vx-k*(vx-tx);ty=vy-k*(vy-ty);s=ns;ap()}
function zoomCenter(f){const r=svg.getBoundingClientRect();zoomAt(f,r.left+r.width/2,r.top+r.height/2)}
let dr=false,pend=false,dx=0,dy=0,sx=0,sy=0,pid=0;
// Drag uses a MOVE THRESHOLD: pointerdown only ARMS panning; we don't capture the
// pointer until it actually moves >4px. A click without movement therefore reaches
// the target's own handler — fixes desktop where setPointerCapture-on-down stole the
// click from .cluster and .region (country) elements (mobile tap was unaffected).
svg.addEventListener('pointerdown',e=>{if(e.isPrimary===false)return;pend=true;dr=false;dx=sx=e.clientX;dy=sy=e.clientY;pid=e.pointerId});
svg.addEventListener('pointermove',e=>{
  if(pend&&!dr){if(Math.hypot(e.clientX-sx,e.clientY-sy)<=4)return;dr=true;svg.classList.add('drag');try{svg.setPointerCapture(pid)}catch(_){}}
  if(!dr)return;const r=svg.getBoundingClientRect();const k=W/r.width;tx+=(e.clientX-dx)*k;ty+=(e.clientY-dy)*k;dx=e.clientX;dy=e.clientY;ap()
});
svg.addEventListener('pointerup',()=>{pend=false;if(dr){dr=false;svg.classList.remove('drag');try{svg.releasePointerCapture(pid)}catch(_){}}});
svg.addEventListener('pointercancel',()=>{pend=false;dr=false;svg.classList.remove('drag')});
svg.addEventListener('wheel',e=>{e.preventDefault();zoomAt(e.deltaY<0?1.15:1/1.15,e.clientX,e.clientY)},{passive:false});
document.getElementById('zin').onclick=()=>zoomCenter(1.3);
document.getElementById('zout').onclick=()=>zoomCenter(1/1.3);
let pD=0,pS=1;
svg.addEventListener('touchstart',e=>{if(e.touches.length===2){const[a,b]=e.touches;pD=Math.hypot(b.clientX-a.clientX,b.clientY-a.clientY);pS=s;dr=false;pend=false}},{passive:true});
svg.addEventListener('touchmove',e=>{if(e.touches.length===2){const[a,b]=e.touches;const d=Math.hypot(b.clientX-a.clientX,b.clientY-a.clientY);const cx=(a.clientX+b.clientX)/2,cy=(a.clientY+b.clientY)/2;const f=(d/pD)*(pS/s);zoomAt(f,cx,cy);e.preventDefault()}},{passive:false});
const pop=document.getElementById('popup');
const GCOL2={city:'#60a5fa',sight:'#fbbf24',nature:'#22c55e',history:'#c084fc',industry:'#fb923c',other:'#9ca3af'};
function clearMode(){pop.classList.remove('mode-single','mode-list')}
const mapcard=document.getElementById('mapcard');
let mcActiveEl=null;
function markerScreen(cx,cy){const r=svg.getBoundingClientRect();const sc=Math.min(r.width/W,r.height/H);const ox=(r.width-W*sc)/2,oy=(r.height-H*sc)/2;return[r.left+ox+(cx*s+tx)*sc,r.top+oy+(cy*s+ty)*sc];}
function placeMapcardAt(sx,sy){
  const below=sy<195;
  mapcard.classList.toggle('mapcard--below',below);
  const cw=mapcard.offsetWidth||190;const half=cw/2+10;
  const left=Math.max(half,Math.min(window.innerWidth-half,sx));
  // keep the arrow pointing at the marker even after horizontal clamping
  const ax=Math.max(12,Math.min(cw-12,cw/2+(sx-left)));
  mapcard.style.setProperty('--ax',ax+'px');
  mapcard.style.left=left+'px';
  mapcard.style.top=sy+'px';
}
function placeMapcard(cx,cy){const[sx,sy]=markerScreen(cx,cy);placeMapcardAt(sx,sy);}
function closeMapcard(){if(!mapcard.classList.contains('open'))return;mapcard.classList.remove('open');if(mcActiveEl){mcActiveEl.classList.remove('active');mcActiveEl=null}}
function fillCard(d){
  const id=d.id;
  mapcard.querySelector('.mc-type').textContent=d.grp||'';
  mapcard.querySelector('.mc-name').textContent=d.name||id;
  const mb=mapcard.querySelector('.mc-more');
  if(d.url){mb.href=d.url;mb.style.display=''}else{mb.style.display='none'}
  const c=POI_CARD[id]||{};
  const img=mapcard.querySelector('.mc-img');
  if(c.i){img.style.backgroundImage='url("'+c.i.replace(/"/g,'\\"')+'")';img.classList.add('has')}else{img.classList.remove('has');img.style.backgroundImage=''}
  const ds=mapcard.querySelector('.mc-desc');
  if(c.s){ds.textContent=c.s;ds.classList.add('show')}else{ds.textContent='';ds.classList.remove('show')}
  const sv=document.getElementById('mcSv');
  if(c.v){var vAt=c.v.indexOf('@');sv.href='https://www.google.com/maps/@?api=1&map_action=pano&'+(vAt>0?'pano='+c.v.slice(0,vAt)+'&viewpoint='+c.v.slice(vAt+1):'viewpoint='+c.v);sv.style.display='inline-flex'}else{sv.style.display='none'}
}
function openPopup(el){
  closePopup();
  el.classList.add('active');mcActiveEl=el;
  fillCard({id:el.getAttribute('data-id'),name:el.getAttribute('data-name'),grp:el.getAttribute('data-grp'),url:el.getAttribute('data-url')});
  const cx=+el.getAttribute('data-cx')||0,cy=+el.getAttribute('data-cy')||0;
  mapcard.classList.add('open');
  placeMapcard(cx,cy);
}
// Cluster "burst": fan the POIs out around the cluster center as glow dots
// linked by light arcs. Big clusters (>=15) just fly-zoom in instead.
const burst=document.getElementById('burst'),burstSvg=document.getElementById('burstSvg'),burstDots=document.getElementById('burstDots');
let burstData={};
function closeBurst(){if(!burst.classList.contains('open'))return;burst.classList.remove('open');burstSvg.innerHTML='';burstDots.innerHTML='';burstData={};if(!pop.classList.contains('open'))svg.classList.remove('dim-pois')}
function openBurst(clEl){
  closePopup();
  const i=+clEl.getAttribute('data-i');
  const ccx=+clEl.getAttribute('data-cx')||0,ccy=+clEl.getAttribute('data-cy')||0;
  const sInEl=document.getElementById('searchIn');const q=sInEl?norm(sInEl.value.trim()):'';
  const list=(CLUSTERS[i]||[]).filter(p=>{if(!activeGrps.has(p.grp))return false;if(q&&!((POI_SEARCH_BY_ID[p.id]||'').includes(q)))return false;return true});
  if(!list.length)return;
  if(list.length>=15){openClusterList(i);return;}
  svg.classList.add('dim-pois');
  const[CX,CY]=markerScreen(ccx,ccy);
  const n=list.length,ring1=Math.min(n,7),r1=72,r2=124;
  let lines='',html='';
  list.forEach((p,k)=>{
    const inner=k<ring1,cnt=inner?ring1:(n-ring1),idx=inner?k:(k-ring1);
    const R=inner?r1:r2,off=inner?-Math.PI/2:(-Math.PI/2+Math.PI/Math.max(1,cnt));
    const a=off+idx*(2*Math.PI/Math.max(1,cnt));
    const dx=CX+R*Math.cos(a),dy=CY+R*Math.sin(a),col=GCOL2[p.grp]||'#9ca3af';
    lines+='<line class="burst-line" x1="'+CX.toFixed(1)+'" y1="'+CY.toFixed(1)+'" x2="'+dx.toFixed(1)+'" y2="'+dy.toFixed(1)+'"/>';
    html+='<button class="burst-dot" data-id="'+escAttrJs(p.id)+'" style="left:'+dx.toFixed(1)+'px;top:'+dy.toFixed(1)+'px;color:'+col+'"><span class="bd"></span><span class="bl">'+escAttrJs(p.name)+'</span></button>';
  });
  burstSvg.innerHTML=lines+'<circle class="burst-core" cx="'+CX.toFixed(1)+'" cy="'+CY.toFixed(1)+'" r="6"/>';
  burstDots.innerHTML=html;
  burstData=Object.fromEntries(list.map(p=>[p.id,p]));
  burst.classList.add('open');
}
burstDots.addEventListener('click',e=>{const b=e.target.closest('.burst-dot');if(!b)return;e.stopPropagation();const p=burstData[b.getAttribute('data-id')];if(!p)return;fillCard(p);mapcard.classList.add('open');placeMapcardAt(parseFloat(b.style.left),parseFloat(b.style.top));});
function openClusterList(i){const all=CLUSTERS[i];if(!all)return;closeMapcard();closeBurst();const sInEl=document.getElementById('searchIn');const q=sInEl?norm(sInEl.value.trim()):'';const list=all.filter(p=>{if(!activeGrps.has(p.grp))return false;if(q&&!((POI_SEARCH_BY_ID[p.id]||'').includes(q)))return false;return true});const el=document.getElementById('plist');function row(p){const c=POI_CARD[p.id]||{};const col=GCOL2[p.grp]||'#9ca3af';const th=c.i?'<span class="lthumb" style="background-image:url('+String(c.i).replace(/[()]/g,'')+')"></span>':'<span class="lthumb ln" style="background:'+col+'22;color:'+col+'"><span class="dot" style="background:'+col+'"></span></span>';const body='<span class="lbody"><span class="n">'+escAttrJs(p.name)+'</span><span class="g">'+p.grp+'</span></span>';return p.url?'<a href="'+p.url+'">'+th+body+'<span class="lgo">›</span></a>':'<div class="nl">'+th+body+'</div>';}svg.classList.add('dim-pois');el.innerHTML='<p class="lh">'+list.length+' '+(LANG==='hu'?'hely ezen a környéken':LANG==='de'?'Orte in dieser Gegend':LANG==='ro'?'locuri în zonă':'places nearby')+'</p>'+list.map(row).join('');clearMode();pop.classList.add('mode-list','open')}
function escAttrJs(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
gP.addEventListener('click',e=>{const el=e.target.closest('.poi');if(el){e.stopPropagation();if(quizActive){handleQuizPoi(el)}else{openPopup(el)}}});
gR.addEventListener('click',e=>{const el=e.target.closest('.region');if(el&&quizActive){e.stopPropagation();handleQuizRegion(el)}});
if(gC){gC.addEventListener('click',e=>{const cl=e.target.closest('.cluster');if(!cl)return;e.stopPropagation();openBurst(cl)})}
function closePopup(){pop.classList.remove('open');clearMode();closeMapcard();closeBurst();svg.classList.remove('dim-pois');document.querySelectorAll('.poi.active').forEach(n=>n.classList.remove('active'))}
document.getElementById('px').onclick=closePopup;
document.getElementById('mcx').onclick=function(e){e.stopPropagation();closeMapcard()};
mapcard.addEventListener('click',e=>e.stopPropagation());
stage.addEventListener('click',e=>{if(!e.target.closest('.poi')&&!e.target.closest('.cluster')&&!e.target.closest('.popup')&&!e.target.closest('.mapcard')&&!e.target.closest('.burst-dot')){closePopup()}});
// Chip toggle: hide POIs of disabled group
const activeGrps=new Set(${JSON.stringify(GROUPS.filter(g => grpCount[g] > 0))});
function applyGrpFilter(){
  gP.querySelectorAll('.poi').forEach(p=>{const g=p.getAttribute('data-grp');p.classList.toggle('hidden',!activeGrps.has(g))});
  // Cluster + reveal-id computation moved to applySearch() so chip + search
  // combine consistently. Just re-trigger applySearch (it reads activeGrps).
  if(typeof applySearch==='function')applySearch();
}
document.querySelectorAll('.chip[data-g]').forEach(ch=>{ch.addEventListener('click',()=>{const g=ch.getAttribute('data-g');if(activeGrps.has(g)){activeGrps.delete(g);ch.classList.remove('on')}else{activeGrps.add(g);ch.classList.add('on')}applyGrpFilter()})});
// Search: dim non-matching POIs + recompute cluster visibility (only count matches)
const sIn=document.getElementById('searchIn'),sX=document.getElementById('searchX'),sW=document.getElementById('searchWrap'),sRes=document.getElementById('searchRes');
function norm(s){return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')}
// Quick lookup of POI's normalized search text + display name + group + coords by id
const POI_INDEX={};
gP.querySelectorAll('.poi').forEach(p=>{
  const id=p.getAttribute('data-id');
  const t=p.getAttribute('transform')||'';
  const m=t.match(/translate\\(([-\\d.]+),([-\\d.]+)\\)/);
  POI_INDEX[id]={
    search:p.getAttribute('data-search')||'',
    name:p.getAttribute('data-name')||id,
    grp:p.getAttribute('data-grp')||'other',
    url:p.getAttribute('data-url')||null,
    cx:m?+m[1]:0,cy:m?+m[2]:0,
    lon:+(p.getAttribute('data-lon')||0),lat:+(p.getAttribute('data-lat')||0)
  };
});
const POI_SEARCH_BY_ID={};
for(const id in POI_INDEX)POI_SEARCH_BY_ID[id]=POI_INDEX[id].search;
const SUBMAP_POIS=SEARCH_EXTRA.filter(p=>Number.isFinite(p.lon)&&Number.isFinite(p.lat));
const locateBtn=document.getElementById('locateBtn'),locateStatus=document.getElementById('locateStatus');
function locateMessage(text,isError){locateStatus.textContent=text;locateStatus.classList.add('show');locateStatus.classList.toggle('error',!!isError)}
function geoDistanceKm(lon1,lat1,lon2,lat2){const r=Math.PI/180,a1=lat1*r,a2=lat2*r,dLat=(lat2-lat1)*r,dLon=(lon2-lon1)*r;const h=Math.sin(dLat/2)**2+Math.cos(a1)*Math.cos(a2)*Math.sin(dLon/2)**2;return 6371.0088*2*Math.atan2(Math.sqrt(h),Math.sqrt(Math.max(0,1-h)))}
function distanceLabel(km){if(km<1)return Math.max(1,Math.round(km*1000))+' m';const n=km<10?km.toFixed(1):Math.round(km).toString();return (LANG==='en'?n:n.replace('.',','))+' km'}
async function roadDistanceKm(lon,lat,toLon,toLat,straightKm){const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),12000);try{const response=await fetch('https://plizio-camper.plizio.workers.dev/plan',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({origin:[lon,lat],destination:[toLon,toLat],days:1,stops:0,mode:'car'}),signal:controller.signal});if(!response.ok)throw new Error('route');const result=await response.json(),points=Array.isArray(result.route)?result.route:[];let geometryKm=0;for(let i=1;i<points.length;i++)geometryKm+=geoDistanceKm(points[i-1][0],points[i-1][1],points[i][0],points[i][1]);const summaryKm=Number(result&&result.summary&&result.summary.km),km=geometryKm>0?geometryKm:summaryKm;if(!Number.isFinite(km)||km<straightKm*.9||km>Math.max(50000,straightKm*12))throw new Error('route');return km}finally{clearTimeout(timer)}}
function revealNearest(id,p,km,distanceMode){
  if(!activeGrps.has(p.grp)){activeGrps.add(p.grp);const chip=document.querySelector('.chip[data-g="'+p.grp+'"]');if(chip)chip.classList.add('on')}
  if(sIn.value){sIn.value='';applySearch()}else applyGrpFilter();
  s=Math.max(s,4.2);tx=W/2-p.cx*s;ty=H*.42-p.cy*s;ap();
  gP.querySelectorAll('.poi.location-nearest').forEach(el=>el.classList.remove('location-nearest'));
  const el=gP.querySelector('.poi[data-id="'+String(id).replace(/"/g,'\\"')+'"]');
  if(el)el.classList.add('location-nearest');
  locateMessage(LOCATION_UI.nearest+': '+p.name+' · '+distanceMode+' '+distanceLabel(km),false);
}
async function handleLocatedPosition(lon,lat){
  let bestId=null,best=null,bestKm=Infinity;
  for(const id in POI_INDEX){const p=POI_INDEX[id];if(!Number.isFinite(p.lon)||!Number.isFinite(p.lat)||(p.lon===0&&p.lat===0))continue;const km=geoDistanceKm(lon,lat,p.lon,p.lat);if(km<bestKm){bestKm=km;bestId=id;best=p}}
  for(const p of SUBMAP_POIS){const km=geoDistanceKm(lon,lat,p.lon,p.lat);if(km<bestKm){bestKm=km;bestId=null;best={name:p.n,lon:p.lon,lat:p.lat,submapUrl:p.u}}}
  locateBtn.disabled=false;locateBtn.classList.remove('loading');
  if(!best){locateMessage(LOCATION_UI.unavailable,true);return}
  let shownKm=bestKm,distanceMode=LOCATION_UI.straight;try{shownKm=await roadDistanceKm(lon,lat,best.lon,best.lat,bestKm);distanceMode=LOCATION_UI.byCar}catch(e){}
  if(best.submapUrl){
    locateMessage(LOCATION_UI.nearest+': '+best.name+' · '+distanceMode+' '+distanceLabel(shownKm),false);
    try{sessionStorage.setItem('plizio_map_location',JSON.stringify({lon,lat,t:Date.now()}))}catch(e){}
    setTimeout(()=>{window.location.assign(best.submapUrl+'?locate=1')},350);
    return;
  }
  revealNearest(bestId,best,shownKm,distanceMode);
}
locateBtn.addEventListener('click',()=>{
  if(!navigator.geolocation){locateMessage(LOCATION_UI.unavailable,true);return}
  locateBtn.disabled=true;locateBtn.classList.add('loading');locateMessage(LOCATION_UI.locating,false);
  navigator.geolocation.getCurrentPosition(pos=>{
    handleLocatedPosition(pos.coords.longitude,pos.coords.latitude);
  },err=>{locateBtn.disabled=false;locateBtn.classList.remove('loading');locateMessage(err&&err.code===1?LOCATION_UI.denied:LOCATION_UI.unavailable,true)},{enableHighAccuracy:true,timeout:12000,maximumAge:60000});
});
const locateParams=new URLSearchParams(window.location.search);
if(locateParams.get('locate')==='1'){
  locateParams.delete('locate');
  const cleanLocateQuery=locateParams.toString();
  history.replaceState(null,'',window.location.pathname+(cleanLocateQuery?'?'+cleanLocateQuery:'')+window.location.hash);
  let saved=null;
  try{saved=JSON.parse(sessionStorage.getItem('plizio_map_location')||'null');sessionStorage.removeItem('plizio_map_location')}catch(e){}
  if(saved&&Number.isFinite(saved.lon)&&Number.isFinite(saved.lat)&&Date.now()-saved.t<120000){requestAnimationFrame(()=>handleLocatedPosition(saved.lon,saved.lat))}
  else requestAnimationFrame(()=>locateBtn.click());
}
const GCOL_JS={city:'#60a5fa',sight:'#fbbf24',nature:'#22c55e',history:'#c084fc',industry:'#fb923c',other:'#9ca3af'};
function applySearch(){
  const q=norm(sIn.value.trim());
  sW.classList.toggle('has-q',!!q);
  // Phase 1: per-POI dim/match
  gP.querySelectorAll('.poi').forEach(p=>{
    if(!q){p.classList.remove('dim');p.classList.remove('match');return}
    const t=p.getAttribute('data-search')||'';
    const m=t.includes(q);
    p.classList.toggle('match',m);
    p.classList.toggle('dim',!m);
  });
  // Phase 2: cluster visibility — combine search match WITH group filter
  if(!gC)return;
  const revealIds=new Set();
  gC.querySelectorAll('.cluster').forEach(c=>{
    const i=+c.getAttribute('data-i');
    const list=CLUSTERS[i]||[];
    // POI counts as "visible" if: group active AND (no query OR matches query)
    const vis=list.filter(p=>{
      if(!activeGrps.has(p.grp))return false;
      if(!q)return true;
      return (POI_SEARCH_BY_ID[p.id]||'').includes(q);
    });
    const txt=c.querySelector('text');
    if(vis.length===0){c.classList.add('hidden')}
    else if(vis.length===1){c.classList.add('hidden');revealIds.add(vis[0].id)}
    else{c.classList.remove('hidden');if(txt)txt.textContent=String(vis.length)}
  });
  gP.querySelectorAll('.poi.in-cluster').forEach(p=>{
    p.classList.toggle('reveal',revealIds.has(p.getAttribute('data-id')))
  });
  // Phase 3: dropdown list of top matches (count ALL matching for auto-zoom decision)
  if(!q){sRes.innerHTML='';sRes.classList.remove('has-hits');return}
  const hits=[];
  for(const id in POI_INDEX){
    const e=POI_INDEX[id];
    if(!activeGrps.has(e.grp))continue;
    if(!e.search.includes(q))continue;
    if(hits.length<50)hits.push({id,...e});
  }
  // Search-only entries (POIs on a sub-map): match by name, navigate to the sub-map.
  const extraHits=[];
  for(const e of SEARCH_EXTRA){if(e.s.includes(q)&&extraHits.length<20)extraHits.push(e)}
  // Auto-zoom: only ONE visible thing on the map → pan-zoom there.
  // "Visible thing" = either a single non-clustered POI, or one cluster with all matches inside it.
  // Compute by examining current cluster visibility (already set in Phase 2 above).
  if(hits.length>0&&extraHits.length===0){
    // Map: poi-id -> cluster index it belongs to (if any)
    const poiToCluster={};
    for(let i=0;i<CLUSTERS.length;i++)for(const p of CLUSTERS[i])poiToCluster[p.id]=i;
    // Group matches by their visible "thing": either a visible cluster (id of cluster) or 'solo' + poi-id.
    // A cluster is "visible" if its DOM .cluster element does NOT have .hidden.
    // A POI is "shown solo" if either: not in any cluster, OR in a cluster whose .cluster element IS hidden (= cluster collapsed to <=1 match).
    const visibleClusterIdx=new Set();
    if(gC){
      gC.querySelectorAll('.cluster:not(.hidden)').forEach(c=>visibleClusterIdx.add(+c.getAttribute('data-i')));
    }
    const visibleThings=new Set();
    for(const h of hits){
      const ci=poiToCluster[h.id];
      if(ci!==undefined && visibleClusterIdx.has(ci)){
        visibleThings.add('c'+ci);
      }else{
        visibleThings.add('p'+h.id);
      }
    }
    const onlyOneThing=visibleThings.size===1;
    if(onlyOneThing){
      const thing=Array.from(visibleThings)[0];
      let cx,cy;
      if(thing[0]==='p'){
        // Solo POI (or revealed cluster-POI)
        const id=thing.slice(1);
        const e=POI_INDEX[id];
        if(e){cx=e.cx;cy=e.cy}
      }else{
        // Visible cluster (c<idx>) — center = avg of cluster's POI coords
        const ci=+thing.slice(1);
        const cl=CLUSTERS[ci]||[];
        let sx=0,sy=0,n=0;
        for(const p of cl){sx+=p.cx||0;sy+=p.cy||0;n++}
        if(n>0){cx=sx/n;cy=sy/n}
      }
      if(cx!==undefined){
        // Use 4× zoom (below EXPAND_SCALE=6 so clusters stay collapsed as numbers,
        // POI doesn't disappear into expanded form)
        s=4;
        tx=W/2-cx*s;
        // Bias the target 20% above viewBox center so it's not hidden behind the search dropdown / header
        ty=H*0.32-cy*s;
        ap();
        sRes.innerHTML='';
        sRes.classList.remove('has-hits');
        return;
      }
    }
  }
  if(hits.length===0&&extraHits.length===0){sRes.innerHTML='';sRes.classList.remove('has-hits');return}
  // Show first N by default; rest behind a "+more" button so the dropdown
  // stops covering the map when a query has many matches.
  const FIRST_N=8;
  const row=h=>'<a data-id="'+h.id+'" data-cx="'+h.cx+'" data-cy="'+h.cy+'"'+(h.url?' href="'+h.url+'"':'')+'><span class="dot" style="background:'+(GCOL_JS[h.grp]||'#9ca3af')+'"></span><span class="nm">'+h.name.replace(/[<>]/g,'')+'</span><span class="gr">'+String(h.grp)+'</span></a>';
  const exRow=e=>'<a data-extra="1" href="'+e.u+'"><span class="dot" style="background:#ffd54a"></span><span class="nm">'+e.n.replace(/[<>]/g,'')+'</span><span class="gr">›</span></a>';
  let html=hits.slice(0,FIRST_N).map(row).join('')+extraHits.map(exRow).join('');
  if(hits.length>FIRST_N){
    const rest=hits.slice(FIRST_N).map(row).join('');
    const moreLabel=LANG==='hu'?'Még':LANG==='de'?'Mehr':LANG==='ro'?'Mai mult':'More';
    html+='<div class="srest" hidden>'+rest+'</div>'
        +'<button type="button" class="smore" aria-expanded="false">▾ '+moreLabel+' (+'+(hits.length-FIRST_N)+')</button>';
  }
  sRes.innerHTML=html;
  sRes.classList.add('has-hits');
  const moreBtn=sRes.querySelector('.smore');
  if(moreBtn){moreBtn.addEventListener('click',function(e){e.preventDefault();const r=sRes.querySelector('.srest');const open=!r.hasAttribute('hidden');if(open){r.setAttribute('hidden','');this.setAttribute('aria-expanded','false');this.firstChild.nodeValue='▾ '}else{r.removeAttribute('hidden');this.setAttribute('aria-expanded','true');this.firstChild.nodeValue='▴ '}})}
}
sIn.addEventListener('input',applySearch);
sX.addEventListener('click',()=>{sIn.value='';applySearch();sIn.focus()});
// Click on dropdown item: zoom-pan to POI AND open its popup (same as clicking the marker).
sRes.addEventListener('click',e=>{
  const ax=e.target.closest('a[data-extra]');
  if(ax)return; // sub-map link: let the browser navigate
  const a=e.target.closest('a[data-id]');
  if(!a)return;
  e.preventDefault();
  const id=a.getAttribute('data-id');
  const cx=+a.getAttribute('data-cx'),cy=+a.getAttribute('data-cy');
  s=4;
  tx=W/2-cx*s;
  ty=H*0.32-cy*s;
  ap();
  sRes.classList.remove('has-hits');
  sIn.blur();
  // Find the .poi element and trigger openPopup (mirrors marker click).
  const el=gP.querySelector('.poi[data-id="'+id.replace(/"/g,'\\"')+'"]');
  if(el)openPopup(el);
});
// Close dropdown on outside click
document.addEventListener('click',e=>{if(!sW.contains(e.target))sRes.classList.remove('has-hits')});

/* Standalone country-map quiz engine. Country content is generated above,
   while this state machine stays identical for every future country pool. */
let quizActive=false,quizTasks=[],quizIndex=0,quizScore=0,quizTask=null,quizLocked=false,quizSequencePos=0;
const quizPanel=document.getElementById('quizPanel'),quizLaunch=document.getElementById('quizLaunch');
function quizEsc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function quizShuffle(arr){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const x=a[i];a[i]=a[j];a[j]=x}return a}
function quizPoi(id){return gP.querySelector('.poi[data-id="'+String(id).replace(/"/g,'\\\\"')+'"]')}
function quizRegion(id){return gR.querySelector('.region[data-id="'+String(id).replace(/"/g,'\\\\"')+'"]')}
function clearQuizMap(){
  svg.classList.remove('quiz-region-task');
  gP.querySelectorAll('.poi').forEach(function(p){
    p.classList.remove('quiz-visible','quiz-correct','quiz-wrong');
    p.removeAttribute('tabindex');
    p.querySelectorAll('.quiz-marker-tag,.quiz-marker-label').forEach(function(n){n.remove()});
  });
  gR.querySelectorAll('.region').forEach(function(r){r.classList.remove('quiz-correct','quiz-wrong');r.removeAttribute('tabindex')});
}
function quizLabelLines(name,maxChars){
  const words=String(name||'').trim().split(/\s+/).filter(Boolean),lines=[''];
  words.forEach(function(word){
    const last=lines.length-1,joined=(lines[last]+' '+word).trim();
    if(joined.length<=maxChars||!lines[last])lines[last]=joined;
    else if(lines.length<2)lines.push(word);
    else lines[1]+=' '+word;
  });
  if(lines[1]&&lines[1].length>maxChars)lines[1]=lines[1].slice(0,Math.max(1,maxChars-1)).trimEnd()+'…';
  return lines.filter(Boolean);
}
function addQuizLabel(el,occupied){
  if(!el||el.querySelector('.quiz-marker-tag'))return;
  const mobile=innerWidth<=640,fontSize=mobile?10:11,maxChars=mobile?16:20;
  const name=el.getAttribute('data-name')||'',lines=quizLabelLines(name,maxChars);
  const width=Math.max.apply(null,lines.map(function(line){return line.length}))*(fontSize*.57)+14;
  const height=lines.length*fontSize*1.05+10,view=svg.viewBox.baseVal;
  const cx=Number(el.getAttribute('data-cx'))||0,cy=Number(el.getAttribute('data-cy'))||0,gap=mobile?7:8;
  const candidates=[
    [-width/2,-gap-height],[gap,-height/2],[-width-gap,-height/2],[-width/2,gap],
    [gap,-gap-height],[-width-gap,-gap-height],[gap,gap],[-width-gap,gap]
  ];
  let pos=candidates[0],box=null,crowded=true;
  for(let i=0;i<candidates.length;i++){
    const x=cx+candidates[i][0],y=cy+candidates[i][1];
    const candidate={x:x-3,y:y-3,w:width+6,h:height+6};
    const inside=x>=view.x&&y>=view.y&&x+width<=view.x+view.width&&y+height<=view.y+view.height;
    const overlaps=occupied.some(function(o){return candidate.x<o.x+o.w&&candidate.x+candidate.w>o.x&&candidate.y<o.y+o.h&&candidate.y+candidate.h>o.y});
    if(inside&&!overlaps){pos=candidates[i];box=candidate;crowded=false;break}
  }
  if(box)occupied.push(box);
  const tag=document.createElementNS('http://www.w3.org/2000/svg','g');
  tag.setAttribute('class','quiz-marker-tag'+(crowded?' crowded':''));
  tag.setAttribute('transform','translate('+pos[0]+' '+pos[1]+')');
  const bg=document.createElementNS('http://www.w3.org/2000/svg','rect');
  bg.setAttribute('class','quiz-label-bg');bg.setAttribute('width',String(width));bg.setAttribute('height',String(height));
  const text=document.createElementNS('http://www.w3.org/2000/svg','text');
  text.setAttribute('class','quiz-marker-label');text.setAttribute('x',String(width/2));text.setAttribute('y',String(7+fontSize*.8));
  lines.forEach(function(line,index){const span=document.createElementNS('http://www.w3.org/2000/svg','tspan');span.setAttribute('x',String(width/2));span.setAttribute('dy',index?'1.05em':'0');span.textContent=line;text.appendChild(span)});
  tag.appendChild(bg);tag.appendChild(text);el.appendChild(tag);
}
function showQuizPois(ids,labels){
  const limit=innerWidth<=640?12:24,unique=Array.from(new Set(ids)).slice(0,limit),occupied=[];
  unique.forEach(function(id){
    const el=quizPoi(id);if(!el)return;
    el.classList.add('quiz-visible');el.setAttribute('tabindex','0');
  });
  quizShuffle(unique).forEach(function(id){
    const el=quizPoi(id);if(labels)addQuizLabel(el,occupied);
  });
}
function quizAnswerName(task){
  if(task.type==='find_region'){const r=quizRegion(task.targetRegionId);return r?r.getAttribute('data-name'):task.targetRegionId}
  const id=task.type==='sequence'?task.orderedPoiIds[Math.min(quizSequencePos,task.orderedPoiIds.length-1)]:task.targetPoiId;
  const p=POI_INDEX[id];return p?p.name:id;
}
function quizVisibleFor(task){
  if(task.type==='find_region')return [];
  const limit=innerWidth<=640?12:24;
  if(task.type==='odd_one_out'||task.type==='sequence')return task.poiIds.slice(0,limit);
  const target=POI_INDEX[task.targetPoiId];
  if(!target)return [task.targetPoiId];
  const distractors=[];
  for(const id in POI_INDEX){if(id!==task.targetPoiId&&POI_INDEX[id].grp===target.grp)distractors.push(id)}
  return [task.targetPoiId].concat(quizShuffle(distractors).slice(0,limit-1));
}
function quizHeader(){
  let ticks='';
  for(let i=0;i<quizTasks.length;i++)ticks+='<i class="'+(i<quizIndex?'past':i===quizIndex?'now':'')+'"></i>';
  return '<div class="quiz-top"><span class="quiz-progress">'+quizEsc(QUIZ_UI.task)+' '+(quizIndex+1)+'/'+quizTasks.length+'</span><span class="quiz-ruler" aria-hidden="true">'+ticks+'</span><span class="quiz-score">'+quizEsc(QUIZ_UI.score)+': '+quizScore+'</span><button type="button" class="quiz-exit" id="quizExit" aria-label="'+quizEsc(QUIZ_UI.close)+'">×</button></div>';
}
function renderQuizTask(){
  clearQuizMap();closePopup();
  quizTask=quizTasks[quizIndex];quizLocked=false;quizSequencePos=0;
  s=1;tx=0;ty=0;ap();
  svg.classList.add('quiz-mode');
  if(quizTask.type==='find_region'){
    svg.classList.add('quiz-region-task');
    gR.querySelectorAll('.region').forEach(function(r){r.setAttribute('tabindex','0')});
  }else{
    // Labels are injected only for the active quiz task and clearQuizMap removes
    // them again, so the normal exploration map stays uncluttered.
    showQuizPois(quizVisibleFor(quizTask),true);
  }
  const seq=quizTask.type==='sequence'?quizEsc(QUIZ_UI.sequence)+' 1 / '+quizTask.orderedPoiIds.length:'';
  quizPanel.innerHTML=quizHeader()+'<div class="quiz-question">'+quizEsc(quizTask.question)+'</div><div class="quiz-sub" id="quizSub">'+seq+'</div><div class="quiz-feedback" id="quizFeedback"></div><div class="quiz-actions"><button type="button" class="quiz-btn" id="quizNext" style="display:none">'+quizEsc(QUIZ_UI.next)+'</button></div>';
  document.getElementById('quizExit').onclick=exitQuiz;
  document.getElementById('quizNext').onclick=nextQuizTask;
}
function finishQuizAnswer(ok,clickedEl){
  quizLocked=true;
  const correctId=quizTask.type==='find_region'?quizTask.targetRegionId:(quizTask.type==='sequence'?quizTask.orderedPoiIds[Math.min(quizSequencePos,quizTask.orderedPoiIds.length-1)]:quizTask.targetPoiId);
  const correctEl=quizTask.type==='find_region'?quizRegion(correctId):quizPoi(correctId);
  if(correctEl)correctEl.classList.add('quiz-correct');
  if(!ok&&clickedEl)clickedEl.classList.add('quiz-wrong');
  if(ok)quizScore++;
  const fb=document.getElementById('quizFeedback');
  fb.className='quiz-feedback show '+(ok?'ok':'bad');
  fb.textContent=ok?QUIZ_UI.correct:(QUIZ_UI.wrong+' '+QUIZ_UI.answer+': '+quizAnswerName(quizTask));
  document.querySelector('.quiz-score').textContent=QUIZ_UI.score+': '+quizScore;
  document.getElementById('quizNext').style.display='block';
}
function handleQuizPoi(el){
  if(!quizActive||quizLocked||!el.classList.contains('quiz-visible'))return;
  const id=el.getAttribute('data-id');
  if(quizTask.type==='find_poi'||quizTask.type==='odd_one_out'){
    finishQuizAnswer(id===quizTask.targetPoiId,el);return;
  }
  if(quizTask.type==='sequence'){
    const expected=quizTask.orderedPoiIds[quizSequencePos];
    if(id!==expected){finishQuizAnswer(false,el);return}
    el.classList.add('quiz-correct');quizSequencePos++;
    if(quizSequencePos>=quizTask.orderedPoiIds.length){finishQuizAnswer(true,el);return}
    document.getElementById('quizSub').textContent=QUIZ_UI.sequence+' '+(quizSequencePos+1)+' / '+quizTask.orderedPoiIds.length;
  }
}
function handleQuizRegion(el){
  if(!quizActive||quizLocked||quizTask.type!=='find_region')return;
  finishQuizAnswer(el.getAttribute('data-id')===quizTask.targetRegionId,el);
}
function nextQuizTask(){
  quizIndex++;
  if(quizIndex>=quizTasks.length){showQuizComplete();return}
  renderQuizTask();
}
const QUIZ_SCORE_KEY='plizio_map_quiz_scores_v1',QUIZ_NAME_KEY='plizio_username';
function quizSavedResults(){
  try{
    const value=JSON.parse(localStorage.getItem(QUIZ_SCORE_KEY)||'[]');
    return Array.isArray(value)?value:[];
  }catch(e){return []}
}
function quizSavedName(){
  try{return localStorage.getItem(QUIZ_NAME_KEY)||''}catch(e){return ''}
}
function quizBestScore(){
  return quizSavedResults().filter(function(r){return r&&r.map===MAP_QUIZ_ID}).reduce(function(best,r){return Math.max(best,Number(r.score)||0)},0);
}
function saveQuizResult(name){
  const normalized=String(name||'').trim().normalize('NFC');
  const length=Array.from(normalized).length;
  if(length<2||length>16||!(/^[\\p{L}\\p{M}\\p{N}_-]+$/u.test(normalized)))return false;
  try{
    localStorage.setItem(QUIZ_NAME_KEY,normalized);
    const results=quizSavedResults();
    results.push({map:MAP_QUIZ_ID,lang:LANG,name:normalized,score:quizScore,total:quizTasks.length,at:new Date().toISOString()});
    localStorage.setItem(QUIZ_SCORE_KEY,JSON.stringify(results.slice(-100)));
    return true;
  }catch(e){return false}
}
function showQuizComplete(){
  clearQuizMap();svg.classList.remove('quiz-mode','quiz-region-task');
  const best=quizBestScore();
  quizPanel.innerHTML='<div class="quiz-top"><span class="quiz-progress">'+quizEsc(QUIZ_UI.complete)+'</span><button type="button" class="quiz-exit" id="quizExit" aria-label="'+quizEsc(QUIZ_UI.close)+'">×</button></div><div class="quiz-complete"><strong>'+quizScore+' / '+quizTasks.length+'</strong><span>'+quizEsc(QUIZ_UI.score)+'</span></div><form class="quiz-name-form" id="quizNameForm"><label for="quizName">'+quizEsc(QUIZ_UI.namePrompt)+'</label><div class="quiz-name-row"><input id="quizName" name="name" type="text" maxlength="16" autocomplete="username" enterkeyhint="done" placeholder="'+quizEsc(QUIZ_UI.namePlaceholder)+'" value="'+quizEsc(quizSavedName())+'"><button class="quiz-btn" id="quizSave" type="submit">'+quizEsc(QUIZ_UI.save)+'</button></div><div class="quiz-save-status" id="quizSaveStatus"></div></form>'+(best?'<div class="quiz-best" id="quizBest">'+quizEsc(QUIZ_UI.best)+': '+best+' / '+quizTasks.length+'</div>':'<div class="quiz-best" id="quizBest"></div>')+'<div class="quiz-actions"><button type="button" class="quiz-btn" id="quizRestart">'+quizEsc(QUIZ_UI.restart)+'</button><button type="button" class="quiz-btn secondary" id="quizDone">'+quizEsc(QUIZ_UI.close)+'</button></div>';
  document.getElementById('quizExit').onclick=exitQuiz;
  document.getElementById('quizDone').onclick=exitQuiz;
  document.getElementById('quizRestart').onclick=startQuiz;
  document.getElementById('quizNameForm').onsubmit=function(e){
    e.preventDefault();
    const input=document.getElementById('quizName'),status=document.getElementById('quizSaveStatus');
    if(!saveQuizResult(input.value)){
      status.className='quiz-save-status error';status.textContent=QUIZ_UI.invalidName;input.focus();return;
    }
    status.className='quiz-save-status';status.textContent=QUIZ_UI.saved;
    document.getElementById('quizBest').textContent=QUIZ_UI.best+': '+quizBestScore()+' / '+quizTasks.length;
    document.getElementById('quizSave').disabled=true;input.disabled=true;
  };
  document.getElementById('quizName').focus();
}
function showQuizIntro(){
  if(!quizPanel)return;
  quizPanel.classList.add('open');
  quizPanel.innerHTML='<div class="quiz-top"><span class="quiz-progress">'+quizEsc(QUIZ_UI.launch)+'</span><button type="button" class="quiz-exit" id="quizExit" aria-label="'+quizEsc(QUIZ_UI.close)+'">×</button></div><div class="quiz-question">'+quizEsc(QUIZ_UI.intro)+'</div><div class="quiz-actions"><button type="button" class="quiz-btn" id="quizStart">'+quizEsc(QUIZ_UI.start)+'</button></div>';
  document.getElementById('quizExit').onclick=exitQuiz;
  document.getElementById('quizStart').onclick=startQuiz;
}
function startQuiz(){
  if(!QUIZ_POOL.length)return;
  quizTasks=quizShuffle(QUIZ_POOL).slice(0,10);quizIndex=0;quizScore=0;quizActive=true;
  document.body.classList.add('quiz-active');quizPanel.classList.add('open');
  renderQuizTask();
}
function exitQuiz(){
  quizActive=false;quizLocked=false;quizTask=null;
  clearQuizMap();svg.classList.remove('quiz-mode','quiz-region-task');
  document.body.classList.remove('quiz-active');
  if(quizPanel){quizPanel.classList.remove('open');quizPanel.innerHTML=''}
  applyGrpFilter();
}
if(quizLaunch){
  quizLaunch.addEventListener('click',showQuizIntro);
  const quizParams=new URLSearchParams(window.location.search);
  let quizFromPoi=false;
  try{
    const referrer=new URL(document.referrer);
    quizFromPoi=referrer.origin===window.location.origin&&referrer.pathname.split('/').filter(Boolean).length>=4;
  }catch(e){}
  if(quizParams.get('quiz')==='start'||quizFromPoi){
    quizParams.delete('quiz');
    const cleanQuery=quizParams.toString();
    history.replaceState(null,'',window.location.pathname+(cleanQuery?'?'+cleanQuery:'')+window.location.hash);
    requestAnimationFrame(startQuiz);
  }
}
svg.addEventListener('keydown',function(e){
  if(!quizActive||(e.key!=='Enter'&&e.key!==' '))return;
  const poi=e.target.closest&&e.target.closest('.poi');const region=e.target.closest&&e.target.closest('.region');
  if(poi){e.preventDefault();handleQuizPoi(poi)}else if(region){e.preventDefault();handleQuizRegion(region)}
});
</script>
</body>
</html>`;
}

async function buildOne(c: Country): Promise<boolean> {
  const countryLangs = langsForCountry(c);
  const svgPath = `../lib/visualLab/maps/${c.svgFile}`;
  let mod: any;
  try {
    mod = await import(svgPath);
  } catch (e: any) {
    console.log(`SKIP ${c.iso}: cannot import ${c.svgFile} — ${e.message?.slice(0,100)}`);
    return false;
  }
  const map = mod[c.mapVar];
  let viewBox = mod[c.vbVar];
  const proj = mod[c.projFn];
  if (!Array.isArray(map) || !viewBox || typeof proj !== "function") {
    console.log(`SKIP ${c.iso}: missing exports (map=${!!map}, vb=${!!viewBox}, proj=${typeof proj})`);
    return false;
  }
  const { w: W, h: H } = parseViewBox(viewBox);
  // Island/region maps: KEEP the full country viewBox (so markers/labels render
  // at normal size and the pan/zoom centering math stays valid), and frame the
  // island via the INITIAL JS transform — same mechanism as the search auto-zoom
  // (s=scale, tx/ty=translate). Cropping the viewBox instead made fixed-px markers
  // look giant and fought the pan/zoom JS (off-center / whole-country fallback).
  let initView: { s: number; tx: number; ty: number } | undefined;
  if (c.zoomToPoiBBox && c.poiBBox) {
    const b = c.poiBBox;
    const cs = [proj(b.minLon, b.minLat), proj(b.minLon, b.maxLat), proj(b.maxLon, b.minLat), proj(b.maxLon, b.maxLat)];
    const xs = cs.map((p: number[]) => p[0]), ys = cs.map((p: number[]) => p[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const bw = Math.max(1, x1 - x0), bh = Math.max(1, y1 - y0);
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    // Fit the island bbox into the viewport with ~35% margin; clamp scale so a
    // tiny island doesn't over-zoom (markers would grow) nor a big one stay tiny.
    let zs = Math.min(W / (bw * 1.35), H / (bh * 1.35));
    zs = Math.max(2, Math.min(7, zs));
    initView = { s: +zs.toFixed(3), tx: +(W / 2 - cx * zs).toFixed(1), ty: +(H / 2 - cy * zs).toFixed(1) };
  }

  const isoUp = c.poiSourceIso || (c.iso === "gb" ? "GB" : c.iso.toUpperCase());
  const poisJsonPath = path.join(process.cwd(), "public", "data", "pois", `${isoUp}.json`);
  let poisRaw: any[] = [];
  const searchExtra: SearchExtra[] = [];
  if (fs.existsSync(poisJsonPath)) {
    try {
      const j = JSON.parse(fs.readFileSync(poisJsonPath, "utf8"));
      poisRaw = j.pois || j;
      poisRaw = poisRaw.filter((p: any) => p && !DEDUP_BLOCK.has(p.id));
      mergeNativeMapSidecars(c, poisRaw);
      if (c.poiParent) poisRaw = poisRaw.filter((p: any) => p && p.parent === c.poiParent);
      // Island maps assign by coastline polygon (+buffer); bbox is skipped so the
      // buffer zone isn't pre-clipped. Other sub-maps still use the bbox.
      if (c.islandRingsSlug) {
        const rings = ISLAND_RINGS[c.islandRingsSlug];
        if (rings) poisRaw = poisRaw.filter((p: any) => p && nearRings(p.coords, rings, ISLAND_BUF_DEG));
        else if (c.poiBBox) poisRaw = poisRaw.filter((p: any) => p && inBBox(p.coords, c.poiBBox!));
      } else if (c.poiBBox) {
        poisRaw = poisRaw.filter((p: any) => p && inBBox(p.coords, c.poiBBox!));
      }
      if (c.excludeParents && c.excludeParents.length) {
        const links = c.metroLinks || [];
        const kept: any[] = [];
        for (const p of poisRaw) {
          const hit = p ? c.excludeParents.indexOf(p.parent) : -1;
          if (hit >= 0) {
            const submap = (links[hit] || links[0] || {}).mapSlug;
            if (submap && p.name) searchExtra.push({ id: p.id, name: p.name, submap, coords: p.coords });
          } else kept.push(p);
        }
        poisRaw = kept;
      }
      if (c.excludeBBoxes && c.excludeBBoxes.length) {
        const links = c.metroLinks || [];
        const kept: any[] = [];
        for (const p of poisRaw) {
          let hit = -1;
          if (p && p.coords) for (let i = 0; i < c.excludeBBoxes.length; i++) { if (inBBox(p.coords, c.excludeBBoxes[i])) { hit = i; break; } }
          if (hit >= 0) {
            const submap = (links[hit] || links[0] || {}).mapSlug;
            if (submap && p.name) searchExtra.push({ id: p.id, name: p.name, submap, coords: p.coords });
          } else kept.push(p);
        }
        poisRaw = kept;
      }
      // Country maps: drop POIs that sit inside/near an island's coastline polygon
      // (they live on that island's sub-map). Polygon-based so mainland-coast POIs
      // near a wide island bbox stay on the country map. Routed to the island slug.
      if (c.excludeIslandSlugs && c.excludeIslandSlugs.length) {
        const kept: any[] = [];
        for (const p of poisRaw) {
          let submap = "";
          if (p && p.coords) for (const slug of c.excludeIslandSlugs) {
            if (nearRings(p.coords, ISLAND_RINGS[slug], ISLAND_BUF_DEG)) { submap = slug; break; }
          }
          if (submap) { if (p.name) searchExtra.push({ id: p.id, name: p.name, submap, coords: p.coords }); }
          else kept.push(p);
        }
        poisRaw = kept;
      }
    } catch {}
  }
  const seen = new Set<string>();
  const pois: SlimPoi[] = [];
  for (const p of poisRaw) {
    if (seen.has(p.id)) continue;
    seen.add(p.id);
    const s = slimPoi(p, proj, W, H);
    if (s) pois.push(s);
  }
  backfillUrlsByCoord(pois);
  // Inject clickable markers pointing to dedicated sub-maps (metro/island) — declutters the country map.
  for (const ml of (c.metroLinks || [])) {
    const [mx, my] = proj(ml.lon, ml.lat);
    if (Number.isFinite(mx) && Number.isFinite(my)) {
      const urls: Record<string, string> = {};
      for (const l of countryLangs) urls[l] = `/${ml.mapSlug}-map/${l === "hu" ? "" : l + "/"}`;
      pois.push({ id: `metro-${ml.mapSlug}`, type: "metro", grp: "city", cx: mx, cy: my, name: ml.names, urls } as SlimPoi);
    }
  }
  const regions = map.map((r: any) => ({
    id: r.id, name: r.name,
    labelX: r.labelX, labelY: r.labelY,
    path: simplifyPath(r.path),
  }));
  const outDir = path.join(process.cwd(), "public", `${c.slug}-map`);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), renderHtml(c, "hu", regions, pois, viewBox, W, H, searchExtra, initView), "utf8");
  for (const l of countryLangs) {
    const sub = path.join(outDir, l);
    fs.mkdirSync(sub, { recursive: true });
    fs.writeFileSync(path.join(sub, "index.html"), renderHtml(c, l, regions, pois, viewBox, W, H, searchExtra, initView), "utf8");
  }
  const sz = fs.statSync(path.join(outDir, "index.html")).size;
  console.log(`OK   ${c.iso} ${c.slug.padEnd(18)} regions=${regions.length.toString().padStart(3)} pois=${pois.length.toString().padStart(4)} html=${(sz/1024).toFixed(0)}KB`);
  return true;
}

async function main() {
  try {
    ISLAND_RINGS = (await import("../lib/visualLab/maps/_islandRings.ts")).ISLAND_RINGS || {};
    console.log(`Island polygons loaded: ${Object.keys(ISLAND_RINGS).length}`);
  } catch (e: any) {
    console.log(`No island polygons (_islandRings.ts) — falling back to bbox: ${e?.message?.slice(0, 60)}`);
  }
  const target = process.argv[2] || "all";
  const isos = new Set(target.split(",").map(s => s.trim().toLowerCase()).filter(Boolean));
  const list = target === "all" ? COUNTRIES : COUNTRIES.filter(c => isos.has(c.iso));
  if (!list.length) { console.error(`No country '${target}'`); process.exit(1); }
  let ok = 0, fail = 0;
  for (const c of list) {
    if (await buildOne(c)) ok++; else fail++;
  }
  console.log(`\nDone: ${ok} ok, ${fail} fail / ${list.length} total.`);
}

main().catch(e => { console.error(e); process.exit(1); });
