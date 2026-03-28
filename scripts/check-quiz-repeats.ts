/**
 * AstroDeutsch quiz ismétlés ellenőrző
 * Szimulálja az astro játékot N×, és megmutatja hol ismétlődnek a kérdések.
 *
 * Futtatás: npx tsx scripts/check-quiz-repeats.ts [runs] [pool-fájl]
 * Példa:    npx tsx scripts/check-quiz-repeats.ts 5 deutschK7
 *           npx tsx scripts/check-quiz-repeats.ts 3           (mind a 8 fájl)
 */

import { GENERATORS } from "../lib/deutschGenerators";
import { getRandomTopics } from "../lib/explorerUtils";
import type { PoolTopicDef } from "../lib/explorerPools/types";

const RUNS = parseInt(process.argv[2] || "3");
const FILTER = process.argv[3] || "";  // pl. "deutschK7" — ha üres, mind

// ─── Pool fájlok dinamikus betöltése ─────────────────────────────────────────

async function loadPools(file: string): Promise<Record<string, PoolTopicDef[]>> {
  const mod = await import(`../lib/explorerPools/${file}.ts`);
  const pools: Record<string, PoolTopicDef[]> = {};
  for (const [key, val] of Object.entries(mod)) {
    if (key.endsWith("_POOL") && Array.isArray(val)) {
      pools[key] = val as PoolTopicDef[];
    }
  }
  return pools;
}

// ─── Quiz kérdés generálás ────────────────────────────────────────────────────

function resolveQuiz(topic: PoolTopicDef): string {
  const q = topic.quiz;
  if ("generate" in q) {
    const gen = GENERATORS[q.generate];
    if (!gen) return `[ISMERETLEN GENERATOR: ${q.generate}]`;
    try {
      const result = gen();
      if (result.type === "mcq") return result.question;
    } catch (e) {
      return `[GENERATOR HIBA: ${q.generate}]`;
    }
    return `[NEM MCQ: ${q.generate}]`;
  }
  return q.question; // label key — elfogadható
}

// ─── Egy futtatás szimulálása ────────────────────────────────────────────────

function simulateRun(pool: PoolTopicDef[], poolSize: number): string[] {
  const selected = getRandomTopics(pool, Math.min(5, poolSize));
  return selected.map(resolveQuiz);
}

// ─── Ismétlés elemzés ────────────────────────────────────────────────────────

interface RepeatResult {
  poolName: string;
  poolSize: number;
  runs: string[][];
  withinRunRepeats: number;    // ugyanabban a futtatásban ismétlő kérdések
  acrossRunRepeats: number;    // különböző futtatások közt ismétlők
  details: string[];
}

function analyzeRepeats(poolName: string, pool: PoolTopicDef[], runs: number): RepeatResult {
  const poolSize = pool.length;
  const allRuns: string[][] = [];
  const details: string[] = [];

  for (let r = 0; r < runs; r++) {
    allRuns.push(simulateRun(pool, poolSize));
  }

  // Ismétlés egy futtatáson belül
  let withinRunRepeats = 0;
  allRuns.forEach((run, ri) => {
    const seen = new Set<string>();
    run.forEach(q => {
      if (seen.has(q)) {
        withinRunRepeats++;
        details.push(`  Run ${ri + 1}: ISMÉTLŐ KÉRDÉS: "${q.slice(0, 60)}"`);
      }
      seen.add(q);
    });
  });

  // Ismétlés futtatások között
  let acrossRunRepeats = 0;
  for (let i = 0; i < runs; i++) {
    for (let j = i + 1; j < runs; j++) {
      const setI = new Set(allRuns[i]);
      const common = allRuns[j].filter(q => setI.has(q));
      if (common.length > 0) {
        acrossRunRepeats += common.length;
        common.forEach(q => {
          details.push(`  Run ${i+1} ↔ Run ${j+1}: "${q.slice(0, 60)}"`);
        });
      }
    }
  }

  return { poolName, poolSize, runs: allRuns, withinRunRepeats, acrossRunRepeats, details };
}

// ─── Fő logika ────────────────────────────────────────────────────────────────

const POOL_FILES = [
  "deutschK1","deutschK2","deutschK3","deutschK4",
  "deutschK5","deutschK6","deutschK7","deutschK8",
];

async function main() {
  const files = FILTER ? POOL_FILES.filter(f => f.includes(FILTER)) : POOL_FILES;

  console.log(`\n🔍 Quiz ismétlés ellenőrzés — ${RUNS} futtatás / pool\n${"─".repeat(60)}`);

  let totalIssues = 0;

  for (const file of files) {
    const pools = await loadPools(file);
    console.log(`\n📁 ${file}.ts (${Object.keys(pools).length} pool)`);

    for (const [poolName, pool] of Object.entries(pools)) {
      const result = analyzeRepeats(poolName, pool, RUNS);
      const hasIssue = result.withinRunRepeats > 0 || result.acrossRunRepeats > 2;

      const icon = hasIssue ? "⚠️ " : "✅";
      const uniqueDetails = [...new Set(result.details)];

      console.log(
        `  ${icon} ${poolName.replace("_POOL","").padEnd(20)} ` +
        `pool: ${result.poolSize} topic | ` +
        `belső ismétlés: ${result.withinRunRepeats} | ` +
        `futtatások közt: ${result.acrossRunRepeats}`
      );

      if (hasIssue && uniqueDetails.length > 0) {
        uniqueDetails.slice(0, 4).forEach(d => console.log(`    ${d}`));
        if (uniqueDetails.length > 4) console.log(`    ... és még ${uniqueDetails.length - 4} eset`);
        totalIssues++;
      }

      // Pool méret figyelmeztetés
      if (pool.length <= 5) {
        console.log(`    ⚠️  TÚLKICSI POOL: ${pool.length} topic, de 5-öt kell választani → mindig ugyanaz!`);
        totalIssues++;
      } else if (pool.length < 10) {
        console.log(`    💡 Kis pool (${pool.length} topic) — érdemes bővíteni 15-20-ra`);
      }
    }
  }

  console.log(`\n${"─".repeat(60)}`);
  if (totalIssues === 0) {
    console.log(`✅ Nincs ismétlési probléma (${RUNS} futtatás alapján)`);
  } else {
    console.log(`⚠️  ${totalIssues} pool-ban van ismétlési probléma`);
  }
  console.log();
}

main().catch(console.error);
