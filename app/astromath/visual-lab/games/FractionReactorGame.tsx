"use client";

import React, { useMemo, useRef, useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";
import type { Language } from "@/components/i18n/LocalizedText";
import { MathLevelBar, useMathGameProgress } from "@/components/visual-lab/MathGameProgress";
import type { MathDifficulty } from "@/lib/visualLab/mathCurriculum";

interface Props {
  grade: number;
  lang: Language;
  onDone?: (score: number) => void;
}

type Fraction = { num: number; den: number };
type QuestionKind = "visual" | "equivalent" | "compare" | "operation" | "quantity" | "conversion";
type FractionOption = { key: string; label?: string; fraction?: Fraction; visual?: "pie" | "bar" };

interface FractionQuestion {
  kind: QuestionKind;
  prompt: string;
  fractions: Fraction[];
  operator?: string;
  quantity?: number;
  answerKey: string;
  options: FractionOption[];
}

const COPY = {
  en: {
    juniorTitle: "Fraction Workshop", missionTitle: "Fraction Reactor", labTitle: "Fraction Lab",
    score: "Score", round: "Task", next: "Next", again: "Continue learning", done: "Level complete!", practice: "Round complete",
    visual: "Which picture represents {fraction}?", equivalent: "Which fraction has the same value as {fraction}?",
    compare: "Which sign belongs between the fractions?", operation: "Calculate the result.", quantity: "How much is {fraction} of {quantity}?",
    conversion: "Which value is equal to {fraction}?", of: "of",
  },
  de: {
    juniorTitle: "Bruch-Werkstatt", missionTitle: "Bruchreaktor", labTitle: "Bruchlabor",
    score: "Punkte", round: "Aufgabe", next: "Weiter", again: "Weiterlernen", done: "Level geschafft!", practice: "Runde beendet",
    visual: "Welches Bild zeigt {fraction}?", equivalent: "Welcher Bruch ist gleichwertig mit {fraction}?",
    compare: "Welches Zeichen gehört zwischen die Brüche?", operation: "Berechne das Ergebnis.", quantity: "Wie viel sind {fraction} von {quantity}?",
    conversion: "Welcher Wert entspricht {fraction}?", of: "von",
  },
  hu: {
    juniorTitle: "Törtműhely", missionTitle: "Törtreaktor", labTitle: "Törtlabor",
    score: "Pont", round: "Feladat", next: "Tovább", again: "Tanulás folytatása", done: "Szint teljesítve!", practice: "A kör véget ért",
    visual: "Melyik ábra mutatja ezt: {fraction}?", equivalent: "Melyik tört egyenértékű ezzel: {fraction}?",
    compare: "Melyik jel illik a két tört közé?", operation: "Számold ki az eredményt.", quantity: "Mennyi {quantity} darab {fraction} része?",
    conversion: "Melyik érték egyenlő ezzel: {fraction}?", of: "része",
  },
  ro: {
    juniorTitle: "Atelierul Fracțiilor", missionTitle: "Reactorul de Fracții", labTitle: "Laborator de Fracții",
    score: "Scor", round: "Sarcina", next: "Înainte", again: "Continuă să înveți", done: "Nivel complet!", practice: "Rundă încheiată",
    visual: "Care imagine reprezintă {fraction}?", equivalent: "Care fracție este echivalentă cu {fraction}?",
    compare: "Ce semn se potrivește între fracții?", operation: "Calculează rezultatul.", quantity: "Cât reprezintă {fraction} din {quantity}?",
    conversion: "Ce valoare este egală cu {fraction}?", of: "din",
  },
};

const gcd = (a: number, b: number): number => b === 0 ? Math.abs(a) : gcd(b, a % b);
const simplify = (fraction: Fraction): Fraction => {
  const divisor = gcd(fraction.num, fraction.den);
  return { num: fraction.num / divisor, den: fraction.den / divisor };
};
const equivalent = (left: Fraction, right: Fraction) => left.num * right.den === right.num * left.den;
const fractionText = (fraction: Fraction) => `${fraction.num}/${fraction.den}`;
const replace = (template: string, values: Record<string, string | number>) => Object.entries(values)
  .reduce((text, [key, value]) => text.replace(`{${key}}`, String(value)), template);

function shuffled<T>(values: T[]): T[] {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

export const generateFraction = (_grade: number, difficulty: MathDifficulty): Fraction => {
  const den = 2 + Math.floor(Math.random() * Math.max(1, difficulty.fractionMaxDenominator - 1));
  const num = 1 + Math.floor(Math.random() * (den - 1));
  return simplify({ num, den });
};

const fractionDistractors = (correctInput: Fraction, count: number): FractionOption[] => {
  const correct = simplify(correctInput);
  const options: FractionOption[] = [{ key: "correct", fraction: correct, label: fractionText(correct) }];
  let offset = 1;
  while (options.length < count) {
    const candidate = simplify({ num: Math.max(1, correct.num + (offset % 2 ? 1 : -1) * Math.ceil(offset / 2)), den: Math.max(2, correct.den + (offset % 3 === 0 ? 1 : 0)) });
    if (!equivalent(candidate, correct) && !options.some((option) => option.fraction && equivalent(option.fraction, candidate))) {
      options.push({ key: `wrong-${offset}`, fraction: candidate, label: fractionText(candidate) });
    }
    offset += 1;
  }
  return shuffled(options);
};

export function generateFractionQuestion(grade: number, difficulty: MathDifficulty, lang: Language): FractionQuestion {
  const t = COPY[lang] ?? COPY.en;
  const level = difficulty.level;
  const optionCount = difficulty.choices;

  if (level === 1) {
    const target = generateFraction(grade, difficulty);
    const options = fractionDistractors(target, optionCount).map((option, index) => ({ ...option, label: undefined, visual: index % 2 === 0 ? "pie" as const : "bar" as const }));
    return { kind: "visual", prompt: replace(t.visual, { fraction: fractionText(target) }), fractions: [target], answerKey: "correct", options };
  }

  if (level === 2) {
    const target = generateFraction(grade, difficulty);
    const multiplier = 2 + Math.floor(Math.random() * 3);
    const correct = { num: target.num * multiplier, den: target.den * multiplier };
    const options = fractionDistractors(correct, optionCount);
    const correctOption = options.find((option) => option.key === "correct")!;
    correctOption.fraction = correct;
    correctOption.label = fractionText(correct);
    return { kind: "equivalent", prompt: replace(t.equivalent, { fraction: fractionText(target) }), fractions: [target], answerKey: "correct", options };
  }

  if (level === 3) {
    const left = generateFraction(grade, difficulty);
    let right: Fraction;
    if (Math.random() < 0.25) {
      const multiplier = 2 + Math.floor(Math.random() * 3);
      right = { num: left.num * multiplier, den: left.den * multiplier };
    } else {
      do right = generateFraction(grade, difficulty); while (equivalent(left, right));
    }
    const comparison = left.num * right.den === right.num * left.den ? "=" : left.num * right.den < right.num * left.den ? "<" : ">";
    return {
      kind: "compare", prompt: t.compare, fractions: [left, right], answerKey: comparison,
      options: ["<", "=", ">"].map((symbol) => ({ key: symbol, label: symbol })),
    };
  }

  if (level === 4) {
    let left: Fraction;
    let right: Fraction;
    let operator: "+" | "−";
    if (grade <= 4) {
      const den = 3 + Math.floor(Math.random() * Math.max(2, Math.min(10, difficulty.fractionMaxDenominator) - 2));
      const first = 1 + Math.floor(Math.random() * Math.max(1, den - 2));
      const add = Math.random() < 0.65;
      if (add) {
        const second = 1 + Math.floor(Math.random() * Math.max(1, den - first - 1));
        left = { num: first, den }; right = { num: second, den }; operator = "+";
      } else {
        const second = 1 + Math.floor(Math.random() * first);
        left = { num: first + 1, den }; right = { num: second, den }; operator = "−";
      }
    } else {
      left = generateFraction(grade, difficulty);
      right = generateFraction(grade, difficulty);
      operator = Math.random() < 0.7 ? "+" : "−";
      while (operator === "−" && equivalent(left, right)) right = generateFraction(grade, difficulty);
      if (operator === "−" && left.num * right.den < right.num * left.den) [left, right] = [right, left];
    }
    const raw = operator === "+"
      ? { num: left.num * right.den + right.num * left.den, den: left.den * right.den }
      : { num: left.num * right.den - right.num * left.den, den: left.den * right.den };
    const answer = simplify(raw);
    return { kind: "operation", prompt: t.operation, fractions: [left, right], operator, answerKey: "correct", options: fractionDistractors(answer, optionCount) };
  }

  if (grade <= 4) {
    const fraction = generateFraction(grade, difficulty);
    const multiplier = 2 + Math.floor(Math.random() * 9);
    const quantity = fraction.den * multiplier;
    const answer = fraction.num * multiplier;
    const options = new Set<number>([answer]);
    let offset = 1;
    while (options.size < optionCount) {
      options.add(Math.max(1, answer + (offset % 2 ? offset : -offset)));
      offset += 1;
    }
    return {
      kind: "quantity", prompt: replace(t.quantity, { fraction: fractionText(fraction), quantity }), fractions: [fraction], quantity,
      answerKey: "correct", options: shuffled([...options]).map((value) => ({ key: value === answer ? "correct" : `wrong-${value}`, label: String(value) })),
    };
  }

  const denominators = [2, 4, 5, 10, 20, 25];
  const den = denominators[Math.floor(Math.random() * denominators.length)];
  const fraction = simplify({ num: 1 + Math.floor(Math.random() * (den - 1)), den });
  const usePercent = Math.random() < 0.5;
  const exact = fraction.num / fraction.den;
  const answerValue = usePercent ? exact * 100 : exact;
  const step = usePercent ? 5 : 0.05;
  const values = new Set<number>([answerValue]);
  let offset = 1;
  while (values.size < optionCount) {
    const candidate = Math.max(0, Math.round((answerValue + (offset % 2 ? offset : -offset) * step) * 100) / 100);
    values.add(candidate);
    offset += 1;
  }
  return {
    kind: "conversion", prompt: replace(t.conversion, { fraction: fractionText(fraction) }), fractions: [fraction], answerKey: "correct",
    options: shuffled([...values]).map((value) => ({
      key: value === answerValue ? "correct" : `wrong-${value}`,
      label: usePercent ? `${Math.round(value)}%` : value.toFixed(2).replace(/0+$/, "").replace(/\.$/, ""),
    })),
  };
}

const PieFraction = ({ fraction }: { fraction: Fraction }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const fillLength = fraction.num / fraction.den * circumference;
  return (
    <svg viewBox="0 0 100 100" className="h-20 w-20 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" role="img" aria-label={fractionText(fraction)}>
      <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#1e293b" strokeWidth="48" />
      <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#38bdf8" strokeWidth="48" strokeDasharray={`${fillLength} ${circumference}`} transform="rotate(-90 50 50)" />
      {Array.from({ length: fraction.den }, (_, index) => <line key={index} x1="50" y1="50" x2="50" y2="0" stroke="#0f172a" strokeWidth="2" transform={`rotate(${index / fraction.den * 360} 50 50)`} />)}
      <circle cx="50" cy="50" r="49" fill="transparent" stroke="#bae6fd" strokeWidth="2" />
    </svg>
  );
};

const BarFraction = ({ fraction }: { fraction: Fraction }) => (
  <svg viewBox="0 0 120 70" className="h-20 w-full max-w-[120px] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" role="img" aria-label={fractionText(fraction)}>
    {Array.from({ length: fraction.den }, (_, index) => {
      const width = 100 / fraction.den;
      return <rect key={index} x={10 + index * width} y="15" width={width} height="40" fill={index < fraction.num ? "#34d399" : "#1e293b"} stroke="#a7f3d0" strokeWidth="1.5" />;
    })}
  </svg>
);

const FractionCard = ({ fraction }: { fraction: Fraction }) => (
  <span className="inline-flex min-w-16 flex-col items-center font-mono text-2xl font-black leading-none text-white">
    <span>{fraction.num}</span><span className="my-1 w-full border-t-2 border-cyan-300" /><span>{fraction.den}</span>
  </span>
);

export default function FractionReactorGame({ grade, lang, onDone }: Props) {
  const t = COPY[lang] ?? COPY.en;
  const { progress, difficulty, mastery, selectLevel, recordAnswer, advanceToUnlockedLevel } = useMathGameProgress("fraction-reactor", grade);
  const [seed, setSeed] = useState(0);
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const answerLockedRef = useRef(false);
  const question = useMemo(() => generateFractionQuestion(grade, difficulty, lang), [grade, difficulty, lang, seed]);
  const visualMode = grade <= 4 ? "junior" : grade <= 6 ? "mission" : "lab";
  const displayTitle = visualMode === "junior" ? t.juniorTitle : visualMode === "mission" ? t.missionTitle : t.labTitle;
  const isCorrect = selected === question.answerKey;

  const choose = (key: string) => {
    if (selected !== null || answerLockedRef.current) return;
    answerLockedRef.current = true;
    setSelected(key);
    recordAnswer(key === question.answerKey);
    if (key === question.answerKey) setScore((value) => value + 10);
  };

  const next = () => {
    if (round >= difficulty.rounds) {
      advanceToUnlockedLevel();
      setFinished(true);
      onDone?.(score);
      return;
    }
    setRound((value) => value + 1);
    setSelected(null);
    answerLockedRef.current = false;
    setSeed((value) => value + 1);
  };

  const restart = () => {
    setRound(1); setScore(0); setSelected(null); setFinished(false); answerLockedRef.current = false; setSeed((value) => value + 1);
  };

  const changeLevel = (level: 1 | 2 | 3 | 4 | 5) => {
    selectLevel(level); restart();
  };

  const shellClass = visualMode === "junior" ? "border-emerald-500/25 bg-gradient-to-b from-slate-950 to-emerald-950/35" : visualMode === "mission" ? "border-cyan-500/25 bg-[#071522]" : "border-sky-300/20 bg-[#040a10]";

  return (
    <div className={`mx-auto w-full max-w-2xl select-none overflow-hidden rounded-2xl border p-3 text-white shadow-2xl sm:p-5 ${shellClass}`}>
      <MathLevelBar grade={grade} lang={lang} progress={progress} mastery={mastery} onSelect={changeLevel} />
      <header className="mb-4 flex items-center justify-between gap-3">
        <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">{t.round} {round}/{difficulty.rounds}</p><h2 className="text-xl font-black text-cyan-200 sm:text-3xl">{displayTitle}</h2></div>
        <div className="rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm font-black text-emerald-300">{t.score}: {score}</div>
      </header>

      {finished ? (
        <section className="flex min-h-80 flex-col items-center justify-center gap-5 text-center">
          <CheckCircle2 size={64} className="text-emerald-400" />
          <h3 className="text-3xl font-black">{score >= round * 10 ? t.done : t.practice}</h3>
          <p className="text-xl text-cyan-100">{t.score}: {score}</p>
          <button type="button" onClick={restart} className="flex min-h-12 items-center gap-2 rounded-full bg-cyan-500 px-7 font-black text-slate-950"><RotateCcw size={18} /> {t.again}</button>
        </section>
      ) : (
        <>
          <section className="mb-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
            <p className="mb-5 text-base font-bold text-white sm:text-lg">{question.prompt}</p>
            <div className="flex min-h-24 items-center justify-center gap-4 rounded-xl border border-cyan-400/10 bg-slate-950/50 p-3">
              {question.kind === "compare" || question.kind === "operation" ? <><FractionCard fraction={question.fractions[0]} /><span className="text-3xl font-black text-amber-300">{question.kind === "operation" ? question.operator : "?"}</span><FractionCard fraction={question.fractions[1]} /></> : question.kind === "quantity" ? <><FractionCard fraction={question.fractions[0]} /><span className="text-xl font-black text-white/55">{t.of}</span><span className="text-3xl font-black text-amber-300">{question.quantity}</span></> : <FractionCard fraction={question.fractions[0]} />}
            </div>
          </section>

          <div className={`grid gap-2 sm:gap-3 ${question.options.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
            {question.options.map((option) => {
              const correct = option.key === question.answerKey;
              const active = selected === option.key;
              return (
                <button key={option.key} type="button" onClick={() => choose(option.key)} className={`flex min-h-20 items-center justify-center rounded-2xl border p-2 text-xl font-black transition active:scale-95 ${selected !== null && correct ? "border-emerald-300 bg-emerald-500/25 text-emerald-100" : active ? "border-rose-300 bg-rose-500/20 text-rose-100" : "border-white/10 bg-white/5 text-white/85"}`}>
                  {option.visual === "pie" && option.fraction ? <PieFraction fraction={option.fraction} /> : option.visual === "bar" && option.fraction ? <BarFraction fraction={option.fraction} /> : option.fraction ? <FractionCard fraction={option.fraction} /> : option.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 min-h-14 text-center">
            {selected !== null && <><p className={`mb-2 font-black ${isCorrect ? "text-emerald-300" : "text-amber-300"}`}>{isCorrect ? "✓" : "→"}</p><button type="button" onClick={next} className="min-h-11 rounded-full bg-white px-7 font-black text-slate-950 active:scale-95">{t.next}</button></>}
          </div>
        </>
      )}
    </div>
  );
}
