"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS: Record<string, Record<string, string>> = {
  en: { title: "Probability", next: "Next", done: "Done!", tapToReveal: "Tap to reveal", hint: "Discover probability P(event) = favorable / total", favorable: "Favorable", total: "Total", probability: "Probability" },
  hu: { title: "Valószínűség", next: "Tovább", done: "Kész!", tapToReveal: "Koppints a felfedéshez", hint: "Fedezd fel a valószínűséget: P = kedvező / összes", favorable: "Kedvező", total: "Összes", probability: "Valószínűség" },
  de: { title: "Wahrscheinlichkeit", next: "Weiter", done: "Fertig!", tapToReveal: "Tippen zum Aufdecken", hint: "Entdecke: P(Ereignis) = günstige / mögliche", favorable: "Günstige", total: "Mögliche", probability: "Wahrscheinlichkeit" },
  ro: { title: "Probabilitate", next: "Următorul", done: "Gata!", tapToReveal: "Atinge pentru a dezvălui", hint: "Descoperă P(eveniment) = favorabile / total", favorable: "Favorabile", total: "Total", probability: "Probabilitate" },
};

interface Round {
  type: "balls" | "dice" | "coins";
  scenario: Record<string, string>; // { en, hu, de, ro }
  favorable: number;
  totalOutcomes: number;
  fraction: string; // "3/10"
  simplified?: string; // "1/2"
  visual: { color: string; count: number }[];
}

function makeRounds(): Round[] {
  const pool: Round[] = [
    {
      type: "balls", scenario: { en: "P(red ball)", hu: "P(piros golyó)", de: "P(rote Kugel)", ro: "P(bilă roșie)" },
      favorable: 3, totalOutcomes: 10, fraction: "3/10",
      visual: [{ color: "#EF4444", count: 3 }, { color: "#3B82F6", count: 4 }, { color: "#10B981", count: 3 }],
    },
    {
      type: "balls", scenario: { en: "P(blue ball)", hu: "P(kék golyó)", de: "P(blaue Kugel)", ro: "P(bilă albastră)" },
      favorable: 5, totalOutcomes: 8, fraction: "5/8",
      visual: [{ color: "#3B82F6", count: 5 }, { color: "#EF4444", count: 3 }],
    },
    {
      type: "dice", scenario: { en: "P(even number)", hu: "P(páros szám)", de: "P(gerade Zahl)", ro: "P(număr par)" },
      favorable: 3, totalOutcomes: 6, fraction: "3/6", simplified: "1/2",
      visual: [{ color: "#F59E0B", count: 6 }],
    },
    {
      type: "dice", scenario: { en: "P(number > 4)", hu: "P(szám > 4)", de: "P(Zahl > 4)", ro: "P(număr > 4)" },
      favorable: 2, totalOutcomes: 6, fraction: "2/6", simplified: "1/3",
      visual: [{ color: "#F59E0B", count: 6 }],
    },
    {
      type: "coins", scenario: { en: "P(2 heads)", hu: "P(2 fej)", de: "P(2 Köpfe)", ro: "P(2 capete)" },
      favorable: 1, totalOutcomes: 4, fraction: "1/4",
      visual: [{ color: "#FFD700", count: 4 }],
    },
    {
      type: "balls", scenario: { en: "P(green ball)", hu: "P(zöld golyó)", de: "P(grüne Kugel)", ro: "P(bilă verde)" },
      favorable: 4, totalOutcomes: 12, fraction: "4/12", simplified: "1/3",
      visual: [{ color: "#10B981", count: 4 }, { color: "#EF4444", count: 4 }, { color: "#3B82F6", count: 4 }],
    },
    {
      type: "dice", scenario: { en: "P(number ≤ 2)", hu: "P(szám ≤ 2)", de: "P(Zahl ≤ 2)", ro: "P(număr ≤ 2)" },
      favorable: 2, totalOutcomes: 6, fraction: "2/6", simplified: "1/3",
      visual: [{ color: "#F59E0B", count: 6 }],
    },
    {
      type: "balls", scenario: { en: "P(not red)", hu: "P(nem piros)", de: "P(nicht rot)", ro: "P(nu roșu)" },
      favorable: 7, totalOutcomes: 10, fraction: "7/10",
      visual: [{ color: "#EF4444", count: 3 }, { color: "#3B82F6", count: 4 }, { color: "#10B981", count: 3 }],
    },
  ];
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, 6);
}

interface Props {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

export default function ProbabilityExplorer({ color, onDone, lang = "en" }: Props) {
  const t = LABELS[lang] ?? LABELS.en;
  const rounds = useMemo(makeRounds, []);
  const total = rounds.length;
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0);

  const round = rounds[idx];
  const finished = idx >= total;

  const handleTap = useCallback(() => {
    if (step < 3) setStep(s => s + 1);
  }, [step]);

  const handleNext = useCallback(() => {
    if (idx + 1 >= total) {
      onDone(total, total);
    } else {
      setIdx(i => i + 1);
      setStep(0);
    }
  }, [idx, total, onDone]);

  if (finished || !round) return null;

  // Flatten visual balls
  const balls: string[] = [];
  for (const v of round.visual) {
    for (let i = 0; i < v.count; i++) balls.push(v.color);
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4"
      style={{ background: "linear-gradient(135deg, #0a0a2e 0%, #1a0a3e 100%)" }}>
      <div className="absolute top-4 left-4 right-4 flex items-center gap-2">
        <span className="text-white/60 text-xs font-bold">{idx + 1}/{total}</span>
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div className="h-full rounded-full" style={{ background: color }}
            animate={{ width: `${((idx + 1) / total) * 100}%` }} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
          className="flex flex-col items-center gap-4 w-full max-w-xs" onClick={step < 3 ? handleTap : undefined}>

          <p className="text-xs font-semibold text-white/50">{t.hint}</p>

          {/* Question */}
          <div className="rounded-full px-5 py-2" style={{ background: color + "22", border: `1px solid ${color}44` }}>
            <span className="text-lg font-black" style={{ color }}>
              {round.scenario[lang] ?? round.scenario.en} = ?
            </span>
          </div>

          {/* Visual: balls/dice */}
          <div className="w-full rounded-2xl p-4 flex flex-wrap justify-center gap-2" style={{ background: "rgba(255,255,255,0.04)" }}>
            {round.type === "balls" && balls.map((c, i) => (
              <motion.div key={i}
                className="w-8 h-8 rounded-full"
                style={{ background: c, boxShadow: `0 0 8px ${c}55` }}
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: i * 0.04, type: "spring" }}
              />
            ))}
            {round.type === "dice" && (
              <div className="flex gap-2">
                {[1,2,3,4,5,6].map(n => (
                  <div key={n} className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-black"
                    style={{ background: step >= 1 && (
                      (round.scenario.en.includes("even") && n % 2 === 0) ||
                      (round.scenario.en.includes("> 4") && n > 4) ||
                      (round.scenario.en.includes("≤ 2") && n <= 2)
                    ) ? color + "44" : "rgba(255,255,255,0.08)",
                    border: `1.5px solid ${step >= 1 && (
                      (round.scenario.en.includes("even") && n % 2 === 0) ||
                      (round.scenario.en.includes("> 4") && n > 4) ||
                      (round.scenario.en.includes("≤ 2") && n <= 2)
                    ) ? color : "rgba(255,255,255,0.15)"}`,
                    color: "white" }}>
                    {n}
                  </div>
                ))}
              </div>
            )}
            {round.type === "coins" && (
              <div className="text-center">
                <div className="flex gap-1 flex-wrap justify-center text-sm font-mono text-white/70">
                  <span className="px-2 py-1 rounded bg-white/10">{lang === "hu" ? "FF" : lang === "de" ? "KK" : "HH"}</span>
                  <span className="px-2 py-1 rounded bg-white/10">{lang === "hu" ? "FÍ" : lang === "de" ? "KZ" : "HT"}</span>
                  <span className="px-2 py-1 rounded bg-white/10">{lang === "hu" ? "ÍF" : lang === "de" ? "ZK" : "TH"}</span>
                  <span className="px-2 py-1 rounded bg-white/10">{lang === "hu" ? "ÍÍ" : lang === "de" ? "ZZ" : "TT"}</span>
                </div>
              </div>
            )}
          </div>

          {/* Step 1: Count favorable & total */}
          {step >= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex gap-3 text-center">
              <div className="rounded-lg px-3 py-1" style={{ background: color + "15", border: `1px solid ${color}33` }}>
                <span className="text-[10px] text-white/40 block">{t.favorable}</span>
                <span className="text-xl font-black text-white">{round.favorable}</span>
              </div>
              <div className="rounded-lg px-3 py-1" style={{ background: "rgba(255,255,255,0.06)" }}>
                <span className="text-[10px] text-white/40 block">{t.total}</span>
                <span className="text-xl font-black text-white">{round.totalOutcomes}</span>
              </div>
            </motion.div>
          )}

          {/* Step 2: Fraction */}
          {step >= 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl px-4 py-2 text-center" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="text-xl font-black text-white">P = {round.favorable}/{round.totalOutcomes} = {round.fraction}</div>
            </motion.div>
          )}

          {/* Step 3: Simplified + result */}
          {step >= 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-1">
              <span className="text-xs text-white/40 font-semibold">{t.probability}</span>
              <span className="text-4xl font-black" style={{ color }}>
                {round.simplified ?? round.fraction}
              </span>
            </motion.div>
          )}

          {step < 3 && (
            <div className="text-white/30 text-xs font-semibold animate-pulse">{t.tapToReveal}</div>
          )}

          {step >= 3 && (
            <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              onClick={handleNext}
              className="mt-1 px-8 py-3 rounded-2xl font-extrabold text-white text-base"
              style={{ background: color }} whileTap={{ scale: 0.95 }}>
              {idx + 1 >= total ? t.done : t.next}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
