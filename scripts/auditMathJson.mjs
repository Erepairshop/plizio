/* eslint-disable no-console */
import fs from "node:fs";
import path from "node:path";

const BASE = path.join(process.cwd(), "data", "mathematics");

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.isFile() && ent.name.endsWith(".json")) out.push(p);
  }
  return out;
}

function uniqKey(v) {
  if (typeof v === "number") return `n:${Object.is(v, -0) ? "-0" : String(v)}`;
  if (typeof v === "string") return `s:${v}`;
  return `o:${JSON.stringify(v)}`;
}

function hasDup(arr) {
  const s = new Set();
  for (const v of arr) {
    const k = uniqKey(v);
    if (s.has(k)) return true;
    s.add(k);
  }
  return false;
}

function parseSimpleBinaryOpFromQuestion(q) {
  // Only validate the most basic arithmetic prompts with ONE operator and TWO integers,
  // e.g. "Wie viel ist 125 + 234?" or "Wie viel ist 48 ÷ 6?".
  // Skip:
  // - fractions ("/" in text)
  // - comparisons ("___", "<", ">", "=" prompts)
  // - order of operations / parentheses (multiple operators, brackets)
  const s = String(q);
  const lower = s.toLowerCase();
  if (s.includes("/")) return null;
  if (s.includes("___") || lower.includes("zeichen passt")) return null;
  if (s.includes("(") || s.includes(")")) return null;

  const ops = s.match(/[+\-×÷]/g) ?? [];
  if (ops.length !== 1) return null;

  const m = s.match(/\b(\d+)\s*([+\-×÷])\s*(\d+)\b/);
  if (!m) return null;
  const a = Number(m[1]);
  const b = Number(m[3]);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
  const raw = m[2];
  const op = raw === "+" ? "+" : raw === "-" ? "-" : raw === "×" ? "*" : "/";
  return { a, b, op };
}

function evalOp({ a, b, op }) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return b === 0 ? null : a / b;
  return null;
}

function approxEqual(a, b) {
  return Math.abs(a - b) <= 1e-9;
}

function main() {
  const files = walk(BASE);
  const problems = [];
  let taskCount = 0;

  for (const file of files) {
    let json;
    try {
      json = JSON.parse(fs.readFileSync(file, "utf8"));
    } catch (e) {
      problems.push(`[json_parse] ${file} :: ${String(e)}`);
      continue;
    }

    const tasks = Array.isArray(json?.tasks) ? json.tasks : null;
    if (!tasks) continue;

    for (const t of tasks) {
      taskCount++;

      if (!t || typeof t !== "object") {
        problems.push(`[task_not_object] ${file}`);
        continue;
      }

      if (t.type === "multiple-choice") {
        if (!Array.isArray(t.options) || t.options.length === 0) {
          problems.push(`[mcq_missing_options] ${file} task=${t.id ?? "?"}`);
          continue;
        }
        if (typeof t.correct !== "number") {
          problems.push(`[mcq_missing_correct_index] ${file} task=${t.id ?? "?"}`);
          continue;
        }
        if (t.correct < 0 || t.correct >= t.options.length) {
          problems.push(`[mcq_correct_oob] ${file} task=${t.id ?? "?"} correct=${t.correct} optionsLen=${t.options.length}`);
          continue;
        }
        if (hasDup(t.options)) {
          problems.push(`[mcq_duplicate_options] ${file} task=${t.id ?? "?"} options=${JSON.stringify(t.options)}`);
        }

        const parsed = parseSimpleBinaryOpFromQuestion(t.question);
        if (parsed) {
          const expected = evalOp(parsed);
          if (expected !== null) {
            const correctOpt = t.options[t.correct];
            const correctNum = typeof correctOpt === "number" ? correctOpt : Number(correctOpt);
            // Only judge if the correct option is actually numeric.
            if (Number.isFinite(correctNum) && !approxEqual(expected, correctNum)) {
              problems.push(
                `[mcq_arith_mismatch] ${file} task=${t.id ?? "?"} q="${t.question}" expected=${expected} correctOpt=${JSON.stringify(correctOpt)}`
              );
            }
          }
        }
      }
    }
  }

  console.log(`Math JSON audit finished. Files=${files.length} Tasks=${taskCount} Problems=${problems.length}`);
  if (problems.length) {
    console.log("\nFirst 120 problems:");
    for (const p of problems.slice(0, 120)) console.log(p);
    process.exitCode = 1;
  }
}

main();
