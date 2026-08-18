"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { GeographyGameId, GeographyLevel } from "@/lib/visualLab/geographyCurriculum";
import { GeographyLevelBar, useGeographyGameProgress } from "./GeographyGameProgress";

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

export default function GeographyRoundSession<T extends { id: string }>({ gameId, grade, lang, rounds, renderRound }: {
  gameId: GeographyGameId;
  grade: number;
  lang: Lang;
  rounds: T[] | ((level: GeographyLevel, count: number) => T[]);
  renderRound: (round: T, onDone: (score: number, total?: number) => void, key: string) => ReactNode;
}) {
  const t = COPY[lang] ?? COPY.en;
  const { progress, rounds: targetRounds, mastery, selectLevel, recordAnswer, advanceToUnlockedLevel } = useGeographyGameProgress(gameId, grade, lang);
  const [roundIndex, setRoundIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);
  const isAdvancingRef = useRef(false);
  const isFinishedRef = useRef(false);
  const advanceTimerRef = useRef<number | null>(null);
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
    isAdvancingRef.current = false;
    isFinishedRef.current = false;
  }, [gameId, grade, lang, progress.selectedLevel]);

  useEffect(() => () => {
    if (advanceTimerRef.current !== null) window.clearTimeout(advanceTimerRef.current);
  }, []);

  const finishRound = useCallback((score: number, total = 1) => {
    if (isAdvancingRef.current || isFinishedRef.current) return;
    isAdvancingRef.current = true;
    const wasCorrect = Number.isFinite(total) && total > 0 ? score >= total * 0.8 : score > 0;
    recordAnswer(wasCorrect);
    if (wasCorrect) setCorrect((value) => value + 1);

    if (advanceTimerRef.current !== null) window.clearTimeout(advanceTimerRef.current);
    advanceTimerRef.current = window.setTimeout(() => {
      if (roundIndex + 1 >= targetRounds) {
        isFinishedRef.current = true;
        setFinished(true);
      } else {
        setRoundIndex((value) => value + 1);
        isAdvancingRef.current = false;
      }
      advanceTimerRef.current = null;
    }, 300);
  }, [recordAnswer, roundIndex, targetRounds]);

  function restart() {
    if (advanceTimerRef.current !== null) window.clearTimeout(advanceTimerRef.current);
    advanceTimerRef.current = null;
    setRoundIndex(0);
    setCorrect(0);
    setFinished(false);
    isAdvancingRef.current = false;
    isFinishedRef.current = false;
  }

  if (sequence.length === 0) return null;
  const current = sequence[Math.min(roundIndex, sequence.length - 1)];
  const unlockedNext = progress.unlockedLevel > progress.selectedLevel;

  return (
    <div>
      <GeographyLevelBar grade={grade} lang={lang} progress={progress} mastery={mastery} onSelect={selectLevel} />
      <div className="mb-3 flex items-center justify-between text-xs font-bold text-white/65">
        <span>{Math.min(roundIndex + 1, targetRounds)}/{targetRounds}</span>
        <span>{correct} {t.correct}</span>
      </div>
      {finished ? (
        <div className="rounded-2xl border border-emerald-400/25 bg-slate-950/90 p-6 text-center text-white">
          <div className="text-4xl" aria-hidden="true">{unlockedNext ? "🎉" : "✅"}</div>
          <h2 className="mt-2 text-2xl font-black">{unlockedNext ? t.complete : t.practice}</h2>
          <p className="mt-2 text-emerald-100/75">{correct}/{targetRounds} {t.correct}</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <button type="button" onClick={restart} className="min-h-12 rounded-xl border border-white/15 bg-white/5 px-4 font-bold active:scale-[.98]">{t.retry}</button>
            {unlockedNext && (
              <button type="button" onClick={() => { advanceToUnlockedLevel(); restart(); }} className="min-h-12 rounded-xl bg-emerald-300 px-4 font-black text-slate-950 active:scale-[.98]">{t.next}</button>
            )}
          </div>
        </div>
      ) : renderRound(current, finishRound, `${current.id}:${roundIndex}:${progress.selectedLevel}`)}
    </div>
  );
}
