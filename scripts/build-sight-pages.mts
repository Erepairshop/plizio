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
${pinRows ? `<section class="bh-block"><h2>${esc(t("practical", l))}</h2><div class="bh-grid">${pinRows}</div></section>` : ""}
${tips ? `<section class="bh-block"><h2>${esc(t("tips", l))}</h2><ul class="bh-tips">${tips}</ul></section>` : ""}
${faqHtml ? `<section class="bh-block"><h2>${esc(t("faq", l))}</h2>${faqHtml}</section>` : ""}
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
