"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Lightbulb, Atom } from "lucide-react";
import type { PhysicsSkillLang, PhysicsSkillRound } from "@/lib/visualLab/physicsSkillContent";
import PhysicsSkillMechanic from "./PhysicsSkillMechanics";

const COPY: Record<PhysicsSkillLang, { correct: string; retry: string; continue: string; topic: string }> = {
  de: { correct: "Richtig", retry: "Prüfe den physikalischen Zusammenhang noch einmal", continue: "Weiter", topic: "Thema" },
  hu: { correct: "Helyes", retry: "Vizsgáld meg újra a fizikai kapcsolatot", continue: "Tovább", topic: "Téma" },
  ro: { correct: "Corect", retry: "Verifică din nou legătura fizică", continue: "Continuă", topic: "Temă" },
  en: { correct: "Correct", retry: "Check the physical connection once more", continue: "Continue", topic: "Topic" },
};

export default function PhysicsSkillGame({ lang, round, onDone }: {
  lang: PhysicsSkillLang;
  round: PhysicsSkillRound;
  onDone?: (score: number, total?: number) => void;
}) {
  const t = COPY[lang] ?? COPY.en;
  const [selected, setSelected] = useState<string | null>(null);
  const [solved, setSolved] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    setSelected(null);
    setSolved(false);
    setAttempts(0);
    return () => { if (timer.current !== null) window.clearTimeout(timer.current); };
  }, [round.id]);

  function choose(option: string) {
    if (solved || selected !== null) return;
    setSelected(option);
    setAttempts((value) => value + 1);
    if (option === round.correctAnswer) {
      setSolved(true);
      return;
    }
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setSelected(null);
      timer.current = null;
    }, 650);
  }

  return (
    <section className="relative min-h-[clamp(430px,72dvh,680px)] overflow-hidden rounded-2xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top,#14532d55,#020617_58%)] p-4 text-white shadow-2xl sm:p-6">
      <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-2xl">
        <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-black/25">
          <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-300" style={{ width: `${Math.max(12, round.level * 20)}%` }} />
        </div>
        <header className="mb-4 flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-200/25 bg-cyan-300/10 text-cyan-200"><Atom size={24} aria-hidden="true" /></span>
          <div>
            <h2 className="text-xl font-black sm:text-2xl">{round.title}</h2>
            <p className="mt-1 text-sm text-white/65">{round.instruction}</p>
          </div>
        </header>
        <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm">
          <span className="font-semibold">{t.topic}: {round.context}</span>
          <span className="shrink-0 rounded-full border border-cyan-200/25 bg-cyan-300/10 px-2.5 py-1 text-xs font-black text-cyan-100">L{round.level}</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[.04] p-4">
          <p className="text-lg font-bold leading-snug sm:text-xl">{round.prompt}</p>
        </div>
        <PhysicsSkillMechanic key={round.id} gameId={round.gameId} lang={lang} level={round.level} context={round.context}
          options={round.options} correctAnswer={round.correctAnswer} selected={selected} solved={solved}
          disabled={solved || selected !== null} onChoose={choose} />
        <AnimatePresence mode="wait">
          {selected && !solved && (
            <motion.p key="retry" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="status" className="mt-3 rounded-lg border border-rose-300/20 bg-rose-500/10 px-3 py-2 text-center font-bold text-rose-200">{t.retry}</motion.p>
          )}
          {solved && (
            <motion.div key="solved" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-500/10 p-4">
              <p className="flex items-center gap-2 font-black text-emerald-200"><CheckCircle2 size={19} aria-hidden="true" />{t.correct}</p>
              <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-white/75"><Lightbulb size={18} className="mt-0.5 shrink-0 text-amber-300" aria-hidden="true" /><span>{round.explanation}</span></p>
              <button type="button" onClick={() => onDone?.(attempts <= 1 ? 1 : 0.8, 1)} className="mt-4 min-h-12 w-full rounded-xl bg-cyan-300 px-4 font-black text-slate-950 transition active:scale-[.985]">{t.continue}</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
