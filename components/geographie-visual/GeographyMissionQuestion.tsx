"use client";

import { useEffect, useMemo, useState } from "react";
import { GeographyTestDiagram, type GeographyDiagramId } from "./GeographyTestDiagrams";

type Props = {
  mode: "choice" | "order";
  diagramId: GeographyDiagramId;
  prompt: string;
  title: string;
  clue: string;
  options?: string[];
  items?: string[];
  correctAnswer?: string;
  correctOrder?: string[];
  orderLabel: string;
  tapLabel: string;
  resetLabel: string;
  correctLabel: string;
  solutionLabel: string;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (answer: string) => void;
};

const SEP = "|";
const score = (value: string) => [...value].reduce((total, character) => total + character.charCodeAt(0), 0);

function mixedOrder(items: string[]): string[] {
  const mixed = [...items].sort((left, right) => score(left) - score(right) || left.localeCompare(right));
  return mixed.every((item, index) => item === items[index]) && mixed.length > 1 ? [...mixed.slice(1), mixed[0]] : mixed;
}

export default function GeographyMissionQuestion(props: Props) {
  const {
    mode, diagramId, prompt, title, clue, options = [], items = [], correctAnswer = "", correctOrder = [],
    orderLabel, tapLabel, resetLabel, correctLabel, solutionLabel, userAnswer, submitted, onAnswer,
  } = props;
  const [selected, setSelected] = useState<string[]>([]);
  const available = useMemo(() => mixedOrder(items), [items]);

  useEffect(() => {
    setSelected(userAnswer ? userAnswer.split(SEP).filter(Boolean) : []);
  }, [userAnswer, diagramId]);

  const correct = mode === "choice" ? userAnswer === correctAnswer : selected.join(SEP) === correctOrder.join(SEP);

  function toggle(item: string) {
    if (submitted) return;
    const next = selected.includes(item) ? selected.filter(value => value !== item) : [...selected, item];
    setSelected(next);
    onAnswer(next.join(SEP));
  }

  return (
    <section className="mx-1 my-2 p-2 sm:p-3">
      <div className="grid gap-3 sm:grid-cols-[190px_1fr] sm:items-center">
        <GeographyTestDiagram kind={diagramId} label={`${title}. ${clue}`} className="mx-auto h-auto w-full max-w-[190px]" />
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wide text-cyan-700">{prompt}</p>
          <h3 className="mt-1 text-base font-extrabold leading-snug text-slate-900 sm:text-lg">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{clue}</p>
        </div>
      </div>

      {mode === "choice" ? (
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {options.map(option => {
            const chosen = option === userAnswer;
            const isAnswer = option === correctAnswer;
            const state = submitted
              ? isAnswer ? "border-emerald-500 bg-emerald-500 text-white" : chosen ? "border-rose-400 bg-rose-100 text-rose-700" : "border-slate-200 bg-white text-slate-400"
              : chosen ? "border-cyan-600 bg-cyan-600 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-cyan-400 hover:bg-cyan-50";
            return <button key={option} type="button" disabled={submitted} onClick={() => onAnswer(option)} className={`min-h-12 rounded-xl border-2 px-3 py-2 text-left text-sm font-bold transition ${state}`}>{option}</button>;
          })}
        </div>
      ) : (
        <>
          <div className="mt-3 min-h-14 rounded-xl border border-dashed border-cyan-300 bg-cyan-50/40 p-2">
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-500">{orderLabel}</p>
            {selected.length === 0 ? <p className="py-1 text-sm italic text-slate-400">{tapLabel}</p> : (
              <div className="flex flex-wrap items-center gap-1.5">
                {selected.map((item, index) => <span key={item} className="flex items-center gap-1">{index > 0 && <span className="font-bold text-cyan-600">→</span>}<span className="rounded-lg border border-cyan-200 bg-white px-2 py-1 text-sm font-bold text-slate-800">{item}</span></span>)}
              </div>
            )}
          </div>
          {!submitted && <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {available.map(item => <button key={item} type="button" aria-pressed={selected.includes(item)} onClick={() => toggle(item)} className={`min-h-12 rounded-xl border-2 px-3 py-2 text-left text-sm font-bold transition ${selected.includes(item) ? "border-cyan-600 bg-cyan-600 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-cyan-400 hover:bg-cyan-50"}`}>{item}</button>)}
          </div>}
          {!submitted && selected.length > 0 && <button type="button" onClick={() => { setSelected([]); onAnswer(""); }} className="mt-2 min-h-10 rounded-lg px-3 text-sm font-semibold text-slate-500 hover:bg-cyan-50 hover:text-cyan-700">↺ {resetLabel}</button>}
        </>
      )}

      {submitted && userAnswer && <div className={`mt-3 rounded-xl px-3 py-2 text-sm font-bold ${correct ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-700"}`}>{correct ? `✓ ${correctLabel}` : `✗ ${solutionLabel}: ${mode === "choice" ? correctAnswer : correctOrder.join(" → ")}`}</div>}
    </section>
  );
}
