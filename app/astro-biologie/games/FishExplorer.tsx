"use client";

import React, { useState, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface MCQQuestion {
  question: string;
  choices: string[];
  answer: string;
}

type Phase = "info" | "question";
type Lang = "en" | "de" | "hu" | "ro";

interface Props {
  lang: Lang;
  onDone: (score: number, total: number) => void;
  color?: string;
}

// ---------------------------------------------------------------------------
// LABELS — placeholder strings; fill in all four languages before shipping
// ---------------------------------------------------------------------------

const LABELS: Record<string, Record<string, string>> = {
  en: {
    gotIt: "Got it! →",
    next: "Next",
    finish: "Finish",
    correct: "Correct! ✓",
    wrong: "Not quite — try again",
    orderInProgress: "Keep going!",
    orderDone: "Perfect order! ✓",

    // Round 1 — MCQ
    r1_info_title: "Round 1 Title",
    r1_info_text: "Round 1 info explanation goes here. Describe the concept the student will be quizzed on.",
    r1_title: "Round 1 Question Title",
    r1_hint: "Round 1 hint for the student.",
    // question keys
    r1_q1: "Round 1 · Question 1 text",
    r1_q2: "Round 1 · Question 2 text",
    r1_q3: "Round 1 · Question 3 text",
    // choice keys
    r1_a: "Choice A",
    r1_b: "Choice B",
    r1_c: "Choice C",
    r1_d: "Choice D",

    // Round 2 — MCQ
    r2_info_title: "Round 2 Title",
    r2_info_text: "Round 2 info explanation goes here.",
    r2_title: "Round 2 Question Title",
    r2_hint: "Round 2 hint.",
    r2_q1: "Round 2 · Question 1 text",
    r2_q2: "Round 2 · Question 2 text",
    r2_q3: "Round 2 · Question 3 text",
    r2_a: "Choice A",
    r2_b: "Choice B",
    r2_c: "Choice C",
    r2_d: "Choice D",

    // Round 3 — MCQ
    r3_info_title: "Round 3 Title",
    r3_info_text: "Round 3 info explanation goes here.",
    r3_title: "Round 3 Question Title",
    r3_hint: "Round 3 hint.",
    r3_q1: "Round 3 · Question 1 text",
    r3_q2: "Round 3 · Question 2 text",
    r3_a: "Choice A",
    r3_b: "Choice B",
    r3_c: "Choice C",

    // Round 4 — ORDER (tap in sequence)
    r4_info_title: "Round 4 Title",
    r4_info_text: "Round 4 info explanation goes here. Explain what sequence the student must tap.",
    r4_title: "Round 4 Order Title",
    r4_hint: "Tap the items in the correct order.",
    // sequence item keys (must match ORDER_SEQUENCE array below)
    r4_step1: "Step 1 label",
    r4_step2: "Step 2 label",
    r4_step3: "Step 3 label",
    r4_step4: "Step 4 label",

    // Round 5 — MCQ (review)
    r5_info_title: "Round 5 · Quick Review",
    r5_info_text: "Let's go over what you've learned! Mixed questions from all topics.",
    r5_title: "Quick Review",
    r5_hint: "Mixed questions from all rounds.",
  },

  de: {
    gotIt: "Verstanden! →",
    next: "Weiter",
    finish: "Fertig",
    correct: "Richtig! ✓",
    wrong: "Nicht ganz — versuch es nochmal",
    orderInProgress: "Weiter so!",
    orderDone: "Perfekte Reihenfolge! ✓",

    r1_info_title: "Runde 1 Titel",
    r1_info_text: "Runde 1 Erklärung kommt hier hin.",
    r1_title: "Runde 1 Fragetitel",
    r1_hint: "Runde 1 Hinweis.",
    r1_q1: "Runde 1 · Frage 1",
    r1_q2: "Runde 1 · Frage 2",
    r1_q3: "Runde 1 · Frage 3",
    r1_a: "Antwort A",
    r1_b: "Antwort B",
    r1_c: "Antwort C",
    r1_d: "Antwort D",

    r2_info_title: "Runde 2 Titel",
    r2_info_text: "Runde 2 Erklärung kommt hier hin.",
    r2_title: "Runde 2 Fragetitel",
    r2_hint: "Runde 2 Hinweis.",
    r2_q1: "Runde 2 · Frage 1",
    r2_q2: "Runde 2 · Frage 2",
    r2_q3: "Runde 2 · Frage 3",
    r2_a: "Antwort A",
    r2_b: "Antwort B",
    r2_c: "Antwort C",
    r2_d: "Antwort D",

    r3_info_title: "Runde 3 Titel",
    r3_info_text: "Runde 3 Erklärung kommt hier hin.",
    r3_title: "Runde 3 Fragetitel",
    r3_hint: "Runde 3 Hinweis.",
    r3_q1: "Runde 3 · Frage 1",
    r3_q2: "Runde 3 · Frage 2",
    r3_a: "Antwort A",
    r3_b: "Antwort B",
    r3_c: "Antwort C",

    r4_info_title: "Runde 4 Titel",
    r4_info_text: "Runde 4 Erklärung kommt hier hin.",
    r4_title: "Runde 4 Reihenfolge",
    r4_hint: "Tippe die Elemente in der richtigen Reihenfolge.",
    r4_step1: "Schritt 1",
    r4_step2: "Schritt 2",
    r4_step3: "Schritt 3",
    r4_step4: "Schritt 4",

    r5_info_title: "Runde 5 · Wiederholung",
    r5_info_text: "Lass uns wiederholen! Gemischte Fragen aus allen Themen.",
    r5_title: "Schnelle Wiederholung",
    r5_hint: "Gemischte Fragen aus allen Runden.",
  },

  hu: {
    gotIt: "Értem! →",
    next: "Tovább",
    finish: "Befejezés",
    correct: "Helyes! ✓",
    wrong: "Nem egészen — próbáld újra",
    orderInProgress: "Csak így tovább!",
    orderDone: "Tökéletes sorrend! ✓",

    r1_info_title: "1. kör cím",
    r1_info_text: "Az 1. kör magyarázata ide kerül.",
    r1_title: "1. kör kérdéscím",
    r1_hint: "1. kör tipp.",
    r1_q1: "1. kör · 1. kérdés",
    r1_q2: "1. kör · 2. kérdés",
    r1_q3: "1. kör · 3. kérdés",
    r1_a: "A válasz",
    r1_b: "B válasz",
    r1_c: "C válasz",
    r1_d: "D válasz",

    r2_info_title: "2. kör cím",
    r2_info_text: "A 2. kör magyarázata ide kerül.",
    r2_title: "2. kör kérdéscím",
    r2_hint: "2. kör tipp.",
    r2_q1: "2. kör · 1. kérdés",
    r2_q2: "2. kör · 2. kérdés",
    r2_q3: "2. kör · 3. kérdés",
    r2_a: "A válasz",
    r2_b: "B válasz",
    r2_c: "C válasz",
    r2_d: "D válasz",

    r3_info_title: "3. kör cím",
    r3_info_text: "A 3. kör magyarázata ide kerül.",
    r3_title: "3. kör kérdéscím",
    r3_hint: "3. kör tipp.",
    r3_q1: "3. kör · 1. kérdés",
    r3_q2: "3. kör · 2. kérdés",
    r3_a: "A válasz",
    r3_b: "B válasz",
    r3_c: "C válasz",

    r4_info_title: "4. kör cím",
    r4_info_text: "A 4. kör magyarázata ide kerül.",
    r4_title: "4. kör · Sorrend",
    r4_hint: "Koppints az elemekre a helyes sorrendben.",
    r4_step1: "1. lépés",
    r4_step2: "2. lépés",
    r4_step3: "3. lépés",
    r4_step4: "4. lépés",

    r5_info_title: "5. kör · Összefoglalás",
    r5_info_text: "Nézzük át, amit tanultál! Vegyes kérdések minden témából.",
    r5_title: "Gyors összefoglalás",
    r5_hint: "Vegyes kérdések az összes körből.",
  },

  ro: {
    gotIt: "Am înțeles! →",
    next: "Înainte",
    finish: "Gata",
    correct: "Corect! ✓",
    wrong: "Nu chiar — mai încearcă",
    orderInProgress: "Continuă!",
    orderDone: "Ordine perfectă! ✓",

    r1_info_title: "Runda 1 Titlu",
    r1_info_text: "Explicația rundei 1 vine aici.",
    r1_title: "Runda 1 Titlu întrebare",
    r1_hint: "Indiciu runda 1.",
    r1_q1: "Runda 1 · Întrebarea 1",
    r1_q2: "Runda 1 · Întrebarea 2",
    r1_q3: "Runda 1 · Întrebarea 3",
    r1_a: "Răspuns A",
    r1_b: "Răspuns B",
    r1_c: "Răspuns C",
    r1_d: "Răspuns D",

    r2_info_title: "Runda 2 Titlu",
    r2_info_text: "Explicația rundei 2 vine aici.",
    r2_title: "Runda 2 Titlu întrebare",
    r2_hint: "Indiciu runda 2.",
    r2_q1: "Runda 2 · Întrebarea 1",
    r2_q2: "Runda 2 · Întrebarea 2",
    r2_q3: "Runda 2 · Întrebarea 3",
    r2_a: "Răspuns A",
    r2_b: "Răspuns B",
    r2_c: "Răspuns C",
    r2_d: "Răspuns D",

    r3_info_title: "Runda 3 Titlu",
    r3_info_text: "Explicația rundei 3 vine aici.",
    r3_title: "Runda 3 Titlu întrebare",
    r3_hint: "Indiciu runda 3.",
    r3_q1: "Runda 3 · Întrebarea 1",
    r3_q2: "Runda 3 · Întrebarea 2",
    r3_a: "Răspuns A",
    r3_b: "Răspuns B",
    r3_c: "Răspuns C",

    r4_info_title: "Runda 4 Titlu",
    r4_info_text: "Explicația rundei 4 vine aici.",
    r4_title: "Runda 4 · Ordine",
    r4_hint: "Atinge elementele în ordinea corectă.",
    r4_step1: "Pasul 1",
    r4_step2: "Pasul 2",
    r4_step3: "Pasul 3",
    r4_step4: "Pasul 4",

    r5_info_title: "Runda 5 · Recapitulare",
    r5_info_text: "Să recapitulăm ce ai învățat! Întrebări mixte din toate temele.",
    r5_title: "Recapitulare rapidă",
    r5_hint: "Întrebări mixte din toate rundele.",
  },
};

// ---------------------------------------------------------------------------
// Round data — replace choice/answer keys with real LABELS keys when filling
// ---------------------------------------------------------------------------

// Rounds 0, 1, 2, 4 are MCQ.  Round 3 is ORDER.
// Each entry is a pool; the used set is shuffled once on mount.

const R1_POOL: MCQQuestion[] = [
  { question: "r1_q1", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_a" },
  { question: "r1_q2", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_b" },
  { question: "r1_q3", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_c" },
];

const R2_POOL: MCQQuestion[] = [
  { question: "r2_q1", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_a" },
  { question: "r2_q2", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_b" },
  { question: "r2_q3", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_c" },
];

const R3_POOL: MCQQuestion[] = [
  { question: "r3_q1", choices: ["r3_a", "r3_b", "r3_c"], answer: "r3_a" },
  { question: "r3_q2", choices: ["r3_a", "r3_b", "r3_c"], answer: "r3_b" },
];

// The canonical sequence for round 4 (ORDER).
// Keys must match entries in LABELS (r4_step1 … r4_step4).
const ORDER_SEQUENCE = ["r4_step1", "r4_step2", "r4_step3", "r4_step4"] as const;
type OrderKey = (typeof ORDER_SEQUENCE)[number];

const R5_POOL: MCQQuestion[] = [
  // Review — pull 3 representative questions from earlier rounds
  { question: "r1_q1", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_a" },
  { question: "r2_q1", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_a" },
  { question: "r3_q1", choices: ["r3_a", "r3_b", "r3_c"], answer: "r3_a" },
];

// ---------------------------------------------------------------------------
// Per-round meta: info titles, info text keys, SVG slot identifiers, question
// titles and hints.  These reference keys already present in LABELS.
// ---------------------------------------------------------------------------

interface RoundMeta {
  infoTitle: string;  // LABELS key for info card title
  infoText: string;   // LABELS key for info card body text
  svgSlot: string;    // identifier for the SVG illustration slot comment
  qTitle: string;     // LABELS key for question-phase heading
  qHint: string;      // LABELS key for question-phase sub-hint
}

const ROUND_META: RoundMeta[] = [
  { infoTitle: "r1_info_title", infoText: "r1_info_text", svgSlot: "SVG_R1", qTitle: "r1_title", qHint: "r1_hint" },
  { infoTitle: "r2_info_title", infoText: "r2_info_text", svgSlot: "SVG_R2", qTitle: "r2_title", qHint: "r2_hint" },
  { infoTitle: "r3_info_title", infoText: "r3_info_text", svgSlot: "SVG_R3", qTitle: "r3_title", qHint: "r3_hint" },
  { infoTitle: "r4_info_title", infoText: "r4_info_text", svgSlot: "SVG_R4", qTitle: "r4_title", qHint: "r4_hint" },
  { infoTitle: "r5_info_title", infoText: "r5_info_text", svgSlot: "SVG_R5", qTitle: "r5_title", qHint: "r5_hint" },
];

const TOTAL_ROUNDS = 5;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------------------------------------------------------------------------
// SVG illustration slot placeholders — replace each with a real <svg> element.
// The components below render a labeled placeholder box at the correct size.
// ---------------------------------------------------------------------------

function SvgPlaceholder({ slot, color }: { slot: string; color: string }) {
  return (
    <div
      className="w-full max-w-[220px] h-[140px] rounded-2xl flex items-center justify-center text-xs font-bold"
      style={{
        background: `${color}18`,
        border: `2px dashed ${color}55`,
        color: `${color}99`,
      }}
    >
      {/* {slot} — replace this component with the real SVG */}
      {slot}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

function FishExplorer({ color, lang = "de", onDone }: Props) {
  const t = LABELS[lang] ?? LABELS.de;

  // Shuffle question pools once on mount
  const r1Qs = useMemo(() => shuffle(R1_POOL), []);
  const r2Qs = useMemo(() => shuffle(R2_POOL), []);
  const r3Qs = useMemo(() => shuffle(R3_POOL), []);
  const r5Qs = useMemo(() => shuffle(R5_POOL), []);

  // Scramble the ORDER items once on mount so the sequence isn't revealed
  const [scrambled] = useState<OrderKey[]>(() => shuffle([...ORDER_SEQUENCE]));

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------
  const [round, setRound]         = useState(0);
  const [phase, setPhase]         = useState<Phase>("info");
  const [subIdx, setSubIdx]       = useState(0);

  // MCQ state
  const [selected, setSelected]   = useState<string | null>(null);
  const [locked, setLocked]       = useState(false);

  // ORDER state
  const [tapped, setTapped]       = useState<string[]>([]);
  const [orderWrong, setOrderWrong] = useState<string | null>(null);

  // Score tracking via refs (avoid stale-closure issues in callbacks)
  const scoreRef = useRef(0);
  const totalRef = useRef(0);

  // ---------------------------------------------------------------------------
  // Navigation helpers
  // ---------------------------------------------------------------------------

  const resetSub = useCallback(() => {
    setSelected(null);
    setLocked(false);
  }, []);

  /** Advance to the next round, or call onDone if this was the last round. */
  const advanceRound = useCallback(() => {
    if (round >= TOTAL_ROUNDS - 1) {
      onDone(scoreRef.current, totalRef.current);
    } else {
      setRound(r => r + 1);
      setSubIdx(0);
      setPhase("info");
      resetSub();
      setTapped([]);
      setOrderWrong(null);
    }
  }, [round, onDone, resetSub]);

  /**
   * Advance to the next sub-question within a MCQ round.
   * If this is the last question, move to the next round (or finish).
   */
  const advanceSub = useCallback((qs: MCQQuestion[], isLastRound = false) => {
    if (subIdx < qs.length - 1) {
      setSubIdx(i => i + 1);
      resetSub();
    } else {
      if (isLastRound) {
        onDone(scoreRef.current, totalRef.current);
      } else {
        advanceRound();
      }
    }
  }, [subIdx, advanceRound, onDone, resetSub]);

  // ---------------------------------------------------------------------------
  // Interaction handlers
  // ---------------------------------------------------------------------------

  /** Handle "Got it!" button on info card — transitions to question phase. */
  const handleNext = useCallback(() => {
    setPhase("question");
  }, []);

  /**
   * Handle a choice tap in MCQ rounds.
   * Locks the selection and records the score point.
   */
  const handleAnswer = useCallback((key: string, correct: string) => {
    if (locked) return;
    setSelected(key);
    setLocked(true);
    totalRef.current += 1;
    if (key === correct) {
      scoreRef.current += 1;
    }
  }, [locked]);

  /**
   * Handle a tap on an item in the ORDER round (round 4).
   * Checks whether the tapped key is the next expected step.
   * On correct: appends to tapped list. When sequence is complete, scores point
   *   and auto-advances after a short delay.
   * On wrong: flashes the button red, does NOT count as a score point, and
   *   allows retry.
   */
  const handleOrderTap = useCallback((key: string) => {
    if (tapped.includes(key)) return;
    const expected = ORDER_SEQUENCE[tapped.length];
    if (key === expected) {
      const next = [...tapped, key];
      setTapped(next);
      setOrderWrong(null);
      if (next.length === ORDER_SEQUENCE.length) {
        totalRef.current += 1;
        scoreRef.current += 1;
        setTimeout(() => advanceRound(), 700);
      }
    } else {
      setOrderWrong(key);
      // Wrong tap on ORDER does NOT increment totalRef — only the final
      // full completion awards one point.
      setTimeout(() => setOrderWrong(null), 600);
    }
  }, [tapped, advanceRound]);

  // ---------------------------------------------------------------------------
  // Render helpers
  // ---------------------------------------------------------------------------

  const meta = ROUND_META[round];

  /** Render the "Got it!" / "Next" / "Finish" button */
  const renderContinueBtn = (onClick: () => void, label: string) => (
    <motion.button
      onClick={onClick}
      className="w-full max-w-xs py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
      style={{
        background: `linear-gradient(135deg, ${color}55, ${color}99)`,
        border: `2px solid ${color}`,
      }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {label} <ChevronRight size={16} />
    </motion.button>
  );

  // ---------------------------------------------------------------------------
  // INFO phase render
  // ---------------------------------------------------------------------------

  const renderInfo = () => (
    <>
      <p className="text-xl font-black text-white text-center">
        {t[meta.infoTitle]}
      </p>

      {/* SVG illustration slot — replace SvgPlaceholder with real <svg> */}
      {/* {meta.svgSlot} */}
      <SvgPlaceholder slot={meta.svgSlot} color={color} />

      <div
        className="w-full max-w-xs rounded-2xl px-4 py-4 text-center"
        style={{ background: "rgba(255,255,255,0.06)", border: `1.5px solid ${color}33` }}
      >
        <p className="text-sm font-semibold text-white/85 leading-relaxed">
          {t[meta.infoText]}
        </p>
      </div>

      {renderContinueBtn(handleNext, t.gotIt)}
    </>
  );

  // ---------------------------------------------------------------------------
  // MCQ phase render
  // ---------------------------------------------------------------------------

  const renderMCQ = (qs: MCQQuestion[], isLastRound = false) => {
    const q = qs[subIdx];
    const isCorrect = locked && selected === q.answer;
    const isFinishBtn = isLastRound && subIdx === qs.length - 1;

    return (
      <>
        {/* Sub-question progress dots (only shown when pool has >1 question) */}
        {qs.length > 1 && (
          <div className="flex gap-1 justify-center mb-1">
            {qs.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full transition-colors"
                style={{
                  background:
                    i < subIdx ? "#00FF88"
                    : i === subIdx ? color
                    : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        )}

        <p className="text-xl font-black text-white text-center">
          {t[meta.qTitle]}
        </p>
        <p className="text-white/60 text-xs font-bold text-center px-4">
          {t[meta.qHint]}
        </p>

        {/* Question card */}
        <div
          className="w-full max-w-xs rounded-2xl px-4 py-4 text-center"
          style={{ background: "rgba(255,255,255,0.06)", border: `1.5px solid ${color}33` }}
        >
          <p className="text-base font-semibold text-white/90 leading-snug">
            {t[q.question]}
          </p>
        </div>

        {/* Choice buttons */}
        <div className="flex flex-col gap-2 w-full max-w-xs">
          {q.choices.map(k => {
            const isThis = selected === k;
            const isRight = k === q.answer;
            let bg     = "rgba(255,255,255,0.06)";
            let border = "rgba(255,255,255,0.1)";
            let tc     = "text-white";

            if (locked) {
              if (isRight) {
                bg = `${color}33`; border = color;
              } else if (isThis) {
                bg = "#FF2D7833"; border = "#FF2D78"; tc = "text-white/70";
              }
            } else if (isThis) {
              bg = `${color}22`; border = color;
            }

            return (
              <motion.button
                key={k}
                onClick={() => handleAnswer(k, q.answer)}
                disabled={locked}
                className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all ${tc}`}
                style={{ background: bg, border: `2px solid ${border}` }}
                whileTap={locked ? {} : { scale: 0.97 }}
              >
                {t[k]}
              </motion.button>
            );
          })}
        </div>

        {/* Feedback text + next button */}
        {locked && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold text-center"
            style={{ color: isCorrect ? "#00FF88" : "#FF2D78" }}
          >
            {isCorrect ? t.correct : t.wrong}
          </motion.p>
        )}
        {locked && renderContinueBtn(
          () => advanceSub(qs, isLastRound),
          isFinishBtn ? t.finish : t.next,
        )}
      </>
    );
  };

  // ---------------------------------------------------------------------------
  // ORDER phase render (round 4)
  // ---------------------------------------------------------------------------

  const renderOrder = () => {
    const allDone = tapped.length === ORDER_SEQUENCE.length;

    return (
      <>
        <p className="text-xl font-black text-white text-center">
          {t[meta.qTitle]}
        </p>
        <p className="text-white/60 text-xs font-bold text-center px-4">
          {t[meta.qHint]}
        </p>

        {/* Already-tapped items displayed in order */}
        <div className="flex gap-2 flex-wrap justify-center min-h-[2rem]">
          {tapped.map((k, i) => (
            <motion.span
              key={k}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-3 py-1 rounded-full text-xs font-black text-white"
              style={{ background: `${color}55`, border: `1.5px solid ${color}` }}
            >
              {i + 1}. {t[k]}
            </motion.span>
          ))}
        </div>

        {/* Status text */}
        <p
          className="text-xs font-bold text-center"
          style={{ color: allDone ? "#00FF88" : "rgba(255,255,255,0.4)" }}
        >
          {allDone ? t.orderDone : t.orderInProgress}
        </p>

        {/* Scrambled tap buttons */}
        <div className="flex flex-col gap-2 w-full max-w-xs">
          {scrambled.map(key => {
            const done    = tapped.includes(key);
            const isWrong = orderWrong === key;

            return (
              <motion.button
                key={key}
                onClick={() => handleOrderTap(key)}
                disabled={done}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white"
                style={{
                  background: done ? `${color}22` : "rgba(255,255,255,0.06)",
                  border: `2px solid ${
                    done ? color : isWrong ? "#FF2D78" : "rgba(255,255,255,0.1)"
                  }`,
                  opacity: done ? 0.45 : 1,
                }}
                animate={isWrong ? { x: [-6, 6, -4, 4, 0] } : {}}
                transition={{ duration: 0.35 }}
                whileTap={done ? {} : { scale: 0.97 }}
              >
                {t[key]}
              </motion.button>
            );
          })}
        </div>
      </>
    );
  };

  // ---------------------------------------------------------------------------
  // Root render
  // ---------------------------------------------------------------------------

  const getQueuedPool = (r: number): MCQQuestion[] => {
    if (r === 0) return r1Qs;
    if (r === 1) return r2Qs;
    if (r === 2) return r3Qs;
    return r5Qs; // r === 4
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      {/* Progress dots — one per round */}
      <div className="flex justify-center gap-1.5 pt-4 pb-2">
        {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full transition-colors"
            style={{
              background:
                i < round ? "#00FF88"
                : i === round ? color
                : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>

      {/* Main content area — AnimatePresence keyed on round+phase+subIdx */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${round}-${phase}-${subIdx}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-4"
        >
          {phase === "info" && renderInfo()}

          {phase === "question" && round !== 3 && renderMCQ(
            getQueuedPool(round),
            round === 4,
          )}

          {phase === "question" && round === 3 && renderOrder()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default memo(FishExplorer);
