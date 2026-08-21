"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  mode: "choice" | "order";
  badge: string;
  prompt: string;
  title: string;
  clue?: string;
  clueLabel?: string;
  options?: string[];
  items?: string[];
  itemEmojis?: Record<string, string>;
  correctAnswer?: string;
  correctOrder?: string[];
  emptyText?: string;
  sequenceLabel?: string;
  correctLabel: string;
  solutionLabel: string;
  resetLabel: string;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (answer: string) => void;
};

const ORDER_SEPARATOR = "|";

function deterministicOrder(items: string[]): string[] {
  return [...items].sort((left, right) => {
    const leftScore = [...left].reduce((score, character) => score + character.charCodeAt(0), 0);
    const rightScore = [...right].reduce((score, character) => score + character.charCodeAt(0), 0);
    return leftScore - rightScore || left.localeCompare(right);
  });
}

export default function BiologyLegacyMission(props: Props) {
  const {
    mode,
    badge,
    prompt,
    title,
    clue,
    clueLabel,
    options = [],
    items = [],
    itemEmojis = {},
    correctAnswer = "",
    correctOrder = [],
    emptyText = "",
    sequenceLabel = "",
    correctLabel,
    solutionLabel,
    resetLabel,
    userAnswer,
    submitted,
    onAnswer,
  } = props;

  const [selectedOrder, setSelectedOrder] = useState<string[]>([]);
  const questionKey = `${title}:${correctOrder.join(ORDER_SEPARATOR)}`;
  const availableItems = useMemo(() => deterministicOrder(items), [items]);

  useEffect(() => {
    setSelectedOrder(userAnswer ? userAnswer.split(ORDER_SEPARATOR).filter(Boolean) : []);
  }, [userAnswer, questionKey]);

  const choiceCorrect = mode === "choice" && userAnswer === correctAnswer;
  const orderCorrect = mode === "order" && selectedOrder.join(ORDER_SEPARATOR) === correctOrder.join(ORDER_SEPARATOR);
  const isCorrect = choiceCorrect || orderCorrect;

  function toggleItem(item: string) {
    if (submitted) return;
    const next = selectedOrder.includes(item)
      ? selectedOrder.filter(candidate => candidate !== item)
      : [...selectedOrder, item];
    setSelectedOrder(next);
    onAnswer(next.join(ORDER_SEPARATOR));
  }

  return (
    <section className="mx-1 my-2 rounded-2xl border border-violet-200/80 bg-gradient-to-br from-white via-violet-50/40 to-emerald-50/40 p-3 shadow-sm sm:p-4">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-100 text-xl" aria-hidden="true">
          {badge}
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">{prompt}</p>
          <h3 className="mt-0.5 text-base font-extrabold leading-snug text-slate-900 sm:text-lg">{title}</h3>
          {clue && (
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              {clueLabel && <strong className="text-slate-700">{clueLabel}: </strong>}
              {clue}
            </p>
          )}
        </div>
      </div>

      {mode === "choice" ? (
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {options.map(option => {
            const selected = option === userAnswer;
            const correct = option === correctAnswer;
            const stateClass = submitted
              ? correct
                ? "border-emerald-500 bg-emerald-500 text-white"
                : selected
                  ? "border-rose-400 bg-rose-100 text-rose-700"
                  : "border-slate-200 bg-white text-slate-400"
              : selected
                ? "border-violet-500 bg-violet-500 text-white shadow-md"
                : "border-slate-200 bg-white text-slate-700 hover:border-violet-300 hover:bg-violet-50";
            return (
              <button
                key={option}
                type="button"
                disabled={submitted}
                aria-pressed={selected}
                onClick={() => onAnswer(option)}
                className={`min-h-12 rounded-xl border-2 px-3 py-2 text-left text-sm font-bold transition ${stateClass}`}
              >
                {option}
              </button>
            );
          })}
        </div>
      ) : (
        <>
          <div className="mt-3 min-h-14 rounded-xl border border-dashed border-violet-300 bg-white/80 p-2">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{sequenceLabel}</p>
            {selectedOrder.length === 0 ? (
              <p className="py-1 text-sm italic text-slate-400">{emptyText}</p>
            ) : (
              <div className="flex flex-wrap items-center gap-1.5">
                {selectedOrder.map((item, index) => (
                  <span key={item} className="flex items-center gap-1">
                    {index > 0 && <span className="font-bold text-violet-400">→</span>}
                    <span className="rounded-lg border border-violet-200 bg-violet-100 px-2 py-1 text-sm font-bold text-violet-800">
                      {itemEmojis[item]} {item}
                    </span>
                  </span>
                ))}
              </div>
            )}
          </div>
          {!submitted && (
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {availableItems.map(item => {
                const selected = selectedOrder.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggleItem(item)}
                    className={`min-h-12 rounded-xl border-2 px-2 py-2 text-sm font-bold transition ${
                      selected
                        ? "border-violet-500 bg-violet-500 text-white"
                        : "border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50"
                    }`}
                  >
                    {itemEmojis[item]} {item}
                  </button>
                );
              })}
            </div>
          )}
          {!submitted && selectedOrder.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setSelectedOrder([]);
                onAnswer("");
              }}
              className="mt-2 min-h-10 rounded-lg px-3 text-sm font-semibold text-slate-500 hover:bg-white hover:text-violet-700"
            >
              ↺ {resetLabel}
            </button>
          )}
        </>
      )}

      {submitted && userAnswer && (
        <div className={`mt-3 rounded-xl px-3 py-2 text-sm font-bold ${isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-700"}`}>
          {isCorrect
            ? `✓ ${correctLabel}`
            : `✗ ${solutionLabel}: ${mode === "choice" ? correctAnswer : correctOrder.join(" → ")}`}
        </div>
      )}
    </section>
  );
}
