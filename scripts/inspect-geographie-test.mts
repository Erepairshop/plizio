/**
 * Geographie test-generátor vizsgáló (K5-K8).
 *
 * Mit csinál:
 *  1. Regisztrálja a generátorokat és felépíti a TELJES kérdés-poolt nyelvenként/osztályonként.
 *  2. Kirak egy minta-tesztet (hogy lásd, mit dob fel a motor).
 *  3. Tartalmi ismétlődést keres:
 *       - azonos VÁLASZ több kérdésen belül egy témakörben (a fő "ismétlődik tartalmilag" jel)
 *       - majdnem azonos kérdés-törzs (token-átfedés)
 *       - pontos kérdés-string duplikátum
 *  4. Szimulál N valódi tesztet és megméri: hány %-ban kerül 1 tesztbe 2+ azonos válaszú kérdés.
 *  5. Heurisztikus nyelv-ellenőrzés a HU rövidítés-válaszokra.
 *
 * Futtatás:
 *   npx tsx scripts/inspect-geographie-test.mts                 # mind: K5-K8, hu, 10-es teszt
 *   npx tsx scripts/inspect-geographie-test.mts 5 hu 30         # K5, magyar, 30 kérdés
 *   npx tsx scripts/inspect-geographie-test.mts 5 de 10 compass_directions,map_symbols
 */

// tsx ezeket CJS-ként tölti, a named exportok a default alatt vannak → helper.
const pick_ = (m: any) => m?.default ?? m;
const reg = pick_(await import("../lib/geographieRegistration"));
void reg;
const c5 = pick_(await import("../lib/geographieCurriculum5"));
const c6 = pick_(await import("../lib/geographieCurriculum6"));
const c7 = pick_(await import("../lib/geographieCurriculum7"));
const c8 = pick_(await import("../lib/geographieCurriculum8"));
const { K5_CURRICULUM, getK5Questions } = c5;
const { K6_CURRICULUM, getK6Questions } = c6;
const { K7_CURRICULUM, getK7Questions } = c7;
const { K8_CURRICULUM, getK8Questions } = c8;
type GeographieTheme = { id: string; subtopics: { id: string }[] };

type AnyQ = {
  type: string;
  subtopic?: string;
  question: string;
  options?: string[];
  correct?: number;
  answer?: string | string[];
};

const GRADES: Record<string, { themes: GeographieTheme[]; get: (ids: string[], lang: string, n: number) => AnyQ[] }> = {
  "5": { themes: K5_CURRICULUM as GeographieTheme[], get: getK5Questions as any },
  "6": { themes: K6_CURRICULUM as GeographieTheme[], get: getK6Questions as any },
  "7": { themes: K7_CURRICULUM as GeographieTheme[], get: getK7Questions as any },
  "8": { themes: K8_CURRICULUM as GeographieTheme[], get: getK8Questions as any },
};

// ── argumentumok ─────────────────────────────────────────────
const argGrade = process.argv[2];                       // "5".."8" vagy üres = mind
const lang = process.argv[3] || "hu";
const count = parseInt(process.argv[4] || "10", 10);
const subFilter = process.argv[5] ? process.argv[5].split(",") : null;  // pl. "compass_directions,map_symbols"
const SIM_RUNS = 500;

function answerOf(q: AnyQ): string {
  if (q.type === "mcq" && q.options && typeof q.correct === "number") return q.options[q.correct] ?? "";
  if (q.answer) return Array.isArray(q.answer) ? q.answer[0] : q.answer;
  return "";
}
const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const stemTokens = (s: string) => new Set(norm(s).split(" ").filter((t) => t.length > 2));
function jaccard(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  return inter / (a.size + b.size - inter);
}

// A teljes pool felépítése: minden subtopic-ra a count-tól független, NAGY meríthető halmaz.
// A motor count-ot vág és dedupol, ezért közvetlenül sokszor hívjuk és egyesítjük.
function fullPool(grade: string, ids: string[]): AnyQ[] {
  const { get } = GRADES[grade];
  const seen = new Set<string>();
  const all: AnyQ[] = [];
  // 40 merítés bőven lefedi a teljes pool-t (a motor véletlen seeddel dolgozik)
  for (let i = 0; i < 40; i++) {
    for (const q of get(ids, lang, 999)) {
      if (seen.has(q.question)) continue;
      seen.add(q.question);
      all.push(q);
    }
  }
  return all;
}

function analyzeGrade(grade: string) {
  const { themes } = GRADES[grade];
  const allIds: string[] = [];
  for (const t of themes) for (const s of t.subtopics) allIds.push(s.id);
  const ids = subFilter ?? allIds;

  console.log("\n" + "═".repeat(70));
  console.log(`  K${grade}  |  nyelv: ${lang}  |  témakörök: ${ids.length}  |  teszt-méret: ${count}`);
  console.log("═".repeat(70));

  // ── 1. MINTA TESZT ─────────────────────────────────────────
  console.log(`\n── Minta teszt (${count} kérdés, ahogy a diák látja) ──`);
  const sample = GRADES[grade].get(ids, lang, count);
  sample.forEach((q, i) => {
    const a = answerOf(q);
    if (q.type === "mcq") {
      console.log(`${String(i + 1).padStart(2)}. [MCQ ${q.subtopic}] ${q.question}`);
      console.log(`     opciók: ${(q.options || []).join("  |  ")}   →  ✓ ${a}`);
    } else {
      console.log(`${String(i + 1).padStart(2)}. [BEÍR ${q.subtopic}] ${q.question}   →  ✓ ${a}`);
    }
  });

  // ── 2. TELJES POOL + tartalmi ismétlődés ───────────────────
  const pool = fullPool(grade, ids);
  console.log(`\n── Teljes pool: ${pool.length} egyedi kérdés (${ids.length} témakörből) ──`);

  // 2a. azonos válasz egy témakörön belül
  const bySubAns = new Map<string, AnyQ[]>();
  for (const q of pool) {
    const key = `${q.subtopic}|||${norm(answerOf(q))}`;
    if (!answerOf(q)) continue;
    (bySubAns.get(key) ?? bySubAns.set(key, []).get(key)!).push(q);
  }
  const ansClusters = [...bySubAns.entries()].filter(([, qs]) => qs.length > 1)
    .sort((a, b) => b[1].length - a[1].length);
  console.log(`\n  [A] Azonos VÁLASZ több kérdésen (témakörön belül): ${ansClusters.length} klaszter`);
  for (const [key, qs] of ansClusters.slice(0, 25)) {
    const [sub, ans] = key.split("|||");
    console.log(`   • ${sub}  →  „${answerOf(qs[0])}"  (${qs.length}x):`);
    for (const q of qs) console.log(`        - ${q.question}`);
  }
  if (ansClusters.length > 25) console.log(`   … +${ansClusters.length - 25} további`);

  // 2b. majdnem azonos kérdés-törzs (jaccard ≥ 0.6, akár eltérő válasz)
  const stemPairs: string[] = [];
  for (let i = 0; i < pool.length; i++) {
    for (let j = i + 1; j < pool.length; j++) {
      const sim = jaccard(stemTokens(pool[i].question), stemTokens(pool[j].question));
      if (sim >= 0.6) stemPairs.push(`   • (${sim.toFixed(2)}) „${pool[i].question}"  ≈  „${pool[j].question}"`);
    }
  }
  console.log(`\n  [B] Majdnem azonos kérdés-törzs (token-átfedés ≥ 0.6): ${stemPairs.length} pár`);
  stemPairs.slice(0, 20).forEach((l) => console.log(l));
  if (stemPairs.length > 20) console.log(`   … +${stemPairs.length - 20} további`);

  // 2c. üres / hiányzó válasz
  const empties = pool.filter((q) => !answerOf(q));
  if (empties.length) {
    console.log(`\n  [C] ÜRES VÁLASZ: ${empties.length} kérdés`);
    empties.slice(0, 10).forEach((q) => console.log(`   • ${q.question}`));
  }

  // 2d. HU rövidítés nyelv-heurisztika
  if (lang === "hu") {
    const badAbbr = pool.filter((q) => /rövidít/i.test(q.question) && /^[a-z]{1,3}$/i.test(answerOf(q)) && !/^(ny|é|d|k|ék|dk|énk|dny)$/i.test(answerOf(q)) && !/^(eu|de|gps)$/i.test(answerOf(q)));
    if (badAbbr.length) {
      console.log(`\n  [D] HU rövidítés, ami nem magyar jelölés (gyanús): ${badAbbr.length}`);
      badAbbr.forEach((q) => console.log(`   • ${q.question}  →  „${answerOf(q)}"`));
    }
  }

  // ── 3. SZIMULÁCIÓ: valódi tesztekben mennyi a látható ismétlés ──
  let testsWithDupAns = 0;
  let totalDupExtra = 0;
  for (let r = 0; r < SIM_RUNS; r++) {
    const test = GRADES[grade].get(ids, lang, count);
    const seen = new Map<string, number>();
    for (const q of test) {
      const a = norm(answerOf(q));
      if (!a) continue;
      seen.set(a, (seen.get(a) ?? 0) + 1);
    }
    const extra = [...seen.values()].reduce((s, n) => s + (n - 1), 0);
    if (extra > 0) testsWithDupAns++;
    totalDupExtra += extra;
  }
  console.log(`\n── Szimuláció (${SIM_RUNS} db ${count}-kérdéses teszt) ──`);
  console.log(`   azonos válaszú ismétlést tartalmazó tesztek: ${(100 * testsWithDupAns / SIM_RUNS).toFixed(1)}%`);
  console.log(`   átlag fölös (ismétlő) kérdés tesztenként:     ${(totalDupExtra / SIM_RUNS).toFixed(2)}`);
}

const grades = argGrade ? [argGrade] : ["5", "6", "7", "8"];
for (const g of grades) {
  if (!GRADES[g]) { console.error(`ismeretlen osztály: ${g}`); continue; }
  analyzeGrade(g);
}
console.log("\nKész.\n");
