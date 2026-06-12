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

const COUNTRY = {
  key: "croatia",
  name: { de: "Kroatien", hu: "Horvátország", ro: "Croația", en: "Croatia" } as Record<Lang, string>,
};
const BSLUG: Record<Lang, string> = { de: "straende", hu: "strandok", ro: "plaje", en: "beaches" };
const I: Record<string, Record<Lang, string>> = {
  hubTitle: { de: "Die schönsten Strände Kroatiens", hu: "Horvátország legszebb strandjai", ro: "Cele mai frumoase plaje din Croația", en: "The most beautiful beaches in Croatia" },
  hubIntro: {
    de: "Von der goldenen Landzunge Zlatni Rat bis zur versteckten Bucht Stiniva: die 45 schönsten Strände Kroatiens mit allen praktischen Infos, Veranstaltungen und Tipps.",
    hu: "A Zlatni Rat aranyszarvától a rejtett Stiniva-öbölig: Horvátország 45 legszebb strandja minden praktikus információval, eseménnyel és tippel.",
    ro: "De la limba de nisip Zlatni Rat până la golful ascuns Stiniva: cele mai frumoase 45 de plaje din Croația cu toate informațiile practice, evenimente și sfaturi.",
    en: "From the golden horn of Zlatni Rat to the hidden cove of Stiniva: Croatia's 45 most beautiful beaches with all the practical info, events and tips.",
  },
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

const content = JSON.parse(fs.readFileSync(path.join(DATA, "hr-content.json"), "utf-8")) as Record<string, any>;
const events = JSON.parse(fs.readFileSync(path.join(DATA, "hr-events.json"), "utf-8")) as Record<string, any>;
const images = JSON.parse(fs.readFileSync(path.join(DATA, "hr-images.json"), "utf-8")) as any[];
const imgBySlug = new Map(images.map((m) => [m.slug, m]));
// rank by fame (sitelinks) desc for hub ordering
const beaches = images
  .filter((m) => content[m.slug])
  .sort((a, b) => (b.sitelinks || 0) - (a.sitelinks || 0));

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

  const jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "Beach"],
        name,
        description: intro.slice(0, 500),
        image: SITE + imgUrl,
        ...(lat ? { geo: { "@type": "GeoCoordinates", latitude: Number(lat), longitude: Number(lng) } } : {}),
        address: { "@type": "PostalAddress", addressCountry: "HR" },
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
          { "@type": "ListItem", position: 2, name: COUNTRY.name[l], item: `${SITE}/${l}/${COUNTRY.key}/` },
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
<nav class="plz-breadcrumb"><a href="/${l}/">${esc(t("home", l))}</a><span>›</span><a href="/${l}/${COUNTRY.key}/">${esc(COUNTRY.name[l])}</a><span>›</span><a href="${hubUrl(l)}">${esc(t("beaches", l))}</a><span>›</span><span>${esc(name)}</span></nav>
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
${lat ? `<p><a class="bh-maplink" href="https://www.google.com/maps/search/?api=1&query=${lat},${lng}" target="_blank" rel="nofollow noopener">${esc(t("map", l))}</a></p>` : ""}
<p><a class="bh-back" href="${hubUrl(l)}">← ${esc(t("allBeaches", l))}</a></p>
</main>` +
    footer(l) +
    `</body></html>`
  );
}

function hubPage(l: Lang) {
  const title = `${t("hubTitle", l)} | Plizio`;
  const desc = t("hubIntro", l);
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
    name: t("hubTitle", l),
    itemListElement: beaches.map((m, i) => ({
      "@type": "ListItem", position: i + 1, name: m.name, url: SITE + beachUrl(l, m.slug),
    })),
  };
  return (
    head(title, desc, canonical, hreflang(hubUrl), itemList).replace("__L__", l) +
    header(l, hubUrl) +
    `<main class="bh-main">
<nav class="plz-breadcrumb"><a href="/${l}/">${esc(t("home", l))}</a><span>›</span><a href="/${l}/${COUNTRY.key}/">${esc(COUNTRY.name[l])}</a><span>›</span><span>${esc(t("beaches", l))}</span></nav>
<h1>${esc(t("hubTitle", l))}</h1>
<p class="bh-lead">${esc(t("hubIntro", l))}</p>
<div class="bh-cards">${cards}</div>
</main>` +
    footer(l) +
    `</body></html>`
  );
}

let n = 0;
for (const l of LANGS) {
  // hub
  const hubDir = path.join(OUT_DIR, l, COUNTRY.key, BSLUG[l]);
  fs.mkdirSync(hubDir, { recursive: true });
  fs.writeFileSync(path.join(hubDir, "index.html"), hubPage(l), "utf8");
  n++;
  for (const m of beaches) {
    const dir = path.join(hubDir, m.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), beachPage(l, m.slug), "utf8");
    n++;
  }
}
console.log(`beach-hub: ${n} HTML (${LANGS.length} langs × (1 hub + ${beaches.length} beaches)) -> ${OUT_DIR}`);

// sitemap-beach.xml — included by build-sitemap-index.mjs
const urls: string[] = [];
for (const l of LANGS) {
  urls.push(SITE + hubUrl(l));
  for (const m of beaches) urls.push(SITE + beachUrl(l, m.slug));
}
const today = process.env.SITEMAP_DATE || "2026-06-12";
const sm =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
  "\n</urlset>\n";
fs.writeFileSync(path.join(OUT_DIR, "sitemap-beach.xml"), sm, "utf8");
console.log(`sitemap-beach.xml: ${urls.length} URLs`);
