"use client";

import { useCallback, useEffect, useState } from "react";
import {
  clampGeographyLevel,
  requiredCorrectForGeographyLevel,
  type GeographyGameId,
  type GeographyLevel,
} from "@/lib/visualLab/geographyCurriculum";

type Lang = "de" | "hu" | "ro" | "en";

export interface StoredGeographyProgress {
  unlockedLevel: GeographyLevel;
  selectedLevel: GeographyLevel;
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

function emptyProgress(): StoredGeographyProgress {
  return { unlockedLevel: 1, selectedLevel: 1, correctByLevel: [0, 0, 0, 0, 0], attemptsByLevel: [0, 0, 0, 0, 0], stars: 0 };
}

function normalizeCounts(value: unknown): number[] {
  return Array.from({ length: 5 }, (_, index) => {
    const item = Array.isArray(value) ? Number(value[index]) : 0;
    return Number.isFinite(item) ? Math.max(0, Math.floor(item)) : 0;
  });
}

function normalizeProgress(value: unknown): StoredGeographyProgress {
  if (!value || typeof value !== "object") return emptyProgress();
  const input = value as Partial<StoredGeographyProgress>;
  const correctByLevel = normalizeCounts(input.correctByLevel);
  let unlockedLevel = clampGeographyLevel(Number(input.unlockedLevel));
  while (unlockedLevel < 5 && correctByLevel[unlockedLevel - 1] >= requiredCorrectForGeographyLevel(unlockedLevel)) {
    unlockedLevel = (unlockedLevel + 1) as GeographyLevel;
  }
  const selectedLevel = Math.min(unlockedLevel, clampGeographyLevel(Number(input.selectedLevel))) as GeographyLevel;
  return {
    unlockedLevel,
    selectedLevel,
    correctByLevel,
    attemptsByLevel: normalizeCounts(input.attemptsByLevel),
    stars: Math.max(0, Math.floor(Number(input.stars) || 0)),
  };
}

export function useGeographyGameProgress(gameId: GeographyGameId, grade: number, lang: Lang) {
  const storageKey = `plizio:geography-progress:v1:${lang}:g${grade}:${gameId}`;
  const [progress, setProgress] = useState<StoredGeographyProgress>(() => emptyProgress());

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      setProgress(stored ? normalizeProgress(JSON.parse(stored)) : emptyProgress());
    } catch {
      setProgress(emptyProgress());
    }
  }, [storageKey]);

  const selectLevel = useCallback((levelInput: number) => {
    setProgress((current) => {
      const selectedLevel = Math.min(current.unlockedLevel, clampGeographyLevel(levelInput)) as GeographyLevel;
      const next = { ...current, selectedLevel };
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
      return next;
    });
  }, [storageKey]);

  const recordAnswer = useCallback((correct: boolean) => {
    setProgress((current) => {
      const index = current.selectedLevel - 1;
      const correctByLevel = [...current.correctByLevel];
      const attemptsByLevel = [...current.attemptsByLevel];
      attemptsByLevel[index] += 1;
      if (correct) correctByLevel[index] += 1;
      let unlockedLevel = current.unlockedLevel;
      if (correct && current.selectedLevel === current.unlockedLevel && unlockedLevel < 5
        && correctByLevel[index] >= requiredCorrectForGeographyLevel(current.selectedLevel)) {
        unlockedLevel = (unlockedLevel + 1) as GeographyLevel;
      }
      const next = { ...current, unlockedLevel, correctByLevel, attemptsByLevel, stars: current.stars + (correct ? 1 : 0) };
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
      return next;
    });
  }, [storageKey]);

  const advanceToUnlockedLevel = useCallback(() => {
    setProgress((current) => {
      if (current.selectedLevel >= current.unlockedLevel) return current;
      const next = { ...current, selectedLevel: current.unlockedLevel };
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
      return next;
    });
  }, [storageKey]);

  const levelIndex = progress.selectedLevel - 1;
  const required = requiredCorrectForGeographyLevel(progress.selectedLevel);
  return {
    progress,
    rounds: required,
    mastery: Math.min(1, progress.correctByLevel[levelIndex] / required),
    selectLevel,
    recordAnswer,
    advanceToUnlockedLevel,
  };
}

export function GeographyLevelBar({ grade, lang, progress, mastery, onSelect }: {
  grade: number;
  lang: Lang;
  progress: StoredGeographyProgress;
  mastery: number;
  onSelect: (level: GeographyLevel) => void;
}) {
  const t = COPY[lang] ?? COPY.en;
  return (
    <div className="mb-3 rounded-xl border border-emerald-300/15 bg-black/25 p-2.5 text-white">
      <div className="mb-2 flex items-center justify-between gap-3 text-xs font-bold">
        <span>{t.grade} {grade}</span>
        <span>{t.level} {progress.selectedLevel}/5 · ★ {progress.stars}</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {([1, 2, 3, 4, 5] as GeographyLevel[]).map((level) => {
          const unlocked = level <= progress.unlockedLevel;
          const selected = level === progress.selectedLevel;
          return (
            <button key={level} type="button" disabled={!unlocked} onClick={() => onSelect(level)}
              aria-label={unlocked ? `${t.level} ${level}` : `${t.level} ${level}: ${t.locked}`}
              aria-pressed={selected}
              className={`min-h-9 rounded-lg border text-sm font-black transition active:scale-95 ${selected ? "border-emerald-300 bg-emerald-500/30 text-emerald-50" : unlocked ? "border-white/15 bg-white/5 text-white/75" : "border-white/5 bg-white/[.02] text-white/20"}`}>
              {unlocked ? level : "·"}
            </button>
          );
        })}
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10" aria-label={`${t.next}: ${Math.round(mastery * 100)}%`}>
        <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all" style={{ width: `${Math.round(mastery * 100)}%` }} />
      </div>
    </div>
  );
}
