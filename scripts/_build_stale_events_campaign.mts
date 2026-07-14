import fs from "node:fs";
import path from "node:path";

const loaderNs: any = await import("./_load-full-pois.ts");
const slugsNs: any = await import("../lib/seo/slugs.ts");
const loader = loaderNs.default ?? loaderNs;
const slugs = slugsNs.default ?? slugsNs;

const loadFullPois = loader.loadFullPois ?? loaderNs.loadFullPois;
const getCountryIdStrict = slugs.getCountryIdStrict ?? slugsNs.getCountryIdStrict;
const ISO2_TO_COUNTRY: Record<string, string> = slugs.ISO2_TO_COUNTRY ?? slugsNs.ISO2_TO_COUNTRY;

const CUTOFF = "2026-07-26";
const AGENT_COUNT = Number(process.argv.find((arg) => arg.startsWith("--agents="))?.split("=")[1] || 50);
const POIS_PER_AGENT = Number(process.argv.find((arg) => arg.startsWith("--pois="))?.split("=")[1] || 5);
const CONCURRENCY = Number(process.argv.find((arg) => arg.startsWith("--concurrency="))?.split("=")[1] || 5);
const DATA = path.resolve(process.cwd(), "public", "data");
const OUTPUT = path.join(DATA, "_stale_events_campaign.json");

if (!loadFullPois || !getCountryIdStrict || !ISO2_TO_COUNTRY) throw new Error("POI loader imports failed");
if (AGENT_COUNT < 1 || POIS_PER_AGENT < 1 || CONCURRENCY < 1) throw new Error("campaign sizes must be positive");

const EU27 = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE",
  "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
]);
const CITY_TYPES = new Set(["city", "town", "state-capital", "capital", "municipality"]);
const NON_CITY_ID = /(?:^|[-_])(district|landmark|palace|cathedral|old-town|statue|quarter|viertel|resuttana|wandsbek)(?:[-_]|$)|-bis-cities-v2$/i;
const countryToIso2: Record<string, string> = {};
for (const [iso2, country] of Object.entries(ISO2_TO_COUNTRY)) {
  if (!(country in countryToIso2)) countryToIso2[country] = iso2;
}

const highlights: Record<string, any[]> = JSON.parse(fs.readFileSync(path.join(DATA, "poi-yearly-highlights.json"), "utf8"));
const cityPopulation: Record<string, { pop?: number; tier?: number }> = JSON.parse(
  fs.readFileSync(path.join(DATA, "_city-population.json"), "utf8"),
);
const fullPois: any[] = await loadFullPois();

const staleCount = (id: string) => (highlights[id] || []).filter((event) => {
  const date = String(event?.date || "");
  return !/^\d{4}-\d{2}-\d{2}$/.test(date) || date < CUTOFF;
}).length;

const byId = new Map<string, any>();
for (const poi of fullPois) {
  if (!poi?.id || !poi.parent || !CITY_TYPES.has(poi.type)) continue;
  if (NON_CITY_ID.test(poi.id)) continue;
  const country = getCountryIdStrict(poi.parent);
  const iso2 = countryToIso2[country];
  const stale = staleCount(poi.id);
  if (!country || !EU27.has(iso2)) continue;

  const population = Number(poi.population) > 0
    ? Number(poi.population)
    : Number(cityPopulation[poi.id]?.pop || 0);
  const target = {
    id: poi.id,
    iso2,
    country,
    type: poi.type,
    name: {
      en: poi.name?.en,
      de: poi.name?.de,
      hu: poi.name?.hu,
      ro: poi.name?.ro,
    },
    coords: Array.isArray(poi.coords) ? poi.coords.slice(0, 2) : null,
    population,
    tier: cityPopulation[poi.id]?.tier ?? null,
    staleEvents: stale,
  };
  const current = byId.get(poi.id);
  if (!current || population > current.population) byId.set(poi.id, target);
}

// Remove district-like duplicates that inherited a large city's exact population.
const grouped = new Map<string, any[]>();
for (const target of byId.values()) {
  if (target.population <= 50_000) continue;
  const key = `${target.iso2}|${target.population}`;
  const group = grouped.get(key) || [];
  group.push(target);
  grouped.set(key, group);
}
const dropped = new Set<string>();
const canonicalScore = (target: any) => {
  let score = target.id.length * 10;
  if (target.id.startsWith("city-")) score -= 20;
  if (target.type === "capital" || target.type === "state-capital") score -= 10_000;
  return score;
};
for (const group of grouped.values()) {
  if (group.length < 2) continue;
  const canonical = [...group].sort((a, b) => canonicalScore(a) - canonicalScore(b))[0];
  for (const target of group) if (target.id !== canonical.id) dropped.add(target.id);
}

const targetCount = AGENT_COUNT * POIS_PER_AGENT;
const targets = [...byId.values()]
  .filter((target) => target.staleEvents > 0 && !dropped.has(target.id))
  .sort((a, b) => b.population - a.population || b.staleEvents - a.staleEvents || a.id.localeCompare(b.id))
  .slice(0, targetCount);

if (targets.length < targetCount) {
  throw new Error(`only ${targets.length} eligible stale EU city POIs found, need ${targetCount}`);
}

const jobs = Array.from({ length: AGENT_COUNT }, (_, index) => {
  const number = index + 1;
  return {
    id: `job-${String(number).padStart(2, "0")}`,
    wave: Math.floor(index / CONCURRENCY) + 1,
    status: "pending",
    output: `public/data/stale-events-campaign/job-${String(number).padStart(2, "0")}.json`,
    targets: targets.slice(index * POIS_PER_AGENT, (index + 1) * POIS_PER_AGENT),
  };
});

const campaign = {
  version: 1,
  createdAt: new Date().toISOString(),
  cutoff: CUTOFF,
  agentModel: "gpt-5.4",
  agentCount: AGENT_COUNT,
  poisPerAgent: POIS_PER_AGENT,
  concurrency: CONCURRENCY,
  waves: Math.ceil(AGENT_COUNT / CONCURRENCY),
  jobs,
};

fs.mkdirSync(path.join(DATA, "stale-events-campaign"), { recursive: true });
fs.writeFileSync(OUTPUT, JSON.stringify(campaign, null, 2) + "\n", "utf8");

const countryCounts: Record<string, number> = {};
for (const target of targets) countryCounts[target.iso2] = (countryCounts[target.iso2] || 0) + 1;
console.log(`campaign: ${AGENT_COUNT} agents x ${POIS_PER_AGENT} POIs = ${targets.length} POIs`);
console.log(`concurrency: ${CONCURRENCY} | waves: ${campaign.waves} | duplicate districts dropped: ${dropped.size}`);
console.log(`countries: ${Object.entries(countryCounts).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join(" ")}`);
console.log(`wrote ${OUTPUT}`);
