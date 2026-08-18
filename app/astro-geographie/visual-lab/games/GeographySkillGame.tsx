"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Lightbulb } from "lucide-react";
import type { GeographySkillLang, GeographySkillRound } from "@/lib/visualLab/geographySkillContent";
import GeographySkillMechanic from "./GeographySkillMechanics";
import { GeographyGameAtmosphere, GeographyPromptCard, geographyGameIdentity } from "./GeographyGameIdentity";

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
  const identity = geographyGameIdentity(round.gameId);
  const IdentityIcon = identity.icon;
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

  return (
    <section className={`relative min-h-[clamp(410px,72dvh,640px)] overflow-hidden rounded-2xl border p-4 text-white shadow-2xl sm:p-6 ${identity.frame}`}>
      <GeographyGameAtmosphere gameId={round.gameId} />
      <div className="relative z-10 mx-auto max-w-2xl">
        <div className={`mb-4 h-1.5 overflow-hidden rounded-full bg-black/25 before:block before:h-full before:w-[var(--progress)] before:rounded-full before:bg-gradient-to-r before:content-[''] ${identity.progressTone}`} style={{ "--progress": `${Math.max(12, round.level * 20)}%` } as React.CSSProperties} />
        <header className="mb-4 flex items-start gap-3">
          <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border ${identity.iconTone}`}>
            <IdentityIcon size={23} aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-xl font-black sm:text-2xl">{round.title}</h2>
            <p className="mt-1 text-sm text-white/65">{round.instruction}</p>
          </div>
        </header>

        <div className={`mb-4 flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm ${identity.contextTone}`}>
          <span className="font-semibold">{t.topic}: {round.context}</span>
          <span className={`shrink-0 border px-2.5 py-1 text-xs font-black ${identity.markerTone}`}>L{round.level}</span>
        </div>

        <GeographyPromptCard gameId={round.gameId} lang={lang} level={round.level}>
          <p className="text-lg font-bold leading-snug sm:text-xl">{round.prompt}</p>
        </GeographyPromptCard>

        <GeographySkillMechanic
          key={round.id}
          gameId={round.gameId}
          lang={lang}
          options={round.options}
          correctAnswer={round.correctAnswer}
          selected={selected}
          solved={solved}
          disabled={solved || selected !== null}
          identity={identity}
          onChoose={choose}
        />

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
