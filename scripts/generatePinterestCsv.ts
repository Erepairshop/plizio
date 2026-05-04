#!/usr/bin/env tsx
/**
 * Pinterest bulk-upload CSV generator.
 * Output: docs/pinterest/pinterest_{YYYY-MM-DD}.csv (per-lang optional)
 *
 * Columns (Pinterest Business bulk-create format):
 *   Title, Media URL, Pinterest board, Thumbnail URL, Description, Link, Publish date, Keywords
 *
 * Usage:
 *   npx tsx scripts/generatePinterestCsv.ts [--lang en|de|hu|ro] [--limit 500]
 *
 * Strategy:
 *   - Every POI with image + description is a Pin
 *   - Board name = "{Country} {type-group}" (e.g. "Germany Castles", "Hungary Nature")
 *   - Title = POI name (+ country for long-tail)
 *   - Description = 1st FAQ Q&A (if exists) + call-to-action ("Learn more with Plizio maps")
 *   - Link = https://plizio.com{buildPoiPath}
 *   - Keywords = auto-derived from type + country + POI name
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pois, SUPPORTED_LANGS, buildPoiPath, type Lang } from "@/lib/seo/slugs";
import { getCountryId } from "@/lib/seo/slugs";
import { COUNTRY_COPY, absoluteUrl } from "@/lib/seo/routes";
import { getPoiImage } from "@/lib/seo/resolvePoiImage";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");

const TYPE_GROUP: Record<string, string> = {
  "state-capital": "Cities",
  city: "Cities",
  mountain: "Mountains",
  river: "Rivers",
  lake: "Lakes",
  sea: "Seas",
  island: "Islands",
  forest: "Forests",
  historical: "Historical Sites",
  landmark: "Landmarks",
  "animal-habitat": "Nature",
  agriculture: "Agriculture",
  "kid-landmark": "Family Attractions",
  industry: "Industry",
  port: "Ports",
};

function pickBoardName(countryName: string, poiType: string | undefined): string {
  const group = poiType ? TYPE_GROUP[poiType] || "Places" : "Places";
  return `Plizio ${countryName} — ${group}`;
}

function csvEscape(s: string): string {
  if (s.includes('"') || s.includes(",") || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function buildDescription(poi: any, lang: Lang): string {
  // Prefer FAQ first Q+A; fallback description.
  const faqList = poi.faq?.[lang];
  if (faqList && faqList.length > 0) {
    const q = faqList[0].q;
    const a = faqList[0].a;
    const cta = lang === "hu" ? "Tanulj többet a Plizio térképeken." : lang === "ro" ? "Învață mai multe pe hărțile Plizio." : lang === "de" ? "Lerne mehr auf den Plizio-Karten." : "Learn more on Plizio maps.";
    return `${q} ${a} ${cta}`;
  }
  const desc = poi.description?.[lang] || poi.description?.de || "";
  const cta = lang === "hu" ? "Fedezd fel a Plizio-n!" : lang === "ro" ? "Descoperă pe Plizio!" : lang === "de" ? "Entdecke auf Plizio!" : "Discover on Plizio!";
  return `${desc} ${cta}`.trim();
}

function buildKeywords(poi: any, countryName: string, lang: Lang): string {
  const kw = new Set<string>();
  const name = poi.name?.[lang];
  if (name) kw.add(name);
  if (poi.type) kw.add(poi.type);
  kw.add(countryName);
  if (lang === "en") { kw.add("travel"); kw.add("geography"); kw.add("landmark"); }
  if (lang === "hu") { kw.add("utazás"); kw.add("földrajz"); kw.add("látnivaló"); }
  if (lang === "de") { kw.add("Reise"); kw.add("Geographie"); kw.add("Sehenswürdigkeit"); }
  if (lang === "ro") { kw.add("călătorie"); kw.add("geografie"); kw.add("obiectiv"); }
  return Array.from(kw).join(", ");
}

const args = process.argv.slice(2);
const langArgIdx = args.indexOf("--lang");
const langArg = langArgIdx >= 0 ? args[langArgIdx + 1] : undefined;
const limitIdx = args.indexOf("--limit");
const limit = limitIdx >= 0 ? parseInt(args[limitIdx + 1], 10) : Infinity;

const langs: Lang[] = langArg ? [langArg as Lang] : SUPPORTED_LANGS;

const header = ["Title", "Media URL", "Pinterest board", "Thumbnail URL", "Description", "Link", "Publish date", "Keywords"];

const today = new Date().toISOString().slice(0, 10);
const outDir = join(repoRoot, "docs", "pinterest");
mkdirSync(outDir, { recursive: true });

let grandTotal = 0;

for (const lang of langs) {
  const rows: string[][] = [header];
  let count = 0;
  for (const poi of pois) {
    if (count >= limit) break;
    if (!poi || !poi.name || !poi.description) continue;
    const poiSrc = getPoiImage(poi);
    if (!poiSrc) continue;
    if (!poi.parent) continue;
    const countryId = getCountryId(poi.parent);
    const countryCopy = COUNTRY_COPY[countryId]?.[lang];
    if (!countryCopy) continue;
    const countryName = countryCopy.name;

    const title = `${poi.name[lang] || poi.name.de || poi.id} — ${countryName}`;
    const mediaUrl = absoluteUrl(poiSrc);
    const board = pickBoardName(countryName, poi.type);
    const desc = buildDescription(poi, lang).slice(0, 500);
    const linkPath = buildPoiPath(lang, poi as any);
    const link = absoluteUrl(linkPath);
    const keywords = buildKeywords(poi, countryName, lang);

    rows.push([
      title.slice(0, 100),
      mediaUrl,
      board.slice(0, 180),
      "", // Thumbnail URL (optional, Pinterest can generate)
      desc,
      link,
      "", // Publish date — empty = publish immediately
      keywords.slice(0, 500),
    ].map(csvEscape));
    count++;
  }
  grandTotal += count;

  const csv = rows.map((r) => r.join(",")).join("\n");
  const outFile = join(outDir, `pinterest_${today}_${lang}.csv`);
  writeFileSync(outFile, csv, "utf8");
  console.log(`[${lang}] ${count} pins → ${outFile}`);
}

console.log(`\n✅ Grand total: ${grandTotal} pins generated in ${outDir}/`);
console.log(`\nUpload via Pinterest Business → Bulk-create pins → select CSV.`);
