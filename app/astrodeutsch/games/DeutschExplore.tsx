"use client";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { fireWrongAnswer } from "@/components/AITutorOverlay";
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
import LueckenText from "@/components/deutsch-visual/LueckenText";
import SatzgefugeDiagram from "@/components/deutsch-visual/SatzgefugeDiagram";
import EpochenZeitstrahl from "@/components/deutsch-visual/EpochenZeitstrahl";
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
  genLueckenText,
  genSatzgefuge,
  genEpochenZeitstrahl,
} from "@/lib/deutschVisualGenerators";
import type { IslandDef } from "@/lib/astromath";

interface DeutschExploreProps {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
}

// ─── Task type registry ───────────────────────────────────────────────────────
type TaskType =
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
  | "adjektiv-endungen"
  | "luecken-text"
  | "satzgefuge"
  | "epochen-zeitstrahl";

interface TaskConfig {
  type: TaskType;
  Component: React.ComponentType<any>;
  generator: () => any;
}

// ─── Correct-answer checker ───────────────────────────────────────────────────
function checkCorrect(type: TaskType, task: any, userAnswer: string): boolean {
  if (!userAnswer || userAnswer.trim() === "") return false;

  switch (type) {
    case "genus-sort":
      // task: GenusSortItem { word, artikel }
      // GenusSortierung maps "der"→"M", "die"→"F", "das"→"N" internally but onAnswer sends the artikel string
      return userAnswer === task.artikel;

    case "satz-ordnen": {
      // task: SatzOrdnenItem { shuffled, answer }
      // The component builds a sentence and sends it as joined string
      return userAnswer === task.answer;
    }

    case "bild-beschriften":
      // task: { imageKey, nomen, options, correct: number }
      // onAnswer sends the selected option string
      return userAnswer === task.options[task.correct];

    case "fehler-finden":
      // task: FehlerFindenItem { words, errorIndex, hint }
      // onAnswer sends the index as a string
      return parseInt(userAnswer) === task.errorIndex;

    case "wortfamilien-baum": {
      // task: WortfamilieItem { stamm, words, correctSet: string[] }
      // onAnswer sends sorted selected indices as e.g. "0,1,3"
      const correctIndices = task.words
        .map((w: string, i: number) => (task.correctSet.includes(w) ? i : -1))
        .filter((i: number) => i !== -1)
        .sort((a: number, b: number) => a - b)
        .join(",");
      const userIndices = userAnswer
        .split(",")
        .map((s: string) => parseInt(s))
        .sort((a: number, b: number) => a - b)
        .join(",");
      return userIndices === correctIndices;
    }

    case "geschichte-sortieren": {
      // task: { sentences, shuffledOrder }
      // onAnswer sends the "correct" order = 0,1,2,...
      const expected = task.sentences.map((_: any, i: number) => i).join(",");
      return userAnswer === expected;
    }

    case "wortarten-sortieren":
      // task: WortartenItem { words, categories: ('N'|'V'|'A')[] }
      // onAnswer sends categories.join(",")
      return userAnswer === task.categories.join(",");

    case "zeitformen-zuordnen":
      // task: ZeitformItem { sentence, zeitform: 'pres'|'praet'|'perf' }
      // onAnswer sends the zeitform key
      return userAnswer === task.zeitform;

    case "satzglied-markieren":
      // task: SatzgliedItem { words, labels }
      // onAnswer sends labels.join(",")
      return userAnswer === task.labels.join(",");

    case "kasus-markieren":
      // task: KasusItem { sentence, highlight, kasus: 'N'|'A'|'D'|'G' }
      // onAnswer sends the kasus key
      return userAnswer === task.kasus;

    case "adjektiv-endungen":
      // task: AdjektivEndungItem { phrase, stem, ending }
      // onAnswer sends the ending string
      return userAnswer === task.ending;

    case "luecken-text":
      // task: LueckenTextItem { sentence, options, correct: number }
      // onAnswer sends correct index as string
      return parseInt(userAnswer) === task.correct;

    case "satzgefuge":
      // task: SatzgefugeItem { hauptsatz, nebensatz, konjunktion, options, correct: number }
      // onAnswer sends correct index as string
      return parseInt(userAnswer) === task.correct;

    case "epochen-zeitstrahl":
      // task: EpochenItem { author, hint, options, correct: number }
      // onAnswer sends correct index as string
      return parseInt(userAnswer) === task.correct;

    default:
      return false;
  }
}

// ─── Topic key → TaskConfig mapping ──────────────────────────────────────────
function getTaskConfig(topicKey: string): TaskConfig {
  const topic = topicKey.split("/")[0];
  const subtopic = topicKey.split("/")[1] || "";

  // ── KASUS (K4) — legyen legelöl, mert "kasus" topic neve egyértelmű ──────────
  if (topic === "kasus") {
    return { type: "kasus-markieren", Component: KasusMarkieren, generator: () => genKasusMarkieren(1)[0] };
  }

  // ── SATZGLIEDER (K3-K5) ───────────────────────────────────────────────────
  if (topic === "satzglieder_k3" || topic === "satzglieder_k4" || topic === "satzglieder_k5") {
    return { type: "satzglied-markieren", Component: SatzgliedMarkieren, generator: () => genSatzgliedMarkieren(1)[0] };
  }

  // ── ZEITFORMEN (K3-K5) ────────────────────────────────────────────────────
  if (
    topic === "zeitformen_k3" || topic === "zeitformen_k4" || topic === "zeitformen_k5" ||
    subtopic === "zeitformen_komplett_k3" || subtopic === "praeteritum_k3"
  ) {
    return { type: "zeitformen-zuordnen", Component: ZeitformenZuordnen, generator: () => genZeitformenZuordnen(1)[0] };
  }

  // ── ADJEKTIV-ENDUNGEN (K4-K5) ─────────────────────────────────────────────
  if (
    topic === "adjektiv" || topic === "adjektiv_k5" ||
    subtopic === "adjektivendungen_k4" || subtopic === "adjektivdeklination_k5"
  ) {
    return { type: "adjektiv-endungen", Component: AdjektivEndungen, generator: () => genAdjektivEndungen(1)[0] };
  }

  // ── ARTIKEL / GENUS (K1-K4) ───────────────────────────────────────────────
  if (
    (topic === "woerter" && (subtopic === "artikel_k1" || subtopic === "artikel_k2" || subtopic === "artikel_k3")) ||
    (topic === "wortarten_k2" && subtopic === "artikel_k2") ||
    (topic === "wortarten_k2" && subtopic === "nomen_k2") ||
    (topic === "wortarten_k2" && subtopic === "plural_k2")
  ) {
    return { type: "genus-sort", Component: GenusSortierung, generator: () => genGenusSortierung(1)[0] };
  }

  // ── WORTARTEN SORTIEREN (K2-K5) ───────────────────────────────────────────
  if (
    topic === "wortarten_k3" ||
    topic === "wortarten_k4" ||
    topic === "wortarten_k5" ||
    (topic === "wortarten_k2" && subtopic !== "artikel_k2" && subtopic !== "nomen_k2" && subtopic !== "plural_k2") ||
    topic === "eigenschafte_adjektive" ||
    topic === "synonyme_antonyme" ||
    topic === "wortschatz_expansion_k2" ||
    topic === "verben_k4"
  ) {
    return { type: "wortarten-sortieren", Component: WortartenSortieren, generator: () => genWortartenSortieren(1)[0] };
  }

  // ── WORTFAMILIEN (K2-K3) ─────────────────────────────────────────────────
  if (
    subtopic === "wortfamilien_k2" || subtopic === "wortfamilien_k3" ||
    subtopic === "komposita_k1" || subtopic === "komposita_k2" ||
    (topic === "wortarten_k3" && subtopic === "wortfamilien_k3")
  ) {
    return { type: "wortfamilien-baum", Component: WortfamilienBaum, generator: () => genWortfamilienBaum(1)[0] };
  }

  // ── RECHTSCHREIBUNG / BUCHSTABEN / GROSSSCHREIBUNG → FehlerFinden ─────────
  if (
    topic === "buchstaben" ||
    topic === "rechtschreibung" ||
    topic === "rechtschreibung_k2" ||
    topic === "rechtschreibung_k3" ||
    topic === "rechtschreibung_k4" ||
    topic === "rechtschreibung_k5"
  ) {
    return { type: "fehler-finden", Component: FehlerFinden, generator: () => genFehlerFinden(1)[0] };
  }

  // ── BILD BESCHRIFTEN — Wortschatz / Farben / Zahlen (K1-K3) ──────────────
  if (
    topic === "farben_k1" || topic === "zahlen_woerter_k1" ||
    topic === "kleidung" ||
    (topic === "woerter" && (subtopic === "wortschatz_k1" || subtopic === "wortschatz_k2")) ||
    topic === "wortschatz_alltag_k3"
  ) {
    return { type: "bild-beschriften", Component: BildBeschriften, generator: () => genBildBeschriften(1)[0] };
  }

  // ── LÜCKENTEXT — fehlende Wörter / Satzzeichen (K1-K2) ───────────────────
  if (
    topic === "saetze_k1" || topic === "saetze_k2" ||
    subtopic === "fehlende_buchstaben" || subtopic === "fehlende_woerter_k1" ||
    subtopic === "lueckentext"
  ) {
    return { type: "luecken-text", Component: LueckenText, generator: () => genLueckenText(1)[0] };
  }

  // ── GESCHICHTE SORTIEREN — Texte (K2-K3) ─────────────────────────────────
  if (
    topic === "texte" || subtopic === "textarbeit" ||
    subtopic === "geschichten_k2" || subtopic === "direkte_rede_k3"
  ) {
    return { type: "geschichte-sortieren", Component: GeschichteSortieren, generator: () => genGeschichteSortieren(1)[0] };
  }

  // ── SATZGEFÜGE / NEBENSÄTZE (K4-K5) ─────────────────────────────────────
  if (topic === "satzgefuge" || topic === "zeichensetzung_k5" || topic === "nebensatz") {
    return { type: "satzgefuge", Component: SatzgefugeDiagram, generator: () => genSatzgefuge(1)[0] };
  }

  // ── LITERATUREPOCHEN (K6-K8) ──────────────────────────────────────────────
  if (topic === "literatur" || topic === "epochen" || subtopic === "epochen") {
    return { type: "epochen-zeitstrahl", Component: EpochenZeitstrahl, generator: () => genEpochenZeitstrahl(1)[0] };
  }

  // ── SATZ ORDNEN — Satzstruktur / Satzarten (K2-K4) ───────────────────────
  if (
    topic === "saetze" || topic === "saetze_k3" || topic === "saetze_k4" ||
    subtopic === "wortstellung_k2" || subtopic === "satzarten" ||
    subtopic === "fragewörter_k2" || subtopic === "satzbau_k3"
  ) {
    return { type: "satz-ordnen", Component: SatzOrdnen, generator: () => genSatzOrdnen(1)[0] };
  }

  // ── DEFAULT: genus sort ────────────────────────────────────────────────────
  return { type: "genus-sort", Component: GenusSortierung, generator: () => genGenusSortierung(1)[0] };
}

// ─── Normalize task fields to match component prop names ─────────────────────
function normalizeProps(type: TaskType, task: any): Record<string, any> {
  const base = { ...task };
  switch (type) {
    case "genus-sort":
      // GenusSortItem.artikel → GenusSortierung expects "correct"
      return { ...base, correct: task.artikel };
    case "wortfamilien-baum":
      // WortfamilieItem.correctIndices → WortfamilienBaum expects "correctSet"
      return { ...base, correctSet: task.correctIndices };
    case "zeitformen-zuordnen":
      // ZeitformItem.zeitform → ZeitformenZuordnen expects "correctZeitform"
      return { ...base, correctZeitform: task.zeitform };
    case "satzglied-markieren":
      // SatzgliedItem.labels → SatzgliedMarkieren expects "correctLabels"
      return { ...base, correctLabels: task.labels };
    case "kasus-markieren":
      // KasusItem.kasus → KasusMarkieren expects "correctKasus"
      return { ...base, correctKasus: task.kasus };
    case "adjektiv-endungen":
      // AdjektivEndungItem.ending → AdjektivEndungen expects "correctEnding"
      return { ...base, correctEnding: task.ending };
    default:
      return base;
  }
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function DeutschExplore({ island, grade, onDone }: DeutschExploreProps) {
  const [taskIndex, setTaskIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [tasks, setTasks] = useState<any[]>([]);
  const [correct, setCorrect] = useState(0);

  // Generate all 8 tasks on mount
  React.useEffect(() => {
    const generatedTasks: any[] = [];
    const topicKey = island.topicKeys[0] || "woerter/artikel_k1";
    const { generator } = getTaskConfig(topicKey);

    for (let i = 0; i < 8; i++) {
      generatedTasks.push(generator());
    }
    setTasks(generatedTasks);
  }, [island]);

  // Derive topic config (stable — depends only on island)
  const topicKey = island.topicKeys[0] || "woerter/artikel_k1";
  const { type, Component } = getTaskConfig(topicKey);
  const currentTask = tasks[taskIndex] ?? null;

  const handleCheck = useCallback(() => {
    if (!currentTask) return;
    const isAnswerCorrect = checkCorrect(type, currentTask, userAnswer);
    setIsCorrect(isAnswerCorrect);
    setSubmitted(true);

    if (!isAnswerCorrect) {
      fireWrongAnswer({
        question: `Task ${taskIndex + 1}`,
        wrongAnswer: String(userAnswer ?? ""),
        correctAnswer: "(richtige Antwort)",
        topic: island.name.de ?? island.name.en ?? "Deutsch",
        lang: "de",
      });
    }

    setTimeout(() => {
      const newCorrect = isAnswerCorrect ? correct + 1 : correct;
      if (isAnswerCorrect) {
        setCorrect(newCorrect);
      }

      if (taskIndex < 7) {
        setTaskIndex((prev) => prev + 1);
        setUserAnswer("");
        setSubmitted(false);
        setIsCorrect(false);
      } else {
        onDone(newCorrect, 8);
      }
    }, 1200);
  }, [userAnswer, taskIndex, correct, onDone, type, currentTask, island]);

  const isLastTask = taskIndex === 7;
  const hasAnswer = userAnswer !== "";

  if (tasks.length === 0 || !currentTask) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Laden...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A1A] via-[#12122A] to-[#0A0A1A] relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              width: (i % 4) * 0.6 + 0.3,
              height: (i % 4) * 0.6 + 0.3,
            }}
            animate={{ opacity: [0.08, 0.9, 0.08] }}
            transition={{
              duration: 1.8 + (i % 6) * 0.5,
              delay: (i % 9) * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 gap-8">
        {/* Header */}
        <motion.div className="text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-4xl mb-2">{island.icon}</div>
          <h2 className="text-2xl font-black text-white mb-1">{island.name.de ?? island.name.en}</h2>
          <p className="text-white/60 text-sm font-medium">
            {taskIndex + 1}/8 Aufgabe
          </p>
        </motion.div>

        {/* Visual component */}
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          key={taskIndex}
        >
          <Component
            {...normalizeProps(type, currentTask)}
            userAnswer={userAnswer}
            onAnswer={setUserAnswer}
            submitted={submitted}
          />
        </motion.div>

        {/* Check button */}
        <motion.button
          onClick={handleCheck}
          disabled={submitted || !hasAnswer}
          className={`px-8 py-3 rounded-xl font-extrabold text-lg transition-all ${
            submitted
              ? "opacity-50 cursor-wait"
              : !hasAnswer
                ? "bg-white/20 text-white/40 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg hover:shadow-xl"
          }`}
          whileHover={hasAnswer && !submitted ? { scale: 1.05 } : {}}
          whileTap={hasAnswer && !submitted ? { scale: 0.95 } : {}}
        >
          {isLastTask ? "Fertig" : submitted ? "Laden..." : "Prüfen ✓"}
        </motion.button>

        {/* Progress bar */}
        <div className="w-full max-w-sm h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${((taskIndex + 1) / 8) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
