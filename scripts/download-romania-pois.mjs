// Download Romania POI images from Wikipedia and convert to WebP.
// Usage: node scripts/download-romania-pois.mjs
import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { URL } from "node:url";
import sharp from "sharp";

const OUT_DIR = path.resolve("public/geo-images/romania");
fs.mkdirSync(OUT_DIR, { recursive: true });

// --- POI -> Wikipedia article title map (EN preferred, RO fallback via wiki= field) ---
// Format: { id, wiki: "EnglishTitle" OR { en, ro } }
const POIS = [
  // Country
  { id: "RO", wiki: "Romania" },

  // Regions (41 judete + Bucharest). Titles use "<Name> County".
  { id: "RO-AB", wiki: "Alba County" },
  { id: "RO-AG", wiki: "Argeș County" },
  { id: "RO-AR", wiki: "Arad County" },
  { id: "RO-B", wiki: "Bucharest" },
  { id: "RO-BC", wiki: "Bacău County" },
  { id: "RO-BH", wiki: "Bihor County" },
  { id: "RO-BN", wiki: "Bistrița-Năsăud County" },
  { id: "RO-BR", wiki: "Brăila County" },
  { id: "RO-BT", wiki: "Botoșani County" },
  { id: "RO-BV", wiki: "Brașov County" },
  { id: "RO-BZ", wiki: "Buzău County" },
  { id: "RO-CJ", wiki: "Cluj County" },
  { id: "RO-CL", wiki: "Călărași County" },
  { id: "RO-CS", wiki: "Caraș-Severin County" },
  { id: "RO-CT", wiki: "Constanța County" },
  { id: "RO-CV", wiki: "Covasna County" },
  { id: "RO-DB", wiki: "Dâmbovița County" },
  { id: "RO-DJ", wiki: "Dolj County" },
  { id: "RO-GJ", wiki: "Gorj County" },
  { id: "RO-GL", wiki: "Galați County" },
  { id: "RO-GR", wiki: "Giurgiu County" },
  { id: "RO-HD", wiki: "Hunedoara County" },
  { id: "RO-HR", wiki: "Harghita County" },
  { id: "RO-IF", wiki: "Ilfov County" },
  { id: "RO-IL", wiki: "Ialomița County" },
  { id: "RO-IS", wiki: "Iași County" },
  { id: "RO-MH", wiki: "Mehedinți County" },
  { id: "RO-MM", wiki: "Maramureș County" },
  { id: "RO-MS", wiki: "Mureș County" },
  { id: "RO-NT", wiki: "Neamț County" },
  { id: "RO-OT", wiki: "Olt County" },
  { id: "RO-PH", wiki: "Prahova County" },
  { id: "RO-SB", wiki: "Sibiu County" },
  { id: "RO-SJ", wiki: "Sălaj County" },
  { id: "RO-SM", wiki: "Satu Mare County" },
  { id: "RO-SV", wiki: "Suceava County" },
  { id: "RO-TL", wiki: "Tulcea County" },
  { id: "RO-TM", wiki: "Timiș County" },
  { id: "RO-TR", wiki: "Teleorman County" },
  { id: "RO-VL", wiki: "Vâlcea County" },
  { id: "RO-VN", wiki: "Vrancea County" },
  { id: "RO-VS", wiki: "Vaslui County" },

  // Cities
  { id: "city-bucuresti", wiki: "Bucharest" },
  { id: "city-cluj-napoca", wiki: "Cluj-Napoca" },
  { id: "city-timisoara", wiki: "Timișoara" },
  { id: "city-iasi", wiki: "Iași" },
  { id: "city-constanta", wiki: "Constanța" },
  { id: "city-brasov", wiki: "Brașov" },
  { id: "city-craiova", wiki: "Craiova" },
  { id: "city-galati", wiki: "Galați" },
  { id: "city-oradea", wiki: "Oradea" },
  { id: "city-ploiesti", wiki: "Ploiești" },
  { id: "city-pitesti", wiki: "Pitești" },
  { id: "city-arad", wiki: "Arad, Romania" },
  { id: "city-sibiu", wiki: "Sibiu" },
  { id: "city-targu-mures", wiki: "Târgu Mureș" },
  { id: "city-baia-mare", wiki: "Baia Mare" },
  { id: "city-bacau", wiki: "Bacău" },
  { id: "city-alba-iulia", wiki: "Alba Iulia" },
  { id: "city-suceava", wiki: "Suceava" },
  { id: "city-targoviste", wiki: "Târgoviște" },
  { id: "city-sighisoara", wiki: "Sighișoara" },
  { id: "city-drobeta-turnu-severin", wiki: "Drobeta-Turnu Severin" },
  { id: "city-miercurea-ciuc", wiki: "Miercurea Ciuc" },
  { id: "city-tulcea", wiki: "Tulcea" },
];

const USER_AGENT = "PlizioGeoPOIFetcher/1.0 (educational; contact: borota25@gmail.com)";

function fetchJson(urlStr) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const req = https.get(
      {
        hostname: url.hostname,
        path: url.pathname + url.search,
        headers: {
          "User-Agent": USER_AGENT,
          Accept: "application/json",
        },
      },
      (res) => {
        // follow redirects
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          return fetchJson(new URL(res.headers.location, urlStr).toString()).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} for ${urlStr}`));
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
          } catch (e) {
            reject(e);
          }
        });
      },
    );
    req.on("error", reject);
    req.setTimeout(20000, () => {
      req.destroy(new Error("timeout"));
    });
  });
}

function fetchBuffer(urlStr) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const req = https.get(
      {
        hostname: url.hostname,
        path: url.pathname + url.search,
        headers: {
          "User-Agent": USER_AGENT,
        },
      },
      (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          return fetchBuffer(new URL(res.headers.location, urlStr).toString()).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} for ${urlStr}`));
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      },
    );
    req.on("error", reject);
    req.setTimeout(30000, () => {
      req.destroy(new Error("timeout"));
    });
  });
}

async function getWikipediaImageUrl(title) {
  // Try REST summary first (gives originalimage/thumbnail)
  const rest = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replaceAll(" ", "_"))}`;
  try {
    const j = await fetchJson(rest);
    const url = j.originalimage?.source || j.thumbnail?.source;
    if (url) return url;
  } catch {
    /* fallthrough */
  }
  // Fallback: use MediaWiki pageimages
  const api =
    `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=original|thumbnail&pithumbsize=1200&titles=` +
    encodeURIComponent(title);
  const j = await fetchJson(api);
  const pages = j?.query?.pages || {};
  const first = Object.values(pages)[0];
  return first?.original?.source || first?.thumbnail?.source || null;
}

async function processOne(poi) {
  const outPath = path.join(OUT_DIR, `${poi.id}.webp`);
  if (fs.existsSync(outPath)) {
    return { id: poi.id, status: "skip", reason: "exists" };
  }
  try {
    const url = await getWikipediaImageUrl(poi.wiki);
    if (!url) return { id: poi.id, status: "miss", reason: "no image in wiki" };
    const buf = await fetchBuffer(url);
    if (buf.length < 4000) return { id: poi.id, status: "miss", reason: `too small (${buf.length})` };
    // Convert + resize (max 1200w, keep aspect)
    const image = sharp(buf, { failOn: "none" });
    const meta = await image.metadata();
    if ((meta.width || 0) < 200 || (meta.height || 0) < 200) {
      return { id: poi.id, status: "miss", reason: `low res ${meta.width}x${meta.height}` };
    }
    const pipeline = image.rotate();
    if ((meta.width || 0) > 1400) pipeline.resize({ width: 1200, withoutEnlargement: true });
    await pipeline.webp({ quality: 82 }).toFile(outPath);
    return {
      id: poi.id,
      status: "ok",
      reason: `from ${url.split("/").slice(-1)[0]}`,
    };
  } catch (e) {
    return { id: poi.id, status: "err", reason: (e && e.message) || String(e) };
  }
}

async function main() {
  const results = [];
  let i = 0;
  for (const poi of POIS) {
    i += 1;
    process.stdout.write(`[${i}/${POIS.length}] ${poi.id} ... `);
    // eslint-disable-next-line no-await-in-loop
    const r = await processOne(poi);
    console.log(`${r.status} ${r.reason || ""}`);
    results.push(r);
    // Small pause to be polite
    // eslint-disable-next-line no-await-in-loop
    await new Promise((res) => setTimeout(res, 120));
  }
  const ok = results.filter((r) => r.status === "ok").length;
  const skip = results.filter((r) => r.status === "skip").length;
  const miss = results.filter((r) => r.status === "miss" || r.status === "err");
  console.log(`\n===== SUMMARY =====`);
  console.log(`ok:   ${ok}`);
  console.log(`skip: ${skip}`);
  console.log(`miss: ${miss.length}`);
  if (miss.length) {
    console.log("\nMissing/failed:");
    for (const r of miss) console.log(`  - ${r.id}: ${r.status} — ${r.reason}`);
  }
  fs.writeFileSync(
    path.resolve("scripts/romania-pois-download-report.json"),
    JSON.stringify(results, null, 2),
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
