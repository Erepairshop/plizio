/**
 * Static HTML generator for POI pages.
 *
 * Why: Next.js `output:export` hits a V8 spread-arg limit (~65k) when
 * generateStaticParams returns >65K entries. Plizio has ~38K POIs × 4 langs =
 * ~152K target pages — too many for Next's built-in static export. Runtime
 * ISR migration was attempted and failed (POI page render hangs silently).
 *
 * This script bypasses Next entirely for POI detail pages: it walks the
 * dedup'd `pois` array, renders a plain HTML file per POI × lang, and writes
 * to `out/<lang>/<country>/<state>/<poi>/index.html`. Each file is 10-20 KB
 * (vs Next's 200-500 KB) because there is no React hydration payload.
 *
 * Usage:
 *   npx tsx scripts/generate-poi-html.mts            # generate ALL
 *   GEN_LIMIT=100 npx tsx scripts/generate-poi-html.mts   # only first N POIs (test)
 */

import fs from "node:fs";
import path from "node:path";
import * as _slugsNs from "../lib/seo/slugs";
import type { POI } from "../lib/visualLab/data/poi";

// tsx ESM treats the TS module as CJS-wrapped → real exports on .default
const slugs: any = (_slugsNs as any).default ?? _slugsNs;
const {
  SUPPORTED_LANGS,
  buildCountryPath,
  buildStatePath,
  buildPoiPath,
  countrySlugFor,
  getCountryId,
  pois,
} = slugs;
type Lang = "de" | "hu" | "ro" | "en";

const SITE_URL = "https://plizio.com";

function hasIndexableContent(poi: POI): boolean {
  const desc = poi.description as Record<string, string> | undefined;
  const facts = poi.facts as Record<string, string[]> | undefined;
  const descAdv = (poi as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced;
  const factsAdv = (poi as { factsAdvanced?: Record<string, string[]> }).factsAdvanced;
  for (const l of ["de", "hu", "ro", "en"] as const) {
    if ((desc?.[l]?.length ?? 0) > 0 || (descAdv?.[l]?.length ?? 0) > 0) return true;
    if ((facts?.[l]?.length ?? 0) > 0 || (factsAdv?.[l]?.length ?? 0) > 0) return true;
  }
  return false;
}

function getPoiAlternates(poi: POI): Record<string, string> {
  return Object.fromEntries(SUPPORTED_LANGS.map((l) => [l, `${SITE_URL}${buildPoiPath(l, poi)}`]));
}

function getRelatedPois(poi: POI, limit = 6): POI[] {
  if (!poi.parent) return [];
  return pois
    .filter((p) => p && p.parent === poi.parent && p.id !== poi.id && p.type !== "region" && p.type !== "country")
    .sort((a, b) => Number(a.type !== poi.type) - Number(b.type !== poi.type))
    .slice(0, limit);
}

const OUT_DIR = path.resolve(process.cwd(), process.env.OUT_DIR || "out");
const GEN_LIMIT = Number(process.env.GEN_LIMIT || 0);

function escapeHtml(s: any): string {
  if (s == null) return "";
  if (typeof s !== "string") s = String(s);
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getLocalized<T>(obj: Partial<Record<string, T>> | undefined, lang: Lang, fallback?: T): T | undefined {
  if (!obj) return fallback;
  return (obj[lang] ?? obj.de ?? obj.en ?? fallback) as T | undefined;
}

const TYPE_LABEL: Record<string, Record<Lang, string>> = {
  city: { de: "Stadt", hu: "Város", ro: "Oraș", en: "City" },
  "state-capital": { de: "Landeshauptstadt", hu: "Tartományi főváros", ro: "Capitală regiune", en: "State capital" },
  mountain: { de: "Berg", hu: "Hegy", ro: "Munte", en: "Mountain" },
  river: { de: "Fluss", hu: "Folyó", ro: "Râu", en: "River" },
  lake: { de: "See", hu: "Tó", ro: "Lac", en: "Lake" },
  island: { de: "Insel", hu: "Sziget", ro: "Insulă", en: "Island" },
  landmark: { de: "Sehenswürdigkeit", hu: "Nevezetesség", ro: "Punct de reper", en: "Landmark" },
  historical: { de: "Historischer Ort", hu: "Történelmi hely", ro: "Sit istoric", en: "Historical site" },
  forest: { de: "Wald", hu: "Erdő", ro: "Pădure", en: "Forest" },
  sea: { de: "Meer", hu: "Tenger", ro: "Mare", en: "Sea" },
  port: { de: "Hafen", hu: "Kikötő", ro: "Port", en: "Port" },
  industry: { de: "Industriegebiet", hu: "Ipari terület", ro: "Zonă industrială", en: "Industrial site" },
  agriculture: { de: "Landwirtschaft", hu: "Mezőgazdaság", ro: "Agricultură", en: "Agriculture" },
  relief: { de: "Geländeform", hu: "Domborzat", ro: "Relief", en: "Relief" },
  "animal-habitat": { de: "Tierlebensraum", hu: "Élőhely", ro: "Habitat animal", en: "Animal habitat" },
};

const I18N: Record<string, Record<Lang, string>> = {
  facts: { de: "Fakten", hu: "Tények", ro: "Fapte", en: "Facts" },
  details: { de: "Details", hu: "Részletek", ro: "Detalii", en: "Details" },
  geography: { de: "Geographie", hu: "Földrajz", ro: "Geografie", en: "Geography" },
  elevation: { de: "Höhe", hu: "Magasság", ro: "Altitudine", en: "Elevation" },
  length: { de: "Länge", hu: "Hossz", ro: "Lungime", en: "Length" },
  area: { de: "Fläche", hu: "Terület", ro: "Suprafață", en: "Area" },
  coordinates: { de: "Koordinaten", hu: "Koordináták", ro: "Coordonate", en: "Coordinates" },
  related: { de: "Verwandte Orte", hu: "Kapcsolódó helyek", ro: "Locuri conexe", en: "Related places" },
  viewMap: { de: "Auf der Karte ansehen", hu: "Megtekintés a térképen", ro: "Vezi pe hartă", en: "View on map" },
  viewOSM: { de: "OpenStreetMap", hu: "OpenStreetMap", ro: "OpenStreetMap", en: "OpenStreetMap" },
  home: { de: "Startseite", hu: "Főoldal", ro: "Acasă", en: "Home" },
  langs: { de: "Sprachen", hu: "Nyelvek", ro: "Limbi", en: "Languages" },
};

const I = (k: string, lang: Lang) => I18N[k]?.[lang] ?? k;
const T = (type: string, lang: Lang) => TYPE_LABEL[type]?.[lang] ?? type;

function structuredData(poi: POI, lang: Lang, url: string, descText: string): string {
  const json: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: getLocalized(poi.name, lang) ?? poi.id,
    description: descText,
    url,
  };
  if (poi.coords && poi.coords.length >= 2) {
    json.geo = {
      "@type": "GeoCoordinates",
      latitude: poi.coords[1],
      longitude: poi.coords[0],
    };
  }
  if (poi.image) {
    json.image = `${SITE_URL}${poi.image}`;
  }
  return `<script type="application/ld+json">${JSON.stringify(json)}</script>`;
}

function renderHtml(poi: POI, lang: Lang): string | null {
  if (!poi.parent) return null;
  const name = getLocalized(poi.name, lang) ?? poi.id;
  const countryId = getCountryId(poi.parent);

  // Description: prefer advanced, fallback to short
  const descAdv = (poi as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced;
  const descShort = poi.description as Record<string, string> | undefined;
  const descText = getLocalized(descAdv as Partial<Record<string, string>>, lang)
    || getLocalized(descShort as Partial<Record<string, string>>, lang)
    || "";

  // Facts: prefer advanced
  const factsAdv = (poi as { factsAdvanced?: Record<string, string[]> }).factsAdvanced;
  const factsShort = poi.facts as Record<string, string[]> | undefined;
  const factsArr = (getLocalized(factsAdv as Partial<Record<string, string[]>>, lang)
    || getLocalized(factsShort as Partial<Record<string, string[]>>, lang)
    || []) as string[];

  const url = `${SITE_URL}${buildPoiPath(lang, poi)}`;
  const title = `${name} | Plizio`;
  const metaDesc = (descText || `${name} — ${T(poi.type, lang)}`).slice(0, 160);

  const breadcrumbHome = `<a href="/${lang}/">${I("home", lang)}</a>`;
  const breadcrumbCountry = `<a href="${buildCountryPath(lang, countryId)}">${countrySlugFor(lang, countryId).replace(/-/g, " ")}</a>`;
  const breadcrumbState = `<a href="${buildStatePath(lang, poi.parent)}">${poi.parent}</a>`;

  // hreflang alternates
  const alternates = getPoiAlternates(poi);

  // Type tag (capitalize)
  const typeLabel = T(poi.type, lang);

  // Geographic facts
  const geoItems: string[] = [];
  if (poi.elevation) geoItems.push(`<div class="plz-meta-item"><div class="label">${I("elevation", lang)}</div><div class="value">${poi.elevation} m</div></div>`);
  if (poi.length) geoItems.push(`<div class="plz-meta-item"><div class="label">${I("length", lang)}</div><div class="value">${poi.length} km</div></div>`);
  if (poi.area) geoItems.push(`<div class="plz-meta-item"><div class="label">${I("area", lang)}</div><div class="value">${poi.area} km²</div></div>`);
  if (poi.coords && poi.coords.length >= 2) {
    geoItems.push(`<div class="plz-meta-item"><div class="label">${I("coordinates", lang)}</div><div class="value">${poi.coords[1].toFixed(3)}, ${poi.coords[0].toFixed(3)}</div></div>`);
  }

  // OSM link
  let osmLink = "";
  if (poi.coords && poi.coords.length >= 2) {
    const osmUrl = `https://www.openstreetmap.org/?mlat=${poi.coords[1]}&mlon=${poi.coords[0]}#map=12/${poi.coords[1]}/${poi.coords[0]}`;
    osmLink = `<a class="plz-cta plz-cta-secondary" href="${osmUrl}" target="_blank" rel="noopener noreferrer">${I("viewOSM", lang)} →</a>`;
  }

  // Related POIs (max 6)
  const related = getRelatedPois(poi, 6);
  const relatedItems = related
    .map((r: POI) => `<a href="${buildPoiPath(lang, r)}">${escapeHtml(getLocalized(r.name, lang) ?? r.id)}</a>`)
    .join("");

  // FAQ
  let faqHtml = "";
  if (Array.isArray(poi.faq)) {
    const items = poi.faq
      .map((f: any) => {
        const q = getLocalized(f.question || f.q, lang);
        const a = getLocalized(f.answer || f.a, lang);
        if (!q || !a) return "";
        return `<details class="plz-faq"><summary>${escapeHtml(q)}</summary><p>${escapeHtml(a)}</p></details>`;
      })
      .filter(Boolean)
      .join("");
    if (items) faqHtml = `<section><h2>FAQ</h2>${items}</section>`;
  }

  // Hero image
  const heroHtml = poi.image
    ? `<div class="plz-hero"><img src="${escapeHtml(poi.image)}" alt="${escapeHtml(name)}" loading="lazy"/></div>`
    : `<div class="plz-hero"><div class="plz-hero-placeholder">🗺️</div></div>`;

  // hreflang link tags
  const hreflangLinks = Object.entries(alternates)
    .map(([l, href]) => `<link rel="alternate" hreflang="${l}" href="${href}"/>`)
    .join("\n  ");

  // Language switcher
  const langSwitcher = SUPPORTED_LANGS.map((l) => {
    const cls = l === lang ? ' class="active"' : "";
    return `<a href="${alternates[l]}"${cls}>${l.toUpperCase()}</a>`;
  }).join("");

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(metaDesc)}"/>
<link rel="canonical" href="${url}"/>
${hreflangLinks}
<link rel="alternate" hreflang="x-default" href="${alternates.en}"/>
<meta property="og:title" content="${escapeHtml(name)}"/>
<meta property="og:description" content="${escapeHtml(metaDesc)}"/>
<meta property="og:url" content="${url}"/>
<meta property="og:type" content="website"/>
${poi.image ? `<meta property="og:image" content="${SITE_URL}${escapeHtml(poi.image)}"/>` : ""}
<link rel="stylesheet" href="/poi-static/poi.css"/>
${structuredData(poi, lang, url, metaDesc)}
</head>
<body>
<header class="plz-header">
  <div class="plz-header-inner">
    <a href="/${lang}/" class="plz-logo">Plizio</a>
    <nav class="plz-nav">
      <a href="/${lang}/">${I("home", lang)}</a>
      <a href="/europe-map/">Europa</a>
    </nav>
    <div class="plz-langs">${langSwitcher}</div>
  </div>
</header>
<main>
  <nav class="plz-breadcrumb">
    ${breadcrumbHome}<span>›</span>${breadcrumbCountry}<span>›</span>${breadcrumbState}<span>›</span><span>${escapeHtml(name)}</span>
  </nav>
  <h1>${escapeHtml(name)}</h1>
  <span class="plz-type-tag">${escapeHtml(typeLabel)}</span>
  ${heroHtml}
  ${descText ? `<section><p>${escapeHtml(descText)}</p></section>` : ""}
  ${geoItems.length > 0 ? `<section><h2>${I("geography", lang)}</h2><div class="plz-meta">${geoItems.join("")}</div></section>` : ""}
  ${factsArr.length > 0 ? `<section><h2>${I("facts", lang)}</h2><ul class="plz-facts">${factsArr.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul></section>` : ""}
  ${faqHtml}
  <section>
    <a class="plz-cta" href="${buildStatePath(lang, poi.parent)}">${I("viewMap", lang)} →</a>
    ${osmLink}
  </section>
  ${related.length > 0 ? `<section><h2>${I("related", lang)}</h2><div class="plz-related">${relatedItems}</div></section>` : ""}
</main>
<footer>
  <a href="/${lang}/">Plizio</a> · <a href="/europe-map/">Europa</a> · <a href="/${lang}/datenschutz/">Datenschutz</a>
</footer>
</body>
</html>`;
}

async function main() {
  const start = Date.now();
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  // Filter POIs eligible for HTML generation
  const eligible = pois.filter(
    (p) => p && p.parent && p.type !== "region" && p.type !== "country" && hasIndexableContent(p)
  );
  console.log(`Eligible POIs: ${eligible.length}`);
  const target = GEN_LIMIT > 0 ? eligible.slice(0, GEN_LIMIT) : eligible;
  console.log(`Generating: ${target.length} POIs × ${SUPPORTED_LANGS.length} langs = ${target.length * SUPPORTED_LANGS.length} HTML files`);

  let written = 0;
  let skipped = 0;
  const dirsMade = new Set<string>();

  for (const poi of target) {
    for (const lang of SUPPORTED_LANGS) {
      const url = buildPoiPath(lang, poi);
      // URL like /de/oesterreich/wien/foo/ → relative path de/oesterreich/wien/foo
      const rel = url.replace(/^\/+/, "").replace(/\/+$/, "");
      if (!rel) { skipped++; continue; }
      const dir = path.join(OUT_DIR, rel);
      const file = path.join(dir, "index.html");
      if (!dirsMade.has(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        dirsMade.add(dir);
      }
      const html = renderHtml(poi, lang);
      if (!html) { skipped++; continue; }
      fs.writeFileSync(file, html, "utf8");
      written++;
      if (written % 5000 === 0) {
        const elapsed = (Date.now() - start) / 1000;
        console.log(`  ${written} files in ${elapsed.toFixed(1)}s (${(written / elapsed).toFixed(0)}/s)`);
      }
    }
  }

  const elapsed = (Date.now() - start) / 1000;
  console.log(`\nDone: ${written} written, ${skipped} skipped in ${elapsed.toFixed(1)}s`);
  console.log(`Unique dirs: ${dirsMade.size}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
