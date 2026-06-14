/**
 * Standalone SIGHT PAGE generator (top-1000 notable sights, NO parent-POI page of their own).
 * Reads public/data/_sightpages_content.json (slug -> {name, type, category, coords[lng,lat],
 * wikidata, parentPoi, descriptionAdvanced{4}, faq[], pinfo{4}}). Emits per lang (de/hu/ro/en):
 *   out/<lang>/<countrySlug>/<sights-slug>/<slug>/index.html
 * Country slug + parent link come from public/data/_poi-url-index.json (parentPoi -> {lang:url}).
 * Cover image /sight-images/sp-<slug>.webp ONLY if listed in _sightpage_covers.json (no broken img).
 * Mirrors build-beach-hub.mts conventions (poi.css, hreflang, canonical, JSON-LD, breadcrumb).
 * Pages are 404-safe: a sight is skipped unless its parent POI has a real URL for the lang.
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const OUT_DIR = process.env.OUT_DIR || "out";
const SITE = "https://plizio.com";
const LANGS = ["de", "hu", "ro", "en"] as const;
type Lang = (typeof LANGS)[number];
const DATA = path.resolve(process.cwd(), "public", "data");
const CSS_V = "20260526h";
const today = process.env.SITEMAP_DATE || "2026-06-14";

const SIGHTS_SLUG: Record<Lang, string> = { de: "sehenswuerdigkeiten", hu: "latnivalok", ro: "obiective-turistice", en: "attractions" };
const I: Record<string, Record<Lang, string>> = {
  home: { de: "Start", hu: "Főoldal", ro: "Acasă", en: "Home" },
  attractions: { de: "Sehenswürdigkeiten", hu: "Látnivalók", ro: "Obiective turistice", en: "Attractions" },
  practical: { de: "Praktische Infos", hu: "Praktikus infók", ro: "Informații practice", en: "Practical info" },
  getting_there: { de: "Anfahrt", hu: "Megközelítés", ro: "Acces", en: "Getting there" },
  best_time: { de: "Beste Zeit", hu: "Legjobb időszak", ro: "Cel mai bun moment", en: "Best time to visit" },
  good_to_know: { de: "Gut zu wissen", hu: "Jó tudni", ro: "Bine de știut", en: "Good to know" },
  tips: { de: "Tipps", hu: "Tippek", ro: "Sfaturi", en: "Tips" },
  faq: { de: "Häufige Fragen", hu: "Gyakori kérdések", ro: "Întrebări frecvente", en: "FAQ" },
  inArea: { de: "In der Umgebung", hu: "A környéken", ro: "În zonă", en: "In the area" },
  viewLocation: { de: "Ort ansehen", hu: "Hely megtekintése", ro: "Vezi locația", en: "View location" },
};
const t = (k: string, l: Lang) => (I[k] ? I[k][l] : k);
const esc = (s: any) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const Ls = <T,>(o: Record<string, T> | undefined, l: Lang): T | undefined => (o ? (o[l] ?? (o as any).en) : undefined);
const titleCase = (s: string) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const content: Record<string, any> = JSON.parse(fs.readFileSync(path.join(DATA, "_sightpages_content.json"), "utf-8"));
const POI_URLS: Record<string, Record<Lang, string>> = (() => {
  try { return JSON.parse(fs.readFileSync(path.join(DATA, "_poi-url-index.json"), "utf-8")); } catch { return {}; }
})();
const COVERS: Set<string> = new Set(JSON.parse(fs.readFileSync(path.join(DATA, "_sightpage_covers.json"), "utf-8")));

// Climate normals (0.5° grid) for the "Beste Reisezeit & Klima" block — coordinate-driven, server-rendered.
const CLIMATE: Record<string, { tmean: (number | null)[]; precip?: (number | null)[] }> = (() => {
  try { return JSON.parse(fs.readFileSync(path.join(DATA, "poi-climate.json"), "utf-8")); } catch { return {}; }
})();
// Optional tz-lookup (for the Besuchsinfo local-time accuracy). Falls back to browser tz if missing.
const _tz: ((lat: number, lng: number) => string) | null = (() => {
  try { return createRequire(import.meta.url)("tz-lookup"); } catch { return null; }
})();

// Spatial index over all sight pages → nearby internal links ("In der Umgebung").
const SIGHT_PTS: { slug: string; lat: number; lng: number }[] = [];
for (const slug of Object.keys(content)) {
  const c = content[slug]?.coords;
  if (Array.isArray(c) && c.length === 2 && isFinite(+c[0]) && isFinite(+c[1])) SIGHT_PTS.push({ slug, lat: +c[1], lng: +c[0] });
}
function havKm(aLat: number, aLng: number, bLat: number, bLng: number): number {
  const R = 6371, dLa = (bLat - aLat) * Math.PI / 180, dLo = (bLng - aLng) * Math.PI / 180;
  const s = Math.sin(dLa / 2) ** 2 + Math.cos(aLat * Math.PI / 180) * Math.cos(bLat * Math.PI / 180) * Math.sin(dLo / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
}

// countrySlug for a lang from the parent POI url (2nd path segment), beach-hub style.
function countrySlug(parentPoi: string, l: Lang): string | null {
  const u = POI_URLS[parentPoi]?.[l] || POI_URLS[parentPoi]?.en;
  if (!u) return null;
  const parts = u.split("/").filter(Boolean); // ["de","frankreich","ile-de-france","paris"]
  return parts.length >= 2 ? parts[1] : null;
}
function sightUrl(slug: string, l: Lang): string | null {
  const rec = content[slug];
  const cs = countrySlug(rec.parentPoi, l);
  return cs ? `/${l}/${cs}/${SIGHTS_SLUG[l]}/${slug}/` : null;
}
function hreflang(slug: string, self: Lang): string {
  const out: string[] = [];
  for (const l of LANGS) { const u = sightUrl(slug, l); if (u) out.push(`<link rel="alternate" hreflang="${l}" href="${SITE}${u}"/>`); }
  const en = sightUrl(slug, "en"); if (en) out.push(`<link rel="alternate" hreflang="x-default" href="${SITE}${en}"/>`);
  return out.join("\n");
}
const LANG_LABEL: Record<Lang, string> = { de: "DE", hu: "HU", ro: "RO", en: "EN" };
function langSwitch(slug: string, l: Lang) {
  return `<div class="plz-langs">${LANGS.map((ll) => { const u = sightUrl(slug, ll); return u ? `<a href="${u}" hreflang="${ll}"${ll === l ? ' class="active" aria-current="true"' : ""}>${LANG_LABEL[ll]}</a>` : ""; }).join("")}</div>`;
}
function head(title: string, desc: string, canonical: string, hl: string, jsonld: any, l: Lang) {
  return `<!DOCTYPE html><html lang="${l}"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}"/>
<link rel="canonical" href="${canonical}"/>
${hl}
<meta property="og:title" content="${esc(title)}"/><meta property="og:description" content="${esc(desc)}"/>
<meta property="og:url" content="${canonical}"/><meta property="og:type" content="article"/>
<link rel="stylesheet" href="/poi-static/poi.css?v=${CSS_V}"/>
<link rel="stylesheet" href="/poi-static/beach-hub.css?v=2"/>
<style>
.plz-climate{margin:1.4rem 0}.plz-climate h2{font-size:1.1rem;margin:0 0 .3rem}
.plz-climate-best{font-size:.9rem;opacity:.8;margin:.2rem 0 .7rem}
.plz-climate-wrap{overflow-x:auto}
.plz-climate-tbl{border-collapse:collapse;font-size:.8rem;min-width:520px;width:100%}
.plz-climate-tbl th,.plz-climate-tbl td{padding:.32rem .4rem;text-align:center;border-bottom:1px solid rgba(255,255,255,.08)}
.plz-climate-tbl td.rl{text-align:left;opacity:.7;white-space:nowrap}
.plz-climate-tbl th.b,.plz-climate-tbl td.b{background:rgba(76,198,255,.16);color:#bfe9ff;font-weight:700;border-radius:4px}
.bh-nearby li{display:flex;justify-content:space-between;gap:.6rem}
.bh-nearby .bh-km{opacity:.55;font-size:.85em;white-space:nowrap}
.plz-langs{margin-left:auto}.plz-langs a{padding:.15rem .35rem;border-radius:6px}.plz-langs a.active{background:rgba(76,198,255,.22);font-weight:700}
</style>
<script defer src="https://stats.plizio.com/script.js" data-website-id="b718db4e-ee1b-43db-a89a-af4ecc5435bf"></script>
<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, "\\u003c")}</script>
</head><body>`;
}
function header(slug: string, l: Lang) {
  return `<header class="plz-header"><div class="plz-header-inner">
<a href="/${l}/" class="plz-logo">Plizio</a>
<nav class="plz-nav"><a href="/${l}/">${esc(t("home", l))}</a><a href="/europe-map/">Europa</a>${langSwitch(slug, l)}</nav>
</div></header>`;
}
const footer = () => `<footer><div style="font-size:.85em;opacity:.7;">Plizio · <a href="https://punktepass.de" rel="me">PunktePass</a> · <a href="https://erepairshop.de" rel="me">Erepairshop</a></div></footer>`;

function row(label: string, val: string) {
  return val ? `<div class="bh-row"><span class="bh-row-label">${esc(label)}</span><span class="bh-row-val">${esc(val)}</span></div>` : "";
}

// ── Live weather (Open-Meteo, client-side) — same widget as the POI pages (poi.css .plz-weather) ──
const WX_COPY: Record<Lang, { loading: string }> = {
  de: { loading: "Wetter…" }, hu: { loading: "Időjárás…" }, ro: { loading: "Vremea…" }, en: { loading: "Weather…" },
};
function renderWeather(coords: number[] | null, l: Lang): string {
  if (!coords) return "";
  const wc = WX_COPY[l];
  return `<section class="plz-weather" id="plz-weather" data-lat="${coords[1]}" data-lon="${coords[0]}" data-lang="${l}"><p class="plz-weather-loading">${esc(wc.loading)}</p></section>
<script>(function(){var el=document.getElementById('plz-weather');if(!el)return;var lat=el.dataset.lat,lon=el.dataset.lon,lang=el.dataset.lang;var ICON=function(c){if(c===0)return'☀️';if(c<=2)return'🌤️';if(c===3)return'☁️';if(c>=45&&c<=48)return'🌫️';if(c>=51&&c<=57)return'🌦️';if(c>=61&&c<=67)return'🌧️';if(c>=71&&c<=77)return'🌨️';if(c>=80&&c<=82)return'🌧️';if(c>=85&&c<=86)return'🌨️';if(c>=95)return'⛈️';return'🌡️';};var DAYS={de:['So','Mo','Di','Mi','Do','Fr','Sa'],hu:['V','H','K','Sze','Cs','P','Szo'],ro:['Du','Lu','Ma','Mi','Jo','Vi','Sâ'],en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']};var CP={de:{now:'Aktuell',forecast:'5-Tage-Vorhersage'},hu:{now:'Most',forecast:'5 napos előrejelzés'},ro:{now:'Acum',forecast:'Prognoză 5 zile'},en:{now:'Now',forecast:'5-day forecast'}};var c=CP[lang]||CP.en;var d=DAYS[lang]||DAYS.en;fetch('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon+'&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=5&timezone=auto').then(function(r){return r.json();}).then(function(j){var html='';if(j.current){html+='<div class="plz-weather-now"><span class="plz-weather-icon">'+ICON(j.current.weather_code)+'</span><div><span class="plz-weather-label">'+c.now+'</span><strong>'+Math.round(j.current.temperature_2m)+'°C</strong></div></div>';}if(j.daily){html+='<div class="plz-weather-forecast"><span class="plz-weather-label">'+c.forecast+'</span><ul>';for(var i=0;i<j.daily.time.length;i++){var dt=new Date(j.daily.time[i]);html+='<li><span>'+d[dt.getDay()]+'</span><span>'+ICON(j.daily.weather_code[i])+'</span><strong>'+Math.round(j.daily.temperature_2m_max[i])+'°</strong><span class="plz-tmin">'+Math.round(j.daily.temperature_2m_min[i])+'°</span></li>';}html+='</ul></div>';}el.innerHTML=html;}).catch(function(){el.style.display='none';});})();</script>`;
}

// ── Besuchsinfo: sun/daylight/golden-hour/season/local-time (client-side from coords, /js/visit-info.js) ──
function renderVisitInfo(coords: number[] | null, l: Lang): string {
  if (!coords) return "";
  const lat = +coords[1], lng = +coords[0];
  let tz = "";
  if (_tz) { try { tz = _tz(lat, lng) || ""; } catch { tz = ""; } }
  return `<section class="plz-visit" data-lat="${lat}" data-lng="${lng}" data-lang="${l}"${tz ? ` data-tz="${tz}"` : ""}></section><script src="/js/visit-info.js" defer></script>`;
}

// ── Beste Reisezeit & Klima (server-rendered from the 0.5° grid normals) ──
const CLIMATE_MON: Record<Lang, string[]> = {
  de: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
  hu: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Sze", "Okt", "Nov", "Dec"],
  ro: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};
function climateCellKey(lat: number, lon: number): string {
  let cl = Math.round(lat * 2) / 2; if (cl === 0) cl = 0;
  let co = Math.round(lon * 2) / 2; if (co === 0) co = 0;
  return `${cl.toFixed(1)}_${co.toFixed(1)}`;
}
function renderClimate(coords: number[] | null, l: Lang): string {
  if (!coords) return "";
  const c = CLIMATE[climateCellKey(+coords[1], +coords[0])];
  if (!c || !Array.isArray(c.tmean) || c.tmean.length !== 12) return "";
  const tmean = c.tmean, precip = c.precip || [];
  const scored = tmean.map((tx, i) => (tx == null ? { i, s: -1e9 } : { i, s: -Math.abs(tx - 21) - (precip[i] ?? 0) / 18 })).filter((o) => o.s > -1e8);
  if (scored.length < 6) return "";
  const best = scored.slice().sort((a, b) => b.s - a.s).slice(0, 3).map((o) => o.i).sort((a, b) => a - b);
  const mon = CLIMATE_MON[l];
  const bestStr = (best.length === 3 && best[2] - best[0] === 2) ? `${mon[best[0]]}–${mon[best[2]]}` : best.map((i) => mon[i]).join(", ");
  const L: Record<Lang, { title: string; best: (m: string) => string; t: string; p: string }> = {
    de: { title: "Beste Reisezeit & Klima", best: (m) => `Am angenehmsten reist du im Zeitraum ${m}.`, t: "Ø °C", p: "Regen mm" },
    hu: { title: "Mikor érdemes menni – éghajlat", best: (m) => `A legkellemesebb időszak: ${m}.`, t: "Átlag °C", p: "Csap. mm" },
    ro: { title: "Cea mai bună perioadă & climă", best: (m) => `Cea mai plăcută perioadă este ${m}.`, t: "Medie °C", p: "Ploaie mm" },
    en: { title: "Best time to visit & climate", best: (m) => `The most pleasant time to visit is ${m}.`, t: "Avg °C", p: "Rain mm" },
  };
  const tt = L[l];
  const bset = new Set(best);
  const head = mon.map((m, i) => `<th${bset.has(i) ? ' class="b"' : ""}>${esc(m)}</th>`).join("");
  const trow = tmean.map((tx, i) => `<td${bset.has(i) ? ' class="b"' : ""}>${tx == null ? "–" : Math.round(tx)}</td>`).join("");
  const prow = tmean.map((_, i) => { const pr = precip[i]; return `<td${bset.has(i) ? ' class="b"' : ""}>${pr == null ? "–" : Math.round(pr)}</td>`; }).join("");
  return `<section class="plz-climate" id="sec-climate"><h2>${esc(tt.title)}</h2><p class="plz-climate-best">${esc(tt.best(bestStr))}</p><div class="plz-climate-wrap"><table class="plz-climate-tbl"><thead><tr><th></th>${head}</tr></thead><tbody><tr><td class="rl">${esc(tt.t)}</td>${trow}</tr><tr><td class="rl">${esc(tt.p)}</td>${prow}</tr></tbody></table></div></section>`;
}

// ── Nearby sight pages (internal links, 404-safe: only other sights with a page in this lang) ──
const NEARBY_TITLE: Record<Lang, string> = { de: "Sehenswürdigkeiten in der Nähe", hu: "Közeli látnivalók", ro: "Obiective din apropiere", en: "Attractions nearby" };
function renderNearbySights(slug: string, l: Lang): string {
  const rec = content[slug];
  const coords = Array.isArray(rec.coords) && rec.coords.length === 2 ? rec.coords : null;
  if (!coords) return "";
  const lat = +coords[1], lng = +coords[0];
  const cand = SIGHT_PTS
    .filter((p) => p.slug !== slug)
    .map((p) => ({ ...p, km: havKm(lat, lng, p.lat, p.lng) }))
    .filter((p) => p.km <= 200)
    .sort((a, b) => a.km - b.km);
  const items: string[] = [];
  for (const p of cand) {
    if (items.length >= 6) break;
    const u = sightUrl(p.slug, l);
    if (!u) continue;
    const nm = (content[p.slug].name && (content[p.slug].name[l] || content[p.slug].name.en)) || titleCase(p.slug);
    items.push(`<li><a href="${u}">${esc(nm)}</a> <span class="bh-km">${Math.round(p.km)} km</span></li>`);
  }
  if (!items.length) return "";
  return `<section class="bh-block"><h2>${esc(NEARBY_TITLE[l])}</h2><ul class="bh-links bh-nearby">${items.join("")}</ul></section>`;
}

// ── PlizioGo route planner (car & motorhome) — coordinate-driven, ported from the POI pages ──
const RP_COPY: Record<Lang, Record<string, string>> = {
  de: { h: "Routenplaner — Auto & Wohnmobil", sub: "Von wo startest du? Wir bauen die Route hierher, mit Stopps und Länder-Hinweisen unterwegs.", to: "Ziel", from: "Start", fromPh: "z.B. München", via: "Über (optional)", viaPh: "z.B. Zagreb", nights: "Übernachtungs-Stopps", vehicle: "Fahrzeug", car: "🚗 Auto", camper: "🚐 Wohnmobil", filter: "Nur Stopps mit (optional):", water: "💧 Wasser", dump: "♻️ Entsorgung", power: "🔌 Strom", wc: "🚻 WC", shower: "🚿 Dusche", tierAB: "Stellplätze + Camping", tierA: "Nur Stellplätze", tierB: "Nur Camping", tierABC: "Auch Natur-/Rastplätze", b10: "Umweg max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Route planen" },
  hu: { h: "Útvonaltervező — Autó & Lakóautó", sub: "Honnan indulsz? Megtervezzük az utat ide, útközbeni megállókkal és ország-tudnivalókkal.", to: "Cél", from: "Indulás", fromPh: "pl. Budapest", via: "Érintve (opcionális)", viaPh: "pl. Zagreb", nights: "Éjszakai megállók", vehicle: "Jármű", car: "🚗 Autó", camper: "🚐 Lakóautó", filter: "Csak megállók ezzel (opcionális):", water: "💧 Víz", dump: "♻️ Ürítő", power: "🔌 Áram", wc: "🚻 WC", shower: "🚿 Zuhany", tierAB: "Stellplatz + kemping", tierA: "Csak Stellplatz", tierB: "Csak kemping", tierABC: "Pihenő-/natúrhelyek is", b10: "Kitérő max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Útvonal tervezése" },
  ro: { h: "Planificator traseu — Mașină & Rulotă", sub: "De unde pleci? Construim traseul până aici, cu opriri și informații pe țări.", to: "Destinație", from: "Plecare", fromPh: "ex. Cluj", via: "Prin (opțional)", viaPh: "ex. Zagreb", nights: "Opriri peste noapte", vehicle: "Vehicul", car: "🚗 Mașină", camper: "🚐 Rulotă", filter: "Doar opriri cu (opțional):", water: "💧 Apă", dump: "♻️ Golire", power: "🔌 Curent", wc: "🚻 Toaletă", shower: "🚿 Duș", tierAB: "Popasuri + camping", tierA: "Doar popasuri", tierB: "Doar camping", tierABC: "Și locuri de odihnă/natură", b10: "Ocol max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Planifică traseul" },
  en: { h: "Route planner — Car & Motorhome", sub: "Where do you start? We build the route here, with stops and country notes along the way.", to: "Destination", from: "Start", fromPh: "e.g. Munich", via: "Via (optional)", viaPh: "e.g. Zagreb", nights: "Overnight stops", vehicle: "Vehicle", car: "🚗 Car", camper: "🚐 Motorhome", filter: "Only stops with (optional):", water: "💧 Water", dump: "♻️ Disposal", power: "🔌 Power", wc: "🚻 Toilets", shower: "🚿 Shower", tierAB: "Aires + campsites", tierA: "Aires only", tierB: "Campsites only", tierABC: "Also rest/nature areas", b10: "Detour max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Plan route" },
};
const RP_DYN: Record<Lang, Record<string, string>> = {
  de: { notFound: "Ort nicht gefunden", needOrigin: "Bitte Startort eingeben.", searching: "📍 Ort wird gesucht…", routing: "🛣️ Route wird berechnet…", km: "km", hrs: "Std.", nights: "Übernachtungen", matchStops: "passende Stopps", mapsAll: "Ganze Route in Maps", advisory: "Länder-Hinweise", toll: "Maut", lez: "Umweltzone", overnight: "Übernachten", mandatory: "Pflicht", keepStop: "diesen Stopp behalten", day: "TAG", dest: "ZIEL", swipe: "← Karten wischen →", regen: "Neu generieren — behaltene Stopps fixieren", regenKept: "🔄 Route mit behaltenen Stopps…", regenNew: "🔄 Neue Variante…" },
  hu: { notFound: "A hely nem található", needOrigin: "Add meg az indulási helyet.", searching: "📍 Hely keresése…", routing: "🛣️ Útvonal számítása…", km: "km", hrs: "óra", nights: "éjszaka", matchStops: "találó megálló", mapsAll: "Teljes útvonal Mapsben", advisory: "Ország-tudnivalók", toll: "Útdíj", lez: "Környezeti zóna", overnight: "Éjszakázás", mandatory: "Kötelező", keepStop: "ezt a megállót megtartom", day: "NAP", dest: "CÉL", swipe: "← húzd a kártyákat →", regen: "Újragenerálás — megtartottak rögzítése", regenKept: "🔄 Útvonal a megtartottakkal…", regenNew: "🔄 Új variáció…" },
  ro: { notFound: "Locul nu a fost găsit", needOrigin: "Introdu punctul de plecare.", searching: "📍 Se caută locul…", routing: "🛣️ Se calculează traseul…", km: "km", hrs: "ore", nights: "nopți", matchStops: "opriri potrivite", mapsAll: "Tot traseul în Maps", advisory: "Informații pe țări", toll: "Taxă drum", lez: "Zonă ecologică", overnight: "Înnoptare", mandatory: "Obligatoriu", keepStop: "păstrează această oprire", day: "ZIUA", dest: "ȚINTĂ", swipe: "← glisează cardurile →", regen: "Regenerează — fixează opririle păstrate", regenKept: "🔄 Traseu cu opririle păstrate…", regenNew: "🔄 Variantă nouă…" },
  en: { notFound: "Place not found", needOrigin: "Please enter a start point.", searching: "📍 Locating…", routing: "🛣️ Calculating route…", km: "km", hrs: "h", nights: "nights", matchStops: "matching stops", mapsAll: "Whole route in Maps", advisory: "Country notes", toll: "Toll", lez: "Low-emission zone", overnight: "Overnight", mandatory: "Required", keepStop: "keep this stop", day: "DAY", dest: "GOAL", swipe: "← swipe cards →", regen: "Regenerate — fix kept stops", regenKept: "🔄 Route with kept stops…", regenNew: "🔄 New variant…" },
};
const RP_CSS = `<style>
.plz-rp{margin:1.4rem 0;background:rgba(0,8,20,.55);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1rem 1.05rem 1.15rem}
.plz-rp-head h2{font-size:1.1rem;margin:0 0 .2rem;color:#e6ecf3}
.plz-rp-head p{font-size:.84rem;color:rgba(230,236,243,.62);margin:.15rem 0 .8rem}
.plz-rp-row{display:flex;flex-wrap:wrap;gap:.6rem;margin-bottom:.6rem}
.plz-rp-row>label,.plz-rp-vehicle{flex:1 1 160px;display:flex;flex-direction:column;font-size:.74rem;color:rgba(230,236,243,.6);gap:.25rem}
.plz-rp input,.plz-rp select{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:9px;padding:.5rem .6rem;color:#e6ecf3;font-size:.9rem;color-scheme:dark}
.plz-rp input:focus,.plz-rp select:focus{outline:none;border-color:#4cc6ff}
.plz-rp-vehbtns{display:flex;border:1px solid rgba(255,255,255,.14);border-radius:9px;overflow:hidden}
.plz-rp-mode{flex:1;padding:.5rem;background:rgba(255,255,255,.04);color:rgba(230,236,243,.6);border:none;cursor:pointer;font-size:.85rem}
.plz-rp-mode[aria-selected="true"]{background:#4cc6ff;color:#0a0f1c;font-weight:700}
.plz-rp-filters{display:flex;flex-wrap:wrap;gap:.45rem;align-items:center;margin:.2rem 0 .7rem}
.plz-rp-flabel{flex:1 0 100%;font-size:.74rem;color:rgba(230,236,243,.6)}
.plz-rp-svcl{font-size:.8rem;color:#e6ecf3;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:.28rem .6rem;cursor:pointer;display:inline-flex;gap:.25rem;align-items:center}
.plz-rp-go{width:100%;padding:.7rem;border:none;border-radius:999px;background:linear-gradient(135deg,#4cc6ff,#7dd87a);color:#06121f;font-weight:800;font-size:.98rem;cursor:pointer}
.plz-rp-go:hover{opacity:.92}
.plz-rp-status{text-align:center;font-size:.82rem;color:rgba(230,236,243,.6);min-height:1.1em;margin-top:.5rem}
.plz-rp-result{margin-top:1rem;display:flex;flex-direction:column;gap:.9rem}
.plz-rp-credit{font-size:.7rem;color:rgba(230,236,243,.38);margin:.7rem 0 0;text-align:center}
</style>`;
function renderRoutePlanner(coords: number[] | null, name: string, l: Lang): string {
  if (!coords) return "";
  const lng = +coords[0], lat = +coords[1];
  if (!isFinite(lng) || !isFinite(lat)) return "";
  const T = RP_COPY[l], dyn = RP_DYN[l];
  const stopsOpts = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `<option${n === 2 ? " selected" : ""}>${n}</option>`).join("");
  const svc = [["water", T.water], ["dump", T.dump], ["power", T.power], ["toilets", T.wc], ["shower", T.shower]]
    .map(([v, lb]) => `<label class="plz-rp-svcl"><input type="checkbox" class="plz-rp-svc" value="${v}"> ${esc(lb)}</label>`).join("");
  const copyJson = esc(JSON.stringify(dyn));
  return `${RP_CSS}<section class="plz-rp" id="plz-route-planner" data-lng="${lng}" data-lat="${lat}" data-dest="${esc(name)}" data-lang="${l}" data-copy="${copyJson}">
  <div class="plz-rp-head"><h2>${esc(T.h)}</h2><p>${esc(T.sub)}</p></div>
  <div class="plz-rp-row">
    <label>${esc(T.from)}<input class="plz-rp-origin" type="text" placeholder="${esc(T.fromPh)}"></label>
    <label>${esc(T.to)}<input class="plz-rp-dest" type="text" value="${esc(name)}"></label>
    <label>${esc(T.via)}<input class="plz-rp-via" type="text" placeholder="${esc(T.viaPh)}"></label>
  </div>
  <div class="plz-rp-row">
    <label>${esc(T.nights)}<select class="plz-rp-stops">${stopsOpts}</select></label>
    <div class="plz-rp-vehicle">${esc(T.vehicle)}<div class="plz-rp-vehbtns"><button type="button" class="plz-rp-mode" data-mode="car" aria-selected="true">${esc(T.car)}</button><button type="button" class="plz-rp-mode" data-mode="camper" aria-selected="false">${esc(T.camper)}</button></div></div>
  </div>
  <div class="plz-rp-filters"><span class="plz-rp-flabel">${esc(T.filter)}</span>${svc}
    <select class="plz-rp-tier"><option value="AB">${esc(T.tierAB)}</option><option value="A">${esc(T.tierA)}</option><option value="B">${esc(T.tierB)}</option><option value="ABC">${esc(T.tierABC)}</option></select>
    <select class="plz-rp-buffer"><option value="10">${esc(T.b10)}</option><option value="20" selected>${esc(T.b20)}</option><option value="30">${esc(T.b30)}</option><option value="50">${esc(T.b50)}</option></select>
  </div>
  <button type="button" class="plz-rp-go">${esc(T.plan)}</button>
  <div class="plz-rp-status"></div>
  <div class="plz-rp-result" style="display:none"></div>
  <p class="plz-rp-credit">© OpenStreetMap contributors · OpenRouteService</p>
</section>
<script defer src="/js/stop-card.js?v=20260613pg5"></script>
<script defer src="/js/sights-nearby.js?v=20260613pg5"></script>
<script defer src="/js/route-planner.js?v=20260613pg5"></script>`;
}
function page(slug: string, l: Lang): string | null {
  const rec = content[slug];
  const cs = countrySlug(rec.parentPoi, l);
  if (!cs) return null; // 404-safe: no country placement for this lang
  const name = (rec.name && (rec.name[l] || rec.name.en || rec.name.de)) || titleCase(slug);
  const da = Ls<string>(rec.descriptionAdvanced, l) || "";
  if (!da) return null; // no content for this lang -> don't emit an empty page
  const url = `/${l}/${cs}/${SIGHTS_SLUG[l]}/${slug}/`;
  const canonical = SITE + url;
  const countryName = titleCase(cs);
  const hasCover = COVERS.has("sp-" + slug);
  const imgUrl = `/sight-images/sp-${slug}.webp`;
  const coords = Array.isArray(rec.coords) && rec.coords.length === 2 ? rec.coords : null; // [lng,lat]
  const metaDesc = (da.slice(0, 155)).replace(/\s+\S*$/, "") + "…";
  const title = `${name} — ${countryName} | Plizio`;

  const pin = Ls<any>(rec.pinfo, l) || {};
  const pinRows = [
    row(t("getting_there", l), pin.getting_there || ""),
    row(t("best_time", l), pin.best_time || ""),
    row(t("good_to_know", l), pin.good_to_know || ""),
  ].join("");
  const tips = Array.isArray(pin.tips) ? pin.tips.map((x: string) => `<li>${esc(x)}</li>`).join("") : "";

  const faqs = (rec.faq || []).filter((f: any) => Ls(f.q, l) && Ls(f.a, l));
  const faqHtml = faqs.map((f: any) => `<details class="plz-faq-item"><summary>${esc(Ls(f.q, l))}</summary><div>${esc(Ls(f.a, l))}</div></details>`).join("");

  const parentUrl = POI_URLS[rec.parentPoi]?.[l] || POI_URLS[rec.parentPoi]?.en;

  const jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristAttraction",
        name,
        description: da.slice(0, 500),
        ...(hasCover ? { image: SITE + imgUrl } : {}),
        ...(coords ? { geo: { "@type": "GeoCoordinates", latitude: coords[1], longitude: coords[0] } } : {}),
        ...(rec.wikidata ? { sameAs: `https://www.wikidata.org/wiki/${rec.wikidata}` } : {}),
      },
      ...(faqs.length ? [{ "@type": "FAQPage", mainEntity: faqs.map((f: any) => ({ "@type": "Question", name: Ls(f.q, l), acceptedAnswer: { "@type": "Answer", text: Ls(f.a, l) } })) }] : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("home", l), item: `${SITE}/${l}/` },
          { "@type": "ListItem", position: 2, name: countryName, item: `${SITE}/${l}/${cs}/` },
          { "@type": "ListItem", position: 3, name },
        ],
      },
    ],
  };

  return (
    head(title, metaDesc, canonical, hreflang(slug, l), jsonld, l) +
    header(slug, l) +
    `<main class="bh-main">
<nav class="plz-breadcrumb"><a href="/${l}/">${esc(t("home", l))}</a><span>›</span><a href="/${l}/${cs}/">${esc(countryName)}</a><span>›</span><span>${esc(name)}</span></nav>
${hasCover ? `<figure class="bh-hero"><img src="${imgUrl}" alt="${esc(name)}" width="1000" height="667" loading="eager"/></figure>` : ""}
<div class="bh-title-row"><h1>${esc(name)}</h1></div>
<div class="bh-intro">${da.split(/\n+/).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
${renderWeather(coords, l)}
${renderVisitInfo(coords, l)}
${renderClimate(coords, l)}
${pinRows ? `<section class="bh-block"><h2>${esc(t("practical", l))}</h2><div class="bh-grid">${pinRows}</div></section>` : ""}
${tips ? `<section class="bh-block"><h2>${esc(t("tips", l))}</h2><ul class="bh-tips">${tips}</ul></section>` : ""}
${faqHtml ? `<section class="bh-block"><h2>${esc(t("faq", l))}</h2>${faqHtml}</section>` : ""}
${renderRoutePlanner(coords, name, l)}
${renderNearbySights(slug, l)}
${parentUrl ? `<section class="bh-block"><h2>${esc(t("inArea", l))}</h2><ul class="bh-links"><li><a href="${esc(parentUrl)}">${esc(t("viewLocation", l))}: ${esc(titleCase(cs))}</a></li></ul></section>` : ""}
</main>` +
    footer() +
    `</body></html>`
  );
}

const urls: string[] = [];
let n = 0, skipped = 0;
for (const slug of Object.keys(content)) {
  for (const l of LANGS) {
    const html = page(slug, l);
    if (!html) { skipped++; continue; }
    const cs = countrySlug(content[slug].parentPoi, l)!;
    const dir = path.join(OUT_DIR, l, cs, SIGHTS_SLUG[l], slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
    urls.push(`${SITE}/${l}/${cs}/${SIGHTS_SLUG[l]}/${slug}/`);
    n++;
  }
}
console.log(`sight-pages: ${n} HTML written (${skipped} lang-skips) across ${Object.keys(content).length} sights -> ${OUT_DIR}`);
const sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join("\n") + "\n</urlset>\n";
fs.writeFileSync(path.join(OUT_DIR, "sitemap-sightpages.xml"), sm, "utf8");
console.log(`sitemap-sightpages.xml: ${urls.length} URLs`);
