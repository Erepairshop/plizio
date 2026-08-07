/**
 * Native-language coverage audit for one country/language pair.
 *
 * Reads the same stores the renderer reads, so the numbers match what actually
 * ships: inline Record<Lang> fields on the POI sources, the flat hr sidecar,
 * the per-POI i18n sidecars, and the FAQ shards. Read-only.
 *
 *   npx tsx scripts/_audit_native_coverage.mts --lang fr --country france
 *   npx tsx scripts/_audit_native_coverage.mts --lang tr --country germany
 *   npx tsx scripts/_audit_native_coverage.mts --lang hr --country croatia
 */
import * as fs from "node:fs";
import * as path from "node:path";
import * as _ns from "../lib/visualLab/data/_all_poi_sources.generated";
import * as _slugsNs from "../lib/seo/slugs";

const ALL = ((_ns as any).default ?? _ns).ALL_POI_SOURCES as any[];
const slugs: any = (_slugsNs as any).default ?? _slugsNs;
const getCountryIdStrict: (id: string) => string | null = slugs.getCountryIdStrict;

const DESCADV_LONG = 700;

function arg(name: string, fallback = ""): string {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

const lang = arg("lang");
const country = arg("country");
const outPath = arg("out");
if (!lang || !country) {
  console.error("usage: --lang <fr|tr|hr> --country <france|germany|croatia> [--out file.json]");
  process.exit(1);
}

function readJson<T>(rel: string, fallback: T): T {
  try {
    const p = path.resolve(process.cwd(), rel);
    return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf-8")) : fallback;
  } catch {
    return fallback;
  }
}

// Flat native sidecar (hr) — merged into the POI record at render time.
const HR_NATIVE = readJson<Record<string, any>>("public/data/poi-hr-native.json", {});
// Per-POI sidecars (it/es/pl/pt style) — present for some languages only.
const i18nDir = path.resolve(process.cwd(), "public/data/i18n", lang);
const hasI18n = fs.existsSync(i18nDir);

// FAQ shards, falling back to the monolith.
const faqShards = fs
  .readdirSync(path.resolve(process.cwd(), "public/data"))
  .filter((f) => /^poi-faqs-\d+\.json$/.test(f));
const FAQS: Record<string, any[]> = {};
for (const shard of faqShards.length ? faqShards : ["poi-faqs.json"]) {
  Object.assign(FAQS, readJson<Record<string, any[]>>(`public/data/${shard}`, {}));
}

// The url-index is the master list of pages that actually render.
const URL_INDEX = readJson<Record<string, Record<string, string>>>(
  "public/data/_poi-url-index.json",
  {},
);

const text = (v: unknown): v is string => typeof v === "string" && v.trim().length > 0;

function sidecarFor(id: string): Record<string, any> {
  const flat = HR_NATIVE[id];
  const side: Record<string, any> = flat && lang === "hr" ? { ...flat } : {};
  if (hasI18n) {
    try {
      const p = path.join(i18nDir, `${id}.json`);
      if (fs.existsSync(p)) Object.assign(side, JSON.parse(fs.readFileSync(p, "utf-8")));
    } catch {}
  }
  return side;
}

/** Sights are Record<Lang, Sight[]> on the source POIs. */
function sightSource(poi: any): number {
  const s = poi?.sights;
  if (!s || typeof s !== "object") return 0;
  for (const key of ["en", "de", "hu", "ro"]) {
    if (Array.isArray(s[key]) && s[key].length) return s[key].length;
  }
  return 0;
}

function sightTranslated(poi: any, side: Record<string, any>): boolean {
  const s = poi?.sights;
  if (s && Array.isArray(s[lang]) && s[lang].length) return true;
  return Array.isArray(side.sights) && side.sights.length > 0;
}

const fields = ["name", "description", "facts", "descAdv", "sights", "faq"] as const;
type Field = (typeof fields)[number];

const have: Record<Field, number> = { name: 0, description: 0, facts: 0, descAdv: 0, sights: 0, faq: 0 };
const source: Record<Field, number> = { name: 0, description: 0, facts: 0, descAdv: 0, sights: 0, faq: 0 };
const missing: Record<Field, string[]> = { name: [], description: [], facts: [], descAdv: [], sights: [], faq: [] };
let descAdvLong = 0;
let total = 0;
let notRendered = 0;

const seen = new Set<string>();
for (const poi of ALL) {
  const id = poi?.id;
  if (!id || seen.has(id)) continue;
  seen.add(id);
  let c: string | null = null;
  try {
    c = poi.parent ? getCountryIdStrict(poi.parent) : null;
  } catch {}
  if (c !== country) continue;
  if (!URL_INDEX[id]) {
    notRendered++;
    continue;
  }
  total++;
  const side = sidecarFor(id);

  for (const f of ["name", "description"] as const) {
    const inline = poi[f];
    if (inline && typeof inline === "object" && (text(inline.en) || text(inline.de))) source[f]++;
    const ok = (inline && typeof inline === "object" && text(inline[lang])) || text(side[f]);
    if (ok) have[f]++;
    else missing[f].push(id);
  }

  const facts = poi.facts;
  if (facts && typeof facts === "object" && (Array.isArray(facts.en) || Array.isArray(facts.de))) source.facts++;
  const factsOk =
    (facts && typeof facts === "object" && Array.isArray(facts[lang]) && facts[lang].length > 0) ||
    (Array.isArray(side.facts) && side.facts.length > 0);
  if (factsOk) have.facts++;
  else missing.facts.push(id);

  const adv = poi.descriptionAdvanced;
  if (adv && typeof adv === "object" && (text(adv.en) || text(adv.de))) source.descAdv++;
  const advValue =
    (adv && typeof adv === "object" && text(adv[lang]) ? adv[lang] : null) ??
    (text(side.descriptionAdvanced) ? side.descriptionAdvanced : null) ??
    (text(side.descAdv) ? side.descAdv : null);
  if (text(advValue)) {
    have.descAdv++;
    if (advValue.trim().length >= DESCADV_LONG) descAdvLong++;
  } else if (adv && typeof adv === "object" && (text(adv.en) || text(adv.de))) {
    missing.descAdv.push(id);
  }

  const sCount = sightSource(poi);
  if (sCount > 0) source.sights++;
  if (sightTranslated(poi, side)) have.sights++;
  else if (sCount > 0) missing.sights.push(id);

  const faqEntries = FAQS[id] ?? [];
  if (faqEntries.length) source.faq++;
  const faqOk =
    faqEntries.some((f: any) => text(f?.q?.[lang])) || (Array.isArray(side.faq) && side.faq.length > 0);
  if (faqOk) have.faq++;
  else if (faqEntries.length) missing.faq.push(id);
}

const pct = (n: number, d: number) => (d ? `${((n / d) * 100).toFixed(1)}%` : "n/a");

console.log(`=== ${lang.toUpperCase()} coverage in ${country} ===`);
console.log(`Rendered POIs: ${total}   (skipped, no page: ${notRendered})`);
console.log(`${"field".padEnd(14)}${"have".padStart(7)}${"source".padStart(9)}${"gap".padStart(8)}   coverage`);
for (const f of fields) {
  const gap = Math.max(0, source[f] - have[f]);
  console.log(
    `${f.padEnd(14)}${String(have[f]).padStart(7)}${String(source[f]).padStart(9)}${String(gap).padStart(8)}   ${pct(have[f], source[f])}`,
  );
}
console.log(`descAdv >= ${DESCADV_LONG} chars: ${descAdvLong}`);

if (outPath) {
  fs.writeFileSync(
    outPath,
    JSON.stringify(
      { lang, country, total, notRendered, have, source, descAdvLong, missing },
      null,
      2,
    ),
    "utf-8",
  );
  console.log(`\nwrote ${outPath}`);
}
