"use client";
import { memo, useMemo } from "react";
import { useLang } from "@/components/LanguageProvider";
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

const OrbitQuiz = memo(function OrbitQuiz({ questions, color, onDone, onCorrect, onWrong }: {
  questions: MathQuestion[]; color: string; onDone: (score: number, total: number) => void;
  onCorrect?: () => void; onWrong?: () => void;
}) {
  const { lang } = useLang();
  const quizQs = useMemo(() => toQuizQuestions(questions), [questions]);

  return (
    <QuizEngine
      questions={quizQs}
      color={color}
      onDone={onDone}
      onCorrect={onCorrect}
      onWrong={onWrong}
      lang={lang}
      config={{ showStreak: true, showScore: true, particles: true }}
    />
  );
});

export default OrbitQuiz;
