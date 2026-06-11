// Per-country "Top 50 Sehenswürdigkeiten" SEO landing pages — one rich static
// HTML per language at a localized root slug (e.g. /kroatien-sehenswuerdigkeiten/,
// /horvatorszag-latnivalok/). Reads public/data/pois/<ISO>.json, drops economic /
// settlement POIs, ranks the tourist attractions, takes top 50, links each to its
// POI page + the country map. Output: public/<localized-slug>/index.html.
// Run: npx tsx scripts/build-country-sights.mts hr   (or comma list / all)
import fs from "node:fs";
import path from "node:path";

type Lang = "de" | "hu" | "ro" | "en";
const LANGS: Lang[] = ["de", "hu", "ro", "en"];

// --- slugify (mirror lib/seo/slugify.ts) ---
const REPL: [string, string][] = [["ä","ae"],["ö","oe"],["ü","ue"],["ß","ss"],["ă","a"],["â","a"],["î","i"],["ș","s"],["ş","s"],["ț","t"],["ţ","t"],["ł","l"]];
function slugify(v: string): string {
  let s = v.trim().toLowerCase();
  for (const [a, b] of REPL) s = s.split(a).join(b);
  s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  s = s.replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/-{2,}/g, "-").replace(/^-|-$/g, "");
  return s || "ort";
}

// --- localized vocabulary (category-driven; reassigned for non-default categories) ---
let SIGHTS_SLUG: Record<Lang, string> = { de: "sehenswuerdigkeiten", hu: "latnivalok", ro: "obiective-turistice", en: "attractions" };
let T: Record<Lang, any> = {
  de: { heading: (c: string) => `Sehenswürdigkeiten in ${c}`, sub: "Die Top 50", intro: (c: string) => `Die schönsten Sehenswürdigkeiten in ${c} auf einen Blick: Burgen, Naturwunder, historische Altstädte und mehr. Jeder Ort führt zur ausführlichen Seite mit Karte, Tipps und Fotos.`, onMap: "Alle auf der Karte ansehen", more: "Mehr erfahren", home: "Startseite", cats: { nature: "Natur", history: "Kultur & Geschichte", urban: "Städte & Bauwerke", other: "Weitere Highlights" }, faqH: "Häufige Fragen", titleTpl: (c: string) => `Sehenswürdigkeiten in ${c}: Die Top 50 (2026)`, metaTpl: (c: string) => `Die 50 schönsten Sehenswürdigkeiten in ${c}: Burgen, Natur, Altstädte – mit Karte, Fotos und Reisetipps.` },
  hu: { heading: (c: string) => `${c} látnivalói`, sub: "A top 50", intro: (c: string) => `${c} legszebb látnivalói egy helyen: várak, természeti csodák, történelmi óvárosok és még sok más. Minden hely a részletes oldalra vezet térképpel, tippekkel és fotókkal.`, onMap: "Mind a térképen", more: "Tovább", home: "Főoldal", cats: { nature: "Természet", history: "Kultúra és történelem", urban: "Városok és épületek", other: "További látnivalók" }, faqH: "Gyakori kérdések", titleTpl: (c: string) => `${c} látnivalói: a top 50 (2026)`, metaTpl: (c: string) => `${c} 50 legszebb látnivalója: várak, természet, óvárosok – térképpel, fotókkal és úti tippekkel.` },
  ro: { heading: (c: string) => `Obiective turistice în ${c}`, sub: "Top 50", intro: (c: string) => `Cele mai frumoase obiective turistice din ${c} la un loc: cetăți, minuni ale naturii, centre istorice și multe altele. Fiecare loc duce la pagina detaliată cu hartă, sfaturi și fotografii.`, onMap: "Vezi toate pe hartă", more: "Află mai mult", home: "Acasă", cats: { nature: "Natură", history: "Cultură și istorie", urban: "Orașe și clădiri", other: "Alte atracții" }, faqH: "Întrebări frecvente", titleTpl: (c: string) => `Obiective turistice în ${c}: Top 50 (2026)`, metaTpl: (c: string) => `Cele mai frumoase 50 de obiective turistice din ${c}: cetăți, natură, centre istorice – cu hartă, fotografii și sfaturi.` },
  en: { heading: (c: string) => `Attractions in ${c}`, sub: "The Top 50", intro: (c: string) => `The finest attractions in ${c} at a glance: castles, natural wonders, historic old towns and more. Each place links to a detailed page with map, tips and photos.`, onMap: "See all on the map", more: "Learn more", home: "Home", cats: { nature: "Nature", history: "Culture & History", urban: "Cities & Architecture", other: "More highlights" }, faqH: "Frequently asked questions", titleTpl: (c: string) => `Top 50 Attractions in ${c} (2026)`, metaTpl: (c: string) => `The 50 best attractions in ${c}: castles, nature, old towns – with map, photos and travel tips.` },
};

// --- category: national parks & nature ---
const NATURE_SLUG: Record<Lang, string> = { de: "nationalparks", hu: "nemzeti-parkok", ro: "parcuri-nationale", en: "national-parks" };
const T_NATURE: Record<Lang, any> = {
  de: { heading: (c: string) => `Nationalparks & Natur in ${c}`, sub: "Top-Naturziele", intro: (c: string) => `Die Nationalparks und schönsten Naturwunder in ${c}: Wasserfälle, Seen, Inseln und Berge. Jeder Ort führt zur ausführlichen Seite mit Karte, Tipps und Fotos.`, onMap: "Alle auf der Karte ansehen", more: "Mehr erfahren", home: "Startseite", cats: { nature: "Natur & Nationalparks", history: "Kultur & Geschichte", urban: "Städte & Bauwerke", other: "Weitere Naturziele" }, faqH: "Häufige Fragen", titleTpl: (c: string) => `Nationalparks in ${c}: die schönsten Naturwunder (2026)`, metaTpl: (c: string) => `Die Nationalparks und Naturwunder in ${c}: Wasserfälle, Seen, Inseln, Berge – mit Karte, Fotos und Reisetipps.` },
  hu: { heading: (c: string) => `${c} nemzeti parkjai és természeti csodái`, sub: "Top természeti célok", intro: (c: string) => `${c} nemzeti parkjai és legszebb természeti csodái: vízesések, tavak, szigetek és hegyek. Minden hely a részletes oldalra vezet térképpel, tippekkel és fotókkal.`, onMap: "Mind a térképen", more: "Tovább", home: "Főoldal", cats: { nature: "Természet és nemzeti parkok", history: "Kultúra és történelem", urban: "Városok és épületek", other: "További természeti célok" }, faqH: "Gyakori kérdések", titleTpl: (c: string) => `${c} nemzeti parkjai: a legszebb természeti csodák (2026)`, metaTpl: (c: string) => `${c} nemzeti parkjai és természeti csodái: vízesések, tavak, szigetek, hegyek – térképpel, fotókkal és úti tippekkel.` },
  ro: { heading: (c: string) => `Parcuri naționale și natură în ${c}`, sub: "Top destinații naturale", intro: (c: string) => `Parcurile naționale și cele mai frumoase minuni ale naturii din ${c}: cascade, lacuri, insule și munți. Fiecare loc duce la pagina detaliată cu hartă, sfaturi și fotografii.`, onMap: "Vezi toate pe hartă", more: "Află mai mult", home: "Acasă", cats: { nature: "Natură și parcuri naționale", history: "Cultură și istorie", urban: "Orașe și clădiri", other: "Alte destinații naturale" }, faqH: "Întrebări frecvente", titleTpl: (c: string) => `Parcuri naționale în ${c}: cele mai frumoase minuni naturale (2026)`, metaTpl: (c: string) => `Parcurile naționale și minunile naturii din ${c}: cascade, lacuri, insule, munți – cu hartă, fotografii și sfaturi.` },
  en: { heading: (c: string) => `National Parks & Nature in ${c}`, sub: "Top nature spots", intro: (c: string) => `The national parks and finest natural wonders in ${c}: waterfalls, lakes, islands and mountains. Each place links to a detailed page with map, tips and photos.`, onMap: "See all on the map", more: "Learn more", home: "Home", cats: { nature: "Nature & National Parks", history: "Culture & History", urban: "Cities & Architecture", other: "More nature spots" }, faqH: "Frequently asked questions", titleTpl: (c: string) => `National Parks in ${c}: the finest natural wonders (2026)`, metaTpl: (c: string) => `The national parks and natural wonders of ${c}: waterfalls, lakes, islands, mountains – with map, photos and travel tips.` },
};

// --- category: PlizioGo travel itineraries (ready day-plans per city) ---
const PLIZIOGO_SLUG: Record<Lang, string> = { de: "reiseroute", hu: "utiterv", ro: "itinerar", en: "itinerary" };
const T_PLIZIOGO: Record<Lang, any> = {
  de: { heading: (c: string) => `${c} Reiseroute`, sub: "100+ Städte mit Tagesplan", intro: (c: string) => `Plizio Go erstellt dir für über 100 Städte in ${c} einen fertigen Tagesplan – kostenlos und ohne Anmeldung. Wähle einfach Wetter und Verkehrsmittel, und du bekommst sofort eine konkrete Route für den Tag: welche Sehenswürdigkeiten in welcher Reihenfolge, Tipps zum Essen, Öffnungszeiten und alles auf der Karte. Wähle unten deine Stadt und starte deinen Tag.`, onMap: "Auf der Karte ansehen", more: "Tagesplan öffnen", home: "Startseite", cats: { nature: "", history: "", urban: "", other: "" }, faqH: "Häufige Fragen", titleTpl: (c: string) => `${c} Reiseroute: fertige Tagespläne für 100+ Städte (2026)`, metaTpl: (c: string) => `Fertige Tagespläne für über 100 Städte in ${c}: Wähle Wetter und Verkehrsmittel, erhalte sofort eine Route mit Sehenswürdigkeiten, Tipps und Karte. Kostenlos mit Plizio Go.` },
  hu: { heading: (c: string) => `${c} útiterv`, sub: "100+ város napi tervvel", intro: (c: string) => `A Plizio Go több mint 100 ${c}-i városhoz készít kész napi tervet – ingyen, regisztráció nélkül. Csak válaszd ki az időjárást és a közlekedési módot, és azonnal kapsz egy konkrét napi útvonalat: mely látnivalókat milyen sorrendben, hol egyél, nyitvatartás, és minden a térképen. Válassz alább egy várost és indítsd a napod.`, onMap: "Megnézés a térképen", more: "Napi terv megnyitása", home: "Főoldal", cats: { nature: "", history: "", urban: "", other: "" }, faqH: "Gyakori kérdések", titleTpl: (c: string) => `${c} útiterv: kész napi tervek 100+ városhoz (2026)`, metaTpl: (c: string) => `Kész napi tervek több mint 100 ${c}-i városhoz: válaszd az időjárást és a közlekedést, kapj azonnal útvonalat látnivalókkal, tippekkel és térképpel. Ingyen, a Plizio Go-val.` },
  ro: { heading: (c: string) => `Itinerar ${c}`, sub: "100+ orașe cu plan zilnic", intro: (c: string) => `Plizio Go îți creează un plan gata făcut pentru o zi în peste 100 de orașe din ${c} – gratuit și fără cont. Alege vremea și mijlocul de transport și primești imediat un traseu concret: ce obiective, în ce ordine, unde să mănânci, programul și totul pe hartă. Alege mai jos un oraș și începe-ți ziua.`, onMap: "Vezi pe hartă", more: "Deschide planul zilei", home: "Acasă", cats: { nature: "", history: "", urban: "", other: "" }, faqH: "Întrebări frecvente", titleTpl: (c: string) => `Itinerar ${c}: planuri zilnice gata făcute pentru 100+ orașe (2026)`, metaTpl: (c: string) => `Planuri de o zi gata făcute pentru peste 100 de orașe din ${c}: alege vremea și transportul, primești imediat un traseu cu obiective, sfaturi și hartă. Gratuit cu Plizio Go.` },
  en: { heading: (c: string) => `${c} Itinerary`, sub: "100+ cities with a day plan", intro: (c: string) => `Plizio Go builds a ready-made one-day plan for over 100 cities in ${c} – free, no sign-up. Just pick the weather and how you get around, and you instantly get a concrete route for the day: which sights in what order, where to eat, opening hours, all on the map. Pick your city below and start your day.`, onMap: "View on the map", more: "Open day plan", home: "Home", cats: { nature: "", history: "", urban: "", other: "" }, faqH: "Frequently asked questions", titleTpl: (c: string) => `${c} Itinerary: ready-made day plans for 100+ cities (2026)`, metaTpl: (c: string) => `Ready-made one-day plans for over 100 cities in ${c}: pick the weather and transport, get an instant route with sights, tips and map. Free with Plizio Go.` },
};

// localized type badge labels (subset; fallback = raw type)
const TYPE_LABEL: Record<string, Partial<Record<Lang, string>>> = {
  castle: { de: "Burg", hu: "Vár", ro: "Castel", en: "Castle" },
  fortress: { de: "Festung", hu: "Erőd", ro: "Fortăreață", en: "Fortress" },
  church: { de: "Kirche", hu: "Templom", ro: "Biserică", en: "Church" },
  cathedral: { de: "Kathedrale", hu: "Katedrális", ro: "Catedrală", en: "Cathedral" },
  monastery: { de: "Kloster", hu: "Kolostor", ro: "Mănăstire", en: "Monastery" },
  museum: { de: "Museum", hu: "Múzeum", ro: "Muzeu", en: "Museum" },
  park: { de: "Park", hu: "Park", ro: "Parc", en: "Park" },
  lake: { de: "See", hu: "Tó", ro: "Lac", en: "Lake" },
  waterfall: { de: "Wasserfall", hu: "Vízesés", ro: "Cascadă", en: "Waterfall" },
  peak: { de: "Gipfel", hu: "Csúcs", ro: "Vârf", en: "Peak" },
  mountain: { de: "Berg", hu: "Hegy", ro: "Munte", en: "Mountain" },
  ruins: { de: "Ruine", hu: "Rom", ro: "Ruine", en: "Ruins" },
  landmark: { de: "Wahrzeichen", hu: "Nevezetesség", ro: "Reper", en: "Landmark" },
  wildlife: { de: "Natur", hu: "Természet", ro: "Natură", en: "Wildlife" },
  palace: { de: "Palast", hu: "Palota", ro: "Palat", en: "Palace" },
  monument: { de: "Denkmal", hu: "Emlékmű", ro: "Monument", en: "Monument" },
  bridge: { de: "Brücke", hu: "Híd", ro: "Pod", en: "Bridge" },
  tower: { de: "Turm", hu: "Torony", ro: "Turn", en: "Tower" },
};

// type → category bucket
const NATURE = new Set(["lake","waterfall","peak","mountain","mountain-range","nature","wildlife","park","coast","island","beach","gorge","cave","canyon","river","garden","viewpoint","geo","landscape"]);
const HISTORY = new Set(["castle","fortress","fort","church","cathedral","monastery","ruins","palace","monument","tower","landmark","icon","history","archaeological","fortification"]);
const URBAN = new Set(["square","theatre","theater","museum","bridge","market","library","opera","arena","stadium"]);
// excluded entirely (not Sehenswürdigkeiten)
const EXCLUDE = new Set(["factory","industry","port","economic","mine","plant","company","power-plant","refinery","city","town","village","capital","state-capital","region","country","municipality","commune","district","suburb","quarter"]);

function bucket(t: string): "nature" | "history" | "urban" | "other" {
  if (NATURE.has(t)) return "nature";
  if (HISTORY.has(t)) return "history";
  if (URBAN.has(t)) return "urban";
  return "other";
}

// category inclusion filter (reassigned for non-default categories)
type POIType = { type?: string };
let CAT_FILTER: (p: POIType) => boolean = (p) => !!p.type && !EXCLUDE.has(p.type);

type POI = { id: string; type?: string; parent?: string; coords?: number[]; image?: string; name?: Record<string,string>; description?: Record<string,string>; descriptionAdvanced?: Record<string,string>; tier?: number; population?: number };

// --- country config ---
type CountryCfg = { iso: string; mapSlug: string; names: Record<Lang, string> };
const COUNTRIES: CountryCfg[] = [
  { iso: "hr", mapSlug: "croatia", names: { de: "Kroatien", hu: "Horvátország", ro: "Croația", en: "Croatia" } },
  { iso: "de", mapSlug: "deutschland", names: { de: "Deutschland", hu: "Németország", ro: "Germania", en: "Germany" } },
  { iso: "at", mapSlug: "austria", names: { de: "Österreich", hu: "Ausztria", ro: "Austria", en: "Austria" } },
  { iso: "ch", mapSlug: "switzerland", names: { de: "Schweiz", hu: "Svájc", ro: "Elveția", en: "Switzerland" } },
  { iso: "fr", mapSlug: "france", names: { de: "Frankreich", hu: "Franciaország", ro: "Franța", en: "France" } },
  { iso: "it", mapSlug: "italy", names: { de: "Italien", hu: "Olaszország", ro: "Italia", en: "Italy" } },
  { iso: "es", mapSlug: "spain", names: { de: "Spanien", hu: "Spanyolország", ro: "Spania", en: "Spain" } },
  { iso: "pt", mapSlug: "portugal", names: { de: "Portugal", hu: "Portugália", ro: "Portugalia", en: "Portugal" } },
  { iso: "nl", mapSlug: "netherlands", names: { de: "Niederlande", hu: "Hollandia", ro: "Țările de Jos", en: "Netherlands" } },
  { iso: "be", mapSlug: "belgium", names: { de: "Belgien", hu: "Belgium", ro: "Belgia", en: "Belgium" } },
  { iso: "gr", mapSlug: "greece", names: { de: "Griechenland", hu: "Görögország", ro: "Grecia", en: "Greece" } },
  { iso: "pl", mapSlug: "poland", names: { de: "Polen", hu: "Lengyelország", ro: "Polonia", en: "Poland" } },
  { iso: "cz", mapSlug: "czech-republic", names: { de: "Tschechien", hu: "Csehország", ro: "Cehia", en: "Czechia" } },
  { iso: "hu", mapSlug: "magyarorszag", names: { de: "Ungarn", hu: "Magyarország", ro: "Ungaria", en: "Hungary" } },
  { iso: "ro", mapSlug: "romania", names: { de: "Rumänien", hu: "Románia", ro: "România", en: "Romania" } },
  { iso: "ie", mapSlug: "ireland", names: { de: "Irland", hu: "Írország", ro: "Irlanda", en: "Ireland" } },
  { iso: "si", mapSlug: "slovenia", names: { de: "Slowenien", hu: "Szlovénia", ro: "Slovenia", en: "Slovenia" } },
  { iso: "sk", mapSlug: "slovakia", names: { de: "Slowakei", hu: "Szlovákia", ro: "Slovacia", en: "Slovakia" } },
];

const SITE = "https://plizio.com";
const URLIDX: Record<string, Record<string,string>> = (() => {
  try { return JSON.parse(fs.readFileSync(path.resolve(process.cwd(),"public/data/_poi-url-index.json"),"utf8")); } catch { return {}; }
})();
// PlizioGo itinerary set (basename = poi-id) + dedup blocklist (avoid linking removed pages)
const ITIN: Set<string> = (() => {
  try { return new Set(fs.readdirSync(path.resolve(process.cwd(),"public/data/itinerary")).filter(f=>f.endsWith(".json")).map(f=>f.slice(0,-5))); } catch { return new Set(); }
})();
const BLOCK: Set<string> = (() => {
  try { return new Set<string>(JSON.parse(fs.readFileSync(path.resolve(process.cwd(),"lib/visualLab/data/_dedup_blocklist.json"),"utf8"))); } catch { return new Set(); }
})();
let FLAT = false; // PlizioGo flat-grid mode (cities, no category buckets)

function esc(s: string): string { return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function firstSentence(s: string, max = 150): string {
  if (!s) return "";
  const t = s.replace(/\s+/g," ").trim();
  const m = t.split(/(?<=[.!?])\s/)[0] || t;
  return m.length > max ? m.slice(0, max-1) + "…" : m;
}
function richness(p: POI): number {
  let n = 0;
  for (const o of [p.descriptionAdvanced, p.description]) {
    if (!o) continue;
    for (const l of LANGS) n += (o[l]||"").length;
  }
  return n;
}

function localizedName(p: POI, lang: Lang): string {
  const n = p.name || {};
  return n[lang] || n.de || n.en || Object.values(n)[0] || p.id;
}
function poiHref(p: POI, lang: Lang): string | null {
  const e = URLIDX[p.id];
  return e ? (e[lang] || e.de || e.en || null) : null;
}

// generic tokens that must NOT alone trigger a same-place merge
const NAME_STOP = new Set(["von","der","die","das","den","dem","des","de","la","le","les","of","the","and","und","in","im","am","zu","kirche","church","biserica","templom","kathedrale","cathedral","catedrala","katedralis","castle","burg","var","castel","festung","fortress","fortareata","erod","kloster","monastery","manastire","kolostor","park","parc","see","lake","lac","to","insel","island","insula","sziget","altstadt","oldtown","stadt","city","oras","varos","nationalpark","national","palast","palace","palat","palota","museum","muzeu","muzeum","denkmal","monument","emlekmu","turm","tower","turn","torony","brucke","bridge","pod","hid","ruine","ruins","ruine","rom"]);
function nameTokens(p: POI): Set<string> {
  const s = new Set<string>();
  for (const l of LANGS) {
    for (const w of ((p.name?.[l] || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").split(/[^a-z0-9]+/))) {
      if (w.length >= 4 && !NAME_STOP.has(w)) s.add(w);
    }
  }
  return s;
}
function km(a: number[], b: number[]): number {
  const R=6371, dLat=(b[1]-a[1])*Math.PI/180, dLon=(b[0]-a[0])*Math.PI/180;
  const x=Math.sin(dLat/2)**2+Math.cos(a[1]*Math.PI/180)*Math.cos(b[1]*Math.PI/180)*Math.sin(dLon/2)**2;
  return 2*R*Math.asin(Math.min(1,Math.sqrt(x)));
}

// --- image-manifest: a hubon CSAK kep-fedett entry jelenjen meg (nincs ures doboz) ---
// A VPS-en TENYLEGESEN letezo ~66k kep listaja (_image-manifest.json) + p.image.
const HUB_IMG = new Set<string>();
try {
  const mf = JSON.parse(fs.readFileSync("public/data/_image-manifest.json", "utf8")) as string[];
  for (const f of mf) if (typeof f === "string" && f.endsWith(".webp")) HUB_IMG.add(f);
} catch { /* ha nincs manifest, p.image-re esunk vissza */ }
const HUB_IMG_READY = HUB_IMG.size >= 1000;
function resolveImg(p: POI): string | null {
  const base = (u?: string) => (u ? u.split("/").pop() || "" : "");
  if (p.image && (!HUB_IMG_READY || HUB_IMG.has(base(p.image)))) return p.image;
  const tryStem = (s: string) => (HUB_IMG.has(`${s}.webp`) ? `/poi-images/${s}.webp` : null);
  let r = tryStem(p.id);
  if (r) return r;
  const core = p.id
    .replace(/-(history|landmarks|nature|cities|economic|relief|life|culture)-v\d+$/, "")
    .replace(/-v\d+$/, "").replace(/-extra$/, "");
  if (core !== p.id) { r = tryStem(core); if (r) return r; }
  return null;
}

function selectTop(pois: POI[]): POI[] {
  // CSAK kep-fedett latnivalo kerul a hubra (user-dontes 2026-06-11: teljes kepek, nincs ures doboz)
  const attractions = pois.filter(p => p.type && CAT_FILTER(p) && p.coords && resolveImg(p));
  const TYPE_W: Record<string,number> = { landmark: 60, castle: 55, cathedral: 50, church: 30, monastery: 40, ruins: 35, palace: 55, waterfall: 65, lake: 55, peak: 35, mountain: 30, park: 60, wildlife: 45, museum: 35, fortress: 50, monument: 30, tower: 30, bridge: 30, nature: 55, coast: 45, gorge: 45, canyon: 45 };
  function score(p: POI): number {
    let s = 0;
    if (p.image) s += 250;
    s += Math.min(richness(p), 2500) / 12;     // tempered (~max 208) so long articles about obscure places don't dominate
    s += TYPE_W[p.type||""] ?? 20;
    if (typeof p.tier === "number") s += (6 - Math.min(p.tier, 5)) * 15;
    // notability proxy: curated landmark/national-park sets (nat-/cult-/hr-) are the famous editorial picks
    if (/^(nat|cult)-/.test(p.id)) s += 230;
    else if (/^hr-/.test(p.id)) s += 170;
    return s;
  }
  // city/town names → extra stopwords, so a shared CITY token (Split, Pula, Zagreb)
  // never merges two distinct attractions in the same town.
  const cityStop = new Set<string>();
  for (const p of pois) {
    if (p.type && /^(city|capital|state-capital|town|village|municipality|commune)$/.test(p.type)) {
      for (const l of LANGS) for (const w of ((p.name?.[l]||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").split(/[^a-z0-9]+/))) if (w.length>=4) cityStop.add(w);
    }
  }
  const tok = (p: POI) => new Set([...nameTokens(p)].filter(t => !cityStop.has(t)));
  // base-id (strip country prefix + layer/-v2 + descriptor suffix) catches `<x>-history-v2` vs `<x>-landmarks-v2` twins
  const baseId = (id: string) => id
    .replace(/^(croatia|hr|nat|cult|hist|city|geo)-/,"")
    .replace(/-(history|landmarks|nature|cities|economic|relief|life|culture)-v2$/,"")
    .replace(/-v2$/,"").replace(/-extra$/,"")
    .replace(/-(islands?|nationalpark|national-park|np|byzantine-castrum|fortica)$/,"");
  const ranked = attractions.map(p=>({p,s:score(p),tok:tok(p),b:baseId(p.id)}))
    .sort((a,b)=> b.s-a.s || a.p.id.localeCompare(b.p.id));
  const kept: typeof ranked = [];
  for (const cand of ranked) {
    const dup = kept.some(k => {
      if (k.b === cand.b) return true;
      const shared = [...cand.tok].filter(t => k.tok.has(t));
      const d = km(k.p.coords!, cand.p.coords!);
      // close + any shared name token, OR same distinctive proper-noun within national-park scale
      return (d <= 0.4 && shared.length > 0) || (d <= 15 && shared.some(t => t.length >= 5));
    });
    if (!dup) kept.push(cand);
    if (kept.length >= 50) break;
  }
  return kept.map(k=>k.p);
}

// PlizioGo: cities that have a ready day-itinerary (canonical, not blocklisted, routable)
function selectPliziogo(pois: POI[]): POI[] {
  const elig = pois.filter(p => p.id && ITIN.has(p.id) && !BLOCK.has(p.id) && URLIDX[p.id] && p.coords);
  elig.sort((a, b) => (b.population || 0) - (a.population || 0)
    || ((a.tier ?? 9) - (b.tier ?? 9)) || richness(b) - richness(a) || a.id.localeCompare(b.id));
  return elig.slice(0, 120);
}

function alternatesFor(c: CountryCfg): Record<Lang,string> {
  const out = {} as Record<Lang,string>;
  for (const l of LANGS) out[l] = `${SITE}/${slugify(c.names[l])}-${SIGHTS_SLUG[l]}/`;
  return out;
}

function render(c: CountryCfg, lang: Lang, top: POI[]): string {
  const t = T[lang];
  const country = c.names[lang];
  const slug = `${slugify(country)}-${SIGHTS_SLUG[lang]}`;
  const url = `${SITE}/${slug}/`;
  const alts = alternatesFor(c);
  const mapHref = `${SITE}/${c.mapSlug}-map/${lang === "de" ? "" : lang + "/"}`;

  // group by category
  const groups: Record<string, POI[]> = { history: [], nature: [], urban: [], other: [] };
  for (const p of top) groups[bucket(p.type||"")].push(p);

  function card(p: POI, rank: number): string {
    const nm = esc(localizedName(p, lang));
    const href = poiHref(p, lang);
    const desc = esc(firstSentence((p.descriptionAdvanced?.[lang] || p.description?.[lang] || "")));
    const badge = esc((TYPE_LABEL[p.type||""]?.[lang]) || p.type || "");
    const img = p.image ? `<img loading="lazy" src="${esc(p.image)}" alt="${nm}" />` : `<div class="noimg"></div>`;
    const inner = `${img}<div class="cbody"><span class="badge">${badge}</span><h3>${nm}</h3>${desc?`<p>${desc}</p>`:""}${href?`<span class="more">${t.more} →</span>`:""}</div>`;
    return href ? `<a class="card" href="${esc(href)}">${inner}</a>` : `<div class="card">${inner}</div>`;
  }

  const catChips = FLAT ? "" : (["history","nature","urban","other"] as const).filter(k=>groups[k].length).map(k=>`<a class="chip" href="#${k}">${esc(t.cats[k])} (${groups[k].length})</a>`).join("");
  const sections = FLAT
    ? `<section class="catsec"><div class="grid">${top.map((p,i)=>card(p, i+1)).join("")}</div></section>`
    : (["history","nature","urban","other"] as const).filter(k=>groups[k].length).map(k => {
        let rank = 0;
        return `<section class="catsec" id="${k}"><h2>${esc(t.cats[k])}</h2><div class="grid">${groups[k].map(p=>card(p, ++rank)).join("")}</div></section>`;
      }).join("");

  // schema: ItemList of TouristAttraction
  const itemList = { "@context":"https://schema.org","@type":"ItemList","name":t.titleTpl(country),"numberOfItems":top.length,"itemListElement": top.map((p,i)=>({ "@type":"ListItem","position":i+1,"item":{ "@type":"TouristAttraction","name":localizedName(p,lang),...(poiHref(p,lang)?{"url":SITE+poiHref(p,lang)}:{}),...(p.image?{"image":SITE+p.image}:{}) } })) };
  const PG_FAQ: Record<Lang, string[][]> = {
    de: [["Was ist Plizio Go?", "Plizio Go ist ein kostenloser Tagesplaner: Du wählst eine Stadt, das Wetter und dein Verkehrsmittel, und bekommst sofort eine fertige Route für einen Tag – mit Sehenswürdigkeiten in sinnvoller Reihenfolge, Essens-Tipps, Öffnungszeiten und Karte."],["Wie viele Städte in "+country+" sind verfügbar?", "Über 100 Städte haben bereits einen fertigen Tagesplan, und es kommen laufend neue dazu."],["Kostet das etwas?", "Nein. Plizio Go ist komplett kostenlos und ohne Anmeldung nutzbar."]],
    hu: [["Mi az a Plizio Go?", "A Plizio Go egy ingyenes napi tervező: kiválasztasz egy várost, az időjárást és a közlekedési módot, és azonnal kész napi útvonalat kapsz – látnivalókkal logikus sorrendben, étkezési tippekkel, nyitvatartással és térképpel."],["Hány "+country+"-i város érhető el?", "Több mint 100 városnak van már kész napi terve, és folyamatosan jönnek újak."],["Kerül valamibe?", "Nem. A Plizio Go teljesen ingyenes és regisztráció nélkül használható."]],
    ro: [["Ce este Plizio Go?", "Plizio Go este un planificator zilnic gratuit: alegi un oraș, vremea și mijlocul de transport și primești imediat un traseu gata făcut pentru o zi – cu obiective într-o ordine logică, sfaturi de masă, program și hartă."],["Câte orașe din "+country+" sunt disponibile?", "Peste 100 de orașe au deja un plan zilnic gata făcut și se adaugă mereu altele noi."],["Costă ceva?", "Nu. Plizio Go este complet gratuit și se folosește fără cont."]],
    en: [["What is Plizio Go?", "Plizio Go is a free day planner: pick a city, the weather and how you get around, and instantly get a ready-made one-day route – with sights in a sensible order, food tips, opening hours and a map."],["How many cities in "+country+" are available?", "Over 100 cities already have a ready day plan, and new ones are added all the time."],["Is it free?", "Yes. Plizio Go is completely free and needs no sign-up."]],
  };
  const faqs = FLAT ? PG_FAQ[lang] : lang === "de"
    ? [["Was sind die Top-Sehenswürdigkeiten in "+country+"?", "Zu den beliebtesten zählen "+top.slice(0,5).map(p=>localizedName(p,"de")).join(", ")+" und viele weitere – die vollständige Top-50-Liste findest du auf dieser Seite."],["Wann ist die beste Reisezeit für "+country+"?","Mai bis Oktober bietet das angenehmste Wetter; Juli und August sind am wärmsten und am stärksten besucht."]]
    : lang === "hu"
    ? [["Melyek "+country+" legjobb látnivalói?","A legnépszerűbbek közé tartozik "+top.slice(0,5).map(p=>localizedName(p,"hu")).join(", ")+" és még sok más – a teljes top 50 listát ezen az oldalon találod."],["Mikor a legjobb "+country+"-ba utazni?","Május és október között a legkellemesebb az időjárás; július és augusztus a legmelegebb és leglátogatottabb."]]
    : lang === "ro"
    ? [["Care sunt cele mai importante obiective din "+country+"?","Printre cele mai populare se numără "+top.slice(0,5).map(p=>localizedName(p,"ro")).join(", ")+" și multe altele – lista completă top 50 este pe această pagină."],["Care este cea mai bună perioadă pentru a vizita "+country+"?","Între mai și octombrie vremea este cea mai plăcută; iulie și august sunt cele mai calde și aglomerate."]]
    : [["What are the top attractions in "+country+"?","Among the most popular are "+top.slice(0,5).map(p=>localizedName(p,"en")).join(", ")+" and many more – the full top 50 list is on this page."],["When is the best time to visit "+country+"?","May to October offers the most pleasant weather; July and August are warmest and busiest."]];
  const faqSchema = { "@context":"https://schema.org","@type":"FAQPage","mainEntity": faqs.map(([q,a])=>({ "@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a} })) };
  const breadcrumb = { "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":t.home,"item":`${SITE}/${lang==="de"?"":lang+"/"}`},{"@type":"ListItem","position":2,"name":t.heading(country),"item":url}] };

  const hero = top.find(p=>p.image);
  const heroImg = hero?.image ? esc(hero.image) : "";

  return `<!DOCTYPE html><html lang="${lang}"><head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${esc(t.titleTpl(country))} | Plizio</title>
<meta name="description" content="${esc(t.metaTpl(country))}"/>
<link rel="canonical" href="${url}"/>
${LANGS.map(l=>`<link rel="alternate" hreflang="${l}" href="${alts[l]}"/>`).join("")}<link rel="alternate" hreflang="x-default" href="${alts.en}"/>
<meta property="og:title" content="${esc(t.titleTpl(country))}"/><meta property="og:description" content="${esc(t.metaTpl(country))}"/><meta property="og:type" content="website"/><meta property="og:url" content="${url}"/>${heroImg?`<meta property="og:image" content="${SITE}${heroImg}"/>`:""}
<script type="application/ld+json">${JSON.stringify(itemList)}</script>
<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
<script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>
<style>
:root{--bg:#0b1020;--card:#141b30;--ink:#eef2ff;--mut:#9fb0d0;--acc:#5b8cff;--line:#243150}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.55 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
a{color:inherit;text-decoration:none}
.wrap{max-width:1180px;margin:0 auto;padding:0 18px}
.crumb{font-size:13px;color:var(--mut);padding:16px 0}
.hero{position:relative;border-radius:20px;overflow:hidden;margin:6px 0 26px;min-height:280px;display:flex;align-items:flex-end;background:#0f1830}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5}
.hero .ov{position:relative;padding:30px 26px;background:linear-gradient(0deg,rgba(11,16,32,.92),transparent)}
.hero .sub{color:var(--acc);font-weight:700;letter-spacing:.04em;text-transform:uppercase;font-size:13px}
.hero h1{margin:.2em 0 .3em;font-size:clamp(26px,4vw,42px);line-height:1.1}
.hero p{margin:0;max-width:760px;color:var(--mut)}
.bar{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 24px}
.chip{background:var(--card);border:1px solid var(--line);border-radius:999px;padding:8px 15px;font-size:14px;font-weight:600}
.chip.map{background:var(--acc);border-color:var(--acc);color:#fff}
.catsec{margin:0 0 34px}.catsec h2{font-size:22px;margin:0 0 16px;padding-bottom:8px;border-bottom:1px solid var(--line)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px}
.card{background:var(--card);border:1px solid var(--line);border-radius:16px;overflow:hidden;display:flex;flex-direction:column;transition:.15s;min-height:240px}
.card:hover{transform:translateY(-3px);border-color:var(--acc)}
.card img,.card .noimg{width:100%;height:150px;object-fit:cover;background:#0f1830;display:block}
.cbody{padding:13px 14px;display:flex;flex-direction:column;gap:6px;flex:1}
.badge{align-self:flex-start;font-size:11px;font-weight:700;color:var(--acc);background:rgba(91,140,255,.12);padding:3px 9px;border-radius:6px;text-transform:uppercase;letter-spacing:.03em}
.cbody h3{margin:0;font-size:16px}.cbody p{margin:0;font-size:13px;color:var(--mut);flex:1}
.more{font-size:13px;font-weight:700;color:var(--acc)}
.faq{margin:10px 0 50px}.faq h2{font-size:22px}details{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px 16px;margin:0 0 10px}summary{font-weight:700;cursor:pointer}details p{color:var(--mut)}
footer{border-top:1px solid var(--line);padding:24px 0;color:var(--mut);font-size:13px}
</style></head><body>
<div class="wrap">
<nav class="crumb"><a href="${SITE}/${lang==="de"?"":lang+"/"}">${esc(t.home)}</a> › ${esc(t.heading(country))}</nav>
<header class="hero">${heroImg?`<img src="${heroImg}" alt=""/>`:""}<div class="ov"><div class="sub">${esc(t.sub)}${FLAT?"":" · "+top.length}</div><h1>${esc(t.heading(country))}</h1><p>${esc(t.intro(country))}</p></div></header>
<div class="bar"><a class="chip map" href="${mapHref}">🗺️ ${esc(t.onMap)}</a>${catChips}</div>
${sections}
<section class="faq"><h2>${esc(t.faqH)}</h2>${faqs.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>
<footer>© Plizio · <a href="${mapHref}">${esc(t.onMap)}</a></footer>
</div></body></html>`;
}

// hub-manifest a bekoteshez (sitemap + orszag-oldal link): iso -> category -> lang -> slug
let CAT_KEY = "attractions";
const HUB_MANIFEST: Record<string, Record<string, Record<string, string>>> = {};
function buildOne(c: CountryCfg): void {
  const jsonp = path.resolve(process.cwd(), "public/data/pois", `${c.iso.toUpperCase()}.json`);
  if (!fs.existsSync(jsonp)) { console.log(`SKIP ${c.iso}: no ${c.iso.toUpperCase()}.json`); return; }
  const j = JSON.parse(fs.readFileSync(jsonp, "utf8"));
  const pois: POI[] = (j.pois || j) as POI[];
  const top = FLAT ? selectPliziogo(pois) : selectTop(pois);
  if (!top.length) { console.log(`SKIP ${c.iso}: 0 entry (${CAT_KEY})`); return; }
  for (const lang of LANGS) {
    const slug = `${slugify(c.names[lang])}-${SIGHTS_SLUG[lang]}`;
    const dir = path.resolve(process.cwd(), "public", slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), render(c, lang, top), "utf8");
    ((HUB_MANIFEST[c.iso] ??= {})[CAT_KEY] ??= {})[lang] = slug;
    console.log(`OK ${c.iso} ${lang} → public/${slug}/ (${top.length} sights)`);
  }
}

const target = (process.argv[2] || "all").toLowerCase();
const category = (process.argv[3] || "attractions").toLowerCase();
if (category === "pliziogo" || category === "itinerary" || category === "reiseroute") {
  SIGHTS_SLUG = PLIZIOGO_SLUG;
  T = T_PLIZIOGO;
  FLAT = true;
  CAT_KEY = "itinerary";
  console.log("category: PlizioGo itineraries (cities with a day plan)");
} else if (category === "nature" || category === "nationalparks") {
  SIGHTS_SLUG = NATURE_SLUG;
  T = T_NATURE;
  CAT_KEY = "nature";
  // Many iconic national parks are typed "landmark" (Plitvice "Plitvicer Seen",
  // Krka "Nationalpark Krka", Kornati/Brijuni "...-Inseln"), so also include any
  // POI whose name carries a nature / national-park keyword.
  const NAT_RE = /national\s?park|nationalpark|nemzeti\s?park|parc(ul)?\s?nat|naturpark|nature park|\bseen?\b|\blakes?\b|tavak|\bt[oó]\b|jezer|insel|island|\botok\b|sziget|wasserfall|waterfall|v[ií]zes|\bslap|\bberg(e|massiv)?\b|mountain|\bhegy|gebirge|gorge|canyon|schlucht|\bfalls?\b/i;
  CAT_FILTER = (p: any) => !!p.type && !EXCLUDE.has(p.type) &&
    (NATURE.has(p.type) || Object.values((p.name || {}) as Record<string, string>).some((n) => NAT_RE.test(n || "")));
  console.log("category: national parks & nature");
}
const list = target === "all" ? COUNTRIES : COUNTRIES.filter(c => target.split(",").includes(c.iso));
if (!list.length) { console.error(`No country '${target}' configured`); process.exit(1); }
for (const c of list) buildOne(c);

// hub-manifest mentes (merge a meglevovel, hogy a tobb-kategoriás futasok halmozodjanak) — a bekotest ez vezerli
const manifPath = path.resolve(process.cwd(), "public/data/_hub_manifest.json");
let manif: Record<string, Record<string, Record<string, string>>> = {};
try { manif = JSON.parse(fs.readFileSync(manifPath, "utf8")); } catch { /* uj */ }
for (const iso of Object.keys(HUB_MANIFEST)) {
  manif[iso] = { ...(manif[iso] || {}), ...HUB_MANIFEST[iso] };
}
fs.writeFileSync(manifPath, JSON.stringify(manif, null, 2), "utf8");
console.log(`[hub-manifest] ${Object.keys(HUB_MANIFEST).length} orszag irva → public/data/_hub_manifest.json`);
