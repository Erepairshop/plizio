"use client";

import { useMemo, useRef, useState } from "react";
import { BarChart3, CheckCircle2, RotateCcw } from "lucide-react";
import { MathLevelBar, useMathGameProgress, type MathDifficulty } from "@/components/visual-lab/MathGameProgress";

type Lang = "de" | "hu" | "ro" | "en";
type QuestionKind = "largest" | "smallest" | "total" | "comparison" | "missing" | "mean" | "pair" | "range" | "median" | "probability";

interface Props { grade: number; lang: Lang; onDone?: (score: number) => void; }
interface Question {
  values: number[];
  labels: string[];
  kind: QuestionKind;
  prompt: string;
  answer: number;
  options: number[];
  marked?: number[];
  hiddenIndex?: number;
}

const COPY = {
  de: {
    juniorTitle: "Daten-Abenteuer", missionTitle: "Daten-Mission", labTitle: "Statistik-Labor",
    next: "Weiter", score: "Punkte", round: "Aufgabe", again: "Weiterlernen", done: "Level geschafft!", practice: "Runde beendet",
    largest: "Welcher Balken ist am größten?", smallest: "Welcher Balken ist am kleinsten?", total: "Wie groß ist die Summe aller Werte?",
    comparison: "Wie groß ist der Unterschied zwischen {a} und {b}?", missing: "Die Summe ist {total}. Welcher Wert fehlt bei {label}?",
    mean: "Wie groß ist der Mittelwert?", pair: "Wie groß ist die Summe von {a} und {b}?", range: "Wie groß ist die Spannweite?",
    median: "Wie groß ist der Median?", probability: "Wie viel Prozent entfallen auf {label}?",
  },
  hu: {
    juniorTitle: "Adatkaland", missionTitle: "Adatküldetés", labTitle: "Statisztikai labor",
    next: "Tovább", score: "Pont", round: "Feladat", again: "Tanulás folytatása", done: "Szint teljesítve!", practice: "A kör véget ért",
    largest: "Melyik oszlop a legnagyobb?", smallest: "Melyik oszlop a legkisebb?", total: "Mennyi az összes érték összege?",
    comparison: "Mennyi {a} és {b} különbsége?", missing: "Az összeg {total}. Melyik érték hiányzik {label} helyén?",
    mean: "Mennyi az átlag?", pair: "Mennyi {a} és {b} összege?", range: "Mekkora a terjedelem?",
    median: "Mennyi a medián?", probability: "Az összes adat hány százaléka tartozik {label} oszlophoz?",
  },
  ro: {
    juniorTitle: "Aventura Datelor", missionTitle: "Misiunea Datelor", labTitle: "Laborator de Statistică",
    next: "Înainte", score: "Scor", round: "Sarcina", again: "Continuă să înveți", done: "Nivel complet!", practice: "Rundă încheiată",
    largest: "Care bară este cea mai mare?", smallest: "Care bară este cea mai mică?", total: "Care este suma tuturor valorilor?",
    comparison: "Care este diferența dintre {a} și {b}?", missing: "Suma este {total}. Ce valoare lipsește la {label}?",
    mean: "Care este media?", pair: "Care este suma valorilor {a} și {b}?", range: "Care este amplitudinea?",
    median: "Care este mediana?", probability: "Ce procent reprezintă bara {label}?",
  },
  en: {
    juniorTitle: "Data Adventure", missionTitle: "Data Mission", labTitle: "Statistics Lab",
    next: "Next", score: "Score", round: "Task", again: "Continue learning", done: "Level complete!", practice: "Round complete",
    largest: "Which bar is the largest?", smallest: "Which bar is the smallest?", total: "What is the total of all values?",
    comparison: "What is the difference between {a} and {b}?", missing: "The total is {total}. Which value is missing at {label}?",
    mean: "What is the mean?", pair: "What is the total of {a} and {b}?", range: "What is the range?",
    median: "What is the median?", probability: "What percentage belongs to bar {label}?",
  },
};

function shuffled<T>(values: T[]): T[] {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

function shuffledOptions(answer: number, spread: number, count: number): number[] {
  const candidates = new Set<number>([answer]);
  let offset = 1;
  while (candidates.size < count) {
    candidates.add(Math.max(0, Math.round((answer + (offset % 2 ? offset : -offset) * spread) * 10) / 10));
    offset += 1;
  }
  return shuffled([...candidates]);
}

const replace = (template: string, values: Record<string, string | number>) => Object.entries(values)
  .reduce((text, [key, value]) => text.replace(`{${key}}`, String(value)), template);

const randomValues = (count: number, cap: number, step: number) => Array.from({ length: count }, () => (Math.floor(Math.random() * Math.max(2, Math.floor(cap / step))) + 1) * step);

export function generateDataQuestion(grade: number, difficulty: MathDifficulty, lang: Lang): Question {
  const t = COPY[lang] ?? COPY.en;
  const level = difficulty.level;
  const count = grade <= 2 && level <= 2 ? 3 : level >= 4 ? 5 : 4;
  const step = grade >= 5 ? 5 : grade >= 3 ? 2 : 1;
  const cap = grade <= 1 ? 10 : grade === 2 ? 20 : grade <= 4 ? 40 : 100;
  let values = randomValues(count, cap, step);
  const labels = Array.from({ length: count }, (_, index) => String.fromCharCode(65 + index));
  const optionCount = difficulty.choices;

  if (level === 1) {
    const kind: QuestionKind = Math.random() < 0.5 ? "largest" : "smallest";
    const answer = Math.floor(Math.random() * count);
    if (kind === "largest") values[answer] = Math.max(...values) + step;
    else {
      values = values.map((value) => value + step);
      values[answer] = step;
    }
    return { values, labels, kind, prompt: t[kind], answer, options: labels.map((_, index) => index) };
  }

  if (level === 2) {
    const answer = values.reduce((sum, value) => sum + value, 0);
    return { values, labels, kind: "total", prompt: t.total, answer, options: shuffledOptions(answer, step, optionCount) };
  }

  if (level === 3) {
    const marked = shuffled(labels.map((_, index) => index)).slice(0, 2);
    const answer = Math.abs(values[marked[0]] - values[marked[1]]);
    const prompt = replace(t.comparison, { a: labels[marked[0]], b: labels[marked[1]] });
    return { values, labels, kind: "comparison", prompt, answer, options: shuffledOptions(answer, step, optionCount), marked };
  }

  if (level === 4 && grade <= 4) {
    const hiddenIndex = Math.floor(Math.random() * count);
    const answer = values[hiddenIndex];
    const total = values.reduce((sum, value) => sum + value, 0);
    const prompt = replace(t.missing, { total, label: labels[hiddenIndex] });
    return { values, labels, kind: "missing", prompt, answer, options: shuffledOptions(answer, step, optionCount), hiddenIndex };
  }

  if (level === 4) {
    const mean = (Math.floor(Math.random() * Math.max(3, cap / step - 8)) + 5) * step;
    const offsets = count === 5 ? [-2, -1, 0, 1, 2] : [-2, -1, 1, 2];
    values = shuffled(offsets.map((offset) => mean + offset * step));
    return { values, labels, kind: "mean", prompt: t.mean, answer: mean, options: shuffledOptions(mean, step, optionCount) };
  }

  if (grade <= 2) {
    const marked = shuffled(labels.map((_, index) => index)).slice(0, 2);
    const answer = values[marked[0]] + values[marked[1]];
    const prompt = replace(t.pair, { a: labels[marked[0]], b: labels[marked[1]] });
    return { values, labels, kind: "pair", prompt, answer, options: shuffledOptions(answer, step, optionCount), marked };
  }

  if (grade <= 4) {
    const answer = Math.max(...values) - Math.min(...values);
    return { values, labels, kind: "range", prompt: t.range, answer, options: shuffledOptions(answer, step, optionCount) };
  }

  if (grade === 5) {
    const sorted = [...values].sort((a, b) => a - b);
    const answer = sorted[Math.floor(sorted.length / 2)];
    return { values, labels, kind: "median", prompt: t.median, answer, options: shuffledOptions(answer, step, optionCount) };
  }

  const percentages = [20, 25, 50];
  const answer = percentages[Math.floor(Math.random() * percentages.length)];
  const markedValue = answer;
  const remainder = 100 - markedValue;
  const others = count - 1;
  const base = Math.floor(remainder / others);
  values = [markedValue, ...Array.from({ length: others }, (_, index) => index === others - 1 ? remainder - base * (others - 1) : base)];
  values = shuffled(values);
  const markedIndex = values.indexOf(markedValue);
  const prompt = replace(t.probability, { label: labels[markedIndex] });
  return { values, labels, kind: "probability", prompt, answer, options: shuffledOptions(answer, 5, optionCount), marked: [markedIndex] };
}

function LineChart({ question }: { question: Question }) {
  const max = Math.max(...question.values, 1);
  const xFor = (index: number) => 42 + index * (276 / Math.max(1, question.values.length - 1));
  const yFor = (value: number) => 154 - value / max * 118;
  const points = question.values.map((value, index) => `${xFor(index)},${yFor(value)}`).join(" ");
  return (
    <svg viewBox="0 0 360 185" className="h-52 w-full" role="img" aria-label={question.prompt}>
      {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
        const y = 154 - ratio * 118;
        return <g key={ratio}><line x1="38" y1={y} x2="330" y2={y} stroke="#334155" strokeWidth="1" /><text x="32" y={y + 4} textAnchor="end" fill="#94a3b8" fontSize="9">{Math.round(max * ratio)}</text></g>;
      })}
      <polyline points={points} fill="none" stroke="#22d3ee" strokeWidth="3" />
      {question.values.map((value, index) => <g key={question.labels[index]}><circle cx={xFor(index)} cy={yFor(value)} r="5" fill={question.marked?.includes(index) ? "#f472b6" : "#67e8f9"} /><text x={xFor(index)} y="174" textAnchor="middle" fill="#cbd5e1" fontSize="11">{question.labels[index]}</text></g>)}
    </svg>
  );
}

export default function DataOrbitGame({ grade, lang, onDone }: Props) {
  const t = COPY[lang] ?? COPY.en;
  const { progress, difficulty, mastery, selectLevel, recordAnswer, advanceToUnlockedLevel } = useMathGameProgress("data-orbit", grade);
  const [seed, setSeed] = useState(0);
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const answerLockedRef = useRef(false);
  const question = useMemo(() => generateDataQuestion(grade, difficulty, lang), [grade, difficulty, lang, seed]);
  const maxValue = Math.max(...question.values, 1);
  const visualMode = grade <= 2 ? "junior" : grade <= 5 ? "mission" : "lab";
  const displayTitle = visualMode === "junior" ? t.juniorTitle : visualMode === "mission" ? t.missionTitle : t.labTitle;
  const useLineChart = visualMode === "lab" && (question.kind === "mean" || question.kind === "median");

  const choose = (answer: number) => {
    if (selected !== null || answerLockedRef.current) return;
    answerLockedRef.current = true;
    setSelected(answer);
    recordAnswer(answer === question.answer);
    if (answer === question.answer) setScore((value) => value + 10);
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

  const shellClass = visualMode === "junior" ? "border-violet-500/30 bg-gradient-to-b from-slate-950 to-violet-950/45" : visualMode === "mission" ? "border-cyan-400/20 bg-slate-950" : "border-sky-300/20 bg-[#040a10]";

  return (
    <div className={`mx-auto w-full max-w-2xl rounded-3xl border p-3 text-white shadow-2xl sm:p-5 ${shellClass}`}>
      <MathLevelBar grade={grade} lang={lang} progress={progress} mastery={mastery} onSelect={changeLevel} />
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-xl font-black text-cyan-200 sm:text-2xl"><BarChart3 size={24} /> {displayTitle}</h2>
        <div className="text-right text-xs text-white/60"><div>{t.round} {round}/{difficulty.rounds}</div><div>{t.score}: {score}</div></div>
      </div>

      {finished ? (
        <div className="flex min-h-72 flex-col items-center justify-center gap-5 text-center">
          <CheckCircle2 className="text-emerald-400" size={64} />
          <h3 className="text-2xl font-black">{score >= round * 10 ? t.done : t.practice}</h3>
          <p className="text-lg text-cyan-100">{t.score}: {score}</p>
          <button type="button" onClick={restart} className="flex min-h-12 items-center gap-2 rounded-full bg-cyan-500 px-6 font-bold text-slate-950"><RotateCcw size={18} /> {t.again}</button>
        </div>
      ) : (
        <>
          <div className="mb-4 rounded-2xl border border-white/10 bg-white/[.03] p-3">
            {useLineChart ? <LineChart question={question} /> : (
              <div className="flex h-52 items-end justify-around gap-2 border-b border-l border-white/20 px-2 pt-4">
                {question.values.map((value, index) => {
                  const hidden = question.hiddenIndex === index;
                  const marked = question.marked?.includes(index);
                  return (
                    <div key={question.labels[index]} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                      <span className={`text-xs font-bold ${hidden ? "text-amber-300" : "text-white/70"}`}>{hidden ? "?" : value}</span>
                      <div className={`w-full max-w-16 rounded-t-lg border ${hidden ? "h-[70%] border-dashed border-amber-300/60 bg-amber-500/10" : marked ? "border-fuchsia-300/50 bg-gradient-to-t from-fuchsia-700 to-pink-300" : "border-cyan-300/20 bg-gradient-to-t from-cyan-700 to-cyan-300"}`} style={hidden ? undefined : { height: `${Math.max(12, value / maxValue * 80)}%` }} />
                      <span className="text-xs font-black text-white/70">{question.labels[index]}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <p className="mb-4 min-h-12 text-center text-base font-bold text-cyan-50 sm:text-lg">{question.prompt}</p>
          <div className="grid grid-cols-2 gap-2">
            {question.options.map((option) => {
              const isAnswer = option === question.answer;
              const active = option === selected;
              return <button key={option} type="button" onClick={() => choose(option)} className={`min-h-12 rounded-xl border text-lg font-black transition active:scale-95 ${selected !== null && isAnswer ? "border-emerald-300 bg-emerald-500/25 text-emerald-100" : active ? "border-red-300 bg-red-500/25 text-red-100" : "border-white/15 bg-white/5"}`}>{question.kind === "largest" || question.kind === "smallest" ? question.labels[option] : `${option}${question.kind === "probability" ? "%" : ""}`}</button>;
            })}
          </div>
          {selected !== null && <button type="button" onClick={next} className="mt-4 min-h-12 w-full rounded-xl bg-cyan-500 font-black text-slate-950">{t.next}</button>}
        </>
      )}
    </div>
  );
}
