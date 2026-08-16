"use client";

import { useMemo, useRef, useState } from "react";
import { BarChart3, CheckCircle2, RotateCcw } from "lucide-react";
import { MathLevelBar, useMathGameProgress, type MathDifficulty } from "@/components/visual-lab/MathGameProgress";

type Lang = "de" | "hu" | "ro" | "en";
type QuestionKind = "largest" | "total" | "difference" | "mean" | "range" | "probability";

interface Props { grade: number; lang: Lang; onDone?: (score: number) => void; }
interface Question { values: number[]; labels: string[]; kind: QuestionKind; prompt: string; answer: number; options: number[]; }

const COPY: Record<Lang, Record<string, string>> = {
  de: { title: "Daten-Mission", next: "Weiter", score: "Punkte", round: "Runde", again: "Nochmal", done: "Mission geschafft", largest: "Welcher Balken ist am größten?", total: "Wie groß ist die Summe?", difference: "Wie groß ist der Unterschied zwischen dem größten und kleinsten Wert?", mean: "Wie groß ist der Mittelwert?", range: "Wie groß ist die Spannweite?", probability: "Wie viel Prozent entfallen auf den markierten Balken?" },
  hu: { title: "Adatküldetés", next: "Tovább", score: "Pont", round: "Kör", again: "Újra", done: "Küldetés teljesítve", largest: "Melyik oszlop a legnagyobb?", total: "Mennyi az értékek összege?", difference: "Mennyi a legnagyobb és legkisebb érték különbsége?", mean: "Mennyi az átlag?", range: "Mekkora a terjedelem?", probability: "Az összes adat hány százaléka a megjelölt oszlop?" },
  ro: { title: "Misiunea Datelor", next: "Înainte", score: "Scor", round: "Runda", again: "Din nou", done: "Misiune încheiată", largest: "Care bară este cea mai mare?", total: "Care este suma valorilor?", difference: "Care este diferența dintre valoarea maximă și minimă?", mean: "Care este media?", range: "Care este amplitudinea?", probability: "Ce procent reprezintă bara marcată?" },
  en: { title: "Data Mission", next: "Next", score: "Score", round: "Round", again: "Play again", done: "Mission complete", largest: "Which bar is the largest?", total: "What is the total?", difference: "What is the difference between the largest and smallest value?", mean: "What is the mean?", range: "What is the range?", probability: "What percentage belongs to the marked bar?" },
};

function shuffledOptions(answer: number, spread: number): number[] {
  const candidates = new Set<number>([answer]);
  let offset = 1;
  while (candidates.size < 4) {
    candidates.add(Math.max(0, answer + (offset % 2 ? offset : -offset) * spread));
    offset += 1;
  }
  return [...candidates].sort(() => Math.random() - 0.5);
}

export function generateDataQuestion(grade: number, difficulty: MathDifficulty, lang: Lang): Question {
  const t = COPY[lang] ?? COPY.en;
  const count = difficulty.level >= 4 ? 5 : 4;
  const step = grade >= 5 && difficulty.level >= 4 ? 5 : 1;
  const cap = grade <= 2 ? 10 : grade <= 4 ? 20 : 40;
  const values = Array.from({ length: count }, () => (Math.floor(Math.random() * Math.max(2, Math.floor(cap / step))) + 1) * step);
  const labels = Array.from({ length: count }, (_, index) => String.fromCharCode(65 + index));
  const kinds: QuestionKind[] = grade <= 2
    ? ["largest"]
    : grade <= 4
      ? ["largest", "total", "difference"]
      : grade === 5
        ? ["total", "difference", "range", ...(difficulty.level >= 4 ? ["mean" as const] : [])]
        : ["difference", "range", "mean", ...(difficulty.level >= 4 ? ["probability" as const] : [])];
  const kind = kinds[Math.floor(Math.random() * kinds.length)];
  let answer = 0;
  let prompt = t[kind];

  if (kind === "largest") {
    answer = Math.floor(Math.random() * values.length);
    values[answer] = Math.max(...values) + step;
    return { values, labels, kind, prompt, answer, options: labels.map((_, index) => index) };
  }
  if (kind === "total") answer = values.reduce((sum, value) => sum + value, 0);
  if (kind === "difference" || kind === "range") answer = Math.max(...values) - Math.min(...values);
  if (kind === "mean") {
    const sum = values.reduce((total, value) => total + value, 0);
    answer = Math.round((sum / values.length) * 10) / 10;
  }
  if (kind === "probability") {
    values[0] = values.slice(1).reduce((total, value) => total + value, 0);
    answer = 50;
    prompt = `${t.probability} (${labels[0]})`;
  }
  return { values, labels, kind, prompt, answer, options: shuffledOptions(answer, kind === "probability" ? 5 : Math.max(1, step)) };
}

export default function DataOrbitGame({ grade, lang, onDone }: Props) {
  const t = COPY[lang] ?? COPY.en;
  const { progress, difficulty, mastery, selectLevel, recordAnswer } = useMathGameProgress("data-orbit", grade);
  const [seed, setSeed] = useState(0);
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const answerLockedRef = useRef(false);
  const question = useMemo(() => generateDataQuestion(grade, difficulty, lang), [grade, difficulty, lang, seed]);
  const maxValue = Math.max(...question.values, 1);
  const choose = (answer: number) => {
    if (selected !== null || answerLockedRef.current) return;
    answerLockedRef.current = true;
    setSelected(answer);
    recordAnswer(answer === question.answer);
    if (answer === question.answer) setScore(value => value + 10);
  };

  const next = () => {
    if (round >= difficulty.rounds) {
      setFinished(true);
      onDone?.(score);
      return;
    }
    setRound(value => value + 1);
    setSelected(null);
    answerLockedRef.current = false;
    setSeed(value => value + 1);
  };

  const restart = () => {
    setRound(1); setScore(0); setSelected(null); setFinished(false); answerLockedRef.current = false; setSeed(value => value + 1);
  };

  const changeLevel = (level: 1 | 2 | 3 | 4 | 5) => {
    selectLevel(level); restart();
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-cyan-400/20 bg-slate-950 p-3 text-white shadow-2xl sm:p-5">
      <MathLevelBar grade={grade} lang={lang} progress={progress} mastery={mastery} onSelect={changeLevel} />
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-xl font-black text-cyan-200 sm:text-2xl"><BarChart3 size={24} /> {t.title}</h2>
        <div className="text-right text-xs text-white/60"><div>{t.round} {round}/{difficulty.rounds}</div><div>{t.score}: {score}</div></div>
      </div>

      {finished ? (
        <div className="flex min-h-72 flex-col items-center justify-center gap-5 text-center">
          <CheckCircle2 className="text-emerald-400" size={64} />
          <h3 className="text-2xl font-black">{t.done}</h3>
          <p className="text-lg text-cyan-100">{t.score}: {score}</p>
          <button type="button" onClick={restart} className="flex min-h-12 items-center gap-2 rounded-full bg-cyan-500 px-6 font-bold text-slate-950"><RotateCcw size={18} /> {t.again}</button>
        </div>
      ) : (
        <>
          <div className="mb-4 rounded-2xl border border-white/10 bg-white/[.03] p-3">
            <div className="flex h-52 items-end justify-around gap-2 border-b border-l border-white/20 px-2 pt-4">
              {question.values.map((value, index) => (
                <div key={`${question.labels[index]}:${value}`} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                  <span className="text-xs font-bold text-white/70">{value}</span>
                  <div className={`w-full max-w-16 rounded-t-lg bg-gradient-to-t ${question.kind === "probability" && index === 0 ? "from-fuchsia-600 to-pink-300" : "from-cyan-700 to-cyan-300"}`} style={{ height: `${Math.max(12, (value / maxValue) * 80)}%` }} />
                  <span className="text-xs font-black text-white/70">{question.labels[index]}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mb-4 min-h-12 text-center text-base font-bold text-cyan-50 sm:text-lg">{question.prompt}</p>
          <div className="grid grid-cols-2 gap-2">
            {question.options.map(option => {
              const isAnswer = option === question.answer;
              const active = option === selected;
              return <button key={option} type="button" onClick={() => choose(option)} className={`min-h-12 rounded-xl border text-lg font-black transition active:scale-95 ${selected !== null && isAnswer ? "border-emerald-300 bg-emerald-500/25 text-emerald-100" : active ? "border-red-300 bg-red-500/25 text-red-100" : "border-white/15 bg-white/5"}`}>{question.kind === "largest" ? question.labels[option] : `${option}${question.kind === "probability" ? "%" : ""}`}</button>;
            })}
          </div>
          {selected !== null && <button type="button" onClick={next} className="mt-4 min-h-12 w-full rounded-xl bg-cyan-500 font-black text-slate-950">{t.next}</button>}
        </>
      )}
    </div>
  );
}
