"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Language } from "@/components/i18n/LocalizedText";
import { MathLevelBar, useMathGameProgress } from "@/components/visual-lab/MathGameProgress";
import { difficultyFor, type MathDifficulty } from "@/lib/visualLab/mathCurriculum";

const DICTIONARY = {
  en: { juniorTitle: "Meteor Balance", missionTitle: "Balance Mission", labTitle: "Equation Lab", score: "Score", gameOver: "Level complete!", next: "Continue", playAgain: "Continue learning", tryAgain: "Try again", choose: "Which number keeps both sides equal?", correct: "Balanced!" },
  de: { juniorTitle: "Meteor-Waage", missionTitle: "Balance-Mission", labTitle: "Gleichungslabor", score: "Punkte", gameOver: "Level geschafft!", next: "Weiter", playAgain: "Weiterlernen", tryAgain: "Erneut versuchen", choose: "Welche Zahl hält beide Seiten gleich?", correct: "Im Gleichgewicht!" },
  hu: { juniorTitle: "Meteor Mérleg", missionTitle: "Egyensúly-misszió", labTitle: "Egyenletlabor", score: "Pontszám", gameOver: "Szint teljesítve!", next: "Tovább", playAgain: "Tanulás folytatása", tryAgain: "Újrapróbálom", choose: "Melyik szám tartja egyensúlyban a két oldalt?", correct: "Egyensúlyban!" },
  ro: { juniorTitle: "Balanța Meteorilor", missionTitle: "Misiunea Echilibrului", labTitle: "Laborator de Ecuații", score: "Scor", gameOver: "Nivel complet!", next: "Continuă", playAgain: "Continuă să înveți", tryAgain: "Încearcă din nou", choose: "Ce număr menține cele două părți egale?", correct: "Echilibrat!" },
};

const SKILL_LABELS = {
  en: { addition: "Missing addend", inverse: "Inverse operation", groups: "Equal groups", equivalence: "Equivalent expressions", "two-step": "Two-step equation", percent: "Percentage equation" },
  de: { addition: "Fehlender Summand", inverse: "Umkehraufgabe", groups: "Gleiche Gruppen", equivalence: "Gleichwertige Terme", "two-step": "Zweistufige Gleichung", percent: "Prozentgleichung" },
  hu: { addition: "Hiányzó tag", inverse: "Fordított művelet", groups: "Egyenlő csoportok", equivalence: "Egyenértékű kifejezések", "two-step": "Kétlépéses egyenlet", percent: "Százalékegyenlet" },
  ro: { addition: "Termen lipsă", inverse: "Operație inversă", groups: "Grupuri egale", equivalence: "Expresii echivalente", "two-step": "Ecuație în doi pași", percent: "Ecuație procentuală" },
};

interface MeteorScaleGameProps {
  grade: number;
  lang: Language;
  onDone?: (score: number) => void;
}

interface Problem {
  skill: "addition" | "inverse" | "groups" | "equivalence" | "two-step" | "percent";
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
  let skill: Problem["skill"] = "addition";
  let leftDisplay = "";
  let rightPrefix = "";
  let rightSuffix = "";
  let targetValue = 0;
  const level = difficulty.level;
  const gradeCap = grade === 1 ? 20 : grade === 2 ? 100 : grade === 3 ? 1_000 : grade === 4 ? 10_000 : 1_000;
  const juniorCap = Math.min(difficulty.numberLimit, gradeCap);

  if (level === 1) {
    skill = "addition";
    targetValue = randomInt(1, Math.max(2, Math.floor(juniorCap / 2)));
    const base = randomInt(0, Math.max(1, juniorCap - targetValue));
    leftDisplay = String(base + targetValue);
    rightPrefix = `${base} + `;
  } else if (level === 2) {
    skill = "inverse";
    const result = randomInt(0, Math.max(2, Math.floor(juniorCap / 2)));
    targetValue = randomInt(1, Math.max(2, juniorCap - result));
    leftDisplay = String(result);
    rightPrefix = `${result + targetValue} − `;
  } else if (level === 3 && grade <= 1) {
    skill = "equivalence";
    const leftA = randomInt(1, 9);
    const leftB = randomInt(1, 10);
    const total = leftA + leftB;
    const rightBase = randomInt(0, Math.max(0, total - 1));
    targetValue = total - rightBase;
    leftDisplay = `${leftA} + ${leftB}`;
    rightPrefix = `${rightBase} + `;
  } else if (level === 3) {
    skill = "groups";
    const factorLimit = grade === 2 ? 5 : Math.min(12, 5 + grade);
    const factor = randomInt(2, factorLimit);
    targetValue = randomInt(2, grade === 2 ? 10 : Math.min(30, 8 + grade * 3));
    leftDisplay = String(factor * targetValue);
    rightPrefix = `${factor} × `;
  } else if (level === 4 && grade <= 2) {
    skill = "equivalence";
    const cap = grade === 1 ? 20 : 100;
    const leftA = randomInt(2, Math.max(3, Math.floor(cap * 0.55)));
    const leftB = randomInt(1, Math.max(2, Math.min(leftA, Math.floor(cap * 0.3))));
    const total = leftA + leftB;
    const rightBase = randomInt(1, Math.max(2, total - 1));
    targetValue = total - rightBase;
    leftDisplay = `${leftA} + ${leftB}`;
    rightPrefix = `${rightBase} + `;
  } else if (level === 4) {
    skill = "two-step";
    const factor = randomInt(2, Math.min(10, grade + 3));
    const offset = randomInt(1, Math.max(4, grade * 3));
    targetValue = randomInt(2, Math.min(30, 8 + grade * 3));
    leftDisplay = String(factor * targetValue + offset);
    rightPrefix = `${factor} × `;
    rightSuffix = ` + ${offset}`;
  } else if (grade <= 2) {
    skill = "equivalence";
    const cap = grade === 1 ? 20 : 100;
    const total = randomInt(5, cap);
    const leftA = randomInt(1, total - 1);
    const rightBase = randomInt(1, total - 1);
    targetValue = total - rightBase;
    leftDisplay = `${leftA} + ${total - leftA}`;
    rightPrefix = `${rightBase} + `;
  } else if (grade <= 5) {
    skill = "two-step";
    const factor = randomInt(2, Math.min(12, grade + 5));
    const offset = randomInt(1, grade * 4);
    targetValue = randomInt(2, Math.min(35, 10 + grade * 4));
    leftDisplay = String(factor * (targetValue + offset));
    rightPrefix = `${factor} × (`;
    rightSuffix = ` + ${offset})`;
  } else {
    skill = "percent";
    const percents = [10, 20, 25, 50];
    const percent = percents[randomInt(0, percents.length - 1)];
    const unit = randomInt(1, 4 + grade);
    targetValue = unit * (100 / percent);
    leftDisplay = String(unit);
    rightPrefix = `${percent}% × `;
  }

  const meteorValues = [targetValue];
  const spread = Math.max(4, Math.ceil(Math.abs(targetValue) * 0.18));
  while (meteorValues.length < difficulty.choices) {
    const wrong = targetValue + randomInt(-spread, spread);
    if (wrong >= 0 && wrong !== targetValue && !meteorValues.includes(wrong)) meteorValues.push(wrong);
  }

  return { skill, leftDisplay, rightPrefix, rightSuffix, targetValue, meteorValues: shuffled(meteorValues) };
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
    setScore(0);
    setRound(0);
    setPhase("playing");
    setProblem(generateMeteorProblem(grade, difficulty));
    setSelected(null);
    setStatus("idle");
    answerLockedRef.current = false;
  }, [difficulty, grade]);

  const restart = () => {
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
    } else {
      recordAnswer(false);
      setStatus("wrong");
    }
  };

  const continueRound = () => {
    const nextRound = round + 1;
    setRound(nextRound);
    prepareRound(nextRound);
  };

  const retryProblem = () => {
    setSelected(null);
    setStatus("idle");
    answerLockedRef.current = false;
  };

  const beamRotation = status === "correct" ? 0 : status === "wrong" ? 7 : -7;
  const visualMode = grade <= 2 ? "junior" : grade <= 5 ? "mission" : "lab";
  const displayTitle = visualMode === "junior" ? t.juniorTitle : visualMode === "mission" ? t.missionTitle : t.labTitle;
  const shellClass = visualMode === "junior"
    ? "border-orange-500/30 bg-gradient-to-b from-slate-950 to-orange-950/35"
    : visualMode === "mission"
      ? "border-cyan-500/25 bg-[#071522]"
      : "border-sky-300/20 bg-[#040a10]";

  return (
    <div className={`relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border p-3 text-white shadow-2xl sm:p-5 ${shellClass}`}>
      <MathLevelBar grade={grade} lang={lang} progress={progress} mastery={mastery} onSelect={selectLevel} />
      <div className="mb-3 flex items-center justify-between gap-2">
        <div>
          <h2 className={`text-xl font-black sm:text-3xl ${visualMode === "lab" ? "text-cyan-200" : "text-orange-400"}`}>{displayTitle}</h2>
          <p className="text-xs font-bold uppercase tracking-widest text-white/45">{SKILL_LABELS[lang]?.[problem.skill] ?? SKILL_LABELS.en[problem.skill]}</p>
        </div>
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
                className={`${visualMode === "junior" ? "aspect-square rounded-full" : visualMode === "mission" ? "min-h-14 rounded-xl" : "min-h-14 rounded-md"} border-2 text-lg font-black shadow-lg transition active:scale-95 sm:text-2xl ${stateClass}`}
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

        <div className="mt-1 flex min-h-16 flex-col items-center justify-center gap-2 text-center font-bold" aria-live="polite">
          {status === "correct" && <><span className="text-emerald-400">✓ {t.correct}</span><button type="button" onClick={continueRound} className="rounded-full bg-emerald-500 px-6 py-2 font-black text-slate-950 active:scale-95">{t.next}</button></>}
          {status === "wrong" && <><span className="text-rose-400">{t.tryAgain}</span><button type="button" onClick={retryProblem} className="rounded-full bg-white px-6 py-2 font-black text-slate-950 active:scale-95">{t.tryAgain}</button></>}
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
