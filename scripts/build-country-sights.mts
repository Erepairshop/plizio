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

// --- localized vocabulary ---
const SIGHTS_SLUG: Record<Lang, string> = { de: "sehenswuerdigkeiten", hu: "latnivalok", ro: "obiective-turistice", en: "attractions" };
const T = {
  de: { heading: (c: string) => `Sehenswürdigkeiten in ${c}`, sub: "Die Top 50", intro: (c: string) => `Die schönsten Sehenswürdigkeiten in ${c} auf einen Blick: Burgen, Naturwunder, historische Altstädte und mehr. Jeder Ort führt zur ausführlichen Seite mit Karte, Tipps und Fotos.`, onMap: "Alle auf der Karte ansehen", more: "Mehr erfahren", home: "Startseite", cats: { nature: "Natur", history: "Kultur & Geschichte", urban: "Städte & Bauwerke", other: "Weitere Highlights" }, faqH: "Häufige Fragen", titleTpl: (c: string) => `Sehenswürdigkeiten in ${c}: Die Top 50 (2026)`, metaTpl: (c: string) => `Die 50 schönsten Sehenswürdigkeiten in ${c}: Burgen, Natur, Altstädte – mit Karte, Fotos und Reisetipps.` },
  hu: { heading: (c: string) => `${c} látnivalói`, sub: "A top 50", intro: (c: string) => `${c} legszebb látnivalói egy helyen: várak, természeti csodák, történelmi óvárosok és még sok más. Minden hely a részletes oldalra vezet térképpel, tippekkel és fotókkal.`, onMap: "Mind a térképen", more: "Tovább", home: "Főoldal", cats: { nature: "Természet", history: "Kultúra és történelem", urban: "Városok és épületek", other: "További látnivalók" }, faqH: "Gyakori kérdések", titleTpl: (c: string) => `${c} látnivalói: a top 50 (2026)`, metaTpl: (c: string) => `${c} 50 legszebb látnivalója: várak, természet, óvárosok – térképpel, fotókkal és úti tippekkel.` },
  ro: { heading: (c: string) => `Obiective turistice în ${c}`, sub: "Top 50", intro: (c: string) => `Cele mai frumoase obiective turistice din ${c} la un loc: cetăți, minuni ale naturii, centre istorice și multe altele. Fiecare loc duce la pagina detaliată cu hartă, sfaturi și fotografii.`, onMap: "Vezi toate pe hartă", more: "Află mai mult", home: "Acasă", cats: { nature: "Natură", history: "Cultură și istorie", urban: "Orașe și clădiri", other: "Alte atracții" }, faqH: "Întrebări frecvente", titleTpl: (c: string) => `Obiective turistice în ${c}: Top 50 (2026)`, metaTpl: (c: string) => `Cele mai frumoase 50 de obiective turistice din ${c}: cetăți, natură, centre istorice – cu hartă, fotografii și sfaturi.` },
  en: { heading: (c: string) => `Attractions in ${c}`, sub: "The Top 50", intro: (c: string) => `The finest attractions in ${c} at a glance: castles, natural wonders, historic old towns and more. Each place links to a detailed page with map, tips and photos.`, onMap: "See all on the map", more: "Learn more", home: "Home", cats: { nature: "Nature", history: "Culture & History", urban: "Cities & Architecture", other: "More highlights" }, faqH: "Frequently asked questions", titleTpl: (c: string) => `Top 50 Attractions in ${c} (2026)`, metaTpl: (c: string) => `The 50 best attractions in ${c}: castles, nature, old towns – with map, photos and travel tips.` },
} as const;

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

type POI = { id: string; type?: string; parent?: string; coords?: number[]; image?: string; name?: Record<string,string>; description?: Record<string,string>; descriptionAdvanced?: Record<string,string>; tier?: number; population?: number };

// --- country config ---
type CountryCfg = { iso: string; mapSlug: string; names: Record<Lang, string> };
const COUNTRIES: CountryCfg[] = [
  { iso: "hr", mapSlug: "croatia", names: { de: "Kroatien", hu: "Horvátország", ro: "Croația", en: "Croatia" } },
];

const SITE = "https://plizio.com";
const URLIDX: Record<string, Record<string,string>> = (() => {
  try { return JSON.parse(fs.readFileSync(path.resolve(process.cwd(),"public/data/_poi-url-index.json"),"utf8")); } catch { return {}; }
})();

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

function selectTop(pois: POI[]): POI[] {
  const attractions = pois.filter(p => p.type && !EXCLUDE.has(p.type) && p.coords);
  const TYPE_W: Record<string,number> = { landmark: 60, castle: 55, cathedral: 50, church: 30, monastery: 40, ruins: 35, palace: 55, waterfall: 55, lake: 45, peak: 35, mountain: 30, park: 45, wildlife: 40, museum: 35, fortress: 50, monument: 30, tower: 30, bridge: 30 };
  function score(p: POI): number {
    let s = 0;
    if (p.image) s += 250;
    s += Math.min(richness(p), 4000) / 8;     // up to 500
    s += TYPE_W[p.type||""] ?? 20;
    if (typeof p.tier === "number") s += (6 - Math.min(p.tier, 5)) * 15;
    return s;
  }
  return attractions.sort((a,b)=> score(b)-score(a) || a.id.localeCompare(b.id)).slice(0, 50);
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

  const sections = (["history","nature","urban","other"] as const).filter(k=>groups[k].length).map(k => {
    let rank = 0;
    return `<section class="catsec" id="${k}"><h2>${esc(t.cats[k])}</h2><div class="grid">${groups[k].map(p=>card(p, ++rank)).join("")}</div></section>`;
  }).join("");

  // schema: ItemList of TouristAttraction
  const itemList = { "@context":"https://schema.org","@type":"ItemList","name":t.titleTpl(country),"numberOfItems":top.length,"itemListElement": top.map((p,i)=>({ "@type":"ListItem","position":i+1,"item":{ "@type":"TouristAttraction","name":localizedName(p,lang),...(poiHref(p,lang)?{"url":SITE+poiHref(p,lang)}:{}),...(p.image?{"image":SITE+p.image}:{}) } })) };
  const faqs = lang === "de"
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
<header class="hero">${heroImg?`<img src="${heroImg}" alt=""/>`:""}<div class="ov"><div class="sub">${esc(t.sub)} · ${top.length}</div><h1>${esc(t.heading(country))}</h1><p>${esc(t.intro(country))}</p></div></header>
<div class="bar"><a class="chip map" href="${mapHref}">🗺️ ${esc(t.onMap)}</a>${(["history","nature","urban","other"] as const).filter(k=>groups[k].length).map(k=>`<a class="chip" href="#${k}">${esc(t.cats[k])} (${groups[k].length})</a>`).join("")}</div>
${sections}
<section class="faq"><h2>${esc(t.faqH)}</h2>${faqs.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>
<footer>© Plizio · <a href="${mapHref}">${esc(t.onMap)}</a></footer>
</div></body></html>`;
}

function buildOne(c: CountryCfg): void {
  const jsonp = path.resolve(process.cwd(), "public/data/pois", `${c.iso.toUpperCase()}.json`);
  if (!fs.existsSync(jsonp)) { console.log(`SKIP ${c.iso}: no ${c.iso.toUpperCase()}.json`); return; }
  const j = JSON.parse(fs.readFileSync(jsonp, "utf8"));
  const pois: POI[] = (j.pois || j) as POI[];
  const top = selectTop(pois);
  for (const lang of LANGS) {
    const slug = `${slugify(c.names[lang])}-${SIGHTS_SLUG[lang]}`;
    const dir = path.resolve(process.cwd(), "public", slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), render(c, lang, top), "utf8");
    console.log(`OK ${c.iso} ${lang} → public/${slug}/ (${top.length} sights)`);
  }
}

const target = (process.argv[2] || "all").toLowerCase();
const list = target === "all" ? COUNTRIES : COUNTRIES.filter(c => target.split(",").includes(c.iso));
if (!list.length) { console.error(`No country '${target}' configured`); process.exit(1); }
for (const c of list) buildOne(c);
