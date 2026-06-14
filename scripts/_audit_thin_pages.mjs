// Thin-page audit: for every ACTUALLY GENERATED POI page (_poi-url-index.json),
// gather richness signals from the deployed sidecars and classify thinness.
// Read-only, no writes. Run: node scripts/_audit_thin_pages.mjs
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const D = path.resolve(process.cwd(), "public", "data");
const J = (f) => JSON.parse(fs.readFileSync(path.join(D, f), "utf8"));
const lsSet = (dir, strip) => { try { return new Set(fs.readdirSync(path.join(D, dir)).filter(f => f.endsWith(strip)).map(f => f.slice(0, -strip.length))); } catch { return new Set(); } };

console.log("loading…");
const urlIndex = J("_poi-url-index.json");
const faqSet = new Set(Object.keys(J("poi-faqs.json")));
const yearlySet = new Set(Object.keys((() => { try { return J("poi-yearly-highlights.json"); } catch { return {}; } })()));
const pinfoSet = new Set(fs.readFileSync(path.join(D, "_pinfo_applied_ids.txt"), "utf8").split(/\r?\n/).map(s => s.trim()).filter(Boolean));
const citySet = lsSet("city-tips", ".json");
const itinSet = lsSet("itinerary", ".json");
const newsSet = lsSet("poi-news", ".json.gz");
const sightSet = lsSet("sights", ".json");
const imgSet = new Set(J("_image-manifest.json").map((f) => f.replace(/\.webp$/i, "")));

// id -> {image, type} from per-country slim
const meta = new Map();
for (const f of fs.readdirSync(path.join(D, "pois")).filter(f => f.endsWith(".json"))) {
  try { for (const p of (J(`pois/${f}`).pois || [])) if (p?.id) meta.set(p.id, { image: !!p.image, type: p.type || "?" }); } catch {}
}

// sidecar deep read: descAdv max-lang length + real sights count
function sidecar(id) {
  if (!sightSet.has(id)) return { da: 0, sights: 0 };
  try {
    const h = JSON.parse(fs.readFileSync(path.join(D, "sights", id + ".json"), "utf8"));
    let da = 0; const A = h.descriptionAdvanced || {};
    for (const l of ["de", "hu", "ro", "en"]) da = Math.max(da, (A[l] || "").length);
    let s = 0; const S = h.sights || {};
    for (const l of ["de", "hu", "ro", "en"]) s = Math.max(s, Array.isArray(S[l]) ? S[l].length : 0);
    return { da, sights: s };
  } catch { return { da: 0, sights: 0 }; }
}

const ids = Object.keys(urlIndex);
const byCountry = new Map(), byType = new Map();
const tot = { pages: ids.length, img: 0, descAdv: 0, sights: 0, faq: 0, pinfo: 0, city: 0, itin: 0, news: 0, yearly: 0 };
let critical = 0, thin = 0, ok = 0, orphans = 0;
const mapped = { ok: 0, thin: 0, critical: 0 };
const criticalByCountry = new Map();

const countryOf = (id) => { const u = urlIndex[id]; const url = u?.de || u?.en || u?.hu || u?.ro || Object.values(u || {})[0] || ""; return url.split("/").filter(Boolean)[1] || "?"; };

for (const id of ids) {
  const m = meta.get(id) || { image: false, type: "?" };
  const orphan = !meta.has(id);
  const { da, sights } = sidecar(id);
  const hasImg = m.image || imgSet.has(id), hasDA = da >= 400, hasSights = sights >= 1;
  const hasFaq = faqSet.has(id), hasPinfo = pinfoSet.has(id), hasCity = citySet.has(id);
  const hasItin = itinSet.has(id), hasNews = newsSet.has(id), hasYearly = yearlySet.has(id);
  if (hasImg) tot.img++; if (hasDA) tot.descAdv++; if (hasSights) tot.sights++;
  if (hasFaq) tot.faq++; if (hasPinfo) tot.pinfo++; if (hasCity) tot.city++;
  if (hasItin) tot.itin++; if (hasNews) tot.news++; if (hasYearly) tot.yearly++;

  // richness score: core signals weighted
  const core = (hasDA ? 1 : 0) + (hasSights ? 1 : 0) + (hasImg ? 1 : 0);
  const bonus = (hasFaq ? 1 : 0) + (hasPinfo ? 1 : 0) + (hasCity ? 1 : 0) + (hasItin ? 1 : 0) + (hasNews ? 1 : 0) + (hasYearly ? 1 : 0);
  let cls;
  if (core === 0 && bonus === 0) cls = "critical";            // basically empty
  else if (!hasImg && !hasSights) cls = "thin";               // AdSense gap: no image, no sights
  else if (core <= 1 && bonus <= 1) cls = "thin";
  else cls = "ok";
  if (cls === "critical") { critical++; criticalByCountry.set(countryOf(id), (criticalByCountry.get(countryOf(id)) || 0) + 1); }
  else if (cls === "thin") thin++; else ok++;
  if (orphan) orphans++; else mapped[cls]++;

  const c = countryOf(id);
  const cc = byCountry.get(c) || { n: 0, thin: 0 }; cc.n++; if (cls !== "ok") cc.thin++; byCountry.set(c, cc);
  const tt = byType.get(m.type) || { n: 0, thin: 0 }; tt.n++; if (cls !== "ok") tt.thin++; byType.set(m.type, tt);
}

const pct = (a, b) => (100 * a / b).toFixed(1) + "%";
console.log("\n===== THIN-PAGE AUDIT (generated pages = " + tot.pages + ") =====");
console.log("\n-- signal coverage --");
console.log(`image:            ${tot.img}  (${pct(tot.img, tot.pages)})`);
console.log(`descAdv ≥400:     ${tot.descAdv}  (${pct(tot.descAdv, tot.pages)})`);
console.log(`sights ≥1:        ${tot.sights}  (${pct(tot.sights, tot.pages)})`);
console.log(`faq:              ${tot.faq}  (${pct(tot.faq, tot.pages)})`);
console.log(`pinfo:            ${tot.pinfo}  (${pct(tot.pinfo, tot.pages)})`);
console.log(`cityinfo:         ${tot.city}  (${pct(tot.city, tot.pages)})`);
console.log(`itinerary(PGo):   ${tot.itin}  (${pct(tot.itin, tot.pages)})`);
console.log(`news:             ${tot.news}  (${pct(tot.news, tot.pages)})`);
console.log(`yearly events:    ${tot.yearly}  (${pct(tot.yearly, tot.pages)})`);
console.log("\n-- classification --");
console.log(`OK (rich):        ${ok}  (${pct(ok, tot.pages)})`);
console.log(`THIN:             ${thin}  (${pct(thin, tot.pages)})`);
console.log(`CRITICAL (empty): ${critical}  (${pct(critical, tot.pages)})`);
const mTot = mapped.ok + mapped.thin + mapped.critical;
console.log("\n-- excluding " + orphans + " ORPHAN pages (in url-index but NOT in any country map JSON) --");
console.log(`mapped pages:     ${mTot}`);
console.log(`  OK:             ${mapped.ok}  (${pct(mapped.ok, mTot)})`);
console.log(`  THIN:           ${mapped.thin}  (${pct(mapped.thin, mTot)})`);
console.log(`  CRITICAL:       ${mapped.critical}  (${pct(mapped.critical, mTot)})`);

console.log("\n-- top 25 countries by thin+critical pages --");
[...byCountry.entries()].sort((a, b) => b[1].thin - a[1].thin).slice(0, 25)
  .forEach(([c, v]) => console.log(`${String(v.thin).padStart(6)} / ${String(v.n).padStart(6)}  (${pct(v.thin, v.n).padStart(6)})  ${c}`));

console.log("\n-- thin by POI type (top 15) --");
[...byType.entries()].sort((a, b) => b[1].thin - a[1].thin).slice(0, 15)
  .forEach(([t, v]) => console.log(`${String(v.thin).padStart(6)} / ${String(v.n).padStart(6)}  (${pct(v.thin, v.n).padStart(6)})  ${t}`));

console.log("\n-- top 15 countries by CRITICAL (near-empty) pages --");
[...criticalByCountry.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15)
  .forEach(([c, n]) => console.log(`${String(n).padStart(6)}  ${c}`));
