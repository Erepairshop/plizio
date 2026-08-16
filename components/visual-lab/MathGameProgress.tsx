"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  clampMathLevel,
  curriculumForGrade,
  difficultyFor,
  requiredCorrectForLevel,
  type MathDifficulty,
  type MathGameId,
  type MathLevel,
} from "@/lib/visualLab/mathCurriculum";

type Lang = "de" | "hu" | "ro" | "en";

interface StoredProgress {
  unlockedLevel: MathLevel;
  selectedLevel: MathLevel;
  correctByLevel: number[];
  attemptsByLevel: number[];
  stars: number;
}

const COPY: Record<Lang, { level: string; grade: string; next: string; locked: string }> = {
  de: { level: "Level", grade: "Klasse", next: "Nächstes Level", locked: "Noch gesperrt" },
  hu: { level: "Szint", grade: "Osztály", next: "Következő szint", locked: "Még zárva" },
  ro: { level: "Nivel", grade: "Clasa", next: "Nivelul următor", locked: "Încă blocat" },
  en: { level: "Level", grade: "Grade", next: "Next level", locked: "Still locked" },
};

function emptyProgress(): StoredProgress {
  return { unlockedLevel: 1, selectedLevel: 1, correctByLevel: [0, 0, 0, 0, 0], attemptsByLevel: [0, 0, 0, 0, 0], stars: 0 };
}

function normalizeProgress(value: unknown): StoredProgress {
  if (!value || typeof value !== "object") return emptyProgress();
  const input = value as Partial<StoredProgress>;
  const unlockedLevel = clampMathLevel(Number(input.unlockedLevel));
  const selectedLevel = Math.min(unlockedLevel, clampMathLevel(Number(input.selectedLevel))) as MathLevel;
  const normalizeCounts = (counts: unknown) => Array.from({ length: 5 }, (_, index) => {
    const valueAtIndex = Array.isArray(counts) ? Number(counts[index]) : 0;
    return Number.isFinite(valueAtIndex) ? Math.max(0, Math.floor(valueAtIndex)) : 0;
  });
  return {
    unlockedLevel,
    selectedLevel,
    correctByLevel: normalizeCounts(input.correctByLevel),
    attemptsByLevel: normalizeCounts(input.attemptsByLevel),
    stars: Math.max(0, Math.floor(Number(input.stars) || 0)),
  };
}

export function useMathGameProgress(gameId: MathGameId, grade: number) {
  const storageKey = `plizio:math-progress:v1:g${grade}:${gameId}`;
  const [progress, setProgress] = useState<StoredProgress>(() => emptyProgress());
  const levelRef = useRef<MathLevel>(1);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      const next = stored ? normalizeProgress(JSON.parse(stored)) : emptyProgress();
      levelRef.current = next.selectedLevel;
      setProgress(next);
    } catch {
      const next = emptyProgress();
      levelRef.current = 1;
      setProgress(next);
    }
  }, [storageKey]);

  const persist = useCallback((next: StoredProgress) => {
    setProgress(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
  }, [storageKey]);

  const selectLevel = useCallback((levelInput: number) => {
    setProgress((current) => {
      const selectedLevel = Math.min(current.unlockedLevel, clampMathLevel(levelInput)) as MathLevel;
      levelRef.current = selectedLevel;
      const next = { ...current, selectedLevel };
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
      return next;
    });
  }, [storageKey]);

  const recordAnswer = useCallback((correct: boolean) => {
    let levelAfterAnswer = levelRef.current;
    setProgress((current) => {
      const index = current.selectedLevel - 1;
      const correctByLevel = [...current.correctByLevel];
      const attemptsByLevel = [...current.attemptsByLevel];
      attemptsByLevel[index] += 1;
      if (correct) correctByLevel[index] += 1;

      let unlockedLevel = current.unlockedLevel;
      const selectedLevel = current.selectedLevel;
      if (
        correct
        && current.selectedLevel === current.unlockedLevel
        && current.unlockedLevel < 5
        && correctByLevel[index] >= requiredCorrectForLevel(current.selectedLevel)
      ) {
        unlockedLevel = (current.unlockedLevel + 1) as MathLevel;
      }
      levelAfterAnswer = selectedLevel;
      levelRef.current = selectedLevel;
      const next = {
        ...current,
        unlockedLevel,
        selectedLevel,
        correctByLevel,
        attemptsByLevel,
        stars: current.stars + (correct ? 1 : 0),
      };
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
      return next;
    });
    return levelAfterAnswer;
  }, [storageKey]);

  const difficulty = useMemo(
    () => difficultyFor(grade, progress.selectedLevel),
    [grade, progress.selectedLevel],
  );
  const levelIndex = progress.selectedLevel - 1;
  const required = requiredCorrectForLevel(progress.selectedLevel);

  return {
    progress,
    difficulty,
    levelRef,
    selectLevel,
    recordAnswer,
    mastery: Math.min(1, progress.correctByLevel[levelIndex] / required),
    curriculum: curriculumForGrade(grade),
    persist,
  };
}

export function MathLevelBar({
  grade,
  lang,
  progress,
  mastery,
  onSelect,
}: {
  grade: number;
  lang: Lang;
  progress: StoredProgress;
  mastery: number;
  onSelect: (level: MathLevel) => void;
}) {
  const t = COPY[lang] ?? COPY.en;
  return (
    <div className="mb-3 rounded-xl border border-white/10 bg-black/25 p-2.5 text-white">
      <div className="mb-2 flex items-center justify-between gap-3 text-xs font-bold">
        <span>{t.grade} {grade}</span>
        <span>{t.level} {progress.selectedLevel}/5 · ★ {progress.stars}</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {([1, 2, 3, 4, 5] as MathLevel[]).map((level) => {
          const unlocked = level <= progress.unlockedLevel;
          const selected = level === progress.selectedLevel;
          return (
            <button
              key={level}
              type="button"
              disabled={!unlocked}
              onClick={() => onSelect(level)}
              aria-label={unlocked ? `${t.level} ${level}` : `${t.level} ${level}: ${t.locked}`}
              aria-pressed={selected}
              className={`min-h-9 rounded-lg border text-sm font-black transition active:scale-95 ${selected ? "border-cyan-300 bg-cyan-500/30 text-cyan-100" : unlocked ? "border-white/15 bg-white/5 text-white/75" : "border-white/5 bg-white/[.02] text-white/20"}`}
            >
              {unlocked ? level : "·"}
            </button>
          );
        })}
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10" aria-label={`${t.next}: ${Math.round(mastery * 100)}%`}>
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all" style={{ width: `${Math.round(mastery * 100)}%` }} />
      </div>
    </div>
  );
}

export type { MathDifficulty };
