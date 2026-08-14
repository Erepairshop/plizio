#!/usr/bin/env tsx
// Creates small, first-letter shards for the postcard place picker. The browser
// downloads one shard only after the visitor types at least two characters.

import fs from "node:fs";
import path from "node:path";
import * as _slugsNs from "../lib/seo/slugs";
import type { Lang } from "../lib/seo/slugs";

const slugs: any = (_slugsNs as any).default ?? _slugsNs;
const getCountryIdStrict = slugs.getCountryIdStrict as (id: string) => string | null;
const localizedCountryName = slugs.localizedCountryName as (countryId: string, lang: Lang) => string;
const buildStatePath = slugs.buildStatePath as (lang: Lang, regionId: string) => string;
const pois = slugs.pois as Array<{ id?: string; parent?: string; type?: string; coords?: number[]; name?: Record<string, string> }>;
const regions = slugs.regions as Array<{ id?: string; parent?: string; type?: string; coords?: number[]; name?: Record<string, string> }>;

type UrlIndex = Record<string, Partial<Record<Lang, string>>>;
type PlaceRow = [name: string, country: string, url: string, lat: number | null, lng: number | null, kind: string];

const LANGS: Lang[] = ["de", "hu", "ro", "en", "it"];
const DATA_DIR = path.resolve(process.cwd(), "public", "data");
const URL_INDEX_PATH = process.env.POSTCARD_URL_INDEX_PATH
  ? path.resolve(process.env.POSTCARD_URL_INDEX_PATH)
  : path.join(DATA_DIR, "_poi-url-index.json");
const OUT_DIR = process.env.POSTCARD_INDEX_OUT_DIR
  ? path.resolve(process.env.POSTCARD_INDEX_OUT_DIR)
  : path.join(DATA_DIR, "postcard-places");

function normalized(value: string): string {
  return value.normalize("NFKD").replace(/\p{M}/gu, "").toLocaleLowerCase("en").replace(/[^a-z0-9]+/g, " ").trim();
}

function localizedName(poi: (typeof pois)[number], lang: Lang): string {
  const names = poi.name as Record<string, string | undefined> | undefined;
  return String(names?.[lang] || names?.en || names?.de || poi.id || "").trim();
}

if (!fs.existsSync(URL_INDEX_PATH)) {
  throw new Error(`Missing POI URL index: ${URL_INDEX_PATH}`);
}

const urlIndex = JSON.parse(fs.readFileSync(URL_INDEX_PATH, "utf8")) as UrlIndex;
const counts: Record<string, number> = {};
fs.rmSync(OUT_DIR, { recursive: true, force: true });

for (const lang of LANGS) {
  const shards = new Map<string, PlaceRow[]>();
  const seenUrls = new Set<string>();
  for (const poi of pois) {
    if (!poi?.id || !poi.parent || poi.type === "country" || poi.type === "region") continue;
    const urls = urlIndex[poi.id];
    const url = urls?.[lang] || (lang === "it" ? urls?.en : undefined);
    if (!url || seenUrls.has(url)) continue;
    const countryId = getCountryIdStrict(poi.parent);
    if (!countryId) continue;
    const name = localizedName(poi, lang);
    if (!name) continue;
    const key = normalized(name).charAt(0) || "_";
    const coords = Array.isArray(poi.coords) && poi.coords.length >= 2 ? poi.coords : null;
    const lng = coords && Number.isFinite(Number(coords[0])) ? Number(coords[0]) : null;
    const lat = coords && Number.isFinite(Number(coords[1])) ? Number(coords[1]) : null;
    const row: PlaceRow = [name, localizedCountryName(countryId, lang), url, lat, lng, String(poi.type || "")];
    const shard = shards.get(key) || [];
    shard.push(row);
    shards.set(key, shard);
    seenUrls.add(url);
  }

  // Some major cities are represented as region hubs rather than POI detail
  // pages. Add those hubs too, so searches such as Budapest still return the
  // expected city instead of only attractions whose names contain Budapest.
  for (const region of regions) {
    if (!region?.id || !region.parent || region.type === "country") continue;
    const countryId = getCountryIdStrict(region.id) || getCountryIdStrict(region.parent);
    if (!countryId) continue;
    let url = "";
    try { url = buildStatePath(lang, region.id); } catch { continue; }
    if (!url || seenUrls.has(url)) continue;
    const name = localizedName(region, lang);
    if (!name) continue;
    const key = normalized(name).charAt(0) || "_";
    const coords = Array.isArray(region.coords) && region.coords.length >= 2 ? region.coords : null;
    const lng = coords && Number.isFinite(Number(coords[0])) ? Number(coords[0]) : null;
    const lat = coords && Number.isFinite(Number(coords[1])) ? Number(coords[1]) : null;
    const row: PlaceRow = [name, localizedCountryName(countryId, lang), url, lat, lng, "region"];
    const shard = shards.get(key) || [];
    shard.push(row);
    shards.set(key, shard);
    seenUrls.add(url);
  }

  const langDir = path.join(OUT_DIR, lang);
  fs.mkdirSync(langDir, { recursive: true });
  let total = 0;
  for (const [key, rows] of shards) {
    rows.sort((a, b) => a[0].localeCompare(b[0], lang));
    fs.writeFileSync(path.join(langDir, `${key}.json`), JSON.stringify(rows));
    total += rows.length;
  }
  counts[lang] = total;
}

fs.writeFileSync(path.join(OUT_DIR, "meta.json"), JSON.stringify({ version: 1, counts }));
console.log(`Postcard place index: ${JSON.stringify(counts)} -> ${OUT_DIR}`);
