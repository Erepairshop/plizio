"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { HistoryGameId, HistoryLevel } from "@/lib/visualLab/historyCurriculum";
import { HistoryLevelBar, useHistoryGameProgress } from "./HistoryGameProgress";

type Lang = "de" | "hu" | "ro" | "en";

const COPY: Record<Lang, { complete: string; practice: string; correct: string; retry: string; next: string }> = {
  de: { complete: "Level abgeschlossen", practice: "Übungsrunde abgeschlossen", correct: "richtig", retry: "Noch einmal", next: "Nächstes Level" },
  hu: { complete: "Szint teljesítve", practice: "Gyakorlókör kész", correct: "helyes", retry: "Újra", next: "Következő szint" },
  ro: { complete: "Nivel finalizat", practice: "Runda de exercițiu s-a încheiat", correct: "corecte", retry: "Din nou", next: "Nivelul următor" },
  en: { complete: "Level complete", practice: "Practice round complete", correct: "correct", retry: "Try again", next: "Next level" },
};

function hash(value: string): number {
  let result = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}
function buildSequence<T>(rounds: T[], count: number, seed: string): T[] {
  if (rounds.length === 0) return [];
  const offset = hash(seed) % rounds.length;
  return Array.from({ length: count }, (_, index) => rounds[(offset + index) % rounds.length]);
}

export default function HistoryRoundSession<T extends { id: string }>({ gameId, grade, lang, rounds, renderRound }: {
  gameId: HistoryGameId;
  grade: number;
  lang: Lang;
  rounds: T[] | ((level: HistoryLevel, count: number) => T[]);
  renderRound: (round: T, onDone: (score: number, total?: number) => void, key: string) => ReactNode;
}) {
  const t = COPY[lang] ?? COPY.en;
  const { progress, rounds: targetRounds, mastery, selectLevel, recordAnswer, advanceToUnlockedLevel } = useHistoryGameProgress(gameId, grade, lang);
  const [roundIndex, setRoundIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);
  const advancing = useRef(false);
  const timer = useRef<number | null>(null);
  const availableRounds = useMemo(
    () => typeof rounds === "function" ? rounds(progress.selectedLevel, targetRounds) : rounds,
    [progress.selectedLevel, rounds, targetRounds],
  );
  const sequence = useMemo(
    () => buildSequence(availableRounds, targetRounds, `${lang}:${grade}:${gameId}:${progress.selectedLevel}`),
    [availableRounds, gameId, grade, lang, progress.selectedLevel, targetRounds],
  );

  useEffect(() => {
    setRoundIndex(0);
    setCorrect(0);
    setFinished(false);
    advancing.current = false;
  }, [gameId, grade, lang, progress.selectedLevel]);

  useEffect(() => () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
  }, []);

  const finishRound = useCallback((score: number, total = 1) => {
    if (advancing.current || finished) return;
    advancing.current = true;
    const wasCorrect = Number.isFinite(total) && total > 0 ? score >= total * 0.8 : score > 0;
    recordAnswer(wasCorrect);
    if (wasCorrect) setCorrect((value) => value + 1);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      if (roundIndex + 1 >= targetRounds) setFinished(true);
      else setRoundIndex((value) => value + 1);
      advancing.current = false;
      timer.current = null;
    }, 300);
  }, [finished, recordAnswer, roundIndex, targetRounds]);

  function restart() {
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = null;
    setRoundIndex(0);
    setCorrect(0);
    setFinished(false);
    advancing.current = false;
  }

  if (sequence.length === 0) return null;
  const current = sequence[Math.min(roundIndex, sequence.length - 1)];
  const unlockedNext = progress.unlockedLevel > progress.selectedLevel;

  return (
    <div>
      <HistoryLevelBar grade={grade} lang={lang} progress={progress} mastery={mastery} onSelect={selectLevel} />
      <div className="mb-3 flex items-center justify-between text-xs font-bold text-white/65">
        <span>{Math.min(roundIndex + 1, targetRounds)}/{targetRounds}</span>
        <span>{correct} {t.correct}</span>
      </div>
      {finished ? (
        <div className="rounded-2xl border border-cyan-400/25 bg-slate-950/90 p-6 text-center text-white">
          <div className="text-4xl" aria-hidden="true">{unlockedNext ? "🎉" : "✅"}</div>
          <h2 className="mt-2 text-2xl font-black">{unlockedNext ? t.complete : t.practice}</h2>
          <p className="mt-2 text-amber-100/75">{correct}/{targetRounds} {t.correct}</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <button type="button" onClick={restart} className="min-h-12 rounded-xl border border-white/15 bg-white/5 px-4 font-bold active:scale-[.98]">{t.retry}</button>
            {unlockedNext && (
              <button type="button" onClick={() => { advanceToUnlockedLevel(); restart(); }} className="min-h-12 rounded-xl bg-amber-300 px-4 font-black text-slate-950 active:scale-[.98]">{t.next}</button>
            )}
          </div>
        </div>
      ) : renderRound(current, finishRound, `${current.id}:${roundIndex}:${progress.selectedLevel}`)}
    </div>
  );
}
