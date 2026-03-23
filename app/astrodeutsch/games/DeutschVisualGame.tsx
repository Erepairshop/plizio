"use client";
// DeutschVisualGame — wraps deutsch-visual components as an interactive quiz game
// Shows 8 visual tasks one at a time, user answers then clicks Prüfen, auto-advances after 1s

import { memo, useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

// ─── Generators ───────────────────────────────────────────────────────────────
import {
  genGenusSortierung,
  genSatzOrdnen,
  genBildBeschriften,
  genFehlerFinden,
  genWortfamilienBaum,
  genGeschichteSortieren,
  genWortartenSortieren,
  genZeitformenZuordnen,
  genSatzgliedMarkieren,
  genKasusMarkieren,
  genAdjektivEndungen,
  type GenusSortItem,
  type SatzOrdnenItem,
  type FehlerFindenItem,
  type WortfamilieItem,
  type WortartenItem,
  type ZeitformItem,
  type SatzgliedItem,
  type KasusItem,
  type AdjektivEndungItem,
} from "@/lib/deutschVisualGenerators";

// ─── Visual components ────────────────────────────────────────────────────────
import GenusSortierung from "@/components/deutsch-visual/GenusSortierung";
import SatzOrdnen from "@/components/deutsch-visual/SatzOrdnen";
import BildBeschriften from "@/components/deutsch-visual/BildBeschriften";
import FehlerFinden from "@/components/deutsch-visual/FehlerFinden";
import WortfamilienBaum from "@/components/deutsch-visual/WortfamilienBaum";
import GeschichteSortieren from "@/components/deutsch-visual/GeschichteSortieren";
import WortartenSortieren from "@/components/deutsch-visual/WortartenSortieren";
import ZeitformenZuordnen from "@/components/deutsch-visual/ZeitformenZuordnen";
import SatzgliedMarkieren from "@/components/deutsch-visual/SatzgliedMarkieren";
import KasusMarkieren from "@/components/deutsch-visual/KasusMarkieren";
import AdjektivEndungen from "@/components/deutsch-visual/AdjektivEndungen";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

// ─── Types ────────────────────────────────────────────────────────────────────
type VisualType =
  | "genus-sort"
  | "satz-ordnen"
  | "bild-beschriften"
  | "fehler-finden"
  | "wortfamilien-baum"
  | "geschichte-sortieren"
  | "wortarten-sortieren"
  | "zeitformen-zuordnen"
  | "satzglied-markieren"
  | "kasus-markieren"
  | "adjektiv-endungen";

// Specific data shapes per visual type
type BildBeschriftenData = {
  imageKey: string;
  nomen: string;
  options: string[];
  correct: number;
};
type GeschichteData = {
  sentences: string[];
  shuffledOrder: number[];
};

interface VisualTask {
  type: VisualType;
  data: unknown;
  correctAnswer: string; // what we compare userAnswer against
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface DeutschVisualGameProps {
  klasse: 2 | 3 | 4;
  color: string;
  lang: string;
  onDone: (score: number, total: number) => void;
}

// ─── Labels ───────────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  de: {
    check: "Prüfen ✓",
    next: "Weiter →",
    correct: "Richtig! ✓",
    wrong: "Leider falsch",
    done: "Fertig!",
    score: "Punkte",
    task: "Aufgabe",
    instruction_genus: "Wähle den richtigen Artikel!",
    instruction_satz: "Ordne die Wörter!",
    instruction_bild: "Was siehst du auf dem Bild?",
    instruction_fehler: "Finde den Fehler!",
    instruction_wortfamilien: "Welche Wörter gehören zur Familie?",
    instruction_geschichte: "Bringe die Sätze in die richtige Reihenfolge!",
    instruction_wortarten: "Bestimme die Wortart!",
    instruction_zeitformen: "Welche Zeitform ist das?",
    instruction_satzglied: "Bestimme die Satzglieder!",
    instruction_kasus: "Bestimme den Fall!",
    instruction_adjektiv: "Welche Endung passt?",
  },
  en: {
    check: "Check ✓",
    next: "Next →",
    correct: "Correct! ✓",
    wrong: "Not quite",
    done: "Done!",
    score: "Score",
    task: "Task",
    instruction_genus: "Choose the correct article!",
    instruction_satz: "Put the words in order!",
    instruction_bild: "What do you see?",
    instruction_fehler: "Find the mistake!",
    instruction_wortfamilien: "Which words belong to the family?",
    instruction_geschichte: "Put the sentences in order!",
    instruction_wortarten: "Identify the word class!",
    instruction_zeitformen: "What tense is this?",
    instruction_satzglied: "Identify sentence parts!",
    instruction_kasus: "What case is this?",
    instruction_adjektiv: "Which ending fits?",
  },
  hu: {
    check: "Ellenőrzés ✓",
    next: "Tovább →",
    correct: "Helyes! ✓",
    wrong: "Sajnos nem",
    done: "Kész!",
    score: "Pont",
    task: "Feladat",
    instruction_genus: "Válaszd ki a helyes névelőt!",
    instruction_satz: "Rakd sorba a szavakat!",
    instruction_bild: "Mit látsz a képen?",
    instruction_fehler: "Keresd meg a hibát!",
    instruction_wortfamilien: "Melyik szavak tartoznak a családhoz?",
    instruction_geschichte: "Rakd sorba a mondatokat!",
    instruction_wortarten: "Határozd meg a szófajt!",
    instruction_zeitformen: "Milyen igeidő ez?",
    instruction_satzglied: "Határozd meg a mondatrészeket!",
    instruction_kasus: "Milyen eset ez?",
    instruction_adjektiv: "Melyik végződés illik?",
  },
  ro: {
    check: "Verifică ✓",
    next: "Înainte →",
    correct: "Corect! ✓",
    wrong: "Nu chiar",
    done: "Gata!",
    score: "Puncte",
    task: "Exercițiu",
    instruction_genus: "Alege articolul corect!",
    instruction_satz: "Pune cuvintele în ordine!",
    instruction_bild: "Ce vezi în imagine?",
    instruction_fehler: "Găsește greșeala!",
    instruction_wortfamilien: "Care cuvinte aparțin familiei?",
    instruction_geschichte: "Pune propozițiile în ordine!",
    instruction_wortarten: "Identifică clasa de cuvinte!",
    instruction_zeitformen: "Ce timp verbal este?",
    instruction_satzglied: "Identifică părțile de propoziție!",
    instruction_kasus: "Ce caz este?",
    instruction_adjektiv: "Care terminație se potrivește?",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Extended task data for satz-ordnen: store shuffled words at build time
interface SatzOrdnenTaskData extends SatzOrdnenItem {
  shuffledWords: string[];
}

// ─── Task builder ─────────────────────────────────────────────────────────────
function buildTasks(klasse: 2 | 3 | 4): VisualTask[] {
  const tasks: VisualTask[] = [];

  if (klasse === 2) {
    // K2: genus-sort(3), satz-ordnen(2), bild-beschriften(2), fehler-finden(1)
    genGenusSortierung(3).forEach((item: GenusSortItem) => {
      tasks.push({ type: "genus-sort", data: item, correctAnswer: item.artikel });
    });
    genSatzOrdnen(2).forEach((item: SatzOrdnenItem) => {
      const data: SatzOrdnenTaskData = { ...item, shuffledWords: shuffleArr(item.words) };
      tasks.push({ type: "satz-ordnen", data, correctAnswer: item.words.join(" ") });
    });
    genBildBeschriften(2).forEach((item: BildBeschriftenData) => {
      // correctAnswer = the correct phrase string (what BildBeschriften sends via onAnswer)
      tasks.push({ type: "bild-beschriften", data: item, correctAnswer: item.options[item.correct] });
    });
    genFehlerFinden(1).forEach((item: FehlerFindenItem) => {
      tasks.push({ type: "fehler-finden", data: item, correctAnswer: String(item.errorIndex) });
    });
  } else if (klasse === 3) {
    // K3: wortarten(2), zeitformen(2), satzglied(2), wortfamilien(1), geschichte(1)
    genWortartenSortieren(2).forEach((item: WortartenItem) => {
      tasks.push({ type: "wortarten-sortieren", data: item, correctAnswer: item.categories.join(",") });
    });
    genZeitformenZuordnen(2).forEach((item: ZeitformItem) => {
      tasks.push({ type: "zeitformen-zuordnen", data: item, correctAnswer: item.zeitform });
    });
    genSatzgliedMarkieren(2).forEach((item: SatzgliedItem) => {
      tasks.push({ type: "satzglied-markieren", data: item, correctAnswer: item.labels.join(",") });
    });
    genWortfamilienBaum(1).forEach((item: WortfamilieItem) => {
      const sorted = [...item.correctIndices].sort((a, b) => a - b).join(",");
      tasks.push({ type: "wortfamilien-baum", data: item, correctAnswer: sorted });
    });
    genGeschichteSortieren(1).forEach((item: GeschichteData) => {
      const correctOrder = item.sentences.map((_, i) => i).join(",");
      tasks.push({ type: "geschichte-sortieren", data: item, correctAnswer: correctOrder });
    });
  } else {
    // K4: kasus(4), adjektiv-endungen(4)
    genKasusMarkieren(4).forEach((item: KasusItem) => {
      tasks.push({ type: "kasus-markieren", data: item, correctAnswer: item.kasus });
    });
    genAdjektivEndungen(4).forEach((item: AdjektivEndungItem) => {
      tasks.push({ type: "adjektiv-endungen", data: item, correctAnswer: item.ending });
    });
  }

  return tasks;
}

// ─── Instruction key per type ─────────────────────────────────────────────────
const INSTRUCTION_KEY: Record<VisualType, string> = {
  "genus-sort":         "instruction_genus",
  "satz-ordnen":        "instruction_satz",
  "bild-beschriften":   "instruction_bild",
  "fehler-finden":      "instruction_fehler",
  "wortfamilien-baum":  "instruction_wortfamilien",
  "geschichte-sortieren":"instruction_geschichte",
  "wortarten-sortieren":"instruction_wortarten",
  "zeitformen-zuordnen":"instruction_zeitformen",
  "satzglied-markieren":"instruction_satzglied",
  "kasus-markieren":    "instruction_kasus",
  "adjektiv-endungen":  "instruction_adjektiv",
};

// ─── Answer checking ──────────────────────────────────────────────────────────
function checkAnswer(type: VisualType, userAnswer: string, correctAnswer: string): boolean {
  if (!userAnswer) return false;

  if (type === "wortfamilien-baum") {
    // Compare sorted comma-separated index sets
    const userSet = userAnswer.split(",").map(Number).filter((n) => !isNaN(n)).sort((a, b) => a - b).join(",");
    const corrSet = correctAnswer.split(",").map(Number).filter((n) => !isNaN(n)).sort((a, b) => a - b).join(",");
    return userSet === corrSet;
  }

  return userAnswer.trim() === correctAnswer.trim();
}

// ─── Task renderer ────────────────────────────────────────────────────────────
interface TaskRendererProps {
  task: VisualTask;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

function TaskRenderer({ task, userAnswer, submitted, onAnswer }: TaskRendererProps) {
  switch (task.type) {
    case "genus-sort": {
      const d = task.data as GenusSortItem;
      return (
        <GenusSortierung
          word={d.word}
          correct={d.artikel}
          userAnswer={userAnswer}
          submitted={submitted}
          onAnswer={onAnswer}
        />
      );
    }
    case "satz-ordnen": {
      const d = task.data as SatzOrdnenTaskData;
      return (
        <SatzOrdnen
          shuffled={d.shuffledWords}
          answer={d.words.join(" ")}
          userAnswer={userAnswer}
          submitted={submitted}
          onAnswer={onAnswer}
        />
      );
    }
    case "bild-beschriften": {
      const d = task.data as BildBeschriftenData;
      return (
        <BildBeschriften
          imageKey={d.imageKey}
          options={d.options}
          correct={d.correct}
          userAnswer={userAnswer}
          submitted={submitted}
          onAnswer={onAnswer}
        />
      );
    }
    case "fehler-finden": {
      const d = task.data as FehlerFindenItem;
      return (
        <FehlerFinden
          words={d.words}
          errorIndex={d.errorIndex}
          hint={d.hint}
          userAnswer={userAnswer}
          submitted={submitted}
          onAnswer={onAnswer}
        />
      );
    }
    case "wortfamilien-baum": {
      const d = task.data as WortfamilieItem;
      return (
        <WortfamilienBaum
          stamm={d.stamm}
          options={d.options}
          correctSet={d.correctIndices}
          userAnswer={userAnswer}
          submitted={submitted}
          onAnswer={onAnswer}
        />
      );
    }
    case "geschichte-sortieren": {
      const d = task.data as GeschichteData;
      return (
        <GeschichteSortieren
          sentences={d.sentences}
          shuffledOrder={d.shuffledOrder}
          userAnswer={userAnswer}
          submitted={submitted}
          onAnswer={onAnswer}
        />
      );
    }
    case "wortarten-sortieren": {
      const d = task.data as WortartenItem;
      return (
        <WortartenSortieren
          words={d.words}
          categories={d.categories}
          userAnswer={userAnswer}
          submitted={submitted}
          onAnswer={onAnswer}
        />
      );
    }
    case "zeitformen-zuordnen": {
      const d = task.data as ZeitformItem;
      return (
        <ZeitformenZuordnen
          sentence={d.sentence}
          correctZeitform={d.zeitform}
          userAnswer={userAnswer}
          submitted={submitted}
          onAnswer={onAnswer}
        />
      );
    }
    case "satzglied-markieren": {
      const d = task.data as SatzgliedItem;
      return (
        <SatzgliedMarkieren
          words={d.words}
          correctLabels={d.labels}
          userAnswer={userAnswer}
          submitted={submitted}
          onAnswer={onAnswer}
        />
      );
    }
    case "kasus-markieren": {
      const d = task.data as KasusItem;
      return (
        <KasusMarkieren
          sentence={d.sentence}
          highlight={d.highlight}
          correctKasus={d.kasus}
          userAnswer={userAnswer}
          submitted={submitted}
          onAnswer={onAnswer}
        />
      );
    }
    case "adjektiv-endungen": {
      const d = task.data as AdjektivEndungItem;
      return (
        <AdjektivEndungen
          phrase={d.phrase}
          stem={d.stem}
          correctEnding={d.ending}
          userAnswer={userAnswer}
          submitted={submitted}
          onAnswer={onAnswer}
        />
      );
    }
    default:
      return null;
  }
}

// ─── Done screen ──────────────────────────────────────────────────────────────
function DoneScreen({
  score,
  total,
  color,
  lang,
  onDone,
}: {
  score: number;
  total: number;
  color: string;
  lang: string;
  onDone: (score: number, total: number) => void;
}) {
  const t = LABELS[lang] ?? LABELS.de;
  const pct = score / total;
  const stars = pct >= 0.875 ? 3 : pct >= 0.625 ? 2 : 1;
  const msgs: Record<string, string[]> = {
    de: ["Weiter so! 💪", "Sehr gut! ⭐⭐", "Fantastisch! ⭐⭐⭐"],
    en: ["Keep going! 💪", "Very good! ⭐⭐", "Perfect! ⭐⭐⭐"],
    hu: ["Tovább! 💪", "Nagyon jó! ⭐⭐", "Tökéletes! ⭐⭐⭐"],
    ro: ["Continuă! 💪", "Foarte bine! ⭐⭐", "Perfect! ⭐⭐⭐"],
  };
  const msg = (msgs[lang] ?? msgs.de)[stars - 1];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", damping: 18, stiffness: 260 }}
      className="flex flex-col items-center gap-6 py-10 px-6"
    >
      {/* Score ring */}
      <div className="relative flex items-center justify-center w-32 h-32">
        <svg width="128" height="128" viewBox="0 0 128 128" className="absolute inset-0">
          <circle cx="64" cy="64" r="54" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
          <circle
            cx="64" cy="64" r="54"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 54}`}
            strokeDashoffset={`${2 * Math.PI * 54 * (1 - score / total)}`}
            transform="rotate(-90 64 64)"
            style={{ filter: `drop-shadow(0 0 6px ${color})` }}
          />
        </svg>
        <div className="text-center z-10">
          <div className="text-4xl font-black" style={{ color }}>{score}</div>
          <div className="text-sm font-bold text-white/40">/{total}</div>
        </div>
      </div>

      <p className="text-xl font-black text-white/90 text-center">{msg}</p>

      <motion.button
        onClick={() => onDone(score, total)}
        className="w-full max-w-xs py-4 rounded-2xl font-black text-white text-base flex items-center justify-center gap-2 active:scale-95 transition-transform"
        style={{
          background: `linear-gradient(135deg, ${color}55, ${color}AA)`,
          border: `2px solid ${color}`,
          boxShadow: `0 0 20px ${color}40`,
        }}
        whileTap={{ scale: 0.96 }}
      >
        {t.done} <ChevronRight size={18} />
      </motion.button>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
const DeutschVisualGame = memo(function DeutschVisualGame({
  klasse,
  color,
  lang = "de",
  onDone,
}: DeutschVisualGameProps) {
  const t = LABELS[lang] ?? LABELS.de;

  // Build tasks once on mount
  const [tasks] = useState<VisualTask[]>(() => buildTasks(klasse));
  const total = tasks.length;

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [done, setDone] = useState(false);

  // Prevent double-submit via ref
  const submittedRef = useRef(false);

  // Reset answer state when task index changes
  useEffect(() => {
    setUserAnswer("");
    setSubmitted(false);
    setIsCorrect(false);
    submittedRef.current = false;
  }, [idx]);

  const advance = useCallback(() => {
    setIdx((prev) => {
      const next = prev + 1;
      if (next >= total) {
        setDone(true);
        return prev;
      }
      return next;
    });
  }, [total]);

  const handleCheck = useCallback(() => {
    if (submittedRef.current || !userAnswer) return;
    submittedRef.current = true;

    const task = tasks[idx];
    const correct = checkAnswer(task.type, userAnswer, task.correctAnswer);
    setIsCorrect(correct);
    setSubmitted(true);
    if (correct) setScore((s) => s + 1);

    // Auto-advance after 1.1s
    setTimeout(advance, 1100);
  }, [userAnswer, tasks, idx, advance]);

  // ── Can user submit? Answer is "ready" when non-empty
  // For multi-select types (wortfamilien), any selection counts.
  // For ordering types (satz-ordnen, geschichte), require at least one word placed.
  const canCheck = Boolean(userAnswer);

  if (done) {
    return (
      <div className="min-h-screen bg-[#060614] flex flex-col items-center justify-center">
        <DoneScreen
          score={score}
          total={total}
          color={color}
          lang={lang}
          onDone={onDone}
        />
      </div>
    );
  }

  const task = tasks[idx];
  const instruction = t[INSTRUCTION_KEY[task.type]] ?? "";

  // Progress fraction
  const progressPct = ((idx + (submitted ? 1 : 0)) / total) * 100;

  return (
    <div className="min-h-screen bg-[#060614] flex flex-col">
      {/* ── Header ── */}
      <div className="shrink-0 px-4 pt-safe-top pt-4 pb-3 flex items-center gap-3">
        {/* Exit */}
        <button
          onClick={() => onDone(score, total)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors shrink-0"
        >
          <X size={14} />
        </button>

        {/* Progress bar */}
        <div className="flex-1 relative">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: color }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          {/* Dot indicators */}
          <div className="absolute inset-0 flex items-center">
            {tasks.map((_, i) => (
              <div
                key={i}
                className="flex-1 flex justify-center"
              >
                {i < idx ? (
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: color }}
                  />
                ) : i === idx ? (
                  <div
                    className="w-2 h-2 rounded-full border-2"
                    style={{ borderColor: color, background: "#060614" }}
                  />
                ) : (
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Score */}
        <div className="shrink-0 text-sm font-black" style={{ color }}>
          {score}
          <span className="text-white/30 font-normal">/{total}</span>
        </div>
      </div>

      {/* ── Task area ── */}
      <div className="flex-1 flex items-start justify-center px-4 py-2 overflow-y-auto">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {/* White paper card */}
              <div
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                style={{
                  boxShadow: submitted
                    ? isCorrect
                      ? "0 8px 32px rgba(16,185,129,0.25), 0 0 0 2px #10b981"
                      : "0 8px 32px rgba(239,68,68,0.25), 0 0 0 2px #ef4444"
                    : "0 8px 32px rgba(0,0,0,0.5)",
                }}
              >
                {/* Card top bar */}
                <div
                  className="px-4 py-2.5 flex items-center justify-between"
                  style={{
                    background: submitted
                      ? isCorrect
                        ? "linear-gradient(90deg, #10b981 0%, #059669 100%)"
                        : "linear-gradient(90deg, #ef4444 0%, #dc2626 100%)"
                      : `linear-gradient(90deg, ${color}CC 0%, ${color}88 100%)`,
                  }}
                >
                  <span className="text-white/90 text-xs font-bold uppercase tracking-wide">
                    {t.task} {idx + 1} / {total}
                  </span>
                  {submitted && (
                    <motion.span
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-white font-black text-sm"
                    >
                      {isCorrect ? t.correct : t.wrong}
                    </motion.span>
                  )}
                </div>

                {/* Instruction */}
                <div className="px-4 pt-3 pb-1">
                  <p className="text-sm font-bold text-slate-700">{instruction}</p>
                </div>

                {/* Visual component */}
                <div className="px-3 pb-3 pt-1">
                  <TaskRenderer
                    task={task}
                    userAnswer={userAnswer}
                    submitted={submitted}
                    onAnswer={setUserAnswer}
                  />
                </div>

                {/* Check button */}
                <AnimatePresence>
                  {!submitted && canCheck && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="px-4 pb-4"
                    >
                      <button
                        onClick={handleCheck}
                        className="w-full py-3 rounded-xl font-black text-white text-sm active:scale-[0.98] transition-transform"
                        style={{
                          background: `linear-gradient(135deg, ${color}DD, ${color})`,
                          boxShadow: `0 4px 14px ${color}55`,
                        }}
                      >
                        {t.check}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submitted — result flash */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-4 pb-4"
                  >
                    <div
                      className="w-full py-2.5 rounded-xl font-black text-sm text-center"
                      style={{
                        background: isCorrect ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.10)",
                        border: `1px solid ${isCorrect ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}`,
                        color: isCorrect ? "#10b981" : "#ef4444",
                      }}
                    >
                      {isCorrect ? "✓ " + t.correct : "✗ " + t.wrong}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Hint: answer not yet ready */}
              {!submitted && !canCheck && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-white/30 text-xs mt-3 font-medium"
                >
                  {lang === "de"
                    ? "Wähle eine Antwort…"
                    : lang === "hu"
                    ? "Válassz egy választ…"
                    : lang === "ro"
                    ? "Alege un răspuns…"
                    : "Choose an answer…"}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Starfield decoration ── */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: i % 5 === 0 ? 2 : 1,
              height: i % 5 === 0 ? 2 : 1,
              left: `${(i * 17 + 7) % 100}%`,
              top: `${(i * 23 + 11) % 100}%`,
              opacity: 0.15 + (i % 4) * 0.07,
            }}
          />
        ))}
      </div>
    </div>
  );
});

export default DeutschVisualGame;
