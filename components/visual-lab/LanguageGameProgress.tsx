"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  clampLanguageLevel,
  requiredCorrectForLanguageLevel,
  type LanguageGameId,
  type LanguageLevel,
} from "@/lib/visualLab/languageCurriculum";

type Lang = "de" | "hu" | "ro" | "en";

export interface StoredLanguageProgress {
  unlockedLevel: LanguageLevel;
  selectedLevel: LanguageLevel;
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

function emptyProgress(): StoredLanguageProgress {
  return { unlockedLevel: 1, selectedLevel: 1, correctByLevel: [0, 0, 0, 0, 0], attemptsByLevel: [0, 0, 0, 0, 0], stars: 0 };
}

function normalizeCounts(value: unknown): number[] {
  return Array.from({ length: 5 }, (_, index) => {
    const item = Array.isArray(value) ? Number(value[index]) : 0;
    return Number.isFinite(item) ? Math.max(0, Math.floor(item)) : 0;
  });
}

function normalizeProgress(value: unknown): StoredLanguageProgress {
  if (!value || typeof value !== "object") return emptyProgress();
  const input = value as Partial<StoredLanguageProgress>;
  const correctByLevel = normalizeCounts(input.correctByLevel);
  let unlockedLevel = clampLanguageLevel(Number(input.unlockedLevel));
  while (unlockedLevel < 5 && correctByLevel[unlockedLevel - 1] >= requiredCorrectForLanguageLevel(unlockedLevel)) {
    unlockedLevel = (unlockedLevel + 1) as LanguageLevel;
  }
  const selectedLevel = Math.min(unlockedLevel, clampLanguageLevel(Number(input.selectedLevel))) as LanguageLevel;
  return {
    unlockedLevel,
    selectedLevel,
    correctByLevel,
    attemptsByLevel: normalizeCounts(input.attemptsByLevel),
    stars: Math.max(0, Math.floor(Number(input.stars) || 0)),
  };
}

export function useLanguageGameProgress(gameId: LanguageGameId, grade: number, lang: Lang) {
  const storageKey = `plizio:language-progress:v1:${lang}:g${grade}:${gameId}`;
  const [progress, setProgress] = useState<StoredLanguageProgress>(() => emptyProgress());
  const levelRef = useRef<LanguageLevel>(1);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      const next = stored ? normalizeProgress(JSON.parse(stored)) : emptyProgress();
      levelRef.current = next.selectedLevel;
      setProgress(next);
    } catch {
      levelRef.current = 1;
      setProgress(emptyProgress());
    }
  }, [storageKey]);

  const persist = useCallback((next: StoredLanguageProgress) => {
    setProgress(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
  }, [storageKey]);

  const selectLevel = useCallback((levelInput: number) => {
    setProgress((current) => {
      const selectedLevel = Math.min(current.unlockedLevel, clampLanguageLevel(levelInput)) as LanguageLevel;
      levelRef.current = selectedLevel;
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
        && correctByLevel[index] >= requiredCorrectForLanguageLevel(current.selectedLevel)) {
        unlockedLevel = (unlockedLevel + 1) as LanguageLevel;
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
      levelRef.current = next.selectedLevel;
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
      return next;
    });
  }, [storageKey]);

  const levelIndex = progress.selectedLevel - 1;
  const required = requiredCorrectForLanguageLevel(progress.selectedLevel);
  return {
    progress,
    levelRef,
    rounds: required,
    mastery: Math.min(1, progress.correctByLevel[levelIndex] / required),
    selectLevel,
    recordAnswer,
    advanceToUnlockedLevel,
    persist,
  };
}

export function LanguageLevelBar({ grade, lang, progress, mastery, onSelect }: {
  grade: number;
  lang: Lang;
  progress: StoredLanguageProgress;
  mastery: number;
  onSelect: (level: LanguageLevel) => void;
}) {
  const t = COPY[lang] ?? COPY.en;
  return (
    <div className="mb-3 rounded-xl border border-white/10 bg-black/25 p-2.5 text-white">
      <div className="mb-2 flex items-center justify-between gap-3 text-xs font-bold">
        <span>{t.grade} {grade}</span>
        <span>{t.level} {progress.selectedLevel}/5 · ★ {progress.stars}</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {([1, 2, 3, 4, 5] as LanguageLevel[]).map((level) => {
          const unlocked = level <= progress.unlockedLevel;
          const selected = level === progress.selectedLevel;
          return (
            <button key={level} type="button" disabled={!unlocked} onClick={() => onSelect(level)}
              aria-label={unlocked ? `${t.level} ${level}` : `${t.level} ${level}: ${t.locked}`}
              aria-pressed={selected}
              className={`min-h-9 rounded-lg border text-sm font-black transition active:scale-95 ${selected ? "border-fuchsia-300 bg-fuchsia-500/30 text-fuchsia-100" : unlocked ? "border-white/15 bg-white/5 text-white/75" : "border-white/5 bg-white/[.02] text-white/20"}`}>
              {unlocked ? level : "·"}
            </button>
          );
        })}
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10" aria-label={`${t.next}: ${Math.round(mastery * 100)}%`}>
        <div className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 transition-all" style={{ width: `${Math.round(mastery * 100)}%` }} />
      </div>
    </div>
  );
}
