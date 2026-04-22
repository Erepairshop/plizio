// Download remaining Romania POI images (nature + history + landmarks).
// Skips files that already exist.
import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { URL } from "node:url";
import sharp from "sharp";

const OUT_DIR = path.resolve("public/geo-images/romania");
fs.mkdirSync(OUT_DIR, { recursive: true });

const POIS = [
  // --- NATURE (32) ---
  // Rivers
  { id: "river-dunarea", wiki: "Danube" },
  { id: "river-mures", wiki: "Mureș (river)" },
  { id: "river-olt", wiki: "Olt (river)" },
  { id: "river-siret", wiki: "Siret (river)" },
  { id: "river-prut", wiki: "Prut" },
  { id: "river-somes", wiki: "Someș" },
  { id: "river-arges", wiki: "Argeș (river)" },
  { id: "river-dambovita", wiki: "Dâmbovița (river)" },
  { id: "river-jiu", wiki: "Jiu (river)" },
  { id: "river-ialomita", wiki: "Ialomița (river)" },
  { id: "river-tarnava", wiki: "Târnava (river)" },
  { id: "river-crisul", wiki: "Criș" },
  // Mountains
  { id: "mountain-carpati", wiki: "Carpathian Mountains" },
  { id: "mountain-fagaras", wiki: "Făgăraș Mountains" },
  { id: "mountain-moldoveanu", wiki: "Moldoveanu Peak" },
  { id: "mountain-negoiu", wiki: "Negoiu" },
  { id: "mountain-bucegi", wiki: "Bucegi Mountains" },
  { id: "mountain-retezat", wiki: "Retezat Mountains" },
  { id: "mountain-piatra-craiului", wiki: "Piatra Craiului Mountains" },
  { id: "mountain-apuseni", wiki: "Apuseni Mountains" },
  { id: "mountain-rodnei", wiki: "Rodna Mountains" },
  { id: "mountain-ceahlau", wiki: "Ceahlău Massif" },
  { id: "mountain-maramures", wiki: "Maramureș Mountains" },
  { id: "mountain-orientali", wiki: "Eastern Carpathians" },
  { id: "mountain-meridionali", wiki: "Southern Carpathians" },
  { id: "mountain-occidentali", wiki: "Western Romanian Carpathians" },
  // Lakes
  { id: "lake-sfanta-ana", wiki: "Lake Sfânta Ana" },
  { id: "lake-bicaz", wiki: "Lake Bicaz" },
  { id: "lake-vidraru", wiki: "Lake Vidraru" },
  { id: "lake-razim", wiki: "Razelm Lake" },
  { id: "lake-balea", wiki: "Bâlea Lake" },
  { id: "lake-rosu", wiki: "Red Lake (Romania)" },
  { id: "lake-iezer", wiki: "Iezer Lake" },
  { id: "lake-sovata", wiki: "Lacul Ursu" },
  // Sea
  { id: "sea-marea-neagra", wiki: "Black Sea" },

  // --- HISTORICAL (14) ---
  { id: "hist-sarmizegetusa-regia", wiki: "Sarmizegetusa Regia" },
  { id: "hist-ulpia-traiana", wiki: "Ulpia Traiana Sarmizegetusa" },
  { id: "hist-histria", wiki: "Histria (ancient city)" },
  { id: "hist-alba-carolina", wiki: "Alba Carolina Citadel" },
  { id: "hist-bran-castle", wiki: "Bran Castle" },
  { id: "hist-peles-castle", wiki: "Peleș Castle" },
  { id: "hist-corvin-castle", wiki: "Corvin Castle" },
  { id: "hist-sighisoara-citadel", wiki: "Sighișoara" },
  { id: "hist-voronet", wiki: "Voroneț Monastery" },
  { id: "hist-moldovita", wiki: "Moldovița Monastery" },
  { id: "hist-sucevita", wiki: "Sucevița Monastery" },
  { id: "hist-horezu", wiki: "Horezu Monastery" },
  { id: "hist-poenari", wiki: "Poenari Castle" },
  { id: "hist-curtea-veche", wiki: "Curtea Veche" },

  // --- LANDMARKS (14) ---
  { id: "landmark-delta-dunarii", wiki: "Danube Delta" },
  { id: "landmark-retezat-np", wiki: "Retezat National Park" },
  { id: "landmark-transfagarasan", wiki: "Transfăgărășan" },
  { id: "landmark-transalpina", wiki: "Transalpina" },
  { id: "landmark-cheile-bicazului", wiki: "Bicaz Gorge" },
  { id: "landmark-cheile-turzii", wiki: "Turda Gorge" },
  { id: "landmark-salina-turda", wiki: "Turda Salt Mine" },
  { id: "landmark-salina-praid", wiki: "Praid" },
  { id: "landmark-salina-slanic", wiki: "Slănic" },
  { id: "landmark-mud-volcanoes", wiki: "Berca Mud Volcanoes" },
  { id: "landmark-sphinx-bucegi", wiki: "Sphinx (Bucegi Mountains)" },
  { id: "landmark-palace-parliament", wiki: "Palace of the Parliament" },
  { id: "landmark-merry-cemetery", wiki: "Merry Cemetery" },
  { id: "landmark-ateneul-roman", wiki: "Romanian Athenaeum" },
];

const USER_AGENT = "PlizioGeoPOIFetcher/1.0 (educational; contact: borota25@gmail.com)";

function fetchJson(urlStr) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const req = https.get(
      { hostname: url.hostname, path: url.pathname + url.search, headers: { "User-Agent": USER_AGENT, Accept: "application/json" } },
      (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          return fetchJson(new URL(res.headers.location, urlStr).toString()).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        const ch = [];
        res.on("data", (c) => ch.push(c));
        res.on("end", () => {
          try { resolve(JSON.parse(Buffer.concat(ch).toString("utf8"))); } catch (e) { reject(e); }
        });
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
      { hostname: url.hostname, path: url.pathname + url.search, headers: { "User-Agent": USER_AGENT } },
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

async function getWikipediaImageUrl(title) {
  const rest = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replaceAll(" ", "_"))}`;
  try {
    const j = await fetchJson(rest);
    const url = j.originalimage?.source || j.thumbnail?.source;
    if (url) return url;
  } catch { /* fallthrough */ }
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
    const image = sharp(buf, { failOn: "none" });
    const meta = await image.metadata();
    if ((meta.width || 0) < 200 || (meta.height || 0) < 200) {
      return { id: poi.id, status: "miss", reason: `low res ${meta.width}x${meta.height}` };
    }
    const pipeline = image.rotate();
    if ((meta.width || 0) > 1400) pipeline.resize({ width: 1200, withoutEnlargement: true });
    await pipeline.webp({ quality: 82 }).toFile(outPath);
    return { id: poi.id, status: "ok", reason: url.split("/").slice(-1)[0] };
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
    path.resolve("scripts/romania-pois-extra-report.json"),
    JSON.stringify(results, null, 2),
  );
}

main().catch((e) => { console.error(e); process.exit(1); });
