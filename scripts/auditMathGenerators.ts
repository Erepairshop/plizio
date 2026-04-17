/* eslint-disable no-console */
// Lightweight audit for math generators.
// Goals:
// - options contain correctAnswer (when options are present)
// - options have no duplicates
// - simple arithmetic questions (e.g. "12 + 3 = ?") match correctAnswer

import {
  generateTopicQuestions,
  getDEThemes,
  getENThemes,
  getHUThemes,
  getROThemes,
  type ENThemeDef,
  type MathQuestion,
} from "../lib/mathCurriculum";

type CC = "HU" | "DE" | "RO" | "US";

const SAMPLE_PER_TOPIC = 120;

function isNumber(v: unknown): v is number {
  return typeof v === "number" && Number.isFinite(v);
}

function isString(v: unknown): v is string {
  return typeof v === "string";
}

function uniqKey(v: unknown): string {
  if (typeof v === "number") return `n:${Object.is(v, -0) ? "-0" : String(v)}`;
  if (typeof v === "string") return `s:${v}`;
  return `o:${JSON.stringify(v)}`;
}

function hasDuplicateOptions(options: Array<number | string>): boolean {
  const s = new Set<string>();
  for (const o of options) {
    const k = uniqKey(o);
    if (s.has(k)) return true;
    s.add(k);
  }
  return false;
}

function optionsContainCorrect(q: MathQuestion): boolean {
  if (!Array.isArray(q.options) || q.options.length === 0) return true;
  const correct = q.correctAnswer as unknown;

  if (isNumber(correct)) {
    return q.options.some(o => isNumber(o) && o === correct);
  }
  if (isString(correct)) {
    return q.options.some(o => isString(o) && o === correct);
  }
  return false;
}

type SimpleOp = "+" | "-" | "*" | "/";

function parseSimpleArithmetic(question: string): { a: number; b: number; op: SimpleOp } | null {
  const m = question
    .trim()
    .match(/^(-?\d+)\s*([+\-xX*×÷/:])\s*(-?\d+)\s*=\s*\?\s*$/);
  if (!m) return null;
  const a = Number(m[1]);
  const b = Number(m[3]);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;

  const raw = m[2];
  const op: SimpleOp =
    raw === "+" ? "+" :
    raw === "-" ? "-" :
    (raw === "×" || raw === "x" || raw === "X" || raw === "*") ? "*" :
    "/";

  return { a, b, op };
}

function evalSimple({ a, b, op }: { a: number; b: number; op: SimpleOp }): number | null {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return b === 0 ? null : a / b;
  return null;
}

function approxEqual(a: number, b: number): boolean {
  return Math.abs(a - b) <= 1e-9;
}

function getThemes(cc: CC, grade: number): ENThemeDef[] {
  if (cc === "DE") return getDEThemes(grade);
  if (cc === "RO") return getROThemes(grade);
  if (cc === "US") return getENThemes(grade);
  return getHUThemes(grade);
}

function fail(
  bucket: string[],
  ctx: { cc: CC; grade: number; topicKey: string; q: MathQuestion; why: string }
) {
  const opts = Array.isArray(ctx.q.options) ? JSON.stringify(ctx.q.options) : "null";
  bucket.push(
    `[${ctx.why}] cc=${ctx.cc} grade=${ctx.grade} topic=${ctx.topicKey} :: ` +
    `q="${ctx.q.question}" correct=${JSON.stringify(ctx.q.correctAnswer)} options=${opts}`
  );
}

async function main() {
  const problems: string[] = [];
  const ccs: CC[] = ["HU", "DE", "RO", "US"];

  let checked = 0;
  let generated = 0;

  for (const cc of ccs) {
    for (let grade = 1; grade <= 8; grade++) {
      const themes = getThemes(cc, grade);
      for (const theme of themes) {
        for (const topic of theme.topics) {
          let qs: MathQuestion[] = [];
          try {
            qs = generateTopicQuestions(grade, topic.key, cc, SAMPLE_PER_TOPIC);
          } catch (e) {
            problems.push(
              `[exception_generateTopicQuestions] cc=${cc} grade=${grade} topic=${topic.key} :: ${String(e)}`
            );
            continue;
          }
          generated += qs.length;

          for (const q of qs) {
            checked++;
            if (!q || typeof q.question !== "string" || q.question.trim().length === 0) {
              fail(problems, { cc, grade, topicKey: topic.key, q, why: "empty_question" });
              continue;
            }

            if (Array.isArray(q.options)) {
              if (hasDuplicateOptions(q.options as Array<number | string>)) {
                fail(problems, { cc, grade, topicKey: topic.key, q, why: "duplicate_options" });
              }
            }

            if (!optionsContainCorrect(q)) {
              fail(problems, { cc, grade, topicKey: topic.key, q, why: "correct_not_in_options" });
            }

            const parsed = parseSimpleArithmetic(q.question);
            if (parsed) {
              const expected = evalSimple(parsed);
              if (expected === null) continue;
              if (!isNumber(q.correctAnswer)) {
                fail(problems, { cc, grade, topicKey: topic.key, q, why: "arith_correct_not_number" });
                continue;
              }
              if (!approxEqual(expected, q.correctAnswer)) {
                fail(problems, { cc, grade, topicKey: topic.key, q, why: `arith_mismatch_expected_${expected}` });
              }
            }
          }
        }
      }
    }
  }

  console.log(`Audit finished. Generated=${generated} Checked=${checked} Problems=${problems.length}`);
  if (problems.length > 0) {
    console.log("\nFirst 80 problems:");
    for (const p of problems.slice(0, 80)) console.log(p);
    process.exitCode = 1;
  }
}

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
