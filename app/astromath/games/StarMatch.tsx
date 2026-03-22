"use client";
import { memo, useMemo } from "react";
import { useLang } from "@/components/LanguageProvider";
import MatchEngine from "@/components/MatchEngine";
import type { MatchPair } from "@/components/MatchEngine";
import { generateMatchPairs } from "@/lib/astromath";
import type { MathQuestion } from "@/lib/mathCurriculum";

const StarMatch = memo(function StarMatch({ questions, color, onDone }: {
  questions: MathQuestion[]; color: string; onDone: (score: number, total: number) => void;
}) {
  const { lang } = useLang();

  const initialPairs = useMemo((): MatchPair[] => {
    return generateMatchPairs(questions);
  }, [questions]);

  const regenerate = useMemo(() => {
    return () => {
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      return generateMatchPairs(shuffled);
    };
  }, [questions]);

  return (
    <MatchEngine
      pairs={initialPairs}
      color={color}
      onDone={onDone}
      regenerate={regenerate}
      rounds={3}
      lang={lang}
    />
  );
});

export default StarMatch;
