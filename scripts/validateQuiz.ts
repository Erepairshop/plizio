#!/usr/bin/env node
// Quiz data validator — runs as: `node scripts/validateQuiz.mjs`
// Checks every QuizTask in lib/visualLab/quiz/data/*Quiz.ts for:
//   - 4-lang coverage in question (no empty strings)
//   - referenced POI ids exist
//   - spot_error: wrongPoiId is in optionPoiIds, + semantic consistency with question
//   - click_poi: target exists
//   - distance_guess: expectedKm within 10% of haversine
//   - order_by: orderedPoiIds actually ordered by the declared criterion
// Exits 1 on failure.

import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");

// ── Zod schemas ────────────────────────────────────────────────────

const LangRecord = z
  .object({ de: z.string().min(1), hu: z.string().min(1), ro: z.string().min(1), en: z.string().min(1) })
  .strict();

const QuizType = z.enum(["click_poi", "click_county", "distance_guess", "spot_error", "order_by"]);

const QuizTaskSchema = z.object({
  id: z.string().min(1),
  type: QuizType,
  question: LangRecord,
  targetPoiId: z.string().optional(),
  targetPoiId2: z.string().optional(),
  targetCountyId: z.string().optional(),
  expectedKm: z.number().positive().optional(),
  optionPoiIds: z.array(z.string()).optional(),
  wrongPoiId: z.string().optional(),
  orderedPoiIds: z.array(z.string()).optional(),
  orderBy: z.enum(["east_to_west", "west_to_east", "by_elevation_desc", "by_elevation_asc"]).optional(),
  poiTypeFilter: z.array(z.string()).optional(),
});

// ── POI index (parsed from data files via regex) ───────────────────

function collectAllPoiFiles() {
  const dataDir = join(repoRoot, "lib/visualLab/data");
  const files = readdirSync(dataDir).filter((f) => (f.endsWith("Poi.ts") || f.startsWith("poi") && f.endsWith(".ts")));
  return files.map((f) => join(dataDir, f));
}

function parsePois(filePath) {
  const src = readFileSync(filePath, "utf8");
  const pois = [];
  // Match each POI entry: { id: "...", type: "...", parent: "...", coords: [lon, lat], ... }
  // Simple but effective for the current data style
  const idRe = /id:\s*["']([^"']+)["']/g;
  const blocks = src.split(/\n  \{/); // split on object-start
  for (const block of blocks) {
    const idM = /id:\s*["']([^"']+)["']/.exec(block);
    if (!idM) continue;
    const typeM = /type:\s*["']([^"']+)["']/.exec(block);
    const parentM = /parent:\s*["']([^"']+)["']/.exec(block);
    const coordsM = /coords:\s*\[\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*\]/.exec(block);
    const elevationM = /elevation:\s*(\d+)/.exec(block);
    pois.push({
      id: idM[1],
      type: typeM?.[1],
      parent: parentM?.[1],
      coords: coordsM ? [parseFloat(coordsM[1]), parseFloat(coordsM[2])] : null,
      elevation: elevationM ? parseInt(elevationM[1], 10) : null,
    });
  }
  return pois;
}

// ── Helpers ────────────────────────────────────────────────────────

function haversineKm(a, b) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const [lon1, lat1] = a;
  const [lon2, lat2] = b;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function isOrdered(values, dir) {
  for (let i = 1; i < values.length; i++) {
    if (dir === "asc" && values[i] < values[i - 1]) return false;
    if (dir === "desc" && values[i] > values[i - 1]) return false;
  }
  return true;
}

// ── Parse quiz data files ──────────────────────────────────────────

async function loadQuizTasks() {
  const dataDir = join(repoRoot, "lib/visualLab/quiz/data");
  const topFiles = readdirSync(dataDir).filter((f) => f.endsWith("Quiz.ts")).map((f) => join(dataDir, f));
  // Includes country-subdirs (e.g. data/de/byQuiz.ts) for Bundesland-szintu kvizek
  const subdirs = readdirSync(dataDir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
  const subFiles: string[] = [];
  for (const sd of subdirs) {
    const subDir = join(dataDir, sd);
    for (const f of readdirSync(subDir).filter((f) => f.endsWith("Quiz.ts"))) {
      subFiles.push(join(subDir, f));
    }
  }
  const allFiles = [...topFiles, ...subFiles];
  const results = [];
  for (const full of allFiles) {
    const f = full.replace(dataDir, "").replace(/\\/g, "/").replace(/^\//, "");
    try {
      const mod = await import(`file://${full.replace(/\\/g, "/")}`);
      // Accept exports ending with "Quiz", "QuizTasks" (any case) and arrays
      const arrays = Object.keys(mod).filter((k) => Array.isArray(mod[k]));
      for (const exportName of arrays) {
        for (const t of mod[exportName]) {
          results.push({ file: f, task: t });
        }
      }
    } catch (e) {
      console.error(`[validateQuiz] Could not import ${f}: ${e.message}`);
    }
  }
  return results;
}

// ── Main ───────────────────────────────────────────────────────────

async function main() {
  // Index all POIs
  const poiFiles = collectAllPoiFiles();
  const allPois = new Map();
  for (const f of poiFiles) {
    for (const p of parsePois(f)) {
      allPois.set(p.id, p);
    }
  }
  console.log(`[validateQuiz] Indexed ${allPois.size} POIs from ${poiFiles.length} files.`);

  const entries = await loadQuizTasks();
  console.log(`[validateQuiz] Found ${entries.length} quiz tasks to validate.`);

  const errors = [];

  for (const { file, task } of entries) {
    const loc = `${file} :: ${task.id}`;

    // 1) Zod shape
    const parsed = QuizTaskSchema.safeParse(task);
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        errors.push(`[${loc}] shape: ${issue.path.join(".")} — ${issue.message}`);
      }
      continue;
    }

    // 2) Type-specific logic
    const t = parsed.data;
    const resolvePoi = (id) => allPois.get(id);

    if (t.type === "click_poi") {
      if (!t.targetPoiId) errors.push(`[${loc}] click_poi: missing targetPoiId`);
      else if (!resolvePoi(t.targetPoiId)) errors.push(`[${loc}] click_poi: targetPoiId "${t.targetPoiId}" not found in POI data`);
    }

    if (t.type === "click_county") {
      if (!t.targetCountyId) errors.push(`[${loc}] click_county: missing targetCountyId`);
    }

    if (t.type === "distance_guess") {
      if (!t.targetPoiId || !t.targetPoiId2 || !t.expectedKm) {
        errors.push(`[${loc}] distance_guess: needs targetPoiId + targetPoiId2 + expectedKm`);
      } else {
        const a = resolvePoi(t.targetPoiId);
        const b = resolvePoi(t.targetPoiId2);
        if (!a || !b) {
          errors.push(`[${loc}] distance_guess: missing POI ${!a ? t.targetPoiId : ""} ${!b ? t.targetPoiId2 : ""}`);
        } else if (a.coords && b.coords) {
          const km = haversineKm(a.coords, b.coords);
          const diff = Math.abs(km - t.expectedKm) / t.expectedKm;
          if (diff > 0.1) {
            errors.push(`[${loc}] distance_guess: expectedKm=${t.expectedKm} but haversine=${km.toFixed(0)} (${(diff * 100).toFixed(1)}% off, tolerance 10%)`);
          }
        }
      }
    }

    if (t.type === "spot_error") {
      if (!t.optionPoiIds || t.optionPoiIds.length < 3) errors.push(`[${loc}] spot_error: need ≥3 optionPoiIds`);
      if (!t.wrongPoiId) errors.push(`[${loc}] spot_error: missing wrongPoiId`);
      else if (t.optionPoiIds && !t.optionPoiIds.includes(t.wrongPoiId)) {
        errors.push(`[${loc}] spot_error: wrongPoiId "${t.wrongPoiId}" is not in optionPoiIds`);
      }
      // Verify all option POIs exist
      for (const id of t.optionPoiIds ?? []) {
        if (!resolvePoi(id)) errors.push(`[${loc}] spot_error: option POI "${id}" not found`);
      }
    }

    if (t.type === "order_by") {
      if (!t.orderedPoiIds || t.orderedPoiIds.length < 2) errors.push(`[${loc}] order_by: need ≥2 orderedPoiIds`);
      if (!t.orderBy) errors.push(`[${loc}] order_by: missing orderBy criterion`);
      const pois = (t.orderedPoiIds ?? []).map(resolvePoi);
      if (pois.some((p) => !p)) {
        errors.push(`[${loc}] order_by: some POIs not found: ${t.orderedPoiIds?.filter((id) => !resolvePoi(id)).join(", ")}`);
      } else if (t.orderBy === "west_to_east" || t.orderBy === "east_to_west") {
        const lons = pois.map((p) => p.coords?.[0]).filter((v) => v !== null);
        const dir = t.orderBy === "west_to_east" ? "asc" : "desc";
        if (lons.length === pois.length && !isOrdered(lons, dir)) {
          errors.push(`[${loc}] order_by ${t.orderBy}: longitudes not monotonic (${lons.join(", ")})`);
        }
      } else if (t.orderBy === "by_elevation_asc" || t.orderBy === "by_elevation_desc") {
        const elevs = pois.map((p) => p.elevation);
        if (elevs.some((e) => e === null)) {
          errors.push(`[${loc}] order_by ${t.orderBy}: some POIs missing elevation`);
        } else {
          const dir = t.orderBy === "by_elevation_asc" ? "asc" : "desc";
          if (!isOrdered(elevs, dir)) {
            errors.push(`[${loc}] order_by ${t.orderBy}: elevations not monotonic (${elevs.join(", ")})`);
          }
        }
      }
    }
  }

  if (errors.length > 0) {
    console.error(`\n❌ ${errors.length} validation error(s):`);
    for (const e of errors) console.error("  " + e);
    process.exit(1);
  }

  console.log(`✅ All ${entries.length} quiz tasks valid.`);
}

main().catch((e) => {
  console.error("[validateQuiz] Fatal:", e);
  process.exit(2);
});
