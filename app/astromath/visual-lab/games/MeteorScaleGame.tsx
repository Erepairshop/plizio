"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Language } from "@/components/i18n/LocalizedText";
import { MathLevelBar, useMathGameProgress } from "@/components/visual-lab/MathGameProgress";
import { difficultyFor, type MathDifficulty } from "@/lib/visualLab/mathCurriculum";

const DICTIONARY = {
  en: { title: "Meteor Scale", score: "Score", gameOver: "Level complete!", next: "Continue", playAgain: "Continue learning", tryAgain: "Try again", choose: "Choose the missing number" },
  de: { title: "Meteor-Waage", score: "Punkte", gameOver: "Level geschafft!", next: "Weiter", playAgain: "Weiterlernen", tryAgain: "Erneut versuchen", choose: "Wähle die fehlende Zahl" },
  hu: { title: "Meteor Mérleg", score: "Pontszám", gameOver: "Szint teljesítve!", next: "Tovább", playAgain: "Tanulás folytatása", tryAgain: "Újrapróbálom", choose: "Válaszd ki a hiányzó számot" },
  ro: { title: "Balanța Meteorilor", score: "Scor", gameOver: "Nivel complet!", next: "Continuă", playAgain: "Continuă să înveți", tryAgain: "Încearcă din nou", choose: "Alege numărul lipsă" },
};

interface MeteorScaleGameProps {
  grade: number;
  lang: Language;
  onDone?: (score: number) => void;
}

interface Problem {
  leftDisplay: string;
  rightPrefix: string;
  rightSuffix: string;
  targetValue: number;
  meteorValues: number[];
}

function shuffled<T>(values: T[]): T[] {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateMeteorProblem(grade: number, difficulty: MathDifficulty): Problem {
  let leftDisplay = "";
  let rightPrefix = "";
  let rightSuffix = "";
  let targetValue = 0;

  if (grade <= 2) {
    const cap = Math.min(difficulty.numberLimit, 10 + difficulty.level * (grade === 1 ? 2 : 8));
    targetValue = randomInt(1, Math.max(2, Math.floor(cap / 2)));
    const base = randomInt(0, Math.max(1, cap - targetValue));
    if (difficulty.level >= 4 && base + targetValue > targetValue) {
      leftDisplay = String(base);
      rightPrefix = `${base + targetValue} − `;
    } else {
      leftDisplay = String(base + targetValue);
      rightPrefix = `${base} + `;
    }
  } else if (grade <= 4) {
    const cap = Math.min(difficulty.numberLimit, grade === 3 ? 500 : 2_000);
    if (difficulty.level >= 4 && Math.random() > 0.45) {
      const factor = randomInt(2, Math.min(12, 3 + difficulty.level * 2));
      targetValue = randomInt(2, Math.max(3, Math.min(20, Math.floor(cap / factor))));
      leftDisplay = String(factor * targetValue);
      rightPrefix = `${factor} × `;
    } else if (Math.random() > 0.5) {
      const leftValue = randomInt(10, Math.max(20, Math.floor(cap * 0.65)));
      targetValue = randomInt(5, Math.max(10, Math.min(Math.floor(cap * 0.3), leftValue)));
      leftDisplay = String(leftValue);
      rightPrefix = `${leftValue + targetValue} − `;
    } else {
      targetValue = randomInt(5, Math.max(10, Math.floor(cap * 0.35)));
      const base = randomInt(10, Math.max(20, cap - targetValue));
      leftDisplay = String(base + targetValue);
      rightPrefix = `${base} + `;
    }
  } else {
    const mode = difficulty.level >= 5 && grade >= 6
      ? randomInt(0, 3)
      : difficulty.level >= 3
        ? randomInt(0, 2)
        : randomInt(0, 1);
    if (mode === 0) {
      const factor = randomInt(2, Math.min(15, 5 + difficulty.level * 2));
      targetValue = randomInt(2, Math.min(30, 8 + difficulty.level * 4));
      leftDisplay = String(factor * targetValue);
      rightPrefix = `${factor} × `;
    } else if (mode === 1) {
      const divisor = randomInt(2, Math.min(12, 4 + difficulty.level * 2));
      const result = randomInt(2, Math.min(30, 8 + difficulty.level * 4));
      targetValue = divisor * result;
      leftDisplay = String(result);
      rightSuffix = ` ÷ ${divisor}`;
    } else if (mode === 2) {
      const factor = randomInt(2, Math.min(10, 3 + difficulty.level));
      const offset = randomInt(1, 5 * difficulty.level);
      targetValue = randomInt(2, Math.min(25, 6 + difficulty.level * 4));
      leftDisplay = String(factor * targetValue + offset);
      rightPrefix = `${factor} × `;
      rightSuffix = ` + ${offset}`;
    } else {
      const percent = [10, 20, 25, 50][randomInt(0, 3)];
      const unit = randomInt(1, 4 + difficulty.level);
      targetValue = unit * (100 / percent);
      leftDisplay = String(unit);
      rightPrefix = `${percent}% × `;
    }
  }

  const meteorValues = [targetValue];
  const spread = Math.max(4, Math.ceil(Math.abs(targetValue) * 0.18));
  while (meteorValues.length < difficulty.choices) {
    const wrong = targetValue + randomInt(-spread, spread);
    if (wrong >= 0 && wrong !== targetValue && !meteorValues.includes(wrong)) meteorValues.push(wrong);
  }

  return { leftDisplay, rightPrefix, rightSuffix, targetValue, meteorValues: shuffled(meteorValues) };
}

export default function MeteorScaleGame({ grade, lang, onDone }: MeteorScaleGameProps) {
  const t = DICTIONARY[lang] ?? DICTIONARY.en;
  const { progress, difficulty, levelRef, mastery, selectLevel, recordAnswer, advanceToUnlockedLevel } = useMathGameProgress("meteor-scale", grade);
  const maxRounds = difficulty.rounds;
  const [problem, setProblem] = useState<Problem>(() => generateMeteorProblem(grade, difficultyFor(grade, 1)));
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [selected, setSelected] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const answerLockedRef = useRef(false);

  const prepareRound = useCallback((roundIndex: number) => {
    if (roundIndex >= maxRounds) {
      advanceToUnlockedLevel();
      setPhase("complete");
      return;
    }
    setProblem(generateMeteorProblem(grade, difficultyFor(grade, levelRef.current)));
    setSelected(null);
    setStatus("idle");
    answerLockedRef.current = false;
  }, [grade, levelRef, maxRounds, advanceToUnlockedLevel]);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setScore(0);
    setRound(0);
    setPhase("playing");
    setProblem(generateMeteorProblem(grade, difficulty));
    setSelected(null);
    setStatus("idle");
    answerLockedRef.current = false;
  }, [difficulty, grade]);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const restart = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setScore(0);
    setRound(0);
    setPhase("playing");
    prepareRound(0);
  };

  const chooseMeteor = (value: number) => {
    if (phase !== "playing" || status !== "idle" || answerLockedRef.current) return;
    answerLockedRef.current = true;
    setSelected(value);
    if (value === problem.targetValue) {
      recordAnswer(true);
      setStatus("correct");
      setScore((current) => current + 10);
      const nextRound = round + 1;
      setRound(nextRound);
      timerRef.current = setTimeout(() => prepareRound(nextRound), 1300);
    } else {
      recordAnswer(false);
      setStatus("wrong");
      timerRef.current = setTimeout(() => {
        setSelected(null);
        setStatus("idle");
        answerLockedRef.current = false;
      }, 850);
    }
  };

  const beamRotation = status === "correct" ? 0 : status === "wrong" ? 7 : -7;

  return (
    <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-3 text-white shadow-2xl sm:p-5">
      <MathLevelBar grade={grade} lang={lang} progress={progress} mastery={mastery} onSelect={selectLevel} />
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-xl font-black text-orange-400 sm:text-3xl">{t.title}</h2>
        <div className="shrink-0 rounded-full border border-slate-600 bg-slate-800 px-3 py-1.5 text-sm font-bold sm:text-lg">
          {t.score}: <span className="text-orange-400">{score}</span>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-[#020617] p-3 sm:p-5">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-slate-400">{t.choose}</p>
        <div className="grid gap-2 sm:gap-3" style={{ gridTemplateColumns: `repeat(${problem.meteorValues.length}, minmax(0, 1fr))` }}>
          {problem.meteorValues.map((value) => {
            const chosen = selected === value;
            const stateClass = chosen && status === "correct"
              ? "border-emerald-400 bg-emerald-700 shadow-emerald-500/30"
              : chosen && status === "wrong"
                ? "border-rose-400 bg-rose-800 shadow-rose-500/30"
                : "border-orange-400 bg-orange-900 shadow-orange-500/20";
            return (
              <button
                key={value}
                type="button"
                onClick={() => chooseMeteor(value)}
                disabled={status !== "idle"}
                className={`aspect-square min-h-14 rounded-full border-2 text-lg font-black shadow-lg transition active:scale-95 sm:text-2xl ${stateClass}`}
              >
                {value}
              </button>
            );
          })}
        </div>

        <div className="relative mx-auto mt-5 h-52 w-full max-w-lg overflow-hidden sm:h-60">
          <motion.div
            className="absolute left-[10%] right-[10%] top-[43%] h-3 origin-center rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]"
            animate={{ rotate: beamRotation }}
            transition={{ type: "spring", stiffness: 90, damping: 12 }}
          />
          <div className="absolute left-[4%] top-[49%] flex w-[38%] flex-col items-center">
            <div className="h-14 w-px bg-cyan-400" />
            <div className="flex h-16 w-full items-center justify-center rounded-b-full border-b-4 border-cyan-400 bg-cyan-950/90 text-2xl font-black">
              {problem.leftDisplay}
            </div>
          </div>
          <div className="absolute right-[4%] top-[49%] flex w-[38%] flex-col items-center">
            <div className="h-14 w-px bg-cyan-400" />
            <div className={`flex h-16 w-full items-center justify-center rounded-b-full border-b-4 bg-cyan-950/90 text-lg font-black sm:text-2xl ${status === "correct" ? "border-emerald-400" : status === "wrong" ? "border-rose-400" : "border-cyan-400"}`}>
              {problem.rightPrefix}<span className="mx-1 text-orange-300">{selected ?? "?"}</span>{problem.rightSuffix}
            </div>
          </div>
          <div className="absolute left-1/2 top-[43%] h-28 w-2 -translate-x-1/2 bg-cyan-700" />
          <div className="absolute bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[30px] border-b-[55px] border-x-transparent border-b-cyan-700" />
        </div>

        <div className="mt-1 flex h-7 items-center justify-center text-center font-bold" aria-live="polite">
          {status === "correct" && <span className="text-emerald-400">✓</span>}
          {status === "wrong" && <span className="text-rose-400">{t.tryAgain}</span>}
        </div>
        <div className="mt-2 flex justify-center gap-2">
          {Array.from({ length: maxRounds }).map((_, index) => (
            <span key={index} className={`h-2 w-8 rounded-full ${index < round ? "bg-emerald-500" : index === round ? "bg-cyan-400" : "bg-slate-800"}`} />
          ))}
        </div>
      </div>

      {phase === "complete" && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/95 p-6 text-center backdrop-blur-sm">
          <h3 className="mb-2 text-3xl font-black text-orange-400">{t.gameOver}</h3>
          <p className="mb-7 text-3xl font-bold">{t.score}: {score}</p>
          <button type="button" onClick={restart} className="mb-4 rounded-full bg-orange-500 px-8 py-3 font-black text-white active:scale-95">{t.playAgain}</button>
          {onDone && <button type="button" onClick={() => onDone(score)} className="font-bold text-slate-300">{t.next}</button>}
        </div>
      )}
    </div>
  );
}
