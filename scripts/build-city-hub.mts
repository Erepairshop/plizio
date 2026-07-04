// Per-city "Top Sehenswürdigkeiten" SEO hub pages — one rich static HTML per
// language at a localized root slug (e.g. /berlin-sehenswuerdigkeiten/,
// /berlin-latnivalok/). Content mix (no per-sight photos needed):
//   1. attraction-type POIs near the city (image cards, link to POI pages)
//   2. the city's own sights list (text cards + Street View / Maps buttons)
//   3. upcoming 2026 events from the events sidecar
//   4. FAQ + ItemList/FAQPage/Event schema + hreflang
// Data: pois/<ISO>.json (lite), data/sights/<poi-id>.json, sight-sv.json,
// poi-yearly-highlights.json, _poi-url-index.json, _image-manifest.json.
// Run: npx tsx scripts/build-city-hub.mts berlin   (or comma list / all)
import fs from "node:fs";
import path from "node:path";

type Lang = "de" | "hu" | "ro" | "en";
const LANGS: Lang[] = ["de", "hu", "ro", "en"];
const OUT_DIR = process.env.OUT_DIR || "public";
const SITE = "https://plizio.com";
const TODAY = new Date().toISOString().slice(0, 10);

// --- city config (pilot: Berlin; extend the list for rollout) ---
type CityCfg = {
  key: string; poiId: string; iso: string; coords: [number, number]; radiusKm: number;
  mapSlug: string; names: Record<Lang, string>; countryNames: Record<Lang, string>;
};
const CITIES: CityCfg[] = [
  {
    key: "berlin", poiId: "city-berlin", iso: "DE", coords: [13.405, 52.52], radiusKm: 14,
    mapSlug: "deutschland",
    names: { de: "Berlin", hu: "Berlin", ro: "Berlin", en: "Berlin" },
    countryNames: { de: "Deutschland", hu: "Németország", ro: "Germania", en: "Germany" },
  },
];

const SIGHTS_SLUG: Record<Lang, string> = { de: "sehenswuerdigkeiten", hu: "latnivalok", ro: "obiective-turistice", en: "attractions" };
const T: Record<Lang, any> = {
  de: {
    heading: (c: string) => `Sehenswürdigkeiten in ${c}`, sub: (n: number) => `Top ${n} + Geheimtipps`,
    intro: (c: string) => `Die besten Sehenswürdigkeiten in ${c} auf einen Blick: Wahrzeichen, Museen, Parks und versteckte Ecken. Mit Karte, Street View und den wichtigsten Events des Jahres.`,
    topH: (c: string) => `Die Top-Sehenswürdigkeiten in ${c}`, moreH: (c: string) => `Weitere Sehenswürdigkeiten und Geheimtipps`,
    moreSub: "Mit Street View und Google Maps direkt ansehen:",
    eventsH: (c: string) => `Events in ${c} 2026`, eventsSub: "Ausgewählte Highlights mit Datum und offizieller Quelle:",
    more: "Mehr erfahren", home: "Startseite", onMap: "Auf der Karte", cityPage: (c: string) => `${c} Reiseseite`,
    countryHub: (c: string) => `Alle Sehenswürdigkeiten in ${c}`, faqH: "Häufige Fragen",
    src: "Quelle", free: "kostenlos",
    titleTpl: (c: string, n: number) => `Sehenswürdigkeiten in ${c}: Top ${n} + Events (2026)`,
    metaTpl: (c: string) => `Die besten Sehenswürdigkeiten in ${c}: Wahrzeichen, Museen, Parks und Geheimtipps mit Street View, Karte und den Top-Events 2026.`,
    faqs: (c: string, top5: string, evN: number) => [
      [`Was sind die Top-Sehenswürdigkeiten in ${c}?`, `Zu den beliebtesten zählen ${top5} und viele weitere. Die vollständige Liste mit Karte und Street View findest du auf dieser Seite.`],
      [`Welche Events finden 2026 in ${c} statt?`, `Auf dieser Seite sind ${evN} ausgewählte Events für 2026 gelistet, jeweils mit Datum, Ort und Link zur offiziellen Seite.`],
      [`Wie viele Tage sollte man für ${c} einplanen?`, `Für die wichtigsten Sehenswürdigkeiten empfehlen sich 2 bis 3 Tage. Mit Museen, Vierteln und Tagesausflügen wird auch eine Woche nicht langweilig.`],
    ],
  },
  hu: {
    heading: (c: string) => `${c} látnivalói`, sub: (n: number) => `Top ${n} + rejtett kincsek`,
    intro: (c: string) => `${c} legjobb látnivalói egy helyen: nevezetességek, múzeumok, parkok és rejtett zugok. Térképpel, Street View-val és az év legfontosabb eseményeivel.`,
    topH: (c: string) => `${c} top látnivalói`, moreH: () => `További látnivalók és rejtett kincsek`,
    moreSub: "Street View-val és Google Maps-szel azonnal megnézheted:",
    eventsH: (c: string) => `Események ${c}ben 2026`, eventsSub: "Válogatott programok dátummal és hivatalos forrással:",
    more: "Tovább", home: "Főoldal", onMap: "A térképen", cityPage: (c: string) => `${c} utazási oldal`,
    countryHub: (c: string) => `${c} összes látnivalója`, faqH: "Gyakori kérdések",
    src: "Forrás", free: "ingyenes",
    titleTpl: (c: string, n: number) => `${c} látnivalói: top ${n} + események (2026)`,
    metaTpl: (c: string) => `${c} legjobb látnivalói: nevezetességek, múzeumok, parkok és rejtett kincsek Street View-val, térképpel és a 2026-os top eseményekkel.`,
    faqs: (c: string, top5: string, evN: number) => [
      [`Melyek ${c} legjobb látnivalói?`, `A legnépszerűbbek közé tartozik ${top5} és még sok más. A teljes listát térképpel és Street View-val ezen az oldalon találod.`],
      [`Milyen események lesznek 2026-ban ${c}ben?`, `Ezen az oldalon ${evN} válogatott 2026-os esemény szerepel, mindegyik dátummal, helyszínnel és hivatalos linkkel.`],
      [`Hány napot érdemes ${c}re szánni?`, `A legfontosabb látnivalókhoz 2-3 nap ajánlott. Múzeumokkal, városnegyedekkel és kirándulásokkal egy hét is gyorsan elrepül.`],
    ],
  },
  ro: {
    heading: (c: string) => `Obiective turistice în ${c}`, sub: (n: number) => `Top ${n} + locuri ascunse`,
    intro: (c: string) => `Cele mai bune obiective turistice din ${c} la un loc: repere, muzee, parcuri și colțuri ascunse. Cu hartă, Street View și cele mai importante evenimente ale anului.`,
    topH: (c: string) => `Obiectivele de top din ${c}`, moreH: () => `Alte obiective și locuri ascunse`,
    moreSub: "Vezi direct cu Street View și Google Maps:",
    eventsH: (c: string) => `Evenimente în ${c} 2026`, eventsSub: "Selecție de evenimente cu dată și sursă oficială:",
    more: "Află mai mult", home: "Acasă", onMap: "Pe hartă", cityPage: (c: string) => `Pagina de călătorie ${c}`,
    countryHub: (c: string) => `Toate obiectivele din ${c}`, faqH: "Întrebări frecvente",
    src: "Sursă", free: "gratuit",
    titleTpl: (c: string, n: number) => `Obiective turistice în ${c}: top ${n} + evenimente (2026)`,
    metaTpl: (c: string) => `Cele mai bune obiective turistice din ${c}: repere, muzee, parcuri și locuri ascunse, cu Street View, hartă și evenimentele de top din 2026.`,
    faqs: (c: string, top5: string, evN: number) => [
      [`Care sunt cele mai bune obiective din ${c}?`, `Printre cele mai populare se numără ${top5} și multe altele. Lista completă cu hartă și Street View este pe această pagină.`],
      [`Ce evenimente au loc în ${c} în 2026?`, `Pe această pagină sunt listate ${evN} evenimente selectate pentru 2026, fiecare cu dată, loc și link către pagina oficială.`],
      [`Câte zile sunt necesare pentru ${c}?`, `Pentru obiectivele principale se recomandă 2-3 zile. Cu muzee, cartiere și excursii de o zi, nici o săptămână nu se face plictisitoare.`],
    ],
  },
  en: {
    heading: (c: string) => `Attractions in ${c}`, sub: (n: number) => `Top ${n} + hidden gems`,
    intro: (c: string) => `The best attractions in ${c} at a glance: landmarks, museums, parks and hidden corners. With map, Street View and the year's most important events.`,
    topH: (c: string) => `The top attractions in ${c}`, moreH: () => `More attractions and hidden gems`,
    moreSub: "View instantly with Street View and Google Maps:",
    eventsH: (c: string) => `Events in ${c} 2026`, eventsSub: "Selected highlights with date and official source:",
    more: "Learn more", home: "Home", onMap: "On the map", cityPage: (c: string) => `${c} travel page`,
    countryHub: (c: string) => `All attractions in ${c}`, faqH: "Frequently asked questions",
    src: "Source", free: "free",
    titleTpl: (c: string, n: number) => `Top ${n} Attractions in ${c} + Events (2026)`,
    metaTpl: (c: string) => `The best attractions in ${c}: landmarks, museums, parks and hidden gems with Street View, map and the top events of 2026.`,
    faqs: (c: string, top5: string, evN: number) => [
      [`What are the top attractions in ${c}?`, `Among the most popular are ${top5} and many more. The full list with map and Street View is on this page.`],
      [`What events take place in ${c} in 2026?`, `This page lists ${evN} selected events for 2026, each with date, venue and a link to the official page.`],
      [`How many days should I plan for ${c}?`, `2 to 3 days cover the main attractions. With museums, neighbourhoods and day trips, even a week will not get boring.`],
    ],
  },
};

const TYPE_LABEL: Record<string, Partial<Record<Lang, string>>> = {
  castle: { de: "Burg", hu: "Vár", ro: "Castel", en: "Castle" }, cathedral: { de: "Kathedrale", hu: "Katedrális", ro: "Catedrală", en: "Cathedral" },
  church: { de: "Kirche", hu: "Templom", ro: "Biserică", en: "Church" }, museum: { de: "Museum", hu: "Múzeum", ro: "Muzeu", en: "Museum" },
  park: { de: "Park", hu: "Park", ro: "Parc", en: "Park" }, palace: { de: "Palast", hu: "Palota", ro: "Palat", en: "Palace" },
  monument: { de: "Denkmal", hu: "Emlékmű", ro: "Monument", en: "Monument" }, landmark: { de: "Wahrzeichen", hu: "Nevezetesség", ro: "Reper", en: "Landmark" },
  historical: { de: "Geschichte", hu: "Történelem", ro: "Istorie", en: "History" }, ruins: { de: "Ruine", hu: "Rom", ro: "Ruine", en: "Ruins" },
  tower: { de: "Turm", hu: "Torony", ro: "Turn", en: "Tower" }, bridge: { de: "Brücke", hu: "Híd", ro: "Pod", en: "Bridge" },
  lake: { de: "See", hu: "Tó", ro: "Lac", en: "Lake" }, river: { de: "Fluss", hu: "Folyó", ro: "Râu", en: "River" },
  "kid-landmark": { de: "Für Familien", hu: "Családoknak", ro: "Pentru familii", en: "For families" },
  zoo: { de: "Zoo", hu: "Állatkert", ro: "Zoo", en: "Zoo" }, garden: { de: "Garten", hu: "Kert", ro: "Grădină", en: "Garden" },
};
const SIGHT_CAT_LABEL: Record<string, Partial<Record<Lang, string>> & { e: string }> = {
  viewpoints: { e: "🌄", de: "Aussicht", hu: "Kilátó", ro: "Panoramă", en: "Viewpoint" },
  museums: { e: "🏛️", de: "Museum", hu: "Múzeum", ro: "Muzeu", en: "Museum" },
  culture: { e: "🎭", de: "Kultur", hu: "Kultúra", ro: "Cultură", en: "Culture" },
  nature: { e: "🌿", de: "Natur", hu: "Természet", ro: "Natură", en: "Nature" },
  history: { e: "🏛️", de: "Geschichte", hu: "Történelem", ro: "Istorie", en: "History" },
  religious: { e: "⛪", de: "Sakralbau", hu: "Templom", ro: "Lăcaș", en: "Religious" },
  parks: { e: "🌳", de: "Park", hu: "Park", ro: "Parc", en: "Park" },
  family: { e: "👨‍👩‍👧", de: "Familie", hu: "Család", ro: "Familie", en: "Family" },
};
const EXCLUDE = new Set(["factory","industry","port","economic","mine","plant","company","power-plant","refinery","city","town","village","capital","state-capital","region","country","municipality","commune","district","suburb","quarter"]);
const MONTHS: Record<Lang, string[]> = {
  de: ["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],
  hu: ["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."],
  ro: ["ian.","feb.","mar.","apr.","mai","iun.","iul.","aug.","sep.","oct.","nov.","dec."],
  en: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
};
function fmtDate(iso: string, lang: Lang): string {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return iso;
  const mon = MONTHS[lang][parseInt(m[2], 10) - 1];
  if (lang === "hu") return `${m[1]}. ${mon} ${parseInt(m[3], 10)}.`;
  if (lang === "en") return `${mon} ${parseInt(m[3], 10)}, ${m[1]}`;
  return `${parseInt(m[3], 10)}. ${mon} ${m[1]}`;
}

// --- shared data ---
// Az url-index a generate-poi-html deploy-lepese irja (a runneren); lokalisan
// gyakran csonk. URLIDX_PATH env-vel at lehet iranyitani az eles peldanyra.
const URLIDX: Record<string, Record<string, string>> = JSON.parse(fs.readFileSync(process.env.URLIDX_PATH || path.resolve("public/data/_poi-url-index.json"), "utf8"));
const EVENTS: Record<string, any[]> = JSON.parse(fs.readFileSync(path.resolve("public/data/poi-yearly-highlights.json"), "utf8"));
const SV_OK: Record<string, 1 | string> = (() => { try { return JSON.parse(fs.readFileSync(path.resolve("public/data/sight-sv.json"), "utf8")); } catch { return {}; } })();
const IMG = new Set<string>((() => { try { return JSON.parse(fs.readFileSync(path.resolve("public/data/_image-manifest.json"), "utf8")).filter((f: any) => typeof f === "string" && f.endsWith(".webp")); } catch { return []; } })());
const svKey = (lat: number, lng: number) => `${lat.toFixed(4)},${lng.toFixed(4)}`;
function svHref(lat: number, lng: number): string {
  const v = SV_OK[svKey(lat, lng)];
  const vp = `viewpoint=${lat.toFixed(6)}%2C${lng.toFixed(6)}`;
  if (typeof v === "string") {
    const at = v.lastIndexOf("@");
    const pano = at >= 0 ? v.slice(0, at) : v;
    const hdg = at >= 0 ? v.slice(at + 1) : "";
    const h = hdg && /^\d{1,3}(\.\d+)?$/.test(hdg) ? `&heading=${hdg}` : "";
    return `https://www.google.com/maps/@?api=1&map_action=pano&pano=${pano}&${vp}${h}`;
  }
  return `https://www.google.com/maps/@?api=1&map_action=pano&${vp}`;
}
const SV_PEGMAN = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true"><circle cx="12" cy="4.4" r="2.5" fill="currentColor"/><path d="M12 7.6c-2 0-3.3 1.2-3.3 3v3.6c0 .5.4 1 1 1h.3l.4 4.9c0 .5.5.9 1 .9h1.2c.5 0 1-.4 1-.9l.4-4.9h.3c.6 0 1-.5 1-1v-3.6c0-1.8-1.3-3-3.3-3z" fill="currentColor"/></svg>`;
const GM_PIN = `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true"><path d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" fill="currentColor"/><circle cx="12" cy="9" r="2.6" fill="#fff"/></svg>`;

function esc(s: string): string { return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function firstSentences(s: string, n = 2, max = 260): string {
  if (!s) return "";
  const t = s.replace(/\s+/g, " ").trim();
  const parts = t.split(/(?<=[.!?])\s/).slice(0, n).join(" ");
  return parts.length > max ? parts.slice(0, max - 1) + "…" : parts;
}
function km(a: number[], b: number[]): number {
  const R = 6371, dLat = (b[1] - a[1]) * Math.PI / 180, dLon = (b[0] - a[0]) * Math.PI / 180;
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * Math.PI / 180) * Math.cos(b[1] * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(x)));
}
function resolveImg(p: any): string | null {
  const base = (u?: string) => (u ? u.split("/").pop() || "" : "");
  if (p.image && IMG.has(base(p.image))) return `/poi-images/${base(p.image)}`;
  if (IMG.has(`${p.id}.webp`)) return `/poi-images/${p.id}.webp`;
  const core = p.id.replace(/-(history|landmarks|nature|cities|economic|relief|life|culture)-v\d+$/, "").replace(/-v\d+$/, "").replace(/-extra$/, "");
  if (core !== p.id && IMG.has(`${core}.webp`)) return `/poi-images/${core}.webp`;
  return null;
}
const localName = (p: any, lang: Lang) => p.name?.[lang] || p.name?.de || p.name?.en || p.id;
// Name-dedup kulcs: a varosnev-tokenek ("Berlin", "Berliner") es zarojeles
// utotagok lehuzasa, kulonben "East Side Gallery" vs "East Side Gallery Berlin"
// vagy "Fernsehturm" vs "Berliner Fernsehturm" duplan jelenik meg.
function nameKey(name: string, c: CityCfg): string {
  let s = String(name).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\([^)]*\)/g, " ");
  for (const l of LANGS) {
    const cn = c.names[l].toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    s = s.split(cn + "er").join(" ").split(cn).join(" ");
  }
  return s.replace(/[^a-z0-9]+/g, "");
}
const poiHref = (id: string, lang: Lang) => { const e = URLIDX[id]; return e ? e[lang] || e.de || e.en || null : null; };

// nearby attraction POIs, scored + name-deduped, top N
function selectAttractions(c: CityCfg, n = 24): any[] {
  const pois: any[] = (() => { const j = JSON.parse(fs.readFileSync(path.resolve(`public/data/pois/${c.iso}.json`), "utf8")); return j.pois || j; })();
  const TYPE_W: Record<string, number> = { landmark: 60, "kid-landmark": 45, castle: 55, cathedral: 50, church: 25, monastery: 40, ruins: 35, palace: 55, museum: 45, monument: 35, tower: 35, bridge: 30, park: 50, garden: 40, zoo: 45, historical: 40, lake: 40, river: 25 };
  const rich = (p: any) => LANGS.reduce((s, l) => s + ((p.descriptionAdvanced?.[l] || p.description?.[l] || "").length), 0);
  const cand = pois
    .filter((p) => p.type && !EXCLUDE.has(p.type) && Array.isArray(p.coords) && km(c.coords, p.coords) <= c.radiusKm && resolveImg(p) && poiHref(p.id, "de"))
    .map((p) => ({ p, s: (TYPE_W[p.type] ?? 20) + Math.min(rich(p), 2400) / 12 + (/-extra$/.test(p.id) ? 60 : 0) }))
    .sort((a, b) => b.s - a.s || a.p.id.localeCompare(b.p.id));
  const kept: any[] = [];
  const seen = new Set<string>();
  for (const { p } of cand) {
    const nk = nameKey(p.name?.de || p.name?.en || p.id, c);
    if (seen.has(nk)) continue;
    if (kept.some((k) => km(k.coords, p.coords) < 0.15)) continue;
    seen.add(nk);
    kept.push(p);
    if (kept.length >= n) break;
  }
  return kept;
}

function render(c: CityCfg, lang: Lang, attractions: any[], sightsData: any, events: any[]): string {
  const t = T[lang];
  const city = c.names[lang];
  const slug = `${c.key}-${SIGHTS_SLUG[lang]}`;
  const url = `${SITE}/${slug}/`;
  const alts = {} as Record<Lang, string>;
  for (const l of LANGS) alts[l] = `${SITE}/${c.key}-${SIGHTS_SLUG[l]}/`;
  const mapHref = `${SITE}/${c.mapSlug}-map/${lang === "de" ? "" : lang + "/"}`;
  const cityHref = poiHref(c.poiId, lang);
  const countryHubHref = `${SITE}/${c.countryNames[lang].toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-")}-${SIGHTS_SLUG[lang]}/`;

  // own sights (text cards) minus ones already shown as attraction cards
  const shownNames = new Set(attractions.map((p) => nameKey(localName(p, lang) as string, c)));
  const rawSights: any[] = sightsData?.sights?.[lang] || sightsData?.sights?.de || [];
  const seenS = new Set<string>();
  const sights = rawSights.filter((s) => {
    if (!s?.name) return false;
    const k = nameKey(String(s.name), c);
    if (!k || seenS.has(k) || shownNames.has(k)) return false;
    seenS.add(k);
    return true;
  });

  const upcoming = (events || []).filter((e) => e?.title?.[lang] && e.date >= TODAY).sort((a, b) => String(a.date).localeCompare(String(b.date))).slice(0, 10);

  const introSrc = sightsData?.descriptionAdvanced?.[lang] || "";
  const intro = firstSentences(introSrc, 2, 300) || t.intro(city);

  function attrCard(p: any, rank: number): string {
    const nm = esc(localName(p, lang));
    const href = poiHref(p.id, lang);
    const desc = esc(firstSentences(p.descriptionAdvanced?.[lang] || p.description?.[lang] || "", 1, 150));
    const badge = esc(TYPE_LABEL[p.type]?.[lang] || p.type || "");
    const img = `<img loading="lazy" width="300" height="150" src="${esc(resolveImg(p) || "")}" alt="${nm}" />`;
    const inner = `<span class="rank">${rank}</span>${img}<div class="cbody"><span class="badge">${badge}</span><h3>${nm}</h3>${desc ? `<p>${desc}</p>` : ""}${href ? `<span class="more">${t.more} →</span>` : ""}</div>`;
    return href ? `<a class="card" href="${esc(href)}">${inner}</a>` : `<div class="card">${inner}</div>`;
  }

  function sightRow(s: any): string {
    const nm = esc(String(s.name));
    const txt = esc(String(s.text || "").replace(/\s+/g, " ").trim());
    let btns = "";
    if (Array.isArray(s.coords) && s.coords.length === 2) {
      const [slng, slat] = s.coords;
      const gm = `https://www.google.com/maps/search/?api=1&query=${slat.toFixed(6)},${slng.toFixed(6)}`;
      if (typeof SV_OK[svKey(slat, slng)] === "string") {
        btns = `<a class="sv" href="${svHref(slat, slng)}" target="_blank" rel="nofollow noopener" title="Street View">${SV_PEGMAN}</a><a class="sv gm" href="${gm}" target="_blank" rel="nofollow noopener" title="Google Maps">${GM_PIN}</a>`;
      } else {
        btns = `<a class="sv gm" href="${gm}" target="_blank" rel="nofollow noopener" title="Google Maps">${GM_PIN}</a>`;
      }
    }
    const cat = SIGHT_CAT_LABEL[s.category];
    const catChip = cat ? `<span class="scat">${cat.e} ${esc(cat[lang] || cat.en || s.category)}</span>` : "";
    return `<article class="sight" itemscope itemtype="https://schema.org/TouristAttraction"><h3 itemprop="name">${nm}${btns}${catChip}</h3>${txt ? `<p itemprop="description">${txt}</p>` : ""}</article>`;
  }

  function eventRow(e: any): string {
    const nm = esc(e.title[lang]);
    const sum = esc(e.summary?.[lang] || "");
    const dt = fmtDate(String(e.date), lang);
    const venue = e.venue ? `<span class="evenue">📍 ${esc(e.venue)}</span>` : "";
    const price = e.price ? `<span class="eprice">🎟 ${esc(e.price)}</span>` : "";
    const src = e.source_url ? `<a class="esrc" href="${esc(e.source_url)}" target="_blank" rel="nofollow noopener">${t.src} ↗</a>` : "";
    return `<article class="event" itemscope itemtype="https://schema.org/Event"><div class="edate">${esc(dt)}</div><div class="ebody"><h3 itemprop="name">${nm}</h3>${sum ? `<p itemprop="description">${sum}</p>` : ""}<div class="emeta">${venue}${price}${src}</div></div></article>`;
  }

  const top5 = attractions.slice(0, 5).map((p) => localName(p, lang)).join(", ");
  const faqs: [string, string][] = t.faqs(city, top5, upcoming.length);

  const itemList = { "@context": "https://schema.org", "@type": "ItemList", name: t.titleTpl(city, attractions.length), numberOfItems: attractions.length, itemListElement: attractions.map((p, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "TouristAttraction", name: localName(p, lang), ...(poiHref(p.id, lang) ? { url: SITE + poiHref(p.id, lang) } : {}), ...(resolveImg(p) ? { image: SITE + resolveImg(p) } : {}) } })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: t.home, item: `${SITE}/${lang === "de" ? "" : lang + "/"}` }, { "@type": "ListItem", position: 2, name: t.heading(city), item: url }] };
  const eventSchema = upcoming.length ? { "@context": "https://schema.org", "@graph": upcoming.map((e) => ({ "@type": "Event", name: e.title[lang], startDate: e.date, location: { "@type": "Place", name: e.venue || city, address: city }, ...(e.source_url ? { url: e.source_url } : {}) })) } : null;

  const heroImg = resolveImg({ id: c.poiId, image: "" }) || "";

  return `<!DOCTYPE html><html lang="${lang}"><head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${esc(t.titleTpl(city, attractions.length))} | Plizio</title>
<meta name="description" content="${esc(t.metaTpl(city))}"/>
<link rel="canonical" href="${url}"/>
${LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${alts[l]}"/>`).join("")}<link rel="alternate" hreflang="x-default" href="${alts.en}"/>
<meta property="og:title" content="${esc(t.titleTpl(city, attractions.length))}"/><meta property="og:description" content="${esc(t.metaTpl(city))}"/><meta property="og:type" content="website"/><meta property="og:url" content="${url}"/>${heroImg ? `<meta property="og:image" content="${SITE}${heroImg}"/>` : ""}
<script type="application/ld+json">${JSON.stringify(itemList)}</script>
<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
<script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>
${eventSchema ? `<script type="application/ld+json">${JSON.stringify(eventSchema)}</script>` : ""}
<style>
:root{--bg:#0b1020;--card:#141b30;--ink:#eef2ff;--mut:#9fb0d0;--acc:#5b8cff;--line:#243150;--gold:#fbbc04}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.55 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
a{color:inherit;text-decoration:none}
.wrap{max-width:1180px;margin:0 auto;padding:0 18px}
.crumb{font-size:13px;color:var(--mut);padding:16px 0}
.hero{position:relative;border-radius:20px;overflow:hidden;margin:6px 0 26px;min-height:300px;display:flex;align-items:flex-end;background:#0f1830}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5}
.hero .ov{position:relative;padding:30px 26px;background:linear-gradient(0deg,rgba(11,16,32,.94),transparent)}
.hero .sub{color:var(--acc);font-weight:700;letter-spacing:.04em;text-transform:uppercase;font-size:13px}
.hero h1{margin:.2em 0 .3em;font-size:clamp(26px,4vw,42px);line-height:1.1}
.hero p{margin:0;max-width:820px;color:var(--mut)}
.bar{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 28px}
.chip{background:var(--card);border:1px solid var(--line);border-radius:999px;padding:8px 15px;font-size:14px;font-weight:600}
.chip.map{background:var(--acc);border-color:var(--acc);color:#fff}
h2{font-size:23px;margin:0 0 6px;padding-bottom:8px;border-bottom:1px solid var(--line)}
.secsub{color:var(--mut);font-size:14px;margin:0 0 18px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px;margin:0 0 40px}
.card{position:relative;background:var(--card);border:1px solid var(--line);border-radius:16px;overflow:hidden;display:flex;flex-direction:column;transition:.15s;min-height:240px}
.card:hover{transform:translateY(-3px);border-color:var(--acc)}
.card img{width:100%;height:150px;object-fit:cover;background:#0f1830;display:block}
.rank{position:absolute;top:10px;left:10px;z-index:2;background:rgba(11,16,32,.85);border:1px solid var(--line);color:#fff;font-weight:800;font-size:13px;width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center}
.cbody{padding:13px 14px;display:flex;flex-direction:column;gap:6px;flex:1}
.badge{align-self:flex-start;font-size:11px;font-weight:700;color:var(--acc);background:rgba(91,140,255,.12);padding:3px 9px;border-radius:6px;text-transform:uppercase;letter-spacing:.03em}
.cbody h3{margin:0;font-size:16px}.cbody p{margin:0;font-size:13px;color:var(--mut);flex:1}
.more{font-size:13px;font-weight:700;color:var(--acc)}
.sights{margin:0 0 40px}
.sight{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px 18px;margin:0 0 12px}
.sight h3{margin:0 0 4px;font-size:16px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.sight p{margin:0;font-size:14px;color:var(--mut)}
.sv{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:var(--gold);color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.35);transition:.15s}
.sv:hover{transform:scale(1.15)}
.sv.gm{background:#ea4335}
.scat{font-size:11px;font-weight:700;color:var(--mut);background:rgba(159,176,208,.12);padding:3px 9px;border-radius:6px}
.events{margin:0 0 40px}
.event{display:flex;gap:16px;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px 18px;margin:0 0 12px}
.edate{flex:0 0 auto;min-width:104px;font-weight:800;color:var(--acc);font-size:14px;padding-top:2px}
.ebody h3{margin:0 0 4px;font-size:16px}.ebody p{margin:0 0 6px;font-size:14px;color:var(--mut)}
.emeta{display:flex;flex-wrap:wrap;gap:12px;font-size:13px;color:var(--mut)}
.esrc{color:var(--acc);font-weight:700}
.faq{margin:10px 0 50px}
details{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px 16px;margin:0 0 10px}summary{font-weight:700;cursor:pointer}details p{color:var(--mut)}
footer{border-top:1px solid var(--line);padding:24px 0;color:var(--mut);font-size:13px;display:flex;flex-wrap:wrap;gap:16px}
footer a{color:var(--acc);font-weight:600}
@media(max-width:560px){.event{flex-direction:column;gap:4px}.edate{min-width:0}}
</style></head><body>
<div class="wrap">
<nav class="crumb"><a href="${SITE}/${lang === "de" ? "" : lang + "/"}">${esc(t.home)}</a> › ${esc(t.heading(city))}</nav>
<header class="hero">${heroImg ? `<img src="${heroImg}" alt="${esc(city)}"/>` : ""}<div class="ov"><div class="sub">${esc(t.sub(attractions.length))}</div><h1>${esc(t.heading(city))}</h1><p>${esc(intro)}</p></div></header>
<div class="bar"><a class="chip map" href="${mapHref}">🗺️ ${esc(t.onMap)}</a>${cityHref ? `<a class="chip" href="${esc(cityHref)}">📍 ${esc(t.cityPage(city))}</a>` : ""}<a class="chip" href="${countryHubHref}">${esc(t.countryHub(c.countryNames[lang]))}</a></div>
<section><h2>${esc(t.topH(city))}</h2><div class="grid" style="margin-top:18px">${attractions.map((p, i) => attrCard(p, i + 1)).join("")}</div></section>
${sights.length ? `<section class="sights"><h2>${esc(t.moreH(city))}</h2><p class="secsub">${esc(t.moreSub)}</p>${sights.map(sightRow).join("")}</section>` : ""}
${upcoming.length ? `<section class="events"><h2>${esc(t.eventsH(city))}</h2><p class="secsub">${esc(t.eventsSub)}</p>${upcoming.map(eventRow).join("")}</section>` : ""}
<section class="faq"><h2>${esc(t.faqH)}</h2>${faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>
<footer><span>© Plizio</span><a href="${mapHref}">${esc(t.onMap)}</a>${cityHref ? `<a href="${esc(cityHref)}">${esc(t.cityPage(city))}</a>` : ""}<a href="${countryHubHref}">${esc(t.countryHub(c.countryNames[lang]))}</a></footer>
</div></body></html>`;
}

// --- main ---
const target = (process.argv[2] || "all").toLowerCase();
const list = target === "all" ? CITIES : CITIES.filter((c) => target.split(",").includes(c.key));
if (!list.length) { console.error(`No city '${target}' configured`); process.exit(1); }
for (const c of list) {
  const attractions = selectAttractions(c);
  const sightsPath = path.resolve(`public/data/sights/${c.poiId}.json`);
  const sightsData = fs.existsSync(sightsPath) ? JSON.parse(fs.readFileSync(sightsPath, "utf8")) : null;
  const events = EVENTS[c.poiId] || [];
  if (attractions.length < 8) { console.log(`SKIP ${c.key}: only ${attractions.length} attraction cards (<8)`); continue; }
  for (const lang of LANGS) {
    const slug = `${c.key}-${SIGHTS_SLUG[lang]}`;
    const dir = path.resolve(OUT_DIR, slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), render(c, lang, attractions, sightsData, events), "utf8");
    console.log(`OK ${c.key} ${lang} → ${OUT_DIR}/${slug}/ (${attractions.length} cards, sights+events)`);
  }
}
