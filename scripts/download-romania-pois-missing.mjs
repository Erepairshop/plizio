// Retry missing POIs with alternative titles / direct Commons filenames.
import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { URL } from "node:url";
import sharp from "sharp";

const OUT_DIR = path.resolve("public/geo-images/romania");
const UA = "PlizioGeoPOIFetcher/1.0 (educational; contact: borota25@gmail.com)";

// For each missing id, provide a list of candidate Wikipedia titles
// AND/OR direct Commons filenames (via Special:FilePath).
const MISSING = [
  {
    id: "river-tarnava",
    titles: ["Târnava Mare", "Târnava Mică", "Târnava"],
    files: ["Tarnava_Mare_river.jpg", "Blaj-Tarnava.jpg"],
  },
  {
    id: "river-crisul",
    titles: ["Crișul Repede", "Crișul Negru", "Crișul Alb", "Criș (river)"],
    files: ["Crisul_Repede_Oradea.jpg", "Crisul_Repede_in_Oradea.jpg"],
  },
  {
    id: "lake-iezer",
    titles: ["Iezer-Păpușa Mountains", "Rodna Mountains", "Iezer (disambiguation)"],
    files: ["Iezer_Lake_Rodna.jpg", "Lacul_Iezer_Rodna.jpg"],
  },
  {
    id: "lake-sovata",
    titles: ["Sovata", "Bear Lake (Romania)", "Lacul Ursu"],
    files: ["Lacul_Ursu_Sovata.jpg", "Lacul_Ursu_Sovata_Romania.jpg", "Sovata_Bear_Lake.jpg"],
  },
  {
    id: "landmark-transalpina",
    titles: ["DN67C", "Transalpina (road)", "Parâng Mountains"],
    files: ["Transalpina_road.jpg", "Transalpina_DN67C.jpg"],
  },
  {
    id: "landmark-sphinx-bucegi",
    titles: ["Babele", "Sfinxul din Bucegi", "Bucegi Natural Park"],
    files: ["Sfinxul_din_Bucegi.jpg", "Bucegi_Sphinx.jpg", "Babele_Bucegi.jpg"],
  },
];

function fetchJson(urlStr) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const req = https.get(
      { hostname: url.hostname, path: url.pathname + url.search, headers: { "User-Agent": UA, Accept: "application/json" } },
      (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          return fetchJson(new URL(res.headers.location, urlStr).toString()).then(resolve, reject);
        }
        if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode}`)); }
        const ch = [];
        res.on("data", (c) => ch.push(c));
        res.on("end", () => { try { resolve(JSON.parse(Buffer.concat(ch).toString("utf8"))); } catch (e) { reject(e); } });
      },
    );
    req.on("error", reject);
    req.setTimeout(20000, () => req.destroy(new Error("timeout")));
  });
}

function fetchBuffer(urlStr) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const req = https.get(
      { hostname: url.hostname, path: url.pathname + url.search, headers: { "User-Agent": UA } },
      (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          return fetchBuffer(new URL(res.headers.location, urlStr).toString()).then(resolve, reject);
        }
        if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode}`)); }
        const ch = [];
        res.on("data", (c) => ch.push(c));
        res.on("end", () => resolve(Buffer.concat(ch)));
      },
    );
    req.on("error", reject);
    req.setTimeout(30000, () => req.destroy(new Error("timeout")));
  });
}

async function getFromTitle(title) {
  // Try summary first
  try {
    const rest = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replaceAll(" ", "_"))}`;
    const j = await fetchJson(rest);
    const url = j.originalimage?.source || j.thumbnail?.source;
    if (url) return url;
  } catch { /* pass */ }
  // Try images list via MediaWiki API (first non-logo image)
  try {
    const api = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&imlimit=20&titles=${encodeURIComponent(title)}`;
    const j = await fetchJson(api);
    const pages = j?.query?.pages || {};
    const first = Object.values(pages)[0];
    const imgs = first?.images || [];
    for (const im of imgs) {
      const t = im.title || "";
      if (/\.(svg|gif)$/i.test(t)) continue;
      if (/commons-logo|wiki\.png|flag of|coat of arms|\.svg/i.test(t)) continue;
      // convert "File:Foo.jpg" to Special:FilePath
      const fname = t.replace(/^File:/, "");
      return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fname)}?width=1200`;
    }
  } catch { /* pass */ }
  return null;
}

async function tryRoWiki(title) {
  try {
    const rest = `https://ro.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replaceAll(" ", "_"))}`;
    const j = await fetchJson(rest);
    const url = j.originalimage?.source || j.thumbnail?.source;
    if (url) return url;
  } catch { /* pass */ }
  return null;
}

async function trySave(id, url) {
  const outPath = path.join(OUT_DIR, `${id}.webp`);
  try {
    const buf = await fetchBuffer(url);
    if (buf.length < 4000) return { ok: false, reason: `too small (${buf.length})` };
    const image = sharp(buf, { failOn: "none" });
    const meta = await image.metadata();
    if ((meta.width || 0) < 200 || (meta.height || 0) < 200) {
      return { ok: false, reason: `low res ${meta.width}x${meta.height}` };
    }
    const pipeline = image.rotate();
    if ((meta.width || 0) > 1400) pipeline.resize({ width: 1200, withoutEnlargement: true });
    await pipeline.webp({ quality: 82 }).toFile(outPath);
    return { ok: true };
  } catch (e) {
    return { ok: false, reason: e.message };
  }
}

async function main() {
  for (const m of MISSING) {
    console.log(`\n=== ${m.id} ===`);
    const outPath = path.join(OUT_DIR, `${m.id}.webp`);
    if (fs.existsSync(outPath)) { console.log("  exists, skip"); continue; }
    let saved = false;
    // Try titles (EN and RO)
    for (const title of m.titles || []) {
      console.log("  title EN:", title);
      let url = await getFromTitle(title);
      if (!url) {
        console.log("    -> try RO wiki");
        url = await tryRoWiki(title);
      }
      if (!url) continue;
      console.log("    found:", url.split("/").slice(-1)[0]);
      const r = await trySave(m.id, url);
      if (r.ok) { saved = true; console.log("    SAVED"); break; }
      console.log("    save failed:", r.reason);
    }
    if (saved) continue;
    // Try direct files
    for (const fname of m.files || []) {
      const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fname)}?width=1200`;
      console.log("  file:", fname);
      const r = await trySave(m.id, url);
      if (r.ok) { saved = true; console.log("    SAVED"); break; }
      console.log("    failed:", r.reason);
    }
    if (!saved) console.log(`  MISS: ${m.id}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
