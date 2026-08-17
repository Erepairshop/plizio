"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MathLevelBar, useMathGameProgress, type MathDifficulty } from "@/components/visual-lab/MathGameProgress";

export interface TimeWarpGameProps {
  grade: number;
  lang: "de" | "hu" | "ro" | "en";
  onDone?: (score: number) => void;
}

type Lang = TimeWarpGameProps["lang"];
type ChallengeKind = "digital-to-analog" | "analog-to-digital" | "elapsed" | "difference" | "schedule";

interface TimeChallenge {
  kind: ChallengeKind;
  start: number;
  end?: number;
  duration?: number;
  legs?: number[];
  answer: number;
  choices: number[];
}

const COPY = {
  de: {
    juniorTitle: "Uhren-Abenteuer", missionTitle: "Zeit-Mission", labTitle: "Chronometrie-Labor",
    score: "Punkte", round: "Aufgabe", next: "Weiter", check: "Prüfen", correct: "Richtig!", wrong: "Noch nicht.",
    levelDone: "Level geschafft!", roundDone: "Runde beendet", continue: "Weiterlernen", retry: "Erneut üben",
    pickClock: "Tippe auf die passende Analoguhr.", readClock: "Welche Uhrzeit zeigt die Analoguhr?",
    elapsed: "Wie spät ist es nach {duration}?", difference: "Wie viel Zeit vergeht?", schedule: "Wann endet der Zeitplan?",
    starts: "Start", ends: "Ende", journey: "Abschnitt", morning: "vormittags", afternoon: "nachmittags", evening: "abends", noPressure: "Kein Zeitdruck. Rechne in Ruhe.",
  },
  hu: {
    juniorTitle: "Órakaland", missionTitle: "Időmisszió", labTitle: "Kronometriai labor",
    score: "Pont", round: "Feladat", next: "Tovább", check: "Ellenőrzés", correct: "Helyes!", wrong: "Még nem jó.",
    levelDone: "Szint teljesítve!", roundDone: "A kör véget ért", continue: "Tanulás folytatása", retry: "Új gyakorlás",
    pickClock: "Koppints a megfelelő analóg órára.", readClock: "Hány órát mutat az analóg óra?",
    elapsed: "Mennyi az idő {duration} múlva?", difference: "Mennyi idő telik el?", schedule: "Mikor ér véget az időterv?",
    starts: "Kezdés", ends: "Befejezés", journey: "Szakasz", morning: "délelőtt", afternoon: "délután", evening: "este", noPressure: "Nincs időkorlát. Számolj nyugodtan.",
  },
  ro: {
    juniorTitle: "Aventura Ceasului", missionTitle: "Misiunea Timpului", labTitle: "Laborator de Cronometrie",
    score: "Scor", round: "Sarcina", next: "Înainte", check: "Verifică", correct: "Corect!", wrong: "Nu încă.",
    levelDone: "Nivel complet!", roundDone: "Rundă încheiată", continue: "Continuă să înveți", retry: "Exersează din nou",
    pickClock: "Atinge ceasul analogic potrivit.", readClock: "Ce oră arată ceasul analogic?",
    elapsed: "Cât va fi ceasul după {duration}?", difference: "Cât timp trece?", schedule: "Când se termină programul?",
    starts: "Start", ends: "Sfârșit", journey: "Etapa", morning: "dimineața", afternoon: "după-amiaza", evening: "seara", noPressure: "Fără limită de timp. Calculează în ritmul tău.",
  },
  en: {
    juniorTitle: "Clock Adventure", missionTitle: "Time Mission", labTitle: "Chronometry Lab",
    score: "Score", round: "Task", next: "Next", check: "Check", correct: "Correct!", wrong: "Not yet.",
    levelDone: "Level complete!", roundDone: "Round complete", continue: "Continue learning", retry: "Practice again",
    pickClock: "Tap the matching analogue clock.", readClock: "What time does the analogue clock show?",
    elapsed: "What time will it be after {duration}?", difference: "How much time passes?", schedule: "When does the schedule finish?",
    starts: "Start", ends: "End", journey: "Stage", morning: "morning", afternoon: "afternoon", evening: "evening", noPressure: "No time limit. Take your time.",
  },
};

const normalizeMinutes = (minutes: number) => ((minutes % 1440) + 1440) % 1440;

const formatTime = (minutes: number, use24Hour: boolean) => {
  const normalized = normalizeMinutes(minutes);
  const minute = normalized % 60;
  const hour24 = Math.floor(normalized / 60);
  const hour = use24Hour ? hour24 : (hour24 % 12 || 12);
  return `${use24Hour ? hour.toString().padStart(2, "0") : hour}:${minute.toString().padStart(2, "0")}`;
};

const formatDuration = (minutes: number, lang: Lang) => {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (!hours) return `${rest} min`;
  if (!rest) return lang === "hu" ? `${hours} óra` : lang === "ro" ? `${hours} h` : `${hours} h`;
  return lang === "hu" ? `${hours} óra ${rest} perc` : `${hours} h ${rest} min`;
};

const randomItem = <T,>(items: T[]) => items[Math.floor(Math.random() * items.length)];

const makeChoices = (answer: number, step: number, count: number, durationAnswer: boolean, uniqueAnalogFace = false) => {
  const values = new Set<number>([answer]);
  const visualKeys = new Set<number>([uniqueAnalogFace ? normalizeMinutes(answer) % 720 : answer]);
  const offsets = Array.from({ length: 12 }, (_, index) => step * (index + 1)).flatMap((offset) => [offset, -offset]);
  for (const offset of offsets.sort(() => Math.random() - 0.5)) {
    const candidate = durationAnswer ? answer + offset : normalizeMinutes(answer + offset);
    if (durationAnswer && candidate <= 0) continue;
    const visualKey = uniqueAnalogFace ? normalizeMinutes(candidate) % 720 : candidate;
    if (visualKeys.has(visualKey)) continue;
    values.add(candidate);
    visualKeys.add(visualKey);
    if (values.size >= count) break;
  }
  return [...values].sort(() => Math.random() - 0.5);
};

export const generateTimeChallenge = (grade: number, difficulty: MathDifficulty): TimeChallenge => {
  const level = difficulty.level;
  const step = difficulty.timeStep;
  const durationUnit = grade <= 2 ? step : Math.ceil((grade <= 4 ? 15 : 10) / step) * step;
  const use24Hour = grade >= 3;
  const hourMin = use24Hour ? 6 : 1;
  const hourMax = use24Hour ? 19 : 11;
  const start = (hourMin + Math.floor(Math.random() * (hourMax - hourMin + 1))) * 60
    + Math.floor(Math.random() * (60 / step)) * step;

  if (level === 1) {
    return { kind: "digital-to-analog", start, answer: start, choices: makeChoices(start, step, difficulty.choices, false, true) };
  }
  if (level === 2) {
    return { kind: "analog-to-digital", start, answer: start, choices: makeChoices(start, step, difficulty.choices, false) };
  }
  if (level === 3) {
    const duration = durationUnit * (1 + Math.floor(Math.random() * (grade <= 2 ? 3 : 6)));
    const answer = normalizeMinutes(start + duration);
    return { kind: "elapsed", start, duration, answer, choices: makeChoices(answer, step, difficulty.choices, false) };
  }
  if (level === 4) {
    const duration = durationUnit * (2 + Math.floor(Math.random() * (grade <= 2 ? 3 : 8)));
    const end = normalizeMinutes(start + duration);
    return { kind: "difference", start, end, answer: duration, choices: makeChoices(duration, step, difficulty.choices, true) };
  }

  const legCount = grade <= 2 ? 2 : 3;
  const legs = Array.from({ length: legCount }, () => durationUnit * (1 + Math.floor(Math.random() * (grade <= 2 ? 2 : 6))));
  const answer = normalizeMinutes(start + legs.reduce((sum, value) => sum + value, 0));
  return { kind: "schedule", start, legs, answer, choices: makeChoices(answer, step, difficulty.choices, false) };
};

const AnalogClock = ({ minutes, technical = false }: { minutes: number; technical?: boolean }) => {
  const size = 120;
  const center = size / 2;
  const radius = 52;
  const normalized = normalizeMinutes(minutes);
  const minute = normalized % 60;
  const hour = Math.floor(normalized / 60) % 12;
  const hourAngle = hour * 30 + minute / 2;
  const minuteAngle = minute * 6;
  const point = (angle: number, length: number) => ({
    x: center + length * Math.cos((angle - 90) * Math.PI / 180),
    y: center + length * Math.sin((angle - 90) * Math.PI / 180),
  });
  const hourEnd = point(hourAngle, 28);
  const minuteEnd = point(minuteAngle, 40);

  return (
    <svg viewBox="0 0 120 120" className="h-auto w-full max-w-[120px]" aria-label={formatTime(minutes, false)} role="img">
      <circle cx="60" cy="60" r={radius} fill={technical ? "#07111f" : "#111827"} stroke={technical ? "#67e8f9" : "#a78bfa"} strokeWidth="4" />
      {Array.from({ length: 12 }, (_, index) => {
        const outer = point(index * 30, 48);
        const inner = point(index * 30, index % 3 === 0 ? 39 : 43);
        return <line key={index} x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} stroke={technical ? "#67e8f9" : "#c4b5fd"} strokeWidth={index % 3 === 0 ? 3 : 1.5} />;
      })}
      <line x1="60" y1="60" x2={minuteEnd.x} y2={minuteEnd.y} stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="60" x2={hourEnd.x} y2={hourEnd.y} stroke="#fbbf24" strokeWidth="5" strokeLinecap="round" />
      <circle cx="60" cy="60" r="5" fill={technical ? "#22d3ee" : "#f472b6"} />
    </svg>
  );
};

export default function TimeWarpGame({ grade, lang, onDone }: TimeWarpGameProps) {
  const t = COPY[lang] ?? COPY.en;
  const { progress, difficulty, mastery, selectLevel, recordAnswer, advanceToUnlockedLevel } = useMathGameProgress("time-warp", grade);
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [seed, setSeed] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [finished, setFinished] = useState(false);
  const maxRounds = difficulty.rounds;
  const visualMode = grade <= 2 ? "junior" : grade <= 5 ? "mission" : "lab";
  const use24Hour = grade >= 3;
  const challenge = useMemo(() => generateTimeChallenge(grade, difficulty), [grade, difficulty, seed]);
  const isCorrect = selected === challenge.answer;
  const durationAnswer = challenge.kind === "difference";
  const displayTitle = visualMode === "junior" ? t.juniorTitle : visualMode === "mission" ? t.missionTitle : t.labTitle;

  useEffect(() => {
    setSelected(null);
    setChecked(false);
  }, [seed]);

  useEffect(() => {
    if (finished) onDone?.(score);
  }, [finished, onDone, score]);

  const prompt = challenge.kind === "digital-to-analog" ? t.pickClock
    : challenge.kind === "analog-to-digital" ? t.readClock
      : challenge.kind === "elapsed" ? t.elapsed.replace("{duration}", formatDuration(challenge.duration!, lang))
        : challenge.kind === "difference" ? t.difference
          : t.schedule;

  const checkAnswer = () => {
    if (selected === null || checked) return;
    setChecked(true);
    recordAnswer(isCorrect);
    if (isCorrect) setScore((current) => current + 1);
  };

  const nextQuestion = () => {
    if (round >= maxRounds) {
      advanceToUnlockedLevel();
      setFinished(true);
      return;
    }
    setRound((current) => current + 1);
    setSeed((current) => current + 1);
  };

  const restart = () => {
    setRound(1);
    setScore(0);
    setFinished(false);
    setSeed((current) => current + 1);
  };

  const changeLevel = (level: 1 | 2 | 3 | 4 | 5) => {
    selectLevel(level);
    setRound(1);
    setScore(0);
    setFinished(false);
    setSeed((current) => current + 1);
  };

  const shellClass = visualMode === "junior"
    ? "border-violet-500/30 bg-gradient-to-b from-slate-950 to-violet-950/55"
    : visualMode === "mission"
      ? "border-cyan-500/25 bg-[#071522]"
      : "border-sky-300/20 bg-[#040a10]";

  return (
    <div className={`w-full max-w-2xl select-none overflow-hidden rounded-2xl border p-3 text-white shadow-2xl sm:p-6 ${shellClass}`}>
      <MathLevelBar grade={grade} lang={lang} progress={progress} mastery={mastery} onSelect={changeLevel} />

      <header className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">{t.round} {round}/{maxRounds}</p>
          <h2 className="text-xl font-black text-cyan-200 sm:text-3xl">{displayTitle}</h2>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm font-black text-emerald-300">{t.score}: {score}</div>
      </header>

      {!finished ? (
        <>
          <section className="mb-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-center sm:p-5">
            <p className="mb-3 text-base font-bold text-white sm:text-lg">{prompt}</p>

            {challenge.kind === "digital-to-analog" && (
              <div className="mx-auto w-fit rounded-xl border border-cyan-400/25 bg-slate-950/70 px-5 py-2 font-mono text-3xl font-black text-cyan-200">{formatTime(challenge.start, use24Hour)}</div>
            )}
            {challenge.kind === "analog-to-digital" && (
              <div className="mx-auto flex w-36 flex-col items-center justify-center">
                <AnalogClock minutes={challenge.start} technical={visualMode !== "junior"} />
                {use24Hour && <span className="mt-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-cyan-200">{Math.floor(challenge.start / 60) < 12 ? t.morning : Math.floor(challenge.start / 60) < 18 ? t.afternoon : t.evening}</span>}
              </div>
            )}
            {challenge.kind === "elapsed" && (
              <div className="flex items-center justify-center gap-3 text-xl font-black text-cyan-100"><span>{formatTime(challenge.start, use24Hour)}</span><span className="text-white/35">+</span><span>{formatDuration(challenge.duration!, lang)}</span></div>
            )}
            {challenge.kind === "difference" && (
              <div className="flex items-center justify-center gap-3 text-lg font-black"><span className="rounded-lg bg-white/5 px-3 py-2">{t.starts}: {formatTime(challenge.start, use24Hour)}</span><span>→</span><span className="rounded-lg bg-white/5 px-3 py-2">{t.ends}: {formatTime(challenge.end!, use24Hour)}</span></div>
            )}
            {challenge.kind === "schedule" && (
              <div>
                <p className="mb-2 font-mono text-2xl font-black text-cyan-200">{t.starts}: {formatTime(challenge.start, use24Hour)}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {challenge.legs!.map((leg, index) => <span key={index} className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-sm font-bold">{t.journey} {index + 1}: +{formatDuration(leg, lang)}</span>)}
                </div>
              </div>
            )}
          </section>

          <div className={`grid gap-2 sm:gap-3 ${challenge.kind === "digital-to-analog" ? "grid-cols-3" : "grid-cols-2"}`}>
            {challenge.choices.map((choice) => {
              const active = selected === choice;
              const revealCorrect = checked && choice === challenge.answer;
              const revealWrong = checked && active && !isCorrect;
              return (
                <button
                  key={choice}
                  type="button"
                  disabled={checked}
                  onClick={() => setSelected(choice)}
                  className={`flex min-h-16 items-center justify-center rounded-2xl border p-2 font-mono text-xl font-black transition active:scale-95 ${revealCorrect ? "border-emerald-300 bg-emerald-500/25 text-emerald-100" : revealWrong ? "border-rose-400 bg-rose-500/20 text-rose-100" : active ? "border-cyan-300 bg-cyan-500/25 text-white" : "border-white/10 bg-white/5 text-white/80"}`}
                >
                  {challenge.kind === "digital-to-analog" ? <AnalogClock minutes={choice} technical={visualMode !== "junior"} /> : durationAnswer ? formatDuration(choice, lang) : formatTime(choice, use24Hour)}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex min-h-20 flex-col items-center justify-center gap-2">
            {!checked ? (
              <>
                <button type="button" disabled={selected === null} onClick={checkAnswer} className="min-h-12 rounded-full bg-cyan-500 px-8 font-black text-slate-950 transition active:scale-95 disabled:opacity-35">{t.check}</button>
                <p className="text-xs text-white/40">{t.noPressure}</p>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <p className={`mb-2 text-xl font-black ${isCorrect ? "text-emerald-300" : "text-amber-300"}`}>{isCorrect ? t.correct : t.wrong}</p>
                <button type="button" onClick={nextQuestion} className="min-h-11 rounded-full bg-white px-7 font-bold text-slate-950 active:scale-95">{t.next}</button>
              </motion.div>
            )}
          </div>
        </>
      ) : (
        <section className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/25 p-6 text-center">
          <div className="mb-4 text-5xl">✓</div>
          <h3 className="text-3xl font-black text-emerald-300">{score >= round ? t.levelDone : t.roundDone}</h3>
          <p className="my-5 text-xl text-white/75">{t.score}: <strong className="text-white">{score}/{round}</strong></p>
          <button type="button" onClick={restart} className="min-h-12 rounded-full bg-cyan-500 px-8 font-black text-slate-950 active:scale-95">{score >= round ? t.continue : t.retry}</button>
        </section>
      )}
    </div>
  );
}
