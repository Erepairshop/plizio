"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CircleCheck, Compass, Lightbulb, Microscope } from "lucide-react";
import type { GeographySkillLang, GeographySkillRound } from "@/lib/visualLab/geographySkillContent";
import { geographyBandForGrade } from "@/lib/visualLab/geographyCurriculum";

const COPY: Record<GeographySkillLang, { correct: string; retry: string; continue: string; hint: string; topic: string }> = {
  de: { correct: "Richtig", retry: "Prüfe den räumlichen Zusammenhang noch einmal", continue: "Weiter", hint: "Einordnung", topic: "Thema" },
  hu: { correct: "Helyes", retry: "Gondold át még egyszer a földrajzi kapcsolatot", continue: "Tovább", hint: "Magyarázat", topic: "Téma" },
  ro: { correct: "Corect", retry: "Verifică încă o dată legătura geografică", continue: "Continuă", hint: "Explicație", topic: "Temă" },
  en: { correct: "Correct", retry: "Check the geographic connection once more", continue: "Continue", hint: "Explanation", topic: "Topic" },
};

export default function GeographySkillGame({ lang, round, onDone }: {
  lang: GeographySkillLang;
  round: GeographySkillRound;
  onDone?: (score: number, total?: number) => void;
}) {
  const t = COPY[lang] ?? COPY.en;
  const band = geographyBandForGrade(round.grade);
  const [selected, setSelected] = useState<string | null>(null);
  const [solved, setSolved] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setSelected(null);
    setSolved(false);
    setAttempts(0);
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, [round.id]);

  function choose(option: string) {
    if (solved || selected !== null) return;
    setSelected(option);
    setAttempts((value) => value + 1);
    if (option === round.correctAnswer) {
      setSolved(true);
      return;
    }
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setSelected(null);
      timerRef.current = null;
    }, 650);
  }

  function continueRound() {
    if (!solved) return;
    onDone?.(attempts <= 1 ? 1 : 0.8, 1);
  }

  const frame = band === "explorer"
    ? "border-emerald-300/25 bg-[radial-gradient(circle_at_12%_4%,rgba(52,211,153,.18),transparent_38%),radial-gradient(circle_at_92%_86%,rgba(34,211,238,.13),transparent_38%)]"
    : band === "mission"
      ? "border-cyan-300/25 bg-[radial-gradient(circle_at_12%_4%,rgba(34,211,238,.16),transparent_38%),radial-gradient(circle_at_92%_86%,rgba(59,130,246,.13),transparent_38%)]"
      : "border-sky-300/20 bg-[linear-gradient(145deg,rgba(15,23,42,.98),rgba(3,21,35,.98))]";

  return (
    <section className={`relative min-h-[clamp(410px,72dvh,590px)] overflow-hidden rounded-2xl border p-4 text-white shadow-2xl sm:p-6 ${frame}`}>
      <div className="relative z-10 mx-auto max-w-2xl">
        <header className="mb-4 flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-emerald-300/25 bg-emerald-400/10 text-emerald-200">
            {band === "lab" ? <Microscope size={23} aria-hidden="true" /> : <Compass size={23} aria-hidden="true" />}
          </span>
          <div>
            <h2 className="text-xl font-black sm:text-2xl">{round.title}</h2>
            <p className="mt-1 text-sm text-cyan-100/65">{round.instruction}</p>
          </div>
        </header>

        <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[.055] px-4 py-3 text-sm text-white/75">
          <span className="font-semibold">{t.topic}: {round.context}</span>
          <span className="shrink-0 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs font-black">L{round.level}</span>
        </div>
        <p className="mb-4 text-lg font-bold leading-snug sm:text-xl">{round.prompt}</p>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {round.options.map((option) => {
            const isSelected = option === selected;
            const isCorrect = option === round.correctAnswer;
            const revealCorrect = solved && isCorrect;
            return (
              <button
                key={option}
                type="button"
                disabled={solved || selected !== null}
                onClick={() => choose(option)}
                className={`min-h-14 rounded-xl border-2 px-4 py-3 text-left text-base font-bold transition active:scale-[.985] ${
                  revealCorrect
                    ? "border-emerald-300 bg-emerald-500/20 text-emerald-50"
                    : isSelected
                      ? "border-rose-300 bg-rose-500/20 text-rose-50"
                      : "border-white/15 bg-black/25 text-white/90 hover:border-cyan-300/50 hover:bg-cyan-400/10"
                }`}
              >
                <span className="flex items-center gap-3">
                  {revealCorrect && <CircleCheck size={20} className="shrink-0 text-emerald-300" aria-hidden="true" />}
                  <span>{option}</span>
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {selected && !solved && (
            <motion.p key="retry" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="status" className="mt-3 rounded-lg border border-rose-300/20 bg-rose-500/10 px-3 py-2 text-center font-bold text-rose-200">
              {t.retry}
            </motion.p>
          )}
          {solved && (
            <motion.div key="solved" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-500/10 p-4">
              <p className="font-black text-emerald-200">{t.correct}</p>
              <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-white/75">
                <Lightbulb size={18} className="mt-0.5 shrink-0 text-amber-300" aria-hidden="true" />
                <span><span className="sr-only">{t.hint}: </span>{round.explanation}</span>
              </p>
              <button type="button" onClick={continueRound} className="mt-4 min-h-12 w-full rounded-xl bg-emerald-300 px-4 font-black text-slate-950 transition active:scale-[.985]">
                {t.continue}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
