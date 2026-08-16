"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Language } from "@/components/i18n/LocalizedText";

const DICTIONARY = {
  en: { title: "Meteor Scale", score: "Score", gameOver: "Mission complete", next: "Continue", playAgain: "Play again", tryAgain: "Try again", choose: "Choose the missing number" },
  de: { title: "Meteor-Waage", score: "Punkte", gameOver: "Mission geschafft", next: "Weiter", playAgain: "Nochmal spielen", tryAgain: "Versuch es nochmal", choose: "Wähle die fehlende Zahl" },
  hu: { title: "Meteor Mérleg", score: "Pontszám", gameOver: "Küldetés teljesítve", next: "Tovább", playAgain: "Újra", tryAgain: "Próbáld újra", choose: "Válaszd ki a hiányzó számot" },
  ro: { title: "Balanța Meteorilor", score: "Scor", gameOver: "Misiune finalizată", next: "Continuă", playAgain: "Joacă din nou", tryAgain: "Încearcă din nou", choose: "Alege numărul lipsă" },
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

function generateProblem(grade: number): Problem {
  let leftDisplay = "";
  let rightPrefix = "";
  let rightSuffix = "";
  let targetValue = 0;

  if (grade <= 2) {
    targetValue = Math.floor(Math.random() * 9) + 1;
    const rightBase = Math.floor(Math.random() * (10 - targetValue));
    leftDisplay = String(rightBase + targetValue);
    rightPrefix = `${rightBase} + `;
  } else if (grade <= 4) {
    if (Math.random() > 0.5) {
      const leftValue = Math.floor(Math.random() * 20) + 10;
      targetValue = Math.floor(Math.random() * 20) + 5;
      leftDisplay = String(leftValue);
      rightPrefix = `${leftValue + targetValue} − `;
    } else {
      targetValue = Math.floor(Math.random() * 20) + 10;
      const rightBase = Math.floor(Math.random() * 20) + 10;
      leftDisplay = String(rightBase + targetValue);
      rightPrefix = `${rightBase} + `;
    }
  } else if (Math.random() > 0.5) {
    const factor = Math.floor(Math.random() * 8) + 2;
    targetValue = Math.floor(Math.random() * 8) + 2;
    leftDisplay = String(factor * targetValue);
    rightPrefix = `${factor} × `;
  } else {
    const divisor = Math.floor(Math.random() * 5) + 2;
    const leftValue = Math.floor(Math.random() * 10) + 2;
    targetValue = divisor * leftValue;
    leftDisplay = String(leftValue);
    rightSuffix = ` ÷ ${divisor}`;
  }

  const meteorValues = [targetValue];
  while (meteorValues.length < 4) {
    const wrong = targetValue + Math.floor(Math.random() * 11) - 5;
    if (wrong >= 0 && wrong !== targetValue && !meteorValues.includes(wrong)) meteorValues.push(wrong);
  }

  return { leftDisplay, rightPrefix, rightSuffix, targetValue, meteorValues: shuffled(meteorValues) };
}

export default function MeteorScaleGame({ grade, lang, onDone }: MeteorScaleGameProps) {
  const t = DICTIONARY[lang] ?? DICTIONARY.en;
  const maxRounds = grade <= 5 ? 3 : 3 + (grade - 5);
  const [problem, setProblem] = useState<Problem>(() => generateProblem(grade));
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [phase, setPhase] = useState<"playing" | "complete">("playing");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [selected, setSelected] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prepareRound = useCallback((roundIndex: number) => {
    if (roundIndex >= maxRounds) {
      setPhase("complete");
      return;
    }
    setProblem(generateProblem(grade));
    setSelected(null);
    setStatus("idle");
  }, [grade, maxRounds]);

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
    if (phase !== "playing" || status !== "idle") return;
    setSelected(value);
    if (value === problem.targetValue) {
      setStatus("correct");
      setScore((current) => current + 10);
      const nextRound = round + 1;
      setRound(nextRound);
      timerRef.current = setTimeout(() => prepareRound(nextRound), 1300);
    } else {
      setStatus("wrong");
      timerRef.current = setTimeout(() => {
        setSelected(null);
        setStatus("idle");
      }, 850);
    }
  };

  const beamRotation = status === "correct" ? 0 : status === "wrong" ? 7 : -7;

  return (
    <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-3 text-white shadow-2xl sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-xl font-black text-orange-400 sm:text-3xl">{t.title}</h2>
        <div className="shrink-0 rounded-full border border-slate-600 bg-slate-800 px-3 py-1.5 text-sm font-bold sm:text-lg">
          {t.score}: <span className="text-orange-400">{score}</span>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-[#020617] p-3 sm:p-5">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-slate-400">{t.choose}</p>
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
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
