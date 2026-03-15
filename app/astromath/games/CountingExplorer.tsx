"use client";
// CountingExplorer — Visual counting & comparing for Grade 1 (island i1)
// Teaches: count objects by tapping, compare two groups.
// Step-by-step, no wrong answers — pure guided discovery.

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Counting Explorer",
    tapToCount: "Tap each one to count!",
    counted: "counted",
    great: "Great!",
    thereAre: "There are",
    objects: "objects!",
    compare: "Which group has MORE?",
    leftHas: "Left has",
    rightHas: "Right has",
    isMore: "is more!",
    isEqual: "They are equal!",
    tapReveal: "Tap to see the answer",
    next: "Next",
    ready: "Well done!",
  },
  hu: {
    title: "Számolás felfedezés",
    tapToCount: "Koppints mindegyikre a számoláshoz!",
    counted: "megszámolva",
    great: "Szuper!",
    thereAre: "Összesen",
    objects: "van!",
    compare: "Melyik csoportban van TÖBB?",
    leftHas: "Bal oldalon",
    rightHas: "Jobb oldalon",
    isMore: "a több!",
    isEqual: "Egyenlőek!",
    tapReveal: "Koppints a válaszhoz",
    next: "Következő",
    ready: "Ügyes!",
  },
  de: {
    title: "Zählen entdecken",
    tapToCount: "Tippe auf jedes, um zu zählen!",
    counted: "gezählt",
    great: "Super!",
    thereAre: "Es gibt",
    objects: "Stück!",
    compare: "Welche Gruppe hat MEHR?",
    leftHas: "Links hat",
    rightHas: "Rechts hat",
    isMore: "ist mehr!",
    isEqual: "Sie sind gleich!",
    tapReveal: "Tippe für die Antwort",
    next: "Weiter",
    ready: "Toll gemacht!",
  },
  ro: {
    title: "Explorare numărare",
    tapToCount: "Atinge fiecare pentru a număra!",
    counted: "numărate",
    great: "Super!",
    thereAre: "Sunt",
    objects: "obiecte!",
    compare: "Care grup are MAI MULTE?",
    leftHas: "Stânga are",
    rightHas: "Dreapta are",
    isMore: "este mai mult!",
    isEqual: "Sunt egale!",
    tapReveal: "Atinge pentru răspuns",
    next: "Înainte",
    ready: "Bravo!",
  },
};

// ─── Round data ──────────────────────────────────────────────────────────────
type RoundType = "count" | "compare";
interface CountRound { type: "count"; emoji: string; count: number }
interface CompareRound { type: "compare"; leftEmoji: string; leftCount: number; rightEmoji: string; rightCount: number }
type Round = CountRound | CompareRound;

const ROUNDS: Round[] = [
  { type: "count", emoji: "🍎", count: 4 },
  { type: "count", emoji: "⭐", count: 6 },
  { type: "compare", leftEmoji: "🐱", leftCount: 3, rightEmoji: "🐶", rightCount: 5 },
  { type: "count", emoji: "🌸", count: 7 },
  { type: "compare", leftEmoji: "🍊", leftCount: 6, rightEmoji: "🍋", rightCount: 4 },
  { type: "count", emoji: "🦋", count: 5 },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Emoji Grid ──────────────────────────────────────────────────────────────
function EmojiGrid({ emoji, count, tapped, onTap, color }: {
  emoji: string; count: number; tapped: Set<number>; onTap: (i: number) => void; color: string;
}) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {Array.from({ length: count }, (_, i) => (
        <motion.button key={i} onClick={() => onTap(i)}
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl relative"
          style={{
            background: tapped.has(i) ? `${color}33` : "rgba(255,255,255,0.06)",
            border: `2px solid ${tapped.has(i) ? color : "rgba(255,255,255,0.12)"}`,
          }}
          animate={tapped.has(i) ? { scale: [1, 1.15, 1] } : {}}
          transition={{ duration: 0.2 }}
        >
          {emoji}
          {tapped.has(i) && (
            <span className="absolute -top-2 -right-2 text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center"
              style={{ background: color, color: "white" }}>
              {i + 1}
            </span>
          )}
        </motion.button>
      ))}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
const CountingExplorer = memo(function CountingExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [rounds] = useState(() => shuffle(ROUNDS));
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const [revealed, setRevealed] = useState(false);
  // For compare rounds
  const [chosenSide, setChosenSide] = useState<"left" | "right" | null>(null);

  const round = rounds[idx];

  const handleTap = useCallback((i: number) => {
    if (revealed) return;
    setTapped(prev => {
      const next = new Set(prev);
      if (!next.has(i)) next.add(i);
      return next;
    });
  }, [revealed]);

  const handleNext = useCallback(() => {
    if (idx + 1 >= rounds.length) {
      onDone(rounds.length, rounds.length);
      return;
    }
    setIdx(i => i + 1);
    setTapped(new Set());
    setRevealed(false);
    setChosenSide(null);
  }, [idx, rounds.length, onDone]);

  const isCountRound = round.type === "count";
  const allTapped = isCountRound && tapped.size >= (round as CountRound).count;

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-3">
      {/* Progress */}
      <div className="flex gap-1.5 w-full">
        {rounds.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* COUNT round */}
          {isCountRound && (() => {
            const r = round as CountRound;
            return (
              <>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-white/60 text-xs font-bold text-center">{lbl.tapToCount}</p>
                  <SpeakButton text={lbl.tapToCount} lang={lang} size={14} />
                </div>
                <EmojiGrid emoji={r.emoji} count={r.count} tapped={tapped} onTap={handleTap} color={color} />

                {/* Counter */}
                <div className="text-center">
                  <span className="text-2xl font-black" style={{ color: allTapped ? "#00FF88" : color }}>
                    {tapped.size} / {r.count}
                  </span>
                  <span className="text-white/40 text-sm ml-2">{lbl.counted}</span>
                </div>

                {allTapped && !revealed && (
                  <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    onClick={() => setRevealed(true)}
                    className="w-full py-3 rounded-2xl font-black text-white text-sm"
                    style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {lbl.tapReveal}
                  </motion.button>
                )}

                {revealed && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col gap-2 items-center w-full">
                    <div className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
                      <p className="text-center text-sm font-bold text-white/60">{lbl.great}</p>
                      <p className="text-center text-2xl font-black" style={{ color: "#00FF88" }}>
                        {lbl.thereAre} {r.count} {r.emoji} {lbl.objects}
                      </p>
                    </div>
                    <motion.button onClick={handleNext}
                      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                      whileTap={{ scale: 0.97 }}>
                      {idx + 1 >= rounds.length ? lbl.ready : lbl.next} <ChevronRight size={16} />
                    </motion.button>
                  </motion.div>
                )}
              </>
            );
          })()}

          {/* COMPARE round */}
          {!isCountRound && (() => {
            const r = round as CompareRound;
            const moreIsLeft = r.leftCount > r.rightCount;
            const isEqual = r.leftCount === r.rightCount;
            return (
              <>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-white/60 text-xs font-bold text-center">{lbl.compare}</p>
                  <SpeakButton text={lbl.compare} lang={lang} size={14} />
                </div>
                <div className="flex gap-4 w-full">
                  {/* Left group */}
                  <motion.button onClick={() => !revealed && setChosenSide("left")}
                    className="flex-1 rounded-2xl p-3 flex flex-col items-center gap-2"
                    style={{
                      background: chosenSide === "left" ? `${color}22` : "rgba(255,255,255,0.04)",
                      border: `2px solid ${chosenSide === "left" ? color : "rgba(255,255,255,0.12)"}`,
                    }}
                    whileTap={!revealed ? { scale: 0.97 } : {}}>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {Array.from({ length: r.leftCount }, (_, i) => (
                        <span key={i} className="text-xl">{r.leftEmoji}</span>
                      ))}
                    </div>
                  </motion.button>
                  {/* Right group */}
                  <motion.button onClick={() => !revealed && setChosenSide("right")}
                    className="flex-1 rounded-2xl p-3 flex flex-col items-center gap-2"
                    style={{
                      background: chosenSide === "right" ? `${color}22` : "rgba(255,255,255,0.04)",
                      border: `2px solid ${chosenSide === "right" ? color : "rgba(255,255,255,0.12)"}`,
                    }}
                    whileTap={!revealed ? { scale: 0.97 } : {}}>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {Array.from({ length: r.rightCount }, (_, i) => (
                        <span key={i} className="text-xl">{r.rightEmoji}</span>
                      ))}
                    </div>
                  </motion.button>
                </div>

                {chosenSide && !revealed && (
                  <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    onClick={() => setRevealed(true)}
                    className="w-full py-3 rounded-2xl font-black text-white text-sm"
                    style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {lbl.tapReveal}
                  </motion.button>
                )}

                {revealed && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col gap-2 items-center w-full">
                    <div className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
                      <p className="text-center text-sm font-bold text-white/60">
                        {lbl.leftHas} {r.leftCount} · {lbl.rightHas} {r.rightCount}
                      </p>
                      <p className="text-center text-2xl font-black mt-1" style={{ color: "#00FF88" }}>
                        {isEqual ? lbl.isEqual : `${moreIsLeft ? r.leftCount : r.rightCount} ${lbl.isMore}`}
                      </p>
                    </div>
                    <motion.button onClick={handleNext}
                      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                      whileTap={{ scale: 0.97 }}>
                      {idx + 1 >= rounds.length ? lbl.ready : lbl.next} <ChevronRight size={16} />
                    </motion.button>
                  </motion.div>
                )}
              </>
            );
          })()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default CountingExplorer;
