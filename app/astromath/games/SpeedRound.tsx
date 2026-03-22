"use client";
// SpeedRound — timed quiz using QuizEngine with timer config
import { memo, useMemo } from "react";
import QuizEngine from "@/components/QuizEngine";
import type { QuizQuestion } from "@/components/QuizEngine";
import type { MathQuestion } from "@/lib/mathCurriculum";

function toQuizQuestions(mqs: MathQuestion[]): QuizQuestion[] {
  return mqs.map(q => ({
    question: q.question,
    options: q.options ?? [],
    correctAnswer: q.correctAnswer,
  }));
}

const SpeedRound = memo(function SpeedRound({ questions, color, onDone, onCorrect, onWrong, lang = "en" }: {
  questions: MathQuestion[]; color: string;
  onDone: (score: number, total: number) => void;
  onCorrect?: () => void; onWrong?: () => void;
  lang?: string;
}) {
  const quizQs = useMemo(() => toQuizQuestions(questions), [questions]);

  return (
    <QuizEngine
      questions={quizQs}
      color={color}
      onDone={onDone}
      onCorrect={onCorrect}
      onWrong={onWrong}
      lang={lang}
      config={{
        timer: 11,
        showStreak: true,
        showScore: true,
        particles: true,
        advanceDelay: 1200,
      }}
    />
  );
});

export default SpeedRound;
