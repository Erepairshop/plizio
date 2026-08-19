"use client";

import { useCallback, useEffect, useState } from "react";
import {
  clampBiologyLevel,
  requiredCorrectForBiologyLevel,
  type BiologyGameId,
  type BiologyLevel,
} from "@/lib/visualLab/biologyCurriculum";

type Lang = "de" | "hu" | "ro" | "en";

export interface StoredBiologyProgress {
  unlockedLevel: BiologyLevel;
  selectedLevel: BiologyLevel;
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

function emptyProgress(): StoredBiologyProgress {
  return { unlockedLevel: 1, selectedLevel: 1, correctByLevel: [0, 0, 0, 0, 0], attemptsByLevel: [0, 0, 0, 0, 0], stars: 0 };
}

function normalizeCounts(value: unknown): number[] {
  return Array.from({ length: 5 }, (_, index) => {
    const item = Array.isArray(value) ? Number(value[index]) : 0;
    return Number.isFinite(item) ? Math.max(0, Math.floor(item)) : 0;
  });
}

function normalizeProgress(value: unknown): StoredBiologyProgress {
  if (!value || typeof value !== "object") return emptyProgress();
  const input = value as Partial<StoredBiologyProgress>;
  const correctByLevel = normalizeCounts(input.correctByLevel);
  let unlockedLevel = clampBiologyLevel(Number(input.unlockedLevel));
  while (unlockedLevel < 5 && correctByLevel[unlockedLevel - 1] >= requiredCorrectForBiologyLevel(unlockedLevel)) {
    unlockedLevel = (unlockedLevel + 1) as BiologyLevel;
  }
  return {
    unlockedLevel,
    selectedLevel: Math.min(unlockedLevel, clampBiologyLevel(Number(input.selectedLevel))) as BiologyLevel,
    correctByLevel,
    attemptsByLevel: normalizeCounts(input.attemptsByLevel),
    stars: Math.max(0, Math.floor(Number(input.stars) || 0)),
  };
}

export function useBiologyGameProgress(gameId: BiologyGameId, grade: number, lang: Lang) {
  const storageKey = `plizio:biology-progress:v1:${lang}:g${grade}:${gameId}`;
  const [progress, setProgress] = useState<StoredBiologyProgress>(() => emptyProgress());

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      setProgress(stored ? normalizeProgress(JSON.parse(stored)) : emptyProgress());
    } catch {
      setProgress(emptyProgress());
    }
  }, [storageKey]);

  const persist = useCallback((next: StoredBiologyProgress) => {
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
    return next;
  }, [storageKey]);

  const selectLevel = useCallback((levelInput: number) => {
    setProgress((current) => persist({
      ...current,
      selectedLevel: Math.min(current.unlockedLevel, clampBiologyLevel(levelInput)) as BiologyLevel,
    }));
  }, [persist]);

  const recordAnswer = useCallback((correct: boolean) => {
    setProgress((current) => {
      const index = current.selectedLevel - 1;
      const correctByLevel = [...current.correctByLevel];
      const attemptsByLevel = [...current.attemptsByLevel];
      attemptsByLevel[index] += 1;
      if (correct) correctByLevel[index] += 1;
      let unlockedLevel = current.unlockedLevel;
      if (correct && current.selectedLevel === unlockedLevel && unlockedLevel < 5
        && correctByLevel[index] >= requiredCorrectForBiologyLevel(current.selectedLevel)) {
        unlockedLevel = (unlockedLevel + 1) as BiologyLevel;
      }
      return persist({ ...current, unlockedLevel, correctByLevel, attemptsByLevel, stars: current.stars + (correct ? 1 : 0) });
    });
  }, [persist]);

  const advanceToUnlockedLevel = useCallback(() => {
    setProgress((current) => current.selectedLevel >= current.unlockedLevel
      ? current
      : persist({ ...current, selectedLevel: current.unlockedLevel }));
  }, [persist]);

  const levelIndex = progress.selectedLevel - 1;
  const required = requiredCorrectForBiologyLevel(progress.selectedLevel);
  return {
    progress,
    rounds: required,
    mastery: Math.min(1, progress.correctByLevel[levelIndex] / required),
    selectLevel,
    recordAnswer,
    advanceToUnlockedLevel,
  };
}

export function BiologyLevelBar({ grade, lang, progress, mastery, onSelect }: {
  grade: number;
  lang: Lang;
  progress: StoredBiologyProgress;
  mastery: number;
  onSelect: (level: BiologyLevel) => void;
}) {
  const t = COPY[lang] ?? COPY.en;
  return (
    <div className="mb-3 rounded-xl border border-lime-300/15 bg-black/25 p-2.5 text-white">
      <div className="mb-2 flex items-center justify-between gap-3 text-xs font-bold">
        <span>{t.grade} {grade}</span>
        <span>{t.level} {progress.selectedLevel}/5 · ★ {progress.stars}</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {([1, 2, 3, 4, 5] as BiologyLevel[]).map((level) => {
          const unlocked = level <= progress.unlockedLevel;
          const selected = level === progress.selectedLevel;
          return (
            <button key={level} type="button" disabled={!unlocked} onClick={() => onSelect(level)}
              aria-label={unlocked ? `${t.level} ${level}` : `${t.level} ${level}: ${t.locked}`}
              aria-pressed={selected}
              className={`min-h-9 rounded-lg border text-sm font-black transition active:scale-95 ${selected ? "border-lime-300 bg-lime-500/30 text-lime-50" : unlocked ? "border-white/15 bg-white/5 text-white/75" : "border-white/5 bg-white/[.02] text-white/20"}`}>
              {unlocked ? level : "·"}
            </button>
          );
        })}
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10" aria-label={`${t.next}: ${Math.round(mastery * 100)}%`}>
        <div className="h-full rounded-full bg-gradient-to-r from-lime-400 to-emerald-400 transition-all" style={{ width: `${Math.round(mastery * 100)}%` }} />
      </div>
    </div>
  );
}
