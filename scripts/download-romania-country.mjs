// Fetch a high-res country-level image for RO (map or landscape).
import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { URL } from "node:url";
import sharp from "sharp";

const OUT_DIR = path.resolve("public/geo-images/romania");
const UA = "PlizioGeoPOIFetcher/1.0 (educational; contact: borota25@gmail.com)";

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
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        const ch = [];
        res.on("data", (c) => ch.push(c));
        res.on("end", () => resolve(Buffer.concat(ch)));
      },
    );
    req.on("error", reject);
    req.setTimeout(30000, () => req.destroy(new Error("timeout")));
  });
}

// Try several candidate Wikimedia Commons "Special:FilePath" URLs (auto-resolve)
// Special:FilePath auto-resolves hash. Width param enforces thumb.
const CANDIDATES = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Romania_relief_location_map.jpg?width=1200",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Bucegi_Mountains_from_Valea_Alba.jpg?width=1200",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Peles_Castle_-_Romania.jpg?width=1200",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Transfagarasan_pass_in_summer.jpg?width=1200",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Bran_Castle_TB1.jpg?width=1200",
];

async function main() {
  const out = path.join(OUT_DIR, "RO.webp");
  for (const url of CANDIDATES) {
    try {
      console.log("try:", url);
      const buf = await fetchBuffer(url);
      if (buf.length < 20000) {
        console.log("  too small:", buf.length);
        continue;
      }
      const image = sharp(buf, { failOn: "none" }).rotate();
      const meta = await image.metadata();
      console.log(`  got ${meta.width}x${meta.height} (${buf.length} bytes)`);
      if ((meta.width || 0) < 400) continue;
      await image
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(out);
      console.log("  saved ->", out);
      return;
    } catch (e) {
      console.log("  err:", e.message);
    }
  }
  console.log("All candidates failed for RO");
}

main();
