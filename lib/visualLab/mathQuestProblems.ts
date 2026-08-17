export type MathQuestLang = "de" | "hu" | "ro" | "en";

export interface QuestProblem {
  prompt: string;
  answer: number;
  options: number[];
}

const mulberry32 = (seed: number) => () => {
  let value = seed += 0x6d2b79f5;
  value = Math.imul(value ^ value >>> 15, value | 1);
  value ^= value + Math.imul(value ^ value >>> 7, value | 61);
  return ((value ^ value >>> 14) >>> 0) / 4294967296;
};

const randomInt = (random: () => number, min: number, max: number) =>
  Math.floor(random() * (max - min + 1)) + min;

const makeOptions = (answer: number, random: () => number): number[] => {
  const spread = Math.max(1, Math.round(Math.abs(answer) * 0.12));
  const values = new Set<number>([answer]);
  let offset = 1;
  while (values.size < 3) {
    const candidate = Math.max(0, answer + (offset % 2 ? 1 : -1) * Math.ceil(offset / 2) * spread);
    values.add(candidate);
    offset += 1;
  }
  return [...values].sort(() => random() - 0.5);
};

export function generateQuestProblem(
  gradeInput: number,
  stageInput: number,
  index: number,
  lang: MathQuestLang,
): QuestProblem {
  const grade = Math.max(1, Math.min(8, Math.round(gradeInput || 1)));
  const stage = Math.max(1, Math.round(stageInput || 1));
  const random = mulberry32(grade * 100_000 + stage * 1_000 + index * 37 + 17);
  const tier = Math.min(10, stage);
  const ofWord = lang === "de" ? "von" : lang === "hu" ? "része" : lang === "ro" ? "din" : "of";
  let prompt = "";
  let answer = 0;

  if (grade === 1) {
    const cap = Math.min(20, 8 + tier * 2);
    const mode = index % 3;
    if (mode === 0) {
      const left = randomInt(random, 1, cap - 2);
      const right = randomInt(random, 1, cap - left);
      answer = left + right;
      prompt = `${left} + ${right} = ?`;
    } else if (mode === 1) {
      const whole = randomInt(random, 3, cap);
      const part = randomInt(random, 1, whole - 1);
      answer = whole - part;
      prompt = `${whole} − ${part} = ?`;
    } else {
      answer = randomInt(random, 1, Math.max(2, cap - 4));
      const known = randomInt(random, 1, cap - answer);
      prompt = `? + ${known} = ${answer + known}`;
    }
  } else if (grade === 2) {
    const mode = index % 4;
    if (mode === 0) {
      const left = randomInt(random, 10, 70);
      const right = randomInt(random, 2, 100 - left);
      answer = left + right;
      prompt = `${left} + ${right} = ?`;
    } else if (mode === 1) {
      const whole = randomInt(random, 20, 100);
      const part = randomInt(random, 2, whole - 1);
      answer = whole - part;
      prompt = `${whole} − ${part} = ?`;
    } else {
      const factor = [2, 5, 10][index % 3];
      const value = randomInt(random, 2, 10);
      answer = factor * value;
      prompt = `${factor} × ${value} = ?`;
    }
  } else if (grade === 3) {
    const factor = randomInt(random, 2, 12);
    const value = randomInt(random, 2, Math.min(12, 5 + tier));
    if (index % 2 === 0) {
      answer = factor * value;
      prompt = `${factor} × ${value} = ?`;
    } else {
      answer = value;
      prompt = `${factor * value} ÷ ${factor} = ?`;
    }
  } else if (grade === 4) {
    const a = randomInt(random, 4, 18);
    const b = randomInt(random, 2, 12);
    const c = randomInt(random, 2, 20 + tier * 2);
    answer = index % 2 === 0 ? a * b + c : a * b - c;
    if (answer < 0) {
      answer = a * b + c;
      prompt = `${a} × ${b} + ${c} = ?`;
    } else {
      prompt = `${a} × ${b} ${index % 2 === 0 ? "+" : "−"} ${c} = ?`;
    }
  } else if (grade === 5) {
    const denominator = [2, 4, 5, 10][index % 4];
    const numerator = randomInt(random, 1, denominator - 1);
    const multiplier = randomInt(random, 2, 8 + tier);
    const quantity = denominator * multiplier;
    answer = numerator * multiplier;
    prompt = `${numerator}/${denominator} ${ofWord} ${quantity} = ?`;
  } else if (grade === 6) {
    const percent = [10, 20, 25, 50][index % 4];
    const unit = randomInt(random, 2, 10 + tier);
    const quantity = unit * (100 / percent);
    answer = unit;
    prompt = `${percent}% ${ofWord} ${quantity} = ?`;
  } else if (grade === 7) {
    const factor = randomInt(random, 2, 8 + Math.floor(tier / 2));
    answer = randomInt(random, 2, 15 + tier);
    const offset = randomInt(random, 1, 12 + tier);
    prompt = `${factor}x + ${offset} = ${factor * answer + offset}, x = ?`;
  } else {
    if (index % 2 === 0) {
      const base = randomInt(random, 2, Math.min(12, 4 + tier));
      answer = base * base;
      prompt = `${base}² = ?`;
    } else {
      const factor = randomInt(random, 2, 10);
      answer = randomInt(random, 3, 18 + tier);
      const offset = randomInt(random, 2, 20);
      prompt = `${factor}(x + ${offset}) = ${factor * (answer + offset)}, x = ?`;
    }
  }

  return { prompt, answer, options: makeOptions(answer, random) };
}
