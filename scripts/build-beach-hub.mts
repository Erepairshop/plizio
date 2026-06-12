/**
 * Beach-hub static page generator (muster: Croatia).
 * Reads public/data/beach-hub/{hr-content,hr-events,hr-images}.json and emits, per lang (de/hu/ro/en):
 *   out/<lang>/croatia/<beaches-slug>/index.html            -- hub ("most beautiful beaches")
 *   out/<lang>/croatia/<beaches-slug>/<beach-slug>/index.html-- per-beach rich page
 * Images served from /poi-images/<file> (VPS shared dir). Reuses /poi-static/poi.css.
 */
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = process.env.OUT_DIR || "out";
const SITE = "https://plizio.com";
const LANGS = ["de", "hu", "ro", "en"] as const;
type Lang = (typeof LANGS)[number];
const DATA = path.resolve(process.cwd(), "public", "data", "beach-hub");

type CountryCfg = { cc: string; key: string; iso: string; mapSlug: string; name: Record<Lang, string> };
const COUNTRIES: CountryCfg[] = [
  { cc: "hr", key: "croatia", iso: "HR", mapSlug: "croatia-map", name: { de: "Kroatien", hu: "Horvátország", ro: "Croația", en: "Croatia" } },
  { cc: "es", key: "spain", iso: "ES", mapSlug: "spain-map", name: { de: "Spanien", hu: "Spanyolország", ro: "Spania", en: "Spain" } },
  { cc: "fr", key: "france", iso: "FR", mapSlug: "france-map", name: { de: "Frankreich", hu: "Franciaország", ro: "Franța", en: "France" } },
  { cc: "it", key: "italy", iso: "IT", mapSlug: "italy-map", name: { de: "Italien", hu: "Olaszország", ro: "Italia", en: "Italy" } },
  { cc: "pt", key: "portugal", iso: "PT", mapSlug: "portugal-map", name: { de: "Portugal", hu: "Portugália", ro: "Portugalia", en: "Portugal" } },
  { cc: "gb", key: "united-kingdom", iso: "GB", mapSlug: "unitedkingdom-map", name: { de: "Großbritannien", hu: "Egyesült Királyság", ro: "Marea Britanie", en: "United Kingdom" } },
  { cc: "gr", key: "greece", iso: "GR", mapSlug: "greece-map", name: { de: "Griechenland", hu: "Görögország", ro: "Grecia", en: "Greece" } },
  { cc: "dk", key: "denmark", iso: "DK", mapSlug: "denmark-map", name: { de: "Dänemark", hu: "Dánia", ro: "Danemarca", en: "Denmark" } },
  { cc: "de", key: "germany", iso: "DE", mapSlug: "deutschland-map", name: { de: "Deutschland", hu: "Németország", ro: "Germania", en: "Germany" } },
  { cc: "se", key: "sweden", iso: "SE", mapSlug: "sweden-map", name: { de: "Schweden", hu: "Svédország", ro: "Suedia", en: "Sweden" } },
  { cc: "cy", key: "cyprus", iso: "CY", mapSlug: "cyprus-map", name: { de: "Zypern", hu: "Ciprus", ro: "Cipru", en: "Cyprus" } },
  { cc: "no", key: "norway", iso: "NO", mapSlug: "norway-map", name: { de: "Norwegen", hu: "Norvégia", ro: "Norvegia", en: "Norway" } },
  { cc: "ie", key: "ireland", iso: "IE", mapSlug: "ireland-map", name: { de: "Irland", hu: "Írország", ro: "Irlanda", en: "Ireland" } },
  { cc: "tr", key: "turkey", iso: "TR", mapSlug: "turkey-map", name: { de: "Türkei", hu: "Törökország", ro: "Turcia", en: "Turkey" } },
  { cc: "ee", key: "estonia", iso: "EE", mapSlug: "estonia-map", name: { de: "Estland", hu: "Észtország", ro: "Estonia", en: "Estonia" } },
  { cc: "pl", key: "poland", iso: "PL", mapSlug: "poland-map", name: { de: "Polen", hu: "Lengyelország", ro: "Polonia", en: "Poland" } },
  { cc: "fi", key: "finland", iso: "FI", mapSlug: "finland-map", name: { de: "Finnland", hu: "Finnország", ro: "Finlanda", en: "Finland" } },
];
// Current-country context (reassigned per country in the main loop).
let COUNTRY: CountryCfg = COUNTRIES[0];
// Our map URL, lang-aware: hu lives at root, other langs in a subfolder.
function ourMapUrl(l: Lang) {
  return `/${COUNTRY.mapSlug}/${l === "hu" ? "" : l + "/"}`;
}
const BSLUG: Record<Lang, string> = { de: "straende", hu: "strandok", ro: "plaje", en: "beaches" };
// Hub title/intro are templated from the country name (avoids per-country copy).
function hubTitle(l: Lang): string {
  const n = COUNTRY.name[l];
  return l === "de" ? `Die schönsten Strände in ${n}`
    : l === "hu" ? `${n} legszebb strandjai`
    : l === "ro" ? `Cele mai frumoase plaje din ${n}`
    : `The most beautiful beaches in ${n}`;
}
function hubIntro(l: Lang, count: number): string {
  const n = COUNTRY.name[l];
  return l === "de" ? `Die ${count} schönsten Strände in ${n} – mit allen praktischen Infos, Veranstaltungen und Tipps.`
    : l === "hu" ? `${n} ${count} legszebb strandja – minden praktikus információval, eseménnyel és tippel.`
    : l === "ro" ? `Cele mai frumoase ${count} de plaje din ${n} – cu toate informațiile practice, evenimente și sfaturi.`
    : `The ${count} most beautiful beaches in ${n} – with all the practical info, events and tips.`;
}
const I: Record<string, Record<Lang, string>> = {
  home: { de: "Start", hu: "Főoldal", ro: "Acasă", en: "Home" },
  beaches: { de: "Strände", hu: "Strandok", ro: "Plaje", en: "Beaches" },
  type: { de: "Strandtyp", hu: "Strand típusa", ro: "Tip de plajă", en: "Beach type" },
  water: { de: "Wasser", hu: "Víz", ro: "Apă", en: "Water" },
  access: { de: "Anfahrt", hu: "Megközelítés", ro: "Acces", en: "Getting there" },
  parking: { de: "Parken", hu: "Parkolás", ro: "Parcare", en: "Parking" },
  facilities: { de: "Ausstattung", hu: "Felszereltség", ro: "Facilități", en: "Facilities" },
  family: { de: "Familienfreundlich", hu: "Családbarát", ro: "Pentru familii", en: "Family-friendly" },
  kids: { de: "Für Kinder", hu: "Gyerekeknek", ro: "Pentru copii", en: "For kids" },
  gastro: { de: "Essen & Trinken", hu: "Gasztronómia", ro: "Gastronomie", en: "Food & drink" },
  events: { de: "Veranstaltungen in der Nähe", hu: "Események a közelben", ro: "Evenimente în apropiere", en: "Events nearby" },
  tips: { de: "Tipps", hu: "Tippek", ro: "Sfaturi", en: "Tips" },
  faq: { de: "Häufige Fragen", hu: "Gyakori kérdések", ro: "Întrebări frecvente", en: "FAQ" },
  bestTime: { de: "Beste Zeit", hu: "Legjobb időszak", ro: "Cel mai bun moment", en: "Best time" },
  nearby: { de: "In der Nähe", hu: "A közelben", ro: "În apropiere", en: "Nearby" },
  lifeguard: { de: "Rettungsschwimmer", hu: "Vízimentő", ro: "Salvamar", en: "Lifeguard" },
  shade: { de: "Schatten", hu: "Árnyék", ro: "Umbră", en: "Shade" },
  entrance: { de: "Eintritt", hu: "Belépő", ro: "Intrare", en: "Entrance" },
  photoBy: { de: "Foto", hu: "Fotó", ro: "Foto", en: "Photo" },
  practical: { de: "Praktische Infos", hu: "Praktikus infók", ro: "Informații practice", en: "Practical info" },
  map: { de: "Auf der Karte ansehen", hu: "Megnézés a térképen", ro: "Vezi pe hartă", en: "View on map" },
  source: { de: "Quelle", hu: "Forrás", ro: "Sursă", en: "Source" },
  recurring: { de: "jährlich", hu: "évente", ro: "anual", en: "annual" },
  allBeaches: { de: "Alle Strände", hu: "Összes strand", ro: "Toate plajele", en: "All beaches" },
  nearbyPlaces: { de: "Sehenswertes in der Nähe", hu: "Látnivalók a közelben", ro: "Atracții în apropiere", en: "Places nearby" },
  nearbyBeaches: { de: "Strände in der Nähe", hu: "Közeli strandok", ro: "Plaje în apropiere", en: "Beaches nearby" },
};
const t = (k: string, l: Lang) => (I[k] ? I[k][l] : k);
const BADGE: Record<string, Record<Lang, string>> = {
  blue_flag: { de: "Blaue Flagge", hu: "Kék zászló", ro: "Steag albastru", en: "Blue Flag" },
  dog_friendly: { de: "Hundefreundlich", hu: "Kutyabarát", ro: "Pet-friendly", en: "Dog-friendly" },
  accessible: { de: "Barrierefrei", hu: "Akadálymentes", ro: "Accesibil", en: "Accessible" },
  naturist: { de: "FKK", hu: "Naturista", ro: "Naturist", en: "Naturist" },
};

const esc = (s: any) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const L = <T,>(o: Record<string, T> | undefined, l: Lang): T | undefined => (o ? (o[l] ?? (o as any).en) : undefined);
// Event fields may be a plain English string (legacy) or a {de,hu,ro,en} object (translated).
const Lstr = (v: any, l: Lang): string =>
  v && typeof v === "object" && !Array.isArray(v) ? String(v[l] ?? v.en ?? "") : String(v ?? "");

// --- Per-country data (reassigned by loadCountry in the main loop) ---
type NearPoi = { id: string; name: Record<string, string>; lat: number; lon: number; type?: string };
let content: Record<string, any> = {};
let events: Record<string, any> = {};
let images: any[] = [];
let imgBySlug = new Map<string, any>();
let beaches: any[] = [];
let COUNTRY_POIS: NearPoi[] = [];
const _countrySlugCache: Record<string, Record<Lang, string>> = {};

// Global POI url-index (shared across countries).
const POI_URLS: Record<string, Record<Lang, string>> = (() => {
  try { return JSON.parse(fs.readFileSync(path.resolve("public/data/_poi-url-index.json"), "utf-8")); }
  catch { return {}; }
})();

function loadCountry(cfg: CountryCfg): boolean {
  const cdir = (suffix: string) => path.join(DATA, `${cfg.cc}-${suffix}.json`);
  if (!fs.existsSync(cdir("content")) || !fs.existsSync(cdir("images"))) return false;
  COUNTRY = cfg;
  content = JSON.parse(fs.readFileSync(cdir("content"), "utf-8"));
  events = fs.existsSync(cdir("events")) ? JSON.parse(fs.readFileSync(cdir("events"), "utf-8")) : {};
  images = JSON.parse(fs.readFileSync(cdir("images"), "utf-8"));
  imgBySlug = new Map(images.map((m) => [m.slug, m]));
  beaches = images.filter((m) => content[m.slug]).sort((a, b) => (b.sitelinks || 0) - (a.sitelinks || 0));
  // Country POIs for nearby links.
  COUNTRY_POIS = [];
  try {
    const raw = JSON.parse(fs.readFileSync(path.resolve(`public/data/pois/${cfg.iso}.json`), "utf-8"));
    const arrays = Array.isArray(raw) ? [raw] : Object.values(raw).filter(Array.isArray) as any[][];
    for (const arr of arrays) for (const p of arr) {
      const c = p?.coords;
      if (!p?.id || !Array.isArray(c) || c.length < 2 || !POI_URLS[p.id]) continue;
      COUNTRY_POIS.push({ id: p.id, name: p.name || {}, lat: c[1], lon: c[0], type: p.type });
    }
  } catch {}
  return beaches.length > 0;
}
// Localized country slug (e.g. de→"kroatien") derived from a POI url; falls back to key.
function countrySlug(l: Lang): string {
  const cache = _countrySlugCache[COUNTRY.cc] || (_countrySlugCache[COUNTRY.cc] = {} as Record<Lang, string>);
  if (cache[l]) return cache[l];
  let slug = COUNTRY.key;
  const sample = COUNTRY_POIS.find((p) => POI_URLS[p.id]?.[l]);
  const u = sample && POI_URLS[sample.id][l];
  if (u) { const parts = u.split("/").filter(Boolean); if (parts.length >= 2) slug = parts[1]; }
  cache[l] = slug;
  return slug;
}
function haversineKm(la1: number, lo1: number, la2: number, lo2: number): number {
  const R = 6371, dLa = (la2 - la1) * Math.PI / 180, dLo = (lo2 - lo1) * Math.PI / 180;
  const a = Math.sin(dLa / 2) ** 2 + Math.cos(la1 * Math.PI / 180) * Math.cos(la2 * Math.PI / 180) * Math.sin(dLo / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}
// Nearest POI place-pages (deduped by name), within maxKm, excluding the beach's own spot.
const norm = (s: string) => (s || "").toLowerCase().normalize("NFKD").replace(/[^a-z0-9]/g, "");
function nearbyPois(lat: number, lon: number, selfName: string, limit = 10, maxKm = 45): { p: NearPoi; km: number }[] {
  const self = norm(selfName);
  const found: { p: NearPoi; km: number }[] = [];
  for (const p of COUNTRY_POIS) {
    const km = haversineKm(lat, lon, p.lat, p.lon);
    if (km <= 0.1 || km > maxKm) continue;
    const pn = norm(p.name.en || p.name.de || "");
    if (pn && self && (pn === self || pn.includes(self) || self.includes(pn))) continue; // skip the beach itself
    found.push({ p, km });
  }
  found.sort((a, b) => a.km - b.km);
  const seen = new Set<string>(); const out: { p: NearPoi; km: number }[] = [];
  for (const f of found) {
    const key = norm(f.p.name.en || f.p.name.de || f.p.id);
    if (seen.has(key)) continue;
    seen.add(key); out.push(f);
    if (out.length >= limit) break;
  }
  return out;
}
// Nearest OTHER beaches in the same hub (internal links between beach pages).
function nearbyBeaches(slug: string, lat: number, lon: number, limit = 6, maxKm = 120): { m: any; km: number }[] {
  const out: { m: any; km: number }[] = [];
  for (const m of beaches) {
    if (m.slug === slug) continue;
    const cm = /Point\(([\-0-9.]+) ([\-0-9.]+)\)/.exec(m.coord || "");
    if (!cm) continue;
    const km = haversineKm(lat, lon, Number(cm[2]), Number(cm[1]));
    if (km > maxKm) continue;
    out.push({ m, km });
  }
  out.sort((a, b) => a.km - b.km);
  return out.slice(0, limit);
}

function beachUrl(l: Lang, slug: string) {
  return `/${l}/${COUNTRY.key}/${BSLUG[l]}/${slug}/`;
}
function hubUrl(l: Lang) {
  return `/${l}/${COUNTRY.key}/${BSLUG[l]}/`;
}
function hreflang(urlFn: (l: Lang) => string) {
  return (
    LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE}${urlFn(l)}"/>`).join("\n") +
    `\n<link rel="alternate" hreflang="x-default" href="${SITE}${urlFn("en")}"/>`
  );
}
const CSS_V = "20260526h";
function head(title: string, desc: string, canonical: string, hl: string, jsonld: any) {
  return `<!DOCTYPE html><html lang="__L__"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}"/>
<link rel="canonical" href="${canonical}"/>
${hl}
<meta property="og:title" content="${esc(title)}"/><meta property="og:description" content="${esc(desc)}"/>
<meta property="og:url" content="${canonical}"/><meta property="og:type" content="article"/>
<link rel="stylesheet" href="/poi-static/poi.css?v=${CSS_V}"/>
<link rel="stylesheet" href="/poi-static/beach-hub.css?v=2"/>
<script defer src="/poi-static/beach-weather.js?v=1"></script>
<script defer src="https://stats.plizio.com/script.js" data-website-id="b718db4e-ee1b-43db-a89a-af4ecc5435bf"></script>
<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, "\\u003c")}</script>
</head><body>`;
}
const LANG_LABEL: Record<Lang, string> = { de: "DE", hu: "HU", ro: "RO", en: "EN" };
function langSwitch(l: Lang, urlFn: (ll: Lang) => string) {
  return `<div class="plz-langs">${LANGS.map((ll) =>
    `<a href="${urlFn(ll)}" hreflang="${ll}"${ll === l ? ' class="active" aria-current="true"' : ""}>${LANG_LABEL[ll]}</a>`
  ).join("")}</div>`;
}
function header(l: Lang, urlFn: (ll: Lang) => string) {
  return `<header class="plz-header"><div class="plz-header-inner">
<a href="/${l}/" class="plz-logo">Plizio</a>
<nav class="plz-nav"><a href="/${l}/">${esc(t("home", l))}</a><a href="/europe-map/">Europa</a>${langSwitch(l, urlFn)}</nav>
</div></header>`;
}
function footer(l: Lang) {
  return `<footer><div style="font-size:.85em;opacity:.7;">Plizio · <a href="https://punktepass.de" rel="me">PunktePass</a> · <a href="https://erepairshop.de" rel="me">Erepairshop</a></div></footer>`;
}

function pinfoRow(label: string, val: string) {
  if (!val) return "";
  return `<div class="bh-row"><span class="bh-row-label">${esc(label)}</span><span class="bh-row-val">${esc(val)}</span></div>`;
}
function beachPage(l: Lang, slug: string) {
  const c = content[slug];
  const img = imgBySlug.get(slug);
  const ev = events[slug];
  const name = (img?.name as string) || slug;
  const intro = L<string>(c.intro, l) || "";
  const imgUrl = `/poi-images/${img.file}`;
  const credit = img.credit || {};
  const coordM = /Point\(([\-0-9.]+) ([\-0-9.]+)\)/.exec(img.coord || "");
  const lng = coordM ? coordM[1] : "", lat = coordM ? coordM[2] : "";
  const title = `${name} — ${esc(c.type ? L<string>(c.type, l) : "")} · ${COUNTRY.name[l]} | Plizio`.replace(" ·  ·", " ·");
  const metaDesc = (intro.slice(0, 155)).replace(/\s+\S*$/, "") + "…";
  const canonical = SITE + beachUrl(l, slug);

  const badges = ["blue_flag", "dog_friendly", "accessible", "naturist"]
    .filter((b) => c[b] === true)
    .map((b) => `<span class="bh-badge">${esc(BADGE[b][l])}</span>`)
    .join("");

  const facilities = (L<string[]>(c.facilities, l) || []).map((f) => `<li>${esc(f)}</li>`).join("");
  const pinfo = [
    pinfoRow(t("type", l), L<string>(c.type, l) || ""),
    pinfoRow(t("water", l), L<string>(c.water, l) || ""),
    pinfoRow(t("access", l), L<string>(c.access, l) || ""),
    pinfoRow(t("parking", l), L<string>(c.parking, l) || ""),
    pinfoRow(t("entrance", l), L<string>(c.entrance, l) || ""),
    pinfoRow(t("lifeguard", l), L<string>(c.lifeguard, l) || ""),
    pinfoRow(t("shade", l), L<string>(c.shade, l) || ""),
    pinfoRow(t("bestTime", l), L<string>(c.best_time, l) || ""),
    pinfoRow(t("nearby", l), L<string>(c.nearby, l) || ""),
  ].join("");

  const gastro = (L<any[]>(c.gastro, l) || [])
    .map((g) => `<li><strong>${esc(g.name)}</strong> — ${esc(g.tip)}</li>`)
    .join("");
  const tips = (L<string[]>(c.tips, l) || []).map((x) => `<li>${esc(x)}</li>`).join("");

  const evList = (ev?.events || [])
    .map((e: any) => {
      const when = e.when ? esc(Lstr(e.when, l)) : "";
      const rec = e.recurring ? ` · ${esc(t("recurring", l))}` : "";
      const src = e.source_url ? ` <a class="bh-src" href="${esc(e.source_url)}" target="_blank" rel="nofollow noopener">${esc(t("source", l))}</a>` : "";
      return `<li class="bh-event"><strong>${esc(Lstr(e.name, l))}</strong> <span class="bh-when">${when}${rec}</span><br/><span class="bh-ev-blurb">${esc(Lstr(e.blurb, l))}</span>${src}</li>`;
    })
    .join("");

  const faqs = (c.faq || []).filter((f: any) => L(f.q, l) && L(f.a, l));
  const faqHtml = faqs
    .map((f: any) => `<details class="plz-faq-item"><summary>${esc(L(f.q, l))}</summary><div>${esc(L(f.a, l))}</div></details>`)
    .join("");

  // Internal links: nearby POI place-pages + nearby beaches (boost crawl depth / link equity).
  const latN = Number(lat), lonN = Number(lng);
  const nearPoiHtml = lat
    ? nearbyPois(latN, lonN, name).map((n) => {
        const u = POI_URLS[n.p.id]?.[l] || POI_URLS[n.p.id]?.en;
        const nm = n.p.name[l] || n.p.name.en || n.p.id;
        return u ? `<li><a href="${esc(u)}">${esc(nm)}</a> <span class="bh-km">${Math.round(n.km)} km</span></li>` : "";
      }).filter(Boolean).join("")
    : "";
  const nearBeachHtml = lat
    ? nearbyBeaches(slug, latN, lonN).map((n) =>
        `<li><a href="${beachUrl(l, n.m.slug)}">${esc(n.m.name)}</a> <span class="bh-km">${Math.round(n.km)} km</span></li>`
      ).join("")
    : "";

  const jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "Beach"],
        name,
        description: intro.slice(0, 500),
        image: SITE + imgUrl,
        ...(lat ? { geo: { "@type": "GeoCoordinates", latitude: Number(lat), longitude: Number(lng) } } : {}),
        address: { "@type": "PostalAddress", addressCountry: COUNTRY.iso },
      },
      ...(faqs.length
        ? [{
            "@type": "FAQPage",
            mainEntity: faqs.map((f: any) => ({
              "@type": "Question", name: L(f.q, l),
              acceptedAnswer: { "@type": "Answer", text: L(f.a, l) },
            })),
          }]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("home", l), item: `${SITE}/${l}/` },
          { "@type": "ListItem", position: 2, name: COUNTRY.name[l], item: `${SITE}/${l}/${countrySlug(l)}/` },
          { "@type": "ListItem", position: 3, name: t("beaches", l), item: SITE + hubUrl(l) },
          { "@type": "ListItem", position: 4, name },
        ],
      },
    ],
  };

  return (
    head(title, metaDesc, canonical, hreflang((ll) => beachUrl(ll, slug)), jsonld).replace("__L__", l) +
    header(l, (ll) => beachUrl(ll, slug)) +
    `<main class="bh-main">
<nav class="plz-breadcrumb"><a href="/${l}/">${esc(t("home", l))}</a><span>›</span><a href="/${l}/${countrySlug(l)}/">${esc(COUNTRY.name[l])}</a><span>›</span><a href="${hubUrl(l)}">${esc(t("beaches", l))}</a><span>›</span><span>${esc(name)}</span></nav>
<figure class="bh-hero"><img src="${imgUrl}" alt="${esc(name)}" width="1600" height="1066" loading="eager"/>
${credit.artist || credit.license ? `<figcaption>${esc(t("photoBy", l))}: ${esc((credit.artist || "").replace(/<[^>]+>/g, "").slice(0, 80))}${credit.license ? " · " + esc(credit.license) : ""}${credit.descurl ? ` · <a href="${esc(credit.descurl)}" target="_blank" rel="nofollow noopener">Wikimedia Commons</a>` : ""}</figcaption>` : ""}</figure>
<div class="bh-title-row"><h1>${esc(name)}</h1>${badges ? `<div class="bh-badges">${badges}</div>` : ""}</div>
<div class="bh-intro">${intro.split(/\n+/).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
${lat ? `<section class="bh-block bh-weather" data-lat="${lat}" data-lng="${lng}" data-lang="${l}" hidden></section>` : ""}
${pinfo ? `<section class="bh-block"><h2>${esc(t("practical", l))}</h2><div class="bh-grid">${pinfo}</div></section>` : ""}
${L<string>(c.family, l) || L<string>(c.kids, l) ? `<section class="bh-block"><h2>${esc(t("family", l))} & ${esc(t("kids", l))}</h2><p>${esc(L<string>(c.family, l) || "")}</p><p>${esc(L<string>(c.kids, l) || "")}</p></section>` : ""}
${gastro ? `<section class="bh-block"><h2>${esc(t("gastro", l))}</h2><ul class="bh-gastro">${gastro}</ul></section>` : ""}
${facilities ? `<section class="bh-block"><h2>${esc(t("facilities", l))}</h2><ul class="bh-fac">${facilities}</ul></section>` : ""}
${evList ? `<section class="bh-block"><h2>${esc(t("events", l))}</h2><ul class="bh-events">${evList}</ul></section>` : ""}
${tips ? `<section class="bh-block"><h2>${esc(t("tips", l))}</h2><ul class="bh-tips">${tips}</ul></section>` : ""}
${faqHtml ? `<section class="bh-block"><h2>${esc(t("faq", l))}</h2>${faqHtml}</section>` : ""}
${nearPoiHtml ? `<section class="bh-block"><h2>${esc(t("nearbyPlaces", l))}</h2><ul class="bh-links">${nearPoiHtml}</ul></section>` : ""}
${nearBeachHtml ? `<section class="bh-block"><h2>${esc(t("nearbyBeaches", l))}</h2><ul class="bh-links">${nearBeachHtml}</ul></section>` : ""}
<p><a class="bh-maplink" href="${ourMapUrl(l)}">${esc(t("map", l))}</a></p>
<p><a class="bh-back" href="${hubUrl(l)}">← ${esc(t("allBeaches", l))}</a></p>
</main>` +
    footer(l) +
    `</body></html>`
  );
}

function hubPage(l: Lang) {
  const title = `${hubTitle(l)} | Plizio`;
  const desc = hubIntro(l, beaches.length);
  const canonical = SITE + hubUrl(l);
  const cards = beaches
    .map((m) => {
      const c = content[m.slug];
      const short = (L<string>(c.intro, l) || "").slice(0, 110).replace(/\s+\S*$/, "") + "…";
      return `<a class="bh-card" href="${beachUrl(l, m.slug)}"><img src="/poi-images/${m.file}" alt="${esc(m.name)}" width="400" height="267" loading="lazy"/><div class="bh-card-body"><h3>${esc(m.name)}</h3><p>${esc(short)}</p></div></a>`;
    })
    .join("");
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: hubTitle(l),
    itemListElement: beaches.map((m, i) => ({
      "@type": "ListItem", position: i + 1, name: m.name, url: SITE + beachUrl(l, m.slug),
    })),
  };
  return (
    head(title, desc, canonical, hreflang(hubUrl), itemList).replace("__L__", l) +
    header(l, hubUrl) +
    `<main class="bh-main">
<nav class="plz-breadcrumb"><a href="/${l}/">${esc(t("home", l))}</a><span>›</span><a href="/${l}/${countrySlug(l)}/">${esc(COUNTRY.name[l])}</a><span>›</span><span>${esc(t("beaches", l))}</span></nav>
<h1>${esc(hubTitle(l))}</h1>
<p class="bh-lead">${esc(hubIntro(l, beaches.length))}</p>
<div class="bh-cards">${cards}</div>
</main>` +
    footer(l) +
    `</body></html>`
  );
}

const today = process.env.SITEMAP_DATE || "2026-06-12";
const urls: string[] = [];
let n = 0, countriesDone = 0;
for (const cfg of COUNTRIES) {
  if (!loadCountry(cfg)) { console.log(`  skip ${cfg.cc} (no data)`); continue; }
  countriesDone++;
  for (const l of LANGS) {
    const hubDir = path.join(OUT_DIR, l, COUNTRY.key, BSLUG[l]);
    fs.mkdirSync(hubDir, { recursive: true });
    fs.writeFileSync(path.join(hubDir, "index.html"), hubPage(l), "utf8");
    urls.push(SITE + hubUrl(l)); n++;
    for (const m of beaches) {
      const dir = path.join(hubDir, m.slug);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), beachPage(l, m.slug), "utf8");
      urls.push(SITE + beachUrl(l, m.slug)); n++;
    }
  }
  console.log(`  ${cfg.cc} → ${beaches.length} beaches × ${LANGS.length} langs`);
}
console.log(`beach-hub: ${n} HTML across ${countriesDone} countries -> ${OUT_DIR}`);

// sitemap-beach.xml — included by build-sitemap-index.mjs (all countries incl. HR)
const sm =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
  "\n</urlset>\n";
fs.writeFileSync(path.join(OUT_DIR, "sitemap-beach.xml"), sm, "utf8");
console.log(`sitemap-beach.xml: ${urls.length} URLs`);
