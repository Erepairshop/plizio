"use client";
// CountingExplorer — Visual counting & comparing for Grade 1 (island i1)
// Now powered by ExplorerEngine v2 — uses tap-count + compare + mcq rounds.

import { memo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── No-op SVG (interactive rounds don't need an illustration) ───────────────
const noSvg = () => null;

// ─── Animated Counting SVG — step-by-step whiteboard style ───────────────────

const FRUITS = ["🍎", "🍊", "🍋", "🍇", "🍓"];
const FRUIT_COLORS = ["#ef4444", "#f97316", "#eab308", "#8b5cf6", "#ec4899"];

function AnimatedCountingSvg({ lang }: { lang: string }) {
  const [step, setStep] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const maxSteps = 7; // 0=empty, 1-5=fruits appear, 6=total, 7=done

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setStep(prev => {
        if (prev >= maxSteps) {
          if (timerRef.current) clearInterval(timerRef.current);
          return maxSteps;
        }
        return prev + 1;
      });
    }, 700);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const countLabel = lang === "hu" ? "Összesen:" : lang === "de" ? "Insgesamt:" : lang === "ro" ? "Total:" : "Total:";

  return (
    <div className="relative w-full rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }}>
      {/* Shelf / table surface */}
      <div className="relative px-4 pt-6 pb-2">
        {/* Fruits row */}
        <div className="flex justify-center gap-3 mb-3 min-h-[56px]">
          {FRUITS.map((fruit, i) => (
            <AnimatePresence key={i}>
              {step > i && (
                <motion.div
                  initial={{ scale: 0, y: -30, rotate: -20 }}
                  animate={{ scale: 1, y: 0, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.05 }}
                  className="flex flex-col items-center"
                >
                  {/* Fruit */}
                  <motion.span
                    className="text-3xl block"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: i * 0.3 }}
                  >
                    {fruit}
                  </motion.span>
                  {/* Number badge */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-1 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black text-white"
                    style={{ background: FRUIT_COLORS[i], boxShadow: `0 0 8px ${FRUIT_COLORS[i]}60` }}
                  >
                    {i + 1}
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Counting hand pointer animation */}
        {step > 0 && step <= 5 && (
          <motion.div
            className="absolute text-lg pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: 38 + (Math.min(step, 5) - 1) * 48,
              y: 20,
            }}
            transition={{ duration: 0.5 }}
          >
            👆
          </motion.div>
        )}

        {/* Table surface line */}
        <motion.div
          className="h-[2px] rounded-full mx-2"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: step > 0 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Total counter */}
      <AnimatePresence>
        {step >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 pb-4 pt-2"
          >
            <span className="text-white/50 text-sm font-bold">{countLabel}</span>
            <motion.span
              className="text-2xl font-black"
              style={{ color: "#00FF88", textShadow: "0 0 12px rgba(0,255,136,0.4)" }}
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
            >
              5
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg"
            >
              ✨
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress dots at bottom */}
      <div className="flex justify-center gap-1 pb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            animate={{
              background: step > i ? FRUIT_COLORS[i] : "rgba(255,255,255,0.15)",
              scale: step === i + 1 ? [1, 1.4, 1] : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}

function countingSvg(lang: string) {
  return <AnimatedCountingSvg lang={lang} />;
}

// ─── Explorer Definition ─────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    intro_title: "🔢 Let's Count!",
    intro_text: "In this adventure, you'll learn to count objects by tapping them, and compare groups to find which has more!",
    intro_b1: "Tap each object to count it",
    intro_b2: "Compare two groups — which has more?",
    intro_b3: "Numbers help us understand the world around us!",
    q1: "You counted 4 apples. Which number comes next?",
    q1_a: "5", q1_b: "3", q1_c: "6", q1_d: "4",
    q2: "Which is more: 3 cats or 5 dogs?",
    q2_a: "5 dogs", q2_b: "3 cats", q2_c: "They are equal", q2_d: "2 cats",
  },
  de: {
    intro_title: "🔢 Lass uns zählen!",
    intro_text: "In diesem Abenteuer lernst du, Gegenstände durch Antippen zu zählen und Gruppen zu vergleichen!",
    intro_b1: "Tippe auf jedes Objekt, um es zu zählen",
    intro_b2: "Vergleiche zwei Gruppen — welche hat mehr?",
    intro_b3: "Zahlen helfen uns, die Welt zu verstehen!",
    q1: "Du hast 4 Äpfel gezählt. Welche Zahl kommt als nächstes?",
    q1_a: "5", q1_b: "3", q1_c: "6", q1_d: "4",
    q2: "Was ist mehr: 3 Katzen oder 5 Hunde?",
    q2_a: "5 Hunde", q2_b: "3 Katzen", q2_c: "Sie sind gleich", q2_d: "2 Katzen",
  },
  hu: {
    intro_title: "🔢 Számoljunk!",
    intro_text: "Ebben a kalandban megtanulod megszámolni a tárgyakat koppintással, és összehasonlítani csoportokat!",
    intro_b1: "Koppints minden tárgyra a számoláshoz",
    intro_b2: "Hasonlíts össze két csoportot — melyikben van több?",
    intro_b3: "A számok segítenek megérteni a világot!",
    q1: "4 almát számoltál meg. Melyik szám jön ezután?",
    q1_a: "5", q1_b: "3", q1_c: "6", q1_d: "4",
    q2: "Melyik több: 3 macska vagy 5 kutya?",
    q2_a: "5 kutya", q2_b: "3 macska", q2_c: "Egyenlőek", q2_d: "2 macska",
  },
  ro: {
    intro_title: "🔢 Să numărăm!",
    intro_text: "În această aventură vei învăța să numeri obiectele atingându-le și să compari grupuri!",
    intro_b1: "Atinge fiecare obiect pentru a-l număra",
    intro_b2: "Compară două grupuri — care are mai multe?",
    intro_b3: "Numerele ne ajută să înțelegem lumea!",
    q1: "Ai numărat 4 mere. Ce număr urmează?",
    q1_a: "5", q1_b: "3", q1_c: "6", q1_d: "4",
    q2: "Care sunt mai multe: 3 pisici sau 5 câini?",
    q2_a: "5 câini", q2_b: "3 pisici", q2_c: "Sunt egale", q2_d: "2 pisici",
  },
};

const COUNTING_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    // R1: Intro — teach what counting is
    {
      type: "info",
      infoTitle: "intro_title",
      infoText: "intro_text",
      svg: countingSvg,
      bulletKeys: ["intro_b1", "intro_b2", "intro_b3"],
    },
    // R2: Tap to count 🍎
    {
      type: "tap-count",
      infoTitle: "intro_title",
      infoText: "intro_text",
      svg: noSvg,
      tapCount: { emoji: "🍎", count: 4 },
    },
    // R3: Compare two groups
    {
      type: "compare",
      infoTitle: "intro_title",
      infoText: "intro_text",
      svg: noSvg,
      compare: {
        left: { emoji: "🐱", count: 3 },
        right: { emoji: "🐶", count: 5 },
      },
    },
    // R4: Tap to count ⭐
    {
      type: "tap-count",
      infoTitle: "intro_title",
      infoText: "intro_text",
      svg: noSvg,
      tapCount: { emoji: "⭐", count: 6 },
    },
    // R5: Review quiz
    {
      type: "mcq",
      infoTitle: "intro_title",
      infoText: "intro_text",
      svg: noSvg,
      questions: [
        { question: "q1", choices: ["q1_a", "q1_b", "q1_c", "q1_d"], answer: "q1_a" },
        { question: "q2", choices: ["q2_a", "q2_b", "q2_c", "q2_d"], answer: "q2_a" },
      ],
    },
  ],
};

// ─── Wrapper Component ───────────────────────────────────────────────────────

const CountingExplorer = memo(function CountingExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  return (
    <ExplorerEngine
      def={COUNTING_DEF}
      color={color}
      lang={lang}
      grade={1}
      onDone={onDone}
      explorerId="math_g1_counting"
    />
  );
});

export default CountingExplorer;
