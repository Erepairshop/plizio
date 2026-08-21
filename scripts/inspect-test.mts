/**
 * Általános teszt-generátor vizsgáló a K5-K8 (és informatikánál K1-K8) mintájú tárgyakhoz.
 * Ugyanaz az elemzés, mint az inspect-geographie-test.mts, de subject-paraméterrel.
 *
 * Futtatás:
 *   npx tsx scripts/inspect-test.mts <subject> [nyelv=hu] [kérdésszám=30] [osztály]
 *   pl: npx tsx scripts/inspect-test.mts kemia hu 30
 *       npx tsx scripts/inspect-test.mts biologie de 30 7
 * subject: geographie | kemia | physik | biologie | ai | informatika
 */

const pick_ = (m) => (m && m.default) ? m.default : m;
const argSubject = process.argv[2];
const lang = process.argv[3] || "hu";
const count = parseInt(process.argv[4] || "30", 10);
const argGrade = process.argv[5] ? parseInt(process.argv[5], 10) : null;
const SIM_RUNS = 300;

// subject → { reg: side-effect importok, cur: (grade)=>[modul, curriculumExport, getFnExport], grades }
// sig: a getFn argumentum-sorrendje. "lang_mid"=(ids,lang,count), "lang_last"=(ids,count,lang), "no_lang"=(ids,count)
const SUBJECTS = {
  geographie:  { sig: "lang_mid",  reg: ["../lib/geographieRegistration"], grades: [5,6,7,8], cur: (g) => [`../lib/geographieCurriculum${g}`, `K${g}_CURRICULUM`, `getK${g}Questions`] },
  kemia:       { sig: "lang_last", reg: ["../lib/kemiaRegistration"],      grades: [5,6,7,8], cur: (g) => [`../lib/kemiaCurriculum${g}`,      `K${g}_CURRICULUM`, `getK${g}Questions`] },
  physik:      { sig: "lang_last", reg: ["../lib/physikRegistration"],     grades: [5,6,7,8], cur: (g) => [`../lib/physikCurriculum${g}`,     `K${g}_CURRICULUM`, `getK${g}Questions`] },
  biologie:    { sig: "no_lang",   reg: ["../lib/biologieGenerators5","../lib/biologieGenerators6","../lib/biologieGenerators7","../lib/biologieGenerators8"], grades: [5,6,7,8], cur: (g) => [`../lib/biologieCurriculum${g}`, `K${g}_CURRICULUM`, `getK${g}Questions`] },
  ai:          { sig: "lang_last", reg: [], grades: [5,6,7,8], cur: (g) => [`../lib/aiCurriculum${g}`, `AI_K${g}_CURRICULUM`, `getAIK${g}Questions`] },
  informatika: { sig: "no_lang",   reg: [], grades: [1,2,3,4,5,6,7,8], cur: (g) => [`../lib/informatikaCurriculum${g}`, `INFO_K${g}_CURRICULUM`, `getInfoK${g}Questions`] },
  // grade-first tárgyak: egy modul, egy getFn(grade, ids, count[, country]), a curriculum egy Record<grade, themes[]>.
  deutsch:     { gradeFirst: true, mod: "../lib/deutschCurriculum",    curName: "DEUTSCH_CURRICULUM",    fnName: "getDeutschQuestions" },
  english:     { gradeFirst: true, mod: "../lib/englishCurriculum",    curName: "ENGLISH_CURRICULUM",    fnName: "getEnglishQuestions" },
  romanian:    { gradeFirst: true, mod: "../lib/romanianCurriculum",   curName: "ROMANIAN_CURRICULUM",   fnName: "getRomanianQuestions" },
  sachkunde:   { gradeFirst: true, mod: "../lib/sachkundeCurriculum",  curName: "SACHKUNDE_CURRICULUM",  fnName: "getSachkundeQuestions" },
  geschichte:  { gradeFirst: true, mod: "../lib/geschichteCurriculum", curName: "GESCHICHTE_CURRICULUM", fnName: "getGeschichteQuestions" },
};

if (!argSubject || !SUBJECTS[argSubject]) {
  console.error("subject kell: " + Object.keys(SUBJECTS).join(" | "));
  process.exit(1);
}
const cfg = SUBJECTS[argSubject];

// regisztráció (generátorok bekötése)
for (const r of (cfg.reg || [])) await import(r);

const norm = (s) => (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const stemTokens = (s) => new Set(norm(s).split(" ").filter((t) => t.length > 2));
function jaccard(a, b) { if (!a.size || !b.size) return 0; let i = 0; for (const t of a) if (b.has(t)) i++; return i / (a.size + b.size - i); }
function answerOf(q) {
  if (q.type === "mcq" && Array.isArray(q.options) && typeof q.correct === "number") return q.options[q.correct] ?? "";
  if (q.answer != null) return Array.isArray(q.answer) ? (q.answer[0] ?? "") : String(q.answer);
  return "";
}

async function loadGrade(g) {
  if (cfg.gradeFirst) {
    const m = pick_(await import(cfg.mod));
    const cur = m[cfg.curName] || {};
    const fn = m[cfg.fnName];
    return { themes: cur[g] || [], get: (ids, n) => fn(g, ids, n, lang.toUpperCase()) };
  }
  const [mod, curName, fnName] = cfg.cur(g);
  const m = pick_(await import(mod));
  return { themes: m[curName], get: m[fnName] };
}

// szignatúra-helyes hívás
function callGet(getFn, ids, n) {
  if (cfg.gradeFirst) return getFn(ids, n); // grade már bekötve a closure-ben
  if (cfg.sig === "lang_mid") return getFn(ids, lang, n);
  if (cfg.sig === "lang_last") return getFn(ids, n, lang);
  return getFn(ids, n); // no_lang
}

async function resolveGrades() {
  if (cfg.grades) return cfg.grades;
  if (cfg.gradeFirst) {
    const m = pick_(await import(cfg.mod));
    return Object.keys(m[cfg.curName] || {}).map(Number).filter((x) => !isNaN(x)).sort((a, b) => a - b);
  }
  return [5, 6, 7, 8];
}

function fullPool(getFn, ids) {
  const seen = new Set(), all = [];
  for (let i = 0; i < 40; i++) for (const q of callGet(getFn, ids, 999)) { if (!seen.has(q.question)) { seen.add(q.question); all.push(q); } }
  return all;
}

async function analyzeGrade(g) {
  let themes, get;
  try { ({ themes, get } = await loadGrade(g)); }
  catch (e) { console.log(`\n  K${g}: BETÖLTÉSI HIBA — ${e.message}`); return; }
  if (!Array.isArray(themes) || typeof get !== "function") { console.log(`\n  K${g}: nincs curriculum/getFn`); return; }

  const ids = [];
  for (const t of themes) for (const s of (t.subtopics || [])) ids.push(s.id);

  console.log("\n" + "═".repeat(70));
  console.log(`  ${argSubject.toUpperCase()} K${g}  |  ${lang}  |  témakör: ${ids.length}  |  teszt: ${count}`);
  console.log("═".repeat(70));

  const sample = callGet(get, ids, Math.min(count, 12));
  console.log(`\n── Minta (első ${sample.length}) ──`);
  sample.forEach((q, i) => {
    const a = answerOf(q);
    if (q.type === "mcq") console.log(`${String(i + 1).padStart(2)}. [MCQ ${q.subtopic}] ${q.question}\n     ${(q.options || []).join(" | ")}  → ✓ ${a}`);
    else console.log(`${String(i + 1).padStart(2)}. [BEÍR ${q.subtopic}] ${q.question}  → ✓ ${a}`);
  });

  const pool = fullPool(get, ids);
  console.log(`\n── Teljes pool: ${pool.length} egyedi kérdés ──`);
  if (!pool.length) { console.log("  ⚠ ÜRES POOL (nincs regisztrált generátor / kérdés?)"); return; }

  // [A] azonos válasz egy témakörön belül
  const bySubAns = new Map();
  for (const q of pool) { const a = answerOf(q); if (!a) continue; const k = `${q.subtopic}|||${norm(a)}`; (bySubAns.get(k) || bySubAns.set(k, []).get(k)).push(q); }
  const clusters = [...bySubAns.entries()].filter(([, qs]) => qs.length > 2).sort((a, b) => b[1].length - a[1].length);
  console.log(`\n  [A] Azonos válasz ≥3x egy témakörben: ${clusters.length} klaszter`);
  for (const [k, qs] of clusters.slice(0, 12)) console.log(`   • ${k.split("|||")[0]} → „${answerOf(qs[0])}" (${qs.length}x)`);

  // [B] majdnem azonos kérdés-törzs
  let stem = 0; const stemEx = [];
  for (let i = 0; i < pool.length; i++) for (let j = i + 1; j < pool.length; j++) {
    if (jaccard(stemTokens(pool[i].question), stemTokens(pool[j].question)) >= 0.7) { stem++; if (stemEx.length < 10) stemEx.push(`   • „${pool[i].question}" ≈ „${pool[j].question}"`); }
  }
  console.log(`\n  [B] Majdnem azonos kérdés-törzs (≥0.7): ${stem} pár`);
  stemEx.forEach((l) => console.log(l));

  // [C] üres válasz
  const empt = pool.filter((q) => !answerOf(q));
  console.log(`\n  [C] Üres válasz: ${empt.length}`);
  empt.slice(0, 8).forEach((q) => console.log(`   • ${q.question}`));

  // [E] MCQ valódi hiba: LITERÁL duplikált opció, kevés opció, vagy helyes válasz hiányzik.
  // (Nyers string-összevetés, hogy a képletekben lévő ×/÷/− ne adjon hamis duplikátumot.)
  const mcqBugs = [];
  for (const q of pool) {
    if (q.type !== "mcq" || !Array.isArray(q.options)) continue;
    const opts = q.options.map((o) => String(o).trim());
    const uniq = new Set(opts);
    const correct = String(answerOf(q)).trim();
    if (uniq.size < opts.length) mcqBugs.push(`   • duplikált opció: „${q.question}" [${opts.join(" | ")}]`);
    else if (opts.length < 2) mcqBugs.push(`   • ${opts.length} opció (degenerált): „${q.question}" [${opts.join(" | ")}]`);
    else if (correct && !opts.includes(correct)) mcqBugs.push(`   • helyes válasz nincs az opciók közt: „${q.question}"`);
  }
  console.log(`\n  [E] MCQ szerkezeti hiba: ${mcqBugs.length}`);
  mcqBugs.slice(0, 15).forEach((l) => console.log(l));

  // szimuláció
  let dupTests = 0, extra = 0;
  for (let r = 0; r < SIM_RUNS; r++) {
    const t = callGet(get, ids, count); const seen = new Map();
    for (const q of t) { const a = norm(answerOf(q)); if (!a) continue; seen.set(a, (seen.get(a) || 0) + 1); }
    const e = [...seen.values()].reduce((s, n) => s + (n - 1), 0);
    if (e > 0) dupTests++; extra += e;
  }
  console.log(`\n── Szimuláció (${SIM_RUNS}× ${count}-kérdés) ──`);
  console.log(`   ismétlést tartalmazó teszt: ${(100 * dupTests / SIM_RUNS).toFixed(1)}%  |  átlag fölös: ${(extra / SIM_RUNS).toFixed(2)}`);
}

const grades = argGrade ? [argGrade] : await resolveGrades();
console.log(`\n###### ${argSubject.toUpperCase()} ######`);
for (const g of grades) await analyzeGrade(g);
console.log("\nKész.\n");
